<template>
  <div class="about">
    <Form
      v-model:email="state.email"
      v-model:name="state.name"
    />
  </div>
  
  {{ state }}
</template>

<script setup>

import { store } from '@/composables/composable';
import { onMounted, reactive } from 'vue';
import Form from '@/components/Form';

const state = reactive({
  name: '',
  email: ''
});

onMounted(() => {
  store.updateApplication('About');
});
</script>