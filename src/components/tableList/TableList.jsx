import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./TableList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function TableList(props) {
    const buttonStyle = `btn rounded-pill ${styles.buttonStyle}`

    return (
        <>
            <div className={styles.tableStyle}>
                <div className={styles.divBtn}>
                    <button className={buttonStyle} onClick={() => props.setTrigger()}> <FontAwesomeIcon icon={faPlus} className={styles.iconStyle} />Novo item</button>
                </div>
                <div>
                    <table className="table table-bordered">
                        <thead className={styles.theadStyle}>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nome do Item</th>
                                <th scope="col">Data de Criação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                props.listUsers.map((item) =>
                                    <tr className={styles.bodyStyle} key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.nome}</td>
                                        <td>{item.dataCriada}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}