export interface Data {
  key?: string;
  name: string;
  code: string;
  description: string;
  created?: Date;
}

export interface ProjectType {
  development: string;
  validation: string;
}
