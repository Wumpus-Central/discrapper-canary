(n.d(t, { A: () => is }), n(321073));
var i,
    s,
    l = n(477900),
    r = n(582128),
    a = n(503698),
    o = n.n(a),
    c = n(649852),
    u = n.n(c),
    d = n(788413),
    m = n(17928),
    f = n(554146),
    E = n(319060),
    I = n(305866),
    g = n(554375),
    h = n(820284),
    A = n(212245),
    p = n(964486),
    _ = n(793574),
    N = n(666860),
    C = n(688810),
    O = n(379848),
    S = n(236285),
    x = n(536637),
    T = n.n(x),
    y = n(73153),
    j = n(935208);
let R = { lastSeenNewlyAddedEmojiIds: {} },
    b = R,
    L = {};
function v() {
    for (let e in L) b.lastSeenNewlyAddedEmojiIds[e] = L[e];
}
class M extends m.Ay.PersistedStore {
    static displayName = "NewlyAddedEmojiStore";
    static persistKey = "NewlyAddedEmojiStore";
    static migrations = [
        (e) => {
            let t = e.lastSeenNewlyAddedEmojiIds,
                n = {};
            for (let e in t) {
                let i = t[e];
                n[e] = { id: i, lastSeen: Date.now(), acknowledged: !1 };
            }
            return { lastSeenNewlyAddedEmojiIds: n };
        },
    ];
    initialize(e) {
        b = e ?? R;
    }
    getState() {
        return b;
    }
    getLastSeenEmojiByGuild(e) {
        return b.lastSeenNewlyAddedEmojiIds[e];
    }
    isNewerThanLastSeen(e, t) {
        if (null == e || null == t) return !1;
        let n = this.getLastSeenEmojiByGuild(e);
        if (null == n || j.default.compare(t, n.id) > 0) return !0;
        {
            let e = T()(n.lastSeen);
            return T()().isBefore(e.add(2, "weeks")) && !n.acknowledged;
        }
    }
}
let D = new M(y.h, {
    LOGOUT: function () {
        ((b = R), (L = {}));
    },
    NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = L[t] ?? b.lastSeenNewlyAddedEmojiIds[t];
        null == i || 0 > j.default.compare(i.id, n)
            ? (L[t] = { id: n, lastSeen: Date.now(), acknowledged: !0 })
            : (L[t] = { ...i, acknowledged: !0 });
    },
    NEWLY_ADDED_EMOJI_SEEN_PENDING: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = L[t] ?? b.lastSeenNewlyAddedEmojiIds[t];
        (null == i || 0 > j.default.compare(i.id, n)) && (L[t] = { id: n, lastSeen: Date.now(), acknowledged: !1 });
    },
    NEWLY_ADDED_EMOJI_SEEN_UPDATED: v,
    CLEAR_CACHES: function () {
        ((b = R), v());
    },
    CONNECTION_CLOSED: v,
});
var P = n(451731),
    w = n(850992),
    U = n(151271),
    G = n(60587),
    k = n(887695),
    F = n(562708),
    J = n(462887),
    V = n(939249),
    K = n(789645),
    B = n(696986),
    H = n(297264),
    X = n(834730),
    W = n(736653),
    Z = n(139286),
    Y = n(976860),
    z = n(71393),
    q = n(384684),
    $ = n(985242),
    Q = n(652215),
    ee = n(746080),
    et = n(375708),
    en = n(196404);
function ei(e) {
    let t,
        { onClose: i, guildId: s, emojiId: r } = e,
        a = ((t = (0, W.Ay)()), (0, J.q)(t) ? n(454333) : n(674463)),
        { analyticsLocations: o } = (0, C.Ay)(_.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, Z.A)({
        type: F.ImpressionTypes.MODAL,
        name: F.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: { location_stack: o, emoji_guild_id: s, emoji_id: r ?? null },
    });
    let c = (0, m.bG)([z.A], () => z.A.getGuild(s)),
        u = (0, m.bG)([q.A], () => null != s && q.A.getUserSubscriptionRoles(s).size > 0),
        d = u ? et.intl.string(et.t.GoLM9z) : et.intl.formatToPlainString(et.t["h0u/Hi"], { serverName: c?.name }),
        f = u ? et.intl.string(et.t.PjZ7Db) : et.intl.string(et.t.p8FG1D);
    return (0, l.jsxs)("div", {
        className: en.kL,
        children: [
            (0, l.jsx)("div", { className: en.Tp }),
            (0, l.jsxs)("div", {
                className: en.Qs,
                children: [
                    (0, l.jsx)(V.D, {
                        className: en.b,
                        "aria-label": et.intl.string(et.t.cpT0Cq),
                        onClick: i,
                        children: (0, l.jsx)(K.P, {
                            size: "xs",
                            color: "currentColor",
                            "aria-label": et.intl.string(et.t.cpT0Cq),
                            className: en.yP,
                        }),
                    }),
                    (0, l.jsx)("img", { alt: "", src: a, className: en.Tn }),
                    (0, l.jsx)(B.h, { size: 22 }),
                    (0, l.jsx)(H.D, {
                        color: "text-strong",
                        variant: "heading-lg/extrabold",
                        className: en.wx,
                        children: et.intl.string(et.t.cBjkcx),
                    }),
                    (0, l.jsx)(B.h, { size: 4 }),
                    (0, l.jsx)(X.E, {
                        color: "text-default",
                        variant: "text-md/normal",
                        className: en.h_,
                        children: d,
                    }),
                    (0, l.jsx)(B.h, { size: 24 }),
                    (0, l.jsx)($.A, {
                        text: f,
                        onClick: function () {
                            (0, Y.pX)(Q.BVt.CHANNEL(s, ee.VV.ROLE_SUBSCRIPTIONS), { sourceLocationStack: o });
                        },
                    }),
                ],
            }),
        ],
    });
}
var es = n(450510),
    el = n(885386),
    er = n(808728),
    ea = n(287809),
    eo = n(174459),
    ec = n(474090),
    eu = n(240248),
    ed = n(822123),
    em = n(734057),
    ef = n(309010),
    eE = n(690521),
    eI = n(818645),
    eg = n(316884),
    eh = n(307731),
    eA = n(698279);
function ep(e) {
    let { intention: t, containerWidth: n, rowSize: i, isBurstReaction: s, analyticsObject: l } = e,
        r = em.A.getChannel(ef.Ay.getChannelId()),
        a = r?.getGuildId(),
        o =
            t === eh.EmojiIntention.REACTION
                ? S.Ay.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice()
                : S.Ay.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        c = null != r ? S.Ay.getDisambiguatedEmojiContext(r.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        u =
            t === eh.EmojiIntention.REACTION
                ? S.Ay.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems
                : S.Ay.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        d = o.slice(0, u),
        m = null != a ? S.Ay.getGuildEmoji(a) : [],
        f = S.Ay.getDisambiguatedEmojiContext(r?.getGuildId()).getCustomEmoji(),
        { topEmojis: E, newlyAddedEmojis: I } = (0, eg.b)({ guildId: r?.getGuildId(), pickerIntention: t }),
        { visibleTopEmojis: g, visibleNewlyAddedEmojis: h } = (0, eI.W)({
            topEmojis: E,
            newlyAddedEmojis: I,
            rowSize: i,
        });
    N.Ay.trackWithMetadata(
        t === eh.EmojiIntention.REACTION ? Q.HAw.REACTION_PICKER_OPENED : Q.HAw.EXPRESSION_PICKER_OPENED,
        {
            width: n,
            tab: eA.kx.EMOJI,
            badged: !1,
            num_expressions_favorites: c.length,
            num_animated_expressions_favorites: c.filter((e) => e?.animated).length,
            num_custom_expressions_favorites: c.filter(eE.Ay.isCustomEmoji).length,
            num_standard_expressions_favorites: c.filter((e) => null == e.id).length,
            num_expressions_frecent: d.length,
            num_animated_expressions_frecent: d.filter((e) => e?.animated).length,
            num_custom_expressions_frecent: d.filter(eE.Ay.isCustomEmoji).length,
            num_standard_expressions_frecent: d.filter((e) => null == e.id).length,
            num_current_guild_expressions: m.length,
            num_custom_expressions_total: f.size,
            num_expressions_top_server: g.length,
            num_animated_expressions_top_server: g.filter((e) => e.animated).length,
            num_expressions_newly_added: h.length,
            num_animated_expressions_newly_added: h.filter((e) => e.animated).length,
            ...(t === eh.EmojiIntention.REACTION && { is_burst: s }),
            ...(null != l && { location_object: l }),
        },
    );
}
var e_ = n(206248),
    eN = n(403581),
    eC = n(724651),
    eO = n(732280),
    eS = n(783420),
    ex = n(158045),
    eT = n(202541);
let ey = { object: Q.ZSU.BUTTON_CTA, section: Q.JJy.SUPER_REACTION_PICKER };
function ej(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: i } = e,
        s = et.intl.string(et.t.eikz43),
        r = (0, eO.V)(),
        a = (0, eC.O)(),
        o = r?.subscriptionTrial,
        c = null != o || null != a,
        u = o?.skuId ?? eT.pe.TIER_2,
        d = c
            ? null != a
                ? et.intl.formatToPlainString(et.t.bkQ4bH, { percent: a.discount.amount })
                : (0, ex.FY)({ intervalType: o?.interval, intervalCount: o?.intervalCount })
            : et.intl.string(et.t.sEAnVH);
    return (0, l.jsx)(eS.A, {
        subscriptionTier: u,
        premiumModalAnalyticsLocation: ey,
        onSubscribeModalClose: (e) => {
            e && i();
        },
        children: (e) => {
            let { onClick: r } = e;
            return (0, l.jsx)(e_.H, {
                targetElementRef: t,
                shouldShow: n,
                onRequestClose: i,
                position: "bottom",
                assetUrl: "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
                disableMediaViewer: !0,
                badge: c ? { type: "free_trial", variant: "expressive" } : void 0,
                title: et.intl.string(et.t.N4SCJ0),
                body: s,
                action: { text: d, variant: "expressive", icon: eN.t, onClick: r },
            });
        },
    });
}
var eR = n(435558),
    eb = n.n(eR),
    eL = n(837381),
    ev = n(460905),
    eM = n(775602),
    eD = n(713517),
    eP = n(866665),
    ew = n(499373),
    eU = n(732447),
    eG = n(938612);
function ek(e) {
    let { onClick: t } = e,
        n = et.intl.string(eU.default["3D0GLv"]);
    return (0, l.jsx)("div", {
        className: eG.n,
        children: (0, l.jsx)(eP.m, {
            ariaHidden: !0,
            position: "right",
            text: n,
            children: (0, l.jsx)(V.D, {
                "aria-label": n,
                className: eG.x,
                onClick: t,
                children: (0, l.jsx)(ew.T, { size: "md", color: "currentColor" }),
            }),
        }),
    });
}
var eF = n(88218),
    eJ = n(407698),
    eV = n(941971),
    eK = n(531685),
    eB = n(406810),
    eH = n(27232),
    eX = n(369606),
    eW = n(413249),
    eZ = n(141060),
    eY = n(687966),
    ez = n(115979),
    eq = n(524501),
    e$ = n(926268),
    eQ = n(138134),
    e0 = n(7807),
    e1 = n(732139);
let e2 = r.memo(function (e) {
    let { categoryId: t, ...n } = e,
        i = (function (e) {
            switch (e) {
                case e1.R2.RECENT:
                    return eB.ClockIcon;
                case e1.R2.FAVORITES:
                    return eH.StarIcon;
                case e1.R2.TOP_GUILD_EMOJI:
                    return eX.TrophyIcon;
                case e1.R2.PEOPLE:
                    return ev.n;
                case e1.R2.NATURE:
                    return eW.p;
                case e1.R2.FOOD:
                    return eZ.i;
                case e1.R2.ACTIVITY:
                    return eY.GameControllerIcon;
                case e1.R2.TRAVEL:
                    return ez.h;
                case e1.R2.OBJECTS:
                    return eq.D;
                case e1.R2.SYMBOLS:
                    return e$.HeartIcon;
                case e1.R2.FLAGS:
                    return eQ.FlagIcon;
                case e1.R2.PREMIUM_UPSELL:
                    return eN.t;
                case e1.R2.SOUNDMOJI:
                    return e0.J;
                default:
                    return;
            }
        })(t);
    return null == i ? null : (0, l.jsx)(i, { color: "currentColor", ...n });
});
var e3 = n(724511),
    e5 = n(132500),
    e4 = n(770335),
    e8 = n(7584),
    e7 = n(526292),
    e6 = n(926972),
    e9 = n(711014),
    te =
        (((i = {})[(i.EMOJI = 0)] = "EMOJI"),
        (i[(i.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"),
        (i[(i.SOUNDMOJI = 2)] = "SOUNDMOJI"),
        i);
let tt = [eh.EmojiDisabledReasons.DISALLOW_EXTERNAL, eh.EmojiDisabledReasons.DISALLOW_CUSTOM];
var tn = (((s = {})[(s.PREMIUM = 0)] = "PREMIUM"), (s[(s.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), s),
    ti = n(342379);
let ts = "expression-guild-",
    { itemIdForIndex: tl } = (0, eF.J)(ts),
    tr = (0, eu.xI)(E.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    ta = (0, eu.xI)(E.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    to = (0, eu.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    tc = (0, eu.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    tu = (0, eu.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    td = (0, eu.xI)(ti.__invalid_unicodeCategoryShortcutHeight),
    tm = (0, eu.xI)(E.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    tf = (0, eu.xI)(E.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    tE = to + ta + 2 * tu,
    tI = tr + ta,
    tg = tI + (tm + 2 * tf),
    th = to + tc + 2 * tu;
function tA(e) {
    let {
            activeIndex: t,
            categoryIndex: n,
            analyticsContext: i,
            categories: s,
            category: a,
            handleCategorySelect: c,
            isWindowFocused: u,
            useReducedMotion: d,
        } = e,
        m = r.useRef(null),
        { isHoveringOrFocusing: f } = (0, eD.A)(m),
        E = (0, eL.rm)(tl(n)),
        I = a.type === e1.s.GUILD ? null : a.id,
        g = t === n,
        h = a.type === e1.s.GUILD ? a.guild : null,
        A = (0, l.jsxs)(V.D, {
            innerRef: m,
            ...E,
            "aria-label": (0, ed.wt)(a, h),
            className: o()({
                [ti.ZG]: null != h,
                [ti.Bj]: null == h,
                [ti.s6]: null == h && g,
                [ti.xg]: a.type === e1.s.RECENT,
            }),
            onClick: () => {
                (null != h &&
                    eo.default.track(Q.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: i?.location,
                        tab: eA.kx.EMOJI,
                        guild_id: h.id,
                    }),
                    c(n));
            },
            children: [
                (0, l.jsx)("div", {
                    className: ti.a$,
                    children: (0, l.jsx)(eV.A, { hovered: f, selected: g, size: "small" }),
                }),
                null != h
                    ? (0, l.jsx)(e3.A, { guild: h, isSelected: g, shouldAnimate: !d && u, isLocked: a.isNitroLocked })
                    : null,
                null == h && null != I
                    ? (0, l.jsx)(e2, { categoryId: I, className: ti.Yl, height: to, width: to, size: "custom" })
                    : null,
            ],
        }),
        p = s[n + 1],
        _ = null != p && a.type === e1.s.GUILD && p.type !== e1.s.GUILD;
    return null != h
        ? (0, l.jsxs)(r.Fragment, {
              children: [
                  (0, l.jsx)(eJ.Q, { guild: h, children: A }),
                  _ ? (0, l.jsx)("hr", { className: ti.ny }, "separator") : null,
              ],
          })
        : A;
}
let tp = (e) => {
    let {
            className: t,
            emojiListRef: n,
            sectionDescriptors: i,
            intention: s,
            channel: a,
            fallbackGuildId: c,
            shouldShowSoundmojiInEmojiPicker: u = !1,
            showOnlyUnicode: d = !1,
            canViewEmojiPacks: f = !1,
        } = e,
        E = w.Om.useStore((e) => e.activeCategoryIndex),
        I = (function (e) {
            let { emojiListRef: t } = e,
                n = (0, U.RQ)((e) => e.searchQuery),
                i = r.useCallback((e) => t.current?.scrollToSectionTop(e), [t]);
            return r.useCallback(
                (e) => {
                    "" !== n ? ((0, U.Ri)(""), w.Om.setActiveCategoryIndex(e)) : i(e);
                },
                [i, n],
            );
        })({ sectionDescriptors: i, emojiListRef: n }),
        g = (0, A.p)(),
        h = (0, ed.ss)(s, a, { guildId: a?.guild_id ?? c, shouldShowSoundmojiInEmojiPicker: u }),
        p = r.useMemo(() => (d ? (0, ed.CQ)() : h), [h, d]),
        _ = r.useRef(null),
        N = (0, m.bG)([eK.A], () => eK.A.isFocused()),
        C = (0, m.bG)([eM.Ay], () => eM.Ay.useReducedMotion, []),
        O = r.useMemo(
            () =>
                eb().memoize(
                    (e, t) => {
                        let n = p[t];
                        if (null != n)
                            return (0, l.jsx)(
                                tA,
                                {
                                    activeIndex: E,
                                    analyticsContext: g,
                                    categories: p,
                                    category: n,
                                    categoryIndex: t,
                                    handleCategorySelect: I,
                                    isWindowFocused: N,
                                    useReducedMotion: C,
                                },
                                t,
                            );
                    },
                    (e, t) => t,
                ),
            [E, g, p, I, N, C],
        ),
        S = r.useMemo(() => [8, 8, 0, 8], []),
        x = r.useCallback(
            (e, t) => {
                let n = p[t];
                if (n.type === e1.s.RECENT) return tE;
                if (n.type === e1.s.GUILD) {
                    let e = p[t + 1];
                    return null != e && e.type !== e1.s.GUILD ? tg : tI;
                }
                return th;
            },
            [p],
        ),
        {
            nonUnicodeCategoryCount: T,
            firstUnicodeCategoryIndex: y,
            firstUnicodeCategoryOffsetTop: j,
            rowCountBySection: R,
        } = r.useMemo(() => {
            let e = 0,
                t = 0,
                n = 0,
                i = 0;
            p.forEach((s) => {
                s.type === e1.s.GUILD
                    ? ((t += 1), (n += 1))
                    : s.type === e1.s.UNICODE
                      ? (i += 1)
                      : ((e += 1), (t += 1));
            });
            let s = tE + t * tI + tg;
            return {
                nonUnicodeCategoryCount: t,
                firstUnicodeCategoryIndex: t,
                firstUnicodeCategoryOffsetTop: s,
                rowCountBySection: [e, n, i],
            };
        }, [p]),
        [b, L] = r.useState(!0);
    r.useLayoutEffect(() => {
        L(T >= 7);
    }, [T]);
    let v = r.useCallback(
            (e) => {
                let t = _.current?.getListDimensions();
                null == t || (e + t.height - tm >= j ? L(!1) : L(!0));
            },
            [j],
        ),
        M = r.useCallback(
            (e) => {
                (e(y), _.current?.scrollTo(j));
            },
            [j, y],
        ),
        D = r.useCallback(
            (e, t) => {
                let n = p[e];
                if (null == n) return 0;
                let i = b ? td : 0;
                if (n.type === e1.s.RECENT) return t ? 0 : tc;
                if (n.type === e1.s.GUILD) {
                    let n = p[e + 1];
                    return null != n && n.type !== e1.s.GUILD ? (t ? tm + -2 * tf + ta + i : ta) : t ? i : ta;
                }
                return t ? ta + i : 2 * ta;
            },
            [p, b],
        ),
        P = r.useMemo(
            () =>
                function (e, t) {
                    return (0, l.jsx)(r.Fragment, { children: t }, e);
                },
            [],
        ),
        G = b ? "shortcut" : "hiddenshortcut";
    return (0, l.jsx)(eF.A, {
        categoryListRef: _,
        expressionsListRef: n,
        className: t,
        store: w.Om,
        categories: p,
        listPadding: S,
        onScroll: v,
        renderCategoryListItem: O,
        renderSection: P,
        rowCount: p.length,
        categoryHeight: x,
        getScrollOffsetForIndex: D,
        rowCountBySection: R,
        navId: "emoji-picker-categories",
        itemIdPrefix: ts,
        emojiPacksHeader: f ? (0, l.jsx)(ek, {}) : null,
        children: (e) =>
            T >= 7 &&
            (0, l.jsx)(
                V.D,
                {
                    "aria-hidden": !b,
                    "aria-label": et.intl.string(et.t.dT0ctw),
                    className: o()(ti.KB, { [ti.h_]: !b }),
                    tabIndex: b ? 0 : -1,
                    onClick: () => M(e),
                    children: (0, l.jsx)(ev.n, { size: "custom", color: "currentColor", height: to, width: to }),
                },
                G,
            ),
    });
};
var t_ = n(49999),
    tN = n(860197);
let tC = function (e) {
    let { markAsDismissed: t } = e;
    return (0, l.jsxs)(X.E, {
        variant: "text-xs/medium",
        color: "text-default",
        className: tN.iE,
        children: [
            (0, l.jsx)(e$.HeartIcon, { size: "md", color: "currentColor", className: tN.Kk }),
            (0, l.jsx)("div", {
                className: tN.Qs,
                children: (0, l.jsx)(X.E, { variant: "text-xs/normal", children: et.intl.string(et.t.xdRf69) }),
            }),
            (0, l.jsx)(V.D, {
                onClick: () => t(t_.i.UNKNOWN),
                children: (0, l.jsx)(K.P, { size: "md", color: "currentColor", className: tN.VN }),
            }),
        ],
    });
};
var tO = n(202091),
    tS = n(717421),
    tx = n(343032),
    tT = n(683063),
    ty = n(131607),
    tj = n(748798);
let tR = { tension: 750, mass: 2.5, friction: 70 };
function tb(e) {
    let { checked: t, onClick: n, buttonRef: i } = e,
        s = (0, m.bG)([eM.Ay], () => eM.Ay.useReducedMotion),
        a = ea.default.getCurrentUser(),
        c = null != a && !(0, ex.TW)(a),
        u = c ? [] : [f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP],
        [d, E] = (0, ty.kn)(u),
        [I, g] = r.useState(!1),
        [h, A] = (0, tS.z)(() => ({})),
        p = (0, tO.animated)(tx.i);
    r.useEffect(() => {
        let e = d === f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (E(t_.i.DISMISS), setTimeout(() => g(e), 200));
    }, [d, E]);
    let _ = I ? et.intl.string(et.t["Osi/uy"]) : t && !c ? et.intl.string(et.t["5cRA/b"]) : et.intl.string(et.t.buV4av),
        N = I ? et.intl.string(et.t.ORK94p) : void 0;
    return (0, l.jsx)(tT.u, {
        position: "top",
        title: N,
        body: _,
        asset: (0, l.jsx)(eN.t, { size: "md", color: "currentColor" }),
        assetSize: 20,
        forceOpen: I,
        children: (0, l.jsx)(V.D, {
            innerRef: i,
            "aria-label": _,
            "aria-pressed": t,
            onClick: function () {
                (A({ from: { rotate: t ? "360deg" : "0deg" }, to: { rotate: t ? "0deg" : "360deg" }, config: tR }),
                    n?.(),
                    g(!1));
            },
            focusProps: { enabled: !1 },
            className: o()(tj.Pf, { [tj.wM]: t }),
            children: (0, l.jsx)(p, {
                style: s ? void 0 : h,
                size: "custom",
                width: 20,
                height: 20,
                color: t ? "white" : "currentColor",
                className: tj.Kk,
            }),
        }),
    });
}
var tL = n(821609),
    tv = n(644508),
    tM = n(824832),
    tD = n(267102),
    tP = n(242812);
function tw(e) {
    let { channel: t, closePopout: n } = e,
        i = r.useRef(null),
        s = r.useRef(0),
        [a, o] = r.useState(!1),
        [c, u] = r.useState(!1),
        d = (0, tD.Us)() === Q.BRT.OVERLAY,
        m = c || a,
        f = r.useCallback(
            async (e, i, l) => {
                (u(!0),
                    n(),
                    await (0, tv.f)({
                        userImage: { data: e, file: i, image: l },
                        guildId: t?.guild_id ?? null,
                        analyticsLocation: {
                            section: Q.JJy.EXPRESSION_PICKER,
                            page: t?.guild_id != null ? Q.liQ.GUILD_CHANNEL : Q.liQ.DM_CHANNEL,
                        },
                    }),
                    (s.current += 1),
                    u(!1));
            },
            [t, n],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(eP.m, {
                asContainer: !0,
                text: d ? et.intl.string(et.t.RMbedC) : null,
                children: (0, l.jsx)(tL.$, {
                    text: et.intl.string(et.t.iMJO37),
                    variant: "secondary",
                    onClick: function () {
                        i.current?.activateUploadDialogue();
                    },
                    disabled: m || d,
                }),
            }),
            (0, l.jsx)("div", {
                className: tP.F,
                children: (0, l.jsx)(tM.Ay, { ref: i, onChange: f, setLoading: o, disabled: m }, s.current),
            }),
        ],
    });
}
n(667532);
var tU = n(833272),
    tG = n(82495),
    tk = n(260762),
    tF = n(915089),
    tJ = n(650583),
    tV = n(683829);
let tK = (0, tF.Ld)(),
    tB = tU.A.convert.fromCodePoint("1f44f"),
    tH = (0, eu.xI)(E.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
function tX(e) {
    switch (tU.A.convert.toCodePoint(e)) {
        case "1f3fb":
            return et.intl.string(et.t["BVK5b/"]);
        case "1f3fc":
            return et.intl.string(et.t.xJWOK8);
        case "1f3fd":
            return et.intl.string(et.t["MB+T5g"]);
        case "1f3fe":
            return et.intl.string(et.t.MODud2);
        case "1f3ff":
            return et.intl.string(et.t["0uzqsc"]);
        default:
            return et.intl.string(et.t.bGN1ow);
    }
}
let tW = (e) => {
    let { fade: t, surrogate: n, onClick: i, delay: s, index: r } = e,
        a = (0, eL.rm)(`item-${r}`),
        o = eE.Ay.getURL(tB + n),
        c = (0, tS.z)({ opacity: 1, from: { opacity: +!t }, delay: s }, "animate-always");
    return (0, l.jsx)(V.D, {
        ...a,
        role: "option",
        "aria-selected": 0 === r,
        onClick: () => i(n),
        className: tV.B6,
        children: (0, l.jsx)(tO.animated.div, {
            "aria-label": tX(n),
            className: tV.g4,
            style: { backgroundImage: `url("${o}")`, ...c },
        }),
    });
};
function tZ(e) {
    let { id: t, selectedSurrogate: n, onClick: i } = e,
        s = (0, tk.A)("diversity"),
        a = (0, tS.z)({ height: (tH + 14) * (e8.W$.length + 1), from: { height: tH + 14 }, config: { duration: 125 } }),
        o = r.useRef(s);
    r.useEffect(() => {
        o.current.focusFirstVisibleItem();
    }, []);
    let c = ["", ...e8.W$];
    return (
        eb().remove(c, (e) => e === n),
        c.unshift(n),
        (0, l.jsx)(eL.hD, {
            navigator: s,
            children: (0, l.jsx)(eL.PR, {
                children: (e) => {
                    let { ref: n, ...s } = e;
                    return (0, l.jsx)(tO.animated.div, {
                        ...s,
                        id: t,
                        ref: n,
                        className: tV.J6,
                        style: a,
                        role: "listbox",
                        children: c.map((e, t) =>
                            (0, l.jsx)(tW, { index: t, fade: 0 !== t, delay: 20 * t, surrogate: e, onClick: i }, t),
                        ),
                    });
                },
            }),
        })
    );
}
let tY = function (e) {
    let { searchBarRef: t, selectedSurrogate: n, className: i } = e,
        s = eE.Ay.getURL(tB + n),
        [a, c] = r.useState(!1),
        u = (0, tG.A)(null, () => c(!1)),
        d = r.useRef(null);
    return (0, l.jsxs)("div", {
        ref: u,
        className: o()(tV.fx, i),
        children: [
            (0, l.jsx)(V.D, {
                innerRef: d,
                className: tV.Dj,
                onClick: function () {
                    c(!0);
                },
                "aria-label": et.intl.formatToPlainString(et.t["2SfnMp"], { skinTone: tX(n) }),
                "aria-haspopup": !0,
                "aria-expanded": a,
                "aria-controls": tK,
                tabIndex: a ? -1 : 0,
                children: (0, l.jsx)("div", { className: tV.g4, style: { backgroundImage: `url("${s}")` } }),
            }),
            a
                ? (0, l.jsx)("div", {
                      onKeyDown: function (e) {
                          e.key === tJ.dh.ESCAPE
                              ? (e.stopPropagation(), c(!1), null != d.current && d.current.focus())
                              : "Tab" === e.key && c(!1);
                      },
                      children: (0, l.jsx)(tZ, {
                          id: tK,
                          selectedSurrogate: n,
                          onClick: function (e) {
                              ((0, g.dK)(e), c(!1), t.current?.focus());
                          },
                      }),
                  })
                : null,
        ],
    });
};
var tz = n(462180),
    tq = n(602034),
    t$ = n(683438);
let tQ = r.memo(function (e) {
    let {
            emojiListRef: t,
            gridNavigatorId: n,
            onKeyDown: i,
            onFocus: s,
            autoFocus: a,
            defaultSearchPlaceholder: o,
            ref: c,
        } = e,
        u = r.useRef(null),
        d = (0, U.RQ)((e) => e.searchQuery),
        [m, f, E] = w.Om.useStore((e) => [e.inspectedExpressionPosition, e.searchPlaceholder, e.hasInteracted], tz.x),
        I = r.useCallback(
            (e) => {
                (w.Om.setActiveCategoryIndex("" === e ? 0 : -1),
                    w.Om.setInspectedExpressionPosition(0, 0),
                    w.Om.setSearchPlaceholder(null),
                    (0, U.Ri)(e),
                    t.current?.scrollTo(0));
            },
            [t],
        ),
        g = r.useCallback(() => {
            I("");
        }, [I]);
    return (
        r.useImperativeHandle(c, () => ({ focus: () => u.current?.focus() })),
        (0, l.jsx)(t$.I, {
            autoFocus: a,
            query: d,
            ref: u,
            placeholder: f ?? o,
            onClear: g,
            onKeyDown: function (e) {
                switch (e.key) {
                    case tJ.dh.ARROW_LEFT:
                    case tJ.dh.ARROW_RIGHT:
                    case tJ.dh.ARROW_UP:
                    case tJ.dh.ARROW_DOWN:
                        document.activeElement !== e.target && e.preventDefault();
                }
                i(e);
            },
            onFocus: s,
            onChange: I,
            inputProps: {
                role: "combobox",
                "aria-label": et.intl.string(et.t.tCauZX),
                "aria-haspopup": "grid",
                "aria-autocomplete": "list",
                "aria-controls": n,
                "aria-expanded": !0,
                ...(E ? { "aria-activedescendant": (0, tq.Aq)(n, m.columnIndex, m.rowIndex) } : void 0),
            },
        })
    );
});
var t0 = n(381575);
let t1 = function (e) {
    let {
            channel: t,
            accessory: n,
            pickerIntention: i,
            headerClassName: s,
            emojiListRef: r,
            onKeyDown: a,
            onFocus: c,
            autoFocus: u,
            searchBarRef: d,
            diversitySurrogate: m,
            isBurstReaction: f,
            onBurstReactionToggle: E,
            burstToggleRef: I,
            renderHeader: g,
            showAddEmojiButton: h = !0,
            closePopout: A,
        } = e,
        p = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(tQ, {
                    emojiListRef: r,
                    gridNavigatorId: e1.lq,
                    onKeyDown: a,
                    ref: d,
                    onFocus: c,
                    autoFocus: u,
                    defaultSearchPlaceholder: (0, ed.wT)(i, f),
                }),
                i === eh.EmojiIntention.REACTION ? (0, l.jsx)(tb, { checked: f, onClick: E, buttonRef: I }) : null,
                n ?? (0, l.jsx)(tY, { searchBarRef: d, className: t0.fx, selectedSurrogate: m }),
                i !== eh.EmojiIntention.NO_CUSTOM_EMOJI && h ? (0, l.jsx)(tw, { channel: t, closePopout: A }) : null,
            ],
        });
    return (0, l.jsx)("div", { className: o()(t0.wx, s), children: null != g ? g(p) : p });
};
var t2 = n(182922),
    t3 = n(363195),
    t5 = n(486020),
    t4 = n(977566);
function t8(e) {
    return null != e && "animated" in e;
}
let t7 = r.memo(function (e) {
    let t,
        i,
        { className: s, emojiGrid: a, guildId: o, pickerIntention: c, channel: u } = e,
        d = w.Om.useStore((e) => e.inspectedExpressionPosition),
        f = r.useMemo(() => {
            let { rowIndex: e, columnIndex: t } = d;
            return a[e]?.[t];
        }, [a, d]);
    switch (f?.type) {
        case te.EMOJI:
            t = f?.emoji;
            break;
        case te.EXPAND_OR_COLLAPSE_EMOJIS:
            t = { type: "EXPAND_OR_COLLAPSE_EMOJI", guildId: f?.guildId, allNamesString: f?.name };
            break;
        case te.SOUNDMOJI:
        default:
            t = null;
    }
    let E = (0, m.bG)([z.A], () => (null !== t && t.type === e4.i.GUILD ? z.A.getGuild(t.guildId) : null), [t]),
        I = (0, m.bG)([eK.A], () => eK.A.isFocused()),
        g = (0, m.bG)([eM.Ay], () => eM.Ay.useReducedMotion, []),
        h = el.Sf.useSetting(),
        A = (0, ed.O7)(o, t8(t) ? t : null),
        p = (0, m.bG)([S.Ay], () => S.Ay.expandedSectionsByGuildIds),
        { newlyAddedEmojis: _ } = (0, eg.A)(o, c),
        N = f?.type === te.EMOJI ? f.subCategory : e1.tm.NONE;
    if (
        (r.useEffect(() => {
            let e = Date.now();
            return () => {
                Date.now() - e >= 250 &&
                    t8(t) &&
                    N !== e1.tm.NONE &&
                    (N === e1.tm.NEWLY_ADDED_EMOJI &&
                        null !== t &&
                        t.type === e4.i.GUILD &&
                        (0, P.mz)(t.guildId, _[0].id),
                    null != d.source &&
                        (0, ed.yB)({
                            emoji: t,
                            subCategory: N,
                            position: f.columnIndex + 1,
                            newlyAddedHighlight: N === e1.tm.NEWLY_ADDED_EMOJI && D.isNewerThanLastSeen(o, t.id),
                        }));
            };
        }),
        null == t)
    )
        return null;
    let C = (function (e, t) {
            let { allowAnimatedEmoji: i, sectionsExpandedFromThreeRows: s, theme: r } = t;
            if (t8(e)) {
                let t = null != e.id ? t5.Ay.getEmojiURL({ id: e.id, animated: i && e.animated, size: 28 }) : e.url;
                return "" === t
                    ? (0, l.jsx)(X.E, {
                          variant: "text-md/normal",
                          className: t4.J_,
                          children: "surrogates" in e ? e.surrogates : null,
                      })
                    : (0, l.jsx)("img", { alt: (0, eE.N)(e) ?? "", src: t, className: t4.Zg });
            }
            if ("EXPAND_OR_COLLAPSE_EMOJI" !== e.type) return null;
            {
                let t = n(619508),
                    i = n(404828),
                    a = n(600003),
                    o = n(318121);
                return s.has(e.guildId)
                    ? (0, l.jsx)("img", { className: t4.Kk, src: (0, J.M)(r) ? a : o, alt: "" })
                    : (0, l.jsx)("img", { className: t4.Kk, src: (0, J.M)(r) ? t : i, alt: "" });
            }
        })(t, { allowAnimatedEmoji: h, sectionsExpandedFromThreeRows: p, theme: t3.A.theme }),
        O =
            null != E
                ? (0, l.jsx)(e3.A, { className: t4.__invalid_guildIcon, guild: E, shouldAnimate: !g && I })
                : null;
    i =
        "EXPAND_OR_COLLAPSE_EMOJI" === t.type
            ? p.has(t.guildId)
                ? et.intl.string(et.t["/K2RDH"])
                : et.intl.string(et.t.NZI2Zk)
            : (0, eE.N)(t);
    let x = (function (e) {
        let { inspectedEmoji: t, guild: n } = e,
            i = t8(t);
        return null != n && i ? et.intl.format(et.t.KFW2aY, { guildName: n.name }) : null;
    })({ inspectedEmoji: t, channel: u, guildId: o, intention: c, guild: E });
    return (0, l.jsx)(t2.A, {
        className: s,
        graphicPrimary: C,
        graphicSecondary: O,
        titlePrimary: i,
        titleSecondary: x,
        isFavorite: A,
        emojiSubCategory: N,
    });
});
n(30146);
var t6 = n(607399),
    t9 = n(765178),
    ne = n(537652),
    nt = n(962125),
    nn = n(240864),
    ni = n(286509),
    ns = n(89366),
    nl = n(10392),
    nr = n(82498),
    na = n(202639),
    no = n(414872),
    nc = n(285373),
    nu = n(559106),
    nd = n(304072),
    nm = n(189551),
    nf = n(289873),
    nE = n(796774),
    nI = n(209932),
    ng = n(817232),
    nh = n(576705);
n(980504);
var nA = n(818348),
    np = n(821425);
let n_ = r.memo(function (e) {
    let t,
        n,
        i,
        s,
        { channelId: a, onSelectSoundmoji: o } = e,
        c = (0, m.bG)([nI.A], () => !nI.A.isFetching() && !nI.A.hasFetchedAllSounds(), []),
        u = (0, m.bG)([em.A], () => em.A.getChannel(a)),
        d =
            ((t = (0, m.bG)([ea.default], () => ex.Ay.canUseSoundboardEverywhere(ea.default.getCurrentUser()))),
            (n = (0, m.bG)([nI.A], () => nI.A.getSoundsForGuild("0"))),
            (i = (0, m.yK)([z.A], () => z.A.getGuildIds())),
            (s = r.useMemo(() => nh.A.can(nA.xB.USE_EXTERNAL_SOUNDS, u), [u])),
            r.useMemo(() => {
                let e = [];
                if (t && s) {
                    let t = i.flatMap((e) => nI.A.getSoundsForGuild(e)?.filter((e) => e.available) ?? []);
                    e.push(...eb().sampleSize(t, 4));
                } else if (u?.guild_id != null) {
                    let t = nI.A.getSoundsForGuild(u?.guild_id)?.filter((e) => e.available);
                    e.push(...eb().sampleSize(t, 4));
                }
                return (e.length < 4 && e.push(...eb().sampleSize(n ?? [], 4 - e.length)), e);
            }, [s, u?.guild_id, n, i, t]));
    return (r.useEffect(() => {
        (0, nE.E7)();
    }, [c]),
    0 === d.length)
        ? (0, l.jsx)(nf.y, {})
        : (0, l.jsx)("div", {
              className: np.q,
              children: d.map((e, t) =>
                  (0, l.jsx)(
                      ng.Ay,
                      {
                          suppressPlaySound: !0,
                          enableSecondaryActions: !0,
                          isSoundmoji: !0,
                          sound: e,
                          channel: u,
                          onSelectItem: (t) => o?.(e, !t.shiftKey),
                      },
                      t,
                  ),
              ),
          });
});
var nN = n(594061),
    nC = n(771104),
    nO = n(442433),
    nS = n(147421),
    nx = n(723702),
    nT = n(140735),
    ny = n(194261),
    nj = n(703413);
let nR = (e) => {
    let { src: t, alt: n, size: i, "aria-label": s, className: a } = e,
        c = r.useRef(null),
        u = r.useRef(!1),
        d = u.current ? nj.S : nj.Y;
    return (0, l.jsx)("img", {
        className: o()(d, a),
        alt: n,
        src: t,
        ref: c,
        "aria-label": s,
        style: { backgroundSize: i, height: i, width: i },
        onLoad: u.current
            ? void 0
            : (e) => {
                  (e.currentTarget?.ownerDocument?.defaultView ?? window).requestAnimationFrame(() => {
                      null != c.current &&
                          ((u.current = !0), c.current.classList.remove(nj.Y), c.current.classList.add(nj.S));
                  });
              },
    });
};
var nb = n(955388);
let nL = eb().memoize(
        (e) =>
            `${e * eh.EmojiSprites.NonDiversityPerRow}px ${e * Math.ceil(e8.Ay.numNonDiversitySprites / eh.EmojiSprites.NonDiversityPerRow)}px`,
    ),
    nv = eb().memoize(
        (e) =>
            `${e * eh.EmojiSprites.DiversityPerRow}px ${e * Math.ceil(e8.Ay.numDiversitySprites / eh.EmojiSprites.DiversityPerRow)}px`,
    ),
    nM = r.memo(function (e) {
        let { emoji: t, size: i, surrogateCodePoint: s, allowAnimatedEmoji: a, "aria-label": c, isLocked: u } = e,
            d = (() => {
                if (!t.useSpriteSheet) {
                    let e =
                        null == t.id
                            ? t.url
                            : t5.Ay.getEmojiURL({ id: t.id, animated: a && t.animated, size: eh.EMOJI_URL_BASE_SIZE });
                    return null != e
                        ? (0, l.jsx)(nR, {
                              className: nb.N1,
                              "aria-label": c,
                              src: e,
                              size: i,
                              alt: (0, eE.N)(t) ?? "",
                          })
                        : null;
                }
                return (0, l.jsx)("div", {
                    className: o()(nb.xA, { [nb.N1]: u }),
                    style: (function (e, t, i) {
                        let s, l, r;
                        if (!e.useSpriteSheet) return;
                        let a = null != e.index ? e.index : 0;
                        e.hasDiversity
                            ? ((s = n(12303)(`./spritesheet-${t}-${i}.png.js`).default),
                              (l = nv(i)),
                              (r = eh.EmojiSprites.DiversityPerRow))
                            : ((s = n(145519)(`./spritesheet-emoji-${i}.png.js`).default),
                              (l = nL(i)),
                              (r = eh.EmojiSprites.NonDiversityPerRow));
                        let o = (-a % r) * i,
                            c = -Math.floor(a / r) * i;
                        return {
                            backgroundImage: `url('${s}')`,
                            backgroundPosition: `${o}px ${c}px`,
                            backgroundSize: l,
                            height: i,
                            width: i,
                        };
                    })(t, s, i),
                    children: (0, l.jsx)(nT.A, { children: c }),
                });
            })();
        return (0, l.jsxs)(r.Fragment, {
            children: [
                d,
                u
                    ? (0, l.jsx)("div", {
                          className: nb.iD,
                          children: (0, l.jsx)(ny.LockIcon, { size: "xs", color: "currentColor", className: nb.fi }),
                      })
                    : null,
            ],
        });
    });
var nD = n(537911);
function nP(e) {
    let t,
        {
            emoji: n,
            isFavorite: i,
            isLargeSize: s,
            isMediumSize: r,
            isInspected: a,
            isDisabled: c,
            showPulse: u,
            columnIndex: d,
            rowIndex: f,
            size: E,
            surrogateCodePoint: I,
            allowAnimatedEmoji: g,
            selectedItemClassName: h,
            inNitroLockedSection: A,
            ref: p,
            ..._
        } = e,
        N = (0, m.bG)([z.A], () => (n.type === e4.i.GUILD ? z.A.getGuild(n.guildId) : void 0), [n]);
    return (0, l.jsx)(nu.vN, {
        children: (0, l.jsx)("button", {
            ..._,
            className: o()(nD._X, { [nD.lG]: s, [nD.Lh]: r, [nD.Bx]: a, [h ?? ""]: a, [nD.TV]: u }),
            "data-type": G.g.EMOJI,
            "data-id": n.id,
            "data-name": n.name,
            "data-surrogates": "surrogates" in n ? n.surrogates : null,
            "data-animated": n.animated ? "true" : null,
            ref: p,
            children: (0, l.jsx)(nM, {
                "aria-label":
                    ((t = (0, eE.N)(n)),
                    (N?.name != null &&
                        (t = et.intl.formatToPlainString(et.t["nXv4/B"], { names: t, guildName: N.name })),
                    i)
                        ? et.intl.formatToPlainString(et.t["9FI9Z0"], { names: t })
                        : t),
                columnIndex: d,
                rowIndex: f,
                emoji: n,
                size: E,
                surrogateCodePoint: I,
                allowAnimatedEmoji: g,
                isLocked: c && !A,
            }),
        }),
    });
}
function nw(e) {
    let {
            descriptor: t,
            emojiItemKey: i,
            isInspected: s,
            rowIndex: a,
            channelGuildId: o,
            onInspect: c,
            onSelect: u,
            isScrolling: d,
            isUsingKeyboardNavigation: f,
            showEmojiFavoriteTooltip: E,
            surrogateCodePoint: I,
            selectedItemClassName: g,
            getEmojiItemProps: h,
            isMediumSize: A,
            isLargeSize: p,
            pulseItemKey: _,
            allowAnimatedEmoji: N,
            setPulseItemKey: C,
            messageId: O,
            isBurstReaction: x,
            rowPosition: T,
            inNitroLockedSection: y,
        } = e,
        [j, R] = r.useState(""),
        b = (0, m.bG)([eM.Ay], () => eM.Ay.useReducedMotion),
        L = (0, m.bG)([S.Ay], () => S.Ay.getDisambiguatedEmojiContext(o), [o]),
        v = r.useRef(null),
        { emoji: M, size: D, isDisabled: P, columnIndex: w } = t;
    function U() {
        d.current || f.current || c(t);
    }
    let { ref: G, tabIndex: k, onFocus: F, ...J } = h(w, a) ?? {},
        V =
            j !== `${w}:${a}`
                ? (0, l.jsx)(nP, {
                      ref: G,
                      emoji: M,
                      isFavorite: L.isFavoriteEmojiWithoutFetchingLatest(M),
                      isLargeSize: p,
                      isMediumSize: A,
                      isInspected: s,
                      isDisabled: P,
                      showPulse: _ === i,
                      allowAnimatedEmoji: N,
                      onFocus: F ?? U,
                      onMouseMove: U,
                      onClick: (e) => {
                          if (
                              null != v.current &&
                              null != T &&
                              null != O &&
                              !e.shiftKey &&
                              null != M.name &&
                              x &&
                              !b &&
                              N
                          ) {
                              let e = null == M.id ? e8.Ay.convertNameToSurrogate(M.name) : M.name,
                                  t = v.current.getBoundingClientRect();
                              ((t.x = T.x + (w + 1) * D), R(`${w}:${a}`), (0, nS.h)(O, e, M.id, t));
                          }
                          !(function (e) {
                              if ((e.stopPropagation(), d.current || f.current)) return;
                              let n = e.altKey;
                              (n &&
                                  !S.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(M) &&
                                  C(i),
                                  (0, es.sF)(es._2.FAVORITE_EMOJI_TOOLTIP),
                                  u(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n }));
                          })(e);
                      },
                      onContextMenu: function (e) {
                          (0, nO.L3)(e, async () => {
                              let { default: e } = await Promise.all([
                                  n.e("638221"),
                                  n.e("73500"),
                                  n.e("377766"),
                                  n.e("496715"),
                                  n.e("293697"),
                                  n.e("904774"),
                                  n.e("446132"),
                              ]).then(n.bind(n, 233503));
                              return (t) => (0, l.jsx)(e, { ...t });
                          });
                      },
                      tabIndex: k,
                      columnIndex: w,
                      rowIndex: a,
                      size: D,
                      surrogateCodePoint: I,
                      selectedItemClassName: g,
                      inNitroLockedSection: y,
                  })
                : null;
    return (0, r.createElement)(
        "li",
        { ...J, key: i, ref: v },
        E
            ? (0, l.jsx)(eP.m, {
                  text: et.intl.formatToPlainString(et.t.glqNsf, { key: (0, nx.isMac)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: V,
              })
            : V,
    );
}
let nU = (e) => {
    let {
            emojiDescriptors: t,
            emojiSize: i,
            onSelect: s,
            onSelectSoundmoji: a,
            onInspect: c,
            surrogateCodePoint: u,
            getEmojiItemProps: d,
            getEmojiRowProps: m,
            isScrolling: f,
            isUsingKeyboardNavigation: E,
            rowIndex: I,
            allowAnimatedEmoji: g,
            showEmojiFavoriteTooltip: h,
            channelGuildId: A,
            category: p,
            selectedItemClassName: _,
            channelId: N,
            messageId: C,
            isBurstReaction: O,
            inNitroLockedSection: S,
            handleScrollUpOnSectionCollapse: x,
        } = e,
        T = n(619508),
        y = n(404828),
        j = n(600003),
        R = n(318121),
        b = n(443336),
        L = n(258901),
        v = n(135974),
        M = n(8013),
        P = (0, W.Ay)(),
        U = w.Om.getState(),
        [G, k] = r.useState(U.inspectedExpressionPosition),
        [F, V] = (0, nd.A)(null, 300),
        K = r.useRef(null);
    (r.useEffect(
        () =>
            w.Om.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => k(e),
            ),
        [],
    ),
        r.useEffect(() => {
            nN.bW.loadIfNecessary();
        }, []));
    let B = i === e1.as.LARGE,
        H = i === e1.as.MEDIUM;
    function Z(e) {
        let t = `${e.rowIndex}c${e.columnIndex}`;
        switch (e.type) {
            case te.EXPAND_OR_COLLAPSE_EMOJIS: {
                let { visibleRowIndex: n, columnIndex: i } = e,
                    a = G.rowIndex === n && G.columnIndex === i,
                    u = e.sectionCollapsedToThreeRows
                        ? a
                            ? (0, J.M)(P)
                                ? L
                                : M
                            : (0, J.M)(P)
                              ? T
                              : y
                        : a
                          ? (0, J.M)(P)
                              ? b
                              : v
                          : (0, J.M)(P)
                            ? j
                            : R,
                    m = et.intl.string(e.sectionCollapsedToThreeRows ? et.t.NZI2Zk : et.t["/K2RDH"]);
                return (function () {
                    let {
                            onMouseEnter: n,
                            onMouseLeave: i,
                            handleSelect: s,
                            icon: a,
                            ariaLabel: u,
                            shouldShowRoundHighlight: m,
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { visibleRowIndex: g, columnIndex: h } = e,
                        { ref: A, tabIndex: p, onFocus: N, ...C } = d(h, I) ?? {},
                        O = G.rowIndex === g && G.columnIndex === h;
                    function S() {
                        f.current || E.current || c(e);
                    }
                    return (0, r.createElement)(
                        "li",
                        { ...C, key: t },
                        (0, l.jsx)(nu.vN, {
                            children: (0, l.jsx)("button", {
                                "aria-label": u,
                                ref: A,
                                className: o()(nD._X, {
                                    [nD.lG]: B,
                                    [nD.Lh]: H,
                                    [nD.Bx]: O && !m,
                                    [_ ?? ""]: O,
                                    [nD.TV]: F === t,
                                }),
                                onFocus: N ?? S,
                                onMouseOver: S,
                                onMouseEnter: n,
                                onMouseLeave: i,
                                onClick: s,
                                tabIndex: p,
                                children: a,
                            }),
                        }),
                    );
                })({
                    handleSelect: function (t) {
                        e.type !== te.EXPAND_OR_COLLAPSE_EMOJIS ||
                            (t.stopPropagation(),
                            f.current ||
                                E.current ||
                                (s(e, { isFinalSelection: !0, toggleFavorite: !1 }),
                                (0, nm.G)(e.guildId),
                                e.sectionCollapsedToThreeRows || x(),
                                eo.default.track(Q.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                    collapsed: e.sectionCollapsedToThreeRows,
                                    guild_id: e.guildId,
                                })));
                    },
                    icon: (0, l.jsx)("img", { className: nD.Kk, src: u, alt: "" }),
                    ariaLabel: m,
                    shouldShowRoundHighlight: !0,
                });
            }
            case te.EMOJI: {
                let { columnIndex: n, visibleRowIndex: i } = e,
                    r = G.rowIndex === i && G.columnIndex === n;
                return (0, l.jsx)(
                    nw,
                    {
                        rowIndex: I,
                        descriptor: e,
                        emojiItemKey: t,
                        isInspected: r,
                        isScrolling: f,
                        isUsingKeyboardNavigation: E,
                        surrogateCodePoint: u,
                        allowAnimatedEmoji: g,
                        selectedItemClassName: _,
                        onSelect: s,
                        onInspect: c,
                        channelGuildId: A,
                        getEmojiItemProps: d,
                        isMediumSize: H,
                        isLargeSize: B,
                        pulseItemKey: F,
                        setPulseItemKey: V,
                        showEmojiFavoriteTooltip: h,
                        messageId: C,
                        isBurstReaction: O,
                        rowPosition: K?.current?.getBoundingClientRect(),
                        inNitroLockedSection: S,
                    },
                    t,
                );
            }
            case te.SOUNDMOJI:
                return;
        }
    }
    function Y(e) {
        return (0, l.jsx)("ul", {
            ...m(I),
            className: o()(nD.ND, { [nD.HO]: B, [nD.X$]: H }),
            ref: K,
            children: e.map(Z),
        });
    }
    if (p === e1.R2.SOUNDMOJI)
        return (0, l.jsx)("ul", {
            className: nD.ND,
            ref: K,
            children: (0, l.jsx)(n_, { channelId: N, onSelectSoundmoji: a }),
        });
    if (p !== e1.s.TOP_GUILD_EMOJI) return Y(t);
    let z = t.filter(
            (e) =>
                e.subCategory === e1.tm.TOP_GUILD_EMOJI ||
                (e.subCategory === e1.tm.NEWLY_ADDED_EMOJI &&
                    e.emoji.type === e4.i.GUILD &&
                    !D.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
        ),
        q = t.filter(
            (e) =>
                e.subCategory === e1.tm.NEWLY_ADDED_EMOJI &&
                e.emoji.type === e4.i.GUILD &&
                D.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id),
        );
    return 0 === q.length
        ? Y(t)
        : (0, l.jsxs)("div", {
              className: nD.Ng,
              children: [
                  (0, l.jsx)("div", { className: o()(nD.V6, { [nD.$3]: 0 === z.length }), children: Y(z) }),
                  (0, l.jsxs)("div", {
                      className: nD.bc,
                      children: [
                          (0, l.jsx)("div", {
                              className: o()(nD.eE, { [nD.eM]: 1 === q.length, [nD.Wk]: z.length > 0 }),
                              children: Y(q),
                          }),
                          (0, l.jsxs)("div", {
                              className: o()(nD.lD, { [nD.EI]: B, [nD.qU]: H, [nD.Wk]: z.length > 0 }),
                              children: [
                                  (0, l.jsx)(nC.A, { foreground: nD.rI }),
                                  (0, l.jsx)(X.E, {
                                      variant: "text-xs/semibold",
                                      color: "text-overlay-light",
                                      children: et.intl.string(et.t.y2b7CA),
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
};
var nG = n(618723);
let nk = (0, eu.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    nF = (0, eu.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    nJ = (0, eu.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    nV = (0, eu.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    nK = (0, eu.xI)(E.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    nB = (0, eu.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    nH = (0, eu.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    nX = r.memo(function (e) {
        let t,
            n,
            {
                diversitySurrogate: i,
                emojiGrid: s,
                emojiListRef: a,
                emojiSize: c,
                onEmojiSelect: u,
                onSelectSoundmoji: d,
                setUpsellConfigs: f,
                sectionDescriptors: E,
                rowCountBySection: I,
                collapsedSections: g,
                setCollapsedSections: h,
                getEmojiItemProps: p,
                getEmojiRowProps: N,
                rowCount: O,
                isUsingKeyboardNavigation: S,
                channelGuildId: x,
                channelId: T,
                messageId: y,
                isBurstReaction: j,
                listHeaderClassName: R,
            } = e,
            b = r.useRef(!1),
            L = w.Om.useStore((e) => e.activeCategoryIndex),
            v = (0, U.RQ)((e) => e.searchQuery),
            M = el.Sf.useSetting(),
            D = (0, m.bG)([ea.default], () => ea.default.getCurrentUser()),
            P = (0, ec.ki)(D),
            { location: F } = (0, A.p)(),
            { analyticsLocations: J } = (0, C.Ay)(),
            [K, B] = r.useState(0),
            [H, W] = r.useState(!1),
            {
                listPadding: Z,
                renderRow: Y,
                renderSection: z,
                renderSectionHeader: q,
                renderSectionFooter: $,
                sectionMarginBottom: ee,
                sectionHeaderHeight: en,
                sectionFooterHeight: ei,
            } = (function (e) {
                let {
                        collapsedSections: t,
                        diversitySurrogate: n,
                        emojiGrid: i,
                        emojiSize: s,
                        onEmojiSelect: a,
                        onSelectSoundmoji: c,
                        searchQuery: u,
                        sectionDescriptors: d,
                        setCollapsedSections: f,
                        getEmojiItemProps: E,
                        getEmojiRowProps: I,
                        isScrolling: g,
                        isUsingKeyboardNavigation: h,
                        allowAnimatedEmoji: p,
                        channelGuildId: _,
                        channelId: N,
                        messageId: C,
                        isBurstReaction: O,
                        listHeaderClassName: S,
                        activeSectionIndex: x,
                        emojiListRef: T,
                    } = e,
                    y = (0, A.p)(),
                    j = r.useRef(Q.An1),
                    R = r.useMemo(() => ("" !== n ? tU.A.convert.toCodePoint(n) : ""), [n]),
                    b = r.useCallback(
                        (e) => {
                            let t = d[e],
                                n = d[e + 1];
                            return e >= d.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked;
                        },
                        [d],
                    ),
                    L = r.useCallback(
                        (e) => {
                            if (e >= d.length - 1) return !1;
                            let t = d[e],
                                n = d[e + 1];
                            return !t.isNitroLocked && n.isNitroLocked;
                        },
                        [d],
                    ),
                    v = r.useCallback(
                        function (e) {
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                i = new Set(t),
                                s = t.has(e);
                            (s ? i.delete(e) : i.add(e),
                                null != n &&
                                    eo.default.track(Q.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                        location: y.location,
                                        tab: eA.kx.EMOJI,
                                        collapsed: !s,
                                        guild_id: n.id,
                                    }),
                                e === e1.R2.SOUNDMOJI &&
                                    eo.default.track(Q.HAw.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, { collapsed: !s }),
                                f(i));
                        },
                        [y, t, f],
                    ),
                    M = r.useCallback((e) => {
                        let { columnIndex: t, visibleRowIndex: n } = e,
                            i = e.type === te.SOUNDMOJI ? null : e.type === te.EMOJI ? (0, eE.N)(e.emoji) : e.name;
                        (j.current !== Q.An1 && window.cancelAnimationFrame(j.current),
                            (j.current = window.requestAnimationFrame(() => {
                                (w.Om.setInspectedExpressionPosition(t, n, G.t.MOUSE_EVENT),
                                    w.Om.setSearchPlaceholder(i),
                                    (j.current = Q.An1));
                            })));
                    }, []),
                    D = (0, m.bG)([es.HP], () => es.HP.hasHotspot(es._2.FAVORITE_EMOJI_TOOLTIP), []),
                    P = r.useMemo(
                        () =>
                            eb().memoize((e, t) => {
                                let n = i[e],
                                    r = d[t.sectionIndex];
                                return (0, l.jsx)(
                                    nU,
                                    {
                                        emojiDescriptors: n,
                                        emojiSize: s,
                                        surrogateCodePoint: R,
                                        onInspect: M,
                                        onSelect: a,
                                        onSelectSoundmoji: c,
                                        getEmojiItemProps: E,
                                        getEmojiRowProps: I,
                                        isScrolling: g,
                                        isUsingKeyboardNavigation: h,
                                        rowIndex: e,
                                        allowAnimatedEmoji: p,
                                        showEmojiFavoriteTooltip: D,
                                        channelGuildId: _,
                                        category: r.sectionId,
                                        selectedItemClassName: nG.__invalid_selectedItem,
                                        channelId: N,
                                        messageId: C,
                                        isBurstReaction: O,
                                        inNitroLockedSection: r.isNitroLocked,
                                        handleScrollUpOnSectionCollapse: function () {
                                            T.current?.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                                        },
                                    },
                                    e,
                                );
                            }),
                        [i, d, s, R, M, a, c, E, I, g, h, p, D, _, N, C, O, T],
                    );
                r.useEffect(() => () => P.cache?.clear?.(), [P]);
                let k = r.useMemo(
                        () =>
                            eb().memoize((e) => {
                                let n = d[e];
                                if (null == n) return;
                                let { guild: i, categoryId: s, type: r, sectionId: a } = n;
                                if (r === e1.s.SEARCH_RESULTS) return;
                                let c =
                                        r === e1.s.GUILD
                                            ? null != i
                                                ? (0, l.jsx)(e3.A, { guild: i, height: 16, width: 16 })
                                                : null
                                            : null != s
                                              ? (0, l.jsx)(e2, { categoryId: s, height: 16, width: 16, size: "custom" })
                                              : null,
                                    u = i?.name;
                                null != s && (u = (0, ed.Nu)(s, i?.name));
                                let m = x === e,
                                    f = n.isNitroLocked,
                                    E = f && !m,
                                    I = f && m,
                                    g =
                                        r === e1.s.SOUNDMOJI
                                            ? (0, l.jsx)(V.D, {
                                                  className: nG.f3,
                                                  onClick: () => {
                                                      ((0, U.U)(eA.kx.SOUNDBOARD),
                                                          eo.default.track(
                                                              Q.HAw.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK,
                                                          ));
                                                  },
                                                  children: et.intl.string(et.t.rUEjBe),
                                              })
                                            : void 0;
                                return (0, l.jsx)(
                                    ni.A,
                                    {
                                        className: o()(nG.wx, S, { [nG.RA]: E, [nG.sp]: I }),
                                        icon: c,
                                        isCollapsed: t.has(a),
                                        onClick: () => v(a, i),
                                        trailing: g,
                                        children: u,
                                    },
                                    a,
                                );
                            }),
                        [d, t, v, S, x],
                    ),
                    F = (0, e7.k0)(),
                    J = r.useCallback(
                        (e, n) => {
                            let i = d[e],
                                s = L(e),
                                r = b(e);
                            return (0, l.jsx)(
                                "div",
                                {
                                    role: "rowgroup",
                                    className: o()(nG.Wy, {
                                        [nG.YD]: e === d.length - 1,
                                        [nG.jl]: t.has(i.sectionId),
                                        [nG.cW]: i.isNitroLocked,
                                        [nG.T5]: s || r,
                                    }),
                                    children: n,
                                },
                                e,
                            );
                        },
                        [t, d, L, b],
                    ),
                    K = r.useCallback(
                        (e) =>
                            L(e)
                                ? F
                                    ? (0, l.jsx)(no.ap, {})
                                    : (0, l.jsx)(no.Ay, {})
                                : b(e)
                                  ? (0, l.jsx)("div", { className: nG.pQ })
                                  : null,
                        [L, b, F],
                    ),
                    B = r.useCallback((e) => (L(e) ? 41 : 33 * !!b(e)), [L, b]),
                    H = r.useCallback(
                        (e) => (e === d.length - 1 || t.has(d[e]?.sectionId) || L(e) || b(e) ? 0 : nB),
                        [t, d, L, b],
                    );
                return {
                    listPadding: r.useMemo(() => ["" !== u ? nV : nk, nF, nJ, 0], [u]),
                    renderRow: P,
                    renderSection: J,
                    renderSectionHeader: k,
                    renderSectionFooter: K,
                    sectionMarginBottom: H,
                    sectionHeaderHeight: r.useCallback((e) => (d[e].type === e1.s.SEARCH_RESULTS ? 0 : nK), [d]),
                    sectionFooterHeight: B,
                };
            })({
                collapsedSections: g,
                diversitySurrogate: i,
                emojiGrid: s,
                emojiSize: c,
                onEmojiSelect: u,
                onSelectSoundmoji: d,
                searchQuery: v,
                sectionDescriptors: E,
                setCollapsedSections: h,
                getEmojiItemProps: p,
                getEmojiRowProps: N,
                isScrolling: b,
                isUsingKeyboardNavigation: S,
                allowAnimatedEmoji: M,
                channelGuildId: x,
                channelId: T,
                messageId: y,
                isBurstReaction: j,
                listHeaderClassName: R,
                activeSectionIndex: K,
                emojiListRef: a,
            }),
            er = r.useCallback(
                (e) => {
                    let t = a.current?.getSectionDescriptors();
                    null == t ||
                        B(
                            Math.max(
                                t.findLastIndex((t) => t.offset.top <= e),
                                0,
                            ),
                        );
                },
                [a],
            );
        r.useLayoutEffect(() => {
            er(a.current?.getScrollerNode()?.scrollTop ?? 0);
        }, [a, er, E, I, v]);
        let eu = (0, k.Fk)({
            activeCategoryIndex: L,
            isScrolling: b,
            listRef: a,
            onActiveCategoryIndexChange: function (e) {
                "" === v && w.Om.setActiveCategoryIndex(e);
            },
            scrollOffset: 0,
            searchQuery: v,
            disableForSearch: !1,
        });
        (0, k.FV)({ searchQuery: v, activeCategoryIndex: L, listRef: a });
        let em = r.useCallback(
                (e) => {
                    (eu(e),
                        er(e),
                        nW({ emojiListRef: a, sectionDescriptors: E, scrollTop: e, searchQuery: v, setShowUpsell: W }));
                },
                [eu, er, a, E, v, W],
            ),
            ef = E.length > 0;
        (r.useEffect(() => {
            H &&
                (eo.default.track(Q.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: eT.e.EMOJI_PICKER_FLOATING_UPSELL,
                    location: F,
                    location_stack: J,
                }),
                (0, nl.sq)(Q.U7l.PREMIUM_UPSELL_VIEWED, J, () => (0, nr.uq)(eT.e.EMOJI_PICKER_FLOATING_UPSELL)));
        }, [F, J, H]),
            r.useEffect(() => {
                "" !== v && W(!1);
            }, [v]));
        let eI = r.useRef(null);
        return (
            r.useEffect(
                () => (
                    clearTimeout(eI.current),
                    (eI.current = setTimeout(() => {
                        (ef
                            ? t9.O.announce(et.intl.string(et.t.uZ4F2O), "polite")
                            : t9.O.announce(et.intl.string(et.t.IxxiKF), "assertive"),
                            (eI.current = null));
                    }, 200)),
                    () => {
                        clearTimeout(eI.current);
                    }
                ),
                [ef, v],
            ),
            (0, l.jsxs)("div", {
                className: nG.AD,
                children: [
                    ef
                        ? (0, l.jsx)(nt.A, {
                              role: "none presentation",
                              className: nG.p_,
                              listPadding: Z,
                              onScroll: em,
                              renderRow: Y,
                              renderSection: z,
                              renderSectionHeader: q,
                              renderSectionFooter: $,
                              rowCount: O,
                              rowCountBySection: I,
                              rowHeight: c + 2 * nH,
                              sectionHeaderHeight: en,
                              sectionMarginBottom: ee,
                              sectionFooterHeight: ei,
                              stickyHeaders: !0,
                              ref: a,
                          })
                        : (0, l.jsx)(ne.A, {
                              message: (0, l.jsx)(X.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: et.intl.string(et.t.IxxiKF),
                              }),
                              className: nG.BZ,
                          }),
                    P || t6.Fr
                        ? null
                        : (0, l.jsx)(na.d, {
                              showUpsell: H,
                              text:
                                  ((t = (0, ex.Dd)(eT.PremiumTypes.TIER_2)),
                                  et.intl.format(et.t.gMVjeS, {
                                      nitroTierName: t,
                                      onClick: () => {
                                          f({ type: tn.PREMIUM, emojiDescriptor: void 0 });
                                      },
                                  })),
                              button: ((n = (0, ns.qD)()), (0, ex.LE)(n, eT.pe.TIER_2) ?? et.intl.string(et.t.BmJkbd)),
                              buttonAnalyticsObject: { section: Q.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                              leadingAction: (0, l.jsx)(nc.l, {
                                  size: "sm",
                                  className: nG.ij,
                                  location: _.A.PREMIUM_WISHLIST_EMOJI_UPSELL,
                              }),
                          }),
                ],
            })
        );
    }),
    nW = eb().throttle(
        function (e) {
            let { emojiListRef: t, sectionDescriptors: n, scrollTop: i, searchQuery: s, setShowUpsell: l } = e;
            l(
                (0, nn.s)({ listRef: t, searchQuery: s, nitroLockedSectionStates: n, scrollTop: i })
                    .areOnlyNitroLockedSectionsVisible,
            );
        },
        300,
        { leading: !1, trailing: !0 },
    );
var nZ = n(506774),
    nY = n(28863),
    nz = n(277984),
    nq = n(404374),
    n$ = n(780964),
    nQ = n(766075),
    n0 = n(166403),
    n1 = n(506150);
let n2 = "premiumRetentionEmojiPickerNotice",
    n3 = nZ.w.get(n2),
    n5 = function (e) {
        let { closePopout: t, channel: n } = e,
            [i, s] = r.useState(!1),
            { subscription: a, hasFetchedSubscriptions: o } = (0, m.cf)([n0.A], () => ({
                subscription: n0.A.getPremiumSubscription(),
                hasFetchedSubscriptions: n0.A.hasFetchedSubscriptions(),
            }));
        if (
            (r.useEffect(() => {
                o || (0, nz.hP)();
            }, [o]),
            null == a || !(0, ex.PK)(a.status) || i)
        )
            return null;
        let c = a.status === Q.Dmq.PAST_DUE ? (0, ex.ji)(a).expiresDate : T()(a.currentPeriodStart).add(eT.ph),
            u = `${a.id}:${c.toISOString()}`;
        if (n3 === u) return null;
        let d =
            ex.Ay.getPremiumType(a.planId) === eT.PremiumTypes.TIER_0
                ? nq.k0.PREMIUM_TIER_0
                : ex.Ay.getPremiumType(a.planId) === eT.PremiumTypes.TIER_1
                  ? nq.k0.PREMIUM_TIER_1
                  : nq.k0.PREMIUM_TIER_2;
        return (0, l.jsxs)(X.E, {
            variant: "text-xs/medium",
            color: "text-default",
            className: n1.g$,
            children: [
                (0, l.jsx)(eN.t, { size: "md", className: n1.lu, color: d }),
                (0, l.jsxs)("div", {
                    className: n1.Xn,
                    children: [
                        (0, l.jsx)(X.E, {
                            variant: "text-xs/normal",
                            children: et.intl.format(et.t.bTMjiO, {
                                planName: ex.Ay.getTierDisplayNameByPlanId(a.planId),
                                endsAt: c.toDate(),
                            }),
                        }),
                        (0, l.jsx)("div", {
                            children: (0, l.jsx)(nY.Anchor, {
                                onClick: () => {
                                    ((0, ed.xf)(n), t(), (0, nQ.openUserSettings)(n$.X.NITRO_PANEL));
                                },
                                children: et.intl.string(et.t.W3aavh),
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(V.D, {
                    onClick: () => {
                        (nZ.w.set(n2, u), (n3 = u), s(!0));
                    },
                    children: (0, l.jsx)(K.P, { size: "md", color: "currentColor", className: n1.YF }),
                }),
            ],
        });
    };
var n4 = n(148361);
let n8 = (0, eu.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    n7 = (0, eu.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT);
function n6(e) {
    return e.stopPropagation();
}
function n9(e, t) {
    w.Om.setInspectedExpressionPosition(e, t, G.t.GRID_NAVIGATOR_EVENT);
}
let ie = u()(ed.bo, 200),
    it = u()(ed.Wi, 200),
    ii = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    is = r.memo(function (e) {
        let t,
            n,
            {
                pickerIntention: i,
                channel: s,
                guildId: a,
                closePopout: c,
                emojiSize: u = e1.as.MEDIUM,
                hasTabWrapper: E = !1,
                onSelectEmoji: x,
                onSelectSoundmoji: T,
                containerWidth: y,
                onNavigateAway: j,
                persistSearch: R,
                className: b,
                headerClassName: L,
                analyticsOverride: v = ii,
                searchProps: M = {},
                wrapper: F,
                shouldHidePickerActions: J = !1,
                messageId: V,
                renderHeader: K,
                listHeaderClassName: B,
                categoryListClassName: H,
                shouldShowSoundmojiInEmojiPicker: X = !1,
                showOnlyUnicode: W = !1,
                showAddEmojiButton: Z,
                canViewEmojiPacks: Y = !1,
                ref: q,
            } = e,
            { onFocus: $, onKeyDown: ee, autoFocus: en = !0, accessory: eu } = M,
            em = (0, m.bG)([er.Ay], () => (null != a ? er.Ay.getDefaultChannel(a) : null), [a]),
            [ef, eA] = r.useState(null),
            e_ = r.useRef(""),
            eN = (0, U.RQ)((e) => e.searchQuery),
            eC = r.useRef(null),
            eO = r.useRef(null),
            eS = r.useRef(null);
        null == s && null != em && (s = em);
        let ex = s?.getGuildId() ?? a ?? null,
            [eT, ey] = r.useState(!1),
            eR = r.useRef(null),
            eL = ea.default.getCurrentUser(),
            ev = (0, ec.ki)(eL),
            eM = eT && ev;
        r.useImperativeHandle(q, () => ({ onPickerOpen: e0 }));
        let { location: eD } = (0, A.p)(),
            { page: eP, section: ew, object: eU, openPopoutType: eG, popoutLocation: ek } = v,
            eF = r.useMemo(() => ({ ...eD, section: ew ?? Q.JJy.EMOJI_PICKER_POPOUT }), [eD, ew]),
            { analyticsLocations: eJ } = (0, C.Ay)(_.A.EMOJI_PICKER),
            { diversitySurrogate: eV } = (0, m.cf)([S.Ay], () => ({ diversitySurrogate: S.Ay.diversitySurrogate })),
            eK = (0, ed.sL)(eN, s, i, W),
            eB = null == eK ? 0 : eK.locked.length + eK.unlocked.length,
            eH = el.iM.useSetting(),
            eX = r.useMemo(() => new Set(eH), [eH]),
            eW = r.useCallback((e) => {
                el.iM.updateSetting(Array.from(e));
            }, []),
            eZ = (0, k.oV)({ gridWrapperRef: eC, containerWidth: y, listPaddingLeft: n7, listScrollbarWidth: 8 }),
            {
                rowCountBySection: eY,
                sectionDescriptors: ez,
                emojiGrid: eq,
                columnCounts: e$,
            } = (function (e) {
                let {
                        channel: t,
                        fallbackGuildId: n,
                        collapsedSections: i,
                        pickerIntention: s,
                        emojiSearchResults: l,
                        gridWidth: a,
                        emojiPaddingHorizontal: o,
                        emojiSpriteSize: c,
                        shouldShowSoundmojiInEmojiPicker: u,
                        showOnlyUnicode: d,
                    } = e,
                    f = (0, m.bG)([S.Ay], () => S.Ay.categories),
                    E = r.useMemo(() => (d ? e8.Ay.getCategories() : f), [f, d]),
                    I = (0, m.bG)([z.A], () => z.A.getGuild(t?.getGuildId()), [t]),
                    g = t?.getGuildId() ?? n,
                    h = (0, m.bG)([S.Ay], () => S.Ay.getDisambiguatedEmojiContext(g), [g]),
                    A = (0, ed.XI)(g),
                    p = (0, ed.Fj)(g),
                    _ = (0, ed.QZ)(g),
                    { topEmojis: N, newlyAddedEmojis: C } = (0, eg.A)(g, s),
                    O = (0, m.yK)([e9.Ay], () => e9.Ay.getFlattenedGuildIds(), []),
                    x = (0, m.bG)([S.Ay], () => S.Ay.expandedSectionsByGuildIds),
                    T = (0, m.bG)([ea.default], () => ea.default.getCurrentUser()),
                    y = (0, ec.ki)(T),
                    j = (0, e7.k0)(),
                    R = h.getGroupedCustomEmoji(),
                    b = (0, e6.Ym)({ location: "useEmojiGrid" });
                return r.useMemo(() => {
                    let e = [],
                        n = [],
                        r = [],
                        d = [],
                        m = 0,
                        f = 0;
                    if (null != h && null != a) {
                        let h = Math.floor(a / (c + 2 * o)),
                            T = 3 * h;
                        function g(l, a) {
                            let o = new Map(),
                                u = i.has(a.sectionId),
                                [E, I] = eb().partition(l, (e) => {
                                    let n = eE.Ay.isEmojiDisabled({ emoji: e, channel: t, intention: s });
                                    return (o.set(e, n), !n);
                                }),
                                g = E.concat(I),
                                A = a.guild,
                                p = g.length > T && null != A && a.isNitroLocked,
                                _ = p && !x.has(A.id);
                            _ && g.splice(T - 1);
                            let O = Math.ceil((p ? g.length + 1 : g.length) / h),
                                S = [];
                            for (let e = 0; e < O; e++) {
                                let t = e * h,
                                    n = t + h,
                                    i = g
                                        .slice(t, n)
                                        .map((e, t) => ({
                                            type: 0,
                                            emoji: e,
                                            size: c,
                                            isDisabled: o.get(e),
                                            rowIndex: f,
                                            columnIndex: t,
                                            visibleRowIndex: m,
                                            category: a.type,
                                            subCategory:
                                                a.sectionId === e1.s.TOP_GUILD_EMOJI
                                                    ? (0, ed.DA)(N, C, e.id ?? e.uniqueName ?? e.name)
                                                    : e1.tm.NONE,
                                        }));
                                if ((S.push(i), !u)) {
                                    if (p && e === O - 1) {
                                        let t = S[e];
                                        t.push({
                                            type: 1,
                                            guildId: A.id,
                                            name: et.intl.string(et.t.NZI2Zk),
                                            size: c,
                                            rowIndex: e,
                                            columnIndex: t.length,
                                            visibleRowIndex: m,
                                            sectionCollapsedToThreeRows: _,
                                        });
                                    }
                                    (d.push(i.length), r.push(i), m++);
                                }
                                f++;
                            }
                            let y = { ...a, count: l.length };
                            (n.push(y), e.push(u ? 0 : O));
                        }
                        if (null != l)
                            (0 !== l.unlocked.length &&
                                g(l.unlocked, {
                                    type: e1.s.SEARCH_RESULTS,
                                    sectionId: e1.s.SEARCH_RESULTS,
                                    count: l.unlocked.length,
                                    isNitroLocked: !1,
                                }),
                                0 !== l.locked.length &&
                                    g(l.locked, {
                                        type: e1.s.PREMIUM_UPSELL,
                                        categoryId: e1.R2.PREMIUM_UPSELL,
                                        sectionId: e1.s.PREMIUM_UPSELL,
                                        count: l.locked.length,
                                        isNitroLocked: !y,
                                    }));
                        else {
                            if (b && u) {
                                let t = [{ type: 2, rowIndex: f, columnIndex: 0, visibleRowIndex: m }];
                                n.push({
                                    type: e1.s.SOUNDMOJI,
                                    categoryId: e1.R2.SOUNDMOJI,
                                    sectionId: "soundmoji",
                                    count: t.length,
                                    isNitroLocked: !1,
                                });
                                let s = i.has(e1.R2.SOUNDMOJI);
                                (!s && (d.push(t.length), r.push(t), m++), e.push(+!s), f++);
                            }
                            for (let e of E)
                                if (e === e1.R2.CUSTOM) {
                                    function S(n) {
                                        let i = R.get(n);
                                        if (null == i) return;
                                        let l = i.filter(
                                            (e) =>
                                                !tt.includes(
                                                    eE.Ay.getEmojiUnavailableReason({
                                                        emoji: e,
                                                        channel: t ?? er.Ay.getDefaultChannel(n),
                                                        intention: s,
                                                    }),
                                                ),
                                        );
                                        if (0 === l.length) return;
                                        let r = z.A.getGuild(n),
                                            a =
                                                j ||
                                                (!y &&
                                                    eE.Ay.isEmojiCategoryNitroLocked({
                                                        categoryEmojis: l,
                                                        channel: t,
                                                        intention: s,
                                                    }));
                                        g(l, {
                                            categoryId: e,
                                            guild: r,
                                            type: e1.s.GUILD,
                                            sectionId: null != r ? r.id : (0, e5.A)(),
                                            count: l.length,
                                            isNitroLocked: a,
                                        });
                                    }
                                    if ((null != I && S(I.id), (0, eh.isExternalEmojiAllowedForIntention)(s)))
                                        for (let e of O) (null == I || I.id !== e) && S(e);
                                } else if (e === e1.R2.TOP_GUILD_EMOJI) {
                                    if (null != I) {
                                        let { allEmojis: t } = (0, eI.W)({ topEmojis: N, newlyAddedEmojis: C });
                                        t.length > 0 &&
                                            g(t, {
                                                categoryId: e,
                                                guild: z.A.getGuild(I.id),
                                                type: e1.s.TOP_GUILD_EMOJI,
                                                sectionId: e1.s.TOP_GUILD_EMOJI,
                                                count: t.length,
                                                isNitroLocked: !1,
                                            });
                                    }
                                } else if (e === e1.R2.RECENT) {
                                    let n = (s === eh.EmojiIntention.REACTION ? _ : p).filter(
                                        (e) => !eE.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }),
                                    );
                                    g(n, {
                                        categoryId: e,
                                        type: e1.s.RECENT,
                                        sectionId: e1.s.RECENT,
                                        count: n.length,
                                        isNitroLocked: !1,
                                    });
                                } else if (e === e1.R2.FAVORITES) {
                                    let n = A.filter(
                                        (e) => !eE.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }),
                                    );
                                    0 !== n.length &&
                                        g(n, {
                                            categoryId: e,
                                            type: e1.s.FAVORITES,
                                            sectionId: e1.s.FAVORITES,
                                            count: n.length,
                                            isNitroLocked: !1,
                                        });
                                } else {
                                    let t = e8.Ay.getByCategory(e);
                                    null != t &&
                                        g(t, {
                                            categoryId: e,
                                            type: e1.s.UNICODE,
                                            sectionId: e,
                                            count: t.length,
                                            isNitroLocked: !1,
                                        });
                                }
                        }
                    }
                    return { columnCounts: d, emojiGrid: r, rowCountBySection: e, sectionDescriptors: n };
                }, [h, a, c, o, l, i, R, x, t, s, N, C, y, E, I, O, _, p, A, j, b, u]);
            })({
                gridWidth: eZ,
                fallbackGuildId: ex,
                channel: s,
                pickerIntention: i,
                emojiSearchResults: eK,
                collapsedSections: eX,
                emojiPaddingHorizontal: n8,
                emojiSpriteSize: u,
                shouldShowSoundmojiInEmojiPicker: X,
                showOnlyUnicode: W,
            }),
            { newlyAddedEmojis: eQ } = (0, eg.A)(ex, i);
        ((t = r.useRef({ intention: i, isBurstReaction: eT, analyticsObject: eU })),
            r.useEffect(() => {
                t.current.intention === eh.EmojiIntention.REACTION && ep(t.current);
            }, []));
        let e0 = r.useCallback(() => {
                let e = eQ.length > 0 ? eQ[0].id : null;
                ((0, P.uV)(ex, e), ep({ intention: i, isBurstReaction: eT, analyticsObject: eU }));
            }, [eQ, ex, i, eT, eU]),
            e2 = (function (e) {
                let {
                        pickerIntention: t,
                        selectedChannel: n,
                        fallbackGuildId: i,
                        onSelectEmoji: s,
                        setUpsellConfigs: l,
                        emojiSelectAnalytics: a,
                        trackEmojiFavorited: o,
                    } = e,
                    c = (0, m.bG)([S.Ay], () => S.Ay.getDisambiguatedEmojiContext(n?.getGuildId() ?? i), [i, n]);
                return r.useCallback(
                    (e, i) => {
                        if (0 === e.type) {
                            let { emoji: r } = e;
                            if (null == r) return;
                            let u = eE.Ay.getEmojiUnavailableReason({ emoji: r, channel: n, intention: t });
                            if (i.toggleFavorite)
                                return void (c.isFavoriteEmojiWithoutFetchingLatest(r) || null != u
                                    ? (0, g.Sw)(r)
                                    : (o?.(e), (0, g.V4)(r)));
                            if (u !== eh.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) {
                                if (u === eh.EmojiDisabledReasons.PREMIUM_LOCKED) {
                                    (a?.(e, u), l({ type: 0, emojiDescriptor: e }));
                                    return;
                                }
                                if (u === eh.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED && r.type === e4.i.GUILD) {
                                    (a?.(e, u), l({ type: 1, guildId: r.guildId, emojiId: r.id }));
                                    return;
                                }
                                u !== eh.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE &&
                                    (a?.(e), s({ emoji: r, willClose: i.isFinalSelection, isBurst: i.isBurst }));
                            }
                        }
                    },
                    [n, t, s, l, c, a, o],
                );
            })({
                pickerIntention: i,
                selectedChannel: s,
                fallbackGuildId: ex,
                closePopout: c,
                onSelectEmoji: x,
                setUpsellConfigs: eA,
                emojiSelectAnalytics: (e, t) => {
                    "" !== eN
                        ? (0, ed.Wf)({
                              emoji: e.emoji,
                              location: { ...eF, object: Q.ZSU.EMOJI },
                              searchQuery: eN,
                              isLocked: null != t,
                              intention: i,
                              messageId: V,
                          })
                        : (0, ed._7)({
                              emoji: e.emoji,
                              location: { ...eF, object: eU ?? Q.ZSU.EMOJI, ...(null != eP && { page: eP }) },
                              pickerIntention: i,
                              category: e.category,
                              subCategory: e.subCategory,
                              position: e.columnIndex + 1,
                              newlyAddedHighlight:
                                  e.subCategory === e1.tm.NEWLY_ADDED_EMOJI && D.isNewerThanLastSeen(ex, e.emoji.id),
                              isBurstReaction: eT,
                              messageId: V,
                              lockedReason: t,
                              visibleRowIndex: e.visibleRowIndex,
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, ed.C5)({ emoji: e.emoji, location: { ...eF, object: Q.ZSU.EMOJI } });
                },
            }),
            e3 = r.useCallback(() => {
                (c(), j?.());
            }, [c, j]),
            {
                getItemProps: ti,
                getRowProps: ts,
                gridContainerProps: tl,
                handleGridContainerKeyDown: tr,
                isUsingKeyboardNavigation: ta,
            } = (function (e) {
                let {
                        analyticsLocation: t,
                        pickerIntention: n,
                        columnCounts: i,
                        onSelectEmoji: s,
                        emojiGrid: l,
                        emojiList: a,
                        channelGuildId: o,
                        isBurstReaction: c,
                    } = e,
                    u = (0, m.bG)([S.Ay], () => S.Ay.getDisambiguatedEmojiContext(o), [o]),
                    f = r.useCallback(
                        (e, i) => {
                            if (e.type === te.EMOJI) {
                                if (null != e.emoji && i.altKey)
                                    return void (u.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                        ? (0, g.Sw)(e.emoji)
                                        : ((0, ed.C5)({ emoji: e.emoji, location: { ...t, object: Q.ZSU.EMOJI } }),
                                          (0, g.V4)(e.emoji)));
                                let l = {
                                    page: null != o ? Q.liQ.GUILD_CHANNEL : Q.liQ.DM_CHANNEL,
                                    section: Q.JJy.EMOJI_PICKER_POPOUT,
                                    object: Q.ZSU.EMOJI,
                                };
                                (c &&
                                    (l = {
                                        page: null != o ? Q.liQ.GUILD_CHANNEL : Q.liQ.DM_CHANNEL,
                                        section: Q.JJy.EMOJI_PICKER_POPOUT,
                                        object: Q.ZSU.EMOJI,
                                    }),
                                    (0, ed._7)({
                                        emoji: e.emoji,
                                        location: l,
                                        pickerIntention: n,
                                        category: e.category,
                                        subCategory: e.subCategory,
                                        newlyAddedHighlight:
                                            e.subCategory === e1.tm.NEWLY_ADDED_EMOJI &&
                                            D.isNewerThanLastSeen(o, e.emoji.id),
                                    }),
                                    s({ emoji: e.emoji, willClose: !i.shiftKey, isBurst: c }));
                            }
                        },
                        [s, o, n, u, t, c],
                    ),
                    {
                        gridDispatch: E,
                        getItemProps: I,
                        getRowProps: h,
                        gridContainerProps: A,
                        handleGridContainerKeyDown: p,
                        isUsingKeyboardNavigation: _,
                    } = (0, k.Ff)({
                        columnCounts: i,
                        gridNavigatorId: e1.lq,
                        itemGrid: l,
                        itemList: a,
                        onGridNavigatorItemSelect: f,
                        onGridNavigatorPositionChange: n9,
                    });
                return (
                    r.useEffect(
                        () =>
                            w.Om.subscribe(
                                (e) => e.inspectedExpressionPosition,
                                (e) => {
                                    if (null == e) return;
                                    let { columnIndex: t, rowIndex: n, source: i } = e;
                                    i !== G.t.GRID_NAVIGATOR_EVENT && E({ type: d.n.SET_FOCUSED_POSITION, x: t, y: n });
                                },
                            ),
                        [E],
                    ),
                    {
                        getItemProps: I,
                        getRowProps: h,
                        gridContainerProps: A,
                        handleGridContainerKeyDown: p,
                        isUsingKeyboardNavigation: _,
                    }
                );
            })({
                pickerIntention: i,
                analyticsLocation: eF,
                columnCounts: e$,
                onSelectEmoji: x,
                emojiGrid: eq,
                emojiList: eO,
                channelGuildId: ex,
                isBurstReaction: eM,
            });
        (((e, t) => {
            let [n, i] = r.useState(null);
            (r.useEffect(() => {
                null != n && (t.current?.scrollToSectionTop(n), i(null));
            }, [t, n]),
                r.useEffect(() => {
                    i(w.Om.getState().activeCategoryIndex);
                }, [e]));
        })(y, eO),
            r.useLayoutEffect(() => {
                en && eS.current?.focus();
            }, [y, eV, eS, en]),
            r.useEffect(() => {
                R || (0, U.Ri)("");
            }, [R]),
            r.useEffect(
                () => (
                    eo.default.track(Q.HAw.OPEN_POPOUT, {
                        type: eG ?? "Emoji Picker",
                        guild_id: ex,
                        location: ek,
                        ...(0, N.dI)(s),
                    }),
                    () => {
                        (ie.cancel(), it.cancel());
                    }
                ),
                [eG, ex, ek, s],
            ),
            (0, p.Ay)(() => ((0, ed.V$)({ intention: i, location: eF }), (e_.current = eN), w.Om.resetStoreState)),
            r.useEffect(() => () => (0, es.sF)(es._2.FAVORITE_EMOJI_TOOLTIP), []),
            r.useLayoutEffect(() => {
                let { columnIndex: e, rowIndex: t } = w.Om.getState().inspectedExpressionPosition;
                eq[t]?.[e] == null && 0 !== e && w.Om.setInspectedExpressionPosition(0, 0);
            }, [eq]),
            r.useEffect(() => {
                if (("" === e_.current && "" !== eN && (0, ed.EG)(eF, i), "" !== eN && e_.current !== eN)) {
                    let e = w.Om.getAnalyticsId();
                    0 === eB
                        ? ie({ location: eF, searchQuery: eN, intention: i, loadId: e })
                        : it({
                              totalResults: eB,
                              numEmojiLocked: eK?.locked.length ?? 0,
                              location: eF,
                              searchQuery: eN,
                              intention: i,
                              loadId: e,
                          });
                }
                e_.current = eN;
            }, [eN, eF, eB, eK, i]));
        let to = F ?? (E ? "div" : I.l),
            tc = null != eZ;
        ef?.type === tn.PREMIUM
            ? (n = (0, l.jsx)(n4.default, {
                  onUpsellClicked: e3,
                  emojiDescriptor: ef.emojiDescriptor,
                  pickerIntention: i,
                  analyticsLocation: eF,
                  onClose: () => eA(null),
                  channel: s,
              }))
            : ef?.type === tn.ROLE_SUBSCRIPTION &&
              (n = (0, l.jsx)(ei, { onClose: () => eA(null), guildId: ef.guildId, emojiId: ef.emojiId }));
        let tu = (0, l.jsx)(t1, {
                channel: s,
                pickerIntention: i,
                emojiListRef: eO,
                onKeyDown: (e) => {
                    (tr?.(e), ee?.(e));
                },
                searchBarRef: eS,
                onFocus: $,
                autoFocus: en,
                accessory: eu,
                headerClassName: L,
                diversitySurrogate: eV,
                isBurstReaction: eT,
                onBurstReactionToggle: function () {
                    (ey(!eT), eS.current?.focus());
                },
                burstToggleRef: eR,
                renderHeader: K,
                showAddEmojiButton: Z,
                closePopout: c,
            }),
            td = [];
        S.Ay.hasFavoriteEmojis(ex) || td.push(f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let tm = (0, l.jsx)(h.A, {
            ...eF,
            children: (0, l.jsxs)(to, {
                id: e1.Do,
                "aria-labelledby": E ? e1.k1 : void 0,
                role: E ? "tabpanel" : void 0,
                className: o()(t0.iE, { [t0.r6]: E, [t0.cB]: eM }),
                children: [
                    E ? null : tu,
                    (0, l.jsxs)("div", {
                        className: o()(t0.Fb, b),
                        onScroll: n6,
                        children: [
                            E ? tu : null,
                            (0, l.jsxs)("div", {
                                className: t0.uK,
                                ref: eC,
                                children: [
                                    (0, l.jsx)(n5, { channel: s, closePopout: c }),
                                    (0, l.jsx)(O.Ay, {
                                        contentTypes: td,
                                        children: (e) => {
                                            let { visibleContent: t, markAsDismissed: n } = e;
                                            if (t === f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                                return (0, l.jsx)(tC, { markAsDismissed: () => n(t_.i.UNKNOWN) });
                                        },
                                    }),
                                    J
                                        ? null
                                        : (0, l.jsx)("div", {
                                              className: t0.Iy,
                                              id: e1.lq,
                                              ...tl,
                                              children: tc
                                                  ? (0, l.jsx)(nX, {
                                                        collapsedSections: eX,
                                                        diversitySurrogate: eV,
                                                        emojiGrid: eq,
                                                        emojiListRef: eO,
                                                        emojiSize: u,
                                                        getEmojiItemProps: ti,
                                                        getEmojiRowProps: ts,
                                                        gridWidth: eZ,
                                                        isUsingKeyboardNavigation: ta,
                                                        onEmojiSelect: function (e, t) {
                                                            e2(e, { ...t, isBurst: eM });
                                                        },
                                                        onSelectSoundmoji: T,
                                                        setUpsellConfigs: eA,
                                                        rowCount: eq.length,
                                                        rowCountBySection: eY,
                                                        sectionDescriptors: ez,
                                                        setCollapsedSections: eW,
                                                        channelGuildId: ex,
                                                        channelId: s?.id,
                                                        messageId: V,
                                                        isBurstReaction: eM,
                                                        listHeaderClassName: B,
                                                    })
                                                  : null,
                                          }),
                                ],
                            }),
                            (0, l.jsx)(t7, {
                                emojiGrid: eq,
                                className: t0.qV,
                                guildId: ex,
                                pickerIntention: i,
                                channel: s,
                            }),
                            n,
                            i === eh.EmojiIntention.REACTION
                                ? (0, l.jsx)(ej, {
                                      targetElementRef: eR,
                                      shouldShow: eT && !ev,
                                      onDismiss: () => ey(!1),
                                  })
                                : null,
                        ],
                    }),
                    J
                        ? null
                        : (0, l.jsx)(tp, {
                              className: o()(t0.jv, H),
                              emojiListRef: eO,
                              sectionDescriptors: ez,
                              intention: i,
                              channel: s,
                              fallbackGuildId: ex,
                              shouldShowSoundmojiInEmojiPicker: X,
                              showOnlyUnicode: W,
                              canViewEmojiPacks: Y,
                          }),
                ],
            }),
        });
        return (0, l.jsx)(C.f5, { value: eJ, children: tm });
    });
