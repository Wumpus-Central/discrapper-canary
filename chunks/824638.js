n.d(t, { yo: () => eF, Zt: () => eU });
var l,
    i,
    r = n(477900),
    o = n(582128),
    a = n(365199),
    s = n(265872),
    u = n(165862),
    c = n(477782),
    d = n(793574),
    f = n(688810),
    E = n(855986),
    R = n(540737),
    p = n(527212),
    g = n(287809),
    A = n(259464),
    m = n(449582);
function I(e, t) {
    let n = (0, E.bG)([g.default], () => g.default.getUser(e), [e]),
        l = (0, p.Ay)(e, t),
        i = (0, A.Z)(n, t),
        r = (0, m.r)({ user: n, guildId: t }),
        a = i?.skuId,
        s = r?.skuId,
        u = l?.profileEffect?.skuId,
        c = l?.profileFrame?.skuId;
    return o.useMemo(() => [a, s, u, c].filter((e) => null != e), [a, s, u, c]);
}
var b = n(414636),
    _ = n(821925),
    x = n(46653),
    O = n(722258),
    N = n(575593),
    h = n(129230),
    v = n(652215),
    j = (((l = {}).ROW_VIEWED = "row_viewed"), (l.ROW_CLICKED = "row_clicked"), l);
function C(e) {
    let { action: t, skuId: n, productType: l, isDisabled: i, source: r } = e;
    h.default.track(v.HAw.SHOP_THIS_LOOK_ROW_ACTION, {
        action: t,
        sku_id: n,
        product_type: (function (e) {
            switch (e) {
                case N.R.PROFILE_FRAME:
                    return "profile_frame";
                case N.R.PROFILE_EFFECT:
                    return "profile_effect";
                case N.R.AVATAR_DECORATION:
                    return "avatar_decoration";
                case N.R.NAMEPLATE:
                    return "nameplate";
                default:
                    return;
            }
        })(l),
        is_disabled: i,
        source: r ?? void 0,
    });
}
var S =
        (((i = {})[(i.SHOP = 1)] = "SHOP"),
        (i[(i.QUEST = 2)] = "QUEST"),
        (i[(i.PREMIUM_PROMOTION = 3)] = "PREMIUM_PROMOTION"),
        (i[(i.REWARD = 4)] = "REWARD"),
        (i[(i.INTERNAL = 5)] = "INTERNAL"),
        i),
    P = n(856383),
    M = n(503698),
    T = n.n(M),
    y = n(834730),
    k = n(682301),
    D = n(623373),
    L = n(536572),
    U = n(14702),
    G = n(792996),
    F = n(728500);
function w() {
    return (0, r.jsxs)("div", {
        className: F.nM,
        "aria-hidden": !0,
        children: [
            (0, r.jsx)("div", { className: F.VH, children: (0, r.jsx)("div", { className: F.Qc }) }),
            (0, r.jsxs)("div", {
                className: T()(F.Qq, F.Um),
                children: [(0, r.jsx)("div", { className: F.Iz }), (0, r.jsx)("div", { className: F.wS })],
            }),
        ],
    });
}
function V(e) {
    let { skuId: t, disabled: n = !1, source: l } = e,
        { product: i, state: a } = (0, k.IK)(t, { needsCategory: !1, shouldFetchProduct: !1 }),
        s = (0, E.bG)(
            [_.A],
            () =>
                _.A.getProductsForSku(t)
                    ?.flatMap((e) => e.skus)
                    .find((e) => e.id === t),
            [t],
        ),
        u = o.useRef(!1);
    if (
        (o.useEffect(() => {
            null == i ||
                u.current ||
                ((u.current = !0),
                C({ action: j.ROW_VIEWED, skuId: t, productType: (0, D.YW)(i) ?? void 0, isDisabled: n, source: l }));
        }, [i, t, n, l]),
        "loading" === a)
    )
        return (0, r.jsx)(w, {});
    if (null == i) return null;
    let c = (0, D.YW)(i),
        d =
            null != c
                ? (function (e) {
                      switch (e) {
                          case N.R.AVATAR_DECORATION:
                              return G.intl.string(G.t["7v0T9P"]);
                          case N.R.PROFILE_EFFECT:
                              return G.intl.string(G.t.wR5wOo);
                          case N.R.NAMEPLATE:
                              return G.intl.string(G.t.x5CoXR);
                          case N.R.PROFILE_FRAME:
                              return G.intl.string(G.t.GWrZOd);
                          default:
                              return;
                      }
                  })(c)
                : void 0;
    return (0, r.jsxs)("div", {
        className: T()(F.nM, { [F.r9]: n }),
        children: [
            (0, r.jsx)("div", { className: F.VH, children: (0, r.jsx)(U.O, { product: i, sku: s }) }),
            (0, r.jsxs)("div", {
                className: F.Qq,
                children: [
                    (0, r.jsx)(y.E, { variant: "body-sm/medium", color: "text-default", children: (0, L.VG)(i) }),
                    null != d && (0, r.jsx)(y.E, { variant: "body-xs/normal", color: "text-subtle", children: d }),
                ],
            }),
        ],
    });
}
var W = n(842671);
function B(e, t) {
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
var K = n(708645),
    Q = n(554146),
    q = n(263775),
    Y = n(43105),
    z = n(844222),
    H = n(403581),
    $ = n(626584),
    X = n(531685),
    Z = n(49999),
    J = n(78294);
let ee = new $.A("TryDisplayNameStyleMarketingPopover");
function et(e) {
    let { markAsDismissed: t, targetElementRef: n, onDismissibleContentClick: l } = e,
        i = o.useRef(null),
        a = (0, E.bG)([X.A], () => X.A.isFocused()),
        { reducedMotion: s } = o.useContext(z.C);
    return (
        o.useEffect(() => {
            null != i.current && (!s.enabled && a ? i.current.play().catch(ee.error) : i.current.pause());
        }, [a, s.enabled]),
        (0, r.jsx)(Y.A, {
            graphic: { type: "video", ref: i, src: J.A, aspectRatio: "21/9", loop: !0 },
            gradientColor: "nitro-pink",
            title: G.intl.string(W.default.t8z5gn),
            size: "lg",
            body: G.intl.string(W.default.ajHWbZ),
            position: "right",
            alignmentStrategy: "edge",
            align: "top",
            caretConfig: { align: "start" },
            targetElementRef: n,
            onRequestClose: () => t(Z.i.USER_DISMISS),
            actions: [{ text: G.intl.string(W.default["D7+kY/"]), variant: "primary", icon: H.t, onClick: l }],
        })
    );
}
var en = n(570287),
    el = n(994500),
    ei = n(696451),
    er = n(317525),
    eo = n(71393),
    ea = n(576705),
    es = n(372058),
    eu = n(989683),
    ec = n(192308),
    ed = n(752222);
let ef = (0, n(945810).mj)({
    name: "2026-09-referral-profile-contextual-menu-upsell",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var eE = n(834708),
    eR = n(154486),
    ep = n(239211),
    eg = n(284009),
    eA = n.n(eg),
    em = n(50268),
    eI = n(207560),
    eb = n(342053),
    e_ = n(640794),
    ex = n(253932),
    eO = n(957565),
    eN = n(518477),
    eh = n(399476),
    ev = n(889460),
    ej = n(865116),
    eC = n(928658);
let eS = (0, n(600975).C)({
    kind: "user",
    id: "2023-09_iar_user_reporting",
    label: "Safety Experience IAR User Reporting",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
});
var eP = n(183555),
    eM = n(256847),
    eT = n(939496),
    ey = n(993401),
    ek = n(996988),
    eD = n(207566);
function eL(e) {
    var t;
    let l,
        {
            user: i,
            guildId: A,
            viewProfileItem: m,
            appContext: N,
            popoutTargetRef: M,
            shouldShow: T,
            onRequestOpen: y,
            onRequestClose: k,
            children: D,
        } = e,
        { themeType: L } = (0, eT.E)(),
        { trackUserProfileAction: U } = (0, eP.NJ)(),
        { analyticsLocations: F, newestAnalyticsLocation: w } = (0, f.Ay)(d.A.USER_PROFILE_OVERFLOW_MENU);
    ((t = i.id),
        (l = I(t, A)),
        o.useEffect(() => {
            0 !== l.length && (0, R.tu)({ skuIds: l });
        }, [!0, l]));
    let K = {
            action: eN.pt.PRESS_OPTIONS,
            icon: a.MoreHorizontalIcon,
            tooltipText: G.intl.string(G.t["UKOtz+"]),
            "aria-label": G.intl.string(G.t["UKOtz+"]),
        },
        Q = (0, ev.A)({
            user: i,
            guildId: A,
            onAction: () => U({ action: "PRESS_INVITE_TO_SERVER", analyticsLocations: F }),
        }),
        q = (function (e) {
            let t,
                { user: l } = e,
                i =
                    ((t = (0, es.E9)("user_profile_overflow_menu")),
                    (0, E.bG)(
                        [eo.A, ei.Ay, er.A, ea.A],
                        () => t && eo.A.getGuildsArray().some((e) => (0, eu.Dr)(e, ea.A, ei.Ay, er.A)),
                        [t],
                    )),
                o = (0, E.bG)(
                    [g.default, el.A],
                    () => {
                        var e, t;
                        return (
                            (e = g.default.getCurrentUser()?.id),
                            (t = el.A),
                            null != l && l.id !== e && !l.bot && !l.isSystemUser() && !t.isBlockedOrIgnored(l.id)
                        );
                    },
                    [l],
                ),
                a = (0, en.A)(l.id);
            return i && o && a
                ? (0, r.jsx)(c.Dr, {
                      id: "invite-to-linked-game-organization",
                      label: G.intl.string(ed.default["wkSug+"]),
                      action: () => {
                          var e;
                          return (
                              (e = l.id),
                              void (0, ec.mM)(async () => {
                                  let { default: t } = await Promise.all([n.e(740775), n.e(787139), n.e(46937)]).then(
                                      n.bind(n, 889536),
                                  );
                                  return (n) => (0, r.jsx)(t, { userId: e, ...n });
                              })
                          );
                      },
                  })
                : null;
        })({ user: i }),
        Y = (0, ep.A)({
            user: i,
            guildId: A,
            location: w,
            appContext: N,
            onBlock: () => U({ action: "BLOCK", analyticsLocations: F }),
            onIgnore: () => U({ action: "IGNORE", analyticsLocations: F }),
            onUnblock: () => U({ action: "UNBLOCK", analyticsLocations: F }),
        }),
        z = (0, eh.A)({
            user: i,
            guildId: A,
            location: w,
            appContext: N,
            onBlock: () => U({ action: "BLOCK", analyticsLocations: F }),
            onIgnore: () => U({ action: "IGNORE", analyticsLocations: F }),
            onUnignore: () => U({ action: "UNIGNORE", analyticsLocations: F }),
        }),
        $ = (function (e) {
            let { user: t, guildId: n, color: l, onAction: i, location: o = d.A.CONTEXT_MENU, appContext: a } = e,
                s = eS.useExperiment({ location: o }, { autoTrackExposure: !0 }).enabled,
                u = (0, E.bG)([x.default], () => x.default.getId() === t.id);
            return !s || u || t.isNonUserBot()
                ? null
                : (0, r.jsx)(c.Dr, {
                      id: "report-user",
                      color: l,
                      label: G.intl.string(G.t.A1MM3D),
                      action: () => (0, eC.NW)(t, n === v.ME ? void 0 : n, i, a),
                  });
        })({
            user: i,
            guildId: A,
            location: w,
            appContext: N,
            color: "danger",
            onAction: () => U({ action: "REPORT", analyticsLocations: F }),
        }),
        X = (function (e) {
            let { user: t, guildId: n, color: l, onAction: i, appContext: o } = e,
                a = (0, E.bG)([ej.Ay], () => ej.Ay.get("iar_testing")),
                s = (0, E.bG)([g.default], () => g.default.getCurrentUser());
            return null != s && (t.id === s.id || t.isNonUserBot() || !s.isStaff() || !a)
                ? null
                : (0, r.jsx)(c.Dr, {
                      id: "staff-test-report-user",
                      color: l,
                      label: "[STAFF] Test Profile Report",
                      action: () => (0, eC.RR)(t, n === v.ME ? void 0 : n, i, o),
                  });
        })({
            user: i,
            guildId: A,
            location: w,
            appContext: N,
            color: "danger",
            onAction: () => U({ action: "REPORT", analyticsLocations: F }),
        }),
        Z = (function (e) {
            let { user: t, guildId: n, onSuccess: l } = e,
                i = (0, p.Ay)(t.id, n ?? void 0),
                a = ex.Q_.useSetting(),
                s = (0, eI.lF)(),
                u = (0, eb.g)("useCopyUserInfoItem"),
                d = (0, em.A)({
                    id: t.id,
                    label: G.intl.string(G.t["/AXYnE"]),
                    onSuccess: () => l?.(eN.pt.COPY_USER_ID),
                }),
                f = o.useMemo(() => (null == i ? null : i.getBannerURL({ canAnimate: !0, size: 1024 })), [i]),
                E = o.useCallback(() => {
                    ((0, eO.C)(t.id), l?.(eN.pt.COPY_USER_ID));
                }, [t.id, l]),
                R = o.useCallback(() => {
                    ((0, eO.C)((0, e_.A)(t.id)), l?.(eN.pt.COPY_PROFILE_LINK));
                }, [t.id, l]),
                g = o.useCallback(() => {
                    let e = t.getAvatarURL(n, 1024, !0);
                    (eA()(null != e, "cannot copy null avatar URL"), (0, eO.C)(e), l?.(eN.pt.COPY_AVATAR_IMAGE_LINK));
                }, [t, n, l]),
                A = o.useCallback(() => {
                    (eA()(null != f, "cannot copy null banner URL"), (0, eO.C)(f), l?.(eN.pt.COPY_BANNER_IMAGE_LINK));
                }, [f, l]);
            return !__OVERLAY__ && a && eO.p5 && null != t.id
                ? s
                    ? (0, r.jsxs)(c.Dr, {
                          id: "copy-user-info",
                          label: G.intl.string(G.t.QvQeLv),
                          children: [
                              (0, r.jsx)(c.Dr, { id: "copy-user-id", label: G.intl.string(G.t["/AXYnE"]), action: E }),
                              u &&
                                  (0, r.jsx)(c.Dr, {
                                      id: "copy-user-profile-link",
                                      label: G.intl.string(G.t["E+rSVy"]),
                                      action: R,
                                  }),
                              (null != t.avatar || t.hasAvatarForGuild(n)) &&
                                  (0, r.jsx)(c.Dr, {
                                      id: "copy-user-avatar-link",
                                      label: G.intl.string(G.t.gERDvM),
                                      action: g,
                                  }),
                              null != f &&
                                  (0, r.jsx)(c.Dr, {
                                      id: "copy-user-banner-link",
                                      label: G.intl.string(G.t.hsNv0R),
                                      action: A,
                                  }),
                          ],
                      })
                    : d
                : null;
        })({ user: i, guildId: A, onSuccess: (e) => U({ action: e, analyticsLocations: F }) }),
        J = (function (e, t, n) {
            let l = (0, E.bG)([x.default], () => x.default.getId() === e.id),
                i = I(e.id, t),
                { analyticsLocations: o } = (0, f.Ay)(d.A.USER_PROFILE_OVERFLOW_MENU),
                a = (0, b.n8)(e, t),
                s = (0, E.bG)(
                    [_.A],
                    () =>
                        i.map((e) => {
                            let t = _.A.getProductsForSku(e)
                                ?.flatMap((e) => e.skus)
                                .find((t) => t.id === e);
                            return {
                                skuId: e,
                                isShoppableItem:
                                    null != t &&
                                    ("function" != typeof t.isAvailable
                                        ? (P.A.captureMessage("isShoppableCollectibleSku: sku missing isAvailable()", {
                                              extra: { skuId: t.id, skuType: t.type },
                                          }),
                                          !1)
                                        : t.isAvailable() && t.tenantMetadata?.collectibles?.sourceType === S.SHOP),
                                productType: t?.tenantMetadata?.collectibles?.type,
                            };
                        }),
                    [i],
                    B,
                ),
                u = i.length > 0 || null != a;
            if (l || !u) return null;
            let R = null != a ? G.intl.string(W.default["2PKrQO"]) : G.intl.string(G.t.xNdRDO);
            return (0, r.jsxs)(c.Dr, {
                id: "shop-this-look",
                label: R,
                children: [
                    a,
                    (0, r.jsx)(c.rX, {
                        children: s.map((e) => {
                            let { skuId: t, isShoppableItem: l, productType: i } = e;
                            return (0, r.jsx)(
                                c.Dr,
                                {
                                    id: `shop-this-look-${t}`,
                                    navigable: l,
                                    disabled: !l,
                                    keepItemStyles: l,
                                    render: (e) => {
                                        let { disabled: l } = e;
                                        return (0, r.jsx)(V, { skuId: t, disabled: l, source: n });
                                    },
                                    action: l
                                        ? () => {
                                              (C({
                                                  action: j.ROW_CLICKED,
                                                  skuId: t,
                                                  productType: i,
                                                  isDisabled: !1,
                                                  source: n,
                                              }),
                                                  (0, O.B)({
                                                      skuId: t,
                                                      analyticsLocations: o,
                                                      analyticsSource: d.A.USER_PROFILE_OVERFLOW_MENU,
                                                  }));
                                          }
                                        : void 0,
                                },
                                t,
                            );
                        }),
                    }),
                ],
            });
        })(i, A, L),
        ee = (0, b.p7)(i, A),
        et = [
            [
                m,
                (0, eM.A)({ user: i, location: "UserProfileOverflowMenuButton" }),
                ee,
                J,
                Q,
                q,
                (function (e) {
                    let { user: t } = e,
                        l = ef.useConfig({ location: "user_profile_overflow_menu" }),
                        i = (0, eE.d)(t),
                        a = (0, eR.p)(l && i ? t.id : null),
                        { analyticsLocations: s } = (0, f.Ay)(d.A.USER_PROFILE_OVERFLOW_MENU),
                        u = o.useCallback(() => {
                            (h.default.track(v.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: s }),
                                (0, ec.mM)(async () => {
                                    let { default: e } = await Promise.all([
                                        n.e(768071),
                                        n.e(492599),
                                        n.e(531741),
                                        n.e(465157),
                                        n.e(733314),
                                        n.e(819305),
                                        n.e(143883),
                                        n.e(313699),
                                    ]).then(n.bind(n, 536110));
                                    return (n) =>
                                        (0, r.jsx)(e, {
                                            ...n,
                                            recipient: t,
                                            sourceAnalyticsLocation: d.A.USER_PROFILE_OVERFLOW_MENU,
                                        });
                                }));
                        }, [s, t]);
                    return l && i && a
                        ? (0, r.jsx)(c.Dr, {
                              id: "referral-profile-share-nitro",
                              label: G.intl.string(G.t.JSSBzo),
                              iconLeft: H.t,
                              leadingAccessory: { type: "icon", icon: H.t, size: "sm" },
                              action: u,
                          })
                        : null;
                })({ user: i }),
            ],
            [z, Y, $, X],
            [Z],
        ];
    return et.every((e) => e.every((e) => null == e))
        ? null
        : (0, r.jsx)(f.f5, {
              value: F,
              children: (0, r.jsx)(s.Y, {
                  targetElementRef: M,
                  shouldShow: T,
                  onRequestOpen: y,
                  onRequestClose: k,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, r.jsx)(u.W, {
                          "data-menu-migrated-auto": !0,
                          navId: "user-profile-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": G.intl.string(G.t.AXIHpV),
                          children: et.map((e, t) => (0, r.jsx)(c.rX, { children: e.map((e) => e) }, t)),
                      });
                  },
                  children: (e) => D({ ...e, ...K }),
              }),
          });
}
function eU(e) {
    let t = o.useRef(null);
    return (0, r.jsx)(K.ZQ, {
        user: e.user,
        guildId: e.guildId,
        location: "UserProfileOverflowMenuIconButton",
        children: (0, r.jsx)(eL, {
            ...e,
            popoutTargetRef: t,
            children: (e) => (0, r.jsx)(ey.q3, { buttonRef: t, ...e }),
        }),
    });
}
function eG(e) {
    let t = o.useRef(null),
        { themeType: n } = (0, eT.E)(),
        l = n === ek.d.POPOUT,
        { isVisible: i, markAsDismissed: a } = (function (e) {
            let [t, n] = (0, q.kn)(e ? [Q.M.DISPLAY_NAME_STYLES_TRY_COACHMARK] : []);
            return { isVisible: null != t, markAsDismissed: n };
        })((0, K.sn)() && l),
        [s, u] = o.useState(!1),
        c = o.useCallback(() => {
            (u(!0), a(Z.i.TAKE_ACTION));
        }, [a]);
    return (0, r.jsxs)("div", {
        className: eD.g2,
        children: [
            (0, r.jsx)("div", {
                className: i ? eD.t8 : void 0,
                children: (0, r.jsx)(eL, {
                    ...e,
                    popoutTargetRef: t,
                    shouldShow: l ? s : void 0,
                    onRequestOpen: c,
                    onRequestClose: () => u(!1),
                    children: (e) => (0, r.jsx)(ey.br, { buttonRef: t, ...e }),
                }),
            }),
            i &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("div", { className: eD.Vx, "aria-hidden": !0 }),
                        (0, r.jsx)(et, { markAsDismissed: a, targetElementRef: t, onDismissibleContentClick: c }),
                    ],
                }),
        ],
    });
}
function eF(e) {
    return (0, r.jsx)(K.ZQ, {
        user: e.user,
        guildId: e.guildId,
        location: "UserProfileOverflowMenuBannerButton",
        children: (0, r.jsx)(eG, { ...e }),
    });
}
