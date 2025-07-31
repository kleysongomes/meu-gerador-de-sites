<script setup>
// ... (script sem alterações) ...
import { useSiteStore } from '../../stores/siteStore.js'
import { computed } from 'vue'

const props = defineProps({
  sections: Array,
  selectedId: [String, Number]
})
const emit = defineEmits(['select'])

const siteStore = useSiteStore()

function handleRemoveSection(sectionId) {
  if (props.selectedId === sectionId) {
    emit('select', 'hero');
  }
  siteStore.removeSection(sectionId);
}

const mobileSelection = computed({
  get: () => props.selectedId,
  set: (value) => emit('select', value)
})
</script>

<template>
  <div>
    <div class="hidden lg:flex flex-col w-64 bg-slate-800 p-4 border-r border-slate-700 h-screen">
      <div class="flex-grow">
        <h2 class="text-white font-bold text-lg mb-4 px-3">Estrutura do Site</h2>
        <ul class="space-y-2">
          <li><button @click="$emit('select', 'hero')" class="w-full text-left px-3 py-2 rounded-md transition-colors" :class="selectedId === 'hero' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-700 text-gray-300'">Header</button></li>
          <li v-for="(section, index) in sections" :key="section.id" class="group flex items-center gap-2">
            <button @click="$emit('select', section.id)" class="flex-grow text-left px-3 py-2 rounded-md transition-colors" :class="selectedId === section.id ? 'bg-indigo-600 text-white' : 'hover:bg-slate-700 text-gray-300'">Seção #{{ index + 1 }}</button>
            <button @click="handleRemoveSection(section.id)" class="text-slate-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity" title="Remover Seção"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clip-rule="evenodd" /></svg></button>
          </li>
          <li><button @click="$emit('select', 'footer')" class="w-full text-left px-3 py-2 rounded-md transition-colors" :class="selectedId === 'footer' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-700 text-gray-300'">Rodapé</button></li>
        </ul>
        <div class="mt-4"><button @click="siteStore.addSection()" class="w-full border-2 border-dashed border-slate-600 hover:border-indigo-500 hover:text-indigo-400 text-slate-400 font-bold py-3 px-4 rounded-lg transition duration-300">+ Adicionar Seção</button></div>
      </div>
    </div>

    <div class="lg:hidden bg-slate-800 p-4 border-b border-slate-700">
        <label for="section-select" class="text-white font-bold text-lg mb-2 block">Editando Seção:</label>
        <select 
          id="section-select" 
          v-model="mobileSelection" 
          class="block w-full rounded-lg border-slate-600 bg-slate-700 px-4 py-3 text-gray-200 focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200"
        >
            <option class="text-black" value="hero">Header</option>
            <option v-for="(section, index) in sections" :key="section.id" :value="section.id" class="text-black">
                Seção #{{ index + 1 }}
            </option>
            <option class="text-black" value="footer">Rodapé</option>
        </select>
        <div class="mt-4">
            <button @click="siteStore.addSection()" class="w-full border-2 border-dashed border-slate-600 hover:border-indigo-500 hover:text-indigo-400 text-slate-400 font-bold py-3 px-4 rounded-lg transition duration-300">
                + Adicionar Nova Seção
            </button>
        </div>
    </div>
  </div>
</template>