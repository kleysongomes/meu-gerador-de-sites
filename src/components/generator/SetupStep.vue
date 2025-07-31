<script setup>
import { useSiteStore } from '@/stores/siteStore.js'

const siteStore = useSiteStore()
const emit = defineEmits(['completed'])
</script>

<template>
  <div class="flex items-center justify-center min-h-screen px-4 py-8 animate-fade-in">
    <div class="bg-slate-800 border border-slate-700 rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl shadow-indigo-500/10">
      
      <h2 class="text-2xl sm:text-3xl font-bold mb-2 text-white tracking-tight">Comece seu Projeto</h2>
      <p class="text-gray-400 mb-8">Defina os detalhes iniciais para começar a edição.</p>

      <div class="space-y-6">
        <div>
          <label for="initial-client-name" class="block text-sm font-medium text-gray-300 mb-2">Nome do Projeto</label>
          <input 
            type="text" 
            id="initial-client-name" 
            v-model="siteStore.clientName" 
            placeholder="Ex: Cafeteria do Bairro" 
            class="block w-full rounded-lg border-slate-600 bg-slate-900/50 px-4 py-3 text-gray-200 focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200" 
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-300 mb-2">Tema Inicial do Site</label>
          
          <div class="flex flex-col sm:flex-row gap-4 p-2 bg-slate-900 rounded-lg">
            <label class="flex-1 text-center py-2 px-4 rounded-md cursor-pointer transition-colors" :class="siteStore.templateId === 'claro' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-slate-700 text-gray-300 hover:bg-slate-600'">
              <input type="radio" v-model="siteStore.templateId" value="claro" class="sr-only"> Tema Claro
            </label>
            <label class="flex-1 text-center py-2 px-4 rounded-md cursor-pointer transition-colors" :class="siteStore.templateId === 'escuro' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-slate-700 text-gray-300 hover:bg-slate-600'">
              <input type="radio" v-model="siteStore.templateId" value="escuro" class="sr-only"> Tema Escuro
            </label>
          </div>
        </div>
        <button 
          @click="$emit('completed')" 
          class="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-4 rounded-lg text-lg transition-transform transform hover:scale-105 duration-300 shadow-lg shadow-indigo-500/20"
        >
          Começar a Editar
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: scale(0.98); }
  to { opacity: 1; transform: scale(1); }
}
.animate-fade-in {
  animation: fade-in 0.5s ease-out forwards;
}
</style>