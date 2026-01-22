n.d(t, {
    Ay: () => P,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(108531),
    o = n(607399),
    c = n(311907),
    u = n(990078),
    d = n(397927),
    f = n(454938),
    p = n(855687),
    h = n(731091),
    b = n(253932),
    g = n(576705),
    m = n(486020),
    A = n(885631),
    y = n(986268),
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

function _(e) {
    var t;
    let { guild: n, controller: l, guildBanner: i, animate: c } = e,
        { value: u } = l.springs;
    return (0, r.jsx)(s.animated.div, {
        className: x.nI,
        style: {
            opacity: u,
            transform: u.to((e) => "translateY(-".concat((1 - e) * 90, "px)")),
        },
        children: (0, r.jsx)(s.animated.div, {
            className: a()(x._e, {
                [x.fr]: o.Fr,
            }),
            style: {
                transform: u.to((e) => "translateY(".concat((1 - e) * 90, "px)")),
            },
            children: (0, r.jsx)("img", {
                className: a()(x.Q, {
                    [x.fr]: o.Fr,
                }),
                src:
                    null !=
                    (t = m.Ay.getGuildBannerURL(
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

function C(e) {
    let { guild: t, controller: n, hasBanner: l, hasSubheader: i } = e,
        { value: o } = n.springs,
        c = t.features.has(O.GuildFeatures.DISCOVERABLE),
        f = (0, r.jsx)("div", {
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
              className: a()(x.pS, x.W$),
              children: f,
          })
        : (0, r.jsx)(s.animated.div, {
              className: x.pS,
              style: l
                  ? {
                        opacity: o,
                    }
                  : {
                        height: o.to((e) => "".concat(20 * e, "px")),
                    },
              children: f,
          });
}

function S() {
    return (0, r.jsx)(d.Gg5, {
        size: "custom",
        color: "currentColor",
        className: x.PA,
        height: 20,
        width: 20,
    });
}

function I(e) {
    let { guild: t } = e;
    return (0, r.jsx)(d.Heading, {
        variant: "text-md/semibold",
        lineClamp: 1,
        className: x.UU,
        children: t.name,
    });
}
let N = [j.V, O.gNP];

function T(e) {
    var t;
    let { bannerVisible: i, guild: a, onClick: s, onContextMenu: o, ariaControls: f, ariaExpanded: b, children: m } = e,
        A = (0, c.bG)([g.A], () => (0, p.K)(g.A, a)),
        _ = l.useCallback(() => {
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
                                      guild: a,
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
        }, [A, a]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(d.DUT, {
                className: x.Vm,
                "aria-label": v.intl.formatToPlainString(v.t.xMXpl3, {
                    guildName: null != (t = null == a ? void 0 : a.name) ? t : "",
                }),
                "aria-controls": f,
                "aria-expanded": b,
                onContextMenu: o,
                onClick: s,
                children: [
                    (0, r.jsxs)("div", {
                        className: x.LO,
                        children: [
                            (0, r.jsx)(y.A, {
                                guild: a,
                                isBannerVisible: i,
                            }),
                            a.id === j.V && (0, r.jsx)(S, {}),
                            (0, r.jsx)(I, {
                                guild: a,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: x.dx,
                        children: m,
                    }),
                ],
            }),
            !N.includes(a.id) &&
                (0, r.jsx)(u.m, {
                    text: v.intl.string(v.t.Sd8Ixw),
                    position: "bottom",
                    asContainer: !0,
                    children: (0, r.jsx)(d.DUT, {
                        className: x.ak,
                        onClick: () => {
                            _();
                        },
                        children: (0, r.jsx)(d.DpX, {
                            size: "refresh_sm",
                            color: "currentColor",
                        }),
                    }),
                }),
            a.id === O.gNP && (0, r.jsx)(h.g, {}),
        ],
    });
}
let P = l.memo(function (e) {
    let {
            ref: t,
            bannerVisible: n,
            controller: i,
            className: s,
            onClick: c,
            onContextMenu: u,
            onMouseDown: p,
            disableBannerAnimation: h,
            "aria-expanded": g,
            "aria-controls": y,
            guild: j,
            guildBanner: v,
            animationOverlayHeight: E,
            children: S,
            headerClassName: I,
            communityInfoVisible: N,
            hasSubheader: P,
        } = e,
        R = j.features.has(O.GuildFeatures.ANIMATED_BANNER),
        D = (0, f.A)(j),
        M = !D && (0, A.A)(j),
        L = !D && N,
        G = (0, m.VI)(v) && R && !h,
        [k, U] = l.useState(!1),
        V = l.useRef(!1),
        F = l.useRef(null),
        H = null != t ? t : F,
        B = l.useRef(void 0),
        K = b.kt.getSetting();
    l.useEffect(() => {
        if (G && n && !V.current && K)
            return (
                U(!0),
                (B.current = setTimeout(() => {
                    U(!1);
                }, 5e3)),
                () => {
                    clearTimeout(B.current);
                }
            );
    }, [G, n, K]),
        l.useEffect(() => {
            V.current = n;
        }, [n]);
    let W = () => {
        let { renderBanner: t, guildBanner: n } = e;
        return null != n && !t;
    };
    return (0, r.jsx)(d.NPJ, {
        theme: n ? O.NJ8.DARK : void 0,
        children: (e) =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        "data-has-banner": W(),
                        "data-banner-visible": n,
                        ref: H,
                        className: a()(s, {
                            [x.kL]: !0,
                            [x.r9]: W(),
                            [x.Pi]: n,
                            [e]: !1,
                            [x.Iv]: L || (P && M),
                        }),
                        onMouseDown: p,
                        onContextMenu: u,
                        children: [
                            (0, r.jsxs)("header", {
                                className: a()(x.wx, I, {
                                    [x.jD]: o.Fr,
                                }),
                                children: [
                                    (0, r.jsx)("div", {
                                        className: a()(x.VW, x.Nk),
                                        children: (0, r.jsx)(T, {
                                            bannerVisible: n,
                                            guild: j,
                                            onClick: c,
                                            onContextMenu: u,
                                            ariaControls: y,
                                            ariaExpanded: g,
                                            children: S,
                                        }),
                                    }),
                                    M &&
                                        (0, r.jsx)(C, {
                                            guild: j,
                                            controller: i,
                                            hasBanner: null != v,
                                            hasSubheader: null != P && P,
                                        }),
                                ],
                            }),
                            null != v
                                ? (0, r.jsx)(_, {
                                      guild: j,
                                      controller: i,
                                      guildBanner: v,
                                      animate: k,
                                  })
                                : null,
                            (0, r.jsx)(w, {
                                controller: i,
                            }),
                        ],
                    }),
                    G && W()
                        ? (0, r.jsx)("div", {
                              className: x.rt,
                              onMouseEnter: () => {
                                  U(!0), clearTimeout(B.current);
                              },
                              onMouseLeave: () => U(!1),
                              style: {
                                  height: E,
                              },
                          })
                        : null,
                ],
            }),
    });
});

function w(e) {
    let { controller: t } = e,
        { theme: n } = (0, d.wRf)(),
        l = t.springs.value;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.animated.div, {
                className: x.UL,
                style: {
                    opacity: l.to((e) => 0.5 * e),
                },
            }),
            (0, r.jsx)(s.animated.div, {
                className: x.ze,
                style: {
                    opacity: l.to((e) => e),
                },
            }),
            (0, r.jsx)(s.animated.div, {
                className: x.iI,
                style: {
                    opacity: l.to((e) => (1 - e) * 6),
                    filter: (0, d.qB1)(n) ? l.to((e) => "brightness(".concat(0.75 + 0.25 * e, ")")) : void 0,
                },
            }),
        ],
    });
}
