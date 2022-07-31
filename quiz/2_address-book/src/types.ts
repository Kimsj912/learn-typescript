export interface PhoneNumberDictionary {
  [phone: string]: { // 키값을 정하지 않았을때 여러가지 타입을 받을 수 있다
    num: number; 
  };
}

export interface Contact {
    name: string;
    address: string;
    phones: PhoneNumberDictionary;
}
  
export enum PhoneType {
  home, office, studio,
}
