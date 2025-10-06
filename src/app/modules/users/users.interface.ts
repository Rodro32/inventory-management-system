export type TUser = {
  id: string;
  name:string;
  email:string;
  password: string;
  needsPasswordChange: boolean;
  role: 'admin' | 'vendor';
  isDeleted: boolean;
}