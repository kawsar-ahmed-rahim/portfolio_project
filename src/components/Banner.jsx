const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[60vh] max-w-6xl mx-auto my-5">
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="w-1/2 flex justify-center items-center"><img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="w-md rounded-lg shadow-2xl"
        /></div>
        <div className="w-1/2">
          <h1 className="text-7xl font-bold">Kawsar Rahim</h1>
           <h1 className="text-3xl font-semibold">Full Stack Developer</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Download Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
