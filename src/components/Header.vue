<script setup>
import Container from '@/layout/Container.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="w-full">
    <Container>
      <div class="w-full flex justify-between items-center py-3 sm:py-8">
        <div class="flex items-center">
          <!--this is logo bar-->
          <RouterLink to="/">
            <img src="../assets/images/Logo Svg.png" alt="site logo" class="">
          </RouterLink>
        </div>
        <div class="flex items-center">
          <!--menubar-->
        </div>
        <div class="flex items-center">
          <!--register-->
        </div>
      </div>
    </Container>
  </header>
</template>