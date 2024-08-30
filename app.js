const search=document.querySelector('#search');
const productListing= document.createElement( 'div' );
const notFound= document.createElement('div')


document.body.appendChild(productListing)
productListing.classList.add('product-listing')
notFound.innerHTML='Not Found';


function apiCall(){
    
    const api= fetch('https://fakestoreapi.com/products');
    api.then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data);
    
        for(i=0;i<data.length;i++){
            const card= document.createElement('div');
            card.classList.add('card');
            card.innerHTML=`
            <div class="img-container">
                <img src="${data[i].image}" alt="This is image">
            </div>
            <div class="contents">
                <h3 class="product-name">${data[i].title}</h3>
                <div class="product-description">${data[i].description}</div>
                <button class="product-price">${data[i].price}$</button>
            </div>`;
            productListing.appendChild(card)
            
        }
    })

}
apiCall()


search.addEventListener('keyup',(e)=>{


    let text = search.value;
    let cardContent= document.querySelectorAll('.card');

    
    const api= fetch('https://fakestoreapi.com/products');
    api.then((res)=>{
        return res.json()
    }).then((data)=>{
        
        for(i=0;i<data.length;i++){

            const dataTitle=data[i].title
            const dataDescription = data[i].description
            const dataPrice = String(data[i].price)

            
            if(dataTitle.includes(text) || dataDescription.includes(text) || dataPrice.includes(text)){
                
                cardContent[i].style.display='';

            }
            else{
                cardContent[i].style.display='none';

                
                if(text!=dataTitle || text!=dataDescription || text!=dataPrice){
                    
                    notFound.style.color='red'
                    notFound.style.fontWeight='bold'
                    notFound.style.fontSize='20px'

                    productListing.appendChild(notFound)
                    
                }

            }


            
            // console.log(data[i].description.includes(text))

            // console.log(dataPrice.includes(text),'position:',i)
            
            // if(data[i].title.includes(text) || data[i].description.includes(text) || dataPrice.includes(text)){
            //     cardContent[i].style.display=''
            //     // for(j=0;j<data[i].title.length;j++){
            
            //     //     if(data[i].title.split('').includes(text)){

            //     //     }
            //     // }
              
            // }
            // else{
            //     cardContent[i].style.display='none'
            // }

        }

        // console.log(data[0].title.split('').includes(text))
        
        // console.log(data[0].title.split('').includes(text))

        // for(i=0;i<data.length;i++){
            
        // }
    })
})