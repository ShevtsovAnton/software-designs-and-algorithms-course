import {iTask, PriorityQueue}  from './priorityQueue';

const NUMBER_OF_TASKS = 10;
// const NUMBER_OF_TASKS = 10000;

const tasks = new PriorityQueue();
const list: iTask[] = [];
for (let i = 0; i < NUMBER_OF_TASKS; i++) {
    const priority = Math.floor(Math.random() * NUMBER_OF_TASKS) + 1;
    list.push({value: `task has a priority of ${priority}`, priority})
}

tasks.addTasks(list)

while (tasks.size() > 0) {
    console.log(tasks.runTask());
}
