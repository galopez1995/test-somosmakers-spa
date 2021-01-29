<template>
  <v-menu solo :ref="`timePicker-${keys}`" v-model="show" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" min-width="290px" max-width="290px" offset-y>
    <template v-slot:activator="{ on }">
      <v-text-field
        slot="activator"
        v-on="on"
        :value="timeFormatted ? timeFormatted : value"
        :label="label ? label : ''"
        :disabled="disabled"
        readonly
        dense
        outlined
        clearable
        prepend-inner-icon="mdi-clock-time-four-outline"
        :rules="rules ? rules : []"
      ></v-text-field>
    </template>
    <v-time-picker
      :value="value"
      format="24hr"
      full-width
      @change="change($event)"
      locale="es-co"
      @click:minute="$refs[`timePicker-${keys}`].save(timeFormatted ? timeFormatted : value)"
    ></v-time-picker>
  </v-menu>
</template>

<script lang="ts">
  import Vue from 'vue'
  // import moment from 'moment'

  export default Vue.extend({
    model: {
      prop: 'value',
      event: 'change'
    },

    props: {
      label: String,
      keys: String,
      value: String,
      format: String,
      disabled: Boolean,
      rules: Array
    },

    data: () => ({
      show: false,
      timeFormatted: ''
    }),

    methods: {
      parse(): boolean {
        return this.value.indexOf('/') !== -1
      },

      change(event: string) {
        this.timeFormatted = event
        this.$emit('change', this.timeFormatted)
      }
    },

    computed: {
      valueField() {
        return this.value
      }
    },

    watch: {}
  })
</script>
