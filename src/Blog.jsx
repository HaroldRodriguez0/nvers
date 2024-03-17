

function Blog() {
  return (
    <div className="row mt-5">
      <div className='col-12 col-md-7'>
        <div className="d-flex mb-4">
          <div className="d-flex align-items-center me-3">
            <div className="projects-logo-1 me-1"></div>
            <div className="projects-logo-2"></div>
            <div className="projects-logo-3 mx-1"></div>
            <div className="projects-logo-4"></div>
          </div>
          <h2> Blog </h2>
        </div>

        <div className="rounded-4 shadow-lg p-4 ">
          Our philosophy is based on the idea that to reveal the greatness of what
          we can see and experience, we must rst understand and appreciate the
          tiniest, most hidden details. Our philosophy is based on the idea that
          to reveal the greatness of what we can see and experience, we must rst
          understand and appreciate the tiniest, most hidden details.
        </div>
      </div>
      <div className="col-12 col-md-5 d-flex flex-wrap justify-content-between mt-4">
        <button className="w-b p-+2 my-2 btn btn-lg color-gradient rounded-6 text-white ">
          Tutorials
        </button>
        <button className="w-b p-+2 my-2 btn btn-lg color-gradient rounded-6 text-white">
          Personal
        </button>
        <button className="w-b p-+2 my-2 btn btn-lg color-gradient rounded-6 text-white">
          Reviews
        </button>
        <button className="w-b p-+2 my-2 btn btn-lg color-gradient rounded-6 text-white">
          Resources
        </button>
      </div>

    </div>
  );
}

export default Blog;
