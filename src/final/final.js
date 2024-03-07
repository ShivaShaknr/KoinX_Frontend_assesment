import React, { useEffect } from 'react';

const TradingViewWidget = () => {
  useEffect(() => {
    const loadScript = async () => {
      try {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
          "symbols": [
            {
              "description": "Tesla",
              "proName": "NASDAQ:TSLA"
            },
            {
              "description": "Apple Inc",
              "proName": "NASDAQ:AAPL"
            },
            {
              "description": "Nvidia",
              "proName": "NASDAQ:NVDA"
            },
            {
              "description": "Microsoft",
              "proName": "NASDAQ:MSFT"
            },
            {
              "description": "Advanced Micro Devices",
              "proName": "NASDAQ:AMD"
            },
            {
              "description": "Meta",
              "proName": "NASDAQ:META"
            },
            {
              "description": "Netflix",
              "proName": "NASDAQ:NFLX"
            }
          ],
          "showSymbolLogo": true,
          "colorTheme": "light",
          "isTransparent": false,
          "displayMode": "compact",
          "locale": "en"
        });
        document.body.appendChild(script);
      } catch (error) {
        console.error('Error loading TradingView script:', error);
      }
    };

    loadScript();
    return () => {
      // Cleanup code here if needed
    };
  }, []);

  return (
    <>
    <h3>You may also like</h3>
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener noreferrer" target="_blank">
          <span className="blue-text"></span>
        </a>
      </div>
    </div>
    </>
  );
};

export default TradingViewWidget;
