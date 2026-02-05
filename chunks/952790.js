n.d(t, { Ay: () => O });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(563495),
    o = n(607399),
    d = n(311907),
    c = n(990078),
    u = n(397927),
    h = n(454938),
    A = n(855687),
    g = n(731091),
    m = n(544028),
    p = n(253932),
    _ = n(576705),
    x = n(486020),
    f = n(885631),
    E = n(986268),
    C = n(652215),
    I = n(349828),
    S = n(985018),
    b = n(668560);
function N(e) {
    let { guild: t, controller: n, guildBanner: l, animate: s } = e,
        { value: d } = n.springs;
    return (0, i.jsx)(r.animated.div, {
        className: b.nI,
        style: { opacity: d, transform: d.to((e) => `translateY(-${(1 - e) * 90}px)`) },
        children: (0, i.jsx)(r.animated.div, {
            className: a()(b._e, { [b.fr]: o.Fr }),
            style: { transform: d.to((e) => `translateY(${(1 - e) * 90}px)`) },
            children: (0, i.jsx)("img", {
                className: a()(b.Q, { [b.fr]: o.Fr }),
                src: x.Ay.getGuildBannerURL({ id: t.id, banner: l }, s) ?? "",
                alt: "",
                "aria-hidden": !0,
            }),
        }),
    });
}
function T(e) {
    let { guild: t, controller: n, hasBanner: l, hasSubheader: s } = e,
        { value: o } = n.springs,
        d = t.features.has(C.GuildFeatures.DISCOVERABLE),
        h = (0, i.jsx)("div", {
            className: b.WV,
            children:
                d &&
                (0, i.jsx)(c.m, {
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
function v(e) {
    let { guild: t } = e;
    return (0, i.jsx)(u.Heading, { variant: "text-md/semibold", lineClamp: 1, className: b.UU, children: t.name });
}
let y = [I.V, C.gNP];
function R(e) {
    let { bannerVisible: t, guild: s, onClick: a, onContextMenu: r, ariaControls: o, ariaExpanded: h, children: m } = e,
        p = (0, d.bG)([_.A], () => (0, A.K)(_.A, s)),
        x = l.useCallback(() => {
            p
                ? (0, u.mMO)(async () => {
                      let { default: e } = await Promise.all([n.e("43600"), n.e("42821")]).then(n.bind(n, 234355));
                      return (t) => (0, i.jsx)(e, { ...t, guild: s, source: C.PE1.GUILD_HEADER_INVITE_BUTTON });
                  })
                : (0, u.mMO)(async () => {
                      let { default: e } = await n.e("62751").then(n.bind(n, 132610));
                      return (t) => (0, i.jsx)(e, { ...t });
                  });
        }, [p, s]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(u.DUT, {
                className: b.Vm,
                "aria-label": S.intl.formatToPlainString(S.t.xMXpl3, { guildName: s?.name ?? "" }),
                "aria-controls": o,
                "aria-expanded": h,
                onContextMenu: r,
                onClick: a,
                children: [
                    (0, i.jsxs)("div", {
                        className: b.LO,
                        children: [
                            (0, i.jsx)(E.A, { guild: s, isBannerVisible: t }),
                            s.id === I.V && (0, i.jsx)(j, {}),
                            (0, i.jsx)(v, { guild: s }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: b.dx, children: m }),
                ],
            }),
            !y.includes(s.id) &&
                (0, i.jsx)(c.m, {
                    text: S.intl.string(S.t.Sd8Ixw),
                    position: "bottom",
                    asContainer: !0,
                    children: (0, i.jsx)(u.DUT, {
                        className: b.ak,
                        onClick: () => {
                            x();
                        },
                        children: (0, i.jsx)(u.DpX, { size: "refresh_sm", color: "currentColor" }),
                    }),
                }),
            s.id === C.gNP && (0, i.jsx)(g.g, {}),
        ],
    });
}
let O = l.memo(function (e) {
    let {
            ref: t,
            bannerVisible: n,
            controller: s,
            className: r,
            onClick: c,
            onContextMenu: A,
            onMouseDown: g,
            disableBannerAnimation: _,
            "aria-expanded": E,
            "aria-controls": I,
            guild: S,
            guildBanner: j,
            animationOverlayHeight: v,
            children: y,
            headerClassName: O,
            communityInfoVisible: D,
            hasSubheader: M,
        } = e,
        G = S.features.has(C.GuildFeatures.ANIMATED_BANNER),
        U = (0, h.A)(S),
        P = !U && (0, f.A)(S),
        k = !U && D,
        w = (0, x.VI)(j) && G && !_,
        [V, B] = l.useState(!1),
        H = l.useRef(!1),
        F = l.useRef(null),
        Y = t ?? F,
        W = l.useRef(void 0),
        K = p.kt.getSetting(),
        z = (0, d.bG)([m.A], () => m.A.theme);
    l.useEffect(() => {
        if (w && n && !H.current && K)
            return (
                B(!0),
                (W.current = setTimeout(() => {
                    B(!1);
                }, 5e3)),
                () => {
                    clearTimeout(W.current);
                }
            );
    }, [w, n, K]),
        l.useEffect(() => {
            H.current = n;
        }, [n]);
    let X = () => {
        let { renderBanner: t, guildBanner: n } = e;
        return null != n && !t;
    };
    return (0, i.jsx)(u.NPJ, {
        theme: z,
        children: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)("div", {
                        "data-has-banner": X(),
                        "data-banner-visible": n,
                        ref: Y,
                        className: a()(r, { [b.kL]: !0, [b.r9]: X(), [b.Pi]: n, [e]: !1, [b.Iv]: k || (M && P) }),
                        onMouseDown: g,
                        onContextMenu: A,
                        children: [
                            (0, i.jsxs)("header", {
                                className: a()(b.wx, O, { [b.jD]: o.Fr }),
                                children: [
                                    (0, i.jsx)("div", {
                                        className: a()(b.VW, b.Nk),
                                        children: (0, i.jsx)(R, {
                                            bannerVisible: n,
                                            guild: S,
                                            onClick: c,
                                            onContextMenu: A,
                                            ariaControls: I,
                                            ariaExpanded: E,
                                            children: y,
                                        }),
                                    }),
                                    P &&
                                        (0, i.jsx)(T, {
                                            guild: S,
                                            controller: s,
                                            hasBanner: null != j,
                                            hasSubheader: M ?? !1,
                                        }),
                                ],
                            }),
                            null != j ? (0, i.jsx)(N, { guild: S, controller: s, guildBanner: j, animate: V }) : null,
                            (0, i.jsx)(L, { controller: s }),
                        ],
                    }),
                    w && X()
                        ? (0, i.jsx)("div", {
                              className: b.rt,
                              onMouseEnter: () => {
                                  B(!0), clearTimeout(W.current);
                              },
                              onMouseLeave: () => B(!1),
                              style: { height: v },
                          })
                        : null,
                ],
            }),
    });
});
function L(e) {
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
