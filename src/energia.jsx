import obj1 from './images/icones/Rectangle_45.svg';
import obj2 from './images/icones/Rectangle_46.svg';
import obj3 from './images/ico1.png';
import obj4 from './images/ico2.png';
import obj5 from './images/ico3.png';
import obj6 from './images/ico4.png';
import obj7 from './images/ico5.png';
import obj8 from './images/ico6.png'; 
import obj9 from './images/bg-pessoas.png';
import obj10 from './images/foto-capacete.png'; 
import obj11 from './images/icones/Group_48.svg';      
import obj12 from './images/icones/Group_49.svg';  
import obj13 from './images/caminhao.jpg';    

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


export default function Energy() {
    return (
        <section id="energia">
            <div className="container-fluid " >
              <div className="row ">
                <div className="col-12 bg--energia d-flex align-items-end justify-content-start ">
                  <div className="row w-100">
                    <div className="col-12 col-sm-10 col-xxl-10 offset-md-1 cor--branco "> <h1 className="pb-5">Energia é o nosso negócio</h1></div>
                  </div>
                  
                  </div>
                  <div className="col-12 col-sm-10 col-xxl-10 offset-sm-1 mt-5 cor--laranja mb-5">
                  <p>Fundada em 2006, a Tecnogera é uma empresa brasileira especializada em soluções de energia temporária, eficiência operacional e inovação. Com sede em São Bernardo do Campo (SP), oferecemos atendimento técnico e logístico em todo o Brasil, 24 horas por dia, sete dias por semana. Nossas operações estão organizadas nas seguintes frentes de negócios:</p>
                  </div>
                  <div className="col-12 col-sm-5 col-xxl-5 offset-sm-1 cor--laranja">
                    <img src={obj1} className="img-fluid mb-md-5 mb-3" alt="" />
                    <h3>Segurança Energética</h3>
                    <div className="box--alca mt-4">
                      <p>Soluções para garantir energia em locais sem rede elétrica, com fornecimento instável ou que exigem reforço. Atuamos com locação de geradores e climatização em obras, indústrias, eventos, hospitais e outros setores críticos.</p>
                    </div>

                  </div>
                  <div className="col-12 col-sm-5 col-xxl-5 mt-4 mt-md-0 cor--laranja">
                    
                    <img src={obj2} className="img-fluid mb-md-5 mb-3" alt="" />
                    <h3>Equipamentos de Acesso</h3>
                    <div className="box--alca mt-4">
                      <p>Locação de plataformas elevatórias para trabalho em altura e torres de iluminação para grandes áreas externas, como obras noturnas e eventos em ambientes com baixa visibilidade.</p>
                    </div>

                  
                  </div>
                  <div className="col-12 col-sm-10 col-xxl-10 offset-sm-1 mt-md-5 mt-3 pt-3">
                    <div className="boxlll text-white my-2">
                      <img src={obj3} alt="" className="me-3" /><p className="mb-0 cor--branco">Atuação nacional, com 25 filiais e atendimento técnico e logístico 24/7</p>
                    </div>
                    <div className="boxlll text-white my-2">
                      <img src={obj4} alt="" className="me-3" /><p className="mb-0 cor--branco">Soluções aplicadas em setores como mineração, construção, logística, varejo, eventos e indústria</p>
                    </div>
                    <div className="boxlll text-white my-2">
                      <img src={obj5} alt="" className="me-3" /><p className="mb-0 cor--branco">Qualidade assegurada: certificações ISO 9001, 14001 e 45001, e NPS médio superior a 80 pontos em 2024</p>
                    </div>
                  </div>
                  <div className="col-12 col-sm-10 col-xxl-10 offset-sm-1 mt-5 pt-3 cor--laranja" id="identidade">
                    <h1>Identidade cultural</h1>
                  </div>
                  


              </div>
              <div className="row">
                <div className="col-12 col-sm-10 col-xxl-10 offset-sm-1 cor--laranja">
                  <div className="row px-0 mt-4">
                <div className="col-12 col-sm-4 col-xxl-4   cor--laranja mb-5 mb-md-0">
                  <img src={obj6} className="img-fluid mb-3" alt="" />
                  <h3>MISSÃO</h3>
                  <p>Apoiar a transição energética segura e gradual, oferecendo soluções confiáveis para o fornecimento de energia temporária e acesso, com foco em excelência técnica, eficiência, agilidade e menor impacto ambiental.</p>
                    
                </div>
                <div className="col-12 col-sm-4 col-xxl-4  cor--laranja mb-5 mb-md-0">
                  <img src={obj7} className="img-fluid mb-3" alt="" />
                  <h3>VISÃO</h3>
                  <p>Ser a empresa mais ágil e eficiente em soluções confiáveis de energia temporária na América Latina.</p>
                    
                </div>
                <div className="col-12 col-sm-4 col-xxl-4   cor--laranja mb-5 mb-md-0">
                  <img src={obj8} className="img-fluid mb-3" alt="" />
                  <h3>VALORES</h3>
                  
                  <div className="boxlll2">Confiança</div>
                  <div className="boxlll2 ">Responsabilidade</div>

                  <div className="boxlll2">Foco no cliente</div>
                  <div className="boxlll2">Segurança</div>

                    
                </div>
                </div>
                </div>
              </div>
              <div className="row bg--laranja2">
                <div className="col-12 px-0" id="pessoas">
                  <img src={obj9} className="img-fluid" alt="" />
                  
                </div>
                <div className="col-12 col-md-10 offset-sm-1 cor--branco " >
                  <h1>Pessoas qualificadas,<br /> operação segura</h1>
                </div>
                <div className="col-12 col-md-6  ps-0  " >
                  <img src={obj10}className="img-fluid" alt="" />

                </div>
                <div className="col-12 col-md-4 offset-md-1 " >
                  <div className="mb-5 cor--branco">
                    <h1>587</h1>
                    <h4>colaboradores próprios ao final de 2024</h4>
                  </div>
                  <div className="mb-5 cor--branco">
                    <h1>68%</h1>
                    <h4>de satisfação do público interno</h4>
                  </div>
                  <div className="mb-5 cor--branco">
                    <h4>Mais de</h4>
                    <h1>8.000</h1>
                    <h4>horas de treinamentos internos via Universidade Tecnogera</h4>
                  </div>
                  <div className="mb-4 mt-5 ">
                    <button className="btnDownloadLerw">
                          <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23 34.753L11.3719 23.1281L13.6981 20.7624L21.3571 28.4214V0H24.6429V28.4214L32.2986 20.7657L34.6281 23.1281L23 34.753ZM5.30971 46C3.7961 46 2.53329 45.494 1.52129 44.482C0.509285 43.47 0.00219048 42.2061 0 40.6903V32.729H3.28571V40.6903C3.28571 41.1963 3.496 41.6607 3.91657 42.0834C4.33714 42.5062 4.80043 42.7165 5.30643 42.7143H40.6936C41.1974 42.7143 41.6607 42.504 42.0834 42.0834C42.5062 41.6629 42.7165 41.1985 42.7143 40.6903V32.729H46V40.6903C46 42.2039 45.494 43.4667 44.482 44.4787C43.47 45.4907 42.2061 45.9978 40.6903 46H5.30971Z" fill="#F58436"/>
                          </svg>
                          <p className="mb-0">Clique para ler a íntegra<br />do Relatório Anual 2024</p>
                        </button>
                  </div>

                </div>
                
              </div>
              <div className="row">
                <div className="col-12 col-md-10 offset-sm-1 " id="dupla-materialidade">
                  <h1 className="cor--laranja pt-5">Dupla materialidade</h1>
                </div>
                <div className="col-12 col-md-5 offset-md-1">
                  <p>Realizamos o processo de dupla materialidade, prática corporativa essencial para a adoção de boas práticas de sustentabilidade e ESG. Esse processo considera:</p>
                {/* box */}
                <div className="box--o">
                  <img src={obj11} className="img-fluid posIc" alt="" />
                  <p>A materialidade de impacto (olhar de dentro para fora) – avalia como a Tecnogera pode impactar o meio ambiente e a sociedade</p>
                </div>
                <div className="box--o">
                  <img src={obj12} className="img-fluid posIc" alt="" />
                  <p>A materialidade financeira (olhar de fora para dentro) – aborda como os aspectos socioambientais podem influenciar as atividades da empresa. </p>
                </div>
                
                </div>
                <div className="col-12 col-md-5 offset-md-1 pe-0">
                  <img src={obj13} className="img-fluid my-0 my-md-5 mt-5" alt="" />
                </div>
                <div className="col-12 col-sm-10 offset-sm-1 my-5">
                  <p>A partir do cruzamento dessas análises — que incluiu entrevistas individuais com públicos de relacionamento, consultas online e outras etapas — identificamos nove temas materiais que orientarão nossa governança e a estratégia de negócio nos próximos anos, com o objetivo de gerar valor compartilhado junto aos nossos públicos de interesse.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-10 offset-md-1 position-relative">
                  <div className="container my-2">
                    <Swiper
                      modules={[Navigation, Pagination, A11y]}
                      className="mySwiper"
                      spaceBetween={16}
                      slidesPerView={1}
                      loop
                      navigation
                      pagination={{
                        clickable: true,
                      }}
                      
                      breakpoints={{
                        768: { slidesPerView: 1 },
                          1024: { slidesPerView: 2 },
                          1366: { slidesPerView: 3 },
                          1440: { slidesPerView: 4 }
                      }}
                      style={{ width: '100%', minHeight: 140 }} // garanta altura mínima
                    >
                      <SwiperSlide>
                        <div className="boxlll3">Saúde, bem-estar e<br />segurança</div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="boxlll3">Qualidade e segurança<br />do produto</div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="boxlll3">Gestão de resíduos e rejeitos</div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="boxlll3">Inovação e tecnologia</div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="boxlll3">Mudanças climáticas</div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="boxlll3">Atração, desenvolvimento e<br />retenção de colaboradores</div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="boxlll3">Ética, integridade<br />e compliance</div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="boxlll3">Gestão de água<br />e efluentes</div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="boxlll3">Privacidade e<br />segurança de dados</div>
                      </SwiperSlide>
                    </Swiper>
                  </div>

                
                </div>
          </div>
          <div className="row">
  <div className="col-12 col-md-10 offset-md-1 position-relative">
    <button className="btnDownloadLerwb">
              <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 34.753L11.3719 23.1281L13.6981 20.7624L21.3571 28.4214V0H24.6429V28.4214L32.2986 20.7657L34.6281 23.1281L23 34.753ZM5.30971 46C3.7961 46 2.53329 45.494 1.52129 44.482C0.509285 43.47 0.00219048 42.2061 0 40.6903V32.729H3.28571V40.6903C3.28571 41.1963 3.496 41.6607 3.91657 42.0834C4.33714 42.5062 4.80043 42.7165 5.30643 42.7143H40.6936C41.1974 42.7143 41.6607 42.504 42.0834 42.0834C42.5062 41.6629 42.7165 41.1985 42.7143 40.6903V32.729H46V40.6903C46 42.2039 45.494 43.4667 44.482 44.4787C43.47 45.4907 42.2061 45.9978 40.6903 46H5.30971Z" fill="#F58436"/>
              </svg>
              <p className="mb-0">Clique para ler a íntegra do Relatório Anual 2024</p>
            </button>

  </div>
  

</div>
          
            </div>
        </section>
    )
}