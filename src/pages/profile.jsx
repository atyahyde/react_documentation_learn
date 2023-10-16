import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
  const username = useLogin();
  return <div>{username}</div>;
};

export default ProfilePage;
