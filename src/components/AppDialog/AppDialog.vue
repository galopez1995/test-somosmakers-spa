<template>
  <v-dialog :value="true" persistent :max-width="width" color="secondary">
    <v-card>
      <v-card-title class="headline secondary">
        <slot name="title"></slot>
      </v-card-title>

      <v-card-text>
        <slot></slot>
      </v-card-text>

      <v-card-actions>
        <slot name="actions"></slot>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    props: ['width'],

    data() {
      return {}
    },

    components: {},

    // mounted() {},

    methods: {}
  })
</script>
