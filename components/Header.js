export const Header = ({ data }) => {
  const random = Math.floor(Math.random() * (19 - 0) + 0);
  console.log(random, data.results[random]);
  return (
    <header>
      <h1>Header</h1>
    </header>
  );
};
