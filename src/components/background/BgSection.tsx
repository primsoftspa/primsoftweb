import React, { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";

type Props = {
  title: string;
  subtitle?: string;
  image: string;
};

export default ({ title, subtitle, image }: Props) => {

  const [source, setSource] = useState("")
  const [loadStyle, setLoadStyle] = useState({
    backgroundImage: "linear-gradient(290deg, rgba(10, 0, 0, 1) 20%, rgba(240, 210, 40, 1)) 80%",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    padding: "120px 0"
  })
  useEffect(() => {
    const img = new Image()
    img.src = image || ""
    img.onload = () => {
      setSource(image)
      setLoadStyle({
        ...loadStyle,
        backgroundImage: `linear-gradient(290deg, rgba(210, 210, 220, .2) 10%, rgba(10, 20, 10, 1) 80%), url(${source})`
      })
    }
  }, [source])

  return (
    <Stack
      style={loadStyle}
    >
      <h2
        className="display-4 m-3 fw-bold text-light text-uppercase">
        {title}
      </h2>
      <h4 className="px-3 m-3" style={{ color: "#ddd" }}>
        {subtitle ? subtitle : 'Asociación Gremial de Dueños de Camiones de Coquimbo'}
      </h4>
    </Stack>
  );
};

