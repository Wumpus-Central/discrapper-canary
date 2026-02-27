l.d(t, { default: () => T });
var s = l(627968),
    n = l(64700),
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
    h = l(696451),
    _ = l(287809),
    g = l(954571),
    j = l(927578),
    y = l(35950),
    C = l(272104),
    v = l(652215),
    E = l(788868),
    N = l(985018),
    I = l(106866);
function b(e) {
    let {
            currentUser: t,
            categories: l,
            purchases: c,
            analyticsLocations: m,
            onClose: _,
            guildId: g,
            initialSelectedNameplate: v,
        } = e,
        b = (0, i.bG)([h.Ay], () => (null != g && null != t ? h.Ay.getMember(g, t.id) : null)),
        T = null != b ? b.collectibles?.nameplate : t.collectibles?.nameplate,
        { pendingNameplate: f } = (0, A.rv)(t, g),
        [w, P] = (0, n.useState)(() =>
            null != v
                ? v
                : void 0 !== f
                  ? f
                  : null == T
                    ? null
                    : ((0, u.zd)(c, l).find((e) => {
                          let { skuId: t } = e;
                          return t === T.skuId;
                      }) ?? null),
        ),
        U = (0, A.lw)({
            pendingValue: w,
            userValue: t?.collectibles?.nameplate,
            guildValue: b?.collectibles?.nameplate,
            guildId: g,
        }),
        { product: k, purchase: O } = (0, d.A)(w?.skuId),
        S = null != O ? (0, u.gA)(O) : (0, u.G0)(k),
        L = j.Ay.canUseCollectibles(t),
        R = void 0 === f ? w?.skuId === T?.skuId : w?.skuId === f?.skuId,
        M = (0, n.useCallback)(
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
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(r.rQ0, {
                "data-migration-pending": !0,
                separator: !1,
                className: I.wx,
                children: [
                    (0, s.jsx)(r.Heading, { variant: "heading-lg/semibold", children: N.intl.string(N.t.BwdeM1) }),
                    (0, s.jsx)(r.s_y, { "data-migration-pending": !0, className: I.b, onClick: _ }),
                ],
            }),
            (0, s.jsxs)(r.$mQ, {
                "data-migration-pending": !0,
                className: I.Qs,
                scrollbarType: "none",
                children: [
                    (0, s.jsx)(C.A, { currentUser: t, selectedNameplate: w, guildId: g, onSelect: P, onOpenShop: M }),
                    (0, s.jsx)(y.A, { user: t, guildId: g, nameplate: U }),
                ],
            }),
            (0, s.jsxs)(r.jlY, {
                "data-migration-pending": !0,
                className: I.Hx,
                children: [
                    (null != O && (!S || L)) || null === w
                        ? (0, s.jsx)(r.Button, {
                              variant: "primary",
                              text: N.intl.string(N.t.Jh8fJz),
                              onClick: () => {
                                  (0, A.pX)(w, g), _();
                              },
                              disabled: R,
                          })
                        : null == O && (L || !S)
                          ? (0, s.jsx)(r.Button, {
                                variant: "primary",
                                onClick: () => M(k?.skuId),
                                text: N.intl.string(N.t.fYfGgK),
                            })
                          : (0, s.jsx)(x.A, {
                                subscriptionTier: E.pe.TIER_2,
                                showGradient: !L,
                                textOptions: {
                                    textOverride: j.Ay.isPremium(t)
                                        ? N.intl.string(N.t.KXLX7l)
                                        : L
                                          ? N.intl.string(N.t.mr4K7D)
                                          : N.intl.string(N.t.pj0XBN),
                                },
                            }),
                    !L && S
                        ? (0, s.jsx)(p.A, { itemType: O?.type ?? k?.type, onClose: _ })
                        : (0, s.jsx)(r.Button, {
                              variant: "secondary",
                              text: N.intl.string(N.t["ETE/oC"]),
                              onClick: _,
                          }),
                ],
            }),
        ],
    });
}
function T(e) {
    let { transitionState: t, analyticsLocations: l, onClose: o, guildId: u, initialSelectedNameplate: d } = e,
        p = (0, i.bG)([_.default], () => _.default.getCurrentUser()),
        { analyticsLocations: x } = (0, c.Ay)(l, a.A.EDIT_NAMEPLATE_MODAL),
        { categories: A, purchases: h, isFetchingCategories: j, isFetchingPurchases: y } = (0, m.Ay)(),
        C = j || (y && 0 === h.size);
    return ((0, n.useEffect)(() => {
        g.default.track(v.HAw.OPEN_MODAL, { type: v.JJy.NAMEPLATE_CUSTOMIZATION, location_stack: x });
    }, [x]),
    null == p)
        ? null
        : (0, s.jsx)(c.f5, {
              value: x,
              children: (0, s.jsx)(r.EOs, {
                  transitionState: t,
                  size: C ? r.rIJ.DYNAMIC : r.rIJ.MEDIUM,
                  parentComponent: "NameplateModal",
                  "data-migration-pending": !0,
                  children: C
                      ? (0, s.jsx)(r.y$y, { className: I.u1, type: r.y$y.Type.SPINNING_CIRCLE })
                      : (0, s.jsx)(b, {
                            currentUser: p,
                            categories: A,
                            purchases: h,
                            analyticsLocations: x,
                            guildId: u,
                            initialSelectedNameplate: d,
                            onClose: o,
                        }),
              }),
          });
}
