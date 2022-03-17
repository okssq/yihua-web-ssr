<template>
  <q-scroll-area delay="100" class="fullscreen column no-wrap">
    <layout-header/>
    <router-view />

    <layout-footer/>
  </q-scroll-area>
</template>

<script setup>
import LayoutHeader from './header'
import LayoutFooter from './footer'
</script>
