import Home from '@/views/home/Home';
import Test from '@/views/test/Test';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/test',
        name: 'Test',
        component: Test
    }
];

export default routes;
