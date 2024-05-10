// Condition rendering = allows you to control what gets rendered
//                       in your application based on certain conditions
//                       (show, hide or change components)


import PropTypes from "prop-types";

function UserGreeting(props) {

    const welcome = <h2 className="welcome-message">Welcome {props.username}</h2>;
    const login = <h2 className="login-message">Please log in to continue</h2>;

    return (props.isLoggedIn ? welcome : login);
}

UserGreeting.prototype = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
};

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
};
export default UserGreeting;



