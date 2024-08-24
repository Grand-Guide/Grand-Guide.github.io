async function loadItems(page = 1, searchTerm = '') {
    const itemsPerPage = 12;
    
    try {
        const response = await fetch('items.json');
        const items = await response.json();

        const itemList = document.getElementById('item-list');
        const existingItems = Array.from(itemList.children);

        // Filtra os itens com base no termo de pesquisa
        const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const itemsToDisplay = filteredItems.slice(start, end);

        // Remove itens que não devem ser exibidos e aplica animação de saída
        existingItems.forEach(item => {
            const itemName = item.querySelector('.item-name').textContent;
            if (!itemsToDisplay.some(i => i.name === itemName)) {
                item.classList.add('hide');
                setTimeout(() => item.remove(), 300); // Tempo deve ser igual ao tempo de animação de saída
            }
        });

        // Adiciona novos itens e aplica animação de entrada
        itemsToDisplay.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('item');
            itemElement.innerHTML = `
                <span class="item-id">${item.id}</span>
                <span class="item-name">${item.name}</span>
                <img src="${item.cover}" alt="${item.name}" class="item-cover">
                <span class="item-description">${item.description}</span>
                <span class="item-price">${item.price}</span>
                <span class="item-update">${item.update}</span>
                <span class="item-status ${item.status === 'disponível' ? 'published' : ''}">
                    <i class="fas fa-check-circle"></i> ${item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                </span>
                <div class="item-quality">
                    ${item.quality}
                </div>
            `;
            itemList.appendChild(itemElement);
            // Força o navegador a aplicar o estilo de entrada após adicionar o item
            requestAnimationFrame(() => {
                itemElement.classList.add('show');
            });
        });

        updatePagination(page, Math.ceil(filteredItems.length / itemsPerPage));
    } catch (error) {
        console.error('Erro ao carregar os itens:', error);
    }
}

function updatePagination(currentPage, totalPages) {
    const pageNumbers = document.getElementById('page-numbers');
    pageNumbers.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const pageNumber = document.createElement('span');
        pageNumber.textContent = i;
        pageNumber.classList.add('page-number');
        if (i === currentPage) {
            pageNumber.classList.add('active');
        }
        pageNumber.onclick = () => loadItems(i, document.querySelector('.search-bar input').value);
        pageNumbers.appendChild(pageNumber);
    }

    document.getElementById('prev-page').style.display = currentPage === 1 ? 'none' : 'inline';
    document.getElementById('next-page').style.display = currentPage === totalPages ? 'none' : 'inline';
}

// Adiciona evento para atualizar a lista de itens ao digitar na barra de pesquisa
document.querySelector('.search-bar input').addEventListener('input', (event) => {
    const searchTerm = event.target.value;
    loadItems(1, searchTerm); // Recarrega a lista com o termo de pesquisa
});

document.getElementById('prev-page').onclick = () => {
    const currentPage = parseInt(document.querySelector('.page-number.active').textContent);
    if (currentPage > 1) loadItems(currentPage - 1);
};

document.getElementById('next-page').onclick = () => {
    const currentPage = parseInt(document.querySelector('.page-number.active').textContent);
    const totalPages = document.querySelectorAll('.page-number').length;
    if (currentPage < totalPages) loadItems(currentPage + 1);
};

// Carrega os itens ao iniciar a página
document.addEventListener('DOMContentLoaded', () => loadItems(1));
