"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[63752],{97606:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var o=i(56837),n=i(62540),t=i(43023);const s={title:"Configure a mirror registry",description:"Covers the end-to-end workflow to configure a mirror registry",authors:["shipsing"],tags:["podman-desktop","podman","configure-a-mirror-registry"],hide_table_of_contents:!1},c="Configure a mirror registry with Podman Desktop",a={authorsImageUrls:[void 0]},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuring: A mirror for <code>docker.io</code>",id:"configuring-a-mirror-for-dockerio",level:2},{value:"Verifying: the mirror",id:"verifying-the-mirror",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["Lower rate limits imposed on the Docker Hub End-User License Agreement (EULA) made it difficult for community members to access the ",(0,n.jsx)(r.code,{children:"docker.io"})," images frequently. A simple solution to this problem is to configure a mirror for the ",(0,n.jsx)(r.code,{children:"docker.io"})," registry in the ",(0,n.jsx)(r.code,{children:"registries.conf"})," file. This way, they can access the Docker resources whenever needed."]}),"\n",(0,n.jsxs)(r.p,{children:["With the Podman Desktop UI, you can add registry locations and configure their mirrors easily. Configuring a mirror redirects a registry to another location, enabling you to use its content. For example, if you have configured ",(0,n.jsx)(r.code,{children:"ghcr.io"})," as a mirror for ",(0,n.jsx)(r.code,{children:"docker.io"})," and try to pull a resource, Podman pulls the resource from ",(0,n.jsx)(r.code,{children:"ghcr.io"})," instead of ",(0,n.jsx)(r.code,{children:"docker.io"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["The blog covers how to configure a mirror for the ",(0,n.jsx)(r.code,{children:"docker.io"})," registry."]}),"\n",(0,n.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Upgrade to the latest version of Podman."}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/docs/podman/creating-a-podman-machine",children:"Recreate your Podman machine"}),". Otherwise, you get a notification when you set up your registry configuration:\n",(0,n.jsx)(r.img,{alt:"notification to mount the registry file",src:i(99485).A+"",width:"1146",height:"484"})]}),"\n"]}),"\n",(0,n.jsxs)(r.h2,{id:"configuring-a-mirror-for-dockerio",children:["Configuring: A mirror for ",(0,n.jsx)(r.code,{children:"docker.io"})]}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["Go to the ",(0,n.jsx)(r.strong,{children:"Settings > Resources"})," page."]}),"\n",(0,n.jsxs)(r.li,{children:["Select ",(0,n.jsx)(r.strong,{children:"More Options > Setup registry configuration"})," in the Podman tile. A command palette opens.\n",(0,n.jsx)(r.img,{alt:"Set up registry configuration",src:i(17361).A+"",width:"1376",height:"696"})]}),"\n",(0,n.jsx)(r.li,{children:"Set up your registry configuration:"}),"\n",(0,n.jsxs)(r.li,{children:["Select the ",(0,n.jsx)(r.strong,{children:"Add registry configuration"})," option from the command palette.\n",(0,n.jsx)(r.img,{alt:"adding registry configuration",src:i(90910).A+"",width:"1214",height:"310"})]}),"\n",(0,n.jsxs)(r.li,{children:["Type the location of the registry, such as ",(0,n.jsx)(r.code,{children:"docker.io"}),", and press the ",(0,n.jsx)(r.code,{children:"Enter"})," key. The ",(0,n.jsx)(r.code,{children:"docker.io"})," registry is added to the palette.\n",(0,n.jsx)(r.img,{alt:"docker.io registry added",src:i(28733).A+"",width:"1202",height:"352"})]}),"\n",(0,n.jsxs)(r.li,{children:["Select ",(0,n.jsx)(r.code,{children:"docker.io"})," from the command palette."]}),"\n",(0,n.jsxs)(r.li,{children:["Type the location where you want to mirror the registry, such as ",(0,n.jsx)(r.code,{children:"ghcr.io"}),", and press the ",(0,n.jsx)(r.code,{children:"Enter"})," key. The entry for the ",(0,n.jsx)(r.code,{children:"docker.io"})," registry shows the location where it is mirrored.\n",(0,n.jsx)(r.img,{alt:"mirrored registry location",src:i(24092).A+"",width:"1200",height:"350"})]}),"\n",(0,n.jsxs)(r.li,{children:["Select the ",(0,n.jsx)(r.code,{children:"End configuring registries"})," option to end registry configuration.\n",(0,n.jsx)(r.img,{alt:"ending registry configuration",src:i(85423).A+"",width:"1196",height:"350"})]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"verifying-the-mirror",children:"Verifying: the mirror"}),"\n",(0,n.jsx)(r.p,{children:"There is no direct way to verify the mirror configuration from the UI. But, you can use the CLI for verification."}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsx)(r.li,{children:"Start an interactive session with the default Podman machine:"}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sh",children:"$ podman machine ssh <machine_name>\n"})}),"\n",(0,n.jsxs)(r.ol,{start:"2",children:["\n",(0,n.jsxs)(r.li,{children:["Pull an invalid image from ",(0,n.jsx)(r.code,{children:"docker.io"}),"."]}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sh",children:"$ podman pull docker.io/invalid\n"})}),"\n",(0,n.jsxs)(r.p,{children:["An error message appears in the terminal indicating a failure to pull the image from the mirror. You receive the error message: ",(0,n.jsx)(r.code,{children:"Mirrors have also failed"}),"."]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},90910:(e,r,i)=>{i.d(r,{A:()=>o});const o=i.p+"assets/images/add-registry-configuration-cc999a5d1c04137bea76c5abb2fcef54.png"},28733:(e,r,i)=>{i.d(r,{A:()=>o});const o=i.p+"assets/images/docker-option-added-831479ad916c8d9e481fa92a24507866.png"},85423:(e,r,i)=>{i.d(r,{A:()=>o});const o=i.p+"assets/images/end-configuring-registries-020a2c4b9bc1e626570820d853fe24c5.png"},24092:(e,r,i)=>{i.d(r,{A:()=>o});const o=i.p+"assets/images/mirrored-registry-3364b6ef4e14385b649d6cf22574371c.png"},99485:(e,r,i)=>{i.d(r,{A:()=>o});const o=i.p+"assets/images/notification-a15957ae6fc7b2e920fc52d6d2eb58fa.png"},17361:(e,r,i)=>{i.d(r,{A:()=>o});const o=i.p+"assets/images/setting-up-registry-configuration-d95cf5cee047a884675fb1511e32fd38.png"},43023:(e,r,i)=>{i.d(r,{R:()=>s,x:()=>c});var o=i(63696);const n={},t=o.createContext(n);function s(e){const r=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(t.Provider,{value:r},e.children)}},56837:e=>{e.exports=JSON.parse('{"permalink":"/blog/2025/03/06/mirror-registry-configuration-blog","source":"@site/blog/2025-03-06-mirror-registry-configuration-blog.md","title":"Configure a mirror registry","description":"Covers the end-to-end workflow to configure a mirror registry","date":"2025-03-06T00:00:00.000Z","tags":[{"inline":true,"label":"podman-desktop","permalink":"/blog/tags/podman-desktop"},{"inline":true,"label":"podman","permalink":"/blog/tags/podman"},{"inline":true,"label":"configure-a-mirror-registry","permalink":"/blog/tags/configure-a-mirror-registry"}],"readingTime":1.86,"hasTruncateMarker":false,"authors":[{"name":"Shipra Singh","title":"Tech writer","url":"https://github.com/shipsing","imageURL":"https://github.com/shipsing.png","key":"shipsing","page":null}],"frontMatter":{"title":"Configure a mirror registry","description":"Covers the end-to-end workflow to configure a mirror registry","authors":["shipsing"],"tags":["podman-desktop","podman","configure-a-mirror-registry"],"hide_table_of_contents":false},"unlisted":false,"nextItem":{"title":"Podman Desktop 1.17 Release","permalink":"/blog/podman-desktop-release-1.17"}}')}}]);