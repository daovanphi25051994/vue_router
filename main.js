 
    let app = new Vue({
        el: '#app',
        data: {
            message: 'Hello world',
            url: 'https://www.youtube.com/',
            price: 12000,
            counter: 0
        },
        methods: {
            showMessage(name){
                return this.message + name;
            
            },
            formatPrice(number){
                let price = this.price;
                return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(price);
            },
            click(number){
                this.counter += number;
            },
            onSubmit(e){
                console.log("ok");
                console.log(e);
            }
        }
    })
    console.log(app.message);