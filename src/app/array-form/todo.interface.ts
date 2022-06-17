export interface User {
    name: string,
    tasks: TodoItem[]
}

export interface TodoItem {
    name: string,
    priority: number,
    time: string
}


