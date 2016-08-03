import React from 'react'
import {
  BatchMain,
  BatchRecipe,
  BatchStyle,
} from './BatchComponents'

const sampleRecipe = [
    {key: 1,amount:"7.00 kg", name:"Pale Malt (2 Row) Bel (5.5 EBC)", type:"Grain", info:"90.9%"},
    {key: 2,amount:"0.70 kg", name:"Cara 150 (150.0 EBC)", type:"Grain", info:"9.1%"},
    {key: 3,amount:"30.00 g", name:"Target [11.00%] - Boil 60 min", type:"Hop", info:"21.4 IBU"},
    {key: 4,amount:"40.00 g", name:"Goldings, East Kent [5.00%] - Boil 15.0 min", type:"Hop", info:"6.4 IBU"},
    {key: 5,amount:"40.00 g", name:"PGoldings, East Kent [5.00%] - Boil 5.0 min", type:"Hop", info:"2.6 IBU"},
    {key: 6,amount:"1.0 pkg", name:"London Ale (White Labs #WLP013)", type:"Yeast", info:"-"},
]
export const BatchDetailView = () => (
  <div>
    <BatchMain/>
    <BatchRecipe recipe={sampleRecipe}/>
    <BatchStyle recipe={sampleRecipe}/>
  </div>
)
