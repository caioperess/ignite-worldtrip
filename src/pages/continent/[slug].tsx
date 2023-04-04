import { ContinentBanner } from "@/components/Continent/ContinentBanner";
import { ContinentCities } from "@/components/Continent/ContinentCities";
import { ContinentDescription } from "@/components/Continent/ContinentDescription";
import { Header } from "@/components/Header";
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import { getPrismicClient } from "prismicio";
import { ContinentDTO, ContinentProps } from "@/dtos/continent";

type ContinentPageProps = {
  continent: ContinentProps;
};

export default function ContinentPage({ continent }: ContinentPageProps) {
  return (
    <Box>
      <Head>
        <title>Worldtrip | {continent.title}</title>
      </Head>

      <Header />

      <ContinentBanner continent={continent} />

      <ContinentDescription continent={continent} />

      <ContinentCities continent={continent} />
    </Box>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as any;
  const prismic = getPrismicClient();

  const response = await prismic.getByUID("continent", String(slug), {});
  const data = response.data as ContinentDTO;

  const continent: ContinentProps = {
    slug: response.uid ?? "",
    summary: data.summary,
    slide: data.slide.url,
    title: data.title,
    description: data.description,
    banner: data.banner.url,
    cities: data.cities,
    countries: data.countries,
    languages: data.languages,
    cities_list: data.cities_list.map((citie) => ({
      country: citie.country,
      flag: citie.flag.url,
      thumb: citie.thumb.url,
      title: citie.title,
    })),
  };

  return {
    props: {
      continent,
    },
    revalidate: 1800,
  };
};
