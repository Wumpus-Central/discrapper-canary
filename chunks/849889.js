n.d(t, { o: () => o });
var r = n(627968),
    i = n(64700);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
function o(e) {
    let { component: t, props: n, componentMap: a } = e,
        o = a[t];
    return null == o
        ? (console.warn("No component found for dynamic graphic:", t), null)
        : (0, r.jsx)(i.Suspense, {
              fallback: null,
              children: (0, r.jsx)(o, s({}, n)),
          });
}
