n.d(t, { Zt: () => ed, yo: () => em });
var i,
    l = n(627968),
    s = n(64700),
    r = n(365199),
    a = n(922016),
    o = n(980707),
    u = n(477782),
    c = n(793574),
    d = n(688810),
    m = n(17928),
    x = n(540737),
    E = n(999291),
    f = n(287809),
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
    let n = (0, m.bG)([f.default], () => f.default.getUser(e), [e]),
        i = (0, E.Ay)(e, t),
        l = (0, g.Z)(n, t),
        r = (0, R.r)({ user: n, guildId: t }),
        a = l?.skuId,
        o = r?.skuId,
        u = i?.profileEffect?.skuId,
        c = i?.profileFrame?.skuId;
    return s.useMemo(() => [a, o, u, c].filter((e) => null != e), [a, o, u, c]);
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
    _ = n(375708),
    O = n(227143);
function S(e) {
    let { user: t, guildId: n, shouldShow: i, targetElementRef: r, onClick: a } = e,
        { isVisible: o, markAsDismissed: u } = j(t.id, n, i);
    return (s.useEffect(() => {
        if (o) return () => u(b.i.AUTO_DISMISS);
    }, [o, u]),
    o)
        ? (0, l.jsx)(N.A, {
              badge: "beta",
              graphic: { type: "image", src: O.A },
              title: _.intl.string(_.t.TrOccu),
              body: _.intl.string(_.t["Eh5+1F"]),
              position: "right",
              alignmentStrategy: "edge",
              align: "top",
              caretConfig: { align: "start" },
              targetElementRef: r,
              onRequestClose: () => u(b.i.USER_DISMISS),
              actions: [
                  {
                      text: _.intl.string(_.t["bqZVd/"]),
                      variant: "primary",
                      onClick: () => {
                          u(b.i.TAKE_ACTION), a();
                      },
                  },
              ],
          })
        : null;
}
var C =
        (((i = {})[(i.SHOP = 1)] = "SHOP"),
        (i[(i.QUEST = 2)] = "QUEST"),
        (i[(i.PREMIUM_PROMOTION = 3)] = "PREMIUM_PROMOTION"),
        (i[(i.REWARD = 4)] = "REWARD"),
        (i[(i.INTERNAL = 5)] = "INTERNAL"),
        i),
    T = n(821925),
    P = n(722258),
    k = n(503698),
    y = n.n(k),
    M = n(575593),
    U = n(834730),
    G = n(642160),
    L = n(623373),
    D = n(536572),
    F = n(14702),
    q = n(887931);
function w() {
    return (0, l.jsxs)("div", {
        className: q.nM,
        "aria-hidden": !0,
        children: [
            (0, l.jsx)("div", { className: q.VH, children: (0, l.jsx)("div", { className: q.Qc }) }),
            (0, l.jsxs)("div", {
                className: y()(q.Qq, q.Um),
                children: [(0, l.jsx)("div", { className: q.Iz }), (0, l.jsx)("div", { className: q.wS })],
            }),
        ],
    });
}
function V(e) {
    let { skuId: t, disabled: n = !1 } = e,
        { product: i, state: s } = (0, G.I)(t, { needsCategory: !1, shouldFetchProduct: !1 }),
        r = (0, m.bG)(
            [T.A],
            () =>
                T.A.getProductsForSku(t)
                    ?.flatMap((e) => e.skus)
                    .find((e) => e.id === t),
            [t],
        );
    if ("loading" === s) return (0, l.jsx)(w, {});
    if (null == i) return null;
    let a = (0, L.YW)(i),
        o =
            null != a
                ? (function (e) {
                      switch (e) {
                          case M.R.AVATAR_DECORATION:
                              return _.intl.string(_.t["7v0T9P"]);
                          case M.R.PROFILE_EFFECT:
                              return _.intl.string(_.t.wR5wOo);
                          case M.R.NAMEPLATE:
                              return _.intl.string(_.t.x5CoXR);
                          case M.R.PROFILE_FRAME:
                              return _.intl.string(_.t.GWrZOd);
                          default:
                              return;
                      }
                  })(a)
                : void 0;
    return (0, l.jsxs)("div", {
        className: y()(q.nM, { [q.r9]: n }),
        children: [
            (0, l.jsx)("div", { className: q.VH, children: (0, l.jsx)(F.O, { product: i, sku: r }) }),
            (0, l.jsxs)("div", {
                className: q.Qq,
                children: [
                    (0, l.jsx)(U.E, { variant: "text-sm/medium", color: "text-default", children: (0, D.VG)(i) }),
                    null != o && (0, l.jsx)(U.E, { variant: "text-xs/normal", color: "text-subtle", children: o }),
                ],
            }),
        ],
    });
}
function Q(e, t) {
    return (
        e.length === t.length && e.every((e, n) => e.skuId === t[n].skuId && e.isShoppableItem === t[n].isShoppableItem)
    );
}
var B = n(239211),
    X = n(284009),
    Y = n.n(X),
    $ = n(50268),
    z = n(486503),
    W = n(885386),
    K = n(957565),
    H = n(652215),
    Z = n(399476),
    J = n(889460),
    ee = n(865116),
    et = n(928658);
let en = (0, n(600975).C)({
    kind: "user",
    id: "2023-09_iar_user_reporting",
    label: "Safety Experience IAR User Reporting",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
});
var ei = n(280450),
    el = n(183555),
    es = n(939496),
    er = n(993401),
    ea = n(518477),
    eo = n(996988),
    eu = n(12624);
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
        { trackUserProfileAction: S } = (0, el.NJ)(),
        { analyticsLocations: k, newestAnalyticsLocation: y } = (0, d.Ay)(c.A.USER_PROFILE_OVERFLOW_MENU);
    (t = g.id),
        (n = h("useMaybeFetchEquippedCollectibleProducts")),
        (i = A(t, p)),
        s.useEffect(() => {
            n && 0 !== i.length && (0, x.tu)({ skuIds: i });
        }, [n, i]);
    let M = {
            action: ea.pt.PRESS_OPTIONS,
            icon: r.j,
            tooltipText: _.intl.string(_.t["UKOtz+"]),
            "aria-label": _.intl.string(_.t["UKOtz+"]),
        },
        U = (0, J.A)({
            user: g,
            guildId: p,
            onAction: () => S({ action: "PRESS_INVITE_TO_SERVER", analyticsLocations: k }),
        }),
        G = (0, B.A)({
            user: g,
            guildId: p,
            location: y,
            appContext: N,
            onBlock: () => S({ action: "BLOCK", analyticsLocations: k }),
            onIgnore: () => S({ action: "IGNORE", analyticsLocations: k }),
            onUnblock: () => S({ action: "UNBLOCK", analyticsLocations: k }),
        }),
        L = (0, Z.A)({
            user: g,
            guildId: p,
            location: y,
            appContext: N,
            onBlock: () => S({ action: "BLOCK", analyticsLocations: k }),
            onIgnore: () => S({ action: "IGNORE", analyticsLocations: k }),
            onUnignore: () => S({ action: "UNIGNORE", analyticsLocations: k }),
        }),
        D = (function (e) {
            let { user: t, guildId: n, color: i, onAction: s, location: r = c.A.CONTEXT_MENU, appContext: a } = e,
                o = en.useExperiment({ location: r }, { autoTrackExposure: !0 }).enabled,
                d = (0, m.bG)([ei.default], () => ei.default.getId() === t.id);
            return !o || d || t.isNonUserBot()
                ? null
                : (0, l.jsx)(u.Dr, {
                      id: "report-user",
                      color: i,
                      label: _.intl.string(_.t.A1MM3D),
                      action: () => (0, et.NW)(t, n === H.ME ? void 0 : n, s, a),
                  });
        })({
            user: g,
            guildId: p,
            location: y,
            appContext: N,
            color: "danger",
            onAction: () => S({ action: "REPORT", analyticsLocations: k }),
        }),
        F = (function (e) {
            let { user: t, guildId: n, color: i, onAction: s, appContext: r } = e,
                a = (0, m.bG)([ee.Ay], () => ee.Ay.get("iar_testing")),
                o = (0, m.bG)([f.default], () => f.default.getCurrentUser());
            return null != o && (t.id === o.id || t.isNonUserBot() || !o.isStaff() || !a)
                ? null
                : (0, l.jsx)(u.Dr, {
                      id: "staff-test-report-user",
                      color: i,
                      label: "[STAFF] Test Profile Report",
                      action: () => (0, et.RR)(t, n === H.ME ? void 0 : n, s, r),
                  });
        })({
            user: g,
            guildId: p,
            location: y,
            appContext: N,
            color: "danger",
            onAction: () => S({ action: "REPORT", analyticsLocations: k }),
        }),
        q = (function (e) {
            let { user: t, guildId: n, onSuccess: i } = e,
                r = (0, E.Ay)(t.id, n ?? void 0),
                a = W.Q_.useSetting(),
                { tidaWebformEnabled: o } = z.A.useExperiment(
                    { location: "useCopyUserInfoItem" },
                    { autoTrackExposure: !1 },
                ),
                c = (0, $.A)({ id: t.id, label: _.intl.string(_.t["/AXYnE"]), onSuccess: i }),
                d = s.useMemo(() => (null == r ? null : r.getBannerURL({ canAnimate: !0, size: H.XAf })), [r]),
                m = s.useCallback(() => {
                    (0, K.C)(t.id), i?.();
                }, [t.id, i]),
                x = s.useCallback(() => {
                    let e = t.getAvatarURL(n, H.XAf, !0);
                    Y()(null != e, "cannot copy null avatar URL"), (0, K.C)(e), i?.();
                }, [t, n, i]),
                f = s.useCallback(() => {
                    Y()(null != d, "cannot copy null banner URL"), (0, K.C)(d), i?.();
                }, [d, i]);
            return !__OVERLAY__ && a && K.p5 && null != t.id
                ? o
                    ? (0, l.jsxs)(u.Dr, {
                          id: "copy-user-info",
                          label: _.intl.string(_.t.QvQeLv),
                          children: [
                              (0, l.jsx)(u.Dr, { id: "copy-user-id", label: _.intl.string(_.t["/AXYnE"]), action: m }),
                              (null != t.avatar || t.hasAvatarForGuild(n)) &&
                                  (0, l.jsx)(u.Dr, {
                                      id: "copy-user-avatar-link",
                                      label: _.intl.string(_.t.gERDvM),
                                      action: x,
                                  }),
                              null != d &&
                                  (0, l.jsx)(u.Dr, {
                                      id: "copy-user-banner-link",
                                      label: _.intl.string(_.t.hsNv0R),
                                      action: f,
                                  }),
                          ],
                      })
                    : c
                : null;
        })({ user: g, guildId: p, onSuccess: () => S({ action: "COPY_USER_ID", analyticsLocations: k }) }),
        w = [
            [
                R,
                (function (e, t) {
                    let n = h("UserProfileOverflowMenu"),
                        i = A(e.id, t),
                        { analyticsLocations: s } = (0, d.Ay)(c.A.USER_PROFILE_OVERFLOW_MENU),
                        r = (0, m.bG)(
                            [T.A],
                            () =>
                                i.map((e) => {
                                    let t = T.A.getProductsForSku(e)
                                        ?.flatMap((e) => e.skus)
                                        .find((t) => t.id === e);
                                    return {
                                        skuId: e,
                                        isShoppableItem:
                                            null != t &&
                                            t.isAvailable() &&
                                            t.tenantMetadata?.collectibles?.sourceType === C.SHOP,
                                    };
                                }),
                            [i],
                            Q,
                        );
                    return n && 0 !== i.length
                        ? (0, l.jsx)(u.Dr, {
                              id: "shop-this-look",
                              label: _.intl.string(_.t.xNdRDO),
                              badge: "beta",
                              children: r.map((e) => {
                                  let { skuId: t, isShoppableItem: n } = e;
                                  return (0, l.jsx)(
                                      u.Dr,
                                      {
                                          id: `shop-this-look-${t}`,
                                          navigable: n,
                                          disabled: !n,
                                          keepItemStyles: n,
                                          render: (e) => {
                                              let { disabled: n } = e;
                                              return (0, l.jsx)(V, { skuId: t, disabled: n });
                                          },
                                          action: n
                                              ? () =>
                                                    (0, P.B)({
                                                        skuId: t,
                                                        analyticsLocations: s,
                                                        analyticsSource: c.A.USER_PROFILE_OVERFLOW_MENU,
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
    return w.every((e) => e.every((e) => null == e))
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
                          children: w.map((e, t) => (0, l.jsx)(u.rX, { children: e.map((e) => e) }, t)),
                      });
                  },
                  children: (e) => O({ ...e, ...M }),
              }),
          });
}
function ed(e) {
    let t = s.useRef(null);
    return (0, l.jsx)(ec, { ...e, popoutTargetRef: t, children: (e) => (0, l.jsx)(er.q3, { buttonRef: t, ...e }) });
}
function em(e) {
    let t = s.useRef(null),
        { themeType: n } = (0, es.E)(),
        i = n === eo.d.POPOUT,
        r = n === eo.d.SIDEBAR,
        { isVisible: a, markAsDismissed: o } = j(e.user.id, e.guildId, r),
        [u, c] = s.useState(!1),
        d = s.useCallback(() => {
            c(!0), a && o(b.i.TAKE_ACTION);
        }, [a, o]);
    return (0, l.jsxs)("div", {
        className: eu.g2,
        children: [
            (0, l.jsx)("div", {
                className: a ? eu.t8 : void 0,
                children: (0, l.jsx)(ec, {
                    ...e,
                    popoutTargetRef: t,
                    shouldShow: i ? u : void 0,
                    onRequestOpen: d,
                    onRequestClose: () => c(!1),
                    children: (e) => (0, l.jsx)(er.br, { buttonRef: t, ...e }),
                }),
            }),
            a && (0, l.jsx)("div", { className: eu.Vx, "aria-hidden": !0 }),
            (0, l.jsx)(S, {
                user: e.user,
                guildId: e.guildId,
                shouldShow: i,
                targetElementRef: t,
                onClick: () => c(!0),
            }),
        ],
    });
}
