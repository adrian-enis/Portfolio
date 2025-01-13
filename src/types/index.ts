export type WorkData = {
  id: number;
  image: string;
  name: string;
  title: string;
  description: string;
  linkedin: string;
  // github:string;
  netlify: string;
};

export type Thumbnail = Pick<WorkData, "id" | "image" | "title">;

