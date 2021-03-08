export interface ChildrenProps {
  children: any;
}

export interface Product {
  title: string;
  id?: number;
  count?: number;
}

export interface Products {
  [index: number]: Product;
}

export interface InputProps {
  type: string;
  placeholder?: string;
  value?: string | number;
  key?: number;
  changed?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ButtonProps {
  type: string;
  // value: number;
  click?: () => void;
}
