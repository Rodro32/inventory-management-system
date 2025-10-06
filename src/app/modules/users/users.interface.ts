export type TUser = {
  id: string;
  name:string;
  email:string;
  password: string;
  needsPasswordChange: string;
  role: 'admin' | 'supplier' | 'customer';
  isDeleted: boolean;
}