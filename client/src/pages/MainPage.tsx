import { useAppSelector } from "../hooks/redux";

const MainPage = () => {
  const {joined} = useAppSelector((state) => state.chat)
  return (
    <div>
      <h6>Life Chat</h6>
    </div>
  );
};

export default MainPage;