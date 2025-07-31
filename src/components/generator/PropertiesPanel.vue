<script setup>
import HeaderEditor from './editors/HeaderEditor.vue'
import SectionEditor from './editors/SectionEditor.vue'
import FooterEditor from './editors/FooterEditor.vue'

defineProps({
  selectedId: [String, Number]
})
</script>

<template>
  <div>
    <HeaderEditor v-if="selectedId === 'hero'" />
    
    <SectionEditor 
      v-else-if="typeof selectedId === 'number'"
      :section-id="selectedId" 
    />
    
    <FooterEditor v-if="selectedId === 'footer'" />
  </div>
</template>