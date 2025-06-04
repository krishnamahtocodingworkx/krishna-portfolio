import Hero from "@/components/hero/Hero";
import Grid from "@/components/ui/Grid";
import FloatingNav from "@/components/ui/Navbar";
// import { navItems } from "@/lib/constant";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "Home", link: "/", icon: <FaHome /> },
            { name: "Home", link: "/", icon: <FaHome /> },
            { name: "Home", link: "/", icon: <FaHome /> },
          ]}
        />
        <Hero />
        <Grid />
        {/* 
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer /> */}
      </div>
    </main>
  );
}
