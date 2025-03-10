<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { ref, onMounted, } from 'vue';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();


const slides = ref([
  {
    sliderImage: 'img/cleverchair.svg',
    heading: "Ügyeskocsik",
    elements: [
      { EID: '0', class: 'first-element', image: 'icons/clock.svg', size: 'w-[27%] h-[27%]' },
      { EID: '1', class: 'second-element', image: 'icons/whistle.svg', size: 'w-[25%] h-[25%]' },
      { EID: '2', class: 'third-element', image: 'icons/trofee.svg', size: 'w-[37%] h-[37%]' }
    ]
  },
  {
    sliderImage: 'img/citychair.svg',
    heading: "Városikocsik",
    elements: [
      { EID: '0', class: 'first-element', image: 'icons/sunglasses.svg', size: 'w-[30%] h-[30%]' },
      { EID: '1', class: 'second-element', image: 'icons/camera.svg', size: 'w-[30%] h-[30%]' },
      { EID: '2', class: 'third-element', image: 'icons/phonemap.svg', size: 'w-[30%] h-[30%]' }
    ]
  },
  {
    sliderImage: 'img/tripchair.svg',
    heading: "Túrakocsik",
    elements: [
      { EID: '0', class: 'first-element', image: 'icons/mineral.svg', size: 'w-[35%] h-[35%]' },
      { EID: '1', class: 'second-element', image: 'icons/fruits.svg', size: 'w-[23%] h-[23%]' },
      { EID: '2', class: 'third-element', image: 'icons/bino.svg', size: 'w-[30%] h-[30%]' }
    ]
  },
  {
    sliderImage: 'img/partychair.svg',
    heading: "Bulikocsik",
    elements: [
      { EID: '0', class: 'first-element', image: 'icons/speaker.svg', size: 'w-[35%] h-[35%]' },
      { EID: '1', class: 'second-element', image: 'icons/marshmallow.svg', size: 'w-[30%] h-[30%]' },
      { EID: '2', class: 'third-element', image: 'icons/cooler.svg', size: 'w-[28%] h-[28%]' }
    ]
  },
  {
    sliderImage: 'img/walkingchair.svg',
    heading: "Sétakocsik",
    elements: [
      { EID: '0', class: 'first-element', image: 'icons/flowers.svg', size: 'w-[35%] h-[35%]' },
      { EID: '1', class: 'second-element', image: 'icons/flower1.svg', size: 'w-[32%] h-[32%]' },
      { EID: '2', class: 'third-element', image: 'icons/greenleaves.svg', size: 'w-[43%] h-[43%]' }
    ]
  }
]);



</script>

<template>
  <div>
    <section id="home" class="hero">
      <div class="hero-base"></div>
      <div class="hero-slide-wrapper">
        <h1>VALÓBAN NINCS MÁSODIK!</h1>
        <swiper-container class="hero-swiper" :breakpoints="{
          768: { slidesPerView: 3 },
          640: { slidesPerView: 2 },
          450: { slidesPerView: 1 }
        }" navigation="true" autoplay-delay="4500" autoplay-disable-on-interaction=" false" loop="true"
          preload-images="false" style="width:100vw; transition: transform 0.6s ease-in-out;">
          <swiper-slide v-for="(slide, index) in slides" :key="index">
            <div class="balls-wrapper">
              <img src="/img/whiteStripedBall.svg" alt="ball" class="white-ball">
              <img :src="slide.sliderImage" alt="slidePic" ref="sliderImages" class="slider-pics">
              <h2>{{ slide.heading }}</h2>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>

    </section>
    <section class="title">
      <p><span class="font-krona text-[5vw]">Mi az </span><span class="font-bold text-[8vw]">E</span><span
          class="font-bold text-[5vw]"> -sétakocsi?</span></p>
      <p class="title-striped">ÉLMÉNYJÁRMŰ</p>
    </section>

    <section class="enum">
      <div class="orange-circle">
        <img src="/img/whiteStripedBall.svg" alt="ball" class="orange-circle-striped">

        <Avatar class="enumlist-items w-[80vw] sm:w-[82vw] sm:translate-x-[18%] sm:-translate-y-[85%]"
          :avatarDirection=true avatarImg="img/playground.svg" avatarImgSize="h-[20vw] sm:h-[12vw]"
          avatarLabel="Játékos feladatokkal, ügyességi versenyekkel, szórakoztató kihívásokkal színesíti meg a gyermektáborok, fiatal közösségek, gyermek- és családi rendezvények programjait." />

        <Avatar class="enumlist-items w-[80vw] sm:w-[72vw] sm:translate-x-[34.5%] sm:-translate-y-[125%]"
          :avatarDirection=true avatarImg="img/city2.svg" avatarImgSize="h-[20vw] sm:h-[10.5vw]"
          avatarLabel="Egyedibb megjelenéssel és élménnyel gazdagított városnézést is lehetővé tesz. Adott idő alatt több látnivaló meglátogatása, kényelem és praktikusság jellemzi." />

        <Avatar class="enumlist-items w-[80vw] sm:w-[69vw] sm:translate-x-[40%] sm:-translate-y-[140%]"
          :avatarDirection=true avatarImg="img/forest.svg" avatarImgSize="h-[20vw] sm:h-[9vw]"
          avatarLabel="Túrázáshoz, kiránduláshoz is használható, pl a távolság megnövelésére, kalandos utazássá varázsolva a természetjárást. " />

        <Avatar class="enumlist-items w-[80vw] sm:w-[72vw] sm:translate-x-[34.5%] sm:-translate-y-[153%]"
          :avatarDirection=true avatarImg="img/fireplace.svg" avatarImgSize="h-[20vw] sm:h-[8vw]"
          avatarLabel="Csapatépítő tréningek, születésnapi partik, baráti összejövetelek, leány- és legénybúcsúk vidámságot, közös élményt nyújtó segítője.." />

        <Avatar class="enumlist-items w-[80vw] sm:w-[82vw] sm:translate-x-[24%] sm:-translate-y-[195%]"
          :avatarDirection=true avatarImg="img/arboretum.svg" avatarImgSize="h-[20vw] sm:h-[7vw]"
          avatarLabel="Arborétumok, parkok, sétányok, ligetek békés, csendes suhanója." />
      </div>
    </section>

    <section id="about" class="about">
      <div class="word-wrapper">
        <h2>R</h2>
        <div class="letter-wrapper">
          <img src="/img/caret.svg" alt="about" class="w-[30%]">
          <div class="o-wrapper">
            <img src="/img/striped-circle.svg" alt="about">
            <div class="white-circle"></div>
          </div>
        </div>
        <div class="arrow-wrapper">
          <h2 class="">LUNK</h2>
          <div class="arrows">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <article class="about-article">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget arcu scelerisque dolor ultricies egestas
          vitae sed lacus. Morbi aliquet odio non sapien placerat, eget venenatis nisi consectetur. Curabitur faucibus
          facilisis mollis.</p>
      </article>
    </section>


    <section id="mission" class="mission">
      <h2>Küldetésünk</h2>
      <article>
        <Avatar class="gap-16" :avatarDirection=true avatarImg="/img/ketten_clip.webp" avatarImgSize="calc(100vw/3)"
          avatarLabel="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget arcu scelerisque dolor ultricies egestas vitae sed lacus. Morbi aliquet odio non sapien placerat, eget venenatis nisi consectetur. Curabitur faucibus facilisis mollis." />
      </article>
      <p>Tudj meg többet rólunk!</p>
    </section>

    <section id="gallery" class="section">
      <h2>Galéria</h2>
      <p>Tekintsd meg galériánkat.</p>
    </section>

    <section id="offer" class="section">
      <h2>Ajánlatunk</h2>
      <article class="asymetric-article">

        <Avatar class="gap-16" :avatarDirection=true avatarImg="/img/ketten_clip.webp" avatarImgSize="calc(100vw/3)"
          avatarLabel="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget arcu scelerisque dolor ultricies egestas vitae sed lacus. Morbi aliquet odio non sapien placerat, eget venenatis nisi consectetur. Curabitur faucibus facilisis mollis." />

      </article>
      <p>Itt található az ajánlatunk részletezése.</p>
    </section>

    <section id="contact" class="section">
      <h2>Kapcsolat</h2>
      <p>Elérhetőségeink és kapcsolatfelvétel.</p>
    </section>
  </div>





</template>

<style></style>
