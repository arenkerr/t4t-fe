interface User {
  id: string;
  username: string;
  password: string;
  email: string;
  avatarUrl?: string;
  bio?: string;
}

export type { User };
