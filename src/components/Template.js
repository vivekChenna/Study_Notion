import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const Template = ({ title, desc1, desc2, formType, setIsLoggedIn }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>

        {formType === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}

        <div>
          <div>line creation1</div>
          <p>OR</p>
          <div>line creation 2</div>
        </div>

        <button>Signup with Google</button>
      </div>

      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Template;
