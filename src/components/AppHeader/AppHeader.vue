<template>
  <v-col cols="12">
    <v-row>
      <v-col cols="10">
        <div class="title_1">{{ help.title }}</div>
        <div class="paragraph">{{ help.message }}</div>
      </v-col>
      <v-col cols="2" class="col s2 side-bar-open"><v-icon class="material-icons" @click="toggleHelp(help)">help_outline</v-icon></v-col>
    </v-row>
    <v-divider></v-divider>
  </v-col>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { mapActions } from 'vuex'

  export default Vue.extend({
    props: ['help'],

    data() {
      return {}
    },

    methods: {
      ...mapActions({ toggleHelp: 'app/toggleHelp' })
    }
  })
</script>
