import HomePage from '~/pages/Home/'
import FollowingPage from '~/pages/Following/'
import ProfilePage from '~/pages/Profile'
import UploadPage from '~/pages/Upload'
import SearchPage from '~/pages/Search'


import UploadLayout from '~/components/Layout/UploadLayout'


const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/following', component: FollowingPage },
    { path: '/profile', component: ProfilePage },
    { path: '/search', component: SearchPage, layout: null },
    { path: '/upload', component: UploadPage, layout: UploadLayout }
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }