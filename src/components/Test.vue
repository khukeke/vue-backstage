<template>
    <div>
        <p>测试{{ now }}</p>
        <p>{{ name2 }}</p>
        <li v-for="n in evenNumber" :key="n">{{ n }}</li>
        <ul>
            <template v-for="item in items">
                <li :key="item.msg">{{ item.msg }}</li>
                <li :key="item.name">{{ item.name }}</li>
            </template>
        </ul>
        <button @click="wran('form cannot submited yet', $event)">submit</button>
    </div>
</template>
<script>
export default {
    name: 'Test',
    props: {

    },
    data() {
        return {
            name2: 'ceshi',
            number: [1, 2, 3, 4, 5],
            items: [{msg: 12, name: 'susie'}, {msg: 13, name: 'lily'}]
        }
    },
    methods: {
        wran: function(tip, e) {
            console.log('tip')
            console.log(tip)
            console.log('e')
            console.log(e)
        }
    },
    computed: {
        now: function() {
            return Date.now();
        },
        evenNumber: function() {
            return this.number.filter(function(number) {
                return number % 2 === 0;
            });
        }
    }
}
</script>
