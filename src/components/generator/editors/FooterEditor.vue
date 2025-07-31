<script setup>
import { useSiteStore } from '@/stores/siteStore.js'
const siteStore = useSiteStore()
</script>

<template>
  <div class="space-y-6 text-white animate-fade-in">
    <h2 class="text-2xl font-bold border-b border-slate-700 pb-2">Editando Rodapé</h2>
    <div>
      <label class="block text-sm font-medium text-gray-300 mb-2">Telefone</label>
      <input type="text" v-model="siteStore.contact.phone" class="block w-full rounded-lg border-slate-600 bg-slate-700 px-4 py-3 text-gray-200 focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200"/>
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-300 mb-2">Email</label>
      <input type="email" v-model="siteStore.contact.email" class="block w-full rounded-lg border-slate-600 bg-slate-700 px-4 py-3 text-gray-200 focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200"/>
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-300 mb-2">Endereço</label>
      <input type="text" v-model="siteStore.contact.address" class="block w-full rounded-lg border-slate-600 bg-slate-700 px-4 py-3 text-gray-200 focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200"/>
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-300 mb-2">Texto do Rodapé</label>
      <input type="text" v-model="siteStore.footer.text" class="block w-full rounded-lg border-slate-600 bg-slate-700 px-4 py-3 text-gray-200 focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200"/>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
.animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
</style>