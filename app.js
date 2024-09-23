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
        const containerCar = document.querySelector('.active_container_carrinho') 
        const actualStyle = containerCar.style.display 
        if (actualStyle == 'block')
             {
                containerCar.style.display = 'none'
             } 
        else {
            containerCar.style.display = 'block'
             } 
    }
        
    const countBuy = () =>{
        const iconCount = document.querySelector('.header_icons_cicleCount_p')
        iconCount.innerHTML = 2
            
    }