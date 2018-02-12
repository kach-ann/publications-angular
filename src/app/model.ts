export interface Rubric {
  title: string;
}

export interface User {
  login?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  authorities?: string[];
}

export interface Publication {
  id: number;
  title: string;
  text: string;
  publicationDate: Date;
  rubrics?: Rubric[];
  author?: User;
}
