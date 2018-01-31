export interface Rubric {
  title: string;
}

export enum Roles {
  ADMIN,
  USER
}

export interface Role {
  name: string;
}

export interface User {
  login?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  roles?: Role[];
}

export interface Publication {
  id: number;
  title: string;
  text: string;
  publicationDate: Date;
  rubrics?: Rubric[];
  author?: User;
}
