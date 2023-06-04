import { getSinglePage } from "@/lib/getPage";

const Home = async () => {
  const page = await getSinglePage(41);

  return (
    <main>
      <h1>Home page</h1>
      <p>{page.content.rendered}</p>
    </main>
  );
};

export default Home;
