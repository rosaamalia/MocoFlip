// import React from "react";
// import { Card } from "react-bootstrap";
// import Rating from "./rating"


// export default function HasilTestimoni(){
//     return(
//         <Card className="col-lg-8 col-md-8 col-sm-12 mx-lg-auto mx-md-auto mb-3">
//         <Card.Body>
//             <Card.Title>Card Title</Card.Title>
//             <Card.Subtitle className="mb-2 text-muted">
//             <Rating/>
//             </Card.Subtitle>
//             <Card.Text>
//             Some quick example text to build on the card title and make up the bulk of
//             the card's content.
//             </Card.Text>
//         </Card.Body>
//         </Card>
//     )
// }

import React, {useState} from "react";
import { Card } from "react-bootstrap";
import Rating from "./rating"
import FormTestimoni from "./form-testimoni";


 const HasilTestimoni=()=>{
    const [testimonis, setTestimonis] = useState([
                {
                    nama: 'ghina', 
                    testimoni: 'good',
                }
            ]);
        
            const addTestimoni = (data) =>{
                setTestimonis([...testimonis,{ nama : data.nama, testimoni : data.testimoni}]);
        
            }

    return(
        <React.Fragment>
            <FormTestimoni addTestimoni={addTestimoni}/>
            {testimonis.map(data=>{
                    return (
                        <Card className="col-lg-8 col-md-8 col-sm-12 mx-lg-auto mx-md-auto mt-3 mb-3">
                
                        <Card.Body key={data.nama}>
                        <Card.Title>{data.nama}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                        <Rating/>
                        </Card.Subtitle>
                        <Card.Text>
                        </Card.Text>
                        </Card.Body>

               
            

        </Card>
                        
                        )
                })}
       
        </React.Fragment>
        
    )
}

export default HasilTestimoni;


// import React, {useState} from "react";
// import FormTestimoni from "./form-testimoni";


// const HasilTestimoni = () =>{
//     const [testimonis, setTestimonis] = useState([
//         {
//             nama: 'ghina', 
//             testimoni: 'good',
//         }
//     ]);

//     const addTestimoni = (data) =>{
//         setTestimonis([...testimonis,{ nama : data.nama, testimoni : data.testimoni}]);

//     }
//     return(
//         <div className="testimoni-list" style={{
//             color: "white",
//         }}>
//             <ul>
//                 {testimonis.map(data=>{
//                     return (<li key={data.nama}>{data.nama},{data.testimoni}</li>
//                         )
//                 })}
//             </ul>
//             <FormTestimoni addTestimoni={addTestimoni}/>
//         </div>
//     )
// }
// export default HasilTestimoni;