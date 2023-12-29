import "./App.css";
import Card from "../components/card";
import { useGetRoverPhotos } from "../hooks/useGetRoverPhotos";

function App() {
  const { data } = useGetRoverPhotos();

  return (
    <div className="App">
      <h1>Фотографии с марсоходов</h1>
      {data?.photos.map((photo) => (
        <Card
          key={photo.id}
          name={photo.rover.name}
          total={photo.rover.total_photos}
          date={photo.earth_date}
          camera={photo.camera.name}
          src={photo.img_src}
        />
      ))}
    </div>
  );
}

export default App;
