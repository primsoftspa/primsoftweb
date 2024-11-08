import Card from "react-bootstrap/Card";

type Props = {
  image?: string;
  image2?: string;
  title?: string;
  direction?: string;
  subtitle?: string;
  light?: boolean;
};

export default ({
  image,
  title,
  subtitle,
  direction
}: Props) => {

  const itemClass = `scroll-items-${direction} bg-transparent py-2 px-3 align-items-center sm-card`;

  return (
    <Card className={itemClass} style={{
      display: "flex",
      flexDirection: "row",
      height: "80px",
      width: "200px",
      borderRadius: "15px",
      overflow: "hidden",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "#ccc3",
      boxShadow: "1px 0 8px #ccc2 inset",
      margin: "10px"
    }}>
      <Card.Img
        src={image}
        style={{
          display: "block",
          height: "35px",
          width: "35px",
          flexGrow: "0"
        }}
      />
      <Card.Body className="d-flex flex-column justify-content-start">
        <Card.Title className="text-light">{title}</Card.Title>
        <Card.Text className="text-gray">{subtitle}</Card.Text>
      </Card.Body>

    </Card>
  );
};

