n.d(t, { Z: () => b });
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
    p = n(715047);
function _(e, t, n) {
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
                _(e, t, n[t]);
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
        i = v(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function b(e) {
    var { user: t, profileType: n, animateOnHover: i, onOpenProfile: _ } = e,
        m = E(e, ['user', 'profileType', 'animateOnHover', 'onOpenProfile']);
    let v = f.n_.AVATAR,
        { trackUserProfileAction: b } = (0, a.KZ)(),
        { interactionSource: y } = (0, s.Xo)(),
        O = o()(p.avatar, {
            [p.hoisted]: y === f.n_.AVATAR || y === f.n_.STATUS,
            [p.biteSize]: n === f.y0.BITE_SIZE,
            [p.fullSize]: n === f.y0.FULL_SIZE,
            [p.panel]: n === f.y0.PANEL
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
                        sourceType: v,
                        onAction: b
                    },
                    m
                ),
                {
                    children: () =>
                        (0, r.jsx)(u.Z, {
                            className: O,
                            user: t,
                            sourceType: v,
                            onAction: b,
                            children: (0, r.jsx)(
                                l.Z,
                                h(
                                    {
                                        user: t,
                                        animateOnHover: i,
                                        onOpenProfile: _,
                                        profileType: n,
                                        className: p.withReactReply
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
