i.d(t, { K: () => tM, A: () => tF });
var n = i(627968),
    s = i(64700),
    l = i(503698),
    r = i.n(l),
    a = i(364522),
    o = i(761508),
    d = i(707554),
    c = i(140735),
    u = i(207803),
    g = i(183555),
    m = i(61881),
    f = i(17928),
    x = i(652215),
    h = i(349288),
    I = i(517164),
    p = i(114212),
    A = i(290863),
    j = i(461213),
    E = i(975571),
    S = i(146655),
    T = i(489379),
    v = i(402857),
    N = i(353394),
    b = i(64622),
    C = i(986712),
    w = i(435558),
    R = i(297264),
    k = i(834730),
    O = i(534890),
    y = i(366010),
    _ = i(308528),
    L = i(736653),
    G = i(573648),
    D = i(780964),
    P = i(766075),
    M = i(562153),
    U = i(993401),
    F = i(375708),
    W = i(732306);
let H = [
        () => F.intl.string(F.t.madJdE),
        () => F.intl.string(F.t.NYmfoP),
        () => F.intl.string(F.t.R2PaCg),
        () => F.intl.string(F.t.laSR8h),
        () => F.intl.string(F.t.DnsJE8),
    ],
    B = [
        () => F.intl.string(F.t.nFSbeE),
        () => F.intl.string(F.t.gTcxOz),
        () => F.intl.string(F.t["8T0wYj"]),
        () => F.intl.string(F.t.BIHl1g),
        () => F.intl.string(F.t["jhBm0+"]),
    ],
    V = [
        () => F.intl.string(F.t.AyMGXA),
        () => F.intl.string(F.t.aAFW7V),
        (e) => F.intl.formatToPlainString(F.t.h2g0cM, { name: e }),
        () => F.intl.string(F.t.rrYh58),
        () => F.intl.string(F.t["HX3K+F"]),
        () => F.intl.string(F.t["/yW3aY"]),
        () => F.intl.string(F.t["PmL/v0"]),
        () => F.intl.string(F.t.IALa3h),
        () => F.intl.string(F.t.HRcTFL),
        () => F.intl.string(F.t.NuCqPt),
        () => F.intl.string(F.t["M1tw+4"]),
        () => F.intl.string(F.t.UBm1y2),
        () => F.intl.string(F.t.Cu95PQ),
        () => F.intl.string(F.t["R/wFuh"]),
        () => F.intl.string(F.t.HQPAVT),
        () => F.intl.string(F.t.YolGh4),
    ],
    X = [
        x.fg2.STEAM,
        x.fg2.PLAYSTATION,
        x.fg2.XBOX,
        x.fg2.TWITCH,
        x.fg2.BATTLENET,
        x.fg2.LEAGUE_OF_LEGENDS,
        x.fg2.EPIC_GAMES,
        x.fg2.RIOT_GAMES,
        x.fg2.ROBLOX,
        x.fg2.SPOTIFY,
        x.fg2.YOUTUBE,
        x.fg2.CRUNCHYROLL,
        x.fg2.BUNGIE,
    ];
function z(e) {
    let { heading: t, bodyText: i, children: s } = e;
    return (0, n.jsxs)("div", {
        className: W.Ie,
        children: [
            (0, n.jsxs)("div", {
                className: W.FS,
                children: [
                    (0, n.jsx)(R.D, { variant: "heading-md/medium", color: "text-strong", children: t }),
                    (0, n.jsx)(k.E, { variant: "text-sm/normal", color: "text-default", children: i }),
                ],
            }),
            s,
        ],
    });
}
function Y() {
    let e = F.intl.string(F.t.RnD2yZ),
        [t] = s.useState(() => ((0, w.sample)(H) ?? H[0])());
    return (0, n.jsx)(z, { heading: e, bodyText: t });
}
function K() {
    let e = F.intl.string(F.t.bFgqYJ),
        [t] = s.useState(() => ((0, w.sample)(B) ?? B[0])());
    return (0, n.jsx)(z, { heading: e, bodyText: t });
}
function q(e) {
    let { user: t, guildId: i, channelId: l, onClose: r } = e,
        a = M.Ay.getName(i, l, t),
        o = F.intl.formatToPlainString(F.t.sjSitP, { name: a }),
        [d] = s.useState(() => ((0, w.sample)(V) ?? V[0])(a)),
        c = s.useCallback(() => {
            _.A.openPrivateChannel({ recipientIds: t.id }), r?.();
        }, [t.id, r]);
    return (0, n.jsx)(z, {
        heading: o,
        bodyText: d,
        children: (0, n.jsx)("div", {
            className: W.v0,
            children: (0, n.jsx)(U.FD, { icon: O.o, text: F.intl.string(F.t["g33r/P"]), onClick: c }),
        }),
    });
}
function Q() {
    let e = (0, L.Ay)();
    return (0, n.jsx)("div", {
        className: W.HU,
        children: X.map((t, i) => {
            let s = G.A.get(t);
            if (null == s) return null;
            let l = (0, y.M)(e) ? s.icon.darkPNG : s.icon.lightPNG;
            return (0, n.jsx)("img", { src: l, alt: s.name, className: W.gj }, i);
        }),
    });
}
function J(e) {
    let { onClose: t } = e,
        i = s.useCallback(() => {
            t?.(), (0, P.openUserSettings)(D.X.CONNECTIONS_PANEL);
        }, [t]),
        l = s.useCallback(() => {
            t?.(), (0, P.openUserSettings)(D.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB);
        }, [t]);
    return (0, n.jsxs)(z, {
        heading: F.intl.string(F.t.VB6LWY),
        bodyText: F.intl.string(F.t.KpjsU9),
        children: [
            (0, n.jsx)(Q, {}),
            (0, n.jsxs)("div", {
                className: W.v0,
                children: [
                    (0, n.jsx)(U.FD, { text: F.intl.string(F.t["/Hl24U"]), onClick: i }),
                    (0, n.jsx)(U.FD, { text: F.intl.string(F.t.GTCx0p), onClick: l }),
                ],
            }),
        ],
    });
}
var Z = i(83013),
    $ = i(518477),
    ee = i(740620);
function et(e) {
    let { user: t, currentUser: i, displayProfile: s, guildId: l, channelId: r, onClose: a } = e,
        { live: o, recent: d, stream: c } = (0, S.A)(t.id),
        { voiceChannel: u, voiceActivity: g } = (0, T.A)({ userId: t.id, guildId: l }),
        m = (0, f.bG)([I.A], () => I.A.isFetchingUserOutbox(t.id)),
        w = t.id === i.id,
        R = (0, f.bG)([j.A, A.A], () => {
            let e = w ? j.A.getStatus() : A.A.getStatus(t.id);
            return e === x.clD.OFFLINE || e === x.clD.INVISIBLE;
        }),
        k = o.length > 0 || null != c,
        O = s?.private !== !0 && null == c && null == g && null != u,
        y = !R && (k || O),
        _ = d.length > 0;
    return y || _ || !m
        ? y || _ || m
            ? (0, n.jsxs)(tM, {
                  className: ee.XG,
                  fade: !0,
                  children: [
                      y
                          ? (0, n.jsx)(Z.A, {
                                heading: F.intl.string(F.t.J6STd9),
                                children: (0, n.jsxs)("ul", {
                                    className: ee.kR,
                                    children: [
                                        null != c &&
                                            (0, n.jsx)("li", {
                                                children: (0, n.jsx)(b.A, {
                                                    user: t,
                                                    currentUser: i,
                                                    stream: c,
                                                    onClose: a,
                                                }),
                                            }),
                                        o.map((e, s) =>
                                            (0, n.jsx)(
                                                "li",
                                                {
                                                    children: (0, n.jsx)(v.A, {
                                                        user: t,
                                                        currentUser: i,
                                                        activity: e,
                                                        onClose: a,
                                                    }),
                                                },
                                                `live-${s}`,
                                            ),
                                        ),
                                        O &&
                                            (0, n.jsx)("li", {
                                                children: (0, n.jsx)(C.A, {
                                                    user: t,
                                                    currentUser: i,
                                                    voiceChannel: u,
                                                    onClose: a,
                                                }),
                                            }),
                                    ],
                                }),
                            })
                          : null,
                      _
                          ? (0, n.jsx)(Z.A, {
                                heading: F.intl.string(F.t.jzgEoL),
                                introText: w
                                    ? F.intl.format(F.t["4bk9Ak"], {
                                          learnMoreHook: (e, t) =>
                                              (0, n.jsx)(
                                                  h.Anchor,
                                                  {
                                                      href: E.A.getArticleURL(x.MVz.ACTIVITY_STATUS_SETTINGS),
                                                      children: e,
                                                  },
                                                  t,
                                              ),
                                      })
                                    : void 0,
                                scrollTargetId: $.bk.RECENT_ACTIVITY,
                                children: (0, n.jsx)("ul", {
                                    className: ee.kR,
                                    children: d.map((e) =>
                                        (0, n.jsx)(
                                            "li",
                                            { children: (0, n.jsx)(N.A, { user: t, entry: e, onClose: a }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                            })
                          : null,
                  ],
              })
            : w
              ? (0, n.jsx)(J, { onClose: a })
              : (0, n.jsx)(q, { user: t, guildId: s?.guildId ?? l, channelId: r, onClose: a })
        : (0, n.jsx)("div", {
              className: ee.kR,
              children: Array.from({ length: 8 }).map((e, t) =>
                  (0, n.jsxs)(
                      "div",
                      {
                          className: ee.kr,
                          children: [
                              (0, n.jsx)(p.FQ, { width: 60, opacity: 0.08 }),
                              (0, n.jsx)(p.FQ, { width: 135, opacity: 0.08 }),
                          ],
                      },
                      t,
                  ),
              ),
          });
}
var ei = i(163126),
    en = i(688810),
    es = i(913453),
    el = i(229187),
    er = i(975732),
    ea = i(503062),
    eo = i(851284);
function ed(e) {
    let { user: t, guildId: i, channelId: l, onClose: r } = e,
        { analyticsLocations: a } = (0, en.Ay)(),
        { context: o, trackUserProfileAction: d } = (0, g.NJ)(),
        { mutualFriends: c, mutualFriendsCount: u } = (0, es.A)(t),
        m = (0, ei.A)();
    return (
        s.useEffect(() => {
            (0, el.A)(t.id, m);
        }, [t.id, m]),
        (0, n.jsx)(tM, {
            className: eo.XG,
            children:
                null == c
                    ? Array.from({ length: u ?? 10 }).map((e, t) =>
                          (0, n.jsxs)(
                              "div",
                              {
                                  className: eo.D$,
                                  children: [
                                      (0, n.jsx)(p.FQ, { width: 40, opacity: 0.08 }),
                                      (0, n.jsx)(p.FQ, { width: 135, opacity: 0.08 }),
                                  ],
                              },
                              t,
                          ),
                      )
                    : 0 === c.length
                      ? (0, n.jsx)(Y, {})
                      : c.map((e) => {
                            let { key: t, user: s, status: c } = e;
                            return (0, n.jsx)(
                                ea.A,
                                {
                                    user: s,
                                    status: c,
                                    guildId: i,
                                    channelId: l,
                                    onSelect: () => {
                                        r?.(),
                                            d({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (0, er.openUserProfileModal)({
                                                ...o,
                                                userId: s.id,
                                                sourceAnalyticsLocations: a,
                                            });
                                    },
                                },
                                t,
                            );
                        }),
        })
    );
}
var ec = i(398590),
    eu = i(345942),
    eg = i(51943);
function em(e) {
    let { user: t, onClose: i } = e,
        { trackUserProfileAction: s } = (0, g.NJ)(),
        { mutualGuilds: l, isFetching: r } = (0, es.A)(t);
    return (0, n.jsx)(tM, {
        className: eo.XG,
        fade: !0,
        children:
            null == l && r
                ? Array.from({ length: 10 }).map((e, t) =>
                      (0, n.jsxs)(
                          "div",
                          {
                              className: eo.Y7,
                              children: [
                                  (0, n.jsx)(p.FQ, { width: 40, opacity: 0.08 }),
                                  (0, n.jsx)(p.FQ, { width: 135, opacity: 0.08 }),
                              ],
                          },
                          t,
                      ),
                  )
                : (null != l || r) && l?.length !== 0
                  ? l?.map((e) => {
                        let { guild: l, nick: r } = e;
                        return (0, n.jsx)(
                            eg.A,
                            {
                                user: t,
                                guild: l,
                                nick: r,
                                onSelect: () => {
                                    s({ action: "PRESS_MUTUAL_GUILD" }), (0, eu.u)(l.id), i(), (0, ec.jH)();
                                },
                            },
                            l.id,
                        );
                    })
                  : (0, n.jsx)(K, {}),
    });
}
var ef = i(890093),
    ex = i(132500),
    eh = i(777480),
    eI = i(192308),
    ep = i(821609),
    eA = i(34188),
    ej = i(307301),
    eE = i(825484),
    eS = i(952270),
    eT = i(885574),
    ev = i(444927),
    eN = i(793574),
    eb = i(429913),
    eC = i(662388),
    ew = i(895360),
    eR = i(152472),
    ek = i(267102),
    eO = i(274681),
    ey = i(400669);
i(321073);
var e_ = i(721932),
    eL = i(403362),
    eG = i(832163),
    eD = i(501838),
    eP = i(44724),
    eM = i(808247),
    eU = i(909536),
    eF = i(673843),
    eW = i(561794),
    eH = i(855052),
    eB = i(287809),
    eV = i(321191),
    eX = i(600761),
    ez = i(579950),
    eY = i(535089),
    eK = i(128988),
    eq = i(688807),
    eQ = i(575593),
    eJ = i(772427),
    eZ = i(107563),
    e$ = i(840411),
    e0 = i(711690),
    e1 = i(248550),
    e8 = i(428262),
    e2 = i(451395),
    e7 = i(823016),
    e5 = i(130821);
function e6(e) {
    let { item: t, index: i, wishlistId: s, onReorder: l, children: r } = e,
        { manageFocusOnReorder: a } = (0, e7.r)();
    return (0, n.jsx)(e2.mG, {
        index: i,
        itemId: String(t.skuId),
        listType: String(s),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: t },
        "aria-label": F.intl.formatToPlainString(F.t["7SnyMA"], { positionNumber: i + 1 }),
        onReorder: l,
        onEnd: () => a(String(t.skuId)),
        className: e5.C,
        dropBeforeClassName: e5.A,
        dropAfterClassName: e5.Ze,
        draggingClassName: e5.Id,
        children: (0, n.jsx)("div", { className: e5.An, children: r }),
    });
}
let e3 = s.memo(function (e) {
    let { item: t, index: i, profileOwner: l, showEditingControls: r, wishlistId: a, isDragging: o, onReorder: d } = e,
        { registerDragHandleRef: c } = (0, e7.r)(),
        u = s.useMemo(
            () =>
                r
                    ? (0, n.jsx)(e2.jV, {
                          buttonRef: c(String(t.skuId)),
                          className: e5.BU,
                          onFocus: (e) => e.stopPropagation(),
                      })
                    : void 0,
            [r, c, t.skuId],
        ),
        g = s.useMemo(
            () => (0, n.jsx)(e1.A, { item: t, wishlistOwner: l, wishlistId: a, isDragging: o, dragHandle: u }),
            [t, l, o, u, a],
        );
    return r
        ? (0, n.jsx)("li", {
              children: (0, n.jsx)(e6, { item: t, index: i, wishlistId: a, onReorder: d, children: g }),
          })
        : (0, n.jsx)("li", { children: g });
});
function e9(e) {
    let { items: t, profileOwner: i, showEditingControls: l, isSortingNitroToFront: r } = e,
        a = eB.default.getCurrentUser(),
        { defaultWishlistId: o } = (0, f.cf)([eV.A], () => ({ defaultWishlistId: eV.A.getFirstWishlistId(i.id) })),
        d = (0, eJ.rV)("UserProfileModalV2WishlistGrid"),
        c = s.useMemo(
            () => (d ? t : t.filter((e) => e.sku?.tenantMetadata?.collectibles?.type !== eQ.R.PROFILE_FRAME)),
            [t, d],
        ),
        u = s.useMemo(() => (r ? (0, e$.gm)(c) : c), [c, r]),
        { isDragging: g } = (0, eq.V)((e) => ({ isDragging: e.isDragging() })),
        m = s.useCallback(
            (e, t) => {
                if (e === t || null == o || 0 === u.length || e < 0 || e >= u.length || t < 0 || t >= u.length) return;
                let i = eZ.A.getWishlist(o);
                if (null == i) return;
                let n = u[e],
                    { newWishlistData: s, previousSkuId: l, nextSkuId: r } = (0, e$.Ap)(i, u, e, t);
                eM.A.reorderWishlistItem(o, n.skuId, { previousSkuId: l, nextSkuId: r, newWishlistData: s });
            },
            [o, u],
        );
    if (null == a || null == o) return null;
    let x = (0, n.jsx)("ul", {
        className: e5.Vg,
        children: u.map((e, t) =>
            (0, n.jsx)(
                e3,
                {
                    item: e,
                    index: t,
                    profileOwner: i,
                    showEditingControls: l,
                    wishlistId: o,
                    isDragging: g,
                    onReorder: m,
                },
                e.skuId,
            ),
        ),
    });
    return l ? (0, n.jsx)(e7.B, { emptyListFallbackRef: null, children: x }) : x;
}
function e4(e) {
    let t = (0, e0.a)("UserProfileModalV2WishlistGrid");
    return (0, n.jsx)(e9, { ...e, isSortingNitroToFront: t });
}
function te(e) {
    let t = eB.default.getCurrentUser()?.id,
        i = null != t && t !== e.profileOwner.id,
        s = e.items.some((e) => e8.Ay.isPremiumSku(e.skuId));
    return i && s ? (0, n.jsx)(e4, { ...e }) : (0, n.jsx)(e9, { ...e, isSortingNitroToFront: !1 });
}
var tt = i(815021),
    ti = i(299679),
    tn = i(889586),
    ts = i(973912),
    tl = i(554146),
    tr = i(131607),
    ta = i(945810),
    to = i(927813),
    td = i(49999);
let tc = 90 * to.A.Millis.DAY,
    tu = 90 * to.A.Millis.DAY,
    tg = (0, ta.mj)({
        name: "2026-07-smag-wishlist-recommendations-dismiss-threshold",
        kind: "user",
        defaultConfig: { minItemsToDismiss: 1 },
        variations: { 0: { minItemsToDismiss: 1 }, 1: { minItemsToDismiss: 3 }, 2: { minItemsToDismiss: 10 } },
    });
var tm = i(294085);
function tf(e) {
    let {
            user: t,
            wishlist: i,
            hasFetchedWishlist: l = !1,
            analyticsLocations: r,
            impressionSessionId: a,
            className: o,
        } = e,
        {
            isVisible: d,
            isDismissible: c,
            markAsDismissed: u,
        } = (function (e) {
            let { userId: t, wishlist: i, hasFetchedWishlist: n } = e,
                { minItemsToDismiss: l } = tg.useConfig({ location: "user_profile_wishlist_suggestions_grid" }),
                r = (i?.items.length ?? 0) >= l,
                [a, o] = s.useState(!1);
            !n || r || a || o(!0);
            let d = (0, f.bG)(
                    [eV.A],
                    () => (null != i ? new Date(eV.A.getWishlistSettings(t, i.id)?.updated_at ?? 0).valueOf() : 0),
                    [i, t],
                ),
                [c, u] = (0, tr.Wl)(
                    tl.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS,
                    { showAfterTimestamp: d + tu, cooldownDurationMs: tc },
                    void 0,
                    !0,
                ),
                g = c === tl.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
            return {
                isVisible: n && (g || a || !r),
                isDismissible: r,
                markAsDismissed: s.useCallback(() => {
                    o(!1), u(td.i.USER_DISMISS);
                }, [u]),
            };
        })({ userId: t.id, wishlist: i, hasFetchedWishlist: l });
    return d
        ? (0, n.jsx)(tx, {
              user: t,
              wishlist: i,
              analyticsLocations: r,
              impressionSessionId: a,
              className: o,
              isDismissible: c,
              markAsDismissed: u,
          })
        : null;
}
function tx(e) {
    let {
            user: t,
            wishlist: i,
            analyticsLocations: s,
            impressionSessionId: l,
            className: a,
            isDismissible: o,
            markAsDismissed: d,
        } = e,
        { items: c } = (0, tn.L)({
            userId: t.id,
            wishlist: i,
            numWishlistItemsToRecommend: 15,
            maxWishlistItemsToShow: 8,
            source: eW.B5.USER_PROFILE,
        });
    return 0 === c.length
        ? null
        : (0, n.jsxs)("div", {
              className: r()(tm.kL, a),
              children: [
                  (0, n.jsxs)("div", {
                      className: tm.wx,
                      children: [
                          (0, n.jsx)(k.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              children: F.intl.string(F.t["+GB8Kt"]),
                          }),
                          o &&
                              (0, n.jsx)("div", {
                                  className: tm.b,
                                  children: (0, n.jsx)(tt.J, { size: "xs", onClick: d }),
                              }),
                      ],
                  }),
                  (0, n.jsx)(ti.dB, {
                      newValue: {
                          impressionSessionId: l,
                          surface: "user_profile_wishlist_suggestions_grid",
                          wishlistOwnerId: t.id,
                          wishlistId: i?.id,
                          analyticsLocations: s,
                      },
                      children: (0, n.jsx)(ts.A, {
                          items: c,
                          wishlist: i,
                          className: r()(tm.Vg, tm.e6),
                          analyticsLocations: s,
                      }),
                  }),
              ],
          });
}
var th = i(477782),
    tI = i(403581),
    tp = i(922016),
    tA = i(980707),
    tj = i(789645),
    tE = i(847374),
    tS = i(486020),
    tT = i(420641);
function tv(e) {
    let {
            title: t,
            variant: i = "secondary",
            handleOpenCollectiblesShop: l,
            handleOpenGameShop: r,
            handleAddNitroToWishlist: a,
            socialLayerStorefrontApplicationIds: o,
        } = e,
        d = s.useRef(null),
        [c, u] = s.useState(!1),
        g = (function (e) {
            let { applications: t, handleOpenGameShop: i } = e;
            return s.useMemo(
                () =>
                    t.filter(eL.Vq).map((e) => {
                        let t = tS.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 20 });
                        return {
                            id: `browse-social-layer-storefront-${e.id}`,
                            label: F.intl.formatToPlainString(F.t["HDT/rg"], { applicationName: e.name }),
                            iconLeft: null != t ? () => (0, n.jsx)("img", { className: tT.I, src: t, alt: "" }) : eA.U,
                            leadingAccessory: null != t ? { type: "image", src: t } : { type: "icon", icon: eA.U },
                            action: () => i?.(e.id),
                        };
                    }),
                [t, i],
            );
        })({ applications: (0, eb.A)(o), handleOpenGameShop: r }),
        m = s.useMemo(
            () =>
                (0, n.jsxs)(th.rX, {
                    children: [
                        null != l &&
                            (0, n.jsx)(th.Dr, {
                                id: "browse-collectibles-shop",
                                label: F.intl.string(F.t["5upuqx"]),
                                iconLeft: eA.U,
                                leadingAccessory: { type: "icon", icon: eA.U },
                                action: l,
                            }),
                        null != a &&
                            (0, n.jsx)(th.Dr, {
                                id: "add-nitro-to-wishlist",
                                label: F.intl.string(F.t.lG6a5x),
                                iconLeft: tI.t,
                                leadingAccessory: { type: "icon", icon: tI.t },
                                action: a,
                            }),
                        null != r &&
                            g.map((e) => {
                                let { id: t, label: i, iconLeft: s, leadingAccessory: l, action: r } = e;
                                return (0, n.jsx)(
                                    th.Dr,
                                    { id: t, label: i, iconLeft: s, leadingAccessory: l, action: r },
                                    t,
                                );
                            }),
                    ],
                }),
            [l, r, a, g],
        );
    return (0, n.jsx)(tp.Y, {
        targetElementRef: d,
        position: "bottom",
        onRequestOpen: () => u(!0),
        onRequestClose: () => u(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(tA.W, {
                "data-menu-migrated": !0,
                navId: "wishlist-overflow-menu",
                onSelect: void 0,
                onClose: t,
                "aria-label": F.intl.string(F.t.GdNkvG),
                children: m,
            });
        },
        children: (e) =>
            (0, n.jsx)(ep.$, {
                buttonRef: d,
                variant: i,
                size: "sm",
                icon: c ? tj.P : tE.a,
                iconPosition: "end",
                text: t,
                ...e,
            }),
    });
}
var tN = i(509434),
    tb = i(365199);
let tC = E.A.getArticleURL(x.MVz.CUSTOM_PROFILES_WISHLIST);
function tw(e) {
    let { isOwner: t, isWishlistPublic: i, onToggleVisibility: l } = e,
        r = s.useRef(null),
        { analyticsLocations: a } = (0, en.Ay)(eN.A.USER_PROFILE_WISHLIST),
        o = s.useMemo(
            () =>
                t
                    ? (0, n.jsxs)(th.rX, {
                          children: [
                              (0, n.jsx)(th.fP, {
                                  id: "wishlist-privacy-setting",
                                  label: F.intl.string(F.t.b2nFyA),
                                  subtext: F.intl.string(F.t.dw58pE),
                                  checked: i,
                                  action: l,
                              }),
                              (0, n.jsx)(th.bX, {}),
                              (0, n.jsx)(th.Dr, {
                                  id: "wishlist-privacy-setting2",
                                  label: F.intl.string(F.t.hvVgAZ),
                                  icon: tN.I,
                                  trailingIndicator: { type: "icon", icon: tN.I },
                                  action: () => window.open(tC),
                              }),
                          ],
                      })
                    : null,
            [t, i, l],
        );
    return null == o
        ? null
        : (0, n.jsx)(en.f5, {
              value: a,
              children: (0, n.jsx)(tp.Y, {
                  targetElementRef: r,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, n.jsx)(tA.W, {
                          "data-menu-migrated": !0,
                          navId: "wishlist-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": F.intl.string(F.t.GdNkvG),
                          children: o,
                      });
                  },
                  children: (e) =>
                      (0, n.jsx)(U.q3, {
                          buttonRef: r,
                          icon: tb.j,
                          tooltipText: F.intl.string(F.t["UKOtz+"]),
                          action: "PRESS_OPTIONS",
                          ...e,
                      }),
              }),
          });
}
var tR = i(202541),
    tk = i(964350);
function tO(e) {
    let { socialLayerStorefrontApplicationIds: t, handleOpenShop: i, handleOpenGameShop: s } = e;
    return t.length > 0
        ? (0, n.jsx)(tv, {
              title: F.intl.string(F.t["i/yzHs"]),
              handleOpenCollectiblesShop: i,
              handleOpenGameShop: s,
              socialLayerStorefrontApplicationIds: t,
          })
        : (0, n.jsx)(ep.$, {
              variant: "secondary",
              size: "sm",
              icon: eA.U,
              text: F.intl.string(F.t["i/yzHs"]),
              onClick: i,
          });
}
function ty(e) {
    let {
        showEditingControls: t,
        socialLayerStorefrontApplicationIds: i,
        isWishlistPublic: s,
        handleOpenShop: l,
        handleOpenGameShop: r,
        handleAddNitroToWishlist: a,
        handleToggleWishlistVisibility: o,
    } = e;
    return (0, n.jsxs)("div", {
        className: tk.$s,
        children: [
            t &&
                (i.length > 0 || null != a
                    ? (0, n.jsx)(tv, {
                          title: F.intl.string(F.t.SDUwM0),
                          handleOpenCollectiblesShop: l,
                          handleOpenGameShop: i.length > 0 ? r : void 0,
                          handleAddNitroToWishlist: a,
                          socialLayerStorefrontApplicationIds: i,
                      })
                    : (0, n.jsx)(ep.$, {
                          variant: "secondary",
                          size: "sm",
                          icon: ej.j,
                          text: F.intl.string(F.t.SDUwM0),
                          onClick: l,
                      })),
            (0, n.jsx)(tw, { isOwner: !0, isWishlistPublic: s, onToggleVisibility: o }),
        ],
    });
}
function t_(e) {
    let { application: t, handleOpenGameShop: i, handleOpenGameShopMouseDown: l } = e,
        r = s.useCallback(() => {
            i(t.id);
        }, [t, i]),
        a = s.useCallback(() => {
            l(t.id);
        }, [t, l]);
    return (0, n.jsx)(ep.$, {
        variant: "primary",
        size: "sm",
        icon: eA.U,
        text: F.intl.formatToPlainString(F.t["HDT/rg"], { applicationName: t.name }),
        onClick: r,
        onMouseDown: a,
    });
}
function tL(e) {
    let {
            showEditingControls: t,
            socialLayerStorefrontApplicationIds: i,
            handleOpenShop: l,
            handleOpenGameShop: r,
            handleOpenGameShopMouseDown: a,
        } = e,
        o = (0, ek.Us)() === x.BRT.OVERLAY,
        d = (0, eb.A)(i),
        c = s.useMemo(() => {
            if (o || 0 === i.length) return null;
            let e = d.reduce((e, t) => (null == t || (e[t.id] = t), e), {});
            if (1 === i.length) {
                let t = e[i[0]];
                return null == t
                    ? null
                    : (0, n.jsx)(t_, { application: t, handleOpenGameShop: r, handleOpenGameShopMouseDown: a });
            }
            return (0, n.jsx)(tv, {
                title: F.intl.string(F.t.FkjcWY),
                variant: "primary",
                handleOpenGameShop: r,
                socialLayerStorefrontApplicationIds: i,
            });
        }, [o, i, r, d, a]);
    return (0, n.jsxs)("div", {
        className: tk.y7,
        children: [
            (0, n.jsxs)("div", {
                className: tk.q6,
                children: [
                    (0, n.jsx)(R.D, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: F.intl.string(F.t.HGnLLT),
                    }),
                    (0, n.jsx)(k.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: F.intl.string(F.t["/X1ny6"]),
                    }),
                ],
            }),
            (t || null != c) &&
                (0, n.jsxs)(eE.e, {
                    size: "sm",
                    children: [
                        t &&
                            (0, n.jsx)(ep.$, {
                                variant: "primary",
                                size: "sm",
                                icon: eA.U,
                                text: F.intl.string(F.t.ZbS4QB),
                                onClick: l,
                            }),
                        c,
                    ],
                }),
        ],
    });
}
function tG(e) {
    let {
            isOwner: t,
            showEditingControls: i,
            profileOwner: l,
            wishlist: r,
            socialLayerStorefrontApplicationIds: a,
            handleOpenShop: o,
            handleOpenGameShop: d,
            handleAddNitroToWishlist: c,
        } = e,
        u = r.id,
        m = (0, f.bG)([eV.A], () => eV.A.getWishlistSettings(l.id, u)),
        { trackUserProfileWishlistAction: x } = (0, g.NJ)(),
        h = !1 === l.nsfwAllowed,
        [I, p] = s.useState(!0);
    s.useEffect(() => {
        m?.visibility != null && p(m.visibility === eh.a.PUBLIC);
    }, [m?.visibility]);
    let A = s.useCallback(
            (e) => {
                let { wishlistId: t, action: i, productLines: n } = e;
                null != t && x({ wishlistId: t, action: i, productLines: n });
            },
            [x],
        ),
        j = (0, eY.A)({ wishlistId: u, onAction: A, productLines: null != r ? (0, eH.y9)(r) : null }),
        E = s.useCallback(() => {
            if (null == u) return;
            let e = I ? eh.a.PRIVATE : eh.a.PUBLIC;
            p(!I),
                eM.A.updateWishlistVisibility(u, e),
                x({
                    wishlistId: u,
                    action: I ? $.Mq.WISHLIST_TOGGLE_PRIVATE : $.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: null != r ? (0, eH.y9)(r) : void 0,
                });
        }, [u, I, x, r]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            !I &&
                (0, n.jsxs)("div", {
                    className: tk.lm,
                    children: [
                        (0, n.jsx)(eS.G, { size: "custom", width: 16, height: 16 }),
                        (0, n.jsx)(k.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: F.intl.string(F.t.RX7D9h),
                        }),
                    ],
                }),
            I &&
                h &&
                (0, n.jsxs)("div", {
                    className: tk.lm,
                    children: [
                        (0, n.jsx)(eT.m, { size: "custom", width: 16, height: 16 }),
                        (0, n.jsx)(k.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: F.intl.string(F.t.d78ChW),
                        }),
                    ],
                }),
            (0, n.jsxs)("div", {
                ref: j,
                className: tk.U1,
                children: [
                    (0, n.jsx)(k.E, {
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: F.intl.format(F.t.r6Y1Lg, { count: r.items.length }),
                    }),
                    t
                        ? (0, n.jsx)(ty, {
                              showEditingControls: i,
                              socialLayerStorefrontApplicationIds: a,
                              isWishlistPublic: I,
                              handleOpenShop: o,
                              handleOpenGameShop: d,
                              handleAddNitroToWishlist: c,
                              handleToggleWishlistVisibility: E,
                          })
                        : (0, n.jsx)(tO, {
                              socialLayerStorefrontApplicationIds: a,
                              handleOpenShop: o,
                              handleOpenGameShop: d,
                          }),
                ],
            }),
        ],
    });
}
function tD(e) {
    let { profileOwner: t } = e,
        i = s.useRef(null);
    (0, eX.i)({ containerRef: i, itemType: "WISHLIST_ITEM" });
    let { wishlistId: l, currentUser: a } = (0, f.cf)([eV.A, eB.default], () => ({
            wishlistId: eV.A.getFirstWishlistId(t.id),
            currentUser: eB.default.getCurrentUser(),
        })),
        { analyticsLocations: o } = (0, en.Ay)(),
        d = (0, ez.A)(t.id),
        { wishlist: c, wasFetched: u, error: g } = (0, eW.fw)({ wishlistId: l, userId: t.id }),
        [m, x] = s.useState(!1);
    u && !m && x(!0), (0, eF.A)(c);
    let h = (function (e) {
            let { wishlist: t, profileOwner: i, currentUser: n } = e,
                l = i.id === n?.id,
                r = s.useMemo(() => (t?.userId != null ? [t.userId] : []), [t]),
                a = (0, f.bG)([eG.A], () => eG.A.getDetectableIdsToApplicationIds()),
                o = s.useMemo(() => {
                    let e = [];
                    for (let i of t?.items ?? [])
                        (0, e_.$)(i) && null != a[i.sku.applicationId] && e.push(i.sku.applicationId);
                    return e;
                }, [t, a]),
                d = (0, eD.w)({ userIds: r }),
                c = (0, eD.mn)({ userIds: r }),
                u = (0, eD.tR)(r),
                g = (0, eD.rY)(),
                m = (0, eD.qx)(),
                x = (0, eD.px)();
            return s.useMemo(
                () => (0, w.uniq)([...o, ...d, ...c, ...u, ...(l ? [...g, ...m, ...x] : [])].filter(eL.Vq)),
                [o, d, c, u, g, m, x, l],
            );
        })({ wishlist: c, profileOwner: t, currentUser: a }),
        I = (0, eU.Gh)("user-profile-modal-v2-wishlist"),
        p = (0, ev.A)(() => (0, ex.A)()),
        A = s.useCallback(() => {
            (0, eI.closeAllModals)(),
                (0, eC.Cz)({ analyticsLocations: o, analyticsSource: eN.A.USER_PROFILE_WISHLIST });
        }, [o]),
        j = s.useCallback((e) => {
            (0, eP.G)({ applicationId: e });
        }, []),
        E = s.useCallback((e) => {
            (0, eI.closeAllModals)(), (0, eP.default)({ applicationId: e });
        }, []),
        { handleToggle: S } = (0, eR.c)({
            userId: a?.id,
            skuId: tR.pe.TIER_2,
            nuxGraphic: I ? ey.g : void 0,
            onNuxShow: ew.D,
            location: eN.A.USER_PROFILE_WISHLIST,
            onAddSuccess: eO.w,
        });
    if (null == a || null != g) return null;
    let T = null == c || 0 === c.items.length;
    return (0, n.jsxs)(tM, {
        scrollerRef: i,
        className: r()({ [tk.XG]: !T }),
        fade: !0,
        children: [
            T
                ? (0, n.jsx)(tL, {
                      showEditingControls: d,
                      socialLayerStorefrontApplicationIds: h,
                      handleOpenShop: A,
                      handleOpenGameShop: E,
                      handleOpenGameShopMouseDown: j,
                  })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(eK.A, { scrollerRef: i }),
                          (0, n.jsx)(tG, {
                              isOwner: a?.id === t.id,
                              showEditingControls: d,
                              profileOwner: t,
                              wishlist: c,
                              socialLayerStorefrontApplicationIds: h,
                              handleOpenShop: A,
                              handleOpenGameShop: E,
                              handleAddNitroToWishlist: I && !(0, eH.C3)(c, tR.pe.TIER_2) ? S : void 0,
                          }),
                          (0, n.jsx)(te, { items: c.items, profileOwner: t, showEditingControls: d }),
                      ],
                  }),
            d &&
                (0, n.jsx)(tf, {
                    user: t,
                    wishlist: c,
                    hasFetchedWishlist: m,
                    analyticsLocations: o,
                    impressionSessionId: p,
                    className: T ? tk._E : tk.HZ,
                }),
        ],
    });
}
var tP = i(464229);
function tM(e) {
    let { children: t, className: i, scrollerRef: s, ...l } = e;
    return (0, n.jsx)(a.Ip, { ref: s, className: r()(tP.gN, i), fade: !0, ...l, children: t });
}
function tU(e) {
    let { user: t, currentUser: i, section: s, displayProfile: l, guildId: r, channelId: a, onClose: o } = e;
    return s === $.RP.ACTIVITY
        ? (0, n.jsx)(et, { user: t, currentUser: i, displayProfile: l, guildId: r, channelId: a, onClose: o })
        : s === $.RP.MUTUAL_FRIENDS
          ? (0, n.jsx)(ed, { user: t, guildId: r, channelId: a, onClose: o })
          : s === $.RP.MUTUAL_GUILDS
            ? (0, n.jsx)(em, { user: t, onClose: o })
            : s === $.RP.WIDGETS
              ? (0, n.jsx)(ef.A, { user: t, guildId: r, channelId: a })
              : s === $.RP.WISHLIST
                ? (0, n.jsx)(tD, { profileOwner: t })
                : null;
}
function tF(e) {
    let {
            user: t,
            currentUser: i,
            displayProfile: l,
            guildId: r,
            channelId: f,
            items: x,
            initialSection: h,
            onClose: I,
        } = e,
        { trackUserProfileAction: p } = (0, g.NJ)(),
        [{ section: A, text: j }, E] = s.useState(
            x.find((e) => {
                let { section: t } = e;
                return t === h;
            }) ?? x[0],
        );
    return (0, n.jsxs)("div", {
        className: tP.kL,
        children: [
            (0, n.jsx)(a.Ip, {
                orientation: "horizontal",
                className: tP.gU,
                fade: !0,
                paddingFix: !1,
                children: (0, n.jsx)(o.V, {
                    type: "top",
                    look: "custom",
                    selectedItem: A,
                    onItemSelect: function (e) {
                        m.A.hasUnsavedChanges() && A === $.RP.WIDGETS
                            ? (0, u.VQ)()
                            : (p({ action: "PRESS_SECTION", section: e }),
                              E((t) => x.find((t) => t.section === e) ?? t));
                    },
                    children: x.map((e) =>
                        (0, n.jsx)(
                            o.V.Item,
                            { className: tP.YU, id: e.section, "aria-label": e.text, children: e.text },
                            e.section,
                        ),
                    ),
                }),
            }),
            (0, n.jsx)(o.V.Panel, {
                id: A,
                "aria-label": j,
                className: tP.NM,
                children: (0, n.jsx)(d.F, {
                    component: (0, n.jsx)(c.A, { children: (0, n.jsx)(d.H, { children: j }) }),
                    children: (0, n.jsx)(tU, {
                        user: t,
                        currentUser: i,
                        displayProfile: l,
                        guildId: r,
                        channelId: f,
                        section: A,
                        onClose: I,
                    }),
                }),
            }),
        ],
    });
}
