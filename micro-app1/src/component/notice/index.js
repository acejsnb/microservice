import Vue from 'vue';
import Notice from './Notice.vue';

const createNotice = (props) => {
    const vm = new Vue({
        render(h) {
            return h(Notice, { props });
        }
    }).$mount();
    console.log('vm===', vm);
    const body = document.body;
    const comp = vm.$children[0];
    comp.remove = () => {
        body.removeChild(vm.$el);
        vm.$destroy();
    };
    body.appendChild(vm.$el);
    return comp;
};

export default createNotice;
