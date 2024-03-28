export interface IApiResponse {
  data: null | string | number | Object;
  code: number;
  error?: string;
}

export class API {
  static success(data: string | number | Object): IApiResponse {
    return { data, code: 200 };
  }

  static failure(why: string, code: number): IApiResponse {
    return { data: null, error: why, code };
  }
}
