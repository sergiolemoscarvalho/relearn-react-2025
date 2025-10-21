
import img1 from './images/bg-destaques.png';
import group1 from './images/icones/Group.svg';
import group2 from './images/icones/Vector.svg';
import group3 from './images/icones/Vector-1.svg';
import group4 from './images/icones/Vector-2.svg';
import group5 from './images/icones/Vector-3.svg';

export default function Destaques() {
    return (
        <div className="container-fluid" id="destaques-2024">
    <div className="row">
      <div className="col-12 col-sm-10 col-xxl-10 offset-sm-1 mt-sm-5 cor--laranja pt-4 ">
        <h1 className="mb-0">Destaques 2024</h1>
      </div>
      <div className="col-12 px-0 ">
        <img src={img1} className="img-fluid" alt="" />
        
      </div>
      
    </div>
    <div className="row bg--laranja2 pb-sm-5 pb-0">
      <div className="col-12 col-sm-10 col-xxl-10 offset-sm-1 pb-5">
        <div className="row">
          <div className="col-12 col-sm-4 cor--branco mb-5 mb-md-0">
            <img src={group1} className="img-fluid mb-4" alt="" />
            <h4>Expansão de</h4>
            <h6>2.400</h6>
            <h4>plataformas 100% elétricas<br /> para trabalho em altura</h4>
          </div>
            <div className="col-12 col-sm-4 cor--branco mb-5 mb-md-0">
            <img src={group2} className="img-fluid mb-4" alt="" />
            <h4>Frota com</h4>
            <h6>52%</h6>
            <h4>na principal unidade de<br /> negócios (energia)</h4>
          </div>
            <div className="col-12 col-sm-4 cor--branco mb-5 mb-md-0">
            <img src={group3} className="img-fluid mb-4" alt="" />
            <h4>Presença nacional:</h4>
            <h6>25</h6>
            <h4>filiais e pontos de<br /> atendimento ativos</h4>
          </div>
        </div>
        <div className="row mt-sm-5 mt-0">
          <div className="col-12 col-sm-4 cor--branco mb-5 mb-md-0">
            <img src={group4} className="img-fluid mb-4" alt="" />
            <h4>Consolidação do</h4>
            <h7>Centro de Controle Operacional (CCO)</h7>
          </div>
            <div className="col-12 col-sm-4 cor--branco mb-5 mb-md-0">
            <img src={group5} className="img-fluid mb-4" alt="" />
            <h4>Mais de</h4>
            <h6>8.700</h6>
            <h4>horas em operação<br />registradas</h4>
          </div>
            <div className="col-12 col-sm-4 cor--branco d-flex align-items-end">
            <button className="btnDownloadLerw">
              <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 34.753L11.3719 23.1281L13.6981 20.7624L21.3571 28.4214V0H24.6429V28.4214L32.2986 20.7657L34.6281 23.1281L23 34.753ZM5.30971 46C3.7961 46 2.53329 45.494 1.52129 44.482C0.509285 43.47 0.00219048 42.2061 0 40.6903V32.729H3.28571V40.6903C3.28571 41.1963 3.496 41.6607 3.91657 42.0834C4.33714 42.5062 4.80043 42.7165 5.30643 42.7143H40.6936C41.1974 42.7143 41.6607 42.504 42.0834 42.0834C42.5062 41.6629 42.7165 41.1985 42.7143 40.6903V32.729H46V40.6903C46 42.2039 45.494 43.4667 44.482 44.4787C43.47 45.4907 42.2061 45.9978 40.6903 46H5.30971Z" fill="#F58436"/>
              </svg>
              <p className="mb-0">Clique para ler a íntegra<br />do Relatório Anual 2024</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}