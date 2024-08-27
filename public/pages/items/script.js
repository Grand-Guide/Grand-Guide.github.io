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

fetch('items.json')
  .then(response => response.json())
  .then(data => {
    // Exemplo: Acessar o primeiro item da lista
    const firstItem = data.items[0]; 

    // Exibir as informações na página
    document.getElementById('item-name').textContent = firstItem.itemName;
    document.getElementById('item-icon').src = firstItem.itemIcon;

    // Informações
    document.getElementById('info-name').textContent = firstItem.itemName;
    document.getElementById('info-type').textContent = firstItem.itemType; 
    document.getElementById('info-rarity').textContent = firstItem.itemRarity; 

    // Recompensa de
    displayList('rewards-list', firstItem.recompensaDe);

    // Usado para criar
    displayList('used-to-craft-list', firstItem.usadoParaCriar);

    // Receitas
    displayList('recipes-list', firstItem.receitas);

    // Caçando
    displayList('hunting-list', firstItem.cacando);

    // Loja
    document.getElementById('shop-npc').textContent = firstItem.loja.npc || 'Não disponível';
    document.getElementById('shop-price').textContent = firstItem.loja.preco || 'Não disponível';

    // Descrição
    document.getElementById('item-desc').textContent = firstItem.descricao;

    // Preço
    document.getElementById('price-value').textContent = firstItem.preco;
  })
  .catch(error => console.error('Erro ao carregar os dados:', error));

// Função auxiliar para exibir listas
function displayList(listId, items) {
    const list = document.getElementById(listId);
    if (items && items.length > 0) {
        items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            list.appendChild(listItem);
        });
    } else {
        list.innerHTML = '<li>Nenhuma informação encontrada.</li>'; 
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

// Adiciona eventos de clique para cada categoria na barra lateral
document.querySelectorAll('.sidebar li').forEach(categoryElement => {
    categoryElement.addEventListener('click', () => {
        const category = categoryElement.getAttribute('data-category');
        currentPage = 1; // Reseta para a primeira página
        loadItems(category); // Carrega os itens da categoria selecionada
    });
});

// Função para obter o ícone de status
function getStatusIcon(status) {
    return status === 'verificado' ? 'fa-check-circle' : 'fa-exclamation-triangle';
}

// Carrega os itens iniciais ao carregar a página
loadItems();
