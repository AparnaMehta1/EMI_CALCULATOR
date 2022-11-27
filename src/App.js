import React, {useState} from "react";
import './App.css';
import {withStyles} from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography  from '@material-ui/core/Typography';
import {Table, TableCell, TableRow} from "@material-ui/core";
import {Pie} from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import SliderMarks from "./SliderMarks";
import Detail from "./Details";



const PrettoSlider = withStyles({
  root : {color:"MediumVioletRed", height: 10},
  thumb: {height:25, width:25, backgroundColor:"white", border: "3px Solid Black", marginTop: -9, marginLeft: -9},
  track: {height:10,borderRadius:4},
  rail:  {height:10, borderRadius:4},
}) (Slider);


ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
   // Modal open state
   const [modal, setModal] = useState(false);
  
   // Toggle for Modal
   const toggle = () => {
    const history = {
     "tAmount" : totalAmount,
     "perAmount" : pAmount,
     "rate": interest,
     "time" : duration,

    }
    setModal(!modal);
    localStorage.setItem("history",JSON.stringify({...history}));
   }
   let his;
const getHistory = () => {
  his = localStorage.getItem("history");
 document.write(his);
}
// const {tAmount , time , rate , perAmount} = his;

 const [pAmount , setpAmount] =useState (2755000);
 const [interest , setinterest] =useState (7);
 const [duration , setduration] =useState (147);
 const maxValue = 6000000;
 const intMax = 20;
 const maxDuraion=  360;


const intr = interest / (1200);
const emi = duration ? Math.round(pAmount)* intr / (1-(Math.pow(1/(1+intr), duration))):0;
const totalAmount = duration*emi;
let TotalAmountOfCredit = Math.round((emi/intr)* (1-Math.pow((1+parseFloat(intr)),(-duration))))
const TotalAmountOfInterest = Math.round(totalAmount -TotalAmountOfCredit);

  return (
    <div className="App">
   <div className="CalApp">
    <h2 className="CalHeading"><u>EMI CALCULATOR</u></h2>
<div>
  <Typography gutterBottom> <strong>Loan Amount</strong> </Typography>
  <PrettoSlider value={pAmount} onChange={(event , vAmount)=>(setpAmount(vAmount))} 
  defaultValue={pAmount} marks={SliderMarks.marksAmt} max={maxValue} />  
</div>
<div>
  <Typography gutterBottom> <strong>Interest Rate %</strong> </Typography>
  <PrettoSlider value={interest} onChange={(event , vInt)=>(setinterest(vInt))} 
  defaultValue={interest} marks={SliderMarks.marksInt} max={intMax} />  
</div>
<div>
  <Typography gutterBottom> <strong>Tenture (Months)</strong> </Typography>
  <PrettoSlider value={duration} onChange={(event , vDur)=>(setduration (vDur))} 
  defaultValue={duration} marks={SliderMarks.marksTenure} max={maxDuraion} />  
</div>
<div>
<Table>
  <TableRow>
    <TableCell>
    <form className="form">
       <div>
       <label for="pAmount"> Loan Amount : </label>
       <input type="number" id="fname" placeholder="Enter Amount" maxlength="1500" name="name" value={pAmount}  onChange={(event , vAmount)=>(setpAmount(vAmount))} />
       </div>
       <div>
       <label for="pAmount"> Interest Rate % : </label>
       <input type="number" id="fname" placeholder="Enter Rate" maxlength="15" name="name" value={interest} onChange={(event , vInt)=>(setinterest(vInt))}  />
       </div>
       <div>
       <label for="pAmount"> Tenure (Months) : </label>
       <input type="number" id="fname" placeholder="Enter Time" maxlength="15" name="name" value={duration} onChange={(event , vDur)=>(setduration (vDur))}/>
       </div>
       </form>
  

    <input type="submit" placeholder="Submit" onClick={toggle} className="button"/>
    
    <button className="btn btn-light rounded-2 fs-5 fw-bold"   onClick={getHistory}>History</button>
  
    </TableCell>
    
    <TableCell>
        <Pie
      data= {{
        lables : ['Credit Amount', "Interest" , 'Total Amount'],
        datasets : [{
          data : [TotalAmountOfCredit, TotalAmountOfInterest,pAmount],
          backgroundColor :["red","orange", "yellow"]
        }]
      }}
      width ={50}
    height = {50} 
  
      />  
    </TableCell>
  </TableRow>
</Table>
</div>
  
   </div>
   <Detail modal={modal}
   setModal = {setModal}
   toggle = {toggle}
   pAmount={pAmount}  emi={emi} duration= {duration}
      interest={interest} totalAmount= {totalAmount} TotalAmountOfInterest= {TotalAmountOfInterest}
   />
    </div>
  );
}

export default App;
