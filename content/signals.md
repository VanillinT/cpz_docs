---
title: "Signals (Manual Trading)"
metaTitle: "Cryptuoso Signals"
metaDescription: "Cryptuoso Cryptocurrency Trading Platform - Signals (Manual Trading)"
---

### ⚠️ Use all signals and robots at your own risk. ⚠️

Be careful with trading size and remember that the more profit you want to take the more loss you can get.  
One of the key things is not to hurry with increasing trading size.  
Try to diversify your trading using different strategies or coins.

## What is signal?

Signal is a recommendation to buy or sell currency at determined price.
We will give you the signal when it is better to open and close position and what position to take. You just need to follow the recommendation of robots.

## Why I need signals?

You can use signals in 2 different ways:

- Choose the robots you want and follow the recommendations.
- Use the signals as additional filter to you own trading system.

## How it works?

All signals based on algorithms that tested on history and work in real-time **more than 2 years**. You can study the results of each robot.

## How can I use it?

The signals go out once or 3 times a day at the same time so it’s easy to follow manually. Just repeat the orders (buy, sell or stop/limit orders).  
It’s **important** to place an order in advance, because you can skip the necessary moment.

## How to subscribe on signals?

1. Go to our Telegram bot @cryptuoso_bot
   ![Main menu](./main_menu.png)
2. Choose "Signals".
   ![Signals](./search_signals2.png)

- My Signals - you will see the robots you have already subscribed to.
- Search Signals - the list of all robots.
- Total Perfomance - the total perfomance of all robots on signals.

3. If you haven't subscribed to any robots, go to "Search signals"
4. Select available exchange.
5. Select available cryptocurrency pair.
6. Select available robot
   ![Robots list](./robots_list.png)
7. After you choose the robot you want you will see this robot's menu:

- Short description of the robot;
- Perfomance of the robot;
- Latest position the robot made
- If you want to receive signals from this robot just click "Subscribe to Signals".
  ![Robot menu](./robot_menu.png)

8. Enter desired trading volume in BTC (cause in our example we have the BTC/USD pair).
9. Now you are done. If you want to add more robots just repeat these steps.

If you want _to unsubscribe from robot_ go to "Signals" --> "My signals" --> choose the robot you want to delete --> "Unsubscribe from signals"

## Where can I trade using your signals?

Our signals are based on Bitfinex prices, but you can use signals at any exchange you want. Notice the possible difference in prices on different exchanges. The list of exchanges is [here](https://coinmarketcap.com/rankings/exchanges/).

## How often the signals appear?

- The robots with “8h” in name have maximum 3 signals a day (every 8 hours).
- The robots with “1d” in name have maximum 1 signal per day.

## What is Long/Short?

_Long_ is when we _buy_ cryptocurrency and hope that it’s price will _rise_. So we will sell it at higher price and get a profit.  
_Short_ is when we _sell_ cryptocurrency (and we didn’t buy it before) and hope that it’s price will _fall_. So we buy it back at lower price and realize a profit.

## How to understand signals and what to do?

There are 2 type of messages:

- New Trade!
- New Signal!

  _New Trade_ means the buy/sell market trade.

_Examples_:
If you see in "New Trade" only entry (Entry: "SELL ⬇ (Short)" or Entry: "BUY ⬆ (Long)" - it means that robot opened new position.  
For copy this action you just need to buy or sell at the same price.  
If you also see in "New Trade" exit (Exit: "SELL ⬇ (Close Long)" or Exit: "BUY ⬆ (Close Short)" - it means that robot closed the position. You should do the same.

_New Signal_ means the price at which you should make the trade in the future.  
The signals can be both for opening and closing the position. You can just place the stop order at this price and wait for it execution or new next signal.

When next signal is appeared and previous order is not executed - cancel previous order and create a new one.

## What does stop order mean and how to use it?

A stop order is used to trigger a market sell when the market drops to your trigger (stop) price, or used to trigger a market buy if the market rises to your trigger (stop) price.

It's better to read the FAQ on your exchange about order types and how to use them.

Example for _Bitfinex_:
We have the signal:
Action: BUY ⬆ (Long)
Order type: Stop
Signal time: 2019-10-16 08:00 UTC
Price: 3.0687

What should you do:

1. Open Bitfinex terminal.
2. Choose the required cryptocurrency in Tickers window.
3. Then under the Tickers window you have Order form.
4. Choose margin, then stop order.
5. In the field stop price place the price from the signal (3.0687). In the field amount choose the amount of cryptocurrency you want to trade.
6. Click Margin Buy cause we have in signal “Action: BUY”.
   In the middle you will have the window Orders where you will see this order. You can cancel or modify this orders with the buttons on the right.

On _Kraken_ you should go to New order window, then choose advanced. The fields are the same. But on Kraken you need to choose the leverage for margin trading.

Every exchange has a bit different interface for creating orders and trading so you should learn the user manual of your exchange.

## How to calculate the volume for trading?

For example, you have an account with balance 1000 $  
You want to subscribe on 10 robots.  
The simple formula looks like _balance / number of robots (1000 / 10 = 100 $ - volume for each robot).\_ Of course, you can allocate more volume to one robot than to another, but in total you should not exceed the size of your funds.  
Ok, you want the robot to trade 100 $. Just divide 100 $ on desired cryptocurrency price and you will get the volume for robot to trading.  
Just enter the received volume in the "trading volume" window for the robot and push the "start" button.

## How to understand robot's statistics?

Net Profit - the total dollar profit generated.  
Number of Trades - the total number of trades.  
Avg Profit (Loss) - the average profit (loss) per trade.  
Avg Bars Held - the average number of bars held per trade.  
Win (Loss) Rate - the percentage of all trades that were marked winners (losers).  
Gross Profit (Loss) - the total profit generated by the winning trades, and the total loss generated by the losing trades.  
Max Consecutive - the maximum number of consecutive winners and losers generated.  
Maximum Drawdown - the greatest peak to valley decline in the equity.  
Profit Factor - the absolute value of the gross profit divided by the gross loss.  
Recovery Factor - the absolute value of the total net profit divided by its maximum drawdown.  
Payoff Ratio - the average percentage profit per trade divided by the average percentage loss per trade.
