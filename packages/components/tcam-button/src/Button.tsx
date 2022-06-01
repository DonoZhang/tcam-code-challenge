import React from "react";
import { cx } from "@emotion/css";
import * as styles from "./styles";

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  disabled: boolean;
  className: string;
  testId: string;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  onClick,
  children,
  disabled,
  className,
  testId,
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    data-testid={testId}
    className={cx(styles.ButtonStyle, className)}
  >
    {children}
  </button>
);
