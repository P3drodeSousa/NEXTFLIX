import { HeaderContainer, Infos, SubInfoContainer } from "./style";

export const Header = ({ data }) => {
  const { title, release_date, backdrop_path: img } = data;
  const date = release_date.split("-")[0];
  return (
    <HeaderContainer url={`https://image.tmdb.org/t/p/w1280${img}`}>
      <Infos>
        <div>
          <h2>{title}</h2>
        </div>

        <SubInfoContainer>
          <span>{date}</span>
          <button>Read More</button>
        </SubInfoContainer>
      </Infos>
    </HeaderContainer>
  );
};
