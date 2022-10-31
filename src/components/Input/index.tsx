import React from "react";
import "./index.scss";

type BaseInputProps = {
  label: string;
  required: boolean;
  type: string;
} & typeof defaultProps;

const defaultProps = {
  label: "Base Input",
  required: false,
  type: "text",
}

export const BaseInput = (props: React.PropsWithChildren<BaseInputProps>) => { 
  const { label, required, type, children } = props;

  return (
    <div className={"d-flex base-input " + type}>
      <span>{label + (required ? "*" : "") + " :"}</span>
      <input type={type} />
    </div>
  )
}

BaseInput.defaultProps = defaultProps;