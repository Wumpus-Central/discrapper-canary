n.d(t, { Z: () => y });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(785717),
    s = n(510659),
    l = n(899007),
    c = n(287954),
    u = n(660579),
    d = n(64621),
    f = n(228168),
    _ = n(487784);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = b(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function y(e) {
    var { user: t, profileType: n, animateOnHover: i, onOpenProfile: p } = e,
        m = E(e, ['user', 'profileType', 'animateOnHover', 'onOpenProfile']);
    let b = f.n_.AVATAR,
        { trackUserProfileAction: y } = (0, a.KZ)(),
        { interactionSource: v } = (0, s.Xo)(),
        O = o()(_.avatar, {
            [_.hoisted]: v === f.n_.AVATAR || v === f.n_.STATUS,
            [_.biteSize]: n === f.y0.BITE_SIZE,
            [_.fullSize]: n === f.y0.FULL_SIZE,
            [_.panel]: n === f.y0.PANEL
        });
    return (0, r.jsx)(d.Z, {
        sourceType: f.n_.AVATAR,
        user: t,
        children: (0, r.jsx)(
            c.Z,
            g(
                h(
                    {
                        user: t,
                        className: O,
                        profileType: n,
                        sourceType: b,
                        onAction: y
                    },
                    m
                ),
                {
                    children: () =>
                        (0, r.jsx)(u.Z, {
                            className: O,
                            user: t,
                            sourceType: b,
                            onAction: y,
                            children: (0, r.jsx)(
                                l.Z,
                                h(
                                    {
                                        user: t,
                                        animateOnHover: i,
                                        onOpenProfile: p,
                                        profileType: n,
                                        className: _.withReactReply
                                    },
                                    m
                                )
                            )
                        })
                }
            )
        )
    });
}
