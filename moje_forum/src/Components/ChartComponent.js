import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import NewMacros from "./NewMacros";


function ChartComponent(props) {

    return (
        <div>
  
                <AreaChart
                    width={500}
                    height={400}
                    data={props.newMacros}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="protein" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="carbohydrates" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="fat" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
         
        </div>
    )
}
    

export default ChartComponent;