n.d(t, {
    A: () => M,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    o = n(864605),
    s = n(23339),
    c = n(311907),
    u = n(827734),
    d = n(990078),
    f = n(319060),
    p = n(397927),
    g = n(212245),
    m = n(688810),
    _ = n(402216),
    h = n(287809),
    y = n(954571),
    A = n(927578),
    b = n(650338),
    E = n(821715),
    v = n(652215),
    O = n(788868),
    x = n(985018),
    S = n(176273);

function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = (0, s.xI)(f.A.LIVE_INDICATOR_BORDER_RADIUS),
    j = {
        opacity: 0,
        transform: "translate3d(100%, 0, 0)",
    },
    T = {
        opacity: 1,
        transform: "translate3d(0%, 0, 0)",
    },
    w = {
        opacity: 0,
    },
    P = {
        opacity: 1,
    },
    R = {
        borderRadius: "".concat(I, "px ").concat(I, "px ").concat(I, "px ").concat(I, "px"),
    },
    D = {
        borderRadius: "0px ".concat(I, "px ").concat(I, "px 0px"),
    },
    k = {
        mass: 1,
        tension: 500,
        friction: 18,
        clamp: !0,
    },
    L = (e) => {
        let t,
            i,
            {
                participant: o,
                isUpsellEnabled: s,
                shape: f,
                size: I,
                didTrackUpsellViewed: j,
                setDidTrackUpsellViewed: T,
                className: w,
                premiumIndicator: P,
                quality: R,
            } = e,
            { analyticsLocations: D } = (0, m.Ay)(),
            k = null != (0, E.A)(o);
        try {
            t = (0, b.HB)(R);
        } catch (e) {
            t = !1;
        }
        try {
            i = (0, b.OI)(R);
        } catch (e) {
            i = !1;
        }
        let L = t || i,
            { location: M } = (0, g.p)(),
            U = (0, c.bG)([h.default], () => h.default.getCurrentUser()),
            V = s && !A.Ay.isPremium(U, O.PremiumTypes.TIER_1) && !A.Ay.canStreamQuality(A.Ay.StreamQuality.MID, U),
            F = l.useCallback(() => {
                V &&
                    L &&
                    (0, p.mMO)(async () => {
                        let { default: e } = await n.e("18630").then(n.bind(n, 826789));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                N(C({}, t), {
                                    analyticsSource: M,
                                }),
                            );
                    });
            }, [V, L, M]);
        if (
            (l.useEffect(() => {
                !j &&
                    L &&
                    (y.default.track(v.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: O.e.STREAM_QUALITY_INDICATOR,
                        has_premium_stream_fps: t,
                        has_premium_stream_resolution: i,
                        location_stack: D,
                    }),
                    T(!0));
            }, [t, i, L, j, T, D]),
            null == R)
        )
            return null;
        let G = (0, r.jsx)(d.m, {
            text: k ? x.intl.string(x.t.q8TiVt) : L ? x.intl.string(x.t.IHgpEn) : x.intl.string(x.t.vLb0VW),
            position: "bottom",
            children: (0, r.jsxs)(p.DUT, {
                onClick: F,
                className: a()(S.t5, I, _.u1[f], k ? S.Y5 : S.Lc, {
                    [S.vk]: V && L,
                }),
                children: [
                    L
                        ? (0, r.jsx)(p.tvc, {
                              size: "md",
                              color: "currentColor",
                              className: S.fY,
                          })
                        : null,
                    (0, r.jsx)("span", {
                        className: S.UD,
                        children: (0, b.ME)(R.maxResolution),
                    }),
                    (0, r.jsx)("span", {
                        children: (0, b.Bs)(R.maxFrameRate),
                    }),
                ],
            }),
        });
        return (0, r.jsx)(p.LpS, {
            text: G,
            className: a()(w, S.AA, {
                [S.Dc]: L && P,
            }),
            color: u.A.unsafe_rawColors.PRIMARY_500.css,
            shape: _.u1[f],
        });
    },
    M = (e) => {
        let { participant: t, showQuality: n, isUpsellEnabled: i = !0, size: s, className: c, premiumIndicator: u } = e,
            [d, f] = l.useState(!1),
            g = (0, b.N5)(t),
            { reducedMotion: m } = l.useContext(p.CZY),
            h = n && null != g,
            y = (0, p.pnh)(
                h,
                {
                    enter: {
                        from: m.enabled ? w : j,
                        to: m.enabled ? P : T,
                    },
                    leave: m.enabled ? w : j,
                    config: k,
                },
                "animate-always",
            ),
            A = (0, p.zhh)(
                {
                    to: h ? D : R,
                    config: k,
                },
                "animate-always",
            );
        return ((e) => {
            let { className: n, popoutProps: l } = e;
            return (0, r.jsxs)(
                "div",
                N(
                    C(
                        {
                            className: a()(S.dr, n),
                        },
                        l,
                    ),
                    {
                        children: [
                            y((e, n) =>
                                n
                                    ? (0, r.jsx)(o.animated.div, {
                                          style: e,
                                          children: (0, r.jsx)(L, {
                                              className: S.LZ,
                                              participant: t,
                                              size: s,
                                              shape: p.EGs.ROUND_LEFT,
                                              isUpsellEnabled: i,
                                              didTrackUpsellViewed: d,
                                              setDidTrackUpsellViewed: f,
                                              premiumIndicator: u,
                                              quality: g,
                                          }),
                                      })
                                    : null,
                            ),
                            (0, r.jsx)(o.animated.div, {
                                style: A,
                                className: S.Ok,
                                children: (0, r.jsx)(_.Ay, {
                                    look: _.gv.RED,
                                    size: s,
                                    shape: h ? p.EGs.ROUND_RIGHT : p.EGs.ROUND,
                                }),
                            }),
                        ],
                    },
                ),
            );
        })({
            className: c,
        });
    };
