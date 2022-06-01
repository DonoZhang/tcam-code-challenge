# TCAM Wallet

[Demo](http://tcam-wallet.s3-website-ap-southeast-2.amazonaws.com/)

## Overview

This React app is built utilising TCAM's private UI library. Typescript is used to enforce strict type check, which helps catch mistakes and improve development efficiency. Redux and redux-thunk are used for front-end state management. This app utilises the theme defined in tcam-theme library. Responsive design is applied to adapt the website to a wide range of screen sizes.

## Features

### Balance

Display the value left in the wallet in Australian dollars. Balance is updated after a successful money top-up or payment.

### Top Up

Add money from a sender address to the wallet (self). A successful top-up will update your wallet balance. Both sucessful and failed top-up will be recorded in the transaction history.

### Pay

Transfer money from the wallet (self) to a recipient address. A sucessful payment will update your wallet balance. Both Successful and failed payment will be recorded in the transaction history.

### History

Both successful and failed transactions will be recorded in the history session. Each record contains the attemped transaction value, type (top-up or payment), timestamp, sender and recipient, and account balance after the action.
