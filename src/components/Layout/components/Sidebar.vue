<template>
  <v-navigation-drawer :value="drawer" :mini-variant.sync="drawer" permanent clipped app width="300">
    <v-list dense color="gray">
      <sidebar-item v-for="item in items" :key="item.path" :item="item" :base-path="item.path" />
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { mapGetters } from 'vuex'

  import SidebarItem from './SidebarItem.vue'

  export default Vue.extend({
    name: 'Sidebar',

    data() {
      return {
        dialog: false,
        items: [
          { icon: 'collections_bookmark', text: 'Editoriales', path: '/editoriales' },
          { icon: 'local_library', text: 'Libros', path: '/libros' }
        ]
      }
    },

    computed: {
      ...mapGetters({ drawer: 'app/drawer' })
    },

    components: {
      SidebarItem
    }
  })
</script>

<style lang="scss">
  .v-navigation-drawer__content .v-list {
    padding: 0;
  }
  .v-navigation-drawer__content {
    background-color: #f5f6f7;
  }
  .v-list-item--link {
    border-left: 6px solid transparent;
  }
  .v-list-item--link:hover {
    background-color: #e8e7e5;
    border-left: 6px solid #6ca133;
  }
</style>
