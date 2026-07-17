n.d(t, { Zt: () => eu, yo: () => ed });
var i,
    l = n(627968),
    s = n(64700),
    r = n(365199),
    a = n(922016),
    o = n(980707),
    c = n(477782),
    u = n(793574),
    d = n(688810),
    m = n(17928),
    x = n(540737),
    f = n(999291),
    E = n(287809),
    g = n(259464);
let p = (0, n(945810).mj)({
    name: "2026-07-shop-this-look",
    kind: "user",
    defaultConfig: { shopThisLookEnabled: !1 },
    variations: { 0: { shopThisLookEnabled: !1 }, 1: { shopThisLookEnabled: !0 } },
});
function h(e) {
    return p.useConfig({ location: e }).shopThisLookEnabled;
}
var R = n(449582);
function A(e, t) {
    let n = (0, m.bG)([E.default], () => E.default.getUser(e), [e]),
        i = (0, f.Ay)(e, t),
        l = (0, g.Z)(n, t),
        r = (0, R.r)({ user: n, guildId: t }),
        a = l?.skuId,
        o = r?.skuId,
        c = i?.profileEffect?.skuId,
        u = i?.profileFrame?.skuId;
    return s.useMemo(() => [a, o, c, u].filter((e) => null != e), [a, o, c, u]);
}
var N = n(43105),
    I = n(554146),
    v = n(131607);
function j(e, t, n) {
    let i = h("UserProfileMarketing"),
        l = A(e, t),
        s = n && i && l.length > 0,
        [r, a] = (0, v.kn)(s ? [I.M.SHOP_THIS_LOOK_WEB_MARKETING] : [], void 0, !0);
    return { isVisible: null != r, markAsDismissed: a };
}
var b = n(49999),
    _ = n(375708);
function O(e) {
    let { user: t, guildId: n, shouldShow: i, targetElementRef: r, onClick: a } = e,
        { isVisible: o, markAsDismissed: c } = j(t.id, n, i);
    return (s.useEffect(() => {
        if (o) return () => c(b.i.AUTO_DISMISS);
    }, [o, c]),
    o)
        ? (0, l.jsx)(N.A, {
              badge: "beta",
              graphic: {
                  type: "image",
                  src: "https://cdn.discordapp.com/assets/content/53479e419144f256349c4d0ed3e3835a2085325c222c536614fa96097e660afe.svg",
              },
              title: _.intl.string(_.t.TrOccu),
              body: _.intl.string(_.t["Eh5+1F"]),
              position: "right",
              alignmentStrategy: "edge",
              align: "top",
              caretConfig: { align: "start" },
              targetElementRef: r,
              onRequestClose: () => c(b.i.USER_DISMISS),
              actions: [
                  {
                      text: _.intl.string(_.t["bqZVd/"]),
                      variant: "primary",
                      onClick: () => {
                          c(b.i.TAKE_ACTION), a();
                      },
                  },
              ],
          })
        : null;
}
var S =
        (((i = {})[(i.SHOP = 1)] = "SHOP"),
        (i[(i.QUEST = 2)] = "QUEST"),
        (i[(i.PREMIUM_PROMOTION = 3)] = "PREMIUM_PROMOTION"),
        (i[(i.REWARD = 4)] = "REWARD"),
        (i[(i.INTERNAL = 5)] = "INTERNAL"),
        i),
    C = n(821925),
    T = n(722258),
    P = n(503698),
    k = n.n(P),
    y = n(575593),
    M = n(834730),
    U = n(642160),
    G = n(623373),
    L = n(536572),
    D = n(14702),
    F = n(848051);
function q() {
    return (0, l.jsxs)("div", {
        className: F.nM,
        "aria-hidden": !0,
        children: [
            (0, l.jsx)("div", { className: F.VH, children: (0, l.jsx)("div", { className: F.Qc }) }),
            (0, l.jsxs)("div", {
                className: k()(F.Qq, F.Um),
                children: [(0, l.jsx)("div", { className: F.Iz }), (0, l.jsx)("div", { className: F.wS })],
            }),
        ],
    });
}
function w(e) {
    let { skuId: t, disabled: n = !1 } = e,
        { product: i, state: s } = (0, U.I)(t, { needsCategory: !1, shouldFetchProduct: !1 }),
        r = (0, m.bG)(
            [C.A],
            () =>
                C.A.getProductsForSku(t)
                    ?.flatMap((e) => e.skus)
                    .find((e) => e.id === t),
            [t],
        );
    if ("loading" === s) return (0, l.jsx)(q, {});
    if (null == i) return null;
    let a = (0, G.YW)(i),
        o =
            null != a
                ? (function (e) {
                      switch (e) {
                          case y.R.AVATAR_DECORATION:
                              return _.intl.string(_.t["7v0T9P"]);
                          case y.R.PROFILE_EFFECT:
                              return _.intl.string(_.t.wR5wOo);
                          case y.R.NAMEPLATE:
                              return _.intl.string(_.t.x5CoXR);
                          case y.R.PROFILE_FRAME:
                              return _.intl.string(_.t.GWrZOd);
                          default:
                              return;
                      }
                  })(a)
                : void 0;
    return (0, l.jsxs)("div", {
        className: k()(F.nM, { [F.r9]: n }),
        children: [
            (0, l.jsx)("div", { className: F.VH, children: (0, l.jsx)(D.O, { product: i, sku: r }) }),
            (0, l.jsxs)("div", {
                className: F.Qq,
                children: [
                    (0, l.jsx)(M.E, { variant: "text-sm/medium", color: "text-default", children: (0, L.VG)(i) }),
                    null != o && (0, l.jsx)(M.E, { variant: "text-xs/normal", color: "text-subtle", children: o }),
                ],
            }),
        ],
    });
}
function V(e, t) {
    return (
        e.length === t.length && e.every((e, n) => e.skuId === t[n].skuId && e.isShoppableItem === t[n].isShoppableItem)
    );
}
var Q = n(239211),
    B = n(284009),
    X = n.n(B),
    Y = n(50268),
    $ = n(486503),
    z = n(885386),
    W = n(957565),
    K = n(652215),
    H = n(399476),
    Z = n(889460),
    J = n(865116),
    ee = n(928658);
let et = (0, n(600975).C)({
    kind: "user",
    id: "2023-09_iar_user_reporting",
    label: "Safety Experience IAR User Reporting",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
});
var en = n(280450),
    ei = n(183555),
    el = n(939496),
    es = n(993401),
    er = n(518477),
    ea = n(996988),
    eo = n(283624);
function ec(e) {
    var t;
    let n,
        i,
        {
            user: g,
            guildId: p,
            viewProfileItem: R,
            appContext: N,
            popoutTargetRef: I,
            shouldShow: v,
            onRequestOpen: j,
            onRequestClose: b,
            children: O,
        } = e,
        { trackUserProfileAction: P } = (0, ei.NJ)(),
        { analyticsLocations: k, newestAnalyticsLocation: y } = (0, d.Ay)(u.A.USER_PROFILE_OVERFLOW_MENU);
    (t = g.id),
        (n = h("useMaybeFetchEquippedCollectibleProducts")),
        (i = A(t, p)),
        s.useEffect(() => {
            n && 0 !== i.length && (0, x.tu)({ skuIds: i });
        }, [n, i]);
    let M = {
            action: er.pt.PRESS_OPTIONS,
            icon: r.j,
            tooltipText: _.intl.string(_.t["UKOtz+"]),
            "aria-label": _.intl.string(_.t["UKOtz+"]),
        },
        U = (0, Z.A)({
            user: g,
            guildId: p,
            onAction: () => P({ action: "PRESS_INVITE_TO_SERVER", analyticsLocations: k }),
        }),
        G = (0, Q.A)({
            user: g,
            guildId: p,
            location: y,
            appContext: N,
            onBlock: () => P({ action: "BLOCK", analyticsLocations: k }),
            onIgnore: () => P({ action: "IGNORE", analyticsLocations: k }),
            onUnblock: () => P({ action: "UNBLOCK", analyticsLocations: k }),
        }),
        L = (0, H.A)({
            user: g,
            guildId: p,
            location: y,
            appContext: N,
            onBlock: () => P({ action: "BLOCK", analyticsLocations: k }),
            onIgnore: () => P({ action: "IGNORE", analyticsLocations: k }),
            onUnignore: () => P({ action: "UNIGNORE", analyticsLocations: k }),
        }),
        D = (function (e) {
            let { user: t, guildId: n, color: i, onAction: s, location: r = u.A.CONTEXT_MENU, appContext: a } = e,
                o = et.useExperiment({ location: r }, { autoTrackExposure: !0 }).enabled,
                d = (0, m.bG)([en.default], () => en.default.getId() === t.id);
            return !o || d || t.isNonUserBot()
                ? null
                : (0, l.jsx)(c.Dr, {
                      id: "report-user",
                      color: i,
                      label: _.intl.string(_.t.A1MM3D),
                      action: () => (0, ee.NW)(t, n === K.ME ? void 0 : n, s, a),
                  });
        })({
            user: g,
            guildId: p,
            location: y,
            appContext: N,
            color: "danger",
            onAction: () => P({ action: "REPORT", analyticsLocations: k }),
        }),
        F = (function (e) {
            let { user: t, guildId: n, color: i, onAction: s, appContext: r } = e,
                a = (0, m.bG)([J.Ay], () => J.Ay.get("iar_testing")),
                o = (0, m.bG)([E.default], () => E.default.getCurrentUser());
            return null != o && (t.id === o.id || t.isNonUserBot() || !o.isStaff() || !a)
                ? null
                : (0, l.jsx)(c.Dr, {
                      id: "staff-test-report-user",
                      color: i,
                      label: "[STAFF] Test Profile Report",
                      action: () => (0, ee.RR)(t, n === K.ME ? void 0 : n, s, r),
                  });
        })({
            user: g,
            guildId: p,
            location: y,
            appContext: N,
            color: "danger",
            onAction: () => P({ action: "REPORT", analyticsLocations: k }),
        }),
        q = (function (e) {
            let { user: t, guildId: n, onSuccess: i } = e,
                r = (0, f.Ay)(t.id, n ?? void 0),
                a = z.Q_.useSetting(),
                { tidaWebformEnabled: o } = $.A.useExperiment(
                    { location: "useCopyUserInfoItem" },
                    { autoTrackExposure: !1 },
                ),
                u = (0, Y.A)({ id: t.id, label: _.intl.string(_.t["/AXYnE"]), onSuccess: i }),
                d = s.useMemo(() => (null == r ? null : r.getBannerURL({ canAnimate: !0, size: K.XAf })), [r]),
                m = s.useCallback(() => {
                    (0, W.C)(t.id), i?.();
                }, [t.id, i]),
                x = s.useCallback(() => {
                    let e = t.getAvatarURL(n, K.XAf, !0);
                    X()(null != e, "cannot copy null avatar URL"), (0, W.C)(e), i?.();
                }, [t, n, i]),
                E = s.useCallback(() => {
                    X()(null != d, "cannot copy null banner URL"), (0, W.C)(d), i?.();
                }, [d, i]);
            return !__OVERLAY__ && a && W.p5 && null != t.id
                ? o
                    ? (0, l.jsxs)(c.Dr, {
                          id: "copy-user-info",
                          label: _.intl.string(_.t.QvQeLv),
                          children: [
                              (0, l.jsx)(c.Dr, { id: "copy-user-id", label: _.intl.string(_.t["/AXYnE"]), action: m }),
                              (null != t.avatar || t.hasAvatarForGuild(n)) &&
                                  (0, l.jsx)(c.Dr, {
                                      id: "copy-user-avatar-link",
                                      label: _.intl.string(_.t.gERDvM),
                                      action: x,
                                  }),
                              null != d &&
                                  (0, l.jsx)(c.Dr, {
                                      id: "copy-user-banner-link",
                                      label: _.intl.string(_.t.hsNv0R),
                                      action: E,
                                  }),
                          ],
                      })
                    : u
                : null;
        })({ user: g, guildId: p, onSuccess: () => P({ action: "COPY_USER_ID", analyticsLocations: k }) }),
        B = [
            [
                R,
                (function (e, t) {
                    let n = h("UserProfileOverflowMenu"),
                        i = A(e.id, t),
                        { analyticsLocations: s } = (0, d.Ay)(u.A.USER_PROFILE_OVERFLOW_MENU),
                        r = (0, m.bG)(
                            [C.A],
                            () =>
                                i.map((e) => {
                                    let t = C.A.getProductsForSku(e)
                                        ?.flatMap((e) => e.skus)
                                        .find((t) => t.id === e);
                                    return {
                                        skuId: e,
                                        isShoppableItem:
                                            null != t &&
                                            t.isAvailable() &&
                                            t.tenantMetadata?.collectibles?.sourceType === S.SHOP,
                                    };
                                }),
                            [i],
                            V,
                        );
                    return n && 0 !== i.length
                        ? (0, l.jsx)(c.Dr, {
                              id: "shop-this-look",
                              label: _.intl.string(_.t.xNdRDO),
                              badge: "beta",
                              children: r.map((e) => {
                                  let { skuId: t, isShoppableItem: n } = e;
                                  return (0, l.jsx)(
                                      c.Dr,
                                      {
                                          id: `shop-this-look-${t}`,
                                          navigable: n,
                                          disabled: !n,
                                          keepItemStyles: n,
                                          render: (e) => {
                                              let { disabled: n } = e;
                                              return (0, l.jsx)(w, { skuId: t, disabled: n });
                                          },
                                          action: n
                                              ? () =>
                                                    (0, T.B)({
                                                        skuId: t,
                                                        analyticsLocations: s,
                                                        analyticsSource: u.A.USER_PROFILE_OVERFLOW_MENU,
                                                    })
                                              : void 0,
                                      },
                                      t,
                                  );
                              }),
                          })
                        : null;
                })(g, p),
                U,
            ],
            [L, G, D, F],
            [q],
        ];
    return B.every((e) => e.every((e) => null == e))
        ? null
        : (0, l.jsx)(d.f5, {
              value: k,
              children: (0, l.jsx)(a.Y, {
                  targetElementRef: I,
                  shouldShow: v,
                  onRequestOpen: j,
                  onRequestClose: b,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, l.jsx)(o.W, {
                          "data-menu-migrated-auto": !0,
                          navId: "user-profile-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": _.intl.string(_.t.AXIHpV),
                          children: B.map((e, t) => (0, l.jsx)(c.rX, { children: e.map((e) => e) }, t)),
                      });
                  },
                  children: (e) => O({ ...e, ...M }),
              }),
          });
}
function eu(e) {
    let t = s.useRef(null);
    return (0, l.jsx)(ec, { ...e, popoutTargetRef: t, children: (e) => (0, l.jsx)(es.q3, { buttonRef: t, ...e }) });
}
function ed(e) {
    let t = s.useRef(null),
        { themeType: n } = (0, el.E)(),
        i = n === ea.d.POPOUT,
        r = n === ea.d.SIDEBAR,
        { isVisible: a, markAsDismissed: o } = j(e.user.id, e.guildId, r),
        [c, u] = s.useState(!1),
        d = s.useCallback(() => {
            u(!0), a && o(b.i.TAKE_ACTION);
        }, [a, o]);
    return (0, l.jsxs)("div", {
        className: eo.g2,
        children: [
            (0, l.jsx)("div", {
                className: a ? eo.t8 : void 0,
                children: (0, l.jsx)(ec, {
                    ...e,
                    popoutTargetRef: t,
                    shouldShow: i ? c : void 0,
                    onRequestOpen: d,
                    onRequestClose: () => u(!1),
                    children: (e) => (0, l.jsx)(es.br, { buttonRef: t, ...e }),
                }),
            }),
            a && (0, l.jsx)("div", { className: eo.Vx, "aria-hidden": !0 }),
            (0, l.jsx)(O, {
                user: e.user,
                guildId: e.guildId,
                shouldShow: i,
                targetElementRef: t,
                onClick: () => u(!0),
            }),
        ],
    });
}
