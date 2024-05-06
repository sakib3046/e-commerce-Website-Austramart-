<script lang="ts">
  export let productImageUrl;
  export let productPrice;
  export let productDesc;
  export let productTitle;
  export let productSlug;
</script>

<div
  class="bg-gray-200 h-[350px] w-[250px] rounded-xl hover:shadow-2xl hover:scale-105 transition duration-200 ease-in-out justify-center relative grid grid-rows-3 border-gray-200 border-4"
>
  <div class="row-span-2 bg-white rounded-xl overflow-hidden">
    <img src={productImageUrl} alt="">
                                          
  </div>
  <div class="row-span-1 m-4" id="card-title-decs">
    <a href={`/product/`}{productSlug.current} class="">
      <h4>{productTitle}</h4>
    </a>
    <div class="truncate w-[210px] opacity-80 py-1">
      <h6>
        {productDesc}
      </h6>
    </div>

    <div class="flex justify-between">
      <button class="btn bg-black text-white hover:shadow-lg">Buy</button>
      <button class="btn bg-black text-white hover:shadow-lg">Cart</button>
    </div>
  </div>
</div>

