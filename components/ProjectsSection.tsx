import React from 'react';
import Image from 'next/image';
import { BsGithub } from 'react-icons/bs';


const projects = [
  {
    name: 'Price Prediction ML',
    description:
      'Streamlit app SuperDuper which offers users the chance to dupe their favorite high-end products and find cheaper alternatives that are at the ingredient-level similar.',
    image: '/skincare.jpg',
    github: 'https://github.com/mahumabid/price-prediction-ML',
  },
  {
    name: "Microsoft's VS",
    description:
      'Generated a Recommendation System with Hybrid Approach for Improved Accuracy in Predicting User Preferences in Video Content for Microsoft.',
    image: '/microsoft.jpg',
    github: 'https://github.com/mahumabid/phase4-project',
  },
  {
    name: 'H1N1 2009 Vaccination Campaign',
    description:
      'Built a model that can use the patient demographics data, collected following the 2009 H1N1 virus outbreak to predict which patients are likely to get the vaccine.',
    image: '/hv.jpg',
    github: 'https://github.com/mahumabid/H1N1-vaccination-campaign',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => (
          <div key={idx}>
            
              <div className="flex flex-col  md:flex-row md:space-x-12">
                <div className="md:w-1/2">
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
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <BsGithub size={30} className="hover:-translate-y-1 transition-transform cursor-pointer" />
                    </a>
                  </div>
                </div>
              </div>
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

  
