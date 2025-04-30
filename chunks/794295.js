n.d(t, { Z: () => E });
var r = n(255367),
    i = n(73800),
    a = n(159635),
    o = n.n(a),
    s = n(481060),
    l = n(100527),
    c = n(906732),
    u = n(49012);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let g = 1,
    E = i.memo(function (e) {
        let { onClick: t, trusted: n, title: a, href: d, children: _, messageId: m, channelId: E } = e,
            b = h(e, ['onClick', 'trusted', 'title', 'href', 'children', 'messageId', 'channelId']),
            { analyticsLocations: y } = (0, c.ZP)(l.Z.MASKED_LINK),
            O = i.useCallback((t) => (0, u.q)(e, t, y), [y, e]),
            v = i.useCallback(
                (e) => {
                    e.button === g && O(e);
                },
                [O]
            ),
            I = o().sanitizeUrl(d);
        return (0, r.jsx)(
            s.eee,
            p(f({}, b), {
                title: a,
                target: '_blank',
                rel: 'noreferrer noopener',
                href: I,
                onClick: O,
                onAuxClick: v,
                children: null != _ ? _ : a
            })
        );
    });
