import ChatContainer from '../ChatContainer/ChatContainer';
import Members from '../Members/Members';
import styles from './Chat.module.scss'
const Chat = () => {
  return (
    <div className={styles.chat}>
       <Members/>
       <ChatContainer/>
    </div>
  );
};

export default Chat;