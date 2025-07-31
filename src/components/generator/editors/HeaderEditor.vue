<script setup>
import { useSiteStore } from '@/stores/siteStore.js'
const siteStore = useSiteStore()
</script>

<template>
    <div class="space-y-6 text-white animate-fade-in">
        <h2 class="text-2xl font-bold border-b border-slate-700 pb-2">Editando o Header</h2>
        <div>
            <label class="block text-sm font-medium text-gray-300 mb-2">Título Principal</label>
            <input type="text" v-model="siteStore.hero.title" class="block w-full rounded-lg border-slate-600 bg-slate-700 px-4 py-3 text-gray-200 focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200"/>
        </div>
        <div>
            <label class="block text-sm font-medium text-gray-300 mb-2">Subtítulo</label>
            <textarea v-model="siteStore.hero.subtitle" rows="3" class="block w-full rounded-lg border-slate-600 bg-slate-700 px-4 py-3 text-gray-200 focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200"></textarea>
        </div>
        <div class="flex items-center gap-3 pt-2">
            <input id="useDefaultBg" type="checkbox" v-model="siteStore.hero.useDefaultBackground" class="h-4 w-4 rounded border-slate-600 bg-slate-700 text-indigo-600 focus:ring-indigo-500">
            <label for="useDefaultBg" class="text-sm font-medium text-gray-300">Usar fundo padrão</label>
        </div>
        <div v-if="!siteStore.hero.useDefaultBackground">
            <label class="block text-sm font-medium text-gray-300 mb-2">URL da Imagem de Fundo</label>
            <input type="text" v-model="siteStore.hero.imageUrl" placeholder="https://..." class="block w-full rounded-lg border-slate-600 bg-slate-700 px-4 py-3 text-gray-200 focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200" />
        </div>
    </div>
</template>

<style scoped>
@keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
.animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
</style>