import React, { useState } from "react";
import { connect } from "react-redux";

import Pay from "./Pay";
import TopUp from "./TopUp";
import Portal from "../../Portal";

import * as styles from "./styles";
import { APPSTATUS, TRANSACTION } from "../../../constants";
import { transaction, updateAppStatus } from "../../../store/actions";

interface HandleClickPayload {
  _type: TransactionType;
  _sender: string;
  _recipient: string;
}

export type HandleClick = (payload: HandleClickPayload) => void;

interface TransactionProps {
  openPortal: Function;
  onSubmit: Function;
}

const Transaction: React.FunctionComponent<TransactionProps> = ({
  openPortal,
  onSubmit,
}) => {
  const [type, setType] = useState(TRANSACTION.TOPUP);
  const [sender, setSender] = useState("");
  const [recipient, setRecipient] = useState("");

  const handleClick: HandleClick = ({ _type, _sender, _recipient }) => {
    openPortal();
    setType(_type);
    setSender(_sender);
    setRecipient(_recipient);
    openPortal();
  };

  const handleSubmit = (values: any) => {
    const payload: ITransactionRequest = {
      value: values.value,
      sender: values.sender,
      recipient: values.recipient,
      type,
    };
    onSubmit(payload);
  };
  return (
    <div className={styles.transactionContainer}>
      <TopUp handleClick={handleClick} />
      <Pay handleClick={handleClick} />
      <Portal
        senderPrefill={sender}
        recipientPrefill={recipient}
        onSubmit={handleSubmit}
        type={type}
      />
    </div>
  );
};

const mapDispatchToProps = {
  openPortal: () => updateAppStatus(APPSTATUS.PORTAL_OPEN),
  onSubmit: transaction,
};

export default connect(null, mapDispatchToProps)(Transaction);
