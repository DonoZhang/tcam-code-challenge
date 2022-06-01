import React from "react";
import { connect } from "react-redux";

import Record from "./Record";

import * as styles from "./styles";

interface HistoryProps {
  history?: IRecord[];
}

const History: React.FunctionComponent<HistoryProps> = ({ history = [] }) => (
  <div className={styles.historyContainer}>
    {history.map(
      ({
        balance,
        recipient,
        sender,
        status,
        timestamp,
        type,
        value,
      }: IRecord) => (
        <Record
          value={value}
          status={status}
          type={type}
          sender={sender}
          recipient={recipient}
          timestamp={timestamp}
          balance={balance}
          key={timestamp}
        />
      )
    )}
  </div>
);

const mapStateToProps = (state: IState) => ({
  history: state.history,
});

export default connect(mapStateToProps, null)(History);
