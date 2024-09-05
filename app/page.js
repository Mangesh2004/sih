import About from "@/components/about";
import Events from "@/components/events";
import Members from "@/components/members";
import Navbar from "@/components/navbar";
import News from "@/components/news";
import Pictures from "@/components/pictures";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Pictures/>
      <About/>
      <News/>
      <Events/>
      <Members/>

    </div>
  )
    
}
