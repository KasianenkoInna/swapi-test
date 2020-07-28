<template>
    <div>
        <div @click="isVisible = !isVisible"
                class="select-sort-btn">{{selected.name}}</div>
        <div v-if="isVisible"
             class="select-sort-options">
            <div v-for="option in options"
                 :key="option.value"
                @click="selectOption(option)">
                {{option.name}}
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: "Select",
        props: {
            options: {
               type: Array,
               default() {
                   return []
               }
            },
            selected: {
                type: Object,
                default() {
                    return {name: 'BY MGLT NUMBER', value: 'MGLT'};
                }
            }
        },
        data() {
            return {
                isVisible: false
            }
        },
        methods: {
            ...mapActions(['setQuery']),
            selectOption(option) {
                this.$emit('select', option);
                this.isVisible = false;
                this.setQuery({key: 'sortBy', value: option.value});
            },
            hideSelect() {
                this.isVisible = false;
            }
        },
        mounted() {
            document.addEventListener('click', this.hideSelect.bind(this), true)
        },
        beforeDestroy() {
            document.removeEventListener('click', this.hideSelect.bind(this))
        }
    }
</script>
