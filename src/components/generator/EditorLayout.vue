<script setup>
import { ref, nextTick } from 'vue'
import { useSiteStore } from '../../stores/siteStore.js'
import { supabase } from '../../db/supabase.js'
import QRCode from 'qrcode'
import EditorSidebar from './EditorSidebar.vue'
import PropertiesPanel from './PropertiesPanel.vue'
import SiteRenderer from '../template/SiteRenderer.vue'

const siteStore = useSiteStore()

// State para o editor
const selectedSectionId = ref('hero')
const activeMobileTab = ref('editor')

// State para o fluxo de salvamento
const isLoading = ref(false)
const isDonationModalVisible = ref(false)
const isSuccessModalVisible = ref(false)
const qrCodeDataUrl = ref('')
const generatedSiteUrl = ref('')
const htmlSource = ref(null) // Ref para o renderizador invisível

// --- FUNÇÕES DO FLUXO DE SALVAMENTO ---

function generateFinalHtml(innerHTML) {
  const title = siteStore.clientName || 'Meu Site';
  return `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><script src="https://cdn.tailwindcss.com"><\/script></head><body>${innerHTML}<\/body></html>`;
}

const pixKey = "00020101021126580014br.gov.bcb.pix01366a880e48-561d-41c1-b376-5e9e10712bc352040000530398654045.995802BR5918KLEYSON DE O GOMES6007MACAIBA62070503***630461C3";

async function openDonationModal() {
  qrCodeDataUrl.value = await QRCode.toDataURL(pixKey, { width: 256 });
  isDonationModalVisible.value = true;
}

async function handleSaveAfterDonation() {
  isDonationModalVisible.value = false;
  isLoading.value = true;
  try {
    await nextTick();
    const innerHTML = htmlSource.value?.$el?.innerHTML;
    if (!innerHTML) { throw new Error('Não foi possível gerar o HTML do site.'); }
    const finalHtml = generateFinalHtml(innerHTML);
    const { data, error } = await supabase
      .from('sites')
      .insert({ client_name: siteStore.clientName, content: siteStore.$state, contact_info: siteStore.contact, full_html: finalHtml })
      .select('id')
      .single();
    if (error) { throw error; }
    generatedSiteUrl.value = `${window.location.origin}/${data.id}`;
    isSuccessModalVisible.value = true;
  } catch (error) {
    console.error('Erro ao salvar o site:', error);
    alert(`Ocorreu um erro ao salvar o site: ${error.message}`);
  } finally {
    isLoading.value = false;
  }
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  alert('Copiado para a área de transferência!');
}

function resetAndGoHome() {
  siteStore.resetState();
  // Esta lógica depende do seu router, mas geralmente seria assim:
  // import { useRouter } from 'vue-router'
  // const router = useRouter()
  // router.push('/gerador') // Para reiniciar o fluxo
  window.location.reload(); // A forma mais simples de reiniciar o estado
}
</script>

<template>
  <div class="relative">
    <div class="flex flex-col lg:flex-row h-screen bg-slate-900">
      <EditorSidebar 
        :sections="siteStore.sections" 
        :selected-id="selectedSectionId"
        @select="sectionId => selectedSectionId = sectionId"
      />

      <div class="flex-1 flex flex-col overflow-hidden">
        <div class="hidden lg:grid grid-cols-2 flex-1 overflow-hidden">
          <div class="overflow-y-auto p-8"><PropertiesPanel :selected-id="selectedSectionId" /></div>
          <div class="bg-slate-800 p-4 border-l border-slate-700 overflow-hidden">
            <div class="w-full h-full rounded-lg overflow-y-auto bg-white shadow-2xl"><SiteRenderer :site-data="siteStore.$state" /></div>
          </div>
        </div>

        <div class="lg:hidden flex-1 overflow-y-auto">
          <div v-if="activeMobileTab === 'editor'" class="p-6"><PropertiesPanel :selected-id="selectedSectionId" /></div>
          <div v-if="activeMobileTab === 'preview'" class="h-full bg-slate-800">
            <div class="w-full h-full bg-white"><SiteRenderer :site-data="siteStore.$state" /></div>
          </div>
        </div>
      </div>

      <div class="lg:hidden fixed bottom-0 left-0 right-0 bg-slate-800 border-t border-slate-700 flex z-50">
        <button @click="activeMobileTab = 'editor'" class="flex-1 py-3 text-center text-sm font-bold" :class="activeMobileTab === 'editor' ? 'bg-indigo-600 text-white' : 'text-gray-300'">EDITAR</button>
        <button @click="activeMobileTab = 'preview'" class="flex-1 py-3 text-center text-sm font-bold" :class="activeMobileTab === 'preview' ? 'bg-indigo-600 text-white' : 'text-gray-300'">VISUALIZAR</button>
      </div>
    </div>

    <div class="fixed bottom-20 right-8 z-40 lg:bottom-8">
      <button @click="openDonationModal" :disabled="isLoading" class="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-6 rounded-full text-lg shadow-2xl shadow-indigo-500/30 transform hover:scale-105 transition-transform disabled:opacity-50 disabled:scale-100">
        <svg v-if="isLoading" class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
        <span>{{ isLoading ? 'Salvando...' : 'Salvar e Publicar' }}</span>
      </button>
    </div>

    <div class="absolute -left-[9999px] top-0 w-[1280px]"><SiteRenderer ref="htmlSource" :site-data="siteStore.$state" /></div>

    <div v-if="isDonationModalVisible" class="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-lg shadow-2xl p-8 max-w-sm w-full text-center">
        <h3 class="text-2xl font-bold text-gray-800">Apoie este Projeto!</h3>
        <p class="text-gray-600 mt-2">Sua doação de R$ 5,99 nos ajuda a manter esta ferramenta no ar.</p>
        <div class="my-6"><img :src="qrCodeDataUrl" alt="QR Code PIX" class="mx-auto border-4 border-gray-300 rounded-lg"></div>
        <div>
            <label class="text-sm font-semibold text-gray-700">Ou use o PIX Copia e Cola:</label>
            <div class="relative mt-2">
                <input type="text" readonly :value="pixKey" class="w-full bg-gray-100 border-2 border-gray-200 rounded-md p-2 text-xs text-gray-600 pr-10"/>
                <button @click="copyToClipboard(pixKey)" title="Copiar código" class="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500 hover:text-blue-600"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg></button>
            </div>
        </div>
        <div class="mt-8 space-y-3">
            <button @click="handleSaveAfterDonation" class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition-transform transform hover:scale-105">Fiz minha doação, publicar site!</button>
            <button @click="isDonationModalVisible = false" class="w-full text-sm text-gray-500 hover:text-gray-800">Talvez depois</button>
        </div>
      </div>
    </div>
    <div v-if="isSuccessModalVisible" class="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-lg shadow-2xl p-8 max-w-lg w-full text-center transform transition-all scale-100">
        <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100"><svg class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg></div>
        <h3 class="text-2xl font-bold text-gray-800 mt-4">Site Publicado com Sucesso!</h3>
        <p class="text-gray-600 mt-2">Seu site já está no ar e pode ser acessado e compartilhado através do link abaixo.</p>
        <div class="mt-6">
          <label class="text-sm font-semibold text-gray-700">URL do seu site:</label>
          <div class="relative mt-2">
              <input type="text" readonly :value="generatedSiteUrl" class="w-full bg-gray-100 border-2 border-gray-200 rounded-md p-3 text-sm text-gray-800 font-mono pr-12"/>
              <button @click="copyToClipboard(generatedSiteUrl)" title="Copiar URL" class="absolute inset-y-0 right-0 px-4 flex items-center text-gray-500 hover:text-blue-600"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg></button>
          </div>
        </div>
        <div class="mt-8 space-y-3 sm:space-y-0 sm:flex sm:flex-row-reverse sm:gap-4">
          <a :href="generatedSiteUrl" target="_blank" class="w-full sm:w-auto inline-flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">Acessar meu Site</a>          
        </div>
      </div>
    </div>
  </div>
</template>