import React from 'react';
import Header from 'tcam-header'

import Dashboard from './components/Dashboard'

import * as styles from './styles'

function App() {
  return (
    <div className={styles.background}>
      <Header title="Wallet" imageSrc="https://www.tcam.co/assets/images/user_img.jpg" />
      <div className={styles.dashboardContainer}>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
