i.d(t, { K: () => tW, A: () => tV });
var n = i(477900),
    l = i(582128),
    s = i(503698),
    r = i.n(s),
    a = i(364522),
    o = i(761508),
    d = i(707554),
    u = i(140735),
    c = i(207803),
    g = i(183555),
    m = i(61881),
    x = i(17928),
    f = i(652215),
    h = i(349288),
    p = i(517164),
    I = i(114212),
    j = i(290863),
    A = i(461213),
    v = i(975571),
    E = i(146655),
    S = i(489379),
    C = i(402857),
    b = i(353394),
    N = i(64622),
    T = i(986712),
    w = i(435558),
    k = i(297264),
    y = i(834730),
    R = i(534890),
    O = i(366010),
    _ = i(308528),
    L = i(736653),
    P = i(573648),
    D = i(780964),
    G = i(766075),
    M = i(562153),
    U = i(993401),
    W = i(375708),
    F = i(244650);
let V = [
        () => W.intl.string(W.t.madJdE),
        () => W.intl.string(W.t.NYmfoP),
        () => W.intl.string(W.t.R2PaCg),
        () => W.intl.string(W.t.laSR8h),
        () => W.intl.string(W.t.DnsJE8),
    ],
    H = [
        () => W.intl.string(W.t.nFSbeE),
        () => W.intl.string(W.t.gTcxOz),
        () => W.intl.string(W.t["8T0wYj"]),
        () => W.intl.string(W.t.BIHl1g),
        () => W.intl.string(W.t["jhBm0+"]),
    ],
    B = [
        () => W.intl.string(W.t.AyMGXA),
        () => W.intl.string(W.t.aAFW7V),
        (e) => W.intl.formatToPlainString(W.t.h2g0cM, { name: e }),
        () => W.intl.string(W.t.rrYh58),
        () => W.intl.string(W.t["HX3K+F"]),
        () => W.intl.string(W.t["/yW3aY"]),
        () => W.intl.string(W.t["PmL/v0"]),
        () => W.intl.string(W.t.IALa3h),
        () => W.intl.string(W.t.HRcTFL),
        () => W.intl.string(W.t.NuCqPt),
        () => W.intl.string(W.t["M1tw+4"]),
        () => W.intl.string(W.t.UBm1y2),
        () => W.intl.string(W.t.Cu95PQ),
        () => W.intl.string(W.t["R/wFuh"]),
        () => W.intl.string(W.t.HQPAVT),
        () => W.intl.string(W.t.YolGh4),
    ],
    z = [
        f.fg2.STEAM,
        f.fg2.PLAYSTATION,
        f.fg2.XBOX,
        f.fg2.TWITCH,
        f.fg2.BATTLENET,
        f.fg2.LEAGUE_OF_LEGENDS,
        f.fg2.EPIC_GAMES,
        f.fg2.RIOT_GAMES,
        f.fg2.ROBLOX,
        f.fg2.SPOTIFY,
        f.fg2.YOUTUBE,
        f.fg2.CRUNCHYROLL,
        f.fg2.BUNGIE,
    ];
function K(e) {
    let { heading: t, bodyText: i, children: l } = e;
    return (0, n.jsxs)("div", {
        className: F.Ie,
        children: [
            (0, n.jsxs)("div", {
                className: F.FS,
                children: [
                    (0, n.jsx)(k.D, { variant: "heading-md/medium", color: "text-strong", children: t }),
                    (0, n.jsx)(y.E, { variant: "text-sm/normal", color: "text-default", children: i }),
                ],
            }),
            l,
        ],
    });
}
function X() {
    let e = W.intl.string(W.t.RnD2yZ),
        [t] = l.useState(() => ((0, w.sample)(V) ?? V[0])());
    return (0, n.jsx)(K, { heading: e, bodyText: t });
}
function Y() {
    let e = W.intl.string(W.t.bFgqYJ),
        [t] = l.useState(() => ((0, w.sample)(H) ?? H[0])());
    return (0, n.jsx)(K, { heading: e, bodyText: t });
}
function q(e) {
    let { user: t, guildId: i, channelId: s, onClose: r } = e,
        a = M.Ay.getName(i, s, t),
        o = W.intl.formatToPlainString(W.t.sjSitP, { name: a }),
        [d] = l.useState(() => ((0, w.sample)(B) ?? B[0])(a)),
        u = l.useCallback(() => {
            _.A.openPrivateChannel({ recipientIds: t.id }), r?.();
        }, [t.id, r]);
    return (0, n.jsx)(K, {
        heading: o,
        bodyText: d,
        children: (0, n.jsx)("div", {
            className: F.v0,
            children: (0, n.jsx)(U.FD, { icon: R.o, text: W.intl.string(W.t["g33r/P"]), onClick: u }),
        }),
    });
}
function J() {
    let e = (0, L.Ay)();
    return (0, n.jsx)("div", {
        className: F.HU,
        children: z.map((t, i) => {
            let l = P.A.get(t);
            if (null == l) return null;
            let s = (0, O.M)(e) ? l.icon.darkPNG : l.icon.lightPNG;
            return (0, n.jsx)("img", { src: s, alt: l.name, className: F.gj }, i);
        }),
    });
}
function Q(e) {
    let { onClose: t } = e,
        i = l.useCallback(() => {
            t?.(), (0, G.openUserSettings)(D.X.CONNECTIONS_CATEGORY);
        }, [t]),
        s = l.useCallback(() => {
            t?.(), (0, G.openUserSettings)(D.X.CONNECTED_GAMES_CATEGORY);
        }, [t]);
    return (0, n.jsxs)(K, {
        heading: W.intl.string(W.t.VB6LWY),
        bodyText: W.intl.string(W.t.KpjsU9),
        children: [
            (0, n.jsx)(J, {}),
            (0, n.jsxs)("div", {
                className: F.v0,
                children: [
                    (0, n.jsx)(U.FD, { text: W.intl.string(W.t["/Hl24U"]), onClick: i }),
                    (0, n.jsx)(U.FD, { text: W.intl.string(W.t.GTCx0p), onClick: s }),
                ],
            }),
        ],
    });
}
var Z = i(83013),
    $ = i(518477),
    ee = i(186468);
function et(e) {
    let { user: t, currentUser: i, displayProfile: l, guildId: s, channelId: r, onClose: a } = e,
        { live: o, recent: d, stream: u } = (0, E.A)(t.id),
        { voiceChannel: c, voiceActivity: g } = (0, S.A)({ userId: t.id, guildId: s }),
        m = (0, x.bG)([p.A], () => p.A.isFetchingUserOutbox(t.id)),
        w = t.id === i.id,
        k = (0, x.bG)([A.A, j.A], () => {
            let e = w ? A.A.getStatus() : j.A.getStatus(t.id);
            return e === f.clD.OFFLINE || e === f.clD.INVISIBLE;
        }),
        y = o.length > 0 || null != u,
        R = l?.private !== !0 && null == u && null == g && null != c,
        O = !k && (y || R),
        _ = d.length > 0;
    return O || _ || !m
        ? O || _ || m
            ? (0, n.jsxs)(tW, {
                  className: ee.XG,
                  fade: !0,
                  children: [
                      O
                          ? (0, n.jsx)(Z.A, {
                                heading: W.intl.string(W.t.J6STd9),
                                children: (0, n.jsxs)("ul", {
                                    className: ee.kR,
                                    children: [
                                        null != u &&
                                            (0, n.jsx)("li", {
                                                children: (0, n.jsx)(N.A, {
                                                    user: t,
                                                    currentUser: i,
                                                    stream: u,
                                                    onClose: a,
                                                }),
                                            }),
                                        o.map((e, l) =>
                                            (0, n.jsx)(
                                                "li",
                                                {
                                                    children: (0, n.jsx)(C.A, {
                                                        user: t,
                                                        currentUser: i,
                                                        activity: e,
                                                        onClose: a,
                                                    }),
                                                },
                                                `live-${l}`,
                                            ),
                                        ),
                                        R &&
                                            (0, n.jsx)("li", {
                                                children: (0, n.jsx)(T.A, {
                                                    user: t,
                                                    currentUser: i,
                                                    voiceChannel: c,
                                                    onClose: a,
                                                }),
                                            }),
                                    ],
                                }),
                            })
                          : null,
                      _
                          ? (0, n.jsx)(Z.A, {
                                heading: W.intl.string(W.t.jzgEoL),
                                introText: w
                                    ? W.intl.format(W.t["4bk9Ak"], {
                                          learnMoreHook: (e, t) =>
                                              (0, n.jsx)(
                                                  h.Anchor,
                                                  {
                                                      href: v.A.getArticleURL(f.MVz.ACTIVITY_STATUS_SETTINGS),
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
                                            { children: (0, n.jsx)(b.A, { user: t, entry: e, onClose: a }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                            })
                          : null,
                  ],
              })
            : w
              ? (0, n.jsx)(Q, { onClose: a })
              : (0, n.jsx)(q, { user: t, guildId: l?.guildId ?? s, channelId: r, onClose: a })
        : (0, n.jsx)("div", {
              className: ee.kR,
              children: Array.from({ length: 8 }).map((e, t) =>
                  (0, n.jsxs)(
                      "div",
                      {
                          className: ee.kr,
                          children: [
                              (0, n.jsx)(I.FQ, { width: 60, opacity: 0.08 }),
                              (0, n.jsx)(I.FQ, { width: 135, opacity: 0.08 }),
                          ],
                      },
                      t,
                  ),
              ),
          });
}
var ei = i(163126),
    en = i(688810),
    el = i(913453),
    es = i(229187),
    er = i(975732),
    ea = i(503062),
    eo = i(933260);
function ed(e) {
    let { user: t, guildId: i, channelId: s, onClose: r } = e,
        { analyticsLocations: a } = (0, en.Ay)(),
        { context: o, trackUserProfileAction: d } = (0, g.NJ)(),
        { mutualFriends: u, mutualFriendsCount: c } = (0, el.A)(t),
        m = (0, ei.A)();
    return (
        l.useEffect(() => {
            (0, es.A)(t.id, m);
        }, [t.id, m]),
        (0, n.jsx)(tW, {
            className: eo.XG,
            children:
                null == u
                    ? Array.from({ length: c ?? 10 }).map((e, t) =>
                          (0, n.jsxs)(
                              "div",
                              {
                                  className: eo.D$,
                                  children: [
                                      (0, n.jsx)(I.FQ, { width: 40, opacity: 0.08 }),
                                      (0, n.jsx)(I.FQ, { width: 135, opacity: 0.08 }),
                                  ],
                              },
                              t,
                          ),
                      )
                    : 0 === u.length
                      ? (0, n.jsx)(X, {})
                      : u.map((e) => {
                            let { key: t, user: l, status: u } = e;
                            return (0, n.jsx)(
                                ea.A,
                                {
                                    user: l,
                                    status: u,
                                    guildId: i,
                                    channelId: s,
                                    onSelect: () => {
                                        r?.(),
                                            d({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (0, er.openUserProfileModal)({
                                                ...o,
                                                userId: l.id,
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
var eu = i(398590),
    ec = i(345942),
    eg = i(51943);
function em(e) {
    let { user: t, onClose: i } = e,
        { trackUserProfileAction: l } = (0, g.NJ)(),
        { mutualGuilds: s, isFetching: r } = (0, el.A)(t);
    return (0, n.jsx)(tW, {
        className: eo.XG,
        fade: !0,
        children:
            null == s && r
                ? Array.from({ length: 10 }).map((e, t) =>
                      (0, n.jsxs)(
                          "div",
                          {
                              className: eo.Y7,
                              children: [
                                  (0, n.jsx)(I.FQ, { width: 40, opacity: 0.08 }),
                                  (0, n.jsx)(I.FQ, { width: 135, opacity: 0.08 }),
                              ],
                          },
                          t,
                      ),
                  )
                : (null != s || r) && s?.length !== 0
                  ? s?.map((e) => {
                        let { guild: s, nick: r } = e;
                        return (0, n.jsx)(
                            eg.A,
                            {
                                user: t,
                                guild: s,
                                nick: r,
                                onSelect: () => {
                                    l({ action: "PRESS_MUTUAL_GUILD" }), (0, ec.u)(s.id), i(), (0, eu.jH)();
                                },
                            },
                            s.id,
                        );
                    })
                  : (0, n.jsx)(Y, {}),
    });
}
var ex = i(202481),
    ef = i(132500),
    eh = i(777480),
    ep = i(821609),
    eI = i(34188),
    ej = i(307301),
    eA = i(825484),
    ev = i(952270),
    eE = i(885574),
    eS = i(444927),
    eC = i(793574),
    eb = i(429913),
    eN = i(839534),
    eT = i(895360),
    ew = i(152472),
    ek = i(267102),
    ey = i(274681),
    eR = i(400669);
i(321073);
var eO = i(721932),
    e_ = i(403362),
    eL = i(832163),
    eP = i(501838),
    eD = i(44724),
    eG = i(808247),
    eM = i(909536),
    eU = i(673843),
    eW = i(561794),
    eF = i(855052),
    eV = i(287809),
    eH = i(321191),
    eB = i(600761),
    ez = i(389667),
    eK = i(535089),
    eX = i(128988),
    eY = i(686246),
    eq = i(575593),
    eJ = i(772427),
    eQ = i(111085),
    eZ = i(107563),
    e$ = i(840411),
    e0 = i(666810),
    e1 = i(711690),
    e8 = i(945810);
let e2 = (0, e8.mj)({
    name: "2026-07-wishlist-show-owned-items-last",
    kind: "user",
    defaultConfig: { isEnabled: !1 },
    variations: { 1: { isEnabled: !0 } },
});
var e7 = i(724834),
    e5 = i(158045),
    e3 = i(451395),
    e6 = i(823016),
    e9 = i(18698);
function e4(e) {
    let { item: t, index: i, wishlistId: l, onReorder: s, children: r } = e,
        { manageFocusOnReorder: a } = (0, e6.r)();
    return (0, n.jsx)(e3.mG, {
        index: i,
        itemId: String(t.skuId),
        listType: String(l),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: t },
        "aria-label": W.intl.formatToPlainString(W.t["7SnyMA"], { positionNumber: i + 1 }),
        onReorder: s,
        onEnd: () => a(String(t.skuId)),
        className: e9.C,
        dropBeforeClassName: e9.A,
        dropAfterClassName: e9.Ze,
        draggingClassName: e9.Id,
        children: (0, n.jsx)("div", { className: e9.An, children: r }),
    });
}
let te = l.memo(function (e) {
    let {
            item: t,
            index: i,
            profileOwner: s,
            guildId: r,
            showEditingControls: a,
            wishlistId: o,
            isDragging: d,
            onReorder: u,
        } = e,
        { registerDragHandleRef: c } = (0, e6.r)(),
        g = l.useMemo(
            () =>
                a
                    ? (0, n.jsx)(e3.jV, {
                          buttonRef: c(String(t.skuId)),
                          className: e9.BU,
                          onFocus: (e) => e.stopPropagation(),
                      })
                    : void 0,
            [a, c, t.skuId],
        ),
        m = l.useMemo(
            () =>
                (0, n.jsx)(e7.A, {
                    item: t,
                    wishlistOwner: s,
                    guildId: r,
                    wishlistId: o,
                    isDragging: d,
                    dragHandle: g,
                }),
            [t, s, r, d, g, o],
        );
    return a
        ? (0, n.jsx)("li", {
              children: (0, n.jsx)(e4, { item: t, index: i, wishlistId: o, onReorder: u, children: m }),
          })
        : (0, n.jsx)("li", { children: m });
});
function tt(e) {
    var t;
    let { items: i, profileOwner: s, guildId: r, showEditingControls: a, isSortingNitroToFront: o } = e,
        d = eV.default.getCurrentUser(),
        { defaultWishlistId: u } = (0, x.cf)([eH.A], () => ({ defaultWishlistId: eH.A.getFirstWishlistId(s.id) })),
        c = (0, eJ.rV)("UserProfileModalV2WishlistGrid"),
        g = l.useMemo(
            () => (c ? i : i.filter((e) => e.sku?.tenantMetadata?.collectibles?.type !== eq.R.PROFILE_FRAME)),
            [i, c],
        ),
        m = null != d && d.id !== s.id,
        h =
            ((t = m ? "UserProfileModalV2WishlistGrid" : "UserProfileModalV2WishlistGrid Own Profile Do Not Use"),
            e2.useConfig({ location: t }).isEnabled && m),
        p = (0, x.bG)([eQ.A], () => {
            let e = o ? (0, e$.gm)(g) : g;
            return (
                h &&
                    (e = (0, e$.hE)(e, (e) => {
                        var t;
                        return (
                            (t = eQ.A.hasSentGift(e.skuId, s.id)),
                            e.skuProductLine !== f.EZt.PREMIUM && (!0 === e.isOwned || t)
                        );
                    })),
                e
            );
        }, [g, o, h, s.id]),
        { isDragging: I } = (0, eY.V)((e) => ({ isDragging: e.isDragging() })),
        j = l.useCallback(
            (e, t) => {
                if (e === t || null == u || 0 === p.length || e < 0 || e >= p.length || t < 0 || t >= p.length) return;
                let i = eZ.A.getWishlist(u);
                if (null == i) return;
                let n = p[e],
                    { newWishlistData: l, previousSkuId: s, nextSkuId: r } = (0, e$.Ap)(i, p, e, t);
                eG.A.reorderWishlistItem(u, n.skuId, { previousSkuId: s, nextSkuId: r, newWishlistData: l });
            },
            [u, p],
        );
    if (null == d || null == u) return null;
    let A = (0, n.jsx)("ul", {
        className: e9.Vg,
        children: p.map((e, t) =>
            (0, n.jsx)(
                te,
                {
                    item: e,
                    index: t,
                    profileOwner: s,
                    guildId: r,
                    showEditingControls: a,
                    wishlistId: u,
                    isDragging: I,
                    onReorder: j,
                },
                e.skuId,
            ),
        ),
    });
    return a ? (0, n.jsx)(e6.B, { emptyListFallbackRef: null, children: A }) : A;
}
function ti(e) {
    let t = (0, e1.a)("UserProfileModalV2WishlistGrid");
    return (0, n.jsx)(tt, { ...e, isSortingNitroToFront: t });
}
function tn(e) {
    let t = eV.default.getCurrentUser()?.id,
        i = null != t && t !== e.profileOwner.id,
        l = e.items.some((e) => e5.Ay.isPremiumSku(e.skuId));
    return (0, n.jsx)(e0.h, {
        isGifting: i,
        location: "UserProfileModalV2WishlistGrid",
        children: i && l ? (0, n.jsx)(ti, { ...e }) : (0, n.jsx)(tt, { ...e, isSortingNitroToFront: !1 }),
    });
}
var tl = i(815021),
    ts = i(299679),
    tr = i(889586),
    ta = i(973912),
    to = i(554146),
    td = i(131607),
    tu = i(927813),
    tc = i(49999);
let tg = 90 * tu.A.Millis.DAY,
    tm = 90 * tu.A.Millis.DAY,
    tx = (0, e8.mj)({
        name: "2026-07-smag-wishlist-recommendations-dismiss-threshold",
        kind: "user",
        defaultConfig: { minItemsToDismiss: 1 },
        variations: { 0: { minItemsToDismiss: 1 }, 1: { minItemsToDismiss: 3 }, 2: { minItemsToDismiss: 10 } },
    });
var tf = i(588605);
function th(e) {
    let {
            user: t,
            guildId: i,
            wishlist: s,
            hasFetchedWishlist: r = !1,
            analyticsLocations: a,
            impressionSessionId: o,
            className: d,
        } = e,
        {
            isVisible: u,
            isDismissible: c,
            markAsDismissed: g,
        } = (function (e) {
            let { userId: t, wishlist: i, hasFetchedWishlist: n } = e,
                { minItemsToDismiss: s } = tx.useConfig({ location: "user_profile_wishlist_suggestions_grid" }),
                r = (i?.items.length ?? 0) >= s,
                [a, o] = l.useState(!1);
            !n || r || a || o(!0);
            let d = (0, x.bG)(
                    [eH.A],
                    () => (null != i ? new Date(eH.A.getWishlistSettings(t, i.id)?.updated_at ?? 0).valueOf() : 0),
                    [i, t],
                ),
                [u, c] = (0, td.Wl)(
                    to.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS,
                    { showAfterTimestamp: d + tm, cooldownDurationMs: tg },
                    void 0,
                    !0,
                ),
                g = u === to.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
            return {
                isVisible: n && (g || a || !r),
                isDismissible: r,
                markAsDismissed: l.useCallback(() => {
                    o(!1), c(tc.i.USER_DISMISS);
                }, [c]),
            };
        })({ userId: t.id, wishlist: s, hasFetchedWishlist: r });
    return u
        ? (0, n.jsx)(tp, {
              user: t,
              guildId: i,
              wishlist: s,
              analyticsLocations: a,
              impressionSessionId: o,
              className: d,
              isDismissible: c,
              markAsDismissed: g,
          })
        : null;
}
function tp(e) {
    let {
            user: t,
            guildId: i,
            wishlist: l,
            analyticsLocations: s,
            impressionSessionId: a,
            className: o,
            isDismissible: d,
            markAsDismissed: u,
        } = e,
        { items: c } = (0, tr.L)({
            userId: t.id,
            wishlist: l,
            numWishlistItemsToRecommend: 15,
            maxWishlistItemsToShow: 8,
            source: eW.B5.USER_PROFILE,
        });
    return 0 === c.length
        ? null
        : (0, n.jsxs)("div", {
              className: r()(tf.kL, o),
              children: [
                  (0, n.jsxs)("div", {
                      className: tf.wx,
                      children: [
                          (0, n.jsx)(y.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              children: W.intl.string(W.t["+GB8Kt"]),
                          }),
                          d &&
                              (0, n.jsx)("div", {
                                  className: tf.b,
                                  children: (0, n.jsx)(tl.J, { size: "xs", onClick: u }),
                              }),
                      ],
                  }),
                  (0, n.jsx)(ts.dB, {
                      newValue: {
                          impressionSessionId: a,
                          surface: "user_profile_wishlist_suggestions_grid",
                          wishlistOwnerId: t.id,
                          wishlistId: l?.id,
                          analyticsLocations: s,
                      },
                      children: (0, n.jsx)(ta.A, {
                          items: c,
                          guildId: i,
                          wishlist: l,
                          className: r()(tf.Vg, tf.e6),
                          analyticsLocations: s,
                      }),
                  }),
              ],
          });
}
var tI = i(477782),
    tj = i(403581),
    tA = i(922016),
    tv = i(980707),
    tE = i(789645),
    tS = i(847374),
    tC = i(486020),
    tb = i(291641);
function tN(e) {
    let {
            title: t,
            variant: i = "secondary",
            handleOpenCollectiblesShop: s,
            handleOpenGameShop: r,
            handleAddNitroToWishlist: a,
            socialLayerStorefrontApplicationIds: o,
        } = e,
        d = l.useRef(null),
        [u, c] = l.useState(!1),
        g = (function (e) {
            let { applications: t, handleOpenGameShop: i } = e;
            return l.useMemo(
                () =>
                    t.filter(e_.Vq).map((e) => {
                        let t = tC.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 20 });
                        return {
                            id: `browse-social-layer-storefront-${e.id}`,
                            label: W.intl.formatToPlainString(W.t["HDT/rg"], { applicationName: e.name }),
                            iconLeft: null != t ? () => (0, n.jsx)("img", { className: tb.I, src: t, alt: "" }) : eI.U,
                            leadingAccessory: null != t ? { type: "image", src: t } : { type: "icon", icon: eI.U },
                            action: () => i?.(e.id),
                        };
                    }),
                [t, i],
            );
        })({ applications: (0, eb.A)(o), handleOpenGameShop: r }),
        m = l.useMemo(
            () =>
                (0, n.jsxs)(tI.rX, {
                    children: [
                        null != s &&
                            (0, n.jsx)(tI.Dr, {
                                id: "browse-collectibles-shop",
                                label: W.intl.string(W.t["5upuqx"]),
                                iconLeft: eI.U,
                                leadingAccessory: { type: "icon", icon: eI.U },
                                action: s,
                            }),
                        null != a &&
                            (0, n.jsx)(tI.Dr, {
                                id: "add-nitro-to-wishlist",
                                label: W.intl.string(W.t.lG6a5x),
                                iconLeft: tj.t,
                                leadingAccessory: { type: "icon", icon: tj.t },
                                action: a,
                            }),
                        null != r &&
                            g.map((e) => {
                                let { id: t, label: i, iconLeft: l, leadingAccessory: s, action: r } = e;
                                return (0, n.jsx)(
                                    tI.Dr,
                                    { id: t, label: i, iconLeft: l, leadingAccessory: s, action: r },
                                    t,
                                );
                            }),
                    ],
                }),
            [s, r, a, g],
        );
    return (0, n.jsx)(tA.Y, {
        targetElementRef: d,
        position: "bottom",
        onRequestOpen: () => c(!0),
        onRequestClose: () => c(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(tv.W, {
                "data-menu-migrated": !0,
                navId: "wishlist-overflow-menu",
                onSelect: void 0,
                onClose: t,
                "aria-label": W.intl.string(W.t.GdNkvG),
                children: m,
            });
        },
        children: (e) =>
            (0, n.jsx)(ep.$, {
                buttonRef: d,
                variant: i,
                size: "sm",
                icon: u ? tE.P : tS.a,
                iconPosition: "end",
                text: t,
                ...e,
            }),
    });
}
var tT = i(509434),
    tw = i(365199);
let tk = v.A.getArticleURL(f.MVz.CUSTOM_PROFILES_WISHLIST);
function ty(e) {
    let { isOwner: t, isWishlistPublic: i, onToggleVisibility: s } = e,
        r = l.useRef(null),
        { analyticsLocations: a } = (0, en.Ay)(eC.A.USER_PROFILE_WISHLIST),
        o = l.useMemo(
            () =>
                t
                    ? (0, n.jsxs)(tI.rX, {
                          children: [
                              (0, n.jsx)(tI.fP, {
                                  id: "wishlist-privacy-setting",
                                  label: W.intl.string(W.t.b2nFyA),
                                  subtext: W.intl.string(W.t.dw58pE),
                                  checked: i,
                                  action: s,
                              }),
                              (0, n.jsx)(tI.bX, {}),
                              (0, n.jsx)(tI.Dr, {
                                  id: "wishlist-privacy-setting2",
                                  label: W.intl.string(W.t.hvVgAZ),
                                  icon: tT.I,
                                  trailingIndicator: { type: "icon", icon: tT.I },
                                  action: () => window.open(tk),
                              }),
                          ],
                      })
                    : null,
            [t, i, s],
        );
    return null == o
        ? null
        : (0, n.jsx)(en.f5, {
              value: a,
              children: (0, n.jsx)(tA.Y, {
                  targetElementRef: r,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, n.jsx)(tv.W, {
                          "data-menu-migrated": !0,
                          navId: "wishlist-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": W.intl.string(W.t.GdNkvG),
                          children: o,
                      });
                  },
                  children: (e) =>
                      (0, n.jsx)(U.q3, {
                          buttonRef: r,
                          icon: tw.j,
                          tooltipText: W.intl.string(W.t["UKOtz+"]),
                          action: "PRESS_OPTIONS",
                          ...e,
                      }),
              }),
          });
}
var tR = i(202541),
    tO = i(678790);
function t_(e) {
    let { socialLayerStorefrontApplicationIds: t, handleOpenShop: i, handleOpenGameShop: l } = e;
    return t.length > 0
        ? (0, n.jsx)(tN, {
              title: W.intl.string(W.t["i/yzHs"]),
              handleOpenCollectiblesShop: i,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationIds: t,
          })
        : (0, n.jsx)(ep.$, {
              variant: "secondary",
              size: "sm",
              icon: eI.U,
              text: W.intl.string(W.t["i/yzHs"]),
              onClick: i,
          });
}
function tL(e) {
    let {
        showEditingControls: t,
        socialLayerStorefrontApplicationIds: i,
        isWishlistPublic: l,
        handleOpenShop: s,
        handleOpenGameShop: r,
        handleAddNitroToWishlist: a,
        handleToggleWishlistVisibility: o,
    } = e;
    return (0, n.jsxs)("div", {
        className: tO.$s,
        children: [
            t &&
                (i.length > 0 || null != a
                    ? (0, n.jsx)(tN, {
                          title: W.intl.string(W.t.SDUwM0),
                          handleOpenCollectiblesShop: s,
                          handleOpenGameShop: i.length > 0 ? r : void 0,
                          handleAddNitroToWishlist: a,
                          socialLayerStorefrontApplicationIds: i,
                      })
                    : (0, n.jsx)(ep.$, {
                          variant: "secondary",
                          size: "sm",
                          icon: ej.j,
                          text: W.intl.string(W.t.SDUwM0),
                          onClick: s,
                      })),
            (0, n.jsx)(ty, { isOwner: !0, isWishlistPublic: l, onToggleVisibility: o }),
        ],
    });
}
function tP(e) {
    let { application: t, handleOpenGameShop: i, handleOpenGameShopMouseDown: s } = e,
        r = l.useCallback(() => {
            i(t.id);
        }, [t, i]),
        a = l.useCallback(() => {
            s(t.id);
        }, [t, s]);
    return (0, n.jsx)(ep.$, {
        variant: "primary",
        size: "sm",
        icon: eI.U,
        text: W.intl.formatToPlainString(W.t["HDT/rg"], { applicationName: t.name }),
        onClick: r,
        onMouseDown: a,
    });
}
function tD(e) {
    let {
            showEditingControls: t,
            socialLayerStorefrontApplicationIds: i,
            handleOpenShop: s,
            handleOpenGameShop: r,
            handleOpenGameShopMouseDown: a,
        } = e,
        o = (0, ek.Us)() === f.BRT.OVERLAY,
        d = (0, eb.A)(i),
        u = l.useMemo(() => {
            if (o || 0 === i.length) return null;
            let e = d.reduce((e, t) => (null == t || (e[t.id] = t), e), {});
            if (1 === i.length) {
                let t = e[i[0]];
                return null == t
                    ? null
                    : (0, n.jsx)(tP, { application: t, handleOpenGameShop: r, handleOpenGameShopMouseDown: a });
            }
            return (0, n.jsx)(tN, {
                title: W.intl.string(W.t.FkjcWY),
                variant: "primary",
                handleOpenGameShop: r,
                socialLayerStorefrontApplicationIds: i,
            });
        }, [o, i, r, d, a]);
    return (0, n.jsxs)("div", {
        className: tO.y7,
        children: [
            (0, n.jsxs)("div", {
                className: tO.q6,
                children: [
                    (0, n.jsx)(k.D, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: W.intl.string(W.t.HGnLLT),
                    }),
                    (0, n.jsx)(y.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: W.intl.string(W.t["/X1ny6"]),
                    }),
                ],
            }),
            (t || null != u) &&
                (0, n.jsxs)(eA.e, {
                    size: "sm",
                    children: [
                        t &&
                            (0, n.jsx)(ep.$, {
                                variant: "primary",
                                size: "sm",
                                icon: eI.U,
                                text: W.intl.string(W.t.ZbS4QB),
                                onClick: s,
                            }),
                        u,
                    ],
                }),
        ],
    });
}
function tG(e) {
    let {
            isOwner: t,
            showEditingControls: i,
            profileOwner: s,
            wishlist: r,
            socialLayerStorefrontApplicationIds: a,
            handleOpenShop: o,
            handleOpenGameShop: d,
            handleAddNitroToWishlist: u,
        } = e,
        c = r.id,
        m = (0, x.bG)([eH.A], () => eH.A.getWishlistSettings(s.id, c)),
        { trackUserProfileWishlistAction: f } = (0, g.NJ)(),
        h = !1 === s.nsfwAllowed,
        [p, I] = l.useState(!0);
    l.useEffect(() => {
        m?.visibility != null && I(m.visibility === eh.a.PUBLIC);
    }, [m?.visibility]);
    let j = l.useCallback(
            (e) => {
                let { wishlistId: t, action: i, productLines: n } = e;
                null != t && f({ wishlistId: t, action: i, productLines: n });
            },
            [f],
        ),
        A = (0, eK.A)({ wishlistId: c, onAction: j, productLines: null != r ? (0, eF.y9)(r) : null }),
        v = l.useCallback(() => {
            if (null == c) return;
            let e = p ? eh.a.PRIVATE : eh.a.PUBLIC;
            I(!p),
                eG.A.updateWishlistVisibility(c, e),
                f({
                    wishlistId: c,
                    action: p ? $.Mq.WISHLIST_TOGGLE_PRIVATE : $.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: null != r ? (0, eF.y9)(r) : void 0,
                });
        }, [c, p, f, r]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            !p &&
                (0, n.jsxs)("div", {
                    className: tO.lm,
                    children: [
                        (0, n.jsx)(ev.G, { size: "custom", width: 16, height: 16 }),
                        (0, n.jsx)(y.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: W.intl.string(W.t.RX7D9h),
                        }),
                    ],
                }),
            p &&
                h &&
                (0, n.jsxs)("div", {
                    className: tO.lm,
                    children: [
                        (0, n.jsx)(eE.m, { size: "custom", width: 16, height: 16 }),
                        (0, n.jsx)(y.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: W.intl.string(W.t.d78ChW),
                        }),
                    ],
                }),
            (0, n.jsxs)("div", {
                ref: A,
                className: tO.U1,
                children: [
                    (0, n.jsx)(y.E, {
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: W.intl.format(W.t.r6Y1Lg, { count: r.items.length }),
                    }),
                    t
                        ? (0, n.jsx)(tL, {
                              showEditingControls: i,
                              socialLayerStorefrontApplicationIds: a,
                              isWishlistPublic: p,
                              handleOpenShop: o,
                              handleOpenGameShop: d,
                              handleAddNitroToWishlist: u,
                              handleToggleWishlistVisibility: v,
                          })
                        : (0, n.jsx)(t_, {
                              socialLayerStorefrontApplicationIds: a,
                              handleOpenShop: o,
                              handleOpenGameShop: d,
                          }),
                ],
            }),
        ],
    });
}
function tM(e) {
    let { profileOwner: t, guildId: i } = e,
        s = l.useRef(null);
    (0, eB.i)({ containerRef: s, itemType: "WISHLIST_ITEM" });
    let { wishlistId: a, currentUser: o } = (0, x.cf)([eH.A, eV.default], () => ({
            wishlistId: eH.A.getFirstWishlistId(t.id),
            currentUser: eV.default.getCurrentUser(),
        })),
        { analyticsLocations: d } = (0, en.Ay)(),
        u = (0, ez.A)(t.id),
        { wishlist: c, wasFetched: g, error: m } = (0, eW.fw)({ wishlistId: a, userId: t.id }),
        [f, h] = l.useState(!1);
    g && !f && h(!0), (0, eU.A)(c);
    let p = (function (e) {
            let { wishlist: t, profileOwner: i, currentUser: n } = e,
                s = i.id === n?.id,
                r = l.useMemo(() => (t?.userId != null ? [t.userId] : []), [t]),
                a = (0, x.bG)([eL.A], () => eL.A.getDetectableIdsToApplicationIds()),
                o = l.useMemo(() => {
                    let e = [];
                    for (let i of t?.items ?? [])
                        (0, eO.$)(i) && null != a[i.sku.applicationId] && e.push(i.sku.applicationId);
                    return e;
                }, [t, a]),
                d = (0, eP.w)({ userIds: r }),
                u = (0, eP.mn)({ userIds: r }),
                c = (0, eP.tR)(r),
                g = (0, eP.rY)(),
                m = (0, eP.qx)(),
                f = (0, eP.px)();
            return l.useMemo(
                () => (0, w.uniq)([...o, ...d, ...u, ...c, ...(s ? [...g, ...m, ...f] : [])].filter(e_.Vq)),
                [o, d, u, c, g, m, f, s],
            );
        })({ wishlist: c, profileOwner: t, currentUser: o }),
        I = (0, eM.Gh)("user-profile-modal-v2-wishlist"),
        j = (0, eS.A)(() => (0, ef.A)()),
        A = l.useCallback(() => {
            (0, eN.Cz)({ analyticsLocations: d, analyticsSource: eC.A.USER_PROFILE_WISHLIST });
        }, [d]),
        v = l.useCallback((e) => {
            (0, eD.G)({ applicationId: e });
        }, []),
        E = l.useCallback((e) => {
            (0, er.closeUserProfileModal)(), (0, eD.default)({ applicationId: e });
        }, []),
        { handleToggle: S } = (0, ew.c)({
            userId: o?.id,
            skuId: tR.pe.TIER_2,
            nuxGraphic: I ? eR.g : void 0,
            onNuxShow: eT.D,
            location: eC.A.USER_PROFILE_WISHLIST,
            onAddSuccess: ey.w,
        });
    if (null == o || null != m) return null;
    let C = null == c || 0 === c.items.length;
    return (0, n.jsxs)(tW, {
        scrollerRef: s,
        className: r()({ [tO.XG]: !C }),
        fade: !0,
        children: [
            C
                ? (0, n.jsx)(tD, {
                      showEditingControls: u,
                      socialLayerStorefrontApplicationIds: p,
                      handleOpenShop: A,
                      handleOpenGameShop: E,
                      handleOpenGameShopMouseDown: v,
                  })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(eX.A, { scrollerRef: s }),
                          (0, n.jsx)(tG, {
                              isOwner: o?.id === t.id,
                              showEditingControls: u,
                              profileOwner: t,
                              wishlist: c,
                              socialLayerStorefrontApplicationIds: p,
                              handleOpenShop: A,
                              handleOpenGameShop: E,
                              handleAddNitroToWishlist: I && !(0, eF.C3)(c, tR.pe.TIER_2) ? S : void 0,
                          }),
                          (0, n.jsx)(tn, { items: c.items, profileOwner: t, guildId: i, showEditingControls: u }),
                      ],
                  }),
            u &&
                (0, n.jsx)(th, {
                    user: t,
                    guildId: i,
                    wishlist: c,
                    hasFetchedWishlist: f,
                    analyticsLocations: d,
                    impressionSessionId: j,
                    className: C ? tO._E : tO.HZ,
                }),
        ],
    });
}
var tU = i(844621);
function tW(e) {
    let { children: t, className: i, scrollerRef: l, ...s } = e;
    return (0, n.jsx)(a.Ip, { ref: l, className: r()(tU.gN, i), fade: !0, ...s, children: t });
}
function tF(e) {
    let { user: t, currentUser: i, section: l, displayProfile: s, guildId: r, channelId: a, onClose: o } = e;
    return l === $.RP.ACTIVITY
        ? (0, n.jsx)(et, { user: t, currentUser: i, displayProfile: s, guildId: r, channelId: a, onClose: o })
        : l === $.RP.MUTUAL_FRIENDS
          ? (0, n.jsx)(ed, { user: t, guildId: r, channelId: a, onClose: o })
          : l === $.RP.MUTUAL_GUILDS
            ? (0, n.jsx)(em, { user: t, onClose: o })
            : l === $.RP.WIDGETS
              ? (0, n.jsx)(ex.A, { user: t, guildId: r, channelId: a })
              : l === $.RP.WISHLIST
                ? (0, n.jsx)(tM, { profileOwner: t, guildId: r })
                : null;
}
function tV(e) {
    let {
            user: t,
            currentUser: i,
            displayProfile: s,
            guildId: r,
            channelId: x,
            items: f,
            initialSection: h,
            onClose: p,
        } = e,
        { trackUserProfileAction: I } = (0, g.NJ)(),
        [j, A] = l.useState(() => (f.find((e) => e.section === h) ?? f[0]).section),
        v = f.find((e) => e.section === j) ?? f[0];
    return (
        v.section !== j && A(v.section),
        (0, n.jsxs)("div", {
            className: tU.kL,
            children: [
                (0, n.jsx)(a.Ip, {
                    orientation: "horizontal",
                    className: tU.gU,
                    fade: !0,
                    scrollbarGutter: !1,
                    children: (0, n.jsx)(o.V, {
                        type: "top",
                        look: "custom",
                        selectedItem: v.section,
                        onItemSelect: function (e) {
                            m.A.hasUnsavedChanges() && v.section === $.RP.WIDGETS
                                ? (0, c.VQ)()
                                : (I({ action: "PRESS_SECTION", section: e }), A(e));
                        },
                        children: f.map((e) =>
                            (0, n.jsx)(
                                o.V.Item,
                                { className: tU.YU, id: e.section, "aria-label": e.text, children: e.text },
                                e.section,
                            ),
                        ),
                    }),
                }),
                (0, n.jsx)(o.V.Panel, {
                    id: v.section,
                    "aria-label": v.text,
                    className: tU.NM,
                    children: (0, n.jsx)(d.F, {
                        component: (0, n.jsx)(u.A, { children: (0, n.jsx)(d.H, { children: v.text }) }),
                        children: (0, n.jsx)(tF, {
                            user: t,
                            currentUser: i,
                            displayProfile: s,
                            guildId: r,
                            channelId: x,
                            section: v.section,
                            onClose: p,
                        }),
                    }),
                }),
            ],
        })
    );
}
