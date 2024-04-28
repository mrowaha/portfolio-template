export type HeroImageProps = {
  src: string;
  alt?: string;
}

export type HeroBackgroundProps = {
  src: string;
}

export type HeroProps = {
  img: HeroImageProps;
  bg? : HeroBackgroundProps;
  title?: string;
}