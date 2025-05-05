n.d(t, { Z: () => f });
var r = n(255367),
    i = n(73800),
    a = n(793030),
    o = n(256139),
    s = n(866040);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e) {
    let { user: t, text: n, channel: l, textClassName: u, onPopoutClosed: f } = e,
        _ = (0, i.useMemo)(() => [t], [t]);
    return (0, r.jsx)(s.Z, {
        participants: _,
        channel: l,
        onPopoutClosed: f,
        children: (e) =>
            (0, r.jsx)(
                o.Z,
                d(c({}, e), {
                    tag: 'span',
                    children: (0, r.jsx)(a.xv, {
                        className: u,
                        variant: 'text-sm/semibold',
                        color: 'text-primary',
                        lineClamp: 1,
                        scaleFontToUserSetting: !0,
                        children: n
                    })
                })
            )
    });
}
