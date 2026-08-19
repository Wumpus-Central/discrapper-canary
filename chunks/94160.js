i.d(t, { K: () => tM, A: () => tW });
var n = i(477900),
    l = i(582128),
    s = i(503698),
    r = i.n(s),
    a = i(364522),
    o = i(761508),
    d = i(707554),
    c = i(140735),
    u = i(207803),
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
    T = i(353394),
    b = i(64622),
    N = i(986712),
    w = i(435558),
    y = i(297264),
    k = i(834730),
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
let H = [
        () => W.intl.string(W.t.madJdE),
        () => W.intl.string(W.t.NYmfoP),
        () => W.intl.string(W.t.R2PaCg),
        () => W.intl.string(W.t.laSR8h),
        () => W.intl.string(W.t.DnsJE8),
    ],
    V = [
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
                    (0, n.jsx)(y.D, { variant: "heading-md/medium", color: "text-strong", children: t }),
                    (0, n.jsx)(k.E, { variant: "text-sm/normal", color: "text-default", children: i }),
                ],
            }),
            l,
        ],
    });
}
function X() {
    let e = W.intl.string(W.t.RnD2yZ),
        [t] = l.useState(() => ((0, w.sample)(H) ?? H[0])());
    return (0, n.jsx)(K, { heading: e, bodyText: t });
}
function Y() {
    let e = W.intl.string(W.t.bFgqYJ),
        [t] = l.useState(() => ((0, w.sample)(V) ?? V[0])());
    return (0, n.jsx)(K, { heading: e, bodyText: t });
}
function q(e) {
    let { user: t, guildId: i, channelId: s, onClose: r } = e,
        a = M.Ay.getName(i, s, t),
        o = W.intl.formatToPlainString(W.t.sjSitP, { name: a }),
        [d] = l.useState(() => ((0, w.sample)(B) ?? B[0])(a)),
        c = l.useCallback(() => {
            _.A.openPrivateChannel({ recipientIds: t.id }), r?.();
        }, [t.id, r]);
    return (0, n.jsx)(K, {
        heading: o,
        bodyText: d,
        children: (0, n.jsx)("div", {
            className: F.v0,
            children: (0, n.jsx)(U.FD, { icon: R.ChatIcon, text: W.intl.string(W.t["g33r/P"]), onClick: c }),
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
function Z(e) {
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
var Q = i(83013),
    $ = i(518477),
    ee = i(186468);
function et(e) {
    let { user: t, currentUser: i, displayProfile: l, guildId: s, channelId: r, onClose: a } = e,
        { live: o, recent: d, stream: c } = (0, E.A)(t.id),
        { voiceChannel: u, voiceActivity: g } = (0, S.A)({ userId: t.id, guildId: s }),
        m = (0, x.bG)([p.A], () => p.A.isFetchingUserOutbox(t.id)),
        w = t.id === i.id,
        y = (0, x.bG)([A.A, j.A], () => {
            let e = w ? A.A.getStatus() : j.A.getStatus(t.id);
            return e === f.clD.OFFLINE || e === f.clD.INVISIBLE;
        }),
        k = o.length > 0 || null != c,
        R = l?.private !== !0 && null == c && null == g && null != u,
        O = !y && (k || R),
        _ = d.length > 0;
    return O || _ || !m
        ? O || _ || m
            ? (0, n.jsxs)(tM, {
                  className: ee.XG,
                  fade: !0,
                  children: [
                      O
                          ? (0, n.jsx)(Q.A, {
                                heading: W.intl.string(W.t.J6STd9),
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
                                                children: (0, n.jsx)(N.A, {
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
                          ? (0, n.jsx)(Q.A, {
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
                                            { children: (0, n.jsx)(T.A, { user: t, entry: e, onClose: a }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                            })
                          : null,
                  ],
              })
            : w
              ? (0, n.jsx)(Z, { onClose: a })
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
        { mutualFriends: c, mutualFriendsCount: u } = (0, el.A)(t),
        m = (0, ei.A)();
    return (
        l.useEffect(() => {
            (0, es.A)(t.id, m);
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
                                      (0, n.jsx)(I.FQ, { width: 40, opacity: 0.08 }),
                                      (0, n.jsx)(I.FQ, { width: 135, opacity: 0.08 }),
                                  ],
                              },
                              t,
                          ),
                      )
                    : 0 === c.length
                      ? (0, n.jsx)(X, {})
                      : c.map((e) => {
                            let { key: t, user: l, status: c } = e;
                            return (0, n.jsx)(
                                ea.A,
                                {
                                    user: l,
                                    status: c,
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
var ec = i(398590),
    eu = i(345942),
    eg = i(51943);
function em(e) {
    let { user: t, onClose: i } = e,
        { trackUserProfileAction: l } = (0, g.NJ)(),
        { mutualGuilds: s, isFetching: r } = (0, el.A)(t);
    return (0, n.jsx)(tM, {
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
                                    l({ action: "PRESS_MUTUAL_GUILD" }), (0, eu.u)(s.id), i(), (0, ec.jH)();
                                },
                            },
                            s.id,
                        );
                    })
                  : (0, n.jsx)(Y, {}),
    });
}
var ex = i(875422),
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
    eT = i(429913),
    eb = i(839534),
    eN = i(895360),
    ew = i(152472),
    ey = i(267102),
    ek = i(274681),
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
    eH = i(287809),
    eV = i(321191),
    eB = i(600761),
    ez = i(389667),
    eK = i(535089),
    eX = i(128988),
    eY = i(686246),
    eq = i(111085),
    eJ = i(107563),
    eZ = i(840411),
    eQ = i(666810),
    e$ = i(711690),
    e0 = i(945810);
let e1 = (0, e0.mj)({
    name: "2026-07-wishlist-show-owned-items-last",
    kind: "user",
    defaultConfig: { isEnabled: !1 },
    variations: { 1: { isEnabled: !0 } },
});
var e8 = i(724834),
    e2 = i(158045),
    e7 = i(451395),
    e5 = i(823016),
    e3 = i(18698);
function e6(e) {
    let { item: t, index: i, wishlistId: l, onReorder: s, children: r } = e,
        { manageFocusOnReorder: a } = (0, e5.r)();
    return (0, n.jsx)(e7.mG, {
        index: i,
        itemId: String(t.skuId),
        listType: String(l),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: t },
        "aria-label": W.intl.formatToPlainString(W.t["7SnyMA"], { positionNumber: i + 1 }),
        onReorder: s,
        onEnd: () => a(String(t.skuId)),
        className: e3.C,
        dropBeforeClassName: e3.A,
        dropAfterClassName: e3.Ze,
        draggingClassName: e3.Id,
        children: (0, n.jsx)("div", { className: e3.An, children: r }),
    });
}
let e4 = l.memo(function (e) {
    let {
            item: t,
            index: i,
            profileOwner: s,
            guildId: r,
            showEditingControls: a,
            wishlistId: o,
            isDragging: d,
            onReorder: c,
        } = e,
        { registerDragHandleRef: u } = (0, e5.r)(),
        g = l.useMemo(
            () =>
                a
                    ? (0, n.jsx)(e7.jV, {
                          buttonRef: u(String(t.skuId)),
                          className: e3.BU,
                          onFocus: (e) => e.stopPropagation(),
                      })
                    : void 0,
            [a, u, t.skuId],
        ),
        m = l.useMemo(
            () =>
                (0, n.jsx)(e8.A, {
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
              children: (0, n.jsx)(e6, { item: t, index: i, wishlistId: o, onReorder: c, children: m }),
          })
        : (0, n.jsx)("li", { children: m });
});
function e9(e) {
    var t;
    let { items: i, profileOwner: s, guildId: r, showEditingControls: a, isSortingNitroToFront: o } = e,
        d = eH.default.getCurrentUser(),
        { defaultWishlistId: c } = (0, x.cf)([eV.A], () => ({ defaultWishlistId: eV.A.getFirstWishlistId(s.id) })),
        u = null != d && d.id !== s.id,
        g =
            ((t = u ? "UserProfileModalV2WishlistGrid" : "UserProfileModalV2WishlistGrid Own Profile Do Not Use"),
            e1.useConfig({ location: t }).isEnabled && u),
        m = (0, x.bG)([eq.A], () => {
            let e = o ? (0, eZ.gm)(i) : i;
            return (
                g &&
                    (e = (0, eZ.hE)(e, (e) => {
                        var t;
                        return (
                            (t = eq.A.hasSentGift(e.skuId, s.id)),
                            e.skuProductLine !== f.EZt.PREMIUM && (!0 === e.isOwned || t)
                        );
                    })),
                e
            );
        }, [i, o, g, s.id]),
        { isDragging: h } = (0, eY.V)((e) => ({ isDragging: e.isDragging() })),
        p = l.useCallback(
            (e, t) => {
                if (e === t || null == c || 0 === m.length || e < 0 || e >= m.length || t < 0 || t >= m.length) return;
                let i = eJ.A.getWishlist(c);
                if (null == i) return;
                let n = m[e],
                    { newWishlistData: l, previousSkuId: s, nextSkuId: r } = (0, eZ.Ap)(i, m, e, t);
                eG.A.reorderWishlistItem(c, n.skuId, { previousSkuId: s, nextSkuId: r, newWishlistData: l });
            },
            [c, m],
        );
    if (null == d || null == c) return null;
    let I = (0, n.jsx)("ul", {
        className: e3.Vg,
        children: m.map((e, t) =>
            (0, n.jsx)(
                e4,
                {
                    item: e,
                    index: t,
                    profileOwner: s,
                    guildId: r,
                    showEditingControls: a,
                    wishlistId: c,
                    isDragging: h,
                    onReorder: p,
                },
                e.skuId,
            ),
        ),
    });
    return a ? (0, n.jsx)(e5.B, { emptyListFallbackRef: null, children: I }) : I;
}
function te(e) {
    let t = (0, e$.a)("UserProfileModalV2WishlistGrid");
    return (0, n.jsx)(e9, { ...e, isSortingNitroToFront: t });
}
function tt(e) {
    let t = eH.default.getCurrentUser()?.id,
        i = null != t && t !== e.profileOwner.id,
        l = e.items.some((e) => e2.Ay.isPremiumSku(e.skuId));
    return (0, n.jsx)(eQ.h, {
        isGifting: i,
        location: "UserProfileModalV2WishlistGrid",
        children: i && l ? (0, n.jsx)(te, { ...e }) : (0, n.jsx)(e9, { ...e, isSortingNitroToFront: !1 }),
    });
}
var ti = i(815021),
    tn = i(299679),
    tl = i(889586),
    ts = i(973912),
    tr = i(554146),
    ta = i(131607),
    to = i(927813),
    td = i(49999);
let tc = 90 * to.A.Millis.DAY,
    tu = 90 * to.A.Millis.DAY,
    tg = (0, e0.mj)({
        name: "2026-07-smag-wishlist-recommendations-dismiss-threshold",
        kind: "user",
        defaultConfig: { minItemsToDismiss: 1 },
        variations: { 0: { minItemsToDismiss: 1 }, 1: { minItemsToDismiss: 3 }, 2: { minItemsToDismiss: 10 } },
    });
var tm = i(588605);
function tx(e) {
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
            isVisible: c,
            isDismissible: u,
            markAsDismissed: g,
        } = (function (e) {
            let { userId: t, wishlist: i, hasFetchedWishlist: n } = e,
                { minItemsToDismiss: s } = tg.useConfig({ location: "user_profile_wishlist_suggestions_grid" }),
                r = (i?.items.length ?? 0) >= s,
                [a, o] = l.useState(!1);
            !n || r || a || o(!0);
            let d = (0, x.bG)(
                    [eV.A],
                    () => (null != i ? new Date(eV.A.getWishlistSettings(t, i.id)?.updated_at ?? 0).valueOf() : 0),
                    [i, t],
                ),
                [c, u] = (0, ta.Wl)(
                    tr.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS,
                    { showAfterTimestamp: d + tu, cooldownDurationMs: tc },
                    void 0,
                    !0,
                ),
                g = c === tr.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
            return {
                isVisible: n && (g || a || !r),
                isDismissible: r,
                markAsDismissed: l.useCallback(() => {
                    o(!1), u(td.i.USER_DISMISS);
                }, [u]),
            };
        })({ userId: t.id, wishlist: s, hasFetchedWishlist: r });
    return c
        ? (0, n.jsx)(tf, {
              user: t,
              guildId: i,
              wishlist: s,
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
            wishlist: l,
            analyticsLocations: s,
            impressionSessionId: a,
            className: o,
            isDismissible: d,
            markAsDismissed: c,
        } = e,
        { items: u } = (0, tl.L)({
            userId: t.id,
            wishlist: l,
            numWishlistItemsToRecommend: 15,
            maxWishlistItemsToShow: 8,
            source: eW.B5.USER_PROFILE,
        });
    return 0 === u.length
        ? null
        : (0, n.jsxs)("div", {
              className: r()(tm.kL, o),
              children: [
                  (0, n.jsxs)("div", {
                      className: tm.wx,
                      children: [
                          (0, n.jsx)(k.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              children: W.intl.string(W.t["+GB8Kt"]),
                          }),
                          d &&
                              (0, n.jsx)("div", {
                                  className: tm.b,
                                  children: (0, n.jsx)(ti.J, { size: "xs", onClick: c }),
                              }),
                      ],
                  }),
                  (0, n.jsx)(tn.dB, {
                      newValue: {
                          impressionSessionId: a,
                          surface: "user_profile_wishlist_suggestions_grid",
                          wishlistOwnerId: t.id,
                          wishlistId: l?.id,
                          analyticsLocations: s,
                      },
                      children: (0, n.jsx)(ts.A, {
                          items: u,
                          guildId: i,
                          wishlist: l,
                          className: r()(tm.Vg, tm.e6),
                          analyticsLocations: s,
                      }),
                  }),
              ],
          });
}
var th = i(477782),
    tp = i(403581),
    tI = i(922016),
    tj = i(980707),
    tA = i(789645),
    tv = i(847374),
    tE = i(486020),
    tS = i(291641);
function tC(e) {
    let {
            title: t,
            variant: i = "secondary",
            handleOpenCollectiblesShop: s,
            handleOpenGameShop: r,
            handleAddNitroToWishlist: a,
            socialLayerStorefrontApplicationIds: o,
        } = e,
        d = l.useRef(null),
        [c, u] = l.useState(!1),
        g = (function (e) {
            let { applications: t, handleOpenGameShop: i } = e;
            return l.useMemo(
                () =>
                    t.filter(e_.Vq).map((e) => {
                        let t = tE.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 20 });
                        return {
                            id: `browse-social-layer-storefront-${e.id}`,
                            label: W.intl.formatToPlainString(W.t["HDT/rg"], { applicationName: e.name }),
                            iconLeft: null != t ? () => (0, n.jsx)("img", { className: tS.I, src: t, alt: "" }) : eI.U,
                            leadingAccessory: null != t ? { type: "image", src: t } : { type: "icon", icon: eI.U },
                            action: () => i?.(e.id),
                        };
                    }),
                [t, i],
            );
        })({ applications: (0, eT.A)(o), handleOpenGameShop: r }),
        m = l.useMemo(
            () =>
                (0, n.jsxs)(th.rX, {
                    children: [
                        null != s &&
                            (0, n.jsx)(th.Dr, {
                                id: "browse-collectibles-shop",
                                label: W.intl.string(W.t["5upuqx"]),
                                iconLeft: eI.U,
                                leadingAccessory: { type: "icon", icon: eI.U },
                                action: s,
                            }),
                        null != a &&
                            (0, n.jsx)(th.Dr, {
                                id: "add-nitro-to-wishlist",
                                label: W.intl.string(W.t.lG6a5x),
                                iconLeft: tp.t,
                                leadingAccessory: { type: "icon", icon: tp.t },
                                action: a,
                            }),
                        null != r &&
                            g.map((e) => {
                                let { id: t, label: i, iconLeft: l, leadingAccessory: s, action: r } = e;
                                return (0, n.jsx)(
                                    th.Dr,
                                    { id: t, label: i, iconLeft: l, leadingAccessory: s, action: r },
                                    t,
                                );
                            }),
                    ],
                }),
            [s, r, a, g],
        );
    return (0, n.jsx)(tI.Y, {
        targetElementRef: d,
        position: "bottom",
        onRequestOpen: () => u(!0),
        onRequestClose: () => u(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(tj.W, {
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
                icon: c ? tA.P : tv.a,
                iconPosition: "end",
                text: t,
                ...e,
            }),
    });
}
var tT = i(509434),
    tb = i(365199);
let tN = v.A.getArticleURL(f.MVz.CUSTOM_PROFILES_WISHLIST);
function tw(e) {
    let { isOwner: t, isWishlistPublic: i, onToggleVisibility: s } = e,
        r = l.useRef(null),
        { analyticsLocations: a } = (0, en.Ay)(eC.A.USER_PROFILE_WISHLIST),
        o = l.useMemo(
            () =>
                t
                    ? (0, n.jsxs)(th.rX, {
                          children: [
                              (0, n.jsx)(th.fP, {
                                  id: "wishlist-privacy-setting",
                                  label: W.intl.string(W.t.b2nFyA),
                                  subtext: W.intl.string(W.t.dw58pE),
                                  checked: i,
                                  action: s,
                              }),
                              (0, n.jsx)(th.bX, {}),
                              (0, n.jsx)(th.Dr, {
                                  id: "wishlist-privacy-setting2",
                                  label: W.intl.string(W.t.hvVgAZ),
                                  icon: tT.I,
                                  trailingIndicator: { type: "icon", icon: tT.I },
                                  action: () => window.open(tN),
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
              children: (0, n.jsx)(tI.Y, {
                  targetElementRef: r,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, n.jsx)(tj.W, {
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
                          icon: tb.MoreHorizontalIcon,
                          tooltipText: W.intl.string(W.t["UKOtz+"]),
                          action: "PRESS_OPTIONS",
                          ...e,
                      }),
              }),
          });
}
var ty = i(202541),
    tk = i(678790);
function tR(e) {
    let { socialLayerStorefrontApplicationIds: t, handleOpenShop: i, handleOpenGameShop: l } = e;
    return t.length > 0
        ? (0, n.jsx)(tC, {
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
function tO(e) {
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
        className: tk.$s,
        children: [
            t &&
                (i.length > 0 || null != a
                    ? (0, n.jsx)(tC, {
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
            (0, n.jsx)(tw, { isOwner: !0, isWishlistPublic: l, onToggleVisibility: o }),
        ],
    });
}
function t_(e) {
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
function tL(e) {
    let {
            showEditingControls: t,
            socialLayerStorefrontApplicationIds: i,
            handleOpenShop: s,
            handleOpenGameShop: r,
            handleOpenGameShopMouseDown: a,
        } = e,
        o = (0, ey.Us)() === f.BRT.OVERLAY,
        d = (0, eT.A)(i),
        c = l.useMemo(() => {
            if (o || 0 === i.length) return null;
            let e = d.reduce((e, t) => (null == t || (e[t.id] = t), e), {});
            if (1 === i.length) {
                let t = e[i[0]];
                return null == t
                    ? null
                    : (0, n.jsx)(t_, { application: t, handleOpenGameShop: r, handleOpenGameShopMouseDown: a });
            }
            return (0, n.jsx)(tC, {
                title: W.intl.string(W.t.FkjcWY),
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
                    (0, n.jsx)(y.D, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: W.intl.string(W.t.HGnLLT),
                    }),
                    (0, n.jsx)(k.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: W.intl.string(W.t["/X1ny6"]),
                    }),
                ],
            }),
            (t || null != c) &&
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
                        c,
                    ],
                }),
        ],
    });
}
function tP(e) {
    let {
            isOwner: t,
            showEditingControls: i,
            profileOwner: s,
            wishlist: r,
            socialLayerStorefrontApplicationIds: a,
            handleOpenShop: o,
            handleOpenGameShop: d,
            handleAddNitroToWishlist: c,
        } = e,
        u = r.id,
        m = (0, x.bG)([eV.A], () => eV.A.getWishlistSettings(s.id, u)),
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
        A = (0, eK.A)({ wishlistId: u, onAction: j, productLines: null != r ? (0, eF.y9)(r) : null }),
        v = l.useCallback(() => {
            if (null == u) return;
            let e = p ? eh.a.PRIVATE : eh.a.PUBLIC;
            I(!p),
                eG.A.updateWishlistVisibility(u, e),
                f({
                    wishlistId: u,
                    action: p ? $.Mq.WISHLIST_TOGGLE_PRIVATE : $.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: null != r ? (0, eF.y9)(r) : void 0,
                });
        }, [u, p, f, r]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            !p &&
                (0, n.jsxs)("div", {
                    className: tk.lm,
                    children: [
                        (0, n.jsx)(ev.EyeSlashIcon, { size: "custom", width: 16, height: 16 }),
                        (0, n.jsx)(k.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: W.intl.string(W.t.RX7D9h),
                        }),
                    ],
                }),
            p &&
                h &&
                (0, n.jsxs)("div", {
                    className: tk.lm,
                    children: [
                        (0, n.jsx)(eE.CircleInformationIcon, { size: "custom", width: 16, height: 16 }),
                        (0, n.jsx)(k.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: W.intl.string(W.t.d78ChW),
                        }),
                    ],
                }),
            (0, n.jsxs)("div", {
                ref: A,
                className: tk.U1,
                children: [
                    (0, n.jsx)(k.E, {
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: W.intl.format(W.t.r6Y1Lg, { count: r.items.length }),
                    }),
                    t
                        ? (0, n.jsx)(tO, {
                              showEditingControls: i,
                              socialLayerStorefrontApplicationIds: a,
                              isWishlistPublic: p,
                              handleOpenShop: o,
                              handleOpenGameShop: d,
                              handleAddNitroToWishlist: c,
                              handleToggleWishlistVisibility: v,
                          })
                        : (0, n.jsx)(tR, {
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
    let { profileOwner: t, guildId: i } = e,
        s = l.useRef(null);
    (0, eB.i)({ containerRef: s, itemType: "WISHLIST_ITEM" });
    let { wishlistId: a, currentUser: o } = (0, x.cf)([eV.A, eH.default], () => ({
            wishlistId: eV.A.getFirstWishlistId(t.id),
            currentUser: eH.default.getCurrentUser(),
        })),
        { analyticsLocations: d } = (0, en.Ay)(),
        c = (0, ez.A)(t.id),
        { wishlist: u, wasFetched: g, error: m } = (0, eW.fw)({ wishlistId: a, userId: t.id }),
        [f, h] = l.useState(!1);
    g && !f && h(!0), (0, eU.A)(u);
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
                c = (0, eP.mn)({ userIds: r }),
                u = (0, eP.tR)(r),
                g = (0, eP.rY)(),
                m = (0, eP.qx)(),
                f = (0, eP.px)();
            return l.useMemo(
                () => (0, w.uniq)([...o, ...d, ...c, ...u, ...(s ? [...g, ...m, ...f] : [])].filter(e_.Vq)),
                [o, d, c, u, g, m, f, s],
            );
        })({ wishlist: u, profileOwner: t, currentUser: o }),
        I = (0, eM.Gh)("user-profile-modal-v2-wishlist"),
        j = (0, eS.A)(() => (0, ef.A)()),
        A = l.useCallback(() => {
            (0, eb.Cz)({ analyticsLocations: d, analyticsSource: eC.A.USER_PROFILE_WISHLIST });
        }, [d]),
        v = l.useCallback((e) => {
            (0, eD.G)({ applicationId: e });
        }, []),
        E = l.useCallback((e) => {
            (0, er.closeUserProfileModal)(), (0, eD.default)({ applicationId: e });
        }, []),
        { handleToggle: S } = (0, ew.c)({
            userId: o?.id,
            skuId: ty.pe.TIER_2,
            nuxGraphic: I ? eR.g : void 0,
            onNuxShow: eN.D,
            location: eC.A.USER_PROFILE_WISHLIST,
            onAddSuccess: ek.w,
        });
    if (null == o || null != m) return null;
    let C = null == u || 0 === u.items.length;
    return (0, n.jsxs)(tM, {
        scrollerRef: s,
        className: r()({ [tk.XG]: !C }),
        fade: !0,
        children: [
            C
                ? (0, n.jsx)(tL, {
                      showEditingControls: c,
                      socialLayerStorefrontApplicationIds: p,
                      handleOpenShop: A,
                      handleOpenGameShop: E,
                      handleOpenGameShopMouseDown: v,
                  })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(eX.A, { scrollerRef: s }),
                          (0, n.jsx)(tP, {
                              isOwner: o?.id === t.id,
                              showEditingControls: c,
                              profileOwner: t,
                              wishlist: u,
                              socialLayerStorefrontApplicationIds: p,
                              handleOpenShop: A,
                              handleOpenGameShop: E,
                              handleAddNitroToWishlist: I && !(0, eF.C3)(u, ty.pe.TIER_2) ? S : void 0,
                          }),
                          (0, n.jsx)(tt, { items: u.items, profileOwner: t, guildId: i, showEditingControls: c }),
                      ],
                  }),
            c &&
                (0, n.jsx)(tx, {
                    user: t,
                    guildId: i,
                    wishlist: u,
                    hasFetchedWishlist: f,
                    analyticsLocations: d,
                    impressionSessionId: j,
                    className: C ? tk._E : tk.HZ,
                }),
        ],
    });
}
var tG = i(844621);
function tM(e) {
    let { children: t, className: i, scrollerRef: l, ...s } = e;
    return (0, n.jsx)(a.Ip, { ref: l, className: r()(tG.gN, i), fade: !0, ...s, children: t });
}
function tU(e) {
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
                ? (0, n.jsx)(tD, { profileOwner: t, guildId: r })
                : null;
}
function tW(e) {
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
            className: tG.kL,
            children: [
                (0, n.jsx)(a.Ip, {
                    orientation: "horizontal",
                    className: tG.gU,
                    fade: !0,
                    scrollbarGutter: !1,
                    children: (0, n.jsx)(o.V, {
                        type: "top",
                        look: "custom",
                        selectedItem: v.section,
                        onItemSelect: function (e) {
                            m.A.hasUnsavedChanges() && v.section === $.RP.WIDGETS
                                ? (0, u.VQ)()
                                : (I({ action: "PRESS_SECTION", section: e }), A(e));
                        },
                        children: f.map((e) =>
                            (0, n.jsx)(
                                o.V.Item,
                                { className: tG.YU, id: e.section, "aria-label": e.text, children: e.text },
                                e.section,
                            ),
                        ),
                    }),
                }),
                (0, n.jsx)(o.V.Panel, {
                    id: v.section,
                    "aria-label": v.text,
                    className: tG.NM,
                    children: (0, n.jsx)(d.F, {
                        component: (0, n.jsx)(c.A, { children: (0, n.jsx)(d.H, { children: v.text }) }),
                        children: (0, n.jsx)(tU, {
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
