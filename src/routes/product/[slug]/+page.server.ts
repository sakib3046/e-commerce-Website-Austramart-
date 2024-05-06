import { sanityClient } from "$lib/sanityClient";
import { error } from '@sveltejs/kit';


export async function load() {
    const productQuery ='*[_type == "product" && slug.current ==]';
    const productData = await sanityClient.fetch(productQuery);

    if (!{productData}) {
        throw error(404);
        
    }
    return {productData};
}
