const coffeeShop = {
    branch: "Costa",
    menu : {
        coffee: 2,
        tea: 2.50,
        "iced tea": 4.00
    },
    order(orderItems){
        let total = 0;
        console.log(`This ${this.branch} is here to serve you. \n`)
        for (const item of orderItems){
            if(this.menu[item] !== undefined){
                total += this.menu[item]
                console.log(item)
                console.log(this.menu[item])
    }else{
        console.log(`Sorry we don't have ${item} in stock at moment`)
        }
        }
        console.log(total)
    }}
coffeeShop.order ([`coffee`, `tea`, `iced tea`]);
