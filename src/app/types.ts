import {EntityState} from "@reduxjs/toolkit";
export interface User {
    id: string,
    name: string
}

// interface UserEntityState extends EntityState<User> {
//     // id: string;
//     // name: string;
// }
//
// export class UserClass implements UserEntityState {
//     id: string;
//     name: string;
//
//     constructor(id: string, name: string) {
//         this.id = id;
//         this.name = name;
//     }
// }
