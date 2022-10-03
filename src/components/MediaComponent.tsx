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

const Image = styled.image`
  @media (min-width: 500px) {
    grid-area: image;
  }
`;

const Content = styled.div`
  @media (min-width: 500px) {
    grid-area: content;
  }
`;

const Footer = styled.footer`
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
      <Media>
        <MediaFlip>
          <Image>
            <img
              src="https://mdn.github.io/css-examples/css-cookbook/balloon-sq2.jpg"
              alt="Balloons"
            />
          </Image>
          <Content>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum,
              ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et
              aliquam. Pellentesque porta sit amet nulla vitae luctus. Praesent
              quis risus id dolor venenatis condimentum.
            </p>
          </Content>
          <Footer></Footer>
        </MediaFlip>
      </Media>
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
