import PageContent from "@/components/PageContent";
import images from "@/data/kuching_images.json";
import videos from "@/data/kuching_videos.json";

const KuchingPage = () => {
  return <PageContent images={images} videos={videos} />;
};

export default KuchingPage;
