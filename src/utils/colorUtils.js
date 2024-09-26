// src/utils/colorUtils.js
export const generateRandomColors = (numColors) => {
  return Array.from({ length: numColors }, () => {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  });
};
