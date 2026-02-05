"use strict";
n.d(t, { o: () => a });
var r = n(627968),
    i = n(64700);
function a(e) {
    let { component: t, props: n, componentMap: a } = e,
        s = a[t];
    return null == s
        ? (console.warn("No component found for dynamic graphic:", t), null)
        : (0, r.jsx)(i.Suspense, { fallback: null, children: (0, r.jsx)(s, { ...n }) });
}
