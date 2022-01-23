import React from "react";
import styles from "./users.module.css";

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWnWnXk8Nvmzbih3LEx-TN1neBFclgG8Bfmw&usqp=CAU",
                followed: false,
                fullName: "Arman",
                status: "I am a boss",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 2,
                photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWnWnXk8Nvmzbih3LEx-TN1neBFclgG8Bfmw&usqp=CAU",
                followed: true,
                fullName: "Serob",
                status: "I am a boss too",
                location: {city: "Moscow", country: "Russia"}
            },
            {
                id: 3,
                photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWnWnXk8Nvmzbih3LEx-TN1neBFclgG8Bfmw&usqp=CAU",
                followed: false,
                fullName: "Hakob",
                status: "I am a boss too",
                location: {city: "Washington", country: "USA"}
            },

        ])
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                    <img src={u.photoUrl} alt=" " className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button> :
                            <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow </button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>u.location.country</div>
                    </span>
                </span>
            </div>)
        }
    </div>


}
export default Users;