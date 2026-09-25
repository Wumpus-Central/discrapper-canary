i.d(t, { default: () => es });
var s,
    l = i(477900),
    n = i(582128),
    r = i(17928),
    a = i(935462),
    c = i(821609),
    u = i(297264),
    d = i(289873),
    o = i(793574),
    p = i(688810),
    m = i(571827),
    h = i(725807),
    g = i(919395),
    x = i(84540),
    j = i(696451),
    A = i(287809),
    C = i(174459),
    I = i(158045),
    v = i(839534),
    k = i(993408),
    y = i(821701),
    f = i(841702),
    N = i(836602),
    b = i(448429),
    E = i(130147),
    _ = i(344346),
    w = i(375708),
    P = i(255852);
let S = function (e) {
    let { user: t, guildId: i, nameplate: s } = e,
        n = (0, r.cf)([N.A], () => N.A.getPendingChanges(i)),
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
                        (0, l.jsx)(_.A, { ...n, user: t, guildId: i, nameplate: s, isHighlighted: !0 }),
                        (0, l.jsx)(E._, { width: 124, opacity: 0.9 }),
                        (0, l.jsx)(E._, { width: 124, opacity: 0.9 }),
                    ],
                }),
            }),
            (0, l.jsx)(b.A, {
                user: t,
                previewSkuId: s?.skuId,
                nitroChurnCTA: w.intl.string(w.t.nD78oa),
                nitroJoinCTA: w.intl.string(w.t["07vM9p"]),
            }),
        ],
    });
};
var M = i(503698),
    U = i.n(M),
    H = i(939249),
    T = i(364522),
    R = i(331322),
    D = i(428678),
    L = i(834730),
    O = i(34188),
    G = i(713517),
    z = i(837015),
    J = i(483968);
i(321073);
var V = i(702841),
    K = i(590180),
    X = i(4227),
    B = (((s = {}).PURCHASE = "purchase"), (s.PREMIUM_PURCHASE = "premium_purchase"), (s.PREVIEW = "preview"), s);
let W = { skuId: "None" },
    $ = { skuId: "Shop" },
    F = function () {
        let e = (0, V.bG)([X.A], () => X.A.purchases),
            [t, i] = (0, V.yK)([K.A], () => [K.A.categories, K.A.products]);
        return (0, n.useMemo)(() => {
            let s = (0, k.zd)(e, t).reduce(
                (t, s) => {
                    let l = e.get(s.skuId),
                        n = i.get(s.skuId),
                        r = null != l ? (0, k.gA)(l) : (0, k.G0)(n),
                        a = n?.isCategoryReward ?? !1;
                    return (
                        r ? t.premium_purchase.push(s) : null != l ? t.purchase.push(s) : a || t.preview.push(s), t
                    );
                },
                { purchase: [], premium_purchase: [], preview: [] },
            );
            return [
                { section: "purchase", items: [W, $, ...s.purchase], height: 12, header: w.intl.string(w.t.WfGV52) },
                {
                    section: "premium_purchase",
                    items: s.premium_purchase,
                    height: 12,
                    header: w.intl.string(w.t.TiLCgw),
                },
                { section: "preview", items: s.preview, height: 12, header: w.intl.string(w.t["1vbbee"]) },
            ].filter((e) => {
                let { items: t } = e;
                return t.length > 0;
            });
        }, [t, e, i]);
    };
var Q = i(710590);
function Y(e) {
    let { currentUser: t, nameplate: i, section: s, canUsePremiumCollectibles: r, isSelected: a, onClick: c } = e,
        u = (0, n.useRef)(null),
        { isHoveringOrFocusing: d } = (0, G.A)(u);
    return (0, l.jsxs)(H.D, {
        innerRef: u,
        "aria-pressed": a,
        "aria-label": i.label ?? w.intl.string(w.t.x5CoXR),
        className: Q.Hj,
        onClick: c,
        children: [
            (0, l.jsx)(_.A, { nameplate: i, user: t, showPlaceholderUser: !0, isHighlighted: d }),
            (0, l.jsx)("div", { className: U()(Q.t1, { [Q.wH]: a }) }),
            (0, l.jsx)(J.A, {
                isPurchaseSection: s === B.PURCHASE,
                isPremiumSection: s === B.PREMIUM_PURCHASE,
                canUsePremiumCollectibles: r,
                skuId: i.skuId,
            }),
        ],
    });
}
let Z = function (e) {
    let { currentUser: t, selectedNameplate: i, guildId: s, onSelect: n, onOpenShop: r } = e,
        a = I.Ay.canUseCollectibles(t),
        c = F();
    return (0, l.jsx)(T.d_, {
        className: Q.pf,
        children: c.map((e) =>
            (0, l.jsxs)(
                R.B,
                {
                    gap: 4,
                    children: [
                        (0, l.jsx)(u.D, { variant: "text-md/medium", children: e.header }),
                        e.section === B.PURCHASE &&
                            (0, l.jsxs)("div", {
                                className: Q.VQ,
                                children: [
                                    (0, l.jsxs)(H.D, {
                                        "aria-pressed": null == i,
                                        className: U()(Q.H5, { [Q.wH]: null == i }),
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
                                        className: Q.H5,
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
                            className: Q.p_,
                            children: e.items
                                .filter(z.F)
                                .map((s) =>
                                    (0, l.jsx)(
                                        Y,
                                        {
                                            currentUser: t,
                                            nameplate: s,
                                            section: e.section,
                                            canUsePremiumCollectibles: a,
                                            isSelected: i?.skuId === s.skuId,
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
var q = i(652215),
    ee = i(202541),
    et = i(379842);
function ei(e) {
    let {
            currentUser: t,
            categories: i,
            purchases: s,
            analyticsLocations: d,
            modalHeadingId: p,
            onClose: A,
            guildId: C,
            initialSelectedNameplate: f,
        } = e,
        N = (0, r.bG)([j.Ay], () => (null != C && null != t ? j.Ay.getMember(C, t.id) : null)),
        b = null != N ? N.collectibles?.nameplate : t.collectibles?.nameplate,
        { pendingNameplate: E } = (0, g.rv)(t, C),
        [_, P] = (0, n.useState)(() =>
            null != f
                ? f
                : void 0 !== E
                  ? E
                  : null == b
                    ? null
                    : ((0, k.zd)(s, i).find((e) => {
                          let { skuId: t } = e;
                          return t === b.skuId;
                      }) ?? null),
        ),
        M = (0, g.lw)({
            pendingValue: _,
            userValue: t?.collectibles?.nameplate,
            guildValue: N?.collectibles?.nameplate,
            guildId: C,
        }),
        { product: U, purchase: H } = (0, y.A)(_?.skuId),
        T = null != H ? (0, k.gA)(H) : (0, k.G0)(U),
        R = I.Ay.canUseCollectibles(t),
        D = void 0 === E ? _?.skuId === b?.skuId : _?.skuId === E?.skuId,
        L = (0, n.useCallback)(
            (e) => {
                (A(),
                    (0, v.Cz)({
                        analyticsLocations: d,
                        analyticsSource: o.A.EDIT_NAMEPLATE_MODAL,
                        initialProductSkuId: e,
                    }));
            },
            [d, A],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(a.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: et.wx,
                children: [
                    (0, l.jsx)(u.D, { id: p, variant: "heading-lg/semibold", children: w.intl.string(w.t.BwdeM1) }),
                    (0, l.jsx)(a.s_, { "data-migration-pending": !0, className: et.b, onClick: A }),
                ],
            }),
            (0, l.jsxs)(a.$m, {
                "data-migration-pending": !0,
                className: et.Qs,
                scrollbarType: "none",
                children: [
                    (0, l.jsx)(Z, { currentUser: t, selectedNameplate: _, guildId: C, onSelect: P, onOpenShop: L }),
                    (0, l.jsx)(S, { user: t, guildId: C, nameplate: M }),
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
                                  ((0, x.p)({ guildId: C, nameplate: _ }), A());
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
                                subscriptionTier: ee.pe.TIER_2,
                                showGradient: !R,
                                textOptions: {
                                    textOverride: I.Ay.isPremium(t)
                                        ? w.intl.string(w.t.KXLX7l)
                                        : R
                                          ? w.intl.string(w.t.mr4K7D)
                                          : w.intl.string(w.t.pj0XBN),
                                },
                            }),
                    !R && T
                        ? (0, l.jsx)(m.A, { itemType: H?.type ?? U?.type, onClose: A })
                        : (0, l.jsx)(c.$, { variant: "secondary", text: w.intl.string(w.t["ETE/oC"]), onClick: A }),
                ],
            }),
        ],
    });
}
function es(e) {
    let {
            transitionState: t,
            analyticsLocations: i,
            onClose: s,
            guildId: c,
            initialSelectedNameplate: u,
            returnRef: m,
        } = e,
        h = (0, r.bG)([A.default], () => A.default.getCurrentUser()),
        { analyticsLocations: g } = (0, p.Ay)(i, o.A.EDIT_NAMEPLATE_MODAL),
        { categories: x, purchases: j, isFetchingCategories: I, isFetchingPurchases: v } = (0, f.Ay)(),
        k = I || (v && 0 === j.size),
        y = (0, n.useId)();
    return ((0, n.useEffect)(() => {
        C.default.track(q.HAw.OPEN_MODAL, { type: q.JJy.NAMEPLATE_CUSTOMIZATION, location_stack: g });
    }, [g]),
    null == h)
        ? null
        : (0, l.jsx)(p.f5, {
              value: g,
              children: (0, l.jsx)(a.EO, {
                  transitionState: t,
                  size: k ? a.rI.DYNAMIC : a.rI.MEDIUM,
                  parentComponent: "NameplateModal",
                  "aria-label": k ? w.intl.string(w.t.BwdeM1) : void 0,
                  "aria-labelledby": k ? void 0 : y,
                  returnRef: m,
                  "data-migration-pending": !0,
                  children: k
                      ? (0, l.jsx)(d.y, { className: et.u1, type: d.y.Type.SPINNING_CIRCLE })
                      : (0, l.jsx)(ei, {
                            currentUser: h,
                            categories: x,
                            purchases: j,
                            analyticsLocations: g,
                            modalHeadingId: y,
                            guildId: c,
                            initialSelectedNameplate: u,
                            onClose: s,
                        }),
              }),
          });
}
