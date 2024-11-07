import React from 'react'
import Chart from "react-apexcharts"
const Donut = () => {
  return (
    
    <div className='py-16 flex gap-x-2'>
         <div className='w-[50%] mx-3 rounded-2xl flex items-center justify-center py-4 bg-neutral-200'>
       <Chart
         type='pie'
         width={700}
         height={500}

         series={[916.0147,296.4386,109.4544,83.5746,75.8133]}

         options={{
            title:{text:"Top 5 Military Spenders (2023 in Billions)",
                   style:{fontSize:20}
            },
            labels:["USA","China","Russia","India","Saudi Arabia"],
            dataLabels:{
                enabled:true
            },
            plotOptions:{
                pie:{
                   donut:{
                    labels:{
                       show:true,
                       total:{
                        show:true,
                       } 
                    }
                   } 
                }
            }
         }}
         ></Chart></div>
         <div className='w-[50%] mx-3 rounded-2xl flex items-center justify-center py-4 bg-neutral-200'>
       <Chart 
        type='pie'
        width={700}
        height={500}
        series={[1008.6,588.2,411.3,200.4,98.1,51.6]}
        options={{
           title:{text:"Military Spending by Region  (2023 in Billions)",
             style:{fontSize:20}
           }, 
           colors:["#4285F4","#DB4437","#F4B400","#0F9D58","#796ff4","#f9777f","#78f84a","#8bbffa"],
           labels:["Americas","Europe","East Asia","Middle East","South Asia","Africa"], 
          plotOptions:{
            pie:{
               donut:{
                labels:{
                   show:true,
                   total:{
                    show:true,
                   } 
                }
               } 
            }
        } 
        }}
       ></Chart> </div>
    </div>
  )
}

export default Donut
