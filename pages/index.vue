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
    sliderImage: '/img/cleverchair.webp',
    heading: "Ügyeskocsik",
  },
  {
    sliderImage: '/img/citychair.webp',
    heading: "Városikocsik",
  },
  {
    sliderImage: '/img/tripchair.webp',
    heading: "Túrakocsik",
  },
  {
    sliderImage: '/img/partychair.webp',
    heading: "Bulikocsik",
  },
  {
    sliderImage: '/img/walkingchair.webp',
    heading: "Sétakocsik",
  }
]);

const isReady = ref(false);

onMounted(() => {
  setTimeout(() => {
    isReady.value = true;
  }, 50);
});
</script>


<template>
  <div>


    <section id="home" class="hero">
      <div class="hero-base"></div>
      <div class="hero-slide-wrapper">
        <h1>VALÓBAN NINCS MÁSODIK!</h1>
        <swiper-container v-if="isReady" class="hero-swiper" :breakpoints="{
          768: { slidesPerView: 3 },
          640: { slidesPerView: 2 },
          450: { slidesPerView: 1 }
        }" navigation="true" autoplay-delay="4500" autoplay-disable-on-interaction=" false" loop="true"
          preload-images="false" style="width:100vw; transition: transform 0.6s ease-in-out;">
          <swiper-slide v-for="(slide, index) in slides" :key="index">
            <div class="balls-wrapper">
              <NuxtImg src="/img/whiteStripedBall.webp" alt="ball" class="white-ball" />
              <img :src="slide.sliderImage" alt="slidePic" ref="sliderImages" class="slider-pics">
              <h2>{{ slide.heading }}</h2>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </section>


    <section class="description">
      <p><span class="font-otomanopee text-[5vw] ">Mi az </span><span class="font-bold text-[8vw]">E</span><span
          class="font-otomanopee  text-[5vw]">
          -sétakocsi?</span></p>
      <p class="description-striped mt-6 sm:mt-28 text-Orange/40"
        style="-webkit-text-stroke: 0.5px; -webkit-text-stroke-color: black;">ÉLMÉNYJÁRMŰ</p>

      <div class="description-grid-container ">
        <article class="description-grid-items group">
          <figure>
            <NuxtImg class="description-img h-[13vw] w-[15vw] mt-7 mx-auto" src="/img/striped-round-bg.webp"
              alt="diagonal striped background" />
          </figure>
          <p>
            Az E-sétakocsik két erős elektromos
            motorral
            működnek,
            kifejezetten terepre tervezve. Dupla akkumulátoros
            felszereltségükkel, egyetlen feltöltéssel 25-30 km távolságot képesek megtenni. A töltöttségi állapotról
            telefonos applikáció ad információt.
            A rajta lévő joystickes vezérlés könnyen elsajátítható, mindössze néhány perc gyakorlást igényel. </p>
        </article>
        <article class="description-grid-items group">
          <figure>
            <NuxtImg class="description-img h-[14vw] w-[16vw] mt-5 mx-auto" src="/img/striped-round-bg2.webp"
              alt="diagonal striped background" />
          </figure>
          <p>
            Akár 10 km/h sebességgel is
            haladhatnak,
            legyen szó nehéz terepről, erdei ösvényekről, rétekről vagy kavicsos utakról. Közúti közlekedésre is
            alkalmas, mert rendelkezik világítással, irányjelzővel, hangjelzéssel, hátsó világítással. </p>
        </article>
        <article class="description-grid-items group">
          <figure>
            <NuxtImg class="description-img h-[14vw] w-[16vw] mt-5 mx-auto" src="/img/striped-round-bg3.webp"
              alt="diagonal striped background" />
          </figure>
          <p>A
            utasok kényelme érdekében
            felszereltük
            napvédővel, italtartóval, telefontartóval, valamint egy vízálló tároló zsákkal is, a túrafelszerelések,
            piknik kellékek, személyes holmik, stb. szállítására. Az első kerekek és a lábtartó előre-hátra állíthatók a
            testmagasságához igazítva. </p>
        </article>
      </div>
    </section>


    <section class="enum ">
      <div class="orange-circle">
        <NuxtImg src="/img/whiteStripedBall.webp" alt="ball" class="orange-circle-striped" />

        <Avatar class="enumlist-items items-start w-[80vw] sm:w-[82vw] sm:translate-x-[18%] sm:-translate-y-[90%]"
          :avatarDirection=true avatarImg="img/playground.webp" avatarImgSize="h-[20vw] sm:h-[12vw]"
          avatarLabel="Játékos feladatokkal, ügyességi versenyekkel (az optimális irányítás a vezető
            kézügyességétől függ), szórakoztató kihívásokkal színesíti meg a gyermektáborok, fiatal közösségek, gyermek- és családi rendezvények programjait." />

        <Avatar class="enumlist-items items-center w-[80vw] sm:w-[72vw] sm:translate-x-[34.5%] sm:-translate-y-[125%]"
          :avatarDirection=true avatarImg="img/city2.webp" avatarImgSize="h-[20vw] sm:h-[10.5vw]"
          avatarLabel="Egyedibb megjelenéssel és élménnyel gazdagított városnézést is lehetővé tesz. Adott idő alatt több látnivaló meglátogatása, NAGY „séták” kivitelezése, kényelem és praktikusság jellemzi." />

        <Avatar class="enumlist-items items-center w-[80vw] sm:w-[69vw] sm:translate-x-[40%] sm:-translate-y-[140%]"
          :avatarDirection=true avatarImg="img/forest.webp" avatarImgSize="h-[20vw] sm:h-[9vw]"
          avatarLabel="Túrázáshoz, kiránduláshoz is használható a távolság megnövelésére, éjszakai kirándulásokra is bevethetők, kalandos utazássá varázsolva a természetjárást. " />

        <Avatar class="enumlist-items items-center w-[80vw] sm:w-[72vw] sm:translate-x-[34.5%] sm:-translate-y-[153%]"
          :avatarDirection=true avatarImg="img/fireplace.webp" avatarImgSize="h-[20vw] sm:h-[8vw]" avatarLabel="Csapatépítő tréningek, munkahelyi közösségek, születésnapi partik, baráti összejövetelek, fesztiválok, szabadtéri programok, szabadidős
            tevékenységek, leány- és legénybúcsúk vidámságot, közös élményt nyújtó segítője." />

        <Avatar class="enumlist-items items-end w-[80vw] sm:w-[82vw] sm:translate-x-[24%] sm:-translate-y-[190%]"
          :avatarDirection=true avatarImg="img/arboretum.webp" avatarImgSize="h-[20vw] sm:h-[7vw]"
          avatarLabel="Arborétumok, skanzenek, parkok, sétányok, ligetek békés, csendes suhanója családok, mozgáskorlátozottak és idősek számára." />
      </div>
    </section>


    <section id="about" class="about">
      <div class="about-shape">
        <div class="word-wrapper">
          <h2>R</h2>
          <div class="letter-wrapper">
            <NuxtImg src="/icons/caret.svg" alt="about" class="w-[40%]" />
            <div class="o-wrapper">
              <NuxtImg src="icons/striped-circle.svg" alt="about" />
              <div class="cream-circle">
              </div>
            </div>
          </div>
          <div class="arrow-wrapper">
            <h2>LUNK</h2>
            <div class="arrows">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <article class="about-article">
        <p>Számunkra nagyon fontos érték az élmény, amellyel a mai rohanó világban kapcsolódhatunk egymáshoz,
          önmagunkhoz, a természethez, látnivalókhoz, vidámsághoz. Mi magunk is kerestük, kutattuk az új élményszerzési
          lehetőségeket a mindennapjainkban. Mígnem érkezett hozzánk egy lehetőség, amelyből pár évnyi tervezéssel,
          kutatással, tanulással és kreatív munkával megszülethetett az Esétakocsi. </p>
        <br>
        <p>Csapatunk azért hozta létre ezt a különleges
          szolgáltatást, hogy az utazás örömét és a felfedezés szabadságát mindenki számára elérhetővé tegye
          Magyarországon egyedülálló módon. Tényleg NINCS MÁSODIK! Tényleg nincs más, ahol ezt az élményt megszerezhetik
          az érdeklődők. Ezek az elektromos kiskocsik nemcsak egyedi megjelenésükkel, hanem sokoldalú
          felhasználhatóságukkal is kitűnnek: gyerektáborok, családi túrák, városnéző kalandok, csapatépítők és piknikek
          tökéletes kellékei. </p>
        <br>
        <p>Nagy örömmel és szeretettel várunk minden érdeklődőt a Esétakocsik bérlésével. Érdeklődés esetén keressenek
          bizalommal elérhetőségeinken! </p>
      </article>
    </section>



    <!-- <section id="about" class="about">
      <div class="word-wrapper">
        <h2>R</h2>
        <div class="letter-wrapper">
          <img src="/icons/caret.svg" alt="about" class="w-[30%]">
          <div class="o-wrapper">
            <img src="/icons/striped-circle.svg" alt="about">
            <div class="cream-circle"></div>
          </div>
        </div>
        <div class="arrow-wrapper">
          <h2>LUNK</h2>
          <div class="arrows">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <article class="about-article">
        <p>Számunkra nagyon fontos érték az élmény, amellyel a mai rohanó világban kapcsolódhatunk másokhoz,
          önmagunkhoz, a természethez, látnivalókhoz, vidámsághoz. Mi magunk is kerestük, kutattuk az új élményszerzési
          lehetőségeket a mindennapjainkban. Mígnem érkezett hozzánk egy lehetőség, amelyből pár évnyi tervezéssel,
          kutatással, tanulással és kreatív munkával megszülethetett az Esétakocsi. </p>
        <br>
        <p>Csapatunk azért hozta létre ezt a különleges
          szolgáltatást, hogy a mozgás örömét és a felfedezés szabadságát mindenki számára elérhetővé tegye
          Magyarországon egyedülálló módon. Tényleg NINCS MÁSODIK! Tényleg nincs más, ahol ezt az élményt megszerezhetik
          az érdeklődők. Ezek az elektromos kiskocsik nemcsak egyedi megjelenésükkel, hanem sokoldalú
          felhasználhatóságukkal is kitűnnek: gyerektáborok, családi túrák, városnéző kalandok, csapatépítők és piknikek
          tökéletes kellékei. </p>
        <br>
        <p>Nagy örömmel és szeretettel várunk minden érdeklődőt a Esétakocsik bérlésével. Érdeklődés esetén keressenek
          bizalommal elérhetőségeinken! </p>
      </article>
    </section>


    <section id="mission" class="mission">
      <article class="mission-article">
        <p>Fedezd fel a világot másképp! Elektromos élményjárműveinkkel a szórakozás, a természet és a városi
          kalandok
          új dimenzióját hozzuk el neked. Legyen szó gyerektáborokról, családi kirándulásokról, városnéző túrákról
          vagy
          izgalmas csapatépítőkről, velünk minden élmény gördülékenyebb! Strapabíró, bukócsöves, praktikus kis
          járgányaink biztonságosak, kényelmesek és minden korosztálynak páratlan szabadságérzetet adnak. Célunk,
          hogy
          mindenki számára lehetővé tegyünk egy újfajta élményszerzést. Legyél akár egy kalandvágyó tini, vagy bulis
          fiatal, vagy vidámságra vágyó család, vagy kényelemben élményt szerző idősebb korosztály!</p>
      </article>
      <div class="word-wrapper">
        <div class="arrow-wrapper">
          <h2>KÜLDETÉS</h2>
          <div class="arrows">
            <div></div>
            <div></div>
          </div>

        </div>
        <div class="letter-wrapper">
          <div class="w-[20vw] h-[10vh] flex gap-8 justify-center items-end">
            <div class="orange-dot"></div>
            <div class="orange-dot"></div>
          </div>
          <img src="/img/ULetter.webp" alt="mission">
        </div>
        <h2 class="">NK</h2>

      </div>


    </section> -->



  </div>
  <!--<section id="gallery" class="section">
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
    </section> -->
</template>

<style></style>
