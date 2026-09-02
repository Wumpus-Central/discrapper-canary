n.d(t, { K: () => tw, A: () => tO });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(364522),
    o = n(761508),
    d = n(707554),
    c = n(140735),
    u = n(207803),
    g = n(183555),
    m = n(61881),
    x = n(17928),
    f = n(652215),
    h = n(28863),
    p = n(517164),
    j = n(114212),
    I = n(290863),
    A = n(461213),
    v = n(975571),
    E = n(146655),
    C = n(489379),
    S = n(402857),
    b = n(353394),
    T = n(64622),
    N = n(986712),
    k = n(435558),
    y = n(297264),
    R = n(834730),
    w = n(534890),
    L = n(366010),
    O = n(308528),
    P = n(736653),
    _ = n(573648),
    D = n(780964),
    G = n(766075),
    M = n(562153),
    U = n(993401),
    W = n(375708),
    F = n(92795);
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
function X(e) {
    let { heading: t, bodyText: n, children: l } = e;
    return (0, i.jsxs)("div", {
        className: F.Ie,
        children: [
            (0, i.jsxs)("div", {
                className: F.FS,
                children: [
                    (0, i.jsx)(y.D, { variant: "heading-md/medium", color: "text-strong", children: t }),
                    (0, i.jsx)(R.E, { variant: "text-sm/normal", color: "text-default", children: n }),
                ],
            }),
            l,
        ],
    });
}
function K() {
    let e = W.intl.string(W.t.RnD2yZ),
        [t] = l.useState(() => ((0, k.sample)(H) ?? H[0])());
    return (0, i.jsx)(X, { heading: e, bodyText: t });
}
function Y() {
    let e = W.intl.string(W.t.bFgqYJ),
        [t] = l.useState(() => ((0, k.sample)(V) ?? V[0])());
    return (0, i.jsx)(X, { heading: e, bodyText: t });
}
function q(e) {
    let { user: t, guildId: n, channelId: s, onClose: r } = e,
        a = M.Ay.getName(n, s, t),
        o = W.intl.formatToPlainString(W.t.sjSitP, { name: a }),
        [d] = l.useState(() => ((0, k.sample)(B) ?? B[0])(a)),
        c = l.useCallback(() => {
            O.A.openPrivateChannel({ recipientIds: t.id }), r?.();
        }, [t.id, r]);
    return (0, i.jsx)(X, {
        heading: o,
        bodyText: d,
        children: (0, i.jsx)("div", {
            className: F.v0,
            children: (0, i.jsx)(U.FD, { icon: w.ChatIcon, text: W.intl.string(W.t["g33r/P"]), onClick: c }),
        }),
    });
}
function Z() {
    let e = (0, P.Ay)();
    return (0, i.jsx)("div", {
        className: F.HU,
        children: z.map((t, n) => {
            let l = _.A.get(t);
            if (null == l) return null;
            let s = (0, L.M)(e) ? l.icon.darkPNG : l.icon.lightPNG;
            return (0, i.jsx)("img", { src: s, alt: l.name, className: F.gj }, n);
        }),
    });
}
function J(e) {
    let { onClose: t } = e,
        n = l.useCallback(() => {
            t?.(), (0, G.openUserSettings)(D.X.CONNECTIONS_CATEGORY);
        }, [t]),
        s = l.useCallback(() => {
            t?.(), (0, G.openUserSettings)(D.X.CONNECTED_GAMES_CATEGORY);
        }, [t]);
    return (0, i.jsxs)(X, {
        heading: W.intl.string(W.t.VB6LWY),
        bodyText: W.intl.string(W.t.KpjsU9),
        children: [
            (0, i.jsx)(Z, {}),
            (0, i.jsxs)("div", {
                className: F.v0,
                children: [
                    (0, i.jsx)(U.FD, { text: W.intl.string(W.t["/Hl24U"]), onClick: n }),
                    (0, i.jsx)(U.FD, { text: W.intl.string(W.t.GTCx0p), onClick: s }),
                ],
            }),
        ],
    });
}
var Q = n(83013),
    $ = n(518477),
    ee = n(587763);
function et(e) {
    let { user: t, currentUser: n, displayProfile: l, guildId: s, channelId: r, onClose: a } = e,
        { live: o, recent: d, stream: c } = (0, E.A)(t.id),
        { voiceChannel: u, voiceActivity: g } = (0, C.A)({ userId: t.id, guildId: s }),
        m = (0, x.bG)([p.A], () => p.A.isFetchingUserOutbox(t.id)),
        k = t.id === n.id,
        y = (0, x.bG)([A.A, I.A], () => {
            let e = k ? A.A.getStatus() : I.A.getStatus(t.id);
            return e === f.clD.OFFLINE || e === f.clD.INVISIBLE;
        }),
        R = o.length > 0 || null != c,
        w = l?.private !== !0 && null == c && null == g && null != u,
        L = !y && (R || w),
        O = d.length > 0;
    return L || O || !m
        ? L || O || m
            ? (0, i.jsxs)(tw, {
                  className: ee.XG,
                  fade: !0,
                  children: [
                      L
                          ? (0, i.jsx)(Q.A, {
                                heading: W.intl.string(W.t.J6STd9),
                                children: (0, i.jsxs)("ul", {
                                    className: ee.kR,
                                    children: [
                                        null != c &&
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(T.A, {
                                                    user: t,
                                                    currentUser: n,
                                                    stream: c,
                                                    onClose: a,
                                                }),
                                            }),
                                        o.map((e, l) =>
                                            (0, i.jsx)(
                                                "li",
                                                {
                                                    children: (0, i.jsx)(S.A, {
                                                        user: t,
                                                        currentUser: n,
                                                        activity: e,
                                                        onClose: a,
                                                    }),
                                                },
                                                `live-${l}`,
                                            ),
                                        ),
                                        w &&
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(N.A, {
                                                    user: t,
                                                    currentUser: n,
                                                    voiceChannel: u,
                                                    onClose: a,
                                                }),
                                            }),
                                    ],
                                }),
                            })
                          : null,
                      O
                          ? (0, i.jsx)(Q.A, {
                                heading: W.intl.string(W.t.jzgEoL),
                                introText: k
                                    ? W.intl.format(W.t["4bk9Ak"], {
                                          learnMoreHook: (e, t) =>
                                              (0, i.jsx)(
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
                                children: (0, i.jsx)("ul", {
                                    className: ee.kR,
                                    children: d.map((e) =>
                                        (0, i.jsx)(
                                            "li",
                                            { children: (0, i.jsx)(b.A, { user: t, entry: e, onClose: a }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                            })
                          : null,
                  ],
              })
            : k
              ? (0, i.jsx)(J, { onClose: a })
              : (0, i.jsx)(q, { user: t, guildId: l?.guildId ?? s, channelId: r, onClose: a })
        : (0, i.jsx)("div", {
              className: ee.kR,
              children: Array.from({ length: 8 }).map((e, t) =>
                  (0, i.jsxs)(
                      "div",
                      {
                          className: ee.kr,
                          children: [
                              (0, i.jsx)(j.FQ, { width: 60, opacity: 0.08 }),
                              (0, i.jsx)(j.FQ, { width: 135, opacity: 0.08 }),
                          ],
                      },
                      t,
                  ),
              ),
          });
}
var en = n(163126),
    ei = n(688810),
    el = n(913453),
    es = n(229187),
    er = n(402860),
    ea = n(503062),
    eo = n(393213);
function ed(e) {
    let { user: t, guildId: n, channelId: s, onClose: r } = e,
        { analyticsLocations: a } = (0, ei.Ay)(),
        { context: o, trackUserProfileAction: d } = (0, g.NJ)(),
        { mutualFriends: c, mutualFriendsCount: u } = (0, el.A)(t),
        m = (0, en.A)();
    return (
        l.useEffect(() => {
            (0, es.A)(t.id, m);
        }, [t.id, m]),
        (0, i.jsx)(tw, {
            className: eo.XG,
            children:
                null == c
                    ? Array.from({ length: u ?? 10 }).map((e, t) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: eo.D$,
                                  children: [
                                      (0, i.jsx)(j.FQ, { width: 40, opacity: 0.08 }),
                                      (0, i.jsx)(j.FQ, { width: 135, opacity: 0.08 }),
                                  ],
                              },
                              t,
                          ),
                      )
                    : 0 === c.length
                      ? (0, i.jsx)(K, {})
                      : c.map((e) => {
                            let { key: t, user: l, status: c } = e;
                            return (0, i.jsx)(
                                ea.A,
                                {
                                    user: l,
                                    status: c,
                                    guildId: n,
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
var ec = n(398590),
    eu = n(345942),
    eg = n(51943);
function em(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: l } = (0, g.NJ)(),
        { mutualGuilds: s, isFetching: r } = (0, el.A)(t);
    return (0, i.jsx)(tw, {
        className: eo.XG,
        fade: !0,
        children:
            null == s && r
                ? Array.from({ length: 10 }).map((e, t) =>
                      (0, i.jsxs)(
                          "div",
                          {
                              className: eo.Y7,
                              children: [
                                  (0, i.jsx)(j.FQ, { width: 40, opacity: 0.08 }),
                                  (0, i.jsx)(j.FQ, { width: 135, opacity: 0.08 }),
                              ],
                          },
                          t,
                      ),
                  )
                : (null != s || r) && s?.length !== 0
                  ? s?.map((e) => {
                        let { guild: s, nick: r } = e;
                        return (0, i.jsx)(
                            eg.A,
                            {
                                user: t,
                                guild: s,
                                nick: r,
                                onSelect: () => {
                                    l({ action: "PRESS_MUTUAL_GUILD" }), (0, eu.u)(s.id), n(), (0, ec.jH)();
                                },
                            },
                            s.id,
                        );
                    })
                  : (0, i.jsx)(Y, {}),
    });
}
var ex = n(711871),
    ef = n(132500),
    eh = n(777480),
    ep = n(821609),
    ej = n(34188),
    eI = n(307301),
    eA = n(825484),
    ev = n(952270),
    eE = n(885574),
    eC = n(444927),
    eS = n(793574),
    eb = n(429913),
    eT = n(839534),
    eN = n(895360),
    ek = n(152472),
    ey = n(267102),
    eR = n(285373);
n(321073);
var ew = n(721932),
    eL = n(403362),
    eO = n(832163),
    eP = n(501838),
    e_ = n(44724),
    eD = n(808247),
    eG = n(673843),
    eM = n(594832),
    eU = n(855052),
    eW = n(287809),
    eF = n(321191),
    eH = n(600761),
    eV = n(389667),
    eB = n(535089),
    ez = n(128988),
    eX = n(686246),
    eK = n(111085),
    eY = n(107563),
    eq = n(840411),
    eZ = n(666810);
let eJ = (0, n(945810).mj)({
    name: "2026-07-wishlist-show-owned-items-last",
    kind: "user",
    defaultConfig: { isEnabled: !1 },
    variations: { 1: { isEnabled: !0 } },
});
var eQ = n(724834),
    e$ = n(451395),
    e0 = n(823016),
    e1 = n(100741);
function e8(e) {
    let { item: t, index: n, wishlistId: l, onReorder: s, children: r } = e,
        { manageFocusOnReorder: a } = (0, e0.r)();
    return (0, i.jsx)(e$.mG, {
        index: n,
        itemId: String(t.skuId),
        listType: String(l),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: t },
        "aria-label": W.intl.formatToPlainString(W.t["7SnyMA"], { positionNumber: n + 1 }),
        onReorder: s,
        onEnd: () => a(String(t.skuId)),
        className: e1.C,
        dropBeforeClassName: e1.A,
        dropAfterClassName: e1.Ze,
        draggingClassName: e1.Id,
        children: (0, i.jsx)("div", { className: e1.An, children: r }),
    });
}
let e2 = l.memo(function (e) {
    let {
            item: t,
            index: n,
            profileOwner: s,
            guildId: r,
            showEditingControls: a,
            wishlistId: o,
            isDragging: d,
            onReorder: c,
        } = e,
        { registerDragHandleRef: u } = (0, e0.r)(),
        g = l.useMemo(
            () =>
                a
                    ? (0, i.jsx)(e$.jV, {
                          buttonRef: u(String(t.skuId)),
                          className: e1.BU,
                          onFocus: (e) => e.stopPropagation(),
                      })
                    : void 0,
            [a, u, t.skuId],
        ),
        m = l.useMemo(
            () =>
                (0, i.jsx)(eQ.A, {
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
        ? (0, i.jsx)("li", {
              children: (0, i.jsx)(e8, { item: t, index: n, wishlistId: o, onReorder: c, children: m }),
          })
        : (0, i.jsx)("li", { children: m });
});
function e7(e) {
    var t;
    let { items: n, profileOwner: s, guildId: r, showEditingControls: a } = e,
        o = eW.default.getCurrentUser(),
        { defaultWishlistId: d } = (0, x.cf)([eF.A], () => ({ defaultWishlistId: eF.A.getFirstWishlistId(s.id) })),
        c = null != o && o.id !== s.id,
        u =
            ((t = c ? "UserProfileModalV2WishlistGrid" : "UserProfileModalV2WishlistGrid Own Profile Do Not Use"),
            eJ.useConfig({ location: t }).isEnabled && c),
        g = (0, x.bG)([eK.A], () => {
            let e = n;
            return (
                u &&
                    (e = (0, eq.hE)(e, (e) => {
                        var t;
                        return (
                            (t = eK.A.hasSentGift(e.skuId, s.id)),
                            e.skuProductLine !== f.EZt.PREMIUM && (!0 === e.isOwned || t)
                        );
                    })),
                e
            );
        }, [n, u, s.id]),
        { isDragging: m } = (0, eX.V)((e) => ({ isDragging: e.isDragging() })),
        h = l.useCallback(
            (e, t) => {
                if (e === t || null == d || 0 === g.length || e < 0 || e >= g.length || t < 0 || t >= g.length) return;
                let n = eY.A.getWishlist(d);
                if (null == n) return;
                let i = g[e],
                    { newWishlistData: l, previousSkuId: s, nextSkuId: r } = (0, eq.Ap)(n, g, e, t);
                eD.A.reorderWishlistItem(d, i.skuId, { previousSkuId: s, nextSkuId: r, newWishlistData: l });
            },
            [d, g],
        );
    if (null == o || null == d) return null;
    let p = (0, i.jsx)("ul", {
        className: e1.Vg,
        children: g.map((e, t) =>
            (0, i.jsx)(
                e2,
                {
                    item: e,
                    index: t,
                    profileOwner: s,
                    guildId: r,
                    showEditingControls: a,
                    wishlistId: d,
                    isDragging: m,
                    onReorder: h,
                },
                e.skuId,
            ),
        ),
    });
    return a ? (0, i.jsx)(e0.B, { emptyListFallbackRef: null, children: p }) : p;
}
function e3(e) {
    let t = eW.default.getCurrentUser()?.id,
        n = null != t && t !== e.profileOwner.id;
    return (0, i.jsx)(eZ.h, {
        isGifting: n,
        location: "UserProfileModalV2WishlistGrid",
        children: (0, i.jsx)(e7, { ...e }),
    });
}
var e5 = n(815021),
    e4 = n(299679),
    e6 = n(889586),
    e9 = n(973912),
    te = n(554146),
    tt = n(131607),
    tn = n(927813),
    ti = n(49999);
let tl = 90 * tn.A.Millis.DAY,
    ts = 90 * tn.A.Millis.DAY;
var tr = n(469364);
function ta(e) {
    let {
            user: t,
            guildId: n,
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
            let { userId: t, wishlist: n, hasFetchedWishlist: i } = e,
                s = (n?.items.length ?? 0) >= 3,
                [r, a] = l.useState(!1);
            !i || s || r || a(!0);
            let o = (0, x.bG)(
                    [eF.A],
                    () => (null != n ? new Date(eF.A.getWishlistSettings(t, n.id)?.updated_at ?? 0).valueOf() : 0),
                    [n, t],
                ),
                [d, c] = (0, tt.Wl)(
                    te.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS,
                    { showAfterTimestamp: o + ts, cooldownDurationMs: tl },
                    void 0,
                    !0,
                ),
                u = d === te.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
            return {
                isVisible: i && (u || r || !s),
                isDismissible: s,
                markAsDismissed: l.useCallback(() => {
                    a(!1), c(ti.i.USER_DISMISS);
                }, [c]),
            };
        })({ userId: t.id, wishlist: s, hasFetchedWishlist: r });
    return c
        ? (0, i.jsx)(to, {
              user: t,
              guildId: n,
              wishlist: s,
              analyticsLocations: a,
              impressionSessionId: o,
              className: d,
              isDismissible: u,
              markAsDismissed: g,
          })
        : null;
}
function to(e) {
    let {
            user: t,
            guildId: n,
            wishlist: l,
            analyticsLocations: s,
            impressionSessionId: a,
            className: o,
            isDismissible: d,
            markAsDismissed: c,
        } = e,
        { items: u } = (0, e6.L)({
            userId: t.id,
            wishlist: l,
            numWishlistItemsToRecommend: 15,
            maxWishlistItemsToShow: 8,
            source: eM.B5.USER_PROFILE,
        });
    return 0 === u.length
        ? null
        : (0, i.jsxs)("div", {
              className: r()(tr.kL, o),
              children: [
                  (0, i.jsxs)("div", {
                      className: tr.wx,
                      children: [
                          (0, i.jsx)(R.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              children: W.intl.string(W.t["+GB8Kt"]),
                          }),
                          d &&
                              (0, i.jsx)("div", {
                                  className: tr.b,
                                  children: (0, i.jsx)(e5.J, { size: "xs", onClick: c }),
                              }),
                      ],
                  }),
                  (0, i.jsx)(e4.dB, {
                      newValue: {
                          impressionSessionId: a,
                          surface: "user_profile_wishlist_suggestions_grid",
                          wishlistOwnerId: t.id,
                          wishlistId: l?.id,
                          analyticsLocations: s,
                      },
                      children: (0, i.jsx)(e9.A, {
                          items: u,
                          guildId: n,
                          wishlist: l,
                          className: r()(tr.Vg, tr.e6),
                          analyticsLocations: s,
                      }),
                  }),
              ],
          });
}
var td = n(477782),
    tc = n(403581),
    tu = n(922016),
    tg = n(980707),
    tm = n(789645),
    tx = n(847374),
    tf = n(486020),
    th = n(431194);
function tp(e) {
    let {
            title: t,
            variant: n = "secondary",
            handleOpenCollectiblesShop: s,
            handleOpenGameShop: r,
            handleAddNitroToWishlist: a,
            socialLayerStorefrontApplicationIds: o,
        } = e,
        d = l.useRef(null),
        [c, u] = l.useState(!1),
        g = (function (e) {
            let { applications: t, handleOpenGameShop: n } = e;
            return l.useMemo(
                () =>
                    t.filter(eL.Vq).map((e) => {
                        let t = tf.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 20 });
                        return {
                            id: `browse-social-layer-storefront-${e.id}`,
                            label: W.intl.formatToPlainString(W.t["HDT/rg"], { applicationName: e.name }),
                            iconLeft: null != t ? () => (0, i.jsx)("img", { className: th.I, src: t, alt: "" }) : ej.U,
                            leadingAccessory: null != t ? { type: "image", src: t } : { type: "icon", icon: ej.U },
                            action: () => n?.(e.id),
                        };
                    }),
                [t, n],
            );
        })({ applications: (0, eb.A)(o), handleOpenGameShop: r }),
        m = l.useMemo(
            () =>
                (0, i.jsxs)(td.rX, {
                    children: [
                        null != s &&
                            (0, i.jsx)(td.Dr, {
                                id: "browse-collectibles-shop",
                                label: W.intl.string(W.t["5upuqx"]),
                                iconLeft: ej.U,
                                leadingAccessory: { type: "icon", icon: ej.U },
                                action: s,
                            }),
                        null != a &&
                            (0, i.jsx)(td.Dr, {
                                id: "add-nitro-to-wishlist",
                                label: W.intl.string(W.t.lG6a5x),
                                iconLeft: tc.t,
                                leadingAccessory: { type: "icon", icon: tc.t },
                                action: a,
                            }),
                        null != r &&
                            g.map((e) => {
                                let { id: t, label: n, iconLeft: l, leadingAccessory: s, action: r } = e;
                                return (0, i.jsx)(
                                    td.Dr,
                                    { id: t, label: n, iconLeft: l, leadingAccessory: s, action: r },
                                    t,
                                );
                            }),
                    ],
                }),
            [s, r, a, g],
        );
    return (0, i.jsx)(tu.Y, {
        targetElementRef: d,
        position: "bottom",
        onRequestOpen: () => u(!0),
        onRequestClose: () => u(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(tg.W, {
                "data-menu-migrated": !0,
                navId: "wishlist-overflow-menu",
                onSelect: void 0,
                onClose: t,
                "aria-label": W.intl.string(W.t.GdNkvG),
                children: m,
            });
        },
        children: (e) =>
            (0, i.jsx)(ep.$, {
                buttonRef: d,
                variant: n,
                size: "sm",
                icon: c ? tm.P : tx.a,
                iconPosition: "end",
                text: t,
                ...e,
            }),
    });
}
var tj = n(509434),
    tI = n(365199);
let tA = v.A.getArticleURL(f.MVz.CUSTOM_PROFILES_WISHLIST);
function tv(e) {
    let { isOwner: t, isWishlistPublic: n, onToggleVisibility: s } = e,
        r = l.useRef(null),
        { analyticsLocations: a } = (0, ei.Ay)(eS.A.USER_PROFILE_WISHLIST),
        o = l.useMemo(
            () =>
                t
                    ? (0, i.jsxs)(td.rX, {
                          children: [
                              (0, i.jsx)(td.fP, {
                                  id: "wishlist-privacy-setting",
                                  label: W.intl.string(W.t.b2nFyA),
                                  subtext: W.intl.string(W.t.dw58pE),
                                  checked: n,
                                  action: s,
                              }),
                              (0, i.jsx)(td.bX, {}),
                              (0, i.jsx)(td.Dr, {
                                  id: "wishlist-privacy-setting2",
                                  label: W.intl.string(W.t.hvVgAZ),
                                  icon: tj.I,
                                  trailingIndicator: { type: "icon", icon: tj.I },
                                  action: () => window.open(tA),
                              }),
                          ],
                      })
                    : null,
            [t, n, s],
        );
    return null == o
        ? null
        : (0, i.jsx)(ei.f5, {
              value: a,
              children: (0, i.jsx)(tu.Y, {
                  targetElementRef: r,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, i.jsx)(tg.W, {
                          "data-menu-migrated": !0,
                          navId: "wishlist-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": W.intl.string(W.t.GdNkvG),
                          children: o,
                      });
                  },
                  children: (e) =>
                      (0, i.jsx)(U.q3, {
                          buttonRef: r,
                          icon: tI.MoreHorizontalIcon,
                          tooltipText: W.intl.string(W.t["UKOtz+"]),
                          action: "PRESS_OPTIONS",
                          ...e,
                      }),
              }),
          });
}
var tE = n(202541),
    tC = n(526725);
function tS(e) {
    let { socialLayerStorefrontApplicationIds: t, handleOpenShop: n, handleOpenGameShop: l } = e;
    return t.length > 0
        ? (0, i.jsx)(tp, {
              title: W.intl.string(W.t["i/yzHs"]),
              handleOpenCollectiblesShop: n,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationIds: t,
          })
        : (0, i.jsx)(ep.$, {
              variant: "secondary",
              size: "sm",
              icon: ej.U,
              text: W.intl.string(W.t["i/yzHs"]),
              onClick: n,
          });
}
function tb(e) {
    let {
        showEditingControls: t,
        socialLayerStorefrontApplicationIds: n,
        isWishlistPublic: l,
        handleOpenShop: s,
        handleOpenGameShop: r,
        handleAddNitroToWishlist: a,
        handleToggleWishlistVisibility: o,
    } = e;
    return (0, i.jsxs)("div", {
        className: tC.$s,
        children: [
            t &&
                (n.length > 0 || null != a
                    ? (0, i.jsx)(tp, {
                          title: W.intl.string(W.t.SDUwM0),
                          handleOpenCollectiblesShop: s,
                          handleOpenGameShop: n.length > 0 ? r : void 0,
                          handleAddNitroToWishlist: a,
                          socialLayerStorefrontApplicationIds: n,
                      })
                    : (0, i.jsx)(ep.$, {
                          variant: "secondary",
                          size: "sm",
                          icon: eI.j,
                          text: W.intl.string(W.t.SDUwM0),
                          onClick: s,
                      })),
            (0, i.jsx)(tv, { isOwner: !0, isWishlistPublic: l, onToggleVisibility: o }),
        ],
    });
}
function tT(e) {
    let { application: t, handleOpenGameShop: n, handleOpenGameShopMouseDown: s } = e,
        r = l.useCallback(() => {
            n(t.id);
        }, [t, n]),
        a = l.useCallback(() => {
            s(t.id);
        }, [t, s]);
    return (0, i.jsx)(ep.$, {
        variant: "primary",
        size: "sm",
        icon: ej.U,
        text: W.intl.formatToPlainString(W.t["HDT/rg"], { applicationName: t.name }),
        onClick: r,
        onMouseDown: a,
    });
}
function tN(e) {
    let {
            showEditingControls: t,
            socialLayerStorefrontApplicationIds: n,
            handleOpenShop: s,
            handleOpenGameShop: r,
            handleOpenGameShopMouseDown: a,
        } = e,
        o = (0, ey.Us)() === f.BRT.OVERLAY,
        d = (0, eb.A)(n),
        c = l.useMemo(() => {
            if (o || 0 === n.length) return null;
            let e = d.reduce((e, t) => (null == t || (e[t.id] = t), e), {});
            if (1 === n.length) {
                let t = e[n[0]];
                return null == t
                    ? null
                    : (0, i.jsx)(tT, { application: t, handleOpenGameShop: r, handleOpenGameShopMouseDown: a });
            }
            return (0, i.jsx)(tp, {
                title: W.intl.string(W.t.FkjcWY),
                variant: "primary",
                handleOpenGameShop: r,
                socialLayerStorefrontApplicationIds: n,
            });
        }, [o, n, r, d, a]);
    return (0, i.jsxs)("div", {
        className: tC.y7,
        children: [
            (0, i.jsxs)("div", {
                className: tC.q6,
                children: [
                    (0, i.jsx)(y.D, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: W.intl.string(W.t.HGnLLT),
                    }),
                    (0, i.jsx)(R.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: W.intl.string(W.t["/X1ny6"]),
                    }),
                ],
            }),
            (t || null != c) &&
                (0, i.jsxs)(eA.e, {
                    size: "sm",
                    children: [
                        t &&
                            (0, i.jsx)(ep.$, {
                                variant: "primary",
                                size: "sm",
                                icon: ej.U,
                                text: W.intl.string(W.t.ZbS4QB),
                                onClick: s,
                            }),
                        c,
                    ],
                }),
        ],
    });
}
function tk(e) {
    let {
            isOwner: t,
            showEditingControls: n,
            profileOwner: s,
            wishlist: r,
            socialLayerStorefrontApplicationIds: a,
            handleOpenShop: o,
            handleOpenGameShop: d,
            handleAddNitroToWishlist: c,
        } = e,
        u = r.id,
        m = (0, x.bG)([eF.A], () => eF.A.getWishlistSettings(s.id, u)),
        { trackUserProfileWishlistAction: f } = (0, g.NJ)(),
        h = !1 === s.nsfwAllowed,
        [p, j] = l.useState(!0);
    l.useEffect(() => {
        m?.visibility != null && j(m.visibility === eh.a.PUBLIC);
    }, [m?.visibility]);
    let I = l.useCallback(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && f({ wishlistId: t, action: n, productLines: i });
            },
            [f],
        ),
        A = (0, eB.A)({ wishlistId: u, onAction: I, productLines: null != r ? (0, eU.y9)(r) : null }),
        v = l.useCallback(() => {
            if (null == u) return;
            let e = p ? eh.a.PRIVATE : eh.a.PUBLIC;
            j(!p),
                eD.A.updateWishlistVisibility(u, e),
                f({
                    wishlistId: u,
                    action: p ? $.Mq.WISHLIST_TOGGLE_PRIVATE : $.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: null != r ? (0, eU.y9)(r) : void 0,
                });
        }, [u, p, f, r]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !p &&
                (0, i.jsxs)("div", {
                    className: tC.lm,
                    children: [
                        (0, i.jsx)(ev.EyeSlashIcon, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(R.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: W.intl.string(W.t.RX7D9h),
                        }),
                    ],
                }),
            p &&
                h &&
                (0, i.jsxs)("div", {
                    className: tC.lm,
                    children: [
                        (0, i.jsx)(eE.CircleInformationIcon, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(R.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: W.intl.string(W.t.d78ChW),
                        }),
                    ],
                }),
            (0, i.jsxs)("div", {
                ref: A,
                className: tC.U1,
                children: [
                    (0, i.jsx)(R.E, {
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: W.intl.format(W.t.r6Y1Lg, { count: r.items.length }),
                    }),
                    t
                        ? (0, i.jsx)(tb, {
                              showEditingControls: n,
                              socialLayerStorefrontApplicationIds: a,
                              isWishlistPublic: p,
                              handleOpenShop: o,
                              handleOpenGameShop: d,
                              handleAddNitroToWishlist: c,
                              handleToggleWishlistVisibility: v,
                          })
                        : (0, i.jsx)(tS, {
                              socialLayerStorefrontApplicationIds: a,
                              handleOpenShop: o,
                              handleOpenGameShop: d,
                          }),
                ],
            }),
        ],
    });
}
function ty(e) {
    let { profileOwner: t, guildId: n } = e,
        s = l.useRef(null);
    (0, eH.i)({ containerRef: s, itemType: "WISHLIST_ITEM" });
    let { wishlistId: a, currentUser: o } = (0, x.cf)([eF.A, eW.default], () => ({
            wishlistId: eF.A.getFirstWishlistId(t.id),
            currentUser: eW.default.getCurrentUser(),
        })),
        { analyticsLocations: d } = (0, ei.Ay)(),
        c = (0, eV.A)(t.id),
        { wishlist: u, wasFetched: g, error: m } = (0, eM.fw)({ wishlistId: a, userId: t.id }),
        [f, h] = l.useState(!1);
    g && !f && h(!0), (0, eG.A)(u);
    let p = (function (e) {
            let { wishlist: t, profileOwner: n, currentUser: i } = e,
                s = n.id === i?.id,
                r = l.useMemo(() => (t?.userId != null ? [t.userId] : []), [t]),
                a = (0, x.bG)([eO.A], () => eO.A.getDetectableIdsToApplicationIds()),
                o = l.useMemo(() => {
                    let e = [];
                    for (let n of t?.items ?? [])
                        (0, ew.$)(n) && null != a[n.sku.applicationId] && e.push(n.sku.applicationId);
                    return e;
                }, [t, a]),
                d = (0, eP.w)({ userIds: r }),
                c = (0, eP.mn)({ userIds: r }),
                u = (0, eP.tR)(r),
                g = (0, eP.rY)(),
                m = (0, eP.qx)(),
                f = (0, eP.px)();
            return l.useMemo(
                () => (0, k.uniq)([...o, ...d, ...c, ...u, ...(s ? [...g, ...m, ...f] : [])].filter(eL.Vq)),
                [o, d, c, u, g, m, f, s],
            );
        })({ wishlist: u, profileOwner: t, currentUser: o }),
        j = (0, eC.A)(() => (0, ef.A)()),
        I = l.useCallback(() => {
            (0, eT.Cz)({ analyticsLocations: d, analyticsSource: eS.A.USER_PROFILE_WISHLIST });
        }, [d]),
        A = l.useCallback((e) => {
            (0, e_.G)({ applicationId: e });
        }, []),
        v = l.useCallback((e) => {
            (0, er.closeUserProfileModal)(), (0, e_.default)({ applicationId: e });
        }, []),
        { handleToggle: E } = (0, ek.c)({
            userId: o?.id,
            skuId: tE.pe.TIER_2,
            nuxGraphic: eR.g,
            onNuxShow: eN.D,
            location: eS.A.USER_PROFILE_WISHLIST,
        });
    if (null == o || null != m) return null;
    let C = null == u || 0 === u.items.length;
    return (0, i.jsxs)(tw, {
        scrollerRef: s,
        className: r()({ [tC.XG]: !C }),
        fade: !0,
        children: [
            C
                ? (0, i.jsx)(tN, {
                      showEditingControls: c,
                      socialLayerStorefrontApplicationIds: p,
                      handleOpenShop: I,
                      handleOpenGameShop: v,
                      handleOpenGameShopMouseDown: A,
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(ez.A, { scrollerRef: s }),
                          (0, i.jsx)(tk, {
                              isOwner: o?.id === t.id,
                              showEditingControls: c,
                              profileOwner: t,
                              wishlist: u,
                              socialLayerStorefrontApplicationIds: p,
                              handleOpenShop: I,
                              handleOpenGameShop: v,
                              handleAddNitroToWishlist: (0, eU.C3)(u, tE.pe.TIER_2) ? void 0 : E,
                          }),
                          (0, i.jsx)(e3, { items: u.items, profileOwner: t, guildId: n, showEditingControls: c }),
                      ],
                  }),
            c &&
                (0, i.jsx)(ta, {
                    user: t,
                    guildId: n,
                    wishlist: u,
                    hasFetchedWishlist: f,
                    analyticsLocations: d,
                    impressionSessionId: j,
                    className: C ? tC._E : tC.HZ,
                }),
        ],
    });
}
var tR = n(131058);
function tw(e) {
    let { children: t, className: n, scrollerRef: l, ...s } = e;
    return (0, i.jsx)(a.Ip, { ref: l, className: r()(tR.gN, n), fade: !0, ...s, children: t });
}
function tL(e) {
    let { user: t, currentUser: n, section: l, displayProfile: s, guildId: r, channelId: a, onClose: o } = e;
    return l === $.RP.ACTIVITY
        ? (0, i.jsx)(et, { user: t, currentUser: n, displayProfile: s, guildId: r, channelId: a, onClose: o })
        : l === $.RP.MUTUAL_FRIENDS
          ? (0, i.jsx)(ed, { user: t, guildId: r, channelId: a, onClose: o })
          : l === $.RP.MUTUAL_GUILDS
            ? (0, i.jsx)(em, { user: t, onClose: o })
            : l === $.RP.WIDGETS
              ? (0, i.jsx)(ex.A, { user: t, guildId: r, channelId: a })
              : l === $.RP.WISHLIST
                ? (0, i.jsx)(ty, { profileOwner: t, guildId: r })
                : null;
}
function tO(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: s,
            guildId: r,
            channelId: x,
            items: f,
            initialSection: h,
            onClose: p,
        } = e,
        { trackUserProfileAction: j } = (0, g.NJ)(),
        [I, A] = l.useState(() => (f.find((e) => e.section === h) ?? f[0]).section),
        v = f.find((e) => e.section === I) ?? f[0];
    return (
        v.section !== I && A(v.section),
        (0, i.jsxs)("div", {
            className: tR.kL,
            children: [
                (0, i.jsx)(a.Ip, {
                    orientation: "horizontal",
                    className: tR.gU,
                    fade: !0,
                    scrollbarGutter: !1,
                    children: (0, i.jsx)(o.V, {
                        type: "top",
                        look: "custom",
                        selectedItem: v.section,
                        onItemSelect: function (e) {
                            m.A.hasUnsavedChanges() && v.section === $.RP.WIDGETS
                                ? (0, u.VQ)()
                                : (j({ action: "PRESS_SECTION", section: e }), A(e));
                        },
                        children: f.map((e) =>
                            (0, i.jsx)(
                                o.V.Item,
                                { className: tR.YU, id: e.section, "aria-label": e.text, children: e.text },
                                e.section,
                            ),
                        ),
                    }),
                }),
                (0, i.jsx)(o.V.Panel, {
                    id: v.section,
                    "aria-label": v.text,
                    className: tR.NM,
                    children: (0, i.jsx)(d.F, {
                        component: (0, i.jsx)(c.A, { children: (0, i.jsx)(d.H, { children: v.text }) }),
                        children: (0, i.jsx)(tL, {
                            user: t,
                            currentUser: n,
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
