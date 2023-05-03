import classNames from "classnames";
import styles from "./Members.module.scss";

const Members = () => {
  return (
    <div className={styles.members}>
      <div className={styles.membersOnline}>
        Online:
        <span className={styles.membersOnlineCount}>26</span>
      </div>
      <ul className={styles.membersList}>
        <li className={styles.membersItem}>
          <span className={styles.membersItemName}>Alexander Bryndin</span>
          <div className={classNames(styles.membersItemTyping, {active:false})}>typing</div>
        </li>
        <li className={styles.membersItem}>
          <span className={styles.membersItemName}>Alexander Bryndin</span>
          <div className={classNames(styles.membersItemTyping, {active:true})}>typing</div>
        </li>
        <li className={styles.membersItem}>
          <span className={styles.membersItemName}>Alexander Bryndin</span>
          <div className={classNames(styles.membersItemTyping, {active:false})}>typing</div>
        </li>
        <li className={styles.membersItem}>
          <span className={styles.membersItemName}>Alexander Bryndin</span>
          <div className={classNames(styles.membersItemTyping, {active:false})}>typing</div>
        </li>
        <li className={styles.membersItem}>
          <span className={styles.membersItemName}>Alexander Bryndin</span>
          <div className={classNames(styles.membersItemTyping, {active:false})}>typing</div>
        </li>
        <li className={styles.membersItem}>
          <span className={styles.membersItemName}>Alexander Bryndin</span>
          <div className={classNames(styles.membersItemTyping, {active:false})}>typing</div>
        </li>
        <li className={styles.membersItem}>
          <span className={styles.membersItemName}>Alexander Bryndin</span>
          <div className={classNames(styles.membersItemTyping, {active:false})}>typing</div>
        </li>
        <li className={styles.membersItem}>
          <span className={styles.membersItemName}>Alexander Bryndin</span>
          <div className={classNames(styles.membersItemTyping, {active:false})}>typing</div>
        </li>
        <li className={styles.membersItem}>
          <span className={styles.membersItemName}>Alexander Bryndin</span>
          <div className={classNames(styles.membersItemTyping, {active:false})}>typing</div>
        </li>
        <li className={styles.membersItem}>
          <span className={styles.membersItemName}>Alexander Bryndin</span>
          <div className={classNames(styles.membersItemTyping, {active:false})}>typing</div>
        </li>
        <li className={styles.membersItem}>
          <span className={styles.membersItemName}>Alexander Bryndin</span>
          <div className={classNames(styles.membersItemTyping, {active:false})}>typing</div>
        </li>
        <li className={styles.membersItem}>
          <span className={styles.membersItemName}>Alexander Bryndin</span>
          <div className={classNames(styles.membersItemTyping, {active:false})}>typing</div>
        </li>
        <li className={styles.membersItem}>
          <span className={styles.membersItemName}>Alexander Bryndin</span>
          <div className={classNames(styles.membersItemTyping, {active:false})}>typing</div>
        </li>
        <li className={styles.membersItem}>
          <span className={styles.membersItemName}>Alexander Bryndin</span>
          <div className={classNames(styles.membersItemTyping, {active:false})}>typing</div>
        </li>
        <li className={styles.membersItem}>
          <span className={styles.membersItemName}>Alexander Bryndin</span>
          <div className={classNames(styles.membersItemTyping, {active:false})}>typing</div>
        </li>
        <li className={styles.membersItem}>
          <span className={styles.membersItemName}>Alexander Bryndin</span>
          <div className={classNames(styles.membersItemTyping, {active:false})}>typing</div>
        </li>
        <li className={styles.membersItem}>
          <span className={styles.membersItemName}>Alexander Bryndin</span>
          <div className={classNames(styles.membersItemTyping, {active:false})}>typing</div>
        </li>
        <li className={styles.membersItem}>
          <span className={styles.membersItemName}>Alexander Bryndin</span>
          <div className={classNames(styles.membersItemTyping, {active:false})}>typing</div>
        </li>
        <li className={styles.membersItem}>
          <span className={styles.membersItemName}>Alexander Bryndin</span>
          <div className={classNames(styles.membersItemTyping, {active:false})}>typing</div>
        </li>
        <li className={styles.membersItem}>
          <span className={styles.membersItemName}>Alexander Bryndin</span>
          <div className={classNames(styles.membersItemTyping, {active:false})}>typing</div>
        </li>
        <li className={styles.membersItem}>
          <span className={styles.membersItemName}>Alexander Bryndin</span>
          <div className={classNames(styles.membersItemTyping, {active:false})}>typing</div>
        </li>
        <li className={styles.membersItem}>
          <span className={styles.membersItemName}>Alexander Bryndin</span>
          <div className={classNames(styles.membersItemTyping, {active:false})}>typing</div>
        </li>
        <li className={styles.membersItem}>
          <span className={styles.membersItemName}>Alexander Bryndin</span>
          <div className={classNames(styles.membersItemTyping, {active:false})}>typing</div>
        </li>
      </ul>
    </div>
  );
};

export default Members;
