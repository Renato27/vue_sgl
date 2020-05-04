import Login from '@/components/auth/login'
import RecuperarSenha from '@/components/auth/recuperar_senha'


const routes = [
    { path: '/login', component: Login },
    { path: '/recuperar-senha', component: RecuperarSenha }
]

export default routes