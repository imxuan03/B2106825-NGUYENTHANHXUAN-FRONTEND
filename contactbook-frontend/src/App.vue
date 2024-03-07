<template>
  <div id="app">
    <AppHeader />
    <div class="container mt-3">
      <router-view /> 
      <!-- là một thẻ placeholder mà Vue Router sử dụng để render nội dung của các route trong ứng dụng Vue.js của bạn. -->
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
};
</script>

<style>
.page {
  max-width: 400px;
  margin: auto;
}
</style>
