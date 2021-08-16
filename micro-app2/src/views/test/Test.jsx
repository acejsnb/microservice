import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

const Test = defineComponent({
    name: 'Test',
    setup() {
        return () => (
            <div style={{ fontSize: '14px' }}>
                <h3>Test</h3>
                <br/>
                <RouterLink to="/">到Home</RouterLink>
            </div>
        );
    }
});

export default Test;
