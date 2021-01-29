<template>
  <v-list-item :key="item.text" link :to="resolvePath(item.path)">
    <v-list-item-action>
      <v-icon>{{ item.icon }}</v-icon>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title>{{ item.text }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { mapGetters } from 'vuex'

  /* eslint-disable @typescript-eslint/no-var-requires */
  const path = require('path')

  export default Vue.extend({
    name: 'SidebarItem',

    props: ['item', 'basePath'],

    data() {
      return {}
    },

    computed: {
      ...mapGetters({ menu: 'auth/menu' })
    },

    methods: {
      resolvePath(routePath: string) {
        return path.resolve(this.basePath, routePath)
      }
    }
  })
</script>
