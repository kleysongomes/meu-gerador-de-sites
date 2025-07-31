<script setup>
import { ref } from 'vue'
// CORREÇÃO: Usando caminho relativo para garantir que o arquivo seja encontrado.
import SetupStep from '../components/generator/SetupStep.vue'
import EditorLayout from '../components/generator/EditorLayout.vue'

const currentStep = ref('setup')
</script>

<template>
  <div>
    <SetupStep 
      v-if="currentStep === 'setup'" 
      @completed="currentStep = 'editing'" 
    />
    <EditorLayout v-else />
  </div>
</template>