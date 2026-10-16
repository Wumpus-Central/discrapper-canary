(n.d(t, { A: () => i_ }), n(321073));
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
    p = n(212245),
    A = n(964486),
    _ = n(793574),
    N = n(666860),
    C = n(688810),
    O = n(379848),
    x = n(236285),
    S = n(331322),
    j = n(866665),
    T = n(408278),
    y = n(477155),
    b = n(403581),
    R = n(661531),
    v = n(297264),
    L = n(62010),
    M = n(683973),
    P = n(934499),
    D = n(182159),
    w = n(834730),
    k = n(320448),
    U = n(834040),
    G = n(499373),
    F = n(565645),
    J = n(938213),
    V = n(105292),
    K = n(126904);
let B = r.memo(function (e) {
    let { pack: t, isPinned: n, onAddPack: i, onRemovePack: s } = e,
        a = r.useId(),
        o = V.intl.string(n ? J.default["2zxYCx"] : J.default.Tvdb5N),
        c = r.useMemo(() => t.emojis.filter((e) => e.available), [t.emojis]);
    return (0, l.jsxs)("section", {
        "aria-labelledby": a,
        className: K.nM,
        children: [
            (0, l.jsxs)(S.B, {
                align: "center",
                direction: "horizontal",
                gap: 4,
                justify: "space-between",
                children: [
                    (0, l.jsxs)(S.B, {
                        align: "center",
                        className: K.DD,
                        direction: "horizontal",
                        gap: 4,
                        children: [
                            (0, l.jsx)(v.D, { className: K.UU, id: a, variant: "text-xs/bold", children: t.name }),
                            (0, l.jsx)(w.E, {
                                color: "text-subtle",
                                variant: "text-xs/medium",
                                children: V.intl.format(J.default.UA8cNe, { count: c.length }),
                            }),
                            (0, l.jsx)(k._, { color: "currentColor", size: "xs" }),
                        ],
                    }),
                    (0, l.jsx)(j.m, {
                        text: o,
                        children: (0, l.jsx)(T.K, {
                            "aria-label": o,
                            icon: n ? U.MinusIcon : G.T,
                            onClick: () => (n ? s(t) : i(t)),
                            size: "sm",
                            variant: "secondary",
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: K.gm,
                role: "group",
                "aria-label": t.name,
                children: c.map((e) =>
                    (0, l.jsx)(F.A, { animated: e.animated, className: K.Zg, emojiId: e.id, emojiName: e.name }, e.id),
                ),
            }),
        ],
    });
});
var H = n(429800);
function X(e) {
    let { onBack: t } = e,
        n = V.intl.string(J.default.Nwj3fK),
        i = r.useRef(null),
        s = (0, m.bG)([D.A], () => D.A.getPacks());
    r.useLayoutEffect(() => {
        i.current?.focus();
    }, []);
    let a = (0, M.k)().pinnedEmojiPacks?.packIds,
        o = r.useCallback((e) => {
            (0, P.Ls)(e.id);
        }, []),
        c = r.useCallback((e) => {
            (0, P.M5)(e.id);
        }, []);
    return (0, l.jsxs)("div", {
        className: H.kL,
        children: [
            (0, l.jsx)("div", { "aria-hidden": !0, className: H.Tp }),
            (0, l.jsx)("div", {
                className: H.wx,
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
                                (0, l.jsx)(b.t, { color: R.A.colors.TEXT_DEFAULT, size: "xs" }),
                                (0, l.jsxs)(S.B, {
                                    align: "center",
                                    direction: "horizontal",
                                    gap: 8,
                                    children: [
                                        (0, l.jsx)(v.D, {
                                            variant: "heading-md/semibold",
                                            children: V.intl.string(J.default["0+5+Oy"]),
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
                className: H.p_,
                children: s.map((e, t) =>
                    (0, l.jsxs)(
                        r.Fragment,
                        {
                            children: [
                                t > 0 ? (0, l.jsx)("hr", { className: H.yF }) : null,
                                (0, l.jsx)(B, {
                                    isPinned: a?.includes(e.id) === !0,
                                    pack: e,
                                    onAddPack: o,
                                    onRemovePack: c,
                                }),
                            ],
                        },
                        e.id,
                    ),
                ),
            }),
        ],
    });
}
var W = n(536637),
    z = n.n(W),
    Z = n(73153),
    Y = n(935208);
let q = { lastSeenNewlyAddedEmojiIds: {} },
    $ = q,
    Q = {};
function ee() {
    for (let e in Q) $.lastSeenNewlyAddedEmojiIds[e] = Q[e];
}
class et extends m.Ay.PersistedStore {
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
        $ = e ?? q;
    }
    getState() {
        return $;
    }
    getLastSeenEmojiByGuild(e) {
        return $.lastSeenNewlyAddedEmojiIds[e];
    }
    isNewerThanLastSeen(e, t) {
        if (null == e || null == t) return !1;
        let n = this.getLastSeenEmojiByGuild(e);
        if (null == n || Y.default.compare(t, n.id) > 0) return !0;
        {
            let e = z()(n.lastSeen);
            return z()().isBefore(e.add(2, "weeks")) && !n.acknowledged;
        }
    }
}
let en = new et(Z.h, {
    LOGOUT: function () {
        (($ = q), (Q = {}));
    },
    NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = Q[t] ?? $.lastSeenNewlyAddedEmojiIds[t];
        null == i || 0 > Y.default.compare(i.id, n)
            ? (Q[t] = { id: n, lastSeen: Date.now(), acknowledged: !0 })
            : (Q[t] = { ...i, acknowledged: !0 });
    },
    NEWLY_ADDED_EMOJI_SEEN_PENDING: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = Q[t] ?? $.lastSeenNewlyAddedEmojiIds[t];
        (null == i || 0 > Y.default.compare(i.id, n)) && (Q[t] = { id: n, lastSeen: Date.now(), acknowledged: !1 });
    },
    NEWLY_ADDED_EMOJI_SEEN_UPDATED: ee,
    CLEAR_CACHES: function () {
        (($ = q), ee());
    },
    CONNECTION_CLOSED: ee,
});
var ei = n(451731),
    es = n(850992),
    el = n(151271),
    er = n(60587),
    ea = n(887695),
    eo = n(562708),
    ec = n(462887),
    eu = n(939249),
    ed = n(789645),
    em = n(696986),
    ef = n(736653),
    eE = n(139286),
    eI = n(976860),
    eg = n(71393),
    eh = n(384684),
    ep = n(985242),
    eA = n(652215),
    e_ = n(746080),
    eN = n(196404);
function eC(e) {
    let t,
        { onClose: i, guildId: s, emojiId: r } = e,
        a = ((t = (0, ef.Ay)()), (0, ec.q)(t) ? n(454333) : n(674463)),
        { analyticsLocations: o } = (0, C.Ay)(_.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, eE.A)({
        type: eo.ImpressionTypes.MODAL,
        name: eo.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: { location_stack: o, emoji_guild_id: s, emoji_id: r ?? null },
    });
    let c = (0, m.bG)([eg.A], () => eg.A.getGuild(s)),
        u = (0, m.bG)([eh.A], () => null != s && eh.A.getUserSubscriptionRoles(s).size > 0),
        d = u ? V.intl.string(V.t.GoLM9z) : V.intl.formatToPlainString(V.t["h0u/Hi"], { serverName: c?.name }),
        f = u ? V.intl.string(V.t.PjZ7Db) : V.intl.string(V.t.p8FG1D);
    return (0, l.jsxs)("div", {
        className: eN.kL,
        children: [
            (0, l.jsx)("div", { className: eN.Tp }),
            (0, l.jsxs)("div", {
                className: eN.Qs,
                children: [
                    (0, l.jsx)(eu.D, {
                        className: eN.b,
                        "aria-label": V.intl.string(V.t.cpT0Cq),
                        onClick: i,
                        children: (0, l.jsx)(ed.P, {
                            size: "xs",
                            color: "currentColor",
                            "aria-label": V.intl.string(V.t.cpT0Cq),
                            className: eN.yP,
                        }),
                    }),
                    (0, l.jsx)("img", { alt: "", src: a, className: eN.Tn }),
                    (0, l.jsx)(em.h, { size: 22 }),
                    (0, l.jsx)(v.D, {
                        color: "text-strong",
                        variant: "heading-lg/extrabold",
                        className: eN.wx,
                        children: V.intl.string(V.t.cBjkcx),
                    }),
                    (0, l.jsx)(em.h, { size: 4 }),
                    (0, l.jsx)(w.E, {
                        color: "text-default",
                        variant: "text-md/normal",
                        className: eN.h_,
                        children: d,
                    }),
                    (0, l.jsx)(em.h, { size: 24 }),
                    (0, l.jsx)(ep.A, {
                        text: f,
                        onClick: function () {
                            (0, eI.pX)(eA.BVt.CHANNEL(s, e_.VV.ROLE_SUBSCRIPTIONS), { sourceLocationStack: o });
                        },
                    }),
                ],
            }),
        ],
    });
}
var eO = n(450510),
    ex = n(885386),
    eS = n(808728),
    ej = n(287809),
    eT = n(174459),
    ey = n(474090),
    eb = n(240248),
    eR = n(822123),
    ev = n(734057),
    eL = n(309010),
    eM = n(690521),
    eP = n(818645),
    eD = n(316884),
    ew = n(307731),
    ek = n(698279);
function eU(e) {
    let { intention: t, containerWidth: n, rowSize: i, isBurstReaction: s, analyticsObject: l } = e,
        r = ev.A.getChannel(eL.Ay.getChannelId()),
        a = r?.getGuildId(),
        o =
            t === ew.EmojiIntention.REACTION
                ? x.Ay.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice()
                : x.Ay.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        c = null != r ? x.Ay.getDisambiguatedEmojiContext(r.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        u =
            t === ew.EmojiIntention.REACTION
                ? x.Ay.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems
                : x.Ay.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        d = o.slice(0, u),
        m = null != a ? x.Ay.getGuildEmoji(a) : [],
        f = x.Ay.getDisambiguatedEmojiContext(r?.getGuildId()).getCustomEmoji(),
        { topEmojis: E, newlyAddedEmojis: I } = (0, eD.b)({ guildId: r?.getGuildId(), pickerIntention: t }),
        { visibleTopEmojis: g, visibleNewlyAddedEmojis: h } = (0, eP.W)({
            topEmojis: E,
            newlyAddedEmojis: I,
            rowSize: i,
        });
    N.Ay.trackWithMetadata(
        t === ew.EmojiIntention.REACTION ? eA.HAw.REACTION_PICKER_OPENED : eA.HAw.EXPRESSION_PICKER_OPENED,
        {
            width: n,
            tab: ek.kx.EMOJI,
            badged: !1,
            num_expressions_favorites: c.length,
            num_animated_expressions_favorites: c.filter((e) => e?.animated).length,
            num_custom_expressions_favorites: c.filter(eM.Ay.isCustomEmoji).length,
            num_standard_expressions_favorites: c.filter((e) => null == e.id).length,
            num_expressions_frecent: d.length,
            num_animated_expressions_frecent: d.filter((e) => e?.animated).length,
            num_custom_expressions_frecent: d.filter(eM.Ay.isCustomEmoji).length,
            num_standard_expressions_frecent: d.filter((e) => null == e.id).length,
            num_current_guild_expressions: m.length,
            num_custom_expressions_total: f.size,
            num_expressions_top_server: g.length,
            num_animated_expressions_top_server: g.filter((e) => e.animated).length,
            num_expressions_newly_added: h.length,
            num_animated_expressions_newly_added: h.filter((e) => e.animated).length,
            ...(t === ew.EmojiIntention.REACTION && { is_burst: s }),
            ...(null != l && { location_object: l }),
        },
    );
}
var eG = n(206248),
    eF = n(724651),
    eJ = n(732280),
    eV = n(783420),
    eK = n(158045),
    eB = n(202541);
let eH = { object: eA.ZSU.BUTTON_CTA, section: eA.JJy.SUPER_REACTION_PICKER };
function eX(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: i } = e,
        s = V.intl.string(V.t.eikz43),
        r = (0, eJ.V)(),
        a = (0, eF.O)(),
        o = r?.subscriptionTrial,
        c = null != o || null != a,
        u = o?.skuId ?? eB.pe.TIER_2,
        d = c
            ? null != a
                ? V.intl.formatToPlainString(V.t.bkQ4bH, { percent: a.discount.amount })
                : (0, eK.FY)({ intervalType: o?.interval, intervalCount: o?.intervalCount })
            : V.intl.string(V.t.sEAnVH);
    return (0, l.jsx)(eV.A, {
        subscriptionTier: u,
        premiumModalAnalyticsLocation: eH,
        onSubscribeModalClose: (e) => {
            e && i();
        },
        children: (e) => {
            let { onClick: r } = e;
            return (0, l.jsx)(eG.H, {
                targetElementRef: t,
                shouldShow: n,
                onRequestClose: i,
                position: "bottom",
                assetUrl: "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
                disableMediaViewer: !0,
                badge: c ? { type: "free_trial", variant: "expressive" } : void 0,
                title: V.intl.string(V.t.N4SCJ0),
                body: s,
                action: { text: d, variant: "expressive", icon: b.t, onClick: r },
            });
        },
    });
}
var eW = n(435558),
    ez = n.n(eW),
    eZ = n(837381),
    eY = n(460905),
    eq = n(775602),
    e$ = n(713517),
    eQ = n(938612);
function e0(e) {
    let { onClick: t } = e,
        n = V.intl.string(J.default["3D0GLv"]);
    return (0, l.jsx)("div", {
        className: eQ.n,
        children: (0, l.jsx)(j.m, {
            ariaHidden: !0,
            position: "right",
            text: n,
            children: (0, l.jsx)(eu.D, {
                "aria-label": n,
                className: eQ.x,
                onClick: t,
                children: (0, l.jsx)(G.T, { size: "md", color: "currentColor" }),
            }),
        }),
    });
}
var e1 = n(88218),
    e2 = n(407698),
    e3 = n(941971),
    e5 = n(531685),
    e4 = n(406810),
    e8 = n(27232),
    e6 = n(369606),
    e7 = n(413249),
    e9 = n(141060),
    te = n(687966),
    tt = n(115979),
    tn = n(524501),
    ti = n(926268),
    ts = n(138134),
    tl = n(7807),
    tr = n(732139);
let ta = r.memo(function (e) {
    let { categoryId: t, ...n } = e,
        i = (function (e) {
            switch (e) {
                case tr.R2.RECENT:
                    return e4.ClockIcon;
                case tr.R2.FAVORITES:
                    return e8.StarIcon;
                case tr.R2.TOP_GUILD_EMOJI:
                    return e6.TrophyIcon;
                case tr.R2.PEOPLE:
                    return eY.n;
                case tr.R2.NATURE:
                    return e7.p;
                case tr.R2.FOOD:
                    return e9.i;
                case tr.R2.ACTIVITY:
                    return te.GameControllerIcon;
                case tr.R2.TRAVEL:
                    return tt.h;
                case tr.R2.OBJECTS:
                    return tn.D;
                case tr.R2.SYMBOLS:
                    return ti.HeartIcon;
                case tr.R2.FLAGS:
                    return ts.FlagIcon;
                case tr.R2.PREMIUM_UPSELL:
                    return b.t;
                case tr.R2.SOUNDMOJI:
                    return tl.J;
                default:
                    return;
            }
        })(t);
    return null == i ? null : (0, l.jsx)(i, { color: "currentColor", ...n });
});
var to = n(724511),
    tc = n(132500),
    tu = n(770335),
    td = n(7584),
    tm = n(526292),
    tf = n(926972),
    tE = n(711014),
    tI =
        (((i = {})[(i.EMOJI = 0)] = "EMOJI"),
        (i[(i.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"),
        (i[(i.SOUNDMOJI = 2)] = "SOUNDMOJI"),
        i);
let tg = [ew.EmojiDisabledReasons.DISALLOW_EXTERNAL, ew.EmojiDisabledReasons.DISALLOW_CUSTOM];
var th = (((s = {})[(s.PREMIUM = 0)] = "PREMIUM"), (s[(s.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), s),
    tp = n(342379);
let tA = "expression-guild-",
    { itemIdForIndex: t_ } = (0, e1.J)(tA),
    tN = (0, eb.xI)(E.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    tC = (0, eb.xI)(E.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    tO = (0, eb.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    tx = (0, eb.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    tS = (0, eb.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    tj = (0, eb.xI)(tp.__invalid_unicodeCategoryShortcutHeight),
    tT = (0, eb.xI)(E.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    ty = (0, eb.xI)(E.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    tb = tO + tC + 2 * tS,
    tR = tN + tC,
    tv = tR + (tT + 2 * ty),
    tL = tO + tx + 2 * tS;
function tM(e) {
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
        { isHoveringOrFocusing: f } = (0, e$.A)(m),
        E = (0, eZ.rm)(t_(n)),
        I = a.type === tr.s.GUILD ? null : a.id,
        g = t === n,
        h = a.type === tr.s.GUILD ? a.guild : null,
        p = (0, l.jsxs)(eu.D, {
            innerRef: m,
            ...E,
            "aria-label": (0, eR.wt)(a, h),
            className: o()({
                [tp.ZG]: null != h,
                [tp.Bj]: null == h,
                [tp.s6]: null == h && g,
                [tp.xg]: a.type === tr.s.RECENT,
            }),
            onClick: () => {
                (null != h &&
                    eT.default.track(eA.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: i?.location,
                        tab: ek.kx.EMOJI,
                        guild_id: h.id,
                    }),
                    c(n));
            },
            children: [
                (0, l.jsx)("div", {
                    className: tp.a$,
                    children: (0, l.jsx)(e3.A, { hovered: f, selected: g, size: "small" }),
                }),
                null != h
                    ? (0, l.jsx)(to.A, { guild: h, isSelected: g, shouldAnimate: !d && u, isLocked: a.isNitroLocked })
                    : null,
                null == h && null != I
                    ? (0, l.jsx)(ta, { categoryId: I, className: tp.Yl, height: tO, width: tO, size: "custom" })
                    : null,
            ],
        }),
        A = s[n + 1],
        _ = null != A && a.type === tr.s.GUILD && A.type !== tr.s.GUILD;
    return null != h
        ? (0, l.jsxs)(r.Fragment, {
              children: [
                  (0, l.jsx)(e2.Q, { guild: h, children: p }),
                  _ ? (0, l.jsx)("hr", { className: tp.ny }, "separator") : null,
              ],
          })
        : p;
}
let tP = (e) => {
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
        E = es.Om.useStore((e) => e.activeCategoryIndex),
        I = (function (e) {
            let { emojiListRef: t } = e,
                n = (0, el.RQ)((e) => e.searchQuery),
                i = r.useCallback((e) => t.current?.scrollToSectionTop(e), [t]);
            return r.useCallback(
                (e) => {
                    "" !== n ? ((0, el.Ri)(""), es.Om.setActiveCategoryIndex(e)) : i(e);
                },
                [i, n],
            );
        })({ sectionDescriptors: i, emojiListRef: n }),
        g = (0, p.p)(),
        h = (0, eR.ss)(s, a, { guildId: a?.guild_id ?? c, shouldShowSoundmojiInEmojiPicker: u }),
        A = r.useMemo(() => (d ? (0, eR.CQ)() : h), [h, d]),
        _ = r.useRef(null),
        N = (0, m.bG)([e5.A], () => e5.A.isFocused()),
        C = (0, m.bG)([eq.Ay], () => eq.Ay.useReducedMotion, []),
        O = r.useMemo(
            () =>
                ez().memoize(
                    (e, t) => {
                        let n = A[t];
                        if (null != n)
                            return (0, l.jsx)(
                                tM,
                                {
                                    activeIndex: E,
                                    analyticsContext: g,
                                    categories: A,
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
            [E, g, A, I, N, C],
        ),
        x = r.useMemo(() => [8, 8, 0, 8], []),
        S = r.useCallback(
            (e, t) => {
                let n = A[t];
                if (n.type === tr.s.RECENT) return tb;
                if (n.type === tr.s.GUILD) {
                    let e = A[t + 1];
                    return null != e && e.type !== tr.s.GUILD ? tv : tR;
                }
                return tL;
            },
            [A],
        ),
        {
            nonUnicodeCategoryCount: j,
            firstUnicodeCategoryIndex: T,
            firstUnicodeCategoryOffsetTop: y,
            rowCountBySection: b,
        } = r.useMemo(() => {
            let e = 0,
                t = 0,
                n = 0,
                i = 0;
            A.forEach((s) => {
                s.type === tr.s.GUILD
                    ? ((t += 1), (n += 1))
                    : s.type === tr.s.UNICODE
                      ? (i += 1)
                      : ((e += 1), (t += 1));
            });
            let s = tb + t * tR + tv;
            return {
                nonUnicodeCategoryCount: t,
                firstUnicodeCategoryIndex: t,
                firstUnicodeCategoryOffsetTop: s,
                rowCountBySection: [e, n, i],
            };
        }, [A]),
        [R, v] = r.useState(!0);
    r.useLayoutEffect(() => {
        v(j >= 7);
    }, [j]);
    let L = r.useCallback(
            (e) => {
                let t = _.current?.getListDimensions();
                null == t || (e + t.height - tT >= y ? v(!1) : v(!0));
            },
            [y],
        ),
        M = r.useCallback(
            (e) => {
                (e(T), _.current?.scrollTo(y));
            },
            [y, T],
        ),
        P = r.useCallback(
            (e, t) => {
                let n = A[e];
                if (null == n) return 0;
                let i = R ? tj : 0;
                if (n.type === tr.s.RECENT) return t ? 0 : tx;
                if (n.type === tr.s.GUILD) {
                    let n = A[e + 1];
                    return null != n && n.type !== tr.s.GUILD ? (t ? tT + -2 * ty + tC + i : tC) : t ? i : tC;
                }
                return t ? tC + i : 2 * tC;
            },
            [A, R],
        ),
        D = r.useMemo(
            () =>
                function (e, t) {
                    return (0, l.jsx)(r.Fragment, { children: t }, e);
                },
            [],
        ),
        w = R ? "shortcut" : "hiddenshortcut";
    return (0, l.jsx)(e1.A, {
        categoryListRef: _,
        expressionsListRef: n,
        className: t,
        store: es.Om,
        categories: A,
        listPadding: x,
        onScroll: L,
        renderCategoryListItem: O,
        renderSection: D,
        rowCount: A.length,
        categoryHeight: S,
        getScrollOffsetForIndex: P,
        rowCountBySection: b,
        navId: "emoji-picker-categories",
        itemIdPrefix: tA,
        emojiPacksHeader: null != f ? (0, l.jsx)(e0, { onClick: f }) : null,
        children: (e) =>
            j >= 7 &&
            (0, l.jsx)(
                eu.D,
                {
                    "aria-hidden": !R,
                    "aria-label": V.intl.string(V.t.dT0ctw),
                    className: o()(tp.KB, { [tp.h_]: !R }),
                    tabIndex: R ? 0 : -1,
                    onClick: () => M(e),
                    children: (0, l.jsx)(eY.n, { size: "custom", color: "currentColor", height: tO, width: tO }),
                },
                w,
            ),
    });
};
var tD = n(49999),
    tw = n(860197);
let tk = function (e) {
    let { markAsDismissed: t } = e;
    return (0, l.jsxs)(w.E, {
        variant: "text-xs/medium",
        color: "text-default",
        className: tw.iE,
        children: [
            (0, l.jsx)(ti.HeartIcon, { size: "md", color: "currentColor", className: tw.Kk }),
            (0, l.jsx)("div", {
                className: tw.Qs,
                children: (0, l.jsx)(w.E, { variant: "text-xs/normal", children: V.intl.string(V.t.xdRf69) }),
            }),
            (0, l.jsx)(eu.D, {
                onClick: () => t(tD.i.UNKNOWN),
                children: (0, l.jsx)(ed.P, { size: "md", color: "currentColor", className: tw.VN }),
            }),
        ],
    });
};
var tU = n(308941),
    tG = n(717421),
    tF = n(343032),
    tJ = n(683063),
    tV = n(131607),
    tK = n(748798);
let tB = { tension: 750, mass: 2.5, friction: 70 };
function tH(e) {
    let { checked: t, onClick: n, buttonRef: i } = e,
        s = (0, m.bG)([eq.Ay], () => eq.Ay.useReducedMotion),
        a = ej.default.getCurrentUser(),
        c = null != a && !(0, eK.TW)(a),
        u = c ? [] : [f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP],
        [d, E] = (0, tV.kn)(u),
        [I, g] = r.useState(!1),
        [h, p] = (0, tG.z)(() => ({})),
        A = (0, tU.animated)(tF.i);
    r.useEffect(() => {
        let e = d === f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (E(tD.i.DISMISS), setTimeout(() => g(e), 200));
    }, [d, E]);
    let _ = I ? V.intl.string(V.t["Osi/uy"]) : t && !c ? V.intl.string(V.t["5cRA/b"]) : V.intl.string(V.t.buV4av),
        N = I ? V.intl.string(V.t.ORK94p) : void 0;
    return (0, l.jsx)(tJ.u, {
        position: "top",
        title: N,
        body: _,
        asset: (0, l.jsx)(b.t, { size: "md", color: "currentColor" }),
        assetSize: 20,
        forceOpen: I,
        children: (0, l.jsx)(eu.D, {
            innerRef: i,
            "aria-label": _,
            "aria-pressed": t,
            onClick: function () {
                (p({ from: { rotate: t ? "360deg" : "0deg" }, to: { rotate: t ? "0deg" : "360deg" }, config: tB }),
                    n?.(),
                    g(!1));
            },
            focusProps: { enabled: !1 },
            className: o()(tK.Pf, { [tK.wM]: t }),
            children: (0, l.jsx)(A, {
                style: s ? void 0 : h,
                size: "custom",
                width: 20,
                height: 20,
                color: t ? "white" : "currentColor",
                className: tK.Kk,
            }),
        }),
    });
}
var tX = n(821609),
    tW = n(644508),
    tz = n(824832),
    tZ = n(267102),
    tY = n(242812);
function tq(e) {
    let { channel: t, closePopout: n } = e,
        i = r.useRef(null),
        s = r.useRef(0),
        [a, o] = r.useState(!1),
        [c, u] = r.useState(!1),
        d = (0, tZ.Us)() === eA.BRT.OVERLAY,
        m = c || a,
        f = r.useCallback(
            async (e, i, l) => {
                (u(!0),
                    n(),
                    await (0, tW.f)({
                        userImage: { data: e, file: i, image: l },
                        guildId: t?.guild_id ?? null,
                        analyticsLocation: {
                            section: eA.JJy.EXPRESSION_PICKER,
                            page: t?.guild_id != null ? eA.liQ.GUILD_CHANNEL : eA.liQ.DM_CHANNEL,
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
                text: d ? V.intl.string(V.t.RMbedC) : null,
                children: (0, l.jsx)(tX.$, {
                    text: V.intl.string(V.t.iMJO37),
                    variant: "secondary",
                    onClick: function () {
                        i.current?.activateUploadDialogue();
                    },
                    disabled: m || d,
                }),
            }),
            (0, l.jsx)("div", {
                className: tY.F,
                children: (0, l.jsx)(tz.Ay, { ref: i, onChange: f, setLoading: o, disabled: m }, s.current),
            }),
        ],
    });
}
n(667532);
var t$ = n(833272),
    tQ = n(82495),
    t0 = n(260762),
    t1 = n(915089),
    t2 = n(650583),
    t3 = n(683829);
let t5 = (0, t1.Ld)(),
    t4 = t$.A.convert.fromCodePoint("1f44f"),
    t8 = (0, eb.xI)(E.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
function t6(e) {
    switch (t$.A.convert.toCodePoint(e)) {
        case "1f3fb":
            return V.intl.string(V.t["BVK5b/"]);
        case "1f3fc":
            return V.intl.string(V.t.xJWOK8);
        case "1f3fd":
            return V.intl.string(V.t["MB+T5g"]);
        case "1f3fe":
            return V.intl.string(V.t.MODud2);
        case "1f3ff":
            return V.intl.string(V.t["0uzqsc"]);
        default:
            return V.intl.string(V.t.bGN1ow);
    }
}
let t7 = (e) => {
    let { fade: t, surrogate: n, onClick: i, delay: s, index: r } = e,
        a = (0, eZ.rm)(`item-${r}`),
        o = eM.Ay.getURL(t4 + n),
        c = (0, tG.z)({ opacity: 1, from: { opacity: +!t }, delay: s }, "animate-always");
    return (0, l.jsx)(eu.D, {
        ...a,
        role: "option",
        "aria-selected": 0 === r,
        onClick: () => i(n),
        className: t3.B6,
        children: (0, l.jsx)(tU.animated.div, {
            "aria-label": t6(n),
            className: t3.g4,
            style: { backgroundImage: `url("${o}")`, ...c },
        }),
    });
};
function t9(e) {
    let { id: t, selectedSurrogate: n, onClick: i } = e,
        s = (0, t0.A)("diversity"),
        a = (0, tG.z)({ height: (t8 + 14) * (td.W$.length + 1), from: { height: t8 + 14 }, config: { duration: 125 } }),
        o = r.useRef(s);
    r.useEffect(() => {
        o.current.focusFirstVisibleItem();
    }, []);
    let c = ["", ...td.W$];
    return (
        ez().remove(c, (e) => e === n),
        c.unshift(n),
        (0, l.jsx)(eZ.hD, {
            navigator: s,
            children: (0, l.jsx)(eZ.PR, {
                children: (e) => {
                    let { ref: n, ...s } = e;
                    return (0, l.jsx)(tU.animated.div, {
                        ...s,
                        id: t,
                        ref: n,
                        className: t3.J6,
                        style: a,
                        role: "listbox",
                        children: c.map((e, t) =>
                            (0, l.jsx)(t7, { index: t, fade: 0 !== t, delay: 20 * t, surrogate: e, onClick: i }, t),
                        ),
                    });
                },
            }),
        })
    );
}
let ne = function (e) {
    let { searchBarRef: t, selectedSurrogate: n, className: i } = e,
        s = eM.Ay.getURL(t4 + n),
        [a, c] = r.useState(!1),
        u = (0, tQ.A)(null, () => c(!1)),
        d = r.useRef(null);
    return (0, l.jsxs)("div", {
        ref: u,
        className: o()(t3.fx, i),
        children: [
            (0, l.jsx)(eu.D, {
                innerRef: d,
                className: t3.Dj,
                onClick: function () {
                    c(!0);
                },
                "aria-label": V.intl.formatToPlainString(V.t["2SfnMp"], { skinTone: t6(n) }),
                "aria-haspopup": !0,
                "aria-expanded": a,
                "aria-controls": t5,
                tabIndex: a ? -1 : 0,
                children: (0, l.jsx)("div", { className: t3.g4, style: { backgroundImage: `url("${s}")` } }),
            }),
            a
                ? (0, l.jsx)("div", {
                      onKeyDown: function (e) {
                          e.key === t2.dh.ESCAPE
                              ? (e.stopPropagation(), c(!1), null != d.current && d.current.focus())
                              : "Tab" === e.key && c(!1);
                      },
                      children: (0, l.jsx)(t9, {
                          id: t5,
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
var nt = n(462180),
    nn = n(602034),
    ni = n(683438);
let ns = r.memo(function (e) {
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
        d = (0, el.RQ)((e) => e.searchQuery),
        [m, f, E] = es.Om.useStore((e) => [e.inspectedExpressionPosition, e.searchPlaceholder, e.hasInteracted], nt.x),
        I = r.useCallback(
            (e) => {
                (es.Om.setActiveCategoryIndex("" === e ? 0 : -1),
                    es.Om.setInspectedExpressionPosition(0, 0),
                    es.Om.setSearchPlaceholder(null),
                    (0, el.Ri)(e),
                    t.current?.scrollTo(0));
            },
            [t],
        ),
        g = r.useCallback(() => {
            I("");
        }, [I]);
    return (
        r.useImperativeHandle(c, () => ({ focus: () => u.current?.focus() })),
        (0, l.jsx)(ni.I, {
            autoFocus: a,
            query: d,
            ref: u,
            placeholder: f ?? o,
            onClear: g,
            onKeyDown: function (e) {
                switch (e.key) {
                    case t2.dh.ARROW_LEFT:
                    case t2.dh.ARROW_RIGHT:
                    case t2.dh.ARROW_UP:
                    case t2.dh.ARROW_DOWN:
                        document.activeElement !== e.target && e.preventDefault();
                }
                i(e);
            },
            onFocus: s,
            onChange: I,
            inputProps: {
                role: "combobox",
                "aria-label": V.intl.string(V.t.tCauZX),
                "aria-haspopup": "grid",
                "aria-autocomplete": "list",
                "aria-controls": n,
                "aria-expanded": !0,
                ...(E ? { "aria-activedescendant": (0, nn.Aq)(n, m.columnIndex, m.rowIndex) } : void 0),
            },
        })
    );
});
var nl = n(381575);
let nr = function (e) {
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
            closePopout: p,
        } = e,
        A = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(ns, {
                    emojiListRef: r,
                    gridNavigatorId: tr.lq,
                    onKeyDown: a,
                    ref: d,
                    onFocus: c,
                    autoFocus: u,
                    defaultSearchPlaceholder: (0, eR.wT)(i, f),
                }),
                i === ew.EmojiIntention.REACTION ? (0, l.jsx)(tH, { checked: f, onClick: E, buttonRef: I }) : null,
                n ?? (0, l.jsx)(ne, { searchBarRef: d, className: nl.fx, selectedSurrogate: m }),
                i !== ew.EmojiIntention.NO_CUSTOM_EMOJI && h ? (0, l.jsx)(tq, { channel: t, closePopout: p }) : null,
            ],
        });
    return (0, l.jsx)("div", { className: o()(nl.wx, s), children: null != g ? g(A) : A });
};
var na = n(182922),
    no = n(363195),
    nc = n(486020),
    nu = n(977566);
function nd(e) {
    return null != e && "animated" in e;
}
let nm = r.memo(function (e) {
    let t,
        i,
        { className: s, emojiGrid: a, guildId: o, pickerIntention: c, channel: u } = e,
        d = es.Om.useStore((e) => e.inspectedExpressionPosition),
        f = r.useMemo(() => {
            let { rowIndex: e, columnIndex: t } = d;
            return a[e]?.[t];
        }, [a, d]);
    switch (f?.type) {
        case tI.EMOJI:
            t = f?.emoji;
            break;
        case tI.EXPAND_OR_COLLAPSE_EMOJIS:
            t = { type: "EXPAND_OR_COLLAPSE_EMOJI", guildId: f?.guildId, allNamesString: f?.name };
            break;
        case tI.SOUNDMOJI:
        default:
            t = null;
    }
    let E = (0, m.bG)([eg.A], () => (null !== t && t.type === tu.i.GUILD ? eg.A.getGuild(t.guildId) : null), [t]),
        I = (0, m.bG)([e5.A], () => e5.A.isFocused()),
        g = (0, m.bG)([eq.Ay], () => eq.Ay.useReducedMotion, []),
        h = ex.Sf.useSetting(),
        p = (0, eR.O7)(o, nd(t) ? t : null),
        A = (0, m.bG)([x.Ay], () => x.Ay.expandedSectionsByGuildIds),
        { newlyAddedEmojis: _ } = (0, eD.A)(o, c),
        N = f?.type === tI.EMOJI ? f.subCategory : tr.tm.NONE;
    if (
        (r.useEffect(() => {
            let e = Date.now();
            return () => {
                Date.now() - e >= 250 &&
                    nd(t) &&
                    N !== tr.tm.NONE &&
                    (N === tr.tm.NEWLY_ADDED_EMOJI &&
                        null !== t &&
                        t.type === tu.i.GUILD &&
                        (0, ei.mz)(t.guildId, _[0].id),
                    null != d.source &&
                        (0, eR.yB)({
                            emoji: t,
                            subCategory: N,
                            position: f.columnIndex + 1,
                            newlyAddedHighlight: N === tr.tm.NEWLY_ADDED_EMOJI && en.isNewerThanLastSeen(o, t.id),
                        }));
            };
        }),
        null == t)
    )
        return null;
    let C = (function (e, t) {
            let { allowAnimatedEmoji: i, sectionsExpandedFromThreeRows: s, theme: r } = t;
            if (nd(e)) {
                let t = null != e.id ? nc.Ay.getEmojiURL({ id: e.id, animated: i && e.animated, size: 28 }) : e.url;
                return "" === t
                    ? (0, l.jsx)(w.E, {
                          variant: "text-md/normal",
                          className: nu.J_,
                          children: "surrogates" in e ? e.surrogates : null,
                      })
                    : (0, l.jsx)("img", { alt: (0, eM.N)(e) ?? "", src: t, className: nu.Zg });
            }
            if ("EXPAND_OR_COLLAPSE_EMOJI" !== e.type) return null;
            {
                let t = n(619508),
                    i = n(404828),
                    a = n(600003),
                    o = n(318121);
                return s.has(e.guildId)
                    ? (0, l.jsx)("img", { className: nu.Kk, src: (0, ec.M)(r) ? a : o, alt: "" })
                    : (0, l.jsx)("img", { className: nu.Kk, src: (0, ec.M)(r) ? t : i, alt: "" });
            }
        })(t, { allowAnimatedEmoji: h, sectionsExpandedFromThreeRows: A, theme: no.A.theme }),
        O =
            null != E
                ? (0, l.jsx)(to.A, { className: nu.__invalid_guildIcon, guild: E, shouldAnimate: !g && I })
                : null;
    i =
        "EXPAND_OR_COLLAPSE_EMOJI" === t.type
            ? A.has(t.guildId)
                ? V.intl.string(V.t["/K2RDH"])
                : V.intl.string(V.t.NZI2Zk)
            : (0, eM.N)(t);
    let S = (function (e) {
        let { inspectedEmoji: t, guild: n } = e,
            i = nd(t);
        return null != n && i ? V.intl.format(V.t.KFW2aY, { guildName: n.name }) : null;
    })({ inspectedEmoji: t, channel: u, guildId: o, intention: c, guild: E });
    return (0, l.jsx)(na.A, {
        className: s,
        graphicPrimary: C,
        graphicSecondary: O,
        titlePrimary: i,
        titleSecondary: S,
        isFavorite: p,
        emojiSubCategory: N,
    });
});
n(30146);
var nf = n(607399),
    nE = n(765178),
    nI = n(537652),
    ng = n(962125),
    nh = n(240864),
    np = n(286509),
    nA = n(89366),
    n_ = n(10392),
    nN = n(82498),
    nC = n(202639),
    nO = n(414872),
    nx = n(285373),
    nS = n(559106),
    nj = n(304072),
    nT = n(189551),
    ny = n(289873),
    nb = n(796774),
    nR = n(209932),
    nv = n(817232),
    nL = n(576705);
n(980504);
var nM = n(818348),
    nP = n(821425);
let nD = r.memo(function (e) {
    let t,
        n,
        i,
        s,
        { channelId: a, onSelectSoundmoji: o } = e,
        c = (0, m.bG)([nR.A], () => !nR.A.isFetching() && !nR.A.hasFetchedAllSounds(), []),
        u = (0, m.bG)([ev.A], () => ev.A.getChannel(a)),
        d =
            ((t = (0, m.bG)([ej.default], () => eK.Ay.canUseSoundboardEverywhere(ej.default.getCurrentUser()))),
            (n = (0, m.bG)([nR.A], () => nR.A.getSoundsForGuild("0"))),
            (i = (0, m.yK)([eg.A], () => eg.A.getGuildIds())),
            (s = r.useMemo(() => nL.A.can(nM.xB.USE_EXTERNAL_SOUNDS, u), [u])),
            r.useMemo(() => {
                let e = [];
                if (t && s) {
                    let t = i.flatMap((e) => nR.A.getSoundsForGuild(e)?.filter((e) => e.available) ?? []);
                    e.push(...ez().sampleSize(t, 4));
                } else if (u?.guild_id != null) {
                    let t = nR.A.getSoundsForGuild(u?.guild_id)?.filter((e) => e.available);
                    e.push(...ez().sampleSize(t, 4));
                }
                return (e.length < 4 && e.push(...ez().sampleSize(n ?? [], 4 - e.length)), e);
            }, [s, u?.guild_id, n, i, t]));
    return (r.useEffect(() => {
        (0, nb.E7)();
    }, [c]),
    0 === d.length)
        ? (0, l.jsx)(ny.y, {})
        : (0, l.jsx)("div", {
              className: nP.q,
              children: d.map((e, t) =>
                  (0, l.jsx)(
                      nv.Ay,
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
var nw = n(594061),
    nk = n(771104),
    nU = n(442433),
    nG = n(147421),
    nF = n(723702),
    nJ = n(140735),
    nV = n(194261),
    nK = n(703413);
let nB = (e) => {
    let { src: t, alt: n, size: i, "aria-label": s, className: a } = e,
        c = r.useRef(null),
        u = r.useRef(!1),
        d = u.current ? nK.S : nK.Y;
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
                          ((u.current = !0), c.current.classList.remove(nK.Y), c.current.classList.add(nK.S));
                  });
              },
    });
};
var nH = n(955388);
let nX = ez().memoize(
        (e) =>
            `${e * ew.EmojiSprites.NonDiversityPerRow}px ${e * Math.ceil(td.Ay.numNonDiversitySprites / ew.EmojiSprites.NonDiversityPerRow)}px`,
    ),
    nW = ez().memoize(
        (e) =>
            `${e * ew.EmojiSprites.DiversityPerRow}px ${e * Math.ceil(td.Ay.numDiversitySprites / ew.EmojiSprites.DiversityPerRow)}px`,
    ),
    nz = r.memo(function (e) {
        let { emoji: t, size: i, surrogateCodePoint: s, allowAnimatedEmoji: a, "aria-label": c, isLocked: u } = e,
            d = (() => {
                if (!t.useSpriteSheet) {
                    let e =
                        null == t.id
                            ? t.url
                            : nc.Ay.getEmojiURL({ id: t.id, animated: a && t.animated, size: ew.EMOJI_URL_BASE_SIZE });
                    return null != e
                        ? (0, l.jsx)(nB, {
                              className: nH.N1,
                              "aria-label": c,
                              src: e,
                              size: i,
                              alt: (0, eM.N)(t) ?? "",
                          })
                        : null;
                }
                return (0, l.jsx)("div", {
                    className: o()(nH.xA, { [nH.N1]: u }),
                    style: (function (e, t, i) {
                        let s, l, r;
                        if (!e.useSpriteSheet) return;
                        let a = null != e.index ? e.index : 0;
                        e.hasDiversity
                            ? ((s = n(12303)(`./spritesheet-${t}-${i}.png.js`).default),
                              (l = nW(i)),
                              (r = ew.EmojiSprites.DiversityPerRow))
                            : ((s = n(145519)(`./spritesheet-emoji-${i}.png.js`).default),
                              (l = nX(i)),
                              (r = ew.EmojiSprites.NonDiversityPerRow));
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
                    children: (0, l.jsx)(nJ.A, { children: c }),
                });
            })();
        return (0, l.jsxs)(r.Fragment, {
            children: [
                d,
                u
                    ? (0, l.jsx)("div", {
                          className: nH.iD,
                          children: (0, l.jsx)(nV.LockIcon, { size: "xs", color: "currentColor", className: nH.fi }),
                      })
                    : null,
            ],
        });
    });
var nZ = n(537911);
function nY(e) {
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
            inNitroLockedSection: p,
            ref: A,
            ..._
        } = e,
        N = (0, m.bG)([eg.A], () => (n.type === tu.i.GUILD ? eg.A.getGuild(n.guildId) : void 0), [n]);
    return (0, l.jsx)(nS.vN, {
        children: (0, l.jsx)("button", {
            ..._,
            className: o()(nZ._X, { [nZ.lG]: s, [nZ.Lh]: r, [nZ.Bx]: a, [h ?? ""]: a, [nZ.TV]: u }),
            "data-type": er.g.EMOJI,
            "data-id": n.id,
            "data-name": n.name,
            "data-surrogates": "surrogates" in n ? n.surrogates : null,
            "data-animated": n.animated ? "true" : null,
            ref: A,
            children: (0, l.jsx)(nz, {
                "aria-label":
                    ((t = (0, eM.N)(n)),
                    (N?.name != null &&
                        (t = V.intl.formatToPlainString(V.t["nXv4/B"], { names: t, guildName: N.name })),
                    i)
                        ? V.intl.formatToPlainString(V.t["9FI9Z0"], { names: t })
                        : t),
                columnIndex: d,
                rowIndex: f,
                emoji: n,
                size: E,
                surrogateCodePoint: I,
                allowAnimatedEmoji: g,
                isLocked: c && !p,
            }),
        }),
    });
}
function nq(e) {
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
            isMediumSize: p,
            isLargeSize: A,
            pulseItemKey: _,
            allowAnimatedEmoji: N,
            setPulseItemKey: C,
            messageId: O,
            isBurstReaction: S,
            rowPosition: T,
            inNitroLockedSection: y,
        } = e,
        [b, R] = r.useState(""),
        v = (0, m.bG)([eq.Ay], () => eq.Ay.useReducedMotion),
        L = (0, m.bG)([x.Ay], () => x.Ay.getDisambiguatedEmojiContext(o), [o]),
        M = r.useRef(null),
        { emoji: P, size: D, isDisabled: w, columnIndex: k } = t;
    function U() {
        d.current || f.current || c(t);
    }
    let { ref: G, tabIndex: F, onFocus: J, ...K } = h(k, a) ?? {},
        B =
            b !== `${k}:${a}`
                ? (0, l.jsx)(nY, {
                      ref: G,
                      emoji: P,
                      isFavorite: L.isFavoriteEmojiWithoutFetchingLatest(P),
                      isLargeSize: A,
                      isMediumSize: p,
                      isInspected: s,
                      isDisabled: w,
                      showPulse: _ === i,
                      allowAnimatedEmoji: N,
                      onFocus: J ?? U,
                      onMouseMove: U,
                      onClick: (e) => {
                          if (
                              null != M.current &&
                              null != T &&
                              null != O &&
                              !e.shiftKey &&
                              null != P.name &&
                              S &&
                              !v &&
                              N
                          ) {
                              let e = null == P.id ? td.Ay.convertNameToSurrogate(P.name) : P.name,
                                  t = M.current.getBoundingClientRect();
                              ((t.x = T.x + (k + 1) * D), R(`${k}:${a}`), (0, nG.h)(O, e, P.id, t));
                          }
                          !(function (e) {
                              if ((e.stopPropagation(), d.current || f.current)) return;
                              let n = e.altKey;
                              (n &&
                                  !x.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(P) &&
                                  C(i),
                                  (0, eO.sF)(eO._2.FAVORITE_EMOJI_TOOLTIP),
                                  u(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n }));
                          })(e);
                      },
                      onContextMenu: function (e) {
                          (0, nU.L3)(e, async () => {
                              let { default: e } = await Promise.all([
                                  n.e("638221"),
                                  n.e("73500"),
                                  n.e("496715"),
                                  n.e("293697"),
                                  n.e("904774"),
                                  n.e("446132"),
                              ]).then(n.bind(n, 233503));
                              return (t) => (0, l.jsx)(e, { ...t });
                          });
                      },
                      tabIndex: F,
                      columnIndex: k,
                      rowIndex: a,
                      size: D,
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
                  text: V.intl.formatToPlainString(V.t.glqNsf, { key: (0, nF.isMac)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: B,
              })
            : B,
    );
}
let n$ = (e) => {
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
            channelGuildId: p,
            category: A,
            selectedItemClassName: _,
            channelId: N,
            messageId: C,
            isBurstReaction: O,
            inNitroLockedSection: x,
            handleScrollUpOnSectionCollapse: S,
        } = e,
        j = n(619508),
        T = n(404828),
        y = n(600003),
        b = n(318121),
        R = n(443336),
        v = n(258901),
        L = n(135974),
        M = n(8013),
        P = (0, ef.Ay)(),
        D = es.Om.getState(),
        [k, U] = r.useState(D.inspectedExpressionPosition),
        [G, F] = (0, nj.A)(null, 300),
        J = r.useRef(null);
    (r.useEffect(
        () =>
            es.Om.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => U(e),
            ),
        [],
    ),
        r.useEffect(() => {
            nw.bW.loadIfNecessary();
        }, []));
    let K = i === tr.as.LARGE,
        B = i === tr.as.MEDIUM;
    function H(e) {
        let t = `${e.rowIndex}c${e.columnIndex}`;
        switch (e.type) {
            case tI.EXPAND_OR_COLLAPSE_EMOJIS: {
                let { visibleRowIndex: n, columnIndex: i } = e,
                    a = k.rowIndex === n && k.columnIndex === i,
                    u = e.sectionCollapsedToThreeRows
                        ? a
                            ? (0, ec.M)(P)
                                ? v
                                : M
                            : (0, ec.M)(P)
                              ? j
                              : T
                        : a
                          ? (0, ec.M)(P)
                              ? R
                              : L
                          : (0, ec.M)(P)
                            ? y
                            : b,
                    m = V.intl.string(e.sectionCollapsedToThreeRows ? V.t.NZI2Zk : V.t["/K2RDH"]);
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
                        { ref: p, tabIndex: A, onFocus: N, ...C } = d(h, I) ?? {},
                        O = k.rowIndex === g && k.columnIndex === h;
                    function x() {
                        f.current || E.current || c(e);
                    }
                    return (0, r.createElement)(
                        "li",
                        { ...C, key: t },
                        (0, l.jsx)(nS.vN, {
                            children: (0, l.jsx)("button", {
                                "aria-label": u,
                                ref: p,
                                className: o()(nZ._X, {
                                    [nZ.lG]: K,
                                    [nZ.Lh]: B,
                                    [nZ.Bx]: O && !m,
                                    [_ ?? ""]: O,
                                    [nZ.TV]: G === t,
                                }),
                                onFocus: N ?? x,
                                onMouseOver: x,
                                onMouseEnter: n,
                                onMouseLeave: i,
                                onClick: s,
                                tabIndex: A,
                                children: a,
                            }),
                        }),
                    );
                })({
                    handleSelect: function (t) {
                        e.type !== tI.EXPAND_OR_COLLAPSE_EMOJIS ||
                            (t.stopPropagation(),
                            f.current ||
                                E.current ||
                                (s(e, { isFinalSelection: !0, toggleFavorite: !1 }),
                                (0, nT.G)(e.guildId),
                                e.sectionCollapsedToThreeRows || S(),
                                eT.default.track(eA.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                    collapsed: e.sectionCollapsedToThreeRows,
                                    guild_id: e.guildId,
                                })));
                    },
                    icon: (0, l.jsx)("img", { className: nZ.Kk, src: u, alt: "" }),
                    ariaLabel: m,
                    shouldShowRoundHighlight: !0,
                });
            }
            case tI.EMOJI: {
                let { columnIndex: n, visibleRowIndex: i } = e,
                    r = k.rowIndex === i && k.columnIndex === n;
                return (0, l.jsx)(
                    nq,
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
                        channelGuildId: p,
                        getEmojiItemProps: d,
                        isMediumSize: B,
                        isLargeSize: K,
                        pulseItemKey: G,
                        setPulseItemKey: F,
                        showEmojiFavoriteTooltip: h,
                        messageId: C,
                        isBurstReaction: O,
                        rowPosition: J?.current?.getBoundingClientRect(),
                        inNitroLockedSection: x,
                    },
                    t,
                );
            }
            case tI.SOUNDMOJI:
                return;
        }
    }
    function X(e) {
        return (0, l.jsx)("ul", {
            ...m(I),
            className: o()(nZ.ND, { [nZ.HO]: K, [nZ.X$]: B }),
            ref: J,
            children: e.map(H),
        });
    }
    if (A === tr.R2.SOUNDMOJI)
        return (0, l.jsx)("ul", {
            className: nZ.ND,
            ref: J,
            children: (0, l.jsx)(nD, { channelId: N, onSelectSoundmoji: a }),
        });
    if (A !== tr.s.TOP_GUILD_EMOJI) return X(t);
    let W = t.filter(
            (e) =>
                e.subCategory === tr.tm.TOP_GUILD_EMOJI ||
                (e.subCategory === tr.tm.NEWLY_ADDED_EMOJI &&
                    e.emoji.type === tu.i.GUILD &&
                    !en.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
        ),
        z = t.filter(
            (e) =>
                e.subCategory === tr.tm.NEWLY_ADDED_EMOJI &&
                e.emoji.type === tu.i.GUILD &&
                en.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id),
        );
    return 0 === z.length
        ? X(t)
        : (0, l.jsxs)("div", {
              className: nZ.Ng,
              children: [
                  (0, l.jsx)("div", { className: o()(nZ.V6, { [nZ.$3]: 0 === W.length }), children: X(W) }),
                  (0, l.jsxs)("div", {
                      className: nZ.bc,
                      children: [
                          (0, l.jsx)("div", {
                              className: o()(nZ.eE, { [nZ.eM]: 1 === z.length, [nZ.Wk]: W.length > 0 }),
                              children: X(z),
                          }),
                          (0, l.jsxs)("div", {
                              className: o()(nZ.lD, { [nZ.EI]: K, [nZ.qU]: B, [nZ.Wk]: W.length > 0 }),
                              children: [
                                  (0, l.jsx)(nk.A, { foreground: nZ.rI }),
                                  (0, l.jsx)(w.E, {
                                      variant: "text-xs/semibold",
                                      color: "text-overlay-light",
                                      children: V.intl.string(V.t.y2b7CA),
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
};
var nQ = n(618723);
let n0 = (0, eb.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    n1 = (0, eb.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    n2 = (0, eb.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    n3 = (0, eb.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    n5 = (0, eb.xI)(E.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    n4 = (0, eb.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    n8 = (0, eb.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    n6 = r.memo(function (e) {
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
                getEmojiItemProps: A,
                getEmojiRowProps: N,
                rowCount: O,
                isUsingKeyboardNavigation: x,
                channelGuildId: S,
                channelId: j,
                messageId: T,
                isBurstReaction: y,
                listHeaderClassName: b,
            } = e,
            R = r.useRef(!1),
            v = es.Om.useStore((e) => e.activeCategoryIndex),
            L = (0, el.RQ)((e) => e.searchQuery),
            M = ex.Sf.useSetting(),
            P = (0, m.bG)([ej.default], () => ej.default.getCurrentUser()),
            D = (0, ey.ki)(P),
            { location: k } = (0, p.p)(),
            { analyticsLocations: U } = (0, C.Ay)(),
            [G, F] = r.useState(0),
            [J, K] = r.useState(!1),
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
                        allowAnimatedEmoji: A,
                        channelGuildId: _,
                        channelId: N,
                        messageId: C,
                        isBurstReaction: O,
                        listHeaderClassName: x,
                        activeSectionIndex: S,
                        emojiListRef: j,
                    } = e,
                    T = (0, p.p)(),
                    y = r.useRef(eA.An1),
                    b = r.useMemo(() => ("" !== n ? t$.A.convert.toCodePoint(n) : ""), [n]),
                    R = r.useCallback(
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
                                    eT.default.track(eA.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                        location: T.location,
                                        tab: ek.kx.EMOJI,
                                        collapsed: !s,
                                        guild_id: n.id,
                                    }),
                                e === tr.R2.SOUNDMOJI &&
                                    eT.default.track(eA.HAw.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, { collapsed: !s }),
                                f(i));
                        },
                        [T, t, f],
                    ),
                    M = r.useCallback((e) => {
                        let { columnIndex: t, visibleRowIndex: n } = e,
                            i = e.type === tI.SOUNDMOJI ? null : e.type === tI.EMOJI ? (0, eM.N)(e.emoji) : e.name;
                        (y.current !== eA.An1 && window.cancelAnimationFrame(y.current),
                            (y.current = window.requestAnimationFrame(() => {
                                (es.Om.setInspectedExpressionPosition(t, n, er.t.MOUSE_EVENT),
                                    es.Om.setSearchPlaceholder(i),
                                    (y.current = eA.An1));
                            })));
                    }, []),
                    P = (0, m.bG)([eO.HP], () => eO.HP.hasHotspot(eO._2.FAVORITE_EMOJI_TOOLTIP), []),
                    D = r.useMemo(
                        () =>
                            ez().memoize((e, t) => {
                                let n = i[e],
                                    r = d[t.sectionIndex];
                                return (0, l.jsx)(
                                    n$,
                                    {
                                        emojiDescriptors: n,
                                        emojiSize: s,
                                        surrogateCodePoint: b,
                                        onInspect: M,
                                        onSelect: a,
                                        onSelectSoundmoji: c,
                                        getEmojiItemProps: E,
                                        getEmojiRowProps: I,
                                        isScrolling: g,
                                        isUsingKeyboardNavigation: h,
                                        rowIndex: e,
                                        allowAnimatedEmoji: A,
                                        showEmojiFavoriteTooltip: P,
                                        channelGuildId: _,
                                        category: r.sectionId,
                                        selectedItemClassName: nQ.__invalid_selectedItem,
                                        channelId: N,
                                        messageId: C,
                                        isBurstReaction: O,
                                        inNitroLockedSection: r.isNitroLocked,
                                        handleScrollUpOnSectionCollapse: function () {
                                            j.current?.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                                        },
                                    },
                                    e,
                                );
                            }),
                        [i, d, s, b, M, a, c, E, I, g, h, A, P, _, N, C, O, j],
                    );
                r.useEffect(() => () => D.cache?.clear?.(), [D]);
                let w = r.useMemo(
                        () =>
                            ez().memoize((e) => {
                                let n = d[e];
                                if (null == n) return;
                                let { guild: i, categoryId: s, type: r, sectionId: a } = n;
                                if (r === tr.s.SEARCH_RESULTS) return;
                                let c =
                                        r === tr.s.GUILD
                                            ? null != i
                                                ? (0, l.jsx)(to.A, { guild: i, height: 16, width: 16 })
                                                : null
                                            : null != s
                                              ? (0, l.jsx)(ta, { categoryId: s, height: 16, width: 16, size: "custom" })
                                              : null,
                                    u = i?.name;
                                null != s && (u = (0, eR.Nu)(s, i?.name));
                                let m = S === e,
                                    f = n.isNitroLocked,
                                    E = f && !m,
                                    I = f && m,
                                    g =
                                        r === tr.s.SOUNDMOJI
                                            ? (0, l.jsx)(eu.D, {
                                                  className: nQ.f3,
                                                  onClick: () => {
                                                      ((0, el.U)(ek.kx.SOUNDBOARD),
                                                          eT.default.track(
                                                              eA.HAw.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK,
                                                          ));
                                                  },
                                                  children: V.intl.string(V.t.rUEjBe),
                                              })
                                            : void 0;
                                return (0, l.jsx)(
                                    np.A,
                                    {
                                        className: o()(nQ.wx, x, { [nQ.RA]: E, [nQ.sp]: I }),
                                        icon: c,
                                        isCollapsed: t.has(a),
                                        onClick: () => L(a, i),
                                        trailing: g,
                                        children: u,
                                    },
                                    a,
                                );
                            }),
                        [d, t, L, x, S],
                    ),
                    k = (0, tm.k0)(),
                    U = r.useCallback(
                        (e, n) => {
                            let i = d[e],
                                s = v(e),
                                r = R(e);
                            return (0, l.jsx)(
                                "div",
                                {
                                    role: "rowgroup",
                                    className: o()(nQ.Wy, {
                                        [nQ.YD]: e === d.length - 1,
                                        [nQ.jl]: t.has(i.sectionId),
                                        [nQ.cW]: i.isNitroLocked,
                                        [nQ.T5]: s || r,
                                    }),
                                    children: n,
                                },
                                e,
                            );
                        },
                        [t, d, v, R],
                    ),
                    G = r.useCallback(
                        (e) =>
                            v(e)
                                ? k
                                    ? (0, l.jsx)(nO.ap, {})
                                    : (0, l.jsx)(nO.Ay, {})
                                : R(e)
                                  ? (0, l.jsx)("div", { className: nQ.pQ })
                                  : null,
                        [v, R, k],
                    ),
                    F = r.useCallback((e) => (v(e) ? 41 : 33 * !!R(e)), [v, R]),
                    J = r.useCallback(
                        (e) => (e === d.length - 1 || t.has(d[e]?.sectionId) || v(e) || R(e) ? 0 : n4),
                        [t, d, v, R],
                    );
                return {
                    listPadding: r.useMemo(() => ["" !== u ? n3 : n0, n1, n2, 0], [u]),
                    renderRow: D,
                    renderSection: U,
                    renderSectionHeader: w,
                    renderSectionFooter: G,
                    sectionMarginBottom: J,
                    sectionHeaderHeight: r.useCallback((e) => (d[e].type === tr.s.SEARCH_RESULTS ? 0 : n5), [d]),
                    sectionFooterHeight: F,
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
                getEmojiItemProps: A,
                getEmojiRowProps: N,
                isScrolling: R,
                isUsingKeyboardNavigation: x,
                allowAnimatedEmoji: M,
                channelGuildId: S,
                channelId: j,
                messageId: T,
                isBurstReaction: y,
                listHeaderClassName: b,
                activeSectionIndex: G,
                emojiListRef: a,
            }),
            $ = r.useCallback(
                (e) => {
                    let t = a.current?.getSectionDescriptors();
                    null == t ||
                        F(
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
        let Q = (0, ea.Fk)({
            activeCategoryIndex: v,
            isScrolling: R,
            listRef: a,
            onActiveCategoryIndexChange: function (e) {
                "" === L && es.Om.setActiveCategoryIndex(e);
            },
            scrollOffset: 0,
            searchQuery: L,
            disableForSearch: !1,
        });
        (0, ea.FV)({ searchQuery: L, activeCategoryIndex: v, listRef: a });
        let ee = r.useCallback(
                (e) => {
                    (Q(e),
                        $(e),
                        n7({ emojiListRef: a, sectionDescriptors: E, scrollTop: e, searchQuery: L, setShowUpsell: K }));
                },
                [Q, $, a, E, L, K],
            ),
            et = E.length > 0;
        (r.useEffect(() => {
            J &&
                (eT.default.track(eA.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: eB.e.EMOJI_PICKER_FLOATING_UPSELL,
                    location: k,
                    location_stack: U,
                }),
                (0, n_.sq)(eA.U7l.PREMIUM_UPSELL_VIEWED, U, () => (0, nN.uq)(eB.e.EMOJI_PICKER_FLOATING_UPSELL)));
        }, [k, U, J]),
            r.useEffect(() => {
                "" !== L && K(!1);
            }, [L]));
        let en = r.useRef(null);
        return (
            r.useEffect(
                () => (
                    clearTimeout(en.current),
                    (en.current = setTimeout(() => {
                        (et
                            ? nE.O.announce(V.intl.string(V.t.uZ4F2O), "polite")
                            : nE.O.announce(V.intl.string(V.t.IxxiKF), "assertive"),
                            (en.current = null));
                    }, 200)),
                    () => {
                        clearTimeout(en.current);
                    }
                ),
                [et, L],
            ),
            (0, l.jsxs)("div", {
                className: nQ.AD,
                children: [
                    et
                        ? (0, l.jsx)(ng.A, {
                              role: "none presentation",
                              className: nQ.p_,
                              listPadding: B,
                              onScroll: ee,
                              renderRow: H,
                              renderSection: X,
                              renderSectionHeader: W,
                              renderSectionFooter: z,
                              rowCount: O,
                              rowCountBySection: I,
                              rowHeight: c + 2 * n8,
                              sectionHeaderHeight: Y,
                              sectionMarginBottom: Z,
                              sectionFooterHeight: q,
                              stickyHeaders: !0,
                              ref: a,
                          })
                        : (0, l.jsx)(nI.A, {
                              message: (0, l.jsx)(w.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: V.intl.string(V.t.IxxiKF),
                              }),
                              className: nQ.BZ,
                          }),
                    D || nf.Fr
                        ? null
                        : (0, l.jsx)(nC.d, {
                              showUpsell: J,
                              text:
                                  ((t = (0, eK.Dd)(eB.PremiumTypes.TIER_2)),
                                  V.intl.format(V.t.gMVjeS, {
                                      nitroTierName: t,
                                      onClick: () => {
                                          f({ type: th.PREMIUM, emojiDescriptor: void 0 });
                                      },
                                  })),
                              button: ((n = (0, nA.qD)()), (0, eK.LE)(n, eB.pe.TIER_2) ?? V.intl.string(V.t.BmJkbd)),
                              buttonAnalyticsObject: { section: eA.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                              leadingAction: (0, l.jsx)(nx.l, {
                                  size: "sm",
                                  className: nQ.ij,
                                  location: _.A.PREMIUM_WISHLIST_EMOJI_UPSELL,
                              }),
                          }),
                ],
            })
        );
    }),
    n7 = ez().throttle(
        function (e) {
            let { emojiListRef: t, sectionDescriptors: n, scrollTop: i, searchQuery: s, setShowUpsell: l } = e;
            l(
                (0, nh.s)({ listRef: t, searchQuery: s, nitroLockedSectionStates: n, scrollTop: i })
                    .areOnlyNitroLockedSectionsVisible,
            );
        },
        300,
        { leading: !1, trailing: !0 },
    );
var n9 = n(506774),
    ie = n(28863),
    it = n(277984),
    ii = n(404374),
    is = n(780964),
    il = n(766075),
    ir = n(166403),
    ia = n(506150);
let io = "premiumRetentionEmojiPickerNotice",
    ic = n9.w.get(io),
    iu = function (e) {
        let { closePopout: t, channel: n } = e,
            [i, s] = r.useState(!1),
            { subscription: a, hasFetchedSubscriptions: o } = (0, m.cf)([ir.A], () => ({
                subscription: ir.A.getPremiumSubscription(),
                hasFetchedSubscriptions: ir.A.hasFetchedSubscriptions(),
            }));
        if (
            (r.useEffect(() => {
                o || (0, it.hP)();
            }, [o]),
            null == a || !(0, eK.PK)(a.status) || i)
        )
            return null;
        let c = a.status === eA.Dmq.PAST_DUE ? (0, eK.ji)(a).expiresDate : z()(a.currentPeriodStart).add(eB.ph),
            u = `${a.id}:${c.toISOString()}`;
        if (ic === u) return null;
        let d =
            eK.Ay.getPremiumType(a.planId) === eB.PremiumTypes.TIER_0
                ? ii.k0.PREMIUM_TIER_0
                : eK.Ay.getPremiumType(a.planId) === eB.PremiumTypes.TIER_1
                  ? ii.k0.PREMIUM_TIER_1
                  : ii.k0.PREMIUM_TIER_2;
        return (0, l.jsxs)(w.E, {
            variant: "text-xs/medium",
            color: "text-default",
            className: ia.g$,
            children: [
                (0, l.jsx)(b.t, { size: "md", className: ia.lu, color: d }),
                (0, l.jsxs)("div", {
                    className: ia.Xn,
                    children: [
                        (0, l.jsx)(w.E, {
                            variant: "text-xs/normal",
                            children: V.intl.format(V.t.bTMjiO, {
                                planName: eK.Ay.getTierDisplayNameByPlanId(a.planId),
                                endsAt: c.toDate(),
                            }),
                        }),
                        (0, l.jsx)("div", {
                            children: (0, l.jsx)(ie.Anchor, {
                                onClick: () => {
                                    ((0, eR.xf)(n), t(), (0, il.openUserSettings)(is.X.NITRO_PANEL));
                                },
                                children: V.intl.string(V.t.W3aavh),
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(eu.D, {
                    onClick: () => {
                        (n9.w.set(io, u), (ic = u), s(!0));
                    },
                    children: (0, l.jsx)(ed.P, { size: "md", color: "currentColor", className: ia.YF }),
                }),
            ],
        });
    };
var id = n(148361);
let im = (0, eb.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    iE = (0, eb.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT);
function iI(e) {
    return e.stopPropagation();
}
function ig(e, t) {
    es.Om.setInspectedExpressionPosition(e, t, er.t.GRID_NAVIGATOR_EVENT);
}
let ih = u()(eR.bo, 200),
    ip = u()(eR.Wi, 200),
    iA = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    i_ = r.memo(function (e) {
        let t,
            n,
            i,
            {
                pickerIntention: s,
                channel: a,
                guildId: c,
                closePopout: u,
                emojiSize: E = tr.as.MEDIUM,
                hasTabWrapper: S = !1,
                onSelectEmoji: j,
                onSelectSoundmoji: T,
                containerWidth: y,
                onNavigateAway: b,
                persistSearch: R,
                className: v,
                headerClassName: L,
                analyticsOverride: M = iA,
                searchProps: P = {},
                wrapper: D,
                shouldHidePickerActions: w = !1,
                messageId: k,
                renderHeader: U,
                listHeaderClassName: G,
                categoryListClassName: F,
                shouldShowSoundmojiInEmojiPicker: J = !1,
                showOnlyUnicode: K = !1,
                showAddEmojiButton: B,
                ref: H,
                isViewingEmojiPacks: W = !1,
                onViewEmojiPacksChange: z,
            } = e,
            { onFocus: Z, onKeyDown: Y, autoFocus: q = !0, accessory: $ } = P,
            Q = (0, m.bG)([eS.Ay], () => (null != c ? eS.Ay.getDefaultChannel(c) : null), [c]),
            [ee, et] = r.useState(null),
            eo = r.useRef(""),
            ec = (0, el.RQ)((e) => e.searchQuery),
            eu = r.useRef(null),
            ed = r.useRef(null),
            em = r.useRef(null);
        null == a && null != Q && (a = Q);
        let ef = a?.getGuildId() ?? c ?? null,
            [eE, eI] = r.useState(!1),
            eh = r.useRef(null),
            ep = ej.default.getCurrentUser(),
            e_ = (0, ey.ki)(ep),
            eN = eE && e_;
        r.useImperativeHandle(H, () => ({ onPickerOpen: e3 }));
        let { location: eb } = (0, p.p)(),
            { page: ev, section: eL, object: ek, openPopoutType: eG, popoutLocation: eF } = M,
            eJ = r.useMemo(() => ({ ...eb, section: eL ?? eA.JJy.EMOJI_PICKER_POPOUT }), [eb, eL]),
            { analyticsLocations: eV } = (0, C.Ay)(_.A.EMOJI_PICKER),
            { diversitySurrogate: eK } = (0, m.cf)([x.Ay], () => ({ diversitySurrogate: x.Ay.diversitySurrogate })),
            eB = (0, eR.sL)(ec, a, s, K),
            eH = null == eB ? 0 : eB.locked.length + eB.unlocked.length,
            eW = ex.iM.useSetting(),
            eZ = r.useMemo(() => new Set(eW), [eW]),
            eY = r.useCallback((e) => {
                ex.iM.updateSetting(Array.from(e));
            }, []),
            eq = (0, ea.oV)({ gridWrapperRef: eu, containerWidth: y, listPaddingLeft: iE, listScrollbarWidth: 8 }),
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
                    f = (0, m.bG)([x.Ay], () => x.Ay.categories),
                    E = r.useMemo(() => (d ? td.Ay.getCategories() : f), [f, d]),
                    I = (0, m.bG)([eg.A], () => eg.A.getGuild(t?.getGuildId()), [t]),
                    g = t?.getGuildId() ?? n,
                    h = (0, m.bG)([x.Ay], () => x.Ay.getDisambiguatedEmojiContext(g), [g]),
                    p = (0, eR.XI)(g),
                    A = (0, eR.Fj)(g),
                    _ = (0, eR.QZ)(g),
                    { topEmojis: N, newlyAddedEmojis: C } = (0, eD.A)(g, s),
                    O = (0, m.yK)([tE.Ay], () => tE.Ay.getFlattenedGuildIds(), []),
                    S = (0, m.bG)([x.Ay], () => x.Ay.expandedSectionsByGuildIds),
                    j = (0, m.bG)([ej.default], () => ej.default.getCurrentUser()),
                    T = (0, ey.ki)(j),
                    y = (0, tm.k0)(),
                    b = h.getGroupedCustomEmoji(),
                    R = (0, tf.Ym)({ location: "useEmojiGrid" });
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
                                [E, I] = ez().partition(l, (e) => {
                                    let n = eM.Ay.isEmojiDisabled({ emoji: e, channel: t, intention: s });
                                    return (o.set(e, n), !n);
                                }),
                                g = E.concat(I),
                                p = a.guild,
                                A = g.length > j && null != p && a.isNitroLocked,
                                _ = A && !S.has(p.id);
                            _ && g.splice(j - 1);
                            let O = Math.ceil((A ? g.length + 1 : g.length) / h),
                                x = [];
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
                                                a.sectionId === tr.s.TOP_GUILD_EMOJI
                                                    ? (0, eR.DA)(N, C, e.id ?? e.uniqueName ?? e.name)
                                                    : tr.tm.NONE,
                                        }));
                                if ((x.push(i), !u)) {
                                    if (A && e === O - 1) {
                                        let t = x[e];
                                        t.push({
                                            type: 1,
                                            guildId: p.id,
                                            name: V.intl.string(V.t.NZI2Zk),
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
                            (n.push(T), e.push(u ? 0 : O));
                        }
                        if (null != l)
                            (0 !== l.unlocked.length &&
                                g(l.unlocked, {
                                    type: tr.s.SEARCH_RESULTS,
                                    sectionId: tr.s.SEARCH_RESULTS,
                                    count: l.unlocked.length,
                                    isNitroLocked: !1,
                                }),
                                0 !== l.locked.length &&
                                    g(l.locked, {
                                        type: tr.s.PREMIUM_UPSELL,
                                        categoryId: tr.R2.PREMIUM_UPSELL,
                                        sectionId: tr.s.PREMIUM_UPSELL,
                                        count: l.locked.length,
                                        isNitroLocked: !T,
                                    }));
                        else {
                            if (R && u) {
                                let t = [{ type: 2, rowIndex: f, columnIndex: 0, visibleRowIndex: m }];
                                n.push({
                                    type: tr.s.SOUNDMOJI,
                                    categoryId: tr.R2.SOUNDMOJI,
                                    sectionId: "soundmoji",
                                    count: t.length,
                                    isNitroLocked: !1,
                                });
                                let s = i.has(tr.R2.SOUNDMOJI);
                                (!s && (d.push(t.length), r.push(t), m++), e.push(+!s), f++);
                            }
                            for (let e of E)
                                if (e === tr.R2.CUSTOM) {
                                    function x(n) {
                                        let i = b.get(n);
                                        if (null == i) return;
                                        let l = i.filter(
                                            (e) =>
                                                !tg.includes(
                                                    eM.Ay.getEmojiUnavailableReason({
                                                        emoji: e,
                                                        channel: t ?? eS.Ay.getDefaultChannel(n),
                                                        intention: s,
                                                    }),
                                                ),
                                        );
                                        if (0 === l.length) return;
                                        let r = eg.A.getGuild(n),
                                            a =
                                                y ||
                                                (!T &&
                                                    eM.Ay.isEmojiCategoryNitroLocked({
                                                        categoryEmojis: l,
                                                        channel: t,
                                                        intention: s,
                                                    }));
                                        g(l, {
                                            categoryId: e,
                                            guild: r,
                                            type: tr.s.GUILD,
                                            sectionId: null != r ? r.id : (0, tc.A)(),
                                            count: l.length,
                                            isNitroLocked: a,
                                        });
                                    }
                                    if ((null != I && x(I.id), (0, ew.isExternalEmojiAllowedForIntention)(s)))
                                        for (let e of O) (null == I || I.id !== e) && x(e);
                                } else if (e === tr.R2.TOP_GUILD_EMOJI) {
                                    if (null != I) {
                                        let { allEmojis: t } = (0, eP.W)({ topEmojis: N, newlyAddedEmojis: C });
                                        t.length > 0 &&
                                            g(t, {
                                                categoryId: e,
                                                guild: eg.A.getGuild(I.id),
                                                type: tr.s.TOP_GUILD_EMOJI,
                                                sectionId: tr.s.TOP_GUILD_EMOJI,
                                                count: t.length,
                                                isNitroLocked: !1,
                                            });
                                    }
                                } else if (e === tr.R2.RECENT) {
                                    let n = (s === ew.EmojiIntention.REACTION ? _ : A).filter(
                                        (e) => !eM.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }),
                                    );
                                    g(n, {
                                        categoryId: e,
                                        type: tr.s.RECENT,
                                        sectionId: tr.s.RECENT,
                                        count: n.length,
                                        isNitroLocked: !1,
                                    });
                                } else if (e === tr.R2.FAVORITES) {
                                    let n = p.filter(
                                        (e) => !eM.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }),
                                    );
                                    0 !== n.length &&
                                        g(n, {
                                            categoryId: e,
                                            type: tr.s.FAVORITES,
                                            sectionId: tr.s.FAVORITES,
                                            count: n.length,
                                            isNitroLocked: !1,
                                        });
                                } else {
                                    let t = td.Ay.getByCategory(e);
                                    null != t &&
                                        g(t, {
                                            categoryId: e,
                                            type: tr.s.UNICODE,
                                            sectionId: e,
                                            count: t.length,
                                            isNitroLocked: !1,
                                        });
                                }
                        }
                    }
                    return { columnCounts: d, emojiGrid: r, rowCountBySection: e, sectionDescriptors: n };
                }, [h, a, c, o, l, i, b, S, t, s, N, C, T, E, I, O, _, A, p, y, R, u]);
            })({
                gridWidth: eq,
                fallbackGuildId: ef,
                channel: a,
                pickerIntention: s,
                emojiSearchResults: eB,
                collapsedSections: eZ,
                emojiPaddingHorizontal: im,
                emojiSpriteSize: E,
                shouldShowSoundmojiInEmojiPicker: J,
                showOnlyUnicode: K,
            }),
            { newlyAddedEmojis: e2 } = (0, eD.A)(ef, s);
        ((t = r.useRef({ intention: s, isBurstReaction: eE, analyticsObject: ek })),
            r.useEffect(() => {
                t.current.intention === ew.EmojiIntention.REACTION && eU(t.current);
            }, []));
        let e3 = r.useCallback(() => {
                let e = e2.length > 0 ? e2[0].id : null;
                ((0, ei.uV)(ef, e), eU({ intention: s, isBurstReaction: eE, analyticsObject: ek }));
            }, [e2, ef, s, eE, ek]),
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
                    c = (0, m.bG)([x.Ay], () => x.Ay.getDisambiguatedEmojiContext(n?.getGuildId() ?? i), [i, n]);
                return r.useCallback(
                    (e, i) => {
                        if (0 === e.type) {
                            let { emoji: r } = e;
                            if (null == r) return;
                            let u = eM.Ay.getEmojiUnavailableReason({ emoji: r, channel: n, intention: t });
                            if (i.toggleFavorite)
                                return void (c.isFavoriteEmojiWithoutFetchingLatest(r) || null != u
                                    ? (0, g.Sw)(r)
                                    : (o?.(e), (0, g.V4)(r)));
                            if (u !== ew.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) {
                                if (u === ew.EmojiDisabledReasons.PREMIUM_LOCKED) {
                                    (a?.(e, u), l({ type: 0, emojiDescriptor: e }));
                                    return;
                                }
                                if (u === ew.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED && r.type === tu.i.GUILD) {
                                    (a?.(e, u), l({ type: 1, guildId: r.guildId, emojiId: r.id }));
                                    return;
                                }
                                u !== ew.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE &&
                                    (a?.(e), s({ emoji: r, willClose: i.isFinalSelection, isBurst: i.isBurst }));
                            }
                        }
                    },
                    [n, t, s, l, c, a, o],
                );
            })({
                pickerIntention: s,
                selectedChannel: a,
                fallbackGuildId: ef,
                closePopout: u,
                onSelectEmoji: j,
                setUpsellConfigs: et,
                emojiSelectAnalytics: (e, t) => {
                    "" !== ec
                        ? (0, eR.Wf)({
                              emoji: e.emoji,
                              location: { ...eJ, object: eA.ZSU.EMOJI },
                              searchQuery: ec,
                              isLocked: null != t,
                              intention: s,
                              messageId: k,
                          })
                        : (0, eR._7)({
                              emoji: e.emoji,
                              location: { ...eJ, object: ek ?? eA.ZSU.EMOJI, ...(null != ev && { page: ev }) },
                              pickerIntention: s,
                              category: e.category,
                              subCategory: e.subCategory,
                              position: e.columnIndex + 1,
                              newlyAddedHighlight:
                                  e.subCategory === tr.tm.NEWLY_ADDED_EMOJI && en.isNewerThanLastSeen(ef, e.emoji.id),
                              isBurstReaction: eE,
                              messageId: k,
                              lockedReason: t,
                              visibleRowIndex: e.visibleRowIndex,
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, eR.C5)({ emoji: e.emoji, location: { ...eJ, object: eA.ZSU.EMOJI } });
                },
            }),
            e4 = r.useCallback(() => {
                (u(), b?.());
            }, [u, b]),
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
                    u = (0, m.bG)([x.Ay], () => x.Ay.getDisambiguatedEmojiContext(o), [o]),
                    f = r.useCallback(
                        (e, i) => {
                            if (e.type === tI.EMOJI) {
                                if (null != e.emoji && i.altKey)
                                    return void (u.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                        ? (0, g.Sw)(e.emoji)
                                        : ((0, eR.C5)({ emoji: e.emoji, location: { ...t, object: eA.ZSU.EMOJI } }),
                                          (0, g.V4)(e.emoji)));
                                let l = {
                                    page: null != o ? eA.liQ.GUILD_CHANNEL : eA.liQ.DM_CHANNEL,
                                    section: eA.JJy.EMOJI_PICKER_POPOUT,
                                    object: eA.ZSU.EMOJI,
                                };
                                (c &&
                                    (l = {
                                        page: null != o ? eA.liQ.GUILD_CHANNEL : eA.liQ.DM_CHANNEL,
                                        section: eA.JJy.EMOJI_PICKER_POPOUT,
                                        object: eA.ZSU.EMOJI,
                                    }),
                                    (0, eR._7)({
                                        emoji: e.emoji,
                                        location: l,
                                        pickerIntention: n,
                                        category: e.category,
                                        subCategory: e.subCategory,
                                        newlyAddedHighlight:
                                            e.subCategory === tr.tm.NEWLY_ADDED_EMOJI &&
                                            en.isNewerThanLastSeen(o, e.emoji.id),
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
                        gridContainerProps: p,
                        handleGridContainerKeyDown: A,
                        isUsingKeyboardNavigation: _,
                    } = (0, ea.Ff)({
                        columnCounts: i,
                        gridNavigatorId: tr.lq,
                        itemGrid: l,
                        itemList: a,
                        onGridNavigatorItemSelect: f,
                        onGridNavigatorPositionChange: ig,
                    });
                return (
                    r.useEffect(
                        () =>
                            es.Om.subscribe(
                                (e) => e.inspectedExpressionPosition,
                                (e) => {
                                    if (null == e) return;
                                    let { columnIndex: t, rowIndex: n, source: i } = e;
                                    i !== er.t.GRID_NAVIGATOR_EVENT &&
                                        E({ type: d.n.SET_FOCUSED_POSITION, x: t, y: n });
                                },
                            ),
                        [E],
                    ),
                    {
                        getItemProps: I,
                        getRowProps: h,
                        gridContainerProps: p,
                        handleGridContainerKeyDown: A,
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
                channelGuildId: ef,
                isBurstReaction: eN,
            });
        (((e, t) => {
            let [n, i] = r.useState(null);
            (r.useEffect(() => {
                null != n && (t.current?.scrollToSectionTop(n), i(null));
            }, [t, n]),
                r.useEffect(() => {
                    i(es.Om.getState().activeCategoryIndex);
                }, [e]));
        })(y, ed),
            r.useLayoutEffect(() => {
                q && em.current?.focus();
            }, [y, eK, em, q]),
            (n = r.useRef(W)),
            r.useEffect(() => {
                (q && n.current && !W && em.current?.focus(), (n.current = W));
            }, [q, W, em]),
            r.useEffect(() => {
                R || (0, el.Ri)("");
            }, [R]),
            r.useEffect(
                () => (
                    eT.default.track(eA.HAw.OPEN_POPOUT, {
                        type: eG ?? "Emoji Picker",
                        guild_id: ef,
                        location: eF,
                        ...(0, N.dI)(a),
                    }),
                    () => {
                        (ih.cancel(), ip.cancel());
                    }
                ),
                [eG, ef, eF, a],
            ),
            (0, A.Ay)(() => ((0, eR.V$)({ intention: s, location: eJ }), (eo.current = ec), es.Om.resetStoreState)),
            r.useEffect(() => () => (0, eO.sF)(eO._2.FAVORITE_EMOJI_TOOLTIP), []),
            r.useLayoutEffect(() => {
                let { columnIndex: e, rowIndex: t } = es.Om.getState().inspectedExpressionPosition;
                e0[t]?.[e] == null && 0 !== e && es.Om.setInspectedExpressionPosition(0, 0);
            }, [e0]),
            r.useEffect(() => {
                if (("" === eo.current && "" !== ec && (0, eR.EG)(eJ, s), "" !== ec && eo.current !== ec)) {
                    let e = es.Om.getAnalyticsId();
                    0 === eH
                        ? ih({ location: eJ, searchQuery: ec, intention: s, loadId: e })
                        : ip({
                              totalResults: eH,
                              numEmojiLocked: eB?.locked.length ?? 0,
                              location: eJ,
                              searchQuery: ec,
                              intention: s,
                              loadId: e,
                          });
                }
                eo.current = ec;
            }, [ec, eJ, eH, eB, s]));
        let tt = D ?? (S ? "div" : I.l),
            tn = null != eq;
        ee?.type === th.PREMIUM
            ? (i = (0, l.jsx)(id.default, {
                  onUpsellClicked: e4,
                  emojiDescriptor: ee.emojiDescriptor,
                  pickerIntention: s,
                  analyticsLocation: eJ,
                  onClose: () => et(null),
                  channel: a,
              }))
            : ee?.type === th.ROLE_SUBSCRIPTION &&
              (i = (0, l.jsx)(eC, { onClose: () => et(null), guildId: ee.guildId, emojiId: ee.emojiId }));
        let ti = (0, l.jsx)(nr, {
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
                diversitySurrogate: eK,
                isBurstReaction: eE,
                onBurstReactionToggle: function () {
                    (eI(!eE), em.current?.focus());
                },
                burstToggleRef: eh,
                renderHeader: U,
                showAddEmojiButton: B,
                closePopout: u,
            }),
            ts = [];
        x.Ay.hasFavoriteEmojis(ef) || ts.push(f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let tl = (0, l.jsxs)(r.Fragment, {
                children: [
                    S ? ti : null,
                    (0, l.jsxs)("div", {
                        className: nl.uK,
                        ref: eu,
                        children: [
                            (0, l.jsx)(iu, { channel: a, closePopout: u }),
                            (0, l.jsx)(O.Ay, {
                                contentTypes: ts,
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    if (t === f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                        return (0, l.jsx)(tk, { markAsDismissed: () => n(tD.i.UNKNOWN) });
                                },
                            }),
                            w
                                ? null
                                : (0, l.jsx)("div", {
                                      className: nl.Iy,
                                      id: tr.lq,
                                      ...e7,
                                      children: tn
                                          ? (0, l.jsx)(n6, {
                                                collapsedSections: eZ,
                                                diversitySurrogate: eK,
                                                emojiGrid: e0,
                                                emojiListRef: ed,
                                                emojiSize: E,
                                                getEmojiItemProps: e8,
                                                getEmojiRowProps: e6,
                                                gridWidth: eq,
                                                isUsingKeyboardNavigation: te,
                                                onEmojiSelect: function (e, t) {
                                                    e5(e, { ...t, isBurst: eN });
                                                },
                                                onSelectSoundmoji: T,
                                                setUpsellConfigs: et,
                                                rowCount: e0.length,
                                                rowCountBySection: e$,
                                                sectionDescriptors: eQ,
                                                setCollapsedSections: eY,
                                                channelGuildId: ef,
                                                channelId: a?.id,
                                                messageId: k,
                                                isBurstReaction: eN,
                                                listHeaderClassName: G,
                                            })
                                          : null,
                                  }),
                        ],
                    }),
                    (0, l.jsx)(nm, { emojiGrid: e0, className: nl.qV, guildId: ef, pickerIntention: s, channel: a }),
                    i,
                    s === ew.EmojiIntention.REACTION
                        ? (0, l.jsx)(eX, { targetElementRef: eh, shouldShow: eE && !e_, onDismiss: () => eI(!1) })
                        : null,
                ],
            }),
            ta = (0, l.jsx)(h.A, {
                ...eJ,
                children: (0, l.jsxs)(tt, {
                    id: tr.Do,
                    "aria-labelledby": S && !W ? tr.k1 : void 0,
                    role: S && !W ? "tabpanel" : void 0,
                    className: o()(nl.iE, { [nl.r6]: S, [nl.cB]: eN }),
                    children: [
                        S || W ? null : ti,
                        (0, l.jsx)("div", {
                            className: o()(nl.Fb, v),
                            onScroll: iI,
                            children: W ? (0, l.jsx)(X, { onBack: () => z?.(!1) }) : tl,
                        }),
                        w || W
                            ? null
                            : (0, l.jsx)(tP, {
                                  className: o()(nl.jv, F),
                                  emojiListRef: ed,
                                  sectionDescriptors: eQ,
                                  intention: s,
                                  channel: a,
                                  fallbackGuildId: ef,
                                  shouldShowSoundmojiInEmojiPicker: J,
                                  showOnlyUnicode: K,
                                  onViewEmojiPacks: null != z ? () => z(!0) : void 0,
                              }),
                    ],
                }),
            });
        return (0, l.jsx)(C.f5, { value: eV, children: ta });
    });
