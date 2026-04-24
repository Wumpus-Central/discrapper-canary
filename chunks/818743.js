l.d(t, { default: () => en });
var r,
    a = l(627968),
    s = l(64700),
    n = l(17928),
    i = l(821609),
    o = l(935462),
    c = l(534514),
    u = l(289873),
    d = l(793574),
    m = l(688810),
    A = l(571827),
    p = l(725807),
    h = l(919395),
    _ = l(84540),
    g = l(696451),
    f = l(287809),
    v = l(954571),
    E = l(927578),
    x = l(693477),
    b = l(993408),
    I = l(821701),
    C = l(841702),
    y = l(503698),
    N = l.n(y),
    j = l(735438),
    R = l(834730),
    T = l(836602),
    w = l(773669),
    O = l(58703),
    L = l(536572),
    M = l(130147),
    U = l(344346),
    D = l(985018),
    k = l(383171);
let S = (e) => {
        let { purchase: t, product: l, user: r } = e,
            i = (0, n.bG)([w.default], () => w.default.locale),
            o = (0, L.Sw)(t),
            c = (0, L.VG)(l),
            u = E.Ay.canUseCollectibles(r),
            d = (0, b.gA)(t),
            m = (0, b.G0)(l),
            A = !u && d,
            [p, h] = s.useState(null);
        s.useEffect(() => {
            h(t?.expiresAt != null ? (0, O.Tf)(Date.now(), t.expiresAt) : null);
        }, [t?.expiresAt]);
        let _ = null == t || A;
        return (0, a.jsxs)("div", {
            className: N()(k.ip, { [k.w6]: _ }),
            children: [
                (0, a.jsx)(R.E, {
                    color: "text-strong",
                    variant: "text-sm/semibold",
                    children: (0, j.isEmpty)(o) ? c : o,
                }),
                _
                    ? (0, a.jsx)(R.E, {
                          color: "text-default",
                          variant: "text-sm/normal",
                          children: A
                              ? D.intl.string(D.t.nD78oa)
                              : m && u
                                ? D.intl.string(D.t.hmyYK8)
                                : m
                                  ? D.intl.string(D.t.JY1i0u)
                                  : D.intl.string(D.t.fEGjVQ),
                      })
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              null != p &&
                                  (0, a.jsx)(R.E, {
                                      variant: "text-xxs/normal",
                                      color: "text-muted",
                                      children: D.intl.format(D.t.Io7ozn, { days: p.days.toString() }),
                                  }),
                              (0, a.jsxs)(R.E, {
                                  variant: "text-xxs/normal",
                                  color: "text-muted",
                                  children: [
                                      D.intl.format(D.t.gW9R4B, {
                                          date: t.purchasedAt.toLocaleDateString(i, { month: "long", year: "numeric" }),
                                      }),
                                      null != t.expiresAt &&
                                          (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  (0, a.jsx)("br", {}),
                                                  D.intl.format(D.t.eZSTa5, {
                                                      date: t.expiresAt.toLocaleDateString(i, {
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
                              d &&
                                  (0, a.jsx)(R.E, {
                                      variant: "text-xxs/normal",
                                      color: "text-muted",
                                      children: D.intl.string(D.t.nKdAlO),
                                  }),
                          ],
                      }),
            ],
        });
    },
    P = (e) => {
        let { user: t, guildId: l, nameplate: r } = e,
            s = (0, n.cf)([T.A], () => T.A.getPendingChanges(l)),
            { product: i, purchase: o } = (0, I.A)(r?.skuId),
            c = E.Ay.canUseCollectibles(t),
            u = (0, b.gA)(o),
            d = null == o || (!c && u);
        return (0, a.jsxs)("div", {
            className: N()(k.i1, { [k.Zj]: null != r && d }),
            children: [
                (0, a.jsx)("div", {
                    className: k.u_,
                    role: "img",
                    "aria-label": D.intl.string(D.t.SZeUdR),
                    children: (0, a.jsxs)("div", {
                        className: k.Xp,
                        "aria-hidden": !0,
                        children: [
                            (0, a.jsx)(M._, { width: 124, opacity: 0.9 }),
                            (0, a.jsx)(M._, { width: 124, opacity: 0.9 }),
                            (0, a.jsx)(U.A, { ...s, user: t, guildId: l, nameplate: r, isHighlighted: !0 }),
                            (0, a.jsx)(M._, { width: 124, opacity: 0.9 }),
                            (0, a.jsx)(M._, { width: 124, opacity: 0.9 }),
                        ],
                    }),
                }),
                null != r && (0, a.jsx)(S, { purchase: o, product: i, user: t }),
            ],
        });
    };
var H = l(939249),
    G = l(364522),
    F = l(331322),
    B = l(428678),
    V = l(34188),
    z = l(713517),
    K = l(837015),
    Z = l(483968);
l(321073);
var W = l(702841),
    J = l(590180),
    $ = l(4227),
    X = (((r = {}).PURCHASE = "purchase"), (r.PREMIUM_PURCHASE = "premium_purchase"), (r.PREVIEW = "preview"), r);
let Q = { skuId: "None" },
    q = { skuId: "Shop" };
var Y = l(551881);
let ee = (e) => {
        let { currentUser: t, nameplate: l, section: r, canUsePremiumCollectibles: n, isSelected: i, onClick: o } = e,
            c = (0, s.useRef)(null),
            { isHoveringOrFocusing: u } = (0, z.A)(c);
        return (0, a.jsxs)(H.D, {
            innerRef: c,
            "aria-pressed": i,
            "aria-label": l.label ?? D.intl.string(D.t.x5CoXR),
            className: Y.Hj,
            onClick: o,
            children: [
                (0, a.jsx)(U.A, { nameplate: l, user: t, showPlaceholderUser: !0, isHighlighted: u }),
                (0, a.jsx)("div", { className: N()(Y.t1, { [Y.wH]: i }) }),
                (0, a.jsx)(Z.A, {
                    isPurchaseSection: r === X.PURCHASE,
                    isPremiumSection: r === X.PREMIUM_PURCHASE,
                    canUsePremiumCollectibles: n,
                    skuId: l.skuId,
                }),
            ],
        });
    },
    et = (e) => {
        let { currentUser: t, selectedNameplate: l, guildId: r, onSelect: n, onOpenShop: i } = e,
            o = E.Ay.canUseCollectibles(t),
            c = (() => {
                let e = (0, W.bG)([$.A], () => $.A.purchases),
                    [t, l] = (0, W.yK)([J.A], () => [J.A.categories, J.A.products]);
                return (0, s.useMemo)(() => {
                    let r = (0, b.zd)(e, t).reduce(
                        (t, r) => {
                            let a = e.get(r.skuId),
                                s = l.get(r.skuId),
                                n = null != a ? (0, b.gA)(a) : (0, b.G0)(s),
                                i = s?.isCategoryReward ?? !1;
                            return (
                                n
                                    ? t.premium_purchase.push(r)
                                    : null != a
                                      ? t.purchase.push(r)
                                      : i || t.preview.push(r),
                                t
                            );
                        },
                        { purchase: [], premium_purchase: [], preview: [] },
                    );
                    return [
                        {
                            section: "purchase",
                            items: [Q, q, ...r.purchase],
                            height: 12,
                            header: D.intl.string(D.t.WfGV52),
                        },
                        {
                            section: "premium_purchase",
                            items: r.premium_purchase,
                            height: 12,
                            header: D.intl.string(D.t.TiLCgw),
                        },
                        { section: "preview", items: r.preview, height: 12, header: D.intl.string(D.t["1vbbee"]) },
                    ].filter((e) => {
                        let { items: t } = e;
                        return t.length > 0;
                    });
                }, [t, e, l]);
            })();
        return (0, a.jsx)(G.d_, {
            className: Y.pf,
            children: c.map((e) =>
                (0, a.jsxs)(
                    F.B,
                    {
                        gap: 4,
                        children: [
                            (0, a.jsx)(R.E, { variant: "text-md/medium", children: e.header }),
                            e.section === X.PURCHASE &&
                                (0, a.jsxs)("div", {
                                    className: Y.VQ,
                                    children: [
                                        (0, a.jsxs)(H.D, {
                                            "aria-pressed": null == l,
                                            className: N()(Y.H5, { [Y.wH]: null == l }),
                                            onClick: () => n(null),
                                            children: [
                                                (0, a.jsx)(B.K, { size: "md", color: "currentColor" }),
                                                (0, a.jsx)(R.E, {
                                                    variant: "text-xs/normal",
                                                    children:
                                                        null != r
                                                            ? D.intl.string(D.t.CHf9iJ)
                                                            : D.intl.string(D.t.PoWNfe),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsxs)(H.D, {
                                            className: Y.H5,
                                            onClick: i,
                                            children: [
                                                (0, a.jsx)(V.U, { size: "md", color: "currentColor" }),
                                                (0, a.jsx)(R.E, {
                                                    variant: "text-xs/normal",
                                                    children: D.intl.string(D.t.pWG4ze),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            (0, a.jsx)("div", {
                                className: Y.p_,
                                children: e.items
                                    .filter(K.F)
                                    .map((r) =>
                                        (0, a.jsx)(
                                            ee,
                                            {
                                                currentUser: t,
                                                nameplate: r,
                                                section: e.section,
                                                canUsePremiumCollectibles: o,
                                                isSelected: l?.skuId === r.skuId,
                                                onClick: () => n(r),
                                            },
                                            r.skuId,
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
    er = l(788868),
    ea = l(762279);
function es(e) {
    let {
            currentUser: t,
            categories: l,
            purchases: r,
            analyticsLocations: u,
            onClose: m,
            guildId: f,
            initialSelectedNameplate: v,
        } = e,
        C = (0, n.bG)([g.Ay], () => (null != f && null != t ? g.Ay.getMember(f, t.id) : null)),
        y = null != C ? C.collectibles?.nameplate : t.collectibles?.nameplate,
        { pendingNameplate: N } = (0, h.rv)(t, f),
        [j, R] = (0, s.useState)(() =>
            null != v
                ? v
                : void 0 !== N
                  ? N
                  : null == y
                    ? null
                    : ((0, b.zd)(r, l).find((e) => {
                          let { skuId: t } = e;
                          return t === y.skuId;
                      }) ?? null),
        ),
        T = (0, h.lw)({
            pendingValue: j,
            userValue: t?.collectibles?.nameplate,
            guildValue: C?.collectibles?.nameplate,
            guildId: f,
        }),
        { product: w, purchase: O } = (0, I.A)(j?.skuId),
        L = null != O ? (0, b.gA)(O) : (0, b.G0)(w),
        M = E.Ay.canUseCollectibles(t),
        U = void 0 === N ? j?.skuId === y?.skuId : j?.skuId === N?.skuId,
        k = (0, s.useCallback)(
            (e) => {
                m(),
                    (0, x.Cz)({
                        analyticsLocations: u,
                        analyticsSource: d.A.EDIT_NAMEPLATE_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [u, m],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(o.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: ea.wx,
                children: [
                    (0, a.jsx)(c.D, { variant: "heading-lg/semibold", children: D.intl.string(D.t.BwdeM1) }),
                    (0, a.jsx)(o.s_, { "data-migration-pending": !0, className: ea.b, onClick: m }),
                ],
            }),
            (0, a.jsxs)(o.$m, {
                "data-migration-pending": !0,
                className: ea.Qs,
                scrollbarType: "none",
                children: [
                    (0, a.jsx)(et, { currentUser: t, selectedNameplate: j, guildId: f, onSelect: R, onOpenShop: k }),
                    (0, a.jsx)(P, { user: t, guildId: f, nameplate: T }),
                ],
            }),
            (0, a.jsxs)(o.jl, {
                "data-migration-pending": !0,
                className: ea.Hx,
                children: [
                    (null != O && (!L || M)) || null === j
                        ? (0, a.jsx)(i.$, {
                              variant: "primary",
                              text: D.intl.string(D.t.Jh8fJz),
                              onClick: () => {
                                  (0, _.p)({ guildId: f, nameplate: j }), m();
                              },
                              disabled: U,
                          })
                        : null == O && (M || !L)
                          ? (0, a.jsx)(i.$, {
                                variant: "primary",
                                onClick: () => k(w?.skuId),
                                text: D.intl.string(D.t.fYfGgK),
                            })
                          : (0, a.jsx)(p.A, {
                                subscriptionTier: er.pe.TIER_2,
                                showGradient: !M,
                                textOptions: {
                                    textOverride: E.Ay.isPremium(t)
                                        ? D.intl.string(D.t.KXLX7l)
                                        : M
                                          ? D.intl.string(D.t.mr4K7D)
                                          : D.intl.string(D.t.pj0XBN),
                                },
                            }),
                    !M && L
                        ? (0, a.jsx)(A.A, { itemType: O?.type ?? w?.type, onClose: m })
                        : (0, a.jsx)(i.$, { variant: "secondary", text: D.intl.string(D.t["ETE/oC"]), onClick: m }),
                ],
            }),
        ],
    });
}
function en(e) {
    let { transitionState: t, analyticsLocations: l, onClose: r, guildId: i, initialSelectedNameplate: c } = e,
        A = (0, n.bG)([f.default], () => f.default.getCurrentUser()),
        { analyticsLocations: p } = (0, m.Ay)(l, d.A.EDIT_NAMEPLATE_MODAL),
        { categories: h, purchases: _, isFetchingCategories: g, isFetchingPurchases: E } = (0, C.Ay)(),
        x = g || (E && 0 === _.size);
    return ((0, s.useEffect)(() => {
        v.default.track(el.HAw.OPEN_MODAL, { type: el.JJy.NAMEPLATE_CUSTOMIZATION, location_stack: p });
    }, [p]),
    null == A)
        ? null
        : (0, a.jsx)(m.f5, {
              value: p,
              children: (0, a.jsx)(o.EO, {
                  transitionState: t,
                  size: x ? o.rI.DYNAMIC : o.rI.MEDIUM,
                  parentComponent: "NameplateModal",
                  "data-migration-pending": !0,
                  children: x
                      ? (0, a.jsx)(u.y, { className: ea.u1, type: u.y.Type.SPINNING_CIRCLE })
                      : (0, a.jsx)(es, {
                            currentUser: A,
                            categories: h,
                            purchases: _,
                            analyticsLocations: p,
                            guildId: i,
                            initialSelectedNameplate: c,
                            onClose: r,
                        }),
              }),
          });
}
