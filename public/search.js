// Função para buscar e filtrar itens
function searchItems() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');

    fetch('https://github.com/Grand-Guide/Grand-Guide.github.io/tree/main/public/items.json') // Insira o caminho correto para o arquivo JSON
        .then(response => response.json())
        .then(data => {
            const filteredItems = data.filter(item => item.name.toLowerCase().includes(input));
            
            resultsDiv.innerHTML = ''; // Limpa os resultados anteriores
            
            filteredItems.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('item');

                itemDiv.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px;">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                `;

                resultsDiv.appendChild(itemDiv);
            });

            if (filteredItems.length === 0) {
                resultsDiv.innerHTML = '<p>Nenhum item encontrado</p>';
            }
        })
        .catch(error => {
            console.error('Erro ao buscar os dados:', error);
        });
}
