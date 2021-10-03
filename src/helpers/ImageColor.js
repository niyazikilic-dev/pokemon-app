import { average } from "color.js";

export const imageColor = async (img) => {
  const color = await average(img, { format: "hex" });
  return color;
};
