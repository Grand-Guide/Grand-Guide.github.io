const itemsPerPage = 12;
let currentPage = 1;
let items = [];

// Função para carregar itens do arquivo JSON
async function loadItems(category) {
    const fileName = category ? `${category}.json` : 'items.json'; // Define o nome do arquivo
    try {
        const response = await fetch(fileName);
        items = await response.json();
        displayItems();
        setupPagination();
    } catch (error) {
        console.error('Erro ao carregar os itens:', error);
    }
}

// Função para exibir os itens na página
function displayItems() {
    const itemList = document.getElementById('item-list');
    itemList.innerHTML = '';

    const start = (currentPage - 1) * itemsPerPage;
    const end = Math.min(start + itemsPerPage, items.length);

    for (let i = start; i < end; i++) {
        const item = items[i];
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.innerHTML = `
            <span>${item.name}</span>
            <img src="${item.cover}" alt="${item.name}">
            <span>${item.description}</span>
            <span>${item.price} G</span>
        `;
        itemList.appendChild(itemElement);
    }
}

// Função para configurar a paginação
function setupPagination() {
    const pageNumbers = document.getElementById('page-numbers');
    pageNumbers.innerHTML = '';
    const totalPages = Math.ceil(items.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const pageNumber = document.createElement('span');
        pageNumber.textContent = i;
        if (i === currentPage) {
            pageNumber.classList.add('active');
        }
        pageNumber.addEventListener('click', () => {
            currentPage = i;
            displayItems();
        });
        pageNumbers.appendChild(pageNumber);
    }
}

// Adiciona eventos de clique para cada categoria na barra lateral
document.querySelectorAll('.sidebar li').forEach(categoryElement => {
    categoryElement.addEventListener('click', () => {
        const category = categoryElement.getAttribute('data-category');
        currentPage = 1; // Reseta para a primeira página
        loadItems(category); // Carrega os itens da categoria selecionada
    });
});

// Carrega os itens iniciais ao carregar a página
loadItems();
