<script lang="ts">
  import { sanityClient } from "$lib/sanityClient.js";
   import imageUrlBuilder from "@sanity/image-url" 
    function forImgurl(image:any){
      let builder=imageUrlBuilder(sanityClient);
      let imageUrl = builder.image(image).url();
      return imageUrl;
  }

 export let data;
  
 let productimageurl = forImgurl(data.productData.image[0]);
 console.log(productimageurl)
</script>
<h1>{data.productData.name}</h1>
<img src={productimageurl} alt="">