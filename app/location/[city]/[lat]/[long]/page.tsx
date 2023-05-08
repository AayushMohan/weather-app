type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

const WeatherPage = ({ params: { city, lat, long } }: Props) => {
  return <div>Welcome to the weather page: {city}</div>;
};

export default WeatherPage;
