---
title: "Kraken"
metaTitle: "Kraken"
metaDescription: "How to register an account and create API keys"
---

We are going to explain here how to create an account at Kraken, how to deposit funds and how to give your account the API keys allowing it trade.

## Register an account

[Kraken account registration.](https://r.kraken.com/mqVYO)
![Log in window](https://support.cryptuoso.com/kraken_register.png)

After you have signed up, you’ll receive an email with an activation link. Click the link and your account will be activated.

## Verify your account

You have to verify yourself.
Go to the "Get Verified" in the upper right corner in the account setting. You will need an "Intermediate" account if you want to deposit fiat currencies (Euro's, Dollars, Yen's etc).

![Verification window](https://support.cryptuoso.com/kraken_verification.png)

## Deposit funds to your account

Go to [funding](https://www.kraken.com/u/funding) and put a daw in the field "Show all assets". Then click deposit in the desired currency or cryptocurrency and explore the possible options for depositing.

## Creating An API Key

Go to API in the upper right corner in the account settings -> Generate new key.

- Login to your Kraken account.
- Click on your Profile Icon.
- Click on Settings → API.
- Click on the "+ Generate New Key" button.

**IMPORTANT!** Use the keys you create only in Cryptuoso account to prevent ban from Kraken. It is essential that you store your API keys in a secure location and treat it like a password. Anyone with access to your API keys can take control of your account.

![API_keys](https://support.cryptuoso.com/kraken_api.png)

## Configuring An API Key

API keys have several configuration options that must be setup before an API key can be used, notably the Key Description and Key Permissions.  
Please repeat the permissions as in the screenshot.

![Key_permissions](https://support.cryptuoso.com/kraken_key_permissions.png)

**IMPORTANT!** Don't give us withdrawal permissions!

## Using an API Key

API keys consist of a public/private key pair, both of which must be provided to our software.

![keys](https://support.cryptuoso.com/kraken_keys.png)

### Cryptuoso Web App

1. Go to your [Profile](https://cryptuoso.com/profile)
2. In section **My Exchange API Keys** press **ADD NEW KEY +** button
3. Enter optional Name to your API Key or it will be generated automatically
4. Select Exchange "Kraken"
5. Enter your **API Key (Public Key)**
6. Enter yout **API Secret (Private Key)**
7. Wait till you API Key Pair will be tested. Cryptuoso Platform will create and immediately cancel order to test your keys.
8. Now you can start automated trading in **[Robots](https://cryptuoso.com/robots)** page.

### Cryptuoso Trading Telegram Bot

1. Go to the [@cryptuoso_bot](https://clc.la/cryptuoso_bot_beta) in Telegram
2. Go to ⚙️ **Settings** / 🔐 **My Exchange API Keys**
3. Select "Kraken"
4. Enter your **API Key**
5. Enter yout **API Secret (Private Key)**
6. Wait till you API Key Pair will be tested. Cryptuoso Platform will create and immediately cancel order to test your keys.
7. Now you can start automated trading in 🏠 **Main Menu** / 🤖 **Robots** section.

![add api key](https://support.cryptuoso.com/add_api_key.gif)
