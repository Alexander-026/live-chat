import Chat from "../components/Common/Chat/Chat";
import Form from "../components/Common/Form/Form";
import { useAppSelector } from "../hooks/redux";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  const { joined } = useAppSelector((state) => state.chat);

  
  return (
    <div className={styles.main}>
      {joined ? (
        <Chat />
      ) : (
        <>
          <h1 className={styles.mainTitle}>
            Join the live chat !
          </h1>
          <Form />
        </>
      )}
    </div>
  );
};

export default MainPage;
