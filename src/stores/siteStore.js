import { defineStore } from 'pinia'

export const useSiteStore = defineStore('site', {
  state: () => ({
    clientName: 'Meu Novo Projeto',
    templateId: 'claro',
    hero: {
      title: 'Título Principal Editável',
      subtitle: 'Clique aqui para editar este subtítulo.',
      imageUrl: '',
      useDefaultBackground: true,
    },
    sections: [
      {
        id: Date.now(),
        title: 'Sobre Nós',
        text: 'Clique neste parágrafo para contar sua história. Fale sobre seus valores e o que torna seu negócio único.',
        images: [],
        layout: 'text-left',
      },
    ],
    contact: {
      phone: '(00) 12345-6789',
      email: 'contato@meusite.com',
      address: 'Rua das Flores, 123 - Cidade, Estado',
    },
    footer: {
      text: `© ${new Date().getFullYear()} Meu Site. Todos os direitos reservados.`,
    },
  }),

  actions: {
    addSection() {
      this.sections.push({
        id: Date.now(),
        title: 'Nova Seção',
        text: 'Comece a escrever o conteúdo incrível para esta seção.',
        images: [],
        layout: 'text-left',
      });
    },

    // AÇÃO PARA REMOVER UMA SEÇÃO PELO SEU ID
    removeSection(sectionIdToRemove) {
      this.sections = this.sections.filter(section => section.id !== sectionIdToRemove);
    },
    
    resetState() {
      this.$patch({
        clientName: 'Meu Novo Projeto',
        templateId: 'claro',
        hero: { title: 'Título Principal Editável', subtitle: 'Clique aqui para editar este subtítulo.', imageUrl: '', useDefaultBackground: true },
        sections: [{ id: Date.now(), title: 'Sobre Nós', text: 'Clique neste parágrafo para contar sua história...', images: [], layout: 'text-left' }],
        contact: { phone: '(00) 12345-6789', email: 'contato@meusite.com', address: 'Rua das Flores, 123 - Cidade, Estado' },
        footer: { text: `© ${new Date().getFullYear()} Meu Site. Todos os direitos reservados.` }
      })
    },
  },
})