<script setup>
defineProps({
  hero: Object,
  templateId: String,
  isEditorMode: Boolean
})
</script>

<template>
  <header 
    class="relative h-[80vh] min-h-[500px] bg-cover bg-center flex flex-col justify-center items-center text-center p-4"
    :style="hero.useDefaultBackground 
        ? (templateId === 'claro' 
            ? { backgroundImage: 'linear-gradient(45deg, #e0e7ff, #c7d2fe)' } 
            : { backgroundImage: 'linear-gradient(45deg, #3b82f6, #8b5cf6)' })
        : { backgroundImage: `url(${hero.imageUrl})` }">
    <div class="absolute inset-0 bg-black opacity-50" v-if="!hero.useDefaultBackground && hero.imageUrl"></div>
    <div class="relative z-10 space-y-4">
      <h1 
        class="text-5xl md:text-7xl font-extrabold tracking-tighter" 
        :class="templateId === 'claro' ? 'text-slate-900' : 'text-white'"
      >{{ hero.title }}</h1>
      <p 
        class="text-xl md:text-2xl max-w-3xl mx-auto"
        :class="templateId === 'claro' ? 'text-slate-600' : 'text-indigo-200'"
      >{{ hero.subtitle }}</p>
    </div>
  </header>
</template>