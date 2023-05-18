import { encode } from "blurhash";

const generateBlurhash = async (imageSrc) => {
  const image = new Image();
  image.src = imageSrc;

  return new Promise((resolve) => {
    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = new Uint8Array(imageData.data.buffer);

      const hash = encode(pixels, canvas.width, canvas.height, 4, 4);
      resolve(hash);
    };
  });
};

export default generateBlurhash;
