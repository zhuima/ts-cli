ts cli demo
----------

# Usage


```typescript
$ git clone https://github.com/zhuima/ts-cli
$ cd ts-cli
$ yarn
$ yarn link
$ my-cli
```



# Demo

```typescript
❯ my-cli

                                     _   _
  _ __ ___    _   _            ___  | | (_)
 | '_ ` _ \  | | | |  _____   / __| | | | |
 | | | | | | | |_| | |_____| | (__  | | | |
 |_| |_| |_|  \__, |          \___| |_| |_|
              |___/
Usage: my-cli [commands] [options]

My CLI

Options:
  -V, --version   output the version number
  -h, --help      输出所有命令

Commands:
  init            Initialize a new project
  lh              Analyze the performance of a website
  logo            logo
  help [command]  display help for command


Example call:
  $ my-cli init -u http://www.baidu.com
  $ my-cli init -u http://www.baidu.com -i 2


Author:
  zhuima <zhuima314@gmail.com>

```
# FAQ

写作过程中各种报错，网上的各种guide文档对新手不友好，尽管这些文档开头都号称step by step, 最后的解决方案是查看对应三方库的github issue, 去翻别人是否提过对应的问题，得以解决