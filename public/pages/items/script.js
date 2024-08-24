async function loadItems(page = 1) {
    const itemsPerPage = 12;
    
    try {
        const response = await fetch('items.json');
        const items = await response.json();

        const itemList = document.getElementById('item-list');
        itemList.innerHTML = ''; // Limpar itens existentes

        // Calcula o índice inicial e final dos itens a serem exibidos
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const itemsToDisplay = items.slice(start, end);

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
        });

        updatePagination(page, Math.ceil(items.length / itemsPerPage));
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
        pageNumber.onclick = () => loadItems(i);
        pageNumbers.appendChild(pageNumber);
    }

    document.getElementById('prev-page').style.display = currentPage === 1 ? 'none' : 'inline';
    document.getElementById('next-page').style.display = currentPage === totalPages ? 'none' : 'inline';
}

document.addEventListener('DOMContentLoaded', () => loadItems(1));

document.getElementById('prev-page').onclick = () => {
    const currentPage = parseInt(document.querySelector('.page-number.active').textContent);
    if (currentPage > 1) loadItems(currentPage - 1);
};

document.getElementById('next-page').onclick = () => {
    const currentPage = parseInt(document.querySelector('.page-number.active').textContent);
    const totalPages = document.querySelectorAll('.page-number').length;
    if (currentPage < totalPages) loadItems(currentPage + 1);
};
