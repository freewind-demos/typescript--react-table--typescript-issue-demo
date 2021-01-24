TypeScript React Table Typescript Issue Demo
=================================

没有想到的是，react-table与typescript之间的搭配存在问题。比如想增加一个简单的"sort"功能，除了加入`@types/react-table`外，
还需要在代码中增加一个用于“将使用的插件类型合并到主类型”上的文件，（如react-table-config.ts)，不然很多属性找不到，比如`column.isSorted`等。

具体参考：
https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-table#example-type-file

这可能是由于react-table的代码组织形式无法让typescript以一种简单周到的方式提供准确类型，所以只能这么操作。

另外，有人建议希望用typescript重写react-table，以解决某些类型不准确或不匹配的问题。

```
npm install
npm run demo
```

It will open page on browser automatically.
