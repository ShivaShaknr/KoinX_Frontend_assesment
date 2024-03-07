import React from 'react'
import './performance.css';
import DataDisplay from '../datadisplay';


function Performance() {
    const column1Data = ['Bitcoin Price', '24h Low/24h High', '7d Low/7d High','Trading Volume','Market Cap Rank']; // Sample data for column 1
    const column2Data = ['$16,815.46', '$16,382.07/$16,874.122', '$16,382.07/$16,874.122','$23,249,202,782','#1'];
    const column3Data = ['Market Cap','Market Cap Dominance','Volume/Market Cap','All-Time High','All-Time Low']
    const column4Data = ['$323,507,290,047','38.343%','0.0718','$69,044.77 -75.6%','$67.81 24729.1%'];
  return (
   <>
   <div className='main_performance'>
      <h4>Performance</h4>
      <div className='graph1'>
        <p>Today's low <br/> 46,930.22</p>
        <div className='gradient-line'></div>
        <p>Today's high <br/>49,343.83</p>
      </div>
      <div className='graph2'>
        <p>52W Low <br/>16,930.22</p>
        <div className='gradient-line'></div>
        <p>52W High <br/>49,753.83</p>
      </div>
      <h4>Fundamental</h4>
      <div className='fundamental1'>
        <div className='price1'>
        <DataDisplay className="col1" data={column1Data}/>
        <DataDisplay className="col2"data={column2Data}/>
        </div>
        <br/>
        <div className='price2'>
        <DataDisplay className="col3" data={column3Data}/>
        <DataDisplay className="col4" data={column4Data}/>
        </div>
      </div>
   </div>
   </>
  )
}

export default Performance