n.d(t, { Z: () => v });
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(785717),
    l = n(510659),
    c = n(899007),
    u = n(287954),
    d = n(660579),
    f = n(64621),
    _ = n(228168),
    p = n(487784);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function v(e) {
    var { user: t, profileType: n, animateOnHover: a, onOpenProfile: h } = e,
        g = b(e, ['user', 'profileType', 'animateOnHover', 'onOpenProfile']);
    let y = i.useRef(null),
        v = _.n_.AVATAR,
        { trackUserProfileAction: O } = (0, s.KZ)(),
        { interactionSource: I } = (0, l.Xo)(),
        S = o()(p.avatar, {
            [p.hoisted]: I === _.n_.AVATAR || I === _.n_.STATUS,
            [p.biteSize]: n === _.y0.BITE_SIZE,
            [p.fullSize]: n === _.y0.FULL_SIZE,
            [p.panel]: n === _.y0.PANEL
        });
    return (0, r.jsx)(f.Z, {
        targetElementRef: y,
        sourceType: _.n_.AVATAR,
        user: t,
        children: (0, r.jsx)(
            u.Z,
            E(
                m(
                    {
                        user: t,
                        className: S,
                        profileType: n,
                        sourceType: v,
                        onAction: O
                    },
                    g
                ),
                {
                    children: () =>
                        (0, r.jsx)(d.Z, {
                            ref: y,
                            className: S,
                            user: t,
                            sourceType: v,
                            onAction: O,
                            children: (0, r.jsx)(
                                c.Z,
                                m(
                                    {
                                        user: t,
                                        animateOnHover: a,
                                        onOpenProfile: h,
                                        profileType: n,
                                        className: p.withReactReply
                                    },
                                    g
                                )
                            )
                        })
                }
            )
        )
    });
}
