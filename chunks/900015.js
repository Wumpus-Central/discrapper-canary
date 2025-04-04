n.d(t, { D: () => _ });
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
                    d: 'M9.12 1.88A3 3 0 0 1 11.24 1H17a2 2 0 0 1 1.94 1.5c.07.27-.16.5-.44.5h-4.26a4 4 0 0 0-2.83 1.17l-7.25 7.25c-.5.51-.85 1.12-1.03 1.77-.12.45-.74.7-1.06.38l-.2-.2a3 3 0 0 1 0-4.24l7.25-7.25Z',
                    className: p
                }),
                (0, r.jsx)('path', {
                    fill: 'string' == typeof _ ? _ : _.css,
                    fillRule: 'evenodd',
                    d: 'M13.12 5.88A3 3 0 0 1 15.24 5H21a2 2 0 0 1 2 2v5.76a3 3 0 0 1-.88 2.12l-7.25 7.25a3 3 0 0 1-4.24 0l-4.76-4.76a3 3 0 0 1 0-4.24l7.25-7.25ZM20 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z',
                    clipRule: 'evenodd',
                    className: p
                })
            ]
        })
    );
};
