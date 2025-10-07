import { useEffect, useState } from "react";

import firstInvitationCardImg from "@/assets/19th-invitation-card.jpeg";
import specialInvitationCardImg from "@/assets/24th-invitation-card.png";
import secondInvitationCardImg from "@/assets/25th-invitation-card.png";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useRole } from "@/contexts/Role/useRole";
import { roleMapping } from "@/data/roles";

const rolesWithFirst = new Set([roleMapping.colleagues]);
const rolesWithSecond = new Set([roleMapping.relativesIpoh, roleMapping.brother, roleMapping.sister]);
const rolesWithSpecial = new Set([roleMapping.noWeddingDinner]);

const ImagePopup = () => {
  const { value } = useRole();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const today = new Date();
  const dayOfMonth = today.getDate();

  const images: string[] = [];

  if (value === roleMapping.admin) {
    if (dayOfMonth <= 19) {
      images.push(firstInvitationCardImg);
    } else if (dayOfMonth <= 24) {
      images.push(specialInvitationCardImg);
    } else {
      images.push(secondInvitationCardImg);
    }
  } else if (value === roleMapping.relativesKuchingIpoh) {
    images.push(dayOfMonth <= 19 ? firstInvitationCardImg : secondInvitationCardImg);
  } else {
    if (rolesWithFirst.has(value)) images.push(firstInvitationCardImg);
    if (rolesWithSecond.has(value)) images.push(secondInvitationCardImg);
    if (rolesWithSpecial.has(value)) images.push(specialInvitationCardImg);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="p-0">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`invitation card ${idx + 1}`} className="rounded-lg w-full h-auto" />
        ))}
      </DialogContent>
    </Dialog>
  );
};

export default ImagePopup;
