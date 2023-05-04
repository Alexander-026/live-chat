import styles from "./ChatContainer.module.scss";
import Messages from "../Messages/Messages";
import EntryField from "../EntryField/EntryField";
const ChatContainer = () => {
  return (
    <div className={styles.container}>
      <Messages/>
      <EntryField screen="desctop"/>
    </div>
  );
};

export default ChatContainer;
