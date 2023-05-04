import Chat from "../components/Common/Chat/Chat";
import Form from "../components/Common/Form/Form";
import { useAppSelector } from "../hooks/redux";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  const { joined, error } = useAppSelector((state) => state.chat);
  return (
    <div className={styles.main}>
      {joined ? (
        <Chat />
      ) : error ? (
        <div className={styles.mainError}>{error}</div>
      ) : (
        <Form />
      )}
    </div>
  );
};

export default MainPage;
