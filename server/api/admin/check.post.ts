export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);
  console.log(body.userName, config.SUPER_ADMIN);
  if (body.userName === config.SUPER_ADMIN && body.password === config.SUPER_PASSWORD) {
    return {
      key: 'asdjh1923213ijkm'
    }
  }
  return {
    success: false
  };
});