export interface iTask {
    value: string,
    priority: number
}

export class PriorityQueue {
    private tasks: iTask[] = [];
    
    constructor() {
        this.tasks = [];
    }

    private swap(index1: number, index2: number) {
        [this.tasks[index1], this.tasks[index2]] = [this.tasks[index2], this.tasks[index1]]
    }

    private bubbleUp(): void {
        let index = this.tasks.length - 1
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)
            if (this.tasks[parentIndex].priority > this.tasks[index].priority) {
                this.swap(index, parentIndex);
                index = parentIndex;
            }
            else break;
        }
    }

    private bubbleDown(): void {
        let parentIndex = 0;
        const elementPriority = this.tasks[0].priority;
        while (true) {
            let leftChildIndex = (2 * parentIndex) + 1;
            let rightChildIndex = (2 * parentIndex) + 2;
            let leftChildPriority = 0, rightChildPriority = 0;
            let indexToSwap = null;
            if (leftChildIndex < this.tasks.length) {
                leftChildPriority = this.tasks[leftChildIndex].priority
                if (leftChildPriority < elementPriority) {
                    indexToSwap = leftChildIndex;
                }
            }
            if (rightChildIndex < this.tasks.length) {
                rightChildPriority = this.tasks[rightChildIndex].priority
                if (
                    (rightChildPriority < elementPriority && indexToSwap === null) ||
                    (rightChildPriority < leftChildPriority && indexToSwap !== null)) {
                    indexToSwap = rightChildIndex
                }
            }
            if (indexToSwap === null) {
                break;
            }
            this.swap(parentIndex, indexToSwap);
            parentIndex = indexToSwap;
        }
    }

    public size() {
        return this.tasks.length
    }

    public addTasks(tasks: iTask[]) {
        tasks.forEach(task => {
            this.tasks.push(task);
            this.bubbleUp()
        })
    }

    public print(): iTask[] {
        return this.tasks;
    }

    public runTask(): iTask {
        this.swap(0, this.tasks.length - 1);
        let task = this.tasks.pop();
        if (this.tasks.length > 1) {
            this.bubbleDown();
        }
        return task ?? { value: "No tasks left", priority: 0 };
    }
}
