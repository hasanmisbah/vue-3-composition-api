<script>
// @ is an alias to /src
import CompositionApi from '@/components/CompositionApi';
import { h } from 'vue';

export default {
  
  name: 'HomeView',
  
  components: {
    CompositionApi,
  },
  
  setup() {
    return () => h(CompositionApi);
  }
};
</script>
