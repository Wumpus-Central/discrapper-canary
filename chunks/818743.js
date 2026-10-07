t.d(i, { default: () => el });
var s,
    l = t(477900),
    n = t(582128),
    r = t(17928),
    a = t(935462),
    c = t(821609),
    u = t(297264),
    d = t(289873),
    o = t(793574),
    p = t(688810),
    m = t(571827),
    h = t(725807),
    g = t(919395),
    x = t(84540),
    A = t(696451),
    j = t(287809),
    C = t(174459),
    I = t(158045),
    v = t(815996),
    k = t(993408),
    y = t(821701),
    f = t(841702),
    N = t(836602),
    b = t(448429),
    E = t(130147),
    _ = t(344346),
    w = t(375708),
    P = t(255852);
let S = function (e) {
    let { user: i, guildId: t, nameplate: s } = e,
        n = (0, r.cf)([N.A], () => N.A.getPendingChanges(t)),
        a = null != s ? w.intl.formatToPlainString(w.t["95pCSf"], { a11y_text: s.label }) : w.intl.string(w.t.SZeUdR);
    return (0, l.jsxs)("div", {
        className: P.i1,
        children: [
            (0, l.jsx)("div", {
                className: P.u_,
                role: "img",
                "aria-label": a,
                children: (0, l.jsxs)("div", {
                    className: P.Xp,
                    "aria-hidden": !0,
                    children: [
                        (0, l.jsx)(E._, { width: 124, opacity: 0.9 }),
                        (0, l.jsx)(E._, { width: 124, opacity: 0.9 }),
                        (0, l.jsx)(_.A, { ...n, user: i, guildId: t, nameplate: s, isHighlighted: !0 }),
                        (0, l.jsx)(E._, { width: 124, opacity: 0.9 }),
                        (0, l.jsx)(E._, { width: 124, opacity: 0.9 }),
                    ],
                }),
            }),
            (0, l.jsx)(b.A, {
                user: i,
                previewSkuId: s?.skuId,
                nitroChurnCTA: w.intl.string(w.t.nD78oa),
                nitroJoinCTA: w.intl.string(w.t["07vM9p"]),
            }),
        ],
    });
};
var M = t(503698),
    U = t.n(M),
    H = t(939249),
    T = t(364522),
    R = t(331322),
    D = t(428678),
    L = t(834730),
    O = t(34188),
    G = t(713517),
    z = t(837015),
    J = t(483968);
t(321073);
var V = t(702841),
    K = t(590180),
    X = t(4227),
    B = t(341879),
    W = (((s = {}).PURCHASE = "purchase"), (s.PREMIUM_PURCHASE = "premium_purchase"), (s.PREVIEW = "preview"), s);
let $ = { skuId: "None" },
    F = { skuId: "Shop" },
    Q = function () {
        let e = (0, V.bG)([X.A], () => X.A.purchases),
            [i, t] = (0, V.yK)([K.A], () => [K.A.categories, K.A.products]),
            s = (0, n.useMemo)(() => {
                let s = (0, k.zd)(e, i).reduce(
                    (i, s) => {
                        let l = e.get(s.skuId),
                            n = t.get(s.skuId),
                            r = null != l ? (0, k.gA)(l) : (0, k.G0)(n),
                            a = n?.isCategoryReward ?? !1;
                        return (
                            r ? i.premium_purchase.push(s) : null != l ? i.purchase.push(s) : a || i.preview.push(s), i
                        );
                    },
                    { purchase: [], premium_purchase: [], preview: [] },
                );
                return [
                    {
                        section: "purchase",
                        items: [$, F, ...s.purchase],
                        height: 12,
                        header: w.intl.string(w.t.WfGV52),
                    },
                    {
                        section: "premium_purchase",
                        items: s.premium_purchase,
                        height: 12,
                        header: w.intl.string(w.t.TiLCgw),
                    },
                    { section: "preview", items: s.preview, height: 12, header: w.intl.string(w.t["1vbbee"]) },
                ].filter((e) => {
                    let { items: i } = e;
                    return i.length > 0;
                });
            }, [i, t, e]);
        return (0, B.A)(s, "preview");
    };
var Y = t(710590);
function Z(e) {
    let { currentUser: i, nameplate: t, section: s, canUsePremiumCollectibles: r, isSelected: a, onClick: c } = e,
        u = (0, n.useRef)(null),
        { isHoveringOrFocusing: d } = (0, G.A)(u);
    return (0, l.jsxs)(H.D, {
        innerRef: u,
        "aria-pressed": a,
        "aria-label": t.label ?? w.intl.string(w.t.x5CoXR),
        className: Y.Hj,
        onClick: c,
        children: [
            (0, l.jsx)(_.A, { nameplate: t, user: i, showPlaceholderUser: !0, isHighlighted: d }),
            (0, l.jsx)("div", { className: U()(Y.t1, { [Y.wH]: a }) }),
            (0, l.jsx)(J.A, {
                isPurchaseSection: s === W.PURCHASE,
                isPremiumSection: s === W.PREMIUM_PURCHASE,
                canUsePremiumCollectibles: r,
                skuId: t.skuId,
            }),
        ],
    });
}
let q = function (e) {
    let { currentUser: i, selectedNameplate: t, guildId: s, onSelect: n, onOpenShop: r } = e,
        a = I.Ay.canUseCollectibles(i),
        c = Q();
    return (0, l.jsx)(T.d_, {
        className: Y.pf,
        children: c.map((e) =>
            (0, l.jsxs)(
                R.B,
                {
                    gap: 4,
                    children: [
                        (0, l.jsx)(u.D, { variant: "text-md/medium", children: e.header }),
                        e.section === W.PURCHASE &&
                            (0, l.jsxs)("div", {
                                className: Y.VQ,
                                children: [
                                    (0, l.jsxs)(H.D, {
                                        "aria-pressed": null == t,
                                        className: U()(Y.H5, { [Y.wH]: null == t }),
                                        onClick: () => n(null),
                                        children: [
                                            (0, l.jsx)(D.K, { size: "md", color: "currentColor" }),
                                            (0, l.jsx)(L.E, {
                                                variant: "text-xs/normal",
                                                children:
                                                    null != s ? w.intl.string(w.t.CHf9iJ) : w.intl.string(w.t.PoWNfe),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(H.D, {
                                        className: Y.H5,
                                        onClick: () => r(),
                                        children: [
                                            (0, l.jsx)(O.U, { size: "md", color: "currentColor" }),
                                            (0, l.jsx)(L.E, {
                                                variant: "text-xs/normal",
                                                children: w.intl.string(w.t.pWG4ze),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        (0, l.jsx)("div", {
                            className: Y.p_,
                            children: e.items
                                .filter(z.F)
                                .map((s) =>
                                    (0, l.jsx)(
                                        Z,
                                        {
                                            currentUser: i,
                                            nameplate: s,
                                            section: e.section,
                                            canUsePremiumCollectibles: a,
                                            isSelected: t?.skuId === s.skuId,
                                            onClick: () => n(s),
                                        },
                                        s.skuId,
                                    ),
                                ),
                        }),
                    ],
                },
                e.section,
            ),
        ),
    });
};
var ee = t(652215),
    ei = t(202541),
    et = t(379842);
function es(e) {
    let {
            currentUser: i,
            categories: t,
            purchases: s,
            analyticsLocations: d,
            modalHeadingId: p,
            onClose: j,
            guildId: C,
            initialSelectedNameplate: f,
        } = e,
        N = (0, r.bG)([A.Ay], () => (null != C && null != i ? A.Ay.getMember(C, i.id) : null)),
        b = null != N ? N.collectibles?.nameplate : i.collectibles?.nameplate,
        { pendingNameplate: E } = (0, g.rv)(i, C),
        [_, P] = (0, n.useState)(() =>
            null != f
                ? f
                : void 0 !== E
                  ? E
                  : null == b
                    ? null
                    : ((0, k.zd)(s, t).find((e) => {
                          let { skuId: i } = e;
                          return i === b.skuId;
                      }) ?? null),
        ),
        M = (0, g.lw)({
            pendingValue: _,
            userValue: i?.collectibles?.nameplate,
            guildValue: N?.collectibles?.nameplate,
            guildId: C,
        }),
        { product: U, purchase: H } = (0, y.A)(_?.skuId),
        T = null != H ? (0, k.gA)(H) : (0, k.G0)(U),
        R = I.Ay.canUseCollectibles(i),
        D = void 0 === E ? _?.skuId === b?.skuId : _?.skuId === E?.skuId,
        L = (0, n.useCallback)(
            (e) => {
                (j(),
                    (0, v.Cz)({
                        analyticsLocations: d,
                        analyticsSource: o.A.EDIT_NAMEPLATE_MODAL,
                        initialProductSkuId: e,
                    }));
            },
            [d, j],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(a.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: et.wx,
                children: [
                    (0, l.jsx)(u.D, { id: p, variant: "heading-lg/semibold", children: w.intl.string(w.t.BwdeM1) }),
                    (0, l.jsx)(a.s_, { "data-migration-pending": !0, className: et.b, onClick: j }),
                ],
            }),
            (0, l.jsxs)(a.$m, {
                "data-migration-pending": !0,
                className: et.Qs,
                scrollbarType: "none",
                children: [
                    (0, l.jsx)(q, { currentUser: i, selectedNameplate: _, guildId: C, onSelect: P, onOpenShop: L }),
                    (0, l.jsx)(S, { user: i, guildId: C, nameplate: M }),
                ],
            }),
            (0, l.jsxs)(a.jl, {
                "data-migration-pending": !0,
                className: et.Hx,
                children: [
                    (null != H && (!T || R)) || null === _
                        ? (0, l.jsx)(c.$, {
                              variant: "primary",
                              text: w.intl.string(w.t.Jh8fJz),
                              onClick: function () {
                                  ((0, x.p)({ guildId: C, nameplate: _ }), j());
                              },
                              disabled: D,
                          })
                        : null == H && (R || !T)
                          ? (0, l.jsx)(c.$, {
                                variant: "primary",
                                onClick: () => L(U?.skuId),
                                text: w.intl.string(w.t.fYfGgK),
                            })
                          : (0, l.jsx)(h.A, {
                                subscriptionTier: ei.pe.TIER_2,
                                showGradient: !R,
                                textOptions: {
                                    textOverride: I.Ay.isPremium(i)
                                        ? w.intl.string(w.t.KXLX7l)
                                        : R
                                          ? w.intl.string(w.t.mr4K7D)
                                          : w.intl.string(w.t.pj0XBN),
                                },
                            }),
                    !R && T
                        ? (0, l.jsx)(m.A, { itemType: H?.type ?? U?.type, onClose: j })
                        : (0, l.jsx)(c.$, { variant: "secondary", text: w.intl.string(w.t["ETE/oC"]), onClick: j }),
                ],
            }),
        ],
    });
}
function el(e) {
    let {
            transitionState: i,
            analyticsLocations: t,
            onClose: s,
            guildId: c,
            initialSelectedNameplate: u,
            returnRef: m,
        } = e,
        h = (0, r.bG)([j.default], () => j.default.getCurrentUser()),
        { analyticsLocations: g } = (0, p.Ay)(t, o.A.EDIT_NAMEPLATE_MODAL),
        { categories: x, purchases: A, isFetchingCategories: I, isFetchingPurchases: v } = (0, f.Ay)(),
        k = I || (v && 0 === A.size),
        y = (0, n.useId)();
    return ((0, n.useEffect)(() => {
        C.default.track(ee.HAw.OPEN_MODAL, { type: ee.JJy.NAMEPLATE_CUSTOMIZATION, location_stack: g });
    }, [g]),
    null == h)
        ? null
        : (0, l.jsx)(p.f5, {
              value: g,
              children: (0, l.jsx)(a.EO, {
                  transitionState: i,
                  size: k ? a.rI.DYNAMIC : a.rI.MEDIUM,
                  parentComponent: "NameplateModal",
                  "aria-label": k ? w.intl.string(w.t.BwdeM1) : void 0,
                  "aria-labelledby": k ? void 0 : y,
                  returnRef: m,
                  "data-migration-pending": !0,
                  children: k
                      ? (0, l.jsx)(d.y, { className: et.u1, type: d.y.Type.SPINNING_CIRCLE })
                      : (0, l.jsx)(es, {
                            currentUser: h,
                            categories: x,
                            purchases: A,
                            analyticsLocations: g,
                            modalHeadingId: y,
                            guildId: c,
                            initialSelectedNameplate: u,
                            onClose: s,
                        }),
              }),
          });
}
