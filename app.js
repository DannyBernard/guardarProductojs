class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }


}
class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class = "card text-center mb-4>" >
                <div class="card-body">
                    <strong>product Name</strong>: ${product.name}
                    <strong>product Price</strong>: ${product.price}
                    <strong>product year</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete"> Delete</a>
                </div>
        </div >
          `;
        productList.appendChild(element);
    }

    restfrom(){
        document.getElementById('product-form').reset();
    }

    deleteProduct() {
    
    }

    showmessage() {

    }
}

//dome event
document.getElementById('product-form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;

    console.log(name, price, year);

    const product = new Product(name, price, year);

    const ui = new UI();
  

    ui.addProduct(product);
    ui.restfrom();
    e.preventDefault();



});

document.getElementById('product-list').addEventListener('click',function(e){
 
});

