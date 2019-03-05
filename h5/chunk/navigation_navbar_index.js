(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"264":function(e,t,n){},"37":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var i=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=_interopRequireDefault(n(1)),l=_interopRequireDefault(n(2)),r=n(60),o=n(66),c=_interopRequireDefault(n(62));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n(264);var s=function(e){function Index(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);for(var i=arguments.length,a=Array(i),l=0;l<i;l++)a[l]=arguments[l];return t=n=_possibleConstructorReturn(this,(e=Index.__proto__||Object.getPrototypeOf(Index)).call.apply(e,[this].concat(a))),n.config={"navigationBarTitleText":"Taro UI"},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,a.default.Component),i(Index,[{"key":"handleClick","value":function handleClick(e){a.default.showToast({"title":e,"duration":2e3,"icon":"success"})}},{"key":"clickReturn","value":function clickReturn(){a.default.showToast({"title":"返回","duration":2e3,"icon":"success"})}},{"key":"clickMy","value":function clickMy(){a.default.showToast({"title":"我的","duration":2e3,"icon":"success"})}},{"key":"clickList","value":function clickList(){a.default.showToast({"title":"功能列表","duration":2e3,"icon":"success"})}},{"key":"render","value":function render(){return l.default.createElement(r.View,{"className":"page"},l.default.createElement(c.default,{"title":"NavBar 导航栏"}),l.default.createElement(r.View,{"className":"doc-body"},l.default.createElement(r.View,{"className":"panel"},l.default.createElement(r.View,{"className":"panel__title"},"基础用法"),l.default.createElement(r.View,{"className":"panel__content no-padding"},l.default.createElement(r.View,{"className":"example-item"},l.default.createElement(o.AtNavBar,{"onClickLeftIcon":this.handleClick.bind(this,"返回"),"title":"NavBar 导航栏示例","leftIconType":"chevron-left"})),l.default.createElement(r.View,{"className":"example-item"},l.default.createElement(o.AtNavBar,{"onClickLeftIcon":this.handleClick.bind(this,"返回"),"title":"NavBar 导航栏示例","leftIconType":"chevron-left","rightFirstIconType":"bullet-list","rightSecondIconType":"user"})),l.default.createElement(r.View,{"className":"example-item"},l.default.createElement(o.AtNavBar,{"onClickLeftIcon":this.handleClick.bind(this,"返回"),"title":"NavBar 导航栏示例","leftIconType":"chevron-left","rightFirstIconType":"user"})))),l.default.createElement(r.View,{"className":"panel"},l.default.createElement(r.View,{"className":"panel__title"},"自定义左上角文案"),l.default.createElement(r.View,{"className":"panel__content no-padding"},l.default.createElement(r.View,{"className":"example-item"},l.default.createElement(o.AtNavBar,{"onClickLeftIcon":this.handleClick.bind(this,"返回"),"title":"NavBar 导航栏示例","leftText":"返回","leftIconType":"chevron-left","rightFirstIconType":"bullet-list","rightSecondIconType":"user"})),l.default.createElement(r.View,{"className":"example-item"},l.default.createElement(o.AtNavBar,{"onClickLeftIcon":this.handleClick.bind(this,"返回"),"title":"NavBar 导航栏示例","leftText":"返回","rightFirstIconType":"bullet-list","rightSecondIconType":"user"})))),l.default.createElement(r.View,{"className":"panel"},l.default.createElement(r.View,{"className":"panel__title"},"自定义颜色"),l.default.createElement(r.View,{"className":"panel__content no-padding"},l.default.createElement(o.AtNavBar,{"onClickRgIconSt":this.clickList.bind(this),"onClickRgIconNd":this.clickMy.bind(this),"onClickLeftIcon":this.clickReturn.bind(this),"color":"#333","title":"NavBar 导航栏示例","leftText":"返回","rightFirstIconType":"bullet-list","rightSecondIconType":"user"}))),l.default.createElement(r.View,{"className":"panel"},l.default.createElement(r.View,{"className":"panel__title"},"无下划线"),l.default.createElement(r.View,{"className":"panel__content no-padding"},l.default.createElement(o.AtNavBar,{"border":!1,"onClickRgIconSt":this.clickList.bind(this),"onClickRgIconNd":this.clickMy.bind(this),"onClickLeftIcon":this.clickReturn.bind(this),"color":"#333","title":"NavBar 导航栏示例","leftText":"返回","rightFirstIconType":"bullet-list","rightSecondIconType":"user"})))))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}}]),Index}();t.default=s},"62":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var i=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=n(1),l=(_interopRequireDefault(a),_interopRequireDefault(n(2))),r=_interopRequireDefault(n(61)),o=n(60);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(63);var c=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,a.Component),i(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return l.default.createElement(o.View,{"className":"doc-header"},l.default.createElement(o.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=c,c.defaultProps={"title":"标题"},c.propTypes={"title":r.default.string}},"63":function(e,t,n){}}]);