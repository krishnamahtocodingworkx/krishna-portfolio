import Hero from "@/components/hero/Hero";
import FloatingNav from "@/components/ui/Navbar";
import { LiaSmsSolid } from "react-icons/lia";
import { FaHome } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import RecentProjects from "@/components/recentProjects";
// import Grid from "@/components/grid";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "Home", link: "/", icon: <FaHome /> },
            { name: "About", link: "/about", icon: <LiaSmsSolid /> },
            { name: "Projects", link: "/projects", icon: <AiOutlineProduct /> },
          ]}
        />
        <Hero />
        {/* <Grid /> */}
        <RecentProjects />
        {/* 
        
        <Clients />
        <Experience />
        <Approach />
        <Footer /> */}
      </div>
    </main>
  );
}
