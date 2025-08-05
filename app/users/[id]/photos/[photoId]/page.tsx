import React from "react";
interface Props {
  params: { photoId: number; id: number };
}
const PhotoDetails = ({ params: { photoId, id } }: Props) => {
  return (
    <div>
      this is photo {photoId} related to user {id}
    </div>
  );
};

export default PhotoDetails;
