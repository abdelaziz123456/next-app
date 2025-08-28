"use client";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import React from "react";

const UploadPage = () => {
  const [publicId, setPublicId] = React.useState<string | null>(null);
  interface UploadResult {
    info: { public_id: string };
  }
  return (
    <div>
      {publicId && (
        <CldImage
          width="300"
          height="300"
          src={publicId}
          alt="uploaded image"
        />
      )}
      <CldUploadWidget
        uploadPreset="general"
        onSuccess={(result) => {
          const res = result as UploadResult;

          console.log(res);
          setPublicId(res.info.public_id);
        }}
      >
        {({ open }) => {
          return <button onClick={() => open()}>Upload an Image</button>;
        }}
      </CldUploadWidget>
    </div>
  );
};

export default UploadPage;
