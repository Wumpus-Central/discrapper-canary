n.d(t, { n: () => p });
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
        { size: s = "md", width: c, height: f, color: p = i.Z.colors.INTERACTIVE_ICON_DEFAULT, colorClass: _ = "" } = e,
        h = d(e, ["size", "width", "height", "color", "colorClass"]);
    let m = (0, o.m)(s),
        g = null != (t = null == m ? void 0 : m.width) ? t : c,
        E = null != (n = null == m ? void 0 : m.height) ? n : f;
    return (0, r.jsx)(
        "svg",
        u(l({}, (0, a.Z)(h)), {
            xmlns: "http://www.w3.org/2000/svg",
            width: g,
            height: E,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
                fill: "string" == typeof p ? p : p.css,
                d: "M17.15 10.85c-.1.1-.16.23-.13.36a1 1 0 0 0 1.22.76l4-1a1 1 0 1 0-.48-1.94l-3.58.9a.5.5 0 0 0-.24.13l-.8.8ZM13.94 6.06a.5.5 0 0 0 .13-.24l.9-3.58a1 1 0 1 0-1.94-.48l-1 4a1 1 0 0 0 .76 1.22c.13.03.26-.03.36-.13l.8-.8ZM10.08 9.92a.48.48 0 0 0-.1-.76c-2.41-1.38-4.84-1.59-6.12-.3A3.13 3.13 0 0 0 3 11l-.71 5.44a.5.5 0 0 0 .85.42l2.53-2.53c.16-.16.19-.4.08-.6-.27-.52-.47-1.01-.59-1.47-.35-1.27-.05-1.82.11-1.99.17-.16.72-.46 2-.11.45.12.94.32 1.46.6.2.1.44.07.6-.1l.75-.74ZM7.56 21.71a.5.5 0 0 1-.42-.85l2.53-2.53c.16-.16.4-.19.6-.08.52.27 1.01.47 1.47.59 1.27.35 1.82.05 1.99-.11.16-.17.46-.72.11-2a7.26 7.26 0 0 0-.6-1.46.52.52 0 0 1 .1-.6l.74-.75c.22-.22.6-.18.76.1 1.38 2.41 1.59 4.84.3 6.12-.54.54-1.28.82-2.14.86l-5.44.71ZM7.05 3.32a1 1 0 0 1 1.9-.64l1 3a1 1 0 0 1-1.9.64l-1-3ZM20.68 16.95a1 1 0 0 0 .64-1.9l-3-1a1 1 0 0 0-.64 1.9l3 1ZM22.7 2.7a1 1 0 0 0-1.4-1.4l-20 20a1 1 0 1 0 1.4 1.4l20-20Z",
                className: _,
            }),
        }),
    );
};
