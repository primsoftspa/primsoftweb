import { useRef } from 'react';
import { mailTo } from '../../utils/utilsFormat';

type Props = {
  name: string;
  profesion?: string;
  src?: string;
  linkedin: string;
  web: string;
  email: string;
};

/*=============== SHOW SOCIAL NETWORKS ===============*/


export default ({name, profesion, src, linkedin, web, email}: Props) => {

  const socialRef = useRef<HTMLDivElement | null>(null);
  const showSocial = () => {
    if (socialRef.current) {
      // Si la clase 'animation' existe, añade 'down-animation'
      if (socialRef.current.classList.contains('animation')) {
        socialRef.current.classList.add('down-animation');
        setTimeout(() => {
          socialRef.current?.classList.remove('down-animation');
        }, 1000);
      }
      // Alterna la clase 'animation'
      socialRef.current.classList.toggle('animation');
    }
  };

  return (
    <div className="card__user">
      <div className="card__border">
        <img src={src || ""} className="card__img" />
      </div>

      <h3 className="card__name">{name}</h3>
      <span className="card__profession">{profesion}</span>

      <div className="card__social" id="card-social" ref={socialRef}>
        <div className="card__social-control">
           {/* Toggle Button  */}
          <div className="card__social-toggle" id="card-toggle" onClick={showSocial}>
            <i className="fa-solid fa-circle-plus"></i>
          </div>

          <span className="card__social-text">Contacto</span>

          {/* Card Social  */}
          <ul className="card__social-list">
            <a href={linkedin} target="_blank" className="card__social-link">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href={web} target="_blank" className="card__social-link">
              <i className="fa-solid fa-globe"></i>
            </a>
            <a href={mailTo(email, 'Consulta sobre proyecto')} target="_blank" className="card__social-link">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  )
}