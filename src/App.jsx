import './App.css'
import NavigationCard from './Components/NavigationCard'
import GalleryCard from './Components/GalleryCard'
function App() {

  return (
    <div className='main bg-[#212121] flex flex-col items-end  gap-8 '>
    <NavigationCard/>
    <GalleryCard/>
    </div>
  )
}

export default App
