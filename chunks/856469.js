n.d(t, { l: () => _ });
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
    return (0, r.jsx)(
        'svg',
        u(l({}, (0, o.Z)(h)), {
            xmlns: 'http://www.w3.org/2000/svg',
            width: g,
            height: E,
            fill: 'none',
            viewBox: '0 0 24 24',
            children: (0, r.jsx)('path', {
                fill: 'string' == typeof _ ? _ : _.css,
                d: 'M16.44 6.96c.29 0 .51.25.47.54l-.82 6.34c-.02.08-.03.2-.03.34 0 .71.28 1.07.85 1.07.49 0 .94-.21 1.36-.63.43-.42.77-1 1.02-1.72.26-.75.38-1.57.38-2.48 0-1.35-.29-2.54-.87-3.56a5.92 5.92 0 0 0-2.45-2.35 7.68 7.68 0 0 0-3.61-.83c-1.55 0-2.96.37-4.22 1.1a7.66 7.66 0 0 0-2.96 3.07 9.53 9.53 0 0 0-1.09 4.66c0 1.45.26 2.77.78 3.95a6.3 6.3 0 0 0 2.47 2.81 8.3 8.3 0 0 0 4.36 1.05 12.43 12.43 0 0 0 5.35-1.18.5.5 0 0 1 .7.24l.46 1.07c.1.22.02.47-.19.59-.77.43-1.69.77-2.75 1.02-1.23.3-2.48.44-3.76.44-2.18 0-4-.44-5.48-1.33a8.1 8.1 0 0 1-3.27-3.57 11.93 11.93 0 0 1-1.07-5.12c0-2.24.47-4.19 1.4-5.84a9.7 9.7 0 0 1 3.86-3.8c1.62-.9 3.4-1.34 5.36-1.34 1.8 0 3.4.37 4.8 1.12 1.4.72 2.5 1.76 3.28 3.1a8.86 8.86 0 0 1 1.16 4.56c0 1.36-.23 2.57-.7 3.64a5.81 5.81 0 0 1-1.92 2.47c-.82.58-1.76.87-2.81.87a2.4 2.4 0 0 1-1.6-.5c-.4-.35-.65-.78-.73-1.32-.3.55-.74 1-1.36 1.34a4.3 4.3 0 0 1-2.03.48A3.4 3.4 0 0 1 8 16C7.33 15.16 7 14 7 12.5c0-1.14.2-2.16.6-3.05.43-.89 1-1.57 1.73-2.06a4.3 4.3 0 0 1 4.27-.31c.47.29.82.68 1.07 1.16l.3-.95c.06-.2.25-.33.46-.33h1.02Zm-5.06 8.24c.8 0 1.45-.35 1.97-1.04.51-.7.77-1.6.77-2.7 0-.88-.18-1.56-.53-2.03a1.76 1.76 0 0 0-1.5-.73c-.8 0-1.45.35-1.97 1.04a4.28 4.28 0 0 0-.78 2.67c0 .9.17 1.58.51 2.06.36.49.87.73 1.53.73Z',
                className: p
            })
        })
    );
};
