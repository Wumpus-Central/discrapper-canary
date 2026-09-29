n.d(t, { Zt: () => em, yo: () => eO });
var i,
    l,
    r,
    s = n(477900),
    a = n(582128),
    o = n(365199),
    u = n(922016),
    c = n(980707),
    d = n(477782),
    E = n(793574),
    f = n(688810),
    R = n(17928),
    I = n(540737),
    p = n(999291),
    _ = n(287809),
    A = n(259464),
    g = n(449582);
function m(e, t) {
    let n = (0, R.bG)([_.default], () => _.default.getUser(e), [e]),
        i = (0, p.Ay)(e, t),
        l = (0, A.Z)(n, t),
        r = (0, g.r)({ user: n, guildId: t }),
        s = l?.skuId,
        o = r?.skuId,
        u = i?.profileEffect?.skuId,
        c = i?.profileFrame?.skuId;
    return a.useMemo(() => [s, o, u, c].filter((e) => null != e), [s, o, u, c]);
}
var O = n(575593),
    x = n(174459),
    N = n(652215),
    b =
        (((i = {}).MENU_VIEWED = "menu_viewed"),
        (i.COACHMARK_VIEWED = "coachmark_viewed"),
        (i.COACHMARK_CTA_CLICKED = "coachmark_cta_clicked"),
        (i.COACHMARK_DISMISSED = "coachmark_dismissed"),
        (i.RED_DOT_VIEWED = "red_dot_viewed"),
        (i.RED_DOT_DISMISSED = "red_dot_dismissed"),
        i),
    h = (((l = {}).ROW_VIEWED = "row_viewed"), (l.ROW_CLICKED = "row_clicked"), l);
function v(e, t) {
    x.default.track(N.HAw.SHOP_THIS_LOOK_MENU_ACTION, { action: e, source: t ?? void 0 });
}
function C(e) {
    let { action: t, skuId: n, productType: i, isDisabled: l, source: r } = e;
    x.default.track(N.HAw.SHOP_THIS_LOOK_ROW_ACTION, {
        action: t,
        sku_id: n,
        product_type: (function (e) {
            switch (e) {
                case O.R.PROFILE_FRAME:
                    return "profile_frame";
                case O.R.PROFILE_EFFECT:
                    return "profile_effect";
                case O.R.AVATAR_DECORATION:
                    return "avatar_decoration";
                case O.R.NAMEPLATE:
                    return "nameplate";
                default:
                    return;
            }
        })(i),
        is_disabled: l,
        source: r ?? void 0,
    });
}
var S = n(554146),
    T = n(131607);
function M(e, t, n) {
    let i = m(e, t).length > 0,
        [l, r] = (0, T.kn)(n && i ? [S.M.SHOP_THIS_LOOK_WEB_MARKETING] : [], void 0, !0);
    return { isVisible: null != l, markAsDismissed: r };
}
var j = n(43105),
    D = n(49999),
    P = n(996988),
    k = n(375708),
    U = n(227143);
function y(e) {
    let { user: t, guildId: n, shouldShow: i, isMenuOpen: l, targetElementRef: r, onClick: o } = e,
        { isVisible: u, markAsDismissed: c } = M(t.id, n, i);
    return (a.useEffect(() => {
        if (u)
            return () => {
                (v(b.COACHMARK_DISMISSED, P.d.POPOUT), c(D.i.AUTO_DISMISS));
            };
    }, [u, c]),
    a.useEffect(() => {
        i && u && v(b.COACHMARK_VIEWED, P.d.POPOUT);
    }, [i, u]),
    a.useEffect(() => {
        i && u && l && c(D.i.TAKE_ACTION);
    }, [i, u, l, c]),
    u)
        ? (0, s.jsx)(j.A, {
              badge: "beta",
              graphic: { type: "image", src: U.A },
              title: k.intl.string(k.t.TrOccu),
              body: k.intl.string(k.t["Eh5+1F"]),
              position: "right",
              alignmentStrategy: "edge",
              align: "top",
              caretConfig: { align: "start" },
              targetElementRef: r,
              onRequestClose: () => c(D.i.USER_DISMISS),
              actions: [
                  {
                      text: k.intl.string(k.t["bqZVd/"]),
                      variant: "primary",
                      onClick: () => {
                          (v(b.COACHMARK_CTA_CLICKED, P.d.POPOUT), c(D.i.TAKE_ACTION), o());
                      },
                  },
              ],
          })
        : null;
}
var L = n(821925),
    G = n(280450),
    F = n(722258),
    V =
        (((r = {})[(r.SHOP = 1)] = "SHOP"),
        (r[(r.QUEST = 2)] = "QUEST"),
        (r[(r.PREMIUM_PROMOTION = 3)] = "PREMIUM_PROMOTION"),
        (r[(r.REWARD = 4)] = "REWARD"),
        (r[(r.INTERNAL = 5)] = "INTERNAL"),
        r),
    w = n(38405),
    K = n(503698),
    W = n.n(K),
    H = n(834730),
    q = n(682301),
    B = n(623373),
    Q = n(536572),
    Y = n(14702),
    X = n(728500);
function $() {
    return (0, s.jsxs)("div", {
        className: X.nM,
        "aria-hidden": !0,
        children: [
            (0, s.jsx)("div", { className: X.VH, children: (0, s.jsx)("div", { className: X.Qc }) }),
            (0, s.jsxs)("div", {
                className: W()(X.Qq, X.Um),
                children: [(0, s.jsx)("div", { className: X.Iz }), (0, s.jsx)("div", { className: X.wS })],
            }),
        ],
    });
}
function z(e) {
    let { skuId: t, disabled: n = !1, source: i } = e,
        { product: l, state: r } = (0, q.IK)(t, { needsCategory: !1, shouldFetchProduct: !1 }),
        o = (0, R.bG)(
            [L.A],
            () =>
                L.A.getProductsForSku(t)
                    ?.flatMap((e) => e.skus)
                    .find((e) => e.id === t),
            [t],
        ),
        u = a.useRef(!1);
    if (
        (a.useEffect(() => {
            null == l ||
                u.current ||
                ((u.current = !0),
                C({ action: h.ROW_VIEWED, skuId: t, productType: (0, B.YW)(l) ?? void 0, isDisabled: n, source: i }));
        }, [l, t, n, i]),
        "loading" === r)
    )
        return (0, s.jsx)($, {});
    if (null == l) return null;
    let c = (0, B.YW)(l),
        d =
            null != c
                ? (function (e) {
                      switch (e) {
                          case O.R.AVATAR_DECORATION:
                              return k.intl.string(k.t["7v0T9P"]);
                          case O.R.PROFILE_EFFECT:
                              return k.intl.string(k.t.wR5wOo);
                          case O.R.NAMEPLATE:
                              return k.intl.string(k.t.x5CoXR);
                          case O.R.PROFILE_FRAME:
                              return k.intl.string(k.t.GWrZOd);
                          default:
                              return;
                      }
                  })(c)
                : void 0;
    return (0, s.jsxs)("div", {
        className: W()(X.nM, { [X.r9]: n }),
        children: [
            (0, s.jsx)("div", { className: X.VH, children: (0, s.jsx)(Y.O, { product: l, sku: o }) }),
            (0, s.jsxs)("div", {
                className: X.Qq,
                children: [
                    (0, s.jsx)(H.E, { variant: "text-sm/medium", color: "text-default", children: (0, Q.VG)(l) }),
                    null != d && (0, s.jsx)(H.E, { variant: "text-xs/normal", color: "text-subtle", children: d }),
                ],
            }),
        ],
    });
}
function Z(e, t) {
    return (
        e.length === t.length &&
        e.every(
            (e, n) =>
                e.skuId === t[n].skuId &&
                e.isShoppableItem === t[n].isShoppableItem &&
                e.productType === t[n].productType,
        )
    );
}
var J = n(239211),
    ee = n(284009),
    et = n.n(ee),
    en = n(50268),
    ei = n(486503),
    el = n(342053),
    er = n(640794),
    es = n(885386),
    ea = n(957565),
    eo = n(518477),
    eu = n(399476),
    ec = n(889460),
    ed = n(865116),
    eE = n(928658);
let ef = (0, n(600975).C)({
    kind: "user",
    id: "2023-09_iar_user_reporting",
    label: "Safety Experience IAR User Reporting",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
});
var eR = n(183555),
    eI = n(254384),
    ep = n(939496),
    e_ = n(993401),
    eA = n(719687);
function eg(e) {
    var t;
    let n,
        {
            user: i,
            guildId: l,
            viewProfileItem: r,
            appContext: A,
            popoutTargetRef: g,
            shouldShow: O,
            onRequestOpen: x,
            onRequestClose: S,
            children: T,
        } = e,
        { themeType: M } = (0, ep.E)(),
        { trackUserProfileAction: j } = (0, eR.NJ)(),
        { analyticsLocations: D, newestAnalyticsLocation: P } = (0, f.Ay)(E.A.USER_PROFILE_OVERFLOW_MENU);
    ((t = i.id),
        (n = m(t, l)),
        a.useEffect(() => {
            0 !== n.length && (0, I.tu)({ skuIds: n });
        }, [!0, n]));
    let U = {
            action: eo.pt.PRESS_OPTIONS,
            icon: o.MoreHorizontalIcon,
            tooltipText: k.intl.string(k.t["UKOtz+"]),
            "aria-label": k.intl.string(k.t["UKOtz+"]),
        },
        y = (0, ec.A)({
            user: i,
            guildId: l,
            onAction: () => j({ action: "PRESS_INVITE_TO_SERVER", analyticsLocations: D }),
        }),
        K = (0, J.A)({
            user: i,
            guildId: l,
            location: P,
            appContext: A,
            onBlock: () => j({ action: "BLOCK", analyticsLocations: D }),
            onIgnore: () => j({ action: "IGNORE", analyticsLocations: D }),
            onUnblock: () => j({ action: "UNBLOCK", analyticsLocations: D }),
        }),
        W = (0, eu.A)({
            user: i,
            guildId: l,
            location: P,
            appContext: A,
            onBlock: () => j({ action: "BLOCK", analyticsLocations: D }),
            onIgnore: () => j({ action: "IGNORE", analyticsLocations: D }),
            onUnignore: () => j({ action: "UNIGNORE", analyticsLocations: D }),
        }),
        H = (function (e) {
            let { user: t, guildId: n, color: i, onAction: l, location: r = E.A.CONTEXT_MENU, appContext: a } = e,
                o = ef.useExperiment({ location: r }, { autoTrackExposure: !0 }).enabled,
                u = (0, R.bG)([G.default], () => G.default.getId() === t.id);
            return !o || u || t.isNonUserBot()
                ? null
                : (0, s.jsx)(d.Dr, {
                      id: "report-user",
                      color: i,
                      label: k.intl.string(k.t.A1MM3D),
                      action: () => (0, eE.NW)(t, n === N.ME ? void 0 : n, l, a),
                  });
        })({
            user: i,
            guildId: l,
            location: P,
            appContext: A,
            color: "danger",
            onAction: () => j({ action: "REPORT", analyticsLocations: D }),
        }),
        q = (function (e) {
            let { user: t, guildId: n, color: i, onAction: l, appContext: r } = e,
                a = (0, R.bG)([ed.Ay], () => ed.Ay.get("iar_testing")),
                o = (0, R.bG)([_.default], () => _.default.getCurrentUser());
            return null != o && (t.id === o.id || t.isNonUserBot() || !o.isStaff() || !a)
                ? null
                : (0, s.jsx)(d.Dr, {
                      id: "staff-test-report-user",
                      color: i,
                      label: "[STAFF] Test Profile Report",
                      action: () => (0, eE.RR)(t, n === N.ME ? void 0 : n, l, r),
                  });
        })({
            user: i,
            guildId: l,
            location: P,
            appContext: A,
            color: "danger",
            onAction: () => j({ action: "REPORT", analyticsLocations: D }),
        }),
        B = (function (e) {
            let { user: t, guildId: n, onSuccess: i } = e,
                l = (0, p.Ay)(t.id, n ?? void 0),
                r = es.Q_.useSetting(),
                { tidaWebformEnabled: o } = ei.A.useExperiment(
                    { location: "useCopyUserInfoItem" },
                    { autoTrackExposure: !1 },
                ),
                u = (0, el.g)("useCopyUserInfoItem"),
                c = (0, en.A)({
                    id: t.id,
                    label: k.intl.string(k.t["/AXYnE"]),
                    onSuccess: () => i?.(eo.pt.COPY_USER_ID),
                }),
                E = a.useMemo(() => (null == l ? null : l.getBannerURL({ canAnimate: !0, size: N.XAf })), [l]),
                f = a.useCallback(() => {
                    ((0, ea.C)(t.id), i?.(eo.pt.COPY_USER_ID));
                }, [t.id, i]),
                R = a.useCallback(() => {
                    ((0, ea.C)((0, er.A)(t.id)), i?.(eo.pt.COPY_PROFILE_LINK));
                }, [t.id, i]),
                I = a.useCallback(() => {
                    let e = t.getAvatarURL(n, N.XAf, !0);
                    (et()(null != e, "cannot copy null avatar URL"), (0, ea.C)(e), i?.(eo.pt.COPY_AVATAR_IMAGE_LINK));
                }, [t, n, i]),
                _ = a.useCallback(() => {
                    (et()(null != E, "cannot copy null banner URL"), (0, ea.C)(E), i?.(eo.pt.COPY_BANNER_IMAGE_LINK));
                }, [E, i]);
            return !__OVERLAY__ && r && ea.p5 && null != t.id
                ? o
                    ? (0, s.jsxs)(d.Dr, {
                          id: "copy-user-info",
                          label: k.intl.string(k.t.QvQeLv),
                          children: [
                              (0, s.jsx)(d.Dr, { id: "copy-user-id", label: k.intl.string(k.t["/AXYnE"]), action: f }),
                              u &&
                                  (0, s.jsx)(d.Dr, {
                                      id: "copy-user-profile-link",
                                      label: k.intl.string(k.t["E+rSVy"]),
                                      action: R,
                                  }),
                              (null != t.avatar || t.hasAvatarForGuild(n)) &&
                                  (0, s.jsx)(d.Dr, {
                                      id: "copy-user-avatar-link",
                                      label: k.intl.string(k.t.gERDvM),
                                      action: I,
                                  }),
                              null != E &&
                                  (0, s.jsx)(d.Dr, {
                                      id: "copy-user-banner-link",
                                      label: k.intl.string(k.t.hsNv0R),
                                      action: _,
                                  }),
                          ],
                      })
                    : c
                : null;
        })({ user: i, guildId: l, onSuccess: (e) => j({ action: e, analyticsLocations: D }) }),
        Q = (function (e, t, n) {
            let i = (0, R.bG)([G.default], () => G.default.getId() === e.id),
                l = m(e.id, t),
                { analyticsLocations: r } = (0, f.Ay)(E.A.USER_PROFILE_OVERFLOW_MENU),
                a = (0, R.bG)(
                    [L.A],
                    () =>
                        l.map((e) => {
                            let t = L.A.getProductsForSku(e)
                                ?.flatMap((e) => e.skus)
                                .find((t) => t.id === e);
                            return {
                                skuId: e,
                                isShoppableItem:
                                    null != t &&
                                    ("function" != typeof t.isAvailable
                                        ? (w.A.captureMessage("isShoppableCollectibleSku: sku missing isAvailable()", {
                                              extra: { skuId: t.id, skuType: t.type },
                                          }),
                                          !1)
                                        : t.isAvailable() && t.tenantMetadata?.collectibles?.sourceType === V.SHOP),
                                productType: t?.tenantMetadata?.collectibles?.type,
                            };
                        }),
                    [l],
                    Z,
                );
            return i || 0 === l.length
                ? null
                : (0, s.jsx)(d.Dr, {
                      id: "shop-this-look",
                      label: k.intl.string(k.t.xNdRDO),
                      badge: "beta",
                      children: a.map((e) => {
                          let { skuId: t, isShoppableItem: i, productType: l } = e;
                          return (0, s.jsx)(
                              d.Dr,
                              {
                                  id: `shop-this-look-${t}`,
                                  navigable: i,
                                  disabled: !i,
                                  keepItemStyles: i,
                                  render: (e) => {
                                      let { disabled: i } = e;
                                      return (0, s.jsx)(z, { skuId: t, disabled: i, source: n });
                                  },
                                  action: i
                                      ? () => {
                                            (C({
                                                action: h.ROW_CLICKED,
                                                skuId: t,
                                                productType: l,
                                                isDisabled: !1,
                                                source: n,
                                            }),
                                                (0, F.B)({
                                                    skuId: t,
                                                    analyticsLocations: r,
                                                    analyticsSource: E.A.USER_PROFILE_OVERFLOW_MENU,
                                                }));
                                        }
                                      : void 0,
                              },
                              t,
                          );
                      }),
                  });
        })(i, l, M),
        Y = [[r, (0, eI.A)({ user: i, location: "UserProfileOverflowMenuButton" }), Q, y], [W, K, H, q], [B]];
    return Y.every((e) => e.every((e) => null == e))
        ? null
        : (0, s.jsx)(f.f5, {
              value: D,
              children: (0, s.jsx)(u.Y, {
                  targetElementRef: g,
                  shouldShow: O,
                  onRequestOpen: () => {
                      (null != Q && v(b.MENU_VIEWED, M), x?.());
                  },
                  onRequestClose: S,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, s.jsx)(c.W, {
                          "data-menu-migrated-auto": !0,
                          navId: "user-profile-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": k.intl.string(k.t.AXIHpV),
                          children: Y.map((e, t) => (0, s.jsx)(d.rX, { children: e.map((e) => e) }, t)),
                      });
                  },
                  children: (e) => T({ ...e, ...U }),
              }),
          });
}
function em(e) {
    let t = a.useRef(null);
    return (0, s.jsx)(eg, { ...e, popoutTargetRef: t, children: (e) => (0, s.jsx)(e_.q3, { buttonRef: t, ...e }) });
}
function eO(e) {
    let t = a.useRef(null),
        { themeType: n } = (0, ep.E)(),
        i = n === P.d.POPOUT,
        l = n === P.d.SIDEBAR,
        { isVisible: r, markAsDismissed: o } = M(e.user.id, e.guildId, l);
    a.useEffect(() => {
        r && v(b.RED_DOT_VIEWED, n);
    }, [r, n]);
    let [u, c] = a.useState(!1),
        d = a.useCallback(() => {
            (c(!0), r && (v(b.RED_DOT_DISMISSED, n), o(D.i.TAKE_ACTION)));
        }, [r, o, n]);
    return (0, s.jsxs)("div", {
        className: eA.g2,
        children: [
            (0, s.jsx)("div", {
                className: r ? eA.t8 : void 0,
                children: (0, s.jsx)(eg, {
                    ...e,
                    popoutTargetRef: t,
                    shouldShow: i ? u : void 0,
                    onRequestOpen: d,
                    onRequestClose: () => c(!1),
                    children: (e) => (0, s.jsx)(e_.br, { buttonRef: t, ...e }),
                }),
            }),
            r && (0, s.jsx)("div", { className: eA.Vx, "aria-hidden": !0 }),
            (0, s.jsx)(y, {
                user: e.user,
                guildId: e.guildId,
                shouldShow: i,
                isMenuOpen: u,
                targetElementRef: t,
                onClick: () => {
                    (v(b.MENU_VIEWED, n), c(!0));
                },
            }),
        ],
    });
}
