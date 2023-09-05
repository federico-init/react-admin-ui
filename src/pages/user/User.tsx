// component
import Single from "../../components/single/Single";

// data
import { singleUser } from "../../data";

// style
import "./user.scss";

const User = () => {
  // Fetch data and send to Single component

  return (
    <div className="user">
      <Single {...singleUser} />
    </div>
  );
};

export default User;
