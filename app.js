class product{
    constructor(name,precio,year){
    this.name =name;
    this.price=price;
    this.year=year;
    }

    
}
class UI{
      addProduct(){

      }  
      deleteProduct(){

      }

    showmessage(){

    }
}

//dome event
document.getElementById('product-form').addEventListener('submit',function(e){
   const name = document.getElementById('name').value;
   const price= document.getElementById('price').value;
   const year = document.getElementById('year').value;

   console.log(name,price,year);

   e.preventDefault();

})

