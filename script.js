const products = [
    {
        title : "jordan",
        price : 12000,
        tedad : 10,
        category : "shoes"
    },
    {
        title : "nike",
        price : 12000,
        tedad : 10,
        category : "T-shirt"
    },
    {
        title : "abdullah",
        price : 12000,
        tedad : 10,
        category : "jeans"
    }
]

for(let i = 0;i < products.length;i++){
    const boxs = document.getElementById("boxs")
        boxs.innerHTML += `
            <div class="box" id="box${products[i].title}">
                <section>
                    <h3>${products[i].title}</h3>
                    <h3>${products[i].price}</h3>
                    <input type="button" value="✏" id="edit" onclick="edit()">
                    
                </section>
                <section >
                    <h5>${products[i].category}</h5>
                    <h5>${products[i].tedad}</h5>
                <input type="button" value="❌" id="delete" onclick="remove(${i})">

                </section>
            </div>`
}



function show(){
    const modal = document.getElementById("modal")
    const backdrop = document.getElementById("backdrop")
    modal.style.display = "block"
    backdrop.style.display = "block"
}
function closee(){
    const modal = document.getElementById("modal")
    const backdrop = document.getElementById("backdrop")
    modal.style.display = "none"
    backdrop.style.display = "none"
}
function done(){
    const title = document.getElementById("title").value
    const price = document.getElementById("price").value
    const tedad = document.getElementById("tedad").value
    const category = document.getElementById("category").value
    const boxs = document.getElementById("boxs")
    
    if(title,price == ""){
        console.log("کامل پر کن")
    }else{
        products.push({title : title, price : price, tedad:tedad ,category:category})
        boxs.innerHTML += `
         <div class="box">
                <section id="name">
                    <h3>${products[products.length-1].title}</h3>
                    <h3>${products[products.length-1].price}</h3>
                <input type="button" value="✏" id="edit" onclick="edit()">
                    
                </section>
                <section >
                    <h5>${products[products.length-1].category}</h5>
                    <h5>${products[products.length-1].tedad}</h5>
                <input type="button" value="❌" id="delete">

                </section>
            </div>`
    
        modal.style.display = "none"
        backdrop.style.display = "none"
    }

}


function edit(){
    modal.style.display = "block"
    backdrop.style.display = "block"
}
function remove(i){
    delete products[i]
    console.log(products)
    // const box =document.getElementById("box"+products[0].title)
    // box.style.display = "none"
}
document.getElementById("search").addEventListener("input" , function(){
    const input=  this.value.trim()
    products.forEach((product)=>{
        const box =document.getElementById("box"+product.title)
        if(product.title.includes(input)){
            box.style.display = "block"          
        }else{
            box.style.display = "none"
        }

    })
})

function fillter(){
    const cat = document.getElementById("category").value
    products.forEach((product)=>{
        const box =document.getElementById("box"+product.category)
        if(product.category.includes(cat)){
            console.log(product.category)
            console.log("found")
            box.style.display = "block"
        }else{
            console.log("not found")
            box.style.display = "none"
        }
    })
}

document.getElementById("mojodi").innerHTML += products.length
