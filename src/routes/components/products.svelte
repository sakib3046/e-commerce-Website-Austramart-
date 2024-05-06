<script>
  import { forImgurl } from "$lib/sanityClient";
import ProductCard from "./productCard.svelte";
  export let products;
  

</script>
<div class="p-4 flex flex-row">
    {#each products as product }
    <div class="p-4">
        <ProductCard productDesc={product.details} productImageUrl={forImgurl(product.image[0])} productSlug={product.slug} productPrice='' productTitle={product.name}/>
    </div>


    {/each}
    
</div>