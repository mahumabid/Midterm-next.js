import React from 'react'

const HeroSection = () => {
  return (
    <section id="home">
      <div>
        <div>
          <img src="/headshot.jpg" alt="" width={300} height={300} />
          {/* The 'img' tag should have 'src' attribute, not 'source' */}
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;



