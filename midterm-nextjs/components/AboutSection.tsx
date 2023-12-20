import React from 'react'

const AboutSection = () => {
    return (
      <section id="about">
        <div className="my-12 pb-12 md:pt-16 md:pb-48">
          <h1 className="text-center font-bold text-4xl">
            About Me
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
          </h1>
  
          <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
            <div className="md:w-1/2 ">
              <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                Get to know me!
              </h1>
              <p>
                Hi, my name is Mahum and I am a{" "}
                <span className="font-bold">{"highly ambitious"}</span>,
                <span className="font-bold">{" self-motivated"}</span>, and
                <span className="font-bold">{" driven"}</span> data scientist
                based in Jersey City, NJ.
              </p>
              <br />
              <p>
                I graduated from Rutgers University, New Brunswick in 2022
                with a MS in Computer Engineering and have been working in the
                field ever since.
              </p>
              <br />
              <p>
                I have a wide range of hobbies and passions that keep me busy.
                From reading, playing sports, traveling, to making YouTube videos,
                I am always seeking new experiences and love to keep myself
                engaged and learning new things.
              </p>
              <br />
              <p>
                I believe that you should{" "}
                <span className="font-bold text-teal-500">
                  never stop growing
                </span>{" "}
                and that&#39;s what I strive to do, I have a passion for
                technology and a desire to always push the limits of what is
                possible. I am excited to see where my career takes me and am
                always open to new opportunities. 🙂
              </p>
            </div>

          </div>
        </div>
      </section>
    )
  }
  
  export default AboutSection