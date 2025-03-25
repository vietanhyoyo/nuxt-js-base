import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app'

export default defineNuxtRouteMiddleware((to) => {
  if (to.path === '/') {
    return navigateTo('/auth/login', { replace: true })
  }
})
