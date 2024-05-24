// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    opensky:{
      apiKey:''
    }

  },

  modules: ["nuxt3-leaflet", "@nuxtjs/eslint-module"],
  eslint: {
    include: "[nuxt.options.srcDir.'/**/*.{js,jsx,ts,tsx,vue}']",
  },
});
