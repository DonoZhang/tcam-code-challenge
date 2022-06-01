import React from "react";
import { cx } from "@emotion/css";

import * as styles from "./styles";

interface InputProps {
  readonly: boolean;
  className: string;
  value: string | number;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export const Input: React.FunctionComponent<InputProps> = ({
  readonly,
  className,
  value,
  label,
  onChange,
  type = "text",
}) => (
  <div className={cx(styles.inputWrapper, className)}>
    <label htmlFor="sender">{label}</label>
    <input
      type={type}
      id="sender"
      name="sender"
      onChange={onChange}
      readOnly={readonly}
      value={value}
    />
  </div>
);
