t.d(i, { default: () => es });
var s,
    l = t(477900),
    n = t(582128),
    a = t(17928),
    r = t(935462),
    c = t(821609),
    d = t(297264),
    u = t(289873),
    o = t(793574),
    p = t(688810),
    m = t(571827),
    h = t(725807),
    g = t(919395),
    x = t(84540),
    j = t(696451),
    A = t(287809),
    C = t(174459),
    I = t(428262),
    v = t(839534),
    k = t(993408),
    y = t(821701),
    N = t(841702),
    b = t(836602),
    f = t(448429),
    E = t(130147),
    _ = t(344346),
    w = t(375708),
    P = t(795419);
let S = function (e) {
    let { user: i, guildId: t, nameplate: s } = e,
        n = (0, a.cf)([b.A], () => b.A.getPendingChanges(t)),
        r = null != s ? w.intl.formatToPlainString(w.t["95pCSf"], { a11y_text: s.label }) : w.intl.string(w.t.SZeUdR);
    return (0, l.jsxs)("div", {
        className: P.i1,
        children: [
            (0, l.jsx)("div", {
                className: P.u_,
                role: "img",
                "aria-label": r,
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
            (0, l.jsx)(f.A, {
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
    B = (((s = {}).PURCHASE = "purchase"), (s.PREMIUM_PURCHASE = "premium_purchase"), (s.PREVIEW = "preview"), s);
let W = { skuId: "None" },
    $ = { skuId: "Shop" },
    F = function () {
        let e = (0, V.bG)([X.A], () => X.A.purchases),
            [i, t] = (0, V.yK)([K.A], () => [K.A.categories, K.A.products]);
        return (0, n.useMemo)(() => {
            let s = (0, k.zd)(e, i).reduce(
                (i, s) => {
                    let l = e.get(s.skuId),
                        n = t.get(s.skuId),
                        a = null != l ? (0, k.gA)(l) : (0, k.G0)(n),
                        r = n?.isCategoryReward ?? !1;
                    return a ? i.premium_purchase.push(s) : null != l ? i.purchase.push(s) : r || i.preview.push(s), i;
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
                let { items: i } = e;
                return i.length > 0;
            });
        }, [i, e, t]);
    };
var Q = t(652465);
function Y(e) {
    let { currentUser: i, nameplate: t, section: s, canUsePremiumCollectibles: a, isSelected: r, onClick: c } = e,
        d = (0, n.useRef)(null),
        { isHoveringOrFocusing: u } = (0, G.A)(d);
    return (0, l.jsxs)(H.D, {
        innerRef: d,
        "aria-pressed": r,
        "aria-label": t.label ?? w.intl.string(w.t.x5CoXR),
        className: Q.Hj,
        onClick: c,
        children: [
            (0, l.jsx)(_.A, { nameplate: t, user: i, showPlaceholderUser: !0, isHighlighted: u }),
            (0, l.jsx)("div", { className: U()(Q.t1, { [Q.wH]: r }) }),
            (0, l.jsx)(J.A, {
                isPurchaseSection: s === B.PURCHASE,
                isPremiumSection: s === B.PREMIUM_PURCHASE,
                canUsePremiumCollectibles: a,
                skuId: t.skuId,
            }),
        ],
    });
}
let Z = function (e) {
    let { currentUser: i, selectedNameplate: t, guildId: s, onSelect: n, onOpenShop: a } = e,
        r = I.Ay.canUseCollectibles(i),
        c = F();
    return (0, l.jsx)(T.d_, {
        className: Q.pf,
        children: c.map((e) =>
            (0, l.jsxs)(
                R.B,
                {
                    gap: 4,
                    children: [
                        (0, l.jsx)(d.D, { variant: "text-md/medium", children: e.header }),
                        e.section === B.PURCHASE &&
                            (0, l.jsxs)("div", {
                                className: Q.VQ,
                                children: [
                                    (0, l.jsxs)(H.D, {
                                        "aria-pressed": null == t,
                                        className: U()(Q.H5, { [Q.wH]: null == t }),
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
                                        onClick: a,
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
                                            currentUser: i,
                                            nameplate: s,
                                            section: e.section,
                                            canUsePremiumCollectibles: r,
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
var q = t(652215),
    ee = t(202541),
    ei = t(389247);
function et(e) {
    let {
            currentUser: i,
            categories: t,
            purchases: s,
            analyticsLocations: u,
            modalHeadingId: p,
            onClose: A,
            guildId: C,
            initialSelectedNameplate: N,
        } = e,
        b = (0, a.bG)([j.Ay], () => (null != C && null != i ? j.Ay.getMember(C, i.id) : null)),
        f = null != b ? b.collectibles?.nameplate : i.collectibles?.nameplate,
        { pendingNameplate: E } = (0, g.rv)(i, C),
        [_, P] = (0, n.useState)(() =>
            null != N
                ? N
                : void 0 !== E
                  ? E
                  : null == f
                    ? null
                    : ((0, k.zd)(s, t).find((e) => {
                          let { skuId: i } = e;
                          return i === f.skuId;
                      }) ?? null),
        ),
        M = (0, g.lw)({
            pendingValue: _,
            userValue: i?.collectibles?.nameplate,
            guildValue: b?.collectibles?.nameplate,
            guildId: C,
        }),
        { product: U, purchase: H } = (0, y.A)(_?.skuId),
        T = null != H ? (0, k.gA)(H) : (0, k.G0)(U),
        R = I.Ay.canUseCollectibles(i),
        D = void 0 === E ? _?.skuId === f?.skuId : _?.skuId === E?.skuId,
        L = (0, n.useCallback)(
            (e) => {
                A(),
                    (0, v.Cz)({
                        analyticsLocations: u,
                        analyticsSource: o.A.EDIT_NAMEPLATE_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [u, A],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(r.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: ei.wx,
                children: [
                    (0, l.jsx)(d.D, { id: p, variant: "heading-lg/semibold", children: w.intl.string(w.t.BwdeM1) }),
                    (0, l.jsx)(r.s_, { "data-migration-pending": !0, className: ei.b, onClick: A }),
                ],
            }),
            (0, l.jsxs)(r.$m, {
                "data-migration-pending": !0,
                className: ei.Qs,
                scrollbarType: "none",
                children: [
                    (0, l.jsx)(Z, { currentUser: i, selectedNameplate: _, guildId: C, onSelect: P, onOpenShop: L }),
                    (0, l.jsx)(S, { user: i, guildId: C, nameplate: M }),
                ],
            }),
            (0, l.jsxs)(r.jl, {
                "data-migration-pending": !0,
                className: ei.Hx,
                children: [
                    (null != H && (!T || R)) || null === _
                        ? (0, l.jsx)(c.$, {
                              variant: "primary",
                              text: w.intl.string(w.t.Jh8fJz),
                              onClick: function () {
                                  (0, x.p)({ guildId: C, nameplate: _ }), A();
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
                                    textOverride: I.Ay.isPremium(i)
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
    let { transitionState: i, analyticsLocations: t, onClose: s, guildId: c, initialSelectedNameplate: d } = e,
        m = (0, a.bG)([A.default], () => A.default.getCurrentUser()),
        { analyticsLocations: h } = (0, p.Ay)(t, o.A.EDIT_NAMEPLATE_MODAL),
        { categories: g, purchases: x, isFetchingCategories: j, isFetchingPurchases: I } = (0, N.Ay)(),
        v = j || (I && 0 === x.size),
        k = (0, n.useId)();
    return ((0, n.useEffect)(() => {
        C.default.track(q.HAw.OPEN_MODAL, { type: q.JJy.NAMEPLATE_CUSTOMIZATION, location_stack: h });
    }, [h]),
    null == m)
        ? null
        : (0, l.jsx)(p.f5, {
              value: h,
              children: (0, l.jsx)(r.EO, {
                  transitionState: i,
                  size: v ? r.rI.DYNAMIC : r.rI.MEDIUM,
                  parentComponent: "NameplateModal",
                  "aria-label": v ? w.intl.string(w.t.BwdeM1) : void 0,
                  "aria-labelledby": v ? void 0 : k,
                  "data-migration-pending": !0,
                  children: v
                      ? (0, l.jsx)(u.y, { className: ei.u1, type: u.y.Type.SPINNING_CIRCLE })
                      : (0, l.jsx)(et, {
                            currentUser: m,
                            categories: g,
                            purchases: x,
                            analyticsLocations: h,
                            modalHeadingId: k,
                            guildId: c,
                            initialSelectedNameplate: d,
                            onClose: s,
                        }),
              }),
          });
}
