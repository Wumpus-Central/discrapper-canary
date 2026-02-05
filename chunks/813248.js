n.d(t, { default: () => f });
var l = n(627968),
    i = n(64700),
    s = n(311907),
    r = n(397927),
    a = n(793574),
    c = n(688810),
    o = n(979286),
    u = n(993408),
    d = n(821701),
    m = n(841702),
    p = n(571827),
    x = n(465794),
    A = n(919395),
    g = n(696451),
    h = n(287809),
    _ = n(954571),
    j = n(927578),
    y = n(35950),
    C = n(272104),
    E = n(652215),
    v = n(788868),
    b = n(985018),
    T = n(106866);
function I(e) {
    let {
            currentUser: t,
            categories: n,
            purchases: c,
            analyticsLocations: m,
            onClose: h,
            guildId: _,
            initialSelectedNameplate: E,
        } = e,
        I = (0, s.bG)([g.Ay], () => (null != _ && null != t ? g.Ay.getMember(_, t.id) : null)),
        f = null != I ? I.collectibles?.nameplate : t.collectibles?.nameplate,
        { pendingNameplate: N } = (0, A.rv)(t, _),
        [k, w] = (0, i.useState)(() =>
            null != E
                ? E
                : void 0 !== N
                  ? N
                  : null == f
                    ? null
                    : ((0, u.zd)(c, n).find((e) => {
                          let { skuId: t } = e;
                          return t === f.skuId;
                      }) ?? null),
        ),
        P = (0, A.lw)({
            pendingValue: k,
            userValue: t?.collectibles?.nameplate,
            guildValue: I?.collectibles?.nameplate,
            guildId: _,
        }),
        { product: U, purchase: L } = (0, d.A)(k?.skuId),
        O = null != L ? (0, u.gA)(L) : (0, u.G0)(U),
        S = j.Ay.canUseCollectibles(t),
        M = void 0 === N ? k?.skuId === f?.skuId : k?.skuId === N?.skuId,
        R = (0, i.useCallback)(
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
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(r.rQ0, {
                "data-migration-pending": !0,
                separator: !1,
                className: T.wx,
                children: [
                    (0, l.jsx)(r.Heading, { variant: "heading-lg/semibold", children: b.intl.string(b.t.BwdeM1) }),
                    (0, l.jsx)(r.s_y, { "data-migration-pending": !0, className: T.b, onClick: h }),
                ],
            }),
            (0, l.jsxs)(r.$mQ, {
                "data-migration-pending": !0,
                className: T.Qs,
                scrollbarType: "none",
                children: [
                    (0, l.jsx)(C.A, { currentUser: t, selectedNameplate: k, guildId: _, onSelect: w, onOpenShop: R }),
                    (0, l.jsx)(y.A, { user: t, guildId: _, nameplate: P }),
                ],
            }),
            (0, l.jsxs)(r.jlY, {
                "data-migration-pending": !0,
                className: T.Hx,
                children: [
                    (null != L && (!O || S)) || null === k
                        ? (0, l.jsx)(r.Button, {
                              variant: "primary",
                              text: b.intl.string(b.t.Jh8fJz),
                              onClick: () => {
                                  (0, A.pX)(k, _), h();
                              },
                              disabled: M,
                          })
                        : null == L && (S || !O)
                          ? (0, l.jsx)(r.Button, {
                                variant: "primary",
                                onClick: () => R(U?.skuId),
                                text: b.intl.string(b.t.fYfGgK),
                            })
                          : (0, l.jsx)(x.A, {
                                subscriptionTier: v.pe.TIER_2,
                                showGradient: !S,
                                textOptions: {
                                    textOverride: j.Ay.isPremium(t)
                                        ? b.intl.string(b.t.KXLX7l)
                                        : S
                                          ? b.intl.string(b.t.mr4K7D)
                                          : b.intl.string(b.t.pj0XBN),
                                },
                            }),
                    !S && O
                        ? (0, l.jsx)(p.A, { itemType: L?.type ?? U?.type, onClose: h })
                        : (0, l.jsx)(r.Button, {
                              variant: "secondary",
                              text: b.intl.string(b.t["ETE/oC"]),
                              onClick: h,
                          }),
                ],
            }),
        ],
    });
}
function f(e) {
    let { transitionState: t, analyticsLocations: n, onClose: o, guildId: u, initialSelectedNameplate: d } = e,
        p = (0, s.bG)([h.default], () => h.default.getCurrentUser()),
        { analyticsLocations: x } = (0, c.Ay)(n, a.A.EDIT_NAMEPLATE_MODAL),
        { categories: A, purchases: g, isFetchingCategories: j, isFetchingPurchases: y } = (0, m.Ay)(),
        C = j || (y && 0 === g.size);
    return ((0, i.useEffect)(() => {
        _.default.track(E.HAw.OPEN_MODAL, { type: E.JJy.NAMEPLATE_CUSTOMIZATION, location_stack: x });
    }, [x]),
    null == p)
        ? null
        : (0, l.jsx)(c.f5, {
              value: x,
              children: (0, l.jsx)(r.EOs, {
                  transitionState: t,
                  size: C ? r.rIJ.DYNAMIC : r.rIJ.MEDIUM,
                  parentComponent: "NameplateModal",
                  "data-migration-pending": !0,
                  children: C
                      ? (0, l.jsx)(r.y$y, { className: T.u1, type: r.y$y.Type.SPINNING_CIRCLE })
                      : (0, l.jsx)(I, {
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
