const data = {


    Breakfast: [{
            img: "/images/item-1.jpeg",
            title: "Buttermilk Pancakes",
            price: "$15.99",
            description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        },
        {
            img: "/images/item-4.jpeg",
            title: "Country Delight",
            price: "$20.99",
            description: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
        },
        {
            img: "/images/item-7.jpeg",
            title: "Bacon Overflow",
            price: "$8.99",
            description: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
        },

    ],
    lunch: [{
            img: "/images/item-2.jpeg",
            title: "Diner Double",
            price: "$13.99",
            description: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
        },
        {
            img: "/images/item-5.jpeg",
            title: "Egg Attack",
            price: "$22.99",
            description: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
        },
        {
            img: "/images/item-8.jpeg",
            title: "American Classic",
            price: "$12.99",
            description: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
        },
    ],
    shakes: [{
            img: "/images/item-3.jpeg",
            title: "Godzilla Milkshake",
            price: "$6.99",
            description: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
        },
        {
            categg: ' shakes',
            img: "/images/item-6.jpeg",
            title: "Oreo Dream",
            price: "$18.99",
            description: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
        },
        {
            img: "/images/item-9.jpeg",
            title: "Quarantine Buddy",
            price: "$16.99",
            description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        },
    ],
}






const docC = document.querySelector(".cards");

// let sir = data.Breakfast && data.lunch && data.shakes;
// if (sir) {
let sir = [];
if (data.Breakfast && data.lunch && data.shakes) {
    sir = sir.concat(data.Breakfast, data.lunch, data.shakes)
}





for (let i = 0; i < sir.length; i++) {
    docC.innerHTML +=
        `
    <div class = "cards_main">
    <div class = "image">
    <img  src= "${sir[i].img}" class="img">

    </div>
    <div class="info">
    <div class= "T_p">
    <h3>${sir[i].title}</h3>
    <p id="price">${sir[i].price}</p>
    </div>
    <p id="desc"> ${sir[i].description}</p>


    </div>

    </div>
`
}
// }


const Allbutn = document.getElementById("All");

Allbutn.addEventListener('click', (e) => {


    docC.innerHTML = "";



    for (let i = 0; i < sir.length; i++) {
        docC.innerHTML +=
            `
        <div class = "cards_main">
        <div class = "image">
        <img  src= "${sir[i].img}" class="img">
    
        </div>
        <div class="info">
        <div class= "T_p">
        <h3>${sir[i].title}</h3>
        <p id="price">${sir[i].price}</p>
        </div>
        <p id="desc"> ${sir[i].description}</p>


        </div>

        </div>
    `

    }
    console.log("inside if statemen  : = > :", docC)

})


const Breakfastbutn = document.getElementById("Break");





Breakfastbutn.addEventListener('click', () => {
    docC.innerHTML = "";



    const sir2 = data.Breakfast;

    for (let i = 0; i < sir2.length; i++) {
        docC.innerHTML +=
            `
        <div class = "cards_main">
        <div class = "image">
        <img  src= "${sir2[i].img}" class="img">
    
        </div>
        <div class="info">
        <div class= "T_p">
        <h3>${sir2[i].title}</h3>
        <p id="price">${sir2[i].price}</p>
        </div>
        <p id="desc"> ${sir2[i].description}</p>


        </div>

        </div>
    `
    }
})



const lunchbutn = document.getElementById("Lunch")




lunchbutn.addEventListener('click', () => {
    docC.innerHTML = "";



    const sir3 = data.lunch;

    for (let i = 0; i < sir3.length; i++) {
        docC.innerHTML +=
            `
        <div class = "cards_main">
        <div class = "image">
        <img  src= "${sir3[i].img}" class="img">
    
        </div>
        <div class="info">
        <div class= "T_p">
        <h3>${sir3[i].title}</h3>
        <p id="price">${sir3[i].price}</p>
        </div>
        <p id="desc"> ${sir3[i].description}</p>


        </div>

        </div>
    `
    }
})






const shakesbutn = document.getElementById("Dinner")




shakesbutn.addEventListener('click', () => {
    docC.innerHTML = "";



    const sir4 = data.shakes;

    for (let i = 0; i < sir4.length; i++) {
        docC.innerHTML +=
            `
        <div class = "cards_main">
        <div class = "image">
        <img  src= "${sir4[i].img}" class="img">
    
        </div>
        <div class="info">
        <div class= "T_p">
        <h3>${sir4[i].title}</h3>
        <p id="price">${sir4[i].price}</p>
        </div>
        <p id="desc"> ${sir4[i].description}</p>


        </div>

        </div>
    `
    }
})


// let shakes = (img, title, price, desc) => {

//     if ()
//         docC.innerHTML +=
//         `
//         <div class = "cards_main">
//         <div class = "image">
//         <img  src= "${sir4[i].img}" class="img">

//         </div>
//         <div class="info">
//         <div class= "T_p">
//         <h3>${sir4[i].title}</h3>
//         <p id="price">${sir4[i].price}</p>
//         </div>
//         <p id="desc"> ${sir4[i].description}</p>


//         </div>

//         </div>
//     `
// }


















}