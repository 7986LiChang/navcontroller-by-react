# navcontroller-by-react
a nav controller project based on react

基于react构建导航栏tab：
定义三个组件:
> 父组件`<TabComponent/>` <br/>
子组件1:`<NavClass/>`导航栏组件，ul其中包括多个li<br/>
子组件2：`<ContentClass/>`内容组件，其中显示对应不同liItem的content

实现tabbar的关键点：<br/>
在父组件的state中设置索引index，从而由父组件控制被激活active的liItem以及对应的content

