import {Item} from "@/types";

export function getItems(): Item[] {
    return [
        {
            name: "Table",
            price: 80,
            description: "Une super table pour faire des bons repas entre amis !",
            image: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=400"
        },
        {
            name: "Chaise",
            price: 50,
            description: "Mieux qu'une chaise keshua ou qu'un cailloux",
            image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=400"
        },
        {
            name: "Fauteuil",
            price: 100,
            description: "Le confort en un seul mot",
            image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400"
        },
        {
            name: "Lit",
            price: 200,
            description: "Pour les nuits douces et confortables",
            image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400"
        },
        {
            name: "Canapé",
            price: 150,
            description: "Ce n'est pas celui des simpsons mais il en vaut le détour ceci-dit",
            image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400"
        },
        {
            name: "Commode",
            price: 80,
            description: "Meuble de stockage pour tous vos souvenirs, de l'album photo de la famille à la relique de papy",
            image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400"
        }
    ];
}
