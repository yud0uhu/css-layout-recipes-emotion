import styled from "@emotion/styled";

export const Media = styled.div`
  @media (min-width: 500px) {
    display: grid;
    grid-template-columns: fit-content(200px) 1fr;
    grid-template-rows: 1fr auto;
    grid-template-areas:
      "image content"
      "image footer";
    grid-gap: 20px;
    margin-bottom: 4em;
  }
`;

export const MediaFlip = styled(Media)`
  @media (min-width: 500px) {
    grid-template-columns: 1fr fit-content(250px);
    grid-template-areas:
      "content image"
      "footer image";
  }
`;

export const Image = styled.image`
  @media (min-width: 500px) {
    grid-area: image;
  }
`;

export const MediaFlipImage = styled(Image)`
  @media (min-width: 500px) {
    float: right;
    margin: 0 0 0 20px;
  }
`;

export const Content = styled.div`
  @media (min-width: 500px) {
    grid-area: content;
  }
`;

export const Footer = styled.footer`
  @media (min-width: 500px) {
    grid-area: footer;
  }
`;
