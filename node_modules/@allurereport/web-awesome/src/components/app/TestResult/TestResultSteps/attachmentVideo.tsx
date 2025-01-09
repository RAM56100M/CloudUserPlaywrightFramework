import { Spinner } from "@/components/commons/Spinner";

export const AttachmentVideo = ({ attachment }) => {
  if (!attachment) {
    return <Spinner />;
  }
  return (
    <video controls loop muted>
      <source src={attachment?.src} type={attachment?.contentType} />
    </video>
  );
};
