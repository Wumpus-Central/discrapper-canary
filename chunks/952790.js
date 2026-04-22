n.d(t, { Ay: () => H });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(517738),
    o = n(607399),
    d = n(311907),
    c = n(990078),
    u = n(998445),
    h = n(834730),
    A = n(27232),
    _ = n(534514),
    m = n(192308),
    g = n(939249),
    p = n(241541),
    f = n(43990),
    E = n(38021),
    x = n(366010),
    I = n(5180),
    C = n(209047),
    b = n(454938),
    N = n(855687),
    S = n(731091),
    v = n(544028),
    T = n(253932),
    y = n(576705),
    R = n(486020),
    j = n(885631),
    L = n(986268),
    O = n(652215),
    G = n(349828),
    D = n(985018),
    M = n(765529);
function U(e) {
    let { guild: t, controller: n, guildBanner: l, animate: s } = e,
        { value: d } = n.springs;
    return (0, i.jsx)(r.animated.div, {
        className: M.nI,
        style: { opacity: d, transform: d.to((e) => `translateY(-${(1 - e) * 90}px)`) },
        children: (0, i.jsx)(r.animated.div, {
            className: a()(M._e, { [M.fr]: o.Fr }),
            style: { transform: d.to((e) => `translateY(${(1 - e) * 90}px)`) },
            children: (0, i.jsx)("img", {
                className: a()(M.Q, { [M.fr]: o.Fr }),
                src: R.Ay.getGuildBannerURL({ id: t.id, banner: l }, s) ?? "",
                alt: "",
                "aria-hidden": !0,
            }),
        }),
    });
}
function P(e) {
    let { guild: t, controller: n, hasBanner: l, hasSubheader: s } = e,
        { value: o } = n.springs,
        d = t.features.has(O.GuildFeatures.DISCOVERABLE),
        A = (0, i.jsx)("div", {
            className: M.WV,
            children:
                d &&
                (0, i.jsx)(c.m, {
                    text: D.intl.string(D.t.O8lDI2),
                    position: "right",
                    children: (0, i.jsxs)("div", {
                        className: M.Pl,
                        children: [
                            (0, i.jsx)(u.L, {
                                size: "custom",
                                color: "currentColor",
                                width: 12,
                                height: 12,
                                className: M.ju,
                            }),
                            (0, i.jsx)(h.E, {
                                variant: "text-xs/normal",
                                color: "none",
                                children: D.intl.string(D.t["B/vjCu"]),
                            }),
                        ],
                    }),
                }),
        });
    return s
        ? (0, i.jsx)("div", { className: a()(M.pS, M.W$), children: A })
        : (0, i.jsx)(r.animated.div, {
              className: M.pS,
              style: l ? { opacity: o } : { height: o.to((e) => `${20 * e}px`) },
              children: A,
          });
}
function w() {
    return (0, i.jsx)(A.G, { size: "custom", color: "currentColor", className: M.PA, height: 20, width: 20 });
}
function k(e) {
    let { guild: t } = e;
    return (0, i.jsx)(_.D, { variant: "text-md/semibold", lineClamp: 1, className: M.UU, children: (0, I.YC)(t) });
}
let V = [G.Vc, O.gNP];
function B(e) {
    let { bannerVisible: t, guild: s, onClick: a, onContextMenu: r, ariaControls: o, ariaExpanded: u, children: h } = e,
        A = (0, I.YC)(s),
        _ = (0, d.bG)([y.A], () => (0, N.K)(y.A, s)),
        f = l.useCallback(() => {
            _
                ? (0, m.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([n.e("28136"), n.e("43600"), n.e("42738")]).then(
                          n.bind(n, 234355),
                      );
                      return (t) => (0, i.jsx)(e, { ...t, guild: s, source: O.PE1.GUILD_HEADER_INVITE_BUTTON });
                  })
                : (0, m.openModalLazy)(async () => {
                      let { default: e } = await n.e("62751").then(n.bind(n, 132610));
                      return (t) => (0, i.jsx)(e, { ...t });
                  });
        }, [_, s]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(g.D, {
                className: M.Vm,
                "aria-label": D.intl.formatToPlainString(D.t.xMXpl3, { guildName: A }),
                "aria-controls": o,
                "aria-expanded": u,
                onContextMenu: r,
                onClick: a,
                children: [
                    (0, i.jsxs)("div", {
                        className: M.LO,
                        children: [
                            (0, i.jsx)(L.A, { guild: s, isBannerVisible: t }),
                            s.id === G.Vc && (0, i.jsx)(w, {}),
                            (0, i.jsx)(k, { guild: s }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: M.dx, children: h }),
                ],
            }),
            s.id === G.Vc && (0, i.jsx)(C.A, { className: M.sq }),
            !V.includes(s.id) &&
                (0, i.jsx)(c.m, {
                    text: D.intl.string(D.t.Sd8Ixw),
                    position: "bottom",
                    asContainer: !0,
                    children: (0, i.jsx)(g.D, {
                        className: M.ak,
                        onClick: () => {
                            f();
                        },
                        children: (0, i.jsx)(p.D, { size: "refresh_sm", color: "currentColor" }),
                    }),
                }),
            s.id === O.gNP && (0, i.jsx)(S.g, {}),
        ],
    });
}
let H = l.memo(function (e) {
    let {
            ref: t,
            bannerVisible: n,
            controller: s,
            className: r,
            onClick: c,
            onContextMenu: u,
            onMouseDown: h,
            disableBannerAnimation: A,
            "aria-expanded": _,
            "aria-controls": m,
            guild: g,
            guildBanner: p,
            animationOverlayHeight: E,
            children: x,
            headerClassName: I,
            communityInfoVisible: C,
            hasSubheader: N,
        } = e,
        S = g.features.has(O.GuildFeatures.ANIMATED_BANNER),
        y = (0, b.A)(g),
        L = !y && (0, j.A)(g),
        G = !y && C,
        D = (0, R.VI)(p) && S && !A,
        [w, k] = l.useState(!1),
        V = l.useRef(!1),
        H = l.useRef(null),
        W = t ?? H,
        Y = l.useRef(void 0),
        K = T.kt.getSetting(),
        z = (0, d.bG)([v.A], () => v.A.theme);
    l.useEffect(() => {
        if (D && n && !V.current && K)
            return (
                k(!0),
                (Y.current = setTimeout(() => {
                    k(!1);
                }, 5e3)),
                () => {
                    clearTimeout(Y.current);
                }
            );
    }, [D, n, K]),
        l.useEffect(() => {
            V.current = n;
        }, [n]);
    let q = () => {
        let { renderBanner: t, guildBanner: n } = e;
        return null != n && !t;
    };
    return (0, i.jsx)(f.N, {
        theme: z,
        children: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)("div", {
                        "data-has-banner": q(),
                        "data-banner-visible": n,
                        ref: W,
                        className: a()(r, { [M.kL]: !0, [M.r9]: q(), [M.Pi]: n, [e]: !1, [M.Iv]: G || (N && L) }),
                        onMouseDown: h,
                        onContextMenu: u,
                        children: [
                            (0, i.jsxs)("header", {
                                className: a()(M.wx, I, { [M.jD]: o.Fr }),
                                children: [
                                    (0, i.jsx)("div", {
                                        className: a()(M.VW, M.Nk),
                                        children: (0, i.jsx)(B, {
                                            bannerVisible: n,
                                            guild: g,
                                            onClick: c,
                                            onContextMenu: u,
                                            ariaControls: m,
                                            ariaExpanded: _,
                                            children: x,
                                        }),
                                    }),
                                    L &&
                                        (0, i.jsx)(P, {
                                            guild: g,
                                            controller: s,
                                            hasBanner: null != p,
                                            hasSubheader: N ?? !1,
                                        }),
                                ],
                            }),
                            null != p ? (0, i.jsx)(U, { guild: g, controller: s, guildBanner: p, animate: w }) : null,
                            (0, i.jsx)(F, { controller: s }),
                        ],
                    }),
                    D && q()
                        ? (0, i.jsx)("div", {
                              className: M.rt,
                              onMouseEnter: () => {
                                  k(!0), clearTimeout(Y.current);
                              },
                              onMouseLeave: () => k(!1),
                              style: { height: E },
                          })
                        : null,
                ],
            }),
    });
});
function F(e) {
    let { controller: t } = e,
        { theme: n } = (0, E.wR)(),
        l = t.springs.value;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.animated.div, { className: M.UL, style: { opacity: l.to((e) => 0.5 * e) } }),
            (0, i.jsx)(r.animated.div, { className: M.ze, style: { opacity: l.to((e) => e) } }),
            (0, i.jsx)(r.animated.div, {
                className: M.iI,
                style: {
                    opacity: l.to((e) => (1 - e) * 6),
                    filter: (0, x.q)(n) ? l.to((e) => `brightness(${0.75 + 0.25 * e})`) : void 0,
                },
            }),
        ],
    });
}
