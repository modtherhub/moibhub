import profile from "./assets/prfile.jpg"
import './index.css'

function App() {

  const links = [
    {
      color:"bg-red-300",
      link:"https://github.com",
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
    <div className="font-serif w-full h-screen bg-yellow-300 flex justify-center items-center">

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
                <a class="bt more-bt" href={links} key={index} target="_blank">
                  
                  <span class="fl"></span>
                  <span class="sfl">
                  </span><span class="cross">
                  </span><i></i>
                  <p>{text}</p>
                </a>
              )

            })}
          </div>






        </div>

    </div>
  )
}

export default App
