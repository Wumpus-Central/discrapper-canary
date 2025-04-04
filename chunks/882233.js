n.d(t, { m: () => _ });
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
                    d: 'M22.7 1.3a1 1 0 0 1 0 1.4l-20 20a1 1 0 0 1-1.4-1.4l20-20a1 1 0 0 1 1.4 0ZM5.14 14.28c0 .26.33.4.52.2l1.06-1.06a1 1 0 0 0 .3-.7V8.26c0-.6.23-.93.3-.98l4.37-3.58 2.26 1.85c.2.17.5.15.67-.03l.62-.62a.5.5 0 0 0-.04-.74L12.67 2.1c-.6-.5-1.36-.5-1.97 0L6.13 5.83c-.61.5-.99 1.43-.99 2.43v6.02ZM17.72 9.7a.3.3 0 0 1 .51.2v5.84c0 1-.37 1.93-.98 2.43l-4.58 3.74c-.6.5-1.36.5-1.97 0l-2.43-1.99a.5.5 0 0 1-.03-.74l.61-.62a.5.5 0 0 1 .67-.03l2.17 1.77 4.37-3.58c.07-.05.3-.37.3-.98v-4.27a1 1 0 0 1 .3-.71l1.06-1.07Z',
                    className: p
                }),
                (0, r.jsx)('path', {
                    fill: 'string' == typeof _ ? _ : _.css,
                    d: 'M9.22 10.92a.2.2 0 0 1-.34-.14v-1.2c0-.25.1-.48.28-.66l2.2-2.2a.47.47 0 0 1 .66 0l.35.35c.2.2.2.51 0 .7l-3.15 3.15ZM11.1 17.02a.5.5 0 0 1 0-.7l3.05-3.06a.2.2 0 0 1 .34.14v1.02c0 .25-.1.48-.27.66l-2.2 2.2a.47.47 0 0 1-.66 0l-.26-.26Z',
                    className: p
                })
            ]
        })
    );
};
