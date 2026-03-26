"use strict";
n.d(t, { Ay: () => M });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(4208),
    o = n(607399),
    c = n(311907),
    d = n(990078),
    u = n(397927),
    h = n(5180),
    A = n(209047),
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
    T = n(961577);
function v(e) {
    let { guild: t, controller: n, guildBanner: s, animate: l } = e,
        { value: c } = n.springs;
    return (0, i.jsx)(a.animated.div, {
        className: T.nI,
        style: { opacity: c, transform: c.to((e) => `translateY(-${(1 - e) * 90}px)`) },
        children: (0, i.jsx)(a.animated.div, {
            className: r()(T._e, { [T.fr]: o.Fr }),
            style: { transform: c.to((e) => `translateY(${(1 - e) * 90}px)`) },
            children: (0, i.jsx)("img", {
                className: r()(T.Q, { [T.fr]: o.Fr }),
                src: C.Ay.getGuildBannerURL({ id: t.id, banner: s }, l) ?? "",
                alt: "",
                "aria-hidden": !0,
            }),
        }),
    });
}
function y(e) {
    let { guild: t, controller: n, hasBanner: s, hasSubheader: l } = e,
        { value: o } = n.springs,
        c = t.features.has(N.GuildFeatures.DISCOVERABLE),
        h = (0, i.jsx)("div", {
            className: T.WV,
            children:
                c &&
                (0, i.jsx)(d.m, {
                    text: S.intl.string(S.t.O8lDI2),
                    position: "right",
                    children: (0, i.jsxs)("div", {
                        className: T.Pl,
                        children: [
                            (0, i.jsx)(u.L_e, {
                                size: "custom",
                                color: "currentColor",
                                width: 12,
                                height: 12,
                                className: T.ju,
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
        ? (0, i.jsx)("div", { className: r()(T.pS, T.W$), children: h })
        : (0, i.jsx)(a.animated.div, {
              className: T.pS,
              style: s ? { opacity: o } : { height: o.to((e) => `${20 * e}px`) },
              children: h,
          });
}
function j() {
    return (0, i.jsx)(u.Gg5, { size: "custom", color: "currentColor", className: T.PA, height: 20, width: 20 });
}
function R(e) {
    let { guild: t } = e;
    return (0, i.jsx)(u.Heading, {
        variant: "text-md/semibold",
        lineClamp: 1,
        className: T.UU,
        children: (0, h.YC)(t),
    });
}
let O = [b.Vc, N.gNP];
function L(e) {
    let { bannerVisible: t, guild: l, onClick: r, onContextMenu: a, ariaControls: o, ariaExpanded: m, children: _ } = e,
        f = (0, h.YC)(l),
        C = (0, c.bG)([x.A], () => (0, p.K)(x.A, l)),
        E = s.useCallback(() => {
            C
                ? (0, u.mMO)(async () => {
                      let { default: e } = await Promise.all([n.e("43600"), n.e("67505")]).then(n.bind(n, 234355));
                      return (t) => (0, i.jsx)(e, { ...t, guild: l, source: N.PE1.GUILD_HEADER_INVITE_BUTTON });
                  })
                : (0, u.mMO)(async () => {
                      let { default: e } = await n.e("62751").then(n.bind(n, 132610));
                      return (t) => (0, i.jsx)(e, { ...t });
                  });
        }, [C, l]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(u.DUT, {
                className: T.Vm,
                "aria-label": S.intl.formatToPlainString(S.t.xMXpl3, { guildName: f }),
                "aria-controls": o,
                "aria-expanded": m,
                onContextMenu: a,
                onClick: r,
                children: [
                    (0, i.jsxs)("div", {
                        className: T.LO,
                        children: [
                            (0, i.jsx)(I.A, { guild: l, isBannerVisible: t }),
                            l.id === b.Vc && (0, i.jsx)(j, {}),
                            (0, i.jsx)(R, { guild: l }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: T.dx, children: _ }),
                ],
            }),
            l.id === b.Vc && (0, i.jsx)(A.A, { className: T.sq }),
            !O.includes(l.id) &&
                (0, i.jsx)(d.m, {
                    text: S.intl.string(S.t.Sd8Ixw),
                    position: "bottom",
                    asContainer: !0,
                    children: (0, i.jsx)(u.DUT, {
                        className: T.ak,
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
let M = s.memo(function (e) {
    let {
            ref: t,
            bannerVisible: n,
            controller: l,
            className: a,
            onClick: d,
            onContextMenu: h,
            onMouseDown: A,
            disableBannerAnimation: p,
            "aria-expanded": g,
            "aria-controls": x,
            guild: I,
            guildBanner: b,
            animationOverlayHeight: S,
            children: j,
            headerClassName: R,
            communityInfoVisible: O,
            hasSubheader: M,
        } = e,
        G = I.features.has(N.GuildFeatures.ANIMATED_BANNER),
        U = (0, m.A)(I),
        P = !U && (0, E.A)(I),
        k = !U && O,
        w = (0, C.VI)(b) && G && !p,
        [V, B] = s.useState(!1),
        H = s.useRef(!1),
        F = s.useRef(null),
        K = t ?? F,
        W = s.useRef(void 0),
        Y = f.kt.getSetting(),
        z = (0, c.bG)([_.A], () => _.A.theme);
    s.useEffect(() => {
        if (w && n && !H.current && Y)
            return (
                B(!0),
                (W.current = setTimeout(() => {
                    B(!1);
                }, 5e3)),
                () => {
                    clearTimeout(W.current);
                }
            );
    }, [w, n, Y]),
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
                        className: r()(a, { [T.kL]: !0, [T.r9]: q(), [T.Pi]: n, [e]: !1, [T.Iv]: k || (M && P) }),
                        onMouseDown: A,
                        onContextMenu: h,
                        children: [
                            (0, i.jsxs)("header", {
                                className: r()(T.wx, R, { [T.jD]: o.Fr }),
                                children: [
                                    (0, i.jsx)("div", {
                                        className: r()(T.VW, T.Nk),
                                        children: (0, i.jsx)(L, {
                                            bannerVisible: n,
                                            guild: I,
                                            onClick: d,
                                            onContextMenu: h,
                                            ariaControls: x,
                                            ariaExpanded: g,
                                            children: j,
                                        }),
                                    }),
                                    P &&
                                        (0, i.jsx)(y, {
                                            guild: I,
                                            controller: l,
                                            hasBanner: null != b,
                                            hasSubheader: M ?? !1,
                                        }),
                                ],
                            }),
                            null != b ? (0, i.jsx)(v, { guild: I, controller: l, guildBanner: b, animate: V }) : null,
                            (0, i.jsx)(D, { controller: l }),
                        ],
                    }),
                    w && q()
                        ? (0, i.jsx)("div", {
                              className: T.rt,
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
function D(e) {
    let { controller: t } = e,
        { theme: n } = (0, u.wRf)(),
        s = t.springs.value;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.animated.div, { className: T.UL, style: { opacity: s.to((e) => 0.5 * e) } }),
            (0, i.jsx)(a.animated.div, { className: T.ze, style: { opacity: s.to((e) => e) } }),
            (0, i.jsx)(a.animated.div, {
                className: T.iI,
                style: {
                    opacity: s.to((e) => (1 - e) * 6),
                    filter: (0, u.qB1)(n) ? s.to((e) => `brightness(${0.75 + 0.25 * e})`) : void 0,
                },
            }),
        ],
    });
}
