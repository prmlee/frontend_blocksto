import { useState } from 'react';
import './dropdown.css';

export const BasicDropdown = (props: { label: string; values: string[] }) => {
  const { label, values } = props;
  const [isDown, setIsDown] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(0);
  const [selectedValue, setSelectedValue] = useState<string>(values[0]);

  return (
    <div className="d-flex flex-column basic dropdown">
      <div className="d-flex justify-content-between align-items-center w-100 header">
        <span>{`${label} :`}</span>
        <span>{values[selected]}</span>
        <img
          className={isDown ? 'down' : 'up'}
          src="./images/drop-arrow.svg"
          alt="drop icon"
          onClick={() => {
            setIsDown(!isDown);
          }}
        />
      </div>
      {isDown && (
        <div className="d-flex flex-column align-items-center position-absolute body">
          {values.map((value, index) => (
            <p
              key={`dropdown-${index}`}
              onClick={() => {
                setSelected(index);
                setIsDown(false);
              }}
            >
              {value}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
