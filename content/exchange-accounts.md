---
title: "API Keys Acccount Configuration"
metaTitle: "API Keys"
metaDescription: "How to create API keys"
---

## What is an API key?

An API key is the bridge between a Software (Cryptuoso Trading App) and any supported Exchange (Bitfinex, Binance, Kraken). The API key allows to make deals and monitor positions on your account.

## Why does Cryptuoso need API keys?

- Read out the actual information about coins prices.
- Ask the exchange about you portfolio status for account statistics
- Send buy and sell commands to your exchange automatically

By using this API key, we do not require any Login information of your exchange, nor can we withdraw any funds (Make sure to never enable withdrawal rights in your API keys. As this allows companies to withdraw funds. We explicitly do **NOT** want these rights.)

## How can I create API keys?

Look at the section for your Exchange.

- [Bitfinex](./exchange-accounts/bitfinex)
- [Kraken](./exchange-accounts/kraken)
- [Binance Futures](./exchange-accounts/binance-futures)

### How to add API Key to My Cryptuoso Account using Web App?

1. Go to your [Profile](https://cryptuoso.com/profile)
2. In section **My Exchange API Keys** press **ADD NEW KEY +** button
3. Enter optional Name to your API Key or it will be generated automatically
4. Select your exchange
5. Enter your **API Key (Public Key)**
6. Enter your **API Secret (Private Key)**
7. Wait till you API Key Pair will be tested. Cryptuoso Platform will create and immediately cancel order to test your keys.
8. Now you can start automated trading in **[Robots](https://cryptuoso.com/robots)** page.

## How to add API Key to My Cryptuoso Account using Telegram Bot?

1. Open our telegram bot [@cryptuoso_bot](https://clc.la/cryptuoso_bot_beta)
2. Go to ⚙️ **Settings** / 🔐 **My Exchange API Keys** / **🔑 Add New Exchange API Key**
3. Select your exchange
4. Enter your **API Key**
5. Enter your **API Secret (Private Key)**
6. Wait till you API Key Pair will be tested. Cryptuoso Platform will create and immediately cancel order to test your keys.
7. Now you can start automated trading in 🏠 **Main Menu** / 🤖 **Robots** section.

![add api key](https://support.cryptuoso.com/add_api_key.gif)
