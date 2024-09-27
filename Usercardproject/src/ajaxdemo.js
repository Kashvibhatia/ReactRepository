import axios from 'axios';
import { useState } from 'react';

function  AjaxDemo1()
{
  const [Users, setUsers] = useState([]);

  

  function buttonClick()
  {
        let url = "https://reqres.in/api/users/";

        axios.get(url).then((resData) =>  
        {
           // console.log(resData.data);
           // console.log(resData.data.records);
            setCustomersArray(resData.data.records);
        });

  }


  var result =  customersArray.map( (item, index) => 
  <tr key={index}>  
     <td> {item.Name}  </td> 
     <td> {item.City}  </td> 
     <td> {item.Country}  </td> 
  </tr>);

    return (
        <>
          <h3>Server Communication in React JS</h3>
          <hr/>
          <button  onClick={buttonClick}>Get Users</button>
          <hr/>

          <table  border="2"  cellpadding="5"  cellSpacing="0" width="700">
                <tr>
                    <th>Customer Nam</th>
                    <th>City Name</th>
                    <th>Country Name</th>                    
                </tr>
                {result}
            </table>

        </>
    );
}

export default AjaxDemo1;