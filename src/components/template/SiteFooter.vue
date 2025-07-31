<script setup>
defineProps({ 
  contact: Object, 
  footer: Object, 
  templateId: String,
  isEditorMode: Boolean
})
</script>
<template>
    <footer 
      class="p-10 text-center" 
      :class="templateId === 'claro' ? 'bg-slate-100 text-slate-700' : 'bg-slate-900 text-gray-400'">
        <div class="mb-4">
            <h3 
              class="text-2xl font-bold mb-2" 
              :class="templateId === 'claro' ? 'text-slate-800' : 'text-white'"
            >Entre em Contato</h3>
            <div class="space-y-1 mt-4">
              <p v-if="contact.phone"><strong>Tel:</strong> {{ contact.phone }}</p>
              <p v-if="contact.email"><strong>Email:</strong> {{ contact.email }}</p>
              <p v-if="contact.address"><strong>Endereço:</strong> {{ contact.address }}</p>
            </div>
        </div>
        <div class="text-sm mt-8 border-t pt-6" :class="templateId === 'claro' ? 'border-slate-200' : 'border-slate-700'">
            <p>{{ footer.text }}</p>
        </div>
    </footer>
</template>