import './public-path';
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import App from './views/App';

Vue.use(VueRouter);

// qiankun window全局变量
const isQK = window.__POWERED_BY_QIANKUN__;

// 路由
let instance = null, // vue实例
    router = null; // 路由

// vue挂载函数
const render = (props = {}) => {
    router = new VueRouter({
        mode: 'history',
        base: isQK ? props.prefix : '/',
        routes
    });
    const { container } = props;
    instance = new Vue({
        router,
        render: h => h(App)
    }).$mount(container ? container.querySelector('#app') : '#app');
};
// 独立运行
if (!isQK) render();

/* 微应用运行 start */
export async function bootstrap(props) {
    // console.log('[vue] apm app bootstraped');
    // 微应用初始化 - 这里获取主应用传来的base前缀
}
export async function mount(props) {
    console.log('[vue] props from main framework', props);
    // 微应用挂载
    props.onGlobalStateChange((state, prev) => {
        // state: 变更后的状态; prev 变更前的状态
        // console.log('===子应用====', state, prev);
    });
    setTimeout(() => {
        // 例子 - 关闭局部loading
        props.setGlobalState({ closeLoading: true });
    }, 3000);
    render(props);
}
export async function unmount() {
    // 微应用卸载
    instance.$destroy(); // 销毁vue实例
    instance.$el.innerHTML = ''; // 将实例的dom设置为空
    instance = null; // 清空实例
    router = null; // 清空路由
}
/* 微应用运行 end */
