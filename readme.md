## 加密效验
```js
/**
 * @description 生成密文的方法
 * @param password 明文密码
 */
makePassword(password: string): string;

/**
 * @description 判断与密文密码是否匹配
 * @param password 没有加密的密码
 * @param sqlPwd 加密了的密码
 */
checkPassword(password: string, sqlPwd: string): boolean;
```
