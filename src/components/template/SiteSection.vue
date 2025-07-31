<script setup>
defineProps({ 
  section: Object, 
  templateId: String, 
  index: Number,
  isEditorMode: Boolean
})
</script>

<template>
  <section 
    class="p-8 md:p-20 flex gap-12 items-center" 
    :class="[
        { 'flex-col': section.layout === 'text-top', 
          'flex-col-reverse': section.layout === 'text-bottom', 
          'md:flex-row': section.layout === 'text-left', 
          'md:flex-row-reverse': section.layout === 'text-right' },
        templateId === 'claro' 
            ? (index % 2 === 0 ? 'bg-white text-slate-800' : 'bg-slate-50 text-slate-800') 
            : (index % 2 === 0 ? 'bg-slate-800 text-white' : 'bg-slate-900 text-white')
    ]">
    <div class="flex-1">
      <h2 
        class="text-4xl font-bold mb-4" 
        :class="templateId === 'claro' ? 'text-indigo-600' : 'text-indigo-400'"
      >{{ section.title }}</h2>
      <p 
        class="text-lg leading-relaxed"
        :class="templateId === 'claro' ? 'text-slate-600' : 'text-gray-300'"
      >{{ section.text }}</p>
    </div>
    <div class="flex-1 mt-6 md:mt-0 w-full" v-if="section.images && section.images.length > 0">
      <div class="grid gap-4" :class="{ 'grid-cols-1': section.images.length === 1, 'grid-cols-2': section.images.length === 2 || section.images.length >= 4, 'grid-cols-3': section.images.length === 3 }">
        <div v-for="image in section.images" :key="image.id">
           <img :src="image.url" alt="Imagem da seção" class="rounded-xl shadow-2xl w-full h-auto object-cover transition-transform duration-300 hover:scale-105">
        </div>
      </div>
    </div>
  </section>
</template>