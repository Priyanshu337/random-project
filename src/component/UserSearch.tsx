import React from 'react';
import { Users } from '../models/Users';
import { useState, useEffect } from 'react';
import { UsersService } from '../Services/UserService';
import '../App.css';

interface State {
    users: Users[],
}

interface UserSearchProps {
    setValue: any;
    value: any;
}

const UserSearch = ({ setValue, value }: UserSearchProps) => {

    const [search, setsearch] = useState<any>({});

    const [state, setState] = useState<State>({
        users: [] as Users[],
    });

    useEffect(() => {
        setState({ ...state })
        UsersService.getAllUsers().then((res: any) => setState({
            ...state, users: res.data
        }))
            .catch((err: any) => {
                console.log(err);
                setState({ ...state })
            })
    }, []);

    const { users } = state;


    const onSearch = (searchTerm: any) => {
        setValue(searchTerm);
        setsearch({});
    };

    return (
        <>
            <div className="search-container">
                <input type='text' placeholder='Search Users' id='searchInput' value={search?.name} onChange={(e) => setsearch({ name: e.target.value })}></input>

                {users.filter(item => {
                    const searchTerm = search?.name?.toLowerCase();
                    const name = item.name.toLowerCase();
                    return searchTerm && name.startsWith(searchTerm) && name !== searchTerm;
                })
                    .map((item: Users) => (
                        <div onClick={() => onSearch(item)} className="dropdown-row" key={item.id} > {item.name}</div>
                    ))}
            </div>


            <div className='profilename'> {value?.name}</div>
        </>
    );
}

export default UserSearch;





// https://api.geoapify.com/v1/geocode/autocomplete?text=delhi&apiKey=4f3bb3f731eb485fbd81baac8578be50



// const profileName = useMemo(() => {
//     {
//         users.filter(item => {
//             const searchTerm = search.toLowerCase();
//             const name = item.name.toLowerCase();
//             return searchTerm && name.startsWith(searchTerm) && name !== searchTerm;
//         }, [search])

