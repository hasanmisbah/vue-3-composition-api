<template>
  <p>
    name :
    <el-input v-model="userName"/>
  </p>

  <p>
    email :
    <el-input v-model="userEmail" type="email"/>
  </p>
</template>

<script setup>

import { computed, defineProps, defineEmits } from 'vue';

const props = defineProps({
  name: {
    type: String,
  },

  email: {
    type: String,
  }
});


const emit = defineEmits(['update:name', 'update:email']);

const userName = computed({
  get: () => props.name,
  set: (value) => emit('update:name', value)
});

const userEmail = computed({
  get: () => props.email,
  set: (value) => emit('update:email', value)
});

</script>