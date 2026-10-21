(n.d(t, { A: () => id }), n(321073));
var i,
    s,
    r = n(477900),
    l = n(582128),
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
    x = n(379848),
    T = n(236285),
    j = n(331322),
    y = n(866665),
    O = n(408278),
    S = n(477155),
    b = n(403581),
    R = n(661531),
    v = n(297264),
    L = n(62010),
    P = n(465794),
    M = n(683973),
    D = n(287809),
    w = n(474090),
    k = n(934499),
    U = n(182159),
    G = n(834730),
    F = n(847374),
    J = n(320448),
    V = n(834040),
    K = n(499373),
    B = n(565645),
    H = n(732447),
    W = n(105292),
    X = n(126904);
let z = l.memo(function (e) {
    let { pack: t, isPinned: n, onAddPack: i, onRemovePack: s } = e,
        a = l.useId(),
        c = l.useId(),
        [u, d] = l.useState(!1),
        m = W.intl.string(u ? W.t.iTcuma : W.t.dcl9MQ),
        f = W.intl.string(n ? H.default["2zxYCx"] : H.default.Tvdb5N),
        E = l.useMemo(() => t.emojis.filter((e) => e.available), [t.emojis]);
    return (0, r.jsxs)("section", {
        "aria-labelledby": a,
        className: X.nM,
        children: [
            (0, r.jsxs)(j.B, {
                align: "center",
                direction: "horizontal",
                gap: 4,
                justify: "space-between",
                children: [
                    (0, r.jsxs)(j.B, {
                        align: "center",
                        className: X.DD,
                        direction: "horizontal",
                        gap: 4,
                        children: [
                            (0, r.jsx)(v.D, { className: X.UU, id: a, variant: "text-xs/bold", children: t.name }),
                            (0, r.jsx)(G.E, {
                                color: "text-subtle",
                                variant: "text-xs/medium",
                                children: W.intl.format(H.default.UA8cNe, { count: E.length }),
                            }),
                            (0, r.jsx)(y.m, {
                                text: m,
                                children: (0, r.jsx)(O.K, {
                                    "aria-controls": c,
                                    "aria-describedby": a,
                                    "aria-expanded": u,
                                    "aria-label": m,
                                    icon: u ? F.a : J._,
                                    onClick: () => d((e) => !e),
                                    size: "sm",
                                    variant: "icon-only",
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(y.m, {
                        text: f,
                        children: (0, r.jsx)(O.K, {
                            "aria-label": f,
                            icon: n ? V.MinusIcon : K.T,
                            onClick: () => (n ? s(t) : i(t)),
                            size: "sm",
                            variant: "secondary",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                id: c,
                "aria-hidden": !u,
                "aria-label": t.name,
                className: o()(X.gm, { [X.jE]: u }),
                role: "group",
                children: E.map((e) =>
                    (0, r.jsx)(B.A, { animated: e.animated, className: X.Zg, emojiId: e.id, emojiName: e.name }, e.id),
                ),
            }),
        ],
    });
});
var Z = n(202541),
    Y = n(429800);
function q(e) {
    let { onBack: t } = e,
        n = W.intl.string(H.default.Nwj3fK),
        i = l.useRef(null),
        s = (0, m.bG)([U.A], () => U.A.getPacks()),
        a = (0, m.bG)([D.default], () => D.default.getCurrentUser()),
        o = (0, w.ki)(a, Z.PremiumTypes.TIER_2);
    l.useLayoutEffect(() => {
        i.current?.focus();
    }, []);
    let c = (0, M.k)().pinnedEmojiPacks?.packIds,
        u = l.useCallback((e) => {
            (0, k.Ls)(e.id);
        }, []),
        d = l.useCallback((e) => {
            (0, k.M5)(e.id);
        }, []);
    return (0, r.jsxs)("div", {
        className: Y.kL,
        children: [
            (0, r.jsx)("div", { "aria-hidden": !0, className: Y.Tp }),
            (0, r.jsx)("div", {
                className: Y.wx,
                children: (0, r.jsxs)(j.B, {
                    align: "center",
                    direction: "horizontal",
                    gap: 8,
                    justify: "space-between",
                    wrap: !0,
                    children: [
                        (0, r.jsxs)(j.B, {
                            align: "center",
                            direction: "horizontal",
                            gap: 10,
                            fullWidth: !1,
                            children: [
                                (0, r.jsx)(y.m, {
                                    position: "right",
                                    text: n,
                                    children: (0, r.jsx)(O.K, {
                                        "aria-label": n,
                                        buttonRef: i,
                                        icon: S.r,
                                        onClick: t,
                                        size: "sm",
                                        variant: "icon-only",
                                    }),
                                }),
                                (0, r.jsxs)(j.B, {
                                    align: "center",
                                    direction: "horizontal",
                                    gap: 4,
                                    fullWidth: !1,
                                    children: [
                                        (0, r.jsx)(b.t, { color: R.A.colors.TEXT_DEFAULT, size: "xs" }),
                                        (0, r.jsxs)(j.B, {
                                            align: "center",
                                            direction: "horizontal",
                                            gap: 8,
                                            fullWidth: !1,
                                            children: [
                                                (0, r.jsx)(v.D, {
                                                    variant: "heading-md/semibold",
                                                    children: W.intl.string(H.default["0+5+Oy"]),
                                                }),
                                                (0, r.jsx)(L.E, { type: "beta", variant: "primary" }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        o
                            ? null
                            : (0, r.jsx)(P.A, {
                                  buttonTextOverride: W.intl.string(W.t.hIVbiP),
                                  size: "sm",
                                  subscriptionTier: Z.pe.TIER_2,
                              }),
                    ],
                }),
            }),
            (0, r.jsx)("div", {
                className: Y.p_,
                children: s.map((e, t) =>
                    (0, r.jsxs)(
                        l.Fragment,
                        {
                            children: [
                                t > 0 ? (0, r.jsx)("hr", { className: Y.yF }) : null,
                                (0, r.jsx)(z, {
                                    isPinned: c?.includes(e.id) === !0,
                                    pack: e,
                                    onAddPack: u,
                                    onRemovePack: d,
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
var $ = n(536637),
    Q = n.n($),
    ee = n(73153),
    et = n(935208);
let en = { lastSeenNewlyAddedEmojiIds: {} },
    ei = en,
    es = {};
function er() {
    for (let e in es) ei.lastSeenNewlyAddedEmojiIds[e] = es[e];
}
class el extends m.Ay.PersistedStore {
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
        ei = e ?? en;
    }
    getState() {
        return ei;
    }
    getLastSeenEmojiByGuild(e) {
        return ei.lastSeenNewlyAddedEmojiIds[e];
    }
    isNewerThanLastSeen(e, t) {
        if (null == e || null == t) return !1;
        let n = this.getLastSeenEmojiByGuild(e);
        if (null == n || et.default.compare(t, n.id) > 0) return !0;
        {
            let e = Q()(n.lastSeen);
            return Q()().isBefore(e.add(2, "weeks")) && !n.acknowledged;
        }
    }
}
let ea = new el(ee.h, {
    LOGOUT: function () {
        ((ei = en), (es = {}));
    },
    NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = es[t] ?? ei.lastSeenNewlyAddedEmojiIds[t];
        null == i || 0 > et.default.compare(i.id, n)
            ? (es[t] = { id: n, lastSeen: Date.now(), acknowledged: !0 })
            : (es[t] = { ...i, acknowledged: !0 });
    },
    NEWLY_ADDED_EMOJI_SEEN_PENDING: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = es[t] ?? ei.lastSeenNewlyAddedEmojiIds[t];
        (null == i || 0 > et.default.compare(i.id, n)) && (es[t] = { id: n, lastSeen: Date.now(), acknowledged: !1 });
    },
    NEWLY_ADDED_EMOJI_SEEN_UPDATED: er,
    CLEAR_CACHES: function () {
        ((ei = en), er());
    },
    CONNECTION_CLOSED: er,
});
var eo = n(451731),
    ec = n(850992),
    eu = n(151271),
    ed = n(60587),
    em = n(887695),
    ef = n(562708),
    eE = n(462887),
    eI = n(939249),
    eg = n(789645),
    eh = n(696986),
    ep = n(736653),
    eA = n(139286),
    e_ = n(976860),
    eN = n(71393),
    eC = n(384684),
    ex = n(985242),
    eT = n(652215),
    ej = n(746080),
    ey = n(196404);
function eO(e) {
    let t,
        { onClose: i, guildId: s, emojiId: l } = e,
        a = ((t = (0, ep.Ay)()), (0, eE.q)(t) ? n(454333) : n(674463)),
        { analyticsLocations: o } = (0, C.Ay)(_.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, eA.A)({
        type: ef.ImpressionTypes.MODAL,
        name: ef.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: { location_stack: o, emoji_guild_id: s, emoji_id: l ?? null },
    });
    let c = (0, m.bG)([eN.A], () => eN.A.getGuild(s)),
        u = (0, m.bG)([eC.A], () => null != s && eC.A.getUserSubscriptionRoles(s).size > 0),
        d = u ? W.intl.string(W.t.GoLM9z) : W.intl.formatToPlainString(W.t["h0u/Hi"], { serverName: c?.name }),
        f = u ? W.intl.string(W.t.PjZ7Db) : W.intl.string(W.t.p8FG1D);
    return (0, r.jsxs)("div", {
        className: ey.kL,
        children: [
            (0, r.jsx)("div", { className: ey.Tp }),
            (0, r.jsxs)("div", {
                className: ey.Qs,
                children: [
                    (0, r.jsx)(eI.D, {
                        className: ey.b,
                        "aria-label": W.intl.string(W.t.cpT0Cq),
                        onClick: i,
                        children: (0, r.jsx)(eg.P, {
                            size: "xs",
                            color: "currentColor",
                            "aria-label": W.intl.string(W.t.cpT0Cq),
                            className: ey.yP,
                        }),
                    }),
                    (0, r.jsx)("img", { alt: "", src: a, className: ey.Tn }),
                    (0, r.jsx)(eh.h, { size: 22 }),
                    (0, r.jsx)(v.D, {
                        color: "text-strong",
                        variant: "heading-lg/extrabold",
                        className: ey.wx,
                        children: W.intl.string(W.t.cBjkcx),
                    }),
                    (0, r.jsx)(eh.h, { size: 4 }),
                    (0, r.jsx)(G.E, {
                        color: "text-default",
                        variant: "text-md/normal",
                        className: ey.h_,
                        children: d,
                    }),
                    (0, r.jsx)(eh.h, { size: 24 }),
                    (0, r.jsx)(ex.A, {
                        text: f,
                        onClick: function () {
                            (0, e_.pX)(eT.BVt.CHANNEL(s, ej.VV.ROLE_SUBSCRIPTIONS), { sourceLocationStack: o });
                        },
                    }),
                ],
            }),
        ],
    });
}
var eS = n(450510),
    eb = n(885386),
    eR = n(808728),
    ev = n(174459),
    eL = n(240248),
    eP = n(822123),
    eM = n(734057),
    eD = n(309010),
    ew = n(690521),
    ek = n(818645),
    eU = n(316884),
    eG = n(307731),
    eF = n(698279);
function eJ(e) {
    let { intention: t, containerWidth: n, rowSize: i, isBurstReaction: s, analyticsObject: r } = e,
        l = eM.A.getChannel(eD.Ay.getChannelId()),
        a = l?.getGuildId(),
        o =
            t === eG.EmojiIntention.REACTION
                ? T.Ay.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice()
                : T.Ay.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        c = null != l ? T.Ay.getDisambiguatedEmojiContext(l.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        u =
            t === eG.EmojiIntention.REACTION
                ? T.Ay.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems
                : T.Ay.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        d = o.slice(0, u),
        m = null != a ? T.Ay.getGuildEmoji(a) : [],
        f = T.Ay.getDisambiguatedEmojiContext(l?.getGuildId()).getCustomEmoji(),
        { topEmojis: E, newlyAddedEmojis: I } = (0, eU.b)({ guildId: l?.getGuildId(), pickerIntention: t }),
        { visibleTopEmojis: g, visibleNewlyAddedEmojis: h } = (0, ek.W)({
            topEmojis: E,
            newlyAddedEmojis: I,
            rowSize: i,
        });
    N.Ay.trackWithMetadata(
        t === eG.EmojiIntention.REACTION ? eT.HAw.REACTION_PICKER_OPENED : eT.HAw.EXPRESSION_PICKER_OPENED,
        {
            width: n,
            tab: eF.kx.EMOJI,
            badged: !1,
            num_expressions_favorites: c.length,
            num_animated_expressions_favorites: c.filter((e) => e?.animated).length,
            num_custom_expressions_favorites: c.filter(ew.Ay.isCustomEmoji).length,
            num_standard_expressions_favorites: c.filter((e) => null == e.id).length,
            num_expressions_frecent: d.length,
            num_animated_expressions_frecent: d.filter((e) => e?.animated).length,
            num_custom_expressions_frecent: d.filter(ew.Ay.isCustomEmoji).length,
            num_standard_expressions_frecent: d.filter((e) => null == e.id).length,
            num_current_guild_expressions: m.length,
            num_custom_expressions_total: f.size,
            num_expressions_top_server: g.length,
            num_animated_expressions_top_server: g.filter((e) => e.animated).length,
            num_expressions_newly_added: h.length,
            num_animated_expressions_newly_added: h.filter((e) => e.animated).length,
            ...(t === eG.EmojiIntention.REACTION && { is_burst: s }),
            ...(null != r && { location_object: r }),
        },
    );
}
var eV = n(206248),
    eK = n(724651),
    eB = n(732280),
    eH = n(783420),
    eW = n(158045);
let eX = { object: eT.ZSU.BUTTON_CTA, section: eT.JJy.SUPER_REACTION_PICKER };
function ez(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: i } = e,
        s = W.intl.string(W.t.eikz43),
        l = (0, eB.V)(),
        a = (0, eK.O)(),
        o = l?.subscriptionTrial,
        c = null != o || null != a,
        u = o?.skuId ?? Z.pe.TIER_2,
        d = c
            ? null != a
                ? W.intl.formatToPlainString(W.t.bkQ4bH, { percent: a.discount.amount })
                : (0, eW.FY)({ intervalType: o?.interval, intervalCount: o?.intervalCount })
            : W.intl.string(W.t.sEAnVH);
    return (0, r.jsx)(eH.A, {
        subscriptionTier: u,
        premiumModalAnalyticsLocation: eX,
        onSubscribeModalClose: (e) => {
            e && i();
        },
        children: (e) => {
            let { onClick: l } = e;
            return (0, r.jsx)(eV.H, {
                targetElementRef: t,
                shouldShow: n,
                onRequestClose: i,
                position: "bottom",
                assetUrl: "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
                disableMediaViewer: !0,
                badge: c ? { type: "free_trial", variant: "expressive" } : void 0,
                title: W.intl.string(W.t.N4SCJ0),
                body: s,
                action: { text: d, variant: "expressive", icon: b.t, onClick: l },
            });
        },
    });
}
var eZ = n(435558),
    eY = n.n(eZ),
    eq = n(837381),
    e$ = n(460905),
    eQ = n(775602),
    e0 = n(713517),
    e1 = n(938612);
function e2(e) {
    let { onClick: t } = e,
        n = W.intl.string(H.default["3D0GLv"]);
    return (0, r.jsx)("div", {
        className: e1.n,
        children: (0, r.jsx)(y.m, {
            ariaHidden: !0,
            position: "right",
            text: n,
            children: (0, r.jsx)(eI.D, {
                "aria-label": n,
                className: e1.x,
                onClick: t,
                children: (0, r.jsx)(K.T, { size: "md", color: "currentColor" }),
            }),
        }),
    });
}
var e3 = n(88218),
    e5 = n(407698),
    e4 = n(941971),
    e8 = n(531685),
    e6 = n(406810),
    e7 = n(27232),
    e9 = n(369606),
    te = n(413249),
    tt = n(141060),
    tn = n(687966),
    ti = n(115979),
    ts = n(524501),
    tr = n(926268),
    tl = n(138134),
    ta = n(732139);
let to = l.memo(function (e) {
    let { categoryId: t, ...n } = e,
        i = (function (e) {
            switch (e) {
                case ta.R2.RECENT:
                    return e6.ClockIcon;
                case ta.R2.FAVORITES:
                    return e7.StarIcon;
                case ta.R2.TOP_GUILD_EMOJI:
                    return e9.TrophyIcon;
                case ta.R2.PEOPLE:
                    return e$.n;
                case ta.R2.NATURE:
                    return te.p;
                case ta.R2.FOOD:
                    return tt.i;
                case ta.R2.ACTIVITY:
                    return tn.GameControllerIcon;
                case ta.R2.TRAVEL:
                    return ti.h;
                case ta.R2.OBJECTS:
                    return ts.D;
                case ta.R2.SYMBOLS:
                    return tr.HeartIcon;
                case ta.R2.FLAGS:
                    return tl.FlagIcon;
                case ta.R2.PREMIUM_UPSELL:
                    return b.t;
                default:
                    return;
            }
        })(t);
    return null == i ? null : (0, r.jsx)(i, { color: "currentColor", ...n });
});
var tc = n(724511),
    tu = n(132500),
    td = n(770335),
    tm = n(7584),
    tf = n(526292),
    tE = n(711014),
    tI = (((i = {})[(i.EMOJI = 0)] = "EMOJI"), (i[(i.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"), i);
let tg = [eG.EmojiDisabledReasons.DISALLOW_EXTERNAL, eG.EmojiDisabledReasons.DISALLOW_CUSTOM];
var th = (((s = {})[(s.PREMIUM = 0)] = "PREMIUM"), (s[(s.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), s),
    tp = n(342379);
let tA = "expression-guild-",
    { itemIdForIndex: t_ } = (0, e3.J)(tA),
    tN = (0, eL.xI)(E.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    tC = (0, eL.xI)(E.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    tx = (0, eL.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    tT = (0, eL.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    tj = (0, eL.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    ty = (0, eL.xI)(tp.__invalid_unicodeCategoryShortcutHeight),
    tO = (0, eL.xI)(E.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    tS = (0, eL.xI)(E.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    tb = tx + tC + 2 * tj,
    tR = tN + tC,
    tv = tR + (tO + 2 * tS),
    tL = tx + tT + 2 * tj;
function tP(e) {
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
        m = l.useRef(null),
        { isHoveringOrFocusing: f } = (0, e0.A)(m),
        E = (0, eq.rm)(t_(n)),
        I = a.type === ta.s.GUILD ? null : a.id,
        g = t === n,
        h = a.type === ta.s.GUILD ? a.guild : null,
        p = (0, r.jsxs)(eI.D, {
            innerRef: m,
            ...E,
            "aria-label": (0, eP.wt)(a, h),
            className: o()({
                [tp.ZG]: null != h,
                [tp.Bj]: null == h,
                [tp.s6]: null == h && g,
                [tp.xg]: a.type === ta.s.RECENT,
            }),
            onClick: () => {
                (null != h &&
                    ev.default.track(eT.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: i?.location,
                        tab: eF.kx.EMOJI,
                        guild_id: h.id,
                    }),
                    c(n));
            },
            children: [
                (0, r.jsx)("div", {
                    className: tp.a$,
                    children: (0, r.jsx)(e4.A, { hovered: f, selected: g, size: "small" }),
                }),
                null != h
                    ? (0, r.jsx)(tc.A, { guild: h, isSelected: g, shouldAnimate: !d && u, isLocked: a.isNitroLocked })
                    : null,
                null == h && null != I
                    ? (0, r.jsx)(to, { categoryId: I, className: tp.Yl, height: tx, width: tx, size: "custom" })
                    : null,
            ],
        }),
        A = s[n + 1],
        _ = null != A && a.type === ta.s.GUILD && A.type !== ta.s.GUILD;
    return null != h
        ? (0, r.jsxs)(l.Fragment, {
              children: [
                  (0, r.jsx)(e5.Q, { guild: h, children: p }),
                  _ ? (0, r.jsx)("hr", { className: tp.ny }, "separator") : null,
              ],
          })
        : p;
}
let tM = (e) => {
    let {
            className: t,
            emojiListRef: n,
            sectionDescriptors: i,
            intention: s,
            channel: a,
            fallbackGuildId: c,
            showOnlyUnicode: u = !1,
            onViewEmojiPacks: d,
        } = e,
        f = ec.Om.useStore((e) => e.activeCategoryIndex),
        E = (function (e) {
            let { emojiListRef: t } = e,
                n = (0, eu.RQ)((e) => e.searchQuery),
                i = l.useCallback((e) => t.current?.scrollToSectionTop(e), [t]);
            return l.useCallback(
                (e) => {
                    "" !== n ? ((0, eu.Ri)(""), ec.Om.setActiveCategoryIndex(e)) : i(e);
                },
                [i, n],
            );
        })({ sectionDescriptors: i, emojiListRef: n }),
        I = (0, p.p)(),
        g = (0, eP.ss)(s, a, { guildId: a?.guild_id ?? c }),
        h = l.useMemo(() => (u ? (0, eP.CQ)() : g), [g, u]),
        A = l.useRef(null),
        _ = (0, m.bG)([e8.A], () => e8.A.isFocused()),
        N = (0, m.bG)([eQ.Ay], () => eQ.Ay.useReducedMotion, []),
        C = l.useMemo(
            () =>
                eY().memoize(
                    (e, t) => {
                        let n = h[t];
                        if (null != n)
                            return (0, r.jsx)(
                                tP,
                                {
                                    activeIndex: f,
                                    analyticsContext: I,
                                    categories: h,
                                    category: n,
                                    categoryIndex: t,
                                    handleCategorySelect: E,
                                    isWindowFocused: _,
                                    useReducedMotion: N,
                                },
                                t,
                            );
                    },
                    (e, t) => t,
                ),
            [f, I, h, E, _, N],
        ),
        x = l.useMemo(() => [8, 8, 0, 8], []),
        T = l.useCallback(
            (e, t) => {
                let n = h[t];
                if (n.type === ta.s.RECENT) return tb;
                if (n.type === ta.s.GUILD) {
                    let e = h[t + 1];
                    return null != e && e.type !== ta.s.GUILD ? tv : tR;
                }
                return tL;
            },
            [h],
        ),
        {
            nonUnicodeCategoryCount: j,
            firstUnicodeCategoryIndex: y,
            firstUnicodeCategoryOffsetTop: O,
            rowCountBySection: S,
        } = l.useMemo(() => {
            let e = 0,
                t = 0,
                n = 0,
                i = 0;
            h.forEach((s) => {
                s.type === ta.s.GUILD
                    ? ((t += 1), (n += 1))
                    : s.type === ta.s.UNICODE
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
        }, [h]),
        [b, R] = l.useState(!0);
    l.useLayoutEffect(() => {
        R(j >= 7);
    }, [j]);
    let v = l.useCallback(
            (e) => {
                let t = A.current?.getListDimensions();
                null == t || (e + t.height - tO >= O ? R(!1) : R(!0));
            },
            [O],
        ),
        L = l.useCallback(
            (e) => {
                (e(y), A.current?.scrollTo(O));
            },
            [O, y],
        ),
        P = l.useCallback(
            (e, t) => {
                let n = h[e];
                if (null == n) return 0;
                let i = b ? ty : 0;
                if (n.type === ta.s.RECENT) return t ? 0 : tT;
                if (n.type === ta.s.GUILD) {
                    let n = h[e + 1];
                    return null != n && n.type !== ta.s.GUILD ? (t ? tO + -2 * tS + tC + i : tC) : t ? i : tC;
                }
                return t ? tC + i : 2 * tC;
            },
            [h, b],
        ),
        M = l.useMemo(
            () =>
                function (e, t) {
                    return (0, r.jsx)(l.Fragment, { children: t }, e);
                },
            [],
        ),
        D = b ? "shortcut" : "hiddenshortcut";
    return (0, r.jsx)(e3.A, {
        categoryListRef: A,
        expressionsListRef: n,
        className: t,
        store: ec.Om,
        categories: h,
        listPadding: x,
        onScroll: v,
        renderCategoryListItem: C,
        renderSection: M,
        rowCount: h.length,
        categoryHeight: T,
        getScrollOffsetForIndex: P,
        rowCountBySection: S,
        navId: "emoji-picker-categories",
        itemIdPrefix: tA,
        emojiPacksHeader: null != d ? (0, r.jsx)(e2, { onClick: d }) : null,
        children: (e) =>
            j >= 7 &&
            (0, r.jsx)(
                eI.D,
                {
                    "aria-hidden": !b,
                    "aria-label": W.intl.string(W.t.dT0ctw),
                    className: o()(tp.KB, { [tp.h_]: !b }),
                    tabIndex: b ? 0 : -1,
                    onClick: () => L(e),
                    children: (0, r.jsx)(e$.n, { size: "custom", color: "currentColor", height: tx, width: tx }),
                },
                D,
            ),
    });
};
var tD = n(49999),
    tw = n(860197);
let tk = function (e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsxs)(G.E, {
        variant: "text-xs/medium",
        color: "text-default",
        className: tw.iE,
        children: [
            (0, r.jsx)(tr.HeartIcon, { size: "md", color: "currentColor", className: tw.Kk }),
            (0, r.jsx)("div", {
                className: tw.Qs,
                children: (0, r.jsx)(G.E, { variant: "text-xs/normal", children: W.intl.string(W.t.xdRf69) }),
            }),
            (0, r.jsx)(eI.D, {
                onClick: () => t(tD.i.UNKNOWN),
                children: (0, r.jsx)(eg.P, { size: "md", color: "currentColor", className: tw.VN }),
            }),
        ],
    });
};
var tU = n(941143),
    tG = n(717421),
    tF = n(343032),
    tJ = n(683063),
    tV = n(131607),
    tK = n(748798);
let tB = { tension: 750, mass: 2.5, friction: 70 };
function tH(e) {
    let { checked: t, onClick: n, buttonRef: i } = e,
        s = (0, m.bG)([eQ.Ay], () => eQ.Ay.useReducedMotion),
        a = D.default.getCurrentUser(),
        c = null != a && !(0, eW.TW)(a),
        u = c ? [] : [f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP],
        [d, E] = (0, tV.kn)(u),
        [I, g] = l.useState(!1),
        [h, p] = (0, tG.z)(() => ({})),
        A = (0, tU.animated)(tF.i);
    l.useEffect(() => {
        let e = d === f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (E(tD.i.DISMISS), setTimeout(() => g(e), 200));
    }, [d, E]);
    let _ = I ? W.intl.string(W.t["Osi/uy"]) : t && !c ? W.intl.string(W.t["5cRA/b"]) : W.intl.string(W.t.buV4av),
        N = I ? W.intl.string(W.t.ORK94p) : void 0;
    return (0, r.jsx)(tJ.u, {
        position: "top",
        title: N,
        body: _,
        asset: (0, r.jsx)(b.t, { size: "md", color: "currentColor" }),
        assetSize: 20,
        forceOpen: I,
        children: (0, r.jsx)(eI.D, {
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
            children: (0, r.jsx)(A, {
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
var tW = n(821609),
    tX = n(644508),
    tz = n(824832),
    tZ = n(267102),
    tY = n(242812);
function tq(e) {
    let { channel: t, closePopout: n } = e,
        i = l.useRef(null),
        s = l.useRef(0),
        [a, o] = l.useState(!1),
        [c, u] = l.useState(!1),
        d = (0, tZ.Us)() === eT.BRT.OVERLAY,
        m = c || a,
        f = l.useCallback(
            async (e, i, r) => {
                (u(!0),
                    n(),
                    await (0, tX.f)({
                        userImage: { data: e, file: i, image: r },
                        guildId: t?.guild_id ?? null,
                        analyticsLocation: {
                            section: eT.JJy.EXPRESSION_PICKER,
                            page: t?.guild_id != null ? eT.liQ.GUILD_CHANNEL : eT.liQ.DM_CHANNEL,
                        },
                    }),
                    (s.current += 1),
                    u(!1));
            },
            [t, n],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(y.m, {
                asContainer: !0,
                text: d ? W.intl.string(W.t.RMbedC) : null,
                children: (0, r.jsx)(tW.$, {
                    text: W.intl.string(W.t.iMJO37),
                    variant: "secondary",
                    onClick: function () {
                        i.current?.activateUploadDialogue();
                    },
                    disabled: m || d,
                }),
            }),
            (0, r.jsx)("div", {
                className: tY.F,
                children: (0, r.jsx)(tz.Ay, { ref: i, onChange: f, setLoading: o, disabled: m }, s.current),
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
    t8 = (0, eL.xI)(E.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
function t6(e) {
    switch (t$.A.convert.toCodePoint(e)) {
        case "1f3fb":
            return W.intl.string(W.t["BVK5b/"]);
        case "1f3fc":
            return W.intl.string(W.t.xJWOK8);
        case "1f3fd":
            return W.intl.string(W.t["MB+T5g"]);
        case "1f3fe":
            return W.intl.string(W.t.MODud2);
        case "1f3ff":
            return W.intl.string(W.t["0uzqsc"]);
        default:
            return W.intl.string(W.t.bGN1ow);
    }
}
let t7 = (e) => {
    let { fade: t, surrogate: n, onClick: i, delay: s, index: l } = e,
        a = (0, eq.rm)(`item-${l}`),
        o = ew.Ay.getURL(t4 + n),
        c = (0, tG.z)({ opacity: 1, from: { opacity: +!t }, delay: s }, "animate-always");
    return (0, r.jsx)(eI.D, {
        ...a,
        role: "option",
        "aria-selected": 0 === l,
        onClick: () => i(n),
        className: t3.B6,
        children: (0, r.jsx)(tU.animated.div, {
            "aria-label": t6(n),
            className: t3.g4,
            style: { backgroundImage: `url("${o}")`, ...c },
        }),
    });
};
function t9(e) {
    let { id: t, selectedSurrogate: n, onClick: i } = e,
        s = (0, t0.A)("diversity"),
        a = (0, tG.z)({ height: (t8 + 14) * (tm.W$.length + 1), from: { height: t8 + 14 }, config: { duration: 125 } }),
        o = l.useRef(s);
    l.useEffect(() => {
        o.current.focusFirstVisibleItem();
    }, []);
    let c = ["", ...tm.W$];
    return (
        eY().remove(c, (e) => e === n),
        c.unshift(n),
        (0, r.jsx)(eq.hD, {
            navigator: s,
            children: (0, r.jsx)(eq.PR, {
                children: (e) => {
                    let { ref: n, ...s } = e;
                    return (0, r.jsx)(tU.animated.div, {
                        ...s,
                        id: t,
                        ref: n,
                        className: t3.J6,
                        style: a,
                        role: "listbox",
                        children: c.map((e, t) =>
                            (0, r.jsx)(t7, { index: t, fade: 0 !== t, delay: 20 * t, surrogate: e, onClick: i }, t),
                        ),
                    });
                },
            }),
        })
    );
}
let ne = function (e) {
    let { searchBarRef: t, selectedSurrogate: n, className: i } = e,
        s = ew.Ay.getURL(t4 + n),
        [a, c] = l.useState(!1),
        u = (0, tQ.A)(null, () => c(!1)),
        d = l.useRef(null);
    return (0, r.jsxs)("div", {
        ref: u,
        className: o()(t3.fx, i),
        children: [
            (0, r.jsx)(eI.D, {
                innerRef: d,
                className: t3.Dj,
                onClick: function () {
                    c(!0);
                },
                "aria-label": W.intl.formatToPlainString(W.t["2SfnMp"], { skinTone: t6(n) }),
                "aria-haspopup": !0,
                "aria-expanded": a,
                "aria-controls": t5,
                tabIndex: a ? -1 : 0,
                children: (0, r.jsx)("div", { className: t3.g4, style: { backgroundImage: `url("${s}")` } }),
            }),
            a
                ? (0, r.jsx)("div", {
                      onKeyDown: function (e) {
                          e.key === t2.dh.ESCAPE
                              ? (e.stopPropagation(), c(!1), null != d.current && d.current.focus())
                              : "Tab" === e.key && c(!1);
                      },
                      children: (0, r.jsx)(t9, {
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
let ns = l.memo(function (e) {
    let {
            emojiListRef: t,
            gridNavigatorId: n,
            onKeyDown: i,
            onFocus: s,
            autoFocus: a,
            defaultSearchPlaceholder: o,
            ref: c,
        } = e,
        u = l.useRef(null),
        d = (0, eu.RQ)((e) => e.searchQuery),
        [m, f, E] = ec.Om.useStore((e) => [e.inspectedExpressionPosition, e.searchPlaceholder, e.hasInteracted], nt.x),
        I = l.useCallback(
            (e) => {
                (ec.Om.setActiveCategoryIndex("" === e ? 0 : -1),
                    ec.Om.setInspectedExpressionPosition(0, 0),
                    ec.Om.setSearchPlaceholder(null),
                    (0, eu.Ri)(e),
                    t.current?.scrollTo(0));
            },
            [t],
        ),
        g = l.useCallback(() => {
            I("");
        }, [I]);
    return (
        l.useImperativeHandle(c, () => ({ focus: () => u.current?.focus() })),
        (0, r.jsx)(ni.I, {
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
                "aria-label": W.intl.string(W.t.tCauZX),
                "aria-haspopup": "grid",
                "aria-autocomplete": "list",
                "aria-controls": n,
                "aria-expanded": !0,
                ...(E ? { "aria-activedescendant": (0, nn.Aq)(n, m.columnIndex, m.rowIndex) } : void 0),
            },
        })
    );
});
var nr = n(381575);
let nl = function (e) {
    let {
            channel: t,
            accessory: n,
            pickerIntention: i,
            headerClassName: s,
            emojiListRef: l,
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
        A = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(ns, {
                    emojiListRef: l,
                    gridNavigatorId: ta.lq,
                    onKeyDown: a,
                    ref: d,
                    onFocus: c,
                    autoFocus: u,
                    defaultSearchPlaceholder: (0, eP.wT)(i, f),
                }),
                i === eG.EmojiIntention.REACTION ? (0, r.jsx)(tH, { checked: f, onClick: E, buttonRef: I }) : null,
                n ?? (0, r.jsx)(ne, { searchBarRef: d, className: nr.fx, selectedSurrogate: m }),
                i !== eG.EmojiIntention.NO_CUSTOM_EMOJI && h ? (0, r.jsx)(tq, { channel: t, closePopout: p }) : null,
            ],
        });
    return (0, r.jsx)("div", { className: o()(nr.wx, s), children: null != g ? g(A) : A });
};
var na = n(182922),
    no = n(363195),
    nc = n(486020),
    nu = n(977566);
function nd(e) {
    return null != e && "animated" in e;
}
let nm = l.memo(function (e) {
    let t,
        i,
        { className: s, emojiGrid: a, guildId: o, pickerIntention: c, channel: u } = e,
        d = ec.Om.useStore((e) => e.inspectedExpressionPosition),
        f = l.useMemo(() => {
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
        default:
            t = null;
    }
    let E = (0, m.bG)([eN.A], () => (null !== t && t.type === td.i.GUILD ? eN.A.getGuild(t.guildId) : null), [t]),
        I = (0, m.bG)([e8.A], () => e8.A.isFocused()),
        g = (0, m.bG)([eQ.Ay], () => eQ.Ay.useReducedMotion, []),
        h = eb.Sf.useSetting(),
        p = (0, eP.O7)(o, nd(t) ? t : null),
        A = (0, m.bG)([T.Ay], () => T.Ay.expandedSectionsByGuildIds),
        { newlyAddedEmojis: _ } = (0, eU.A)(o, c),
        N = f?.type === tI.EMOJI ? f.subCategory : ta.tm.NONE;
    if (
        (l.useEffect(() => {
            let e = Date.now();
            return () => {
                Date.now() - e >= 250 &&
                    nd(t) &&
                    N !== ta.tm.NONE &&
                    (N === ta.tm.NEWLY_ADDED_EMOJI &&
                        null !== t &&
                        t.type === td.i.GUILD &&
                        (0, eo.mz)(t.guildId, _[0].id),
                    null != d.source &&
                        (0, eP.yB)({
                            emoji: t,
                            subCategory: N,
                            position: f.columnIndex + 1,
                            newlyAddedHighlight: N === ta.tm.NEWLY_ADDED_EMOJI && ea.isNewerThanLastSeen(o, t.id),
                        }));
            };
        }),
        null == t)
    )
        return null;
    let C = (function (e, t) {
            let { allowAnimatedEmoji: i, sectionsExpandedFromThreeRows: s, theme: l } = t;
            if (nd(e)) {
                let t = null != e.id ? nc.Ay.getEmojiURL({ id: e.id, animated: i && e.animated, size: 28 }) : e.url;
                return "" === t
                    ? (0, r.jsx)(G.E, {
                          variant: "text-md/normal",
                          className: nu.J_,
                          children: "surrogates" in e ? e.surrogates : null,
                      })
                    : (0, r.jsx)("img", { alt: (0, ew.N)(e) ?? "", src: t, className: nu.Zg });
            }
            if ("EXPAND_OR_COLLAPSE_EMOJI" !== e.type) return null;
            {
                let t = n(619508),
                    i = n(404828),
                    a = n(600003),
                    o = n(318121);
                return s.has(e.guildId)
                    ? (0, r.jsx)("img", { className: nu.Kk, src: (0, eE.M)(l) ? a : o, alt: "" })
                    : (0, r.jsx)("img", { className: nu.Kk, src: (0, eE.M)(l) ? t : i, alt: "" });
            }
        })(t, { allowAnimatedEmoji: h, sectionsExpandedFromThreeRows: A, theme: no.A.theme }),
        x =
            null != E
                ? (0, r.jsx)(tc.A, { className: nu.__invalid_guildIcon, guild: E, shouldAnimate: !g && I })
                : null;
    i =
        "EXPAND_OR_COLLAPSE_EMOJI" === t.type
            ? A.has(t.guildId)
                ? W.intl.string(W.t["/K2RDH"])
                : W.intl.string(W.t.NZI2Zk)
            : (0, ew.N)(t);
    let j = (function (e) {
        let { inspectedEmoji: t, guild: n } = e,
            i = nd(t);
        return null != n && i ? W.intl.format(W.t.KFW2aY, { guildName: n.name }) : null;
    })({ inspectedEmoji: t, channel: u, guildId: o, intention: c, guild: E });
    return (0, r.jsx)(na.A, {
        className: s,
        graphicPrimary: C,
        graphicSecondary: x,
        titlePrimary: i,
        titleSecondary: j,
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
    nx = n(414872),
    nT = n(285373),
    nj = n(559106),
    ny = n(304072),
    nO = n(189551),
    nS = n(594061),
    nb = n(771104),
    nR = n(442433),
    nv = n(147421),
    nL = n(723702),
    nP = n(140735),
    nM = n(194261),
    nD = n(703413);
let nw = (e) => {
    let { src: t, alt: n, size: i, "aria-label": s, className: a } = e,
        c = l.useRef(null),
        u = l.useRef(!1),
        d = u.current ? nD.S : nD.Y;
    return (0, r.jsx)("img", {
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
                          ((u.current = !0), c.current.classList.remove(nD.Y), c.current.classList.add(nD.S));
                  });
              },
    });
};
var nk = n(955388);
let nU = eY().memoize(
        (e) =>
            `${e * eG.EmojiSprites.NonDiversityPerRow}px ${e * Math.ceil(tm.Ay.numNonDiversitySprites / eG.EmojiSprites.NonDiversityPerRow)}px`,
    ),
    nG = eY().memoize(
        (e) =>
            `${e * eG.EmojiSprites.DiversityPerRow}px ${e * Math.ceil(tm.Ay.numDiversitySprites / eG.EmojiSprites.DiversityPerRow)}px`,
    ),
    nF = l.memo(function (e) {
        let { emoji: t, size: i, surrogateCodePoint: s, allowAnimatedEmoji: a, "aria-label": c, isLocked: u } = e,
            d = (() => {
                if (!t.useSpriteSheet) {
                    let e =
                        null == t.id
                            ? t.url
                            : nc.Ay.getEmojiURL({ id: t.id, animated: a && t.animated, size: eG.EMOJI_URL_BASE_SIZE });
                    return null != e
                        ? (0, r.jsx)(nw, {
                              className: nk.N1,
                              "aria-label": c,
                              src: e,
                              size: i,
                              alt: (0, ew.N)(t) ?? "",
                          })
                        : null;
                }
                return (0, r.jsx)("div", {
                    className: o()(nk.xA, { [nk.N1]: u }),
                    style: (function (e, t, i) {
                        let s, r, l;
                        if (!e.useSpriteSheet) return;
                        let a = null != e.index ? e.index : 0;
                        e.hasDiversity
                            ? ((s = n(12303)(`./spritesheet-${t}-${i}.png.js`).default),
                              (r = nG(i)),
                              (l = eG.EmojiSprites.DiversityPerRow))
                            : ((s = n(145519)(`./spritesheet-emoji-${i}.png.js`).default),
                              (r = nU(i)),
                              (l = eG.EmojiSprites.NonDiversityPerRow));
                        let o = (-a % l) * i,
                            c = -Math.floor(a / l) * i;
                        return {
                            backgroundImage: `url('${s}')`,
                            backgroundPosition: `${o}px ${c}px`,
                            backgroundSize: r,
                            height: i,
                            width: i,
                        };
                    })(t, s, i),
                    children: (0, r.jsx)(nP.A, { children: c }),
                });
            })();
        return (0, r.jsxs)(l.Fragment, {
            children: [
                d,
                u
                    ? (0, r.jsx)("div", {
                          className: nk.iD,
                          style: { width: i, height: i },
                          children: (0, r.jsx)(nM.LockIcon, { size: "xs", color: "currentColor", className: nk.fi }),
                      })
                    : null,
            ],
        });
    });
var nJ = n(537911);
function nV(e) {
    let t,
        {
            emoji: n,
            isFavorite: i,
            isLargeSize: s,
            isMediumSize: l,
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
        N = (0, m.bG)([eN.A], () => (n.type === td.i.GUILD ? eN.A.getGuild(n.guildId) : void 0), [n]);
    return (0, r.jsx)(nj.vN, {
        children: (0, r.jsx)("button", {
            ..._,
            className: o()(nJ._X, { [nJ.lG]: s, [nJ.Lh]: l, [nJ.Bx]: a, [h ?? ""]: a, [nJ.TV]: u }),
            "data-type": ed.g.EMOJI,
            "data-id": n.id,
            "data-name": n.name,
            "data-surrogates": "surrogates" in n ? n.surrogates : null,
            "data-animated": n.animated ? "true" : null,
            ref: A,
            children: (0, r.jsx)(nF, {
                "aria-label":
                    ((t = (0, ew.N)(n)),
                    (N?.name != null &&
                        (t = W.intl.formatToPlainString(W.t["nXv4/B"], { names: t, guildName: N.name })),
                    i)
                        ? W.intl.formatToPlainString(W.t["9FI9Z0"], { names: t })
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
function nK(e) {
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
            messageId: x,
            isBurstReaction: j,
            rowPosition: O,
            inNitroLockedSection: S,
        } = e,
        [b, R] = l.useState(""),
        v = (0, m.bG)([eQ.Ay], () => eQ.Ay.useReducedMotion),
        L = (0, m.bG)([T.Ay], () => T.Ay.getDisambiguatedEmojiContext(o), [o]),
        P = l.useRef(null),
        { emoji: M, size: D, isDisabled: w, columnIndex: k } = t;
    function U() {
        d.current || f.current || c(t);
    }
    let { ref: G, tabIndex: F, onFocus: J, ...V } = h(k, a) ?? {},
        K =
            b !== `${k}:${a}`
                ? (0, r.jsx)(nV, {
                      ref: G,
                      emoji: M,
                      isFavorite: L.isFavoriteEmojiWithoutFetchingLatest(M),
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
                              null != P.current &&
                              null != O &&
                              null != x &&
                              !e.shiftKey &&
                              null != M.name &&
                              j &&
                              !v &&
                              N
                          ) {
                              let e = null == M.id ? tm.Ay.convertNameToSurrogate(M.name) : M.name,
                                  t = P.current.getBoundingClientRect();
                              ((t.x = O.x + (k + 1) * D), R(`${k}:${a}`), (0, nv.h)(x, e, M.id, t));
                          }
                          !(function (e) {
                              if ((e.stopPropagation(), d.current || f.current)) return;
                              let n = e.altKey;
                              (n &&
                                  !T.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(M) &&
                                  C(i),
                                  (0, eS.sF)(eS._2.FAVORITE_EMOJI_TOOLTIP),
                                  u(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n }));
                          })(e);
                      },
                      onContextMenu: function (e) {
                          (0, nR.L3)(e, async () => {
                              let { default: e } = await Promise.all([
                                  n.e("638221"),
                                  n.e("73500"),
                                  n.e("496715"),
                                  n.e("293697"),
                                  n.e("904774"),
                                  n.e("446132"),
                              ]).then(n.bind(n, 233503));
                              return (t) => (0, r.jsx)(e, { ...t });
                          });
                      },
                      tabIndex: F,
                      columnIndex: k,
                      rowIndex: a,
                      size: D,
                      surrogateCodePoint: I,
                      selectedItemClassName: g,
                      inNitroLockedSection: S,
                  })
                : null;
    return (0, l.createElement)(
        "li",
        { ...V, key: i, ref: P },
        E
            ? (0, r.jsx)(y.m, {
                  text: W.intl.formatToPlainString(W.t.glqNsf, { key: (0, nL.isMac)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: K,
              })
            : K,
    );
}
let nB = (e) => {
    let {
            emojiDescriptors: t,
            emojiSize: i,
            onSelect: s,
            onInspect: a,
            surrogateCodePoint: c,
            getEmojiItemProps: u,
            getEmojiRowProps: d,
            isScrolling: m,
            isUsingKeyboardNavigation: f,
            rowIndex: E,
            allowAnimatedEmoji: I,
            showEmojiFavoriteTooltip: g,
            channelGuildId: h,
            category: p,
            selectedItemClassName: A,
            messageId: _,
            isBurstReaction: N,
            inNitroLockedSection: C,
            handleScrollUpOnSectionCollapse: x,
        } = e,
        T = n(619508),
        j = n(404828),
        y = n(600003),
        O = n(318121),
        S = n(443336),
        b = n(258901),
        R = n(135974),
        v = n(8013),
        L = (0, ep.Ay)(),
        P = ec.Om.getState(),
        [M, D] = l.useState(P.inspectedExpressionPosition),
        [w, k] = (0, ny.A)(null, 300),
        U = l.useRef(null);
    (l.useEffect(
        () =>
            ec.Om.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => D(e),
            ),
        [],
    ),
        l.useEffect(() => {
            nS.bW.loadIfNecessary();
        }, []));
    let F = i === ta.as.LARGE,
        J = i === ta.as.MEDIUM;
    function V(e) {
        let t = `${e.rowIndex}c${e.columnIndex}`;
        switch (e.type) {
            case tI.EXPAND_OR_COLLAPSE_EMOJIS: {
                let { visibleRowIndex: n, columnIndex: i } = e,
                    c = M.rowIndex === n && M.columnIndex === i,
                    d = e.sectionCollapsedToThreeRows
                        ? c
                            ? (0, eE.M)(L)
                                ? b
                                : v
                            : (0, eE.M)(L)
                              ? T
                              : j
                        : c
                          ? (0, eE.M)(L)
                              ? S
                              : R
                          : (0, eE.M)(L)
                            ? y
                            : O,
                    I = W.intl.string(e.sectionCollapsedToThreeRows ? W.t.NZI2Zk : W.t["/K2RDH"]);
                return (function () {
                    let {
                            onMouseEnter: n,
                            onMouseLeave: i,
                            handleSelect: s,
                            icon: c,
                            ariaLabel: d,
                            shouldShowRoundHighlight: I,
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { visibleRowIndex: g, columnIndex: h } = e,
                        { ref: p, tabIndex: _, onFocus: N, ...C } = u(h, E) ?? {},
                        x = M.rowIndex === g && M.columnIndex === h;
                    function T() {
                        m.current || f.current || a(e);
                    }
                    return (0, l.createElement)(
                        "li",
                        { ...C, key: t },
                        (0, r.jsx)(nj.vN, {
                            children: (0, r.jsx)("button", {
                                "aria-label": d,
                                ref: p,
                                className: o()(nJ._X, {
                                    [nJ.lG]: F,
                                    [nJ.Lh]: J,
                                    [nJ.Bx]: x && !I,
                                    [A ?? ""]: x,
                                    [nJ.TV]: w === t,
                                }),
                                onFocus: N ?? T,
                                onMouseOver: T,
                                onMouseEnter: n,
                                onMouseLeave: i,
                                onClick: s,
                                tabIndex: _,
                                children: c,
                            }),
                        }),
                    );
                })({
                    handleSelect: function (t) {
                        e.type !== tI.EXPAND_OR_COLLAPSE_EMOJIS ||
                            (t.stopPropagation(),
                            m.current ||
                                f.current ||
                                (s(e, { isFinalSelection: !0, toggleFavorite: !1 }),
                                (0, nO.G)(e.guildId),
                                e.sectionCollapsedToThreeRows || x(),
                                ev.default.track(eT.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                    collapsed: e.sectionCollapsedToThreeRows,
                                    guild_id: e.guildId,
                                })));
                    },
                    icon: (0, r.jsx)("img", { className: nJ.Kk, src: d, alt: "" }),
                    ariaLabel: I,
                    shouldShowRoundHighlight: !0,
                });
            }
            case tI.EMOJI: {
                let { columnIndex: n, visibleRowIndex: i } = e,
                    l = M.rowIndex === i && M.columnIndex === n;
                return (0, r.jsx)(
                    nK,
                    {
                        rowIndex: E,
                        descriptor: e,
                        emojiItemKey: t,
                        isInspected: l,
                        isScrolling: m,
                        isUsingKeyboardNavigation: f,
                        surrogateCodePoint: c,
                        allowAnimatedEmoji: I,
                        selectedItemClassName: A,
                        onSelect: s,
                        onInspect: a,
                        channelGuildId: h,
                        getEmojiItemProps: u,
                        isMediumSize: J,
                        isLargeSize: F,
                        pulseItemKey: w,
                        setPulseItemKey: k,
                        showEmojiFavoriteTooltip: g,
                        messageId: _,
                        isBurstReaction: N,
                        rowPosition: U?.current?.getBoundingClientRect(),
                        inNitroLockedSection: C,
                    },
                    t,
                );
            }
        }
    }
    function K(e) {
        return (0, r.jsx)("ul", {
            ...d(E),
            className: o()(nJ.ND, { [nJ.HO]: F, [nJ.X$]: J }),
            ref: U,
            children: e.map(V),
        });
    }
    if (p !== ta.s.TOP_GUILD_EMOJI) return K(t);
    let B = t.filter(
            (e) =>
                e.subCategory === ta.tm.TOP_GUILD_EMOJI ||
                (e.subCategory === ta.tm.NEWLY_ADDED_EMOJI &&
                    e.emoji.type === td.i.GUILD &&
                    !ea.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
        ),
        H = t.filter(
            (e) =>
                e.subCategory === ta.tm.NEWLY_ADDED_EMOJI &&
                e.emoji.type === td.i.GUILD &&
                ea.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id),
        );
    return 0 === H.length
        ? K(t)
        : (0, r.jsxs)("div", {
              className: nJ.Ng,
              children: [
                  (0, r.jsx)("div", { className: o()(nJ.V6, { [nJ.$3]: 0 === B.length }), children: K(B) }),
                  (0, r.jsxs)("div", {
                      className: nJ.bc,
                      children: [
                          (0, r.jsx)("div", {
                              className: o()(nJ.eE, { [nJ.eM]: 1 === H.length, [nJ.Wk]: B.length > 0 }),
                              children: K(H),
                          }),
                          (0, r.jsxs)("div", {
                              className: o()(nJ.lD, { [nJ.EI]: F, [nJ.qU]: J, [nJ.Wk]: B.length > 0 }),
                              children: [
                                  (0, r.jsx)(nb.A, { foreground: nJ.rI }),
                                  (0, r.jsx)(G.E, {
                                      variant: "text-xs/semibold",
                                      color: "text-overlay-light",
                                      children: W.intl.string(W.t.y2b7CA),
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
};
var nH = n(618723);
let nW = (0, eL.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    nX = (0, eL.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    nz = (0, eL.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    nZ = (0, eL.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    nY = (0, eL.xI)(E.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    nq = (0, eL.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    n$ = (0, eL.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    nQ = l.memo(function (e) {
        let t,
            n,
            {
                diversitySurrogate: i,
                emojiGrid: s,
                emojiListRef: a,
                emojiSize: c,
                onEmojiSelect: u,
                setUpsellConfigs: d,
                sectionDescriptors: f,
                rowCountBySection: E,
                collapsedSections: I,
                setCollapsedSections: g,
                getEmojiItemProps: h,
                getEmojiRowProps: A,
                rowCount: N,
                isUsingKeyboardNavigation: x,
                channelGuildId: T,
                messageId: j,
                isBurstReaction: y,
                listHeaderClassName: O,
            } = e,
            S = l.useRef(!1),
            b = ec.Om.useStore((e) => e.activeCategoryIndex),
            R = (0, eu.RQ)((e) => e.searchQuery),
            v = eb.Sf.useSetting(),
            L = (0, m.bG)([D.default], () => D.default.getCurrentUser()),
            P = (0, w.ki)(L),
            { location: M } = (0, p.p)(),
            { analyticsLocations: k } = (0, C.Ay)(),
            [U, F] = l.useState(0),
            [J, V] = l.useState(!1),
            {
                listPadding: K,
                renderRow: B,
                renderSection: H,
                renderSectionHeader: X,
                renderSectionFooter: z,
                sectionMarginBottom: Y,
                sectionHeaderHeight: q,
                sectionFooterHeight: $,
            } = (function (e) {
                let {
                        collapsedSections: t,
                        diversitySurrogate: n,
                        emojiGrid: i,
                        emojiSize: s,
                        onEmojiSelect: a,
                        searchQuery: c,
                        sectionDescriptors: u,
                        setCollapsedSections: d,
                        getEmojiItemProps: f,
                        getEmojiRowProps: E,
                        isScrolling: I,
                        isUsingKeyboardNavigation: g,
                        allowAnimatedEmoji: h,
                        channelGuildId: A,
                        messageId: _,
                        isBurstReaction: N,
                        listHeaderClassName: C,
                        activeSectionIndex: x,
                        emojiListRef: T,
                    } = e,
                    j = (0, p.p)(),
                    y = l.useRef(eT.An1),
                    O = l.useMemo(() => ("" !== n ? t$.A.convert.toCodePoint(n) : ""), [n]),
                    S = l.useCallback(
                        (e) => {
                            let t = u[e],
                                n = u[e + 1];
                            return e >= u.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked;
                        },
                        [u],
                    ),
                    b = l.useCallback(
                        (e) => {
                            if (e >= u.length - 1) return !1;
                            let t = u[e],
                                n = u[e + 1];
                            return !t.isNitroLocked && n.isNitroLocked;
                        },
                        [u],
                    ),
                    R = l.useCallback(
                        function (e) {
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                i = new Set(t),
                                s = t.has(e);
                            (s ? i.delete(e) : i.add(e),
                                null != n &&
                                    ev.default.track(eT.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                        location: j.location,
                                        tab: eF.kx.EMOJI,
                                        collapsed: !s,
                                        guild_id: n.id,
                                    }),
                                d(i));
                        },
                        [j, t, d],
                    ),
                    v = l.useCallback((e) => {
                        let { columnIndex: t, visibleRowIndex: n } = e,
                            i = e.type === tI.EMOJI ? (0, ew.N)(e.emoji) : e.name;
                        (y.current !== eT.An1 && window.cancelAnimationFrame(y.current),
                            (y.current = window.requestAnimationFrame(() => {
                                (ec.Om.setInspectedExpressionPosition(t, n, ed.t.MOUSE_EVENT),
                                    ec.Om.setSearchPlaceholder(i),
                                    (y.current = eT.An1));
                            })));
                    }, []),
                    L = (0, m.bG)([eS.HP], () => eS.HP.hasHotspot(eS._2.FAVORITE_EMOJI_TOOLTIP), []),
                    P = l.useMemo(
                        () =>
                            eY().memoize((e, t) => {
                                let n = i[e],
                                    l = u[t.sectionIndex];
                                return (0, r.jsx)(
                                    nB,
                                    {
                                        emojiDescriptors: n,
                                        emojiSize: s,
                                        surrogateCodePoint: O,
                                        onInspect: v,
                                        onSelect: a,
                                        getEmojiItemProps: f,
                                        getEmojiRowProps: E,
                                        isScrolling: I,
                                        isUsingKeyboardNavigation: g,
                                        rowIndex: e,
                                        allowAnimatedEmoji: h,
                                        showEmojiFavoriteTooltip: L,
                                        channelGuildId: A,
                                        category: l.sectionId,
                                        selectedItemClassName: nH.__invalid_selectedItem,
                                        messageId: _,
                                        isBurstReaction: N,
                                        inNitroLockedSection: l.isNitroLocked,
                                        handleScrollUpOnSectionCollapse: function () {
                                            T.current?.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                                        },
                                    },
                                    e,
                                );
                            }),
                        [i, u, s, O, v, a, f, E, I, g, h, L, A, _, N, T],
                    );
                l.useEffect(() => () => P.cache?.clear?.(), [P]);
                let M = l.useMemo(
                        () =>
                            eY().memoize((e) => {
                                let n = u[e];
                                if (null == n) return;
                                let { guild: i, categoryId: s, type: l, sectionId: a } = n;
                                if (l === ta.s.SEARCH_RESULTS) return;
                                let c =
                                        l === ta.s.GUILD
                                            ? null != i
                                                ? (0, r.jsx)(tc.A, { guild: i, height: 16, width: 16 })
                                                : null
                                            : null != s
                                              ? (0, r.jsx)(to, { categoryId: s, height: 16, width: 16, size: "custom" })
                                              : null,
                                    d = i?.name;
                                null != s && (d = (0, eP.Nu)(s, i?.name));
                                let m = x === e,
                                    f = n.isNitroLocked,
                                    E = f && !m,
                                    I = f && m;
                                return (0, r.jsx)(
                                    np.A,
                                    {
                                        className: o()(nH.wx, C, { [nH.RA]: E, [nH.sp]: I }),
                                        icon: c,
                                        isCollapsed: t.has(a),
                                        onClick: () => R(a, i),
                                        children: d,
                                    },
                                    a,
                                );
                            }),
                        [u, t, R, C, x],
                    ),
                    D = (0, tf.k0)(),
                    w = l.useCallback(
                        (e, n) => {
                            let i = u[e],
                                s = b(e),
                                l = S(e);
                            return (0, r.jsx)(
                                "div",
                                {
                                    role: "rowgroup",
                                    className: o()(nH.Wy, {
                                        [nH.YD]: e === u.length - 1,
                                        [nH.jl]: t.has(i.sectionId),
                                        [nH.cW]: i.isNitroLocked,
                                        [nH.T5]: s || l,
                                    }),
                                    children: n,
                                },
                                e,
                            );
                        },
                        [t, u, b, S],
                    ),
                    k = l.useCallback(
                        (e) =>
                            b(e)
                                ? D
                                    ? (0, r.jsx)(nx.ap, {})
                                    : (0, r.jsx)(nx.Ay, {})
                                : S(e)
                                  ? (0, r.jsx)("div", { className: nH.pQ })
                                  : null,
                        [b, S, D],
                    ),
                    U = l.useCallback((e) => (b(e) ? 41 : 33 * !!S(e)), [b, S]),
                    G = l.useCallback(
                        (e) => (e === u.length - 1 || t.has(u[e]?.sectionId) || b(e) || S(e) ? 0 : nq),
                        [t, u, b, S],
                    );
                return {
                    listPadding: l.useMemo(() => ["" !== c ? nZ : nW, nX, nz, 0], [c]),
                    renderRow: P,
                    renderSection: w,
                    renderSectionHeader: M,
                    renderSectionFooter: k,
                    sectionMarginBottom: G,
                    sectionHeaderHeight: l.useCallback((e) => (u[e].type === ta.s.SEARCH_RESULTS ? 0 : nY), [u]),
                    sectionFooterHeight: U,
                };
            })({
                collapsedSections: I,
                diversitySurrogate: i,
                emojiGrid: s,
                emojiSize: c,
                onEmojiSelect: u,
                searchQuery: R,
                sectionDescriptors: f,
                setCollapsedSections: g,
                getEmojiItemProps: h,
                getEmojiRowProps: A,
                isScrolling: S,
                isUsingKeyboardNavigation: x,
                allowAnimatedEmoji: v,
                channelGuildId: T,
                messageId: j,
                isBurstReaction: y,
                listHeaderClassName: O,
                activeSectionIndex: U,
                emojiListRef: a,
            }),
            Q = l.useCallback(
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
        l.useLayoutEffect(() => {
            Q(a.current?.getScrollerNode()?.scrollTop ?? 0);
        }, [a, Q, f, E, R]);
        let ee = (0, em.Fk)({
            activeCategoryIndex: b,
            isScrolling: S,
            listRef: a,
            onActiveCategoryIndexChange: function (e) {
                "" === R && ec.Om.setActiveCategoryIndex(e);
            },
            scrollOffset: 0,
            searchQuery: R,
            disableForSearch: !1,
        });
        (0, em.FV)({ searchQuery: R, activeCategoryIndex: b, listRef: a });
        let et = l.useCallback(
                (e) => {
                    (ee(e),
                        Q(e),
                        n0({ emojiListRef: a, sectionDescriptors: f, scrollTop: e, searchQuery: R, setShowUpsell: V }));
                },
                [ee, Q, a, f, R, V],
            ),
            en = f.length > 0;
        (l.useEffect(() => {
            J &&
                (ev.default.track(eT.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: Z.e.EMOJI_PICKER_FLOATING_UPSELL,
                    location: M,
                    location_stack: k,
                }),
                (0, n_.sq)(eT.U7l.PREMIUM_UPSELL_VIEWED, k, () => (0, nN.uq)(Z.e.EMOJI_PICKER_FLOATING_UPSELL)));
        }, [M, k, J]),
            l.useEffect(() => {
                "" !== R && V(!1);
            }, [R]));
        let ei = l.useRef(null);
        return (
            l.useEffect(
                () => (
                    clearTimeout(ei.current),
                    (ei.current = setTimeout(() => {
                        (en
                            ? nE.O.announce(W.intl.string(W.t.uZ4F2O), "polite")
                            : nE.O.announce(W.intl.string(W.t.IxxiKF), "assertive"),
                            (ei.current = null));
                    }, 200)),
                    () => {
                        clearTimeout(ei.current);
                    }
                ),
                [en, R],
            ),
            (0, r.jsxs)("div", {
                className: nH.AD,
                children: [
                    en
                        ? (0, r.jsx)(ng.A, {
                              role: "none presentation",
                              className: nH.p_,
                              listPadding: K,
                              onScroll: et,
                              renderRow: B,
                              renderSection: H,
                              renderSectionHeader: X,
                              renderSectionFooter: z,
                              rowCount: N,
                              rowCountBySection: E,
                              rowHeight: c + 2 * n$,
                              sectionHeaderHeight: q,
                              sectionMarginBottom: Y,
                              sectionFooterHeight: $,
                              stickyHeaders: !0,
                              ref: a,
                          })
                        : (0, r.jsx)(nI.A, {
                              message: (0, r.jsx)(G.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: W.intl.string(W.t.IxxiKF),
                              }),
                              className: nH.BZ,
                          }),
                    P || nf.Fr
                        ? null
                        : (0, r.jsx)(nC.d, {
                              showUpsell: J,
                              text:
                                  ((t = (0, eW.Dd)(Z.PremiumTypes.TIER_2)),
                                  W.intl.format(W.t.gMVjeS, {
                                      nitroTierName: t,
                                      onClick: () => {
                                          d({ type: th.PREMIUM, emojiDescriptor: void 0 });
                                      },
                                  })),
                              button: ((n = (0, nA.qD)()), (0, eW.LE)(n, Z.pe.TIER_2) ?? W.intl.string(W.t.BmJkbd)),
                              buttonAnalyticsObject: { section: eT.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                              leadingAction: (0, r.jsx)(nT.l, {
                                  size: "sm",
                                  className: nH.ij,
                                  location: _.A.PREMIUM_WISHLIST_EMOJI_UPSELL,
                              }),
                          }),
                ],
            })
        );
    }),
    n0 = eY().throttle(
        function (e) {
            let { emojiListRef: t, sectionDescriptors: n, scrollTop: i, searchQuery: s, setShowUpsell: r } = e;
            r(
                (0, nh.s)({ listRef: t, searchQuery: s, nitroLockedSectionStates: n, scrollTop: i })
                    .areOnlyNitroLockedSectionsVisible,
            );
        },
        300,
        { leading: !1, trailing: !0 },
    );
var n1 = n(506774),
    n2 = n(28863),
    n3 = n(277984),
    n5 = n(404374),
    n4 = n(780964),
    n8 = n(766075),
    n6 = n(166403),
    n7 = n(506150);
let n9 = "premiumRetentionEmojiPickerNotice",
    ie = n1.w.get(n9),
    it = function (e) {
        let { closePopout: t, channel: n } = e,
            [i, s] = l.useState(!1),
            { subscription: a, hasFetchedSubscriptions: o } = (0, m.cf)([n6.A], () => ({
                subscription: n6.A.getPremiumSubscription(),
                hasFetchedSubscriptions: n6.A.hasFetchedSubscriptions(),
            }));
        if (
            (l.useEffect(() => {
                o || (0, n3.hP)();
            }, [o]),
            null == a || !(0, eW.PK)(a.status) || i)
        )
            return null;
        let c = a.status === eT.Dmq.PAST_DUE ? (0, eW.ji)(a).expiresDate : Q()(a.currentPeriodStart).add(Z.ph),
            u = `${a.id}:${c.toISOString()}`;
        if (ie === u) return null;
        let d =
            eW.Ay.getPremiumType(a.planId) === Z.PremiumTypes.TIER_0
                ? n5.k0.PREMIUM_TIER_0
                : eW.Ay.getPremiumType(a.planId) === Z.PremiumTypes.TIER_1
                  ? n5.k0.PREMIUM_TIER_1
                  : n5.k0.PREMIUM_TIER_2;
        return (0, r.jsxs)(G.E, {
            variant: "text-xs/medium",
            color: "text-default",
            className: n7.g$,
            children: [
                (0, r.jsx)(b.t, { size: "md", className: n7.lu, color: d }),
                (0, r.jsxs)("div", {
                    className: n7.Xn,
                    children: [
                        (0, r.jsx)(G.E, {
                            variant: "text-xs/normal",
                            children: W.intl.format(W.t.bTMjiO, {
                                planName: eW.Ay.getTierDisplayNameByPlanId(a.planId),
                                endsAt: c.toDate(),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            children: (0, r.jsx)(n2.Anchor, {
                                onClick: () => {
                                    ((0, eP.xf)(n), t(), (0, n8.openUserSettings)(n4.X.NITRO_PANEL));
                                },
                                children: W.intl.string(W.t.W3aavh),
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(eI.D, {
                    onClick: () => {
                        (n1.w.set(n9, u), (ie = u), s(!0));
                    },
                    children: (0, r.jsx)(eg.P, { size: "md", color: "currentColor", className: n7.YF }),
                }),
            ],
        });
    };
var ii = n(148361);
let is = (0, eL.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    ir = (0, eL.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT);
function il(e) {
    return e.stopPropagation();
}
function ia(e, t) {
    ec.Om.setInspectedExpressionPosition(e, t, ed.t.GRID_NAVIGATOR_EVENT);
}
let io = u()(eP.bo, 200),
    ic = u()(eP.Wi, 200),
    iu = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    id = l.memo(function (e) {
        let t,
            n,
            i,
            {
                pickerIntention: s,
                channel: a,
                guildId: c,
                closePopout: u,
                emojiSize: E = ta.as.MEDIUM,
                hasTabWrapper: j = !1,
                onSelectEmoji: y,
                containerWidth: O,
                onNavigateAway: S,
                persistSearch: b,
                className: R,
                headerClassName: v,
                analyticsOverride: L = iu,
                searchProps: P = {},
                wrapper: M,
                shouldHidePickerActions: k = !1,
                messageId: U,
                renderHeader: G,
                listHeaderClassName: F,
                categoryListClassName: J,
                showOnlyUnicode: V = !1,
                showAddEmojiButton: K,
                ref: B,
                isViewingEmojiPacks: H = !1,
                onViewEmojiPacksChange: X,
            } = e,
            { onFocus: z, onKeyDown: Z, autoFocus: Y = !0, accessory: $ } = P,
            Q = (0, m.bG)([eR.Ay], () => (null != c ? eR.Ay.getDefaultChannel(c) : null), [c]),
            [ee, et] = l.useState(null),
            en = l.useRef(""),
            ei = (0, eu.RQ)((e) => e.searchQuery),
            es = l.useRef(null),
            er = l.useRef(null),
            el = l.useRef(null);
        null == a && null != Q && (a = Q);
        let ef = a?.getGuildId() ?? c ?? null,
            [eE, eI] = l.useState(!1),
            eg = l.useRef(null),
            eh = D.default.getCurrentUser(),
            ep = (0, w.ki)(eh),
            eA = eE && ep;
        l.useImperativeHandle(B, () => ({ onPickerOpen: e1 }));
        let { location: e_ } = (0, p.p)(),
            { page: eC, section: ex, object: ej, openPopoutType: ey, popoutLocation: eL } = L,
            eM = l.useMemo(() => ({ ...e_, section: ex ?? eT.JJy.EMOJI_PICKER_POPOUT }), [e_, ex]),
            { analyticsLocations: eD } = (0, C.Ay)(_.A.EMOJI_PICKER),
            { diversitySurrogate: eF } = (0, m.cf)([T.Ay], () => ({ diversitySurrogate: T.Ay.diversitySurrogate })),
            eV = (0, eP.sL)(ei, a, s, V),
            eK = null == eV ? 0 : eV.locked.length + eV.unlocked.length,
            eB = eb.iM.useSetting(),
            eH = l.useMemo(() => new Set(eB), [eB]),
            eW = l.useCallback((e) => {
                eb.iM.updateSetting(Array.from(e));
            }, []),
            eX = (0, em.oV)({
                gridWrapperRef: es,
                containerWidth: O,
                showingEmptyState: H,
                listPaddingLeft: ir,
                listScrollbarWidth: 8,
            }),
            {
                rowCountBySection: eZ,
                sectionDescriptors: eq,
                emojiGrid: e$,
                columnCounts: eQ,
            } = (function (e) {
                let {
                        channel: t,
                        fallbackGuildId: n,
                        collapsedSections: i,
                        pickerIntention: s,
                        emojiSearchResults: r,
                        gridWidth: a,
                        emojiPaddingHorizontal: o,
                        emojiSpriteSize: c,
                        showOnlyUnicode: u,
                    } = e,
                    d = (0, m.bG)([T.Ay], () => T.Ay.categories),
                    f = l.useMemo(() => (u ? tm.Ay.getCategories() : d), [d, u]),
                    E = (0, m.bG)([eN.A], () => eN.A.getGuild(t?.getGuildId()), [t]),
                    I = t?.getGuildId() ?? n,
                    g = (0, m.bG)([T.Ay], () => T.Ay.getDisambiguatedEmojiContext(I), [I]),
                    h = (0, eP.XI)(I),
                    p = (0, eP.Fj)(I),
                    A = (0, eP.QZ)(I),
                    { topEmojis: _, newlyAddedEmojis: N } = (0, eU.A)(I, s),
                    C = (0, m.yK)([tE.Ay], () => tE.Ay.getFlattenedGuildIds(), []),
                    x = (0, m.bG)([T.Ay], () => T.Ay.expandedSectionsByGuildIds),
                    j = (0, m.bG)([D.default], () => D.default.getCurrentUser()),
                    y = (0, w.ki)(j),
                    O = (0, tf.k0)(),
                    S = g.getGroupedCustomEmoji();
                return l.useMemo(() => {
                    let e = [],
                        n = [],
                        l = [],
                        u = [],
                        d = 0,
                        m = 0;
                    if (null != g && null != a) {
                        let g = Math.floor(a / (c + 2 * o)),
                            j = 3 * g;
                        function I(r, a) {
                            let o = new Map(),
                                f = i.has(a.sectionId),
                                [E, I] = eY().partition(r, (e) => {
                                    let n = ew.Ay.isEmojiDisabled({ emoji: e, channel: t, intention: s });
                                    return (o.set(e, n), !n);
                                }),
                                h = E.concat(I),
                                p = a.guild,
                                A = h.length > j && null != p && a.isNitroLocked,
                                C = A && !x.has(p.id);
                            C && h.splice(j - 1);
                            let T = Math.ceil((A ? h.length + 1 : h.length) / g),
                                y = [];
                            for (let e = 0; e < T; e++) {
                                let t = e * g,
                                    n = t + g,
                                    i = h
                                        .slice(t, n)
                                        .map((e, t) => ({
                                            type: 0,
                                            emoji: e,
                                            size: c,
                                            isDisabled: o.get(e),
                                            rowIndex: m,
                                            columnIndex: t,
                                            visibleRowIndex: d,
                                            category: a.type,
                                            subCategory:
                                                a.sectionId === ta.s.TOP_GUILD_EMOJI
                                                    ? (0, eP.DA)(_, N, e.id ?? e.uniqueName ?? e.name)
                                                    : ta.tm.NONE,
                                        }));
                                if ((y.push(i), !f)) {
                                    if (A && e === T - 1) {
                                        let t = y[e];
                                        t.push({
                                            type: 1,
                                            guildId: p.id,
                                            name: W.intl.string(W.t.NZI2Zk),
                                            size: c,
                                            rowIndex: e,
                                            columnIndex: t.length,
                                            visibleRowIndex: d,
                                            sectionCollapsedToThreeRows: C,
                                        });
                                    }
                                    (u.push(i.length), l.push(i), d++);
                                }
                                m++;
                            }
                            let O = { ...a, count: r.length };
                            (n.push(O), e.push(f ? 0 : T));
                        }
                        if (null != r)
                            (0 !== r.unlocked.length &&
                                I(r.unlocked, {
                                    type: ta.s.SEARCH_RESULTS,
                                    sectionId: ta.s.SEARCH_RESULTS,
                                    count: r.unlocked.length,
                                    isNitroLocked: !1,
                                }),
                                0 !== r.locked.length &&
                                    I(r.locked, {
                                        type: ta.s.PREMIUM_UPSELL,
                                        categoryId: ta.R2.PREMIUM_UPSELL,
                                        sectionId: ta.s.PREMIUM_UPSELL,
                                        count: r.locked.length,
                                        isNitroLocked: !y,
                                    }));
                        else
                            for (let e of f)
                                if (e === ta.R2.CUSTOM) {
                                    function T(n) {
                                        let i = S.get(n);
                                        if (null == i) return;
                                        let r = i.filter(
                                            (e) =>
                                                !tg.includes(
                                                    ew.Ay.getEmojiUnavailableReason({
                                                        emoji: e,
                                                        channel: t ?? eR.Ay.getDefaultChannel(n),
                                                        intention: s,
                                                    }),
                                                ),
                                        );
                                        if (0 === r.length) return;
                                        let l = eN.A.getGuild(n),
                                            a =
                                                O ||
                                                (!y &&
                                                    ew.Ay.isEmojiCategoryNitroLocked({
                                                        categoryEmojis: r,
                                                        channel: t,
                                                        intention: s,
                                                    }));
                                        I(r, {
                                            categoryId: e,
                                            guild: l,
                                            type: ta.s.GUILD,
                                            sectionId: null != l ? l.id : (0, tu.A)(),
                                            count: r.length,
                                            isNitroLocked: a,
                                        });
                                    }
                                    if ((null != E && T(E.id), (0, eG.isExternalEmojiAllowedForIntention)(s)))
                                        for (let e of C) (null == E || E.id !== e) && T(e);
                                } else if (e === ta.R2.TOP_GUILD_EMOJI) {
                                    if (null != E) {
                                        let { allEmojis: t } = (0, ek.W)({ topEmojis: _, newlyAddedEmojis: N });
                                        t.length > 0 &&
                                            I(t, {
                                                categoryId: e,
                                                guild: eN.A.getGuild(E.id),
                                                type: ta.s.TOP_GUILD_EMOJI,
                                                sectionId: ta.s.TOP_GUILD_EMOJI,
                                                count: t.length,
                                                isNitroLocked: !1,
                                            });
                                    }
                                } else if (e === ta.R2.RECENT) {
                                    let n = (s === eG.EmojiIntention.REACTION ? A : p).filter(
                                        (e) => !ew.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }),
                                    );
                                    I(n, {
                                        categoryId: e,
                                        type: ta.s.RECENT,
                                        sectionId: ta.s.RECENT,
                                        count: n.length,
                                        isNitroLocked: !1,
                                    });
                                } else if (e === ta.R2.FAVORITES) {
                                    let n = h.filter(
                                        (e) => !ew.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }),
                                    );
                                    0 !== n.length &&
                                        I(n, {
                                            categoryId: e,
                                            type: ta.s.FAVORITES,
                                            sectionId: ta.s.FAVORITES,
                                            count: n.length,
                                            isNitroLocked: !1,
                                        });
                                } else {
                                    let t = tm.Ay.getByCategory(e);
                                    null != t &&
                                        I(t, {
                                            categoryId: e,
                                            type: ta.s.UNICODE,
                                            sectionId: e,
                                            count: t.length,
                                            isNitroLocked: !1,
                                        });
                                }
                    }
                    return { columnCounts: u, emojiGrid: l, rowCountBySection: e, sectionDescriptors: n };
                }, [g, a, c, o, r, i, S, x, t, s, _, N, y, f, E, C, A, p, h, O]);
            })({
                gridWidth: eX,
                fallbackGuildId: ef,
                channel: a,
                pickerIntention: s,
                emojiSearchResults: eV,
                collapsedSections: eH,
                emojiPaddingHorizontal: is,
                emojiSpriteSize: E,
                showOnlyUnicode: V,
            }),
            { newlyAddedEmojis: e0 } = (0, eU.A)(ef, s);
        ((t = l.useRef({ intention: s, isBurstReaction: eE, analyticsObject: ej })),
            l.useEffect(() => {
                t.current.intention === eG.EmojiIntention.REACTION && eJ(t.current);
            }, []));
        let e1 = l.useCallback(() => {
                let e = e0.length > 0 ? e0[0].id : null;
                ((0, eo.uV)(ef, e), eJ({ intention: s, isBurstReaction: eE, analyticsObject: ej }));
            }, [e0, ef, s, eE, ej]),
            e2 = (function (e) {
                let {
                        pickerIntention: t,
                        selectedChannel: n,
                        fallbackGuildId: i,
                        onSelectEmoji: s,
                        setUpsellConfigs: r,
                        emojiSelectAnalytics: a,
                        trackEmojiFavorited: o,
                    } = e,
                    c = (0, m.bG)([T.Ay], () => T.Ay.getDisambiguatedEmojiContext(n?.getGuildId() ?? i), [i, n]);
                return l.useCallback(
                    (e, i) => {
                        if (0 === e.type) {
                            let { emoji: l } = e;
                            if (null == l) return;
                            let u = ew.Ay.getEmojiUnavailableReason({ emoji: l, channel: n, intention: t });
                            if (i.toggleFavorite)
                                return void (c.isFavoriteEmojiWithoutFetchingLatest(l) || null != u
                                    ? (0, g.Sw)(l)
                                    : (o?.(e), (0, g.V4)(l)));
                            if (u !== eG.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) {
                                if (u === eG.EmojiDisabledReasons.PREMIUM_LOCKED) {
                                    (a?.(e, u), r({ type: 0, emojiDescriptor: e }));
                                    return;
                                }
                                if (u === eG.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED && l.type === td.i.GUILD) {
                                    (a?.(e, u), r({ type: 1, guildId: l.guildId, emojiId: l.id }));
                                    return;
                                }
                                u !== eG.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE &&
                                    (a?.(e), s({ emoji: l, willClose: i.isFinalSelection, isBurst: i.isBurst }));
                            }
                        }
                    },
                    [n, t, s, r, c, a, o],
                );
            })({
                pickerIntention: s,
                selectedChannel: a,
                fallbackGuildId: ef,
                closePopout: u,
                onSelectEmoji: y,
                setUpsellConfigs: et,
                emojiSelectAnalytics: (e, t) => {
                    "" !== ei
                        ? (0, eP.Wf)({
                              emoji: e.emoji,
                              location: { ...eM, object: eT.ZSU.EMOJI },
                              searchQuery: ei,
                              isLocked: null != t,
                              intention: s,
                              messageId: U,
                          })
                        : (0, eP._7)({
                              emoji: e.emoji,
                              location: { ...eM, object: ej ?? eT.ZSU.EMOJI, ...(null != eC && { page: eC }) },
                              pickerIntention: s,
                              category: e.category,
                              subCategory: e.subCategory,
                              position: e.columnIndex + 1,
                              newlyAddedHighlight:
                                  e.subCategory === ta.tm.NEWLY_ADDED_EMOJI && ea.isNewerThanLastSeen(ef, e.emoji.id),
                              isBurstReaction: eE,
                              messageId: U,
                              lockedReason: t,
                              visibleRowIndex: e.visibleRowIndex,
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, eP.C5)({ emoji: e.emoji, location: { ...eM, object: eT.ZSU.EMOJI } });
                },
            }),
            e3 = l.useCallback(() => {
                (u(), S?.());
            }, [u, S]),
            {
                getItemProps: e5,
                getRowProps: e4,
                gridContainerProps: e8,
                handleGridContainerKeyDown: e6,
                isUsingKeyboardNavigation: e7,
            } = (function (e) {
                let {
                        analyticsLocation: t,
                        pickerIntention: n,
                        columnCounts: i,
                        onSelectEmoji: s,
                        emojiGrid: r,
                        emojiList: a,
                        channelGuildId: o,
                        isBurstReaction: c,
                    } = e,
                    u = (0, m.bG)([T.Ay], () => T.Ay.getDisambiguatedEmojiContext(o), [o]),
                    f = l.useCallback(
                        (e, i) => {
                            if (e.type === tI.EMOJI) {
                                if (null != e.emoji && i.altKey)
                                    return void (u.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                        ? (0, g.Sw)(e.emoji)
                                        : ((0, eP.C5)({ emoji: e.emoji, location: { ...t, object: eT.ZSU.EMOJI } }),
                                          (0, g.V4)(e.emoji)));
                                let r = {
                                    page: null != o ? eT.liQ.GUILD_CHANNEL : eT.liQ.DM_CHANNEL,
                                    section: eT.JJy.EMOJI_PICKER_POPOUT,
                                    object: eT.ZSU.EMOJI,
                                };
                                (c &&
                                    (r = {
                                        page: null != o ? eT.liQ.GUILD_CHANNEL : eT.liQ.DM_CHANNEL,
                                        section: eT.JJy.EMOJI_PICKER_POPOUT,
                                        object: eT.ZSU.EMOJI,
                                    }),
                                    (0, eP._7)({
                                        emoji: e.emoji,
                                        location: r,
                                        pickerIntention: n,
                                        category: e.category,
                                        subCategory: e.subCategory,
                                        newlyAddedHighlight:
                                            e.subCategory === ta.tm.NEWLY_ADDED_EMOJI &&
                                            ea.isNewerThanLastSeen(o, e.emoji.id),
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
                    } = (0, em.Ff)({
                        columnCounts: i,
                        gridNavigatorId: ta.lq,
                        itemGrid: r,
                        itemList: a,
                        onGridNavigatorItemSelect: f,
                        onGridNavigatorPositionChange: ia,
                    });
                return (
                    l.useEffect(
                        () =>
                            ec.Om.subscribe(
                                (e) => e.inspectedExpressionPosition,
                                (e) => {
                                    if (null == e) return;
                                    let { columnIndex: t, rowIndex: n, source: i } = e;
                                    i !== ed.t.GRID_NAVIGATOR_EVENT &&
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
                analyticsLocation: eM,
                columnCounts: eQ,
                onSelectEmoji: y,
                emojiGrid: e$,
                emojiList: er,
                channelGuildId: ef,
                isBurstReaction: eA,
            });
        (((e, t) => {
            let [n, i] = l.useState(null);
            (l.useEffect(() => {
                null != n && (t.current?.scrollToSectionTop(n), i(null));
            }, [t, n]),
                l.useEffect(() => {
                    i(ec.Om.getState().activeCategoryIndex);
                }, [e]));
        })(O, er),
            l.useLayoutEffect(() => {
                Y && el.current?.focus();
            }, [O, eF, el, Y]),
            (n = l.useRef(H)),
            l.useEffect(() => {
                (Y && n.current && !H && el.current?.focus(), (n.current = H));
            }, [Y, H, el]),
            l.useEffect(() => {
                b || (0, eu.Ri)("");
            }, [b]),
            l.useEffect(
                () => (
                    ev.default.track(eT.HAw.OPEN_POPOUT, {
                        type: ey ?? "Emoji Picker",
                        guild_id: ef,
                        location: eL,
                        ...(0, N.dI)(a),
                    }),
                    () => {
                        (io.cancel(), ic.cancel());
                    }
                ),
                [ey, ef, eL, a],
            ),
            (0, A.Ay)(() => ((0, eP.V$)({ intention: s, location: eM }), (en.current = ei), ec.Om.resetStoreState)),
            l.useEffect(() => () => (0, eS.sF)(eS._2.FAVORITE_EMOJI_TOOLTIP), []),
            l.useLayoutEffect(() => {
                let { columnIndex: e, rowIndex: t } = ec.Om.getState().inspectedExpressionPosition;
                e$[t]?.[e] == null && 0 !== e && ec.Om.setInspectedExpressionPosition(0, 0);
            }, [e$]),
            l.useEffect(() => {
                if (("" === en.current && "" !== ei && (0, eP.EG)(eM, s), "" !== ei && en.current !== ei)) {
                    let e = ec.Om.getAnalyticsId();
                    0 === eK
                        ? io({ location: eM, searchQuery: ei, intention: s, loadId: e })
                        : ic({
                              totalResults: eK,
                              numEmojiLocked: eV?.locked.length ?? 0,
                              location: eM,
                              searchQuery: ei,
                              intention: s,
                              loadId: e,
                          });
                }
                en.current = ei;
            }, [ei, eM, eK, eV, s]));
        let e9 = M ?? (j ? "div" : I.l),
            te = null != eX;
        ee?.type === th.PREMIUM
            ? (i = (0, r.jsx)(ii.default, {
                  onUpsellClicked: e3,
                  emojiDescriptor: ee.emojiDescriptor,
                  pickerIntention: s,
                  analyticsLocation: eM,
                  onClose: () => et(null),
                  channel: a,
              }))
            : ee?.type === th.ROLE_SUBSCRIPTION &&
              (i = (0, r.jsx)(eO, { onClose: () => et(null), guildId: ee.guildId, emojiId: ee.emojiId }));
        let tt = (0, r.jsx)(nl, {
                channel: a,
                pickerIntention: s,
                emojiListRef: er,
                onKeyDown: (e) => {
                    (e6?.(e), Z?.(e));
                },
                searchBarRef: el,
                onFocus: z,
                autoFocus: Y,
                accessory: $,
                headerClassName: v,
                diversitySurrogate: eF,
                isBurstReaction: eE,
                onBurstReactionToggle: function () {
                    (eI(!eE), el.current?.focus());
                },
                burstToggleRef: eg,
                renderHeader: G,
                showAddEmojiButton: K,
                closePopout: u,
            }),
            tn = [];
        T.Ay.hasFavoriteEmojis(ef) || tn.push(f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let ti = (0, r.jsxs)(l.Fragment, {
                children: [
                    j ? tt : null,
                    (0, r.jsxs)("div", {
                        className: nr.uK,
                        ref: es,
                        children: [
                            (0, r.jsx)(it, { channel: a, closePopout: u }),
                            (0, r.jsx)(x.Ay, {
                                contentTypes: tn,
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    if (t === f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                        return (0, r.jsx)(tk, { markAsDismissed: () => n(tD.i.UNKNOWN) });
                                },
                            }),
                            k
                                ? null
                                : (0, r.jsx)("div", {
                                      className: nr.Iy,
                                      id: ta.lq,
                                      ...e8,
                                      children: te
                                          ? (0, r.jsx)(nQ, {
                                                collapsedSections: eH,
                                                diversitySurrogate: eF,
                                                emojiGrid: e$,
                                                emojiListRef: er,
                                                emojiSize: E,
                                                getEmojiItemProps: e5,
                                                getEmojiRowProps: e4,
                                                gridWidth: eX,
                                                isUsingKeyboardNavigation: e7,
                                                onEmojiSelect: function (e, t) {
                                                    e2(e, { ...t, isBurst: eA });
                                                },
                                                setUpsellConfigs: et,
                                                rowCount: e$.length,
                                                rowCountBySection: eZ,
                                                sectionDescriptors: eq,
                                                setCollapsedSections: eW,
                                                channelGuildId: ef,
                                                messageId: U,
                                                isBurstReaction: eA,
                                                listHeaderClassName: F,
                                            })
                                          : null,
                                  }),
                        ],
                    }),
                    (0, r.jsx)(nm, { emojiGrid: e$, className: nr.qV, guildId: ef, pickerIntention: s, channel: a }),
                    i,
                    s === eG.EmojiIntention.REACTION
                        ? (0, r.jsx)(ez, { targetElementRef: eg, shouldShow: eE && !ep, onDismiss: () => eI(!1) })
                        : null,
                ],
            }),
            ts = (0, r.jsx)(h.A, {
                ...eM,
                children: (0, r.jsxs)(e9, {
                    id: ta.Do,
                    "aria-labelledby": j && !H ? ta.k1 : void 0,
                    role: j && !H ? "tabpanel" : void 0,
                    className: o()(nr.iE, { [nr.r6]: j, [nr.cB]: eA }),
                    children: [
                        j || H ? null : tt,
                        (0, r.jsx)("div", {
                            className: o()(nr.Fb, R),
                            onScroll: il,
                            children: H ? (0, r.jsx)(q, { onBack: () => X?.(!1) }) : ti,
                        }),
                        k || H
                            ? null
                            : (0, r.jsx)(tM, {
                                  className: o()(nr.jv, J),
                                  emojiListRef: er,
                                  sectionDescriptors: eq,
                                  intention: s,
                                  channel: a,
                                  fallbackGuildId: ef,
                                  showOnlyUnicode: V,
                                  onViewEmojiPacks: null != X ? () => X(!0) : void 0,
                              }),
                    ],
                }),
            });
        return (0, r.jsx)(C.f5, { value: eD, children: ts });
    });
