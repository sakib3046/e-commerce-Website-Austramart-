import { sanityClient } from "$lib/sanityClient";
import { error } from '@sveltejs/kit';


export async function load({ params }) {
    const productSlug = params.slug
    const productQuery =`*[_type == "product" && slug.current == '${productSlug}'][0]`;
    const productData = await sanityClient.fetch(productQuery);

    
    console.log(productData)

    if (!{productData}) {
        throw error(404);
        
    }
    return {productData};
}
