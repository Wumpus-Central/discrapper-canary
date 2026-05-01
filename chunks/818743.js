t.d(s, { default: () => et });
var i,
    l = t(627968),
    n = t(64700),
    r = t(17928),
    a = t(821609),
    c = t(935462),
    u = t(534514),
    d = t(289873),
    o = t(793574),
    p = t(688810),
    m = t(571827),
    h = t(725807),
    g = t(919395),
    x = t(84540),
    j = t(696451),
    A = t(287809),
    C = t(174459),
    I = t(927578),
    k = t(859040),
    v = t(993408),
    N = t(821701),
    y = t(841702),
    E = t(836602),
    _ = t(448429),
    b = t(130147),
    f = t(344346),
    w = t(375708),
    P = t(383171);
let U = (e) => {
    let { user: s, guildId: t, nameplate: i } = e,
        n = (0, r.cf)([E.A], () => E.A.getPendingChanges(t));
    return (0, l.jsxs)("div", {
        className: P.i1,
        children: [
            (0, l.jsx)("div", {
                className: P.u_,
                role: "img",
                "aria-label": w.intl.string(w.t.SZeUdR),
                children: (0, l.jsxs)("div", {
                    className: P.Xp,
                    "aria-hidden": !0,
                    children: [
                        (0, l.jsx)(b._, { width: 124, opacity: 0.9 }),
                        (0, l.jsx)(b._, { width: 124, opacity: 0.9 }),
                        (0, l.jsx)(f.A, { ...n, user: s, guildId: t, nameplate: i, isHighlighted: !0 }),
                        (0, l.jsx)(b._, { width: 124, opacity: 0.9 }),
                        (0, l.jsx)(b._, { width: 124, opacity: 0.9 }),
                    ],
                }),
            }),
            (0, l.jsx)(_.A, {
                user: s,
                previewSkuId: i?.skuId,
                nitroChurnCTA: w.intl.string(w.t.nD78oa),
                nitroJoinCTA: w.intl.string(w.t["07vM9p"]),
            }),
        ],
    });
};
var M = t(503698),
    S = t.n(M),
    H = t(939249),
    T = t(364522),
    R = t(331322),
    D = t(834730),
    L = t(428678),
    O = t(34188),
    G = t(713517),
    z = t(837015),
    J = t(483968);
t(321073);
var V = t(702841),
    K = t(590180),
    X = t(4227),
    W = (((i = {}).PURCHASE = "purchase"), (i.PREMIUM_PURCHASE = "premium_purchase"), (i.PREVIEW = "preview"), i);
let $ = { skuId: "None" },
    B = { skuId: "Shop" };
var F = t(551881);
let Q = (e) => {
        let { currentUser: s, nameplate: t, section: i, canUsePremiumCollectibles: r, isSelected: a, onClick: c } = e,
            u = (0, n.useRef)(null),
            { isHoveringOrFocusing: d } = (0, G.A)(u);
        return (0, l.jsxs)(H.D, {
            innerRef: u,
            "aria-pressed": a,
            "aria-label": t.label ?? w.intl.string(w.t.x5CoXR),
            className: F.Hj,
            onClick: c,
            children: [
                (0, l.jsx)(f.A, { nameplate: t, user: s, showPlaceholderUser: !0, isHighlighted: d }),
                (0, l.jsx)("div", { className: S()(F.t1, { [F.wH]: a }) }),
                (0, l.jsx)(J.A, {
                    isPurchaseSection: i === W.PURCHASE,
                    isPremiumSection: i === W.PREMIUM_PURCHASE,
                    canUsePremiumCollectibles: r,
                    skuId: t.skuId,
                }),
            ],
        });
    },
    Y = (e) => {
        let { currentUser: s, selectedNameplate: t, guildId: i, onSelect: r, onOpenShop: a } = e,
            c = I.Ay.canUseCollectibles(s),
            u = (() => {
                let e = (0, V.bG)([X.A], () => X.A.purchases),
                    [s, t] = (0, V.yK)([K.A], () => [K.A.categories, K.A.products]);
                return (0, n.useMemo)(() => {
                    let i = (0, v.zd)(e, s).reduce(
                        (s, i) => {
                            let l = e.get(i.skuId),
                                n = t.get(i.skuId),
                                r = null != l ? (0, v.gA)(l) : (0, v.G0)(n),
                                a = n?.isCategoryReward ?? !1;
                            return (
                                r
                                    ? s.premium_purchase.push(i)
                                    : null != l
                                      ? s.purchase.push(i)
                                      : a || s.preview.push(i),
                                s
                            );
                        },
                        { purchase: [], premium_purchase: [], preview: [] },
                    );
                    return [
                        {
                            section: "purchase",
                            items: [$, B, ...i.purchase],
                            height: 12,
                            header: w.intl.string(w.t.WfGV52),
                        },
                        {
                            section: "premium_purchase",
                            items: i.premium_purchase,
                            height: 12,
                            header: w.intl.string(w.t.TiLCgw),
                        },
                        { section: "preview", items: i.preview, height: 12, header: w.intl.string(w.t["1vbbee"]) },
                    ].filter((e) => {
                        let { items: s } = e;
                        return s.length > 0;
                    });
                }, [s, e, t]);
            })();
        return (0, l.jsx)(T.d_, {
            className: F.pf,
            children: u.map((e) =>
                (0, l.jsxs)(
                    R.B,
                    {
                        gap: 4,
                        children: [
                            (0, l.jsx)(D.E, { variant: "text-md/medium", children: e.header }),
                            e.section === W.PURCHASE &&
                                (0, l.jsxs)("div", {
                                    className: F.VQ,
                                    children: [
                                        (0, l.jsxs)(H.D, {
                                            "aria-pressed": null == t,
                                            className: S()(F.H5, { [F.wH]: null == t }),
                                            onClick: () => r(null),
                                            children: [
                                                (0, l.jsx)(L.K, { size: "md", color: "currentColor" }),
                                                (0, l.jsx)(D.E, {
                                                    variant: "text-xs/normal",
                                                    children:
                                                        null != i
                                                            ? w.intl.string(w.t.CHf9iJ)
                                                            : w.intl.string(w.t.PoWNfe),
                                                }),
                                            ],
                                        }),
                                        (0, l.jsxs)(H.D, {
                                            className: F.H5,
                                            onClick: a,
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
                                className: F.p_,
                                children: e.items
                                    .filter(z.F)
                                    .map((i) =>
                                        (0, l.jsx)(
                                            Q,
                                            {
                                                currentUser: s,
                                                nameplate: i,
                                                section: e.section,
                                                canUsePremiumCollectibles: c,
                                                isSelected: t?.skuId === i.skuId,
                                                onClick: () => r(i),
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
var Z = t(652215),
    q = t(788868),
    ee = t(762279);
function es(e) {
    let {
            currentUser: s,
            categories: t,
            purchases: i,
            analyticsLocations: d,
            onClose: p,
            guildId: A,
            initialSelectedNameplate: C,
        } = e,
        y = (0, r.bG)([j.Ay], () => (null != A && null != s ? j.Ay.getMember(A, s.id) : null)),
        E = null != y ? y.collectibles?.nameplate : s.collectibles?.nameplate,
        { pendingNameplate: _ } = (0, g.rv)(s, A),
        [b, f] = (0, n.useState)(() =>
            null != C
                ? C
                : void 0 !== _
                  ? _
                  : null == E
                    ? null
                    : ((0, v.zd)(i, t).find((e) => {
                          let { skuId: s } = e;
                          return s === E.skuId;
                      }) ?? null),
        ),
        P = (0, g.lw)({
            pendingValue: b,
            userValue: s?.collectibles?.nameplate,
            guildValue: y?.collectibles?.nameplate,
            guildId: A,
        }),
        { product: M, purchase: S } = (0, N.A)(b?.skuId),
        H = null != S ? (0, v.gA)(S) : (0, v.G0)(M),
        T = I.Ay.canUseCollectibles(s),
        R = void 0 === _ ? b?.skuId === E?.skuId : b?.skuId === _?.skuId,
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
            (0, l.jsxs)(c.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: ee.wx,
                children: [
                    (0, l.jsx)(u.D, { variant: "heading-lg/semibold", children: w.intl.string(w.t.BwdeM1) }),
                    (0, l.jsx)(c.s_, { "data-migration-pending": !0, className: ee.b, onClick: p }),
                ],
            }),
            (0, l.jsxs)(c.$m, {
                "data-migration-pending": !0,
                className: ee.Qs,
                scrollbarType: "none",
                children: [
                    (0, l.jsx)(Y, { currentUser: s, selectedNameplate: b, guildId: A, onSelect: f, onOpenShop: D }),
                    (0, l.jsx)(U, { user: s, guildId: A, nameplate: P }),
                ],
            }),
            (0, l.jsxs)(c.jl, {
                "data-migration-pending": !0,
                className: ee.Hx,
                children: [
                    (null != S && (!H || T)) || null === b
                        ? (0, l.jsx)(a.$, {
                              variant: "primary",
                              text: w.intl.string(w.t.Jh8fJz),
                              onClick: () => {
                                  (0, x.p)({ guildId: A, nameplate: b }), p();
                              },
                              disabled: R,
                          })
                        : null == S && (T || !H)
                          ? (0, l.jsx)(a.$, {
                                variant: "primary",
                                onClick: () => D(M?.skuId),
                                text: w.intl.string(w.t.fYfGgK),
                            })
                          : (0, l.jsx)(h.A, {
                                subscriptionTier: q.pe.TIER_2,
                                showGradient: !T,
                                textOptions: {
                                    textOverride: I.Ay.isPremium(s)
                                        ? w.intl.string(w.t.KXLX7l)
                                        : T
                                          ? w.intl.string(w.t.mr4K7D)
                                          : w.intl.string(w.t.pj0XBN),
                                },
                            }),
                    !T && H
                        ? (0, l.jsx)(m.A, { itemType: S?.type ?? M?.type, onClose: p })
                        : (0, l.jsx)(a.$, { variant: "secondary", text: w.intl.string(w.t["ETE/oC"]), onClick: p }),
                ],
            }),
        ],
    });
}
function et(e) {
    let { transitionState: s, analyticsLocations: t, onClose: i, guildId: a, initialSelectedNameplate: u } = e,
        m = (0, r.bG)([A.default], () => A.default.getCurrentUser()),
        { analyticsLocations: h } = (0, p.Ay)(t, o.A.EDIT_NAMEPLATE_MODAL),
        { categories: g, purchases: x, isFetchingCategories: j, isFetchingPurchases: I } = (0, y.Ay)(),
        k = j || (I && 0 === x.size);
    return ((0, n.useEffect)(() => {
        C.default.track(Z.HAw.OPEN_MODAL, { type: Z.JJy.NAMEPLATE_CUSTOMIZATION, location_stack: h });
    }, [h]),
    null == m)
        ? null
        : (0, l.jsx)(p.f5, {
              value: h,
              children: (0, l.jsx)(c.EO, {
                  transitionState: s,
                  size: k ? c.rI.DYNAMIC : c.rI.MEDIUM,
                  parentComponent: "NameplateModal",
                  "data-migration-pending": !0,
                  children: k
                      ? (0, l.jsx)(d.y, { className: ee.u1, type: d.y.Type.SPINNING_CIRCLE })
                      : (0, l.jsx)(es, {
                            currentUser: m,
                            categories: g,
                            purchases: x,
                            analyticsLocations: h,
                            guildId: a,
                            initialSelectedNameplate: u,
                            onClose: i,
                        }),
              }),
          });
}
