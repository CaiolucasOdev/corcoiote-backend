import type { User } from "../types/user.type.ts";

const users: User[] = [{
  id: 1,
  name: 'Caio',
  email: 'caio@email.com',
  password: crypto.randomUUID()
}, {
  id: 2,
  name: 'ceci',
  email: 'ceci@email.com',
  password: crypto.randomUUID()
}, {
  id: 3,
  name: 'ray',
  email: 'ray@mail.com',
  password: crypto.randomUUID()
}];

export default users; 