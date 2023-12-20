import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
    {
      name: "Thankful Thoughts",
      description:
        "ThankfulThoughts is a web app that generates an appreciative sentence of something or someone you are thankful for.",
      image: "/thankfulthoughts.png",
    },
    {
      name: "PlatoIO",
      description: "PlatoIO is a to do list app that built using the PERN stack.",
      image: "/platoio.png",
    },
    {
      name: "Kator Family Photos",
      description:
        "Kator Family Photos is a photos and video digitization service in the LA area.",
      image: "/familyphotos.png",
    },
  ]
  
const ProjectsSection = () => {
  return (
    <section id="projects">
         <h1 className="text-center font-bold text-4xl">
            Projects
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
          </h1>

            <div className="flex flex-col space-y-28"></div>
            {projects.map((project, idx)=>{
                return <div key={idx}>
                    


                </div>})}
    </section >
  )
}

export default ProjectsSection