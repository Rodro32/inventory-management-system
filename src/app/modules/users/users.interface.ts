export type TUser = {
  id: string;
  name:string;
  email:string;
  password: string;
  needsPasswordChange: boolean;
  role: 'admin' | 'supplier' | 'customer';
  isDeleted: boolean;
}