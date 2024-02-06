import useScrollVisibility from '../../hooks/useScrollVisibility'
import useSmoothScroll from '../../hooks/useSmoothScroll'
import MyButton from '../button/MyButton'
import './mainComponent.css'

const MainComponent = () => {
  const smoothScrollToSection = useSmoothScroll()
  const isVisible = useScrollVisibility('main', 0.5);

  return (
    <div className={`main-div pt-5 ${isVisible ? 'isVisible' : ''}`} id='main'>
        <div className='w-75 m-auto mt-5'>
            <h1 className='text-center fw-bold'>
                HEY, I AM DACHI GIKORASHVILI
            </h1>
            <p className='text-center mt-4'>
                A Frontend focused Web Developer building the Frontend of Websites
                and Web Applications that leads to the success of the overall
                product
            </p>
            <span className='w-100 d-flex justify-content-center mt-5' onClick={() => smoothScrollToSection('projects')}>
            <MyButton text={'PROJECTS'} width={'10rem'}/>
            </span>
        </div>
    </div>
  )
}

export default MainComponent