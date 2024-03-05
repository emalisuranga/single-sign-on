export default defineNuxtRouteMiddleware((to, from) => {
    console.log('From auth middleware')
    // isAuthenticated() is an example method verifying if a user is authenticated
    // if (isAuthenticated() === false) {
    //   return navigateTo('/login')
    // }
  })