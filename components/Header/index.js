import { HeaderContainer, Infos, SubInfoContainer } from "./style";

export const Header = ({ data, selected }) => {
  const { title, release_date, backdrop_path: img, id } = data;
  const date = release_date.split("-")[0];

  const onClick = (id) => {
    selected(id);
  };

  return (
    <HeaderContainer url={`https://image.tmdb.org/t/p/w1280${img}`}>
      <Infos>
        <div>
          <h2>{title}</h2>
        </div>

        <SubInfoContainer>
          <span>{date}</span>
          <button onClick={() => onClick(id)}>Read More</button>
        </SubInfoContainer>
      </Infos>
    </HeaderContainer>
  );
};
