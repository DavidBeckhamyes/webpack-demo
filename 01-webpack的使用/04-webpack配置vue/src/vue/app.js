export default {
    template: `
    <div>
        <h2>{{message}}</h2>
        <button @click="btnClick">按钮</button>
        <name>{{name}}</name>
    </div>
    `,
    data() {
        return {
            message: "Hello Webpack",
            name: 'coderwhy'
        }
    },
    methods: {
        btnClick() {

        }
    }
}