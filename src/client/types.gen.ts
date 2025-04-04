// This file is auto-generated by @hey-api/openapi-ts

export type BodyLoginForAccessTokenUsersTokenPost = {
    grant_type?: string | null;
    username: string;
    password: string;
    scope?: string;
    client_id?: string | null;
    client_secret?: string | null;
};

export type GeminiInput = {
    image: string;
};

export type GeminiResponseModel = {
    time: string;
    date: string;
    entry_or_exit: string;
};

export type HttpValidationError = {
    detail?: Array<ValidationError>;
};

export type Token = {
    access_token: string;
    token_type: string;
};

export type UserLogin = {
    email: string;
    nickname: string;
};

export type UserRegister = {
    email: string;
    nickname: string;
    password: string;
};

export type ValidationError = {
    loc: Array<string | number>;
    msg: string;
    type: string;
};

export type RegisterUserUsersRegistrationPostData = {
    body: UserRegister;
    path?: never;
    query?: never;
    url: '/users/registration';
};

export type RegisterUserUsersRegistrationPostErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type RegisterUserUsersRegistrationPostError = RegisterUserUsersRegistrationPostErrors[keyof RegisterUserUsersRegistrationPostErrors];

export type RegisterUserUsersRegistrationPostResponses = {
    /**
     * Successful Response
     */
    201: unknown;
};

export type LoginForAccessTokenUsersTokenPostData = {
    body: BodyLoginForAccessTokenUsersTokenPost;
    path?: never;
    query?: never;
    url: '/users/token';
};

export type LoginForAccessTokenUsersTokenPostErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type LoginForAccessTokenUsersTokenPostError = LoginForAccessTokenUsersTokenPostErrors[keyof LoginForAccessTokenUsersTokenPostErrors];

export type LoginForAccessTokenUsersTokenPostResponses = {
    /**
     * Successful Response
     */
    200: Token;
};

export type LoginForAccessTokenUsersTokenPostResponse = LoginForAccessTokenUsersTokenPostResponses[keyof LoginForAccessTokenUsersTokenPostResponses];

export type ReadUserMeUsersMeGetData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/users/me';
};

export type ReadUserMeUsersMeGetResponses = {
    /**
     * Successful Response
     */
    200: UserLogin;
};

export type ReadUserMeUsersMeGetResponse = ReadUserMeUsersMeGetResponses[keyof ReadUserMeUsersMeGetResponses];

export type PingUsersPingGetData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/users/ping';
};

export type PingUsersPingGetResponses = {
    /**
     * Successful Response
     */
    200: string;
};

export type PingUsersPingGetResponse = PingUsersPingGetResponses[keyof PingUsersPingGetResponses];

export type AnalyzeImageGeminiAnalyzeImagePostData = {
    body: GeminiInput;
    path?: never;
    query?: never;
    url: '/gemini/analyze_image';
};

export type AnalyzeImageGeminiAnalyzeImagePostErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type AnalyzeImageGeminiAnalyzeImagePostError = AnalyzeImageGeminiAnalyzeImagePostErrors[keyof AnalyzeImageGeminiAnalyzeImagePostErrors];

export type AnalyzeImageGeminiAnalyzeImagePostResponses = {
    /**
     * Successful Response
     */
    200: GeminiResponseModel;
};

export type AnalyzeImageGeminiAnalyzeImagePostResponse = AnalyzeImageGeminiAnalyzeImagePostResponses[keyof AnalyzeImageGeminiAnalyzeImagePostResponses];

export type ClientOptions = {
    baseURL: `${string}://${string}` | (string & {});
};