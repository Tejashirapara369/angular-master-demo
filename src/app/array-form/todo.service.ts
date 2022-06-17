import { Injectable } from "@angular/core";
import { User } from "./todo.interface";

@Injectable()
export class TodoService {
    private userList: User[] = [
        {
            name: "Tejas",
            tasks: [
                {name: "task1", priority: 2, time: "02:00"},
                {name: "task2", priority: 4, time: "02:00"},
                {name: "task3", priority: 1, time: "14:00"},
                {name: "task4", priority: 6, time: "02:00"},
            ]
        },
        {
            name: "Raju",
            tasks: [
                {name: "Raju-1", priority: 2, time: "18:00"},
                {name: "Raju-2", priority: 4, time: "02:00"},
                {name: "Raju-3", priority: 1, time: "02:00"},
                {name: "Raju-4", priority: 6, time: "02:00"},
            ]
        },
    ];
    

    get users(): User[]{
        return this.userList;
    } 

    addUser(user: User) {
        this.userList.push(user);
        console.log('this.userList ==>', this.userList)
    }

    removeRemove(index: number) {
        this.userList.splice(index, 1);
    }
}

