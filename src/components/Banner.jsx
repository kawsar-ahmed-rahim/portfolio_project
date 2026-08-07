const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[60vh] max-w-6xl mx-auto my-5">
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="w-1/2 flex justify-center items-center">
          <a href="https://imgbb.com/">
            <img
              src="https://i.ibb.co.com/p6rqWgCN/download-1.jpg"
              alt="download 1"
              className="border-0"
            />
          </a>
        </div>
        <div className="w-1/2">
          <h1 className="text-7xl font-bold">Kawsar Rahim</h1>
          <h1 className="text-3xl font-semibold">Full Stack Developer</h1>
          <p className="py-6">
            I'm a passionate Full Stack Developer who loves building complete web
  applications from the ground up — from designing clean, responsive
  interfaces to architecting robust backend systems and databases. I enjoy
  turning ideas into functional, scalable products using modern technologies
  like React, Node.js, Express.js, Django and MongoDB. Always eager to learn, solve problems, and
  bring creative solutions to life.
          </p>
          <button className="btn btn-primary">Download Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;