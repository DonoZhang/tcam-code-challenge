import React from "react";
import Button from "tcam-button";
import * as styles from "./styles";
import { HandleClick } from "./index";
import { TRANSACTION } from "../../../constants";

interface PayProp {
  handleClick: HandleClick;
}

const Pay: React.FunctionComponent<PayProp> = ({ handleClick }) => {
  const onClick = () => {
    handleClick({
      _type: TRANSACTION.PAY,
      _recipient: "",
      _sender: "self",
    });
  };
  return (
    <Button className={styles.button} onClick={onClick}>
      {TRANSACTION.PAY}
    </Button>
  );
};

export default Pay;
