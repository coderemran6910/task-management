import banner from "../assets/cover.jpg";

const Banner = () => {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(' + banner + ')'}}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Team Work is key</h1>
        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
        <button className="btn btn-primary">Task Manage </button>
      </div>
    </div>
  </div>
  );
};

export default Banner;
