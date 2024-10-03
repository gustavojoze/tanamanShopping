// async function  conexao() {
//     // Verificar se o elemento existe, o ID ou classe correto
//     const containerSection = document.querySelector(".main_container_section"); // Supondo que seja uma classe
//     const res = await fetch("file.json");
//     const data = await res.json();

//     // Mapeamento dos produtos de acordo com suas categorias
//     data.forEach((produto) => {
//         // Encontrar ou criar a seção de acordo com a categoria do produto
//         let section = document.querySelector(`#section-${produto.categoria}`);
        
//         // Se a seção não existir, criar a seção para a categoria
//         if (!section) {
//             section = document.createElement('section');
//             section.classList.add('main_section');
//             section.id = `section-${produto.categoria}`;
//             section.innerHTML = `
//                 <h1>${produto.categoria}</h1>
//                 <div class="container_cards"></div>
//             `;
//             containerSection.appendChild(section);
//         }


             
//         // Adicionar o produto na respectiva categoria
//         const containerCards = section.querySelector('.container_cards');
//         containerCards.innerHTML += `
//   '             <div class="card" onclick="switchModal('${produto.id}')" id="${produto.id}">
//                 <img src="./assets/${produto.url}.png" alt="${produto.nome}" class="card_img">
//                 <p class="card_titulo">${produto.nome}</p>
//                 <p class="card_preco">R$ ${produto.preco}</p>
//                 <button class="card_botao" onclick="countBuy(event)">
//                     Comprar
//                 </button>
//             </div>
//         `;
        
//     });
// }

// function switchModal(produtoId) {
//     const modal = document.querySelector('.contentModal');
//     const actualStyle = modal.style.display;
    
//     if (actualStyle === 'block') {
//         modal.style.display = 'none';
//     } else {
//         // Aqui você pode adicionar lógica para preencher o modal com informações do produto clicado
//         console.log('Produto ID:', produtoId); // Para fins de teste
//         modal.style.display = 'block';
//     }
// }

// conexao()

// Função para criar e adicionar uma nova seção para a categoria
function criarSecaoCategoria(categoria) {
    const section = document.createElement('section');
    section.classList.add('main_section');
    section.id = `section-${categoria}`;
    section.innerHTML = `
        <h1>${categoria}</h1>
        <div class="container_cards"></div>
    `;
    return section;
}

// Função para criar o card do produto
function criarCardProduto(produto) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.id = produto.id;

    // Adicionar imagem
    const img = document.createElement('img');
    img.src = `./assets/${produto.url}.png`;
    img.alt = produto.nome;
    img.classList.add('card_img');
    
    // Adicionar título
    const titulo = document.createElement('p');
    titulo.classList.add('card_titulo');
    titulo.textContent = produto.nome;
    
    // Adicionar preço
    const preco = document.createElement('p');
    preco.classList.add('card_preco');
    preco.textContent = `R$ ${produto.preco}`;

    // Botão de compra
    const botaoComprar = document.createElement('button');
    botaoComprar.classList.add('card_botao');
    botaoComprar.textContent = 'Comprar';
    botaoComprar.addEventListener('click', countBuy);

    // Adicionar evento ao card para exibir o modal com detalhes do produto
    card.addEventListener('click', () => switchModal(produto));

    // Montar o card
    card.appendChild(img);
    card.appendChild(titulo);
    card.appendChild(preco);
    card.appendChild(botaoComprar);

    return card;
}

// Função principal que busca os dados e cria as seções e cards
async function conexao() {
    const containerSection = document.querySelector(".main_container_section"); 
    const res = await fetch("file.json");
    const data = await res.json();

    data.forEach((produto) => {
        let section = document.querySelector(`#section-${produto.categoria}`);
        
        // Se a seção não existir, cria uma nova
        if (!section) {
            section = criarSecaoCategoria(produto.categoria);
            containerSection.appendChild(section);
        }

        // Adicionar o card do produto à seção correta
        const containerCards = section.querySelector('.container_cards');
        const cardProduto = criarCardProduto(produto);
        containerCards.appendChild(cardProduto);
    });
}

// Função para exibir ou ocultar o modal e preencher os detalhes do produto
function switchModal(produto) {
    const modal = document.querySelector('.contentModal');
    const actualStyle = modal.style.display;
    
    if (actualStyle === 'block') {
        modal.style.display = 'none';
    } else {
        // Preencher o modal com os dados do produto clicado
        document.getElementById('modalTitulo').textContent = produto.nome;
        document.getElementById('modalImg').src = `./assets/${produto.url}.png`;
        document.getElementById('modalDescricao').textContent = produto.descricao; // Assumindo que o JSON tem um campo "descricao"
        
        modal.style.display = 'block';
    }
}

// Função para fechar o modal ao clicar no ícone de fechar
document.querySelector('.modal_iconCLose').addEventListener('click', () => {
    const modal = document.querySelector('.contentModal');
    modal.style.display = 'none';
});

conexao();
