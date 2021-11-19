import React, {useEffect, useState, useRef} from 'react';
import styled from 'styled-components';

const ViewerCanvas = styled.div`
    margin: auto; 
    width: 400px;  
    height: 600px;
`;

function BookViewer(props) { 
    // const id = props.bookItem.id;
    const canvasRef = useRef()     
    
    const [loaded, setLoaded] = useState(false);  

    function alertNotFound() {            
        alert("could not embed the book!");
     }

    useEffect(()=> {      
       const scriptTag = document.createElement('script')                
       scriptTag.src= 'https://www.google.com/books/jsapi.js'       
       scriptTag.addEventListener('load', ()=>setLoaded(true))       
       scriptTag.id = "google-script"      
       document.body.appendChild(scriptTag);       
     }, []);      

    useEffect(()=>{            
        if (!loaded) return             
        else{         
             if(window.viewer){            
                let viewer = new window.google.books.DefaultViewer
                (canvasRef.current); 
                //pake id
                viewer.load('-KgWAAAAIAAJ', alertNotFound);                    
              }        
              else{          
                window.google.books.load()                             
                window.google.books.setOnLoadCallback(() => {                 
                let viewer = new window.google.books.DefaultViewer      
                    (canvasRef.current);         
                window.viewer = viewer;         
                viewer.load('-KgWAAAAIAAJ', alertNotFound);        
              })
            }              
        }}, [loaded])      
        return (      
           <div>        
               {loaded ?             
                    <div>                
                       <ViewerCanvas ref={canvasRef}></ViewerCanvas>            
                    </div> : 
               'Script not loaded'}      
           </div>    )
 };

 export default BookViewer;