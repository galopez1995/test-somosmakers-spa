import client from './HttpClient'
import { IEditorialModel } from '@/store/types'

export default {
  findById: (data: IEditorialModel): Promise<IEditorialModel> => client.get(`Editoriales/${data.idEditorial}`),
  findAll: (): Promise<IEditorialModel[]> => client.get(`Editoriales`),
  deleteById: (data: IEditorialModel): Promise<IEditorialModel> => client.get(`Editoriales/${data.idEditorial}`),
  save: (data: IEditorialModel): Promise<IEditorialModel> => client.post(`Editoriales`, data),
  update: (data: IEditorialModel): Promise<IEditorialModel> => client.put(`Editoriales/${data.idEditorial}`, data),
}
