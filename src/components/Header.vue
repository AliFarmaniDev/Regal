<script setup>
import { RouterLink } from 'vue-router';
//import components
import Container from '@/layout/Container.vue';
import Menu from './Menu.vue';
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
          <Menu />
        </div>
        <div class="flex justify-between gap-[10px] sm:gap-[1.8rem] items-center">
          <!--register-->
          <buttom class="flex items-center p-2">
            <img src="../assets/icons/search-normal.png" alt="search">
          </buttom>
          <buttom class="flex items-center p-2">
            <img src="../assets/icons/shopping-cart.png" alt="shopping cart">
          </buttom>
          <buttom class="flex items-center p-2">
            <img src="../assets/icons/heart.png" alt="headt icons">
          </buttom>
          <buttom class="flex items-center p-2">
            <img src="../assets/icons/user.png" alt="user image">
          </buttom>
        </div>
      </div>
    </Container>
  </header>
</template>