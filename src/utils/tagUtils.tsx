import { Armangac_bourbon_cognac_whiskey } from "./Armangac_bourbon_cognac_whiskey";
import { Cachaca_mezcal_pisco_sotol_tequila } from "./Cachaca_mezcal_pisco_sotol_tequila";
import { Cordials_Gin_Rum_Vodka } from "./Cordials_Gin_Rum_Vodka";
import { RTD } from "../components/RTD";

export const getUniqueTags = (): string[] => {
    const allProducts = [
        ...Armangac_bourbon_cognac_whiskey,
        ...Cachaca_mezcal_pisco_sotol_tequila,
        ...Cordials_Gin_Rum_Vodka,
        ...RTD,
    ];

    const allTags = allProducts.flatMap((product) => product.tags);
    return Array.from(new Set(allTags))
}