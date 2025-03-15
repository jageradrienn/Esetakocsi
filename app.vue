<script setup>
import Avatar from './components/Avatar.vue';


</script>

<template>
  <div>
    <NuxtLayout class="container">
      <header class="header">
        <Avatar class="gap-1" :avatarDirection=true avatarImg="/icons/logo.svg" avatarImgSize="h-[4.5vh]"
          avatarLabel="Esetakocsi" />
        <nav>
          <ul class="menu">
            <li>
              <NuxtLink to="#home">Főoldal</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#about">Rólunk</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#offer">Szolgáltatásaink</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#gallery">Galéria</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#contact">Kapcsolat</NuxtLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <NuxtPage />
      </main>
      <footer>
        <nav>
          <ul class="footer-menu">
            <li>
              <NuxtLink to="#home">Főoldal</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#about">Rólunk</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#mission">Küldetésünk</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#gallery">Galéria</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#offer">Ajánlatunk</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#contact">Kapcsolat</NuxtLink>
            </li>
          </ul>
        </nav>
        <p class="text-center pt-4">© 2025 Esetakocsik.hu All rights reserved.</p>
      </footer>
    </NuxtLayout>
  </div>
</template>
