export default defineNuxtRouteMiddleware((to, from) => {
  const userIsLoggedIn = false;
  if (!userIsLoggedIn) {
    return navigateTo({ path: "/login" });
  }
});
