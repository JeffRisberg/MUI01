import React from 'react';
import ReactDOM from 'react-dom';

class UserList extends React.Component {
    constructor() {
        super();

        this.getUsersFromLocalStorage();
        this.addUser = this.addUser.bind(this);
        this.saveUsers = this.saveUsers.bind(this);
        this.deleteUsers = this.deleteUsers.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    getUsersFromLocalStorage() {
        this.userList = JSON.parse(localStorage.getItem('users'));
        console.log("found local storage userList: " + this.userList);

        if (this.userList == null) {
            this.userList = [
                {fname: 'Sara', lname: 'Smith'},
                {fname: 'Dave', lname: "Thomas"},
                {fname: 'John', lname: 'Hill'},
                {fname: 'Sally', lname: "Jones"}
            ];

            console.log('Initialized userList: ' + this.userList);
        }

        console.log('Initial length of userList: ' + this.userList.length);
    }

    saveUsersLocalStorage() {
        localStorage.setItem('users', JSON.stringify(this.userList));
    }

    deleteUsersLocalStorage() {
        localStorage.setItem('users', null);
    }

    componentDidMount() {
        this.setState({user: ""});
    }

    updateUser(e) {
        console.log("fname = " + e.target.value);
    }

    addUser() {
        var fname = this.refs.fname.value;
        var lname = this.refs.lname.value;
        var entry = {fname: fname, lname: lname};
        this.setState({user: entry}); // cause a refresh
        this.userList.push(entry);
    }

    saveUsers() {
        console.log("saving this.userList to local storage");
        this.saveUsersLocalStorage();
    }

    deleteUsers() {
        console.log("deleting userList from storage");
        this.deleteUsersLocalStorage();
    }

    deleteUser() {
        console.log("deleting user from storage");
        var fname = this.refs.fname.value;
        var lname = this.refs.lname.value;
        var entry = {fname: fname, lname: lname};

        var index = -1;

        this.userList.forEach(function (listEntry, listEntryIndex) {
            if (listEntry.fname == fname && listEntry.lname == lname) {
                index = listEntryIndex;
            }
        });
        console.log(index);

        if (index >= 0) {
            this.setState({user: ""}); // cause a refresh
            this.userList.splice(index, 1)
        }
    }

    render() {
        return (
            <div>
                <ul>
                    <ListOptions options={this.userList}/>
                </ul>
                <input ref="fname" type="text" onChange={this.updateUser}/>
                <input ref="lname" type="text"/>
                <button onClick={this.addUser}>Add User</button>
                <button onClick={this.deleteUser}>Delete User</button>
                <br/>
                <button onClick={this.saveUsers}>Save Users</button>
                <button onClick={this.deleteUsers}>Delete Users</button>
            </div>
        )
    }
}

class ListOptions extends React.Component {
    render() {
        return (
            <div>
                {this.props.options.map(function (entry, index) {
                    return (
                        <li key={index}>
                            {entry.fname} {entry.lname}
                        </li>
                    )
                })}
            </div>
        )
    }
}

ReactDOM.render(
    <UserList/>,
    document.getElementById('container')
);
