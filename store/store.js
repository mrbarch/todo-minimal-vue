import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

export const store = new Vuex.Store({
            state: {
                newTask: {
                  title: '',
                  desc: ''
                },
                tasks: [{
                    title: 'Learn Vue.js',
                    desc: 'Read the book "The great Vue.js 2"'
                },
                    {
                        title: 'Create the video',
                        desc: 'Give information about vuex and router'
                    }
                ]
            },

    components: {},

    methods: {

    },
    getters: {
        allTasks(state) {
            return state.tasks
        },
        newTasks(state) {
            return state.newTask
        },
    },
    mutations: {
        deleteTask(state, index) {
            state.tasks.splice(index, 1)
        },
        addTask(state) {
            if(state.newTask.title !== '') {
                state.tasks.push({
                    title: state.newTask.title,
                    desc: state.newTask.desc
                })
                state.newTask.title = '';
                state.newTask.desc = '';
            }
        }
    }
})
