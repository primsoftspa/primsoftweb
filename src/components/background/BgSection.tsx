import React, { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import TypedText from "../ui/Typed/TypedText";

type Props = {
  title: string;
  phrases: string[];
  colors: string[];
  image: string;
};

export default ({ title, phrases, colors, image }: Props) => {

  const [source, setSource] = useState("")
  const [loadStyle, setLoadStyle] = useState({
    backgroundImage: "linear-gradient(40deg, rgba(10, 0, 0, 1) 30%, #ccc7",
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
        backgroundImage: `linear-gradient(290deg, rgba(210, 210, 220, .2) 10%, rgba(10, 20, 10, 1) 70%), url(${source})`
      })
    }
  }, [source])

  return (
    <Stack
      style={loadStyle}
    >
      <h2
        className="display-4 fw-bold text-light text-uppercase">
        {title}
      </h2>
      <h4 className="mx-4">
        <TypedText phrases={phrases} colors={colors} />
      </h4>
    </Stack>
  );
};

