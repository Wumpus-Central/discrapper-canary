n.d(t, { A: () => M });
var l = n(477900),
    r = n(582128),
    s = n(503698),
    a = n.n(s),
    i = n(855986),
    o = n(805251),
    u = n(534514),
    c = n(834730),
    d = n(793574),
    m = n(688810),
    g = n(287809),
    h = n(129230),
    p = n(857512),
    f = n(993408),
    x = n(212407),
    E = n(815280),
    v = n(821609),
    C = n(604913),
    _ = n(172218),
    y = n(140735),
    b = n(598047),
    S = n(396583),
    A = n(212137),
    I = n(792996),
    k = n(270823);
let j = r.memo((e) => {
        let { endsAt: t, onCountdownEnd: n } = e,
            s = (0, b.A)(),
            [a, i] = r.useState(!0),
            [, o] = r.useReducer((e) => e + 1, 0),
            u = r.useRef(!1),
            d = r.useCallback((e) => {
                i(e);
            }, []),
            m = (0, _.K)(d, 0),
            g = (0, A.RJ)(t),
            h = (0, A.lF)(g);
        return (
            (0, S.A)(o, h || !(s && a) ? null : 1e3),
            r.useEffect(() => {
                h && !u.current && ((u.current = !0), n());
            }, [h, n]),
            (0, l.jsxs)("div", {
                ref: m,
                className: k.qW,
                role: "timer",
                children: [
                    (0, A.z0)(g).map((e, t) =>
                        (0, l.jsxs)(
                            r.Fragment,
                            {
                                children: [
                                    t > 0 && (0, l.jsx)("div", { className: k.kx, "aria-hidden": !0 }),
                                    (0, l.jsx)("div", {
                                        className: k.t8,
                                        "aria-hidden": !0,
                                        children: e
                                            .split("")
                                            .map((e, t) =>
                                                (0, l.jsx)(
                                                    c.E,
                                                    {
                                                        tag: "span",
                                                        variant: "heading-xl/semibold",
                                                        color: "currentColor",
                                                        className: k.m3,
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
                    (0, l.jsx)(y.A, { children: I.intl.format(I.t.j6IyVe, g) }),
                ],
            })
        );
    }),
    L = r.memo((e) => {
        let {
            collectionName: t,
            percentOff: n,
            endsAt: r,
            countdownStyle: s,
            hideCountdownCTA: i = !1,
            onShopSale: o,
            onCountdownEnd: u,
        } = e;
        return (0, l.jsxs)("div", {
            className: a()(
                k.kL,
                (function (e) {
                    switch (e) {
                        case C.d2.LIGHT:
                            return k.BB;
                        case C.d2.DARK:
                            return k.XT;
                        case C.d2.GRADIENT_V1:
                            return k.eg;
                        default:
                            return k.XT;
                    }
                })(s),
            ),
            children: [
                (0, l.jsx)(j, { endsAt: r, onCountdownEnd: u }, r.getTime()),
                (0, l.jsx)(c.E, {
                    variant: "body-md/semibold",
                    color: "currentColor",
                    className: k.Rc,
                    children: I.intl.format(I.t["97Qza2"], { percent: n, collectionName: t }),
                }),
                !i &&
                    (0, l.jsx)("div", {
                        className: k.lO,
                        children: (0, l.jsx)(v.$, {
                            variant: "overlay-primary",
                            fullWidth: !0,
                            onClick: o,
                            text: I.intl.string(I.t["5GoOlx"]),
                        }),
                    }),
            ],
        });
    });
var N = n(60140),
    O = n(758836),
    R = n(652215),
    T = n(105499);
let M = (e) => {
    let {
            heroBlock: t,
            collectionSale: n,
            handleTransition: s,
            tab: v,
            onSaleEnd: C,
            hideCards: _ = !1,
            hideCountdownCTA: y = !1,
        } = e,
        b = (0, i.bG)([g.default], () => g.default.getCurrentUser()),
        S = (0, p.uM)(),
        { analyticsLocations: A } = (0, m.Ay)(d.A.COLLECTIBLES_SHOP_HERO),
        {
            bannerDisplayConfig: k,
            logoDisplayConfig: j,
            heroLogo: M,
            heroBannerStatic: D,
            heroBannerAnimated: B,
        } = (0, x.Kk)(t),
        P = k?.responsive ?? !1,
        w = k?.backgroundStyle,
        H = r.useCallback(() => {
            (s({
                sourceButton: "shop collection sale hero",
                categorySkuId: t.categorySkuId,
                isInternalShopDeeplink: !0,
            }),
                h.default.track(R.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: S?.sessionId,
                    sku_id: t.categorySkuId,
                    page_type: v,
                    page_section: S?.pageSection,
                    page_category: S?.pageCategory,
                    cta_name: "shop collection sale hero button",
                }));
        }, [s, t.categorySkuId, S, v]);
    return null == b
        ? null
        : (0, l.jsx)(m.f5, {
              value: A,
              children: (0, l.jsxs)("div", {
                  className: T.os,
                  children: [
                      (0, l.jsx)("div", {
                          className: a()(T.vK, { [T.no]: P }),
                          style: null != w ? { background: w } : void 0,
                          children:
                              null != D && (0, l.jsx)(E.A, { bannerStatic: D, bannerAnimated: B, isResponsive: P }),
                      }),
                      (0, l.jsxs)("div", {
                          className: T.xX,
                          children: [
                              (0, l.jsxs)("div", {
                                  className: a()(T.uZ, T.bC, { [T.no]: P }),
                                  children: [
                                      (0, l.jsxs)("div", {
                                          className: T.Hw,
                                          children: [
                                              (0, f.HF)(t.unpublishedAt) &&
                                                  (0, l.jsx)("div", {
                                                      className: T.v0,
                                                      children: (0, l.jsx)(o.E, {
                                                          type: { text: I.intl.string(I.t["h/uBCR"]) },
                                                          variant: "inverted",
                                                      }),
                                                  }),
                                              (0, l.jsxs)("div", {
                                                  className: T.Wq,
                                                  children: [
                                                      null != M &&
                                                          (0, l.jsx)("img", {
                                                              className: T.rm,
                                                              src: M,
                                                              alt: t.name,
                                                              style: j?.toDesktopStyles(),
                                                          }),
                                                      null != t.title &&
                                                          (0, l.jsx)(u.D, {
                                                              variant: "heading-xxl/semibold",
                                                              color: "text-strong",
                                                              children: t.title,
                                                          }),
                                                      null != t.summary &&
                                                          "" !== t.summary &&
                                                          (0, l.jsx)(c.E, {
                                                              variant: "body-md/normal",
                                                              className: T.Tm,
                                                              style: { color: t.bannerTextColor ?? void 0 },
                                                              children: t.summary,
                                                          }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                      (0, l.jsx)("div", {
                                          className: T.pv,
                                          children: (0, l.jsx)(L, {
                                              collectionName: t.name,
                                              percentOff: n.percentOff,
                                              endsAt: n.endsAt,
                                              countdownStyle: n.countdownStyle,
                                              hideCountdownCTA: y,
                                              onShopSale: H,
                                              onCountdownEnd: C,
                                          }),
                                      }),
                                  ],
                              }),
                              !_ &&
                                  (0, l.jsx)(N.A, {
                                      heroBlockRecord: t,
                                      tab: v,
                                      isBlockLoading: !1,
                                      layout: v === O.G2.HOME ? "hscroll" : "feed",
                                  }),
                          ],
                      }),
                  ],
              }),
          });
};
