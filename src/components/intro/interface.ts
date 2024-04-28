export type IntroResumeProps = {
  href: string;
  download?: string;
}

export type IntroInterfaceProps = {
  name: string;
  profile: string;
  resume: IntroResumeProps;
}