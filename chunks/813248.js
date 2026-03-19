l.d(t, { default: () => f });
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
    g = l(84540),
    h = l(696451),
    _ = l(287809),
    j = l(954571),
    y = l(927578),
    C = l(35950),
    v = l(272104),
    E = l(652215),
    I = l(788868),
    T = l(985018),
    N = l(24244);
function b(e) {
    let {
            currentUser: t,
            categories: l,
            purchases: c,
            analyticsLocations: m,
            onClose: _,
            guildId: j,
            initialSelectedNameplate: E,
        } = e,
        b = (0, i.bG)([h.Ay], () => (null != j && null != t ? h.Ay.getMember(j, t.id) : null)),
        f = null != b ? b.collectibles?.nameplate : t.collectibles?.nameplate,
        { pendingNameplate: w } = (0, A.rv)(t, j),
        [P, k] = (0, s.useState)(() =>
            null != E
                ? E
                : void 0 !== w
                  ? w
                  : null == f
                    ? null
                    : ((0, u.zd)(c, l).find((e) => {
                          let { skuId: t } = e;
                          return t === f.skuId;
                      }) ?? null),
        ),
        U = (0, A.lw)({
            pendingValue: P,
            userValue: t?.collectibles?.nameplate,
            guildValue: b?.collectibles?.nameplate,
            guildId: j,
        }),
        { product: L, purchase: O } = (0, d.A)(P?.skuId),
        S = null != O ? (0, u.gA)(O) : (0, u.G0)(L),
        M = y.Ay.canUseCollectibles(t),
        R = void 0 === w ? P?.skuId === f?.skuId : P?.skuId === w?.skuId,
        D = (0, s.useCallback)(
            (e) => {
                _(),
                    (0, o.Cz)({
                        analyticsLocations: m,
                        analyticsSource: a.A.EDIT_NAMEPLATE_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [m, _],
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(r.rQ0, {
                "data-migration-pending": !0,
                separator: !1,
                className: N.wx,
                children: [
                    (0, n.jsx)(r.Heading, { variant: "heading-lg/semibold", children: T.intl.string(T.t.BwdeM1) }),
                    (0, n.jsx)(r.s_y, { "data-migration-pending": !0, className: N.b, onClick: _ }),
                ],
            }),
            (0, n.jsxs)(r.$mQ, {
                "data-migration-pending": !0,
                className: N.Qs,
                scrollbarType: "none",
                children: [
                    (0, n.jsx)(v.A, { currentUser: t, selectedNameplate: P, guildId: j, onSelect: k, onOpenShop: D }),
                    (0, n.jsx)(C.A, { user: t, guildId: j, nameplate: U }),
                ],
            }),
            (0, n.jsxs)(r.jlY, {
                "data-migration-pending": !0,
                className: N.Hx,
                children: [
                    (null != O && (!S || M)) || null === P
                        ? (0, n.jsx)(r.Button, {
                              variant: "primary",
                              text: T.intl.string(T.t.Jh8fJz),
                              onClick: () => {
                                  (0, g.p)({ guildId: j, nameplate: P }), _();
                              },
                              disabled: R,
                          })
                        : null == O && (M || !S)
                          ? (0, n.jsx)(r.Button, {
                                variant: "primary",
                                onClick: () => D(L?.skuId),
                                text: T.intl.string(T.t.fYfGgK),
                            })
                          : (0, n.jsx)(x.A, {
                                subscriptionTier: I.pe.TIER_2,
                                showGradient: !M,
                                textOptions: {
                                    textOverride: y.Ay.isPremium(t)
                                        ? T.intl.string(T.t.KXLX7l)
                                        : M
                                          ? T.intl.string(T.t.mr4K7D)
                                          : T.intl.string(T.t.pj0XBN),
                                },
                            }),
                    !M && S
                        ? (0, n.jsx)(p.A, { itemType: O?.type ?? L?.type, onClose: _ })
                        : (0, n.jsx)(r.Button, {
                              variant: "secondary",
                              text: T.intl.string(T.t["ETE/oC"]),
                              onClick: _,
                          }),
                ],
            }),
        ],
    });
}
function f(e) {
    let { transitionState: t, analyticsLocations: l, onClose: o, guildId: u, initialSelectedNameplate: d } = e,
        p = (0, i.bG)([_.default], () => _.default.getCurrentUser()),
        { analyticsLocations: x } = (0, c.Ay)(l, a.A.EDIT_NAMEPLATE_MODAL),
        { categories: A, purchases: g, isFetchingCategories: h, isFetchingPurchases: y } = (0, m.Ay)(),
        C = h || (y && 0 === g.size);
    return ((0, s.useEffect)(() => {
        j.default.track(E.HAw.OPEN_MODAL, { type: E.JJy.NAMEPLATE_CUSTOMIZATION, location_stack: x });
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
                      ? (0, n.jsx)(r.y$y, { className: N.u1, type: r.y$y.Type.SPINNING_CIRCLE })
                      : (0, n.jsx)(b, {
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
