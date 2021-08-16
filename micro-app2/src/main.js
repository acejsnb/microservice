import './public-path';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App';
import routes from './routes';

// qiankun window全局变量
const isQK = window.__POWERED_BY_QIANKUN__;

let app = null,
    router = null;

const render = (props = {}) => {
    const { container } = props;
    router = createRouter({
        history: createWebHistory(isQK ? props.prefix : '/'),
        routes
    });
    app = createApp(App);
    app.use(router);

    app.mount(container ? container.querySelector('#vue3') : '#vue3');
};

// 独立运行
if (!isQK) render();

// 初始化
export async function bootstrap() {
    console.log('%c ', 'color: green;', 'vue3.0 app bootstraped');
}
// 挂载
export async function mount(props) {
    setTimeout(() => {
        // 例子 - 关闭局部loading
        props.setGlobalState({ closeLoading: true });
        console.log('-------关闭局部loading---------');
    }, 3000);
    render(props);
    console.log('app=======', app);
    props.onGlobalStateChange((state, prev) => {
        // state: 变更后的状态; prev 变更前的状态
        // console.log('===子应用====', state, prev);
        console.log('===子应用====', state);
    });
}
// 销毁
export async function unmount() {
    app.unmount();
    app._container.innerHTML = '';
    app = null;
    router = null;
}
