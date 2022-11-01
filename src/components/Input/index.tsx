import './index.css';

type BaseInputProps = {
  label: string;
  required: boolean;
  type: string;
  value: string;
} & typeof defaultProps;

type AdanvcedInputProps = {
  detail: string;
} & BaseInputProps;

const defaultProps = {
  label: 'Base Input',
  required: false,
  type: 'text',
  value: '',
};

export const BaseInput = (props: BaseInputProps) => {
  const { label, required, type } = props;

  return (
    <div className={'d-flex base-input ' + type}>
      <span>{label + (required ? '*' : '') + ' :'}</span>
      {type === 'textarea' ? <textarea rows={4} /> : <input type={type} />}
    </div>
  );
};

export const NormalInput = (props: BaseInputProps) => {
  const { label, required, type, value } = props;

  return (
    <div className="d-flex normal-input">
      <span>{label + (required ? '*' : '') + ' :'}</span>
      {type === 'textarea' ? (
        <textarea rows={4} />
      ) : (
        <input
          type={type}
          value={value}
          onChange={() => console.log('normal input')}
        />
      )}
    </div>
  );
};

export const DetailedInput = (props: AdanvcedInputProps) => {
  const { label, required, type, detail } = props;

  return (
    <div className="d-flex flex-column detailed-input">
      <span>{label + (required ? '*' : '') + ' :'}</span>
      {type === 'textarea' ? <textarea rows={4} /> : <input type={type} />}
      <span>{detail}</span>
    </div>
  );
};

BaseInput.defaultProps = defaultProps;
NormalInput.defaultProps = defaultProps;
DetailedInput.defaultProps = defaultProps;
