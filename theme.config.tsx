// import { useRouter } from "next/router";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <h1 style={{ fontSize: 24, fontWeight: 600 }}>Atros</h1>,
  project: {
    link: "https://github.com/kodkafa/atros/",
  },
  docsRepositoryBase: "https://github.com/kodkafa/atros",
  footer: {
    text: "Atros - Automation for the Rest of Us",
  },
  head: <head></head>,
  useNextSeoProps() {
    // const { asPath } = useRouter();
    // if (asPath !== "/") {
    //   return {
    //   };
    // }

    return {
      titleTemplate: "%s",
      description: "Atros documentation",
    };
  },
};

export default config;
