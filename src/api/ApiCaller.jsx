export const GET_USERS = "api/users";

export class ApiCaller {
  call(object, url) {
    switch (url) {
      case GET_USERS:
        return fetch(GET_USERS);
      default:
        return {};
    }
  }
}
