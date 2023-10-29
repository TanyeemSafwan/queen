export default defineNuxtRouteMiddleware ( () => {
  const route = useRouter();
  const savedData = localStorage.getItem('adminInfo');
  if (savedData !== '"asdjh1923213ijkm"') {
    throw createError({
      statusCode: 401,
      statusMessage: 'Login Again Please'
    })
  }
})