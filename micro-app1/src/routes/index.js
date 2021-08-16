import Home from 'views/Home';
import Test from 'views/Test';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'frame'
        }
    },
    {
        // path: '/test',
        path: '/test/:id?/:text?',
        name: 'Test',
        component: Test,
        meta: {
            title: 'test'
        },
        props: true
    }
    // {
    //     path: '/',
    //     redirect: '/test'
    // }
];

export default routes;
