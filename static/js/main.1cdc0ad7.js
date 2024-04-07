(()=>{"use strict";var e={6022:(e,r,t)=>{t.r(r),t.d(r,{default:()=>F});var n=t(885),l=t(3426),u=t(668),o=t(9385),a=t(1985),i=t(7804),c=t(5004),f=t(1054),s=t(6997),d=t(5288),h=t(6617),p=t(195),y=(0,p.createSlice)({name:"puzzle",initialState:{puzzle:[],cellSelected:[]},reducers:{setPuzzle:function(e,r){e.puzzle=r.payload},selectCell:function(e,r){e.cellSelected=r.payload},updateCell:function(e,r){var t=r.payload.number,n=r.payload.cell,l=r.payload.puzzle;if(0==l[n[0]][n[1]])for(var u=0;u<l.length;u++)for(var o=0;o<l[u].length;o++)console.log(n,[u,o]),n[0]==u&&n[1]==o&&(e.puzzle[u][o]=t)}}}),z=y.actions,b=z.setPuzzle,x=z.selectCell,g=z.updateCell;const j=y.reducer;var m=t(2629);function v(){var e=(0,a.useDispatch)(),r=(0,a.useSelector)((function(e){return e.puzzle.cellSelected})),t=(0,a.useSelector)((function(e){return e.puzzle.puzzle}));return(0,m.jsxs)(o.default,{style:C.container,children:[(0,m.jsxs)(o.default,{style:C.row,children:[(0,m.jsx)(d.default,{onPress:function(){return e(g({number:1,cell:r,puzzle:t}))},children:(0,m.jsx)(f.default,{style:C.number,children:"1"})}),(0,m.jsx)(d.default,{onPress:function(){return e(g({number:2,cell:r,puzzle:t}))},children:(0,m.jsx)(f.default,{style:C.number,children:"2"})}),(0,m.jsx)(d.default,{onPress:function(){return e(g({number:3,cell:r,puzzle:t}))},children:(0,m.jsx)(f.default,{style:C.number,children:"3"})})]}),(0,m.jsxs)(o.default,{style:C.row,children:[(0,m.jsx)(d.default,{onPress:function(){return e(g({number:4,cell:r,puzzle:t}))},children:(0,m.jsx)(f.default,{style:C.number,children:"4"})}),(0,m.jsx)(d.default,{onPress:function(){return e(g({number:5,cell:r,puzzle:t}))},children:(0,m.jsx)(f.default,{style:C.number,children:"5"})}),(0,m.jsx)(d.default,{onPress:function(){return e(g({number:6,cell:r,puzzle:t}))},children:(0,m.jsx)(f.default,{style:C.number,children:"6"})})]}),(0,m.jsxs)(o.default,{style:C.row,children:[(0,m.jsx)(d.default,{onPress:function(){return e(g({number:7,cell:r,puzzle:t}))},children:(0,m.jsx)(f.default,{style:C.number,children:"7"})}),(0,m.jsx)(d.default,{onPress:function(){return e(g({number:8,cell:r,puzzle:t}))},children:(0,m.jsx)(f.default,{style:C.number,children:"8"})}),(0,m.jsx)(d.default,{onPress:function(){return e(g({number:9,cell:r,puzzle:t}))},children:(0,m.jsx)(f.default,{style:C.number,children:"9"})})]}),(0,m.jsx)(d.default,{onPress:function(){return e(g({number:0,cell:r,puzzle:t}))},children:(0,m.jsx)(h.default,{style:C.btn,name:"backspace-outline",size:32})})]})}var C=u.default.create({container:{marginTop:20,flexDirection:"column",paddingHorizontal:20},number:{fontFamily:"Inter-Tight-Regular",fontSize:27},row:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:20},btn:{alignSelf:"center",marginTop:20}}),S=t(2840);function w(e){return!!function(e,r){if(e.find((function(e){return JSON.stringify(e)===JSON.stringify(r)})))return!0;return!1}([[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2],[0,6],[0,7],[0,8],[1,6],[1,7],[1,8],[2,6],[2,7],[2,8],[3,3],[3,4],[3,5],[4,3],[4,4],[4,5],[5,3],[5,4],[5,5],[6,0],[6,1],[6,2],[7,0],[7,1],[7,2],[8,0],[8,1],[8,2],[6,6],[6,7],[6,8],[7,6],[7,7],[7,8],[8,6],[8,7],[8,8]],e)}var P=function(e){return Math.floor(e/3600)+":"+Math.floor(e%3600/60)+":"+e%60};function T(e,r){if(e.length!==r.length)return!1;for(var t=0;t<e.length;t++)if(e[t]!==r[t])return!1;return!0}var I="#CCCCCC",O="#AAAAAA";var k=u.default.create({container:{justifyContent:"center",alignItems:"center"},row:{flexDirection:"row"},cell:{width:40,height:40,borderWidth:1,borderColor:"black",justifyContent:"center",alignItems:"center"},cellText:{fontSize:20},darkBg:{backgroundColor:I},selectedCellBg:{backgroundColor:O}});const B=function(e){var r=e.puzzle,t=(0,a.useSelector)((function(e){return e.puzzle.cellSelected})),n=(0,a.useDispatch)();return(0,c.useEffect)((function(){}),[t]),(0,m.jsx)(o.default,{style:k.container,children:r.map((function(e,r){return function(e,r){return(0,m.jsx)(o.default,{style:k.row,children:e.map((function(e,l){return(0,m.jsx)(S.default,{style:[k.cell,T(t,[r,l])?k.selectedCellBg:w([r,l])?k.darkBg:null],onPress:function(){n(x([r,l]))},children:(0,m.jsx)(f.default,{style:k.cellText,children:0===e?"":e})},l)}))},r)}(e,r)}))})};function M(){var e=(0,c.useState)(0),r=(0,n.default)(e,2),t=r[0],u=r[1],i=(0,c.useState)(!1),p=(0,n.default)(i,2),y=p[0],z=p[1],x=(0,a.useSelector)((function(e){return e.puzzle.puzzle})),g=(0,a.useDispatch)();(0,c.useEffect)((function(){g(b(function(e){var r=Array.from({length:9},(function(){return Array(9).fill(0)}));function t(e,t,n){for(var l=0;l<9;l++)if(r[e][l]===n)return!1;for(var u=0;u<9;u++)if(r[u][t]===n)return!1;for(var o=3*Math.floor(e/3),a=3*Math.floor(t/3),i=o;i<o+3;i++)for(var c=a;c<a+3;c++)if(r[i][c]===n)return!1;return!0}!function e(){for(var n=0;n<9;n++)for(var l=0;l<9;l++)if(0===r[n][l]){for(var u=1;u<=9;u++)if(t(n,l,u)){if(r[n][l]=u,e())return!0;r[n][l]=0}return!1}return!0}();for(var n=0;n<e;n++){var l=Math.floor(9*Math.random()),u=Math.floor(9*Math.random());r[l][u]=0}return r}(30))),j()}),[]),(0,c.useEffect)((function(){var e;return y?e=setInterval((function(){u((function(e){return e+1}))}),1e3):clearInterval(e),function(){return clearInterval(e)}}),[y]);var j=function(){z(!y)};return(0,m.jsxs)(o.default,{style:A.container,children:[(0,m.jsxs)(s.default,{contentContainerStyle:A.contentContainer,showsVerticalScrollIndicator:!1,horizontal:!1,children:[(0,m.jsxs)(o.default,{style:A.header,children:[(0,m.jsx)(f.default,{style:A.timer,children:P(t)}),(0,m.jsx)(d.default,{onPress:function(){},children:(0,m.jsx)(h.default,{style:A.refreshBtn,name:"refresh-outline",size:32})})]}),(0,m.jsx)(f.default,{style:A.difficulty,children:"Basic"}),(0,m.jsx)(B,{puzzle:x}),(0,m.jsx)(v,{})]}),(0,m.jsx)(l.default,{style:"auto"})]})}var A=u.default.create({container:{flex:1,paddingTop:25,backgroundColor:"#fff"},contentContainer:{paddingVertical:30},header:{flexDirection:"row",justifyContent:"space-between"},timer:{color:"#333",fontSize:27,fontWeight:"bold",fontFamily:"Inter-Tight-Bold"},refreshBtn:{},difficulty:{fontFamily:"Inter-Tight-Regular",marginTop:10,marginBottom:20,fontSize:21,color:"#aaa"}});const D=(0,p.configureStore)({reducer:{puzzle:j}});function F(){var e=(0,i.useFonts)({"Inter-Tight-Regular":t(8591),"Inter-Tight-Bold":t(7128)}),r=(0,n.default)(e,2),u=r[0],c=r[1];return u||c?(0,m.jsx)(a.Provider,{store:D,children:(0,m.jsxs)(o.default,{style:E.container,children:[(0,m.jsx)(M,{}),(0,m.jsx)(l.default,{style:"auto"})]})}):null}var E=u.default.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}})},7128:(e,r,t)=>{e.exports=t.p+"static/media/InterTight-Bold.b7d1aba05d534b8cc4bc.ttf"},8591:(e,r,t)=>{e.exports=t.p+"static/media/InterTight-Regular.09256c34afce3ffd7f26.ttf"}},r={};function t(n){var l=r[n];if(void 0!==l)return l.exports;var u=r[n]={exports:{}};return e[n].call(u.exports,u,u.exports,t),u.exports}t.m=e,(()=>{var e=[];t.O=(r,n,l,u)=>{if(!n){var o=1/0;for(f=0;f<e.length;f++){for(var[n,l,u]=e[f],a=!0,i=0;i<n.length;i++)(!1&u||o>=u)&&Object.keys(t.O).every((e=>t.O[e](n[i])))?n.splice(i--,1):(a=!1,u<o&&(o=u));if(a){e.splice(f--,1);var c=l();void 0!==c&&(r=c)}}return r}u=u||0;for(var f=e.length;f>0&&e[f-1][2]>u;f--)e[f]=e[f-1];e[f]=[n,l,u]}})(),t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.p="/sudoku-with-friends/",(()=>{var e={179:0};t.O.j=r=>0===e[r];var r=(r,n)=>{var l,u,[o,a,i]=n,c=0;if(o.some((r=>0!==e[r]))){for(l in a)t.o(a,l)&&(t.m[l]=a[l]);if(i)var f=i(t)}for(r&&r(n);c<o.length;c++)u=o[c],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return t.O(f)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})();var n=t.O(void 0,[698],(()=>t(6271)));n=t.O(n)})();
//# sourceMappingURL=main.1cdc0ad7.js.map