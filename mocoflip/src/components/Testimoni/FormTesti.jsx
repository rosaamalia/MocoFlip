import React, {useState} from "react";
import { Title, Testi } from "../../style/testimonipagestyle";
import logo from "../../images/logo.png";
import { Form, Button, Card} from "react-bootstrap";

 const FormTesti=({ addTestimoni })=>{
    const [data, setData] = useState([
        {
            nama: '', 
            testimoni: '',
        }
    ]);
 const handleSubmit=(e)=>{
     e.preventDefault();
     console.log(data.nama);
     console.log(data.testimoni);
     addTestimoni(data);
     setData({
         nama: '',
         testimoni: '',
     });
 }

 const onChangeData = (e) => {
     setData({...data,[e.target.name] : [e.target.value]})
 }
    return(
    <Card style={{ backgroundColor: '#8e357d', color: 'white' }} className="col-lg-12 col-md-12 col-sm-12 mt-3 mb-3 p-4">
    <Card.Img src={logo} className=" w-25 h-25 rounded mx-lg-auto mx-md-auto mx-sm-auto d-block mb-3 mt-3"/>
    <Card.Body>
       <Title>Bagaimana Pengalamanmu Menggunakan Mocoflip?</Title>
       <Testi className="col-lg-12 col-md-12 col-sm-12 mb-3">Tuliskan testimoni kamu disini!</Testi>
       <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2 col-lg-12 col-md-12 col-sm-12" controlId="exampleForm.ControlInput1">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" placeholder="Tulis nama kamu" value={data.nama} required onChange={onChangeData} name="nama"  />
            </Form.Group>
            <Form.Group className="mb-2 col-lg-12 col-md-12 col-sm-12"  controlId="exampleForm.ControlTextarea1">
                <Form.Label>Testimoni</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Tulis testimoni..."  value={data.testimoni} required onChange={onChangeData} name="testimoni"/>
            </Form.Group>
            <Button style={{
            backgroundColor: '#282262',
            borderStyle: 'none'
          }} variant="outline-light" type="submit" className="mt-3 col-lg-3 col-md-3 col-sm-3" value="add testimoni"> Kirim</Button>
        </Form>
    </Card.Body>
    </Card>
    );
}
export default FormTesti;





// import React, {useState} from "react";

//  const FormTestimoni=({ addTestimoni })=>{
//     const [data, setData] = useState([
//         {
//             nama: '', 
//             testimoni: '',
//         }
//     ]);
//  const handleSubmit=(e)=>{
//      e.preventDefault();
//      console.log(data.nama);
//      console.log(data.testimoni);
//      addTestimoni(data);
//  }

//  const onChangeData = (e) => {
//      setData({...data,[e.target.name] : [e.target.value]})
//  }
//     return(
//         <form onSubmit={handleSubmit}>
//             <label>Name:</label>
//             <input type="text" value={data.nama} required onChange={onChangeData} name="nama" />
//             <label>Testimoni:</label>
//             <input type="text"value={data.testimoni} required onChange={onChangeData} name="testimoni" />
//             <input type="submit" value="add testimoni" />
//         </form>
//     );
// }
// export default FormTestimoni;
