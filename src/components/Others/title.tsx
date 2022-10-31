import "./index.scss";

type TitleProp = {
  text: string;
}

const Title = (props: TitleProp) => { 
  const { text } = props;
  
  return (
    <div className="d-flex align-items-center position-relative title">
      <p>{text}</p>
      <div />
    </div>
  );
}

export default Title;