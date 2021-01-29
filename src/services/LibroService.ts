import client from './HttpClient'
import { ILibroModel } from '@/store/types'

export default {
  findById: (data: ILibroModel): Promise<ILibroModel> => client.get(`Libros/${data.idLibro}`),
  findAll: (): Promise<ILibroModel[]> => client.get(`Libros`),
  deleteById: (data: ILibroModel): Promise<ILibroModel> => client.get(`Libros/${data.idLibro}`),
  save: (data: ILibroModel): Promise<ILibroModel> => client.post(`Libros`, data),
  update: (data: ILibroModel): Promise<ILibroModel> => client.put(`Libros/${data.idLibro}`, data),
}
