import Link from 'next/link';

export const metadata = {
  title: 'About RayTech',
};

const AboutPage = () => {
  return (
    <div>
      <h1>About RayTech</h1>
      <p>
        Hello, I'm Oluwafemi Micheal, a passionate and creative Frontend
        Developer with a strong knack for crafting immersive and user-centric
        web experiences. With 3+ years of hands-on experience, I thrive on
        transforming design concepts into interactive and visually stunning
        websites.
      </p>

      <h3>What Drives Me</h3>
      <p>
        I've always been fascinated by the intersection of technology and
        design, which lead me to specialize in frontend development. I find joy
        in bridging the gap between the artistic vision and the technical
        implementation, ensuring that every pixel aligns perfectly with the
        user's needs.
      </p>

      <h3>My Expertise</h3>
      <p>
        Proficient in a wide range of frontend technologies, I'm skilled in
        HTML, CSS, JAVASCRIPT, and modern frameworks like Bootstrap,
        Tailwindcss, Sass, React and Next.js. I'm dedicated to staying
        up-to-date with the ever-evolving landscape of web development,
        continuously learning and experimenting with the latest tools and
        techniques.
      </p>

      <h3>My Approach</h3>
      <p>
        My approach to frontend development is rooted in user-centered design. I
        believe in creating interfaces that not only look beautiful but also
        provide seamless navigation and exceptional usabilty. Accessability and
        performance are at the forefront of my mind, ensuring that my creations
        are inclusive and efficient.
      </p>

      <h3>Let's Connect</h3>
      <p>
        Whether you're a fellow developer, a potential client, or someone who
        simply shares a passion for frontend development, I'd love to connect
        and collaborate. Feel free to explore my Portfolio @
        <Link
          href='https://rayt3ch-portfolio.pages.dev'
          target='_blank'
          className='portfolio-link'
        >
          RayTech.com
        </Link>{' '}
        and get in touch via <span>08132766914</span>
      </p>

      <p>
        Thank you for stopping by and taking a glimpse into my world of frontend
        development.
      </p>
    </div>
  );
};

export default AboutPage;
