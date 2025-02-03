<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="hidden sm:flex items-center">
    <nav class="flex justify-between items-center gap-[50px] bg-neutral-200 p-4 rounded-[28px] text-black">
        <RouterLink to="/">صفحه اصلی</RouterLink>
        <RouterLink to="">دسته بندی ها^</RouterLink>
        <RouterLink to="">تخفیف دارها</RouterLink>
        <RouterLink to="">درباه ما</RouterLink>
    </nav>
  </div>
  <div class="flex sm:hidden w-full justify-start">
    <img src="../assets/icons/Button.png" alt="menu buttom">
  </div>
</template>
