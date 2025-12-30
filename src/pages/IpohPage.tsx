import PageContent from "@/components/PageContent";
import images from "@/data/ipoh_images.json";
import videos from "@/data/ipoh_videos.json";

const IpohPage = () => {
  return <PageContent images={images} videos={videos} />;
};

export default IpohPage;
