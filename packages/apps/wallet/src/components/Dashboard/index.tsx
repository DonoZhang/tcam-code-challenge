import React from "react";

import Balance from "./Balance";
import Transaction from "./Transaction";
import History from "./History";
import Loader from "../Loader";

import * as styles from "./styles";

const Dashboard: React.FunctionComponent = () => (
  <div className={styles.dashboardContainer}>
    <Balance value={0} />
    <Transaction />
    <History />
    <Loader />
  </div>
);

export default Dashboard;
