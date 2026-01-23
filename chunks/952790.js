n.d(t, {
    Ay: () => w,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(108531),
    o = n(607399),
    c = n(311907),
    u = n(990078),
    d = n(397927),
    p = n(454938),
    h = n(855687),
    f = n(731091),
    g = n(544028),
    m = n(253932),
    b = n(576705),
    A = n(486020),
    y = n(885631),
    _ = n(986268),
    O = n(652215),
    j = n(349828),
    v = n(985018),
    x = n(668560);

function E(e) {
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

function C(e) {
    var t;
    let { guild: n, controller: l, guildBanner: i, animate: c } = e,
        { value: u } = l.springs;
    return (0, r.jsx)(a.animated.div, {
        className: x.nI,
        style: {
            opacity: u,
            transform: u.to((e) => "translateY(-".concat((1 - e) * 90, "px)")),
        },
        children: (0, r.jsx)(a.animated.div, {
            className: s()(x._e, {
                [x.fr]: o.Fr,
            }),
            style: {
                transform: u.to((e) => "translateY(".concat((1 - e) * 90, "px)")),
            },
            children: (0, r.jsx)("img", {
                className: s()(x.Q, {
                    [x.fr]: o.Fr,
                }),
                src:
                    null !=
                    (t = A.Ay.getGuildBannerURL(
                        {
                            id: n.id,
                            banner: i,
                        },
                        c,
                    ))
                        ? t
                        : "",
                alt: "",
                "aria-hidden": !0,
            }),
        }),
    });
}

function S(e) {
    let { guild: t, controller: n, hasBanner: l, hasSubheader: i } = e,
        { value: o } = n.springs,
        c = t.features.has(O.GuildFeatures.DISCOVERABLE),
        p = (0, r.jsx)("div", {
            className: x.WV,
            children:
                c &&
                (0, r.jsx)(u.m, {
                    text: v.intl.string(v.t.O8lDI2),
                    position: "right",
                    children: (0, r.jsxs)("div", {
                        className: x.Pl,
                        children: [
                            (0, r.jsx)(d.L_e, {
                                size: "custom",
                                color: "currentColor",
                                width: 12,
                                height: 12,
                                className: x.ju,
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "none",
                                children: v.intl.string(v.t["B/vjCu"]),
                            }),
                        ],
                    }),
                }),
        });
    return i
        ? (0, r.jsx)("div", {
              className: s()(x.pS, x.W$),
              children: p,
          })
        : (0, r.jsx)(a.animated.div, {
              className: x.pS,
              style: l
                  ? {
                        opacity: o,
                    }
                  : {
                        height: o.to((e) => "".concat(20 * e, "px")),
                    },
              children: p,
          });
}

function I() {
    return (0, r.jsx)(d.Gg5, {
        size: "custom",
        color: "currentColor",
        className: x.PA,
        height: 20,
        width: 20,
    });
}

function N(e) {
    let { guild: t } = e;
    return (0, r.jsx)(d.Heading, {
        variant: "text-md/semibold",
        lineClamp: 1,
        className: x.UU,
        children: t.name,
    });
}
let T = [j.V, O.gNP];

function P(e) {
    var t;
    let { bannerVisible: i, guild: s, onClick: a, onContextMenu: o, ariaControls: p, ariaExpanded: g, children: m } = e,
        A = (0, c.bG)([b.A], () => (0, h.K)(b.A, s)),
        y = l.useCallback(() => {
            A
                ? (0, d.mMO)(async () => {
                      let { default: e } = await Promise.all([n.e("43600"), n.e("65202")]).then(n.bind(n, 234355));
                      return (t) => {
                          var n, l;
                          return (0, r.jsx)(
                              e,
                              ((n = E({}, t)),
                              (l = l =
                                  {
                                      guild: s,
                                      source: O.PE1.GUILD_HEADER_INVITE_BUTTON,
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(l)).forEach(function (e) {
                                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                                    }),
                              n),
                          );
                      };
                  })
                : (0, d.mMO)(async () => {
                      let { default: e } = await n.e("62751").then(n.bind(n, 132610));
                      return (t) => (0, r.jsx)(e, E({}, t));
                  });
        }, [A, s]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(d.DUT, {
                className: x.Vm,
                "aria-label": v.intl.formatToPlainString(v.t.xMXpl3, {
                    guildName: null != (t = null == s ? void 0 : s.name) ? t : "",
                }),
                "aria-controls": p,
                "aria-expanded": g,
                onContextMenu: o,
                onClick: a,
                children: [
                    (0, r.jsxs)("div", {
                        className: x.LO,
                        children: [
                            (0, r.jsx)(_.A, {
                                guild: s,
                                isBannerVisible: i,
                            }),
                            s.id === j.V && (0, r.jsx)(I, {}),
                            (0, r.jsx)(N, {
                                guild: s,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: x.dx,
                        children: m,
                    }),
                ],
            }),
            !T.includes(s.id) &&
                (0, r.jsx)(u.m, {
                    text: v.intl.string(v.t.Sd8Ixw),
                    position: "bottom",
                    asContainer: !0,
                    children: (0, r.jsx)(d.DUT, {
                        className: x.ak,
                        onClick: () => {
                            y();
                        },
                        children: (0, r.jsx)(d.DpX, {
                            size: "refresh_sm",
                            color: "currentColor",
                        }),
                    }),
                }),
            s.id === O.gNP && (0, r.jsx)(f.g, {}),
        ],
    });
}
let w = l.memo(function (e) {
    let {
            ref: t,
            bannerVisible: n,
            controller: i,
            className: a,
            onClick: u,
            onContextMenu: h,
            onMouseDown: f,
            disableBannerAnimation: b,
            "aria-expanded": _,
            "aria-controls": j,
            guild: v,
            guildBanner: E,
            animationOverlayHeight: I,
            children: N,
            headerClassName: T,
            communityInfoVisible: w,
            hasSubheader: D,
        } = e,
        M = v.features.has(O.GuildFeatures.ANIMATED_BANNER),
        L = (0, p.A)(v),
        k = !L && (0, y.A)(v),
        G = !L && w,
        U = (0, A.VI)(E) && M && !b,
        [B, V] = l.useState(!1),
        F = l.useRef(!1),
        H = l.useRef(null),
        K = null != t ? t : H,
        W = l.useRef(void 0),
        z = m.kt.getSetting(),
        Y = (0, c.bG)([g.A], () => g.A.theme);
    l.useEffect(() => {
        if (U && n && !F.current && z)
            return (
                V(!0),
                (W.current = setTimeout(() => {
                    V(!1);
                }, 5e3)),
                () => {
                    clearTimeout(W.current);
                }
            );
    }, [U, n, z]),
        l.useEffect(() => {
            F.current = n;
        }, [n]);
    let q = () => {
        let { renderBanner: t, guildBanner: n } = e;
        return null != n && !t;
    };
    return (0, r.jsx)(d.NPJ, {
        theme: Y,
        children: (e) =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        "data-has-banner": q(),
                        "data-banner-visible": n,
                        ref: K,
                        className: s()(a, {
                            [x.kL]: !0,
                            [x.r9]: q(),
                            [x.Pi]: n,
                            [e]: !1,
                            [x.Iv]: G || (D && k),
                        }),
                        onMouseDown: f,
                        onContextMenu: h,
                        children: [
                            (0, r.jsxs)("header", {
                                className: s()(x.wx, T, {
                                    [x.jD]: o.Fr,
                                }),
                                children: [
                                    (0, r.jsx)("div", {
                                        className: s()(x.VW, x.Nk),
                                        children: (0, r.jsx)(P, {
                                            bannerVisible: n,
                                            guild: v,
                                            onClick: u,
                                            onContextMenu: h,
                                            ariaControls: j,
                                            ariaExpanded: _,
                                            children: N,
                                        }),
                                    }),
                                    k &&
                                        (0, r.jsx)(S, {
                                            guild: v,
                                            controller: i,
                                            hasBanner: null != E,
                                            hasSubheader: null != D && D,
                                        }),
                                ],
                            }),
                            null != E
                                ? (0, r.jsx)(C, {
                                      guild: v,
                                      controller: i,
                                      guildBanner: E,
                                      animate: B,
                                  })
                                : null,
                            (0, r.jsx)(R, {
                                controller: i,
                            }),
                        ],
                    }),
                    U && q()
                        ? (0, r.jsx)("div", {
                              className: x.rt,
                              onMouseEnter: () => {
                                  V(!0), clearTimeout(W.current);
                              },
                              onMouseLeave: () => V(!1),
                              style: {
                                  height: I,
                              },
                          })
                        : null,
                ],
            }),
    });
});

function R(e) {
    let { controller: t } = e,
        { theme: n } = (0, d.wRf)(),
        l = t.springs.value;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.animated.div, {
                className: x.UL,
                style: {
                    opacity: l.to((e) => 0.5 * e),
                },
            }),
            (0, r.jsx)(a.animated.div, {
                className: x.ze,
                style: {
                    opacity: l.to((e) => e),
                },
            }),
            (0, r.jsx)(a.animated.div, {
                className: x.iI,
                style: {
                    opacity: l.to((e) => (1 - e) * 6),
                    filter: (0, d.qB1)(n) ? l.to((e) => "brightness(".concat(0.75 + 0.25 * e, ")")) : void 0,
                },
            }),
        ],
    });
}
