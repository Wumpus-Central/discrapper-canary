(n.d(t, { A: () => ih }), n(321073));
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
    x = n(379848),
    O = n(236285),
    S = n(331322),
    j = n(866665),
    T = n(408278),
    y = n(477155),
    R = n(403581),
    b = n(661531),
    v = n(297264),
    L = n(62010),
    M = n(182159),
    D = n(834730),
    P = n(320448),
    w = n(499373),
    U = n(565645),
    k = n(732447),
    G = n(105292),
    F = n(126904);
let J = r.memo(function (e) {
    let { pack: t, onAddPack: n } = e,
        i = r.useId(),
        s = G.intl.string(k.default.Tvdb5N),
        a = r.useMemo(() => t.emojis.filter((e) => e.available), [t.emojis]);
    return (0, l.jsxs)("section", {
        "aria-labelledby": i,
        className: F.nM,
        children: [
            (0, l.jsxs)(S.B, {
                align: "center",
                direction: "horizontal",
                gap: 4,
                justify: "space-between",
                children: [
                    (0, l.jsxs)(S.B, {
                        align: "center",
                        className: F.DD,
                        direction: "horizontal",
                        gap: 4,
                        children: [
                            (0, l.jsx)(v.D, { className: F.UU, id: i, variant: "text-xs/bold", children: t.name }),
                            (0, l.jsx)(D.E, {
                                color: "text-subtle",
                                variant: "text-xs/medium",
                                children: G.intl.format(k.default.UA8cNe, { count: a.length }),
                            }),
                            (0, l.jsx)(P._, { color: "currentColor", size: "xs" }),
                        ],
                    }),
                    (0, l.jsx)(j.m, {
                        text: s,
                        children: (0, l.jsx)(T.K, {
                            "aria-label": s,
                            icon: w.T,
                            onClick: () => n(t),
                            size: "sm",
                            variant: "secondary",
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: F.gm,
                role: "group",
                "aria-label": t.name,
                children: a.map((e) =>
                    (0, l.jsx)(U.A, { animated: e.animated, className: F.Zg, emojiId: e.id, emojiName: e.name }, e.id),
                ),
            }),
        ],
    });
});
var V = n(429800);
function K(e) {
    let { onBack: t } = e,
        n = G.intl.string(k.default.Nwj3fK),
        i = r.useRef(null),
        s = (0, m.bG)([M.A], () => M.A.getPacks());
    r.useLayoutEffect(() => {
        i.current?.focus();
    }, []);
    let a = r.useCallback((e) => {}, []);
    return (0, l.jsxs)("div", {
        className: V.kL,
        children: [
            (0, l.jsx)("div", { "aria-hidden": !0, className: V.Tp }),
            (0, l.jsx)("div", {
                className: V.wx,
                children: (0, l.jsxs)(S.B, {
                    align: "center",
                    direction: "horizontal",
                    gap: 10,
                    children: [
                        (0, l.jsx)(j.m, {
                            position: "right",
                            text: n,
                            children: (0, l.jsx)(T.K, {
                                "aria-label": n,
                                buttonRef: i,
                                icon: y.r,
                                onClick: t,
                                size: "sm",
                                variant: "icon-only",
                            }),
                        }),
                        (0, l.jsxs)(S.B, {
                            align: "center",
                            direction: "horizontal",
                            gap: 4,
                            children: [
                                (0, l.jsx)(R.t, { color: b.A.colors.TEXT_DEFAULT, size: "xs" }),
                                (0, l.jsxs)(S.B, {
                                    align: "center",
                                    direction: "horizontal",
                                    gap: 8,
                                    children: [
                                        (0, l.jsx)(v.D, {
                                            variant: "heading-md/semibold",
                                            children: G.intl.string(k.default["0+5+Oy"]),
                                        }),
                                        (0, l.jsx)(L.E, { type: "beta", variant: "primary" }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, l.jsx)("div", {
                className: V.p_,
                children: s.map((e, t) =>
                    (0, l.jsxs)(
                        r.Fragment,
                        {
                            children: [
                                t > 0 ? (0, l.jsx)("hr", { className: V.yF }) : null,
                                (0, l.jsx)(J, { pack: e, onAddPack: a }),
                            ],
                        },
                        e.id,
                    ),
                ),
            }),
        ],
    });
}
var B = n(536637),
    H = n.n(B),
    X = n(73153),
    W = n(935208);
let z = { lastSeenNewlyAddedEmojiIds: {} },
    Z = z,
    Y = {};
function q() {
    for (let e in Y) Z.lastSeenNewlyAddedEmojiIds[e] = Y[e];
}
class $ extends m.Ay.PersistedStore {
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
        Z = e ?? z;
    }
    getState() {
        return Z;
    }
    getLastSeenEmojiByGuild(e) {
        return Z.lastSeenNewlyAddedEmojiIds[e];
    }
    isNewerThanLastSeen(e, t) {
        if (null == e || null == t) return !1;
        let n = this.getLastSeenEmojiByGuild(e);
        if (null == n || W.default.compare(t, n.id) > 0) return !0;
        {
            let e = H()(n.lastSeen);
            return H()().isBefore(e.add(2, "weeks")) && !n.acknowledged;
        }
    }
}
let Q = new $(X.h, {
    LOGOUT: function () {
        ((Z = z), (Y = {}));
    },
    NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = Y[t] ?? Z.lastSeenNewlyAddedEmojiIds[t];
        null == i || 0 > W.default.compare(i.id, n)
            ? (Y[t] = { id: n, lastSeen: Date.now(), acknowledged: !0 })
            : (Y[t] = { ...i, acknowledged: !0 });
    },
    NEWLY_ADDED_EMOJI_SEEN_PENDING: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = Y[t] ?? Z.lastSeenNewlyAddedEmojiIds[t];
        (null == i || 0 > W.default.compare(i.id, n)) && (Y[t] = { id: n, lastSeen: Date.now(), acknowledged: !1 });
    },
    NEWLY_ADDED_EMOJI_SEEN_UPDATED: q,
    CLEAR_CACHES: function () {
        ((Z = z), q());
    },
    CONNECTION_CLOSED: q,
});
var ee = n(451731),
    et = n(850992),
    en = n(151271),
    ei = n(60587),
    es = n(887695),
    el = n(562708),
    er = n(462887),
    ea = n(939249),
    eo = n(789645),
    ec = n(696986),
    eu = n(736653),
    ed = n(139286),
    em = n(976860),
    ef = n(71393),
    eE = n(384684),
    eI = n(985242),
    eg = n(652215),
    eh = n(746080),
    eA = n(196404);
function ep(e) {
    let t,
        { onClose: i, guildId: s, emojiId: r } = e,
        a = ((t = (0, eu.Ay)()), (0, er.q)(t) ? n(454333) : n(674463)),
        { analyticsLocations: o } = (0, C.Ay)(_.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, ed.A)({
        type: el.ImpressionTypes.MODAL,
        name: el.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: { location_stack: o, emoji_guild_id: s, emoji_id: r ?? null },
    });
    let c = (0, m.bG)([ef.A], () => ef.A.getGuild(s)),
        u = (0, m.bG)([eE.A], () => null != s && eE.A.getUserSubscriptionRoles(s).size > 0),
        d = u ? G.intl.string(G.t.GoLM9z) : G.intl.formatToPlainString(G.t["h0u/Hi"], { serverName: c?.name }),
        f = u ? G.intl.string(G.t.PjZ7Db) : G.intl.string(G.t.p8FG1D);
    return (0, l.jsxs)("div", {
        className: eA.kL,
        children: [
            (0, l.jsx)("div", { className: eA.Tp }),
            (0, l.jsxs)("div", {
                className: eA.Qs,
                children: [
                    (0, l.jsx)(ea.D, {
                        className: eA.b,
                        "aria-label": G.intl.string(G.t.cpT0Cq),
                        onClick: i,
                        children: (0, l.jsx)(eo.P, {
                            size: "xs",
                            color: "currentColor",
                            "aria-label": G.intl.string(G.t.cpT0Cq),
                            className: eA.yP,
                        }),
                    }),
                    (0, l.jsx)("img", { alt: "", src: a, className: eA.Tn }),
                    (0, l.jsx)(ec.h, { size: 22 }),
                    (0, l.jsx)(v.D, {
                        color: "text-strong",
                        variant: "heading-lg/extrabold",
                        className: eA.wx,
                        children: G.intl.string(G.t.cBjkcx),
                    }),
                    (0, l.jsx)(ec.h, { size: 4 }),
                    (0, l.jsx)(D.E, {
                        color: "text-default",
                        variant: "text-md/normal",
                        className: eA.h_,
                        children: d,
                    }),
                    (0, l.jsx)(ec.h, { size: 24 }),
                    (0, l.jsx)(eI.A, {
                        text: f,
                        onClick: function () {
                            (0, em.pX)(eg.BVt.CHANNEL(s, eh.VV.ROLE_SUBSCRIPTIONS), { sourceLocationStack: o });
                        },
                    }),
                ],
            }),
        ],
    });
}
var e_ = n(450510),
    eN = n(885386),
    eC = n(808728),
    ex = n(287809),
    eO = n(174459),
    eS = n(474090),
    ej = n(240248),
    eT = n(822123),
    ey = n(734057),
    eR = n(309010),
    eb = n(690521),
    ev = n(818645),
    eL = n(316884),
    eM = n(307731),
    eD = n(698279);
function eP(e) {
    let { intention: t, containerWidth: n, rowSize: i, isBurstReaction: s, analyticsObject: l } = e,
        r = ey.A.getChannel(eR.Ay.getChannelId()),
        a = r?.getGuildId(),
        o =
            t === eM.EmojiIntention.REACTION
                ? O.Ay.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice()
                : O.Ay.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        c = null != r ? O.Ay.getDisambiguatedEmojiContext(r.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        u =
            t === eM.EmojiIntention.REACTION
                ? O.Ay.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems
                : O.Ay.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        d = o.slice(0, u),
        m = null != a ? O.Ay.getGuildEmoji(a) : [],
        f = O.Ay.getDisambiguatedEmojiContext(r?.getGuildId()).getCustomEmoji(),
        { topEmojis: E, newlyAddedEmojis: I } = (0, eL.b)({ guildId: r?.getGuildId(), pickerIntention: t }),
        { visibleTopEmojis: g, visibleNewlyAddedEmojis: h } = (0, ev.W)({
            topEmojis: E,
            newlyAddedEmojis: I,
            rowSize: i,
        });
    N.Ay.trackWithMetadata(
        t === eM.EmojiIntention.REACTION ? eg.HAw.REACTION_PICKER_OPENED : eg.HAw.EXPRESSION_PICKER_OPENED,
        {
            width: n,
            tab: eD.kx.EMOJI,
            badged: !1,
            num_expressions_favorites: c.length,
            num_animated_expressions_favorites: c.filter((e) => e?.animated).length,
            num_custom_expressions_favorites: c.filter(eb.Ay.isCustomEmoji).length,
            num_standard_expressions_favorites: c.filter((e) => null == e.id).length,
            num_expressions_frecent: d.length,
            num_animated_expressions_frecent: d.filter((e) => e?.animated).length,
            num_custom_expressions_frecent: d.filter(eb.Ay.isCustomEmoji).length,
            num_standard_expressions_frecent: d.filter((e) => null == e.id).length,
            num_current_guild_expressions: m.length,
            num_custom_expressions_total: f.size,
            num_expressions_top_server: g.length,
            num_animated_expressions_top_server: g.filter((e) => e.animated).length,
            num_expressions_newly_added: h.length,
            num_animated_expressions_newly_added: h.filter((e) => e.animated).length,
            ...(t === eM.EmojiIntention.REACTION && { is_burst: s }),
            ...(null != l && { location_object: l }),
        },
    );
}
var ew = n(206248),
    eU = n(724651),
    ek = n(732280),
    eG = n(783420),
    eF = n(158045),
    eJ = n(202541);
let eV = { object: eg.ZSU.BUTTON_CTA, section: eg.JJy.SUPER_REACTION_PICKER };
function eK(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: i } = e,
        s = G.intl.string(G.t.eikz43),
        r = (0, ek.V)(),
        a = (0, eU.O)(),
        o = r?.subscriptionTrial,
        c = null != o || null != a,
        u = o?.skuId ?? eJ.pe.TIER_2,
        d = c
            ? null != a
                ? G.intl.formatToPlainString(G.t.bkQ4bH, { percent: a.discount.amount })
                : (0, eF.FY)({ intervalType: o?.interval, intervalCount: o?.intervalCount })
            : G.intl.string(G.t.sEAnVH);
    return (0, l.jsx)(eG.A, {
        subscriptionTier: u,
        premiumModalAnalyticsLocation: eV,
        onSubscribeModalClose: (e) => {
            e && i();
        },
        children: (e) => {
            let { onClick: r } = e;
            return (0, l.jsx)(ew.H, {
                targetElementRef: t,
                shouldShow: n,
                onRequestClose: i,
                position: "bottom",
                assetUrl: "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
                disableMediaViewer: !0,
                badge: c ? { type: "free_trial", variant: "expressive" } : void 0,
                title: G.intl.string(G.t.N4SCJ0),
                body: s,
                action: { text: d, variant: "expressive", icon: R.t, onClick: r },
            });
        },
    });
}
var eB = n(435558),
    eH = n.n(eB),
    eX = n(837381),
    eW = n(460905),
    ez = n(775602),
    eZ = n(713517),
    eY = n(938612);
function eq(e) {
    let { onClick: t } = e,
        n = G.intl.string(k.default["3D0GLv"]);
    return (0, l.jsx)("div", {
        className: eY.n,
        children: (0, l.jsx)(j.m, {
            ariaHidden: !0,
            position: "right",
            text: n,
            children: (0, l.jsx)(ea.D, {
                "aria-label": n,
                className: eY.x,
                onClick: t,
                children: (0, l.jsx)(w.T, { size: "md", color: "currentColor" }),
            }),
        }),
    });
}
var e$ = n(88218),
    eQ = n(407698),
    e0 = n(941971),
    e1 = n(531685),
    e2 = n(406810),
    e3 = n(27232),
    e5 = n(369606),
    e4 = n(413249),
    e8 = n(141060),
    e6 = n(687966),
    e7 = n(115979),
    e9 = n(524501),
    te = n(926268),
    tt = n(138134),
    tn = n(7807),
    ti = n(732139);
let ts = r.memo(function (e) {
    let { categoryId: t, ...n } = e,
        i = (function (e) {
            switch (e) {
                case ti.R2.RECENT:
                    return e2.ClockIcon;
                case ti.R2.FAVORITES:
                    return e3.StarIcon;
                case ti.R2.TOP_GUILD_EMOJI:
                    return e5.TrophyIcon;
                case ti.R2.PEOPLE:
                    return eW.n;
                case ti.R2.NATURE:
                    return e4.p;
                case ti.R2.FOOD:
                    return e8.i;
                case ti.R2.ACTIVITY:
                    return e6.GameControllerIcon;
                case ti.R2.TRAVEL:
                    return e7.h;
                case ti.R2.OBJECTS:
                    return e9.D;
                case ti.R2.SYMBOLS:
                    return te.HeartIcon;
                case ti.R2.FLAGS:
                    return tt.FlagIcon;
                case ti.R2.PREMIUM_UPSELL:
                    return R.t;
                case ti.R2.SOUNDMOJI:
                    return tn.J;
                default:
                    return;
            }
        })(t);
    return null == i ? null : (0, l.jsx)(i, { color: "currentColor", ...n });
});
var tl = n(724511),
    tr = n(132500),
    ta = n(770335),
    to = n(7584),
    tc = n(526292),
    tu = n(926972),
    td = n(711014),
    tm =
        (((i = {})[(i.EMOJI = 0)] = "EMOJI"),
        (i[(i.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"),
        (i[(i.SOUNDMOJI = 2)] = "SOUNDMOJI"),
        i);
let tf = [eM.EmojiDisabledReasons.DISALLOW_EXTERNAL, eM.EmojiDisabledReasons.DISALLOW_CUSTOM];
var tE = (((s = {})[(s.PREMIUM = 0)] = "PREMIUM"), (s[(s.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), s),
    tI = n(342379);
let tg = "expression-guild-",
    { itemIdForIndex: th } = (0, e$.J)(tg),
    tA = (0, ej.xI)(E.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    tp = (0, ej.xI)(E.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    t_ = (0, ej.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    tN = (0, ej.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    tC = (0, ej.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    tx = (0, ej.xI)(tI.__invalid_unicodeCategoryShortcutHeight),
    tO = (0, ej.xI)(E.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    tS = (0, ej.xI)(E.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    tj = t_ + tp + 2 * tC,
    tT = tA + tp,
    ty = tT + (tO + 2 * tS),
    tR = t_ + tN + 2 * tC;
function tb(e) {
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
        { isHoveringOrFocusing: f } = (0, eZ.A)(m),
        E = (0, eX.rm)(th(n)),
        I = a.type === ti.s.GUILD ? null : a.id,
        g = t === n,
        h = a.type === ti.s.GUILD ? a.guild : null,
        A = (0, l.jsxs)(ea.D, {
            innerRef: m,
            ...E,
            "aria-label": (0, eT.wt)(a, h),
            className: o()({
                [tI.ZG]: null != h,
                [tI.Bj]: null == h,
                [tI.s6]: null == h && g,
                [tI.xg]: a.type === ti.s.RECENT,
            }),
            onClick: () => {
                (null != h &&
                    eO.default.track(eg.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: i?.location,
                        tab: eD.kx.EMOJI,
                        guild_id: h.id,
                    }),
                    c(n));
            },
            children: [
                (0, l.jsx)("div", {
                    className: tI.a$,
                    children: (0, l.jsx)(e0.A, { hovered: f, selected: g, size: "small" }),
                }),
                null != h
                    ? (0, l.jsx)(tl.A, { guild: h, isSelected: g, shouldAnimate: !d && u, isLocked: a.isNitroLocked })
                    : null,
                null == h && null != I
                    ? (0, l.jsx)(ts, { categoryId: I, className: tI.Yl, height: t_, width: t_, size: "custom" })
                    : null,
            ],
        }),
        p = s[n + 1],
        _ = null != p && a.type === ti.s.GUILD && p.type !== ti.s.GUILD;
    return null != h
        ? (0, l.jsxs)(r.Fragment, {
              children: [
                  (0, l.jsx)(eQ.Q, { guild: h, children: A }),
                  _ ? (0, l.jsx)("hr", { className: tI.ny }, "separator") : null,
              ],
          })
        : A;
}
let tv = (e) => {
    let {
            className: t,
            emojiListRef: n,
            sectionDescriptors: i,
            intention: s,
            channel: a,
            fallbackGuildId: c,
            shouldShowSoundmojiInEmojiPicker: u = !1,
            showOnlyUnicode: d = !1,
            onViewEmojiPacks: f,
        } = e,
        E = et.Om.useStore((e) => e.activeCategoryIndex),
        I = (function (e) {
            let { emojiListRef: t } = e,
                n = (0, en.RQ)((e) => e.searchQuery),
                i = r.useCallback((e) => t.current?.scrollToSectionTop(e), [t]);
            return r.useCallback(
                (e) => {
                    "" !== n ? ((0, en.Ri)(""), et.Om.setActiveCategoryIndex(e)) : i(e);
                },
                [i, n],
            );
        })({ sectionDescriptors: i, emojiListRef: n }),
        g = (0, A.p)(),
        h = (0, eT.ss)(s, a, { guildId: a?.guild_id ?? c, shouldShowSoundmojiInEmojiPicker: u }),
        p = r.useMemo(() => (d ? (0, eT.CQ)() : h), [h, d]),
        _ = r.useRef(null),
        N = (0, m.bG)([e1.A], () => e1.A.isFocused()),
        C = (0, m.bG)([ez.Ay], () => ez.Ay.useReducedMotion, []),
        x = r.useMemo(
            () =>
                eH().memoize(
                    (e, t) => {
                        let n = p[t];
                        if (null != n)
                            return (0, l.jsx)(
                                tb,
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
        O = r.useMemo(() => [8, 8, 0, 8], []),
        S = r.useCallback(
            (e, t) => {
                let n = p[t];
                if (n.type === ti.s.RECENT) return tj;
                if (n.type === ti.s.GUILD) {
                    let e = p[t + 1];
                    return null != e && e.type !== ti.s.GUILD ? ty : tT;
                }
                return tR;
            },
            [p],
        ),
        {
            nonUnicodeCategoryCount: j,
            firstUnicodeCategoryIndex: T,
            firstUnicodeCategoryOffsetTop: y,
            rowCountBySection: R,
        } = r.useMemo(() => {
            let e = 0,
                t = 0,
                n = 0,
                i = 0;
            p.forEach((s) => {
                s.type === ti.s.GUILD
                    ? ((t += 1), (n += 1))
                    : s.type === ti.s.UNICODE
                      ? (i += 1)
                      : ((e += 1), (t += 1));
            });
            let s = tj + t * tT + ty;
            return {
                nonUnicodeCategoryCount: t,
                firstUnicodeCategoryIndex: t,
                firstUnicodeCategoryOffsetTop: s,
                rowCountBySection: [e, n, i],
            };
        }, [p]),
        [b, v] = r.useState(!0);
    r.useLayoutEffect(() => {
        v(j >= 7);
    }, [j]);
    let L = r.useCallback(
            (e) => {
                let t = _.current?.getListDimensions();
                null == t || (e + t.height - tO >= y ? v(!1) : v(!0));
            },
            [y],
        ),
        M = r.useCallback(
            (e) => {
                (e(T), _.current?.scrollTo(y));
            },
            [y, T],
        ),
        D = r.useCallback(
            (e, t) => {
                let n = p[e];
                if (null == n) return 0;
                let i = b ? tx : 0;
                if (n.type === ti.s.RECENT) return t ? 0 : tN;
                if (n.type === ti.s.GUILD) {
                    let n = p[e + 1];
                    return null != n && n.type !== ti.s.GUILD ? (t ? tO + -2 * tS + tp + i : tp) : t ? i : tp;
                }
                return t ? tp + i : 2 * tp;
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
        w = b ? "shortcut" : "hiddenshortcut";
    return (0, l.jsx)(e$.A, {
        categoryListRef: _,
        expressionsListRef: n,
        className: t,
        store: et.Om,
        categories: p,
        listPadding: O,
        onScroll: L,
        renderCategoryListItem: x,
        renderSection: P,
        rowCount: p.length,
        categoryHeight: S,
        getScrollOffsetForIndex: D,
        rowCountBySection: R,
        navId: "emoji-picker-categories",
        itemIdPrefix: tg,
        emojiPacksHeader: null != f ? (0, l.jsx)(eq, { onClick: f }) : null,
        children: (e) =>
            j >= 7 &&
            (0, l.jsx)(
                ea.D,
                {
                    "aria-hidden": !b,
                    "aria-label": G.intl.string(G.t.dT0ctw),
                    className: o()(tI.KB, { [tI.h_]: !b }),
                    tabIndex: b ? 0 : -1,
                    onClick: () => M(e),
                    children: (0, l.jsx)(eW.n, { size: "custom", color: "currentColor", height: t_, width: t_ }),
                },
                w,
            ),
    });
};
var tL = n(49999),
    tM = n(860197);
let tD = function (e) {
    let { markAsDismissed: t } = e;
    return (0, l.jsxs)(D.E, {
        variant: "text-xs/medium",
        color: "text-default",
        className: tM.iE,
        children: [
            (0, l.jsx)(te.HeartIcon, { size: "md", color: "currentColor", className: tM.Kk }),
            (0, l.jsx)("div", {
                className: tM.Qs,
                children: (0, l.jsx)(D.E, { variant: "text-xs/normal", children: G.intl.string(G.t.xdRf69) }),
            }),
            (0, l.jsx)(ea.D, {
                onClick: () => t(tL.i.UNKNOWN),
                children: (0, l.jsx)(eo.P, { size: "md", color: "currentColor", className: tM.VN }),
            }),
        ],
    });
};
var tP = n(308941),
    tw = n(717421),
    tU = n(343032),
    tk = n(683063),
    tG = n(131607),
    tF = n(748798);
let tJ = { tension: 750, mass: 2.5, friction: 70 };
function tV(e) {
    let { checked: t, onClick: n, buttonRef: i } = e,
        s = (0, m.bG)([ez.Ay], () => ez.Ay.useReducedMotion),
        a = ex.default.getCurrentUser(),
        c = null != a && !(0, eF.TW)(a),
        u = c ? [] : [f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP],
        [d, E] = (0, tG.kn)(u),
        [I, g] = r.useState(!1),
        [h, A] = (0, tw.z)(() => ({})),
        p = (0, tP.animated)(tU.i);
    r.useEffect(() => {
        let e = d === f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (E(tL.i.DISMISS), setTimeout(() => g(e), 200));
    }, [d, E]);
    let _ = I ? G.intl.string(G.t["Osi/uy"]) : t && !c ? G.intl.string(G.t["5cRA/b"]) : G.intl.string(G.t.buV4av),
        N = I ? G.intl.string(G.t.ORK94p) : void 0;
    return (0, l.jsx)(tk.u, {
        position: "top",
        title: N,
        body: _,
        asset: (0, l.jsx)(R.t, { size: "md", color: "currentColor" }),
        assetSize: 20,
        forceOpen: I,
        children: (0, l.jsx)(ea.D, {
            innerRef: i,
            "aria-label": _,
            "aria-pressed": t,
            onClick: function () {
                (A({ from: { rotate: t ? "360deg" : "0deg" }, to: { rotate: t ? "0deg" : "360deg" }, config: tJ }),
                    n?.(),
                    g(!1));
            },
            focusProps: { enabled: !1 },
            className: o()(tF.Pf, { [tF.wM]: t }),
            children: (0, l.jsx)(p, {
                style: s ? void 0 : h,
                size: "custom",
                width: 20,
                height: 20,
                color: t ? "white" : "currentColor",
                className: tF.Kk,
            }),
        }),
    });
}
var tK = n(821609),
    tB = n(644508),
    tH = n(824832),
    tX = n(267102),
    tW = n(242812);
function tz(e) {
    let { channel: t, closePopout: n } = e,
        i = r.useRef(null),
        s = r.useRef(0),
        [a, o] = r.useState(!1),
        [c, u] = r.useState(!1),
        d = (0, tX.Us)() === eg.BRT.OVERLAY,
        m = c || a,
        f = r.useCallback(
            async (e, i, l) => {
                (u(!0),
                    n(),
                    await (0, tB.f)({
                        userImage: { data: e, file: i, image: l },
                        guildId: t?.guild_id ?? null,
                        analyticsLocation: {
                            section: eg.JJy.EXPRESSION_PICKER,
                            page: t?.guild_id != null ? eg.liQ.GUILD_CHANNEL : eg.liQ.DM_CHANNEL,
                        },
                    }),
                    (s.current += 1),
                    u(!1));
            },
            [t, n],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(j.m, {
                asContainer: !0,
                text: d ? G.intl.string(G.t.RMbedC) : null,
                children: (0, l.jsx)(tK.$, {
                    text: G.intl.string(G.t.iMJO37),
                    variant: "secondary",
                    onClick: function () {
                        i.current?.activateUploadDialogue();
                    },
                    disabled: m || d,
                }),
            }),
            (0, l.jsx)("div", {
                className: tW.F,
                children: (0, l.jsx)(tH.Ay, { ref: i, onChange: f, setLoading: o, disabled: m }, s.current),
            }),
        ],
    });
}
n(667532);
var tZ = n(833272),
    tY = n(82495),
    tq = n(260762),
    t$ = n(915089),
    tQ = n(650583),
    t0 = n(683829);
let t1 = (0, t$.Ld)(),
    t2 = tZ.A.convert.fromCodePoint("1f44f"),
    t3 = (0, ej.xI)(E.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
function t5(e) {
    switch (tZ.A.convert.toCodePoint(e)) {
        case "1f3fb":
            return G.intl.string(G.t["BVK5b/"]);
        case "1f3fc":
            return G.intl.string(G.t.xJWOK8);
        case "1f3fd":
            return G.intl.string(G.t["MB+T5g"]);
        case "1f3fe":
            return G.intl.string(G.t.MODud2);
        case "1f3ff":
            return G.intl.string(G.t["0uzqsc"]);
        default:
            return G.intl.string(G.t.bGN1ow);
    }
}
let t4 = (e) => {
    let { fade: t, surrogate: n, onClick: i, delay: s, index: r } = e,
        a = (0, eX.rm)(`item-${r}`),
        o = eb.Ay.getURL(t2 + n),
        c = (0, tw.z)({ opacity: 1, from: { opacity: +!t }, delay: s }, "animate-always");
    return (0, l.jsx)(ea.D, {
        ...a,
        role: "option",
        "aria-selected": 0 === r,
        onClick: () => i(n),
        className: t0.B6,
        children: (0, l.jsx)(tP.animated.div, {
            "aria-label": t5(n),
            className: t0.g4,
            style: { backgroundImage: `url("${o}")`, ...c },
        }),
    });
};
function t8(e) {
    let { id: t, selectedSurrogate: n, onClick: i } = e,
        s = (0, tq.A)("diversity"),
        a = (0, tw.z)({ height: (t3 + 14) * (to.W$.length + 1), from: { height: t3 + 14 }, config: { duration: 125 } }),
        o = r.useRef(s);
    r.useEffect(() => {
        o.current.focusFirstVisibleItem();
    }, []);
    let c = ["", ...to.W$];
    return (
        eH().remove(c, (e) => e === n),
        c.unshift(n),
        (0, l.jsx)(eX.hD, {
            navigator: s,
            children: (0, l.jsx)(eX.PR, {
                children: (e) => {
                    let { ref: n, ...s } = e;
                    return (0, l.jsx)(tP.animated.div, {
                        ...s,
                        id: t,
                        ref: n,
                        className: t0.J6,
                        style: a,
                        role: "listbox",
                        children: c.map((e, t) =>
                            (0, l.jsx)(t4, { index: t, fade: 0 !== t, delay: 20 * t, surrogate: e, onClick: i }, t),
                        ),
                    });
                },
            }),
        })
    );
}
let t6 = function (e) {
    let { searchBarRef: t, selectedSurrogate: n, className: i } = e,
        s = eb.Ay.getURL(t2 + n),
        [a, c] = r.useState(!1),
        u = (0, tY.A)(null, () => c(!1)),
        d = r.useRef(null);
    return (0, l.jsxs)("div", {
        ref: u,
        className: o()(t0.fx, i),
        children: [
            (0, l.jsx)(ea.D, {
                innerRef: d,
                className: t0.Dj,
                onClick: function () {
                    c(!0);
                },
                "aria-label": G.intl.formatToPlainString(G.t["2SfnMp"], { skinTone: t5(n) }),
                "aria-haspopup": !0,
                "aria-expanded": a,
                "aria-controls": t1,
                tabIndex: a ? -1 : 0,
                children: (0, l.jsx)("div", { className: t0.g4, style: { backgroundImage: `url("${s}")` } }),
            }),
            a
                ? (0, l.jsx)("div", {
                      onKeyDown: function (e) {
                          e.key === tQ.dh.ESCAPE
                              ? (e.stopPropagation(), c(!1), null != d.current && d.current.focus())
                              : "Tab" === e.key && c(!1);
                      },
                      children: (0, l.jsx)(t8, {
                          id: t1,
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
var t7 = n(462180),
    t9 = n(602034),
    ne = n(683438);
let nt = r.memo(function (e) {
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
        d = (0, en.RQ)((e) => e.searchQuery),
        [m, f, E] = et.Om.useStore((e) => [e.inspectedExpressionPosition, e.searchPlaceholder, e.hasInteracted], t7.x),
        I = r.useCallback(
            (e) => {
                (et.Om.setActiveCategoryIndex("" === e ? 0 : -1),
                    et.Om.setInspectedExpressionPosition(0, 0),
                    et.Om.setSearchPlaceholder(null),
                    (0, en.Ri)(e),
                    t.current?.scrollTo(0));
            },
            [t],
        ),
        g = r.useCallback(() => {
            I("");
        }, [I]);
    return (
        r.useImperativeHandle(c, () => ({ focus: () => u.current?.focus() })),
        (0, l.jsx)(ne.I, {
            autoFocus: a,
            query: d,
            ref: u,
            placeholder: f ?? o,
            onClear: g,
            onKeyDown: function (e) {
                switch (e.key) {
                    case tQ.dh.ARROW_LEFT:
                    case tQ.dh.ARROW_RIGHT:
                    case tQ.dh.ARROW_UP:
                    case tQ.dh.ARROW_DOWN:
                        document.activeElement !== e.target && e.preventDefault();
                }
                i(e);
            },
            onFocus: s,
            onChange: I,
            inputProps: {
                role: "combobox",
                "aria-label": G.intl.string(G.t.tCauZX),
                "aria-haspopup": "grid",
                "aria-autocomplete": "list",
                "aria-controls": n,
                "aria-expanded": !0,
                ...(E ? { "aria-activedescendant": (0, t9.Aq)(n, m.columnIndex, m.rowIndex) } : void 0),
            },
        })
    );
});
var nn = n(381575);
let ni = function (e) {
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
                (0, l.jsx)(nt, {
                    emojiListRef: r,
                    gridNavigatorId: ti.lq,
                    onKeyDown: a,
                    ref: d,
                    onFocus: c,
                    autoFocus: u,
                    defaultSearchPlaceholder: (0, eT.wT)(i, f),
                }),
                i === eM.EmojiIntention.REACTION ? (0, l.jsx)(tV, { checked: f, onClick: E, buttonRef: I }) : null,
                n ?? (0, l.jsx)(t6, { searchBarRef: d, className: nn.fx, selectedSurrogate: m }),
                i !== eM.EmojiIntention.NO_CUSTOM_EMOJI && h ? (0, l.jsx)(tz, { channel: t, closePopout: A }) : null,
            ],
        });
    return (0, l.jsx)("div", { className: o()(nn.wx, s), children: null != g ? g(p) : p });
};
var ns = n(182922),
    nl = n(363195),
    nr = n(486020),
    na = n(977566);
function no(e) {
    return null != e && "animated" in e;
}
let nc = r.memo(function (e) {
    let t,
        i,
        { className: s, emojiGrid: a, guildId: o, pickerIntention: c, channel: u } = e,
        d = et.Om.useStore((e) => e.inspectedExpressionPosition),
        f = r.useMemo(() => {
            let { rowIndex: e, columnIndex: t } = d;
            return a[e]?.[t];
        }, [a, d]);
    switch (f?.type) {
        case tm.EMOJI:
            t = f?.emoji;
            break;
        case tm.EXPAND_OR_COLLAPSE_EMOJIS:
            t = { type: "EXPAND_OR_COLLAPSE_EMOJI", guildId: f?.guildId, allNamesString: f?.name };
            break;
        case tm.SOUNDMOJI:
        default:
            t = null;
    }
    let E = (0, m.bG)([ef.A], () => (null !== t && t.type === ta.i.GUILD ? ef.A.getGuild(t.guildId) : null), [t]),
        I = (0, m.bG)([e1.A], () => e1.A.isFocused()),
        g = (0, m.bG)([ez.Ay], () => ez.Ay.useReducedMotion, []),
        h = eN.Sf.useSetting(),
        A = (0, eT.O7)(o, no(t) ? t : null),
        p = (0, m.bG)([O.Ay], () => O.Ay.expandedSectionsByGuildIds),
        { newlyAddedEmojis: _ } = (0, eL.A)(o, c),
        N = f?.type === tm.EMOJI ? f.subCategory : ti.tm.NONE;
    if (
        (r.useEffect(() => {
            let e = Date.now();
            return () => {
                Date.now() - e >= 250 &&
                    no(t) &&
                    N !== ti.tm.NONE &&
                    (N === ti.tm.NEWLY_ADDED_EMOJI &&
                        null !== t &&
                        t.type === ta.i.GUILD &&
                        (0, ee.mz)(t.guildId, _[0].id),
                    null != d.source &&
                        (0, eT.yB)({
                            emoji: t,
                            subCategory: N,
                            position: f.columnIndex + 1,
                            newlyAddedHighlight: N === ti.tm.NEWLY_ADDED_EMOJI && Q.isNewerThanLastSeen(o, t.id),
                        }));
            };
        }),
        null == t)
    )
        return null;
    let C = (function (e, t) {
            let { allowAnimatedEmoji: i, sectionsExpandedFromThreeRows: s, theme: r } = t;
            if (no(e)) {
                let t = null != e.id ? nr.Ay.getEmojiURL({ id: e.id, animated: i && e.animated, size: 28 }) : e.url;
                return "" === t
                    ? (0, l.jsx)(D.E, {
                          variant: "text-md/normal",
                          className: na.J_,
                          children: "surrogates" in e ? e.surrogates : null,
                      })
                    : (0, l.jsx)("img", { alt: (0, eb.N)(e) ?? "", src: t, className: na.Zg });
            }
            if ("EXPAND_OR_COLLAPSE_EMOJI" !== e.type) return null;
            {
                let t = n(619508),
                    i = n(404828),
                    a = n(600003),
                    o = n(318121);
                return s.has(e.guildId)
                    ? (0, l.jsx)("img", { className: na.Kk, src: (0, er.M)(r) ? a : o, alt: "" })
                    : (0, l.jsx)("img", { className: na.Kk, src: (0, er.M)(r) ? t : i, alt: "" });
            }
        })(t, { allowAnimatedEmoji: h, sectionsExpandedFromThreeRows: p, theme: nl.A.theme }),
        x =
            null != E
                ? (0, l.jsx)(tl.A, { className: na.__invalid_guildIcon, guild: E, shouldAnimate: !g && I })
                : null;
    i =
        "EXPAND_OR_COLLAPSE_EMOJI" === t.type
            ? p.has(t.guildId)
                ? G.intl.string(G.t["/K2RDH"])
                : G.intl.string(G.t.NZI2Zk)
            : (0, eb.N)(t);
    let S = (function (e) {
        let { inspectedEmoji: t, guild: n } = e,
            i = no(t);
        return null != n && i ? G.intl.format(G.t.KFW2aY, { guildName: n.name }) : null;
    })({ inspectedEmoji: t, channel: u, guildId: o, intention: c, guild: E });
    return (0, l.jsx)(ns.A, {
        className: s,
        graphicPrimary: C,
        graphicSecondary: x,
        titlePrimary: i,
        titleSecondary: S,
        isFavorite: A,
        emojiSubCategory: N,
    });
});
n(30146);
var nu = n(607399),
    nd = n(765178),
    nm = n(537652),
    nf = n(962125),
    nE = n(240864),
    nI = n(286509),
    ng = n(89366),
    nh = n(10392),
    nA = n(82498),
    np = n(202639),
    n_ = n(414872),
    nN = n(285373),
    nC = n(559106),
    nx = n(304072),
    nO = n(189551),
    nS = n(289873),
    nj = n(796774),
    nT = n(209932),
    ny = n(817232),
    nR = n(576705);
n(980504);
var nb = n(818348),
    nv = n(821425);
let nL = r.memo(function (e) {
    let t,
        n,
        i,
        s,
        { channelId: a, onSelectSoundmoji: o } = e,
        c = (0, m.bG)([nT.A], () => !nT.A.isFetching() && !nT.A.hasFetchedAllSounds(), []),
        u = (0, m.bG)([ey.A], () => ey.A.getChannel(a)),
        d =
            ((t = (0, m.bG)([ex.default], () => eF.Ay.canUseSoundboardEverywhere(ex.default.getCurrentUser()))),
            (n = (0, m.bG)([nT.A], () => nT.A.getSoundsForGuild("0"))),
            (i = (0, m.yK)([ef.A], () => ef.A.getGuildIds())),
            (s = r.useMemo(() => nR.A.can(nb.xB.USE_EXTERNAL_SOUNDS, u), [u])),
            r.useMemo(() => {
                let e = [];
                if (t && s) {
                    let t = i.flatMap((e) => nT.A.getSoundsForGuild(e)?.filter((e) => e.available) ?? []);
                    e.push(...eH().sampleSize(t, 4));
                } else if (u?.guild_id != null) {
                    let t = nT.A.getSoundsForGuild(u?.guild_id)?.filter((e) => e.available);
                    e.push(...eH().sampleSize(t, 4));
                }
                return (e.length < 4 && e.push(...eH().sampleSize(n ?? [], 4 - e.length)), e);
            }, [s, u?.guild_id, n, i, t]));
    return (r.useEffect(() => {
        (0, nj.E7)();
    }, [c]),
    0 === d.length)
        ? (0, l.jsx)(nS.y, {})
        : (0, l.jsx)("div", {
              className: nv.q,
              children: d.map((e, t) =>
                  (0, l.jsx)(
                      ny.Ay,
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
var nM = n(594061),
    nD = n(771104),
    nP = n(442433),
    nw = n(147421),
    nU = n(723702),
    nk = n(140735),
    nG = n(194261),
    nF = n(703413);
let nJ = (e) => {
    let { src: t, alt: n, size: i, "aria-label": s, className: a } = e,
        c = r.useRef(null),
        u = r.useRef(!1),
        d = u.current ? nF.S : nF.Y;
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
                          ((u.current = !0), c.current.classList.remove(nF.Y), c.current.classList.add(nF.S));
                  });
              },
    });
};
var nV = n(955388);
let nK = eH().memoize(
        (e) =>
            `${e * eM.EmojiSprites.NonDiversityPerRow}px ${e * Math.ceil(to.Ay.numNonDiversitySprites / eM.EmojiSprites.NonDiversityPerRow)}px`,
    ),
    nB = eH().memoize(
        (e) =>
            `${e * eM.EmojiSprites.DiversityPerRow}px ${e * Math.ceil(to.Ay.numDiversitySprites / eM.EmojiSprites.DiversityPerRow)}px`,
    ),
    nH = r.memo(function (e) {
        let { emoji: t, size: i, surrogateCodePoint: s, allowAnimatedEmoji: a, "aria-label": c, isLocked: u } = e,
            d = (() => {
                if (!t.useSpriteSheet) {
                    let e =
                        null == t.id
                            ? t.url
                            : nr.Ay.getEmojiURL({ id: t.id, animated: a && t.animated, size: eM.EMOJI_URL_BASE_SIZE });
                    return null != e
                        ? (0, l.jsx)(nJ, {
                              className: nV.N1,
                              "aria-label": c,
                              src: e,
                              size: i,
                              alt: (0, eb.N)(t) ?? "",
                          })
                        : null;
                }
                return (0, l.jsx)("div", {
                    className: o()(nV.xA, { [nV.N1]: u }),
                    style: (function (e, t, i) {
                        let s, l, r;
                        if (!e.useSpriteSheet) return;
                        let a = null != e.index ? e.index : 0;
                        e.hasDiversity
                            ? ((s = n(12303)(`./spritesheet-${t}-${i}.png.js`).default),
                              (l = nB(i)),
                              (r = eM.EmojiSprites.DiversityPerRow))
                            : ((s = n(145519)(`./spritesheet-emoji-${i}.png.js`).default),
                              (l = nK(i)),
                              (r = eM.EmojiSprites.NonDiversityPerRow));
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
                    children: (0, l.jsx)(nk.A, { children: c }),
                });
            })();
        return (0, l.jsxs)(r.Fragment, {
            children: [
                d,
                u
                    ? (0, l.jsx)("div", {
                          className: nV.iD,
                          children: (0, l.jsx)(nG.LockIcon, { size: "xs", color: "currentColor", className: nV.fi }),
                      })
                    : null,
            ],
        });
    });
var nX = n(537911);
function nW(e) {
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
        N = (0, m.bG)([ef.A], () => (n.type === ta.i.GUILD ? ef.A.getGuild(n.guildId) : void 0), [n]);
    return (0, l.jsx)(nC.vN, {
        children: (0, l.jsx)("button", {
            ..._,
            className: o()(nX._X, { [nX.lG]: s, [nX.Lh]: r, [nX.Bx]: a, [h ?? ""]: a, [nX.TV]: u }),
            "data-type": ei.g.EMOJI,
            "data-id": n.id,
            "data-name": n.name,
            "data-surrogates": "surrogates" in n ? n.surrogates : null,
            "data-animated": n.animated ? "true" : null,
            ref: p,
            children: (0, l.jsx)(nH, {
                "aria-label":
                    ((t = (0, eb.N)(n)),
                    (N?.name != null &&
                        (t = G.intl.formatToPlainString(G.t["nXv4/B"], { names: t, guildName: N.name })),
                    i)
                        ? G.intl.formatToPlainString(G.t["9FI9Z0"], { names: t })
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
function nz(e) {
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
            messageId: x,
            isBurstReaction: S,
            rowPosition: T,
            inNitroLockedSection: y,
        } = e,
        [R, b] = r.useState(""),
        v = (0, m.bG)([ez.Ay], () => ez.Ay.useReducedMotion),
        L = (0, m.bG)([O.Ay], () => O.Ay.getDisambiguatedEmojiContext(o), [o]),
        M = r.useRef(null),
        { emoji: D, size: P, isDisabled: w, columnIndex: U } = t;
    function k() {
        d.current || f.current || c(t);
    }
    let { ref: F, tabIndex: J, onFocus: V, ...K } = h(U, a) ?? {},
        B =
            R !== `${U}:${a}`
                ? (0, l.jsx)(nW, {
                      ref: F,
                      emoji: D,
                      isFavorite: L.isFavoriteEmojiWithoutFetchingLatest(D),
                      isLargeSize: p,
                      isMediumSize: A,
                      isInspected: s,
                      isDisabled: w,
                      showPulse: _ === i,
                      allowAnimatedEmoji: N,
                      onFocus: V ?? k,
                      onMouseMove: k,
                      onClick: (e) => {
                          if (
                              null != M.current &&
                              null != T &&
                              null != x &&
                              !e.shiftKey &&
                              null != D.name &&
                              S &&
                              !v &&
                              N
                          ) {
                              let e = null == D.id ? to.Ay.convertNameToSurrogate(D.name) : D.name,
                                  t = M.current.getBoundingClientRect();
                              ((t.x = T.x + (U + 1) * P), b(`${U}:${a}`), (0, nw.h)(x, e, D.id, t));
                          }
                          !(function (e) {
                              if ((e.stopPropagation(), d.current || f.current)) return;
                              let n = e.altKey;
                              (n &&
                                  !O.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(D) &&
                                  C(i),
                                  (0, e_.sF)(e_._2.FAVORITE_EMOJI_TOOLTIP),
                                  u(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n }));
                          })(e);
                      },
                      onContextMenu: function (e) {
                          (0, nP.L3)(e, async () => {
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
                      tabIndex: J,
                      columnIndex: U,
                      rowIndex: a,
                      size: P,
                      surrogateCodePoint: I,
                      selectedItemClassName: g,
                      inNitroLockedSection: y,
                  })
                : null;
    return (0, r.createElement)(
        "li",
        { ...K, key: i, ref: M },
        E
            ? (0, l.jsx)(j.m, {
                  text: G.intl.formatToPlainString(G.t.glqNsf, { key: (0, nU.isMac)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: B,
              })
            : B,
    );
}
let nZ = (e) => {
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
            isBurstReaction: x,
            inNitroLockedSection: O,
            handleScrollUpOnSectionCollapse: S,
        } = e,
        j = n(619508),
        T = n(404828),
        y = n(600003),
        R = n(318121),
        b = n(443336),
        v = n(258901),
        L = n(135974),
        M = n(8013),
        P = (0, eu.Ay)(),
        w = et.Om.getState(),
        [U, k] = r.useState(w.inspectedExpressionPosition),
        [F, J] = (0, nx.A)(null, 300),
        V = r.useRef(null);
    (r.useEffect(
        () =>
            et.Om.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => k(e),
            ),
        [],
    ),
        r.useEffect(() => {
            nM.bW.loadIfNecessary();
        }, []));
    let K = i === ti.as.LARGE,
        B = i === ti.as.MEDIUM;
    function H(e) {
        let t = `${e.rowIndex}c${e.columnIndex}`;
        switch (e.type) {
            case tm.EXPAND_OR_COLLAPSE_EMOJIS: {
                let { visibleRowIndex: n, columnIndex: i } = e,
                    a = U.rowIndex === n && U.columnIndex === i,
                    u = e.sectionCollapsedToThreeRows
                        ? a
                            ? (0, er.M)(P)
                                ? v
                                : M
                            : (0, er.M)(P)
                              ? j
                              : T
                        : a
                          ? (0, er.M)(P)
                              ? b
                              : L
                          : (0, er.M)(P)
                            ? y
                            : R,
                    m = G.intl.string(e.sectionCollapsedToThreeRows ? G.t.NZI2Zk : G.t["/K2RDH"]);
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
                        x = U.rowIndex === g && U.columnIndex === h;
                    function O() {
                        f.current || E.current || c(e);
                    }
                    return (0, r.createElement)(
                        "li",
                        { ...C, key: t },
                        (0, l.jsx)(nC.vN, {
                            children: (0, l.jsx)("button", {
                                "aria-label": u,
                                ref: A,
                                className: o()(nX._X, {
                                    [nX.lG]: K,
                                    [nX.Lh]: B,
                                    [nX.Bx]: x && !m,
                                    [_ ?? ""]: x,
                                    [nX.TV]: F === t,
                                }),
                                onFocus: N ?? O,
                                onMouseOver: O,
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
                        e.type !== tm.EXPAND_OR_COLLAPSE_EMOJIS ||
                            (t.stopPropagation(),
                            f.current ||
                                E.current ||
                                (s(e, { isFinalSelection: !0, toggleFavorite: !1 }),
                                (0, nO.G)(e.guildId),
                                e.sectionCollapsedToThreeRows || S(),
                                eO.default.track(eg.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                    collapsed: e.sectionCollapsedToThreeRows,
                                    guild_id: e.guildId,
                                })));
                    },
                    icon: (0, l.jsx)("img", { className: nX.Kk, src: u, alt: "" }),
                    ariaLabel: m,
                    shouldShowRoundHighlight: !0,
                });
            }
            case tm.EMOJI: {
                let { columnIndex: n, visibleRowIndex: i } = e,
                    r = U.rowIndex === i && U.columnIndex === n;
                return (0, l.jsx)(
                    nz,
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
                        isMediumSize: B,
                        isLargeSize: K,
                        pulseItemKey: F,
                        setPulseItemKey: J,
                        showEmojiFavoriteTooltip: h,
                        messageId: C,
                        isBurstReaction: x,
                        rowPosition: V?.current?.getBoundingClientRect(),
                        inNitroLockedSection: O,
                    },
                    t,
                );
            }
            case tm.SOUNDMOJI:
                return;
        }
    }
    function X(e) {
        return (0, l.jsx)("ul", {
            ...m(I),
            className: o()(nX.ND, { [nX.HO]: K, [nX.X$]: B }),
            ref: V,
            children: e.map(H),
        });
    }
    if (p === ti.R2.SOUNDMOJI)
        return (0, l.jsx)("ul", {
            className: nX.ND,
            ref: V,
            children: (0, l.jsx)(nL, { channelId: N, onSelectSoundmoji: a }),
        });
    if (p !== ti.s.TOP_GUILD_EMOJI) return X(t);
    let W = t.filter(
            (e) =>
                e.subCategory === ti.tm.TOP_GUILD_EMOJI ||
                (e.subCategory === ti.tm.NEWLY_ADDED_EMOJI &&
                    e.emoji.type === ta.i.GUILD &&
                    !Q.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
        ),
        z = t.filter(
            (e) =>
                e.subCategory === ti.tm.NEWLY_ADDED_EMOJI &&
                e.emoji.type === ta.i.GUILD &&
                Q.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id),
        );
    return 0 === z.length
        ? X(t)
        : (0, l.jsxs)("div", {
              className: nX.Ng,
              children: [
                  (0, l.jsx)("div", { className: o()(nX.V6, { [nX.$3]: 0 === W.length }), children: X(W) }),
                  (0, l.jsxs)("div", {
                      className: nX.bc,
                      children: [
                          (0, l.jsx)("div", {
                              className: o()(nX.eE, { [nX.eM]: 1 === z.length, [nX.Wk]: W.length > 0 }),
                              children: X(z),
                          }),
                          (0, l.jsxs)("div", {
                              className: o()(nX.lD, { [nX.EI]: K, [nX.qU]: B, [nX.Wk]: W.length > 0 }),
                              children: [
                                  (0, l.jsx)(nD.A, { foreground: nX.rI }),
                                  (0, l.jsx)(D.E, {
                                      variant: "text-xs/semibold",
                                      color: "text-overlay-light",
                                      children: G.intl.string(G.t.y2b7CA),
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
};
var nY = n(618723);
let nq = (0, ej.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    n$ = (0, ej.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    nQ = (0, ej.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    n0 = (0, ej.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    n1 = (0, ej.xI)(E.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    n2 = (0, ej.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    n3 = (0, ej.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    n5 = r.memo(function (e) {
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
                rowCount: x,
                isUsingKeyboardNavigation: O,
                channelGuildId: S,
                channelId: j,
                messageId: T,
                isBurstReaction: y,
                listHeaderClassName: R,
            } = e,
            b = r.useRef(!1),
            v = et.Om.useStore((e) => e.activeCategoryIndex),
            L = (0, en.RQ)((e) => e.searchQuery),
            M = eN.Sf.useSetting(),
            P = (0, m.bG)([ex.default], () => ex.default.getCurrentUser()),
            w = (0, eS.ki)(P),
            { location: U } = (0, A.p)(),
            { analyticsLocations: k } = (0, C.Ay)(),
            [F, J] = r.useState(0),
            [V, K] = r.useState(!1),
            {
                listPadding: B,
                renderRow: H,
                renderSection: X,
                renderSectionHeader: W,
                renderSectionFooter: z,
                sectionMarginBottom: Z,
                sectionHeaderHeight: Y,
                sectionFooterHeight: q,
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
                        isBurstReaction: x,
                        listHeaderClassName: O,
                        activeSectionIndex: S,
                        emojiListRef: j,
                    } = e,
                    T = (0, A.p)(),
                    y = r.useRef(eg.An1),
                    R = r.useMemo(() => ("" !== n ? tZ.A.convert.toCodePoint(n) : ""), [n]),
                    b = r.useCallback(
                        (e) => {
                            let t = d[e],
                                n = d[e + 1];
                            return e >= d.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked;
                        },
                        [d],
                    ),
                    v = r.useCallback(
                        (e) => {
                            if (e >= d.length - 1) return !1;
                            let t = d[e],
                                n = d[e + 1];
                            return !t.isNitroLocked && n.isNitroLocked;
                        },
                        [d],
                    ),
                    L = r.useCallback(
                        function (e) {
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                i = new Set(t),
                                s = t.has(e);
                            (s ? i.delete(e) : i.add(e),
                                null != n &&
                                    eO.default.track(eg.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                        location: T.location,
                                        tab: eD.kx.EMOJI,
                                        collapsed: !s,
                                        guild_id: n.id,
                                    }),
                                e === ti.R2.SOUNDMOJI &&
                                    eO.default.track(eg.HAw.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, { collapsed: !s }),
                                f(i));
                        },
                        [T, t, f],
                    ),
                    M = r.useCallback((e) => {
                        let { columnIndex: t, visibleRowIndex: n } = e,
                            i = e.type === tm.SOUNDMOJI ? null : e.type === tm.EMOJI ? (0, eb.N)(e.emoji) : e.name;
                        (y.current !== eg.An1 && window.cancelAnimationFrame(y.current),
                            (y.current = window.requestAnimationFrame(() => {
                                (et.Om.setInspectedExpressionPosition(t, n, ei.t.MOUSE_EVENT),
                                    et.Om.setSearchPlaceholder(i),
                                    (y.current = eg.An1));
                            })));
                    }, []),
                    D = (0, m.bG)([e_.HP], () => e_.HP.hasHotspot(e_._2.FAVORITE_EMOJI_TOOLTIP), []),
                    P = r.useMemo(
                        () =>
                            eH().memoize((e, t) => {
                                let n = i[e],
                                    r = d[t.sectionIndex];
                                return (0, l.jsx)(
                                    nZ,
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
                                        selectedItemClassName: nY.__invalid_selectedItem,
                                        channelId: N,
                                        messageId: C,
                                        isBurstReaction: x,
                                        inNitroLockedSection: r.isNitroLocked,
                                        handleScrollUpOnSectionCollapse: function () {
                                            j.current?.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                                        },
                                    },
                                    e,
                                );
                            }),
                        [i, d, s, R, M, a, c, E, I, g, h, p, D, _, N, C, x, j],
                    );
                r.useEffect(() => () => P.cache?.clear?.(), [P]);
                let w = r.useMemo(
                        () =>
                            eH().memoize((e) => {
                                let n = d[e];
                                if (null == n) return;
                                let { guild: i, categoryId: s, type: r, sectionId: a } = n;
                                if (r === ti.s.SEARCH_RESULTS) return;
                                let c =
                                        r === ti.s.GUILD
                                            ? null != i
                                                ? (0, l.jsx)(tl.A, { guild: i, height: 16, width: 16 })
                                                : null
                                            : null != s
                                              ? (0, l.jsx)(ts, { categoryId: s, height: 16, width: 16, size: "custom" })
                                              : null,
                                    u = i?.name;
                                null != s && (u = (0, eT.Nu)(s, i?.name));
                                let m = S === e,
                                    f = n.isNitroLocked,
                                    E = f && !m,
                                    I = f && m,
                                    g =
                                        r === ti.s.SOUNDMOJI
                                            ? (0, l.jsx)(ea.D, {
                                                  className: nY.f3,
                                                  onClick: () => {
                                                      ((0, en.U)(eD.kx.SOUNDBOARD),
                                                          eO.default.track(
                                                              eg.HAw.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK,
                                                          ));
                                                  },
                                                  children: G.intl.string(G.t.rUEjBe),
                                              })
                                            : void 0;
                                return (0, l.jsx)(
                                    nI.A,
                                    {
                                        className: o()(nY.wx, O, { [nY.RA]: E, [nY.sp]: I }),
                                        icon: c,
                                        isCollapsed: t.has(a),
                                        onClick: () => L(a, i),
                                        trailing: g,
                                        children: u,
                                    },
                                    a,
                                );
                            }),
                        [d, t, L, O, S],
                    ),
                    U = (0, tc.k0)(),
                    k = r.useCallback(
                        (e, n) => {
                            let i = d[e],
                                s = v(e),
                                r = b(e);
                            return (0, l.jsx)(
                                "div",
                                {
                                    role: "rowgroup",
                                    className: o()(nY.Wy, {
                                        [nY.YD]: e === d.length - 1,
                                        [nY.jl]: t.has(i.sectionId),
                                        [nY.cW]: i.isNitroLocked,
                                        [nY.T5]: s || r,
                                    }),
                                    children: n,
                                },
                                e,
                            );
                        },
                        [t, d, v, b],
                    ),
                    F = r.useCallback(
                        (e) =>
                            v(e)
                                ? U
                                    ? (0, l.jsx)(n_.ap, {})
                                    : (0, l.jsx)(n_.Ay, {})
                                : b(e)
                                  ? (0, l.jsx)("div", { className: nY.pQ })
                                  : null,
                        [v, b, U],
                    ),
                    J = r.useCallback((e) => (v(e) ? 41 : 33 * !!b(e)), [v, b]),
                    V = r.useCallback(
                        (e) => (e === d.length - 1 || t.has(d[e]?.sectionId) || v(e) || b(e) ? 0 : n2),
                        [t, d, v, b],
                    );
                return {
                    listPadding: r.useMemo(() => ["" !== u ? n0 : nq, n$, nQ, 0], [u]),
                    renderRow: P,
                    renderSection: k,
                    renderSectionHeader: w,
                    renderSectionFooter: F,
                    sectionMarginBottom: V,
                    sectionHeaderHeight: r.useCallback((e) => (d[e].type === ti.s.SEARCH_RESULTS ? 0 : n1), [d]),
                    sectionFooterHeight: J,
                };
            })({
                collapsedSections: g,
                diversitySurrogate: i,
                emojiGrid: s,
                emojiSize: c,
                onEmojiSelect: u,
                onSelectSoundmoji: d,
                searchQuery: L,
                sectionDescriptors: E,
                setCollapsedSections: h,
                getEmojiItemProps: p,
                getEmojiRowProps: N,
                isScrolling: b,
                isUsingKeyboardNavigation: O,
                allowAnimatedEmoji: M,
                channelGuildId: S,
                channelId: j,
                messageId: T,
                isBurstReaction: y,
                listHeaderClassName: R,
                activeSectionIndex: F,
                emojiListRef: a,
            }),
            $ = r.useCallback(
                (e) => {
                    let t = a.current?.getSectionDescriptors();
                    null == t ||
                        J(
                            Math.max(
                                t.findLastIndex((t) => t.offset.top <= e),
                                0,
                            ),
                        );
                },
                [a],
            );
        r.useLayoutEffect(() => {
            $(a.current?.getScrollerNode()?.scrollTop ?? 0);
        }, [a, $, E, I, L]);
        let Q = (0, es.Fk)({
            activeCategoryIndex: v,
            isScrolling: b,
            listRef: a,
            onActiveCategoryIndexChange: function (e) {
                "" === L && et.Om.setActiveCategoryIndex(e);
            },
            scrollOffset: 0,
            searchQuery: L,
            disableForSearch: !1,
        });
        (0, es.FV)({ searchQuery: L, activeCategoryIndex: v, listRef: a });
        let ee = r.useCallback(
                (e) => {
                    (Q(e),
                        $(e),
                        n4({ emojiListRef: a, sectionDescriptors: E, scrollTop: e, searchQuery: L, setShowUpsell: K }));
                },
                [Q, $, a, E, L, K],
            ),
            el = E.length > 0;
        (r.useEffect(() => {
            V &&
                (eO.default.track(eg.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: eJ.e.EMOJI_PICKER_FLOATING_UPSELL,
                    location: U,
                    location_stack: k,
                }),
                (0, nh.sq)(eg.U7l.PREMIUM_UPSELL_VIEWED, k, () => (0, nA.uq)(eJ.e.EMOJI_PICKER_FLOATING_UPSELL)));
        }, [U, k, V]),
            r.useEffect(() => {
                "" !== L && K(!1);
            }, [L]));
        let er = r.useRef(null);
        return (
            r.useEffect(
                () => (
                    clearTimeout(er.current),
                    (er.current = setTimeout(() => {
                        (el
                            ? nd.O.announce(G.intl.string(G.t.uZ4F2O), "polite")
                            : nd.O.announce(G.intl.string(G.t.IxxiKF), "assertive"),
                            (er.current = null));
                    }, 200)),
                    () => {
                        clearTimeout(er.current);
                    }
                ),
                [el, L],
            ),
            (0, l.jsxs)("div", {
                className: nY.AD,
                children: [
                    el
                        ? (0, l.jsx)(nf.A, {
                              role: "none presentation",
                              className: nY.p_,
                              listPadding: B,
                              onScroll: ee,
                              renderRow: H,
                              renderSection: X,
                              renderSectionHeader: W,
                              renderSectionFooter: z,
                              rowCount: x,
                              rowCountBySection: I,
                              rowHeight: c + 2 * n3,
                              sectionHeaderHeight: Y,
                              sectionMarginBottom: Z,
                              sectionFooterHeight: q,
                              stickyHeaders: !0,
                              ref: a,
                          })
                        : (0, l.jsx)(nm.A, {
                              message: (0, l.jsx)(D.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: G.intl.string(G.t.IxxiKF),
                              }),
                              className: nY.BZ,
                          }),
                    w || nu.Fr
                        ? null
                        : (0, l.jsx)(np.d, {
                              showUpsell: V,
                              text:
                                  ((t = (0, eF.Dd)(eJ.PremiumTypes.TIER_2)),
                                  G.intl.format(G.t.gMVjeS, {
                                      nitroTierName: t,
                                      onClick: () => {
                                          f({ type: tE.PREMIUM, emojiDescriptor: void 0 });
                                      },
                                  })),
                              button: ((n = (0, ng.qD)()), (0, eF.LE)(n, eJ.pe.TIER_2) ?? G.intl.string(G.t.BmJkbd)),
                              buttonAnalyticsObject: { section: eg.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                              leadingAction: (0, l.jsx)(nN.l, {
                                  size: "sm",
                                  className: nY.ij,
                                  location: _.A.PREMIUM_WISHLIST_EMOJI_UPSELL,
                              }),
                          }),
                ],
            })
        );
    }),
    n4 = eH().throttle(
        function (e) {
            let { emojiListRef: t, sectionDescriptors: n, scrollTop: i, searchQuery: s, setShowUpsell: l } = e;
            l(
                (0, nE.s)({ listRef: t, searchQuery: s, nitroLockedSectionStates: n, scrollTop: i })
                    .areOnlyNitroLockedSectionsVisible,
            );
        },
        300,
        { leading: !1, trailing: !0 },
    );
var n8 = n(506774),
    n6 = n(28863),
    n7 = n(277984),
    n9 = n(404374),
    ie = n(780964),
    it = n(766075),
    ii = n(166403),
    is = n(506150);
let il = "premiumRetentionEmojiPickerNotice",
    ir = n8.w.get(il),
    ia = function (e) {
        let { closePopout: t, channel: n } = e,
            [i, s] = r.useState(!1),
            { subscription: a, hasFetchedSubscriptions: o } = (0, m.cf)([ii.A], () => ({
                subscription: ii.A.getPremiumSubscription(),
                hasFetchedSubscriptions: ii.A.hasFetchedSubscriptions(),
            }));
        if (
            (r.useEffect(() => {
                o || (0, n7.hP)();
            }, [o]),
            null == a || !(0, eF.PK)(a.status) || i)
        )
            return null;
        let c = a.status === eg.Dmq.PAST_DUE ? (0, eF.ji)(a).expiresDate : H()(a.currentPeriodStart).add(eJ.ph),
            u = `${a.id}:${c.toISOString()}`;
        if (ir === u) return null;
        let d =
            eF.Ay.getPremiumType(a.planId) === eJ.PremiumTypes.TIER_0
                ? n9.k0.PREMIUM_TIER_0
                : eF.Ay.getPremiumType(a.planId) === eJ.PremiumTypes.TIER_1
                  ? n9.k0.PREMIUM_TIER_1
                  : n9.k0.PREMIUM_TIER_2;
        return (0, l.jsxs)(D.E, {
            variant: "text-xs/medium",
            color: "text-default",
            className: is.g$,
            children: [
                (0, l.jsx)(R.t, { size: "md", className: is.lu, color: d }),
                (0, l.jsxs)("div", {
                    className: is.Xn,
                    children: [
                        (0, l.jsx)(D.E, {
                            variant: "text-xs/normal",
                            children: G.intl.format(G.t.bTMjiO, {
                                planName: eF.Ay.getTierDisplayNameByPlanId(a.planId),
                                endsAt: c.toDate(),
                            }),
                        }),
                        (0, l.jsx)("div", {
                            children: (0, l.jsx)(n6.Anchor, {
                                onClick: () => {
                                    ((0, eT.xf)(n), t(), (0, it.openUserSettings)(ie.X.NITRO_PANEL));
                                },
                                children: G.intl.string(G.t.W3aavh),
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(ea.D, {
                    onClick: () => {
                        (n8.w.set(il, u), (ir = u), s(!0));
                    },
                    children: (0, l.jsx)(eo.P, { size: "md", color: "currentColor", className: is.YF }),
                }),
            ],
        });
    };
var io = n(148361);
let ic = (0, ej.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    iu = (0, ej.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT);
function id(e) {
    return e.stopPropagation();
}
function im(e, t) {
    et.Om.setInspectedExpressionPosition(e, t, ei.t.GRID_NAVIGATOR_EVENT);
}
let iE = u()(eT.bo, 200),
    iI = u()(eT.Wi, 200),
    ig = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    ih = r.memo(function (e) {
        let t,
            n,
            i,
            {
                pickerIntention: s,
                channel: a,
                guildId: c,
                closePopout: u,
                emojiSize: E = ti.as.MEDIUM,
                hasTabWrapper: S = !1,
                onSelectEmoji: j,
                onSelectSoundmoji: T,
                containerWidth: y,
                onNavigateAway: R,
                persistSearch: b,
                className: v,
                headerClassName: L,
                analyticsOverride: M = ig,
                searchProps: D = {},
                wrapper: P,
                shouldHidePickerActions: w = !1,
                messageId: U,
                renderHeader: k,
                listHeaderClassName: F,
                categoryListClassName: J,
                shouldShowSoundmojiInEmojiPicker: V = !1,
                showOnlyUnicode: B = !1,
                showAddEmojiButton: H,
                ref: X,
                isViewingEmojiPacks: W = !1,
                onViewEmojiPacksChange: z,
            } = e,
            { onFocus: Z, onKeyDown: Y, autoFocus: q = !0, accessory: $ } = D,
            el = (0, m.bG)([eC.Ay], () => (null != c ? eC.Ay.getDefaultChannel(c) : null), [c]),
            [er, ea] = r.useState(null),
            eo = r.useRef(""),
            ec = (0, en.RQ)((e) => e.searchQuery),
            eu = r.useRef(null),
            ed = r.useRef(null),
            em = r.useRef(null);
        null == a && null != el && (a = el);
        let eE = a?.getGuildId() ?? c ?? null,
            [eI, eh] = r.useState(!1),
            eA = r.useRef(null),
            ej = ex.default.getCurrentUser(),
            ey = (0, eS.ki)(ej),
            eR = eI && ey;
        r.useImperativeHandle(X, () => ({ onPickerOpen: e3 }));
        let { location: eD } = (0, A.p)(),
            { page: ew, section: eU, object: ek, openPopoutType: eG, popoutLocation: eF } = M,
            eJ = r.useMemo(() => ({ ...eD, section: eU ?? eg.JJy.EMOJI_PICKER_POPOUT }), [eD, eU]),
            { analyticsLocations: eV } = (0, C.Ay)(_.A.EMOJI_PICKER),
            { diversitySurrogate: eB } = (0, m.cf)([O.Ay], () => ({ diversitySurrogate: O.Ay.diversitySurrogate })),
            eX = (0, eT.sL)(ec, a, s, B),
            eW = null == eX ? 0 : eX.locked.length + eX.unlocked.length,
            ez = eN.iM.useSetting(),
            eZ = r.useMemo(() => new Set(ez), [ez]),
            eY = r.useCallback((e) => {
                eN.iM.updateSetting(Array.from(e));
            }, []),
            eq = (0, es.oV)({ gridWrapperRef: eu, containerWidth: y, listPaddingLeft: iu, listScrollbarWidth: 8 }),
            {
                rowCountBySection: e$,
                sectionDescriptors: eQ,
                emojiGrid: e0,
                columnCounts: e1,
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
                    f = (0, m.bG)([O.Ay], () => O.Ay.categories),
                    E = r.useMemo(() => (d ? to.Ay.getCategories() : f), [f, d]),
                    I = (0, m.bG)([ef.A], () => ef.A.getGuild(t?.getGuildId()), [t]),
                    g = t?.getGuildId() ?? n,
                    h = (0, m.bG)([O.Ay], () => O.Ay.getDisambiguatedEmojiContext(g), [g]),
                    A = (0, eT.XI)(g),
                    p = (0, eT.Fj)(g),
                    _ = (0, eT.QZ)(g),
                    { topEmojis: N, newlyAddedEmojis: C } = (0, eL.A)(g, s),
                    x = (0, m.yK)([td.Ay], () => td.Ay.getFlattenedGuildIds(), []),
                    S = (0, m.bG)([O.Ay], () => O.Ay.expandedSectionsByGuildIds),
                    j = (0, m.bG)([ex.default], () => ex.default.getCurrentUser()),
                    T = (0, eS.ki)(j),
                    y = (0, tc.k0)(),
                    R = h.getGroupedCustomEmoji(),
                    b = (0, tu.Ym)({ location: "useEmojiGrid" });
                return r.useMemo(() => {
                    let e = [],
                        n = [],
                        r = [],
                        d = [],
                        m = 0,
                        f = 0;
                    if (null != h && null != a) {
                        let h = Math.floor(a / (c + 2 * o)),
                            j = 3 * h;
                        function g(l, a) {
                            let o = new Map(),
                                u = i.has(a.sectionId),
                                [E, I] = eH().partition(l, (e) => {
                                    let n = eb.Ay.isEmojiDisabled({ emoji: e, channel: t, intention: s });
                                    return (o.set(e, n), !n);
                                }),
                                g = E.concat(I),
                                A = a.guild,
                                p = g.length > j && null != A && a.isNitroLocked,
                                _ = p && !S.has(A.id);
                            _ && g.splice(j - 1);
                            let x = Math.ceil((p ? g.length + 1 : g.length) / h),
                                O = [];
                            for (let e = 0; e < x; e++) {
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
                                                a.sectionId === ti.s.TOP_GUILD_EMOJI
                                                    ? (0, eT.DA)(N, C, e.id ?? e.uniqueName ?? e.name)
                                                    : ti.tm.NONE,
                                        }));
                                if ((O.push(i), !u)) {
                                    if (p && e === x - 1) {
                                        let t = O[e];
                                        t.push({
                                            type: 1,
                                            guildId: A.id,
                                            name: G.intl.string(G.t.NZI2Zk),
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
                            let T = { ...a, count: l.length };
                            (n.push(T), e.push(u ? 0 : x));
                        }
                        if (null != l)
                            (0 !== l.unlocked.length &&
                                g(l.unlocked, {
                                    type: ti.s.SEARCH_RESULTS,
                                    sectionId: ti.s.SEARCH_RESULTS,
                                    count: l.unlocked.length,
                                    isNitroLocked: !1,
                                }),
                                0 !== l.locked.length &&
                                    g(l.locked, {
                                        type: ti.s.PREMIUM_UPSELL,
                                        categoryId: ti.R2.PREMIUM_UPSELL,
                                        sectionId: ti.s.PREMIUM_UPSELL,
                                        count: l.locked.length,
                                        isNitroLocked: !T,
                                    }));
                        else {
                            if (b && u) {
                                let t = [{ type: 2, rowIndex: f, columnIndex: 0, visibleRowIndex: m }];
                                n.push({
                                    type: ti.s.SOUNDMOJI,
                                    categoryId: ti.R2.SOUNDMOJI,
                                    sectionId: "soundmoji",
                                    count: t.length,
                                    isNitroLocked: !1,
                                });
                                let s = i.has(ti.R2.SOUNDMOJI);
                                (!s && (d.push(t.length), r.push(t), m++), e.push(+!s), f++);
                            }
                            for (let e of E)
                                if (e === ti.R2.CUSTOM) {
                                    function O(n) {
                                        let i = R.get(n);
                                        if (null == i) return;
                                        let l = i.filter(
                                            (e) =>
                                                !tf.includes(
                                                    eb.Ay.getEmojiUnavailableReason({
                                                        emoji: e,
                                                        channel: t ?? eC.Ay.getDefaultChannel(n),
                                                        intention: s,
                                                    }),
                                                ),
                                        );
                                        if (0 === l.length) return;
                                        let r = ef.A.getGuild(n),
                                            a =
                                                y ||
                                                (!T &&
                                                    eb.Ay.isEmojiCategoryNitroLocked({
                                                        categoryEmojis: l,
                                                        channel: t,
                                                        intention: s,
                                                    }));
                                        g(l, {
                                            categoryId: e,
                                            guild: r,
                                            type: ti.s.GUILD,
                                            sectionId: null != r ? r.id : (0, tr.A)(),
                                            count: l.length,
                                            isNitroLocked: a,
                                        });
                                    }
                                    if ((null != I && O(I.id), (0, eM.isExternalEmojiAllowedForIntention)(s)))
                                        for (let e of x) (null == I || I.id !== e) && O(e);
                                } else if (e === ti.R2.TOP_GUILD_EMOJI) {
                                    if (null != I) {
                                        let { allEmojis: t } = (0, ev.W)({ topEmojis: N, newlyAddedEmojis: C });
                                        t.length > 0 &&
                                            g(t, {
                                                categoryId: e,
                                                guild: ef.A.getGuild(I.id),
                                                type: ti.s.TOP_GUILD_EMOJI,
                                                sectionId: ti.s.TOP_GUILD_EMOJI,
                                                count: t.length,
                                                isNitroLocked: !1,
                                            });
                                    }
                                } else if (e === ti.R2.RECENT) {
                                    let n = (s === eM.EmojiIntention.REACTION ? _ : p).filter(
                                        (e) => !eb.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }),
                                    );
                                    g(n, {
                                        categoryId: e,
                                        type: ti.s.RECENT,
                                        sectionId: ti.s.RECENT,
                                        count: n.length,
                                        isNitroLocked: !1,
                                    });
                                } else if (e === ti.R2.FAVORITES) {
                                    let n = A.filter(
                                        (e) => !eb.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }),
                                    );
                                    0 !== n.length &&
                                        g(n, {
                                            categoryId: e,
                                            type: ti.s.FAVORITES,
                                            sectionId: ti.s.FAVORITES,
                                            count: n.length,
                                            isNitroLocked: !1,
                                        });
                                } else {
                                    let t = to.Ay.getByCategory(e);
                                    null != t &&
                                        g(t, {
                                            categoryId: e,
                                            type: ti.s.UNICODE,
                                            sectionId: e,
                                            count: t.length,
                                            isNitroLocked: !1,
                                        });
                                }
                        }
                    }
                    return { columnCounts: d, emojiGrid: r, rowCountBySection: e, sectionDescriptors: n };
                }, [h, a, c, o, l, i, R, S, t, s, N, C, T, E, I, x, _, p, A, y, b, u]);
            })({
                gridWidth: eq,
                fallbackGuildId: eE,
                channel: a,
                pickerIntention: s,
                emojiSearchResults: eX,
                collapsedSections: eZ,
                emojiPaddingHorizontal: ic,
                emojiSpriteSize: E,
                shouldShowSoundmojiInEmojiPicker: V,
                showOnlyUnicode: B,
            }),
            { newlyAddedEmojis: e2 } = (0, eL.A)(eE, s);
        ((t = r.useRef({ intention: s, isBurstReaction: eI, analyticsObject: ek })),
            r.useEffect(() => {
                t.current.intention === eM.EmojiIntention.REACTION && eP(t.current);
            }, []));
        let e3 = r.useCallback(() => {
                let e = e2.length > 0 ? e2[0].id : null;
                ((0, ee.uV)(eE, e), eP({ intention: s, isBurstReaction: eI, analyticsObject: ek }));
            }, [e2, eE, s, eI, ek]),
            e5 = (function (e) {
                let {
                        pickerIntention: t,
                        selectedChannel: n,
                        fallbackGuildId: i,
                        onSelectEmoji: s,
                        setUpsellConfigs: l,
                        emojiSelectAnalytics: a,
                        trackEmojiFavorited: o,
                    } = e,
                    c = (0, m.bG)([O.Ay], () => O.Ay.getDisambiguatedEmojiContext(n?.getGuildId() ?? i), [i, n]);
                return r.useCallback(
                    (e, i) => {
                        if (0 === e.type) {
                            let { emoji: r } = e;
                            if (null == r) return;
                            let u = eb.Ay.getEmojiUnavailableReason({ emoji: r, channel: n, intention: t });
                            if (i.toggleFavorite)
                                return void (c.isFavoriteEmojiWithoutFetchingLatest(r) || null != u
                                    ? (0, g.Sw)(r)
                                    : (o?.(e), (0, g.V4)(r)));
                            if (u !== eM.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) {
                                if (u === eM.EmojiDisabledReasons.PREMIUM_LOCKED) {
                                    (a?.(e, u), l({ type: 0, emojiDescriptor: e }));
                                    return;
                                }
                                if (u === eM.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED && r.type === ta.i.GUILD) {
                                    (a?.(e, u), l({ type: 1, guildId: r.guildId, emojiId: r.id }));
                                    return;
                                }
                                u !== eM.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE &&
                                    (a?.(e), s({ emoji: r, willClose: i.isFinalSelection, isBurst: i.isBurst }));
                            }
                        }
                    },
                    [n, t, s, l, c, a, o],
                );
            })({
                pickerIntention: s,
                selectedChannel: a,
                fallbackGuildId: eE,
                closePopout: u,
                onSelectEmoji: j,
                setUpsellConfigs: ea,
                emojiSelectAnalytics: (e, t) => {
                    "" !== ec
                        ? (0, eT.Wf)({
                              emoji: e.emoji,
                              location: { ...eJ, object: eg.ZSU.EMOJI },
                              searchQuery: ec,
                              isLocked: null != t,
                              intention: s,
                              messageId: U,
                          })
                        : (0, eT._7)({
                              emoji: e.emoji,
                              location: { ...eJ, object: ek ?? eg.ZSU.EMOJI, ...(null != ew && { page: ew }) },
                              pickerIntention: s,
                              category: e.category,
                              subCategory: e.subCategory,
                              position: e.columnIndex + 1,
                              newlyAddedHighlight:
                                  e.subCategory === ti.tm.NEWLY_ADDED_EMOJI && Q.isNewerThanLastSeen(eE, e.emoji.id),
                              isBurstReaction: eI,
                              messageId: U,
                              lockedReason: t,
                              visibleRowIndex: e.visibleRowIndex,
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, eT.C5)({ emoji: e.emoji, location: { ...eJ, object: eg.ZSU.EMOJI } });
                },
            }),
            e4 = r.useCallback(() => {
                (u(), R?.());
            }, [u, R]),
            {
                getItemProps: e8,
                getRowProps: e6,
                gridContainerProps: e7,
                handleGridContainerKeyDown: e9,
                isUsingKeyboardNavigation: te,
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
                    u = (0, m.bG)([O.Ay], () => O.Ay.getDisambiguatedEmojiContext(o), [o]),
                    f = r.useCallback(
                        (e, i) => {
                            if (e.type === tm.EMOJI) {
                                if (null != e.emoji && i.altKey)
                                    return void (u.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                        ? (0, g.Sw)(e.emoji)
                                        : ((0, eT.C5)({ emoji: e.emoji, location: { ...t, object: eg.ZSU.EMOJI } }),
                                          (0, g.V4)(e.emoji)));
                                let l = {
                                    page: null != o ? eg.liQ.GUILD_CHANNEL : eg.liQ.DM_CHANNEL,
                                    section: eg.JJy.EMOJI_PICKER_POPOUT,
                                    object: eg.ZSU.EMOJI,
                                };
                                (c &&
                                    (l = {
                                        page: null != o ? eg.liQ.GUILD_CHANNEL : eg.liQ.DM_CHANNEL,
                                        section: eg.JJy.EMOJI_PICKER_POPOUT,
                                        object: eg.ZSU.EMOJI,
                                    }),
                                    (0, eT._7)({
                                        emoji: e.emoji,
                                        location: l,
                                        pickerIntention: n,
                                        category: e.category,
                                        subCategory: e.subCategory,
                                        newlyAddedHighlight:
                                            e.subCategory === ti.tm.NEWLY_ADDED_EMOJI &&
                                            Q.isNewerThanLastSeen(o, e.emoji.id),
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
                    } = (0, es.Ff)({
                        columnCounts: i,
                        gridNavigatorId: ti.lq,
                        itemGrid: l,
                        itemList: a,
                        onGridNavigatorItemSelect: f,
                        onGridNavigatorPositionChange: im,
                    });
                return (
                    r.useEffect(
                        () =>
                            et.Om.subscribe(
                                (e) => e.inspectedExpressionPosition,
                                (e) => {
                                    if (null == e) return;
                                    let { columnIndex: t, rowIndex: n, source: i } = e;
                                    i !== ei.t.GRID_NAVIGATOR_EVENT &&
                                        E({ type: d.n.SET_FOCUSED_POSITION, x: t, y: n });
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
                pickerIntention: s,
                analyticsLocation: eJ,
                columnCounts: e1,
                onSelectEmoji: j,
                emojiGrid: e0,
                emojiList: ed,
                channelGuildId: eE,
                isBurstReaction: eR,
            });
        (((e, t) => {
            let [n, i] = r.useState(null);
            (r.useEffect(() => {
                null != n && (t.current?.scrollToSectionTop(n), i(null));
            }, [t, n]),
                r.useEffect(() => {
                    i(et.Om.getState().activeCategoryIndex);
                }, [e]));
        })(y, ed),
            r.useLayoutEffect(() => {
                q && em.current?.focus();
            }, [y, eB, em, q]),
            (n = r.useRef(W)),
            r.useEffect(() => {
                (q && n.current && !W && em.current?.focus(), (n.current = W));
            }, [q, W, em]),
            r.useEffect(() => {
                b || (0, en.Ri)("");
            }, [b]),
            r.useEffect(
                () => (
                    eO.default.track(eg.HAw.OPEN_POPOUT, {
                        type: eG ?? "Emoji Picker",
                        guild_id: eE,
                        location: eF,
                        ...(0, N.dI)(a),
                    }),
                    () => {
                        (iE.cancel(), iI.cancel());
                    }
                ),
                [eG, eE, eF, a],
            ),
            (0, p.Ay)(() => ((0, eT.V$)({ intention: s, location: eJ }), (eo.current = ec), et.Om.resetStoreState)),
            r.useEffect(() => () => (0, e_.sF)(e_._2.FAVORITE_EMOJI_TOOLTIP), []),
            r.useLayoutEffect(() => {
                let { columnIndex: e, rowIndex: t } = et.Om.getState().inspectedExpressionPosition;
                e0[t]?.[e] == null && 0 !== e && et.Om.setInspectedExpressionPosition(0, 0);
            }, [e0]),
            r.useEffect(() => {
                if (("" === eo.current && "" !== ec && (0, eT.EG)(eJ, s), "" !== ec && eo.current !== ec)) {
                    let e = et.Om.getAnalyticsId();
                    0 === eW
                        ? iE({ location: eJ, searchQuery: ec, intention: s, loadId: e })
                        : iI({
                              totalResults: eW,
                              numEmojiLocked: eX?.locked.length ?? 0,
                              location: eJ,
                              searchQuery: ec,
                              intention: s,
                              loadId: e,
                          });
                }
                eo.current = ec;
            }, [ec, eJ, eW, eX, s]));
        let tt = P ?? (S ? "div" : I.l),
            tn = null != eq;
        er?.type === tE.PREMIUM
            ? (i = (0, l.jsx)(io.default, {
                  onUpsellClicked: e4,
                  emojiDescriptor: er.emojiDescriptor,
                  pickerIntention: s,
                  analyticsLocation: eJ,
                  onClose: () => ea(null),
                  channel: a,
              }))
            : er?.type === tE.ROLE_SUBSCRIPTION &&
              (i = (0, l.jsx)(ep, { onClose: () => ea(null), guildId: er.guildId, emojiId: er.emojiId }));
        let ts = (0, l.jsx)(ni, {
                channel: a,
                pickerIntention: s,
                emojiListRef: ed,
                onKeyDown: (e) => {
                    (e9?.(e), Y?.(e));
                },
                searchBarRef: em,
                onFocus: Z,
                autoFocus: q,
                accessory: $,
                headerClassName: L,
                diversitySurrogate: eB,
                isBurstReaction: eI,
                onBurstReactionToggle: function () {
                    (eh(!eI), em.current?.focus());
                },
                burstToggleRef: eA,
                renderHeader: k,
                showAddEmojiButton: H,
                closePopout: u,
            }),
            tl = [];
        O.Ay.hasFavoriteEmojis(eE) || tl.push(f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let tI = (0, l.jsxs)(r.Fragment, {
                children: [
                    S ? ts : null,
                    (0, l.jsxs)("div", {
                        className: nn.uK,
                        ref: eu,
                        children: [
                            (0, l.jsx)(ia, { channel: a, closePopout: u }),
                            (0, l.jsx)(x.Ay, {
                                contentTypes: tl,
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    if (t === f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                        return (0, l.jsx)(tD, { markAsDismissed: () => n(tL.i.UNKNOWN) });
                                },
                            }),
                            w
                                ? null
                                : (0, l.jsx)("div", {
                                      className: nn.Iy,
                                      id: ti.lq,
                                      ...e7,
                                      children: tn
                                          ? (0, l.jsx)(n5, {
                                                collapsedSections: eZ,
                                                diversitySurrogate: eB,
                                                emojiGrid: e0,
                                                emojiListRef: ed,
                                                emojiSize: E,
                                                getEmojiItemProps: e8,
                                                getEmojiRowProps: e6,
                                                gridWidth: eq,
                                                isUsingKeyboardNavigation: te,
                                                onEmojiSelect: function (e, t) {
                                                    e5(e, { ...t, isBurst: eR });
                                                },
                                                onSelectSoundmoji: T,
                                                setUpsellConfigs: ea,
                                                rowCount: e0.length,
                                                rowCountBySection: e$,
                                                sectionDescriptors: eQ,
                                                setCollapsedSections: eY,
                                                channelGuildId: eE,
                                                channelId: a?.id,
                                                messageId: U,
                                                isBurstReaction: eR,
                                                listHeaderClassName: F,
                                            })
                                          : null,
                                  }),
                        ],
                    }),
                    (0, l.jsx)(nc, { emojiGrid: e0, className: nn.qV, guildId: eE, pickerIntention: s, channel: a }),
                    i,
                    s === eM.EmojiIntention.REACTION
                        ? (0, l.jsx)(eK, { targetElementRef: eA, shouldShow: eI && !ey, onDismiss: () => eh(!1) })
                        : null,
                ],
            }),
            tg = (0, l.jsx)(h.A, {
                ...eJ,
                children: (0, l.jsxs)(tt, {
                    id: ti.Do,
                    "aria-labelledby": S && !W ? ti.k1 : void 0,
                    role: S && !W ? "tabpanel" : void 0,
                    className: o()(nn.iE, { [nn.r6]: S, [nn.cB]: eR }),
                    children: [
                        S || W ? null : ts,
                        (0, l.jsx)("div", {
                            className: o()(nn.Fb, v),
                            onScroll: id,
                            children: W ? (0, l.jsx)(K, { onBack: () => z?.(!1) }) : tI,
                        }),
                        w || W
                            ? null
                            : (0, l.jsx)(tv, {
                                  className: o()(nn.jv, J),
                                  emojiListRef: ed,
                                  sectionDescriptors: eQ,
                                  intention: s,
                                  channel: a,
                                  fallbackGuildId: eE,
                                  shouldShowSoundmojiInEmojiPicker: V,
                                  showOnlyUnicode: B,
                                  onViewEmojiPacks: null != z ? () => z(!0) : void 0,
                              }),
                    ],
                }),
            });
        return (0, l.jsx)(C.f5, { value: eV, children: tg });
    });
