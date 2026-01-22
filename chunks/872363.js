n.d(t, { A: () => U }), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(432022),
    o = n(23339),
    c = n(311907),
    u = n(827734),
    d = n(990078),
    f = n(319060),
    p = n(397927),
    b = n(212245),
    g = n(688810),
    m = n(402216),
    h = n(576622),
    A = n(287809),
    y = n(954571),
    _ = n(927578),
    E = n(650338),
    v = n(821715),
    O = n(652215),
    x = n(788868),
    S = n(985018),
    N = n(176273);
function C(e) {
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
let T = (0, o.xI)(f.A.LIVE_INDICATOR_BORDER_RADIUS),
    I = {
        opacity: 0,
        transform: "translate3d(100%, 0, 0)",
    },
    w = {
        opacity: 1,
        transform: "translate3d(0%, 0, 0)",
    },
    R = { opacity: 0 },
    P = { opacity: 1 },
    D = { borderRadius: "".concat(T, "px ").concat(T, "px ").concat(T, "px ").concat(T, "px") },
    k = { borderRadius: "0px ".concat(T, "px ").concat(T, "px 0px") },
    L = {
        mass: 1,
        tension: 500,
        friction: 18,
        clamp: !0,
    },
    M = (e) => {
        let t,
            i,
            {
                participant: s,
                isUpsellEnabled: o,
                shape: f,
                size: h,
                didTrackUpsellViewed: T,
                setDidTrackUpsellViewed: I,
                className: w,
                premiumIndicator: R,
                quality: P,
            } = e,
            { analyticsLocations: D } = (0, g.Ay)(),
            k = null != (0, v.A)(s);
        try {
            t = (0, E.HB)(P);
        } catch (e) {
            t = !1;
        }
        try {
            i = (0, E.OI)(P);
        } catch (e) {
            i = !1;
        }
        let L = t || i,
            { location: M } = (0, b.p)(),
            U = (0, c.bG)([A.default], () => A.default.getCurrentUser()),
            V = o && !_.Ay.isPremium(U, x.PremiumTypes.TIER_1) && !_.Ay.canStreamQuality(_.Ay.StreamQuality.MID, U),
            F = r.useCallback(() => {
                V &&
                    L &&
                    (0, p.mMO)(async () => {
                        let { default: e } = await n.e("18630").then(n.bind(n, 826789));
                        return (t) => (0, l.jsx)(e, j(C({}, t), { analyticsSource: M }));
                    });
            }, [V, L, M]);
        if (
            (r.useEffect(() => {
                !T &&
                    L &&
                    (y.default.track(O.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: x.e.STREAM_QUALITY_INDICATOR,
                        has_premium_stream_fps: t,
                        has_premium_stream_resolution: i,
                        location_stack: D,
                    }),
                    I(!0));
            }, [t, i, L, T, I, D]),
            null == P)
        )
            return null;
        let G = (0, l.jsx)(d.m, {
            text: k ? S.intl.string(S.t.q8TiVt) : L ? S.intl.string(S.t.IHgpEn) : S.intl.string(S.t.vLb0VW),
            position: "bottom",
            children: (0, l.jsxs)(p.DUT, {
                onClick: F,
                className: a()(N.t5, h, m.u1[f], k ? N.Y5 : N.Lc, { [N.vk]: V && L }),
                children: [
                    L
                        ? (0, l.jsx)(p.tvc, {
                              size: "md",
                              color: "currentColor",
                              className: N.fY,
                          })
                        : null,
                    (0, l.jsx)("span", {
                        className: N.UD,
                        children: (0, E.ME)(P.maxResolution),
                    }),
                    (0, l.jsx)("span", { children: (0, E.Bs)(P.maxFrameRate) }),
                ],
            }),
        });
        return (0, l.jsx)(p.LpS, {
            text: G,
            className: a()(w, N.AA, { [N.Dc]: L && R }),
            color: u.A.unsafe_rawColors.PRIMARY_500.css,
            shape: m.u1[f],
        });
    },
    U = (e) => {
        let { participant: t, showQuality: n, isUpsellEnabled: i = !0, size: o, className: c, premiumIndicator: u } = e,
            [d, f] = r.useState(!1),
            b = (0, E.N5)(t),
            { reducedMotion: g } = r.useContext(p.CZY),
            A = n && null != b;
        r.useEffect(() => {
            (0, h.A)(t.stream.ownerId, t.user.getAvatarURL(t.stream.guildId, 80), { dispatchWait: !0 });
        }, [t]);
        let y = (0, p.pnh)(
                A,
                {
                    enter: {
                        from: g.enabled ? R : I,
                        to: g.enabled ? P : w,
                    },
                    leave: g.enabled ? R : I,
                    config: L,
                },
                "animate-always",
            ),
            _ = (0, p.zhh)(
                {
                    to: A ? k : D,
                    config: L,
                },
                "animate-always",
            );
        return ((e) => {
            let { className: n, popoutProps: r } = e;
            return (0, l.jsxs)(
                "div",
                j(C({ className: a()(N.dr, n) }, r), {
                    children: [
                        y((e, n) =>
                            n
                                ? (0, l.jsx)(s.animated.div, {
                                      style: e,
                                      children: (0, l.jsx)(M, {
                                          className: N.LZ,
                                          participant: t,
                                          size: o,
                                          shape: p.EGs.ROUND_LEFT,
                                          isUpsellEnabled: i,
                                          didTrackUpsellViewed: d,
                                          setDidTrackUpsellViewed: f,
                                          premiumIndicator: u,
                                          quality: b,
                                      }),
                                  })
                                : null,
                        ),
                        (0, l.jsx)(s.animated.div, {
                            style: _,
                            className: N.Ok,
                            children: (0, l.jsx)(m.Ay, {
                                look: m.gv.RED,
                                size: o,
                                shape: A ? p.EGs.ROUND_RIGHT : p.EGs.ROUND,
                            }),
                        }),
                    ],
                }),
            );
        })({ className: c });
    };
