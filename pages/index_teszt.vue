<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Motion } from '@Motionone/vue';
import { ref, onMounted, nextTick } from 'vue';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();


const slides = ref([
  {
    sliderImage: 'img/cleverchair.svg',
    heading: "Ügyeskocsik",
    elements: [
      { EID: '0', class: 'first-element', image: 'icons/clock.svg', rotation: 'rotate-[30deg]', position: 'top-40 -left-24' },
      { EID: '1', class: 'second-element', image: 'icons/whistle.svg', rotation: 'rotate-45', position: '-bottom-4 -left-8' },
      { EID: '2', class: 'third-element', thirdElement: 'icons/trofee.svg', rotation: '-rotate-[15deg]', position: 'bottom-10 -right-28' }
    ]
  },
  {
    sliderImage: 'img/citychair.svg',
    heading: "Városikocsik",
    elements: [
      { EID: '0', class: 'first-element', image: 'icons/sunglasses.svg', rotation: 'rotate-[30deg]', position: 'top-40 -left-24' },
      { EID: '1', class: 'second-element', image: 'icons/camera.svg', rotation: '-rotate-[30deg]', position: '-bottom-4 -left-8' },
      { EID: '2', class: 'third-element', image: 'icons/phonemap.svg', rotation: '-rotate-[30deg]', position: 'bottom-10 -right-28' }
    ]
  },
  {
    sliderImage: 'img/tripchair.svg',
    heading: "Túrakocsik",
    elements: [
      { EID: '0', class: 'first-element', image: 'icons/mineral.svg', rotation: 'rotate-[20deg]', position: 'top-40 -left-24' },
      { EID: '1', class: 'second-element', image: 'icons/fruits.svg', rotation: '-rotate-[20deg]', position: '-bottom-4 -left-8' },
      { EID: '2', class: 'third-element', image: 'icons/bino.svg', rotation: 'rotate-0', position: 'bottom-10 -right-28' }
    ]
  },
  {
    sliderImage: 'img/partychair.svg',
    heading: "Bulikocsik",
    elements: [
      { EID: '0', class: 'first-element', image: 'icons/speaker.svg', rotation: 'rotate-0', position: 'top-40 -left-24' },
      { EID: '1', class: 'second-element', image: 'icons/marshmallow.svg', rotation: 'rotate-0', position: '-bottom-4 -left-8' },
      { EID: '2', class: 'third-element', image: 'icons/cooler.svg', rotation: '-rotate-[30deg]', position: 'bottom-10 -right-28' }
    ]
  },
  {
    sliderImage: 'img/walkingchair.svg',
    heading: "Sétakocsik",
    elements: [
      { EID: '0', class: 'first-element', image: 'icons/flowers.svg', rotation: 'rotate-0', position: 'top-40 -left-24' },
      { EID: '1', class: 'second-element', image: 'icons/flower1.svg', rotation: 'rotate-0', position: '-bottom-4 -left-8' },
      { EID: '2', class: 'third-element', image: 'icons/greenleaves.svg', rotation: 'rotate-0', position: 'bottom-10 -right-28' }
    ]
  }
]);


</script>

<template>
  <div>
    <section id="home" class="hero">
      <div class="hero-base"></div>
      <div class="hero-wrapper">

        <swiper-container :modules="[Pagination, Autoplay]" class="hero-swiper" :space-between="30"
          :pagination="{ clickable: true }" :slides-per-view="1" :autoplay="{ delay: 3500 }" :preload-images="false">
          <swiper-slide>Slide 1</swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
          <swiper-slide>Slide 4</swiper-slide>
          <swiper-slide>Slide 5</swiper-slide>
        </swiper-container>

        <!-- Második Swiper -->
        <swiper-container :modules="[Autoplay]" class="swiper2" :space-between="30" :slides-per-view="1"
          :autoplay="{ delay: 3500 }" :preload-images="false">
          <swiper-slide>Slide 1</swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
        </swiper-container>






        <!-- <swiper-container class="hero-swiper" slides-per-view="1" autoplay-delay="3500"
          autoplay-disable-on-interaction="false" preload-images="false" :cssMode="true">
          <swiper-slide v-for="(slide, index) in slides" :key="index">
            <div ref="sliderImages" class="slider-pics" :style="{
              backgroundImage: `url('${slide.sliderImage}')`
            }" </div>
              <div :class="[slide.elements[0].class, slide.elements[0].rotation, slide.elements[0].position]"
                :style="{ backgroundImage: `url('${slide.elements[0].image}')` }" </div>
                <div :class="[slide.elements[1].class, slide.elements[1].rotation, slide.elements[1].position]"
                  :style="{ backgroundImage: `url('${slide.elements[1].image}')` }" </div>
                  <div :class="[slide.elements[2].class, slide.elements[2].rotation, slide.elements[2].position]"
                    :style="{ backgroundImage: `url('${slide.elements[2].image}')` }" </div>

          </swiper-slide>
        </swiper-container> -->
      </div>
      <div class="hero-pagination"></div>
      <h1>Főoldal</h1>


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
        <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style="height: 0; width: 0; display: inherit;">
      <clipPath id="drop-clip-path" clipPathUnits="objectBoundingBox">
        <path d="M100,48.3 V100 H0 V48.3 V46.7 H0.0267 C0.009, 20.3, 22.9, 0, 50, 0 C77.1, 0, 99.2, 20.3, 99.8, 46.7 H100 V48.3 Z" />
      </clipPath>
    </svg> -->
        <Avatar class="gap-16" :avatarDirection=true avatarImg="/img/ketten_clip.webp" avatarImgSize="calc(100vw/3)"
          avatarLabel="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget arcu scelerisque dolor ultricies egestas vitae sed lacus. Morbi aliquet odio non sapien placerat, eget venenatis nisi consectetur. Curabitur faucibus facilisis mollis." />
        <!--  <div class="clip">
      <img src="/img/ketten.webp" alt="ketten" class="clip-img" />
    </div> -->
      </article>
      <p>Itt található az ajánlatunk részletezése.</p>
    </section>

    <section id="contact" class="section">
      <h2>Kapcsolat</h2>
      <p>Elérhetőségeink és kapcsolatfelvétel.</p>
    </section>
  </div>



  <!-- <swiper :loop="true" :autoplay="{ delay: 5000 }">
    <swiper-slide v-for="(slide, index) in slides" :key="index">
      <div class="slider-pics" :style="{ backgroundImage: `url(${slide.sliderImage})` }" :initial="'hidden'"
        :animate="'visible'" :exit="'exit'" :variants="fadeInOut">
      </div>
      <div class="floated-elements">
        <div v-for="(element, eIndex) in slide.elements" :key="eIndex" :class="element.class"
          :style="{ backgroundColor: element.bg }" :initial="'hidden'" :animate="['visible', pulse]" :exit="'exit'"
          :variants="fadeInOut">
        </div>
      </div>
    </swiper-slide>
  </swiper>

 -->




</template>

<style></style>
