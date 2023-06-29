import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

// eslint-disable-next-line react/prop-types
const ImageWithBlurhash = ({ src, hash, placeholder }) => {
  const [imageLoading, setImageLoading] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoading(true);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      {!imageLoading && placeholder}
      {imageLoading && (
        <>
          <div
            style={{
              width: "100%",
              height: "120px",
              display: "none",
            }}
          >
            <Blurhash
              hash={hash}
              width="400px"
              height="180px"
              resolutionX={32}
              resolutionY={32}
              punch={1}
            />
          </div>
          <img
            src={src}
            alt="Image"
            draggable={false}
            loading="lazy"
            style={{
              display: "inline",
              transition: "opacity 0.5s ease-in-out",
              height: "180px",
              flex: "1 0 auto",
              zIndex: 2,
            }}
            onLoad={() => {
              setImageLoading(true);
            }}
          />
        </>
      )}
    </>
  );
};

export default ImageWithBlurhash;
