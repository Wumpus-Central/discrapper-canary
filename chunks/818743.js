l.d(t, { default: () => ei });
var a,
    s = l(627968),
    r = l(64700),
    i = l(17928),
    n = l(821609),
    c = l(935462),
    d = l(534514),
    o = l(289873),
    u = l(793574),
    m = l(688810),
    p = l(571827),
    x = l(725807),
    _ = l(919395),
    h = l(84540),
    g = l(696451),
    A = l(287809),
    v = l(954571),
    j = l(927578),
    y = l(803375),
    E = l(993408),
    N = l(821701),
    b = l(841702),
    f = l(503698),
    I = l.n(f),
    C = l(735438),
    w = l(834730),
    S = l(836602),
    M = l(773669),
    P = l(58703),
    U = l(536572),
    k = l(130147),
    L = l(344346),
    T = l(985018),
    D = l(383171);
let R = (e) => {
        let { purchase: t, product: l, user: a } = e,
            n = (0, i.bG)([M.default], () => M.default.locale),
            c = (0, U.Sw)(t),
            d = (0, U.VG)(l),
            o = j.Ay.canUseCollectibles(a),
            u = (0, E.gA)(t),
            m = (0, E.G0)(l),
            p = !o && u,
            [x, _] = r.useState(null);
        r.useEffect(() => {
            _(t?.expiresAt != null ? (0, P.Tf)(Date.now(), t.expiresAt) : null);
        }, [t?.expiresAt]);
        let h = null == t || p;
        return (0, s.jsxs)("div", {
            className: I()(D.ip, { [D.w6]: h }),
            children: [
                (0, s.jsx)(w.E, {
                    color: "text-strong",
                    variant: "text-sm/semibold",
                    children: (0, C.isEmpty)(c) ? d : c,
                }),
                h
                    ? (0, s.jsx)(w.E, {
                          color: "text-default",
                          variant: "text-sm/normal",
                          children: p
                              ? T.intl.string(T.t.nD78oa)
                              : m && o
                                ? T.intl.string(T.t.hmyYK8)
                                : m
                                  ? T.intl.string(T.t.JY1i0u)
                                  : T.intl.string(T.t.fEGjVQ),
                      })
                    : (0, s.jsxs)(s.Fragment, {
                          children: [
                              null != x &&
                                  (0, s.jsx)(w.E, {
                                      variant: "text-xxs/normal",
                                      color: "text-muted",
                                      children: T.intl.format(T.t.Io7ozn, { days: x.days.toString() }),
                                  }),
                              (0, s.jsxs)(w.E, {
                                  variant: "text-xxs/normal",
                                  color: "text-muted",
                                  children: [
                                      T.intl.format(T.t.gW9R4B, {
                                          date: t.purchasedAt.toLocaleDateString(n, { month: "long", year: "numeric" }),
                                      }),
                                      null != t.expiresAt &&
                                          (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                  (0, s.jsx)("br", {}),
                                                  T.intl.format(T.t.eZSTa5, {
                                                      date: t.expiresAt.toLocaleDateString(n, {
                                                          minute: "numeric",
                                                          hour: "numeric",
                                                          day: "numeric",
                                                          month: "long",
                                                          year: "numeric",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                  ],
                              }),
                              u &&
                                  (0, s.jsx)(w.E, {
                                      variant: "text-xxs/normal",
                                      color: "text-muted",
                                      children: T.intl.string(T.t.nKdAlO),
                                  }),
                          ],
                      }),
            ],
        });
    },
    O = (e) => {
        let { user: t, guildId: l, nameplate: a } = e,
            r = (0, i.cf)([S.A], () => S.A.getPendingChanges(l)),
            { product: n, purchase: c } = (0, N.A)(a?.skuId),
            d = j.Ay.canUseCollectibles(t),
            o = (0, E.gA)(c),
            u = null == c || (!d && o);
        return (0, s.jsxs)("div", {
            className: I()(D.i1, { [D.Zj]: null != a && u }),
            children: [
                (0, s.jsx)("div", {
                    className: D.u_,
                    role: "img",
                    "aria-label": T.intl.string(T.t.SZeUdR),
                    children: (0, s.jsxs)("div", {
                        className: D.Xp,
                        "aria-hidden": !0,
                        children: [
                            (0, s.jsx)(k._, { width: 124, opacity: 0.9 }),
                            (0, s.jsx)(k._, { width: 124, opacity: 0.9 }),
                            (0, s.jsx)(L.A, { ...r, user: t, guildId: l, nameplate: a, isHighlighted: !0 }),
                            (0, s.jsx)(k._, { width: 124, opacity: 0.9 }),
                            (0, s.jsx)(k._, { width: 124, opacity: 0.9 }),
                        ],
                    }),
                }),
                null != a && (0, s.jsx)(R, { purchase: c, product: n, user: t }),
            ],
        });
    };
var G = l(939249),
    H = l(364522),
    z = l(331322),
    F = l(428678),
    Z = l(34188),
    V = l(713517),
    B = l(837015),
    X = l(483968);
l(321073);
var W = l(702841),
    J = l(590180),
    K = l(4227),
    Q = (((a = {}).PURCHASE = "purchase"), (a.PREMIUM_PURCHASE = "premium_purchase"), (a.PREVIEW = "preview"), a);
let Y = { skuId: "None" },
    $ = { skuId: "Shop" };
var q = l(551881);
let ee = (e) => {
        let { currentUser: t, nameplate: l, section: a, canUsePremiumCollectibles: i, isSelected: n, onClick: c } = e,
            d = (0, r.useRef)(null),
            { isHoveringOrFocusing: o } = (0, V.A)(d);
        return (0, s.jsxs)(G.D, {
            innerRef: d,
            "aria-pressed": n,
            "aria-label": l.label ?? T.intl.string(T.t.x5CoXR),
            className: q.Hj,
            onClick: c,
            children: [
                (0, s.jsx)(L.A, { nameplate: l, user: t, showPlaceholderUser: !0, isHighlighted: o }),
                (0, s.jsx)("div", { className: I()(q.t1, { [q.wH]: n }) }),
                (0, s.jsx)(X.A, {
                    isPurchaseSection: a === Q.PURCHASE,
                    isPremiumSection: a === Q.PREMIUM_PURCHASE,
                    canUsePremiumCollectibles: i,
                    skuId: l.skuId,
                }),
            ],
        });
    },
    et = (e) => {
        let { currentUser: t, selectedNameplate: l, guildId: a, onSelect: i, onOpenShop: n } = e,
            c = j.Ay.canUseCollectibles(t),
            d = (() => {
                let e = (0, W.bG)([K.A], () => K.A.purchases),
                    [t, l] = (0, W.yK)([J.A], () => [J.A.categories, J.A.products]);
                return (0, r.useMemo)(() => {
                    let a = (0, E.zd)(e, t).reduce(
                        (t, a) => {
                            let s = e.get(a.skuId),
                                r = l.get(a.skuId),
                                i = null != s ? (0, E.gA)(s) : (0, E.G0)(r),
                                n = r?.isCategoryReward ?? !1;
                            return (
                                i
                                    ? t.premium_purchase.push(a)
                                    : null != s
                                      ? t.purchase.push(a)
                                      : n || t.preview.push(a),
                                t
                            );
                        },
                        { purchase: [], premium_purchase: [], preview: [] },
                    );
                    return [
                        {
                            section: "purchase",
                            items: [Y, $, ...a.purchase],
                            height: 12,
                            header: T.intl.string(T.t.WfGV52),
                        },
                        {
                            section: "premium_purchase",
                            items: a.premium_purchase,
                            height: 12,
                            header: T.intl.string(T.t.TiLCgw),
                        },
                        { section: "preview", items: a.preview, height: 12, header: T.intl.string(T.t["1vbbee"]) },
                    ].filter((e) => {
                        let { items: t } = e;
                        return t.length > 0;
                    });
                }, [t, e, l]);
            })();
        return (0, s.jsx)(H.d_, {
            className: q.pf,
            children: d.map((e) =>
                (0, s.jsxs)(
                    z.B,
                    {
                        gap: 4,
                        children: [
                            (0, s.jsx)(w.E, { variant: "text-md/medium", children: e.header }),
                            e.section === Q.PURCHASE &&
                                (0, s.jsxs)("div", {
                                    className: q.VQ,
                                    children: [
                                        (0, s.jsxs)(G.D, {
                                            "aria-pressed": null == l,
                                            className: I()(q.H5, { [q.wH]: null == l }),
                                            onClick: () => i(null),
                                            children: [
                                                (0, s.jsx)(F.K, { size: "md", color: "currentColor" }),
                                                (0, s.jsx)(w.E, {
                                                    variant: "text-xs/normal",
                                                    children:
                                                        null != a
                                                            ? T.intl.string(T.t.CHf9iJ)
                                                            : T.intl.string(T.t.PoWNfe),
                                                }),
                                            ],
                                        }),
                                        (0, s.jsxs)(G.D, {
                                            className: q.H5,
                                            onClick: n,
                                            children: [
                                                (0, s.jsx)(Z.U, { size: "md", color: "currentColor" }),
                                                (0, s.jsx)(w.E, {
                                                    variant: "text-xs/normal",
                                                    children: T.intl.string(T.t.pWG4ze),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            (0, s.jsx)("div", {
                                className: q.p_,
                                children: e.items
                                    .filter(B.F)
                                    .map((a) =>
                                        (0, s.jsx)(
                                            ee,
                                            {
                                                currentUser: t,
                                                nameplate: a,
                                                section: e.section,
                                                canUsePremiumCollectibles: c,
                                                isSelected: l?.skuId === a.skuId,
                                                onClick: () => i(a),
                                            },
                                            a.skuId,
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
var el = l(652215),
    ea = l(788868),
    es = l(762279);
function er(e) {
    let {
            currentUser: t,
            categories: l,
            purchases: a,
            analyticsLocations: o,
            onClose: m,
            guildId: A,
            initialSelectedNameplate: v,
        } = e,
        b = (0, i.bG)([g.Ay], () => (null != A && null != t ? g.Ay.getMember(A, t.id) : null)),
        f = null != b ? b.collectibles?.nameplate : t.collectibles?.nameplate,
        { pendingNameplate: I } = (0, _.rv)(t, A),
        [C, w] = (0, r.useState)(() =>
            null != v
                ? v
                : void 0 !== I
                  ? I
                  : null == f
                    ? null
                    : ((0, E.zd)(a, l).find((e) => {
                          let { skuId: t } = e;
                          return t === f.skuId;
                      }) ?? null),
        ),
        S = (0, _.lw)({
            pendingValue: C,
            userValue: t?.collectibles?.nameplate,
            guildValue: b?.collectibles?.nameplate,
            guildId: A,
        }),
        { product: M, purchase: P } = (0, N.A)(C?.skuId),
        U = null != P ? (0, E.gA)(P) : (0, E.G0)(M),
        k = j.Ay.canUseCollectibles(t),
        L = void 0 === I ? C?.skuId === f?.skuId : C?.skuId === I?.skuId,
        D = (0, r.useCallback)(
            (e) => {
                m(),
                    (0, y.Cz)({
                        analyticsLocations: o,
                        analyticsSource: u.A.EDIT_NAMEPLATE_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [o, m],
        );
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(c.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: es.wx,
                children: [
                    (0, s.jsx)(d.D, { variant: "heading-lg/semibold", children: T.intl.string(T.t.BwdeM1) }),
                    (0, s.jsx)(c.s_, { "data-migration-pending": !0, className: es.b, onClick: m }),
                ],
            }),
            (0, s.jsxs)(c.$m, {
                "data-migration-pending": !0,
                className: es.Qs,
                scrollbarType: "none",
                children: [
                    (0, s.jsx)(et, { currentUser: t, selectedNameplate: C, guildId: A, onSelect: w, onOpenShop: D }),
                    (0, s.jsx)(O, { user: t, guildId: A, nameplate: S }),
                ],
            }),
            (0, s.jsxs)(c.jl, {
                "data-migration-pending": !0,
                className: es.Hx,
                children: [
                    (null != P && (!U || k)) || null === C
                        ? (0, s.jsx)(n.$, {
                              variant: "primary",
                              text: T.intl.string(T.t.Jh8fJz),
                              onClick: () => {
                                  (0, h.p)({ guildId: A, nameplate: C }), m();
                              },
                              disabled: L,
                          })
                        : null == P && (k || !U)
                          ? (0, s.jsx)(n.$, {
                                variant: "primary",
                                onClick: () => D(M?.skuId),
                                text: T.intl.string(T.t.fYfGgK),
                            })
                          : (0, s.jsx)(x.A, {
                                subscriptionTier: ea.pe.TIER_2,
                                showGradient: !k,
                                textOptions: {
                                    textOverride: j.Ay.isPremium(t)
                                        ? T.intl.string(T.t.KXLX7l)
                                        : k
                                          ? T.intl.string(T.t.mr4K7D)
                                          : T.intl.string(T.t.pj0XBN),
                                },
                            }),
                    !k && U
                        ? (0, s.jsx)(p.A, { itemType: P?.type ?? M?.type, onClose: m })
                        : (0, s.jsx)(n.$, { variant: "secondary", text: T.intl.string(T.t["ETE/oC"]), onClick: m }),
                ],
            }),
        ],
    });
}
function ei(e) {
    let { transitionState: t, analyticsLocations: l, onClose: a, guildId: n, initialSelectedNameplate: d } = e,
        p = (0, i.bG)([A.default], () => A.default.getCurrentUser()),
        { analyticsLocations: x } = (0, m.Ay)(l, u.A.EDIT_NAMEPLATE_MODAL),
        { categories: _, purchases: h, isFetchingCategories: g, isFetchingPurchases: j } = (0, b.Ay)(),
        y = g || (j && 0 === h.size);
    return ((0, r.useEffect)(() => {
        v.default.track(el.HAw.OPEN_MODAL, { type: el.JJy.NAMEPLATE_CUSTOMIZATION, location_stack: x });
    }, [x]),
    null == p)
        ? null
        : (0, s.jsx)(m.f5, {
              value: x,
              children: (0, s.jsx)(c.EO, {
                  transitionState: t,
                  size: y ? c.rI.DYNAMIC : c.rI.MEDIUM,
                  parentComponent: "NameplateModal",
                  "data-migration-pending": !0,
                  children: y
                      ? (0, s.jsx)(o.y, { className: es.u1, type: o.y.Type.SPINNING_CIRCLE })
                      : (0, s.jsx)(er, {
                            currentUser: p,
                            categories: _,
                            purchases: h,
                            analyticsLocations: x,
                            guildId: n,
                            initialSelectedNameplate: d,
                            onClose: a,
                        }),
              }),
          });
}
