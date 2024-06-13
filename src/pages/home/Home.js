import { useFetch } from "../../hooks/useFetch";
import "./Home.css";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:3030/recipes");
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">로딩중...</p>}
      {data && data.map((recipe) => <h2 key={recipe.id}>{recipe.title}</h2>)}
    </div>
  );
};

export default Home;
