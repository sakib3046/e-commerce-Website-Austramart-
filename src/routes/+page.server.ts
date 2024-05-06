import { sanityClient } from "$lib/sanityClient";
import { error } from '@sveltejs/kit';

export async function load() {
    const productQuery ='*[_type == "product"]';
    const productData = await sanityClient.fetch(productQuery);

    const bannerQuery ='*[_type == "banner"]';
    const bannerData = await sanityClient.fetch(bannerQuery);

    if (!{productData,bannerData}) {
        throw error(404);
        
    }
    return {productData,bannerData};
}
