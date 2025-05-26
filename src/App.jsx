import profile from "./assets/prfile.jpg"
import './index.css'

function App() {

  const links = [
    {
      color:"bg-red-300",
      link:"https://github.com/modtherhub",
      text:"GitHub Account",
    },
    {
      color:"bg-sky-300",
      link:"https://github.com",
      text:"Contact me on WhatsApp",
    },
    {
      color:"bg-pink-300",
      link:"https://github.com",
      text:"Lets us contact on LinkedIn",
    },
    
  ]

  return (
    <div className="font-serif w-full h-screen bg-yellow-300 flex justify-center items-center
    ">

        <div className="max-w-2xl  mx-auto flex flex-col gap-5">
          
          <div className="h-48 w-48 mx-auto">
            <div className="aspect-w-1 aspect-h1">
              <img className="rounded-full object-cover object-center " src={profile} alt="profile" />
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-4xl font-bold m-3">Modther Abdalhag</h1>
            <p className="text-lg m-3" >A personal bio is a concise summary of who you are, what you do, and what you're passionate about. It can be used for various purposes, such as social media profiles, websites, or professional networking platforms</p>
          </div>






          <div className="mx-auto  flex flex-col gap-10">
            {links.map(({text,link,color}, index) => {

              return(
                <a href={link} target="_blank" className="w-80 sm:w-96 mx-auto relative inline-block text-lg group">
                  <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                      <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                      <span className="absolute left-0 w-98 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                      <span className="relative items-center justify-center flex">{text}</span>
                  </span>
                  <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </a>
              )

            })}
          </div>






        </div>

    </div>
  )
}

export default App
