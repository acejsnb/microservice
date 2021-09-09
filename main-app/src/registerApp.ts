import {
    registerMicroApps, start, initGlobalState, MicroAppStateActions
} from 'qiankun';
import { prefix } from './config';

export interface AppItem {
    name: string
    entry: string
    container: string
    activeRule: string
}
export type { MicroAppStateActions };

// 注册微应用
const registerApp = (apps: AppItem[]) => {
    registerMicroApps(apps);
    // 启动
    start({ prefetch: true });
};

const initialState = { closeLoading: false };
// 全局方法
const globalActions: MicroAppStateActions = initGlobalState(initialState);

/**
 * 参数说明：
    name: 'xxx', // 微应用名字
    entry: '//192.168.1.6:2001', // 应用url前缀
    container: '#microApp', // 需要挂载到dom的id
    activeRule: `${prefix}/apm`, // 激活路由
    props: { prefix: `${prefix}/apm` }
*/
interface ILItem {
    name: string
    entry: string
}
// 微应用list
const appList: ILItem[] = [
    // { name: 'app1', entry: '//192.168.1.6:2001' },
    // { name: 'vue3', entry: '//192.168.1.6:2002' }
    { name: 'app1', entry: '//172.16.1.90:3551' },
    { name: 'vue3', entry: '//172.16.1.90:3552' }
];
const microApps = appList?.map(({ name, entry }) => ({
    name,
    entry,
    container: '#microApp',
    activeRule: `${prefix}/${name}`,
    // activeRule: `/${name}`,
    props: { prefix: `${prefix}/${name}`, entry }
})) ?? [];

export { globalActions, microApps };

export default registerApp;
