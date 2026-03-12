"use strict";
n.d(t, { Ay: () => L });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(490249),
    o = n(607399),
    c = n(311907),
    d = n(990078),
    u = n(397927),
    h = n(209047),
    A = n(454938),
    m = n(855687),
    p = n(731091),
    g = n(544028),
    _ = n(253932),
    f = n(576705),
    x = n(486020),
    C = n(885631),
    E = n(986268),
    I = n(652215),
    N = n(349828),
    b = n(985018),
    S = n(628262);
function T(e) {
    let { guild: t, controller: n, guildBanner: s, animate: l } = e,
        { value: c } = n.springs;
    return (0, i.jsx)(a.animated.div, {
        className: S.nI,
        style: { opacity: c, transform: c.to((e) => `translateY(-${(1 - e) * 90}px)`) },
        children: (0, i.jsx)(a.animated.div, {
            className: r()(S._e, { [S.fr]: o.Fr }),
            style: { transform: c.to((e) => `translateY(${(1 - e) * 90}px)`) },
            children: (0, i.jsx)("img", {
                className: r()(S.Q, { [S.fr]: o.Fr }),
                src: x.Ay.getGuildBannerURL({ id: t.id, banner: s }, l) ?? "",
                alt: "",
                "aria-hidden": !0,
            }),
        }),
    });
}
function v(e) {
    let { guild: t, controller: n, hasBanner: s, hasSubheader: l } = e,
        { value: o } = n.springs,
        c = t.features.has(I.GuildFeatures.DISCOVERABLE),
        h = (0, i.jsx)("div", {
            className: S.WV,
            children:
                c &&
                (0, i.jsx)(d.m, {
                    text: b.intl.string(b.t.O8lDI2),
                    position: "right",
                    children: (0, i.jsxs)("div", {
                        className: S.Pl,
                        children: [
                            (0, i.jsx)(u.L_e, {
                                size: "custom",
                                color: "currentColor",
                                width: 12,
                                height: 12,
                                className: S.ju,
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
        ? (0, i.jsx)("div", { className: r()(S.pS, S.W$), children: h })
        : (0, i.jsx)(a.animated.div, {
              className: S.pS,
              style: s ? { opacity: o } : { height: o.to((e) => `${20 * e}px`) },
              children: h,
          });
}
function y() {
    return (0, i.jsx)(u.Gg5, { size: "custom", color: "currentColor", className: S.PA, height: 20, width: 20 });
}
function j(e) {
    let { guild: t } = e;
    return (0, i.jsx)(u.Heading, { variant: "text-md/semibold", lineClamp: 1, className: S.UU, children: t.name });
}
let R = [N.Vc, I.gNP];
function O(e) {
    let { bannerVisible: t, guild: l, onClick: r, onContextMenu: a, ariaControls: o, ariaExpanded: A, children: g } = e,
        _ = (0, c.bG)([f.A], () => (0, m.K)(f.A, l)),
        x = s.useCallback(() => {
            _
                ? (0, u.mMO)(async () => {
                      let { default: e } = await Promise.all([n.e("43600"), n.e("75329")]).then(n.bind(n, 234355));
                      return (t) => (0, i.jsx)(e, { ...t, guild: l, source: I.PE1.GUILD_HEADER_INVITE_BUTTON });
                  })
                : (0, u.mMO)(async () => {
                      let { default: e } = await n.e("62751").then(n.bind(n, 132610));
                      return (t) => (0, i.jsx)(e, { ...t });
                  });
        }, [_, l]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(u.DUT, {
                className: S.Vm,
                "aria-label": b.intl.formatToPlainString(b.t.xMXpl3, { guildName: l?.name ?? "" }),
                "aria-controls": o,
                "aria-expanded": A,
                onContextMenu: a,
                onClick: r,
                children: [
                    (0, i.jsxs)("div", {
                        className: S.LO,
                        children: [
                            (0, i.jsx)(E.A, { guild: l, isBannerVisible: t }),
                            l.id === N.Vc && (0, i.jsx)(y, {}),
                            (0, i.jsx)(j, { guild: l }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: S.dx, children: g }),
                ],
            }),
            l.id === N.Vc && (0, i.jsx)(h.A, { className: S.sq }),
            !R.includes(l.id) &&
                (0, i.jsx)(d.m, {
                    text: b.intl.string(b.t.Sd8Ixw),
                    position: "bottom",
                    asContainer: !0,
                    children: (0, i.jsx)(u.DUT, {
                        className: S.ak,
                        onClick: () => {
                            x();
                        },
                        children: (0, i.jsx)(u.DpX, { size: "refresh_sm", color: "currentColor" }),
                    }),
                }),
            l.id === I.gNP && (0, i.jsx)(p.g, {}),
        ],
    });
}
let L = s.memo(function (e) {
    let {
            ref: t,
            bannerVisible: n,
            controller: l,
            className: a,
            onClick: d,
            onContextMenu: h,
            onMouseDown: m,
            disableBannerAnimation: p,
            "aria-expanded": f,
            "aria-controls": E,
            guild: N,
            guildBanner: b,
            animationOverlayHeight: y,
            children: j,
            headerClassName: R,
            communityInfoVisible: L,
            hasSubheader: D,
        } = e,
        G = N.features.has(I.GuildFeatures.ANIMATED_BANNER),
        U = (0, A.A)(N),
        P = !U && (0, C.A)(N),
        w = !U && L,
        k = (0, x.VI)(b) && G && !p,
        [V, B] = s.useState(!1),
        H = s.useRef(!1),
        F = s.useRef(null),
        K = t ?? F,
        W = s.useRef(void 0),
        Y = _.kt.getSetting(),
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
                        className: r()(a, { [S.kL]: !0, [S.r9]: q(), [S.Pi]: n, [e]: !1, [S.Iv]: w || (D && P) }),
                        onMouseDown: m,
                        onContextMenu: h,
                        children: [
                            (0, i.jsxs)("header", {
                                className: r()(S.wx, R, { [S.jD]: o.Fr }),
                                children: [
                                    (0, i.jsx)("div", {
                                        className: r()(S.VW, S.Nk),
                                        children: (0, i.jsx)(O, {
                                            bannerVisible: n,
                                            guild: N,
                                            onClick: d,
                                            onContextMenu: h,
                                            ariaControls: E,
                                            ariaExpanded: f,
                                            children: j,
                                        }),
                                    }),
                                    P &&
                                        (0, i.jsx)(v, {
                                            guild: N,
                                            controller: l,
                                            hasBanner: null != b,
                                            hasSubheader: D ?? !1,
                                        }),
                                ],
                            }),
                            null != b ? (0, i.jsx)(T, { guild: N, controller: l, guildBanner: b, animate: V }) : null,
                            (0, i.jsx)(M, { controller: l }),
                        ],
                    }),
                    k && q()
                        ? (0, i.jsx)("div", {
                              className: S.rt,
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
function M(e) {
    let { controller: t } = e,
        { theme: n } = (0, u.wRf)(),
        s = t.springs.value;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.animated.div, { className: S.UL, style: { opacity: s.to((e) => 0.5 * e) } }),
            (0, i.jsx)(a.animated.div, { className: S.ze, style: { opacity: s.to((e) => e) } }),
            (0, i.jsx)(a.animated.div, {
                className: S.iI,
                style: {
                    opacity: s.to((e) => (1 - e) * 6),
                    filter: (0, u.qB1)(n) ? s.to((e) => `brightness(${0.75 + 0.25 * e})`) : void 0,
                },
            }),
        ],
    });
}
