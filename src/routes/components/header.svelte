<script lang="ts">
  import { forImgurl } from "$lib/sanityClient";

    export let bannerData;

</script>
<header class="relative overflow-hidden w-screen h-[500px] bg-gray-300  rounded-2xl">
    
    <div class="  flex flex-col  justify-center px-4 py-6">
        <a href='' class="absolute top-2 text-xl"><span class="font-bold">Austra</span> Mart</a>
        <div class=" p-4 mt-4 absolute top-[25%] z-20">
            <h2>{bannerData.smallText}</h2>
            <h1 class="font-bold text-white">{bannerData.midText}</h1>
            <button class="bg-black text-white btn my-2 hover:bg-white hover:text-black">{bannerData.buttonText}</button>
        </div>


        <div class="p-4 flex flex-col justify-end text-end z-10 absolute bottom-[5%] right-[10%]">
            <h5 class="opacity-75">Description</h5>
            <h6>{bannerData.desc}</h6>
        </div>
            <img class="absolute top-0 right-[20%] w-[450px] h-[450px]" src={forImgurl(bannerData.image)} alt="">
    </div>

</header>