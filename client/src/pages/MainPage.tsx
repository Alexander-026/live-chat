import Chat from "../components/Common/Chat/Chat";
import Form from "../components/Common/Form/Form";
import { useAppSelector } from "../hooks/redux";
import styles from './MainPage.module.scss'

const MainPage = () => {
  const {joined} = useAppSelector((state) => state.chat)
  return (
    <div className={styles.main}>
      {/* <h1 className={styles.mainTitle}>Life Chat {joined ? 'joinde' : ''}</h1> */}
      {/* <Form/> */}
      <Chat/>
    </div>
  );
};

export default MainPage;