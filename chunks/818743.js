l.d(t, { default: () => er });
var s,
    i = l(627968),
    n = l(64700),
    r = l(17928),
    a = l(821609),
    c = l(935462),
    u = l(534514),
    d = l(289873),
    o = l(793574),
    m = l(688810),
    p = l(571827),
    x = l(725807),
    h = l(919395),
    g = l(84540),
    j = l(696451),
    A = l(287809),
    C = l(954571),
    y = l(927578),
    I = l(693477),
    v = l(993408),
    E = l(821701),
    f = l(841702),
    k = l(503698),
    N = l.n(k),
    b = l(735438),
    _ = l(834730),
    w = l(836602),
    S = l(773669),
    U = l(58703),
    P = l(536572),
    M = l(130147),
    D = l(344346),
    H = l(985018),
    R = l(383171);
let T = (e) => {
        let { purchase: t, product: l, user: s } = e,
            a = (0, r.bG)([S.default], () => S.default.locale),
            c = (0, P.Sw)(t),
            u = (0, P.VG)(l),
            d = y.Ay.canUseCollectibles(s),
            o = (0, v.gA)(t),
            m = (0, v.G0)(l),
            p = !d && o,
            [x, h] = n.useState(null);
        n.useEffect(() => {
            h(t?.expiresAt != null ? (0, U.Tf)(Date.now(), t.expiresAt) : null);
        }, [t?.expiresAt]);
        let g = null == t || p;
        return (0, i.jsxs)("div", {
            className: N()(R.ip, { [R.w6]: g }),
            children: [
                (0, i.jsx)(_.E, {
                    color: "text-strong",
                    variant: "text-sm/semibold",
                    children: (0, b.isEmpty)(c) ? u : c,
                }),
                g
                    ? (0, i.jsx)(_.E, {
                          color: "text-default",
                          variant: "text-sm/normal",
                          children: p
                              ? H.intl.string(H.t.nD78oa)
                              : m && d
                                ? H.intl.string(H.t.hmyYK8)
                                : m
                                  ? H.intl.string(H.t.JY1i0u)
                                  : H.intl.string(H.t.fEGjVQ),
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              null != x &&
                                  (0, i.jsx)(_.E, {
                                      variant: "text-xxs/normal",
                                      color: "text-muted",
                                      children: H.intl.format(H.t.Io7ozn, { days: x.days.toString() }),
                                  }),
                              (0, i.jsxs)(_.E, {
                                  variant: "text-xxs/normal",
                                  color: "text-muted",
                                  children: [
                                      H.intl.format(H.t.gW9R4B, {
                                          date: t.purchasedAt.toLocaleDateString(a, { month: "long", year: "numeric" }),
                                      }),
                                      null != t.expiresAt &&
                                          (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)("br", {}),
                                                  H.intl.format(H.t.eZSTa5, {
                                                      date: t.expiresAt.toLocaleDateString(a, {
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
                              o &&
                                  (0, i.jsx)(_.E, {
                                      variant: "text-xxs/normal",
                                      color: "text-muted",
                                      children: H.intl.string(H.t.nKdAlO),
                                  }),
                          ],
                      }),
            ],
        });
    },
    G = (e) => {
        let { user: t, guildId: l, nameplate: s } = e,
            n = (0, r.cf)([w.A], () => w.A.getPendingChanges(l)),
            { product: a, purchase: c } = (0, E.A)(s?.skuId),
            u = y.Ay.canUseCollectibles(t),
            d = (0, v.gA)(c),
            o = null == c || (!u && d);
        return (0, i.jsxs)("div", {
            className: N()(R.i1, { [R.Zj]: null != s && o }),
            children: [
                (0, i.jsx)("div", {
                    className: R.u_,
                    role: "img",
                    "aria-label": H.intl.string(H.t.SZeUdR),
                    children: (0, i.jsxs)("div", {
                        className: R.Xp,
                        "aria-hidden": !0,
                        children: [
                            (0, i.jsx)(M._, { width: 124, opacity: 0.9 }),
                            (0, i.jsx)(M._, { width: 124, opacity: 0.9 }),
                            (0, i.jsx)(D.A, { ...n, user: t, guildId: l, nameplate: s, isHighlighted: !0 }),
                            (0, i.jsx)(M._, { width: 124, opacity: 0.9 }),
                            (0, i.jsx)(M._, { width: 124, opacity: 0.9 }),
                        ],
                    }),
                }),
                null != s && (0, i.jsx)(T, { purchase: c, product: a, user: t }),
            ],
        });
    };
var L = l(939249),
    O = l(364522),
    z = l(331322),
    V = l(428678),
    K = l(34188),
    J = l(713517),
    F = l(837015),
    W = l(483968);
l(321073);
var X = l(702841),
    B = l(590180),
    Q = l(4227),
    Y = (((s = {}).PURCHASE = "purchase"), (s.PREMIUM_PURCHASE = "premium_purchase"), (s.PREVIEW = "preview"), s);
let Z = { skuId: "None" },
    $ = { skuId: "Shop" };
var q = l(551881);
let ee = (e) => {
        let { currentUser: t, nameplate: l, section: s, canUsePremiumCollectibles: r, isSelected: a, onClick: c } = e,
            u = (0, n.useRef)(null),
            { isHoveringOrFocusing: d } = (0, J.A)(u);
        return (0, i.jsxs)(L.D, {
            innerRef: u,
            "aria-pressed": a,
            "aria-label": l.label ?? H.intl.string(H.t.x5CoXR),
            className: q.Hj,
            onClick: c,
            children: [
                (0, i.jsx)(D.A, { nameplate: l, user: t, showPlaceholderUser: !0, isHighlighted: d }),
                (0, i.jsx)("div", { className: N()(q.t1, { [q.wH]: a }) }),
                (0, i.jsx)(W.A, {
                    isPurchaseSection: s === Y.PURCHASE,
                    isPremiumSection: s === Y.PREMIUM_PURCHASE,
                    canUsePremiumCollectibles: r,
                    skuId: l.skuId,
                }),
            ],
        });
    },
    et = (e) => {
        let { currentUser: t, selectedNameplate: l, guildId: s, onSelect: r, onOpenShop: a } = e,
            c = y.Ay.canUseCollectibles(t),
            u = (() => {
                let e = (0, X.bG)([Q.A], () => Q.A.purchases),
                    [t, l] = (0, X.yK)([B.A], () => [B.A.categories, B.A.products]);
                return (0, n.useMemo)(() => {
                    let s = (0, v.zd)(e, t).reduce(
                        (t, s) => {
                            let i = e.get(s.skuId),
                                n = l.get(s.skuId),
                                r = null != i ? (0, v.gA)(i) : (0, v.G0)(n),
                                a = n?.isCategoryReward ?? !1;
                            return (
                                r
                                    ? t.premium_purchase.push(s)
                                    : null != i
                                      ? t.purchase.push(s)
                                      : a || t.preview.push(s),
                                t
                            );
                        },
                        { purchase: [], premium_purchase: [], preview: [] },
                    );
                    return [
                        {
                            section: "purchase",
                            items: [Z, $, ...s.purchase],
                            height: 12,
                            header: H.intl.string(H.t.WfGV52),
                        },
                        {
                            section: "premium_purchase",
                            items: s.premium_purchase,
                            height: 12,
                            header: H.intl.string(H.t.TiLCgw),
                        },
                        { section: "preview", items: s.preview, height: 12, header: H.intl.string(H.t["1vbbee"]) },
                    ].filter((e) => {
                        let { items: t } = e;
                        return t.length > 0;
                    });
                }, [t, e, l]);
            })();
        return (0, i.jsx)(O.d_, {
            className: q.pf,
            children: u.map((e) =>
                (0, i.jsxs)(
                    z.B,
                    {
                        gap: 4,
                        children: [
                            (0, i.jsx)(_.E, { variant: "text-md/medium", children: e.header }),
                            e.section === Y.PURCHASE &&
                                (0, i.jsxs)("div", {
                                    className: q.VQ,
                                    children: [
                                        (0, i.jsxs)(L.D, {
                                            "aria-pressed": null == l,
                                            className: N()(q.H5, { [q.wH]: null == l }),
                                            onClick: () => r(null),
                                            children: [
                                                (0, i.jsx)(V.K, { size: "md", color: "currentColor" }),
                                                (0, i.jsx)(_.E, {
                                                    variant: "text-xs/normal",
                                                    children:
                                                        null != s
                                                            ? H.intl.string(H.t.CHf9iJ)
                                                            : H.intl.string(H.t.PoWNfe),
                                                }),
                                            ],
                                        }),
                                        (0, i.jsxs)(L.D, {
                                            className: q.H5,
                                            onClick: a,
                                            children: [
                                                (0, i.jsx)(K.U, { size: "md", color: "currentColor" }),
                                                (0, i.jsx)(_.E, {
                                                    variant: "text-xs/normal",
                                                    children: H.intl.string(H.t.pWG4ze),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            (0, i.jsx)("div", {
                                className: q.p_,
                                children: e.items
                                    .filter(F.F)
                                    .map((s) =>
                                        (0, i.jsx)(
                                            ee,
                                            {
                                                currentUser: t,
                                                nameplate: s,
                                                section: e.section,
                                                canUsePremiumCollectibles: c,
                                                isSelected: l?.skuId === s.skuId,
                                                onClick: () => r(s),
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
var el = l(652215),
    es = l(788868),
    ei = l(762279);
function en(e) {
    let {
            currentUser: t,
            categories: l,
            purchases: s,
            analyticsLocations: d,
            onClose: m,
            guildId: A,
            initialSelectedNameplate: C,
        } = e,
        f = (0, r.bG)([j.Ay], () => (null != A && null != t ? j.Ay.getMember(A, t.id) : null)),
        k = null != f ? f.collectibles?.nameplate : t.collectibles?.nameplate,
        { pendingNameplate: N } = (0, h.rv)(t, A),
        [b, _] = (0, n.useState)(() =>
            null != C
                ? C
                : void 0 !== N
                  ? N
                  : null == k
                    ? null
                    : ((0, v.zd)(s, l).find((e) => {
                          let { skuId: t } = e;
                          return t === k.skuId;
                      }) ?? null),
        ),
        w = (0, h.lw)({
            pendingValue: b,
            userValue: t?.collectibles?.nameplate,
            guildValue: f?.collectibles?.nameplate,
            guildId: A,
        }),
        { product: S, purchase: U } = (0, E.A)(b?.skuId),
        P = null != U ? (0, v.gA)(U) : (0, v.G0)(S),
        M = y.Ay.canUseCollectibles(t),
        D = void 0 === N ? b?.skuId === k?.skuId : b?.skuId === N?.skuId,
        R = (0, n.useCallback)(
            (e) => {
                m(),
                    (0, I.Cz)({
                        analyticsLocations: d,
                        analyticsSource: o.A.EDIT_NAMEPLATE_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [d, m],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(c.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: ei.wx,
                children: [
                    (0, i.jsx)(u.D, { variant: "heading-lg/semibold", children: H.intl.string(H.t.BwdeM1) }),
                    (0, i.jsx)(c.s_, { "data-migration-pending": !0, className: ei.b, onClick: m }),
                ],
            }),
            (0, i.jsxs)(c.$m, {
                "data-migration-pending": !0,
                className: ei.Qs,
                scrollbarType: "none",
                children: [
                    (0, i.jsx)(et, { currentUser: t, selectedNameplate: b, guildId: A, onSelect: _, onOpenShop: R }),
                    (0, i.jsx)(G, { user: t, guildId: A, nameplate: w }),
                ],
            }),
            (0, i.jsxs)(c.jl, {
                "data-migration-pending": !0,
                className: ei.Hx,
                children: [
                    (null != U && (!P || M)) || null === b
                        ? (0, i.jsx)(a.$, {
                              variant: "primary",
                              text: H.intl.string(H.t.Jh8fJz),
                              onClick: () => {
                                  (0, g.p)({ guildId: A, nameplate: b }), m();
                              },
                              disabled: D,
                          })
                        : null == U && (M || !P)
                          ? (0, i.jsx)(a.$, {
                                variant: "primary",
                                onClick: () => R(S?.skuId),
                                text: H.intl.string(H.t.fYfGgK),
                            })
                          : (0, i.jsx)(x.A, {
                                subscriptionTier: es.pe.TIER_2,
                                showGradient: !M,
                                textOptions: {
                                    textOverride: y.Ay.isPremium(t)
                                        ? H.intl.string(H.t.KXLX7l)
                                        : M
                                          ? H.intl.string(H.t.mr4K7D)
                                          : H.intl.string(H.t.pj0XBN),
                                },
                            }),
                    !M && P
                        ? (0, i.jsx)(p.A, { itemType: U?.type ?? S?.type, onClose: m })
                        : (0, i.jsx)(a.$, { variant: "secondary", text: H.intl.string(H.t["ETE/oC"]), onClick: m }),
                ],
            }),
        ],
    });
}
function er(e) {
    let { transitionState: t, analyticsLocations: l, onClose: s, guildId: a, initialSelectedNameplate: u } = e,
        p = (0, r.bG)([A.default], () => A.default.getCurrentUser()),
        { analyticsLocations: x } = (0, m.Ay)(l, o.A.EDIT_NAMEPLATE_MODAL),
        { categories: h, purchases: g, isFetchingCategories: j, isFetchingPurchases: y } = (0, f.Ay)(),
        I = j || (y && 0 === g.size);
    return ((0, n.useEffect)(() => {
        C.default.track(el.HAw.OPEN_MODAL, { type: el.JJy.NAMEPLATE_CUSTOMIZATION, location_stack: x });
    }, [x]),
    null == p)
        ? null
        : (0, i.jsx)(m.f5, {
              value: x,
              children: (0, i.jsx)(c.EO, {
                  transitionState: t,
                  size: I ? c.rI.DYNAMIC : c.rI.MEDIUM,
                  parentComponent: "NameplateModal",
                  "data-migration-pending": !0,
                  children: I
                      ? (0, i.jsx)(d.y, { className: ei.u1, type: d.y.Type.SPINNING_CIRCLE })
                      : (0, i.jsx)(en, {
                            currentUser: p,
                            categories: h,
                            purchases: g,
                            analyticsLocations: x,
                            guildId: a,
                            initialSelectedNameplate: u,
                            onClose: s,
                        }),
              }),
          });
}
