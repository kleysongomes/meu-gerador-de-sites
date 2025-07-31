<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { supabase } from '@/db/supabase.js'
import SiteHeader from '@/components/template/SiteHeader.vue'
import SiteSection from '@/components/template/SiteSection.vue'
import SiteFooter from '@/components/template/SiteFooter.vue'

const route = useRoute();
const siteContent = ref(null);
const isLoading = ref(true);
const errorMsg = ref('');

onMounted(async () => {
  try {
    const siteId = route.params.siteId;
    const { data, error } = await supabase
      .from('sites')
      .select('content')
      .eq('id', siteId)
      .single();
    if (error) { throw new Error("Não foi possível encontrar os dados do site."); }
    if (data) { siteContent.value = data.content; } 
    else { throw new Error("Site não encontrado."); }
  } catch (err) {
    errorMsg.value = err.message;
    console.error(err);
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div v-if="isLoading" class="flex items-center justify-center min-h-screen"><p class="text-xl font-semibold">Carregando site...</p></div>
  <div v-else-if="errorMsg" class="flex items-center justify-center min-h-screen text-center"><div><h2 class="text-2xl font-bold text-red-600">Ocorreu um erro</h2><p class="text-gray-600">{{ errorMsg }}</p></div></div>

  <div v-else-if="siteContent">
    <SiteHeader :hero="siteContent.hero" :template-id="siteContent.templateId" :is-editor-mode="false" />
    <main>
      <SiteSection 
        v-for="(section, index) in siteContent.sections" 
        :key="section.id"
        :section="section"
        :template-id="siteContent.templateId"
        :index="index"
        :is-editor-mode="false"
      />
    </main>
    <SiteFooter :contact="siteContent.contact" :footer="siteContent.footer" :template-id="siteContent.templateId" :is-editor-mode="false" />
  </div>
</template>