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
      { EID: '0', class: 'first-element', image: 'icons/clock.svg', size: 'w-[20%] h-[20%]' },
      { EID: '1', class: 'second-element', image: 'icons/whistle.svg', size: 'w-[18%] h-[18%]' },
      { EID: '2', class: 'third-element', image: 'icons/trofee.svg', size: 'w-[27%] h-[27%]' }
    ]
  },
  {
    sliderImage: 'img/citychair.svg',
    heading: "Városikocsik",
    elements: [
      { EID: '0', class: 'first-element', image: 'icons/sunglasses.svg', size: 'w-[12%] h-[12%]' },
      { EID: '1', class: 'second-element', image: 'icons/camera.svg', size: 'w-[13%] h-[13%]' },
      { EID: '2', class: 'third-element', image: 'icons/phonemap.svg', size: 'w-[25%] h-[25%]' }
    ]
  },
  {
    sliderImage: 'img/tripchair.svg',
    heading: "Túrakocsik",
    elements: [
      { EID: '0', class: 'first-element', image: 'icons/mineral.svg', size: 'w-[25%] h-[25%]' },
      { EID: '1', class: 'second-element', image: 'icons/fruits.svg', size: 'w-[20%] h-[20%]' },
      { EID: '2', class: 'third-element', image: 'icons/bino.svg', size: 'w-[20%] h-[20%]' }
    ]
  },
  {
    sliderImage: 'img/partychair.svg',
    heading: "Bulikocsik",
    elements: [
      { EID: '0', class: 'first-element', image: 'icons/speaker.svg', size: 'w-[29%] h-[29%]' },
      { EID: '1', class: 'second-element', image: 'icons/marshmallow.svg', size: 'w-[25%] h-[25%]' },
      { EID: '2', class: 'third-element', image: 'icons/cooler.svg', size: 'w-[24%] h-[24%]' }
    ]
  },
  {
    sliderImage: 'img/walkingchair.svg',
    heading: "Sétakocsik",
    elements: [
      { EID: '0', class: 'first-element', image: 'icons/flowers.svg', size: 'w-[27%] h-[27%]' },
      { EID: '1', class: 'second-element', image: 'icons/flower1.svg', size: 'w-[20%] h-[20%]' },
      { EID: '2', class: 'third-element', image: 'icons/greenleaves.svg', size: 'w-[28%] h-[28%]' }
    ]
  }
]);

</script>

<template>
  <div>
    <section id="home" class="hero">
      <div class="hero-base"></div>
      <div class="hero-slide-wrapper">
        <swiper-container class="hero-swiper" slides-per-view="1" autoplay-delay="4500"
          autoplay-disable-on-interaction=" false" loop="true" preload-images="false" style="width:100vw"
          :pagination="{ clickable: true }">
          <swiper-slide v-for="(slide, index) in slides" :key="index">
            <div ref="sliderImages" class="slider-pics" :style="{
              backgroundImage: `url('${slide.sliderImage}')`
            }">
              <div class="first-element" :class="slide.elements[0].size"
                :style="{ backgroundImage: `url('${slide.elements[0].image}')` }"></div>
              <div class="second-element" :class="slide.elements[1].size"
                :style="{ backgroundImage: `url('${slide.elements[1].image}')` }"></div>
              <div class="third-element" :class="slide.elements[2].size"
                :style="{ backgroundImage: `url('${slide.elements[2].image}')` }"></div>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>

    </section>
    <section class="title">
      <p><span class="font-krona text-[3vw]">Mi az </span><span class="font-bold text-[8vw]">E</span><span
          class="font-bold text-[3vw]"> -sétakocsi?</span></p>
      <p class="title-clip">ÉLMÉNYJÁRMŰ</p>
    </section>
    <section class="enum">
      <div class="orange-decor-container">
        <div class="orande-circle">
          <img src="/img/striped-ball.svg" alt="ball" class="orange-circle-striped">
        </div>

      </div>
      <div class="enumlist-container">
        <Avatar class="enumlist gap-6 w-[70vw] -translate-x-4 " :avatarDirection=true avatarImg="img/playground.svg"
          avatarImgSize="calc(100vh/3.5)"
          avatarLabel="Játékos feladatokkal, ügyességi versenyekkel, szórakoztató kihívásokkal színesíti meg a gyermektáborok, fiatal közösségek, gyermek- és családi rendezvények programjait." />
        <Avatar class="enumlist gap-6 w-[60vw] translate-x-32 -translate-y-4" :avatarDirection=true
          avatarImg="img/city2.svg" avatarImgSize="calc(100vh/4)"
          avatarLabel="Egyedibb megjelenéssel és élménnyel gazdagított városnézést is lehetővé tesz. Adott idő alatt több látnivaló meglátogatása, kényelem és praktikusság jellemzi." />
        <Avatar class="enumlist gap-6 w-[54vw] translate-x-48 -translate-y-1" :avatarDirection=true
          avatarImg="img/forest.svg" avatarImgSize="calc(100vh/4.5)"
          avatarLabel="Túrázáshoz, kiránduláshoz is használható, pl a távolság megnövelésére, kalandos utazássá varázsolva a természetjárást. " />
        <Avatar class="enumlist gap-6 w-[60vw] translate-x-32 xl:translate-x-24 xl:-translate-y-2" :avatarDirection=true
          avatarImg="img/fireplace.svg" avatarImgSize="calc(100vh/5)"
          avatarLabel="Csapatépítő tréningek, születésnapi partik, baráti összejövetelek, leány- és legénybúcsúk vidámságot, közös élményt nyújtó segítője.." />
        <Avatar class="enumlist gap-6 w-[70vw] translate-x-8 -translate-y-4 xl:-translate-x-4 xl:-translate-y-8"
          :avatarDirection=true avatarImg="img/arboretum.svg" avatarImgSize="calc(100vh/5.5)"
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
