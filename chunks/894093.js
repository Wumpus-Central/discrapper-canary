n.d(t, { t: () => p });
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
                    d: "M8 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h4.3c.4 0 .65-.46.46-.82a6.97 6.97 0 0 1-.63-4.53c.06-.33-.18-.65-.51-.65H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v7.62c0 .33.32.57.65.51a7 7 0 0 1 .85-.11c.28-.02.5-.24.5-.52V4a3 3 0 0 0-3-3H8Z",
                    fill: "string" == typeof p ? p : p.css,
                    className: _,
                }),
                (0, r.jsx)("path", {
                    fillRule: "evenodd",
                    d: "M18.06 14.57c-.02-.25.12-.5.37-.54a5.04 5.04 0 0 1 1.14 0c.25.03.4.29.37.54-.04.48.13.9.47 1.04.33.14.75-.04 1.06-.4.16-.2.44-.28.64-.13.3.24.57.51.8.81.16.2.08.48-.11.64-.37.31-.55.73-.4 1.06.13.34.55.51 1.03.47.25-.02.5.12.54.37a5.04 5.04 0 0 1 0 1.14c-.03.25-.29.39-.54.37-.48-.04-.9.13-1.04.47-.14.33.04.75.4 1.06.2.16.28.44.13.64-.24.3-.51.57-.81.8-.2.16-.48.08-.64-.11-.31-.37-.73-.55-1.06-.4-.34.13-.51.55-.47 1.03.02.25-.12.5-.37.54a5.05 5.05 0 0 1-1.14 0c-.25-.03-.39-.29-.37-.54.04-.48-.13-.9-.47-1.04-.33-.14-.75.04-1.06.4-.16.2-.44.28-.64.13-.3-.24-.57-.51-.8-.81-.16-.2-.08-.48.11-.64.37-.31.55-.73.4-1.06-.13-.34-.55-.51-1.03-.47-.25.02-.5-.12-.54-.37a5.04 5.04 0 0 1 0-1.14c.03-.25.29-.39.54-.37.48.04.9-.13 1.04-.47.14-.33-.04-.75-.4-1.06-.2-.16-.28-.44-.13-.64.24-.3.51-.57.81-.8.2-.16.48-.08.64.11.31.37.73.55 1.06.4.34-.13.51-.55.47-1.03ZM19 20.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
                    clipRule: "evenodd",
                    fill: "string" == typeof p ? p : p.css,
                    className: _,
                }),
            ],
        }),
    );
};
