import classNames from "classnames";
import Button from "../../UI/Button/Button";
import styles from "./ChatContainer.module.scss";
const ChatContainer = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.containerList}>
        <li className={styles.containerListItem}>
          <div
            className={classNames(styles.containerListInnerItem, {
              my: true,
              alien: false,
            })}
          >
            <div className={styles.containerListItemName}>Alex</div>
            <p className={styles.containerListItemText}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem, in!
            </p>
            <div className={styles.containerListItemTimestamp}>
              04.05.2023 1:07
            </div>
          </div>
        </li>
        <li className={styles.containerListItem}>
          <div
            className={classNames(styles.containerListInnerItem, {
              my: true,
              alien: false,
            })}
          >
            <div className={styles.containerListItemName}>Alex</div>
            <p className={styles.containerListItemText}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem, in!
            </p>
            <div className={styles.containerListItemTimestamp}>
              04.05.2023 1:07
            </div>
          </div>
        </li>
        <li className={styles.containerListItem}>
          <div
            className={classNames(styles.containerListInnerItem, {
              my: false,
              alien: true,
            })}
          >
            <div className={styles.containerListItemName}>Alex</div>
            <p className={styles.containerListItemText}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem, in!
            </p>
            <div className={styles.containerListItemTimestamp}>
              04.05.2023 1:07
            </div>
          </div>
        </li>
        <li className={styles.containerListItem}>
          <div
            className={classNames(styles.containerListInnerItem, {
              my: true,
              alien: false,
            })}
          >
            <div className={styles.containerListItemName}>Alex</div>
            <p className={styles.containerListItemText}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem, in! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Architecto dolor excepturi beatae modi laboriosam reiciendis
              explicabo laborum aliquid nostrum, exercitationem odio quas
              officia, debitis quia error perferendis soluta? Ratione dolores
              aspernatur architecto nostrum ducimus molestiae, perspiciatis
              maxime? Facilis, molestias. Voluptate ea necessitatibus expedita,
              eaque blanditiis voluptas error commodi vitae unde.
            </p>
            <div className={styles.containerListItemTimestamp}>
              04.05.2023 1:07
            </div>
          </div>
        </li>
      </ul>
      <div className={styles.containerEntryField}>
        <textarea placeholder="Write a message..." />
        <Button
          className={styles.containerSendBtn}
          variant="primary"
          size="small"
          uppercase
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default ChatContainer;
