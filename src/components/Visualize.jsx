import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Chart from "react-apexcharts"
import Donut from './World/Donut'
import Navbar2 from './Navbar2'
const Visualize=()=> {
  return (
    <div className="App">
      <Navbar/>
      <Navbar2/>
       <div className='mx-[37vw] font-semibold py-3 text-2xl flex'>Military Expenditure by the World</div>
   <Chart className=" mx-52 my-8 flex justify-center items-center  rounded-2xl bg-neutral-200"
       type="area"
       width={1000}
       height={500}
        
       series={[
        {
           name:"Militay Expenditure",
           data:[1730.0	,1705.0	,1633.9	,0	,1340.6,	1281.1,	1251.0,	1177.7,	1144.1,	1155.1,	1139.8,	1161.3,	1204.1,	1228.7,	1312.1,	1411.3,	1505.8,	1562.9,	1613.2,	1679.1,	1780.7,	1904.6,	1943.7,	1948.5,	1929.7,	1892.8,	1883.1,	1909.9,	1914.8,	1934.9,	1989.8,	2073.1,	2148.9,	2163.6,	2241.5,	2393.6
           ]
       }]}
      options={{
           title:{text:"Military Expenditure by the world (1988-2023)",
                  style:{fontSize:20}
           },
        xaxis:{
          categories:[1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023
          ],
         title:{text:"Time Period (1988-2023)",
                 style:{fontSize:15},
         }, 
         labels:{
          show:false,
         },
         lines:{
           show:true,
         },   
        },
       
      dataLabels:{
        enabled:false,
        formatter:(val)=>{return `${val}`},
        show:false
      },
      colors:['#796ff4'],
       fill:{
         type:"solid",
       },
      yaxis:{
         title:{text:"Expenditure (in Billions)",
        style:{fontSize:15}
             },
        labels:{
          formatter:(val)=>{return `${val}`},
           
        },
        lines:{
          show:true,
        }
        
      },
      stroke: {
        curve: 'monotoneCubic'
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'left'
      },

      }} 
       >
     
     </Chart>
     <Donut/>
      <div className='relative top-[4vh]'>
      <Footer/></div>
    </div>
  );
}

export default Visualize;