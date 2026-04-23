"use strict";
n.d(t, { o: () => s });
var r = n(627968),
    i = n(64700);
function s(e) {
    let { component: t, props: n, componentMap: s } = e,
        a = s[t];
    return null == a
        ? (console.warn("No component found for dynamic graphic:", t), null)
        : (0, r.jsx)(i.Suspense, { fallback: null, children: (0, r.jsx)(a, { ...n }) });
}
