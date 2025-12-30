import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const cld = new Cloudinary({
  cloud: { cloudName: "dvoyoxjtu" },
});

type ImageViewerProps = {
  publicId: string;
  alt?: string;
};

export const ImageViewer = ({ publicId, alt }: ImageViewerProps) => {
  const image = cld.image(publicId).format("auto").quality("auto");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <AdvancedImage cldImg={image} alt={alt} loading="lazy" className="cursor-zoom-in rounded-md object-cover" />
      </DialogTrigger>
      <DialogContent className="bg-black/90 p-2">
        <AdvancedImage cldImg={image} alt={alt} loading="lazy" className="object-contain" />
      </DialogContent>
    </Dialog>
  );
};

export default ImageViewer;
