import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';

const App = defineComponent({
    name: 'App',
    setup() {
        return () => (
            <div style={{ backgroundColor: '#fff', height: '100%', fontSize: '14px' }}>
                Vue3-webpack5
                <RouterView/>
            </div>
        );
    }
});

export default App;
