n.d(t, { u: () => h });
var r = n(255367);
n(73800);
var i = n(257465),
    a = n(369585),
    o = n(103866),
    s = n(213734),
    l = n(37148);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            }));
    }
    return e;
}
function d(e, t) {
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
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function h(e) {
    var { size: t, title: n, subtitle: c, input: d, preview: p, actions: h, actionBarInput: m, children: g } = e,
        E = _(e, ['size', 'title', 'subtitle', 'input', 'preview', 'actions', 'actionBarInput', 'children']);
    let b = null != t ? t : null != d || null != g ? 'md' : 'sm';
    return (0, r.jsxs)(
        i.IX,
        f(u({}, E), {
            size: b,
            children: [
                (0, r.jsx)(l.x, {
                    title: n,
                    subtitle: c
                }),
                (0, r.jsx)(o.f, {
                    controls: d,
                    children: g
                }),
                (0, r.jsx)(s.m, { children: p }),
                (0, r.jsx)(a.G, {
                    leading: m,
                    actions: h,
                    actionsFullWidth: null == m
                })
            ]
        })
    );
}
