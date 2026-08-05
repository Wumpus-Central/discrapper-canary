i.d(t, { K: () => tF, A: () => tV });
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
    v = i(461213),
    A = i(975571),
    E = i(146655),
    S = i(489379),
    C = i(402857),
    N = i(353394),
    b = i(64622),
    w = i(986712),
    T = i(435558),
    k = i(297264),
    y = i(834730),
    R = i(534890),
    O = i(366010),
    L = i(308528),
    _ = i(736653),
    D = i(573648),
    P = i(780964),
    G = i(766075),
    M = i(562153),
    U = i(993401),
    F = i(375708),
    W = i(244650);
let V = [
        () => F.intl.string(F.t.madJdE),
        () => F.intl.string(F.t.NYmfoP),
        () => F.intl.string(F.t.R2PaCg),
        () => F.intl.string(F.t.laSR8h),
        () => F.intl.string(F.t.DnsJE8),
    ],
    H = [
        () => F.intl.string(F.t.nFSbeE),
        () => F.intl.string(F.t.gTcxOz),
        () => F.intl.string(F.t["8T0wYj"]),
        () => F.intl.string(F.t.BIHl1g),
        () => F.intl.string(F.t["jhBm0+"]),
    ],
    B = [
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
function X(e) {
    let { heading: t, bodyText: i, children: l } = e;
    return (0, n.jsxs)("div", {
        className: W.Ie,
        children: [
            (0, n.jsxs)("div", {
                className: W.FS,
                children: [
                    (0, n.jsx)(k.D, { variant: "heading-md/medium", color: "text-strong", children: t }),
                    (0, n.jsx)(y.E, { variant: "text-sm/normal", color: "text-default", children: i }),
                ],
            }),
            l,
        ],
    });
}
function K() {
    let e = F.intl.string(F.t.RnD2yZ),
        [t] = l.useState(() => ((0, T.sample)(V) ?? V[0])());
    return (0, n.jsx)(X, { heading: e, bodyText: t });
}
function Y() {
    let e = F.intl.string(F.t.bFgqYJ),
        [t] = l.useState(() => ((0, T.sample)(H) ?? H[0])());
    return (0, n.jsx)(X, { heading: e, bodyText: t });
}
function q(e) {
    let { user: t, guildId: i, channelId: s, onClose: r } = e,
        a = M.Ay.getName(i, s, t),
        o = F.intl.formatToPlainString(F.t.sjSitP, { name: a }),
        [d] = l.useState(() => ((0, T.sample)(B) ?? B[0])(a)),
        c = l.useCallback(() => {
            L.A.openPrivateChannel({ recipientIds: t.id }), r?.();
        }, [t.id, r]);
    return (0, n.jsx)(X, {
        heading: o,
        bodyText: d,
        children: (0, n.jsx)("div", {
            className: W.v0,
            children: (0, n.jsx)(U.FD, { icon: R.o, text: F.intl.string(F.t["g33r/P"]), onClick: c }),
        }),
    });
}
function Z() {
    let e = (0, _.Ay)();
    return (0, n.jsx)("div", {
        className: W.HU,
        children: z.map((t, i) => {
            let l = D.A.get(t);
            if (null == l) return null;
            let s = (0, O.M)(e) ? l.icon.darkPNG : l.icon.lightPNG;
            return (0, n.jsx)("img", { src: s, alt: l.name, className: W.gj }, i);
        }),
    });
}
function J(e) {
    let { onClose: t } = e,
        i = l.useCallback(() => {
            t?.(), (0, G.openUserSettings)(P.X.CONNECTIONS_PANEL);
        }, [t]),
        s = l.useCallback(() => {
            t?.(), (0, G.openUserSettings)(P.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB);
        }, [t]);
    return (0, n.jsxs)(X, {
        heading: F.intl.string(F.t.VB6LWY),
        bodyText: F.intl.string(F.t.KpjsU9),
        children: [
            (0, n.jsx)(Z, {}),
            (0, n.jsxs)("div", {
                className: W.v0,
                children: [
                    (0, n.jsx)(U.FD, { text: F.intl.string(F.t["/Hl24U"]), onClick: i }),
                    (0, n.jsx)(U.FD, { text: F.intl.string(F.t.GTCx0p), onClick: s }),
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
        T = t.id === i.id,
        k = (0, x.bG)([v.A, j.A], () => {
            let e = T ? v.A.getStatus() : j.A.getStatus(t.id);
            return e === f.clD.OFFLINE || e === f.clD.INVISIBLE;
        }),
        y = o.length > 0 || null != c,
        R = l?.private !== !0 && null == c && null == g && null != u,
        O = !k && (y || R),
        L = d.length > 0;
    return O || L || !m
        ? O || L || m
            ? (0, n.jsxs)(tF, {
                  className: ee.XG,
                  fade: !0,
                  children: [
                      O
                          ? (0, n.jsx)(Q.A, {
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
                                                children: (0, n.jsx)(w.A, {
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
                      L
                          ? (0, n.jsx)(Q.A, {
                                heading: F.intl.string(F.t.jzgEoL),
                                introText: T
                                    ? F.intl.format(F.t["4bk9Ak"], {
                                          learnMoreHook: (e, t) =>
                                              (0, n.jsx)(
                                                  h.Anchor,
                                                  {
                                                      href: A.A.getArticleURL(f.MVz.ACTIVITY_STATUS_SETTINGS),
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
            : T
              ? (0, n.jsx)(J, { onClose: a })
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
        (0, n.jsx)(tF, {
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
                      ? (0, n.jsx)(K, {})
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
    return (0, n.jsx)(tF, {
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
var ex = i(344702),
    ef = i(132500),
    eh = i(777480),
    ep = i(821609),
    eI = i(34188),
    ej = i(307301),
    ev = i(825484),
    eA = i(952270),
    eE = i(885574),
    eS = i(444927),
    eC = i(793574),
    eN = i(429913),
    eb = i(839534),
    ew = i(895360),
    eT = i(152472),
    ek = i(267102),
    ey = i(274681),
    eR = i(400669);
i(321073);
var eO = i(721932),
    eL = i(403362),
    e_ = i(832163),
    eD = i(501838),
    eP = i(44724),
    eG = i(808247),
    eM = i(909536),
    eU = i(673843),
    eF = i(561794),
    eW = i(855052),
    eV = i(287809),
    eH = i(321191),
    eB = i(600761),
    ez = i(579950),
    eX = i(535089),
    eK = i(128988),
    eY = i(686246),
    eq = i(575593),
    eZ = i(772427),
    eJ = i(111085),
    eQ = i(107563),
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
    e6 = i(451395),
    e3 = i(823016),
    e9 = i(18698);
function e4(e) {
    let { item: t, index: i, wishlistId: l, onReorder: s, children: r } = e,
        { manageFocusOnReorder: a } = (0, e3.r)();
    return (0, n.jsx)(e6.mG, {
        index: i,
        itemId: String(t.skuId),
        listType: String(l),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: t },
        "aria-label": F.intl.formatToPlainString(F.t["7SnyMA"], { positionNumber: i + 1 }),
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
            onReorder: c,
        } = e,
        { registerDragHandleRef: u } = (0, e3.r)(),
        g = l.useMemo(
            () =>
                a
                    ? (0, n.jsx)(e6.jV, {
                          buttonRef: u(String(t.skuId)),
                          className: e9.BU,
                          onFocus: (e) => e.stopPropagation(),
                      })
                    : void 0,
            [a, u, t.skuId],
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
              children: (0, n.jsx)(e4, { item: t, index: i, wishlistId: o, onReorder: c, children: m }),
          })
        : (0, n.jsx)("li", { children: m });
});
function tt(e) {
    var t;
    let { items: i, profileOwner: s, guildId: r, showEditingControls: a, isSortingNitroToFront: o } = e,
        d = eV.default.getCurrentUser(),
        { defaultWishlistId: c } = (0, x.cf)([eH.A], () => ({ defaultWishlistId: eH.A.getFirstWishlistId(s.id) })),
        u = (0, eZ.rV)("UserProfileModalV2WishlistGrid"),
        g = l.useMemo(
            () => (u ? i : i.filter((e) => e.sku?.tenantMetadata?.collectibles?.type !== eq.R.PROFILE_FRAME)),
            [i, u],
        ),
        m = null != d && d.id !== s.id,
        h =
            ((t = m ? "UserProfileModalV2WishlistGrid" : "UserProfileModalV2WishlistGrid Own Profile Do Not Use"),
            e2.useConfig({ location: t }).isEnabled && m),
        p = (0, x.bG)([eJ.A], () => {
            let e = o ? (0, e$.gm)(g) : g;
            return (
                h &&
                    (e = (0, e$.hE)(e, (e) => {
                        var t;
                        return (
                            (t = eJ.A.hasSentGift(e.skuId, s.id)),
                            e.skuProductLine !== f.EZt.PREMIUM && (!0 === e.isOwned || t)
                        );
                    })),
                e
            );
        }, [g, o, h, s.id]),
        { isDragging: I } = (0, eY.V)((e) => ({ isDragging: e.isDragging() })),
        j = l.useCallback(
            (e, t) => {
                if (e === t || null == c || 0 === p.length || e < 0 || e >= p.length || t < 0 || t >= p.length) return;
                let i = eQ.A.getWishlist(c);
                if (null == i) return;
                let n = p[e],
                    { newWishlistData: l, previousSkuId: s, nextSkuId: r } = (0, e$.Ap)(i, p, e, t);
                eG.A.reorderWishlistItem(c, n.skuId, { previousSkuId: s, nextSkuId: r, newWishlistData: l });
            },
            [c, p],
        );
    if (null == d || null == c) return null;
    let v = (0, n.jsx)("ul", {
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
                    wishlistId: c,
                    isDragging: I,
                    onReorder: j,
                },
                e.skuId,
            ),
        ),
    });
    return a ? (0, n.jsx)(e3.B, { emptyListFallbackRef: null, children: v }) : v;
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
    tc = i(927813),
    tu = i(49999);
let tg = 90 * tc.A.Millis.DAY,
    tm = 90 * tc.A.Millis.DAY,
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
            isVisible: c,
            isDismissible: u,
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
                [c, u] = (0, td.Wl)(
                    to.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS,
                    { showAfterTimestamp: d + tm, cooldownDurationMs: tg },
                    void 0,
                    !0,
                ),
                g = c === to.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
            return {
                isVisible: n && (g || a || !r),
                isDismissible: r,
                markAsDismissed: l.useCallback(() => {
                    o(!1), u(tu.i.USER_DISMISS);
                }, [u]),
            };
        })({ userId: t.id, wishlist: s, hasFetchedWishlist: r });
    return c
        ? (0, n.jsx)(tp, {
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
function tp(e) {
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
        { items: u } = (0, tr.L)({
            userId: t.id,
            wishlist: l,
            numWishlistItemsToRecommend: 15,
            maxWishlistItemsToShow: 8,
            source: eF.B5.USER_PROFILE,
        });
    return 0 === u.length
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
                              children: F.intl.string(F.t["+GB8Kt"]),
                          }),
                          d &&
                              (0, n.jsx)("div", {
                                  className: tf.b,
                                  children: (0, n.jsx)(tl.J, { size: "xs", onClick: c }),
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
                          items: u,
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
    tv = i(922016),
    tA = i(980707),
    tE = i(789645),
    tS = i(847374),
    tC = i(486020),
    tN = i(291641);
function tb(e) {
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
                    t.filter(eL.Vq).map((e) => {
                        let t = tC.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 20 });
                        return {
                            id: `browse-social-layer-storefront-${e.id}`,
                            label: F.intl.formatToPlainString(F.t["HDT/rg"], { applicationName: e.name }),
                            iconLeft: null != t ? () => (0, n.jsx)("img", { className: tN.I, src: t, alt: "" }) : eI.U,
                            leadingAccessory: null != t ? { type: "image", src: t } : { type: "icon", icon: eI.U },
                            action: () => i?.(e.id),
                        };
                    }),
                [t, i],
            );
        })({ applications: (0, eN.A)(o), handleOpenGameShop: r }),
        m = l.useMemo(
            () =>
                (0, n.jsxs)(tI.rX, {
                    children: [
                        null != s &&
                            (0, n.jsx)(tI.Dr, {
                                id: "browse-collectibles-shop",
                                label: F.intl.string(F.t["5upuqx"]),
                                iconLeft: eI.U,
                                leadingAccessory: { type: "icon", icon: eI.U },
                                action: s,
                            }),
                        null != a &&
                            (0, n.jsx)(tI.Dr, {
                                id: "add-nitro-to-wishlist",
                                label: F.intl.string(F.t.lG6a5x),
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
    return (0, n.jsx)(tv.Y, {
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
                icon: c ? tE.P : tS.a,
                iconPosition: "end",
                text: t,
                ...e,
            }),
    });
}
var tw = i(509434),
    tT = i(365199);
let tk = A.A.getArticleURL(f.MVz.CUSTOM_PROFILES_WISHLIST);
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
                                  label: F.intl.string(F.t.b2nFyA),
                                  subtext: F.intl.string(F.t.dw58pE),
                                  checked: i,
                                  action: s,
                              }),
                              (0, n.jsx)(tI.bX, {}),
                              (0, n.jsx)(tI.Dr, {
                                  id: "wishlist-privacy-setting2",
                                  label: F.intl.string(F.t.hvVgAZ),
                                  icon: tw.I,
                                  trailingIndicator: { type: "icon", icon: tw.I },
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
              children: (0, n.jsx)(tv.Y, {
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
                          icon: tT.j,
                          tooltipText: F.intl.string(F.t["UKOtz+"]),
                          action: "PRESS_OPTIONS",
                          ...e,
                      }),
              }),
          });
}
var tR = i(202541),
    tO = i(678790);
function tL(e) {
    let { socialLayerStorefrontApplicationIds: t, handleOpenShop: i, handleOpenGameShop: l } = e;
    return t.length > 0
        ? (0, n.jsx)(tb, {
              title: F.intl.string(F.t["i/yzHs"]),
              handleOpenCollectiblesShop: i,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationIds: t,
          })
        : (0, n.jsx)(ep.$, {
              variant: "secondary",
              size: "sm",
              icon: eI.U,
              text: F.intl.string(F.t["i/yzHs"]),
              onClick: i,
          });
}
function t_(e) {
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
                    ? (0, n.jsx)(tb, {
                          title: F.intl.string(F.t.SDUwM0),
                          handleOpenCollectiblesShop: s,
                          handleOpenGameShop: i.length > 0 ? r : void 0,
                          handleAddNitroToWishlist: a,
                          socialLayerStorefrontApplicationIds: i,
                      })
                    : (0, n.jsx)(ep.$, {
                          variant: "secondary",
                          size: "sm",
                          icon: ej.j,
                          text: F.intl.string(F.t.SDUwM0),
                          onClick: s,
                      })),
            (0, n.jsx)(ty, { isOwner: !0, isWishlistPublic: l, onToggleVisibility: o }),
        ],
    });
}
function tD(e) {
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
        text: F.intl.formatToPlainString(F.t["HDT/rg"], { applicationName: t.name }),
        onClick: r,
        onMouseDown: a,
    });
}
function tP(e) {
    let {
            showEditingControls: t,
            socialLayerStorefrontApplicationIds: i,
            handleOpenShop: s,
            handleOpenGameShop: r,
            handleOpenGameShopMouseDown: a,
        } = e,
        o = (0, ek.Us)() === f.BRT.OVERLAY,
        d = (0, eN.A)(i),
        c = l.useMemo(() => {
            if (o || 0 === i.length) return null;
            let e = d.reduce((e, t) => (null == t || (e[t.id] = t), e), {});
            if (1 === i.length) {
                let t = e[i[0]];
                return null == t
                    ? null
                    : (0, n.jsx)(tD, { application: t, handleOpenGameShop: r, handleOpenGameShopMouseDown: a });
            }
            return (0, n.jsx)(tb, {
                title: F.intl.string(F.t.FkjcWY),
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
                        children: F.intl.string(F.t.HGnLLT),
                    }),
                    (0, n.jsx)(y.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: F.intl.string(F.t["/X1ny6"]),
                    }),
                ],
            }),
            (t || null != c) &&
                (0, n.jsxs)(ev.e, {
                    size: "sm",
                    children: [
                        t &&
                            (0, n.jsx)(ep.$, {
                                variant: "primary",
                                size: "sm",
                                icon: eI.U,
                                text: F.intl.string(F.t.ZbS4QB),
                                onClick: s,
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
            profileOwner: s,
            wishlist: r,
            socialLayerStorefrontApplicationIds: a,
            handleOpenShop: o,
            handleOpenGameShop: d,
            handleAddNitroToWishlist: c,
        } = e,
        u = r.id,
        m = (0, x.bG)([eH.A], () => eH.A.getWishlistSettings(s.id, u)),
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
        v = (0, eX.A)({ wishlistId: u, onAction: j, productLines: null != r ? (0, eW.y9)(r) : null }),
        A = l.useCallback(() => {
            if (null == u) return;
            let e = p ? eh.a.PRIVATE : eh.a.PUBLIC;
            I(!p),
                eG.A.updateWishlistVisibility(u, e),
                f({
                    wishlistId: u,
                    action: p ? $.Mq.WISHLIST_TOGGLE_PRIVATE : $.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: null != r ? (0, eW.y9)(r) : void 0,
                });
        }, [u, p, f, r]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            !p &&
                (0, n.jsxs)("div", {
                    className: tO.lm,
                    children: [
                        (0, n.jsx)(eA.G, { size: "custom", width: 16, height: 16 }),
                        (0, n.jsx)(y.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: F.intl.string(F.t.RX7D9h),
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
                            children: F.intl.string(F.t.d78ChW),
                        }),
                    ],
                }),
            (0, n.jsxs)("div", {
                ref: v,
                className: tO.U1,
                children: [
                    (0, n.jsx)(y.E, {
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: F.intl.format(F.t.r6Y1Lg, { count: r.items.length }),
                    }),
                    t
                        ? (0, n.jsx)(t_, {
                              showEditingControls: i,
                              socialLayerStorefrontApplicationIds: a,
                              isWishlistPublic: p,
                              handleOpenShop: o,
                              handleOpenGameShop: d,
                              handleAddNitroToWishlist: c,
                              handleToggleWishlistVisibility: A,
                          })
                        : (0, n.jsx)(tL, {
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
        c = (0, ez.A)(t.id),
        { wishlist: u, wasFetched: g, error: m } = (0, eF.fw)({ wishlistId: a, userId: t.id }),
        [f, h] = l.useState(!1);
    g && !f && h(!0), (0, eU.A)(u);
    let p = (function (e) {
            let { wishlist: t, profileOwner: i, currentUser: n } = e,
                s = i.id === n?.id,
                r = l.useMemo(() => (t?.userId != null ? [t.userId] : []), [t]),
                a = (0, x.bG)([e_.A], () => e_.A.getDetectableIdsToApplicationIds()),
                o = l.useMemo(() => {
                    let e = [];
                    for (let i of t?.items ?? [])
                        (0, eO.$)(i) && null != a[i.sku.applicationId] && e.push(i.sku.applicationId);
                    return e;
                }, [t, a]),
                d = (0, eD.w)({ userIds: r }),
                c = (0, eD.mn)({ userIds: r }),
                u = (0, eD.tR)(r),
                g = (0, eD.rY)(),
                m = (0, eD.qx)(),
                f = (0, eD.px)();
            return l.useMemo(
                () => (0, T.uniq)([...o, ...d, ...c, ...u, ...(s ? [...g, ...m, ...f] : [])].filter(eL.Vq)),
                [o, d, c, u, g, m, f, s],
            );
        })({ wishlist: u, profileOwner: t, currentUser: o }),
        I = (0, eM.Gh)("user-profile-modal-v2-wishlist"),
        j = (0, eS.A)(() => (0, ef.A)()),
        v = l.useCallback(() => {
            (0, eb.Cz)({ analyticsLocations: d, analyticsSource: eC.A.USER_PROFILE_WISHLIST });
        }, [d]),
        A = l.useCallback((e) => {
            (0, eP.G)({ applicationId: e });
        }, []),
        E = l.useCallback((e) => {
            (0, er.closeUserProfileModal)(), (0, eP.default)({ applicationId: e });
        }, []),
        { handleToggle: S } = (0, eT.c)({
            userId: o?.id,
            skuId: tR.pe.TIER_2,
            nuxGraphic: I ? eR.g : void 0,
            onNuxShow: ew.D,
            location: eC.A.USER_PROFILE_WISHLIST,
            onAddSuccess: ey.w,
        });
    if (null == o || null != m) return null;
    let C = null == u || 0 === u.items.length;
    return (0, n.jsxs)(tF, {
        scrollerRef: s,
        className: r()({ [tO.XG]: !C }),
        fade: !0,
        children: [
            C
                ? (0, n.jsx)(tP, {
                      showEditingControls: c,
                      socialLayerStorefrontApplicationIds: p,
                      handleOpenShop: v,
                      handleOpenGameShop: E,
                      handleOpenGameShopMouseDown: A,
                  })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(eK.A, { scrollerRef: s }),
                          (0, n.jsx)(tG, {
                              isOwner: o?.id === t.id,
                              showEditingControls: c,
                              profileOwner: t,
                              wishlist: u,
                              socialLayerStorefrontApplicationIds: p,
                              handleOpenShop: v,
                              handleOpenGameShop: E,
                              handleAddNitroToWishlist: I && !(0, eW.C3)(u, tR.pe.TIER_2) ? S : void 0,
                          }),
                          (0, n.jsx)(tn, { items: u.items, profileOwner: t, guildId: i, showEditingControls: c }),
                      ],
                  }),
            c &&
                (0, n.jsx)(th, {
                    user: t,
                    guildId: i,
                    wishlist: u,
                    hasFetchedWishlist: f,
                    analyticsLocations: d,
                    impressionSessionId: j,
                    className: C ? tO._E : tO.HZ,
                }),
        ],
    });
}
var tU = i(844621);
function tF(e) {
    let { children: t, className: i, scrollerRef: l, ...s } = e;
    return (0, n.jsx)(a.Ip, { ref: l, className: r()(tU.gN, i), fade: !0, ...s, children: t });
}
function tW(e) {
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
        [{ section: j, text: v }, A] = l.useState(
            f.find((e) => {
                let { section: t } = e;
                return t === h;
            }) ?? f[0],
        );
    return (0, n.jsxs)("div", {
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
                    selectedItem: j,
                    onItemSelect: function (e) {
                        m.A.hasUnsavedChanges() && j === $.RP.WIDGETS
                            ? (0, u.VQ)()
                            : (I({ action: "PRESS_SECTION", section: e }),
                              A((t) => f.find((t) => t.section === e) ?? t));
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
                id: j,
                "aria-label": v,
                className: tU.NM,
                children: (0, n.jsx)(d.F, {
                    component: (0, n.jsx)(c.A, { children: (0, n.jsx)(d.H, { children: v }) }),
                    children: (0, n.jsx)(tW, {
                        user: t,
                        currentUser: i,
                        displayProfile: s,
                        guildId: r,
                        channelId: x,
                        section: j,
                        onClose: p,
                    }),
                }),
            }),
        ],
    });
}
