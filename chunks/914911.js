n.d(t, { E: () => f });
var r = n(54381);
n(473749);
var i = n(331595),
    a = n(267843);
function o(e, t, n) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
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
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = d(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let f = (e) => {
    var t,
        n,
        { size: o = "md", width: l, height: d, color: f = "#CEA146", colorClass: p = "" } = e,
        _ = u(e, ["size", "width", "height", "color", "colorClass"]);
    let h = (0, a.m)(o),
        m = null != (t = null == h ? void 0 : h.width) ? t : l,
        g = null != (n = null == h ? void 0 : h.height) ? n : d;
    return (0, r.jsx)(
        "svg",
        c(s({}, (0, i.Z)(_)), {
            xmlns: "http://www.w3.org/2000/svg",
            width: m,
            height: g,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
                fill: "string" == typeof f ? f : f.css,
                d: "M10.78 1.5v18.08h10.5l-2.34 2.92H4.71l1.75-2.92V3.6L4.94 1.5h5.84Zm1.28 3.97a7.5 7.5 0 0 1 5.13 12.83h2.22a10.07 10.07 0 0 0 1.75-5.25 9.16 9.16 0 0 0-9.1-9.33v1.75ZM5.18 16.08a6.95 6.95 0 0 1-.7-3.15c0-1.16.23-2.21.7-3.15V6.75a9.81 9.81 0 0 0-2.45 6.07c0 2.45.81 4.66 2.45 6.3v-3.04Z",
                className: p,
            }),
        }),
    );
};
