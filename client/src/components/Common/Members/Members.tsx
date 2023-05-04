import classNames from "classnames";
import styles from "./Members.module.scss";
import { useAppSelector } from "../../../hooks/redux";

const Members = () => {
  const { users, userId } = useAppSelector((state) => state.chat);
  return (
    <div className={styles.members}>
      <div className={styles.membersOnline}>
        Online:
        <span className={styles.membersOnlineCount}>{users.length}</span>
      </div>
      <ul className={styles.membersList}>
        {users.map((user) => (
          <li className={styles.membersItem} key={user.id}>
            <span className={classNames(styles.membersItemName, {i: user.id === userId})}>{user.fullName}</span>
            <div
              className={classNames(styles.membersItemTyping, {
                active: user.id !== userId && user.typing,
              })}
            >
              typing
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Members;
