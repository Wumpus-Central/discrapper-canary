n.d(t, { Ay: () => er });
var s = n(477900),
    i = n(582128),
    a = n(503698),
    l = n.n(a),
    r = n(74445),
    o = n(607399),
    c = n(17928),
    d = n(866665),
    u = n(998445),
    x = n(834730),
    m = n(27232),
    h = n(297264),
    j = n(192308),
    f = n(939249),
    g = n(241541),
    p = n(43990),
    b = n(38021),
    N = n(366010),
    v = n(5180),
    C = n(789645),
    I = n(922016),
    A = n(499373),
    k = n(976860),
    y = n(93055),
    M = n(652215),
    E = n(22277),
    S = n(375708);
let L = i.lazy(() => Promise.all([n.e("732100"), n.e("879948")]).then(n.bind(n, 329671)));
function R(e) {
    let { className: t } = e,
        {
            isPreview: n,
            label: a,
            exitPreview: l,
        } = (function () {
            let { hasAccess: e } = (0, y.TW)(),
                t = i.useCallback(() => {
                    (0, k.pX)(M.BVt.ME);
                }, []);
            return { isPreview: !e, label: S.intl.string(e ? E.default.G9fGlP : S.t.ojM1xJ), exitPreview: t };
        })(),
        r = i.useRef(null),
        o = i.useCallback((e) => {
            let { closePopout: t } = e;
            return (0, s.jsx)(i.Suspense, {
                fallback: null,
                children: (0, s.jsx)(L, { navId: "favorite-guild-header-add-context", onClose: t, onSelect: t }),
            });
        }, []);
    return n
        ? (0, s.jsx)(d.m, {
              text: a,
              position: "bottom",
              asContainer: !0,
              children: (0, s.jsx)(f.D, {
                  className: t,
                  "aria-label": a,
                  onClick: l,
                  children: (0, s.jsx)(C.P, { color: "currentColor", size: "refresh_sm" }),
              }),
          })
        : (0, s.jsx)(I.Y, {
              targetElementRef: r,
              position: "bottom",
              align: "left",
              spacing: 4,
              renderPopout: o,
              children: (e, n) => {
                  let { isShown: i } = n;
                  return (0, s.jsx)(d.m, {
                      text: a,
                      position: "bottom",
                      asContainer: !0,
                      shouldShow: !i,
                      children: (0, s.jsx)(f.D, {
                          innerRef: r,
                          className: t,
                          "aria-label": a,
                          ...e,
                          children: (0, s.jsx)(A.T, { color: "currentColor", size: "refresh_sm" }),
                      }),
                  });
              },
          });
}
var D = n(454938),
    B = n(855687),
    P = n(876798),
    w = n(997146),
    F = n(606096),
    T = n(935063),
    z = n(408278),
    O = n(143838),
    G = n(334738),
    U = n(573163),
    V = n(932883),
    _ = n(599486),
    Y = n(394953),
    K = n(849077);
function $() {
    let e = (0, V.op)(),
        t = (0, Y.i3)(),
        { selectedFilter: n, setSelectedFilter: i } = (0, _.A)();
    if (!t) return null;
    let a = n === K.Io.BOOKMARKS,
        l = a ? S.intl.string(S.t.HcoRu0) : S.intl.string(S.t["2pAkDA"]);
    return (0, s.jsx)(d.m, {
        position: "bottom",
        text: l,
        asContainer: !0,
        children: (0, s.jsx)(P.k, {
            icon: w.c,
            selectedIcon: F.BookmarkIcon,
            pressed: a,
            variant: "icon-only",
            size: "sm",
            "aria-label": l,
            onClick: function () {
                let t = a ? K.Io.ALL : K.Io.BOOKMARKS;
                i(t), (0, V.Ut)({ section: t, enabled: !0, viewId: e });
            },
        }),
    });
}
function H() {
    let e = (0, V.op)(),
        { selectedFilter: t, setSelectedFilter: n } = (0, _.A)(),
        i = t === K.Io.MENTIONS,
        a = i ? S.intl.string(S.t.HcoRu0) : S.intl.string(S.t.jbV6MM);
    return (0, s.jsx)(d.m, {
        position: "bottom",
        text: a,
        asContainer: !0,
        children: (0, s.jsx)(P.k, {
            icon: T.X,
            pressed: i,
            variant: "icon-only",
            size: "sm",
            "aria-label": a,
            onClick: function () {
                let t = i ? K.Io.ALL : K.Io.MENTIONS;
                n(t), (0, V.Ut)({ section: t, enabled: !0, viewId: e });
            },
        }),
    });
}
function W() {
    let { unreadChannelIds: e } = (0, Y.U4)();
    return (0, s.jsx)(d.m, {
        position: "bottom",
        text: S.intl.string(S.t["8k+6QY"]),
        asContainer: !0,
        children: (0, s.jsx)(z.K, {
            icon: O.i,
            variant: "icon-only",
            size: "sm",
            "aria-label": S.intl.string(S.t["8k+6QY"]),
            onClick: function () {
                let t = e
                    .map((e) => ({ channelId: e, messageId: U.Ay.lastMessageId(e) }))
                    .filter((e) => null != e.messageId);
                0 !== t.length && G.Uq(t);
            },
            disabled: 0 === e.length,
        }),
    });
}
var q = n(363195),
    Q = n(885386),
    X = n(576705),
    J = n(486020),
    Z = n(885631),
    ee = n(986268),
    et = n(486506);
function en(e) {
    let { guild: t, controller: n, guildBanner: i, animate: a } = e,
        { value: c } = n.springs;
    return (0, s.jsx)(r.animated.div, {
        className: et.nI,
        style: { opacity: c, transform: c.to((e) => `translateY(-${(1 - e) * 90}px)`) },
        children: (0, s.jsx)(r.animated.div, {
            className: l()(et._e, { [et.fr]: o.Fr }),
            style: { transform: c.to((e) => `translateY(${(1 - e) * 90}px)`) },
            children: (0, s.jsx)("img", {
                className: l()(et.Q, { [et.fr]: o.Fr }),
                src: J.Ay.getGuildBannerURL({ id: t.id, banner: i }, a) ?? "",
                alt: "",
                "aria-hidden": !0,
            }),
        }),
    });
}
function es(e) {
    let { guild: t, controller: n, hasBanner: i, hasSubheader: a } = e,
        { value: o } = n.springs,
        c = t.features.has(M.GuildFeatures.DISCOVERABLE),
        m = (0, s.jsx)("div", {
            className: et.WV,
            children:
                c &&
                (0, s.jsx)(d.m, {
                    text: S.intl.string(S.t.O8lDI2),
                    position: "right",
                    children: (0, s.jsxs)("div", {
                        className: et.Pl,
                        children: [
                            (0, s.jsx)(u.GlobeEarthIcon, {
                                size: "custom",
                                color: "currentColor",
                                width: 12,
                                height: 12,
                                className: et.ju,
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
        ? (0, s.jsx)("div", { className: l()(et.pS, et.W$), children: m })
        : (0, s.jsx)(r.animated.div, {
              className: et.pS,
              style: i ? { opacity: o } : { height: o.to((e) => `${20 * e}px`) },
              children: m,
          });
}
function ei() {
    return (0, s.jsx)(m.StarIcon, { size: "custom", color: "currentColor", className: et.PA, height: 20, width: 20 });
}
function ea(e) {
    let { guild: t } = e;
    return (0, s.jsx)(h.D, { variant: "text-md/semibold", lineClamp: 1, className: et.UU, children: (0, v.YC)(t) });
}
function el(e) {
    let { bannerVisible: t, guild: a, onClick: l, onContextMenu: r, ariaControls: o, ariaExpanded: u, children: x } = e,
        m = (0, v.YC)(a),
        h = (0, c.bG)([X.A], () => (0, B.K)(X.A, a)),
        p = i.useCallback(() => {
            h
                ? (0, j.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([
                          n.e("683621"),
                          n.e("711162"),
                          n.e("401425"),
                          n.e("159957"),
                          n.e("119454"),
                          n.e("728136"),
                          n.e("216084"),
                          n.e("36624"),
                          n.e("22547"),
                      ]).then(n.bind(n, 1310));
                      return (t) => (0, s.jsx)(e, { ...t, guild: a, source: M.PE1.GUILD_HEADER_INVITE_BUTTON });
                  })
                : (0, j.openModalLazy)(async () => {
                      let { default: e } = await n.e("962751").then(n.bind(n, 132610));
                      return (t) => (0, s.jsx)(e, { ...t });
                  });
        }, [h, a]),
        b = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)("div", {
                    className: et.LO,
                    children: [
                        (0, s.jsx)(ee.A, { guild: a, isBannerVisible: t }),
                        (0, v.ai)(a.id) && (0, s.jsx)(ei, {}),
                        (0, s.jsx)(ea, { guild: a }),
                    ],
                }),
                (0, s.jsx)("div", { className: et.dx, children: x }),
            ],
        });
    return (0, s.jsxs)(s.Fragment, {
        children: [
            a.id === M.gNP
                ? (0, s.jsx)("div", { className: et.Bd, children: b })
                : (0, s.jsx)(f.D, {
                      className: et.Vm,
                      "aria-label": S.intl.formatToPlainString(S.t.xMXpl3, { guildName: m }),
                      "aria-controls": o,
                      "aria-expanded": u,
                      onContextMenu: r,
                      onClick: l,
                      children: b,
                  }),
            (0, v.ai)(a.id) && (0, s.jsx)(R, { className: et.sq }),
            !(0, v.ai)(a.id) &&
                a.id !== M.gNP &&
                (0, s.jsx)(d.m, {
                    text: S.intl.string(S.t.Sd8Ixw),
                    position: "bottom",
                    asContainer: !0,
                    ariaHidden: !0,
                    children: (0, s.jsx)(f.D, {
                        "aria-label": S.intl.string(S.t.Sd8Ixw),
                        className: et.ak,
                        onClick: () => {
                            p();
                        },
                        children: (0, s.jsx)(g.D, { size: "refresh_sm", color: "currentColor" }),
                    }),
                }),
            a.id === M.gNP &&
                (0, s.jsxs)("div", {
                    className: et.aZ,
                    children: [(0, s.jsx)(H, {}), (0, s.jsx)($, {}), (0, s.jsx)(W, {})],
                }),
        ],
    });
}
let er = i.memo(function (e) {
    let {
            ref: t,
            bannerVisible: n,
            controller: a,
            className: r,
            onClick: d,
            onContextMenu: u,
            onMouseDown: x,
            disableBannerAnimation: m,
            "aria-expanded": h,
            "aria-controls": j,
            guild: f,
            guildBanner: g,
            animationOverlayHeight: b,
            children: N,
            headerClassName: v,
            communityInfoVisible: C,
            hasSubheader: I,
        } = e,
        A = f.features.has(M.GuildFeatures.ANIMATED_BANNER),
        k = (0, D.A)(f),
        y = !k && (0, Z.A)(f),
        E = !k && C,
        S = (0, J.VI)(g) && A && !m,
        [L, R] = i.useState(!1),
        B = i.useRef(!1),
        P = i.useRef(null),
        w = t ?? P,
        F = i.useRef(void 0),
        T = Q.kt.getSetting(),
        z = (0, c.bG)([q.A], () => q.A.theme);
    function O() {
        let { renderBanner: t, guildBanner: n } = e;
        return null != n && !t;
    }
    return (
        i.useEffect(() => {
            if (S && n && !B.current && T)
                return (
                    R(!0),
                    (F.current = setTimeout(() => {
                        R(!1);
                    }, 5e3)),
                    () => {
                        clearTimeout(F.current);
                    }
                );
        }, [S, n, T]),
        i.useEffect(() => {
            B.current = n;
        }, [n]),
        (0, s.jsx)(p.N, {
            theme: z,
            children: (e) =>
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)("div", {
                            "data-has-banner": O(),
                            "data-banner-visible": n,
                            ref: w,
                            className: l()(r, {
                                [et.kL]: !0,
                                [et.r9]: O(),
                                [et.Pi]: n,
                                [e]: !1,
                                [et.Iv]: E || (I && y),
                            }),
                            onMouseDown: x,
                            onContextMenu: u,
                            children: [
                                (0, s.jsxs)("header", {
                                    className: l()(et.wx, v, { [et.jD]: o.Fr }),
                                    children: [
                                        (0, s.jsx)("div", {
                                            className: l()(et.VW, et.Nk),
                                            children: (0, s.jsx)(el, {
                                                bannerVisible: n,
                                                guild: f,
                                                onClick: d,
                                                onContextMenu: u,
                                                ariaControls: j,
                                                ariaExpanded: h,
                                                children: N,
                                            }),
                                        }),
                                        y &&
                                            (0, s.jsx)(es, {
                                                guild: f,
                                                controller: a,
                                                hasBanner: null != g,
                                                hasSubheader: I ?? !1,
                                            }),
                                    ],
                                }),
                                null != g
                                    ? (0, s.jsx)(en, { guild: f, controller: a, guildBanner: g, animate: L })
                                    : null,
                                (0, s.jsx)(eo, { controller: a }),
                            ],
                        }),
                        S && O()
                            ? (0, s.jsx)("div", {
                                  className: et.rt,
                                  onMouseEnter: () => {
                                      R(!0), clearTimeout(F.current);
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
function eo(e) {
    let { controller: t } = e,
        { theme: n } = (0, b.wR)(),
        i = t.springs.value;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(r.animated.div, { className: et.UL, style: { opacity: i.to((e) => 0.5 * e) } }),
            (0, s.jsx)(r.animated.div, { className: et.ze, style: { opacity: i.to((e) => e) } }),
            (0, s.jsx)(r.animated.div, {
                className: et.iI,
                style: {
                    opacity: i.to((e) => (1 - e) * 6),
                    filter: (0, N.q)(n) ? i.to((e) => `brightness(${0.75 + 0.25 * e})`) : void 0,
                },
            }),
        ],
    });
}
