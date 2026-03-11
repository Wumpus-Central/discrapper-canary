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
    h = n(93055),
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
    S = n(665606),
    T = n(668560);
function v(e) {
    let { guild: t, controller: n, guildBanner: s, animate: l } = e,
        { value: c } = n.springs;
    return (0, i.jsx)(r.animated.div, {
        className: T.nI,
        style: { opacity: c, transform: c.to((e) => `translateY(-${(1 - e) * 90}px)`) },
        children: (0, i.jsx)(r.animated.div, {
            className: a()(T._e, { [T.fr]: o.Fr }),
            style: { transform: c.to((e) => `translateY(${(1 - e) * 90}px)`) },
            children: (0, i.jsx)("img", {
                className: a()(T.Q, { [T.fr]: o.Fr }),
                src: x.Ay.getGuildBannerURL({ id: t.id, banner: s }, l) ?? "",
                alt: "",
                "aria-hidden": !0,
            }),
        }),
    });
}
function y(e) {
    let { guild: t, controller: n, hasBanner: s, hasSubheader: l } = e,
        { value: o } = n.springs,
        c = t.features.has(I.GuildFeatures.DISCOVERABLE),
        h = (0, i.jsx)("div", {
            className: T.WV,
            children:
                c &&
                (0, i.jsx)(d.m, {
                    text: b.intl.string(b.t.O8lDI2),
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
                                children: b.intl.string(b.t["B/vjCu"]),
                            }),
                        ],
                    }),
                }),
        });
    return l
        ? (0, i.jsx)("div", { className: a()(T.pS, T.W$), children: h })
        : (0, i.jsx)(r.animated.div, {
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
    return (0, i.jsx)(u.Heading, { variant: "text-md/semibold", lineClamp: 1, className: T.UU, children: t.name });
}
let O = [N.Vc, I.gNP];
function L(e) {
    let { bannerVisible: t, guild: l, onClick: a, onContextMenu: r, ariaControls: o, ariaExpanded: A, children: g } = e,
        _ = (0, c.bG)([f.A], () => (0, m.K)(f.A, l)),
        { hasAccess: x } = (0, h.TW)("GuildHeaderContent"),
        C = s.useCallback(() => {
            _
                ? (0, u.mMO)(async () => {
                      let { default: e } = await Promise.all([n.e("43600"), n.e("52537")]).then(n.bind(n, 234355));
                      return (t) => (0, i.jsx)(e, { ...t, guild: l, source: I.PE1.GUILD_HEADER_INVITE_BUTTON });
                  })
                : (0, u.mMO)(async () => {
                      let { default: e } = await n.e("62751").then(n.bind(n, 132610));
                      return (t) => (0, i.jsx)(e, { ...t });
                  });
        }, [_, l]),
        v = s.useRef(null),
        y = s.useCallback((e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(s.Suspense, {
                fallback: null,
                children: (0, i.jsx)(M, { navId: "favorite-guild-header-add-context", onClose: t, onSelect: t }),
            });
        }, []);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(u.DUT, {
                className: T.Vm,
                "aria-label": b.intl.formatToPlainString(b.t.xMXpl3, { guildName: l?.name ?? "" }),
                "aria-controls": o,
                "aria-expanded": A,
                onContextMenu: r,
                onClick: a,
                children: [
                    (0, i.jsxs)("div", {
                        className: T.LO,
                        children: [
                            (0, i.jsx)(E.A, { guild: l, isBannerVisible: t }),
                            l.id === N.Vc && (0, i.jsx)(j, {}),
                            (0, i.jsx)(R, { guild: l }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: T.dx, children: g }),
                ],
            }),
            l.id === N.Vc &&
                x &&
                (0, i.jsx)(u.YNO, {
                    targetElementRef: v,
                    position: "bottom",
                    align: "left",
                    spacing: 4,
                    renderPopout: y,
                    children: (e) =>
                        (0, i.jsx)(u.K0, {
                            buttonRef: v,
                            variant: "icon-only",
                            size: "sm",
                            icon: u.pa$,
                            "aria-label": b.intl.string(S.default.G9fGlP),
                            ...e,
                        }),
                }),
            !O.includes(l.id) &&
                (0, i.jsx)(d.m, {
                    text: b.intl.string(b.t.Sd8Ixw),
                    position: "bottom",
                    asContainer: !0,
                    children: (0, i.jsx)(u.DUT, {
                        className: T.ak,
                        onClick: () => {
                            C();
                        },
                        children: (0, i.jsx)(u.DpX, { size: "refresh_sm", color: "currentColor" }),
                    }),
                }),
            l.id === I.gNP && (0, i.jsx)(p.g, {}),
        ],
    });
}
let M = s.lazy(() => n.e("60497").then(n.bind(n, 908424))),
    D = s.memo(function (e) {
        let {
                ref: t,
                bannerVisible: n,
                controller: l,
                className: r,
                onClick: d,
                onContextMenu: h,
                onMouseDown: m,
                disableBannerAnimation: p,
                "aria-expanded": f,
                "aria-controls": E,
                guild: N,
                guildBanner: b,
                animationOverlayHeight: S,
                children: j,
                headerClassName: R,
                communityInfoVisible: O,
                hasSubheader: M,
            } = e,
            D = N.features.has(I.GuildFeatures.ANIMATED_BANNER),
            U = (0, A.A)(N),
            P = !U && (0, C.A)(N),
            w = !U && O,
            k = (0, x.VI)(b) && D && !p,
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
                            className: a()(r, { [T.kL]: !0, [T.r9]: q(), [T.Pi]: n, [e]: !1, [T.Iv]: w || (M && P) }),
                            onMouseDown: m,
                            onContextMenu: h,
                            children: [
                                (0, i.jsxs)("header", {
                                    className: a()(T.wx, R, { [T.jD]: o.Fr }),
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: a()(T.VW, T.Nk),
                                            children: (0, i.jsx)(L, {
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
                                            (0, i.jsx)(y, {
                                                guild: N,
                                                controller: l,
                                                hasBanner: null != b,
                                                hasSubheader: M ?? !1,
                                            }),
                                    ],
                                }),
                                null != b
                                    ? (0, i.jsx)(v, { guild: N, controller: l, guildBanner: b, animate: V })
                                    : null,
                                (0, i.jsx)(G, { controller: l }),
                            ],
                        }),
                        k && q()
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
function G(e) {
    let { controller: t } = e,
        { theme: n } = (0, u.wRf)(),
        s = t.springs.value;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.animated.div, { className: T.UL, style: { opacity: s.to((e) => 0.5 * e) } }),
            (0, i.jsx)(r.animated.div, { className: T.ze, style: { opacity: s.to((e) => e) } }),
            (0, i.jsx)(r.animated.div, {
                className: T.iI,
                style: {
                    opacity: s.to((e) => (1 - e) * 6),
                    filter: (0, u.qB1)(n) ? s.to((e) => `brightness(${0.75 + 0.25 * e})`) : void 0,
                },
            }),
        ],
    });
}
