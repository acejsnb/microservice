import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

const Home = defineComponent({
    name: 'Home',
    setup() {
        return () => (
            <div style={{ fontSize: '14px' }}>
                <h3>Home</h3>
                <br/>
                <RouterLink to="/test">到Test</RouterLink>
            </div>
        );
    }
});

export default Home;
