ts cli demo
----------



# Articls

[Writing Your Own TypeScript CLI](https://betterprogramming.pub/writing-your-own-typescript-cli-6f9c5688ad34)


[使用 TypeScript 编写命令行工具并发布到 npm](https://blog.dreace.top/2020/Use-TypeScript-to-Write-Command-Line-Tools-and-Publish-to-npm/)



[开发一个适合小微前端团队的命令行工具（TypeScript + Etsc）](https://www.yinzhuoei.com/index.php/archives/573/)


[🎉用Node.js开发一个Command Line Interface (CLI)](https://zhuanlan.zhihu.com/p/38730825)


[使用 typescript 快速开发一个 cli](https://www.cnblogs.com/JasonLong/p/14075724.html)

[TypeScript + NodeJs 编写一个 React 脚手架工具](https://github.com/biaov/react-cli-mine)

# Error

```python
internal/process/esm_loader.js:74
    internalBinding('errors').triggerUncaughtException(
                              ^

Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/Users/zhuima/code-learn/javascript/ts-cli-tools/build/commands/init' imported from /Users/zhuima/code-learn/javascript/ts-cli-tools/build/index.js
    at new NodeError (internal/errors.js:322:7)
    at finalizeResolution (internal/modules/esm/resolve.js:318:11)
    at moduleResolve (internal/modules/esm/resolve.js:776:10)
    at Loader.defaultResolve [as _resolve] (internal/modules/esm/resolve.js:887:11)
    at Loader.resolve (internal/modules/esm/loader.js:89:40)
    at Loader.getModuleJob (internal/modules/esm/loader.js:242:28)
    at ModuleWrap.<anonymous> (internal/modules/esm/module_job.js:76:40)
    at link (internal/modules/esm/module_job.js:75:36) {
  code: 'ERR_MODULE_NOT_FOUND'
}
```

- options1

```python
node --experimental-specifier-resolution=node build/index.js
```


        // "build": "yarn tsc && yarn chmod",
        // "chmod": "chmod +x ./build/index.js"