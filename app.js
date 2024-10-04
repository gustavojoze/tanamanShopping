function mostrarSenha(){
    var inputPass = document.getElementById('senha');
    var btnShowPass = document.getElementById('btn-senha');

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type', 'text');
        btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    }else{
        inputPass.setAttribute('type', 'password');
        btnShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
    }
}
function mostrarSenhaConf(){
    var inputPass = document.getElementById('confirmaSenha');
    var btnShowPass = document.getElementById('btn-conf-senha');

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type', 'text');
        btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    }else{
        inputPass.setAttribute('type', 'password');
        btnShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
    }
}


document.querySelectorAll('.nav_li').forEach(item => {
    item.addEventListener('click', function() {
        // Remove a classe 'active' de todos os itens
        document.querySelectorAll('.nav_li').forEach(i => i.classList.remove('active'));

        // Adiciona a classe 'active' ao item clicado
        this.classList.add('active');
    });
});

   
   const switchModal = () => {
        const modal = document.querySelector('.contentModal') 

        const actualStyle = modal.style.display 
        if (actualStyle == 'block')
             {
                 modal.style.display = 'none'
             } 
        else {
             modal.style.display = 'block'
             } 
    }
        
    const switchCar = () => {
        const containerCar = document.querySelector('.active_container_carrinho'); 
        const animacao = document.querySelector('.container_carrinho'); 
        
        // Verifica se o carrinho está ativo
        if (containerCar.classList.contains('active')) {
            // Esconder o carrinho
            containerCar.classList.remove('active');
            animacao.style.width = "0%";  // Recolhe a largura
        } else {
            // Mostrar o carrinho
            containerCar.classList.add('active');
            animacao.style.width = "25%";  // Expande a largura
        }
    }
    

   let i = 1

    const countBuy = (event) =>{
        event.stopPropagation();
        const iconCount_p = document.querySelector('.header_icons_cicleCount_p')
        const iconCount = document.querySelector('.header_icons_cicleCount')

        const active_iconCount = iconCount.style.display
        
        if (active_iconCount == 'none')
            {
                iconCount.style.display = 'flex'
            } 
       else {
                iconCount.style.display = 'flex'
            } 
        
        iconCount_p.innerHTML = i++   
    }

