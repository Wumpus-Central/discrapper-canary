l.d(t, {
    default: () => N,
}),
    l(896048);
var n = l(627968),
    r = l(64700),
    i = l(311907),
    s = l(397927),
    a = l(793574),
    c = l(688810),
    o = l(979286),
    u = l(993408),
    d = l(821701),
    m = l(841702),
    p = l(571827),
    x = l(465794),
    g = l(919395),
    b = l(696451),
    A = l(287809),
    h = l(954571),
    f = l(927578),
    j = l(35950),
    y = l(272104),
    v = l(652215),
    _ = l(788868),
    O = l(985018),
    E = l(106866);

function C(e) {
    var t, l, c, m, A;
    let {
            currentUser: h,
            categories: v,
            purchases: C,
            analyticsLocations: N,
            onClose: P,
            guildId: I,
            initialSelectedNameplate: w,
        } = e,
        T = (0, i.bG)([b.Ay], () => (null != I && null != h ? b.Ay.getMember(I, h.id) : null)),
        k =
            null != T
                ? null == (l = T.collectibles)
                    ? void 0
                    : l.nameplate
                : null == (c = h.collectibles)
                  ? void 0
                  : c.nameplate,
        { pendingNameplate: S } = (0, g.rv)(h, I),
        [U, L] = (0, r.useState)(() => {
            var e;
            return null != w
                ? w
                : void 0 !== S
                  ? S
                  : null == k
                    ? null
                    : null !=
                        (e = (0, u.zd)(C, v).find((e) => {
                            let { skuId: t } = e;
                            return t === k.skuId;
                        }))
                      ? e
                      : null;
        }),
        M = (0, g.lw)({
            pendingValue: U,
            userValue: null == h || null == (m = h.collectibles) ? void 0 : m.nameplate,
            guildValue: null == T || null == (A = T.collectibles) ? void 0 : A.nameplate,
            guildId: I,
        }),
        { product: R, purchase: D } = (0, d.A)(null == U ? void 0 : U.skuId),
        H = null != D ? (0, u.gA)(D) : (0, u.G0)(R),
        G = f.Ay.canUseCollectibles(h),
        z =
            void 0 === S
                ? (null == U ? void 0 : U.skuId) === (null == k ? void 0 : k.skuId)
                : (null == U ? void 0 : U.skuId) === (null == S ? void 0 : S.skuId),
        F = (0, r.useCallback)(
            (e) => {
                P(),
                    (0, o.Cz)({
                        analyticsLocations: N,
                        analyticsSource: a.A.EDIT_NAMEPLATE_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [N, P],
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(s.rQ0, {
                "data-migration-pending": !0,
                separator: !1,
                className: E.wx,
                children: [
                    (0, n.jsx)(s.Heading, {
                        variant: "heading-lg/semibold",
                        children: O.intl.string(O.t.BwdeM1),
                    }),
                    (0, n.jsx)(s.s_y, {
                        "data-migration-pending": !0,
                        className: E.b,
                        onClick: P,
                    }),
                ],
            }),
            (0, n.jsxs)(s.$mQ, {
                "data-migration-pending": !0,
                className: E.Qs,
                scrollbarType: "none",
                children: [
                    (0, n.jsx)(y.A, {
                        currentUser: h,
                        selectedNameplate: U,
                        guildId: I,
                        onSelect: L,
                        onOpenShop: F,
                    }),
                    (0, n.jsx)(j.A, {
                        user: h,
                        guildId: I,
                        nameplate: M,
                    }),
                ],
            }),
            (0, n.jsxs)(s.jlY, {
                "data-migration-pending": !0,
                className: E.Hx,
                children: [
                    (null != D && (!H || G)) || null === U
                        ? (0, n.jsx)(s.Button, {
                              variant: "primary",
                              text: O.intl.string(O.t.Jh8fJz),
                              onClick: () => {
                                  (0, g.pX)(U, I), P();
                              },
                              disabled: z,
                          })
                        : null == D && (G || !H)
                          ? (0, n.jsx)(s.Button, {
                                variant: "primary",
                                onClick: () => F(null == R ? void 0 : R.skuId),
                                text: O.intl.string(O.t.fYfGgK),
                            })
                          : (0, n.jsx)(x.A, {
                                subscriptionTier: _.pe.TIER_2,
                                showGradient: !G,
                                textOptions: {
                                    textOverride: f.Ay.isPremium(h)
                                        ? O.intl.string(O.t.KXLX7l)
                                        : G
                                          ? O.intl.string(O.t.mr4K7D)
                                          : O.intl.string(O.t.pj0XBN),
                                },
                            }),
                    !G && H
                        ? (0, n.jsx)(p.A, {
                              itemType: null != (t = null == D ? void 0 : D.type) ? t : null == R ? void 0 : R.type,
                              onClose: P,
                          })
                        : (0, n.jsx)(s.Button, {
                              variant: "secondary",
                              text: O.intl.string(O.t["ETE/oC"]),
                              onClick: P,
                          }),
                ],
            }),
        ],
    });
}

function N(e) {
    let { transitionState: t, analyticsLocations: l, onClose: o, guildId: u, initialSelectedNameplate: d } = e,
        p = (0, i.bG)([A.default], () => A.default.getCurrentUser()),
        { analyticsLocations: x } = (0, c.Ay)(l, a.A.EDIT_NAMEPLATE_MODAL),
        { categories: g, purchases: b, isFetchingCategories: f, isFetchingPurchases: j } = (0, m.Ay)(),
        y = f || (j && 0 === b.size);
    return ((0, r.useEffect)(() => {
        h.default.track(v.HAw.OPEN_MODAL, {
            type: v.JJy.NAMEPLATE_CUSTOMIZATION,
            location_stack: x,
        });
    }, [x]),
    null == p)
        ? null
        : (0, n.jsx)(c.f5, {
              value: x,
              children: (0, n.jsx)(s.EOs, {
                  transitionState: t,
                  size: y ? s.rIJ.DYNAMIC : s.rIJ.MEDIUM,
                  parentComponent: "NameplateModal",
                  "data-migration-pending": !0,
                  children: y
                      ? (0, n.jsx)(s.y$y, {
                            className: E.u1,
                            type: s.y$y.Type.SPINNING_CIRCLE,
                        })
                      : (0, n.jsx)(C, {
                            currentUser: p,
                            categories: g,
                            purchases: b,
                            analyticsLocations: x,
                            guildId: u,
                            initialSelectedNameplate: d,
                            onClose: o,
                        }),
              }),
          });
}
