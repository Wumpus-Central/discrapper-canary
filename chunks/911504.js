n.d(t, { $: () => f });
var r = n(255367);
n(73800);
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            }));
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let f = (e) => {
    var t,
        n,
        { size: s = 'md', width: c, height: _, color: f = i.Z.colors.INTERACTIVE_NORMAL, colorClass: p = '' } = e,
        h = d(e, ['size', 'width', 'height', 'color', 'colorClass']);
    let m = (0, o.m)(s),
        g = null != (t = null == m ? void 0 : m.width) ? t : c,
        E = null != (n = null == m ? void 0 : m.height) ? n : _;
    return (0, r.jsxs)(
        'svg',
        u(l({}, (0, a.Z)(h)), {
            xmlns: 'http://www.w3.org/2000/svg',
            width: g,
            height: E,
            fill: 'none',
            viewBox: '0 0 24 24',
            children: [
                (0, r.jsx)('path', {
                    fill: 'string' == typeof f ? f : f.css,
                    d: 'M18.48 13.39a.56.56 0 0 1 1.04 0l.84 2.25 2.25.84c.48.18.48.86 0 1.04l-2.25.84-.84 2.25a.56.56 0 0 1-1.04 0l-.84-2.25-2.25-.84a.56.56 0 0 1 0-1.04l2.25-.84.84-2.25Zm-4.4-5.63c.26-.26.73-.2 1.06.13l1.53 1.53c.33.33.39.8.13 1.06L6.73 20.55c-.26.26-.73.2-1.06-.13L4.14 18.9c-.33-.33-.39-.8-.13-1.05L14.09 7.76Zm3.68-3.88c.26-.25.73-.2 1.05.13l1.54 1.54c.33.33.38.8.13 1.05L18.4 8.68c-.25.25-.72.2-1.05-.13L15.81 7c-.32-.32-.38-.8-.13-1.05l2.08-2.08ZM9.53 1.25a.5.5 0 0 1 .94 0l.62 1.66 1.66.62a.5.5 0 0 1 0 .94l-1.66.62-.62 1.66a.5.5 0 0 1-.94 0L8.91 5.1l-1.66-.62a.5.5 0 0 1 0-.94l1.66-.62.62-1.66Z',
                    className: p
                }),
                (0, r.jsx)('path', {
                    fill: 'string' == typeof f ? f : f.css,
                    d: 'M18.48 13.39a.56.56 0 0 1 1.04 0l.84 2.25 2.25.84c.48.18.48.86 0 1.04l-2.25.84-.84 2.25a.56.56 0 0 1-1.04 0l-.84-2.25-2.25-.84a.56.56 0 0 1 0-1.04l2.25-.84.84-2.25ZM14.09 7.76c.25-.26.72-.2 1.05.13l1.53 1.53c.33.33.39.8.13 1.06L6.73 20.55c-.26.26-.73.2-1.06-.13L4.14 18.9c-.33-.33-.39-.8-.13-1.05L14.09 7.76ZM17.76 3.88c.26-.25.73-.2 1.05.13l1.54 1.54c.33.33.38.8.13 1.05L18.4 8.68c-.25.25-.72.2-1.05-.13L15.8 7c-.32-.32-.38-.8-.13-1.05l2.08-2.08ZM9.53 1.25a.5.5 0 0 1 .94 0l.62 1.66 1.66.62a.5.5 0 0 1 0 .94l-1.66.62-.62 1.66a.5.5 0 0 1-.94 0L8.91 5.1l-1.66-.62a.5.5 0 0 1 0-.94l1.66-.62.62-1.66Z',
                    className: p
                })
            ]
        })
    );
};
