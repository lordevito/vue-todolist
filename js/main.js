`use strict`;

const { createApp } = Vue;

  createApp({
    data() {
        return {
        tasksList: [
            { text: 'Fare la spesa', done: false },
            { text: 'Fare la lavatrice', done: false },
            { text: 'Pulire casa', done: false }
        ],
        doneTasks: [],
        newTask: '',
    }
    },
    methods: {
        taskIsDone(task) {
            task.done = true;
            this.doneTasks.push(task);
        },
        addTask() {
            this.tasksList.push(
                {
                    text: this.newTask,
                    done: false,
                }
            );
            this.newTask = '';
        },
    },
}).mount('#root');