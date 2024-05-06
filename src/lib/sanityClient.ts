import { createClient } from '@sanity/client';
import imageUrlBuilder from "@sanity/image-url"
export const sanityClient = createClient({
    projectId: 'hfjfujm9',
    dataset: 'production',
    apiVersion:'2022-03-10',
    useCdn: true,
    // token: process.env.SVELTE_PUBLIC_SANITY_TOKEN
  });
  
  export function forImgurl(image:any){
      let builder=imageUrlBuilder(sanityClient);
      let imageUrl = builder.image(image).url();
      return imageUrl;
  }