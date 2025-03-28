"use client";

import React from "react";

export default function OverviewPage() {
  return (
    <div className="space-y-6 px-4 py-6">
      {/* PRICE MONITOR */}
      <section className="bg-[#1A1A1A] border border-neutral-700 rounded p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold text-green-400">
            Price Monitor - Live
          </h2>
          <p className="text-sm text-gray-400">Last update: 17:16:45</p>
        </div>

        {/* Grid of pairs (2 rows, 4 columns in screenshot) */}
        <div className="grid grid-cols-4 gap-3">
          {/* Example pair card */}
          <div className="bg-neutral-900 border border-neutral-700 rounded p-3 text-center">
            <h3 className="text-xs text-yellow-400 mb-1">AAVE / WMATIC</h3>
            <p className="text-sm font-semibold text-green-400">1.23%</p>
          </div>
          <div className="bg-neutral-900 border border-neutral-700 rounded p-3 text-center">
            <h3 className="text-xs text-yellow-400 mb-1">LINK / WMATIC</h3>
            <p className="text-sm font-semibold text-green-400">1.57%</p>
          </div>
          <div className="bg-neutral-900 border border-neutral-700 rounded p-3 text-center">
            <h3 className="text-xs text-yellow-400 mb-1">MATIC / USDT</h3>
            <p className="text-sm font-semibold text-green-400">0.89%</p>
          </div>
          <div className="bg-neutral-900 border border-neutral-700 rounded p-3 text-center">
            <h3 className="text-xs text-yellow-400 mb-1">AAVE / WMATIC</h3>
            <p className="text-sm font-semibold text-green-400">1.23%</p>
          </div>
          {/* Repeat for as many pairs as needed */}
          <div className="bg-neutral-900 border border-neutral-700 rounded p-3 text-center">
            <h3 className="text-xs text-yellow-400 mb-1">LINK / WMATIC</h3>
            <p className="text-sm font-semibold text-green-400">1.57%</p>
          </div>
          <div className="bg-neutral-900 border border-neutral-700 rounded p-3 text-center">
            <h3 className="text-xs text-yellow-400 mb-1">MATIC / USDT</h3>
            <p className="text-sm font-semibold text-green-400">0.89%</p>
          </div>
          <div className="bg-neutral-900 border border-neutral-700 rounded p-3 text-center">
            <h3 className="text-xs text-yellow-400 mb-1">AAVE / WMATIC</h3>
            <p className="text-sm font-semibold text-green-400">1.23%</p>
          </div>
          <div className="bg-neutral-900 border border-neutral-700 rounded p-3 text-center">
            <h3 className="text-xs text-yellow-400 mb-1">LINK / WMATIC</h3>
            <p className="text-sm font-semibold text-green-400">1.57%</p>
          </div>
        </div>
      </section>

      {/* TRADING SETTINGS */}
      <section className="bg-[#1A1A1A] border border-neutral-700 rounded p-4">
        <h2 className="text-lg font-semibold text-yellow-400 mb-3">
          Trading Settings
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Minimum Profit Threshold (%)
            </label>
            <input
              type="number"
              className="w-full bg-neutral-900 border border-neutral-700 rounded px-2 py-1 text-sm focus:outline-none"
              placeholder="0.01"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Trade Amount (ETH)
            </label>
            <input
              type="number"
              className="w-full bg-neutral-900 border border-neutral-700 rounded px-2 py-1 text-sm focus:outline-none"
              placeholder="0.01"
            />
          </div>
        </div>
      </section>

      {/* YOUR BALANCES */}
      <section className="bg-[#1A1A1A] border border-neutral-700 rounded p-4">
        <h2 className="text-lg font-semibold text-yellow-400 mb-3">
          Your Balances
        </h2>
        <div className="grid grid-cols-4 gap-3">
          {/* Example balance card */}
          <div className="bg-neutral-900 border border-neutral-700 rounded p-3 text-center">
            <p className="text-xs text-gray-400">ETH</p>
            <p className="text-lg font-semibold text-green-400">9999.9976</p>
          </div>
          <div className="bg-neutral-900 border border-neutral-700 rounded p-3 text-center">
            <p className="text-xs text-gray-400">WETH</p>
            <p className="text-lg font-semibold text-green-400">0.0000</p>
          </div>
          <div className="bg-neutral-900 border border-neutral-700 rounded p-3 text-center">
            <p className="text-xs text-gray-400">USDT</p>
            <p className="text-lg font-semibold text-green-400">0.0000</p>
          </div>
          <div className="bg-neutral-900 border border-neutral-700 rounded p-3 text-center">
            <p className="text-xs text-gray-400">MATIC</p>
            <p className="text-lg font-semibold text-green-400">0.0000</p>
          </div>
        </div>
      </section>

      {/* POTENTIAL TRADES */}
      <section className="bg-[#1A1A1A] border border-neutral-700 rounded p-4">
        <h2 className="text-lg font-semibold text-yellow-400 mb-3">
          Potential Trades
        </h2>
        <div className="space-y-3">
          {/* Example trade row */}
          <div className="flex items-center justify-between bg-neutral-900 border border-neutral-700 rounded p-3">
            <div className="text-sm">
              <p className="text-green-400">DAI/USDT (0.2% potential profit)</p>
              <p className="text-gray-400 text-xs">
                Buy from: Uniswap V3 $2860.74 | Sell on: SushiSwap $2817.21
              </p>
            </div>
            <button className="bg-green-600 hover:bg-green-500 text-white font-semibold py-1 px-3 rounded text-sm transition">
              Execute Trade
            </button>
          </div>

          {/* Another trade row */}
          <div className="flex items-center justify-between bg-neutral-900 border border-neutral-700 rounded p-3">
            <div className="text-sm">
              <p className="text-green-400">DAI/USDT (0.2% potential profit)</p>
              <p className="text-gray-400 text-xs">
                Buy from: Quickswap V2 $2860.74 | Sell on: SushiSwap $2817.21
              </p>
            </div>
            <button className="bg-green-600 hover:bg-green-500 text-white font-semibold py-1 px-3 rounded text-sm transition">
              Execute Trade
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
