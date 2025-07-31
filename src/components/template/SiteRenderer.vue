<script setup>
import SiteHeader from './SiteHeader.vue'
import SiteSection from './SiteSection.vue'
import SiteFooter from './SiteFooter.vue'

defineProps({
  siteData: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div v-if="siteData">
    <SiteHeader :hero="siteData.hero" :template-id="siteData.templateId" :is-editor-mode="false" />
    <main>
      <SiteSection 
        v-for="(section, index) in siteData.sections" 
        :key="section.id"
        :section="section"
        :template-id="siteData.templateId"
        :index="index"
        :is-editor-mode="false"
      />
    </main>
    <SiteFooter :contact="siteData.contact" :footer="siteData.footer" :template-id="siteData.templateId" :is-editor-mode="false" />
  </div>
</template>