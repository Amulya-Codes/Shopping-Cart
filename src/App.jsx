import {useState} from 'react';
import image1 from './assets/image1.webp';
import image2 from './assets/image2.webp';
import image3 from './assets/image3.webp';

const images = [image1, image2, image3]


export default function App() {
  const [initialImg, setInitialImg] = useState(images[0]);
  return (
    <div className="App">
     <ListItems image={images} setInitialImg={setInitialImg} initialImg={initialImg}/>
     <img src={initialImg} style={{width: '350px', height: '420px'}} alt='initial image'/>
     <Description />
    </div>

  );
}
function Button({children, isActive, onClick}){

  return (
    <button className='btn' onClick={onClick} style={{color: isActive? 'white' : 'black',
      backgroundColor: isActive? 'black' : 'white', cursor: 'pointer'
    }}>
      {children}
    </button>
  )
}

function ListItems({image, setInitialImg, initialImg}) {

  
return (
<div>
  <ul className='list-img'>
   {image.map((img, index) => (
    <li key={index} onClick={() => setInitialImg(img)} style={{opacity: img === initialImg ? 1 : 0.5, 
      transition: 'opacity 0.3s ease',}}>
      <img src={img} alt={`image ${index+1}`} style={{
        width: '100px', height: '100px',
        border: img=== initialImg ? '4px solid rgb(109, 109, 159)' : 'none'
        }} className='active'/>
    </li>
   )) }
  </ul>
</div>
);
}

function Description(){
  const [activeIndex, setActiveIndex] = useState(null);
  const[initialText, setInitialText] = useState('Add to bag');
  const [isAdded, setIsAdded] = useState(false);


  const handleButtonText = () =>{
    if(activeIndex!== null){
      if(isAdded){
        setInitialText('Add to bag');
        setIsAdded(false)
      } else {
        setInitialText('Added to bag')
        setIsAdded(true)
      }
    } else {
      alert('Please select the size');
    }
  }

  const handleButtonClick = (index) => {setActiveIndex(index)};
  return(
    <div>
      <p style={{color: 'rgb(109, 109, 159)',
       textTransform: 'uppercase',
       fontWeight: 'bold',
      }}>Little Box</p>
      <h2>Autumn Trend Corset Style <br/>Crop Top In Dark Blue</h2>
      <p>This corset top has a denim construction, <br />contrast colored stitching, a curved hem</p>
      <span style={{
        color: 'black',
        fontWeight: 'bold',
        fontSize: '30px'
      }}>$99.00</span>
      <span style={{
        color: 'rgb(80, 143, 143)',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: 'rgb(80, 143, 143)',
        color: '#fff',
      }}>-25%</span>
      <p style={{textDecoration: 'line-through',
        color: 'grey'
      }}>$132.00</p>
      <p style={{fontWeight: 'bold'}}>CHOOSE SIZE</p>
      {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size, index) =>(
        <Button isActive={activeIndex === index} key={size}
        onClick={()=> handleButtonClick(index)}>{size}</Button>
      ))}
      <button style={{display: 'block', backgroundColor: '#3399CC',
        border: 'none',
        marginTop: '10px',
        textAlign: 'center',
        padding: '8px 55px',
        color: '#fff',
        fontSize: '20px',
        cursor: 'pointer'
      }} onClick={()=> handleButtonText('Added to bag')}>{initialText}</button>
    </div>
  )
}