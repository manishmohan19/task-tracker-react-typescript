import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

interface IProps{
    title?:string;
    onAdd:()=>void;
    showAdd:Boolean;
  }

const Header = ({ title, onAdd, showAdd }:IProps) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        text={showAdd ? "close" : "add"}
        onAdd={onAdd}
        color={showAdd ? "red" : "green"}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
