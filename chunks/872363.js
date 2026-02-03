n.d(t, {
    A: () => L,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(92674),
    o = n(23339),
    c = n(311907),
    u = n(827734),
    d = n(990078),
    h = n(319060),
    p = n(397927),
    f = n(212245),
    m = n(688810),
    g = n(402216),
    A = n(287809),
    b = n(954571),
    _ = n(927578),
    y = n(650338),
    v = n(821715),
    E = n(652215),
    O = n(788868),
    C = n(985018),
    S = n(176273);

function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}

function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = (0, o.xI)(h.A.LIVE_INDICATOR_BORDER_RADIUS),
    T = {
        opacity: 0,
        transform: "translate3d(100%, 0, 0)",
    },
    N = {
        opacity: 1,
        transform: "translate3d(0%, 0, 0)",
    },
    P = {
        opacity: 0,
    },
    w = {
        opacity: 1,
    },
    R = {
        borderRadius: "".concat(I, "px ").concat(I, "px ").concat(I, "px ").concat(I, "px"),
    },
    D = {
        borderRadius: "0px ".concat(I, "px ").concat(I, "px 0px"),
    },
    M = {
        mass: 1,
        tension: 500,
        friction: 18,
        clamp: !0,
    },
    k = (e) => {
        let t,
            i,
            {
                participant: s,
                isUpsellEnabled: o,
                shape: h,
                size: I,
                didTrackUpsellViewed: T,
                setDidTrackUpsellViewed: N,
                className: P,
                premiumIndicator: w,
                quality: R,
            } = e,
            { analyticsLocations: D } = (0, m.Ay)(),
            M = null != (0, v.A)(s);
        try {
            t = (0, y.HB)(R);
        } catch (e) {
            t = !1;
        }
        try {
            i = (0, y.OI)(R);
        } catch (e) {
            i = !1;
        }
        let k = t || i,
            { location: L } = (0, f.p)(),
            U = (0, c.bG)([A.default], () => A.default.getCurrentUser()),
            G = o && !_.Ay.isPremium(U, O.PremiumTypes.TIER_1) && !_.Ay.canStreamQuality(_.Ay.StreamQuality.MID, U),
            F = r.useCallback(() => {
                G &&
                    k &&
                    (0, p.mMO)(async () => {
                        let { default: e } = await n.e("18630").then(n.bind(n, 826789));
                        return (t) =>
                            (0, l.jsx)(
                                e,
                                j(x({}, t), {
                                    analyticsSource: L,
                                }),
                            );
                    });
            }, [G, k, L]);
        if (
            (r.useEffect(() => {
                !T &&
                    k &&
                    (b.default.track(E.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: O.e.STREAM_QUALITY_INDICATOR,
                        has_premium_stream_fps: t,
                        has_premium_stream_resolution: i,
                        location_stack: D,
                    }),
                    N(!0));
            }, [t, i, k, T, N, D]),
            null == R)
        )
            return null;
        let H = (0, l.jsx)(d.m, {
            text: M ? C.intl.string(C.t.q8TiVt) : k ? C.intl.string(C.t.IHgpEn) : C.intl.string(C.t.vLb0VW),
            position: "bottom",
            children: (0, l.jsxs)(p.DUT, {
                onClick: F,
                className: a()(S.t5, I, g.u1[h], M ? S.Y5 : S.Lc, {
                    [S.vk]: G && k,
                }),
                children: [
                    k
                        ? (0, l.jsx)(p.tvc, {
                              size: "md",
                              color: "currentColor",
                              className: S.fY,
                          })
                        : null,
                    (0, l.jsx)("span", {
                        className: S.UD,
                        children: (0, y.ME)(R.maxResolution),
                    }),
                    (0, l.jsx)("span", {
                        children: (0, y.Bs)(R.maxFrameRate),
                    }),
                ],
            }),
        });
        return (0, l.jsx)(p.LpS, {
            text: H,
            className: a()(P, S.AA, {
                [S.Dc]: k && w,
            }),
            color: u.A.unsafe_rawColors.PRIMARY_500.css,
            shape: g.u1[h],
        });
    },
    L = (e) => {
        let { participant: t, showQuality: n, isUpsellEnabled: i = !0, size: o, className: c, premiumIndicator: u } = e,
            [d, h] = r.useState(!1),
            f = (0, y.N5)(t),
            { reducedMotion: m } = r.useContext(p.CZY),
            A = n && null != f,
            b = (0, p.pnh)(
                A,
                {
                    enter: {
                        from: m.enabled ? P : T,
                        to: m.enabled ? w : N,
                    },
                    leave: m.enabled ? P : T,
                    config: M,
                },
                "animate-always",
            ),
            _ = (0, p.zhh)(
                {
                    to: A ? D : R,
                    config: M,
                },
                "animate-always",
            );
        return ((e) => {
            let { className: n, popoutProps: r } = e;
            return (0, l.jsxs)(
                "div",
                j(
                    x(
                        {
                            className: a()(S.dr, n),
                        },
                        r,
                    ),
                    {
                        children: [
                            b((e, n) =>
                                n
                                    ? (0, l.jsx)(s.animated.div, {
                                          style: e,
                                          children: (0, l.jsx)(k, {
                                              className: S.LZ,
                                              participant: t,
                                              size: o,
                                              shape: p.EGs.ROUND_LEFT,
                                              isUpsellEnabled: i,
                                              didTrackUpsellViewed: d,
                                              setDidTrackUpsellViewed: h,
                                              premiumIndicator: u,
                                              quality: f,
                                          }),
                                      })
                                    : null,
                            ),
                            (0, l.jsx)(s.animated.div, {
                                style: _,
                                className: S.Ok,
                                children: (0, l.jsx)(g.Ay, {
                                    look: g.gv.RED,
                                    size: o,
                                    shape: A ? p.EGs.ROUND_RIGHT : p.EGs.ROUND,
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
