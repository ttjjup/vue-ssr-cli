<template>
    <div>
        <p v-for="item in items">
            {{item}}
        </p>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        data() {
            return {};
        },
        computed: mapGetters([
            'isFetching','items'
        ]),
        methods: mapActions([
            'getList'
        ]),
        created() {
            this.getList();
        }
    }
</script>



