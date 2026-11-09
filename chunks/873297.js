var n = s(477900),
    t = s(582128),
    r = s(503698),
    i = s.n(r),
    u = s(855986),
    a = s(831259),
    c = s(821609),
    o = s(534514),
    d = s(834730),
    m = s(406810),
    g = s(43990),
    h = s(688810),
    p = s(812095),
    x = s(151869),
    f = s(733391),
    k = s(439303),
    I = s(832163),
    j = s(317560),
    v = s(869099),
    y = s(129230),
    C = s(371794),
    _ = s(857512),
    N = s(467499),
    b = s(652215),
    E = s(188275),
    S = s(792996),
    A = s(867595);
let L = (e) => {
    let { skuId: l, index: s, onClick: t, listItemProps: r } = e;
    return (0, n.jsx)("div", {
        className: A.Ko,
        children: (0, n.jsx)(v.Ay, {
            className: A.du,
            skuId: l,
            positionInSection: s,
            onClick: t,
            showOrbsOnly: !1,
            listItemProps: r,
        }),
    });
};
function w(e) {
    return "number" == typeof e ? `loading-${e}` : e;
}
function M(e) {
    let l = (0, N.u)(e.skuIds, e.applicationId);
    return (0, n.jsx)(R, { ...e, resolvedSkuIds: l });
}
function R(e) {
    let {
        skuIds: l,
        resolvedSkuIds: s,
        isLoading: r = !1,
        tab: N,
        applicationId: M,
        headerText: R,
        subheaderText: O,
        logoUrl: T,
        cta: F,
        timeLeftText: K,
        termsUrl: P,
        backgroundImageUrl: B,
        analyticsSection: D,
        analyticsTileType: Y,
        analyticsImpressionType: U,
        backgroundGradient: $,
    } = e;
    t.useEffect(() => {
        (0, f.ap)(M);
    }, [M]);
    let H = (0, u.bG)(
            [I.A],
            () => {
                let e = I.A.getStorefrontMetadata(M);
                return e?.logoAssetId != null ? (0, C.YE)(M, e.logoAssetId, 256) : void 0;
            },
            [M],
        ),
        Q = T ?? H,
        z = (0, _.uM)(),
        { analyticsLocations: G } = (0, h.Ay)(),
        V = t.useRef(null),
        J = t.useRef(!1),
        W = t.useRef(!1),
        X = t.useRef(null),
        q = t.useMemo(() => ({ pageSection: D, placement: k.Ye.COLLECTIBLES_SHOP_BANNER }), [D]),
        Z = t.useCallback(
            (e, l) => {
                y.default.track(b.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: z?.sessionId,
                    page_type: N,
                    page_category: z?.pageCategory,
                    page_section: z?.pageSection,
                    tile_type: Y,
                    cta_name: e,
                    ...(null != l ? { sku_id: l } : void 0),
                });
            },
            [z?.sessionId, z?.pageCategory, z?.pageSection, N, Y],
        ),
        ee = F?.kind === "button" ? F.onClick : void 0,
        el = t.useCallback(() => {
            (Z("go_to_game_shop"), ee?.());
        }, [Z, ee]),
        es = t.useCallback(
            (e, l) => {
                let { skuId: s, applicationId: n } = l;
                (Z("card_click", s), (0, j.R)({ skuId: s, applicationId: n, isStorefront: !1, analyticsLocations: G }));
            },
            [Z, G],
        ),
        en = t.useCallback(
            (e, l, s) =>
                "number" == typeof e
                    ? (0, n.jsx)("div", { className: A.Ko, children: (0, n.jsx)(v.yf, {}) })
                    : (0, n.jsx)(L, { skuId: e, index: s, onClick: es, listItemProps: l }),
            [es],
        ),
        et = t.useCallback(
            (e) => {
                ((W.current = e),
                    r ||
                        J.current ||
                        (e && null === X.current
                            ? (X.current = setTimeout(() => {
                                  ((J.current = !0),
                                      (X.current = null),
                                      y.default.track(b.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                          collectibles_shop_session_id: z?.sessionId,
                                          page_type: N,
                                          page_category: z?.pageCategory,
                                          page_section: z?.pageSection,
                                          type: U,
                                      }));
                              }, 1e3))
                            : e || null === X.current || (clearTimeout(X.current), (X.current = null))));
            },
            [z?.sessionId, z?.pageCategory, z?.pageSection, N, U, r],
        );
    if (
        (t.useEffect(() => {
            if (r) {
                null !== X.current && (clearTimeout(X.current), (X.current = null));
                return;
            }
            et(W.current);
        }, [r, et]),
        t.useEffect(
            () => () => {
                null !== X.current && (clearTimeout(X.current), (X.current = null));
            },
            [],
        ),
        !r && 0 === s.length)
    )
        return null;
    let er = r ? (l.length > 0 ? l.length : 4) : s.length,
        ei = 1 === er,
        eu = er > 2,
        ea =
            null == F
                ? null
                : "custom" === F.kind
                  ? F.node
                  : (0, n.jsx)(c.$, {
                        variant: "overlay-primary",
                        size: "sm",
                        text: F.text,
                        disabled: r,
                        onMouseDown: F.onMouseDown,
                        onClick: el,
                    }),
        ec = r
            ? Array.from({ length: er }, (e, l) =>
                  (0, n.jsx)("div", { className: A.Ko, children: (0, n.jsx)(v.yf, {}) }, l),
              )
            : s.map((e, l) => (0, n.jsx)(L, { skuId: e, index: l, onClick: es }, e)),
        eo = (0, n.jsxs)("div", {
            className: A.C,
            children: [
                null != Q && (0, n.jsx)("img", { className: A.wm, src: Q, alt: "" }),
                (0, n.jsxs)("div", {
                    className: A.xf,
                    children: [
                        (0, n.jsxs)("div", {
                            children: [
                                (0, n.jsx)(o.D, {
                                    variant: null != O ? "heading-xl/semibold" : "heading-lg/medium",
                                    color: "text-overlay-light",
                                    children: (0, p.U)(R, { enableNewlines: !0 }),
                                }),
                                null != O &&
                                    (0, n.jsx)(d.E, {
                                        variant: "body-lg/normal",
                                        color: "text-overlay-light",
                                        children: (0, p.U)(O, { enableNewlines: !0 }),
                                    }),
                            ],
                        }),
                        (null != ea || null != K || null != P) &&
                            (0, n.jsxs)("div", {
                                className: A.KW,
                                children: [
                                    ea,
                                    null != K &&
                                        (0, n.jsxs)("div", {
                                            className: A.f$,
                                            children: [
                                                (0, n.jsx)(m.ClockIcon, { size: "xs", color: "currentColor" }),
                                                (0, n.jsx)(d.E, {
                                                    variant: "body-xs/medium",
                                                    color: "none",
                                                    children: K,
                                                }),
                                            ],
                                        }),
                                    null != P &&
                                        (0, n.jsx)(d.E, {
                                            variant: "body-sm/medium",
                                            children: S.intl.format(S.t.mYS7uY, { helpCenterLink: P }),
                                        }),
                                ],
                            }),
                    ],
                }),
            ],
        }),
        ed = (0, n.jsx)("div", {
            className: A.UO,
            children: (0, n.jsxs)(k.E9, {
                newValue: q,
                children: [
                    ei
                        ? ec
                        : eu
                          ? (0, n.jsx)(x.A, {
                                className: A.pY,
                                itemClassName: i()(A.NM, { [A.i6]: 4 === er }),
                                gap: "md",
                                "aria-label": S.intl.string(S.t["kocF+6"]),
                                items: r ? Array.from({ length: er }, (e, l) => l) : s,
                                getItemKey: w,
                                renderItem: en,
                            })
                          : (0, n.jsx)("div", { className: A.$2, children: ec }),
                    M === E.FK &&
                        (0, n.jsx)("div", {
                            className: A.Ok,
                            children: (0, n.jsx)(d.E, {
                                variant: "body-xs/medium",
                                color: "text-muted",
                                children: "\xa9 2026 MARVEL",
                            }),
                        }),
                ],
            }),
        });
    return (0, n.jsx)(g.N, {
        theme: b.NJ8.DARK,
        children: (e) =>
            (0, n.jsx)(a.L, {
                innerRef: V,
                onChange: et,
                threshold: 0,
                children: (0, n.jsx)("div", {
                    ref: V,
                    "aria-busy": r,
                    className: i()(A.YB, e),
                    children: (0, n.jsxs)("div", {
                        className: i()(A.kL, { [A.Qt]: ei }),
                        children: [
                            null != B &&
                                (0, n.jsx)("div", { className: A.iL, style: { backgroundImage: `url(${B})` } }),
                            null != $ && (0, n.jsx)("div", { className: A.D7, style: { background: $ } }),
                            (0, n.jsxs)("div", { className: i()(A.Qs, { [A.TI]: ei }), children: [eo, ed] }),
                        ],
                    }),
                }),
            }),
    });
}
s.d(
    l,
    {},
    {
        A: function (e) {
            return null != e.resolvedSkuIds
                ? (0, n.jsx)(R, { ...e, resolvedSkuIds: e.resolvedSkuIds })
                : (0, n.jsx)(M, { ...e });
        },
    },
);
