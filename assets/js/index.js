const cardServices = document.querySelector('.section-services__cards');
const currentCardService = 'infraestrutura';

const services = [
  {
    order: 1,
    id: 'locacao',
    img_src: './assets/images/05-IMAGEM.webp',
    title: 'Locação de equipamentos',
    text: 'Tecnologia de ponta sem comprometer o orçamento. Locação de equipamentos com suporte especializado para garantir máxima performance.'
  },
  {
    order: 2,
    id: 'infraestrutura',
    img_src: './assets/images/04-IMAGENS.webp',
    title: 'Infraestrutura de TI',
    text: 'Soluções completas para otimizar a infraestrutura e garantir o desempenho de sua empresa, incluindo servidores, backup, virtualização e segurança.'
  },
  {
    order: 3,
    id: 'consultoria',
    img_src: './assets/images/03-IMAGEM.webp',
    title: 'Consultoria em TI',
    text: 'Transformação digital com foco em inovação e eficiência. Nossa consultoria ajuda sua empresa a alcançar os melhores resultados com tecnologia.'
  }
];

const orderServiceCards = (next) => {
  for (const service of services) {
    if (next) {
      if (service.order === services.length) {
        service.order = 1;
        continue;
      }

      service.order = service.order + 1;
    } else {
      if (service.order === 1) {
        service.order = services.length;
        continue;
      }

      service.order = service.order - 1;
    }
  }

  services.sort((a, b) => a.order - b.order);
};

const renderServiceCards = () => {
  cardServices.innerHTML = '';

  services.forEach((service) => {
    if (service.order === 2) {
      cardServices.innerHTML += `
        <div id="section-services__card-wrapper">
          <button 
            class="section-services__card__btn-prev" 
            onclick="navigateServiceCard(false)"
            aria-label="Item anterior"
          >
            <svg fill="#8F8F8F" width="14px" height="14px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#8F8F8F"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M23.505 0c0.271 0 0.549 0.107 0.757 0.316 0.417 0.417 0.417 1.098 0 1.515l-14.258 14.264 14.050 14.050c0.417 0.417 0.417 1.098 0 1.515s-1.098 0.417-1.515 0l-14.807-14.807c-0.417-0.417-0.417-1.098 0-1.515l15.015-15.022c0.208-0.208 0.486-0.316 0.757-0.316z"></path> </g></svg>
          </button>
          <li id="card-service_${service.title}" class="section-services__card section-services__card--active">
            <img src="${service.img_src}" alt="">
            <h4>${service.title}</h4>
            <p class="text">${service.text}</p>
          </li>
          <button 
            class="section-services__card__btn-next" 
            onclick="navigateServiceCard(true)"
            aria-label="Próximo item"
          >
            <svg fill="#8F8F8F" width="14px" height="14px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z"></path> </g></svg>
          </button>
        </div>
      `;
    } else {
      cardServices.innerHTML += `
        <li id="card-service_${service.title}" class="section-services__card">
          <img src="${service.img_src}" alt="">
          <h4>${service.title}</h4>
          <p class="text">${service.text}</p>
        </li>
      `;
    }
  });
};

const navigateServiceCard = (isNext) => {
  console.log(isNext);
  orderServiceCards(isNext);
  renderServiceCards();
};

document.addEventListener('DOMContentLoaded', () => {
  renderServiceCards();
});