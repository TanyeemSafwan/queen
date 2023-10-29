export const useAdminInfo = defineStore('adminInfo', () => {
  const user = ref({
    name: '',
    email: '',
    key: ''
  });
  const setInfo = (newName: string, newEmail: string) => {
    user.value.name = newName;
    user.value.email = newEmail;
  };

  const isAdmin = (val: string) => {
    user.value.key = val;
  };

  watch(() => user, (state) => {
    localStorage.setItem('adminInfo', JSON.stringify(state.value.key))
}, { deep: true })


  return {
    user
  }
})