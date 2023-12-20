import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import SlideUp from "./SlideUp"

const projects = [
    {
      name: "Price Prediction ML",
      description:
        "Streamlit app SuperDuper which offers users the chance to dupe their favorite high-end products and find cheaper alternatives that are at the ingredient-level similar..",
      image: "/skincare.jpg",
    },
    {
      name: "Microsoft's VS",
      description: "Generated a Recommendation System with Hybrid Approach for Improved Accuracy in Predicting User Preferences in Video Content for Microsoft.",
      image: "/microsoft.jpg",
    },
    {
      name: "H1N1 2009 Vaccination Campaign",
      description:
        "Built a model that can use the patient demographics data, collected following the 2009 H1N1 virus outbreak to predict which patients are likely to get the vaccine.",
      image: "/hv.jpg",
    },
  ]
  
  const ProjectsSection = () => {
    return (
      <section id="projects">
        <h1 className="my-10 text-center font-bold text-4xl">
          Projects
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
  
        <div className="flex flex-col space-y-28">
          {projects.map((project, idx) => {
            return (
              <div key={idx}>
                 <SlideUp offset="-300px 0px -300px 0px">
                  <div className="flex flex-col  animate-slideUpCubiBezier">
                    <div className=" md:w-1/2">
                        <Image
                          src={project.image}
                          alt=""
                          width={1000}
                          height={1000}
                          className="rounded-xl shadow-xl hover:opacity-70"
                        />
                    </div>
                    <div className="mt-8 md:w-1/2">
                      <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                      <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                        {project.description}
                      </p>
                      <div className="flex flex-row align-bottom space-x-4">
                      </div>
                    </div>
                  </div>
                  </SlideUp>
              </div>
            )
          })}
          
        </div>
      </section>
    )
  }
  
  export default ProjectsSection
  