<script setup>
import { RouterLink } from 'vue-router';

const features = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>`,
    title: 'Intuitivo e Rápido',
    description: 'Sem painéis complicados. Apenas preencha os campos e veja seu site ganhar vida em tempo real.'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>`,
    title: 'Totalmente Responsivo',
    description: 'Seu site final funcionará perfeitamente em celulares, tablets e desktops, sem nenhum esforço extra.'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>`,
    title: 'Templates Modernos',
    description: 'Comece com modelos de design limpos e profissionais, criados para impressionar seus visitantes.'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>`,
    title: 'Custo Acessível',
    description: 'Publique seu site com uma pequena doação única. Sem mensalidades ou taxas escondidas.'
  }
]
</script>

<template>
  <div class="bg-slate-900 text-gray-200">
    <section class="relative h-[90vh] min-h-[600px] flex items-center justify-center text-center px-4 overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Fundo abstrato com gradiente" class="object-cover w-full h-full opacity-30">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>
      
      <div class="relative z-10">
        <span class="text-indigo-400 font-semibold uppercase tracking-wider">A REVOLUÇÃO DO FAÇA-VOCÊ-MESMO</span>
        <h1 class="text-5xl md:text-7xl font-extrabold text-white leading-tight my-4 animate-fade-in-down tracking-tighter">
          Um Site Impressionante, Incrivelmente Simples.
        </h1>
        <p class="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 animate-fade-in-up">
          Crie um site profissional e de alta performance em minutos. Você cuida do conteúdo, nós cuidamos da mágica.
        </p>
        <RouterLink to="/gerador" class="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-transform transform hover:scale-105 duration-300 shadow-2xl shadow-indigo-500/30">
          Criar Meu Site Agora &rarr;
        </RouterLink>
      </div>
    </section>

    <section class="relative px-4 py-20">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-slate-800 p-8 rounded-xl border border-slate-700">
          <div class="text-3xl font-bold text-indigo-400 mb-4">Passo 1</div>
          <h3 class="text-2xl font-semibold text-white mb-2">Preencha os Campos</h3>
          <p class="text-gray-400">Escolha um estilo e adicione seus textos e imagens de forma guiada e intuitiva.</p>
        </div>
        <div class="bg-slate-800 p-8 rounded-xl border border-slate-700">
          <div class="text-3xl font-bold text-indigo-400 mb-4">Passo 2</div>
          <h3 class="text-2xl font-semibold text-white mb-2">Visualize em Tempo Real</h3>
          <p class="text-gray-400">Acompanhe cada mudança na pré-visualização ao vivo ao lado do formulário.</p>
        </div>
        <div class="bg-slate-800 p-8 rounded-xl border border-slate-700">
          <div class="text-3xl font-bold text-indigo-400 mb-4">Passo 3</div>
          <h3 class="text-2xl font-semibold text-white mb-2">Publique com um Clique</h3>
          <p class="text-gray-400">Gostou do resultado? Faça uma doação e coloque seu site no ar na mesma hora.</p>
        </div>
      </div>
    </section>

    <section class="px-4 py-20">
        <div class="text-center max-w-4xl mx-auto">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Veja o que Você Pode Criar</h2>
            <p class="text-lg text-gray-400 mb-12">Comece com um dos nossos templates e personalize como quiser.</p>
        </div>
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div class="p-4 bg-slate-800 rounded-lg border border-slate-700">
                <img src="https://i.imgur.com/Wb25PCq.png" alt="Template Minimalista" class="rounded-md shadow-2xl">
                <h3 class="text-2xl font-semibold mt-4 text-white">Template Minimalista</h3>
            </div>
            <div class="p-4 bg-slate-800 rounded-lg border border-slate-700">
                <img src="https://i.imgur.com/gK2RGSn.png" alt="Template Ousado" class="rounded-md shadow-2xl">
                <h3 class="text-2xl font-semibold mt-4 text-white">Template Ousado</h3>
            </div>
        </div>
    </section>
    
    <section class="px-4 py-20">
        <div class="max-w-2xl mx-auto bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-2xl border border-indigo-500/30 text-center shadow-2xl">
             <h2 class="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Preço que Parece Mentira</h2>
             <p class="text-gray-300 text-lg mb-8">Qualidade de agência, preço de um café.</p>
             
             <div class="my-8">
                <span class="text-7xl font-extrabold text-white tracking-tighter">R$ 5,99</span>
                <span class="text-xl text-gray-400 ml-2"> /doação</span>
             </div>

             <ul class="text-left space-y-3 mb-10">
                <li class="flex items-center gap-3"><svg class="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg><span>Site publicado e no ar</span></li>
                <li class="flex items-center gap-3"><svg class="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg><span>Link compartilhável</span></li>
                <li class="flex items-center gap-3"><svg class="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg><span>Sem mensalidades ou taxas</span></li>
                <li class="flex items-center gap-3"><svg class="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg><span>Backup completo em HTML</span></li>
             </ul>
             
             <RouterLink to="/gerador" class="inline-block w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-4 px-10 rounded-lg text-lg transition-transform transform hover:scale-105 duration-300 shadow-xl">
                Comece a Criar Agora
            </RouterLink>
        </div>
    </section>

     <section class="px-4 py-20">
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div v-for="feature in features" :key="feature.title" class="text-center">
                <div class="flex justify-center items-center mb-4" v-html="feature.icon"></div>
                <h3 class="text-xl font-bold text-white mb-2">{{ feature.title }}</h3>
                <p class="text-gray-400">{{ feature.description }}</p>
            </div>
        </div>
    </section>

  </div>
</template>

<style scoped>
/* Animações (permanecem as mesmas) */
@keyframes fade-in-down { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
.animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
.animate-fade-in-up { animation: fade-in-up 0.8s ease-out 0.2s forwards; opacity: 0; }
</style>