"use strict";
n.d(t, { Ay: () => D });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(490249),
    o = n(607399),
    c = n(311907),
    d = n(990078),
    u = n(397927),
    h = n(442433),
    A = n(93055),
    m = n(454938),
    p = n(855687),
    g = n(731091),
    _ = n(544028),
    f = n(253932),
    x = n(576705),
    C = n(486020),
    E = n(885631),
    I = n(986268),
    N = n(652215),
    b = n(349828),
    S = n(985018),
    T = n(665606),
    v = n(668560);
function y(e) {
    let { guild: t, controller: n, guildBanner: s, animate: l } = e,
        { value: c } = n.springs;
    return (0, i.jsx)(r.animated.div, {
        className: v.nI,
        style: { opacity: c, transform: c.to((e) => `translateY(-${(1 - e) * 90}px)`) },
        children: (0, i.jsx)(r.animated.div, {
            className: a()(v._e, { [v.fr]: o.Fr }),
            style: { transform: c.to((e) => `translateY(${(1 - e) * 90}px)`) },
            children: (0, i.jsx)("img", {
                className: a()(v.Q, { [v.fr]: o.Fr }),
                src: C.Ay.getGuildBannerURL({ id: t.id, banner: s }, l) ?? "",
                alt: "",
                "aria-hidden": !0,
            }),
        }),
    });
}
function j(e) {
    let { guild: t, controller: n, hasBanner: s, hasSubheader: l } = e,
        { value: o } = n.springs,
        c = t.features.has(N.GuildFeatures.DISCOVERABLE),
        h = (0, i.jsx)("div", {
            className: v.WV,
            children:
                c &&
                (0, i.jsx)(d.m, {
                    text: S.intl.string(S.t.O8lDI2),
                    position: "right",
                    children: (0, i.jsxs)("div", {
                        className: v.Pl,
                        children: [
                            (0, i.jsx)(u.L_e, {
                                size: "custom",
                                color: "currentColor",
                                width: 12,
                                height: 12,
                                className: v.ju,
                            }),
                            (0, i.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: "none",
                                children: S.intl.string(S.t["B/vjCu"]),
                            }),
                        ],
                    }),
                }),
        });
    return l
        ? (0, i.jsx)("div", { className: a()(v.pS, v.W$), children: h })
        : (0, i.jsx)(r.animated.div, {
              className: v.pS,
              style: s ? { opacity: o } : { height: o.to((e) => `${20 * e}px`) },
              children: h,
          });
}
function R() {
    return (0, i.jsx)(u.Gg5, { size: "custom", color: "currentColor", className: v.PA, height: 20, width: 20 });
}
function O(e) {
    let { guild: t } = e;
    return (0, i.jsx)(u.Heading, { variant: "text-md/semibold", lineClamp: 1, className: v.UU, children: t.name });
}
let L = [b.Vc, N.gNP];
function M(e) {
    let { bannerVisible: t, guild: l, onClick: a, onContextMenu: r, ariaControls: o, ariaExpanded: m, children: _ } = e,
        f = (0, c.bG)([x.A], () => (0, p.K)(x.A, l)),
        { hasAccess: C } = (0, A.TW)("GuildHeaderContent"),
        E = s.useCallback(() => {
            f
                ? (0, u.mMO)(async () => {
                      let { default: e } = await Promise.all([n.e("43600"), n.e("52537")]).then(n.bind(n, 234355));
                      return (t) => (0, i.jsx)(e, { ...t, guild: l, source: N.PE1.GUILD_HEADER_INVITE_BUTTON });
                  })
                : (0, u.mMO)(async () => {
                      let { default: e } = await n.e("62751").then(n.bind(n, 132610));
                      return (t) => (0, i.jsx)(e, { ...t });
                  });
        }, [f, l]),
        y = s.useCallback((e) => {
            e.preventDefault(),
                e.stopPropagation(),
                (0, h.L3)(e, async () => {
                    let { default: e } = await n.e("60497").then(n.bind(n, 908424));
                    return (t) => (0, i.jsx)(e, { ...t, navId: "favorite-guild-header-add-context" });
                });
        }, []);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(u.DUT, {
                className: v.Vm,
                "aria-label": S.intl.formatToPlainString(S.t.xMXpl3, { guildName: l?.name ?? "" }),
                "aria-controls": o,
                "aria-expanded": m,
                onContextMenu: r,
                onClick: a,
                children: [
                    (0, i.jsxs)("div", {
                        className: v.LO,
                        children: [
                            (0, i.jsx)(I.A, { guild: l, isBannerVisible: t }),
                            l.id === b.Vc && (0, i.jsx)(R, {}),
                            (0, i.jsx)(O, { guild: l }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: v.dx, children: _ }),
                ],
            }),
            l.id === b.Vc &&
                C &&
                (0, i.jsx)(u.K0, {
                    variant: "icon-only",
                    size: "sm",
                    icon: u.pa$,
                    "aria-label": S.intl.string(T.default.G9fGlP),
                    onClick: y,
                }),
            !L.includes(l.id) &&
                (0, i.jsx)(d.m, {
                    text: S.intl.string(S.t.Sd8Ixw),
                    position: "bottom",
                    asContainer: !0,
                    children: (0, i.jsx)(u.DUT, {
                        className: v.ak,
                        onClick: () => {
                            E();
                        },
                        children: (0, i.jsx)(u.DpX, { size: "refresh_sm", color: "currentColor" }),
                    }),
                }),
            l.id === N.gNP && (0, i.jsx)(g.g, {}),
        ],
    });
}
let D = s.memo(function (e) {
    let {
            ref: t,
            bannerVisible: n,
            controller: l,
            className: r,
            onClick: d,
            onContextMenu: h,
            onMouseDown: A,
            disableBannerAnimation: p,
            "aria-expanded": g,
            "aria-controls": x,
            guild: I,
            guildBanner: b,
            animationOverlayHeight: S,
            children: T,
            headerClassName: R,
            communityInfoVisible: O,
            hasSubheader: L,
        } = e,
        D = I.features.has(N.GuildFeatures.ANIMATED_BANNER),
        U = (0, m.A)(I),
        P = !U && (0, E.A)(I),
        w = !U && O,
        k = (0, C.VI)(b) && D && !p,
        [V, B] = s.useState(!1),
        H = s.useRef(!1),
        F = s.useRef(null),
        K = t ?? F,
        W = s.useRef(void 0),
        Y = f.kt.getSetting(),
        z = (0, c.bG)([_.A], () => _.A.theme);
    s.useEffect(() => {
        if (k && n && !H.current && Y)
            return (
                B(!0),
                (W.current = setTimeout(() => {
                    B(!1);
                }, 5e3)),
                () => {
                    clearTimeout(W.current);
                }
            );
    }, [k, n, Y]),
        s.useEffect(() => {
            H.current = n;
        }, [n]);
    let q = () => {
        let { renderBanner: t, guildBanner: n } = e;
        return null != n && !t;
    };
    return (0, i.jsx)(u.NPJ, {
        theme: z,
        children: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)("div", {
                        "data-has-banner": q(),
                        "data-banner-visible": n,
                        ref: K,
                        className: a()(r, { [v.kL]: !0, [v.r9]: q(), [v.Pi]: n, [e]: !1, [v.Iv]: w || (L && P) }),
                        onMouseDown: A,
                        onContextMenu: h,
                        children: [
                            (0, i.jsxs)("header", {
                                className: a()(v.wx, R, { [v.jD]: o.Fr }),
                                children: [
                                    (0, i.jsx)("div", {
                                        className: a()(v.VW, v.Nk),
                                        children: (0, i.jsx)(M, {
                                            bannerVisible: n,
                                            guild: I,
                                            onClick: d,
                                            onContextMenu: h,
                                            ariaControls: x,
                                            ariaExpanded: g,
                                            children: T,
                                        }),
                                    }),
                                    P &&
                                        (0, i.jsx)(j, {
                                            guild: I,
                                            controller: l,
                                            hasBanner: null != b,
                                            hasSubheader: L ?? !1,
                                        }),
                                ],
                            }),
                            null != b ? (0, i.jsx)(y, { guild: I, controller: l, guildBanner: b, animate: V }) : null,
                            (0, i.jsx)(G, { controller: l }),
                        ],
                    }),
                    k && q()
                        ? (0, i.jsx)("div", {
                              className: v.rt,
                              onMouseEnter: () => {
                                  B(!0), clearTimeout(W.current);
                              },
                              onMouseLeave: () => B(!1),
                              style: { height: S },
                          })
                        : null,
                ],
            }),
    });
});
function G(e) {
    let { controller: t } = e,
        { theme: n } = (0, u.wRf)(),
        s = t.springs.value;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.animated.div, { className: v.UL, style: { opacity: s.to((e) => 0.5 * e) } }),
            (0, i.jsx)(r.animated.div, { className: v.ze, style: { opacity: s.to((e) => e) } }),
            (0, i.jsx)(r.animated.div, {
                className: v.iI,
                style: {
                    opacity: s.to((e) => (1 - e) * 6),
                    filter: (0, u.qB1)(n) ? s.to((e) => `brightness(${0.75 + 0.25 * e})`) : void 0,
                },
            }),
        ],
    });
}
