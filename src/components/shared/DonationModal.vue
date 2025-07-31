// src/components/shared/DonationModal.vue
<script setup>
import { useUiStore } from '@/stores/uiStore.js'

const uiStore = useUiStore()

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  alert('Código PIX copiado para a área de transferência!');
}
</script>

<template>
  <div v-if="uiStore.isDonationModalOpen" @click="uiStore.closeDonationModal()" class="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-fade-in">
    <div @click.stop class="bg-white rounded-lg shadow-2xl p-8 max-w-sm w-full text-center transform transition-transform scale-100 animate-scale-in">
      <h3 class="text-2xl font-bold text-gray-800">Apoie este Projeto</h3>
      <p class="text-gray-600 mt-2">Sua doação ajuda a manter esta ferramenta gratuita e em constante evolução.</p>

      <div class="my-6">
        <img v-if="uiStore.qrCodeDataUrl" :src="uiStore.qrCodeDataUrl" alt="QR Code PIX" class="mx-auto border-4 border-gray-300 rounded-lg">
        <p v-else class="text-gray-500">Gerando QR Code...</p>
      </div>
      
      <div>
        <label class="text-sm font-semibold text-gray-700">Ou use o PIX Copia e Cola:</label>
        <div class="relative mt-2">
            <input type="text" readonly :value="uiStore.pixKey" class="w-full bg-gray-100 border-2 border-gray-200 rounded-md p-2 text-xs text-gray-600 pr-10"/>
            <button @click="copyToClipboard(uiStore.pixKey)" title="Copiar código" class="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
            </button>
        </div>
      </div>

      <div class="mt-8">
          <button @click="uiStore.closeDonationModal()" class="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 rounded-lg">
              Fechar
          </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
.animate-fade-in { animation: fade-in 0.2s ease-out forwards; }
@keyframes scale-in { from { transform: scale(0.95); } to { transform: scale(1); } }
.animate-scale-in { animation: scale-in 0.2s ease-out forwards; }
</style>