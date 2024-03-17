import { useEffect, useState } from "react";


function Home() {

  const [sizeMd, setSizeMd] = useState(window.innerWidth);
  const [isHoveredButtonService, setIsHoveredButtonService] = useState(false);
  const [isHoveredButtonBlog, setIsHoveredButtonBlog] = useState(false);
  const [isHoveredButtonProjects, setIsHoveredButtonProjects] = useState(false);
  const [isHoveredButtonContact, setIsHoveredButtonContact] = useState(false);
  const [isHoveredActive, setIsHoveredActive] = useState(false);

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

  useEffect(() => {
    if (isHoveredButtonBlog || isHoveredButtonContact || isHoveredButtonProjects || isHoveredButtonService)

      setIsHoveredActive(true);

    else setIsHoveredActive(false);

  }, [isHoveredButtonBlog, isHoveredButtonContact, isHoveredButtonProjects, isHoveredButtonService]);


  return (
    <div className="row">
      <div className="col-12 col-lg-3 d-flex flex-column justify-content-center align-items-center mb-4">
        <h1 className="color-gradient-text display-1 font-weight-bold mb-0">nVers</h1>
        <p className="fs-8">From the invisible to the immense</p>
      </div>
      <div className="col-12 col-lg-9 d-flex align-items-center justify-content-between h-45vh">

        <div onMouseEnter={() => setIsHoveredButtonProjects(true)}
          onMouseLeave={() => setIsHoveredButtonProjects(false)} className={` overflow-hidden home-logo ${isHoveredButtonProjects && 'select'} ${!isHoveredActive && 'home-logo-1'} d-flex align-items-center`}>
          {sizeMd < 768
            ? <h3 className="vertical-text text-white m-0auto">Projects</h3>
            : <div className="d-flex align-items-center">
              <div className="projects-mini-1 color-primary-light rounded-3 shadow-dark"></div>
              <div className="projects-mini-2 color-primary-light rounded-3 shadow-dark"></div>
              <div className="projects-mini-3 color-primary-light rounded-3 shadow-dark"></div>
              <div className="projects-mini-4 color-primary-light rounded-3 shadow-dark"></div>
            </div>
          }
        </div>
        <div onMouseEnter={() => setIsHoveredButtonService(true)}
          onMouseLeave={() => setIsHoveredButtonService(false)} className={`text-white overflow-hidden home-logo ${isHoveredButtonService && 'select'} ${!isHoveredActive && 'home-logo-2'} d-flex align-items-center`}>
          {sizeMd < 768
            ? <h3 className="vertical-text m-0auto">Services</h3>
            : <div>
              <h2 className='m-md-3 btn-services' >Services and pricing</h2>
              <div >
                <p className="fs-7 text-end m-0">(just one payment)</p>
                <div className="d-flex justify-content-between align-items-end">
                  <div className="color-primary shadow-dark rounded-2 ps-2 pt-2 pe-3 pe-lg-5 ">
                    <div className="d-flex align-items-center">
                      <p className="fs-5">
                        <b>$599</b>
                      </p>
                      <p className="fs-8">/pack</p>
                    </div>
                    <p className="text-white fs-8 "><i class="bi bi-check-circle-fill pe-1"></i>full acces</p>
                    <p className="text-white fs-8 "><i class="bi bi-check-circle-fill pe-1"></i>full acces</p>
                    <p className="text-white fs-8 "><i class="bi bi-check-circle-fill pe-1"></i>full acces</p>
                    <p className="text-white fs-8 "><i class="bi bi-check-circle-fill pe-1"></i>full acces</p>
                  </div>
                  <div className="color-primary shadow-dark rounded-2 ps-2 pt-2 mx-4 pe-4 pe-lg-5 pb-4">
                    <div className="d-flex align-items-center ">
                      <p className="fs-5">
                        <b>$899</b>
                      </p>
                      <p className="fs-8">/pack</p>
                    </div>
                    <p className="text-white fs-8 "><i class="bi bi-check-circle-fill pe-1"></i>full acces</p>
                    <p className="text-white fs-8 "><i class="bi bi-check-circle-fill pe-1"></i>full acces</p>
                    <p className="text-white fs-8 "><i class="bi bi-check-circle-fill pe-1"></i>full acces</p>
                    <p className="text-white fs-8 "><i class="bi bi-check-circle-fill pe-1"></i>full acces</p>
                  </div>
                  <div className="color-primary shadow-dark rounded-2 ps-2 pt-2 pe-3 pe-lg-5">
                    <div className="d-flex align-items-center ">
                      <p>
                        <b>$699</b>
                      </p>
                      <p className="fs-8">/pack</p>
                    </div>
                    <p className="text-white fs-8 "><i class="bi bi-check-circle-fill pe-1"></i>full acces</p>
                    <p className="text-white fs-8 "><i class="bi bi-check-circle-fill pe-1"></i>full acces</p>
                    <p className="text-white fs-8 "><i class="bi bi-check-circle-fill pe-1"></i>full acces</p>

                  </div>
                </div>
              </div>
            </div>
          }
        </div>
        <div onMouseEnter={() => setIsHoveredButtonContact(true)}
          onMouseLeave={() => setIsHoveredButtonContact(false)} className={`overflow-hidden home-logo ${isHoveredButtonContact && 'select'} ${!isHoveredActive && 'home-logo-3'} d-flex align-items-center`}>
          {sizeMd < 768
            ? <h3 className="vertical-text text-white m-0auto">Contact</h3>
            : <div className="text-white ">
              <div className="border-bottom border-white border-black mb-5 w-all">
                <h5>Contact direct by mail</h5>
                <p className="m-1 text-secondary">@your.email</p>
              </div>
              <div className="border-bottom border-white border-black ">
                <h5>Did you want call you back?</h5>
                <p className="m-1 text-secondary fs-7">let your phone number</p>
              </div>
              <p className="mt-1 mb-5 fs-7">
                <b>we will call you into next ten minutes.</b>
              </p>
              <div>
                <b>No have time? Direct contact .</b>

              </div>
            </div>

          }
        </div>
        <div onMouseEnter={() => setIsHoveredButtonBlog(true)}
          onMouseLeave={() => setIsHoveredButtonBlog(false)} className={`overflow-hidden home-logo ${isHoveredButtonBlog && 'select'} ${!isHoveredActive && 'home-logo-4'} d-flex align-items-center`}>
          {sizeMd < 768 
            ?<h3 className="vertical-text text-white m-0auto">Blog</h3>
            :<div className='text-white '>
            <div className="d-flex mb-4">
              <div className="d-flex align-items-center me-3">
                <div className="projects-logo-1 me-1"></div>
                <div className="projects-logo-2"></div>
                <div className="projects-logo-3 mx-1"></div>
                <div className="projects-logo-4"></div>
              </div>
              <h2> Blog </h2>
            </div>
    
            <div className="rounded-4 shadow-lg w-all px-3">
              Our philosophy is based on the idea that to reveal the greatness of what
              we can see and experience, we must rst understand and appreciate the
              tiniest, most hidden details. Our philosophy is based on the idea that
              to reveal the greatness of what we can see and experience, we must rst
              understand and appreciate the tiniest, most hidden details.
            </div>
          </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
