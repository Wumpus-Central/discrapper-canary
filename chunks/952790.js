"use strict";
n.d(t, { Ay: () => O });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(475539),
    o = n(607399),
    c = n(311907),
    d = n(990078),
    u = n(397927),
    h = n(454938),
    A = n(855687),
    p = n(731091),
    g = n(544028),
    m = n(253932),
    _ = n(576705),
    f = n(486020),
    x = n(885631),
    C = n(986268),
    E = n(652215),
    I = n(349828),
    b = n(985018),
    N = n(668560);
function S(e) {
    let { guild: t, controller: n, guildBanner: s, animate: l } = e,
        { value: c } = n.springs;
    return (0, i.jsx)(a.animated.div, {
        className: N.nI,
        style: { opacity: c, transform: c.to((e) => `translateY(-${(1 - e) * 90}px)`) },
        children: (0, i.jsx)(a.animated.div, {
            className: r()(N._e, { [N.fr]: o.Fr }),
            style: { transform: c.to((e) => `translateY(${(1 - e) * 90}px)`) },
            children: (0, i.jsx)("img", {
                className: r()(N.Q, { [N.fr]: o.Fr }),
                src: f.Ay.getGuildBannerURL({ id: t.id, banner: s }, l) ?? "",
                alt: "",
                "aria-hidden": !0,
            }),
        }),
    });
}
function T(e) {
    let { guild: t, controller: n, hasBanner: s, hasSubheader: l } = e,
        { value: o } = n.springs,
        c = t.features.has(E.GuildFeatures.DISCOVERABLE),
        h = (0, i.jsx)("div", {
            className: N.WV,
            children:
                c &&
                (0, i.jsx)(d.m, {
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
    return l
        ? (0, i.jsx)("div", { className: r()(N.pS, N.W$), children: h })
        : (0, i.jsx)(a.animated.div, {
              className: N.pS,
              style: s ? { opacity: o } : { height: o.to((e) => `${20 * e}px`) },
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
let j = [I.Vc, E.gNP];
function R(e) {
    let { bannerVisible: t, guild: l, onClick: r, onContextMenu: a, ariaControls: o, ariaExpanded: h, children: g } = e,
        m = (0, c.bG)([_.A], () => (0, A.K)(_.A, l)),
        f = s.useCallback(() => {
            m
                ? (0, u.mMO)(async () => {
                      let { default: e } = await Promise.all([n.e("43600"), n.e("52537")]).then(n.bind(n, 234355));
                      return (t) => (0, i.jsx)(e, { ...t, guild: l, source: E.PE1.GUILD_HEADER_INVITE_BUTTON });
                  })
                : (0, u.mMO)(async () => {
                      let { default: e } = await n.e("62751").then(n.bind(n, 132610));
                      return (t) => (0, i.jsx)(e, { ...t });
                  });
        }, [m, l]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(u.DUT, {
                className: N.Vm,
                "aria-label": b.intl.formatToPlainString(b.t.xMXpl3, { guildName: l?.name ?? "" }),
                "aria-controls": o,
                "aria-expanded": h,
                onContextMenu: a,
                onClick: r,
                children: [
                    (0, i.jsxs)("div", {
                        className: N.LO,
                        children: [
                            (0, i.jsx)(C.A, { guild: l, isBannerVisible: t }),
                            l.id === I.Vc && (0, i.jsx)(v, {}),
                            (0, i.jsx)(y, { guild: l }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: N.dx, children: g }),
                ],
            }),
            !j.includes(l.id) &&
                (0, i.jsx)(d.m, {
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
            l.id === E.gNP && (0, i.jsx)(p.g, {}),
        ],
    });
}
let O = s.memo(function (e) {
    let {
            ref: t,
            bannerVisible: n,
            controller: l,
            className: a,
            onClick: d,
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
        [V, B] = s.useState(!1),
        H = s.useRef(!1),
        F = s.useRef(null),
        K = t ?? F,
        W = s.useRef(void 0),
        Y = m.kt.getSetting(),
        z = (0, c.bG)([g.A], () => g.A.theme);
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
                        ref: K,
                        className: r()(a, { [N.kL]: !0, [N.r9]: X(), [N.Pi]: n, [e]: !1, [N.Iv]: w || (D && P) }),
                        onMouseDown: p,
                        onContextMenu: A,
                        children: [
                            (0, i.jsxs)("header", {
                                className: r()(N.wx, O, { [N.jD]: o.Fr }),
                                children: [
                                    (0, i.jsx)("div", {
                                        className: r()(N.VW, N.Nk),
                                        children: (0, i.jsx)(R, {
                                            bannerVisible: n,
                                            guild: b,
                                            onClick: d,
                                            onContextMenu: A,
                                            ariaControls: I,
                                            ariaExpanded: C,
                                            children: j,
                                        }),
                                    }),
                                    P &&
                                        (0, i.jsx)(T, {
                                            guild: b,
                                            controller: l,
                                            hasBanner: null != v,
                                            hasSubheader: D ?? !1,
                                        }),
                                ],
                            }),
                            null != v ? (0, i.jsx)(S, { guild: b, controller: l, guildBanner: v, animate: V }) : null,
                            (0, i.jsx)(L, { controller: l }),
                        ],
                    }),
                    k && X()
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
        s = t.springs.value;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.animated.div, { className: N.UL, style: { opacity: s.to((e) => 0.5 * e) } }),
            (0, i.jsx)(a.animated.div, { className: N.ze, style: { opacity: s.to((e) => e) } }),
            (0, i.jsx)(a.animated.div, {
                className: N.iI,
                style: {
                    opacity: s.to((e) => (1 - e) * 6),
                    filter: (0, u.qB1)(n) ? s.to((e) => `brightness(${0.75 + 0.25 * e})`) : void 0,
                },
            }),
        ],
    });
}
