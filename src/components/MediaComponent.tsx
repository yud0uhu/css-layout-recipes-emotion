import React from "react";
import styled from "@emotion/styled";

const Media = styled.div`
  @media (min-width: 500px) {
    .media {
      display: grid;
      grid-template-columns: fit-content(200px) 1fr;
      grid-template-rows: 1fr auto;
      grid-template-areas:
        "image content"
        "image footer";
      grid-gap: 20px;
      margin-bottom: 4em;
    }
    .media-flip {
      grid-template-columns: 1fr fit-content(250px);
      grid-template-areas:
        "content image"
        "footer image";
    }
  }
`;

const MediaFlip = styled(Media)`
  @media (min-width: 500px) {
    grid-template-columns: 1fr fit-content(250px);
    grid-template-areas:
      "content image"
      "footer image";
  }
`;

const MediaFlipImage = styled(MediaFlip)`
  @media (min-width: 500px) {
    float: right;
    margin: 0 0 0 20px;
  }
`;

const Image = styled.div`
  @media (min-width: 500px) {
    grid-area: image;
  }
`;

const Content = styled.div`
  @media (min-width: 500px) {
    grid-area: content;
  }
`;

const Footer = styled.div`
  @media (min-width: 500px) {
    grid-area: footer;
  }
`;

const MediaComponent: React.FC = () => {
  return (
    <>
      <Media>
        <Image>
          <img
            src="https://mdn.github.io/css-examples/css-cookbook/balloon-sq2.jpg"
            alt="Balloons"
          />
        </Image>
        <Content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac
            porttitor elit lobortis ac. Vivamus ultrices sodales tellus et
            aliquam. Pellentesque porta sit amet nulla vitae luctus. Praesent
            quis risus id dolor venenatis condimentum.
          </p>
        </Content>
        <Footer> An optional footer goes here.</Footer>
      </Media>
      <Media>
        <Image>
          <img
            src="https://mdn.github.io/css-examples/css-cookbook/sharp-account_box-24px.svg"
            width="80px"
            alt="Account"
          />
        </Image>
        <Content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac
            porttitor elit lobortis ac. Vivamus ultrices sodales tellus et
            aliquam. Pellentesque porta sit amet nulla vitae luctus. Praesent
            quis risus id dolor venenatis condimentum.
          </p>
        </Content>
        <Footer></Footer>
      </Media>
      <MediaFlip>
        <MediaFlipImage>
          <img
            src="https://mdn.github.io/css-examples/css-cookbook/balloon-sq2.jpg"
            alt="Balloons"
          />
        </MediaFlipImage>
        <Content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac
            porttitor elit lobortis ac. Vivamus ultrices sodales tellus et
            aliquam. Pellentesque porta sit amet nulla vitae luctus. Praesent
            quis risus id dolor venenatis condimentum.
          </p>
        </Content>
        <Footer></Footer>
      </MediaFlip>
      <Media>
        <Image>
          <img
            src="https://mdn.github.io/css-examples/css-cookbook/balloon-sq2.jpg"
            alt="Balloons"
          />
        </Image>
        <Content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac
            porttitor elit lobortis ac. Vivamus ultrices sodales tellus et
            aliquam. Pellentesque porta sit amet nulla vitae luctus. Praesent
            quis risus id dolor venenatis condimentum.
          </p>
        </Content>
        <Footer></Footer>
        <Media>
          <Image>
            <img
              src="https://mdn.github.io/css-examples/css-cookbook/balloon-sq2.jpg"
              alt="Balloons"
            />
          </Image>
          <Content>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vehicula vitae ligula sit amet maximus.{" "}
            </p>
          </Content>
          <Footer></Footer>
        </Media>
      </Media>
    </>
  );
};
export default MediaComponent;
