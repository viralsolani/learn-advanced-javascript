Vue.component('task-list', {
    template : '<div><task v-for="task in tasks">{{ task.task }}</task></div>',

    data(){
        return {
            tasks: [
                { task:'Hit the Gym', completed: false },
                { task:'Read the Motivational book', completed: true },
                { task:'No social Media', completed: true },
                { task:'Learn Vue.js', completed: true },
                { task:'Clear Inbox', completed: false },
                { task:'Clean room', completed: false },
           ]
        }
    }
});

Vue.component('task', {
    template : '<li><slot></slot></li>'
});

new Vue({
    el : '#root'
});