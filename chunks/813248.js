l.d(t, { default: () => b });
var n = l(627968),
    s = l(64700),
    i = l(311907),
    r = l(397927),
    a = l(793574),
    c = l(688810),
    o = l(979286),
    u = l(993408),
    d = l(821701),
    m = l(841702),
    p = l(571827),
    x = l(465794),
    A = l(919395),
    g = l(696451),
    h = l(287809),
    _ = l(954571),
    j = l(927578),
    y = l(35950),
    C = l(272104),
    v = l(652215),
    E = l(788868),
    I = l(985018),
    T = l(106866);
function N(e) {
    let {
            currentUser: t,
            categories: l,
            purchases: c,
            analyticsLocations: m,
            onClose: h,
            guildId: _,
            initialSelectedNameplate: v,
        } = e,
        N = (0, i.bG)([g.Ay], () => (null != _ && null != t ? g.Ay.getMember(_, t.id) : null)),
        b = null != N ? N.collectibles?.nameplate : t.collectibles?.nameplate,
        { pendingNameplate: f } = (0, A.rv)(t, _),
        [w, P] = (0, s.useState)(() =>
            null != v
                ? v
                : void 0 !== f
                  ? f
                  : null == b
                    ? null
                    : ((0, u.zd)(c, l).find((e) => {
                          let { skuId: t } = e;
                          return t === b.skuId;
                      }) ?? null),
        ),
        k = (0, A.lw)({
            pendingValue: w,
            userValue: t?.collectibles?.nameplate,
            guildValue: N?.collectibles?.nameplate,
            guildId: _,
        }),
        { product: U, purchase: L } = (0, d.A)(w?.skuId),
        O = null != L ? (0, u.gA)(L) : (0, u.G0)(U),
        S = j.Ay.canUseCollectibles(t),
        M = void 0 === f ? w?.skuId === b?.skuId : w?.skuId === f?.skuId,
        R = (0, s.useCallback)(
            (e) => {
                h(),
                    (0, o.Cz)({
                        analyticsLocations: m,
                        analyticsSource: a.A.EDIT_NAMEPLATE_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [m, h],
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(r.rQ0, {
                "data-migration-pending": !0,
                separator: !1,
                className: T.wx,
                children: [
                    (0, n.jsx)(r.Heading, { variant: "heading-lg/semibold", children: I.intl.string(I.t.BwdeM1) }),
                    (0, n.jsx)(r.s_y, { "data-migration-pending": !0, className: T.b, onClick: h }),
                ],
            }),
            (0, n.jsxs)(r.$mQ, {
                "data-migration-pending": !0,
                className: T.Qs,
                scrollbarType: "none",
                children: [
                    (0, n.jsx)(C.A, { currentUser: t, selectedNameplate: w, guildId: _, onSelect: P, onOpenShop: R }),
                    (0, n.jsx)(y.A, { user: t, guildId: _, nameplate: k }),
                ],
            }),
            (0, n.jsxs)(r.jlY, {
                "data-migration-pending": !0,
                className: T.Hx,
                children: [
                    (null != L && (!O || S)) || null === w
                        ? (0, n.jsx)(r.Button, {
                              variant: "primary",
                              text: I.intl.string(I.t.Jh8fJz),
                              onClick: () => {
                                  (0, A.pX)(w, _), h();
                              },
                              disabled: M,
                          })
                        : null == L && (S || !O)
                          ? (0, n.jsx)(r.Button, {
                                variant: "primary",
                                onClick: () => R(U?.skuId),
                                text: I.intl.string(I.t.fYfGgK),
                            })
                          : (0, n.jsx)(x.A, {
                                subscriptionTier: E.pe.TIER_2,
                                showGradient: !S,
                                textOptions: {
                                    textOverride: j.Ay.isPremium(t)
                                        ? I.intl.string(I.t.KXLX7l)
                                        : S
                                          ? I.intl.string(I.t.mr4K7D)
                                          : I.intl.string(I.t.pj0XBN),
                                },
                            }),
                    !S && O
                        ? (0, n.jsx)(p.A, { itemType: L?.type ?? U?.type, onClose: h })
                        : (0, n.jsx)(r.Button, {
                              variant: "secondary",
                              text: I.intl.string(I.t["ETE/oC"]),
                              onClick: h,
                          }),
                ],
            }),
        ],
    });
}
function b(e) {
    let { transitionState: t, analyticsLocations: l, onClose: o, guildId: u, initialSelectedNameplate: d } = e,
        p = (0, i.bG)([h.default], () => h.default.getCurrentUser()),
        { analyticsLocations: x } = (0, c.Ay)(l, a.A.EDIT_NAMEPLATE_MODAL),
        { categories: A, purchases: g, isFetchingCategories: j, isFetchingPurchases: y } = (0, m.Ay)(),
        C = j || (y && 0 === g.size);
    return ((0, s.useEffect)(() => {
        _.default.track(v.HAw.OPEN_MODAL, { type: v.JJy.NAMEPLATE_CUSTOMIZATION, location_stack: x });
    }, [x]),
    null == p)
        ? null
        : (0, n.jsx)(c.f5, {
              value: x,
              children: (0, n.jsx)(r.EOs, {
                  transitionState: t,
                  size: C ? r.rIJ.DYNAMIC : r.rIJ.MEDIUM,
                  parentComponent: "NameplateModal",
                  "data-migration-pending": !0,
                  children: C
                      ? (0, n.jsx)(r.y$y, { className: T.u1, type: r.y$y.Type.SPINNING_CIRCLE })
                      : (0, n.jsx)(N, {
                            currentUser: p,
                            categories: A,
                            purchases: g,
                            analyticsLocations: x,
                            guildId: u,
                            initialSelectedNameplate: d,
                            onClose: o,
                        }),
              }),
          });
}
