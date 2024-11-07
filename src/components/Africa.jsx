import React from 'react'
import { useState } from 'react'
import countryList from './Data'
import govData from './GovData'
import Navbar from './Navbar'
import Footer from './Footer'
import Chart from "react-apexcharts"
const Africa = () => {
  const [govSpending, setgovSpending] = useState('Algeria')
  const [govSpendingData, setgovSpendingData] = useState(govData['Algeria'])
  const [country, setcountry] = useState('Algeria')
  const [data, setdata] = useState(countryList['Algeria'])
  const changevalue=(e)=>{
      let country=e.target.value
      setcountry(country)
      setdata(countryList[country])
  }
  const changegov=(e)=>{
     let r=e.target.value
     setgovSpending(r)
     setgovSpendingData(govData[r])
  }
return (
 <div>
   <Navbar/>
      <select value={country} onChange={changevalue}  className='m-4 mx-60 px-5 py-3 w-48 bg-slate-200 rounded-xl ' >
        
        <option value="Algeria">Algeria</option>
        <option value="Libya">Libya</option>
         <option value="Morocco">Morocco</option>
         <option value="Tunisia">Tunisia</option>
         <option value="Angola">Angola</option>
         <option value="Benin">Benin</option>
         <option value="Botswana">Botswana</option>
         <option value="Burkina Faso">Burkina Faso</option>
         <option value="Burundi">Burundi</option>
         <option value="Cameroon">Cameroon</option>
         <option value="Cape Verde">Cape Verde</option>
         <option value="Central African Republic">Central African Republic</option>
         <option value="Chad">Chad</option>
         <option value="Cote d'Ivoire">Cote d'Ivoire</option>
         <option value="Djibouti">Djibouti</option>
         <option value="Equatorial Guinea">Equatorial Guinea</option>
         <option value="Eritrea">Eritrea</option>
         <option value="Ethiopia">Ethiopia</option>
         <option value="Gabon">Gabon</option>
         <option value="Gambia">Gambia</option>
         <option value="Ghana">Ghana</option>
         <option value="Guinea">Guinea</option>
         <option value="Guinea-Bissau">Guinea-Bissau</option>
         <option value="Kenya">Kenya</option>
         <option value="Lesotho">Lesotho</option>
         <option value="Liberia">Liberia</option>
         <option value="Madagascar">Madagascar</option>
         <option value="Malawi">Malawi</option>
         <option value="Mali">Mali</option>
         <option value="Mauritania">Mauritania</option>
         <option value="Mauritius">Mauritius</option>
         <option value="Mozambique">Mozambique</option>
         <option value="Namibia">Namibia</option>
         <option value="Niger">Niger</option>
         <option value="Nigeria">Nigeria</option>
         <option value="Rwanda">Rwanda</option>
         <option value="Senegal">Senegal</option>
         <option value="Seychelles">Seychelles</option>
         <option value="Sierra Leone">Sierra Leone</option>
         <option value="Somalia">Somalia</option>
         <option value="South Africa">South Africa</option>
         <option value="South Sudan">South Sudan</option>
         <option value="Sudan">Sudan</option>
         <option value="Eswatini">Eswatini</option>
         <option value="Tanzania">Tanzania</option>
         <option value="Togo">Togo</option>
         <option value="Uganda">Uganda</option>
         <option value="Zambia">Zambia</option>
         <option value="Zimbabwe">Zimbabwe</option>
      </select>
  <Chart className=" mx-52 my-7 bg-neutral-200 flex items-center justify-center rounded-3xl"
      type='area'
      width={1000}
      height={500}
      series={[
         {
            name:country,
            data:data
                
         },
      ]}
     
      options={{
           title:{text:`Military Expenditure (Share of GDP)`,
               style:{fontSize:20}
           },
           
         xaxis:{
            categories:[1950	,1951	,1952	,1953	,1954	,1955	,1956	,1957	,1958	,1959	,1960	,1961	,1962	,1963	,1964	,1965	,1966	,1967	,1968	,1969	,1970	,1971	,1972	,1973	,1974	,1975	,1976	,1977	,1978	,1979	,1980	,1981	,1982	,1983	,1984	,1985	,1986	,1987	,1988	,1989	,1990	,1991	,1992	,1993	,1994	,1995	,1996	,1997	,1998	,1999	,2000	,2001	,2002	,2003	,2004	,2005	,2006	,2007	,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023
            ],
             title:{text:"Time Period (1950-2023)",
                  style:{fontSize:15}
             }, 
             labels:{
                show:false, 
             }    
         },
         colors:['#796ff4'],
         dataLabels:{
             enabled:false,
             formatter:(val)=>{return `${val}%`},
             show:true
           },
         yaxis:{
             title:{text:"Share of GDP",
                   style:{fontSize:15}
             },
             dataLabels:{
                 enabled:true,
                 formatter:(val)=>{return `${val}`},
                 show:true
             },
         }

      }}
    >

    </Chart> 
      <div className='m-8 gap-x-5 flex'>
    <div className='w-[50%] mx-3 rounded-2xl flex items-center justify-center py-4 bg-neutral-200'>
    <Chart
      type='donut'
      width={700}
      height={500}

      series={[18.264,5.1849,3.19,2.7811,1.3702]}
      options={{
         title:{text:"Top 5 Military Spenders  (2023 in Billions)",
                style:{fontSize:20}
         },
         labels:["Algeria","Morocco","Nigeria","South Africa","Angola"],
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
      type='bar'
      width={700}
      height={500}

      series={[{
         name:"Military 5 Expenditure Per Capita",
         data:[400.5,137.0,46.0,34.6,14.3],
          }]}

      options={{
         title:{text:"Top Military Spenders Per Capita (2023)",
                style:{fontSize:20}
         },
         colors:["#f20a3c"],
         xaxis:{
              title:{text:"Per Capita",
                   style:{fontSize:20}
              },
            categories:["Algeria","Morocco","South Africa","Angola","Nigeria"],
            
         },
        
         yaxis:{
               title:{text:"Country",
                 style:{fontSize:15}
               }, 
             
         },
        
         dataLabels:{
             enabled:true
         },
         plotOptions:{
           bar:{
             horizontal:true
           }
         }
      }}
      ></Chart></div>
      
      
      </div>
   
      <select value={govSpending} onChange={changegov}  className='m-4 mx-60 px-5 py-3 w-48 bg-slate-200 rounded-xl ' >
      <option value="Algeria">Algeria</option>
        <option value="Libya">Libya</option>
         <option value="Morocco">Morocco</option>
         <option value="Tunisia">Tunisia</option>
         <option value="Angola">Angola</option>
         <option value="Benin">Benin</option>
         <option value="Botswana">Botswana</option>
         <option value="Burkina Faso">Burkina Faso</option>
         <option value="Burundi">Burundi</option>
         <option value="Cameroon">Cameroon</option>
         <option value="Cape Verde">Cape Verde</option>
         <option value="Central African Republic">Central African Republic</option>
         <option value="Chad">Chad</option>
         <option value="Cote d'Ivoire">Cote d'Ivoire</option>
         <option value="Djibouti">Djibouti</option>
         <option value="Equatorial Guinea">Equatorial Guinea</option>
         <option value="Eritrea">Eritrea</option>
         <option value="Ethiopia">Ethiopia</option>
         <option value="Gabon">Gabon</option>
         <option value="Gambia">Gambia</option>
         <option value="Ghana">Ghana</option>
         <option value="Guinea">Guinea</option>
         <option value="Guinea-Bissau">Guinea-Bissau</option>
         <option value="Kenya">Kenya</option>
         <option value="Lesotho">Lesotho</option>
         <option value="Liberia">Liberia</option>
         <option value="Madagascar">Madagascar</option>
         <option value="Malawi">Malawi</option>
         <option value="Mali">Mali</option>
         <option value="Mauritania">Mauritania</option>
         <option value="Mauritius">Mauritius</option>
         <option value="Mozambique">Mozambique</option>
         <option value="Namibia">Namibia</option>
         <option value="Niger">Niger</option>
         <option value="Nigeria">Nigeria</option>
         <option value="Rwanda">Rwanda</option>
         <option value="Senegal">Senegal</option>
         <option value="Seychelles">Seychelles</option>
         <option value="Sierra Leone">Sierra Leone</option>
         <option value="Somalia">Somalia</option>
         <option value="South Africa">South Africa</option>
         <option value="South Sudan">South Sudan</option>
         <option value="Sudan">Sudan</option>
         <option value="Eswatini">Eswatini</option>
         <option value="Tanzania">Tanzania</option>
         <option value="Togo">Togo</option>
         <option value="Uganda">Uganda</option>
         <option value="Zambia">Zambia</option>
         <option value="Zimbabwe">Zimbabwe</option>
     </select>
 <Chart className=" mx-52 my-7 bg-neutral-200 flex items-center justify-center rounded-3xl"
     type='area'
     width={1000}
     height={500}
     series={[
        {
           name:govSpending,
           data:govSpendingData
               
        },
     ]}
    
     options={{
          title:{text:`Military Expenditure (Share of Government Spending)`,
              style:{fontSize:20}
          },
          
        xaxis:{
           categories:[	1988	,1989	,1990	,1991	,1992	,1993	,1994	,1995	,1996	,1997	,1998	,1999	,2000	,2001	,2002	,2003	,2004	,2005	,2006	,2007	,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023
           ],
            title:{text:"Time Period (1988-2023)",
                 style:{fontSize:15}
            }, 
            labels:{
               show:false, 
            }    
        },
        colors:['#796ff4'],
        dataLabels:{
            enabled:false,
            formatter:(val)=>{return `${val},`},
            show:true
          },
        yaxis:{
            title:{text:"Share of Government Spending",
                  style:{fontSize:15}
            },
            dataLabels:{
                enabled:true,
                formatter:(val)=>{return `${val},`},
                show:true
            },
        }

     }}
   >

   </Chart> 
   <Footer/>
 </div>
)
}

export default Africa
