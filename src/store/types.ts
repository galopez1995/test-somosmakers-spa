export interface IRootState {
  loading: boolean
}

export interface ILibroModel {
  idLibro: number
  titulo: string
  idEditorial: number
  fecha: string
  costo: number
  precioSugerido: number
  autor: string
  editorial: IEditorialModel
}

export interface IEditorialModel {
  idEditorial: number
  nombre: string
  libros: ILibroModel[]
}
