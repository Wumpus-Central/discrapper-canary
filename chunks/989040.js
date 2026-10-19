(n.d(t, { A: () => iC }), n(321073));
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
    h = n(554375),
    g = n(820284),
    p = n(212245),
    A = n(964486),
    _ = n(793574),
    N = n(666860),
    C = n(688810),
    S = n(379848),
    x = n(236285),
    O = n(331322),
    T = n(866665),
    j = n(408278),
    y = n(477155),
    b = n(403581),
    R = n(661531),
    v = n(297264),
    L = n(62010),
    M = n(465794),
    P = n(683973),
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
    H = n(938213),
    W = n(105292),
    X = n(126904);
let z = r.memo(function (e) {
    let { pack: t, isPinned: n, onAddPack: i, onRemovePack: s } = e,
        a = r.useId(),
        c = r.useId(),
        [u, d] = r.useState(!1),
        m = W.intl.string(u ? W.t.iTcuma : W.t.dcl9MQ),
        f = W.intl.string(n ? H.default["2zxYCx"] : H.default.Tvdb5N),
        E = r.useMemo(() => t.emojis.filter((e) => e.available), [t.emojis]);
    return (0, l.jsxs)("section", {
        "aria-labelledby": a,
        className: X.nM,
        children: [
            (0, l.jsxs)(O.B, {
                align: "center",
                direction: "horizontal",
                gap: 4,
                justify: "space-between",
                children: [
                    (0, l.jsxs)(O.B, {
                        align: "center",
                        className: X.DD,
                        direction: "horizontal",
                        gap: 4,
                        children: [
                            (0, l.jsx)(v.D, { className: X.UU, id: a, variant: "text-xs/bold", children: t.name }),
                            (0, l.jsx)(G.E, {
                                color: "text-subtle",
                                variant: "text-xs/medium",
                                children: W.intl.format(H.default.UA8cNe, { count: E.length }),
                            }),
                            (0, l.jsx)(T.m, {
                                text: m,
                                children: (0, l.jsx)(j.K, {
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
                    (0, l.jsx)(T.m, {
                        text: f,
                        children: (0, l.jsx)(j.K, {
                            "aria-label": f,
                            icon: n ? V.MinusIcon : K.T,
                            onClick: () => (n ? s(t) : i(t)),
                            size: "sm",
                            variant: "secondary",
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                id: c,
                "aria-hidden": !u,
                "aria-label": t.name,
                className: o()(X.gm, { [X.jE]: u }),
                role: "group",
                children: E.map((e) =>
                    (0, l.jsx)(B.A, { animated: e.animated, className: X.Zg, emojiId: e.id, emojiName: e.name }, e.id),
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
        i = r.useRef(null),
        s = (0, m.bG)([U.A], () => U.A.getPacks()),
        a = (0, m.bG)([D.default], () => D.default.getCurrentUser()),
        o = (0, w.ki)(a, Z.PremiumTypes.TIER_2);
    r.useLayoutEffect(() => {
        i.current?.focus();
    }, []);
    let c = (0, P.k)().pinnedEmojiPacks?.packIds,
        u = r.useCallback((e) => {
            (0, k.Ls)(e.id);
        }, []),
        d = r.useCallback((e) => {
            (0, k.M5)(e.id);
        }, []);
    return (0, l.jsxs)("div", {
        className: Y.kL,
        children: [
            (0, l.jsx)("div", { "aria-hidden": !0, className: Y.Tp }),
            (0, l.jsx)("div", {
                className: Y.wx,
                children: (0, l.jsxs)(O.B, {
                    align: "center",
                    direction: "horizontal",
                    gap: 8,
                    justify: "space-between",
                    wrap: !0,
                    children: [
                        (0, l.jsxs)(O.B, {
                            align: "center",
                            direction: "horizontal",
                            gap: 10,
                            fullWidth: !1,
                            children: [
                                (0, l.jsx)(T.m, {
                                    position: "right",
                                    text: n,
                                    children: (0, l.jsx)(j.K, {
                                        "aria-label": n,
                                        buttonRef: i,
                                        icon: y.r,
                                        onClick: t,
                                        size: "sm",
                                        variant: "icon-only",
                                    }),
                                }),
                                (0, l.jsxs)(O.B, {
                                    align: "center",
                                    direction: "horizontal",
                                    gap: 4,
                                    fullWidth: !1,
                                    children: [
                                        (0, l.jsx)(b.t, { color: R.A.colors.TEXT_DEFAULT, size: "xs" }),
                                        (0, l.jsxs)(O.B, {
                                            align: "center",
                                            direction: "horizontal",
                                            gap: 8,
                                            fullWidth: !1,
                                            children: [
                                                (0, l.jsx)(v.D, {
                                                    variant: "heading-md/semibold",
                                                    children: W.intl.string(H.default["0+5+Oy"]),
                                                }),
                                                (0, l.jsx)(L.E, { type: "beta", variant: "primary" }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        o
                            ? null
                            : (0, l.jsx)(M.A, {
                                  buttonTextOverride: W.intl.string(W.t.hIVbiP),
                                  size: "sm",
                                  subscriptionTier: Z.pe.TIER_2,
                              }),
                    ],
                }),
            }),
            (0, l.jsx)("div", {
                className: Y.p_,
                children: s.map((e, t) =>
                    (0, l.jsxs)(
                        r.Fragment,
                        {
                            children: [
                                t > 0 ? (0, l.jsx)("hr", { className: Y.yF }) : null,
                                (0, l.jsx)(z, {
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
function el() {
    for (let e in es) ei.lastSeenNewlyAddedEmojiIds[e] = es[e];
}
class er extends m.Ay.PersistedStore {
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
let ea = new er(ee.h, {
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
    NEWLY_ADDED_EMOJI_SEEN_UPDATED: el,
    CLEAR_CACHES: function () {
        ((ei = en), el());
    },
    CONNECTION_CLOSED: el,
});
var eo = n(451731),
    ec = n(850992),
    eu = n(151271),
    ed = n(60587),
    em = n(887695),
    ef = n(562708),
    eE = n(462887),
    eI = n(939249),
    eh = n(789645),
    eg = n(696986),
    ep = n(736653),
    eA = n(139286),
    e_ = n(976860),
    eN = n(71393),
    eC = n(384684),
    eS = n(985242),
    ex = n(652215),
    eO = n(746080),
    eT = n(196404);
function ej(e) {
    let t,
        { onClose: i, guildId: s, emojiId: r } = e,
        a = ((t = (0, ep.Ay)()), (0, eE.q)(t) ? n(454333) : n(674463)),
        { analyticsLocations: o } = (0, C.Ay)(_.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, eA.A)({
        type: ef.ImpressionTypes.MODAL,
        name: ef.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: { location_stack: o, emoji_guild_id: s, emoji_id: r ?? null },
    });
    let c = (0, m.bG)([eN.A], () => eN.A.getGuild(s)),
        u = (0, m.bG)([eC.A], () => null != s && eC.A.getUserSubscriptionRoles(s).size > 0),
        d = u ? W.intl.string(W.t.GoLM9z) : W.intl.formatToPlainString(W.t["h0u/Hi"], { serverName: c?.name }),
        f = u ? W.intl.string(W.t.PjZ7Db) : W.intl.string(W.t.p8FG1D);
    return (0, l.jsxs)("div", {
        className: eT.kL,
        children: [
            (0, l.jsx)("div", { className: eT.Tp }),
            (0, l.jsxs)("div", {
                className: eT.Qs,
                children: [
                    (0, l.jsx)(eI.D, {
                        className: eT.b,
                        "aria-label": W.intl.string(W.t.cpT0Cq),
                        onClick: i,
                        children: (0, l.jsx)(eh.P, {
                            size: "xs",
                            color: "currentColor",
                            "aria-label": W.intl.string(W.t.cpT0Cq),
                            className: eT.yP,
                        }),
                    }),
                    (0, l.jsx)("img", { alt: "", src: a, className: eT.Tn }),
                    (0, l.jsx)(eg.h, { size: 22 }),
                    (0, l.jsx)(v.D, {
                        color: "text-strong",
                        variant: "heading-lg/extrabold",
                        className: eT.wx,
                        children: W.intl.string(W.t.cBjkcx),
                    }),
                    (0, l.jsx)(eg.h, { size: 4 }),
                    (0, l.jsx)(G.E, {
                        color: "text-default",
                        variant: "text-md/normal",
                        className: eT.h_,
                        children: d,
                    }),
                    (0, l.jsx)(eg.h, { size: 24 }),
                    (0, l.jsx)(eS.A, {
                        text: f,
                        onClick: function () {
                            (0, e_.pX)(ex.BVt.CHANNEL(s, eO.VV.ROLE_SUBSCRIPTIONS), { sourceLocationStack: o });
                        },
                    }),
                ],
            }),
        ],
    });
}
var ey = n(450510),
    eb = n(885386),
    eR = n(808728),
    ev = n(174459),
    eL = n(240248),
    eM = n(822123),
    eP = n(734057),
    eD = n(309010),
    ew = n(690521),
    ek = n(818645),
    eU = n(316884),
    eG = n(307731),
    eF = n(698279);
function eJ(e) {
    let { intention: t, containerWidth: n, rowSize: i, isBurstReaction: s, analyticsObject: l } = e,
        r = eP.A.getChannel(eD.Ay.getChannelId()),
        a = r?.getGuildId(),
        o =
            t === eG.EmojiIntention.REACTION
                ? x.Ay.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice()
                : x.Ay.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        c = null != r ? x.Ay.getDisambiguatedEmojiContext(r.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        u =
            t === eG.EmojiIntention.REACTION
                ? x.Ay.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems
                : x.Ay.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        d = o.slice(0, u),
        m = null != a ? x.Ay.getGuildEmoji(a) : [],
        f = x.Ay.getDisambiguatedEmojiContext(r?.getGuildId()).getCustomEmoji(),
        { topEmojis: E, newlyAddedEmojis: I } = (0, eU.b)({ guildId: r?.getGuildId(), pickerIntention: t }),
        { visibleTopEmojis: h, visibleNewlyAddedEmojis: g } = (0, ek.W)({
            topEmojis: E,
            newlyAddedEmojis: I,
            rowSize: i,
        });
    N.Ay.trackWithMetadata(
        t === eG.EmojiIntention.REACTION ? ex.HAw.REACTION_PICKER_OPENED : ex.HAw.EXPRESSION_PICKER_OPENED,
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
            num_expressions_top_server: h.length,
            num_animated_expressions_top_server: h.filter((e) => e.animated).length,
            num_expressions_newly_added: g.length,
            num_animated_expressions_newly_added: g.filter((e) => e.animated).length,
            ...(t === eG.EmojiIntention.REACTION && { is_burst: s }),
            ...(null != l && { location_object: l }),
        },
    );
}
var eV = n(206248),
    eK = n(724651),
    eB = n(732280),
    eH = n(783420),
    eW = n(158045);
let eX = { object: ex.ZSU.BUTTON_CTA, section: ex.JJy.SUPER_REACTION_PICKER };
function ez(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: i } = e,
        s = W.intl.string(W.t.eikz43),
        r = (0, eB.V)(),
        a = (0, eK.O)(),
        o = r?.subscriptionTrial,
        c = null != o || null != a,
        u = o?.skuId ?? Z.pe.TIER_2,
        d = c
            ? null != a
                ? W.intl.formatToPlainString(W.t.bkQ4bH, { percent: a.discount.amount })
                : (0, eW.FY)({ intervalType: o?.interval, intervalCount: o?.intervalCount })
            : W.intl.string(W.t.sEAnVH);
    return (0, l.jsx)(eH.A, {
        subscriptionTier: u,
        premiumModalAnalyticsLocation: eX,
        onSubscribeModalClose: (e) => {
            e && i();
        },
        children: (e) => {
            let { onClick: r } = e;
            return (0, l.jsx)(eV.H, {
                targetElementRef: t,
                shouldShow: n,
                onRequestClose: i,
                position: "bottom",
                assetUrl: "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
                disableMediaViewer: !0,
                badge: c ? { type: "free_trial", variant: "expressive" } : void 0,
                title: W.intl.string(W.t.N4SCJ0),
                body: s,
                action: { text: d, variant: "expressive", icon: b.t, onClick: r },
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
    return (0, l.jsx)("div", {
        className: e1.n,
        children: (0, l.jsx)(T.m, {
            ariaHidden: !0,
            position: "right",
            text: n,
            children: (0, l.jsx)(eI.D, {
                "aria-label": n,
                className: e1.x,
                onClick: t,
                children: (0, l.jsx)(K.T, { size: "md", color: "currentColor" }),
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
    tl = n(926268),
    tr = n(138134),
    ta = n(7807),
    to = n(732139);
let tc = r.memo(function (e) {
    let { categoryId: t, ...n } = e,
        i = (function (e) {
            switch (e) {
                case to.R2.RECENT:
                    return e6.ClockIcon;
                case to.R2.FAVORITES:
                    return e7.StarIcon;
                case to.R2.TOP_GUILD_EMOJI:
                    return e9.TrophyIcon;
                case to.R2.PEOPLE:
                    return e$.n;
                case to.R2.NATURE:
                    return te.p;
                case to.R2.FOOD:
                    return tt.i;
                case to.R2.ACTIVITY:
                    return tn.GameControllerIcon;
                case to.R2.TRAVEL:
                    return ti.h;
                case to.R2.OBJECTS:
                    return ts.D;
                case to.R2.SYMBOLS:
                    return tl.HeartIcon;
                case to.R2.FLAGS:
                    return tr.FlagIcon;
                case to.R2.PREMIUM_UPSELL:
                    return b.t;
                case to.R2.SOUNDMOJI:
                    return ta.J;
                default:
                    return;
            }
        })(t);
    return null == i ? null : (0, l.jsx)(i, { color: "currentColor", ...n });
});
var tu = n(724511),
    td = n(132500),
    tm = n(770335),
    tf = n(7584),
    tE = n(526292),
    tI = n(926972),
    th = n(711014),
    tg =
        (((i = {})[(i.EMOJI = 0)] = "EMOJI"),
        (i[(i.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"),
        (i[(i.SOUNDMOJI = 2)] = "SOUNDMOJI"),
        i);
let tp = [eG.EmojiDisabledReasons.DISALLOW_EXTERNAL, eG.EmojiDisabledReasons.DISALLOW_CUSTOM];
var tA = (((s = {})[(s.PREMIUM = 0)] = "PREMIUM"), (s[(s.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), s),
    t_ = n(342379);
let tN = "expression-guild-",
    { itemIdForIndex: tC } = (0, e3.J)(tN),
    tS = (0, eL.xI)(E.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    tx = (0, eL.xI)(E.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    tO = (0, eL.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    tT = (0, eL.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    tj = (0, eL.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    ty = (0, eL.xI)(t_.__invalid_unicodeCategoryShortcutHeight),
    tb = (0, eL.xI)(E.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    tR = (0, eL.xI)(E.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    tv = tO + tx + 2 * tj,
    tL = tS + tx,
    tM = tL + (tb + 2 * tR),
    tP = tO + tT + 2 * tj;
function tD(e) {
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
        { isHoveringOrFocusing: f } = (0, e0.A)(m),
        E = (0, eq.rm)(tC(n)),
        I = a.type === to.s.GUILD ? null : a.id,
        h = t === n,
        g = a.type === to.s.GUILD ? a.guild : null,
        p = (0, l.jsxs)(eI.D, {
            innerRef: m,
            ...E,
            "aria-label": (0, eM.wt)(a, g),
            className: o()({
                [t_.ZG]: null != g,
                [t_.Bj]: null == g,
                [t_.s6]: null == g && h,
                [t_.xg]: a.type === to.s.RECENT,
            }),
            onClick: () => {
                (null != g &&
                    ev.default.track(ex.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: i?.location,
                        tab: eF.kx.EMOJI,
                        guild_id: g.id,
                    }),
                    c(n));
            },
            children: [
                (0, l.jsx)("div", {
                    className: t_.a$,
                    children: (0, l.jsx)(e4.A, { hovered: f, selected: h, size: "small" }),
                }),
                null != g
                    ? (0, l.jsx)(tu.A, { guild: g, isSelected: h, shouldAnimate: !d && u, isLocked: a.isNitroLocked })
                    : null,
                null == g && null != I
                    ? (0, l.jsx)(tc, { categoryId: I, className: t_.Yl, height: tO, width: tO, size: "custom" })
                    : null,
            ],
        }),
        A = s[n + 1],
        _ = null != A && a.type === to.s.GUILD && A.type !== to.s.GUILD;
    return null != g
        ? (0, l.jsxs)(r.Fragment, {
              children: [
                  (0, l.jsx)(e5.Q, { guild: g, children: p }),
                  _ ? (0, l.jsx)("hr", { className: t_.ny }, "separator") : null,
              ],
          })
        : p;
}
let tw = (e) => {
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
        E = ec.Om.useStore((e) => e.activeCategoryIndex),
        I = (function (e) {
            let { emojiListRef: t } = e,
                n = (0, eu.RQ)((e) => e.searchQuery),
                i = r.useCallback((e) => t.current?.scrollToSectionTop(e), [t]);
            return r.useCallback(
                (e) => {
                    "" !== n ? ((0, eu.Ri)(""), ec.Om.setActiveCategoryIndex(e)) : i(e);
                },
                [i, n],
            );
        })({ sectionDescriptors: i, emojiListRef: n }),
        h = (0, p.p)(),
        g = (0, eM.ss)(s, a, { guildId: a?.guild_id ?? c, shouldShowSoundmojiInEmojiPicker: u }),
        A = r.useMemo(() => (d ? (0, eM.CQ)() : g), [g, d]),
        _ = r.useRef(null),
        N = (0, m.bG)([e8.A], () => e8.A.isFocused()),
        C = (0, m.bG)([eQ.Ay], () => eQ.Ay.useReducedMotion, []),
        S = r.useMemo(
            () =>
                eY().memoize(
                    (e, t) => {
                        let n = A[t];
                        if (null != n)
                            return (0, l.jsx)(
                                tD,
                                {
                                    activeIndex: E,
                                    analyticsContext: h,
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
            [E, h, A, I, N, C],
        ),
        x = r.useMemo(() => [8, 8, 0, 8], []),
        O = r.useCallback(
            (e, t) => {
                let n = A[t];
                if (n.type === to.s.RECENT) return tv;
                if (n.type === to.s.GUILD) {
                    let e = A[t + 1];
                    return null != e && e.type !== to.s.GUILD ? tM : tL;
                }
                return tP;
            },
            [A],
        ),
        {
            nonUnicodeCategoryCount: T,
            firstUnicodeCategoryIndex: j,
            firstUnicodeCategoryOffsetTop: y,
            rowCountBySection: b,
        } = r.useMemo(() => {
            let e = 0,
                t = 0,
                n = 0,
                i = 0;
            A.forEach((s) => {
                s.type === to.s.GUILD
                    ? ((t += 1), (n += 1))
                    : s.type === to.s.UNICODE
                      ? (i += 1)
                      : ((e += 1), (t += 1));
            });
            let s = tv + t * tL + tM;
            return {
                nonUnicodeCategoryCount: t,
                firstUnicodeCategoryIndex: t,
                firstUnicodeCategoryOffsetTop: s,
                rowCountBySection: [e, n, i],
            };
        }, [A]),
        [R, v] = r.useState(!0);
    r.useLayoutEffect(() => {
        v(T >= 7);
    }, [T]);
    let L = r.useCallback(
            (e) => {
                let t = _.current?.getListDimensions();
                null == t || (e + t.height - tb >= y ? v(!1) : v(!0));
            },
            [y],
        ),
        M = r.useCallback(
            (e) => {
                (e(j), _.current?.scrollTo(y));
            },
            [y, j],
        ),
        P = r.useCallback(
            (e, t) => {
                let n = A[e];
                if (null == n) return 0;
                let i = R ? ty : 0;
                if (n.type === to.s.RECENT) return t ? 0 : tT;
                if (n.type === to.s.GUILD) {
                    let n = A[e + 1];
                    return null != n && n.type !== to.s.GUILD ? (t ? tb + -2 * tR + tx + i : tx) : t ? i : tx;
                }
                return t ? tx + i : 2 * tx;
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
    return (0, l.jsx)(e3.A, {
        categoryListRef: _,
        expressionsListRef: n,
        className: t,
        store: ec.Om,
        categories: A,
        listPadding: x,
        onScroll: L,
        renderCategoryListItem: S,
        renderSection: D,
        rowCount: A.length,
        categoryHeight: O,
        getScrollOffsetForIndex: P,
        rowCountBySection: b,
        navId: "emoji-picker-categories",
        itemIdPrefix: tN,
        emojiPacksHeader: null != f ? (0, l.jsx)(e2, { onClick: f }) : null,
        children: (e) =>
            T >= 7 &&
            (0, l.jsx)(
                eI.D,
                {
                    "aria-hidden": !R,
                    "aria-label": W.intl.string(W.t.dT0ctw),
                    className: o()(t_.KB, { [t_.h_]: !R }),
                    tabIndex: R ? 0 : -1,
                    onClick: () => M(e),
                    children: (0, l.jsx)(e$.n, { size: "custom", color: "currentColor", height: tO, width: tO }),
                },
                w,
            ),
    });
};
var tk = n(49999),
    tU = n(860197);
let tG = function (e) {
    let { markAsDismissed: t } = e;
    return (0, l.jsxs)(G.E, {
        variant: "text-xs/medium",
        color: "text-default",
        className: tU.iE,
        children: [
            (0, l.jsx)(tl.HeartIcon, { size: "md", color: "currentColor", className: tU.Kk }),
            (0, l.jsx)("div", {
                className: tU.Qs,
                children: (0, l.jsx)(G.E, { variant: "text-xs/normal", children: W.intl.string(W.t.xdRf69) }),
            }),
            (0, l.jsx)(eI.D, {
                onClick: () => t(tk.i.UNKNOWN),
                children: (0, l.jsx)(eh.P, { size: "md", color: "currentColor", className: tU.VN }),
            }),
        ],
    });
};
var tF = n(941143),
    tJ = n(717421),
    tV = n(343032),
    tK = n(683063),
    tB = n(131607),
    tH = n(748798);
let tW = { tension: 750, mass: 2.5, friction: 70 };
function tX(e) {
    let { checked: t, onClick: n, buttonRef: i } = e,
        s = (0, m.bG)([eQ.Ay], () => eQ.Ay.useReducedMotion),
        a = D.default.getCurrentUser(),
        c = null != a && !(0, eW.TW)(a),
        u = c ? [] : [f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP],
        [d, E] = (0, tB.kn)(u),
        [I, h] = r.useState(!1),
        [g, p] = (0, tJ.z)(() => ({})),
        A = (0, tF.animated)(tV.i);
    r.useEffect(() => {
        let e = d === f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (E(tk.i.DISMISS), setTimeout(() => h(e), 200));
    }, [d, E]);
    let _ = I ? W.intl.string(W.t["Osi/uy"]) : t && !c ? W.intl.string(W.t["5cRA/b"]) : W.intl.string(W.t.buV4av),
        N = I ? W.intl.string(W.t.ORK94p) : void 0;
    return (0, l.jsx)(tK.u, {
        position: "top",
        title: N,
        body: _,
        asset: (0, l.jsx)(b.t, { size: "md", color: "currentColor" }),
        assetSize: 20,
        forceOpen: I,
        children: (0, l.jsx)(eI.D, {
            innerRef: i,
            "aria-label": _,
            "aria-pressed": t,
            onClick: function () {
                (p({ from: { rotate: t ? "360deg" : "0deg" }, to: { rotate: t ? "0deg" : "360deg" }, config: tW }),
                    n?.(),
                    h(!1));
            },
            focusProps: { enabled: !1 },
            className: o()(tH.Pf, { [tH.wM]: t }),
            children: (0, l.jsx)(A, {
                style: s ? void 0 : g,
                size: "custom",
                width: 20,
                height: 20,
                color: t ? "white" : "currentColor",
                className: tH.Kk,
            }),
        }),
    });
}
var tz = n(821609),
    tZ = n(644508),
    tY = n(824832),
    tq = n(267102),
    t$ = n(242812);
function tQ(e) {
    let { channel: t, closePopout: n } = e,
        i = r.useRef(null),
        s = r.useRef(0),
        [a, o] = r.useState(!1),
        [c, u] = r.useState(!1),
        d = (0, tq.Us)() === ex.BRT.OVERLAY,
        m = c || a,
        f = r.useCallback(
            async (e, i, l) => {
                (u(!0),
                    n(),
                    await (0, tZ.f)({
                        userImage: { data: e, file: i, image: l },
                        guildId: t?.guild_id ?? null,
                        analyticsLocation: {
                            section: ex.JJy.EXPRESSION_PICKER,
                            page: t?.guild_id != null ? ex.liQ.GUILD_CHANNEL : ex.liQ.DM_CHANNEL,
                        },
                    }),
                    (s.current += 1),
                    u(!1));
            },
            [t, n],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(T.m, {
                asContainer: !0,
                text: d ? W.intl.string(W.t.RMbedC) : null,
                children: (0, l.jsx)(tz.$, {
                    text: W.intl.string(W.t.iMJO37),
                    variant: "secondary",
                    onClick: function () {
                        i.current?.activateUploadDialogue();
                    },
                    disabled: m || d,
                }),
            }),
            (0, l.jsx)("div", {
                className: t$.F,
                children: (0, l.jsx)(tY.Ay, { ref: i, onChange: f, setLoading: o, disabled: m }, s.current),
            }),
        ],
    });
}
n(667532);
var t0 = n(833272),
    t1 = n(82495),
    t2 = n(260762),
    t3 = n(915089),
    t5 = n(650583),
    t4 = n(683829);
let t8 = (0, t3.Ld)(),
    t6 = t0.A.convert.fromCodePoint("1f44f"),
    t7 = (0, eL.xI)(E.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
function t9(e) {
    switch (t0.A.convert.toCodePoint(e)) {
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
let ne = (e) => {
    let { fade: t, surrogate: n, onClick: i, delay: s, index: r } = e,
        a = (0, eq.rm)(`item-${r}`),
        o = ew.Ay.getURL(t6 + n),
        c = (0, tJ.z)({ opacity: 1, from: { opacity: +!t }, delay: s }, "animate-always");
    return (0, l.jsx)(eI.D, {
        ...a,
        role: "option",
        "aria-selected": 0 === r,
        onClick: () => i(n),
        className: t4.B6,
        children: (0, l.jsx)(tF.animated.div, {
            "aria-label": t9(n),
            className: t4.g4,
            style: { backgroundImage: `url("${o}")`, ...c },
        }),
    });
};
function nt(e) {
    let { id: t, selectedSurrogate: n, onClick: i } = e,
        s = (0, t2.A)("diversity"),
        a = (0, tJ.z)({ height: (t7 + 14) * (tf.W$.length + 1), from: { height: t7 + 14 }, config: { duration: 125 } }),
        o = r.useRef(s);
    r.useEffect(() => {
        o.current.focusFirstVisibleItem();
    }, []);
    let c = ["", ...tf.W$];
    return (
        eY().remove(c, (e) => e === n),
        c.unshift(n),
        (0, l.jsx)(eq.hD, {
            navigator: s,
            children: (0, l.jsx)(eq.PR, {
                children: (e) => {
                    let { ref: n, ...s } = e;
                    return (0, l.jsx)(tF.animated.div, {
                        ...s,
                        id: t,
                        ref: n,
                        className: t4.J6,
                        style: a,
                        role: "listbox",
                        children: c.map((e, t) =>
                            (0, l.jsx)(ne, { index: t, fade: 0 !== t, delay: 20 * t, surrogate: e, onClick: i }, t),
                        ),
                    });
                },
            }),
        })
    );
}
let nn = function (e) {
    let { searchBarRef: t, selectedSurrogate: n, className: i } = e,
        s = ew.Ay.getURL(t6 + n),
        [a, c] = r.useState(!1),
        u = (0, t1.A)(null, () => c(!1)),
        d = r.useRef(null);
    return (0, l.jsxs)("div", {
        ref: u,
        className: o()(t4.fx, i),
        children: [
            (0, l.jsx)(eI.D, {
                innerRef: d,
                className: t4.Dj,
                onClick: function () {
                    c(!0);
                },
                "aria-label": W.intl.formatToPlainString(W.t["2SfnMp"], { skinTone: t9(n) }),
                "aria-haspopup": !0,
                "aria-expanded": a,
                "aria-controls": t8,
                tabIndex: a ? -1 : 0,
                children: (0, l.jsx)("div", { className: t4.g4, style: { backgroundImage: `url("${s}")` } }),
            }),
            a
                ? (0, l.jsx)("div", {
                      onKeyDown: function (e) {
                          e.key === t5.dh.ESCAPE
                              ? (e.stopPropagation(), c(!1), null != d.current && d.current.focus())
                              : "Tab" === e.key && c(!1);
                      },
                      children: (0, l.jsx)(nt, {
                          id: t8,
                          selectedSurrogate: n,
                          onClick: function (e) {
                              ((0, h.dK)(e), c(!1), t.current?.focus());
                          },
                      }),
                  })
                : null,
        ],
    });
};
var ni = n(462180),
    ns = n(602034),
    nl = n(683438);
let nr = r.memo(function (e) {
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
        d = (0, eu.RQ)((e) => e.searchQuery),
        [m, f, E] = ec.Om.useStore((e) => [e.inspectedExpressionPosition, e.searchPlaceholder, e.hasInteracted], ni.x),
        I = r.useCallback(
            (e) => {
                (ec.Om.setActiveCategoryIndex("" === e ? 0 : -1),
                    ec.Om.setInspectedExpressionPosition(0, 0),
                    ec.Om.setSearchPlaceholder(null),
                    (0, eu.Ri)(e),
                    t.current?.scrollTo(0));
            },
            [t],
        ),
        h = r.useCallback(() => {
            I("");
        }, [I]);
    return (
        r.useImperativeHandle(c, () => ({ focus: () => u.current?.focus() })),
        (0, l.jsx)(nl.I, {
            autoFocus: a,
            query: d,
            ref: u,
            placeholder: f ?? o,
            onClear: h,
            onKeyDown: function (e) {
                switch (e.key) {
                    case t5.dh.ARROW_LEFT:
                    case t5.dh.ARROW_RIGHT:
                    case t5.dh.ARROW_UP:
                    case t5.dh.ARROW_DOWN:
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
                ...(E ? { "aria-activedescendant": (0, ns.Aq)(n, m.columnIndex, m.rowIndex) } : void 0),
            },
        })
    );
});
var na = n(381575);
let no = function (e) {
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
            renderHeader: h,
            showAddEmojiButton: g = !0,
            closePopout: p,
        } = e,
        A = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(nr, {
                    emojiListRef: r,
                    gridNavigatorId: to.lq,
                    onKeyDown: a,
                    ref: d,
                    onFocus: c,
                    autoFocus: u,
                    defaultSearchPlaceholder: (0, eM.wT)(i, f),
                }),
                i === eG.EmojiIntention.REACTION ? (0, l.jsx)(tX, { checked: f, onClick: E, buttonRef: I }) : null,
                n ?? (0, l.jsx)(nn, { searchBarRef: d, className: na.fx, selectedSurrogate: m }),
                i !== eG.EmojiIntention.NO_CUSTOM_EMOJI && g ? (0, l.jsx)(tQ, { channel: t, closePopout: p }) : null,
            ],
        });
    return (0, l.jsx)("div", { className: o()(na.wx, s), children: null != h ? h(A) : A });
};
var nc = n(182922),
    nu = n(363195),
    nd = n(486020),
    nm = n(977566);
function nf(e) {
    return null != e && "animated" in e;
}
let nE = r.memo(function (e) {
    let t,
        i,
        { className: s, emojiGrid: a, guildId: o, pickerIntention: c, channel: u } = e,
        d = ec.Om.useStore((e) => e.inspectedExpressionPosition),
        f = r.useMemo(() => {
            let { rowIndex: e, columnIndex: t } = d;
            return a[e]?.[t];
        }, [a, d]);
    switch (f?.type) {
        case tg.EMOJI:
            t = f?.emoji;
            break;
        case tg.EXPAND_OR_COLLAPSE_EMOJIS:
            t = { type: "EXPAND_OR_COLLAPSE_EMOJI", guildId: f?.guildId, allNamesString: f?.name };
            break;
        case tg.SOUNDMOJI:
        default:
            t = null;
    }
    let E = (0, m.bG)([eN.A], () => (null !== t && t.type === tm.i.GUILD ? eN.A.getGuild(t.guildId) : null), [t]),
        I = (0, m.bG)([e8.A], () => e8.A.isFocused()),
        h = (0, m.bG)([eQ.Ay], () => eQ.Ay.useReducedMotion, []),
        g = eb.Sf.useSetting(),
        p = (0, eM.O7)(o, nf(t) ? t : null),
        A = (0, m.bG)([x.Ay], () => x.Ay.expandedSectionsByGuildIds),
        { newlyAddedEmojis: _ } = (0, eU.A)(o, c),
        N = f?.type === tg.EMOJI ? f.subCategory : to.tm.NONE;
    if (
        (r.useEffect(() => {
            let e = Date.now();
            return () => {
                Date.now() - e >= 250 &&
                    nf(t) &&
                    N !== to.tm.NONE &&
                    (N === to.tm.NEWLY_ADDED_EMOJI &&
                        null !== t &&
                        t.type === tm.i.GUILD &&
                        (0, eo.mz)(t.guildId, _[0].id),
                    null != d.source &&
                        (0, eM.yB)({
                            emoji: t,
                            subCategory: N,
                            position: f.columnIndex + 1,
                            newlyAddedHighlight: N === to.tm.NEWLY_ADDED_EMOJI && ea.isNewerThanLastSeen(o, t.id),
                        }));
            };
        }),
        null == t)
    )
        return null;
    let C = (function (e, t) {
            let { allowAnimatedEmoji: i, sectionsExpandedFromThreeRows: s, theme: r } = t;
            if (nf(e)) {
                let t = null != e.id ? nd.Ay.getEmojiURL({ id: e.id, animated: i && e.animated, size: 28 }) : e.url;
                return "" === t
                    ? (0, l.jsx)(G.E, {
                          variant: "text-md/normal",
                          className: nm.J_,
                          children: "surrogates" in e ? e.surrogates : null,
                      })
                    : (0, l.jsx)("img", { alt: (0, ew.N)(e) ?? "", src: t, className: nm.Zg });
            }
            if ("EXPAND_OR_COLLAPSE_EMOJI" !== e.type) return null;
            {
                let t = n(619508),
                    i = n(404828),
                    a = n(600003),
                    o = n(318121);
                return s.has(e.guildId)
                    ? (0, l.jsx)("img", { className: nm.Kk, src: (0, eE.M)(r) ? a : o, alt: "" })
                    : (0, l.jsx)("img", { className: nm.Kk, src: (0, eE.M)(r) ? t : i, alt: "" });
            }
        })(t, { allowAnimatedEmoji: g, sectionsExpandedFromThreeRows: A, theme: nu.A.theme }),
        S =
            null != E
                ? (0, l.jsx)(tu.A, { className: nm.__invalid_guildIcon, guild: E, shouldAnimate: !h && I })
                : null;
    i =
        "EXPAND_OR_COLLAPSE_EMOJI" === t.type
            ? A.has(t.guildId)
                ? W.intl.string(W.t["/K2RDH"])
                : W.intl.string(W.t.NZI2Zk)
            : (0, ew.N)(t);
    let O = (function (e) {
        let { inspectedEmoji: t, guild: n } = e,
            i = nf(t);
        return null != n && i ? W.intl.format(W.t.KFW2aY, { guildName: n.name }) : null;
    })({ inspectedEmoji: t, channel: u, guildId: o, intention: c, guild: E });
    return (0, l.jsx)(nc.A, {
        className: s,
        graphicPrimary: C,
        graphicSecondary: S,
        titlePrimary: i,
        titleSecondary: O,
        isFavorite: p,
        emojiSubCategory: N,
    });
});
n(30146);
var nI = n(607399),
    nh = n(765178),
    ng = n(537652),
    np = n(962125),
    nA = n(240864),
    n_ = n(286509),
    nN = n(89366),
    nC = n(10392),
    nS = n(82498),
    nx = n(202639),
    nO = n(414872),
    nT = n(285373),
    nj = n(559106),
    ny = n(304072),
    nb = n(189551),
    nR = n(289873),
    nv = n(796774),
    nL = n(209932),
    nM = n(817232),
    nP = n(576705);
n(980504);
var nD = n(818348),
    nw = n(821425);
let nk = r.memo(function (e) {
    let t,
        n,
        i,
        s,
        { channelId: a, onSelectSoundmoji: o } = e,
        c = (0, m.bG)([nL.A], () => !nL.A.isFetching() && !nL.A.hasFetchedAllSounds(), []),
        u = (0, m.bG)([eP.A], () => eP.A.getChannel(a)),
        d =
            ((t = (0, m.bG)([D.default], () => eW.Ay.canUseSoundboardEverywhere(D.default.getCurrentUser()))),
            (n = (0, m.bG)([nL.A], () => nL.A.getSoundsForGuild("0"))),
            (i = (0, m.yK)([eN.A], () => eN.A.getGuildIds())),
            (s = r.useMemo(() => nP.A.can(nD.xB.USE_EXTERNAL_SOUNDS, u), [u])),
            r.useMemo(() => {
                let e = [];
                if (t && s) {
                    let t = i.flatMap((e) => nL.A.getSoundsForGuild(e)?.filter((e) => e.available) ?? []);
                    e.push(...eY().sampleSize(t, 4));
                } else if (u?.guild_id != null) {
                    let t = nL.A.getSoundsForGuild(u?.guild_id)?.filter((e) => e.available);
                    e.push(...eY().sampleSize(t, 4));
                }
                return (e.length < 4 && e.push(...eY().sampleSize(n ?? [], 4 - e.length)), e);
            }, [s, u?.guild_id, n, i, t]));
    return (r.useEffect(() => {
        (0, nv.E7)();
    }, [c]),
    0 === d.length)
        ? (0, l.jsx)(nR.y, {})
        : (0, l.jsx)("div", {
              className: nw.q,
              children: d.map((e, t) =>
                  (0, l.jsx)(
                      nM.Ay,
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
var nU = n(594061),
    nG = n(771104),
    nF = n(442433),
    nJ = n(147421),
    nV = n(723702),
    nK = n(140735),
    nB = n(194261),
    nH = n(703413);
let nW = (e) => {
    let { src: t, alt: n, size: i, "aria-label": s, className: a } = e,
        c = r.useRef(null),
        u = r.useRef(!1),
        d = u.current ? nH.S : nH.Y;
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
                          ((u.current = !0), c.current.classList.remove(nH.Y), c.current.classList.add(nH.S));
                  });
              },
    });
};
var nX = n(955388);
let nz = eY().memoize(
        (e) =>
            `${e * eG.EmojiSprites.NonDiversityPerRow}px ${e * Math.ceil(tf.Ay.numNonDiversitySprites / eG.EmojiSprites.NonDiversityPerRow)}px`,
    ),
    nZ = eY().memoize(
        (e) =>
            `${e * eG.EmojiSprites.DiversityPerRow}px ${e * Math.ceil(tf.Ay.numDiversitySprites / eG.EmojiSprites.DiversityPerRow)}px`,
    ),
    nY = r.memo(function (e) {
        let { emoji: t, size: i, surrogateCodePoint: s, allowAnimatedEmoji: a, "aria-label": c, isLocked: u } = e,
            d = (() => {
                if (!t.useSpriteSheet) {
                    let e =
                        null == t.id
                            ? t.url
                            : nd.Ay.getEmojiURL({ id: t.id, animated: a && t.animated, size: eG.EMOJI_URL_BASE_SIZE });
                    return null != e
                        ? (0, l.jsx)(nW, {
                              className: nX.N1,
                              "aria-label": c,
                              src: e,
                              size: i,
                              alt: (0, ew.N)(t) ?? "",
                          })
                        : null;
                }
                return (0, l.jsx)("div", {
                    className: o()(nX.xA, { [nX.N1]: u }),
                    style: (function (e, t, i) {
                        let s, l, r;
                        if (!e.useSpriteSheet) return;
                        let a = null != e.index ? e.index : 0;
                        e.hasDiversity
                            ? ((s = n(12303)(`./spritesheet-${t}-${i}.png.js`).default),
                              (l = nZ(i)),
                              (r = eG.EmojiSprites.DiversityPerRow))
                            : ((s = n(145519)(`./spritesheet-emoji-${i}.png.js`).default),
                              (l = nz(i)),
                              (r = eG.EmojiSprites.NonDiversityPerRow));
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
                    children: (0, l.jsx)(nK.A, { children: c }),
                });
            })();
        return (0, l.jsxs)(r.Fragment, {
            children: [
                d,
                u
                    ? (0, l.jsx)("div", {
                          className: nX.iD,
                          style: { width: i, height: i },
                          children: (0, l.jsx)(nB.LockIcon, { size: "xs", color: "currentColor", className: nX.fi }),
                      })
                    : null,
            ],
        });
    });
var nq = n(537911);
function n$(e) {
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
            allowAnimatedEmoji: h,
            selectedItemClassName: g,
            inNitroLockedSection: p,
            ref: A,
            ..._
        } = e,
        N = (0, m.bG)([eN.A], () => (n.type === tm.i.GUILD ? eN.A.getGuild(n.guildId) : void 0), [n]);
    return (0, l.jsx)(nj.vN, {
        children: (0, l.jsx)("button", {
            ..._,
            className: o()(nq._X, { [nq.lG]: s, [nq.Lh]: r, [nq.Bx]: a, [g ?? ""]: a, [nq.TV]: u }),
            "data-type": ed.g.EMOJI,
            "data-id": n.id,
            "data-name": n.name,
            "data-surrogates": "surrogates" in n ? n.surrogates : null,
            "data-animated": n.animated ? "true" : null,
            ref: A,
            children: (0, l.jsx)(nY, {
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
                allowAnimatedEmoji: h,
                isLocked: c && !p,
            }),
        }),
    });
}
function nQ(e) {
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
            selectedItemClassName: h,
            getEmojiItemProps: g,
            isMediumSize: p,
            isLargeSize: A,
            pulseItemKey: _,
            allowAnimatedEmoji: N,
            setPulseItemKey: C,
            messageId: S,
            isBurstReaction: O,
            rowPosition: j,
            inNitroLockedSection: y,
        } = e,
        [b, R] = r.useState(""),
        v = (0, m.bG)([eQ.Ay], () => eQ.Ay.useReducedMotion),
        L = (0, m.bG)([x.Ay], () => x.Ay.getDisambiguatedEmojiContext(o), [o]),
        M = r.useRef(null),
        { emoji: P, size: D, isDisabled: w, columnIndex: k } = t;
    function U() {
        d.current || f.current || c(t);
    }
    let { ref: G, tabIndex: F, onFocus: J, ...V } = g(k, a) ?? {},
        K =
            b !== `${k}:${a}`
                ? (0, l.jsx)(n$, {
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
                              null != j &&
                              null != S &&
                              !e.shiftKey &&
                              null != P.name &&
                              O &&
                              !v &&
                              N
                          ) {
                              let e = null == P.id ? tf.Ay.convertNameToSurrogate(P.name) : P.name,
                                  t = M.current.getBoundingClientRect();
                              ((t.x = j.x + (k + 1) * D), R(`${k}:${a}`), (0, nJ.h)(S, e, P.id, t));
                          }
                          !(function (e) {
                              if ((e.stopPropagation(), d.current || f.current)) return;
                              let n = e.altKey;
                              (n &&
                                  !x.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(P) &&
                                  C(i),
                                  (0, ey.sF)(ey._2.FAVORITE_EMOJI_TOOLTIP),
                                  u(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n }));
                          })(e);
                      },
                      onContextMenu: function (e) {
                          (0, nF.L3)(e, async () => {
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
                      selectedItemClassName: h,
                      inNitroLockedSection: y,
                  })
                : null;
    return (0, r.createElement)(
        "li",
        { ...V, key: i, ref: M },
        E
            ? (0, l.jsx)(T.m, {
                  text: W.intl.formatToPlainString(W.t.glqNsf, { key: (0, nV.isMac)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: K,
              })
            : K,
    );
}
let n0 = (e) => {
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
            allowAnimatedEmoji: h,
            showEmojiFavoriteTooltip: g,
            channelGuildId: p,
            category: A,
            selectedItemClassName: _,
            channelId: N,
            messageId: C,
            isBurstReaction: S,
            inNitroLockedSection: x,
            handleScrollUpOnSectionCollapse: O,
        } = e,
        T = n(619508),
        j = n(404828),
        y = n(600003),
        b = n(318121),
        R = n(443336),
        v = n(258901),
        L = n(135974),
        M = n(8013),
        P = (0, ep.Ay)(),
        D = ec.Om.getState(),
        [w, k] = r.useState(D.inspectedExpressionPosition),
        [U, F] = (0, ny.A)(null, 300),
        J = r.useRef(null);
    (r.useEffect(
        () =>
            ec.Om.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => k(e),
            ),
        [],
    ),
        r.useEffect(() => {
            nU.bW.loadIfNecessary();
        }, []));
    let V = i === to.as.LARGE,
        K = i === to.as.MEDIUM;
    function B(e) {
        let t = `${e.rowIndex}c${e.columnIndex}`;
        switch (e.type) {
            case tg.EXPAND_OR_COLLAPSE_EMOJIS: {
                let { visibleRowIndex: n, columnIndex: i } = e,
                    a = w.rowIndex === n && w.columnIndex === i,
                    u = e.sectionCollapsedToThreeRows
                        ? a
                            ? (0, eE.M)(P)
                                ? v
                                : M
                            : (0, eE.M)(P)
                              ? T
                              : j
                        : a
                          ? (0, eE.M)(P)
                              ? R
                              : L
                          : (0, eE.M)(P)
                            ? y
                            : b,
                    m = W.intl.string(e.sectionCollapsedToThreeRows ? W.t.NZI2Zk : W.t["/K2RDH"]);
                return (function () {
                    let {
                            onMouseEnter: n,
                            onMouseLeave: i,
                            handleSelect: s,
                            icon: a,
                            ariaLabel: u,
                            shouldShowRoundHighlight: m,
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { visibleRowIndex: h, columnIndex: g } = e,
                        { ref: p, tabIndex: A, onFocus: N, ...C } = d(g, I) ?? {},
                        S = w.rowIndex === h && w.columnIndex === g;
                    function x() {
                        f.current || E.current || c(e);
                    }
                    return (0, r.createElement)(
                        "li",
                        { ...C, key: t },
                        (0, l.jsx)(nj.vN, {
                            children: (0, l.jsx)("button", {
                                "aria-label": u,
                                ref: p,
                                className: o()(nq._X, {
                                    [nq.lG]: V,
                                    [nq.Lh]: K,
                                    [nq.Bx]: S && !m,
                                    [_ ?? ""]: S,
                                    [nq.TV]: U === t,
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
                        e.type !== tg.EXPAND_OR_COLLAPSE_EMOJIS ||
                            (t.stopPropagation(),
                            f.current ||
                                E.current ||
                                (s(e, { isFinalSelection: !0, toggleFavorite: !1 }),
                                (0, nb.G)(e.guildId),
                                e.sectionCollapsedToThreeRows || O(),
                                ev.default.track(ex.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                    collapsed: e.sectionCollapsedToThreeRows,
                                    guild_id: e.guildId,
                                })));
                    },
                    icon: (0, l.jsx)("img", { className: nq.Kk, src: u, alt: "" }),
                    ariaLabel: m,
                    shouldShowRoundHighlight: !0,
                });
            }
            case tg.EMOJI: {
                let { columnIndex: n, visibleRowIndex: i } = e,
                    r = w.rowIndex === i && w.columnIndex === n;
                return (0, l.jsx)(
                    nQ,
                    {
                        rowIndex: I,
                        descriptor: e,
                        emojiItemKey: t,
                        isInspected: r,
                        isScrolling: f,
                        isUsingKeyboardNavigation: E,
                        surrogateCodePoint: u,
                        allowAnimatedEmoji: h,
                        selectedItemClassName: _,
                        onSelect: s,
                        onInspect: c,
                        channelGuildId: p,
                        getEmojiItemProps: d,
                        isMediumSize: K,
                        isLargeSize: V,
                        pulseItemKey: U,
                        setPulseItemKey: F,
                        showEmojiFavoriteTooltip: g,
                        messageId: C,
                        isBurstReaction: S,
                        rowPosition: J?.current?.getBoundingClientRect(),
                        inNitroLockedSection: x,
                    },
                    t,
                );
            }
            case tg.SOUNDMOJI:
                return;
        }
    }
    function H(e) {
        return (0, l.jsx)("ul", {
            ...m(I),
            className: o()(nq.ND, { [nq.HO]: V, [nq.X$]: K }),
            ref: J,
            children: e.map(B),
        });
    }
    if (A === to.R2.SOUNDMOJI)
        return (0, l.jsx)("ul", {
            className: nq.ND,
            ref: J,
            children: (0, l.jsx)(nk, { channelId: N, onSelectSoundmoji: a }),
        });
    if (A !== to.s.TOP_GUILD_EMOJI) return H(t);
    let X = t.filter(
            (e) =>
                e.subCategory === to.tm.TOP_GUILD_EMOJI ||
                (e.subCategory === to.tm.NEWLY_ADDED_EMOJI &&
                    e.emoji.type === tm.i.GUILD &&
                    !ea.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
        ),
        z = t.filter(
            (e) =>
                e.subCategory === to.tm.NEWLY_ADDED_EMOJI &&
                e.emoji.type === tm.i.GUILD &&
                ea.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id),
        );
    return 0 === z.length
        ? H(t)
        : (0, l.jsxs)("div", {
              className: nq.Ng,
              children: [
                  (0, l.jsx)("div", { className: o()(nq.V6, { [nq.$3]: 0 === X.length }), children: H(X) }),
                  (0, l.jsxs)("div", {
                      className: nq.bc,
                      children: [
                          (0, l.jsx)("div", {
                              className: o()(nq.eE, { [nq.eM]: 1 === z.length, [nq.Wk]: X.length > 0 }),
                              children: H(z),
                          }),
                          (0, l.jsxs)("div", {
                              className: o()(nq.lD, { [nq.EI]: V, [nq.qU]: K, [nq.Wk]: X.length > 0 }),
                              children: [
                                  (0, l.jsx)(nG.A, { foreground: nq.rI }),
                                  (0, l.jsx)(G.E, {
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
var n1 = n(618723);
let n2 = (0, eL.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    n3 = (0, eL.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    n5 = (0, eL.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    n4 = (0, eL.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    n8 = (0, eL.xI)(E.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    n6 = (0, eL.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    n7 = (0, eL.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    n9 = r.memo(function (e) {
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
                collapsedSections: h,
                setCollapsedSections: g,
                getEmojiItemProps: A,
                getEmojiRowProps: N,
                rowCount: S,
                isUsingKeyboardNavigation: x,
                channelGuildId: O,
                channelId: T,
                messageId: j,
                isBurstReaction: y,
                listHeaderClassName: b,
            } = e,
            R = r.useRef(!1),
            v = ec.Om.useStore((e) => e.activeCategoryIndex),
            L = (0, eu.RQ)((e) => e.searchQuery),
            M = eb.Sf.useSetting(),
            P = (0, m.bG)([D.default], () => D.default.getCurrentUser()),
            k = (0, w.ki)(P),
            { location: U } = (0, p.p)(),
            { analyticsLocations: F } = (0, C.Ay)(),
            [J, V] = r.useState(0),
            [K, B] = r.useState(!1),
            {
                listPadding: H,
                renderRow: X,
                renderSection: z,
                renderSectionHeader: Y,
                renderSectionFooter: q,
                sectionMarginBottom: $,
                sectionHeaderHeight: Q,
                sectionFooterHeight: ee,
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
                        isScrolling: h,
                        isUsingKeyboardNavigation: g,
                        allowAnimatedEmoji: A,
                        channelGuildId: _,
                        channelId: N,
                        messageId: C,
                        isBurstReaction: S,
                        listHeaderClassName: x,
                        activeSectionIndex: O,
                        emojiListRef: T,
                    } = e,
                    j = (0, p.p)(),
                    y = r.useRef(ex.An1),
                    b = r.useMemo(() => ("" !== n ? t0.A.convert.toCodePoint(n) : ""), [n]),
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
                                    ev.default.track(ex.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                        location: j.location,
                                        tab: eF.kx.EMOJI,
                                        collapsed: !s,
                                        guild_id: n.id,
                                    }),
                                e === to.R2.SOUNDMOJI &&
                                    ev.default.track(ex.HAw.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, { collapsed: !s }),
                                f(i));
                        },
                        [j, t, f],
                    ),
                    M = r.useCallback((e) => {
                        let { columnIndex: t, visibleRowIndex: n } = e,
                            i = e.type === tg.SOUNDMOJI ? null : e.type === tg.EMOJI ? (0, ew.N)(e.emoji) : e.name;
                        (y.current !== ex.An1 && window.cancelAnimationFrame(y.current),
                            (y.current = window.requestAnimationFrame(() => {
                                (ec.Om.setInspectedExpressionPosition(t, n, ed.t.MOUSE_EVENT),
                                    ec.Om.setSearchPlaceholder(i),
                                    (y.current = ex.An1));
                            })));
                    }, []),
                    P = (0, m.bG)([ey.HP], () => ey.HP.hasHotspot(ey._2.FAVORITE_EMOJI_TOOLTIP), []),
                    D = r.useMemo(
                        () =>
                            eY().memoize((e, t) => {
                                let n = i[e],
                                    r = d[t.sectionIndex];
                                return (0, l.jsx)(
                                    n0,
                                    {
                                        emojiDescriptors: n,
                                        emojiSize: s,
                                        surrogateCodePoint: b,
                                        onInspect: M,
                                        onSelect: a,
                                        onSelectSoundmoji: c,
                                        getEmojiItemProps: E,
                                        getEmojiRowProps: I,
                                        isScrolling: h,
                                        isUsingKeyboardNavigation: g,
                                        rowIndex: e,
                                        allowAnimatedEmoji: A,
                                        showEmojiFavoriteTooltip: P,
                                        channelGuildId: _,
                                        category: r.sectionId,
                                        selectedItemClassName: n1.__invalid_selectedItem,
                                        channelId: N,
                                        messageId: C,
                                        isBurstReaction: S,
                                        inNitroLockedSection: r.isNitroLocked,
                                        handleScrollUpOnSectionCollapse: function () {
                                            T.current?.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                                        },
                                    },
                                    e,
                                );
                            }),
                        [i, d, s, b, M, a, c, E, I, h, g, A, P, _, N, C, S, T],
                    );
                r.useEffect(() => () => D.cache?.clear?.(), [D]);
                let w = r.useMemo(
                        () =>
                            eY().memoize((e) => {
                                let n = d[e];
                                if (null == n) return;
                                let { guild: i, categoryId: s, type: r, sectionId: a } = n;
                                if (r === to.s.SEARCH_RESULTS) return;
                                let c =
                                        r === to.s.GUILD
                                            ? null != i
                                                ? (0, l.jsx)(tu.A, { guild: i, height: 16, width: 16 })
                                                : null
                                            : null != s
                                              ? (0, l.jsx)(tc, { categoryId: s, height: 16, width: 16, size: "custom" })
                                              : null,
                                    u = i?.name;
                                null != s && (u = (0, eM.Nu)(s, i?.name));
                                let m = O === e,
                                    f = n.isNitroLocked,
                                    E = f && !m,
                                    I = f && m,
                                    h =
                                        r === to.s.SOUNDMOJI
                                            ? (0, l.jsx)(eI.D, {
                                                  className: n1.f3,
                                                  onClick: () => {
                                                      ((0, eu.U)(eF.kx.SOUNDBOARD),
                                                          ev.default.track(
                                                              ex.HAw.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK,
                                                          ));
                                                  },
                                                  children: W.intl.string(W.t.rUEjBe),
                                              })
                                            : void 0;
                                return (0, l.jsx)(
                                    n_.A,
                                    {
                                        className: o()(n1.wx, x, { [n1.RA]: E, [n1.sp]: I }),
                                        icon: c,
                                        isCollapsed: t.has(a),
                                        onClick: () => L(a, i),
                                        trailing: h,
                                        children: u,
                                    },
                                    a,
                                );
                            }),
                        [d, t, L, x, O],
                    ),
                    k = (0, tE.k0)(),
                    U = r.useCallback(
                        (e, n) => {
                            let i = d[e],
                                s = v(e),
                                r = R(e);
                            return (0, l.jsx)(
                                "div",
                                {
                                    role: "rowgroup",
                                    className: o()(n1.Wy, {
                                        [n1.YD]: e === d.length - 1,
                                        [n1.jl]: t.has(i.sectionId),
                                        [n1.cW]: i.isNitroLocked,
                                        [n1.T5]: s || r,
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
                                  ? (0, l.jsx)("div", { className: n1.pQ })
                                  : null,
                        [v, R, k],
                    ),
                    F = r.useCallback((e) => (v(e) ? 41 : 33 * !!R(e)), [v, R]),
                    J = r.useCallback(
                        (e) => (e === d.length - 1 || t.has(d[e]?.sectionId) || v(e) || R(e) ? 0 : n6),
                        [t, d, v, R],
                    );
                return {
                    listPadding: r.useMemo(() => ["" !== u ? n4 : n2, n3, n5, 0], [u]),
                    renderRow: D,
                    renderSection: U,
                    renderSectionHeader: w,
                    renderSectionFooter: G,
                    sectionMarginBottom: J,
                    sectionHeaderHeight: r.useCallback((e) => (d[e].type === to.s.SEARCH_RESULTS ? 0 : n8), [d]),
                    sectionFooterHeight: F,
                };
            })({
                collapsedSections: h,
                diversitySurrogate: i,
                emojiGrid: s,
                emojiSize: c,
                onEmojiSelect: u,
                onSelectSoundmoji: d,
                searchQuery: L,
                sectionDescriptors: E,
                setCollapsedSections: g,
                getEmojiItemProps: A,
                getEmojiRowProps: N,
                isScrolling: R,
                isUsingKeyboardNavigation: x,
                allowAnimatedEmoji: M,
                channelGuildId: O,
                channelId: T,
                messageId: j,
                isBurstReaction: y,
                listHeaderClassName: b,
                activeSectionIndex: J,
                emojiListRef: a,
            }),
            et = r.useCallback(
                (e) => {
                    let t = a.current?.getSectionDescriptors();
                    null == t ||
                        V(
                            Math.max(
                                t.findLastIndex((t) => t.offset.top <= e),
                                0,
                            ),
                        );
                },
                [a],
            );
        r.useLayoutEffect(() => {
            et(a.current?.getScrollerNode()?.scrollTop ?? 0);
        }, [a, et, E, I, L]);
        let en = (0, em.Fk)({
            activeCategoryIndex: v,
            isScrolling: R,
            listRef: a,
            onActiveCategoryIndexChange: function (e) {
                "" === L && ec.Om.setActiveCategoryIndex(e);
            },
            scrollOffset: 0,
            searchQuery: L,
            disableForSearch: !1,
        });
        (0, em.FV)({ searchQuery: L, activeCategoryIndex: v, listRef: a });
        let ei = r.useCallback(
                (e) => {
                    (en(e),
                        et(e),
                        ie({ emojiListRef: a, sectionDescriptors: E, scrollTop: e, searchQuery: L, setShowUpsell: B }));
                },
                [en, et, a, E, L, B],
            ),
            es = E.length > 0;
        (r.useEffect(() => {
            K &&
                (ev.default.track(ex.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: Z.e.EMOJI_PICKER_FLOATING_UPSELL,
                    location: U,
                    location_stack: F,
                }),
                (0, nC.sq)(ex.U7l.PREMIUM_UPSELL_VIEWED, F, () => (0, nS.uq)(Z.e.EMOJI_PICKER_FLOATING_UPSELL)));
        }, [U, F, K]),
            r.useEffect(() => {
                "" !== L && B(!1);
            }, [L]));
        let el = r.useRef(null);
        return (
            r.useEffect(
                () => (
                    clearTimeout(el.current),
                    (el.current = setTimeout(() => {
                        (es
                            ? nh.O.announce(W.intl.string(W.t.uZ4F2O), "polite")
                            : nh.O.announce(W.intl.string(W.t.IxxiKF), "assertive"),
                            (el.current = null));
                    }, 200)),
                    () => {
                        clearTimeout(el.current);
                    }
                ),
                [es, L],
            ),
            (0, l.jsxs)("div", {
                className: n1.AD,
                children: [
                    es
                        ? (0, l.jsx)(np.A, {
                              role: "none presentation",
                              className: n1.p_,
                              listPadding: H,
                              onScroll: ei,
                              renderRow: X,
                              renderSection: z,
                              renderSectionHeader: Y,
                              renderSectionFooter: q,
                              rowCount: S,
                              rowCountBySection: I,
                              rowHeight: c + 2 * n7,
                              sectionHeaderHeight: Q,
                              sectionMarginBottom: $,
                              sectionFooterHeight: ee,
                              stickyHeaders: !0,
                              ref: a,
                          })
                        : (0, l.jsx)(ng.A, {
                              message: (0, l.jsx)(G.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: W.intl.string(W.t.IxxiKF),
                              }),
                              className: n1.BZ,
                          }),
                    k || nI.Fr
                        ? null
                        : (0, l.jsx)(nx.d, {
                              showUpsell: K,
                              text:
                                  ((t = (0, eW.Dd)(Z.PremiumTypes.TIER_2)),
                                  W.intl.format(W.t.gMVjeS, {
                                      nitroTierName: t,
                                      onClick: () => {
                                          f({ type: tA.PREMIUM, emojiDescriptor: void 0 });
                                      },
                                  })),
                              button: ((n = (0, nN.qD)()), (0, eW.LE)(n, Z.pe.TIER_2) ?? W.intl.string(W.t.BmJkbd)),
                              buttonAnalyticsObject: { section: ex.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                              leadingAction: (0, l.jsx)(nT.l, {
                                  size: "sm",
                                  className: n1.ij,
                                  location: _.A.PREMIUM_WISHLIST_EMOJI_UPSELL,
                              }),
                          }),
                ],
            })
        );
    }),
    ie = eY().throttle(
        function (e) {
            let { emojiListRef: t, sectionDescriptors: n, scrollTop: i, searchQuery: s, setShowUpsell: l } = e;
            l(
                (0, nA.s)({ listRef: t, searchQuery: s, nitroLockedSectionStates: n, scrollTop: i })
                    .areOnlyNitroLockedSectionsVisible,
            );
        },
        300,
        { leading: !1, trailing: !0 },
    );
var it = n(506774),
    ii = n(28863),
    is = n(277984),
    il = n(404374),
    ir = n(780964),
    ia = n(766075),
    io = n(166403),
    ic = n(506150);
let iu = "premiumRetentionEmojiPickerNotice",
    id = it.w.get(iu),
    im = function (e) {
        let { closePopout: t, channel: n } = e,
            [i, s] = r.useState(!1),
            { subscription: a, hasFetchedSubscriptions: o } = (0, m.cf)([io.A], () => ({
                subscription: io.A.getPremiumSubscription(),
                hasFetchedSubscriptions: io.A.hasFetchedSubscriptions(),
            }));
        if (
            (r.useEffect(() => {
                o || (0, is.hP)();
            }, [o]),
            null == a || !(0, eW.PK)(a.status) || i)
        )
            return null;
        let c = a.status === ex.Dmq.PAST_DUE ? (0, eW.ji)(a).expiresDate : Q()(a.currentPeriodStart).add(Z.ph),
            u = `${a.id}:${c.toISOString()}`;
        if (id === u) return null;
        let d =
            eW.Ay.getPremiumType(a.planId) === Z.PremiumTypes.TIER_0
                ? il.k0.PREMIUM_TIER_0
                : eW.Ay.getPremiumType(a.planId) === Z.PremiumTypes.TIER_1
                  ? il.k0.PREMIUM_TIER_1
                  : il.k0.PREMIUM_TIER_2;
        return (0, l.jsxs)(G.E, {
            variant: "text-xs/medium",
            color: "text-default",
            className: ic.g$,
            children: [
                (0, l.jsx)(b.t, { size: "md", className: ic.lu, color: d }),
                (0, l.jsxs)("div", {
                    className: ic.Xn,
                    children: [
                        (0, l.jsx)(G.E, {
                            variant: "text-xs/normal",
                            children: W.intl.format(W.t.bTMjiO, {
                                planName: eW.Ay.getTierDisplayNameByPlanId(a.planId),
                                endsAt: c.toDate(),
                            }),
                        }),
                        (0, l.jsx)("div", {
                            children: (0, l.jsx)(ii.Anchor, {
                                onClick: () => {
                                    ((0, eM.xf)(n), t(), (0, ia.openUserSettings)(ir.X.NITRO_PANEL));
                                },
                                children: W.intl.string(W.t.W3aavh),
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(eI.D, {
                    onClick: () => {
                        (it.w.set(iu, u), (id = u), s(!0));
                    },
                    children: (0, l.jsx)(eh.P, { size: "md", color: "currentColor", className: ic.YF }),
                }),
            ],
        });
    };
var iE = n(148361);
let iI = (0, eL.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    ih = (0, eL.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT);
function ig(e) {
    return e.stopPropagation();
}
function ip(e, t) {
    ec.Om.setInspectedExpressionPosition(e, t, ed.t.GRID_NAVIGATOR_EVENT);
}
let iA = u()(eM.bo, 200),
    i_ = u()(eM.Wi, 200),
    iN = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    iC = r.memo(function (e) {
        let t,
            n,
            i,
            {
                pickerIntention: s,
                channel: a,
                guildId: c,
                closePopout: u,
                emojiSize: E = to.as.MEDIUM,
                hasTabWrapper: O = !1,
                onSelectEmoji: T,
                onSelectSoundmoji: j,
                containerWidth: y,
                onNavigateAway: b,
                persistSearch: R,
                className: v,
                headerClassName: L,
                analyticsOverride: M = iN,
                searchProps: P = {},
                wrapper: k,
                shouldHidePickerActions: U = !1,
                messageId: G,
                renderHeader: F,
                listHeaderClassName: J,
                categoryListClassName: V,
                shouldShowSoundmojiInEmojiPicker: K = !1,
                showOnlyUnicode: B = !1,
                showAddEmojiButton: H,
                ref: X,
                isViewingEmojiPacks: z = !1,
                onViewEmojiPacksChange: Z,
            } = e,
            { onFocus: Y, onKeyDown: $, autoFocus: Q = !0, accessory: ee } = P,
            et = (0, m.bG)([eR.Ay], () => (null != c ? eR.Ay.getDefaultChannel(c) : null), [c]),
            [en, ei] = r.useState(null),
            es = r.useRef(""),
            el = (0, eu.RQ)((e) => e.searchQuery),
            er = r.useRef(null),
            ef = r.useRef(null),
            eE = r.useRef(null);
        null == a && null != et && (a = et);
        let eI = a?.getGuildId() ?? c ?? null,
            [eh, eg] = r.useState(!1),
            ep = r.useRef(null),
            eA = D.default.getCurrentUser(),
            e_ = (0, w.ki)(eA),
            eC = eh && e_;
        r.useImperativeHandle(X, () => ({ onPickerOpen: e3 }));
        let { location: eS } = (0, p.p)(),
            { page: eO, section: eT, object: eL, openPopoutType: eP, popoutLocation: eD } = M,
            eF = r.useMemo(() => ({ ...eS, section: eT ?? ex.JJy.EMOJI_PICKER_POPOUT }), [eS, eT]),
            { analyticsLocations: eV } = (0, C.Ay)(_.A.EMOJI_PICKER),
            { diversitySurrogate: eK } = (0, m.cf)([x.Ay], () => ({ diversitySurrogate: x.Ay.diversitySurrogate })),
            eB = (0, eM.sL)(el, a, s, B),
            eH = null == eB ? 0 : eB.locked.length + eB.unlocked.length,
            eW = eb.iM.useSetting(),
            eX = r.useMemo(() => new Set(eW), [eW]),
            eZ = r.useCallback((e) => {
                eb.iM.updateSetting(Array.from(e));
            }, []),
            eq = (0, em.oV)({
                gridWrapperRef: er,
                containerWidth: y,
                showingEmptyState: z,
                listPaddingLeft: ih,
                listScrollbarWidth: 8,
            }),
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
                    E = r.useMemo(() => (d ? tf.Ay.getCategories() : f), [f, d]),
                    I = (0, m.bG)([eN.A], () => eN.A.getGuild(t?.getGuildId()), [t]),
                    h = t?.getGuildId() ?? n,
                    g = (0, m.bG)([x.Ay], () => x.Ay.getDisambiguatedEmojiContext(h), [h]),
                    p = (0, eM.XI)(h),
                    A = (0, eM.Fj)(h),
                    _ = (0, eM.QZ)(h),
                    { topEmojis: N, newlyAddedEmojis: C } = (0, eU.A)(h, s),
                    S = (0, m.yK)([th.Ay], () => th.Ay.getFlattenedGuildIds(), []),
                    O = (0, m.bG)([x.Ay], () => x.Ay.expandedSectionsByGuildIds),
                    T = (0, m.bG)([D.default], () => D.default.getCurrentUser()),
                    j = (0, w.ki)(T),
                    y = (0, tE.k0)(),
                    b = g.getGroupedCustomEmoji(),
                    R = (0, tI.Ym)({ location: "useEmojiGrid" });
                return r.useMemo(() => {
                    let e = [],
                        n = [],
                        r = [],
                        d = [],
                        m = 0,
                        f = 0;
                    if (null != g && null != a) {
                        let g = Math.floor(a / (c + 2 * o)),
                            T = 3 * g;
                        function h(l, a) {
                            let o = new Map(),
                                u = i.has(a.sectionId),
                                [E, I] = eY().partition(l, (e) => {
                                    let n = ew.Ay.isEmojiDisabled({ emoji: e, channel: t, intention: s });
                                    return (o.set(e, n), !n);
                                }),
                                h = E.concat(I),
                                p = a.guild,
                                A = h.length > T && null != p && a.isNitroLocked,
                                _ = A && !O.has(p.id);
                            _ && h.splice(T - 1);
                            let S = Math.ceil((A ? h.length + 1 : h.length) / g),
                                x = [];
                            for (let e = 0; e < S; e++) {
                                let t = e * g,
                                    n = t + g,
                                    i = h
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
                                                a.sectionId === to.s.TOP_GUILD_EMOJI
                                                    ? (0, eM.DA)(N, C, e.id ?? e.uniqueName ?? e.name)
                                                    : to.tm.NONE,
                                        }));
                                if ((x.push(i), !u)) {
                                    if (A && e === S - 1) {
                                        let t = x[e];
                                        t.push({
                                            type: 1,
                                            guildId: p.id,
                                            name: W.intl.string(W.t.NZI2Zk),
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
                            let j = { ...a, count: l.length };
                            (n.push(j), e.push(u ? 0 : S));
                        }
                        if (null != l)
                            (0 !== l.unlocked.length &&
                                h(l.unlocked, {
                                    type: to.s.SEARCH_RESULTS,
                                    sectionId: to.s.SEARCH_RESULTS,
                                    count: l.unlocked.length,
                                    isNitroLocked: !1,
                                }),
                                0 !== l.locked.length &&
                                    h(l.locked, {
                                        type: to.s.PREMIUM_UPSELL,
                                        categoryId: to.R2.PREMIUM_UPSELL,
                                        sectionId: to.s.PREMIUM_UPSELL,
                                        count: l.locked.length,
                                        isNitroLocked: !j,
                                    }));
                        else {
                            if (R && u) {
                                let t = [{ type: 2, rowIndex: f, columnIndex: 0, visibleRowIndex: m }];
                                n.push({
                                    type: to.s.SOUNDMOJI,
                                    categoryId: to.R2.SOUNDMOJI,
                                    sectionId: "soundmoji",
                                    count: t.length,
                                    isNitroLocked: !1,
                                });
                                let s = i.has(to.R2.SOUNDMOJI);
                                (!s && (d.push(t.length), r.push(t), m++), e.push(+!s), f++);
                            }
                            for (let e of E)
                                if (e === to.R2.CUSTOM) {
                                    function x(n) {
                                        let i = b.get(n);
                                        if (null == i) return;
                                        let l = i.filter(
                                            (e) =>
                                                !tp.includes(
                                                    ew.Ay.getEmojiUnavailableReason({
                                                        emoji: e,
                                                        channel: t ?? eR.Ay.getDefaultChannel(n),
                                                        intention: s,
                                                    }),
                                                ),
                                        );
                                        if (0 === l.length) return;
                                        let r = eN.A.getGuild(n),
                                            a =
                                                y ||
                                                (!j &&
                                                    ew.Ay.isEmojiCategoryNitroLocked({
                                                        categoryEmojis: l,
                                                        channel: t,
                                                        intention: s,
                                                    }));
                                        h(l, {
                                            categoryId: e,
                                            guild: r,
                                            type: to.s.GUILD,
                                            sectionId: null != r ? r.id : (0, td.A)(),
                                            count: l.length,
                                            isNitroLocked: a,
                                        });
                                    }
                                    if ((null != I && x(I.id), (0, eG.isExternalEmojiAllowedForIntention)(s)))
                                        for (let e of S) (null == I || I.id !== e) && x(e);
                                } else if (e === to.R2.TOP_GUILD_EMOJI) {
                                    if (null != I) {
                                        let { allEmojis: t } = (0, ek.W)({ topEmojis: N, newlyAddedEmojis: C });
                                        t.length > 0 &&
                                            h(t, {
                                                categoryId: e,
                                                guild: eN.A.getGuild(I.id),
                                                type: to.s.TOP_GUILD_EMOJI,
                                                sectionId: to.s.TOP_GUILD_EMOJI,
                                                count: t.length,
                                                isNitroLocked: !1,
                                            });
                                    }
                                } else if (e === to.R2.RECENT) {
                                    let n = (s === eG.EmojiIntention.REACTION ? _ : A).filter(
                                        (e) => !ew.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }),
                                    );
                                    h(n, {
                                        categoryId: e,
                                        type: to.s.RECENT,
                                        sectionId: to.s.RECENT,
                                        count: n.length,
                                        isNitroLocked: !1,
                                    });
                                } else if (e === to.R2.FAVORITES) {
                                    let n = p.filter(
                                        (e) => !ew.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }),
                                    );
                                    0 !== n.length &&
                                        h(n, {
                                            categoryId: e,
                                            type: to.s.FAVORITES,
                                            sectionId: to.s.FAVORITES,
                                            count: n.length,
                                            isNitroLocked: !1,
                                        });
                                } else {
                                    let t = tf.Ay.getByCategory(e);
                                    null != t &&
                                        h(t, {
                                            categoryId: e,
                                            type: to.s.UNICODE,
                                            sectionId: e,
                                            count: t.length,
                                            isNitroLocked: !1,
                                        });
                                }
                        }
                    }
                    return { columnCounts: d, emojiGrid: r, rowCountBySection: e, sectionDescriptors: n };
                }, [g, a, c, o, l, i, b, O, t, s, N, C, j, E, I, S, _, A, p, y, R, u]);
            })({
                gridWidth: eq,
                fallbackGuildId: eI,
                channel: a,
                pickerIntention: s,
                emojiSearchResults: eB,
                collapsedSections: eX,
                emojiPaddingHorizontal: iI,
                emojiSpriteSize: E,
                shouldShowSoundmojiInEmojiPicker: K,
                showOnlyUnicode: B,
            }),
            { newlyAddedEmojis: e2 } = (0, eU.A)(eI, s);
        ((t = r.useRef({ intention: s, isBurstReaction: eh, analyticsObject: eL })),
            r.useEffect(() => {
                t.current.intention === eG.EmojiIntention.REACTION && eJ(t.current);
            }, []));
        let e3 = r.useCallback(() => {
                let e = e2.length > 0 ? e2[0].id : null;
                ((0, eo.uV)(eI, e), eJ({ intention: s, isBurstReaction: eh, analyticsObject: eL }));
            }, [e2, eI, s, eh, eL]),
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
                            let u = ew.Ay.getEmojiUnavailableReason({ emoji: r, channel: n, intention: t });
                            if (i.toggleFavorite)
                                return void (c.isFavoriteEmojiWithoutFetchingLatest(r) || null != u
                                    ? (0, h.Sw)(r)
                                    : (o?.(e), (0, h.V4)(r)));
                            if (u !== eG.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) {
                                if (u === eG.EmojiDisabledReasons.PREMIUM_LOCKED) {
                                    (a?.(e, u), l({ type: 0, emojiDescriptor: e }));
                                    return;
                                }
                                if (u === eG.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED && r.type === tm.i.GUILD) {
                                    (a?.(e, u), l({ type: 1, guildId: r.guildId, emojiId: r.id }));
                                    return;
                                }
                                u !== eG.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE &&
                                    (a?.(e), s({ emoji: r, willClose: i.isFinalSelection, isBurst: i.isBurst }));
                            }
                        }
                    },
                    [n, t, s, l, c, a, o],
                );
            })({
                pickerIntention: s,
                selectedChannel: a,
                fallbackGuildId: eI,
                closePopout: u,
                onSelectEmoji: T,
                setUpsellConfigs: ei,
                emojiSelectAnalytics: (e, t) => {
                    "" !== el
                        ? (0, eM.Wf)({
                              emoji: e.emoji,
                              location: { ...eF, object: ex.ZSU.EMOJI },
                              searchQuery: el,
                              isLocked: null != t,
                              intention: s,
                              messageId: G,
                          })
                        : (0, eM._7)({
                              emoji: e.emoji,
                              location: { ...eF, object: eL ?? ex.ZSU.EMOJI, ...(null != eO && { page: eO }) },
                              pickerIntention: s,
                              category: e.category,
                              subCategory: e.subCategory,
                              position: e.columnIndex + 1,
                              newlyAddedHighlight:
                                  e.subCategory === to.tm.NEWLY_ADDED_EMOJI && ea.isNewerThanLastSeen(eI, e.emoji.id),
                              isBurstReaction: eh,
                              messageId: G,
                              lockedReason: t,
                              visibleRowIndex: e.visibleRowIndex,
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, eM.C5)({ emoji: e.emoji, location: { ...eF, object: ex.ZSU.EMOJI } });
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
                            if (e.type === tg.EMOJI) {
                                if (null != e.emoji && i.altKey)
                                    return void (u.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                        ? (0, h.Sw)(e.emoji)
                                        : ((0, eM.C5)({ emoji: e.emoji, location: { ...t, object: ex.ZSU.EMOJI } }),
                                          (0, h.V4)(e.emoji)));
                                let l = {
                                    page: null != o ? ex.liQ.GUILD_CHANNEL : ex.liQ.DM_CHANNEL,
                                    section: ex.JJy.EMOJI_PICKER_POPOUT,
                                    object: ex.ZSU.EMOJI,
                                };
                                (c &&
                                    (l = {
                                        page: null != o ? ex.liQ.GUILD_CHANNEL : ex.liQ.DM_CHANNEL,
                                        section: ex.JJy.EMOJI_PICKER_POPOUT,
                                        object: ex.ZSU.EMOJI,
                                    }),
                                    (0, eM._7)({
                                        emoji: e.emoji,
                                        location: l,
                                        pickerIntention: n,
                                        category: e.category,
                                        subCategory: e.subCategory,
                                        newlyAddedHighlight:
                                            e.subCategory === to.tm.NEWLY_ADDED_EMOJI &&
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
                        getRowProps: g,
                        gridContainerProps: p,
                        handleGridContainerKeyDown: A,
                        isUsingKeyboardNavigation: _,
                    } = (0, em.Ff)({
                        columnCounts: i,
                        gridNavigatorId: to.lq,
                        itemGrid: l,
                        itemList: a,
                        onGridNavigatorItemSelect: f,
                        onGridNavigatorPositionChange: ip,
                    });
                return (
                    r.useEffect(
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
                        getRowProps: g,
                        gridContainerProps: p,
                        handleGridContainerKeyDown: A,
                        isUsingKeyboardNavigation: _,
                    }
                );
            })({
                pickerIntention: s,
                analyticsLocation: eF,
                columnCounts: e1,
                onSelectEmoji: T,
                emojiGrid: e0,
                emojiList: ef,
                channelGuildId: eI,
                isBurstReaction: eC,
            });
        (((e, t) => {
            let [n, i] = r.useState(null);
            (r.useEffect(() => {
                null != n && (t.current?.scrollToSectionTop(n), i(null));
            }, [t, n]),
                r.useEffect(() => {
                    i(ec.Om.getState().activeCategoryIndex);
                }, [e]));
        })(y, ef),
            r.useLayoutEffect(() => {
                Q && eE.current?.focus();
            }, [y, eK, eE, Q]),
            (n = r.useRef(z)),
            r.useEffect(() => {
                (Q && n.current && !z && eE.current?.focus(), (n.current = z));
            }, [Q, z, eE]),
            r.useEffect(() => {
                R || (0, eu.Ri)("");
            }, [R]),
            r.useEffect(
                () => (
                    ev.default.track(ex.HAw.OPEN_POPOUT, {
                        type: eP ?? "Emoji Picker",
                        guild_id: eI,
                        location: eD,
                        ...(0, N.dI)(a),
                    }),
                    () => {
                        (iA.cancel(), i_.cancel());
                    }
                ),
                [eP, eI, eD, a],
            ),
            (0, A.Ay)(() => ((0, eM.V$)({ intention: s, location: eF }), (es.current = el), ec.Om.resetStoreState)),
            r.useEffect(() => () => (0, ey.sF)(ey._2.FAVORITE_EMOJI_TOOLTIP), []),
            r.useLayoutEffect(() => {
                let { columnIndex: e, rowIndex: t } = ec.Om.getState().inspectedExpressionPosition;
                e0[t]?.[e] == null && 0 !== e && ec.Om.setInspectedExpressionPosition(0, 0);
            }, [e0]),
            r.useEffect(() => {
                if (("" === es.current && "" !== el && (0, eM.EG)(eF, s), "" !== el && es.current !== el)) {
                    let e = ec.Om.getAnalyticsId();
                    0 === eH
                        ? iA({ location: eF, searchQuery: el, intention: s, loadId: e })
                        : i_({
                              totalResults: eH,
                              numEmojiLocked: eB?.locked.length ?? 0,
                              location: eF,
                              searchQuery: el,
                              intention: s,
                              loadId: e,
                          });
                }
                es.current = el;
            }, [el, eF, eH, eB, s]));
        let tt = k ?? (O ? "div" : I.l),
            tn = null != eq;
        en?.type === tA.PREMIUM
            ? (i = (0, l.jsx)(iE.default, {
                  onUpsellClicked: e4,
                  emojiDescriptor: en.emojiDescriptor,
                  pickerIntention: s,
                  analyticsLocation: eF,
                  onClose: () => ei(null),
                  channel: a,
              }))
            : en?.type === tA.ROLE_SUBSCRIPTION &&
              (i = (0, l.jsx)(ej, { onClose: () => ei(null), guildId: en.guildId, emojiId: en.emojiId }));
        let ti = (0, l.jsx)(no, {
                channel: a,
                pickerIntention: s,
                emojiListRef: ef,
                onKeyDown: (e) => {
                    (e9?.(e), $?.(e));
                },
                searchBarRef: eE,
                onFocus: Y,
                autoFocus: Q,
                accessory: ee,
                headerClassName: L,
                diversitySurrogate: eK,
                isBurstReaction: eh,
                onBurstReactionToggle: function () {
                    (eg(!eh), eE.current?.focus());
                },
                burstToggleRef: ep,
                renderHeader: F,
                showAddEmojiButton: H,
                closePopout: u,
            }),
            ts = [];
        x.Ay.hasFavoriteEmojis(eI) || ts.push(f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let tl = (0, l.jsxs)(r.Fragment, {
                children: [
                    O ? ti : null,
                    (0, l.jsxs)("div", {
                        className: na.uK,
                        ref: er,
                        children: [
                            (0, l.jsx)(im, { channel: a, closePopout: u }),
                            (0, l.jsx)(S.Ay, {
                                contentTypes: ts,
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    if (t === f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                        return (0, l.jsx)(tG, { markAsDismissed: () => n(tk.i.UNKNOWN) });
                                },
                            }),
                            U
                                ? null
                                : (0, l.jsx)("div", {
                                      className: na.Iy,
                                      id: to.lq,
                                      ...e7,
                                      children: tn
                                          ? (0, l.jsx)(n9, {
                                                collapsedSections: eX,
                                                diversitySurrogate: eK,
                                                emojiGrid: e0,
                                                emojiListRef: ef,
                                                emojiSize: E,
                                                getEmojiItemProps: e8,
                                                getEmojiRowProps: e6,
                                                gridWidth: eq,
                                                isUsingKeyboardNavigation: te,
                                                onEmojiSelect: function (e, t) {
                                                    e5(e, { ...t, isBurst: eC });
                                                },
                                                onSelectSoundmoji: j,
                                                setUpsellConfigs: ei,
                                                rowCount: e0.length,
                                                rowCountBySection: e$,
                                                sectionDescriptors: eQ,
                                                setCollapsedSections: eZ,
                                                channelGuildId: eI,
                                                channelId: a?.id,
                                                messageId: G,
                                                isBurstReaction: eC,
                                                listHeaderClassName: J,
                                            })
                                          : null,
                                  }),
                        ],
                    }),
                    (0, l.jsx)(nE, { emojiGrid: e0, className: na.qV, guildId: eI, pickerIntention: s, channel: a }),
                    i,
                    s === eG.EmojiIntention.REACTION
                        ? (0, l.jsx)(ez, { targetElementRef: ep, shouldShow: eh && !e_, onDismiss: () => eg(!1) })
                        : null,
                ],
            }),
            tr = (0, l.jsx)(g.A, {
                ...eF,
                children: (0, l.jsxs)(tt, {
                    id: to.Do,
                    "aria-labelledby": O && !z ? to.k1 : void 0,
                    role: O && !z ? "tabpanel" : void 0,
                    className: o()(na.iE, { [na.r6]: O, [na.cB]: eC }),
                    children: [
                        O || z ? null : ti,
                        (0, l.jsx)("div", {
                            className: o()(na.Fb, v),
                            onScroll: ig,
                            children: z ? (0, l.jsx)(q, { onBack: () => Z?.(!1) }) : tl,
                        }),
                        U || z
                            ? null
                            : (0, l.jsx)(tw, {
                                  className: o()(na.jv, V),
                                  emojiListRef: ef,
                                  sectionDescriptors: eQ,
                                  intention: s,
                                  channel: a,
                                  fallbackGuildId: eI,
                                  shouldShowSoundmojiInEmojiPicker: K,
                                  showOnlyUnicode: B,
                                  onViewEmojiPacks: null != Z ? () => Z(!0) : void 0,
                              }),
                    ],
                }),
            });
        return (0, l.jsx)(C.f5, { value: eV, children: tr });
    });
