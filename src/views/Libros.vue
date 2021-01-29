<template>
  <v-container>
    <v-row>
      <app-header :help="help"></app-header>

      <v-col cols="12">
        <v-toolbar flat color="primary" dense>
          <v-toolbar-title class="white--text">Listado de libros en el sistema</v-toolbar-title>
        </v-toolbar>
        <v-card>
          <v-card-title class="table-content">
            <v-row class="table-search">
              <v-spacer></v-spacer>
              <v-col cols="12" sm="3">
                <v-text-field v-model="table.filters.search" label="Buscar" dense outlined prepend-inner-icon="search" clearable></v-text-field>
              </v-col>
              <v-col cols="12" sm="1">
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn v-on="on" v-bind="attrs" color="primary" fab small @click="add()"><v-icon>add</v-icon></v-btn></template
                  ><span>Nuevo</span>
                </v-tooltip>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="table.headers"
              :items="table.records"
              :search="table.filters.search"
              item-key="id"
              :footer-props="{
                itemsPerPageOptions: table.rowsPerPage
              }"
            >
              <template v-slot:body="{ items }">
                <tbody>
                  <tr v-for="(item, index) in items" :key="index" :class="index % 2 == 0 ? 'odd' : 'even'">
                    <td class="text-left text-wrap">
                      {{ item.titulo }}
                    </td>
                    <td class="text-left">{{ item.editorial.nombre }}</td>
                    <td class="text-center">{{ item.fecha.substring(0, 10) }}</td>
                    <td class="text-right">{{ item.costo }}</td>
                    <td class="text-right">{{ item.precioSugerido }}</td>
                    <td class="text-left">{{ item.autor }}</td>
                    <td class="text-center">
                      <nobr>
                        <v-tooltip top>
                          <template v-slot:activator="{ on }">
                            <v-btn v-on="on" fab x-small color="primary" @click="edit(item)">
                              <v-icon small color="white">edit</v-icon>
                            </v-btn>
                          </template>
                          <span>Modificar</span>
                        </v-tooltip>
                      </nobr>
                    </td>
                  </tr>
                </tbody>
              </template>
              <template v-slot:no-results>
                <v-alert :value="true" color="red" icon="warning">Su búsqueda de "{{ table.filters.search }}" No arrojo resultados.</v-alert>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <app-dialog width="50%" v-if="form.dialog">
      <template v-slot:title>
        <span class="headline white--text">Libro</span>
        <v-spacer></v-spacer>
        <v-btn color="white" dark icon @click="form.dialog = !form.dialog"> Cerrar <v-icon>close</v-icon> </v-btn>
      </template>
      <v-form ref="formRecord" v-model="form.valid" lazy-validation>
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field v-model="form.record.titulo" label="Titulo (*)" dense outlined clearable :rules="[...form.rules.required]"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-autocomplete
                v-model="form.record.idEditorial"
                :items="editoriales"
                item-value="idEditorial"
                item-text="nombre"
                label="Editorial (*)"
                dense
                outlined
                clearable
                :rules="[...form.rules.required]"
              ></v-autocomplete>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6">
              <app-date-picker v-model="form.record.fecha" label="Fecha (*)" :keys="`fecha`" format="YYYY-MM-DD" :rules="[...form.rules.required]" />
              <!-- <v-text-field v-model="form.record.fecha" label="Fecha (*)" dense outlined clearable :rules="[...form.rules.required]"></v-text-field> -->
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="form.record.autor" label="Autor (*)" dense outlined clearable :rules="[...form.rules.required]"></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6">
              <v-text-field v-model="form.record.costo" suffix="$" label="Costo (*)" dense outlined clearable :rules="[...form.rules.required, ...form.rules.number]"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="form.record.precioSugerido" suffix="$" label="Precio Sugerido (*)" dense outlined clearable :rules="[...form.rules.required, ...form.rules.number]"></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="6">
              <v-btn outlined depressed block large color="grey darken-1" @click.native="reset">Cancelar</v-btn>
            </v-col>
            <v-col cols="12" sm="6">
              <v-btn depressed block large color="primary" @click.native="save" :disabled="!form.valid">Guardar</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </app-dialog>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'

  /**  Model **/
  import { ILibroModel } from '@/store/types'

  /**  Service **/
  import LibroService from '@/services/LibroService'
  import EditorialService from '@/services/EditorialService'

  export default Vue.extend({
    data() {
      return {
        help: {
          title: 'Libros',
          subtitle: '',
          message: 'En esta página podrás encontrar todos los libros que han sido creados.'
        },

        form: {
          loading: true,
          dialog: false,
          valid: false,
          record: {} as ILibroModel,
          rules: {
            required: [(v: any) => !!v || 'Este campo es requerido'],
            number: (v: any) => !!/^([0-9])*$/g.test(v) || 'Ingrese solo numeros'
          }
        },

        editoriales: [],

        table: {
          loading: true,
          filters: {
            search: null
          },
          headers: [
            { text: 'Titulo', value: 'titulo', align: 'left' },
            { text: 'Editorial', value: 'idEditorial', align: 'left' },
            { text: 'Fecha', value: 'fecha', align: 'center' },
            { text: 'Costo', value: 'costo', align: 'center' },
            { text: 'Precio Sugerido', value: 'precioSugerido', align: 'center' },
            { text: 'Autor', value: 'autor', align: 'left' },
            { text: 'Acciones', align: 'center' }
          ],
          records: [],
          rowsPerPage: [5, 10, 20, 25, 30, { text: 'Todos', value: -1 }]
        }
      }
    },

    computed: {
      formRecord() {
        return this.$refs.formRecord as Vue & { validate: () => boolean; reset: () => void }
      }
    },

    mounted() {
      this.load()
    },

    methods: {
      async load() {
        this.$store.dispatch('app/showLoading')
        const records = await LibroService.findAll()
        this.table.records = records as any
        const permisos = await EditorialService.findAll()
        this.editoriales = permisos as any
        this.$store.dispatch('app/hideLoading')
      },

      add() {
        this.form.record = {} as ILibroModel
        this.form.dialog = true
      },

      async edit(item: ILibroModel) {
        this.$store.dispatch('app/showLoading')
        const record = (await LibroService.findById(item)) as any
        record.fecha = record.fecha.substring(0, 10)
        this.form.record = record
        this.form.dialog = true
        this.$store.dispatch('app/hideLoading')
      },

      async save() {
        if (this.formRecord.validate()) {
          this.$store.dispatch('app/showLoading')
          let response = null as any
          if (this.form.record.idLibro > 0) response = await LibroService.update({ ...this.form.record } as ILibroModel)
          else response = await LibroService.save({ ...this.form.record } as ILibroModel)
          this.$store.dispatch('app/hideLoading')
          if (response.isAxiosError) return
          this.form.record = {} as ILibroModel
          this.form.dialog = false
          this.load()
          this.$store.dispatch('app/alertPrompt', {
            text: 'Proceso realizado correctamente.',
            type: 'success'
          })
        }
      },

      reset() {
        this.form.dialog = false
        this.formRecord.reset()
      }
    }
  })
</script>
