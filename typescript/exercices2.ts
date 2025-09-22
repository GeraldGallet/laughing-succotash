const reverseArray = <T>(array: T[]): T[] => {
  return array.reverse()
}

type UserBook = {
  title: string;
  year: number;
}

type User = {
  username: string;
  age: number;
  mail: string;
  phoneNumber?: string
  books: UserBook[]
}
