export interface IAppState {
  locale: string
  drawer: boolean
  loading: boolean
  redirectTo: string | null
  help: any
}

export const AppDefaultState = (): IAppState => {
  return {
    locale: 'es',
    drawer: false,
    loading: false,
    redirectTo: null,
    help: {
      show: false,
      title: '',
      subtitle: '',
      message: ''
    }
  }
}
