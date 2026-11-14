n.d(t, { A: () => P });
var l,
    r = n(477900),
    s = n(582128),
    a = n(503698),
    i = n.n(a),
    o = n(619953),
    u = n(855986),
    c = n(805251),
    d = n(534514),
    m = n(834730),
    g = n(793574),
    h = n(688810),
    p = n(287809),
    f = n(129230),
    x = n(857512),
    E = n(993408),
    v = n(212407),
    C = n(815280),
    _ =
        (((l = {}).LIGHT = "LIGHT"),
        (l.DARK = "DARK"),
        (l.GRADIENT_V1 = "GRADIENT_V1"),
        (l.TRANSPARENT = "TRANSPARENT"),
        l),
    y = n(821609),
    b = n(172218),
    A = n(140735),
    I = n(598047),
    S = n(396583),
    L = n(568631),
    k = n(792996),
    j = n(868102);
let N = s.memo((e) => {
        let { endsAt: t, onCountdownEnd: n } = e,
            l = (0, I.A)(),
            [a, i] = s.useState(!0),
            [, o] = s.useReducer((e) => e + 1, 0),
            u = s.useRef(!1),
            c = s.useCallback((e) => {
                i(e);
            }, []),
            d = (0, b.K)(c, 0),
            g = (0, L.Ty)(t),
            h = (0, L.lF)(g);
        return (
            (0, S.A)(o, h || !(l && a) ? null : 1e3),
            s.useEffect(() => {
                h && !u.current && ((u.current = !0), n());
            }, [h, n]),
            (0, r.jsxs)("div", {
                ref: d,
                className: j.qW,
                role: "timer",
                children: [
                    (0, L.z0)(g).map((e, t) =>
                        (0, r.jsxs)(
                            s.Fragment,
                            {
                                children: [
                                    t > 0 && (0, r.jsx)("div", { className: j.kx, "aria-hidden": !0 }),
                                    (0, r.jsx)("div", {
                                        className: j.t8,
                                        "aria-hidden": !0,
                                        children: e
                                            .split("")
                                            .map((e, t) =>
                                                (0, r.jsx)(
                                                    m.E,
                                                    {
                                                        tag: "span",
                                                        variant: "heading-xl/semibold",
                                                        color: "currentColor",
                                                        className: j.m3,
                                                        children: e,
                                                    },
                                                    t,
                                                ),
                                            ),
                                    }),
                                ],
                            },
                            t,
                        ),
                    ),
                    (0, r.jsx)(A.A, { children: k.intl.format(k.t.j6IyVe, g) }),
                ],
            })
        );
    }),
    O = s.memo((e) => {
        let {
            collectionName: t,
            collectionPromotion: n,
            forceHideCountdownCta: l = !1,
            onShopSale: s,
            onCountdownEnd: a,
        } = e;
        return (0, r.jsxs)("div", {
            className: i()(
                j.kL,
                (function (e) {
                    switch (e) {
                        case _.LIGHT:
                            return j.BB;
                        case _.DARK:
                            return j.XT;
                        case _.GRADIENT_V1:
                            return j.eg;
                        case _.TRANSPARENT:
                            return j.JO;
                        default:
                            return j.XT;
                    }
                })(n.countdownStyle),
                { [j.CT]: n.countdownPosition === o.l.LEFT },
            ),
            children: [
                (0, r.jsx)(N, { endsAt: n.endsAt, onCountdownEnd: a }, n.endsAt.getTime()),
                (0, r.jsx)(m.E, {
                    variant: "body-md/semibold",
                    color: "currentColor",
                    className: j.fn,
                    children: k.intl.format(k.t["97Qza2"], { percent: n.percentOff, collectionName: t }),
                }),
                n.showCountdownCta &&
                    !l &&
                    (0, r.jsx)("div", {
                        className: j.lO,
                        children: (0, r.jsx)(y.$, {
                            variant: "overlay-primary",
                            fullWidth: !0,
                            onClick: s,
                            text: k.intl.string(k.t["5GoOlx"]),
                        }),
                    }),
            ],
        });
    });
var T = n(60140),
    R = n(758836),
    M = n(652215),
    D = n(105499);
let P = (e) => {
    let {
            heroBlock: t,
            collectionPromotion: n,
            handleTransition: l,
            tab: a,
            onPromotionEnd: _,
            hideCards: y = !1,
            forceHideCountdownCta: b = !1,
        } = e,
        A = (0, u.bG)([p.default], () => p.default.getCurrentUser()),
        I = (0, x.uM)(),
        { analyticsLocations: S } = (0, h.Ay)(g.A.COLLECTIBLES_SHOP_HERO),
        {
            bannerDisplayConfig: L,
            logoDisplayConfig: j,
            heroLogo: N,
            heroBannerStatic: P,
            heroBannerAnimated: B,
        } = (0, v.Kk)(t),
        w = L?.responsive ?? !1,
        H = L?.backgroundStyle,
        G = s.useCallback(() => {
            (l({
                sourceButton: "shop collection sale hero",
                categorySkuId: t.categorySkuId,
                isInternalShopDeeplink: !0,
            }),
                f.default.track(M.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: I?.sessionId,
                    sku_id: t.categorySkuId,
                    page_type: a,
                    page_section: I?.pageSection,
                    page_category: I?.pageCategory,
                    cta_name: "shop collection sale hero button",
                }));
        }, [l, t.categorySkuId, I, a]);
    if (null == A) return null;
    let U = n.countdownPosition === o.l.LEFT,
        $ = (0, r.jsx)(O, {
            collectionName: t.name,
            collectionPromotion: n,
            forceHideCountdownCta: b,
            onShopSale: G,
            onCountdownEnd: _,
        });
    return (0, r.jsx)(h.f5, {
        value: S,
        children: (0, r.jsxs)("div", {
            className: D.os,
            children: [
                (0, r.jsx)("div", {
                    className: i()(D.vK, { [D.no]: w }),
                    style: null != H ? { background: H } : void 0,
                    children: null != P && (0, r.jsx)(C.A, { bannerStatic: P, bannerAnimated: B, isResponsive: w }),
                }),
                (0, r.jsxs)("div", {
                    className: D.xX,
                    children: [
                        (0, r.jsxs)("div", {
                            className: i()(D.uZ, D.bC, { [D.no]: w }),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: D.Hw,
                                    children: [
                                        (0, E.HF)(t.unpublishedAt) &&
                                            (0, r.jsx)("div", {
                                                className: D.v0,
                                                children: (0, r.jsx)(c.E, {
                                                    type: { text: k.intl.string(k.t["h/uBCR"]) },
                                                    variant: "inverted",
                                                }),
                                            }),
                                        (0, r.jsxs)("div", {
                                            className: D.Wq,
                                            children: [
                                                null != N &&
                                                    (0, r.jsx)("img", {
                                                        className: D.rm,
                                                        src: N,
                                                        alt: t.name,
                                                        style: j?.toDesktopStyles(),
                                                    }),
                                                null != t.title &&
                                                    (0, r.jsx)(d.D, {
                                                        variant: "heading-xxl/semibold",
                                                        color: "text-strong",
                                                        children: t.title,
                                                    }),
                                                null != t.summary &&
                                                    "" !== t.summary &&
                                                    (0, r.jsx)(m.E, {
                                                        variant: "body-md/normal",
                                                        className: D.Tm,
                                                        style: { color: t.bannerTextColor ?? void 0 },
                                                        children: t.summary,
                                                    }),
                                            ],
                                        }),
                                        U && $,
                                    ],
                                }),
                                !U && (0, r.jsx)("div", { className: D.pv, children: $ }),
                            ],
                        }),
                        !y &&
                            (0, r.jsx)(T.A, {
                                heroBlockRecord: t,
                                tab: a,
                                isBlockLoading: !1,
                                layout: a === R.G2.HOME ? "hscroll" : "feed",
                            }),
                    ],
                }),
            ],
        }),
    });
};
