type ButtonProps = {
  title: string;
}

const Button = (props: ButtonProps) => { 
  const { title } = props;

  return (
    <button className="btn">{title}</button>
  )
}

export default Button;