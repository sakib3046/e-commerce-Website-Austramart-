<script>
  import Footer from "./components/footer.svelte";
  import Header from "./components/header.svelte";
  import ProductCard from "./components/productCard.svelte";
  import Products from "./components/products.svelte";

  export let data;
</script>
<div class="">
  <Header bannerData={data.bannerData[0]}/>
  <Products products={data.productData}/>
  <Footer/>
</div>
