import React from "react";
import PropTypes from "prop-types";

const ProfileComp = (props) => {
    return (
        <div>
            <h1> My name is{props.name}</h1>
            <h1>Profession : {props.profession}</h1>
            <h1>Bio: {props.bio}</h1>
            <button onClick={() => props.handlename(props.name)}>
                show me {""}
            </button>
            <p>{props.children}</p>
        </div>
    );
};

export default ProfileComp;

ProfileComp.defaultProps = {
    name: "#######",
    bio: "i'm a robot",
    profession: "IT ",
};

ProfileComp.propTypes = {
    name: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
};
