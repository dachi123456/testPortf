import './myButton.css'

const MyButton = ({width,text,bgcolor = '#7843e9',padding = '1rem'}) => {
  return (
    <button style={{width,backgroundColor: bgcolor,padding}} className='my-btn'>    
        {text}
    </button>
  )
}

export default MyButton