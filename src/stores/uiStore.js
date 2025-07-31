// src/stores/uiStore.js
import { defineStore } from 'pinia'
import QRCode from 'qrcode'

export const useUiStore = defineStore('ui', {
  state: () => ({
    isDonationModalOpen: false,
    qrCodeDataUrl: '',
    pixKey: "00020101021126580014br.gov.bcb.pix01366a880e48-561d-41c1-b376-5e9e10712bc352040000530398654045.995802BR5918KLEYSON DE O GOMES6007MACAIBA62070503***630461C3",
  }),
  actions: {
    async openDonationModal() {
      // Gera o QR Code apenas quando o modal for aberto
      this.qrCodeDataUrl = await QRCode.toDataURL(this.pixKey, { width: 256 });
      this.isDonationModalOpen = true;
    },
    closeDonationModal() {
      this.isDonationModalOpen = false;
    },
  },
})