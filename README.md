ts cli demo
----------



# Articls

[Writing Your Own TypeScript CLI](https://betterprogramming.pub/writing-your-own-typescript-cli-6f9c5688ad34)


[使用 TypeScript 编写命令行工具并发布到 npm](https://blog.dreace.top/2020/Use-TypeScript-to-Write-Command-Line-Tools-and-Publish-to-npm/)



[开发一个适合小微前端团队的命令行工具（TypeScript + Etsc）](https://www.yinzhuoei.com/index.php/archives/573/)


[🎉用Node.js开发一个Command Line Interface (CLI)](https://zhuanlan.zhihu.com/p/38730825)


[使用 typescript 快速开发一个 cli](https://www.cnblogs.com/JasonLong/p/14075724.html)

[TypeScript + NodeJs 编写一个 React 脚手架工具](https://github.com/biaov/react-cli-mine)


[example-ts-cli](https://github.com/TerribleDev/example-ts-cli)

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



# 误提交node_modules的补救措施

image.png

```python
$ git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch node_modules' --prune-empty
$ git reflog expire --expire=now --all
$ git gc --prune=now --aggressive

# 推送上去
# 此推将更新远程服务器上的所有refs分支
$ git push --force
# 不要再原来的仓库下再操作，删除重新clone一个新的仓库
```

> 参考文档


[Git之深入解析如何解决.git目录过大的问题](https://bbs.huaweicloud.com/blogs/343828)


# QA

- typescript 中function的定义
  - 尖头函数定义引用不生效
  - 普通函数就可以正常工作



- typescript函数定义方式的差异