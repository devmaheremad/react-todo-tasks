(this["webpackJsonpreact-todo-tasks"]=this["webpackJsonpreact-todo-tasks"]||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){},16:function(t,e,a){},17:function(t,e,a){"use strict";a.r(e);var s=a(0),n=a(1),i=a.n(n),r=a(7),c=a.n(r),l=(a(14),a(2)),o=a(3),d=a(5),h=a(4),j=(a(15),function(t){var e=t.tasks,a=e.length?e.map((function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{className:"task",children:e.task}),Object(s.jsx)("span",{className:"priority",children:e.priority}),Object(s.jsx)("span",{className:"times",onClick:function(){return t.handelDelete(e.id)},children:"\xd7"})]},e.id)})):Object(s.jsx)("div",{className:"no-tasks",children:Object(s.jsx)("p",{children:"There Is No Task Right Now."})});return Object(s.jsxs)("div",{className:"to-do-list-tasks",children:[Object(s.jsxs)("div",{className:"t-header",children:[Object(s.jsx)("span",{className:"task title",children:"Task Name"}),Object(s.jsx)("span",{className:"priority title",children:"Priority Type"}),Object(s.jsx)("span",{className:"title",children:"Action"})]}),a]})}),u=a(8),p=(a(16),function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))).state={id:Math.random(),task:"",priority:""},t.handelChange=function(e){t.setState(Object(u.a)({},e.target.id,e.target.value))},t.handelSubmit=function(e){e.preventDefault(),t.props.addItem(t.state),t.setState({id:Math.random(),task:"",priority:""})},t}return Object(o.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"to-do-list-add",children:Object(s.jsxs)("form",{method:"post",onChange:this.handelChange,onSubmit:this.handelSubmit,children:[Object(s.jsx)("label",{className:"task",htmlFor:"task",children:Object(s.jsx)("input",{type:"text",id:"task",placeholder:"Type your task name here!",value:this.state.task,required:!0})}),Object(s.jsx)("label",{className:"priority",htmlFor:"priority",children:Object(s.jsx)("input",{type:"text",id:"priority",placeholder:"Type your priority here!",value:this.state.priority,required:!0})}),Object(s.jsx)("input",{type:"submit",value:"Add new task"})]})})}}]),a}(n.Component)),b=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))).state={tasks:[{id:0,task:"Create a new site",priority:"Urgent"},{id:1,task:"Create a new app",priority:"Delayed"},{id:2,task:"Create a new landing page",priority:"Not urgent"}]},t.handelDelete=function(e){var a=t.state.tasks.filter((function(t){return t.id!==e}));t.setState({tasks:a})},t.addItem=function(e){var a=t.state.tasks;a.push(e),t.setState({tasks:a})},t}return Object(o.a)(a,[{key:"render",value:function(){return Object(s.jsxs)(n.Fragment,{children:[Object(s.jsx)("h1",{className:"text-center",children:"To Do List"}),Object(s.jsxs)("div",{className:"list-tasks container",children:[Object(s.jsx)("section",{children:Object(s.jsx)(j,{tasks:this.state.tasks,handelDelete:this.handelDelete})}),Object(s.jsx)("section",{children:Object(s.jsx)(p,{tasks:this.state.tasks,addItem:this.addItem})})]})]})}}]),a}(n.Component),m=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(e){var a=e.getCLS,s=e.getFID,n=e.getFCP,i=e.getLCP,r=e.getTTFB;a(t),s(t),n(t),i(t),r(t)}))};c.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("root")),m()}},[[17,1,2]]]);
//# sourceMappingURL=main.c1b77dcc.chunk.js.map