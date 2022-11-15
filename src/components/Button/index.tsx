import './index.scss';

type ButtonProps = {
  title: string;
  handleClick: any;
};

type IconButtonProps = {
  src: string;
  selected: boolean;
} & ButtonProps &
  typeof defaultProps;

type CategoryButtonProps = {
  addable: boolean;
} & ButtonProps &
  typeof defaultCategoryProps;

const defaultProps = {
  selected: false,
};

const defaultCategoryProps = {
  addable: false,
};

export const IconButton = (props: IconButtonProps) => {
  const { title, src, selected, handleClick } = props;

  return (
    <div className="icon-button" onClick={handleClick}>
      <img className={selected ? 'selected' : ''} src={src} alt="" />
      <span>{title}</span>
    </div>
  );
};

export const MiniIconButton = (props: IconButtonProps) => {
  const { title, src, selected, handleClick } = props;

  return (
    <div className="icon-button" onClick={handleClick}>
      <img className={`mini ${selected ? 'selected' : ''}`} src={src} alt="" />
      <span className="mini">{title}</span>
    </div>
  );
};

export const NormalButton = (props: ButtonProps) => {
  const { title, handleClick } = props;

  return (
    <div className="normal-button" onClick={handleClick}>
      {title}
    </div>
  );
};

export const CategoryButton = (props: CategoryButtonProps) => {
  const { title, addable, handleClick } = props;
  return (
    <div className="category-button" onClick={handleClick}>
      {addable && <img src="./images/uncircled-plus.svg" alt="add" />}
      <span>{title}</span>
    </div>
  );
};

IconButton.defaultProps = defaultProps;
MiniIconButton.defaultProps = defaultProps;
CategoryButton.defaultProps = defaultCategoryProps;
