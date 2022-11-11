import { useState } from "react";
import TableList from "../../components/tableList/TableList";
import TableInsert from "../../components/tableInsert/TableInsert";
import styles from './Home.module.css'
import UserRequests from "../../requests/UserRequests";

export default function Home() {
    const [modal, setModal] = useState(false);
    const [users, setUsers] = useState([]);
    const controller = new UserRequests();
    let apiUsers = [];

    function toggleModal() {
        setModal(!modal);
    }

    async function updateUsers() {
        const response = await controller.GetUsers();
        apiUsers = response.data.payload;
        const newUsers = [
            ...apiUsers
        ]
        setUsers(newUsers);
    }

    useState(async () => {
        updateUsers()
    }, [])

    return (
        <>
            <div className={styles.title}>
                <h1>Itens do inventário</h1>
            </div>
            <TableList listUsers={users} trigger={modal} setTrigger={toggleModal} />
            <TableInsert update={updateUsers} trigger={modal} setTrigger={toggleModal}></TableInsert>
        </>
    );
}