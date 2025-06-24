const products = [
    {
        id: "1",
        title: "Kimetsu No Yaiba - Infinity Castle Movie I",
        price: 15.99,
        image: "https://media.tycsports.com/files/2024/07/04/737792/kimetsu-no-yaiba-tendra-una-quinta-temporada-dividida-en-tres-peliculat_640x640.webp",
        description: "The Demon Slayer Corps plunge into Infinity Castle to defeat Muzan, facing new challenges and powerful demons.",
        category: "anime",
        reviews: [ 
            {
                author: "Maria",
                date: "April",
                text: "I love it! Best animation of the year! Truly immersive experience."
            },
            {
                author: "Carlos",
                date: "March",
                text: "A must-watch for Demon Slayer fans. The action sequences were incredible!"
            }
        ]
    },
    {
        id: "2",
        title: "Chainsawman Vol. 1",
        price: 19.99,
        image: "https://acdn-us.mitiendanube.com/stores/399/159/products/chainsawman14_variant-914f602099ead0d7c417042121597503-640-0.jpg",
        description: "Chainsaw Man follows the story of Denji, an impoverished teenager who forms a contract with a Chainsaw Devil.",
        category: "manga",
        reviews: [
            {
                author: "Laura",
                date: "May",
                text: "Dark, gritty, and hilarious! The art style is unique."
            }
        ]
    },
    {
        id: "3",
        title: "Vinland Saga Vol. 1",
        price: 12.99,
        image: "https://acdn-us.mitiendanube.com/stores/001/184/069/products/vinland_saga_vol_11-bdfd5549904a9250ef16372532500299-640-0.jpg",
        description: "In 1013 AD, the young Thorfinn works for Askeladd, a Viking mercenary, seeking revenge for his father's death.",
        category: "manga",
        reviews: [] 
    },
    {
        id: "4",
        title: "Your Name",
        price: 16.25,
        image: "https://www.lahiguera.net/cinemania/pelicula/7933/your_name_-cartel-7374.jpg",
        description: "Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person.",
        category: "anime",
        reviews: [
            {
                author: "Cecile",
                date: "June",
                text: "I'm still crying..."
            }
        ] 
    },
    {
        id: "5",
        title: "Full Metal Alchemist Vol. 1,2,3",
        price: 12.30,
        image: "https://store.crunchyroll.com/on/demandware.static/-/Sites-crunchyroll-master-catalog/default/dw4e823efd/rightstuf/9781421540184_manga-Fullmetal-Alchemist-Graphic-Novel-1-3-Omnibus.jpg",
        description: "Fullmetal Alchemist (FMA) is a Japanese manga and anime series that follows the brothers Edward and Alphonse Elric as they seek to restore their bodies after a disastrous attempt at human transmutation.",
        category: "manga",
        reviews: [
        ] 
    }
]

//Buscador por categoria
//  function buscarCategory(cat){
//     let result = products.filter(producto => producto.category === cat)
//     if (result.length > 0){
//         return result.map(products.title)
//     }else{
//         return "Category not found"
//     }
//  }