
import { Users } from '../models/Users';
import { useState, useEffect } from 'react';
import { UsersService } from '../Services/userService';
import '../index.css'


interface State {
    users: Users[],
}
//main function User
const User = () => {
    const [state, setState] = useState<State>({
        users: [] as Users[],
    })

    // network call to fetch data form api

    useEffect(() => {
        setState({ ...state })
        UsersService.getAllUsers().then((res) => setState({
            ...state, users: res.data
        }))
            .catch((err) => {
                console.log(err);
                setState({ ...state })
            })
    }, []);

    const { users } = state;

    const [search, setsearch] = useState('');
    console.log(search)

    const onSearch = (searchTerm: any) => {
        setsearch(searchTerm);
        console.log("search", searchTerm);
    };

    return (
        <>
            <div className="main-container">
                <h1>Data from API</h1>

                <div className="search-container">
                    <input type='text' placeholder='Search Users' id='searchInput' value={search} onChange={(e) => setsearch(e.target.value)}></input>

                    {users.filter(item => {
                        const searchTerm = search.toLowerCase();
                        const name = item.name.toLowerCase();
                        return searchTerm && name.startsWith(searchTerm) && name !== searchTerm;
                    })
                        .map((item: Users) => (
                            <div onClick={() => onSearch(item.name)} className="dropdown-row" key={item.id} > {item.name}</div>
                        ))}

                    {/* <button onClick={() => onSearch(search)}>Search</button> */}
                </div>
            </div >
        </>
    );
}
export default User
