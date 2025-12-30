import ImageViewer from "@/components/ImageViewer";
import ScrollToTop from "@/components/ScrollToTop";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ImageItem = {
  id: string;
  alt?: string;
};

type PageContentProps = {
  images: ImageItem[];
  videos: string[];
};

export const PageContent = ({ images, videos }: PageContentProps) => {
  return (
    <>
      <Tabs defaultValue="image" className="p-4">
        <TabsList>
          <TabsTrigger value="image">Image 照片</TabsTrigger>
          <TabsTrigger value="video">Video 视频</TabsTrigger>
        </TabsList>
        <TabsContent value="image">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {images.map((img) => (
              <ImageViewer key={img.id} publicId={img.id} alt={img.alt} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="video">
          <div className="grid md:grid-cols-2 gap-4">
            {videos.map((video) => (
              <div className="w-full aspect-video">
                <iframe
                  src={video}
                  className="w-full h-full rounded-md"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      <ScrollToTop />
    </>
  );
};

export default PageContent;
