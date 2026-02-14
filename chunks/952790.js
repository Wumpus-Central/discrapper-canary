n.d(t, { Ay: () => O });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(522160),
    o = n(607399),
    d = n(311907),
    c = n(990078),
    u = n(397927),
    h = n(454938),
    A = n(855687),
    p = n(731091),
    m = n(544028),
    g = n(253932),
    _ = n(576705),
    f = n(486020),
    x = n(885631),
    C = n(986268),
    E = n(652215),
    I = n(349828),
    b = n(985018),
    N = n(668560);
function S(e) {
    let { guild: t, controller: n, guildBanner: l, animate: s } = e,
        { value: d } = n.springs;
    return (0, i.jsx)(r.animated.div, {
        className: N.nI,
        style: { opacity: d, transform: d.to((e) => `translateY(-${(1 - e) * 90}px)`) },
        children: (0, i.jsx)(r.animated.div, {
            className: a()(N._e, { [N.fr]: o.Fr }),
            style: { transform: d.to((e) => `translateY(${(1 - e) * 90}px)`) },
            children: (0, i.jsx)("img", {
                className: a()(N.Q, { [N.fr]: o.Fr }),
                src: f.Ay.getGuildBannerURL({ id: t.id, banner: l }, s) ?? "",
                alt: "",
                "aria-hidden": !0,
            }),
        }),
    });
}
function T(e) {
    let { guild: t, controller: n, hasBanner: l, hasSubheader: s } = e,
        { value: o } = n.springs,
        d = t.features.has(E.GuildFeatures.DISCOVERABLE),
        h = (0, i.jsx)("div", {
            className: N.WV,
            children:
                d &&
                (0, i.jsx)(c.m, {
                    text: b.intl.string(b.t.O8lDI2),
                    position: "right",
                    children: (0, i.jsxs)("div", {
                        className: N.Pl,
                        children: [
                            (0, i.jsx)(u.L_e, {
                                size: "custom",
                                color: "currentColor",
                                width: 12,
                                height: 12,
                                className: N.ju,
                            }),
                            (0, i.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: "none",
                                children: b.intl.string(b.t["B/vjCu"]),
                            }),
                        ],
                    }),
                }),
        });
    return s
        ? (0, i.jsx)("div", { className: a()(N.pS, N.W$), children: h })
        : (0, i.jsx)(r.animated.div, {
              className: N.pS,
              style: l ? { opacity: o } : { height: o.to((e) => `${20 * e}px`) },
              children: h,
          });
}
function v() {
    return (0, i.jsx)(u.Gg5, { size: "custom", color: "currentColor", className: N.PA, height: 20, width: 20 });
}
function y(e) {
    let { guild: t } = e;
    return (0, i.jsx)(u.Heading, { variant: "text-md/semibold", lineClamp: 1, className: N.UU, children: t.name });
}
let j = [I.V, E.gNP];
function R(e) {
    let { bannerVisible: t, guild: s, onClick: a, onContextMenu: r, ariaControls: o, ariaExpanded: h, children: m } = e,
        g = (0, d.bG)([_.A], () => (0, A.K)(_.A, s)),
        f = l.useCallback(() => {
            g
                ? (0, u.mMO)(async () => {
                      let { default: e } = await Promise.all([n.e("43600"), n.e("52537")]).then(n.bind(n, 234355));
                      return (t) => (0, i.jsx)(e, { ...t, guild: s, source: E.PE1.GUILD_HEADER_INVITE_BUTTON });
                  })
                : (0, u.mMO)(async () => {
                      let { default: e } = await n.e("62751").then(n.bind(n, 132610));
                      return (t) => (0, i.jsx)(e, { ...t });
                  });
        }, [g, s]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(u.DUT, {
                className: N.Vm,
                "aria-label": b.intl.formatToPlainString(b.t.xMXpl3, { guildName: s?.name ?? "" }),
                "aria-controls": o,
                "aria-expanded": h,
                onContextMenu: r,
                onClick: a,
                children: [
                    (0, i.jsxs)("div", {
                        className: N.LO,
                        children: [
                            (0, i.jsx)(C.A, { guild: s, isBannerVisible: t }),
                            s.id === I.V && (0, i.jsx)(v, {}),
                            (0, i.jsx)(y, { guild: s }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: N.dx, children: m }),
                ],
            }),
            !j.includes(s.id) &&
                (0, i.jsx)(c.m, {
                    text: b.intl.string(b.t.Sd8Ixw),
                    position: "bottom",
                    asContainer: !0,
                    children: (0, i.jsx)(u.DUT, {
                        className: N.ak,
                        onClick: () => {
                            f();
                        },
                        children: (0, i.jsx)(u.DpX, { size: "refresh_sm", color: "currentColor" }),
                    }),
                }),
            s.id === E.gNP && (0, i.jsx)(p.g, {}),
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
            onMouseDown: p,
            disableBannerAnimation: _,
            "aria-expanded": C,
            "aria-controls": I,
            guild: b,
            guildBanner: v,
            animationOverlayHeight: y,
            children: j,
            headerClassName: O,
            communityInfoVisible: M,
            hasSubheader: D,
        } = e,
        G = b.features.has(E.GuildFeatures.ANIMATED_BANNER),
        U = (0, h.A)(b),
        P = !U && (0, x.A)(b),
        w = !U && M,
        k = (0, f.VI)(v) && G && !_,
        [V, B] = l.useState(!1),
        H = l.useRef(!1),
        F = l.useRef(null),
        K = t ?? F,
        W = l.useRef(void 0),
        Y = g.kt.getSetting(),
        z = (0, d.bG)([m.A], () => m.A.theme);
    l.useEffect(() => {
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
                        className: a()(r, { [N.kL]: !0, [N.r9]: q(), [N.Pi]: n, [e]: !1, [N.Iv]: w || (D && P) }),
                        onMouseDown: p,
                        onContextMenu: A,
                        children: [
                            (0, i.jsxs)("header", {
                                className: a()(N.wx, O, { [N.jD]: o.Fr }),
                                children: [
                                    (0, i.jsx)("div", {
                                        className: a()(N.VW, N.Nk),
                                        children: (0, i.jsx)(R, {
                                            bannerVisible: n,
                                            guild: b,
                                            onClick: c,
                                            onContextMenu: A,
                                            ariaControls: I,
                                            ariaExpanded: C,
                                            children: j,
                                        }),
                                    }),
                                    P &&
                                        (0, i.jsx)(T, {
                                            guild: b,
                                            controller: s,
                                            hasBanner: null != v,
                                            hasSubheader: D ?? !1,
                                        }),
                                ],
                            }),
                            null != v ? (0, i.jsx)(S, { guild: b, controller: s, guildBanner: v, animate: V }) : null,
                            (0, i.jsx)(L, { controller: s }),
                        ],
                    }),
                    k && q()
                        ? (0, i.jsx)("div", {
                              className: N.rt,
                              onMouseEnter: () => {
                                  B(!0), clearTimeout(W.current);
                              },
                              onMouseLeave: () => B(!1),
                              style: { height: y },
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
            (0, i.jsx)(r.animated.div, { className: N.UL, style: { opacity: l.to((e) => 0.5 * e) } }),
            (0, i.jsx)(r.animated.div, { className: N.ze, style: { opacity: l.to((e) => e) } }),
            (0, i.jsx)(r.animated.div, {
                className: N.iI,
                style: {
                    opacity: l.to((e) => (1 - e) * 6),
                    filter: (0, u.qB1)(n) ? l.to((e) => `brightness(${0.75 + 0.25 * e})`) : void 0,
                },
            }),
        ],
    });
}
