i.d(t, { K: () => tP, A: () => tU });
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
            ? (0, n.jsxs)(tP, {
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
        (0, n.jsx)(tP, {
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
    return (0, n.jsx)(tP, {
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
    eI = i(821609),
    ep = i(34188),
    eA = i(307301),
    ej = i(825484),
    eE = i(952270),
    eS = i(885574),
    eT = i(444927),
    ev = i(793574),
    eN = i(429913),
    eb = i(662388),
    eC = i(895360),
    ew = i(152472),
    eR = i(267102),
    ek = i(274681),
    eO = i(400669);
i(321073);
var ey = i(721932),
    e_ = i(403362),
    eL = i(832163),
    eG = i(501838),
    eD = i(44724),
    eP = i(808247),
    eM = i(909536),
    eU = i(673843),
    eF = i(561794),
    eW = i(855052),
    eH = i(287809),
    eB = i(321191),
    eV = i(600761),
    eX = i(579950),
    ez = i(535089),
    eY = i(128988),
    eK = i(688807),
    eq = i(575593),
    eQ = i(772427),
    eJ = i(107563),
    eZ = i(840411),
    e$ = i(711690),
    e0 = i(248550),
    e1 = i(428262),
    e8 = i(451395),
    e2 = i(823016),
    e7 = i(130821);
function e5(e) {
    let { item: t, index: i, wishlistId: s, onReorder: l, children: r } = e,
        { manageFocusOnReorder: a } = (0, e2.r)();
    return (0, n.jsx)(e8.mG, {
        index: i,
        itemId: String(t.skuId),
        listType: String(s),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: t },
        "aria-label": F.intl.formatToPlainString(F.t["7SnyMA"], { positionNumber: i + 1 }),
        onReorder: l,
        onEnd: () => a(String(t.skuId)),
        className: e7.C,
        dropBeforeClassName: e7.A,
        dropAfterClassName: e7.Ze,
        draggingClassName: e7.Id,
        children: (0, n.jsx)("div", { className: e7.An, children: r }),
    });
}
let e6 = s.memo(function (e) {
    let {
            item: t,
            index: i,
            profileOwner: l,
            guildId: r,
            showEditingControls: a,
            wishlistId: o,
            isDragging: d,
            onReorder: c,
        } = e,
        { registerDragHandleRef: u } = (0, e2.r)(),
        g = s.useMemo(
            () =>
                a
                    ? (0, n.jsx)(e8.jV, {
                          buttonRef: u(String(t.skuId)),
                          className: e7.BU,
                          onFocus: (e) => e.stopPropagation(),
                      })
                    : void 0,
            [a, u, t.skuId],
        ),
        m = s.useMemo(
            () =>
                (0, n.jsx)(e0.A, {
                    item: t,
                    wishlistOwner: l,
                    guildId: r,
                    wishlistId: o,
                    isDragging: d,
                    dragHandle: g,
                }),
            [t, l, r, d, g, o],
        );
    return a
        ? (0, n.jsx)("li", {
              children: (0, n.jsx)(e5, { item: t, index: i, wishlistId: o, onReorder: c, children: m }),
          })
        : (0, n.jsx)("li", { children: m });
});
function e3(e) {
    let { items: t, profileOwner: i, guildId: l, showEditingControls: r, isSortingNitroToFront: a } = e,
        o = eH.default.getCurrentUser(),
        { defaultWishlistId: d } = (0, f.cf)([eB.A], () => ({ defaultWishlistId: eB.A.getFirstWishlistId(i.id) })),
        c = (0, eQ.rV)("UserProfileModalV2WishlistGrid"),
        u = s.useMemo(
            () => (c ? t : t.filter((e) => e.sku?.tenantMetadata?.collectibles?.type !== eq.R.PROFILE_FRAME)),
            [t, c],
        ),
        g = s.useMemo(() => (a ? (0, eZ.gm)(u) : u), [u, a]),
        { isDragging: m } = (0, eK.V)((e) => ({ isDragging: e.isDragging() })),
        x = s.useCallback(
            (e, t) => {
                if (e === t || null == d || 0 === g.length || e < 0 || e >= g.length || t < 0 || t >= g.length) return;
                let i = eJ.A.getWishlist(d);
                if (null == i) return;
                let n = g[e],
                    { newWishlistData: s, previousSkuId: l, nextSkuId: r } = (0, eZ.Ap)(i, g, e, t);
                eP.A.reorderWishlistItem(d, n.skuId, { previousSkuId: l, nextSkuId: r, newWishlistData: s });
            },
            [d, g],
        );
    if (null == o || null == d) return null;
    let h = (0, n.jsx)("ul", {
        className: e7.Vg,
        children: g.map((e, t) =>
            (0, n.jsx)(
                e6,
                {
                    item: e,
                    index: t,
                    profileOwner: i,
                    guildId: l,
                    showEditingControls: r,
                    wishlistId: d,
                    isDragging: m,
                    onReorder: x,
                },
                e.skuId,
            ),
        ),
    });
    return r ? (0, n.jsx)(e2.B, { emptyListFallbackRef: null, children: h }) : h;
}
function e9(e) {
    let t = (0, e$.a)("UserProfileModalV2WishlistGrid");
    return (0, n.jsx)(e3, { ...e, isSortingNitroToFront: t });
}
function e4(e) {
    let t = eH.default.getCurrentUser()?.id,
        i = null != t && t !== e.profileOwner.id,
        s = e.items.some((e) => e1.Ay.isPremiumSku(e.skuId));
    return i && s ? (0, n.jsx)(e9, { ...e }) : (0, n.jsx)(e3, { ...e, isSortingNitroToFront: !1 });
}
var te = i(815021),
    tt = i(299679),
    ti = i(889586),
    tn = i(973912),
    ts = i(554146),
    tl = i(131607),
    tr = i(945810),
    ta = i(927813),
    to = i(49999);
let td = 90 * ta.A.Millis.DAY,
    tc = 90 * ta.A.Millis.DAY,
    tu = (0, tr.mj)({
        name: "2026-07-smag-wishlist-recommendations-dismiss-threshold",
        kind: "user",
        defaultConfig: { minItemsToDismiss: 1 },
        variations: { 0: { minItemsToDismiss: 1 }, 1: { minItemsToDismiss: 3 }, 2: { minItemsToDismiss: 10 } },
    });
var tg = i(294085);
function tm(e) {
    let {
            user: t,
            guildId: i,
            wishlist: l,
            hasFetchedWishlist: r = !1,
            analyticsLocations: a,
            impressionSessionId: o,
            className: d,
        } = e,
        {
            isVisible: c,
            isDismissible: u,
            markAsDismissed: g,
        } = (function (e) {
            let { userId: t, wishlist: i, hasFetchedWishlist: n } = e,
                { minItemsToDismiss: l } = tu.useConfig({ location: "user_profile_wishlist_suggestions_grid" }),
                r = (i?.items.length ?? 0) >= l,
                [a, o] = s.useState(!1);
            !n || r || a || o(!0);
            let d = (0, f.bG)(
                    [eB.A],
                    () => (null != i ? new Date(eB.A.getWishlistSettings(t, i.id)?.updated_at ?? 0).valueOf() : 0),
                    [i, t],
                ),
                [c, u] = (0, tl.Wl)(
                    ts.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS,
                    { showAfterTimestamp: d + tc, cooldownDurationMs: td },
                    void 0,
                    !0,
                ),
                g = c === ts.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
            return {
                isVisible: n && (g || a || !r),
                isDismissible: r,
                markAsDismissed: s.useCallback(() => {
                    o(!1), u(to.i.USER_DISMISS);
                }, [u]),
            };
        })({ userId: t.id, wishlist: l, hasFetchedWishlist: r });
    return c
        ? (0, n.jsx)(tf, {
              user: t,
              guildId: i,
              wishlist: l,
              analyticsLocations: a,
              impressionSessionId: o,
              className: d,
              isDismissible: u,
              markAsDismissed: g,
          })
        : null;
}
function tf(e) {
    let {
            user: t,
            guildId: i,
            wishlist: s,
            analyticsLocations: l,
            impressionSessionId: a,
            className: o,
            isDismissible: d,
            markAsDismissed: c,
        } = e,
        { items: u } = (0, ti.L)({
            userId: t.id,
            wishlist: s,
            numWishlistItemsToRecommend: 15,
            maxWishlistItemsToShow: 8,
            source: eF.B5.USER_PROFILE,
        });
    return 0 === u.length
        ? null
        : (0, n.jsxs)("div", {
              className: r()(tg.kL, o),
              children: [
                  (0, n.jsxs)("div", {
                      className: tg.wx,
                      children: [
                          (0, n.jsx)(k.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              children: F.intl.string(F.t["+GB8Kt"]),
                          }),
                          d &&
                              (0, n.jsx)("div", {
                                  className: tg.b,
                                  children: (0, n.jsx)(te.J, { size: "xs", onClick: c }),
                              }),
                      ],
                  }),
                  (0, n.jsx)(tt.dB, {
                      newValue: {
                          impressionSessionId: a,
                          surface: "user_profile_wishlist_suggestions_grid",
                          wishlistOwnerId: t.id,
                          wishlistId: s?.id,
                          analyticsLocations: l,
                      },
                      children: (0, n.jsx)(tn.A, {
                          items: u,
                          guildId: i,
                          wishlist: s,
                          className: r()(tg.Vg, tg.e6),
                          analyticsLocations: l,
                      }),
                  }),
              ],
          });
}
var tx = i(477782),
    th = i(403581),
    tI = i(922016),
    tp = i(980707),
    tA = i(789645),
    tj = i(847374),
    tE = i(486020),
    tS = i(420641);
function tT(e) {
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
                    t.filter(e_.Vq).map((e) => {
                        let t = tE.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 20 });
                        return {
                            id: `browse-social-layer-storefront-${e.id}`,
                            label: F.intl.formatToPlainString(F.t["HDT/rg"], { applicationName: e.name }),
                            iconLeft: null != t ? () => (0, n.jsx)("img", { className: tS.I, src: t, alt: "" }) : ep.U,
                            leadingAccessory: null != t ? { type: "image", src: t } : { type: "icon", icon: ep.U },
                            action: () => i?.(e.id),
                        };
                    }),
                [t, i],
            );
        })({ applications: (0, eN.A)(o), handleOpenGameShop: r }),
        m = s.useMemo(
            () =>
                (0, n.jsxs)(tx.rX, {
                    children: [
                        null != l &&
                            (0, n.jsx)(tx.Dr, {
                                id: "browse-collectibles-shop",
                                label: F.intl.string(F.t["5upuqx"]),
                                iconLeft: ep.U,
                                leadingAccessory: { type: "icon", icon: ep.U },
                                action: l,
                            }),
                        null != a &&
                            (0, n.jsx)(tx.Dr, {
                                id: "add-nitro-to-wishlist",
                                label: F.intl.string(F.t.lG6a5x),
                                iconLeft: th.t,
                                leadingAccessory: { type: "icon", icon: th.t },
                                action: a,
                            }),
                        null != r &&
                            g.map((e) => {
                                let { id: t, label: i, iconLeft: s, leadingAccessory: l, action: r } = e;
                                return (0, n.jsx)(
                                    tx.Dr,
                                    { id: t, label: i, iconLeft: s, leadingAccessory: l, action: r },
                                    t,
                                );
                            }),
                    ],
                }),
            [l, r, a, g],
        );
    return (0, n.jsx)(tI.Y, {
        targetElementRef: d,
        position: "bottom",
        onRequestOpen: () => u(!0),
        onRequestClose: () => u(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(tp.W, {
                "data-menu-migrated": !0,
                navId: "wishlist-overflow-menu",
                onSelect: void 0,
                onClose: t,
                "aria-label": F.intl.string(F.t.GdNkvG),
                children: m,
            });
        },
        children: (e) =>
            (0, n.jsx)(eI.$, {
                buttonRef: d,
                variant: i,
                size: "sm",
                icon: c ? tA.P : tj.a,
                iconPosition: "end",
                text: t,
                ...e,
            }),
    });
}
var tv = i(509434),
    tN = i(365199);
let tb = E.A.getArticleURL(x.MVz.CUSTOM_PROFILES_WISHLIST);
function tC(e) {
    let { isOwner: t, isWishlistPublic: i, onToggleVisibility: l } = e,
        r = s.useRef(null),
        { analyticsLocations: a } = (0, en.Ay)(ev.A.USER_PROFILE_WISHLIST),
        o = s.useMemo(
            () =>
                t
                    ? (0, n.jsxs)(tx.rX, {
                          children: [
                              (0, n.jsx)(tx.fP, {
                                  id: "wishlist-privacy-setting",
                                  label: F.intl.string(F.t.b2nFyA),
                                  subtext: F.intl.string(F.t.dw58pE),
                                  checked: i,
                                  action: l,
                              }),
                              (0, n.jsx)(tx.bX, {}),
                              (0, n.jsx)(tx.Dr, {
                                  id: "wishlist-privacy-setting2",
                                  label: F.intl.string(F.t.hvVgAZ),
                                  icon: tv.I,
                                  trailingIndicator: { type: "icon", icon: tv.I },
                                  action: () => window.open(tb),
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
              children: (0, n.jsx)(tI.Y, {
                  targetElementRef: r,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, n.jsx)(tp.W, {
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
                          icon: tN.j,
                          tooltipText: F.intl.string(F.t["UKOtz+"]),
                          action: "PRESS_OPTIONS",
                          ...e,
                      }),
              }),
          });
}
var tw = i(202541),
    tR = i(964350);
function tk(e) {
    let { socialLayerStorefrontApplicationIds: t, handleOpenShop: i, handleOpenGameShop: s } = e;
    return t.length > 0
        ? (0, n.jsx)(tT, {
              title: F.intl.string(F.t["i/yzHs"]),
              handleOpenCollectiblesShop: i,
              handleOpenGameShop: s,
              socialLayerStorefrontApplicationIds: t,
          })
        : (0, n.jsx)(eI.$, {
              variant: "secondary",
              size: "sm",
              icon: ep.U,
              text: F.intl.string(F.t["i/yzHs"]),
              onClick: i,
          });
}
function tO(e) {
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
        className: tR.$s,
        children: [
            t &&
                (i.length > 0 || null != a
                    ? (0, n.jsx)(tT, {
                          title: F.intl.string(F.t.SDUwM0),
                          handleOpenCollectiblesShop: l,
                          handleOpenGameShop: i.length > 0 ? r : void 0,
                          handleAddNitroToWishlist: a,
                          socialLayerStorefrontApplicationIds: i,
                      })
                    : (0, n.jsx)(eI.$, {
                          variant: "secondary",
                          size: "sm",
                          icon: eA.j,
                          text: F.intl.string(F.t.SDUwM0),
                          onClick: l,
                      })),
            (0, n.jsx)(tC, { isOwner: !0, isWishlistPublic: s, onToggleVisibility: o }),
        ],
    });
}
function ty(e) {
    let { application: t, handleOpenGameShop: i, handleOpenGameShopMouseDown: l } = e,
        r = s.useCallback(() => {
            i(t.id);
        }, [t, i]),
        a = s.useCallback(() => {
            l(t.id);
        }, [t, l]);
    return (0, n.jsx)(eI.$, {
        variant: "primary",
        size: "sm",
        icon: ep.U,
        text: F.intl.formatToPlainString(F.t["HDT/rg"], { applicationName: t.name }),
        onClick: r,
        onMouseDown: a,
    });
}
function t_(e) {
    let {
            showEditingControls: t,
            socialLayerStorefrontApplicationIds: i,
            handleOpenShop: l,
            handleOpenGameShop: r,
            handleOpenGameShopMouseDown: a,
        } = e,
        o = (0, eR.Us)() === x.BRT.OVERLAY,
        d = (0, eN.A)(i),
        c = s.useMemo(() => {
            if (o || 0 === i.length) return null;
            let e = d.reduce((e, t) => (null == t || (e[t.id] = t), e), {});
            if (1 === i.length) {
                let t = e[i[0]];
                return null == t
                    ? null
                    : (0, n.jsx)(ty, { application: t, handleOpenGameShop: r, handleOpenGameShopMouseDown: a });
            }
            return (0, n.jsx)(tT, {
                title: F.intl.string(F.t.FkjcWY),
                variant: "primary",
                handleOpenGameShop: r,
                socialLayerStorefrontApplicationIds: i,
            });
        }, [o, i, r, d, a]);
    return (0, n.jsxs)("div", {
        className: tR.y7,
        children: [
            (0, n.jsxs)("div", {
                className: tR.q6,
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
                (0, n.jsxs)(ej.e, {
                    size: "sm",
                    children: [
                        t &&
                            (0, n.jsx)(eI.$, {
                                variant: "primary",
                                size: "sm",
                                icon: ep.U,
                                text: F.intl.string(F.t.ZbS4QB),
                                onClick: l,
                            }),
                        c,
                    ],
                }),
        ],
    });
}
function tL(e) {
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
        m = (0, f.bG)([eB.A], () => eB.A.getWishlistSettings(l.id, u)),
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
        j = (0, ez.A)({ wishlistId: u, onAction: A, productLines: null != r ? (0, eW.y9)(r) : null }),
        E = s.useCallback(() => {
            if (null == u) return;
            let e = I ? eh.a.PRIVATE : eh.a.PUBLIC;
            p(!I),
                eP.A.updateWishlistVisibility(u, e),
                x({
                    wishlistId: u,
                    action: I ? $.Mq.WISHLIST_TOGGLE_PRIVATE : $.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: null != r ? (0, eW.y9)(r) : void 0,
                });
        }, [u, I, x, r]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            !I &&
                (0, n.jsxs)("div", {
                    className: tR.lm,
                    children: [
                        (0, n.jsx)(eE.G, { size: "custom", width: 16, height: 16 }),
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
                    className: tR.lm,
                    children: [
                        (0, n.jsx)(eS.m, { size: "custom", width: 16, height: 16 }),
                        (0, n.jsx)(k.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: F.intl.string(F.t.d78ChW),
                        }),
                    ],
                }),
            (0, n.jsxs)("div", {
                ref: j,
                className: tR.U1,
                children: [
                    (0, n.jsx)(k.E, {
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: F.intl.format(F.t.r6Y1Lg, { count: r.items.length }),
                    }),
                    t
                        ? (0, n.jsx)(tO, {
                              showEditingControls: i,
                              socialLayerStorefrontApplicationIds: a,
                              isWishlistPublic: I,
                              handleOpenShop: o,
                              handleOpenGameShop: d,
                              handleAddNitroToWishlist: c,
                              handleToggleWishlistVisibility: E,
                          })
                        : (0, n.jsx)(tk, {
                              socialLayerStorefrontApplicationIds: a,
                              handleOpenShop: o,
                              handleOpenGameShop: d,
                          }),
                ],
            }),
        ],
    });
}
function tG(e) {
    let { profileOwner: t, guildId: i } = e,
        l = s.useRef(null);
    (0, eV.i)({ containerRef: l, itemType: "WISHLIST_ITEM" });
    let { wishlistId: a, currentUser: o } = (0, f.cf)([eB.A, eH.default], () => ({
            wishlistId: eB.A.getFirstWishlistId(t.id),
            currentUser: eH.default.getCurrentUser(),
        })),
        { analyticsLocations: d } = (0, en.Ay)(),
        c = (0, eX.A)(t.id),
        { wishlist: u, wasFetched: g, error: m } = (0, eF.fw)({ wishlistId: a, userId: t.id }),
        [x, h] = s.useState(!1);
    g && !x && h(!0), (0, eU.A)(u);
    let I = (function (e) {
            let { wishlist: t, profileOwner: i, currentUser: n } = e,
                l = i.id === n?.id,
                r = s.useMemo(() => (t?.userId != null ? [t.userId] : []), [t]),
                a = (0, f.bG)([eL.A], () => eL.A.getDetectableIdsToApplicationIds()),
                o = s.useMemo(() => {
                    let e = [];
                    for (let i of t?.items ?? [])
                        (0, ey.$)(i) && null != a[i.sku.applicationId] && e.push(i.sku.applicationId);
                    return e;
                }, [t, a]),
                d = (0, eG.w)({ userIds: r }),
                c = (0, eG.mn)({ userIds: r }),
                u = (0, eG.tR)(r),
                g = (0, eG.rY)(),
                m = (0, eG.qx)(),
                x = (0, eG.px)();
            return s.useMemo(
                () => (0, w.uniq)([...o, ...d, ...c, ...u, ...(l ? [...g, ...m, ...x] : [])].filter(e_.Vq)),
                [o, d, c, u, g, m, x, l],
            );
        })({ wishlist: u, profileOwner: t, currentUser: o }),
        p = (0, eM.Gh)("user-profile-modal-v2-wishlist"),
        A = (0, eT.A)(() => (0, ex.A)()),
        j = s.useCallback(() => {
            (0, eb.Cz)({ analyticsLocations: d, analyticsSource: ev.A.USER_PROFILE_WISHLIST });
        }, [d]),
        E = s.useCallback((e) => {
            (0, eD.G)({ applicationId: e });
        }, []),
        S = s.useCallback((e) => {
            (0, er.closeUserProfileModal)(), (0, eD.default)({ applicationId: e });
        }, []),
        { handleToggle: T } = (0, ew.c)({
            userId: o?.id,
            skuId: tw.pe.TIER_2,
            nuxGraphic: p ? eO.g : void 0,
            onNuxShow: eC.D,
            location: ev.A.USER_PROFILE_WISHLIST,
            onAddSuccess: ek.w,
        });
    if (null == o || null != m) return null;
    let v = null == u || 0 === u.items.length;
    return (0, n.jsxs)(tP, {
        scrollerRef: l,
        className: r()({ [tR.XG]: !v }),
        fade: !0,
        children: [
            v
                ? (0, n.jsx)(t_, {
                      showEditingControls: c,
                      socialLayerStorefrontApplicationIds: I,
                      handleOpenShop: j,
                      handleOpenGameShop: S,
                      handleOpenGameShopMouseDown: E,
                  })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(eY.A, { scrollerRef: l }),
                          (0, n.jsx)(tL, {
                              isOwner: o?.id === t.id,
                              showEditingControls: c,
                              profileOwner: t,
                              wishlist: u,
                              socialLayerStorefrontApplicationIds: I,
                              handleOpenShop: j,
                              handleOpenGameShop: S,
                              handleAddNitroToWishlist: p && !(0, eW.C3)(u, tw.pe.TIER_2) ? T : void 0,
                          }),
                          (0, n.jsx)(e4, { items: u.items, profileOwner: t, guildId: i, showEditingControls: c }),
                      ],
                  }),
            c &&
                (0, n.jsx)(tm, {
                    user: t,
                    guildId: i,
                    wishlist: u,
                    hasFetchedWishlist: x,
                    analyticsLocations: d,
                    impressionSessionId: A,
                    className: v ? tR._E : tR.HZ,
                }),
        ],
    });
}
var tD = i(464229);
function tP(e) {
    let { children: t, className: i, scrollerRef: s, ...l } = e;
    return (0, n.jsx)(a.Ip, { ref: s, className: r()(tD.gN, i), fade: !0, ...l, children: t });
}
function tM(e) {
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
                ? (0, n.jsx)(tG, { profileOwner: t, guildId: r })
                : null;
}
function tU(e) {
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
        className: tD.kL,
        children: [
            (0, n.jsx)(a.Ip, {
                orientation: "horizontal",
                className: tD.gU,
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
                            { className: tD.YU, id: e.section, "aria-label": e.text, children: e.text },
                            e.section,
                        ),
                    ),
                }),
            }),
            (0, n.jsx)(o.V.Panel, {
                id: A,
                "aria-label": j,
                className: tD.NM,
                children: (0, n.jsx)(d.F, {
                    component: (0, n.jsx)(c.A, { children: (0, n.jsx)(d.H, { children: j }) }),
                    children: (0, n.jsx)(tM, {
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
