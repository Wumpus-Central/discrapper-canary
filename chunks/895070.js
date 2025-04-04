n.d(t, { A: () => _ });
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
                    d: 'M15.74 5.74a.5.5 0 0 0 .54.7l5.01-.88a.5.5 0 0 0 .4-.58l-.26-1.47a3 3 0 0 0-3.2-2.47.46.46 0 0 0-.37.26l-2.12 4.44ZM15.13 2.37a.5.5 0 0 0-.53-.7l-4.25.74a.5.5 0 0 0-.37.28L7.87 7.13a.5.5 0 0 0 .53.7l4.25-.74a.5.5 0 0 0 .37-.28l2.11-4.44ZM6.72 3.05l-2.55.45a3 3 0 0 0-2.43 3.48L2 8.46c.05.27.3.45.58.4l2.2-.39a.5.5 0 0 0 .36-.27l2.12-4.44a.5.5 0 0 0-.54-.7Z',
                    className: p
                }),
                (0, r.jsx)('path', {
                    fill: 'string' == typeof _ ? _ : _.css,
                    fillRule: 'evenodd',
                    d: 'M2 10.5c0-.28.22-.5.5-.5h19c.28 0 .5.22.5.5V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-8.5ZM5 14a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H6Z',
                    clipRule: 'evenodd',
                    className: p
                })
            ]
        })
    );
};
