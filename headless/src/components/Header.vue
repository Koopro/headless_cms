<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <header class="page-header">
    <div class="page-header__content">
      <h1 class="page-header__title">{{ props.title }}</h1>
    </div>
  </header>
</template>

<style scoped>
.page-header {
  width: 100%;
  padding: 3rem 1rem 2rem;
  text-align: center;
  color: #fefcf7;
}

.page-header__content {
  max-width: 52rem;
  margin: 0 auto;
}

.page-header__title {
  margin: 0;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
}

</style>
