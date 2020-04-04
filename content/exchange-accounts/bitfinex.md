---
title: "Bitfinex"
metaTitle: "Bitfinex"
metaDescription: "How to register Bitfinex account and create API keys"
---

We are going to explain here how to create an account at Bitfinex, how to deposit funds and how to give your account the API keys allowing it trade.

## Register an account

[Bitfinex account registration](https://www.bitfinex.com/?refcode=BBRrpRJZ)

## Verify your account

You have to verify yourself.  
Go to the "Verification" in the upper right corner in the "Manage Account".
![Verification window](https://support.cryptuoso.com/bitfinex_verification.png)

## Deposit funds to your account

Go to your [deposit page](https://www.bitfinex.com/deposit) and select the payment option.

## Transfer funds to Margin Wallet

Go to [Wallet page](https://www.bitfinex.com/wallets) and transfer funds from your Exchange Wallet to Margin Wallet.

## Create a Bitfinex API key

1. Log into your account and go to the API section (Manage Account -> API).
2. Create a new customised API Key by pressing Create New Key.
3. Configure your new API key's permissions as in the screenshot.
4. Label your API key and generate.  
   **IMPORTANT!** Use the keys you create only in Cryptuoso account to prevent ban from Bitfinex. It is essential that you store your API keys in a secure location and treat it like a password. Anyone with access to your API keys can take control of your account.
   ![Key permissions](https://support.cryptuoso.com/bitfinex_keys.png)
   **IMPORTANT!** Don't give us withdrawal permissions!

## Using an API Key

API keys consist of a public/private key pair, both of which must be provided to our software.

### Cryptuoso Web App

1. Go to your [Profile](https://cryptuoso.com/profile)
2. In section **My Exchange API Keys** press **ADD NEW KEY +** button
3. Enter optional Name to your API Key or it will be generated automatically
4. Select Exchange "Bitfinex"
5. Enter your **API Key (Public Key)**
6. Enter your **API Secret (Private Key)**
7. Wait till you API Key Pair will be tested. Cryptuoso Platform will create and immediately cancel order to test your keys.
8. Now you can start automated trading in **[Robots](https://cryptuoso.com/robots)** page.

### Cryptuoso Trading Telegram Bot

1. Go to the [@cryptuoso_bot](https://clc.la/cryptuoso_bot_beta) in Telegram
2. Go to ⚙️ **Settings** / 🔐 **My Exchange API Keys**
3. Select "Bitfinex"
4. Enter your **API Key**
5. Enter your **API Secret (Private Key)**
6. Wait till you API Key Pair will be tested. Cryptuoso Platform will create and immediately cancel order to test your keys.
7. Now you can start automated trading in 🏠 **Main Menu** / 🤖 **Robots** section.

![add api key](https://support.cryptuoso.com/add_api_key.gif)
