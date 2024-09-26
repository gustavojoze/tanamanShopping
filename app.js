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
     
    const addProductCar = () =>{
        const containerCar = document.querySelector('')
        
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

