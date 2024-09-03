import React, { useEffect, useState } from 'react';
import data from '../utils/dashboardData.json'
import Widgets from './Widgets';

const Categories = () => {

    const [dashData, setDashData] = useState(data[0].dashBoard.categories);

    const updateDashoboard = (newWidget) => {
      console.log(newWidget)
      let nWidget = newWidget
      setDashData((prevData) => {
        console.log(prevData)
        prevData.map((item) => {
          if(item.categoryName == newWidget.categoryName) {
              return item.widgets = [...item.widgets,nWidget]
          }
        })

      })
      
    }
    //console.log(dashData)

    // useEffect(() => {
    //     const fetchData = async() => {
    //         const res = await fetch('/utils/dashboardData.json')
    //         const dbData = await res.json();
            
    //         console.log(dbData)
    //     }
    //     fetchData();
    // },[])
  return (
    <div>
        {dashData.map((dashboard) => (
            <Widgets data={dashboard} addWidget={updateDashoboard} />
        ))}
    </div>
  )
}

export default Categories