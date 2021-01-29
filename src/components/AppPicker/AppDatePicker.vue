<template>
  <v-menu solo :ref="`datePicker-${keys}`" v-model="show" :close-on-content-click="true" :nudge-right="40" transition="scale-transition" min-width="290px" max-width="290px" offset-y>
    <template v-slot:activator="{ on }">
      <v-text-field
        slot="activator"
        v-on="on"
        :value="dateFormatted ? dateFormatted : value"
        :placeholder="getFormat()"
        :label="label ? label : ''"
        :disabled="disabled"
        readonly
        dense
        outlined
        clearable
        prepend-inner-icon="event"
        :rules="rules ? rules : []"
      ></v-text-field>
    </template>
    <v-date-picker :value="value && parse() ? moment(value, 'DD/MM/YYYY').format('YYYY-MM-DD') : value" @change="change($event)" locale="es-co"></v-date-picker>
  </v-menu>
</template>

<script lang="ts">
  import Vue from 'vue'
  import moment from 'moment'

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
      dateFormatted: ''
    }),

    methods: {
      parse(): boolean {
        return this.value.indexOf('/') !== -1
      },

      change(event: string) {
        this.dateFormatted = moment(event, 'YYYY-MM-DD').format(this.format || 'DD/MM/YYYY')
        this.$emit('change', this.dateFormatted)
      },

      getFormat() {
        return this.format || 'DD/MM/YYYY'
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
