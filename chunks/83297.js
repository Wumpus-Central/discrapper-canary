n.d(t, { Ay: () => ex });
var s = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    l = n(308186),
    o = n(607399),
    c = n(17928),
    d = n(990078),
    u = n(998445),
    x = n(834730),
    m = n(27232),
    h = n(534514),
    j = n(192308),
    f = n(939249),
    p = n(241541),
    g = n(43990),
    b = n(38021),
    N = n(366010),
    v = n(5180),
    C = n(922016),
    A = n(499373),
    I = n(789645),
    y = n(976860),
    k = n(313281),
    M = n(652215),
    E = n(335993),
    S = n(375708);
let L = i.lazy(() => n.e("60497").then(n.bind(n, 908424)));
function R(e) {
    let { className: t } = e,
        { hasAccess: n } = (0, k.TW)("FavoriteGuildHeaderActionButton"),
        a = i.useRef(null),
        r = n ? S.intl.string(E.default.G9fGlP) : S.intl.string(S.t.ojM1xJ),
        l = i.useCallback(() => {
            (0, y.pX)(M.BVt.ME);
        }, []),
        o = i.useCallback((e) => {
            let { closePopout: t } = e;
            return (0, s.jsx)(i.Suspense, {
                fallback: null,
                children: (0, s.jsx)(L, { navId: "favorite-guild-header-add-context", onClose: t, onSelect: t }),
            });
        }, []);
    return n
        ? (0, s.jsx)(C.Y, {
              targetElementRef: a,
              position: "bottom",
              align: "left",
              spacing: 4,
              renderPopout: o,
              children: (e, n) => {
                  let { isShown: i } = n;
                  return (0, s.jsx)(d.m, {
                      text: r,
                      position: "bottom",
                      asContainer: !0,
                      shouldShow: !i,
                      children: (0, s.jsx)(f.D, {
                          innerRef: a,
                          className: t,
                          "aria-label": r,
                          ...e,
                          children: (0, s.jsx)(A.T, { color: "currentColor", size: "refresh_sm" }),
                      }),
                  });
              },
          })
        : (0, s.jsx)(d.m, {
              text: r,
              position: "bottom",
              asContainer: !0,
              children: (0, s.jsx)(f.D, {
                  className: t,
                  "aria-label": r,
                  onClick: l,
                  children: (0, s.jsx)(I.P, { color: "currentColor", size: "refresh_sm" }),
              }),
          });
}
var D = n(454938),
    B = n(855687),
    F = n(187322),
    O = n(657718),
    V = n(518229),
    z = n(993429);
function P(e) {
    let {
            role: t = "button",
            type: n = "button",
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
        N = (0, s.jsx)(O.a, {
            icon: o,
            iconOpticalOffsetMargin: c,
            iconPosition: "start",
            size: a,
            ref: b,
            disabled: h,
        });
    return (0, s.jsx)(F.vN, {
        ...d,
        children: (0, s.jsx)("button", {
            role: t,
            type: n,
            "aria-pressed": u,
            className: r()(V.button, z.button, V[a], z[l], { [z.pressed]: u }),
            "aria-label": x,
            disabled: h,
            ref: b,
            ...p,
            children: (0, s.jsx)("div", { className: V.buttonChildrenWrapper, children: N }),
        }),
    });
}
var T = n(606096),
    w = n(997146),
    G = n(935063),
    U = n(143838),
    _ = n(334738),
    Y = n(568548),
    H = n(932883),
    K = n(599486),
    W = n(394953),
    $ = n(849077);
function q() {
    let e = (0, H.op)(),
        t = (0, W.i3)(),
        { selectedFilter: n, setSelectedFilter: i } = (0, K.A)();
    if (!t) return null;
    let a = n === $.Io.BOOKMARKS,
        r = a ? S.intl.string(S.t.HcoRu0) : S.intl.string(S.t["2pAkDA"]);
    return (0, s.jsx)(d.m, {
        position: "bottom",
        text: r,
        asContainer: !0,
        children: (0, s.jsx)(P, {
            icon: a ? T.c : w.c,
            pressed: a,
            variant: "tertiary",
            size: "sm",
            "aria-label": r,
            onClick: function () {
                let t = a ? $.Io.ALL : $.Io.BOOKMARKS;
                i(t), (0, H.Ut)({ section: t, enabled: !0, viewId: e });
            },
        }),
    });
}
function Q() {
    let e = (0, H.op)(),
        { selectedFilter: t, setSelectedFilter: n } = (0, K.A)(),
        i = t === $.Io.MENTIONS,
        a = i ? S.intl.string(S.t.HcoRu0) : S.intl.string(S.t.jbV6MM);
    return (0, s.jsx)(d.m, {
        position: "bottom",
        text: a,
        asContainer: !0,
        children: (0, s.jsx)(P, {
            icon: G.X,
            pressed: i,
            variant: "tertiary",
            size: "sm",
            "aria-label": a,
            onClick: function () {
                let t = i ? $.Io.ALL : $.Io.MENTIONS;
                n(t), (0, H.Ut)({ section: t, enabled: !0, viewId: e });
            },
        }),
    });
}
function X() {
    let { unreadChannelIds: e } = (0, W.U4)();
    return (0, s.jsx)(d.m, {
        position: "bottom",
        text: S.intl.string(S.t["8k+6QY"]),
        asContainer: !0,
        children: (0, s.jsx)(P, {
            icon: U.i,
            pressed: !1,
            variant: "tertiary",
            size: "sm",
            "aria-label": S.intl.string(S.t["8k+6QY"]),
            onClick: function () {
                let t = e
                    .map((e) => ({ channelId: e, messageId: Y.Ay.lastMessageId(e) }))
                    .filter((e) => null != e.messageId);
                0 !== t.length && _.Uq(t);
            },
            disabled: 0 === e.length,
        }),
    });
}
var J = n(363195),
    Z = n(885386),
    ee = n(576705),
    et = n(486020),
    en = n(885631),
    es = n(986268),
    ei = n(349828),
    ea = n(765529);
function er(e) {
    let { guild: t, controller: n, guildBanner: i, animate: a } = e,
        { value: c } = n.springs;
    return (0, s.jsx)(l.animated.div, {
        className: ea.nI,
        style: { opacity: c, transform: c.to((e) => `translateY(-${(1 - e) * 90}px)`) },
        children: (0, s.jsx)(l.animated.div, {
            className: r()(ea._e, { [ea.fr]: o.Fr }),
            style: { transform: c.to((e) => `translateY(${(1 - e) * 90}px)`) },
            children: (0, s.jsx)("img", {
                className: r()(ea.Q, { [ea.fr]: o.Fr }),
                src: et.Ay.getGuildBannerURL({ id: t.id, banner: i }, a) ?? "",
                alt: "",
                "aria-hidden": !0,
            }),
        }),
    });
}
function el(e) {
    let { guild: t, controller: n, hasBanner: i, hasSubheader: a } = e,
        { value: o } = n.springs,
        c = t.features.has(M.GuildFeatures.DISCOVERABLE),
        m = (0, s.jsx)("div", {
            className: ea.WV,
            children:
                c &&
                (0, s.jsx)(d.m, {
                    text: S.intl.string(S.t.O8lDI2),
                    position: "right",
                    children: (0, s.jsxs)("div", {
                        className: ea.Pl,
                        children: [
                            (0, s.jsx)(u.L, {
                                size: "custom",
                                color: "currentColor",
                                width: 12,
                                height: 12,
                                className: ea.ju,
                            }),
                            (0, s.jsx)(x.E, {
                                variant: "text-xs/normal",
                                color: "none",
                                children: S.intl.string(S.t["B/vjCu"]),
                            }),
                        ],
                    }),
                }),
        });
    return a
        ? (0, s.jsx)("div", { className: r()(ea.pS, ea.W$), children: m })
        : (0, s.jsx)(l.animated.div, {
              className: ea.pS,
              style: i ? { opacity: o } : { height: o.to((e) => `${20 * e}px`) },
              children: m,
          });
}
function eo() {
    return (0, s.jsx)(m.G, { size: "custom", color: "currentColor", className: ea.PA, height: 20, width: 20 });
}
function ec(e) {
    let { guild: t } = e;
    return (0, s.jsx)(h.D, { variant: "text-md/semibold", lineClamp: 1, className: ea.UU, children: (0, v.YC)(t) });
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
                          n.e("82314"),
                          n.e("80339"),
                          n.e("59957"),
                          n.e("28136"),
                          n.e("16084"),
                          n.e("36624"),
                          n.e("22547"),
                      ]).then(n.bind(n, 1310));
                      return (t) => (0, s.jsx)(e, { ...t, guild: a, source: M.PE1.GUILD_HEADER_INVITE_BUTTON });
                  })
                : (0, j.openModalLazy)(async () => {
                      let { default: e } = await n.e("62751").then(n.bind(n, 132610));
                      return (t) => (0, s.jsx)(e, { ...t });
                  });
        }, [h, a]),
        b = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)("div", {
                    className: ea.LO,
                    children: [
                        (0, s.jsx)(es.A, { guild: a, isBannerVisible: t }),
                        a.id === ei.Vc && (0, s.jsx)(eo, {}),
                        (0, s.jsx)(ec, { guild: a }),
                    ],
                }),
                (0, s.jsx)("div", { className: ea.dx, children: x }),
            ],
        });
    return (0, s.jsxs)(s.Fragment, {
        children: [
            a.id === M.gNP
                ? (0, s.jsx)("div", { className: ea.Bd, children: b })
                : (0, s.jsx)(f.D, {
                      className: ea.Vm,
                      "aria-label": S.intl.formatToPlainString(S.t.xMXpl3, { guildName: m }),
                      "aria-controls": o,
                      "aria-expanded": u,
                      onContextMenu: l,
                      onClick: r,
                      children: b,
                  }),
            a.id === ei.Vc && (0, s.jsx)(R, { className: ea.sq }),
            !ed.includes(a.id) &&
                (0, s.jsx)(d.m, {
                    text: S.intl.string(S.t.Sd8Ixw),
                    position: "bottom",
                    asContainer: !0,
                    ariaHidden: !0,
                    children: (0, s.jsx)(f.D, {
                        "aria-label": S.intl.string(S.t.Sd8Ixw),
                        className: ea.ak,
                        onClick: () => {
                            g();
                        },
                        children: (0, s.jsx)(p.D, { size: "refresh_sm", color: "currentColor" }),
                    }),
                }),
            a.id === M.gNP &&
                (0, s.jsxs)("div", {
                    className: ea.aZ,
                    children: [(0, s.jsx)(Q, {}), (0, s.jsx)(q, {}), (0, s.jsx)(X, {})],
                }),
        ],
    });
}
let ex = i.memo(function (e) {
    let {
            ref: t,
            bannerVisible: n,
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
        I = f.features.has(M.GuildFeatures.ANIMATED_BANNER),
        y = (0, D.A)(f),
        k = !y && (0, en.A)(f),
        E = !y && C,
        S = (0, et.VI)(p) && I && !m,
        [L, R] = i.useState(!1),
        B = i.useRef(!1),
        F = i.useRef(null),
        O = t ?? F,
        V = i.useRef(void 0),
        z = Z.kt.getSetting(),
        P = (0, c.bG)([J.A], () => J.A.theme);
    function T() {
        let { renderBanner: t, guildBanner: n } = e;
        return null != n && !t;
    }
    return (
        i.useEffect(() => {
            if (S && n && !B.current && z)
                return (
                    R(!0),
                    (V.current = setTimeout(() => {
                        R(!1);
                    }, 5e3)),
                    () => {
                        clearTimeout(V.current);
                    }
                );
        }, [S, n, z]),
        i.useEffect(() => {
            B.current = n;
        }, [n]),
        (0, s.jsx)(g.N, {
            theme: P,
            children: (e) =>
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)("div", {
                            "data-has-banner": T(),
                            "data-banner-visible": n,
                            ref: O,
                            className: r()(l, {
                                [ea.kL]: !0,
                                [ea.r9]: T(),
                                [ea.Pi]: n,
                                [e]: !1,
                                [ea.Iv]: E || (A && k),
                            }),
                            onMouseDown: x,
                            onContextMenu: u,
                            children: [
                                (0, s.jsxs)("header", {
                                    className: r()(ea.wx, v, { [ea.jD]: o.Fr }),
                                    children: [
                                        (0, s.jsx)("div", {
                                            className: r()(ea.VW, ea.Nk),
                                            children: (0, s.jsx)(eu, {
                                                bannerVisible: n,
                                                guild: f,
                                                onClick: d,
                                                onContextMenu: u,
                                                ariaControls: j,
                                                ariaExpanded: h,
                                                children: N,
                                            }),
                                        }),
                                        k &&
                                            (0, s.jsx)(el, {
                                                guild: f,
                                                controller: a,
                                                hasBanner: null != p,
                                                hasSubheader: A ?? !1,
                                            }),
                                    ],
                                }),
                                null != p
                                    ? (0, s.jsx)(er, { guild: f, controller: a, guildBanner: p, animate: L })
                                    : null,
                                (0, s.jsx)(em, { controller: a }),
                            ],
                        }),
                        S && T()
                            ? (0, s.jsx)("div", {
                                  className: ea.rt,
                                  onMouseEnter: () => {
                                      R(!0), clearTimeout(V.current);
                                  },
                                  onMouseLeave: () => R(!1),
                                  style: { height: b },
                              })
                            : null,
                    ],
                }),
        })
    );
});
function em(e) {
    let { controller: t } = e,
        { theme: n } = (0, b.wR)(),
        i = t.springs.value;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(l.animated.div, { className: ea.UL, style: { opacity: i.to((e) => 0.5 * e) } }),
            (0, s.jsx)(l.animated.div, { className: ea.ze, style: { opacity: i.to((e) => e) } }),
            (0, s.jsx)(l.animated.div, {
                className: ea.iI,
                style: {
                    opacity: i.to((e) => (1 - e) * 6),
                    filter: (0, N.q)(n) ? i.to((e) => `brightness(${0.75 + 0.25 * e})`) : void 0,
                },
            }),
        ],
    });
}
