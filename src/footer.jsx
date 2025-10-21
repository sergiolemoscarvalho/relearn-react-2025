import img1 from "./images/logotipo.png";
import img2 from "./images/social_media/facebook.svg";
import img3 from "./images/social_media/linkedin.svg";
import img4 from "./images/social_media/instagram.svg";
import img5 from "./images/social_media/youtube.svg";
import img6 from "./images/social_media/tiktok.svg";
export default function Footer() {
  return (
    <footer className="bg--footer">
      <div className="container">
        <div className="row footer d-flex justify-content-start align-items-center py-5">
          <div className="col-12 col-md-6 d-flex justify-content-md-start justify-content-center align-items-center">
            <img src={img1} alt="" className="img-fluid pb-4 pb-md-0" />
          </div>

          <div className="col-12 col-md-6 d-flex justify-content-md-end justify-content-center align-items-center gap-3">
            <a href="https://www.facebook.com/Tecnogera/" target="_blank" className="ancora-icon">
              <img src={img2} alt="" className="img-fluid" />
            </a>
            <a href="https://www.linkedin.com/company/tecnogera-geradores" target="_blank" className="ancora-icon">
              <img src={img3} alt="" className="img-fluid" />
            </a>
            <a href="https://www.instagram.com/tecnogeraoficial/" target="_blank" className="ancora-icon">
              <img src={img4} alt="" className="img-fluid" />
            </a>
            <a href="https://www.youtube.com/channel/UCX34D3LxKg7UmtQ7rCL0pSQ" target="_blank" className="ancora-icon">
              <img src={img5} alt="" className="img-fluid" />
            </a>
            <a href="https://www.tiktok.com/@tecnogera" target="_blank" className="ancora-icon">
              <img src={img6} alt="" className="img-fluid" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
