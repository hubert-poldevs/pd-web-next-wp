import { NextPage } from "next";
import axios from "axios";
import HeroSoftware from "@/components/sections/HeroSoftware";
import Layout from "@/components/_shared/navigation/Layout";
import FormSoftware from "@/components/sections/FormSoftware";
import { Box, Typography } from "@mui/material";

const SoftwarePage: NextPage = ({ posts }: any) => {
  return (
    <>
      <Layout title="poldevs" description="desc">
        <HeroSoftware text={posts.acf.section_hero.text} />
        <Box>
          <Typography variant="h3" align="center" sx={{ my: 3 }}>
            Zamów konsultację
          </Typography>
          <FormSoftware />
        </Box>
      </Layout>
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get(
    "http://web-wp.poldevs.com/wp-json/wp/v2/pages/46"
  );

  return {
    props: {
      posts: res.data,
    },
  };
};

export default SoftwarePage;
