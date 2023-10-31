// 타입 만들기
export type Restaurant = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[];
};

// 타입 세분화
export type Address = {
  city: string;
  detail: string;
  zipCode: number;
};

export type Menu = { name: string; price: number; category: string };

//빼주세요
export type AddressWithoutZip = Omit<Address, "zipCode">;

export type RestaurantOnlyCategory = Pick<Restaurant, "category">;

export type ApiResponse<T> = {
  data: T[];
  totalPage: number;
  page: number;
};


export type RestaurantResponse = ApiResponse<Restaurant>;
export type MenuResponse = ApiResponse<Menu>;
