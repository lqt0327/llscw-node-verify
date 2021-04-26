declare class LlscwNodeAuth {
    makePassword(password: string): string;
    checkPassword(password: string, sqlPwd: string): boolean;
    private md5MakePassword;
}
export default LlscwNodeAuth;
export { LlscwNodeAuth };
