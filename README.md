TypeScript Chai Add Method "trimmedEqual" Demo
==============================================

使用`chai.Assertion.addMethod`添加自己的matcher

注意：由于我们使用ts-node来运行，而它对于`.d.ts`文件支持不好，所以我们只能使用普通的`typing.ts`来放置typing declaration，
然后在其它的文件中import一次。 如果我们使用tsc或者webpack，就可以直接声明一个`typing.d.ts`。

```
npm install
npm test
```
