import mensagem from './images/mensagem.png';

export default function Message() {
    return (
        <section id="mensagem">
            <div className="container-fluid" >
                <div className="row">
                    <div className="col-12 col-sm-11 col-xxl-11 offset-sm-1 mt-5 cor--laranja mb-4">
                    <h1>Mensagem da Administração</h1>
                    </div>
                    <div className="col-12 col-sm-5  col-xxl-5 offset-sm-1 mb-sm-0 mb-5">
                    <p>O Relatório 2024 marca um capítulo de maturidade para a Tecnogera, orientado por inovação, sustentabilidade e governança. Consolidamos nosso modelo de negócios e avançamos na transição energética com a substituição da frota de plataformas a diesel por modelos 100% elétricos.</p><p>
                        Expandimos nossa presença pelo país e modernizamos o Centro de Controle Operacional com novas tecnologias e digitalização. Apresentamos sistemas móveis de armazenamento de energia e novas plataformas de trabalho em altura, fortalecendo nossa posição como referência em soluções sustentáveis.</p><p>
                        Demos início ao processo de abertura de capital na CVM, e realizamos a emissão da primeira debênture pública da nossa história, reafirmando nossa solidez financeira. O investimento em pessoas permaneceu como pilar estratégico, com a Universidade Tecnogera impulsionando o desenvolvimento e o engajamento das equipes que constroem nosso futuro.</p><p>
                        Seguimos confiantes em crescer com ética, foco no cliente e compromisso com o desenvolvimento das comunidades onde atuamos.</p>
                        <button className="btnDownloadLer"><svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 34.753L11.3719 23.1281L13.6981 20.7624L21.3571 28.4214V0H24.6429V28.4214L32.2986 20.7657L34.6281 23.1281L23 34.753ZM5.30971 46C3.7961 46 2.53329 45.494 1.52129 44.482C0.509285 43.47 0.00219048 42.2061 0 40.6903V32.729H3.28571V40.6903C3.28571 41.1963 3.496 41.6607 3.91657 42.0834C4.33714 42.5062 4.80043 42.7165 5.30643 42.7143H40.6936C41.1974 42.7143 41.6607 42.504 42.0834 42.0834C42.5062 41.6629 42.7165 41.1985 42.7143 40.6903V32.729H46V40.6903C46 42.2039 45.494 43.4667 44.482 44.4787C43.47 45.4907 42.2061 45.9978 40.6903 46H5.30971Z" fill="white"/>
                        </svg>
                        <p className="mb-0">Clique para ler a íntegra<br />do Relatório Anual 2024</p></button>
                    </div>
                    <div className="col-12 col-sm-6 col-xxl-6 px-0 d-flex align-items-start justify-content-end px-0">
                    <img src={mensagem} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    )
}