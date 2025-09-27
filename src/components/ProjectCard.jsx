
const ProjectCard = ({ project }) => {
    const { title, description, techStack, githubUrl, liveUrl, image } = project;
    return (
<div className="card bg-base-100 w-80 border-2 shadow-sm">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{description}</p>
    <p className="flex flex-wrap gap-2">{techStack.map((stack) => (
        <div className="border px-2 py-1 rounded-sm bg-amber-400 text-center text-white">{stack}</div>))}</p>
    <div className="card-actions justify-end">
        <a href={githubUrl} className="badge badge-outline">Github</a>
        <a href={liveUrl} className="badge badge-outline">Live</a>
    </div>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    );
};

export default ProjectCard;