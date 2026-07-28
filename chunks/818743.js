s.d(t, { default: () => ei });
var i,
    l = s(477900),
    n = s(582128),
    r = s(17928),
    a = s(935462),
    c = s(821609),
    u = s(297264),
    d = s(289873),
    o = s(793574),
    p = s(688810),
    m = s(571827),
    h = s(725807),
    g = s(919395),
    x = s(84540),
    j = s(696451),
    A = s(287809),
    C = s(174459),
    I = s(428262),
    k = s(34332),
    v = s(993408),
    y = s(821701),
    N = s(841702),
    f = s(836602),
    E = s(448429),
    _ = s(130147),
    b = s(344346),
    w = s(375708),
    P = s(795419);
let S = function (e) {
    let { user: t, guildId: s, nameplate: i } = e,
        n = (0, r.cf)([f.A], () => f.A.getPendingChanges(s)),
        a = null != i ? w.intl.formatToPlainString(w.t["95pCSf"], { a11y_text: i.label }) : w.intl.string(w.t.SZeUdR);
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
                        (0, l.jsx)(_._, { width: 124, opacity: 0.9 }),
                        (0, l.jsx)(_._, { width: 124, opacity: 0.9 }),
                        (0, l.jsx)(b.A, { ...n, user: t, guildId: s, nameplate: i, isHighlighted: !0 }),
                        (0, l.jsx)(_._, { width: 124, opacity: 0.9 }),
                        (0, l.jsx)(_._, { width: 124, opacity: 0.9 }),
                    ],
                }),
            }),
            (0, l.jsx)(E.A, {
                user: t,
                previewSkuId: i?.skuId,
                nitroChurnCTA: w.intl.string(w.t.nD78oa),
                nitroJoinCTA: w.intl.string(w.t["07vM9p"]),
            }),
        ],
    });
};
var U = s(503698),
    M = s.n(U),
    T = s(939249),
    H = s(364522),
    R = s(331322),
    D = s(834730),
    L = s(428678),
    O = s(34188),
    G = s(713517),
    z = s(837015),
    J = s(483968);
s(321073);
var V = s(702841),
    K = s(590180),
    X = s(4227),
    W = (((i = {}).PURCHASE = "purchase"), (i.PREMIUM_PURCHASE = "premium_purchase"), (i.PREVIEW = "preview"), i);
let $ = { skuId: "None" },
    B = { skuId: "Shop" },
    F = function () {
        let e = (0, V.bG)([X.A], () => X.A.purchases),
            [t, s] = (0, V.yK)([K.A], () => [K.A.categories, K.A.products]);
        return (0, n.useMemo)(() => {
            let i = (0, v.zd)(e, t).reduce(
                (t, i) => {
                    let l = e.get(i.skuId),
                        n = s.get(i.skuId),
                        r = null != l ? (0, v.gA)(l) : (0, v.G0)(n),
                        a = n?.isCategoryReward ?? !1;
                    return r ? t.premium_purchase.push(i) : null != l ? t.purchase.push(i) : a || t.preview.push(i), t;
                },
                { purchase: [], premium_purchase: [], preview: [] },
            );
            return [
                { section: "purchase", items: [$, B, ...i.purchase], height: 12, header: w.intl.string(w.t.WfGV52) },
                {
                    section: "premium_purchase",
                    items: i.premium_purchase,
                    height: 12,
                    header: w.intl.string(w.t.TiLCgw),
                },
                { section: "preview", items: i.preview, height: 12, header: w.intl.string(w.t["1vbbee"]) },
            ].filter((e) => {
                let { items: t } = e;
                return t.length > 0;
            });
        }, [t, e, s]);
    };
var Q = s(652465);
function Y(e) {
    let { currentUser: t, nameplate: s, section: i, canUsePremiumCollectibles: r, isSelected: a, onClick: c } = e,
        u = (0, n.useRef)(null),
        { isHoveringOrFocusing: d } = (0, G.A)(u);
    return (0, l.jsxs)(T.D, {
        innerRef: u,
        "aria-pressed": a,
        "aria-label": s.label ?? w.intl.string(w.t.x5CoXR),
        className: Q.Hj,
        onClick: c,
        children: [
            (0, l.jsx)(b.A, { nameplate: s, user: t, showPlaceholderUser: !0, isHighlighted: d }),
            (0, l.jsx)("div", { className: M()(Q.t1, { [Q.wH]: a }) }),
            (0, l.jsx)(J.A, {
                isPurchaseSection: i === W.PURCHASE,
                isPremiumSection: i === W.PREMIUM_PURCHASE,
                canUsePremiumCollectibles: r,
                skuId: s.skuId,
            }),
        ],
    });
}
let Z = function (e) {
    let { currentUser: t, selectedNameplate: s, guildId: i, onSelect: n, onOpenShop: r } = e,
        a = I.Ay.canUseCollectibles(t),
        c = F();
    return (0, l.jsx)(H.d_, {
        className: Q.pf,
        children: c.map((e) =>
            (0, l.jsxs)(
                R.B,
                {
                    gap: 4,
                    children: [
                        (0, l.jsx)(D.E, { variant: "text-md/medium", children: e.header }),
                        e.section === W.PURCHASE &&
                            (0, l.jsxs)("div", {
                                className: Q.VQ,
                                children: [
                                    (0, l.jsxs)(T.D, {
                                        "aria-pressed": null == s,
                                        className: M()(Q.H5, { [Q.wH]: null == s }),
                                        onClick: () => n(null),
                                        children: [
                                            (0, l.jsx)(L.K, { size: "md", color: "currentColor" }),
                                            (0, l.jsx)(D.E, {
                                                variant: "text-xs/normal",
                                                children:
                                                    null != i ? w.intl.string(w.t.CHf9iJ) : w.intl.string(w.t.PoWNfe),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(T.D, {
                                        className: Q.H5,
                                        onClick: r,
                                        children: [
                                            (0, l.jsx)(O.U, { size: "md", color: "currentColor" }),
                                            (0, l.jsx)(D.E, {
                                                variant: "text-xs/normal",
                                                children: w.intl.string(w.t.pWG4ze),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        (0, l.jsx)("div", {
                            className: Q.p_,
                            children: e.items
                                .filter(z.F)
                                .map((i) =>
                                    (0, l.jsx)(
                                        Y,
                                        {
                                            currentUser: t,
                                            nameplate: i,
                                            section: e.section,
                                            canUsePremiumCollectibles: a,
                                            isSelected: s?.skuId === i.skuId,
                                            onClick: () => n(i),
                                        },
                                        i.skuId,
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
var q = s(652215),
    ee = s(202541),
    et = s(389247);
function es(e) {
    let {
            currentUser: t,
            categories: s,
            purchases: i,
            analyticsLocations: d,
            onClose: p,
            guildId: A,
            initialSelectedNameplate: C,
        } = e,
        N = (0, r.bG)([j.Ay], () => (null != A && null != t ? j.Ay.getMember(A, t.id) : null)),
        f = null != N ? N.collectibles?.nameplate : t.collectibles?.nameplate,
        { pendingNameplate: E } = (0, g.rv)(t, A),
        [_, b] = (0, n.useState)(() =>
            null != C
                ? C
                : void 0 !== E
                  ? E
                  : null == f
                    ? null
                    : ((0, v.zd)(i, s).find((e) => {
                          let { skuId: t } = e;
                          return t === f.skuId;
                      }) ?? null),
        ),
        P = (0, g.lw)({
            pendingValue: _,
            userValue: t?.collectibles?.nameplate,
            guildValue: N?.collectibles?.nameplate,
            guildId: A,
        }),
        { product: U, purchase: M } = (0, y.A)(_?.skuId),
        T = null != M ? (0, v.gA)(M) : (0, v.G0)(U),
        H = I.Ay.canUseCollectibles(t),
        R = void 0 === E ? _?.skuId === f?.skuId : _?.skuId === E?.skuId,
        D = (0, n.useCallback)(
            (e) => {
                p(),
                    (0, k.Cz)({
                        analyticsLocations: d,
                        analyticsSource: o.A.EDIT_NAMEPLATE_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [d, p],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(a.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: et.wx,
                children: [
                    (0, l.jsx)(u.D, { variant: "heading-lg/semibold", children: w.intl.string(w.t.BwdeM1) }),
                    (0, l.jsx)(a.s_, { "data-migration-pending": !0, className: et.b, onClick: p }),
                ],
            }),
            (0, l.jsxs)(a.$m, {
                "data-migration-pending": !0,
                className: et.Qs,
                scrollbarType: "none",
                children: [
                    (0, l.jsx)(Z, { currentUser: t, selectedNameplate: _, guildId: A, onSelect: b, onOpenShop: D }),
                    (0, l.jsx)(S, { user: t, guildId: A, nameplate: P }),
                ],
            }),
            (0, l.jsxs)(a.jl, {
                "data-migration-pending": !0,
                className: et.Hx,
                children: [
                    (null != M && (!T || H)) || null === _
                        ? (0, l.jsx)(c.$, {
                              variant: "primary",
                              text: w.intl.string(w.t.Jh8fJz),
                              onClick: function () {
                                  (0, x.p)({ guildId: A, nameplate: _ }), p();
                              },
                              disabled: R,
                          })
                        : null == M && (H || !T)
                          ? (0, l.jsx)(c.$, {
                                variant: "primary",
                                onClick: () => D(U?.skuId),
                                text: w.intl.string(w.t.fYfGgK),
                            })
                          : (0, l.jsx)(h.A, {
                                subscriptionTier: ee.pe.TIER_2,
                                showGradient: !H,
                                textOptions: {
                                    textOverride: I.Ay.isPremium(t)
                                        ? w.intl.string(w.t.KXLX7l)
                                        : H
                                          ? w.intl.string(w.t.mr4K7D)
                                          : w.intl.string(w.t.pj0XBN),
                                },
                            }),
                    !H && T
                        ? (0, l.jsx)(m.A, { itemType: M?.type ?? U?.type, onClose: p })
                        : (0, l.jsx)(c.$, { variant: "secondary", text: w.intl.string(w.t["ETE/oC"]), onClick: p }),
                ],
            }),
        ],
    });
}
function ei(e) {
    let { transitionState: t, analyticsLocations: s, onClose: i, guildId: c, initialSelectedNameplate: u } = e,
        m = (0, r.bG)([A.default], () => A.default.getCurrentUser()),
        { analyticsLocations: h } = (0, p.Ay)(s, o.A.EDIT_NAMEPLATE_MODAL),
        { categories: g, purchases: x, isFetchingCategories: j, isFetchingPurchases: I } = (0, N.Ay)(),
        k = j || (I && 0 === x.size);
    return ((0, n.useEffect)(() => {
        C.default.track(q.HAw.OPEN_MODAL, { type: q.JJy.NAMEPLATE_CUSTOMIZATION, location_stack: h });
    }, [h]),
    null == m)
        ? null
        : (0, l.jsx)(p.f5, {
              value: h,
              children: (0, l.jsx)(a.EO, {
                  transitionState: t,
                  size: k ? a.rI.DYNAMIC : a.rI.MEDIUM,
                  parentComponent: "NameplateModal",
                  "data-migration-pending": !0,
                  children: k
                      ? (0, l.jsx)(d.y, { className: et.u1, type: d.y.Type.SPINNING_CIRCLE })
                      : (0, l.jsx)(es, {
                            currentUser: m,
                            categories: g,
                            purchases: x,
                            analyticsLocations: h,
                            guildId: c,
                            initialSelectedNameplate: u,
                            onClose: i,
                        }),
              }),
          });
}
