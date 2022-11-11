import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./TableInsert.module.css";
import UserRequests from '../../requests/UserRequests';
import { useForm } from 'react-hook-form';

export default function TableInsert(props) {
    const controller = new UserRequests();
    const { register, handleSubmit, formState: { erros } } = useForm();

    const addUser = async data => {
        await controller.PostUsers(data.nome)
        props.update()
        props.setTrigger()
    }

    return (props.trigger) ? (
        <div className={styles.modal}>
            <div className={styles.overlay}>
                <div className={styles.modalContent}>
                    <h1>Insira um novo usuário!</h1>

                    <form onSubmit={handleSubmit(addUser)}>
                        <div className="form-group">
                            <label htmlFor='inputNome'>Nome</label>
                            <input required name="nome" {...register("nome")} className="form-control" id="inputNome" aria-describedby="nomeHelp" placeholder="Digite o nome..." />
                        </div>
                        <br />
                        <div className={styles.buttons}>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <button
                                className="btn btn-danger"
                                onClick={() => props.setTrigger()}>
                                Close
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    ) : <div></div>;
}