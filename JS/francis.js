function addToCart(name) {

    // 🔹 PRODUCT CATALOG (can grow)
const catalog = {
                   
                    "Kaju Katli": {
                    price: 500,
                    img: "Images/kajukatli.png"
                    },

                    "Ladoo": {
                        price: 300,
                        img: "Images/ladoo.jpg"
                    },

                    "Rasgulla": {
                        price: 250,
                        img: "Images/rasgulla.jpg"
                    },

                    "Gulab Jamun": {
                        price: 150,
                        img: "Images/gulabjamun.webp"
                    },
                    "Cheez Doodles": {
                        price: 120,
                        img: "Images/cheez.jpg"
                    },

                    "Healthy Snack Pack": {
                        price: 150,
                        img: "Images/snackpack.webp"
                    },

                    "Provotic Fruichias": {
                        price: 80,
                        img: "Images/fruichias.webp"
                    },

                    "Profitness Protein Bar": {
                        price: 450,
                        img: "Images/proteinbar.webp"
                    },
                    "Pancakes": {
                        price: 200,
                        img: "Images/pancake.jpg"
                    },

                    "Pie": {
                        price: 250,
                        img: "Images/pie.jpg"
                    },

                    "Donut": {
                        price: 100,
                        img: "Images/donut.avif"
                    },

                    "Croissant": {
                        price: 100,
                        img: "Images/croissant.webp"
                    },
                    "Mango": {
                        price: 150,
                        img: "Images/mango.webp"
                    },

                    "Apple": {
                        price: 120,
                        img: "Images/apple.webp"
                    },

                    "Banana": {
                        price: 80,
                        img: "Images/banana.jpg"
                    },

                    "Grapes": {
                        price: 90,
                        img: "Images/grapes.jpg"
                    },
                    "Milk (Toned)": {
                        price: 60,
                        img: "Images/milk.avif"
                    },

                    "Yogurt (Curd)": {
                        price: 40,
                        img: "Images/curd.jpg"
                    },

                    "Cheese": {
                        price: 150,
                        img: "Images/cheese.jpg"
                    },

                    "Butter": {
                        price: 60,
                        img: "Images/butter.webp"
                    },
                    "Cold Coffee": {
                        price: 100,
                        img: "Images/coldcoffee.jpg"
                    },

                    "Chocolate Milkshake": {
                        price: 100,
                        img: "Images/milkshake.jpg"
                    },

                    "Lemon Juice": {
                        price: 50,
                        img: "Images/lemonjuice.jpg"
                    },

                    "Orange Juice": {
                        price: 50,
                        img: "Images/orangejuice.jpg"
                    }
                };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let product = catalog[name] || {
        price: 0,
        img: "Images/default.png"
    };

    let found = cart.find(item => item.name === name);

    if (found) {
        found.qty += 1;
    } else {
        cart.push({
            name: name,
            price: product.price,
            img: product.img,
            qty: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // Button UI (no HTML change)
    let btn = event.target;
    btn.innerHTML = "Added ✓";
    btn.disabled = true;
    btn.style.backgroundColor = "#4CAF50";

    alert(name + " added to cart 🛒");
}


    localStorage.setItem("cart", JSON.stringify(cart));

    // 🔥 MAGIC PART — get clicked button
    let btn = event.target;
{
    btn.innerHTML = "Added ✓";
    btn.disabled = true;
    btn.style.backgroundColor = "#4CAF50";
    btn.style.cursor = "not-allowed";

    alert(name + " added to cart 🛒");
}
