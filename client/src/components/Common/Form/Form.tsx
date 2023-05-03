import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import styles from "./Form.module.scss";

const Form = () => {
  return (
    <div className={styles.form}>
      <Input type="text" value="" onChange={() => {}} label="RoomID" />
      <Input type="text" value="" onChange={() => {}} label="Full Name" />
      <Button size="large" variant="primary" full>
        Connect
      </Button>
    </div>
  );
};

export default Form;
