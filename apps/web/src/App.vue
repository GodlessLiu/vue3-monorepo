<script setup lang="ts">
const count = ref(0)
useIntervalFn(() => {
  count.value++
}, 1000)
</script>

<template>
  <h1 class="text-pink-500">
    count:
    {{ count }}
    <span class="icon-[material-symbols--10k-outline] block" />
  </h1>
</template>
