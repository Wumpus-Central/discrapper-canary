n.d(t, { Zt: () => et, yo: () => en });
var l,
    i = n(627968),
    r = n(64700),
    s = n(365199),
    a = n(922016),
    o = n(980707),
    c = n(477782),
    u = n(793574),
    d = n(688810),
    m = n(17928),
    x = n(540737),
    f = n(999291),
    E = n(287809),
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
function N(e, t) {
    let n = (0, m.bG)([E.default], () => E.default.getUser(e), [e]),
        l = (0, f.Ay)(e, t),
        i = (0, p.Z)(n, t),
        s = (0, h.r)({ user: n, guildId: t }),
        a = i?.skuId,
        o = s?.skuId,
        c = l?.profileEffect?.skuId,
        u = l?.profileFrame?.skuId;
    return r.useMemo(() => [a, o, c, u].filter((e) => null != e), [a, o, c, u]);
}
var A =
        (((l = {})[(l.SHOP = 1)] = "SHOP"),
        (l[(l.QUEST = 2)] = "QUEST"),
        (l[(l.PREMIUM_PROMOTION = 3)] = "PREMIUM_PROMOTION"),
        (l[(l.REWARD = 4)] = "REWARD"),
        (l[(l.INTERNAL = 5)] = "INTERNAL"),
        l),
    j = n(821925),
    I = n(722258),
    v = n(503698),
    b = n.n(v),
    _ = n(575593),
    O = n(834730),
    C = n(642160),
    P = n(623373),
    T = n(536572),
    S = n(14702),
    k = n(375708),
    y = n(848051);
function M() {
    return (0, i.jsxs)("div", {
        className: y.nM,
        "aria-hidden": !0,
        children: [
            (0, i.jsx)("div", { className: y.VH, children: (0, i.jsx)("div", { className: y.Qc }) }),
            (0, i.jsxs)("div", {
                className: b()(y.Qq, y.Um),
                children: [(0, i.jsx)("div", { className: y.Iz }), (0, i.jsx)("div", { className: y.wS })],
            }),
        ],
    });
}
function U(e) {
    let { skuId: t, disabled: n = !1 } = e,
        { product: l, state: r } = (0, C.I)(t, { needsCategory: !1, shouldFetchProduct: !1 }),
        s = (0, m.bG)(
            [j.A],
            () =>
                j.A.getProductsForSku(t)
                    ?.flatMap((e) => e.skus)
                    .find((e) => e.id === t),
            [t],
        );
    if ("loading" === r) return (0, i.jsx)(M, {});
    if (null == l) return null;
    let a = (0, P.YW)(l),
        o =
            null != a
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
                  })(a)
                : void 0;
    return (0, i.jsxs)("div", {
        className: b()(y.nM, { [y.r9]: n }),
        children: [
            (0, i.jsx)("div", { className: y.VH, children: (0, i.jsx)(S.O, { product: l, sku: s }) }),
            (0, i.jsxs)("div", {
                className: y.Qq,
                children: [
                    (0, i.jsx)(O.E, { variant: "text-sm/medium", color: "text-default", children: (0, T.VG)(l) }),
                    null != o && (0, i.jsx)(O.E, { variant: "text-xs/normal", color: "text-subtle", children: o }),
                ],
            }),
        ],
    });
}
function G(e, t) {
    return (
        e.length === t.length && e.every((e, n) => e.skuId === t[n].skuId && e.isShoppableItem === t[n].isShoppableItem)
    );
}
var L = n(239211),
    D = n(284009),
    F = n.n(D),
    Q = n(50268),
    w = n(486503),
    V = n(885386),
    q = n(957565),
    X = n(652215),
    B = n(399476),
    Y = n(889460),
    $ = n(865116),
    z = n(928658);
let W = (0, n(600975).C)({
    kind: "user",
    id: "2023-09_iar_user_reporting",
    label: "Safety Experience IAR User Reporting",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
});
var H = n(280450),
    K = n(183555),
    J = n(993401),
    Z = n(518477);
function ee(e) {
    var t;
    let n,
        l,
        { user: p, guildId: g, viewProfileItem: h, appContext: v, popoutTargetRef: b, children: _ } = e,
        { trackUserProfileAction: O } = (0, K.NJ)(),
        { analyticsLocations: C, newestAnalyticsLocation: P } = (0, d.Ay)(u.A.USER_PROFILE_OVERFLOW_MENU);
    (t = p.id),
        (n = R("useMaybeFetchEquippedCollectibleProducts")),
        (l = N(t, g)),
        r.useEffect(() => {
            n && 0 !== l.length && (0, x.tu)({ skuIds: l });
        }, [n, l]);
    let T = {
            action: Z.pt.PRESS_OPTIONS,
            icon: s.j,
            tooltipText: k.intl.string(k.t["UKOtz+"]),
            "aria-label": k.intl.string(k.t["UKOtz+"]),
        },
        S = (0, Y.A)({
            user: p,
            guildId: g,
            onAction: () => O({ action: "PRESS_INVITE_TO_SERVER", analyticsLocations: C }),
        }),
        y = (0, L.A)({
            user: p,
            guildId: g,
            location: P,
            appContext: v,
            onBlock: () => O({ action: "BLOCK", analyticsLocations: C }),
            onIgnore: () => O({ action: "IGNORE", analyticsLocations: C }),
            onUnblock: () => O({ action: "UNBLOCK", analyticsLocations: C }),
        }),
        M = (0, B.A)({
            user: p,
            guildId: g,
            location: P,
            appContext: v,
            onBlock: () => O({ action: "BLOCK", analyticsLocations: C }),
            onIgnore: () => O({ action: "IGNORE", analyticsLocations: C }),
            onUnignore: () => O({ action: "UNIGNORE", analyticsLocations: C }),
        }),
        D = (function (e) {
            let { user: t, guildId: n, color: l, onAction: r, location: s = u.A.CONTEXT_MENU, appContext: a } = e,
                o = W.useExperiment({ location: s }, { autoTrackExposure: !0 }).enabled,
                d = (0, m.bG)([H.default], () => H.default.getId() === t.id);
            return !o || d || t.isNonUserBot()
                ? null
                : (0, i.jsx)(c.Dr, {
                      id: "report-user",
                      color: l,
                      label: k.intl.string(k.t.A1MM3D),
                      action: () => (0, z.NW)(t, n === X.ME ? void 0 : n, r, a),
                  });
        })({
            user: p,
            guildId: g,
            location: P,
            appContext: v,
            color: "danger",
            onAction: () => O({ action: "REPORT", analyticsLocations: C }),
        }),
        J = (function (e) {
            let { user: t, guildId: n, color: l, onAction: r, appContext: s } = e,
                a = (0, m.bG)([$.Ay], () => $.Ay.get("iar_testing")),
                o = (0, m.bG)([E.default], () => E.default.getCurrentUser());
            return null != o && (t.id === o.id || t.isNonUserBot() || !o.isStaff() || !a)
                ? null
                : (0, i.jsx)(c.Dr, {
                      id: "staff-test-report-user",
                      color: l,
                      label: "[STAFF] Test Profile Report",
                      action: () => (0, z.RR)(t, n === X.ME ? void 0 : n, r, s),
                  });
        })({
            user: p,
            guildId: g,
            location: P,
            appContext: v,
            color: "danger",
            onAction: () => O({ action: "REPORT", analyticsLocations: C }),
        }),
        ee = (function (e) {
            let { user: t, guildId: n, onSuccess: l } = e,
                s = (0, f.Ay)(t.id, n ?? void 0),
                a = V.Q_.useSetting(),
                { tidaWebformEnabled: o } = w.A.useExperiment(
                    { location: "useCopyUserInfoItem" },
                    { autoTrackExposure: !1 },
                ),
                u = (0, Q.A)({ id: t.id, label: k.intl.string(k.t["/AXYnE"]), onSuccess: l }),
                d = r.useMemo(() => (null == s ? null : s.getBannerURL({ canAnimate: !0, size: X.XAf })), [s]),
                m = r.useCallback(() => {
                    (0, q.C)(t.id), l?.();
                }, [t.id, l]),
                x = r.useCallback(() => {
                    let e = t.getAvatarURL(n, X.XAf, !0);
                    F()(null != e, "cannot copy null avatar URL"), (0, q.C)(e), l?.();
                }, [t, n, l]),
                E = r.useCallback(() => {
                    F()(null != d, "cannot copy null banner URL"), (0, q.C)(d), l?.();
                }, [d, l]);
            return !__OVERLAY__ && a && q.p5 && null != t.id
                ? o
                    ? (0, i.jsxs)(c.Dr, {
                          id: "copy-user-info",
                          label: k.intl.string(k.t.QvQeLv),
                          children: [
                              (0, i.jsx)(c.Dr, { id: "copy-user-id", label: k.intl.string(k.t["/AXYnE"]), action: m }),
                              (null != t.avatar || t.hasAvatarForGuild(n)) &&
                                  (0, i.jsx)(c.Dr, {
                                      id: "copy-user-avatar-link",
                                      label: k.intl.string(k.t.gERDvM),
                                      action: x,
                                  }),
                              null != d &&
                                  (0, i.jsx)(c.Dr, {
                                      id: "copy-user-banner-link",
                                      label: k.intl.string(k.t.hsNv0R),
                                      action: E,
                                  }),
                          ],
                      })
                    : u
                : null;
        })({ user: p, guildId: g, onSuccess: () => O({ action: "COPY_USER_ID", analyticsLocations: C }) }),
        et = [
            [
                h,
                (function (e, t) {
                    let n = R("UserProfileOverflowMenu"),
                        l = N(e.id, t),
                        { analyticsLocations: r } = (0, d.Ay)(u.A.USER_PROFILE_OVERFLOW_MENU),
                        s = (0, m.bG)(
                            [j.A],
                            () =>
                                l.map((e) => {
                                    let t = j.A.getProductsForSku(e)
                                        ?.flatMap((e) => e.skus)
                                        .find((t) => t.id === e);
                                    return {
                                        skuId: e,
                                        isShoppableItem:
                                            null != t &&
                                            t.isAvailable() &&
                                            t.tenantMetadata?.collectibles?.sourceType === A.SHOP,
                                    };
                                }),
                            [l],
                            G,
                        );
                    return n && 0 !== l.length
                        ? (0, i.jsx)(c.Dr, {
                              id: "shop-this-look",
                              label: k.intl.string(k.t.xNdRDO),
                              children: s.map((e) => {
                                  let { skuId: t, isShoppableItem: n } = e;
                                  return (0, i.jsx)(
                                      c.Dr,
                                      {
                                          id: `shop-this-look-${t}`,
                                          navigable: n,
                                          disabled: !n,
                                          keepItemStyles: n,
                                          render: (e) => {
                                              let { disabled: n } = e;
                                              return (0, i.jsx)(U, { skuId: t, disabled: n });
                                          },
                                          action: n
                                              ? () =>
                                                    (0, I.B)({
                                                        skuId: t,
                                                        analyticsLocations: r,
                                                        analyticsSource: u.A.USER_PROFILE_OVERFLOW_MENU,
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
            [M, y, D, J],
            [ee],
        ];
    return et.every((e) => e.every((e) => null == e))
        ? null
        : (0, i.jsx)(d.f5, {
              value: C,
              children: (0, i.jsx)(a.Y, {
                  targetElementRef: b,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, i.jsx)(o.W, {
                          "data-menu-migrated-auto": !0,
                          navId: "user-profile-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": k.intl.string(k.t.AXIHpV),
                          children: et.map((e, t) => (0, i.jsx)(c.rX, { children: e.map((e) => e) }, t)),
                      });
                  },
                  children: (e) => _({ ...e, ...T }),
              }),
          });
}
function et(e) {
    let t = r.useRef(null);
    return (0, i.jsx)(ee, { ...e, popoutTargetRef: t, children: (e) => (0, i.jsx)(J.q3, { buttonRef: t, ...e }) });
}
function en(e) {
    let t = r.useRef(null);
    return (0, i.jsx)(ee, { ...e, popoutTargetRef: t, children: (e) => (0, i.jsx)(J.br, { buttonRef: t, ...e }) });
}
