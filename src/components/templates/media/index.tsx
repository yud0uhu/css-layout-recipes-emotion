import * as Styled from "../media/__asset/style/index";

const Media: React.FC = () => {
  return (
    <>
      <Styled.Media>
        <Styled.Image>
          <img
            src="https://mdn.github.io/css-examples/css-cookbook/balloon-sq2.jpg"
            alt="Balloons"
          />
        </Styled.Image>
        <Styled.Content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac
            porttitor elit lobortis ac. Vivamus ultrices sodales tellus et
            aliquam. Pellentesque porta sit amet nulla vitae luctus. Praesent
            quis risus id dolor venenatis condimentum.
          </p>
        </Styled.Content>
        <Styled.Footer> An optional footer goes here.</Styled.Footer>
      </Styled.Media>
      <Styled.Media>
        <Styled.Image>
          <img
            src="https://mdn.github.io/css-examples/css-cookbook/sharp-account_box-24px.svg"
            width="80px"
            alt="Account"
          />
        </Styled.Image>
        <Styled.Content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac
            porttitor elit lobortis ac. Vivamus ultrices sodales tellus et
            aliquam. Pellentesque porta sit amet nulla vitae luctus. Praesent
            quis risus id dolor venenatis condimentum.
          </p>
        </Styled.Content>
        <Styled.Footer></Styled.Footer>
      </Styled.Media>
      <Styled.MediaFlip>
        <Styled.MediaFlipImage>
          <img
            src="https://mdn.github.io/css-examples/css-cookbook/balloon-sq2.jpg"
            alt="Balloons"
          />
        </Styled.MediaFlipImage>
        <Styled.Content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac
            porttitor elit lobortis ac. Vivamus ultrices sodales tellus et
            aliquam. Pellentesque porta sit amet nulla vitae luctus. Praesent
            quis risus id dolor venenatis condimentum.
          </p>
        </Styled.Content>
        <Styled.Footer></Styled.Footer>
      </Styled.MediaFlip>
      <Styled.Media>
        <Styled.Image>
          <img
            src="https://mdn.github.io/css-examples/css-cookbook/balloon-sq2.jpg"
            alt="Balloons"
          />
        </Styled.Image>
        <Styled.Content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac
            porttitor elit lobortis ac. Vivamus ultrices sodales tellus et
            aliquam. Pellentesque porta sit amet nulla vitae luctus. Praesent
            quis risus id dolor venenatis condimentum.
          </p>
        </Styled.Content>
        <Styled.Footer></Styled.Footer>
        <Styled.Media>
          <Styled.Image>
            <img
              src="https://mdn.github.io/css-examples/css-cookbook/balloon-sq2.jpg"
              alt="Balloons"
            />
          </Styled.Image>
          <Styled.Content>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vehicula vitae ligula sit amet maximus.{" "}
            </p>
          </Styled.Content>
          <Styled.Footer></Styled.Footer>
        </Styled.Media>
      </Styled.Media>
    </>
  );
};
export default Media;
