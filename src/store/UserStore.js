import { makeAutoObservable } from "mobx"

export default class UserStore {
    constructor() {
        this._users = []
        makeAutoObservable(this)
    }
    setUsers(user) {
        this._users.push(user)
    }

    get users() {
        return this._users
    }
}