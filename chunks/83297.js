s.d(t, { Ay: () => ex });
var n = s(627968),
    i = s(64700),
    a = s(503698),
    r = s.n(a),
    l = s(873174),
    o = s(607399),
    c = s(17928),
    d = s(990078),
    u = s(998445),
    x = s(834730),
    m = s(27232),
    h = s(534514),
    j = s(192308),
    f = s(939249),
    p = s(241541),
    g = s(43990),
    b = s(38021),
    N = s(366010),
    v = s(5180),
    C = s(922016),
    A = s(499373),
    y = s(789645),
    I = s(976860),
    k = s(313281),
    M = s(652215),
    E = s(335993),
    L = s(375708);
let R = i.lazy(() => s.e("60497").then(s.bind(s, 908424)));
function S(e) {
    let { className: t } = e,
        { hasAccess: s } = (0, k.TW)("FavoriteGuildHeaderActionButton"),
        a = i.useRef(null),
        r = s ? L.intl.string(E.default.G9fGlP) : L.intl.string(L.t.ojM1xJ),
        l = i.useCallback(() => {
            (0, I.pX)(M.BVt.ME);
        }, []),
        o = i.useCallback((e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(i.Suspense, {
                fallback: null,
                children: (0, n.jsx)(R, { navId: "favorite-guild-header-add-context", onClose: t, onSelect: t }),
            });
        }, []);
    return s
        ? (0, n.jsx)(C.Y, {
              targetElementRef: a,
              position: "bottom",
              align: "left",
              spacing: 4,
              renderPopout: o,
              children: (e, s) => {
                  let { isShown: i } = s;
                  return (0, n.jsx)(d.m, {
                      text: r,
                      position: "bottom",
                      asContainer: !0,
                      shouldShow: !i,
                      children: (0, n.jsx)(f.D, {
                          innerRef: a,
                          className: t,
                          "aria-label": r,
                          ...e,
                          children: (0, n.jsx)(A.T, { color: "currentColor", size: "refresh_sm" }),
                      }),
                  });
              },
          })
        : (0, n.jsx)(d.m, {
              text: r,
              position: "bottom",
              asContainer: !0,
              children: (0, n.jsx)(f.D, {
                  className: t,
                  "aria-label": r,
                  onClick: l,
                  children: (0, n.jsx)(y.P, { color: "currentColor", size: "refresh_sm" }),
              }),
          });
}
var D = s(454938),
    B = s(855687),
    F = s(187322),
    O = s(657718),
    V = s(518229),
    z = s(993429);
function P(e) {
    let {
            role: t = "button",
            type: s = "button",
            size: a = "md",
            variant: l = "secondary",
            icon: o,
            iconOpticalOffsetMargin: c = 0,
            focusProps: d,
            pressed: u = !1,
            "aria-label": x,
            buttonRef: m,
            disabled: h,
            className: j,
            style: f,
            ...p
        } = e,
        g = i.useRef(null),
        b = m ?? g,
        N = (0, n.jsx)(O.a, {
            icon: o,
            iconOpticalOffsetMargin: c,
            iconPosition: "start",
            size: a,
            ref: b,
            disabled: h,
        });
    return (0, n.jsx)(F.vN, {
        ...d,
        children: (0, n.jsx)("button", {
            role: t,
            type: s,
            "aria-pressed": u,
            className: r()(V.button, z.button, V[a], z[l], { [z.pressed]: u }),
            "aria-label": x,
            disabled: h,
            ref: b,
            ...p,
            children: (0, n.jsx)("div", { className: V.buttonChildrenWrapper, children: N }),
        }),
    });
}
var T = s(606096),
    G = s(997146),
    w = s(935063),
    U = s(143838),
    _ = s(334738),
    Y = s(222823),
    K = s(932883),
    W = s(599486),
    $ = s(394953),
    H = s(849077);
function q() {
    let e = (0, K.op)(),
        t = (0, $.i3)(),
        { selectedFilter: s, setSelectedFilter: i } = (0, W.A)();
    if (!t) return null;
    let a = s === H.Io.BOOKMARKS,
        r = a ? L.intl.string(L.t.HcoRu0) : L.intl.string(L.t["2pAkDA"]);
    return (0, n.jsx)(d.m, {
        position: "bottom",
        text: r,
        asContainer: !0,
        children: (0, n.jsx)(P, {
            icon: a ? T.c : G.c,
            pressed: a,
            variant: "tertiary",
            size: "sm",
            "aria-label": r,
            onClick: () => {
                let t = a ? H.Io.ALL : H.Io.BOOKMARKS;
                i(t), (0, K.Ut)({ section: t, enabled: !0, viewId: e });
            },
        }),
    });
}
function Q() {
    let e = (0, K.op)(),
        { selectedFilter: t, setSelectedFilter: s } = (0, W.A)(),
        i = t === H.Io.MENTIONS,
        a = i ? L.intl.string(L.t.HcoRu0) : L.intl.string(L.t.jbV6MM);
    return (0, n.jsx)(d.m, {
        position: "bottom",
        text: a,
        asContainer: !0,
        children: (0, n.jsx)(P, {
            icon: w.X,
            pressed: i,
            variant: "tertiary",
            size: "sm",
            "aria-label": a,
            onClick: () => {
                let t = i ? H.Io.ALL : H.Io.MENTIONS;
                s(t), (0, K.Ut)({ section: t, enabled: !0, viewId: e });
            },
        }),
    });
}
function X() {
    let { unreadChannelIds: e } = (0, $.U4)();
    return (0, n.jsx)(d.m, {
        position: "bottom",
        text: L.intl.string(L.t["8k+6QY"]),
        asContainer: !0,
        children: (0, n.jsx)(P, {
            icon: U.i,
            pressed: !1,
            variant: "tertiary",
            size: "sm",
            "aria-label": L.intl.string(L.t["8k+6QY"]),
            onClick: () => {
                let t = e
                    .map((e) => ({ channelId: e, messageId: Y.Ay.lastMessageId(e) }))
                    .filter((e) => null != e.messageId);
                0 !== t.length && _.Uq(t);
            },
            disabled: 0 === e.length,
        }),
    });
}
var J = s(363195),
    Z = s(885386),
    ee = s(576705),
    et = s(486020),
    es = s(885631),
    en = s(986268),
    ei = s(349828),
    ea = s(765529);
function er(e) {
    let { guild: t, controller: s, guildBanner: i, animate: a } = e,
        { value: c } = s.springs;
    return (0, n.jsx)(l.animated.div, {
        className: ea.nI,
        style: { opacity: c, transform: c.to((e) => `translateY(-${(1 - e) * 90}px)`) },
        children: (0, n.jsx)(l.animated.div, {
            className: r()(ea._e, { [ea.fr]: o.Fr }),
            style: { transform: c.to((e) => `translateY(${(1 - e) * 90}px)`) },
            children: (0, n.jsx)("img", {
                className: r()(ea.Q, { [ea.fr]: o.Fr }),
                src: et.Ay.getGuildBannerURL({ id: t.id, banner: i }, a) ?? "",
                alt: "",
                "aria-hidden": !0,
            }),
        }),
    });
}
function el(e) {
    let { guild: t, controller: s, hasBanner: i, hasSubheader: a } = e,
        { value: o } = s.springs,
        c = t.features.has(M.GuildFeatures.DISCOVERABLE),
        m = (0, n.jsx)("div", {
            className: ea.WV,
            children:
                c &&
                (0, n.jsx)(d.m, {
                    text: L.intl.string(L.t.O8lDI2),
                    position: "right",
                    children: (0, n.jsxs)("div", {
                        className: ea.Pl,
                        children: [
                            (0, n.jsx)(u.L, {
                                size: "custom",
                                color: "currentColor",
                                width: 12,
                                height: 12,
                                className: ea.ju,
                            }),
                            (0, n.jsx)(x.E, {
                                variant: "text-xs/normal",
                                color: "none",
                                children: L.intl.string(L.t["B/vjCu"]),
                            }),
                        ],
                    }),
                }),
        });
    return a
        ? (0, n.jsx)("div", { className: r()(ea.pS, ea.W$), children: m })
        : (0, n.jsx)(l.animated.div, {
              className: ea.pS,
              style: i ? { opacity: o } : { height: o.to((e) => `${20 * e}px`) },
              children: m,
          });
}
function eo() {
    return (0, n.jsx)(m.G, { size: "custom", color: "currentColor", className: ea.PA, height: 20, width: 20 });
}
function ec(e) {
    let { guild: t } = e;
    return (0, n.jsx)(h.D, { variant: "text-md/semibold", lineClamp: 1, className: ea.UU, children: (0, v.YC)(t) });
}
let ed = [ei.Vc, M.gNP];
function eu(e) {
    let { bannerVisible: t, guild: a, onClick: r, onContextMenu: l, ariaControls: o, ariaExpanded: u, children: x } = e,
        m = (0, v.YC)(a),
        h = (0, c.bG)([ee.A], () => (0, B.K)(ee.A, a)),
        g = i.useCallback(() => {
            h
                ? (0, j.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([
                          s.e("49909"),
                          s.e("54266"),
                          s.e("59957"),
                          s.e("19454"),
                          s.e("28136"),
                          s.e("16084"),
                          s.e("87317"),
                          s.e("22547"),
                      ]).then(s.bind(s, 1310));
                      return (t) => (0, n.jsx)(e, { ...t, guild: a, source: M.PE1.GUILD_HEADER_INVITE_BUTTON });
                  })
                : (0, j.openModalLazy)(async () => {
                      let { default: e } = await s.e("62751").then(s.bind(s, 132610));
                      return (t) => (0, n.jsx)(e, { ...t });
                  });
        }, [h, a]),
        b = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    className: ea.LO,
                    children: [
                        (0, n.jsx)(en.A, { guild: a, isBannerVisible: t }),
                        a.id === ei.Vc && (0, n.jsx)(eo, {}),
                        (0, n.jsx)(ec, { guild: a }),
                    ],
                }),
                (0, n.jsx)("div", { className: ea.dx, children: x }),
            ],
        });
    return (0, n.jsxs)(n.Fragment, {
        children: [
            a.id === M.gNP
                ? (0, n.jsx)("div", { className: ea.Bd, children: b })
                : (0, n.jsx)(f.D, {
                      className: ea.Vm,
                      "aria-label": L.intl.formatToPlainString(L.t.xMXpl3, { guildName: m }),
                      "aria-controls": o,
                      "aria-expanded": u,
                      onContextMenu: l,
                      onClick: r,
                      children: b,
                  }),
            a.id === ei.Vc && (0, n.jsx)(S, { className: ea.sq }),
            !ed.includes(a.id) &&
                (0, n.jsx)(d.m, {
                    text: L.intl.string(L.t.Sd8Ixw),
                    position: "bottom",
                    asContainer: !0,
                    children: (0, n.jsx)(f.D, {
                        className: ea.ak,
                        onClick: () => {
                            g();
                        },
                        children: (0, n.jsx)(p.D, { size: "refresh_sm", color: "currentColor" }),
                    }),
                }),
            a.id === M.gNP &&
                (0, n.jsxs)("div", {
                    className: ea.aZ,
                    children: [(0, n.jsx)(Q, {}), (0, n.jsx)(q, {}), (0, n.jsx)(X, {})],
                }),
        ],
    });
}
let ex = i.memo(function (e) {
    let {
            ref: t,
            bannerVisible: s,
            controller: a,
            className: l,
            onClick: d,
            onContextMenu: u,
            onMouseDown: x,
            disableBannerAnimation: m,
            "aria-expanded": h,
            "aria-controls": j,
            guild: f,
            guildBanner: p,
            animationOverlayHeight: b,
            children: N,
            headerClassName: v,
            communityInfoVisible: C,
            hasSubheader: A,
        } = e,
        y = f.features.has(M.GuildFeatures.ANIMATED_BANNER),
        I = (0, D.A)(f),
        k = !I && (0, es.A)(f),
        E = !I && C,
        L = (0, et.VI)(p) && y && !m,
        [R, S] = i.useState(!1),
        B = i.useRef(!1),
        F = i.useRef(null),
        O = t ?? F,
        V = i.useRef(void 0),
        z = Z.kt.getSetting(),
        P = (0, c.bG)([J.A], () => J.A.theme);
    i.useEffect(() => {
        if (L && s && !B.current && z)
            return (
                S(!0),
                (V.current = setTimeout(() => {
                    S(!1);
                }, 5e3)),
                () => {
                    clearTimeout(V.current);
                }
            );
    }, [L, s, z]),
        i.useEffect(() => {
            B.current = s;
        }, [s]);
    let T = () => {
        let { renderBanner: t, guildBanner: s } = e;
        return null != s && !t;
    };
    return (0, n.jsx)(g.N, {
        theme: P,
        children: (e) =>
            (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsxs)("div", {
                        "data-has-banner": T(),
                        "data-banner-visible": s,
                        ref: O,
                        className: r()(l, { [ea.kL]: !0, [ea.r9]: T(), [ea.Pi]: s, [e]: !1, [ea.Iv]: E || (A && k) }),
                        onMouseDown: x,
                        onContextMenu: u,
                        children: [
                            (0, n.jsxs)("header", {
                                className: r()(ea.wx, v, { [ea.jD]: o.Fr }),
                                children: [
                                    (0, n.jsx)("div", {
                                        className: r()(ea.VW, ea.Nk),
                                        children: (0, n.jsx)(eu, {
                                            bannerVisible: s,
                                            guild: f,
                                            onClick: d,
                                            onContextMenu: u,
                                            ariaControls: j,
                                            ariaExpanded: h,
                                            children: N,
                                        }),
                                    }),
                                    k &&
                                        (0, n.jsx)(el, {
                                            guild: f,
                                            controller: a,
                                            hasBanner: null != p,
                                            hasSubheader: A ?? !1,
                                        }),
                                ],
                            }),
                            null != p ? (0, n.jsx)(er, { guild: f, controller: a, guildBanner: p, animate: R }) : null,
                            (0, n.jsx)(em, { controller: a }),
                        ],
                    }),
                    L && T()
                        ? (0, n.jsx)("div", {
                              className: ea.rt,
                              onMouseEnter: () => {
                                  S(!0), clearTimeout(V.current);
                              },
                              onMouseLeave: () => S(!1),
                              style: { height: b },
                          })
                        : null,
                ],
            }),
    });
});
function em(e) {
    let { controller: t } = e,
        { theme: s } = (0, b.wR)(),
        i = t.springs.value;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(l.animated.div, { className: ea.UL, style: { opacity: i.to((e) => 0.5 * e) } }),
            (0, n.jsx)(l.animated.div, { className: ea.ze, style: { opacity: i.to((e) => e) } }),
            (0, n.jsx)(l.animated.div, {
                className: ea.iI,
                style: {
                    opacity: i.to((e) => (1 - e) * 6),
                    filter: (0, N.q)(s) ? i.to((e) => `brightness(${0.75 + 0.25 * e})`) : void 0,
                },
            }),
        ],
    });
}
