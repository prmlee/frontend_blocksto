import React from 'react';
import './index.scss';

type ButtonProps = {
  title: string;
  src: string;
  selected: boolean;
  handleClick: any;
} & typeof defaultProps;

const defaultProps = {
  selected: false,
};

export const IconButton = (props: ButtonProps) => {
  const { title, src, selected, handleClick } = props;

  return (
    <div className="icon-button" onClick={handleClick}>
      <img className={selected ? 'selected' : ''} src={src} alt="" />
      <span>{title}</span>
    </div>
  );
};

export const MiniIconButton = (props: ButtonProps) => {
  const { title, src, handleClick } = props;

  return (
    <div className="icon-button d-flex flex-column" onClick={handleClick}>
      <img className="mini" src={src} alt="" />
      <span className="mini">{title}</span>
    </div>
  );
};

IconButton.defaultProps = defaultProps;
MiniIconButton.defaultProps = defaultProps;
