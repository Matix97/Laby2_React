export const GET_USERS = "api/users";

export class ApiCaller {
  call(object, url) {
    switch (url) {
      case GET_USERS:
        return [
          {
            id: "1",
            name: "Adddd"
          },
          {
            id: "2",
            name: "Adddd"
          },
          {
            id: "3",
            name: "Adddd"
          },
          {
            id: "4",
            name: "Adddd"
          }
        ];
      default:
        return {};
    }
  }
}
