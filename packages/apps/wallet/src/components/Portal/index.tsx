import React, { useState, useEffect } from "react";
import Input from "tcam-input";
import Button from "tcam-button";
import { connect } from "react-redux";

import * as styles from "./styles";
import { updateAppStatus } from "../../store/actions";
import { APPSTATUS } from "../../constants";

interface PortalPropsType {
  senderPrefill: string;
  recipientPrefill: string;
  onSubmit: Function;
  type: TransactionType;
  open?: boolean;
  closePortal: Function;
}

const Portal: React.FunctionComponent<PortalPropsType> = ({
  senderPrefill,
  recipientPrefill,
  onSubmit,
  type,
  open,
  closePortal,
}) => {
  const [sender, setSender] = useState(senderPrefill);
  const [recipient, setRecipient] = useState(recipientPrefill);
  const [value, setValue] = useState("0");
  useEffect(() => {
    if (senderPrefill) {
      setSender(senderPrefill);
    }
    if (recipientPrefill) {
      setRecipient(recipientPrefill);
    }
  }, [senderPrefill, recipientPrefill]);
  const senderOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSender(event.currentTarget.value);
  };
  const recipientOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRecipient(event.currentTarget.value);
  };
  const valueOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const handleSubmit = () => {
    if (sender && recipient && parseFloat(value)) {
      onSubmit({
        sender,
        recipient,
        value: parseFloat(value),
      });
    }
  };
  return open ? (
    <div className={styles.portal}>
      <div>
        <Input
          readonly={!!senderPrefill}
          className={styles.inputContainer}
          value={sender}
          label="From"
          onChange={senderOnChange}
        />
        <Input
          readonly={!!recipientPrefill}
          className={styles.inputContainer}
          value={recipient}
          label="To"
          onChange={recipientOnChange}
        />
        <Input
          className={styles.inputContainer}
          value={value}
          label="Amount"
          onChange={valueOnChange}
          type="number"
        />
        <Button className={styles.button} onClick={handleSubmit}>
          {type}
        </Button>
        <Button className={styles.button} onClick={closePortal}>
          Close
        </Button>
      </div>
    </div>
  ) : null;
};

const mapStateToProps = (state: IState) => ({
  open: state.appStatus === APPSTATUS.PORTAL_OPEN,
});

const mapDispatchToProps = {
  closePortal: () => updateAppStatus(APPSTATUS.LOADED),
};

export default connect(mapStateToProps, mapDispatchToProps)(Portal);
