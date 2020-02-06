(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{223:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"defining-a-model"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#defining-a-model"}},[t._v("#")]),t._v(" Defining a Model")]),t._v(" "),e("p",[t._v("Models are defined by a schema, getters, and actions. While the schema describes\nwhich fields the model has, which type they have, if they're required or not,\nactions and getters are optional extensions of the model's capabilities.\nYou may define as many models as your application requires.")]),t._v(" "),e("p",[t._v("To define a model, you have to do the following steps:")]),t._v(" "),e("ol",[e("li",[t._v("Create "),e("code",[t._v("schema.js")]),t._v(" in "),e("code",[t._v("src/models")]),t._v(" which exports a model definition")]),t._v(" "),e("li",[t._v("Create a "),e("code",[t._v("GenericStore")]),t._v(" from the model definition in "),e("code",[t._v("src/models/config.js")])]),t._v(" "),e("li",[t._v("Update "),e("code",[t._v("rules.bolt")]),t._v(" to grant access to the path, where the data is stored")]),t._v(" "),e("li",[t._v("Generate and deploy security rules\n")])]),t._v(" "),e("h2",{attrs:{id:"create-a-new-model"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-model"}},[t._v("#")]),t._v(" Create a new model")]),t._v(" "),e("p",[t._v("There are two ways to create a new model:")]),t._v(" "),e("h3",{attrs:{id:"automatically-creating-a-new-model"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#automatically-creating-a-new-model"}},[t._v("#")]),t._v(" Automatically creating a new model")]),t._v(" "),e("p",[t._v("First, create a new model with the CLI tool")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("helios gen-model "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("mymodel"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("p",[t._v("next edit "),e("code",[t._v("src/models/<mymodel>/schema.js")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"manually-creating-a-new-model"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#manually-creating-a-new-model"}},[t._v("#")]),t._v(" Manually creating a new model")]),t._v(" "),e("p",[t._v("First, create a new folder for the model definition:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p src/models/example/\n")])])]),e("p",[t._v("Then add an "),e("code",[t._v("index.js")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// file: src/models/example/index.js")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" schema "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./schema'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  staticGetters"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Define global getters for the store")]),t._v("\n  staticActions"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Define global actions for the store")]),t._v("\n  schema"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" schema"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Define model schema")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Then create a "),e("code",[t._v("schema.js")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// file: src/model/example/schema.js")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" title "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      createdAt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NOW")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      title"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Undefined title"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" title"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      isDone"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  fields"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    createdAt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ServerTimestamp'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    title"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'String'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" required"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    isDone"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Boolean'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"defining-a-new-store-and-setting-the-path-template"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#defining-a-new-store-and-setting-the-path-template"}},[t._v("#")]),t._v(" Defining a new Store and setting the Path Template")]),t._v(" "),e("p",[t._v("Create a new store in you "),e("code",[t._v("config.js")]),t._v(", like so:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" exampleModelDefinition "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/models/example'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" challenge "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GenericStore")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[DB1]:/user/{userId}/challenge/*'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  exampleModelDefinition"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  options\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("The first argument is the path where the schema is mapped to. "),e("code",[t._v("{userId}")]),t._v(" is a\nplaceholder which can be set with "),e("code",[t._v("with({ userId: ... })")]),t._v(".\nThe asterisk "),e("code",[t._v("*")]),t._v(" is a placeholder for the "),e("strong",[t._v("primary key")]),t._v(".\n"),e("code",[t._v("[DB1]:")]),t._v(" is optional and can be used for database sharding.\nIf only one database is configured, it can be omitted,\notherwise, it refers to the identifier of the database as\nconfigured when setting up heliosRX with "),e("code",[t._v("Vue.use(heliosRX, { ... })")]),t._v(".")]),t._v(" "),e("p",[t._v("The second argument is the model definition as defined in the previous section.")]),t._v(" "),e("p",[t._v("The third argument is an options object. Valid options are "),e("code",[t._v("isAbstract")]),t._v(" or\n"),e("code",[t._v("additionalProps")]),t._v(", see "),e("a",{attrs:{href:"../../api/01-generic-store"}},[t._v("API GenericStore")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"generate-and-deploy-security-rules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#generate-and-deploy-security-rules"}},[t._v("#")]),t._v(" Generate and deploy security rules")]),t._v(" "),e("p",[t._v("Verify everything is set up correctly with:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("helios check\n")])])]),e("p",[t._v("then run:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("helios rules "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("write database"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rules"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bolt\nfirebase"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bolt database"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rules"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bolt\nfirebase deploy "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("only database\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);