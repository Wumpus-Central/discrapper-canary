n.d(t, { A: () => M });
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
    E = n(857512),
    x = n(993408),
    v = n(212407),
    C = n(815280),
    A =
        (((l = {}).LIGHT = "LIGHT"),
        (l.DARK = "DARK"),
        (l.GRADIENT_V1 = "GRADIENT_V1"),
        (l.TRANSPARENT = "TRANSPARENT"),
        l),
    y = n(821609),
    _ = n(172218),
    b = n(140735),
    S = n(598047),
    L = n(396583),
    I = n(568631),
    k = n(792996),
    j = n(868102);
let N = s.memo((e) => {
        let { endsAt: t, onCountdownEnd: n } = e,
            l = (0, S.A)(),
            [a, i] = s.useState(!0),
            [, o] = s.useReducer((e) => e + 1, 0),
            u = s.useRef(!1),
            c = s.useCallback((e) => {
                i(e);
            }, []),
            d = (0, _.K)(c, 0),
            g = (0, I.Ty)(t),
            h = (0, I.lF)(g);
        return (
            (0, L.A)(o, h || !(l && a) ? null : 1e3),
            s.useEffect(() => {
                h && !u.current && ((u.current = !0), n());
            }, [h, n]),
            (0, r.jsxs)("div", {
                ref: d,
                className: j.qW,
                role: "timer",
                children: [
                    (0, I.z0)(g).map((e, t) =>
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
                    (0, r.jsx)(b.A, { children: k.intl.format(k.t.j6IyVe, g) }),
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
                        case A.LIGHT:
                            return j.BB;
                        case A.DARK:
                            return j.XT;
                        case A.GRADIENT_V1:
                            return j.eg;
                        case A.TRANSPARENT:
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
var R = n(60140),
    T = n(758836),
    D = n(652215),
    P = n(105499);
let M = (e) => {
    let {
            heroBlock: t,
            collectionPromotion: n,
            handleTransition: l,
            tab: a,
            onPromotionEnd: A,
            hideCards: y = !1,
            forceHideCountdownCta: _ = !1,
        } = e,
        b = (0, u.bG)([p.default], () => p.default.getCurrentUser()),
        S = (0, E.uM)(),
        { analyticsLocations: L } = (0, h.Ay)(g.A.COLLECTIBLES_SHOP_HERO),
        {
            bannerDisplayConfig: I,
            logoDisplayConfig: j,
            heroLogo: N,
            heroBannerStatic: M,
            heroBannerAnimated: B,
        } = (0, v.Kk)(t),
        w = I?.responsive ?? !1,
        H = I?.backgroundStyle,
        G = s.useCallback(() => {
            (l({
                sourceButton: "shop collection sale hero",
                categorySkuId: t.categorySkuId,
                isInternalShopDeeplink: !0,
            }),
                f.default.track(D.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: S?.sessionId,
                    sku_id: t.categorySkuId,
                    page_type: a,
                    page_section: S?.pageSection,
                    page_category: S?.pageCategory,
                    cta_name: "shop collection sale hero button",
                }));
        }, [l, t.categorySkuId, S, a]);
    if (null == b) return null;
    let U = n.countdownPosition === o.l.LEFT,
        $ = (0, r.jsx)(O, {
            collectionName: t.name,
            collectionPromotion: n,
            forceHideCountdownCta: _,
            onShopSale: G,
            onCountdownEnd: A,
        });
    return (0, r.jsx)(h.f5, {
        value: L,
        children: (0, r.jsxs)("div", {
            className: P.os,
            children: [
                (0, r.jsx)("div", {
                    className: i()(P.vK, { [P.no]: w }),
                    style: null != H ? { background: H } : void 0,
                    children: null != M && (0, r.jsx)(C.A, { bannerStatic: M, bannerAnimated: B, isResponsive: w }),
                }),
                (0, r.jsxs)("div", {
                    className: P.xX,
                    children: [
                        (0, r.jsxs)("div", {
                            className: i()(P.uZ, P.bC, { [P.no]: w }),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: P.Hw,
                                    children: [
                                        (0, x.HF)(t.unpublishedAt) &&
                                            (0, r.jsx)("div", {
                                                className: P.v0,
                                                children: (0, r.jsx)(c.E, {
                                                    type: { text: k.intl.string(k.t["h/uBCR"]) },
                                                    variant: "inverted",
                                                }),
                                            }),
                                        (0, r.jsxs)("div", {
                                            className: P.Wq,
                                            children: [
                                                null != N &&
                                                    (0, r.jsx)("img", {
                                                        className: P.rm,
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
                                                        className: P.Tm,
                                                        style: { color: t.bannerTextColor ?? void 0 },
                                                        children: t.summary,
                                                    }),
                                            ],
                                        }),
                                        U && $,
                                    ],
                                }),
                                !U && (0, r.jsx)("div", { className: P.pv, children: $ }),
                            ],
                        }),
                        !y &&
                            (0, r.jsx)(R.A, {
                                heroBlockRecord: t,
                                tab: a,
                                isBlockLoading: !1,
                                layout: a === T.G2.HOME ? "hscroll" : "feed",
                            }),
                    ],
                }),
            ],
        }),
    });
};
