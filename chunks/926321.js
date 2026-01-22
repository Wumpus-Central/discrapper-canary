n.d(t, { j: () => p });
var r = n(627968);
n(64700);
var i = n(827734),
    a = n(996682),
    s = n(27989);
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
                o(e, t, n[t]);
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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = f(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let p = (e) => {
    var t, n;
    let { size: o = "md", width: c, height: f, color: p = i.A.colors.INTERACTIVE_ICON_DEFAULT, colorClass: _ = "" } = e,
        h = d(e, ["size", "width", "height", "color", "colorClass"]),
        m = (0, s.J)(o),
        g = null != (t = null == m ? void 0 : m.width) ? t : c,
        E = null != (n = null == m ? void 0 : m.height) ? n : f;
    return (0, r.jsxs)(
        "svg",
        u(l({}, (0, a.A)(h)), {
            xmlns: "http://www.w3.org/2000/svg",
            width: g,
            height: E,
            fill: "none",
            viewBox: "0 0 24 24",
            children: [
                (0, r.jsx)("path", {
                    fill: "string" == typeof p ? p : p.css,
                    d: "M8.18 14.82c.5-.11 1.07.45 1.29 1.27.21.81-.02 1.57-.52 1.68-.5.12-1.08-.45-1.29-1.26-.21-.82.02-1.57.52-1.69ZM5.57 9.37c.5-.12 1.07.45 1.29 1.26.21.82-.02 1.57-.52 1.69-.5.11-1.08-.45-1.29-1.27-.21-.8.02-1.56.52-1.68Z",
                    className: _,
                }),
                (0, r.jsx)("path", {
                    fill: "string" == typeof p ? p : p.css,
                    fillRule: "evenodd",
                    d: "M12 2a3 3 0 0 1 .91.14l7 2.24c.55.18 1.01.5 1.36.91l.02.02c.1.12.2.25.28.39l.02.05c.08.13.14.26.2.4l.02.06c.06.16.1.33.14.5a3 3 0 0 1 .05.53v9.62a3 3 0 0 1-2.12 2.86L13 21.84l-.12.03a3 3 0 0 1-1.76 0l-.12-.04-6.88-2.11A3 3 0 0 1 2 16.85V7.24A3.02 3.02 0 0 1 2.2 6.2l.02-.05a2.92 2.92 0 0 1 .5-.85l.02-.02c.35-.41.81-.73 1.35-.9l7-2.25c.3-.1.61-.14.92-.14ZM4.86 7.57a.67.67 0 0 0-.86.64v8.64a1 1 0 0 0 .7.96l5.47 1.68c.41.12.83-.18.83-.62V10.1a.88.88 0 0 0-.62-.84L4.86 7.57Zm10.47 8.25c-.5-.11-1.07.45-1.29 1.27-.21.8.02 1.56.52 1.68.5.12 1.08-.45 1.29-1.26.21-.82-.02-1.57-.52-1.69Zm2.3-3.78c-.5-.11-1.08.45-1.3 1.27-.21.81.02 1.56.52 1.68.5.12 1.08-.45 1.29-1.26.21-.82-.02-1.57-.52-1.69Zm2.31-3.67c-.5-.11-1.07.45-1.29 1.26-.21.82.02 1.57.52 1.69.5.11 1.08-.45 1.29-1.27.21-.8-.02-1.56-.52-1.68ZM12.2 4.93c-.98 0-1.77.4-1.77.88 0 .49.8.88 1.77.88s1.76-.4 1.76-.88-.79-.88-1.76-.88Z",
                    clipRule: "evenodd",
                    className: _,
                }),
            ],
        }),
    );
};
