n.d(t, { Ay: () => M });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(382222),
    o = n(607399),
    c = n(311907),
    d = n(990078),
    u = n(397927),
    h = n(5180),
    A = n(209047),
    _ = n(454938),
    m = n(855687),
    g = n(731091),
    p = n(544028),
    f = n(253932),
    x = n(576705),
    E = n(486020),
    I = n(885631),
    C = n(986268),
    N = n(652215),
    T = n(349828),
    S = n(985018),
    b = n(961577);
function y(e) {
    let { guild: t, controller: n, guildBanner: l, animate: s } = e,
        { value: c } = n.springs;
    return (0, i.jsx)(r.animated.div, {
        className: b.nI,
        style: { opacity: c, transform: c.to((e) => `translateY(-${(1 - e) * 90}px)`) },
        children: (0, i.jsx)(r.animated.div, {
            className: a()(b._e, { [b.fr]: o.Fr }),
            style: { transform: c.to((e) => `translateY(${(1 - e) * 90}px)`) },
            children: (0, i.jsx)("img", {
                className: a()(b.Q, { [b.fr]: o.Fr }),
                src: E.Ay.getGuildBannerURL({ id: t.id, banner: l }, s) ?? "",
                alt: "",
                "aria-hidden": !0,
            }),
        }),
    });
}
function v(e) {
    let { guild: t, controller: n, hasBanner: l, hasSubheader: s } = e,
        { value: o } = n.springs,
        c = t.features.has(N.GuildFeatures.DISCOVERABLE),
        h = (0, i.jsx)("div", {
            className: b.WV,
            children:
                c &&
                (0, i.jsx)(d.m, {
                    text: S.intl.string(S.t.O8lDI2),
                    position: "right",
                    children: (0, i.jsxs)("div", {
                        className: b.Pl,
                        children: [
                            (0, i.jsx)(u.L_e, {
                                size: "custom",
                                color: "currentColor",
                                width: 12,
                                height: 12,
                                className: b.ju,
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
    return s
        ? (0, i.jsx)("div", { className: a()(b.pS, b.W$), children: h })
        : (0, i.jsx)(r.animated.div, {
              className: b.pS,
              style: l ? { opacity: o } : { height: o.to((e) => `${20 * e}px`) },
              children: h,
          });
}
function j() {
    return (0, i.jsx)(u.Gg5, { size: "custom", color: "currentColor", className: b.PA, height: 20, width: 20 });
}
function R(e) {
    let { guild: t } = e;
    return (0, i.jsx)(u.Heading, {
        variant: "text-md/semibold",
        lineClamp: 1,
        className: b.UU,
        children: (0, h.YC)(t),
    });
}
let O = [T.Vc, N.gNP];
function L(e) {
    let { bannerVisible: t, guild: s, onClick: a, onContextMenu: r, ariaControls: o, ariaExpanded: _, children: p } = e,
        f = (0, h.YC)(s),
        E = (0, c.bG)([x.A], () => (0, m.K)(x.A, s)),
        I = l.useCallback(() => {
            E
                ? (0, u.mMO)(async () => {
                      let { default: e } = await Promise.all([n.e("43600"), n.e("67505")]).then(n.bind(n, 234355));
                      return (t) => (0, i.jsx)(e, { ...t, guild: s, source: N.PE1.GUILD_HEADER_INVITE_BUTTON });
                  })
                : (0, u.mMO)(async () => {
                      let { default: e } = await n.e("62751").then(n.bind(n, 132610));
                      return (t) => (0, i.jsx)(e, { ...t });
                  });
        }, [E, s]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(u.DUT, {
                className: b.Vm,
                "aria-label": S.intl.formatToPlainString(S.t.xMXpl3, { guildName: f }),
                "aria-controls": o,
                "aria-expanded": _,
                onContextMenu: r,
                onClick: a,
                children: [
                    (0, i.jsxs)("div", {
                        className: b.LO,
                        children: [
                            (0, i.jsx)(C.A, { guild: s, isBannerVisible: t }),
                            s.id === T.Vc && (0, i.jsx)(j, {}),
                            (0, i.jsx)(R, { guild: s }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: b.dx, children: p }),
                ],
            }),
            s.id === T.Vc && (0, i.jsx)(A.A, { className: b.sq }),
            !O.includes(s.id) &&
                (0, i.jsx)(d.m, {
                    text: S.intl.string(S.t.Sd8Ixw),
                    position: "bottom",
                    asContainer: !0,
                    children: (0, i.jsx)(u.DUT, {
                        className: b.ak,
                        onClick: () => {
                            I();
                        },
                        children: (0, i.jsx)(u.DpX, { size: "refresh_sm", color: "currentColor" }),
                    }),
                }),
            s.id === N.gNP && (0, i.jsx)(g.g, {}),
        ],
    });
}
let M = l.memo(function (e) {
    let {
            ref: t,
            bannerVisible: n,
            controller: s,
            className: r,
            onClick: d,
            onContextMenu: h,
            onMouseDown: A,
            disableBannerAnimation: m,
            "aria-expanded": g,
            "aria-controls": x,
            guild: C,
            guildBanner: T,
            animationOverlayHeight: S,
            children: j,
            headerClassName: R,
            communityInfoVisible: O,
            hasSubheader: M,
        } = e,
        U = C.features.has(N.GuildFeatures.ANIMATED_BANNER),
        G = (0, _.A)(C),
        P = !G && (0, I.A)(C),
        k = !G && O,
        w = (0, E.VI)(T) && U && !m,
        [B, V] = l.useState(!1),
        H = l.useRef(!1),
        F = l.useRef(null),
        K = t ?? F,
        W = l.useRef(void 0),
        Y = f.kt.getSetting(),
        z = (0, c.bG)([p.A], () => p.A.theme);
    l.useEffect(() => {
        if (w && n && !H.current && Y)
            return (
                V(!0),
                (W.current = setTimeout(() => {
                    V(!1);
                }, 5e3)),
                () => {
                    clearTimeout(W.current);
                }
            );
    }, [w, n, Y]),
        l.useEffect(() => {
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
                        className: a()(r, { [b.kL]: !0, [b.r9]: q(), [b.Pi]: n, [e]: !1, [b.Iv]: k || (M && P) }),
                        onMouseDown: A,
                        onContextMenu: h,
                        children: [
                            (0, i.jsxs)("header", {
                                className: a()(b.wx, R, { [b.jD]: o.Fr }),
                                children: [
                                    (0, i.jsx)("div", {
                                        className: a()(b.VW, b.Nk),
                                        children: (0, i.jsx)(L, {
                                            bannerVisible: n,
                                            guild: C,
                                            onClick: d,
                                            onContextMenu: h,
                                            ariaControls: x,
                                            ariaExpanded: g,
                                            children: j,
                                        }),
                                    }),
                                    P &&
                                        (0, i.jsx)(v, {
                                            guild: C,
                                            controller: s,
                                            hasBanner: null != T,
                                            hasSubheader: M ?? !1,
                                        }),
                                ],
                            }),
                            null != T ? (0, i.jsx)(y, { guild: C, controller: s, guildBanner: T, animate: B }) : null,
                            (0, i.jsx)(D, { controller: s }),
                        ],
                    }),
                    w && q()
                        ? (0, i.jsx)("div", {
                              className: b.rt,
                              onMouseEnter: () => {
                                  V(!0), clearTimeout(W.current);
                              },
                              onMouseLeave: () => V(!1),
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
        l = t.springs.value;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.animated.div, { className: b.UL, style: { opacity: l.to((e) => 0.5 * e) } }),
            (0, i.jsx)(r.animated.div, { className: b.ze, style: { opacity: l.to((e) => e) } }),
            (0, i.jsx)(r.animated.div, {
                className: b.iI,
                style: {
                    opacity: l.to((e) => (1 - e) * 6),
                    filter: (0, u.qB1)(n) ? l.to((e) => `brightness(${0.75 + 0.25 * e})`) : void 0,
                },
            }),
        ],
    });
}
