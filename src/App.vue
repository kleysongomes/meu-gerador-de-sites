<script setup>
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { useUiStore } from './stores/uiStore';
import DonationModal from './components/shared/DonationModal.vue';

const route = useRoute();
const uiStore = useUiStore();


const showNavigation = computed(() => route.name !== 'siteView');

</script>

<template>
  <header v-if="showNavigation" class="bg-white shadow-md relative z-40">
    <nav class="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
      <div class="text-xl font-bold text-gray-800">
        <RouterLink to="/">Meu Gerador</RouterLink>
      </div>

      <div class="hidden md:flex items-center space-x-6">
        </div>
      
      <div>
        <button @click="uiStore.openDonationModal()" class="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-2 px-5 rounded-full transition-transform transform hover:scale-105 duration-300 shadow-lg">
          Apoiar com PIX
        </button>
      </div>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
  
  <DonationModal />
</template>