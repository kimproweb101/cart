<template>
  <v-app>
    <header>
      <ClientHeader></ClientHeader>
    </header>
    <main>
      <RouterView></RouterView>
    </main>
    <footer>
      <ClientFooter></ClientFooter>
    </footer>
  </v-app>
</template>
<script>
import ClientHeader from '@/layouts/client/ClientHeader.vue';
import ClientFooter from '@/layouts/client/ClientFooter.vue';
  export default {
    name:'ClientLayout',
    components:{
      ClientHeader,
      ClientFooter
    }
  }
</script>

<style lang="scss" scoped>

</style>
