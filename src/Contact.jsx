import  { useEffect, useState } from "react";

function Contact() {

  const [sizeMd, setSizeMd] = useState(window.innerWidth);
  const [isHoveredButtonService, setIsHoveredButtonService] = useState(false);
  const [isHoveredButtonBlog, setIsHoveredButtonBlog] = useState(false);
  const [isHoveredButtonProjects, setIsHoveredButtonProjects] = useState(false);

  // Efecto para escuchar el cambio de tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      // Actualiza el estado con el nuevo ancho de la ventana
      setSizeMd(window.innerWidth);
    };

    // Agrega el event listener
    window.addEventListener('resize', handleResize);

    // Limpieza del event listener al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);  

  return (
    <div className=" mt-5  d-flex flex-column flex-md-row justify-content-between">
      <section className="d-flex flex-column ">
        <button  onMouseEnter={() => setIsHoveredButtonService(true)}
      onMouseLeave={() => setIsHoveredButtonService(false)} className={`btn color-gradient text-white border-0 rounded-0 rounded-end-6 pb-0 overflow-hidden `}>
          <h2 className='m-md-3 btn-services' >{(sizeMd > 768 && !isHoveredButtonService) ? "Services" : "Services and pricing"}</h2>
          {
            (isHoveredButtonService || sizeMd < 768) && <div className='animate__fadeInLeft'>
            <p className="fs-7 text-end m-0">(just one payment)</p>
            <div className="d-flex justify-content-between align-items-end">
              <div className="color-primary d-flex align-items-center shadow-dark rounded-2 ps-2 pt-2 pe-3 pe-lg-5">
                <p>
                  <b>$599</b>
                </p>
                <p className="fs-8">/pack</p>
              </div>
              <div className="color-primary d-flex align-items-center shadow-dark rounded-2 ps-2 pt-2 mx-4 pe-4 pe-lg-5 pb-1">
                <p className="fs-5">
                  <b>$899</b>
                </p>
                <p className="fs-8">/pack</p>
              </div>
              <div className="color-primary d-flex align-items-center shadow-dark rounded-2 ps-2 pt-2 pe-3 pe-lg-5">
                <p>
                  <b>$699</b>
                </p>
                <p className="fs-8">/pack</p>
              </div>
            </div>
          </div>
          }
          
        </button>
        <button onMouseEnter={() => setIsHoveredButtonBlog(true)}
      onMouseLeave={() => setIsHoveredButtonBlog(false)}  className="btn color-gradient text-white border-0 rounded-0 rounded-end-6 pb-0 overflow-hidden my-5">
        {!(isHoveredButtonBlog || sizeMd < 768) && <h2 className="m-3">Blog</h2>}
          {(isHoveredButtonBlog || sizeMd < 768) && 
          <div className='animate__fadeInLeft'>
            {" "}
            <div className="d-flex align-items-center justify-content-center ">
              <h2>Blog</h2>
              <div className="d-flex align-items-center justify-content-between blog-logo ms-4">
                <div className="blog-logo-1"></div>
                <div className="blog-logo-2"></div>
                <div className="blog-logo-3"></div>
                <div className="blog-logo-4"></div>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-around mt-3">
              <div className="blog-into-p bg-light rounded-top-3 ">
                <p className="text-black fs-8 px-2 pt-1 m-0">
                  Our philosophy is based on the idea{" "}
                </p>
                <p className="text-black fs-8 px-2 m-0">
                  that to reveal the greatness of what
                </p>
              </div>
              <div className="blog-into-b color-primary text-white shadow-dark w-50 h-25">
                Tutorials{" "}
              </div>
            </div>
          </div>}
        </button>
        <button onMouseEnter={() => setIsHoveredButtonProjects(true)}
      onMouseLeave={() => setIsHoveredButtonProjects(false)} className="btn color-gradient text-white border-0 rounded-0 rounded-end-6 p-0 overflow-hidden "> 
        {!(isHoveredButtonProjects || sizeMd < 768) && <h2 className={`m-4p`}>Projects</h2>}
        {(isHoveredButtonProjects || sizeMd < 768) && 
        <div className={`d-flex align-items-center justify-content-around animate__fadeInLeft`}>
            <div className="d-flex flex-column align-items-start justify-content-center ms-4">
              <div>
                <div className="d-flex align-items-center justify-content-center projects-logo">
                  <div className="projects-logo-1"></div>
                  <div className="projects-logo-2"></div>
                  <div className="projects-logo-3"></div>
                  <div className="projects-logo-4"></div>
                </div>
                <h6 className="vertical-text mt-2">
                  <b>Projects</b>
                </h6>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="projects-mini-1 color-primary-light rounded-3 shadow-dark"></div>
              <div className="projects-mini-2 color-primary-light rounded-3 shadow-dark"></div>
              <div className="projects-mini-3 color-primary-light rounded-3 shadow-dark"></div>
              <div className="projects-mini-4 color-primary-light rounded-3 shadow-dark"></div>
            </div>
          </div>}
        </button>
      </section>
      <section className="d-flex flex-column mt-5 mt-md-0 ps-md-4">
        <div className="border-bottom border-black mb-5">
          <h2>Contact direct by mail</h2>
          <p className="m-1 text-secondary">@your.email</p>
        </div>
        <div className="border-bottom border-black ">
          <h2>Did you want call you back?</h2>
          <p className="m-1 text-secondary">let your phone number</p>
        </div>
        <p className="mt-1 mb-5">
          <b>we will call you into next ten minutes.</b>
        </p>
        <div>
          <b>No have time? Direct contact .</b>
          <div className="mt-2">
            <button className="btn btn-dark rounded-5 me-4">
              +1 786 353 5916
            </button>
            <button className="btn btn-dark rounded-5">info@nvers.com</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
