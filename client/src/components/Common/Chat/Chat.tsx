import ChatContainer from '../ChatContainer/ChatContainer';
import EntryField from '../EntryField/EntryField';

import Members from '../Members/Members';
import styles from './Chat.module.scss'
const Chat = () => {
  return (
    <>
    <div className={styles.chat}>
      <Members/>
      <ChatContainer/>
    </div>
    <EntryField screen='mobile'/>
    </>
    
  );
};

export default Chat;