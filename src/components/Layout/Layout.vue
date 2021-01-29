<template>
  <v-app>
    <sidebar />
    <v-app-bar app dark clipped-left flat color="primary" height="100">
      <v-app-bar-nav-icon @click.stop="toggleSideBar()"></v-app-bar-nav-icon>
      <v-toolbar-title>Test - Gustavo Lopez</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <v-container fluid style="padding:0 !important; height: 100%;">
        <router-view />
      </v-container>
    </v-main>

    <v-dialog :value="loading" persistent width="300" class="loading">
      <v-card color="primary" dark>
        <v-card-text>
          Por favor espere
          <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { mapGetters, mapActions } from 'vuex'

  /**  Views **/
  import Sidebar from './components/Sidebar.vue'

  export default Vue.extend({
    name: 'Layout',

    components: {
      Sidebar
    },

    data() {
      return {}
    },

    computed: {
      ...mapGetters({
        username: 'auth/username',
        token: 'auth/token',
        loading: 'app/loading',
        help: 'app/help'
      })
    },

    methods: {
      ...mapActions({ toggleSideBar: 'app/toggleSideBar' })
    }
  })
</script>

<style lang="scss"></style>
