<script setup>
import { computed } from 'vue'
import { useSiteStore } from '@/stores/siteStore.js'

const props = defineProps({ sectionId: Number })
const siteStore = useSiteStore()

const section = computed(() => siteStore.sections.find(s => s.id === props.sectionId))

function addImageUrl() { 
  if (section.value) { section.value.images.push({ id: Date.now(), url: '' }); }
}
function removeImageUrl(imageIndex) { 
  if (section.value) { section.value.images.splice(imageIndex, 1); }
}
</script>

<template>
  <div v-if="section" class="space-y-6 text-white animate-fade-in">
    <h2 class="text-2xl font-bold border-b border-slate-700 pb-2">Editando Seção de Conteúdo</h2>
    <div>
      <label class="block text-sm font-medium text-gray-300 mb-2">Título</label>
      <input type="text" v-model="section.title" class="block w-full rounded-lg border-slate-600 bg-slate-700 px-4 py-3 text-gray-200 focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200"/>
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-300 mb-2">Texto</label>
      <textarea v-model="section.text" rows="4" class="block w-full rounded-lg border-slate-600 bg-slate-700 px-4 py-3 text-gray-200 focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200"></textarea>
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-300 mb-2">Posição do Texto</label>
      <select v-model="section.layout" class="block w-full rounded-lg border-slate-600 bg-slate-700 px-4 py-3 text-gray-200 focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200">
        <option class="text-black" value="text-left">À Esquerda</option>
        <option class="text-black" value="text-right">À Direita</option>
        <option class="text-black" value="text-top">Acima</option>
        <option class="text-black" value="text-bottom">Abaixo</option>
      </select>
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-300 mb-2">Imagens</label>
      <div v-for="(image, imgIndex) in section.images" :key="image.id" class="flex items-center gap-2 mb-2">
        <input type="text" v-model="image.url" class="block w-full rounded-lg border-slate-600 bg-slate-700 px-4 py-3 text-gray-200 focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200" placeholder="https://...">
        <button @click="removeImageUrl(imgIndex)" class="text-red-400 hover:text-red-300 transition-colors p-1 font-bold text-xl">&times;</button>
      </div>
      <button @click="addImageUrl" class="text-sm text-indigo-400 hover:text-indigo-300 font-semibold transition-colors">+ Adicionar imagem</button>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
.animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
</style>