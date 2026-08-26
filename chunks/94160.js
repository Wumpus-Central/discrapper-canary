n.d(t, { K: () => tO, A: () => t_ });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(364522),
    o = n(761508),
    c = n(707554),
    d = n(140735),
    u = n(207803),
    g = n(183555),
    m = n(61881),
    x = n(17928),
    f = n(652215),
    h = n(28863),
    p = n(517164),
    I = n(114212),
    j = n(290863),
    A = n(461213),
    E = n(975571),
    v = n(146655),
    S = n(489379),
    C = n(402857),
    b = n(353394),
    T = n(64622),
    N = n(986712),
    y = n(435558),
    k = n(297264),
    w = n(834730),
    R = n(534890),
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
                    (0, i.jsx)(k.D, { variant: "heading-md/medium", color: "text-strong", children: t }),
                    (0, i.jsx)(w.E, { variant: "text-sm/normal", color: "text-default", children: n }),
                ],
            }),
            l,
        ],
    });
}
function K() {
    let e = W.intl.string(W.t.RnD2yZ),
        [t] = l.useState(() => ((0, y.sample)(H) ?? H[0])());
    return (0, i.jsx)(X, { heading: e, bodyText: t });
}
function Y() {
    let e = W.intl.string(W.t.bFgqYJ),
        [t] = l.useState(() => ((0, y.sample)(V) ?? V[0])());
    return (0, i.jsx)(X, { heading: e, bodyText: t });
}
function q(e) {
    let { user: t, guildId: n, channelId: s, onClose: r } = e,
        a = M.Ay.getName(n, s, t),
        o = W.intl.formatToPlainString(W.t.sjSitP, { name: a }),
        [c] = l.useState(() => ((0, y.sample)(B) ?? B[0])(a)),
        d = l.useCallback(() => {
            O.A.openPrivateChannel({ recipientIds: t.id }), r?.();
        }, [t.id, r]);
    return (0, i.jsx)(X, {
        heading: o,
        bodyText: c,
        children: (0, i.jsx)("div", {
            className: F.v0,
            children: (0, i.jsx)(U.FD, { icon: R.ChatIcon, text: W.intl.string(W.t["g33r/P"]), onClick: d }),
        }),
    });
}
function J() {
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
function Z(e) {
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
            (0, i.jsx)(J, {}),
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
        { live: o, recent: c, stream: d } = (0, v.A)(t.id),
        { voiceChannel: u, voiceActivity: g } = (0, S.A)({ userId: t.id, guildId: s }),
        m = (0, x.bG)([p.A], () => p.A.isFetchingUserOutbox(t.id)),
        y = t.id === n.id,
        k = (0, x.bG)([A.A, j.A], () => {
            let e = y ? A.A.getStatus() : j.A.getStatus(t.id);
            return e === f.clD.OFFLINE || e === f.clD.INVISIBLE;
        }),
        w = o.length > 0 || null != d,
        R = l?.private !== !0 && null == d && null == g && null != u,
        L = !k && (w || R),
        O = c.length > 0;
    return L || O || !m
        ? L || O || m
            ? (0, i.jsxs)(tO, {
                  className: ee.XG,
                  fade: !0,
                  children: [
                      L
                          ? (0, i.jsx)(Q.A, {
                                heading: W.intl.string(W.t.J6STd9),
                                children: (0, i.jsxs)("ul", {
                                    className: ee.kR,
                                    children: [
                                        null != d &&
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(T.A, {
                                                    user: t,
                                                    currentUser: n,
                                                    stream: d,
                                                    onClose: a,
                                                }),
                                            }),
                                        o.map((e, l) =>
                                            (0, i.jsx)(
                                                "li",
                                                {
                                                    children: (0, i.jsx)(C.A, {
                                                        user: t,
                                                        currentUser: n,
                                                        activity: e,
                                                        onClose: a,
                                                    }),
                                                },
                                                `live-${l}`,
                                            ),
                                        ),
                                        R &&
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
                                introText: y
                                    ? W.intl.format(W.t["4bk9Ak"], {
                                          learnMoreHook: (e, t) =>
                                              (0, i.jsx)(
                                                  h.Anchor,
                                                  {
                                                      href: E.A.getArticleURL(f.MVz.ACTIVITY_STATUS_SETTINGS),
                                                      children: e,
                                                  },
                                                  t,
                                              ),
                                      })
                                    : void 0,
                                scrollTargetId: $.bk.RECENT_ACTIVITY,
                                children: (0, i.jsx)("ul", {
                                    className: ee.kR,
                                    children: c.map((e) =>
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
            : y
              ? (0, i.jsx)(Z, { onClose: a })
              : (0, i.jsx)(q, { user: t, guildId: l?.guildId ?? s, channelId: r, onClose: a })
        : (0, i.jsx)("div", {
              className: ee.kR,
              children: Array.from({ length: 8 }).map((e, t) =>
                  (0, i.jsxs)(
                      "div",
                      {
                          className: ee.kr,
                          children: [
                              (0, i.jsx)(I.FQ, { width: 60, opacity: 0.08 }),
                              (0, i.jsx)(I.FQ, { width: 135, opacity: 0.08 }),
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
    er = n(975732),
    ea = n(503062),
    eo = n(393213);
function ec(e) {
    let { user: t, guildId: n, channelId: s, onClose: r } = e,
        { analyticsLocations: a } = (0, ei.Ay)(),
        { context: o, trackUserProfileAction: c } = (0, g.NJ)(),
        { mutualFriends: d, mutualFriendsCount: u } = (0, el.A)(t),
        m = (0, en.A)();
    return (
        l.useEffect(() => {
            (0, es.A)(t.id, m);
        }, [t.id, m]),
        (0, i.jsx)(tO, {
            className: eo.XG,
            children:
                null == d
                    ? Array.from({ length: u ?? 10 }).map((e, t) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: eo.D$,
                                  children: [
                                      (0, i.jsx)(I.FQ, { width: 40, opacity: 0.08 }),
                                      (0, i.jsx)(I.FQ, { width: 135, opacity: 0.08 }),
                                  ],
                              },
                              t,
                          ),
                      )
                    : 0 === d.length
                      ? (0, i.jsx)(K, {})
                      : d.map((e) => {
                            let { key: t, user: l, status: d } = e;
                            return (0, i.jsx)(
                                ea.A,
                                {
                                    user: l,
                                    status: d,
                                    guildId: n,
                                    channelId: s,
                                    onSelect: () => {
                                        r?.(),
                                            c({ action: "PRESS_MUTUAL_FRIEND" }),
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
var ed = n(398590),
    eu = n(345942),
    eg = n(51943);
function em(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: l } = (0, g.NJ)(),
        { mutualGuilds: s, isFetching: r } = (0, el.A)(t);
    return (0, i.jsx)(tO, {
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
                                  (0, i.jsx)(I.FQ, { width: 40, opacity: 0.08 }),
                                  (0, i.jsx)(I.FQ, { width: 135, opacity: 0.08 }),
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
                                    l({ action: "PRESS_MUTUAL_GUILD" }), (0, eu.u)(s.id), n(), (0, ed.jH)();
                                },
                            },
                            s.id,
                        );
                    })
                  : (0, i.jsx)(Y, {}),
    });
}
var ex = n(81876),
    ef = n(132500),
    eh = n(777480),
    ep = n(821609),
    eI = n(34188),
    ej = n(307301),
    eA = n(825484),
    eE = n(952270),
    ev = n(885574),
    eS = n(444927),
    eC = n(793574),
    eb = n(429913),
    eT = n(839534),
    eN = n(895360),
    ey = n(152472),
    ek = n(267102),
    ew = n(274681),
    eR = n(400669);
n(321073);
var eL = n(721932),
    eO = n(403362),
    eP = n(832163),
    e_ = n(501838),
    eD = n(44724),
    eG = n(808247),
    eM = n(909536),
    eU = n(673843),
    eW = n(594832),
    eF = n(855052),
    eH = n(287809),
    eV = n(321191),
    eB = n(600761),
    ez = n(389667),
    eX = n(535089),
    eK = n(128988),
    eY = n(686246),
    eq = n(111085),
    eJ = n(107563),
    eZ = n(840411),
    eQ = n(666810);
let e$ = (0, n(945810).mj)({
    name: "2026-07-wishlist-show-owned-items-last",
    kind: "user",
    defaultConfig: { isEnabled: !1 },
    variations: { 1: { isEnabled: !0 } },
});
var e0 = n(724834),
    e1 = n(451395),
    e8 = n(823016),
    e2 = n(100741);
function e7(e) {
    let { item: t, index: n, wishlistId: l, onReorder: s, children: r } = e,
        { manageFocusOnReorder: a } = (0, e8.r)();
    return (0, i.jsx)(e1.mG, {
        index: n,
        itemId: String(t.skuId),
        listType: String(l),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: t },
        "aria-label": W.intl.formatToPlainString(W.t["7SnyMA"], { positionNumber: n + 1 }),
        onReorder: s,
        onEnd: () => a(String(t.skuId)),
        className: e2.C,
        dropBeforeClassName: e2.A,
        dropAfterClassName: e2.Ze,
        draggingClassName: e2.Id,
        children: (0, i.jsx)("div", { className: e2.An, children: r }),
    });
}
let e5 = l.memo(function (e) {
    let {
            item: t,
            index: n,
            profileOwner: s,
            guildId: r,
            showEditingControls: a,
            wishlistId: o,
            isDragging: c,
            onReorder: d,
        } = e,
        { registerDragHandleRef: u } = (0, e8.r)(),
        g = l.useMemo(
            () =>
                a
                    ? (0, i.jsx)(e1.jV, {
                          buttonRef: u(String(t.skuId)),
                          className: e2.BU,
                          onFocus: (e) => e.stopPropagation(),
                      })
                    : void 0,
            [a, u, t.skuId],
        ),
        m = l.useMemo(
            () =>
                (0, i.jsx)(e0.A, {
                    item: t,
                    wishlistOwner: s,
                    guildId: r,
                    wishlistId: o,
                    isDragging: c,
                    dragHandle: g,
                }),
            [t, s, r, c, g, o],
        );
    return a
        ? (0, i.jsx)("li", {
              children: (0, i.jsx)(e7, { item: t, index: n, wishlistId: o, onReorder: d, children: m }),
          })
        : (0, i.jsx)("li", { children: m });
});
function e3(e) {
    var t;
    let { items: n, profileOwner: s, guildId: r, showEditingControls: a } = e,
        o = eH.default.getCurrentUser(),
        { defaultWishlistId: c } = (0, x.cf)([eV.A], () => ({ defaultWishlistId: eV.A.getFirstWishlistId(s.id) })),
        d = null != o && o.id !== s.id,
        u =
            ((t = d ? "UserProfileModalV2WishlistGrid" : "UserProfileModalV2WishlistGrid Own Profile Do Not Use"),
            e$.useConfig({ location: t }).isEnabled && d),
        g = (0, x.bG)([eq.A], () => {
            let e = n;
            return (
                u &&
                    (e = (0, eZ.hE)(e, (e) => {
                        var t;
                        return (
                            (t = eq.A.hasSentGift(e.skuId, s.id)),
                            e.skuProductLine !== f.EZt.PREMIUM && (!0 === e.isOwned || t)
                        );
                    })),
                e
            );
        }, [n, u, s.id]),
        { isDragging: m } = (0, eY.V)((e) => ({ isDragging: e.isDragging() })),
        h = l.useCallback(
            (e, t) => {
                if (e === t || null == c || 0 === g.length || e < 0 || e >= g.length || t < 0 || t >= g.length) return;
                let n = eJ.A.getWishlist(c);
                if (null == n) return;
                let i = g[e],
                    { newWishlistData: l, previousSkuId: s, nextSkuId: r } = (0, eZ.Ap)(n, g, e, t);
                eG.A.reorderWishlistItem(c, i.skuId, { previousSkuId: s, nextSkuId: r, newWishlistData: l });
            },
            [c, g],
        );
    if (null == o || null == c) return null;
    let p = (0, i.jsx)("ul", {
        className: e2.Vg,
        children: g.map((e, t) =>
            (0, i.jsx)(
                e5,
                {
                    item: e,
                    index: t,
                    profileOwner: s,
                    guildId: r,
                    showEditingControls: a,
                    wishlistId: c,
                    isDragging: m,
                    onReorder: h,
                },
                e.skuId,
            ),
        ),
    });
    return a ? (0, i.jsx)(e8.B, { emptyListFallbackRef: null, children: p }) : p;
}
function e4(e) {
    let t = eH.default.getCurrentUser()?.id,
        n = null != t && t !== e.profileOwner.id;
    return (0, i.jsx)(eQ.h, {
        isGifting: n,
        location: "UserProfileModalV2WishlistGrid",
        children: (0, i.jsx)(e3, { ...e }),
    });
}
var e6 = n(815021),
    e9 = n(299679),
    te = n(889586),
    tt = n(973912),
    tn = n(554146),
    ti = n(131607),
    tl = n(927813),
    ts = n(49999);
let tr = 90 * tl.A.Millis.DAY,
    ta = 90 * tl.A.Millis.DAY;
var to = n(469364);
function tc(e) {
    let {
            user: t,
            guildId: n,
            wishlist: s,
            hasFetchedWishlist: r = !1,
            analyticsLocations: a,
            impressionSessionId: o,
            className: c,
        } = e,
        {
            isVisible: d,
            isDismissible: u,
            markAsDismissed: g,
        } = (function (e) {
            let { userId: t, wishlist: n, hasFetchedWishlist: i } = e,
                s = (n?.items.length ?? 0) >= 3,
                [r, a] = l.useState(!1);
            !i || s || r || a(!0);
            let o = (0, x.bG)(
                    [eV.A],
                    () => (null != n ? new Date(eV.A.getWishlistSettings(t, n.id)?.updated_at ?? 0).valueOf() : 0),
                    [n, t],
                ),
                [c, d] = (0, ti.Wl)(
                    tn.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS,
                    { showAfterTimestamp: o + ta, cooldownDurationMs: tr },
                    void 0,
                    !0,
                ),
                u = c === tn.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
            return {
                isVisible: i && (u || r || !s),
                isDismissible: s,
                markAsDismissed: l.useCallback(() => {
                    a(!1), d(ts.i.USER_DISMISS);
                }, [d]),
            };
        })({ userId: t.id, wishlist: s, hasFetchedWishlist: r });
    return d
        ? (0, i.jsx)(td, {
              user: t,
              guildId: n,
              wishlist: s,
              analyticsLocations: a,
              impressionSessionId: o,
              className: c,
              isDismissible: u,
              markAsDismissed: g,
          })
        : null;
}
function td(e) {
    let {
            user: t,
            guildId: n,
            wishlist: l,
            analyticsLocations: s,
            impressionSessionId: a,
            className: o,
            isDismissible: c,
            markAsDismissed: d,
        } = e,
        { items: u } = (0, te.L)({
            userId: t.id,
            wishlist: l,
            numWishlistItemsToRecommend: 15,
            maxWishlistItemsToShow: 8,
            source: eW.B5.USER_PROFILE,
        });
    return 0 === u.length
        ? null
        : (0, i.jsxs)("div", {
              className: r()(to.kL, o),
              children: [
                  (0, i.jsxs)("div", {
                      className: to.wx,
                      children: [
                          (0, i.jsx)(w.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              children: W.intl.string(W.t["+GB8Kt"]),
                          }),
                          c &&
                              (0, i.jsx)("div", {
                                  className: to.b,
                                  children: (0, i.jsx)(e6.J, { size: "xs", onClick: d }),
                              }),
                      ],
                  }),
                  (0, i.jsx)(e9.dB, {
                      newValue: {
                          impressionSessionId: a,
                          surface: "user_profile_wishlist_suggestions_grid",
                          wishlistOwnerId: t.id,
                          wishlistId: l?.id,
                          analyticsLocations: s,
                      },
                      children: (0, i.jsx)(tt.A, {
                          items: u,
                          guildId: n,
                          wishlist: l,
                          className: r()(to.Vg, to.e6),
                          analyticsLocations: s,
                      }),
                  }),
              ],
          });
}
var tu = n(477782),
    tg = n(403581),
    tm = n(922016),
    tx = n(980707),
    tf = n(789645),
    th = n(847374),
    tp = n(486020),
    tI = n(208813);
function tj(e) {
    let {
            title: t,
            variant: n = "secondary",
            handleOpenCollectiblesShop: s,
            handleOpenGameShop: r,
            handleAddNitroToWishlist: a,
            socialLayerStorefrontApplicationIds: o,
        } = e,
        c = l.useRef(null),
        [d, u] = l.useState(!1),
        g = (function (e) {
            let { applications: t, handleOpenGameShop: n } = e;
            return l.useMemo(
                () =>
                    t.filter(eO.Vq).map((e) => {
                        let t = tp.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 20 });
                        return {
                            id: `browse-social-layer-storefront-${e.id}`,
                            label: W.intl.formatToPlainString(W.t["HDT/rg"], { applicationName: e.name }),
                            iconLeft: null != t ? () => (0, i.jsx)("img", { className: tI.I, src: t, alt: "" }) : eI.U,
                            leadingAccessory: null != t ? { type: "image", src: t } : { type: "icon", icon: eI.U },
                            action: () => n?.(e.id),
                        };
                    }),
                [t, n],
            );
        })({ applications: (0, eb.A)(o), handleOpenGameShop: r }),
        m = l.useMemo(
            () =>
                (0, i.jsxs)(tu.rX, {
                    children: [
                        null != s &&
                            (0, i.jsx)(tu.Dr, {
                                id: "browse-collectibles-shop",
                                label: W.intl.string(W.t["5upuqx"]),
                                iconLeft: eI.U,
                                leadingAccessory: { type: "icon", icon: eI.U },
                                action: s,
                            }),
                        null != a &&
                            (0, i.jsx)(tu.Dr, {
                                id: "add-nitro-to-wishlist",
                                label: W.intl.string(W.t.lG6a5x),
                                iconLeft: tg.t,
                                leadingAccessory: { type: "icon", icon: tg.t },
                                action: a,
                            }),
                        null != r &&
                            g.map((e) => {
                                let { id: t, label: n, iconLeft: l, leadingAccessory: s, action: r } = e;
                                return (0, i.jsx)(
                                    tu.Dr,
                                    { id: t, label: n, iconLeft: l, leadingAccessory: s, action: r },
                                    t,
                                );
                            }),
                    ],
                }),
            [s, r, a, g],
        );
    return (0, i.jsx)(tm.Y, {
        targetElementRef: c,
        position: "bottom",
        onRequestOpen: () => u(!0),
        onRequestClose: () => u(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(tx.W, {
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
                buttonRef: c,
                variant: n,
                size: "sm",
                icon: d ? tf.P : th.a,
                iconPosition: "end",
                text: t,
                ...e,
            }),
    });
}
var tA = n(509434),
    tE = n(365199);
let tv = E.A.getArticleURL(f.MVz.CUSTOM_PROFILES_WISHLIST);
function tS(e) {
    let { isOwner: t, isWishlistPublic: n, onToggleVisibility: s } = e,
        r = l.useRef(null),
        { analyticsLocations: a } = (0, ei.Ay)(eC.A.USER_PROFILE_WISHLIST),
        o = l.useMemo(
            () =>
                t
                    ? (0, i.jsxs)(tu.rX, {
                          children: [
                              (0, i.jsx)(tu.fP, {
                                  id: "wishlist-privacy-setting",
                                  label: W.intl.string(W.t.b2nFyA),
                                  subtext: W.intl.string(W.t.dw58pE),
                                  checked: n,
                                  action: s,
                              }),
                              (0, i.jsx)(tu.bX, {}),
                              (0, i.jsx)(tu.Dr, {
                                  id: "wishlist-privacy-setting2",
                                  label: W.intl.string(W.t.hvVgAZ),
                                  icon: tA.I,
                                  trailingIndicator: { type: "icon", icon: tA.I },
                                  action: () => window.open(tv),
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
              children: (0, i.jsx)(tm.Y, {
                  targetElementRef: r,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, i.jsx)(tx.W, {
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
                          icon: tE.MoreHorizontalIcon,
                          tooltipText: W.intl.string(W.t["UKOtz+"]),
                          action: "PRESS_OPTIONS",
                          ...e,
                      }),
              }),
          });
}
var tC = n(202541),
    tb = n(526725);
function tT(e) {
    let { socialLayerStorefrontApplicationIds: t, handleOpenShop: n, handleOpenGameShop: l } = e;
    return t.length > 0
        ? (0, i.jsx)(tj, {
              title: W.intl.string(W.t["i/yzHs"]),
              handleOpenCollectiblesShop: n,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationIds: t,
          })
        : (0, i.jsx)(ep.$, {
              variant: "secondary",
              size: "sm",
              icon: eI.U,
              text: W.intl.string(W.t["i/yzHs"]),
              onClick: n,
          });
}
function tN(e) {
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
        className: tb.$s,
        children: [
            t &&
                (n.length > 0 || null != a
                    ? (0, i.jsx)(tj, {
                          title: W.intl.string(W.t.SDUwM0),
                          handleOpenCollectiblesShop: s,
                          handleOpenGameShop: n.length > 0 ? r : void 0,
                          handleAddNitroToWishlist: a,
                          socialLayerStorefrontApplicationIds: n,
                      })
                    : (0, i.jsx)(ep.$, {
                          variant: "secondary",
                          size: "sm",
                          icon: ej.j,
                          text: W.intl.string(W.t.SDUwM0),
                          onClick: s,
                      })),
            (0, i.jsx)(tS, { isOwner: !0, isWishlistPublic: l, onToggleVisibility: o }),
        ],
    });
}
function ty(e) {
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
        icon: eI.U,
        text: W.intl.formatToPlainString(W.t["HDT/rg"], { applicationName: t.name }),
        onClick: r,
        onMouseDown: a,
    });
}
function tk(e) {
    let {
            showEditingControls: t,
            socialLayerStorefrontApplicationIds: n,
            handleOpenShop: s,
            handleOpenGameShop: r,
            handleOpenGameShopMouseDown: a,
        } = e,
        o = (0, ek.Us)() === f.BRT.OVERLAY,
        c = (0, eb.A)(n),
        d = l.useMemo(() => {
            if (o || 0 === n.length) return null;
            let e = c.reduce((e, t) => (null == t || (e[t.id] = t), e), {});
            if (1 === n.length) {
                let t = e[n[0]];
                return null == t
                    ? null
                    : (0, i.jsx)(ty, { application: t, handleOpenGameShop: r, handleOpenGameShopMouseDown: a });
            }
            return (0, i.jsx)(tj, {
                title: W.intl.string(W.t.FkjcWY),
                variant: "primary",
                handleOpenGameShop: r,
                socialLayerStorefrontApplicationIds: n,
            });
        }, [o, n, r, c, a]);
    return (0, i.jsxs)("div", {
        className: tb.y7,
        children: [
            (0, i.jsxs)("div", {
                className: tb.q6,
                children: [
                    (0, i.jsx)(k.D, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: W.intl.string(W.t.HGnLLT),
                    }),
                    (0, i.jsx)(w.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: W.intl.string(W.t["/X1ny6"]),
                    }),
                ],
            }),
            (t || null != d) &&
                (0, i.jsxs)(eA.e, {
                    size: "sm",
                    children: [
                        t &&
                            (0, i.jsx)(ep.$, {
                                variant: "primary",
                                size: "sm",
                                icon: eI.U,
                                text: W.intl.string(W.t.ZbS4QB),
                                onClick: s,
                            }),
                        d,
                    ],
                }),
        ],
    });
}
function tw(e) {
    let {
            isOwner: t,
            showEditingControls: n,
            profileOwner: s,
            wishlist: r,
            socialLayerStorefrontApplicationIds: a,
            handleOpenShop: o,
            handleOpenGameShop: c,
            handleAddNitroToWishlist: d,
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
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && f({ wishlistId: t, action: n, productLines: i });
            },
            [f],
        ),
        A = (0, eX.A)({ wishlistId: u, onAction: j, productLines: null != r ? (0, eF.y9)(r) : null }),
        E = l.useCallback(() => {
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
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !p &&
                (0, i.jsxs)("div", {
                    className: tb.lm,
                    children: [
                        (0, i.jsx)(eE.EyeSlashIcon, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(w.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: W.intl.string(W.t.RX7D9h),
                        }),
                    ],
                }),
            p &&
                h &&
                (0, i.jsxs)("div", {
                    className: tb.lm,
                    children: [
                        (0, i.jsx)(ev.CircleInformationIcon, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(w.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: W.intl.string(W.t.d78ChW),
                        }),
                    ],
                }),
            (0, i.jsxs)("div", {
                ref: A,
                className: tb.U1,
                children: [
                    (0, i.jsx)(w.E, {
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: W.intl.format(W.t.r6Y1Lg, { count: r.items.length }),
                    }),
                    t
                        ? (0, i.jsx)(tN, {
                              showEditingControls: n,
                              socialLayerStorefrontApplicationIds: a,
                              isWishlistPublic: p,
                              handleOpenShop: o,
                              handleOpenGameShop: c,
                              handleAddNitroToWishlist: d,
                              handleToggleWishlistVisibility: E,
                          })
                        : (0, i.jsx)(tT, {
                              socialLayerStorefrontApplicationIds: a,
                              handleOpenShop: o,
                              handleOpenGameShop: c,
                          }),
                ],
            }),
        ],
    });
}
function tR(e) {
    let { profileOwner: t, guildId: n } = e,
        s = l.useRef(null);
    (0, eB.i)({ containerRef: s, itemType: "WISHLIST_ITEM" });
    let { wishlistId: a, currentUser: o } = (0, x.cf)([eV.A, eH.default], () => ({
            wishlistId: eV.A.getFirstWishlistId(t.id),
            currentUser: eH.default.getCurrentUser(),
        })),
        { analyticsLocations: c } = (0, ei.Ay)(),
        d = (0, ez.A)(t.id),
        { wishlist: u, wasFetched: g, error: m } = (0, eW.fw)({ wishlistId: a, userId: t.id }),
        [f, h] = l.useState(!1);
    g && !f && h(!0), (0, eU.A)(u);
    let p = (function (e) {
            let { wishlist: t, profileOwner: n, currentUser: i } = e,
                s = n.id === i?.id,
                r = l.useMemo(() => (t?.userId != null ? [t.userId] : []), [t]),
                a = (0, x.bG)([eP.A], () => eP.A.getDetectableIdsToApplicationIds()),
                o = l.useMemo(() => {
                    let e = [];
                    for (let n of t?.items ?? [])
                        (0, eL.$)(n) && null != a[n.sku.applicationId] && e.push(n.sku.applicationId);
                    return e;
                }, [t, a]),
                c = (0, e_.w)({ userIds: r }),
                d = (0, e_.mn)({ userIds: r }),
                u = (0, e_.tR)(r),
                g = (0, e_.rY)(),
                m = (0, e_.qx)(),
                f = (0, e_.px)();
            return l.useMemo(
                () => (0, y.uniq)([...o, ...c, ...d, ...u, ...(s ? [...g, ...m, ...f] : [])].filter(eO.Vq)),
                [o, c, d, u, g, m, f, s],
            );
        })({ wishlist: u, profileOwner: t, currentUser: o }),
        I = (0, eM.Gh)("user-profile-modal-v2-wishlist"),
        j = (0, eS.A)(() => (0, ef.A)()),
        A = l.useCallback(() => {
            (0, eT.Cz)({ analyticsLocations: c, analyticsSource: eC.A.USER_PROFILE_WISHLIST });
        }, [c]),
        E = l.useCallback((e) => {
            (0, eD.G)({ applicationId: e });
        }, []),
        v = l.useCallback((e) => {
            (0, er.closeUserProfileModal)(), (0, eD.default)({ applicationId: e });
        }, []),
        { handleToggle: S } = (0, ey.c)({
            userId: o?.id,
            skuId: tC.pe.TIER_2,
            nuxGraphic: I ? eR.g : void 0,
            onNuxShow: eN.D,
            location: eC.A.USER_PROFILE_WISHLIST,
            onAddSuccess: ew.w,
        });
    if (null == o || null != m) return null;
    let C = null == u || 0 === u.items.length;
    return (0, i.jsxs)(tO, {
        scrollerRef: s,
        className: r()({ [tb.XG]: !C }),
        fade: !0,
        children: [
            C
                ? (0, i.jsx)(tk, {
                      showEditingControls: d,
                      socialLayerStorefrontApplicationIds: p,
                      handleOpenShop: A,
                      handleOpenGameShop: v,
                      handleOpenGameShopMouseDown: E,
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(eK.A, { scrollerRef: s }),
                          (0, i.jsx)(tw, {
                              isOwner: o?.id === t.id,
                              showEditingControls: d,
                              profileOwner: t,
                              wishlist: u,
                              socialLayerStorefrontApplicationIds: p,
                              handleOpenShop: A,
                              handleOpenGameShop: v,
                              handleAddNitroToWishlist: I && !(0, eF.C3)(u, tC.pe.TIER_2) ? S : void 0,
                          }),
                          (0, i.jsx)(e4, { items: u.items, profileOwner: t, guildId: n, showEditingControls: d }),
                      ],
                  }),
            d &&
                (0, i.jsx)(tc, {
                    user: t,
                    guildId: n,
                    wishlist: u,
                    hasFetchedWishlist: f,
                    analyticsLocations: c,
                    impressionSessionId: j,
                    className: C ? tb._E : tb.HZ,
                }),
        ],
    });
}
var tL = n(131058);
function tO(e) {
    let { children: t, className: n, scrollerRef: l, ...s } = e;
    return (0, i.jsx)(a.Ip, { ref: l, className: r()(tL.gN, n), fade: !0, ...s, children: t });
}
function tP(e) {
    let { user: t, currentUser: n, section: l, displayProfile: s, guildId: r, channelId: a, onClose: o } = e;
    return l === $.RP.ACTIVITY
        ? (0, i.jsx)(et, { user: t, currentUser: n, displayProfile: s, guildId: r, channelId: a, onClose: o })
        : l === $.RP.MUTUAL_FRIENDS
          ? (0, i.jsx)(ec, { user: t, guildId: r, channelId: a, onClose: o })
          : l === $.RP.MUTUAL_GUILDS
            ? (0, i.jsx)(em, { user: t, onClose: o })
            : l === $.RP.WIDGETS
              ? (0, i.jsx)(ex.A, { user: t, guildId: r, channelId: a })
              : l === $.RP.WISHLIST
                ? (0, i.jsx)(tR, { profileOwner: t, guildId: r })
                : null;
}
function t_(e) {
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
        { trackUserProfileAction: I } = (0, g.NJ)(),
        [j, A] = l.useState(() => (f.find((e) => e.section === h) ?? f[0]).section),
        E = f.find((e) => e.section === j) ?? f[0];
    return (
        E.section !== j && A(E.section),
        (0, i.jsxs)("div", {
            className: tL.kL,
            children: [
                (0, i.jsx)(a.Ip, {
                    orientation: "horizontal",
                    className: tL.gU,
                    fade: !0,
                    scrollbarGutter: !1,
                    children: (0, i.jsx)(o.V, {
                        type: "top",
                        look: "custom",
                        selectedItem: E.section,
                        onItemSelect: function (e) {
                            m.A.hasUnsavedChanges() && E.section === $.RP.WIDGETS
                                ? (0, u.VQ)()
                                : (I({ action: "PRESS_SECTION", section: e }), A(e));
                        },
                        children: f.map((e) =>
                            (0, i.jsx)(
                                o.V.Item,
                                { className: tL.YU, id: e.section, "aria-label": e.text, children: e.text },
                                e.section,
                            ),
                        ),
                    }),
                }),
                (0, i.jsx)(o.V.Panel, {
                    id: E.section,
                    "aria-label": E.text,
                    className: tL.NM,
                    children: (0, i.jsx)(c.F, {
                        component: (0, i.jsx)(d.A, { children: (0, i.jsx)(c.H, { children: E.text }) }),
                        children: (0, i.jsx)(tP, {
                            user: t,
                            currentUser: n,
                            displayProfile: s,
                            guildId: r,
                            channelId: x,
                            section: E.section,
                            onClose: p,
                        }),
                    }),
                }),
            ],
        })
    );
}
