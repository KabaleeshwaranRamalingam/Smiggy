let getData = async()=>{
    var fetchData= await fetch("data.json")
    var result=await fetchData.json()
    console.log(result);
    result.map((index,value)=>{
        var div =document.createElement("div")
        div.setAttribute("class","productCard")
        div.innerHTML+= '<a href="'+index.image+'"><img src="'+index.image +'" class="productImage"/></a>'+'<h1 class="producth1">'+index.hotel+'</h1>'+'<h3 class="producth3">'+index.Location+'</h3>'

        var productSection=document.getElementById("productSection")
        productSection.appendChild(div)
    })
}
getData()

function dark(){
    document.body.classList.toggle("darkMode")

}