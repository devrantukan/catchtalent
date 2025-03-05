export const videoDescriptions: { [key: string]: string } = {
  "/videos/123456789":
    "A compelling recruitment video showcasing our expertise in talent acquisition.",
  // Add more video descriptions as needed
};

export const getVideoDescription = (uri: string): string => {
  return (
    videoDescriptions[uri] ||
    "Catch Talent - Professional recruitment solutions."
  );
};
