export interface Rubric {
  title: string;
}

export interface Authority {
  name: string;
}

export interface User {
  login?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  authorities?: Authority[];
}

export interface Publication {
  id: number;
  title: string;
  text: string;
  publicationDate: Date;
  rubrics?: Rubric[];
  author?: User;
}
