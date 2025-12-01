n.d(t, { g: () => p });
var r = n(54381);
n(473749);
var i = n(692547),
    a = n(331595),
    o = n(267843);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = f(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let p = (e) => {
    var t,
        n,
        { size: s = "md", width: c, height: f, color: p = i.Z.colors.INTERACTIVE_NORMAL, colorClass: _ = "" } = e,
        m = d(e, ["size", "width", "height", "color", "colorClass"]);
    let h = (0, o.m)(s),
        g = null != (t = null == h ? void 0 : h.width) ? t : c,
        E = null != (n = null == h ? void 0 : h.height) ? n : f;
    return (0, r.jsx)(
        "svg",
        u(l({}, (0, a.Z)(m)), {
            xmlns: "http://www.w3.org/2000/svg",
            width: g,
            height: E,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
                fill: "string" == typeof p ? p : p.css,
                d: "M19.76 8.82c-.11.09-2.16 1.24-2.16 3.8 0 2.98 2.6 4.03 2.68 4.05 0 .07-.41 1.44-1.37 2.84-.86 1.23-1.75 2.46-3.11 2.46-1.36 0-1.71-.79-3.28-.79-1.53 0-2.08.82-3.32.82-1.24 0-2.11-1.14-3.11-2.54A12.25 12.25 0 0 1 4 12.84c0-3.9 2.53-5.95 5.02-5.95 1.32 0 2.42.86 3.25.86.8 0 2.02-.92 3.53-.92.57 0 2.62.06 3.96 1.99Zm-4.68-3.63a4.47 4.47 0 0 0 1.07-2.79c0-.14-.02-.28-.04-.4a4.47 4.47 0 0 0-2.95 1.52 4.35 4.35 0 0 0-1.1 2.7c0 .16.03.32.04.37l.27.02c.91 0 2.05-.6 2.71-1.42Z",
                className: _,
            }),
        }),
    );
};
