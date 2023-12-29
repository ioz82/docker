export const fetchRoverPhotos = async () =>
  fetch(
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=3300&api_key=x4wYaBeEkkIrohFdHYESaqVUamI4aVponiOwWiVG"
  ).then((response) => response.json());
