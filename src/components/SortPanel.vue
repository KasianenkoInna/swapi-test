<template>
    <div class="sort-btn-wrapper">
        <SortSelect
        :options="options"
        @select="selectedOption"
        :selected="selected"
        />
    </div>
</template>

<script>
    import SortSelect from "./SortSelect";
    export default {
        name: "SortPanel",
        components: {
            SortSelect
        },
        data() {
           return {
                selected: { name: 'BY MGLT NUMBER', value: 'MGLT' },
                options: [
                    { name: 'BY MGLT NUMBER', value: 'MGLT' },
                    { name: 'BY CREW SIZE', value: 'CREW' },
                    { name: 'BY COST IN CREDITS', value: 'COST' }
                ],

           }
        },
        methods: {
            selectedOption(option) {
                this.selected = {name: option.name, value: option.value}
            }
        }
    }
</script>

<style scoped>

</style>