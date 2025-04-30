n.d(t, { H: () => _ });
var r = n(200651);
n(192379);
var i = n(692547),
    o = n(331595),
    a = n(267843);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let _ = (e) => {
    var t,
        n,
        { size: s = 'md', width: c, height: f, color: _ = i.Z.colors.INTERACTIVE_NORMAL, colorClass: p = '' } = e,
        h = d(e, ['size', 'width', 'height', 'color', 'colorClass']);
    let m = (0, a.m)(s),
        g = null != (t = null == m ? void 0 : m.width) ? t : c,
        E = null != (n = null == m ? void 0 : m.height) ? n : f;
    return (0, r.jsxs)(
        'svg',
        u(l({}, (0, o.Z)(h)), {
            xmlns: 'http://www.w3.org/2000/svg',
            width: g,
            height: E,
            fill: 'none',
            viewBox: '0 0 24 24',
            children: [
                (0, r.jsx)('path', {
                    fill: 'string' == typeof _ ? _ : _.css,
                    d: 'M5.26 12.45c.1.03.18.08.25.14l.52.44 5.26 5.26a1 1 0 0 1 0 1.42l-.58.58a1 1 0 0 1-1.42 0l-1.61-1.61a.25.25 0 0 0-.36 0L6.3 19.7a1 1 0 0 0-.29.7V21a1 1 0 0 1-1 1H3.41a1 1 0 0 1-.7-.3l-.42-.4a1 1 0 0 1-.29-.71V19a1 1 0 0 1 1-1h.59a1 1 0 0 0 .7-.3l1.03-1.02c.1-.1.1-.26 0-.36l-1.61-1.61a1 1 0 0 1 0-1.42l.58-.58a1 1 0 0 1 .97-.26ZM18.01 10.37a1 1 0 0 1-1.4-.11L13.86 7a1 1 0 0 1 0-1.3l2.7-3.18c.28-.34.7-.53 1.14-.53H21a1 1 0 0 1 1 1v3.3c0 .45-.2.86-.53 1.15L18 10.37Z',
                    className: p
                }),
                (0, r.jsx)('path', {
                    fill: 'string' == typeof _ ? _ : _.css,
                    d: 'M7.45 2.53A1.5 1.5 0 0 0 6.3 2H3a1 1 0 0 0-1 1v3.3c0 .45.2.86.53 1.15l11.72 9.92c.11.1.12.26.02.36L13.2 18.8a1 1 0 0 0 0 1.42l.58.58a1 1 0 0 0 1.42 0l1.61-1.61c.1-.1.26-.1.36 0l.53.53a1 1 0 0 1 .29.7V21a1 1 0 0 0 1 1h1.59a1 1 0 0 0 .7-.3l.42-.4a1 1 0 0 0 .29-.71V19a1 1 0 0 0-1-1h-.59a1 1 0 0 1-.7-.3l-.53-.52a.25.25 0 0 1 0-.36l1.61-1.61a1 1 0 0 0 0-1.42l-.58-.58a1 1 0 0 0-1.42 0l-1.06 1.06c-.1.1-.27.1-.36-.02L7.45 2.53Z',
                    className: p
                })
            ]
        })
    );
};
