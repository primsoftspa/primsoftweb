import Card from "react-bootstrap/Card";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { popupConfig } from "../../utils/settingPopup";
import { mailTo } from "../../utils/utilsFormat";

type Props = {
  image?: string;
  image2?: string;
  title?: string;
  description?: string;
  light?: boolean;
};

export default ({
  image,
  image2,
  title,
  description,
  light = false,
}: Props) => {
  const MySwal = withReactContent(Swal);

  const showModal = () => {
    const sendMail = mailTo(
      "contacto@primsoft.cl",
      `Cotizar ${title}`
    );

    MySwal.fire({
      ...popupConfig,
      imageUrl: image2,
      title: title,
      html: `
      <p>${description}</p>
      <a href="${sendMail}"
        target="_blank"
        class="btn btn-dark w-100 my-3">
        Cotizar 
      </a>
    `,
    });
  };

  return (
    <Card
      className={
        light
          ? "pointer bg-dark text-gray border-0 w-100 shadow"
          : "h-100 pointer bg-secondary text-gray border-0 hover-card"
      }
      onClick={showModal}
      style={
        {
          height: "300px",
          borderRadius: "25px"
        }
      }
    >
      <Card.Img
        variant="top"
        src={image}
        className="d-block card-img-service w-75 mx-auto m-3"
        style={{
          objectFit: "contain",
          height: "180px"
        }}
      />
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};
