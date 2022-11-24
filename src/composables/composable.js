import { getCurrentInstance, reactive, readonly } from 'vue';
import { ElNotification } from 'element-plus';


export function useNotify(){

  const { appContext } = getCurrentInstance();
  
  const notify = ({  title, message, type= 'info'})=> {
    
    ElNotification({
      title,
      message,
      type
    }, appContext);
  };

  return {
    notify
  };
    
}

export const useReadOnlyValue = ()=> {
  
  const state = reactive({
    name: ''
  });
  
  
  return {
    ...readonly(state)
  };
};

export const store = reactive({
  
  name: 'Application',
  
  updateApplication(value){
    this.name = value;
  }
});
