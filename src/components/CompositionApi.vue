<template>

  <div v-loading="loading" class="loading">
    <el-button type="primary" @click="success"> Success </el-button>
    <el-button type="warning" @click="warning"> Warning </el-button>
    <el-button type="info" @click="info"> Info </el-button>
    <el-button type="danger" @click="error"> Error </el-button>
  </div>
  
  
  <div style="margin-top: 20px">
    <el-button
      type="primary"
      @click="reFetchData"
    >
      Fetch Data
    </el-button>
  </div>
  
</template>

<script>

import { reactive, onMounted, toRefs } from 'vue';

import { useNotify } from '@/composables/composable';

export default {
  
  name: 'CompositionApi',
  
  setup(){
    
    const { notify } = useNotify();
    
    const state = reactive({
      loading: false
    });


    const success =() => {

      notify({
        title: 'Success',
        message: 'You did it',
        type: 'success'
      });
    };

    const warning =() => {

      notify({
        title: 'warning',
        message: 'You did it',
        type: 'warning'
      });
    };

    const info = () => {

      notify({
        title: 'info',
        message: 'You did it',
        type: 'info'
      });
    };

    const error =() => {

      notify({
        title: 'info',
        message: 'You did it',
        type: 'error'
      });
    };
    
    const fetchData =() => {
      return new Promise((resolve)=> {
        setTimeout(()=> resolve(true), 2000);
      });
    };

    const reFetchData = async () => {
      state.loading = true;
      await fetchData();
      state.loading = false;
    };

    onMounted(async ()=> {
      state.loading = true;
      await fetchData();
      state.loading = false;
    });
    
    return {
      ...toRefs(state),
      success,
      info,
      warning,
      error,
      reFetchData
    };
  },
};
</script>