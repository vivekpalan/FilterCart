// async function apifunc(){
    
    //     const data= await api.json()
    //     console.log(data)
    //     const api= await fetch('https://fakestoreapi.com/products');

// }
 

const search=document.querySelector('#search');
const productListing= document.createElement( 'div' );
console.log(productListing)


document.body.appendChild(productListing)
productListing.classList.add('product-listing')

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
            // console.log(card)

           

            // for(j=0;j<splitName.length;i++){
            //     if(splitName[0]==="F"){
            //         console.log('It is found in the card',i,'with the text position of',j)
            //     }

            // }
            
        }
    
        // data.forEach(element => {
        //     const card= document.createElement('div');
        //     card.classList.add('card');
        //     card.innerHTML=`
        //     <div class="img-container">
        //         <img src="${element.image}" alt="This is image">
        //     </div>
        //     <div class="contents">
        //         <h3 class="product-name">${element.title}</h3>
        //         <div class="product-description">${element.description}</div>
        //         <button class="product-price">${element.price}</button>
        //     </div>`;
    
        //     productListing.appendChild(card)
            
        // });
       
    
    
        // for(i=0;i<data.length;i++){
        //     if(e.key===data[i].title){
        //         console.log('The string matches in the title',i)
        //     }
    
        // }
    })

}


apiCall()

function filterApi(key){
    const api= fetch('https://fakestoreapi.com/products')
    api.then((res)=>{
        return res.json()
    }).then((data)=>{
        // console.log(data)
        const splitword=document.querySelector('.product-name').textContent.split('');
        console.log(splitword);

        data.filter((e,i)=>{

        //    console.log(e.title.split(''))
        for(i=0;i<splitword.length;i++){
            if(key==e.title.split('')[i]){

                const card=document.querySelectorAll('.card')
                console.log(card[i])

                console.log('found in the positon',i)

            }

        }
            // return e
        })
    })
}

let filterArray=[];


search.addEventListener('keyup',(e)=>{
    console.log(e.key);

    const api= fetch('https://fakestoreapi.com/products')
    api.then((res)=>{
        return res.json()
    }).then((data)=>{
        
        filterArray=data.filter((element,i)=>{

            console.log(element.title.includes(e.key),i)

            if(element.title.includes(e.key)){
                return element.title
            }
              
        })

        console.log(filterArray)

        for(i=0;i<filterArray.length;i++){

            const card=document.querySelectorAll('.card')
            console.log(card[i])

        }

    })


})




































// search.addEventListener('keypress',(e)=>{
//     const productTitle=document.querySelector('.product-name')
  

//     // for(i=0;i<splitword.length;i++){
//     //     if(splitword[i]==e.key){
//     //         console.log('The string matches and is present in the position',i)
//     //         // If the cards have content similar to the key word then display the product card
//     //         // First go with the product name then description and then price
            
//     //     }

//     // }

//     const api= fetch('https://fakestoreapi.com/products');
//         api.then((res)=>{
//             return res.json()
//         }).then((data)=>{

//             const productName=document.querySelectorAll('.product-name');
//             const productDescription=document.querySelectorAll('.product-description');
//             console.log(productDescription[0].textContent.split(''))
//             const productPrice=document.querySelectorAll('.product-price');
//             // console.log(productName,productDescription,productPrice)

//             for(i=0;i<data.length;i++){
//                 if(productName[i].textContent.split('')[i]==e.key || productDescription[i].textContent.split('')[i]==e.key || productPrice[i].textContent==e.key){
                    
//                     console.log(productName[].textContent,productDescription,productPrice)
//                     console.log('if condition is true',i)


//                 }

//             }


//             console.log(productName[0].textContent);
//             const splitword= productName[2].textContent.split("");
//             console.log(splitword)

//             // for(i=0;i<data.length;i++){
//             //     console.log('card',i)

//             //     for(j=0;j<splitword.length;j++){
//             //         if(splitword[j]==e.key){
//             //             console.log('It matches',i)
                        
//             //         }
    
//             //     }

//             // }

//             // const filtered = splitword.filter((e,i)=>{
//             //     console.log(search.value)
//             //     if(e==search.value){
//             //         console.log('The key matches the element',i)
//             //         return e
//             //     }
//             // })

//             // console.log(filtered)


//             for(i=0;i<data.length;i++){
            
//                 // const splitName=productName[i].textContent.split('');

//                 // console.log(splitName)

//                 // console.log(splitName);
                
//                     // let filtered=[]

//                     // filtered[i] = splitName.filter((elem,i)=>{
//                     //     if(e.key===elem){
//                     //         console.log(elem,'is present in the position',i)
//                     //         return elem
//                     //     }
//                     // })
//                     // let filterArr=[]
//                     // filterArr.push(filtered.length);

//                     // console.log(filterArr)
        
//             }
//         })



//     // if(e.key===productTitle){
//     //     console.log('This ')
//     // }

   
// })


// function filterList(){

//     const api= fetch('https://fakestoreapi.com/products');
//     api.then((res)=>{
//         return res.json()
//     }).then((data)=>{

//         for(i=0;i<data.length;i++){
//             const productTitle=document.querySelectorAll('.product-name');
//             const splitword= productTitle[i].textContent.split("");
//             console.log(splitword)
//             if(splitword[i]===e.key){
               
//             }
//         }
        
//     })
    
// }
