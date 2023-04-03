import axios from "axios";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Layout from "@/components/_shared/navigation/Layout";
import { Post } from "@/types/post";
import { NextPage } from "next";

interface HomePageProps {
  post: Post;
}

const HomePage: NextPage<HomePageProps> = ({ post }) => {
  console.log("post home", post);
  return (
    <>
      <Layout title="poldevs" description="desc">
        <Hero title={post?.acf?.section_hero?.text} />
        <Services post={post} />
      </Layout>
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get(
    "http://web-wp.poldevs.com/wp-json/wp/v2/pages/2"
  );

  return {
    props: {
      post: res.data,
    },
  };
};

export default HomePage;
