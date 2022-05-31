(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{460:function(a,t,s){"use strict";s.r(t);var r=s(66),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[a._v("#")]),a._v(" install")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("go "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" github.com/yoyofx/yoyogo/cli/yygctl\n")])])]),s("h2",{attrs:{id:"local-install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#local-install"}},[a._v("#")]),a._v(" local install")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" yoyogo/cli/yygctl\ngo "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n")])])]),s("h1",{attrs:{id:"installation-location"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation-location"}},[a._v("#")]),a._v(" Installation location:")]),a._v(" "),s("p",[a._v("$GOPATH")]),a._v(" "),s("p",[a._v("add $GOPATH to $PATH Environment variable")]),a._v(" "),s("h1",{attrs:{id:"commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commands"}},[a._v("#")]),a._v(" Commands")]),a._v(" "),s("p",[a._v("There are commands working with application root folder")]),a._v(" "),s("h2",{attrs:{id:"new"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new"}},[a._v("#")]),a._v(" new")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yygctl new "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("TEMPLATE"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-l"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("--list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-n "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("PROJECTNAME"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-p "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("TARGETDIR"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h3",{attrs:{id:"list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list"}},[a._v("#")]),a._v(" --list")]),a._v(" "),s("p",[a._v("list all templates")]),a._v(" "),s("h4",{attrs:{id:"template-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#template-list"}},[a._v("#")]),a._v(" TEMPLATE LIST")]),a._v(" "),s("p",[a._v("console / webapi / mvc / grpc / xxl-job")]),a._v(" "),s("h3",{attrs:{id:"n"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#n"}},[a._v("#")]),a._v(" -n")]),a._v(" "),s("p",[a._v("generate folder by project name "),s("code",[a._v("<PROJECTNAME>")])]),a._v(" "),s("h3",{attrs:{id:"p-targetdir"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#p-targetdir"}},[a._v("#")]),a._v(" -p "),s("code",[a._v("<TARGETDIR>")])]),a._v(" "),s("p",[a._v("output files to target directory.")]),a._v(" "),s("h2",{attrs:{id:"such-as"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#such-as"}},[a._v("#")]),a._v(" such as")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yygctl new console -n demo -p /Projects\n")])])]),s("h2",{attrs:{id:"add-not-realized"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-not-realized"}},[a._v("#")]),a._v(" add (Not realized)")]),a._v(" "),s("p",[a._v("add code snippet to the file, filepath was for default settings.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yygctl "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("SNIPPET"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-l"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("--list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-f"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("--file "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("filepath"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h4",{attrs:{id:"snippet-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#snippet-list"}},[a._v("#")]),a._v(" SNIPPET LIST")]),a._v(" "),s("p",[a._v("dockerfile / config / controller / job-handler / hostservice / startup / web-middleware / web-filter / grpc-interceptor")]),a._v(" "),s("h2",{attrs:{id:"build"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[a._v("#")]),a._v(" build")]),a._v(" "),s("p",[a._v("build current working directory")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yygctl build\n")])])]),s("h2",{attrs:{id:"run"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[a._v("#")]),a._v(" run")]),a._v(" "),s("p",[a._v("running current working directory app")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yygctl run\n")])])]),s("h2",{attrs:{id:"version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[a._v("#")]),a._v(" version")]),a._v(" "),s("p",[a._v("display yoyogo version")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yygctl version\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);