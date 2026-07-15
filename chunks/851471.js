n.d(t, { Zt: () => ee, yo: () => et });
var l,
    i = n(627968),
    r = n(64700),
    s = n(365199),
    a = n(922016),
    o = n(980707),
    u = n(477782),
    c = n(793574),
    d = n(688810),
    m = n(17928),
    x = n(540737),
    E = n(999291),
    f = n(287809),
    p = n(259464);
let g = (0, n(945810).mj)({
    name: "2026-07-shop-this-look",
    kind: "user",
    defaultConfig: { shopThisLookEnabled: !1 },
    variations: { 0: { shopThisLookEnabled: !1 }, 1: { shopThisLookEnabled: !0 } },
});
function R(e) {
    return g.useConfig({ location: e }).shopThisLookEnabled;
}
var h = n(449582);
function A(e, t) {
    let n = (0, m.bG)([f.default], () => f.default.getUser(e), [e]),
        l = (0, E.Ay)(e, t),
        i = (0, p.Z)(n, t),
        s = (0, h.r)({ user: n, guildId: t }),
        a = i?.skuId,
        o = s?.skuId,
        u = l?.profileEffect?.skuId,
        c = l?.profileFrame?.skuId;
    return r.useMemo(() => [a, o, u, c].filter((e) => null != e), [a, o, u, c]);
}
var N =
        (((l = {})[(l.SHOP = 1)] = "SHOP"),
        (l[(l.QUEST = 2)] = "QUEST"),
        (l[(l.PREMIUM_PROMOTION = 3)] = "PREMIUM_PROMOTION"),
        (l[(l.REWARD = 4)] = "REWARD"),
        (l[(l.INTERNAL = 5)] = "INTERNAL"),
        l),
    I = n(821925),
    b = n(722258),
    j = n(503698),
    v = n.n(j),
    _ = n(575593),
    O = n(834730),
    C = n(642160),
    P = n(623373),
    T = n(536572),
    S = n(14702),
    k = n(375708),
    y = n(848051);
function M(e) {
    let { skuId: t, disabled: n = !1 } = e,
        { product: l } = (0, C.I)(t, { needsCategory: !1, shouldFetchProduct: !1 }),
        r = (0, m.bG)(
            [I.A],
            () =>
                I.A.getProductsForSku(t)
                    ?.flatMap((e) => e.skus)
                    .find((e) => e.id === t),
            [t],
        );
    if (null == l) return null;
    let s = (0, P.YW)(l),
        a =
            null != s
                ? (function (e) {
                      switch (e) {
                          case _.R.AVATAR_DECORATION:
                              return k.intl.string(k.t["7v0T9P"]);
                          case _.R.PROFILE_EFFECT:
                              return k.intl.string(k.t.wR5wOo);
                          case _.R.NAMEPLATE:
                              return k.intl.string(k.t.x5CoXR);
                          case _.R.PROFILE_FRAME:
                              return k.intl.string(k.t.GWrZOd);
                          default:
                              return;
                      }
                  })(s)
                : void 0;
    return (0, i.jsxs)("div", {
        className: v()(y.nM, { [y.r9]: n }),
        children: [
            (0, i.jsx)("div", { className: y.VH, children: (0, i.jsx)(S.O, { product: l, sku: r }) }),
            (0, i.jsxs)("div", {
                className: y.Qq,
                children: [
                    (0, i.jsx)(O.E, { variant: "text-sm/medium", color: "text-default", children: (0, T.VG)(l) }),
                    null != a && (0, i.jsx)(O.E, { variant: "text-xs/normal", color: "text-subtle", children: a }),
                ],
            }),
        ],
    });
}
function U(e, t) {
    return (
        e.length === t.length && e.every((e, n) => e.skuId === t[n].skuId && e.isShoppableItem === t[n].isShoppableItem)
    );
}
var G = n(239211),
    L = n(284009),
    D = n.n(L),
    F = n(50268),
    w = n(486503),
    Q = n(885386),
    V = n(957565),
    q = n(652215),
    X = n(399476),
    B = n(889460),
    Y = n(865116),
    $ = n(928658);
let z = (0, n(600975).C)({
    kind: "user",
    id: "2023-09_iar_user_reporting",
    label: "Safety Experience IAR User Reporting",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
});
var W = n(280450),
    H = n(183555),
    K = n(993401),
    J = n(518477);
function Z(e) {
    var t;
    let n,
        l,
        { user: p, guildId: g, viewProfileItem: h, appContext: j, popoutTargetRef: v, children: _ } = e,
        { trackUserProfileAction: O } = (0, H.NJ)(),
        { analyticsLocations: C, newestAnalyticsLocation: P } = (0, d.Ay)(c.A.USER_PROFILE_OVERFLOW_MENU);
    (t = p.id),
        (n = R("useMaybeFetchEquippedCollectibleProducts")),
        (l = A(t, g)),
        r.useEffect(() => {
            n && 0 !== l.length && (0, x.tu)({ skuIds: l });
        }, [n, l]);
    let T = {
            action: J.pt.PRESS_OPTIONS,
            icon: s.j,
            tooltipText: k.intl.string(k.t["UKOtz+"]),
            "aria-label": k.intl.string(k.t["UKOtz+"]),
        },
        S = (0, B.A)({
            user: p,
            guildId: g,
            onAction: () => O({ action: "PRESS_INVITE_TO_SERVER", analyticsLocations: C }),
        }),
        y = (0, G.A)({
            user: p,
            guildId: g,
            location: P,
            appContext: j,
            onBlock: () => O({ action: "BLOCK", analyticsLocations: C }),
            onIgnore: () => O({ action: "IGNORE", analyticsLocations: C }),
            onUnblock: () => O({ action: "UNBLOCK", analyticsLocations: C }),
        }),
        L = (0, X.A)({
            user: p,
            guildId: g,
            location: P,
            appContext: j,
            onBlock: () => O({ action: "BLOCK", analyticsLocations: C }),
            onIgnore: () => O({ action: "IGNORE", analyticsLocations: C }),
            onUnignore: () => O({ action: "UNIGNORE", analyticsLocations: C }),
        }),
        K = (function (e) {
            let { user: t, guildId: n, color: l, onAction: r, location: s = c.A.CONTEXT_MENU, appContext: a } = e,
                o = z.useExperiment({ location: s }, { autoTrackExposure: !0 }).enabled,
                d = (0, m.bG)([W.default], () => W.default.getId() === t.id);
            return !o || d || t.isNonUserBot()
                ? null
                : (0, i.jsx)(u.Dr, {
                      id: "report-user",
                      color: l,
                      label: k.intl.string(k.t.A1MM3D),
                      action: () => (0, $.NW)(t, n === q.ME ? void 0 : n, r, a),
                  });
        })({
            user: p,
            guildId: g,
            location: P,
            appContext: j,
            color: "danger",
            onAction: () => O({ action: "REPORT", analyticsLocations: C }),
        }),
        Z = (function (e) {
            let { user: t, guildId: n, color: l, onAction: r, appContext: s } = e,
                a = (0, m.bG)([Y.Ay], () => Y.Ay.get("iar_testing")),
                o = (0, m.bG)([f.default], () => f.default.getCurrentUser());
            return null != o && (t.id === o.id || t.isNonUserBot() || !o.isStaff() || !a)
                ? null
                : (0, i.jsx)(u.Dr, {
                      id: "staff-test-report-user",
                      color: l,
                      label: "[STAFF] Test Profile Report",
                      action: () => (0, $.RR)(t, n === q.ME ? void 0 : n, r, s),
                  });
        })({
            user: p,
            guildId: g,
            location: P,
            appContext: j,
            color: "danger",
            onAction: () => O({ action: "REPORT", analyticsLocations: C }),
        }),
        ee = (function (e) {
            let { user: t, guildId: n, onSuccess: l } = e,
                s = (0, E.Ay)(t.id, n ?? void 0),
                a = Q.Q_.useSetting(),
                { tidaWebformEnabled: o } = w.A.useExperiment(
                    { location: "useCopyUserInfoItem" },
                    { autoTrackExposure: !1 },
                ),
                c = (0, F.A)({ id: t.id, label: k.intl.string(k.t["/AXYnE"]), onSuccess: l }),
                d = r.useMemo(() => (null == s ? null : s.getBannerURL({ canAnimate: !0, size: q.XAf })), [s]),
                m = r.useCallback(() => {
                    (0, V.C)(t.id), l?.();
                }, [t.id, l]),
                x = r.useCallback(() => {
                    let e = t.getAvatarURL(n, q.XAf, !0);
                    D()(null != e, "cannot copy null avatar URL"), (0, V.C)(e), l?.();
                }, [t, n, l]),
                f = r.useCallback(() => {
                    D()(null != d, "cannot copy null banner URL"), (0, V.C)(d), l?.();
                }, [d, l]);
            return !__OVERLAY__ && a && V.p5 && null != t.id
                ? o
                    ? (0, i.jsxs)(u.Dr, {
                          id: "copy-user-info",
                          label: k.intl.string(k.t.QvQeLv),
                          children: [
                              (0, i.jsx)(u.Dr, { id: "copy-user-id", label: k.intl.string(k.t["/AXYnE"]), action: m }),
                              (null != t.avatar || t.hasAvatarForGuild(n)) &&
                                  (0, i.jsx)(u.Dr, {
                                      id: "copy-user-avatar-link",
                                      label: k.intl.string(k.t.gERDvM),
                                      action: x,
                                  }),
                              null != d &&
                                  (0, i.jsx)(u.Dr, {
                                      id: "copy-user-banner-link",
                                      label: k.intl.string(k.t.hsNv0R),
                                      action: f,
                                  }),
                          ],
                      })
                    : c
                : null;
        })({ user: p, guildId: g, onSuccess: () => O({ action: "COPY_USER_ID", analyticsLocations: C }) }),
        et = [
            [
                h,
                (function (e, t) {
                    let n = R("UserProfileOverflowMenu"),
                        l = A(e.id, t),
                        { analyticsLocations: r } = (0, d.Ay)(c.A.USER_PROFILE_OVERFLOW_MENU),
                        s = (0, m.bG)(
                            [I.A],
                            () =>
                                l.map((e) => {
                                    let t = I.A.getProductsForSku(e)
                                        ?.flatMap((e) => e.skus)
                                        .find((t) => t.id === e);
                                    return {
                                        skuId: e,
                                        isShoppableItem:
                                            null != t &&
                                            t.isAvailable() &&
                                            t.tenantMetadata?.collectibles?.sourceType === N.SHOP,
                                    };
                                }),
                            [l],
                            U,
                        );
                    return n && 0 !== l.length
                        ? (0, i.jsx)(u.Dr, {
                              id: "shop-this-look",
                              label: k.intl.string(k.t.xNdRDO),
                              children: s.map((e) => {
                                  let { skuId: t, isShoppableItem: n } = e;
                                  return (0, i.jsx)(
                                      u.Dr,
                                      {
                                          id: `shop-this-look-${t}`,
                                          navigable: n,
                                          disabled: !n,
                                          keepItemStyles: n,
                                          render: (e) => {
                                              let { disabled: n } = e;
                                              return (0, i.jsx)(M, { skuId: t, disabled: n });
                                          },
                                          action: n
                                              ? () =>
                                                    (0, b.B)({
                                                        skuId: t,
                                                        analyticsLocations: r,
                                                        analyticsSource: c.A.USER_PROFILE_OVERFLOW_MENU,
                                                    })
                                              : void 0,
                                      },
                                      t,
                                  );
                              }),
                          })
                        : null;
                })(p, g),
                S,
            ],
            [L, y, K, Z],
            [ee],
        ];
    return et.every((e) => e.every((e) => null == e))
        ? null
        : (0, i.jsx)(d.f5, {
              value: C,
              children: (0, i.jsx)(a.Y, {
                  targetElementRef: v,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, i.jsx)(o.W, {
                          "data-menu-migrated-auto": !0,
                          navId: "user-profile-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": k.intl.string(k.t.AXIHpV),
                          children: et.map((e, t) => (0, i.jsx)(u.rX, { children: e.map((e) => e) }, t)),
                      });
                  },
                  children: (e) => _({ ...e, ...T }),
              }),
          });
}
function ee(e) {
    let t = r.useRef(null);
    return (0, i.jsx)(Z, { ...e, popoutTargetRef: t, children: (e) => (0, i.jsx)(K.q3, { buttonRef: t, ...e }) });
}
function et(e) {
    let t = r.useRef(null);
    return (0, i.jsx)(Z, { ...e, popoutTargetRef: t, children: (e) => (0, i.jsx)(K.br, { buttonRef: t, ...e }) });
}
