(n.d(t, { A: () => iA }), n(321073));
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
    _ = n(765548),
    N = n(793574),
    C = n(666860),
    x = n(688810),
    y = n(379848),
    j = n(236285),
    T = n(770335),
    O = n(934499),
    S = n(331322),
    b = n(866665),
    R = n(408278),
    v = n(477155),
    L = n(403581),
    P = n(661531),
    M = n(297264),
    D = n(62010),
    w = n(465794),
    k = n(683973),
    U = n(287809),
    G = n(474090),
    F = n(182159),
    J = n(118057),
    V = n(834730),
    K = n(847374),
    B = n(320448),
    H = n(834040),
    W = n(499373),
    X = n(559106),
    z = n(565645),
    Z = n(915089),
    Y = n(732447),
    $ = n(105292),
    q = n(126904);
let Q = r.memo(function (e) {
    let { pack: t, isPinned: n, onAddPack: i, onRemovePack: s, onSelectEmoji: a } = e,
        c = r.useId(),
        u = r.useId(),
        [d, m] = r.useState(!1),
        f = $.intl.string(d ? $.t.iTcuma : $.t.dcl9MQ),
        E = $.intl.string(n ? Y.default["2zxYCx"] : Y.default.Tvdb5N),
        I = r.useMemo(() => t.emojis.filter((e) => e.available), [t.emojis]),
        g = r.useMemo(() => [I.length], [I.length]),
        h = (0, Z.GV)(),
        {
            getContainerProps: p,
            getItemProps: A,
            getRowProps: _,
        } = (0, J.A)({
            navId: h,
            columnCounts: g,
            onSelect: (e, n, i) => {
                let s = I[e];
                null != s && t.available && a(s, e, { isFinalSelection: !i.shiftKey, toggleFavorite: i.altKey });
            },
        }),
        N = p();
    return (0, l.jsxs)("section", {
        "aria-labelledby": c,
        className: q.nM,
        children: [
            (0, l.jsxs)(S.B, {
                align: "center",
                direction: "horizontal",
                gap: 4,
                justify: "space-between",
                children: [
                    (0, l.jsxs)(S.B, {
                        align: "center",
                        className: q.DD,
                        direction: "horizontal",
                        gap: 4,
                        children: [
                            (0, l.jsx)(M.D, { className: q.UU, id: c, variant: "text-xs/bold", children: t.name }),
                            (0, l.jsx)(V.E, {
                                color: "text-subtle",
                                variant: "text-xs/medium",
                                children: $.intl.format(Y.default.UA8cNe, { count: I.length }),
                            }),
                            (0, l.jsx)(b.m, {
                                text: f,
                                children: (0, l.jsx)(R.K, {
                                    "aria-controls": u,
                                    "aria-describedby": c,
                                    "aria-expanded": d,
                                    "aria-label": f,
                                    icon: d ? K.a : B._,
                                    onClick: () => m((e) => !e),
                                    size: "sm",
                                    variant: "icon-only",
                                }),
                            }),
                        ],
                    }),
                    (0, l.jsx)(b.m, {
                        text: E,
                        children: (0, l.jsx)(R.K, {
                            "aria-label": E,
                            icon: n ? H.MinusIcon : W.T,
                            onClick: () => (n ? s(t) : i(t)),
                            size: "sm",
                            variant: "secondary",
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                id: u,
                ...N,
                "aria-label": t.name,
                className: o()(q.gm, { [q.jE]: d }),
                tabIndex: t.available && I.length > 0 ? N.tabIndex : -1,
                children: (0, l.jsx)("div", {
                    className: q.nI,
                    ..._(0),
                    children: I.map((e, n) => {
                        let { ref: i, ...s } = A(n, 0);
                        return (0, l.jsx)(
                            b.m,
                            {
                                text: `:${e.name}:`,
                                ariaHidden: !0,
                                asContainer: !0,
                                children: (0, l.jsx)(X.vN, {
                                    children: (0, l.jsx)("button", {
                                        ...s,
                                        ref: i,
                                        "aria-label": `:${e.name}:`,
                                        className: q.Z8,
                                        disabled: !t.available,
                                        onClick: (t) => {
                                            (t.stopPropagation(),
                                                a(e, n, { isFinalSelection: !t.shiftKey, toggleFavorite: t.altKey }));
                                        },
                                        type: "button",
                                        children: (0, l.jsx)(z.A, {
                                            animated: e.animated,
                                            alt: "",
                                            className: q.Zg,
                                            emojiId: e.id,
                                            emojiName: e.name,
                                        }),
                                    }),
                                }),
                            },
                            e.id,
                        );
                    }),
                }),
            }),
        ],
    });
});
var ee = n(202541),
    et = n(429800);
function en(e) {
    let { onBack: t, onSelectEmoji: n } = e,
        i = $.intl.string(Y.default.Nwj3fK),
        s = r.useRef(null),
        a = (0, m.bG)([F.A], () => F.A.getPacks()),
        o = (0, m.bG)([U.default], () => U.default.getCurrentUser()),
        c = (0, G.ki)(o, ee.PremiumTypes.TIER_2);
    r.useLayoutEffect(() => {
        s.current?.focus();
    }, []);
    let u = (0, k.k)().pinnedEmojiPacks?.packIds,
        d = r.useCallback((e) => {
            (0, O.Ls)(e.id);
        }, []),
        f = r.useCallback((e) => {
            (0, O.M5)(e.id);
        }, []);
    return (0, l.jsxs)("div", {
        className: et.kL,
        children: [
            (0, l.jsx)("div", { "aria-hidden": !0, className: et.Tp }),
            (0, l.jsx)("div", {
                className: et.wx,
                children: (0, l.jsxs)(S.B, {
                    align: "center",
                    direction: "horizontal",
                    gap: 8,
                    justify: "space-between",
                    wrap: !0,
                    children: [
                        (0, l.jsxs)(S.B, {
                            align: "center",
                            direction: "horizontal",
                            gap: 10,
                            fullWidth: !1,
                            children: [
                                (0, l.jsx)(b.m, {
                                    position: "right",
                                    text: i,
                                    children: (0, l.jsx)(R.K, {
                                        "aria-label": i,
                                        buttonRef: s,
                                        icon: v.r,
                                        onClick: t,
                                        size: "sm",
                                        variant: "icon-only",
                                    }),
                                }),
                                (0, l.jsxs)(S.B, {
                                    align: "center",
                                    direction: "horizontal",
                                    gap: 4,
                                    fullWidth: !1,
                                    children: [
                                        (0, l.jsx)(L.t, { color: P.A.colors.TEXT_DEFAULT, size: "xs" }),
                                        (0, l.jsxs)(S.B, {
                                            align: "center",
                                            direction: "horizontal",
                                            gap: 8,
                                            fullWidth: !1,
                                            children: [
                                                (0, l.jsx)(M.D, {
                                                    variant: "heading-md/semibold",
                                                    children: $.intl.string(Y.default["0+5+Oy"]),
                                                }),
                                                (0, l.jsx)(D.E, { type: "beta", variant: "primary" }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        c
                            ? null
                            : (0, l.jsx)(w.A, {
                                  buttonTextOverride: $.intl.string($.t.hIVbiP),
                                  size: "sm",
                                  subscriptionTier: ee.pe.TIER_2,
                              }),
                    ],
                }),
            }),
            (0, l.jsx)("div", {
                className: et.p_,
                children: a.map((e, t) =>
                    (0, l.jsxs)(
                        r.Fragment,
                        {
                            children: [
                                t > 0 ? (0, l.jsx)("hr", { className: et.yF }) : null,
                                (0, l.jsx)(Q, {
                                    isPinned: u?.includes(e.id) === !0,
                                    pack: e,
                                    onAddPack: d,
                                    onRemovePack: f,
                                    onSelectEmoji: n,
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
var ei = n(617617);
let es = [];
var el = n(536637),
    er = n.n(el),
    ea = n(73153),
    eo = n(935208);
let ec = { lastSeenNewlyAddedEmojiIds: {} },
    eu = ec,
    ed = {};
function em() {
    for (let e in ed) eu.lastSeenNewlyAddedEmojiIds[e] = ed[e];
}
class ef extends m.Ay.PersistedStore {
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
        eu = e ?? ec;
    }
    getState() {
        return eu;
    }
    getLastSeenEmojiByGuild(e) {
        return eu.lastSeenNewlyAddedEmojiIds[e];
    }
    isNewerThanLastSeen(e, t) {
        if (null == e || null == t) return !1;
        let n = this.getLastSeenEmojiByGuild(e);
        if (null == n || eo.default.compare(t, n.id) > 0) return !0;
        {
            let e = er()(n.lastSeen);
            return er()().isBefore(e.add(2, "weeks")) && !n.acknowledged;
        }
    }
}
let eE = new ef(ea.h, {
    LOGOUT: function () {
        ((eu = ec), (ed = {}));
    },
    NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = ed[t] ?? eu.lastSeenNewlyAddedEmojiIds[t];
        null == i || 0 > eo.default.compare(i.id, n)
            ? (ed[t] = { id: n, lastSeen: Date.now(), acknowledged: !0 })
            : (ed[t] = { ...i, acknowledged: !0 });
    },
    NEWLY_ADDED_EMOJI_SEEN_PENDING: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = ed[t] ?? eu.lastSeenNewlyAddedEmojiIds[t];
        (null == i || 0 > eo.default.compare(i.id, n)) && (ed[t] = { id: n, lastSeen: Date.now(), acknowledged: !1 });
    },
    NEWLY_ADDED_EMOJI_SEEN_UPDATED: em,
    CLEAR_CACHES: function () {
        ((eu = ec), em());
    },
    CONNECTION_CLOSED: em,
});
var eI = n(451731),
    eg = n(850992),
    eh = n(151271),
    ep = n(60587),
    eA = n(887695),
    e_ = n(562708),
    eN = n(462887),
    eC = n(939249),
    ex = n(789645),
    ey = n(696986),
    ej = n(736653),
    eT = n(139286),
    eO = n(976860),
    eS = n(71393),
    eb = n(384684),
    eR = n(985242),
    ev = n(652215),
    eL = n(746080),
    eP = n(196404);
function eM(e) {
    let t,
        { onClose: i, guildId: s, emojiId: r } = e,
        a = ((t = (0, ej.Ay)()), (0, eN.q)(t) ? n(454333) : n(674463)),
        { analyticsLocations: o } = (0, x.Ay)(N.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, eT.A)({
        type: e_.ImpressionTypes.MODAL,
        name: e_.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: { location_stack: o, emoji_guild_id: s, emoji_id: r ?? null },
    });
    let c = (0, m.bG)([eS.A], () => eS.A.getGuild(s)),
        u = (0, m.bG)([eb.A], () => null != s && eb.A.getUserSubscriptionRoles(s).size > 0),
        d = u ? $.intl.string($.t.GoLM9z) : $.intl.formatToPlainString($.t["h0u/Hi"], { serverName: c?.name }),
        f = u ? $.intl.string($.t.PjZ7Db) : $.intl.string($.t.p8FG1D);
    return (0, l.jsxs)("div", {
        className: eP.kL,
        children: [
            (0, l.jsx)("div", { className: eP.Tp }),
            (0, l.jsxs)("div", {
                className: eP.Qs,
                children: [
                    (0, l.jsx)(eC.D, {
                        className: eP.b,
                        "aria-label": $.intl.string($.t.cpT0Cq),
                        onClick: i,
                        children: (0, l.jsx)(ex.P, {
                            size: "xs",
                            color: "currentColor",
                            "aria-label": $.intl.string($.t.cpT0Cq),
                            className: eP.yP,
                        }),
                    }),
                    (0, l.jsx)("img", { alt: "", src: a, className: eP.Tn }),
                    (0, l.jsx)(ey.h, { size: 22 }),
                    (0, l.jsx)(M.D, {
                        color: "text-strong",
                        variant: "heading-lg/extrabold",
                        className: eP.wx,
                        children: $.intl.string($.t.cBjkcx),
                    }),
                    (0, l.jsx)(ey.h, { size: 4 }),
                    (0, l.jsx)(V.E, {
                        color: "text-default",
                        variant: "text-md/normal",
                        className: eP.h_,
                        children: d,
                    }),
                    (0, l.jsx)(ey.h, { size: 24 }),
                    (0, l.jsx)(eR.A, {
                        text: f,
                        onClick: function () {
                            (0, eO.pX)(ev.BVt.CHANNEL(s, eL.VV.ROLE_SUBSCRIPTIONS), { sourceLocationStack: o });
                        },
                    }),
                ],
            }),
        ],
    });
}
var eD = n(450510),
    ew = n(885386),
    ek = n(808728),
    eU = n(174459),
    eG = n(240248),
    eF = n(822123),
    eJ = n(734057),
    eV = n(309010),
    eK = n(690521),
    eB = n(818645),
    eH = n(316884),
    eW = n(307731),
    eX = n(698279);
function ez(e) {
    let { intention: t, containerWidth: n, rowSize: i, isBurstReaction: s, analyticsObject: l } = e,
        r = eJ.A.getChannel(eV.Ay.getChannelId()),
        a = r?.getGuildId(),
        o =
            t === eW.EmojiIntention.REACTION
                ? j.Ay.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice()
                : j.Ay.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        c = null != r ? j.Ay.getDisambiguatedEmojiContext(r.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        u =
            t === eW.EmojiIntention.REACTION
                ? j.Ay.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems
                : j.Ay.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        d = o.slice(0, u),
        m = null != a ? j.Ay.getGuildEmoji(a) : [],
        f = j.Ay.getDisambiguatedEmojiContext(r?.getGuildId()).getCustomEmoji(),
        { topEmojis: E, newlyAddedEmojis: I } = (0, eH.b)({ guildId: r?.getGuildId(), pickerIntention: t }),
        { visibleTopEmojis: g, visibleNewlyAddedEmojis: h } = (0, eB.W)({
            topEmojis: E,
            newlyAddedEmojis: I,
            rowSize: i,
        });
    C.Ay.trackWithMetadata(
        t === eW.EmojiIntention.REACTION ? ev.HAw.REACTION_PICKER_OPENED : ev.HAw.EXPRESSION_PICKER_OPENED,
        {
            width: n,
            tab: eX.kx.EMOJI,
            badged: !1,
            num_expressions_favorites: c.length,
            num_animated_expressions_favorites: c.filter((e) => e?.animated).length,
            num_custom_expressions_favorites: c.filter(eK.Ay.isCustomEmoji).length,
            num_standard_expressions_favorites: c.filter((e) => null == e.id).length,
            num_expressions_frecent: d.length,
            num_animated_expressions_frecent: d.filter((e) => e?.animated).length,
            num_custom_expressions_frecent: d.filter(eK.Ay.isCustomEmoji).length,
            num_standard_expressions_frecent: d.filter((e) => null == e.id).length,
            num_current_guild_expressions: m.length,
            num_custom_expressions_total: f.size,
            num_expressions_top_server: g.length,
            num_animated_expressions_top_server: g.filter((e) => e.animated).length,
            num_expressions_newly_added: h.length,
            num_animated_expressions_newly_added: h.filter((e) => e.animated).length,
            ...(t === eW.EmojiIntention.REACTION && { is_burst: s }),
            ...(null != l && { location_object: l }),
        },
    );
}
var eZ = n(206248),
    eY = n(724651),
    e$ = n(732280),
    eq = n(783420),
    eQ = n(927578);
let e0 = { object: ev.ZSU.BUTTON_CTA, section: ev.JJy.SUPER_REACTION_PICKER };
function e1(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: i } = e,
        s = $.intl.string($.t.eikz43),
        r = (0, e$.V)(),
        a = (0, eY.O)(),
        o = r?.subscriptionTrial,
        c = null != o || null != a,
        u = o?.skuId ?? ee.pe.TIER_2,
        d = c
            ? null != a
                ? $.intl.formatToPlainString($.t.bkQ4bH, { percent: a.discount.amount })
                : (0, eQ.FY)({ intervalType: o?.interval, intervalCount: o?.intervalCount })
            : $.intl.string($.t.sEAnVH);
    return (0, l.jsx)(eq.A, {
        subscriptionTier: u,
        premiumModalAnalyticsLocation: e0,
        onSubscribeModalClose: (e) => {
            e && i();
        },
        children: (e) => {
            let { onClick: r } = e;
            return (0, l.jsx)(eZ.H, {
                targetElementRef: t,
                shouldShow: n,
                onRequestClose: i,
                position: "bottom",
                assetUrl: "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
                disableMediaViewer: !0,
                badge: c ? { type: "free_trial", variant: "expressive" } : void 0,
                title: $.intl.string($.t.N4SCJ0),
                body: s,
                action: { text: d, variant: "expressive", icon: L.t, onClick: r },
            });
        },
    });
}
var e2 = n(200589),
    e3 = n(435558),
    e5 = n.n(e3),
    e4 = n(837381),
    e8 = n(460905),
    e6 = n(775602),
    e7 = n(713517),
    e9 = n(938612);
function te(e) {
    let { onClick: t } = e,
        n = $.intl.string(Y.default["3D0GLv"]);
    return (0, l.jsx)("div", {
        className: e9.n,
        children: (0, l.jsx)(b.m, {
            ariaHidden: !0,
            position: "right",
            text: n,
            children: (0, l.jsx)(eC.D, {
                "aria-label": n,
                className: e9.x,
                onClick: t,
                children: (0, l.jsx)(W.T, { size: "md", color: "currentColor" }),
            }),
        }),
    });
}
var tt = n(88218),
    tn = n(407698),
    ti = n(941971),
    ts = n(531685),
    tl = n(406810),
    tr = n(27232),
    ta = n(369606),
    to = n(413249),
    tc = n(141060),
    tu = n(687966),
    td = n(115979),
    tm = n(524501),
    tf = n(926268),
    tE = n(138134),
    tI = n(732139);
let tg = r.memo(function (e) {
    let { categoryId: t, ...n } = e,
        i = (function (e) {
            switch (e) {
                case tI.R2.RECENT:
                    return tl.ClockIcon;
                case tI.R2.FAVORITES:
                    return tr.StarIcon;
                case tI.R2.TOP_GUILD_EMOJI:
                    return ta.TrophyIcon;
                case tI.R2.PEOPLE:
                    return e8.n;
                case tI.R2.NATURE:
                    return to.p;
                case tI.R2.FOOD:
                    return tc.i;
                case tI.R2.ACTIVITY:
                    return tu.GameControllerIcon;
                case tI.R2.TRAVEL:
                    return td.h;
                case tI.R2.OBJECTS:
                    return tm.D;
                case tI.R2.SYMBOLS:
                    return tf.HeartIcon;
                case tI.R2.FLAGS:
                    return tE.FlagIcon;
                case tI.R2.PREMIUM_UPSELL:
                    return L.t;
                default:
                    return;
            }
        })(t);
    return null == i ? null : (0, l.jsx)(i, { color: "currentColor", ...n });
});
var th = n(724511),
    tp = n(132500),
    tA = n(7584),
    t_ = n(526292),
    tN = n(711014),
    tC = (((i = {})[(i.EMOJI = 0)] = "EMOJI"), (i[(i.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"), i);
let tx = [eW.EmojiDisabledReasons.DISALLOW_EXTERNAL, eW.EmojiDisabledReasons.DISALLOW_CUSTOM];
var ty = (((s = {})[(s.PREMIUM = 0)] = "PREMIUM"), (s[(s.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), s),
    tj = n(342379);
let tT = "expression-guild-",
    { itemIdForIndex: tO } = (0, tt.J)(tT),
    tS = (0, eG.xI)(E.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    tb = (0, eG.xI)(E.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    tR = (0, eG.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    tv = (0, eG.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    tL = (0, eG.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    tP = (0, eG.xI)(tj.__invalid_unicodeCategoryShortcutHeight),
    tM = (0, eG.xI)(E.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    tD = (0, eG.xI)(E.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    tw = tR + tb + 2 * tL,
    tk = tM + 2 * tD,
    tU = tS + tb,
    tG = tU + tk,
    tF = tR + tv + 2 * tL;
function tJ(e) {
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
        { isHoveringOrFocusing: f } = (0, e7.A)(m),
        E = (0, e4.rm)(tO(n)),
        I = a.type === tI.s.GUILD || a.type === tI.s.PACK ? null : a.id,
        g = t === n,
        h = !d && u,
        p = a.type === tI.s.GUILD ? a.guild : null,
        A = a.type === tI.s.PACK ? a.pack : null,
        _ = (0, l.jsxs)(eC.D, {
            innerRef: m,
            ...E,
            "aria-label": a.type === tI.s.PACK ? a.pack.name : (0, eF.wt)(a, p),
            className: o()({
                [tj.ZG]: null != p,
                [tj.td]: null != A,
                [tj.Bj]: null == p && null == A,
                [tj.s6]: null == p && null == A && g,
                [tj.xg]: a.type === tI.s.RECENT,
            }),
            onClick: () => {
                (null != p &&
                    eU.default.track(ev.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: i?.location,
                        tab: eX.kx.EMOJI,
                        guild_id: p.id,
                    }),
                    c(n));
            },
            children: [
                (0, l.jsx)("div", {
                    className: tj.a$,
                    children: (0, l.jsx)(ti.A, { hovered: f, selected: g, size: "small" }),
                }),
                a.type === tI.s.GUILD
                    ? (0, l.jsx)(th.A, { guild: a.guild, isSelected: g, shouldAnimate: h, isLocked: a.isNitroLocked })
                    : null,
                null != A
                    ? (0, l.jsx)(z.A, {
                          alt: "",
                          animated: !d,
                          shouldAnimate: h,
                          className: tj.ty,
                          emojiId: A.representativeEmojiId,
                      })
                    : null,
                null == p && null != I
                    ? (0, l.jsx)(tg, { categoryId: I, className: tj.Yl, height: tR, width: tR, size: "custom" })
                    : null,
            ],
        }),
        N = s[n + 1],
        C = s[n - 1],
        x = null != A && null != C && C.type !== tI.s.PACK,
        y = null != A && N?.type !== tI.s.PACK,
        j = null != N && a.type === tI.s.GUILD && N.type !== tI.s.GUILD;
    return null != p
        ? (0, l.jsxs)(r.Fragment, {
              children: [
                  (0, l.jsx)(tn.Q, { guild: p, children: _ }),
                  j ? (0, l.jsx)("hr", { className: tj.ny }, "separator") : null,
              ],
          })
        : null != A
          ? (0, l.jsxs)(r.Fragment, {
                children: [
                    x ? (0, l.jsx)("hr", { className: tj.ny }) : null,
                    (0, l.jsx)(b.m, { ariaHidden: !0, position: "right", text: A.name, children: _ }),
                    y ? (0, l.jsx)("hr", { className: tj.ny }) : null,
                ],
            })
          : _;
}
let tV = (e) => {
    let {
            className: t,
            emojiListRef: n,
            sectionDescriptors: i,
            intention: s,
            channel: a,
            fallbackGuildId: c,
            showOnlyUnicode: u = !1,
            pinnedPacks: d,
            onViewEmojiPacks: f,
        } = e,
        E = eg.Om.useStore((e) => e.activeCategoryIndex),
        I = (function (e) {
            let { emojiListRef: t } = e,
                n = (0, eh.RQ)((e) => e.searchQuery),
                i = r.useCallback((e) => t.current?.scrollToSectionTop(e), [t]);
            return r.useCallback(
                (e) => {
                    "" !== n ? ((0, eh.Ri)(""), eg.Om.setActiveCategoryIndex(e)) : i(e);
                },
                [i, n],
            );
        })({ sectionDescriptors: i, emojiListRef: n }),
        g = (0, p.p)(),
        h = (0, eF.ss)(s, a, { guildId: a?.guild_id ?? c }),
        A = r.useMemo(() => (0, e2.t)(u ? (0, eF.CQ)() : h, d), [h, d, u]),
        _ = r.useRef(null),
        N = (0, m.bG)([ts.A], () => ts.A.isFocused()),
        C = (0, m.bG)([e6.Ay], () => e6.Ay.useReducedMotion, []),
        x = r.useMemo(
            () =>
                e5().memoize(
                    (e, t) => {
                        let n = A[t];
                        if (null != n)
                            return (0, l.jsx)(
                                tJ,
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
        y = r.useMemo(() => [8, 8, 0, 8], []),
        j = r.useCallback(
            (e, t) => {
                let n = A[t];
                if (n.type === tI.s.RECENT) return tw;
                if (n.type === tI.s.PACK) {
                    let e = A[t - 1],
                        n = A[t + 1];
                    return tU + (Number(null != e && e.type !== tI.s.PACK) + Number(n?.type !== tI.s.PACK)) * tk;
                }
                if (n.type === tI.s.GUILD) {
                    let e = A[t + 1];
                    return null != e && e.type !== tI.s.GUILD ? tG : tU;
                }
                return tF;
            },
            [A],
        ),
        {
            nonUnicodeCategoryCount: T,
            firstUnicodeCategoryIndex: O,
            firstUnicodeCategoryOffsetTop: S,
            rowCountBySection: b,
        } = r.useMemo(() => {
            let e = 0,
                t = 0,
                n = 0,
                i = 0;
            A.forEach((s) => {
                s.type === tI.s.GUILD || s.type === tI.s.PACK
                    ? ((t += 1), (n += 1))
                    : s.type === tI.s.UNICODE
                      ? (i += 1)
                      : ((e += 1), (t += 1));
            });
            let s = [e, n, i],
                l = A.some((e) => e.type === tI.s.PACK) ? (A[0]?.type === tI.s.PACK ? 1 : 2) : 0,
                r = tw + t * tU + tG + l * tk;
            return {
                nonUnicodeCategoryCount: t,
                firstUnicodeCategoryIndex: t,
                firstUnicodeCategoryOffsetTop: r,
                rowCountBySection: s,
            };
        }, [A]),
        [R, v] = r.useState(!0);
    r.useLayoutEffect(() => {
        v(T >= 7);
    }, [T]);
    let L = r.useCallback(
            (e) => {
                let t = _.current?.getListDimensions();
                null == t || (e + t.height - tM >= S ? v(!1) : v(!0));
            },
            [S],
        ),
        P = r.useCallback(
            (e) => {
                (e(O), _.current?.scrollTo(S));
            },
            [S, O],
        ),
        M = r.useCallback(
            (e, t) => {
                let n = A[e];
                if (null == n) return 0;
                let i = R ? tP : 0;
                if (n.type === tI.s.RECENT) return t ? 0 : tv;
                if (n.type === tI.s.PACK) return t ? i : tb;
                if (n.type === tI.s.GUILD) {
                    let n = A[e + 1];
                    return null != n && n.type !== tI.s.GUILD ? (t ? tM + -2 * tD + tb + i : tb) : t ? i : tb;
                }
                return t ? tb + i : 2 * tb;
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
    return (0, l.jsx)(tt.A, {
        categoryListRef: _,
        expressionsListRef: n,
        className: t,
        store: eg.Om,
        categories: A,
        listPadding: y,
        onScroll: L,
        renderCategoryListItem: x,
        renderSection: D,
        rowCount: A.length,
        categoryHeight: j,
        getScrollOffsetForIndex: M,
        rowCountBySection: b,
        navId: "emoji-picker-categories",
        itemIdPrefix: tT,
        emojiPacksHeader: null != f ? (0, l.jsx)(te, { onClick: f }) : null,
        children: (e) =>
            T >= 7 &&
            (0, l.jsx)(
                eC.D,
                {
                    "aria-hidden": !R,
                    "aria-label": $.intl.string($.t.dT0ctw),
                    className: o()(tj.KB, { [tj.h_]: !R }),
                    tabIndex: R ? 0 : -1,
                    onClick: () => P(e),
                    children: (0, l.jsx)(e8.n, { size: "custom", color: "currentColor", height: tR, width: tR }),
                },
                w,
            ),
    });
};
var tK = n(49999),
    tB = n(860197);
let tH = function (e) {
    let { markAsDismissed: t } = e;
    return (0, l.jsxs)(V.E, {
        variant: "text-xs/medium",
        color: "text-default",
        className: tB.iE,
        children: [
            (0, l.jsx)(tf.HeartIcon, { size: "md", color: "currentColor", className: tB.Kk }),
            (0, l.jsx)("div", {
                className: tB.Qs,
                children: (0, l.jsx)(V.E, { variant: "text-xs/normal", children: $.intl.string($.t.xdRf69) }),
            }),
            (0, l.jsx)(eC.D, {
                onClick: () => t(tK.i.UNKNOWN),
                children: (0, l.jsx)(ex.P, { size: "md", color: "currentColor", className: tB.VN }),
            }),
        ],
    });
};
var tW = n(941143),
    tX = n(717421),
    tz = n(343032),
    tZ = n(683063),
    tY = n(131607),
    t$ = n(748798);
let tq = { tension: 750, mass: 2.5, friction: 70 };
function tQ(e) {
    let { checked: t, onClick: n, buttonRef: i } = e,
        s = (0, m.bG)([e6.Ay], () => e6.Ay.useReducedMotion),
        a = U.default.getCurrentUser(),
        c = null != a && !(0, eQ.TW)(a),
        u = c ? [] : [f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP],
        [d, E] = (0, tY.kn)(u),
        [I, g] = r.useState(!1),
        [h, p] = (0, tX.z)(() => ({})),
        A = (0, tW.animated)(tz.i);
    r.useEffect(() => {
        let e = d === f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (E(tK.i.DISMISS), setTimeout(() => g(e), 200));
    }, [d, E]);
    let _ = I ? $.intl.string($.t["Osi/uy"]) : t && !c ? $.intl.string($.t["5cRA/b"]) : $.intl.string($.t.buV4av),
        N = I ? $.intl.string($.t.ORK94p) : void 0;
    return (0, l.jsx)(tZ.u, {
        position: "top",
        title: N,
        body: _,
        asset: (0, l.jsx)(L.t, { size: "md", color: "currentColor" }),
        assetSize: 20,
        forceOpen: I,
        children: (0, l.jsx)(eC.D, {
            innerRef: i,
            "aria-label": _,
            "aria-pressed": t,
            onClick: function () {
                (p({ from: { rotate: t ? "360deg" : "0deg" }, to: { rotate: t ? "0deg" : "360deg" }, config: tq }),
                    n?.(),
                    g(!1));
            },
            focusProps: { enabled: !1 },
            className: o()(t$.Pf, { [t$.wM]: t }),
            children: (0, l.jsx)(A, {
                style: s ? void 0 : h,
                size: "custom",
                width: 20,
                height: 20,
                color: t ? "white" : "currentColor",
                className: t$.Kk,
            }),
        }),
    });
}
var t0 = n(821609),
    t1 = n(644508),
    t2 = n(824832),
    t3 = n(267102),
    t5 = n(242812);
function t4(e) {
    let { channel: t, closePopout: n } = e,
        i = r.useRef(null),
        s = r.useRef(0),
        [a, o] = r.useState(!1),
        [c, u] = r.useState(!1),
        d = (0, t3.Us)() === ev.BRT.OVERLAY,
        m = c || a,
        f = r.useCallback(
            async (e, i, l) => {
                (u(!0),
                    n(),
                    await (0, t1.f)({
                        userImage: { data: e, file: i, image: l },
                        guildId: t?.guild_id ?? null,
                        analyticsLocation: {
                            section: ev.JJy.EXPRESSION_PICKER,
                            page: t?.guild_id != null ? ev.liQ.GUILD_CHANNEL : ev.liQ.DM_CHANNEL,
                        },
                    }),
                    (s.current += 1),
                    u(!1));
            },
            [t, n],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(b.m, {
                asContainer: !0,
                text: d ? $.intl.string($.t.RMbedC) : null,
                children: (0, l.jsx)(t0.$, {
                    text: $.intl.string($.t.iMJO37),
                    variant: "secondary",
                    onClick: function () {
                        i.current?.activateUploadDialogue();
                    },
                    disabled: m || d,
                }),
            }),
            (0, l.jsx)("div", {
                className: t5.F,
                children: (0, l.jsx)(t2.Ay, { ref: i, onChange: f, setLoading: o, disabled: m }, s.current),
            }),
        ],
    });
}
n(667532);
var t8 = n(833272),
    t6 = n(82495),
    t7 = n(260762),
    t9 = n(650583),
    ne = n(683829);
let nt = (0, Z.Ld)(),
    nn = t8.A.convert.fromCodePoint("1f44f"),
    ni = (0, eG.xI)(E.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
function ns(e) {
    switch (t8.A.convert.toCodePoint(e)) {
        case "1f3fb":
            return $.intl.string($.t["BVK5b/"]);
        case "1f3fc":
            return $.intl.string($.t.xJWOK8);
        case "1f3fd":
            return $.intl.string($.t["MB+T5g"]);
        case "1f3fe":
            return $.intl.string($.t.MODud2);
        case "1f3ff":
            return $.intl.string($.t["0uzqsc"]);
        default:
            return $.intl.string($.t.bGN1ow);
    }
}
let nl = (e) => {
    let { fade: t, surrogate: n, onClick: i, delay: s, index: r } = e,
        a = (0, e4.rm)(`item-${r}`),
        o = eK.Ay.getURL(nn + n),
        c = (0, tX.z)({ opacity: 1, from: { opacity: +!t }, delay: s }, "animate-always");
    return (0, l.jsx)(eC.D, {
        ...a,
        role: "option",
        "aria-selected": 0 === r,
        onClick: () => i(n),
        className: ne.B6,
        children: (0, l.jsx)(tW.animated.div, {
            "aria-label": ns(n),
            className: ne.g4,
            style: { backgroundImage: `url("${o}")`, ...c },
        }),
    });
};
function nr(e) {
    let { id: t, selectedSurrogate: n, onClick: i } = e,
        s = (0, t7.A)("diversity"),
        a = (0, tX.z)({ height: (ni + 14) * (tA.W$.length + 1), from: { height: ni + 14 }, config: { duration: 125 } }),
        o = r.useRef(s);
    r.useEffect(() => {
        o.current.focusFirstVisibleItem();
    }, []);
    let c = ["", ...tA.W$];
    return (
        e5().remove(c, (e) => e === n),
        c.unshift(n),
        (0, l.jsx)(e4.hD, {
            navigator: s,
            children: (0, l.jsx)(e4.PR, {
                children: (e) => {
                    let { ref: n, ...s } = e;
                    return (0, l.jsx)(tW.animated.div, {
                        ...s,
                        id: t,
                        ref: n,
                        className: ne.J6,
                        style: a,
                        role: "listbox",
                        children: c.map((e, t) =>
                            (0, l.jsx)(nl, { index: t, fade: 0 !== t, delay: 20 * t, surrogate: e, onClick: i }, t),
                        ),
                    });
                },
            }),
        })
    );
}
let na = function (e) {
    let { searchBarRef: t, selectedSurrogate: n, className: i } = e,
        s = eK.Ay.getURL(nn + n),
        [a, c] = r.useState(!1),
        u = (0, t6.A)(null, () => c(!1)),
        d = r.useRef(null);
    return (0, l.jsxs)("div", {
        ref: u,
        className: o()(ne.fx, i),
        children: [
            (0, l.jsx)(eC.D, {
                innerRef: d,
                className: ne.Dj,
                onClick: function () {
                    c(!0);
                },
                "aria-label": $.intl.formatToPlainString($.t["2SfnMp"], { skinTone: ns(n) }),
                "aria-haspopup": !0,
                "aria-expanded": a,
                "aria-controls": nt,
                tabIndex: a ? -1 : 0,
                children: (0, l.jsx)("div", { className: ne.g4, style: { backgroundImage: `url("${s}")` } }),
            }),
            a
                ? (0, l.jsx)("div", {
                      onKeyDown: function (e) {
                          e.key === t9.dh.ESCAPE
                              ? (e.stopPropagation(), c(!1), null != d.current && d.current.focus())
                              : "Tab" === e.key && c(!1);
                      },
                      children: (0, l.jsx)(nr, {
                          id: nt,
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
var no = n(462180),
    nc = n(602034),
    nu = n(683438);
let nd = r.memo(function (e) {
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
        d = (0, eh.RQ)((e) => e.searchQuery),
        [m, f, E] = eg.Om.useStore((e) => [e.inspectedExpressionPosition, e.searchPlaceholder, e.hasInteracted], no.x),
        I = r.useCallback(
            (e) => {
                (eg.Om.setActiveCategoryIndex("" === e ? 0 : -1),
                    eg.Om.setInspectedExpressionPosition(0, 0),
                    eg.Om.setSearchPlaceholder(null),
                    (0, eh.Ri)(e),
                    t.current?.scrollTo(0));
            },
            [t],
        ),
        g = r.useCallback(() => {
            I("");
        }, [I]);
    return (
        r.useImperativeHandle(c, () => ({ focus: () => u.current?.focus() })),
        (0, l.jsx)(nu.I, {
            autoFocus: a,
            query: d,
            ref: u,
            placeholder: f ?? o,
            onClear: g,
            onKeyDown: function (e) {
                switch (e.key) {
                    case t9.dh.ARROW_LEFT:
                    case t9.dh.ARROW_RIGHT:
                    case t9.dh.ARROW_UP:
                    case t9.dh.ARROW_DOWN:
                        document.activeElement !== e.target && e.preventDefault();
                }
                i(e);
            },
            onFocus: s,
            onChange: I,
            inputProps: {
                role: "combobox",
                "aria-label": $.intl.string($.t.tCauZX),
                "aria-haspopup": "grid",
                "aria-autocomplete": "list",
                "aria-controls": n,
                "aria-expanded": !0,
                ...(E ? { "aria-activedescendant": (0, nc.Aq)(n, m.columnIndex, m.rowIndex) } : void 0),
            },
        })
    );
});
var nm = n(381575);
let nf = function (e) {
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
                (0, l.jsx)(nd, {
                    emojiListRef: r,
                    gridNavigatorId: tI.lq,
                    onKeyDown: a,
                    ref: d,
                    onFocus: c,
                    autoFocus: u,
                    defaultSearchPlaceholder: (0, eF.wT)(i, f),
                }),
                i === eW.EmojiIntention.REACTION ? (0, l.jsx)(tQ, { checked: f, onClick: E, buttonRef: I }) : null,
                n ?? (0, l.jsx)(na, { searchBarRef: d, className: nm.fx, selectedSurrogate: m }),
                i !== eW.EmojiIntention.NO_CUSTOM_EMOJI && h ? (0, l.jsx)(t4, { channel: t, closePopout: p }) : null,
            ],
        });
    return (0, l.jsx)("div", { className: o()(nm.wx, s), children: null != g ? g(A) : A });
};
var nE = n(182922),
    nI = n(363195),
    ng = n(486020),
    nh = n(977566);
function np(e) {
    return null != e && "animated" in e;
}
let nA = r.memo(function (e) {
    let t,
        i,
        { className: s, emojiGrid: a, guildId: o, pickerIntention: c, channel: u } = e,
        d = eg.Om.useStore((e) => e.inspectedExpressionPosition),
        f = r.useMemo(() => {
            let { rowIndex: e, columnIndex: t } = d;
            return a[e]?.[t];
        }, [a, d]);
    switch (f?.type) {
        case tC.EMOJI:
            t = f?.emoji;
            break;
        case tC.EXPAND_OR_COLLAPSE_EMOJIS:
            t = { type: "EXPAND_OR_COLLAPSE_EMOJI", guildId: f?.guildId, allNamesString: f?.name };
            break;
        default:
            t = null;
    }
    let E = (0, m.bG)([eS.A], () => (null !== t && t.type === T.i.GUILD ? eS.A.getGuild(t.guildId) : null), [t]),
        I = (0, m.bG)([ts.A], () => ts.A.isFocused()),
        g = (0, m.bG)([e6.Ay], () => e6.Ay.useReducedMotion, []),
        h = ew.Sf.useSetting(),
        p = (0, eF.O7)(o, np(t) ? t : null),
        A = (0, m.bG)([j.Ay], () => j.Ay.expandedSectionsByGuildIds),
        { newlyAddedEmojis: _ } = (0, eH.A)(o, c),
        N = f?.type === tC.EMOJI ? f.subCategory : tI.tm.NONE;
    if (
        (r.useEffect(() => {
            let e = Date.now();
            return () => {
                Date.now() - e >= 250 &&
                    np(t) &&
                    N !== tI.tm.NONE &&
                    (N === tI.tm.NEWLY_ADDED_EMOJI &&
                        null !== t &&
                        t.type === T.i.GUILD &&
                        (0, eI.mz)(t.guildId, _[0].id),
                    null != d.source &&
                        (0, eF.yB)({
                            emoji: t,
                            subCategory: N,
                            position: f.columnIndex + 1,
                            newlyAddedHighlight: N === tI.tm.NEWLY_ADDED_EMOJI && eE.isNewerThanLastSeen(o, t.id),
                        }));
            };
        }),
        null == t)
    )
        return null;
    let C = (function (e, t) {
            let { allowAnimatedEmoji: i, sectionsExpandedFromThreeRows: s, theme: r } = t;
            if (np(e)) {
                let t = null != e.id ? ng.Ay.getEmojiURL({ id: e.id, animated: i && e.animated, size: 28 }) : e.url;
                return "" === t
                    ? (0, l.jsx)(V.E, {
                          variant: "text-md/normal",
                          className: nh.J_,
                          children: "surrogates" in e ? e.surrogates : null,
                      })
                    : (0, l.jsx)("img", { alt: (0, eK.N)(e) ?? "", src: t, className: nh.Zg });
            }
            if ("EXPAND_OR_COLLAPSE_EMOJI" !== e.type) return null;
            {
                let t = n(619508),
                    i = n(404828),
                    a = n(600003),
                    o = n(318121);
                return s.has(e.guildId)
                    ? (0, l.jsx)("img", { className: nh.Kk, src: (0, eN.M)(r) ? a : o, alt: "" })
                    : (0, l.jsx)("img", { className: nh.Kk, src: (0, eN.M)(r) ? t : i, alt: "" });
            }
        })(t, { allowAnimatedEmoji: h, sectionsExpandedFromThreeRows: A, theme: nI.A.theme }),
        x =
            null != E
                ? (0, l.jsx)(th.A, { className: nh.__invalid_guildIcon, guild: E, shouldAnimate: !g && I })
                : null;
    i =
        "EXPAND_OR_COLLAPSE_EMOJI" === t.type
            ? A.has(t.guildId)
                ? $.intl.string($.t["/K2RDH"])
                : $.intl.string($.t.NZI2Zk)
            : (0, eK.N)(t);
    let y = (function (e) {
        let { inspectedEmoji: t, guild: n } = e,
            i = np(t);
        return null != n && i ? $.intl.format($.t.KFW2aY, { guildName: n.name }) : null;
    })({ inspectedEmoji: t, channel: u, guildId: o, intention: c, guild: E });
    return (0, l.jsx)(nE.A, {
        className: s,
        graphicPrimary: C,
        graphicSecondary: x,
        titlePrimary: i,
        titleSecondary: y,
        isFavorite: p,
        emojiSubCategory: N,
    });
});
n(30146);
var n_ = n(607399),
    nN = n(123292),
    nC = n(765178),
    nx = n(537652),
    ny = n(962125),
    nj = n(240864),
    nT = n(286509),
    nO = n(89366),
    nS = n(10392),
    nb = n(82498),
    nR = n(202639),
    nv = n(414872),
    nL = n(285373),
    nP = n(304072),
    nM = n(189551),
    nD = n(594061),
    nw = n(771104),
    nk = n(442433),
    nU = n(147421),
    nG = n(723702),
    nF = n(140735),
    nJ = n(194261),
    nV = n(703413);
let nK = (e) => {
    let { src: t, alt: n, size: i, "aria-label": s, className: a } = e,
        c = r.useRef(null),
        u = r.useRef(!1),
        d = u.current ? nV.S : nV.Y;
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
                          ((u.current = !0), c.current.classList.remove(nV.Y), c.current.classList.add(nV.S));
                  });
              },
    });
};
var nB = n(955388);
let nH = e5().memoize(
        (e) =>
            `${e * eW.EmojiSprites.NonDiversityPerRow}px ${e * Math.ceil(tA.Ay.numNonDiversitySprites / eW.EmojiSprites.NonDiversityPerRow)}px`,
    ),
    nW = e5().memoize(
        (e) =>
            `${e * eW.EmojiSprites.DiversityPerRow}px ${e * Math.ceil(tA.Ay.numDiversitySprites / eW.EmojiSprites.DiversityPerRow)}px`,
    ),
    nX = r.memo(function (e) {
        let { emoji: t, size: i, surrogateCodePoint: s, allowAnimatedEmoji: a, "aria-label": c, isLocked: u } = e,
            d = (() => {
                if (!t.useSpriteSheet) {
                    let e =
                        null == t.id
                            ? t.url
                            : ng.Ay.getEmojiURL({ id: t.id, animated: a && t.animated, size: eW.EMOJI_URL_BASE_SIZE });
                    return null != e
                        ? (0, l.jsx)(nK, {
                              className: nB.N1,
                              "aria-label": c,
                              src: e,
                              size: i,
                              alt: (0, eK.N)(t) ?? "",
                          })
                        : null;
                }
                return (0, l.jsx)("div", {
                    className: o()(nB.xA, { [nB.N1]: u }),
                    style: (function (e, t, i) {
                        let s, l, r;
                        if (!e.useSpriteSheet) return;
                        let a = null != e.index ? e.index : 0;
                        e.hasDiversity
                            ? ((s = n(12303)(`./spritesheet-${t}-${i}.png.js`).default),
                              (l = nW(i)),
                              (r = eW.EmojiSprites.DiversityPerRow))
                            : ((s = n(145519)(`./spritesheet-emoji-${i}.png.js`).default),
                              (l = nH(i)),
                              (r = eW.EmojiSprites.NonDiversityPerRow));
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
                    children: (0, l.jsx)(nF.A, { children: c }),
                });
            })();
        return (0, l.jsxs)(r.Fragment, {
            children: [
                d,
                u
                    ? (0, l.jsx)("div", {
                          className: nB.iD,
                          style: { width: i, height: i },
                          children: (0, l.jsx)(nJ.LockIcon, { size: "xs", color: "currentColor", className: nB.fi }),
                      })
                    : null,
            ],
        });
    });
var nz = n(537911);
function nZ(e) {
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
        N = (0, m.bG)([eS.A], () => (n.type === T.i.GUILD ? eS.A.getGuild(n.guildId) : void 0), [n]);
    return (0, l.jsx)(X.vN, {
        children: (0, l.jsx)("button", {
            ..._,
            className: o()(nz._X, { [nz.lG]: s, [nz.Lh]: r, [nz.Bx]: a, [h ?? ""]: a, [nz.TV]: u }),
            "data-type": ep.g.EMOJI,
            "data-id": n.id,
            "data-name": n.name,
            "data-surrogates": "surrogates" in n ? n.surrogates : null,
            "data-animated": n.animated ? "true" : null,
            ref: A,
            children: (0, l.jsx)(nX, {
                "aria-label":
                    ((t = (0, eK.N)(n)),
                    (N?.name != null &&
                        (t = $.intl.formatToPlainString($.t["nXv4/B"], { names: t, guildName: N.name })),
                    i)
                        ? $.intl.formatToPlainString($.t["9FI9Z0"], { names: t })
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
function nY(e) {
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
            isBurstReaction: y,
            rowPosition: T,
            inNitroLockedSection: O,
        } = e,
        [S, R] = r.useState(""),
        v = (0, m.bG)([e6.Ay], () => e6.Ay.useReducedMotion),
        L = (0, m.bG)([j.Ay], () => j.Ay.getDisambiguatedEmojiContext(o), [o]),
        P = r.useRef(null),
        { emoji: M, size: D, isDisabled: w, columnIndex: k } = t;
    function U() {
        d.current || f.current || c(t);
    }
    let { ref: G, tabIndex: F, onFocus: J, ...V } = h(k, a) ?? {},
        K =
            S !== `${k}:${a}`
                ? (0, l.jsx)(nZ, {
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
                              null != T &&
                              null != x &&
                              !e.shiftKey &&
                              null != M.name &&
                              y &&
                              !v &&
                              N
                          ) {
                              let e = null == M.id ? tA.Ay.convertNameToSurrogate(M.name) : M.name,
                                  t = P.current.getBoundingClientRect();
                              ((t.x = T.x + (k + 1) * D), R(`${k}:${a}`), (0, nU.h)(x, e, M.id, t));
                          }
                          !(function (e) {
                              if ((e.stopPropagation(), d.current || f.current)) return;
                              let n = e.altKey;
                              (n &&
                                  !j.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(M) &&
                                  C(i),
                                  (0, eD.sF)(eD._2.FAVORITE_EMOJI_TOOLTIP),
                                  u(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n }));
                          })(e);
                      },
                      onContextMenu: function (e) {
                          (0, nk.L3)(e, async () => {
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
                      inNitroLockedSection: O,
                  })
                : null;
    return (0, r.createElement)(
        "li",
        { ...V, key: i, ref: P },
        E
            ? (0, l.jsx)(b.m, {
                  text: $.intl.formatToPlainString($.t.glqNsf, { key: (0, nG.isMac)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: K,
              })
            : K,
    );
}
let n$ = (e) => {
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
        y = n(619508),
        j = n(404828),
        O = n(600003),
        S = n(318121),
        b = n(443336),
        R = n(258901),
        v = n(135974),
        L = n(8013),
        P = (0, ej.Ay)(),
        M = eg.Om.getState(),
        [D, w] = r.useState(M.inspectedExpressionPosition),
        [k, U] = (0, nP.A)(null, 300),
        G = r.useRef(null);
    (r.useEffect(
        () =>
            eg.Om.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => w(e),
            ),
        [],
    ),
        r.useEffect(() => {
            nD.bW.loadIfNecessary();
        }, []));
    let F = i === tI.as.LARGE,
        J = i === tI.as.MEDIUM;
    function K(e) {
        let t = `${e.rowIndex}c${e.columnIndex}`;
        switch (e.type) {
            case tC.EXPAND_OR_COLLAPSE_EMOJIS: {
                let { visibleRowIndex: n, columnIndex: i } = e,
                    c = D.rowIndex === n && D.columnIndex === i,
                    d = e.sectionCollapsedToThreeRows
                        ? c
                            ? (0, eN.M)(P)
                                ? R
                                : L
                            : (0, eN.M)(P)
                              ? y
                              : j
                        : c
                          ? (0, eN.M)(P)
                              ? b
                              : v
                          : (0, eN.M)(P)
                            ? O
                            : S,
                    I = $.intl.string(e.sectionCollapsedToThreeRows ? $.t.NZI2Zk : $.t["/K2RDH"]);
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
                        x = D.rowIndex === g && D.columnIndex === h;
                    function y() {
                        m.current || f.current || a(e);
                    }
                    return (0, r.createElement)(
                        "li",
                        { ...C, key: t },
                        (0, l.jsx)(X.vN, {
                            children: (0, l.jsx)("button", {
                                "aria-label": d,
                                ref: p,
                                className: o()(nz._X, {
                                    [nz.lG]: F,
                                    [nz.Lh]: J,
                                    [nz.Bx]: x && !I,
                                    [A ?? ""]: x,
                                    [nz.TV]: k === t,
                                }),
                                onFocus: N ?? y,
                                onMouseOver: y,
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
                        e.type !== tC.EXPAND_OR_COLLAPSE_EMOJIS ||
                            (t.stopPropagation(),
                            m.current ||
                                f.current ||
                                (s(e, { isFinalSelection: !0, toggleFavorite: !1 }),
                                (0, nM.G)(e.guildId),
                                e.sectionCollapsedToThreeRows || x(),
                                eU.default.track(ev.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                    collapsed: e.sectionCollapsedToThreeRows,
                                    guild_id: e.guildId,
                                })));
                    },
                    icon: (0, l.jsx)("img", { className: nz.Kk, src: d, alt: "" }),
                    ariaLabel: I,
                    shouldShowRoundHighlight: !0,
                });
            }
            case tC.EMOJI: {
                let { columnIndex: n, visibleRowIndex: i } = e,
                    r = D.rowIndex === i && D.columnIndex === n;
                return (0, l.jsx)(
                    nY,
                    {
                        rowIndex: E,
                        descriptor: e,
                        emojiItemKey: t,
                        isInspected: r,
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
                        pulseItemKey: k,
                        setPulseItemKey: U,
                        showEmojiFavoriteTooltip: g,
                        messageId: _,
                        isBurstReaction: N,
                        rowPosition: G?.current?.getBoundingClientRect(),
                        inNitroLockedSection: C,
                    },
                    t,
                );
            }
        }
    }
    function B(e) {
        return (0, l.jsx)("ul", {
            ...d(E),
            className: o()(nz.ND, { [nz.HO]: F, [nz.X$]: J }),
            ref: G,
            children: e.map(K),
        });
    }
    if (p !== tI.s.TOP_GUILD_EMOJI) return B(t);
    let H = t.filter(
            (e) =>
                e.subCategory === tI.tm.TOP_GUILD_EMOJI ||
                (e.subCategory === tI.tm.NEWLY_ADDED_EMOJI &&
                    e.emoji.type === T.i.GUILD &&
                    !eE.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
        ),
        W = t.filter(
            (e) =>
                e.subCategory === tI.tm.NEWLY_ADDED_EMOJI &&
                e.emoji.type === T.i.GUILD &&
                eE.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id),
        );
    return 0 === W.length
        ? B(t)
        : (0, l.jsxs)("div", {
              className: nz.Ng,
              children: [
                  (0, l.jsx)("div", { className: o()(nz.V6, { [nz.$3]: 0 === H.length }), children: B(H) }),
                  (0, l.jsxs)("div", {
                      className: nz.bc,
                      children: [
                          (0, l.jsx)("div", {
                              className: o()(nz.eE, { [nz.eM]: 1 === W.length, [nz.Wk]: H.length > 0 }),
                              children: B(W),
                          }),
                          (0, l.jsxs)("div", {
                              className: o()(nz.lD, { [nz.EI]: F, [nz.qU]: J, [nz.Wk]: H.length > 0 }),
                              children: [
                                  (0, l.jsx)(nw.A, { foreground: nz.rI }),
                                  (0, l.jsx)(V.E, {
                                      variant: "text-xs/semibold",
                                      color: "text-overlay-light",
                                      children: $.intl.string($.t.y2b7CA),
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
};
var nq = n(618723);
let nQ = (0, eG.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    n0 = (0, eG.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    n1 = (0, eG.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    n2 = (0, eG.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    n3 = (0, eG.xI)(E.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    n5 = (0, eG.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    n4 = (0, eG.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    n8 = r.memo(function (e) {
        let t,
            n,
            {
                diversitySurrogate: i,
                emojiGrid: s,
                emojiListRef: a,
                emojiSize: c,
                onEmojiSelect: u,
                onRemovePack: d,
                setUpsellConfigs: f,
                sectionDescriptors: E,
                rowCountBySection: I,
                collapsedSections: g,
                setCollapsedSections: h,
                getEmojiItemProps: A,
                getEmojiRowProps: _,
                rowCount: C,
                isUsingKeyboardNavigation: y,
                channelGuildId: j,
                messageId: T,
                isBurstReaction: O,
                listHeaderClassName: S,
            } = e,
            b = r.useRef(!1),
            R = eg.Om.useStore((e) => e.activeCategoryIndex),
            v = (0, eh.RQ)((e) => e.searchQuery),
            P = ew.Sf.useSetting(),
            M = (0, m.bG)([U.default], () => U.default.getCurrentUser()),
            D = (0, G.ki)(M),
            { location: w } = (0, p.p)(),
            { analyticsLocations: k } = (0, x.Ay)(),
            [F, J] = r.useState(0),
            [K, B] = r.useState(!1),
            {
                listPadding: H,
                renderRow: W,
                renderSection: X,
                renderSectionHeader: z,
                renderSectionFooter: Z,
                sectionMarginBottom: q,
                sectionHeaderHeight: Q,
                sectionFooterHeight: et,
            } = (function (e) {
                let {
                        collapsedSections: t,
                        diversitySurrogate: n,
                        emojiGrid: i,
                        emojiSize: s,
                        onEmojiSelect: a,
                        onRemovePack: c,
                        searchQuery: u,
                        sectionDescriptors: d,
                        setCollapsedSections: f,
                        getEmojiItemProps: E,
                        getEmojiRowProps: I,
                        isScrolling: g,
                        isUsingKeyboardNavigation: h,
                        allowAnimatedEmoji: A,
                        channelGuildId: _,
                        messageId: N,
                        isBurstReaction: C,
                        listHeaderClassName: x,
                        activeSectionIndex: y,
                        emojiListRef: j,
                    } = e,
                    T = (0, p.p)(),
                    O = r.useRef(ev.An1),
                    S = r.useMemo(() => ("" !== n ? t8.A.convert.toCodePoint(n) : ""), [n]),
                    b = r.useCallback(
                        (e) => {
                            let t = d[e],
                                n = d[e + 1];
                            return e >= d.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked;
                        },
                        [d],
                    ),
                    R = r.useCallback(
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
                                    eU.default.track(ev.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                        location: T.location,
                                        tab: eX.kx.EMOJI,
                                        collapsed: !s,
                                        guild_id: n.id,
                                    }),
                                f(i));
                        },
                        [T, t, f],
                    ),
                    P = r.useCallback((e) => {
                        let { columnIndex: t, visibleRowIndex: n } = e,
                            i = e.type === tC.EMOJI ? (0, eK.N)(e.emoji) : e.name;
                        (O.current !== ev.An1 && window.cancelAnimationFrame(O.current),
                            (O.current = window.requestAnimationFrame(() => {
                                (eg.Om.setInspectedExpressionPosition(t, n, ep.t.MOUSE_EVENT),
                                    eg.Om.setSearchPlaceholder(i),
                                    (O.current = ev.An1));
                            })));
                    }, []),
                    M = (0, m.bG)([eD.HP], () => eD.HP.hasHotspot(eD._2.FAVORITE_EMOJI_TOOLTIP), []),
                    D = r.useMemo(
                        () =>
                            e5().memoize((e, t) => {
                                let n = i[e],
                                    r = d[t.sectionIndex];
                                return (0, l.jsx)(
                                    n$,
                                    {
                                        emojiDescriptors: n,
                                        emojiSize: s,
                                        surrogateCodePoint: S,
                                        onInspect: P,
                                        onSelect: a,
                                        getEmojiItemProps: E,
                                        getEmojiRowProps: I,
                                        isScrolling: g,
                                        isUsingKeyboardNavigation: h,
                                        rowIndex: e,
                                        allowAnimatedEmoji: A,
                                        showEmojiFavoriteTooltip: M,
                                        channelGuildId: _,
                                        category: r.sectionId,
                                        selectedItemClassName: nq.__invalid_selectedItem,
                                        messageId: N,
                                        isBurstReaction: C,
                                        inNitroLockedSection: r.isNitroLocked,
                                        handleScrollUpOnSectionCollapse: function () {
                                            j.current?.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                                        },
                                    },
                                    e,
                                );
                            }),
                        [i, d, s, S, P, a, E, I, g, h, A, M, _, N, C, j],
                    );
                r.useEffect(() => () => D.cache?.clear?.(), [D]);
                let w = r.useMemo(
                        () =>
                            e5().memoize((e) => {
                                let n = d[e];
                                if (null == n) return;
                                let { guild: i, pack: s, categoryId: r, type: a, sectionId: u } = n;
                                if (a === tI.s.SEARCH_RESULTS) return;
                                let m = (function (e) {
                                        let { type: t, guild: n, categoryId: i } = e;
                                        return t === tI.s.PACK
                                            ? (0, l.jsx)(L.t, {
                                                  size: "custom",
                                                  color: "currentColor",
                                                  height: 16,
                                                  width: 16,
                                              })
                                            : t === tI.s.GUILD
                                              ? null == n
                                                  ? null
                                                  : (0, l.jsx)(th.A, { guild: n, height: 16, width: 16 })
                                              : null == i
                                                ? null
                                                : (0, l.jsx)(tg, {
                                                      categoryId: i,
                                                      height: 16,
                                                      width: 16,
                                                      size: "custom",
                                                  });
                                    })(n),
                                    f = s?.name ?? i?.name;
                                null != r && (f = (0, eF.Nu)(r, i?.name));
                                let E = y === e,
                                    I = n.isNitroLocked,
                                    g = I && !E,
                                    h = I && E,
                                    p =
                                        a === tI.s.PACK
                                            ? (0, l.jsx)("div", {
                                                  className: nq.uE,
                                                  children: (0, l.jsx)(nN.Q, {
                                                      text: $.intl.string(Y.default["2zxYCx"]),
                                                      textVariant: "text-sm/medium",
                                                      variant: "secondary",
                                                      "aria-label": `${$.intl.string(Y.default["2zxYCx"])} ${s.name}`,
                                                      onKeyDown: (e) => {
                                                          e.key !== t9.dh.ESCAPE && e.stopPropagation();
                                                      },
                                                      onClick: () => c(s.id),
                                                  }),
                                              })
                                            : void 0;
                                return (0, l.jsx)(
                                    nT.A,
                                    {
                                        className: o()(nq.wx, x, { [nq.RA]: g, [nq.sp]: h }),
                                        icon: m,
                                        isCollapsed: t.has(u),
                                        onClick: () => v(u, i),
                                        trailing: p,
                                        children: f,
                                    },
                                    u,
                                );
                            }),
                        [d, t, v, x, y, c],
                    ),
                    k = (0, t_.k0)(),
                    U = r.useCallback(
                        (e, n) => {
                            let i = d[e],
                                s = R(e),
                                r = b(e),
                                a = i.type === tI.s.PACK && 0 === i.count;
                            return (0, l.jsx)(
                                "div",
                                {
                                    role: "rowgroup",
                                    className: o()(nq.Wy, {
                                        [nq.YD]: e === d.length - 1,
                                        [nq.jl]: t.has(i.sectionId) || a,
                                        [nq.cW]: i.isNitroLocked,
                                        [nq.T5]: s || r,
                                    }),
                                    children: n,
                                },
                                e,
                            );
                        },
                        [t, d, R, b],
                    ),
                    G = r.useCallback(
                        (e) =>
                            R(e)
                                ? k
                                    ? (0, l.jsx)(nv.ap, {})
                                    : (0, l.jsx)(nv.Ay, {})
                                : b(e)
                                  ? (0, l.jsx)("div", { className: nq.pQ })
                                  : null,
                        [R, b, k],
                    ),
                    F = r.useCallback((e) => (R(e) ? 41 : 33 * !!b(e)), [R, b]),
                    J = r.useCallback(
                        (e) =>
                            e === d.length - 1 ||
                            t.has(d[e]?.sectionId) ||
                            (d[e]?.type === tI.s.PACK && d[e]?.count === 0) ||
                            R(e) ||
                            b(e)
                                ? 0
                                : n5,
                        [t, d, R, b],
                    );
                return {
                    listPadding: r.useMemo(() => ["" !== u ? n2 : nQ, n0, n1, 0], [u]),
                    renderRow: D,
                    renderSection: U,
                    renderSectionHeader: w,
                    renderSectionFooter: G,
                    sectionMarginBottom: J,
                    sectionHeaderHeight: r.useCallback((e) => (d[e].type === tI.s.SEARCH_RESULTS ? 0 : n3), [d]),
                    sectionFooterHeight: F,
                };
            })({
                collapsedSections: g,
                diversitySurrogate: i,
                emojiGrid: s,
                emojiSize: c,
                onEmojiSelect: u,
                onRemovePack: d,
                searchQuery: v,
                sectionDescriptors: E,
                setCollapsedSections: h,
                getEmojiItemProps: A,
                getEmojiRowProps: _,
                isScrolling: b,
                isUsingKeyboardNavigation: y,
                allowAnimatedEmoji: P,
                channelGuildId: j,
                messageId: T,
                isBurstReaction: O,
                listHeaderClassName: S,
                activeSectionIndex: F,
                emojiListRef: a,
            }),
            en = r.useCallback(
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
            en(a.current?.getScrollerNode()?.scrollTop ?? 0);
        }, [a, en, E, I, v]);
        let ei = (0, eA.Fk)({
            activeCategoryIndex: R,
            isScrolling: b,
            listRef: a,
            onActiveCategoryIndexChange: function (e) {
                "" === v && eg.Om.setActiveCategoryIndex(e);
            },
            scrollOffset: 0,
            searchQuery: v,
            disableForSearch: !1,
        });
        (0, eA.FV)({ searchQuery: v, activeCategoryIndex: R, listRef: a });
        let es = r.useCallback(
                (e) => {
                    (ei(e),
                        en(e),
                        n6({ emojiListRef: a, sectionDescriptors: E, scrollTop: e, searchQuery: v, setShowUpsell: B }));
                },
                [ei, en, a, E, v, B],
            ),
            el = E.length > 0;
        (r.useEffect(() => {
            K &&
                (eU.default.track(ev.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: ee.e.EMOJI_PICKER_FLOATING_UPSELL,
                    location: w,
                    location_stack: k,
                }),
                (0, nS.sq)(ev.U7l.PREMIUM_UPSELL_VIEWED, k, () => (0, nb.uq)(ee.e.EMOJI_PICKER_FLOATING_UPSELL)));
        }, [w, k, K]),
            r.useEffect(() => {
                "" !== v && B(!1);
            }, [v]));
        let er = r.useRef(null);
        return (
            r.useEffect(
                () => (
                    clearTimeout(er.current),
                    (er.current = setTimeout(() => {
                        (el
                            ? nC.O.announce($.intl.string($.t.uZ4F2O), "polite")
                            : nC.O.announce($.intl.string($.t.IxxiKF), "assertive"),
                            (er.current = null));
                    }, 200)),
                    () => {
                        clearTimeout(er.current);
                    }
                ),
                [el, v],
            ),
            (0, l.jsxs)("div", {
                className: nq.AD,
                children: [
                    el
                        ? (0, l.jsx)(ny.A, {
                              role: "none presentation",
                              className: nq.p_,
                              listPadding: H,
                              onScroll: es,
                              renderRow: W,
                              renderSection: X,
                              renderSectionHeader: z,
                              renderSectionFooter: Z,
                              rowCount: C,
                              rowCountBySection: I,
                              rowHeight: c + 2 * n4,
                              sectionHeaderHeight: Q,
                              sectionMarginBottom: q,
                              sectionFooterHeight: et,
                              stickyHeaders: !0,
                              ref: a,
                          })
                        : (0, l.jsx)(nx.A, {
                              message: (0, l.jsx)(V.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: $.intl.string($.t.IxxiKF),
                              }),
                              className: nq.BZ,
                          }),
                    D || n_.Fr
                        ? null
                        : (0, l.jsx)(nR.d, {
                              showUpsell: K,
                              text:
                                  ((t = (0, eQ.Dd)(ee.PremiumTypes.TIER_2)),
                                  $.intl.format($.t.gMVjeS, {
                                      nitroTierName: t,
                                      onClick: () => {
                                          f({ type: ty.PREMIUM, emojiDescriptor: void 0 });
                                      },
                                  })),
                              button: ((n = (0, nO.qD)()), (0, eQ.LE)(n, ee.pe.TIER_2) ?? $.intl.string($.t.BmJkbd)),
                              buttonAnalyticsObject: { section: ev.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                              leadingAction: (0, l.jsx)(nL.l, {
                                  size: "sm",
                                  className: nq.ij,
                                  location: N.A.PREMIUM_WISHLIST_EMOJI_UPSELL,
                              }),
                          }),
                ],
            })
        );
    }),
    n6 = e5().throttle(
        function (e) {
            let { emojiListRef: t, sectionDescriptors: n, scrollTop: i, searchQuery: s, setShowUpsell: l } = e;
            l(
                (0, nj.s)({ listRef: t, searchQuery: s, nitroLockedSectionStates: n, scrollTop: i })
                    .areOnlyNitroLockedSectionsVisible,
            );
        },
        300,
        { leading: !1, trailing: !0 },
    );
var n7 = n(506774),
    n9 = n(28863),
    ie = n(277984),
    it = n(404374),
    ii = n(780964),
    is = n(766075),
    il = n(166403),
    ir = n(506150);
let ia = "premiumRetentionEmojiPickerNotice",
    io = n7.w.get(ia),
    ic = function (e) {
        let { closePopout: t, channel: n } = e,
            [i, s] = r.useState(!1),
            { subscription: a, hasFetchedSubscriptions: o } = (0, m.cf)([il.A], () => ({
                subscription: il.A.getPremiumSubscription(),
                hasFetchedSubscriptions: il.A.hasFetchedSubscriptions(),
            }));
        if (
            (r.useEffect(() => {
                o || (0, ie.hP)();
            }, [o]),
            null == a || !(0, eQ.PK)(a.status) || i)
        )
            return null;
        let c = a.status === ev.Dmq.PAST_DUE ? (0, eQ.ji)(a).expiresDate : er()(a.currentPeriodStart).add(ee.ph),
            u = `${a.id}:${c.toISOString()}`;
        if (io === u) return null;
        let d =
            eQ.Ay.getPremiumType(a.planId) === ee.PremiumTypes.TIER_0
                ? it.k0.PREMIUM_TIER_0
                : eQ.Ay.getPremiumType(a.planId) === ee.PremiumTypes.TIER_1
                  ? it.k0.PREMIUM_TIER_1
                  : it.k0.PREMIUM_TIER_2;
        return (0, l.jsxs)(V.E, {
            variant: "text-xs/medium",
            color: "text-default",
            className: ir.g$,
            children: [
                (0, l.jsx)(L.t, { size: "md", className: ir.lu, color: d }),
                (0, l.jsxs)("div", {
                    className: ir.Xn,
                    children: [
                        (0, l.jsx)(V.E, {
                            variant: "text-xs/normal",
                            children: $.intl.format($.t.bTMjiO, {
                                planName: eQ.Ay.getTierDisplayNameByPlanId(a.planId),
                                endsAt: c.toDate(),
                            }),
                        }),
                        (0, l.jsx)("div", {
                            children: (0, l.jsx)(n9.Anchor, {
                                onClick: () => {
                                    ((0, eF.xf)(n), t(), (0, is.openUserSettings)(ii.X.NITRO_PANEL));
                                },
                                children: $.intl.string($.t.W3aavh),
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(eC.D, {
                    onClick: () => {
                        (n7.w.set(ia, u), (io = u), s(!0));
                    },
                    children: (0, l.jsx)(ex.P, { size: "md", color: "currentColor", className: ir.YF }),
                }),
            ],
        });
    };
var iu = n(148361);
let id = (0, eG.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    im = (0, eG.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT);
function iE(e) {
    return e.stopPropagation();
}
function iI(e, t) {
    eg.Om.setInspectedExpressionPosition(e, t, ep.t.GRID_NAVIGATOR_EVENT);
}
let ig = u()(eF.bo, 200),
    ih = u()(eF.Wi, 200),
    ip = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    iA = r.memo(function (e) {
        let t,
            n,
            i,
            s,
            a,
            {
                pickerIntention: c,
                channel: u,
                guildId: E,
                closePopout: S,
                emojiSize: b = tI.as.MEDIUM,
                hasTabWrapper: R = !1,
                onSelectEmoji: v,
                containerWidth: L,
                onNavigateAway: P,
                persistSearch: M,
                className: D,
                headerClassName: w,
                analyticsOverride: k = ip,
                searchProps: J = {},
                wrapper: V,
                shouldHidePickerActions: K = !1,
                messageId: B,
                renderHeader: H,
                listHeaderClassName: W,
                categoryListClassName: X,
                showOnlyUnicode: z = !1,
                showAddEmojiButton: Z,
                ref: Y,
                isViewingEmojiPacks: q = !1,
                onViewEmojiPacksChange: Q,
            } = e,
            { onFocus: et, onKeyDown: el, autoFocus: er = !0, accessory: ea } = J,
            eo = (0, m.bG)([ek.Ay], () => (null != E ? ek.Ay.getDefaultChannel(E) : null), [E]),
            [ec, eu] = r.useState(null),
            ed = r.useRef(""),
            em = (0, eh.RQ)((e) => e.searchQuery),
            ef = r.useRef(null),
            e_ = r.useRef(null),
            eN = r.useRef(null),
            eC = null != Q && !z && (0, e2.z)(c),
            ex = r.useCallback((e) => {
                (eN.current?.focus(), (0, O.M5)(e));
            }, []),
            ey =
                ((t = (0, m.bG)([F.A], () => (eC ? F.A.getPacks() : es), [eC])),
                (n = (0, m.bG)(
                    [ei.A],
                    () => (eC ? ei.A.frecencyWithoutFetchingLatest.pinnedEmojiPacks?.packIds : void 0),
                    [eC],
                )),
                r.useMemo(
                    () =>
                        eC && null != n && 0 !== n.length
                            ? n.map((e) => t.find((t) => t.id === e)).filter((e) => null != e)
                            : es,
                    [eC, t, n],
                ));
        null == u && null != eo && (u = eo);
        let ej = u?.getGuildId() ?? E ?? null,
            [eT, eO] = r.useState(!1),
            eb = r.useRef(null),
            eR = U.default.getCurrentUser(),
            eL = (0, G.ki)(eR),
            eP = eT && eL;
        r.useImperativeHandle(Y, () => ({ onPickerOpen: ts }));
        let { location: eG } = (0, p.p)(),
            { page: eJ, section: eV, object: eX, openPopoutType: eZ, popoutLocation: eY } = k,
            e$ = r.useMemo(() => ({ ...eG, section: eV ?? ev.JJy.EMOJI_PICKER_POPOUT }), [eG, eV]),
            { analyticsLocations: eq } = (0, x.Ay)(N.A.EMOJI_PICKER),
            { diversitySurrogate: eQ } = (0, m.cf)([j.Ay], () => ({ diversitySurrogate: j.Ay.diversitySurrogate })),
            e0 = (0, eF.sL)(em, u, c, z),
            e3 = null == e0 ? 0 : e0.locked.length + e0.unlocked.length,
            e4 = ew.iM.useSetting(),
            e8 = r.useMemo(() => new Set(e4), [e4]),
            e6 = r.useCallback((e) => {
                ew.iM.updateSetting(Array.from(e));
            }, []),
            e7 = (0, eA.oV)({
                gridWrapperRef: ef,
                containerWidth: L,
                showingEmptyState: q,
                listPaddingLeft: im,
                listScrollbarWidth: 8,
            }),
            {
                rowCountBySection: e9,
                sectionDescriptors: te,
                emojiGrid: tt,
                columnCounts: tn,
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
                        pinnedPacks: u,
                        showOnlyUnicode: d,
                    } = e,
                    f = (0, m.bG)([j.Ay], () => j.Ay.categories),
                    E = r.useMemo(() => (d ? tA.Ay.getCategories() : f), [f, d]),
                    I = (0, m.bG)([eS.A], () => eS.A.getGuild(t?.getGuildId()), [t]),
                    g = t?.getGuildId() ?? n,
                    h = (0, m.bG)([j.Ay], () => j.Ay.getDisambiguatedEmojiContext(g), [g]),
                    p = (0, eF.XI)(g),
                    A = (0, eF.Fj)(g),
                    _ = (0, eF.QZ)(g),
                    { topEmojis: N, newlyAddedEmojis: C } = (0, eH.A)(g, s),
                    x = (0, m.yK)([tN.Ay], () => tN.Ay.getFlattenedGuildIds(), []),
                    y = (0, m.bG)([j.Ay], () => j.Ay.expandedSectionsByGuildIds),
                    T = (0, m.bG)([U.default], () => U.default.getCurrentUser()),
                    O = (0, G.ki)(T),
                    S = (0, G.ki)(T, ee.PremiumTypes.TIER_2),
                    b = (0, t_.k0)(),
                    R = h.getGroupedCustomEmoji();
                return r.useMemo(() => {
                    let e = [],
                        n = [],
                        r = [],
                        d = [],
                        m = 0,
                        f = 0;
                    if (null != h && null != a) {
                        let T = Math.floor(a / (c + 2 * o)),
                            v = 3 * T;
                        function g(l, a) {
                            let o = new Map(),
                                u = i.has(a.sectionId),
                                [E, I] = e5().partition(l, (e) => {
                                    let n = eK.Ay.isEmojiDisabled({ emoji: e, channel: t, intention: s });
                                    return (o.set(e, n), !n);
                                }),
                                g = E.concat(I),
                                h = a.guild,
                                p = g.length > v && null != h && a.isNitroLocked,
                                A = p && !y.has(h.id);
                            A && g.splice(v - 1);
                            let _ = Math.ceil((p ? g.length + 1 : g.length) / T),
                                x = [];
                            for (let e = 0; e < _; e++) {
                                let t = e * T,
                                    n = t + T,
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
                                                a.sectionId === tI.s.TOP_GUILD_EMOJI
                                                    ? (0, eF.DA)(N, C, e.id ?? e.uniqueName ?? e.name)
                                                    : tI.tm.NONE,
                                        }));
                                if ((x.push(i), !u)) {
                                    if (p && e === _ - 1) {
                                        let t = x[e];
                                        t.push({
                                            type: 1,
                                            guildId: h.id,
                                            name: $.intl.string($.t.NZI2Zk),
                                            size: c,
                                            rowIndex: e,
                                            columnIndex: t.length,
                                            visibleRowIndex: m,
                                            sectionCollapsedToThreeRows: A,
                                        });
                                    }
                                    (d.push(i.length), r.push(i), m++);
                                }
                                f++;
                            }
                            let j = { ...a, count: l.length };
                            (n.push(j), e.push(u ? 0 : _));
                        }
                        if (null != l)
                            (0 !== l.unlocked.length &&
                                g(l.unlocked, {
                                    type: tI.s.SEARCH_RESULTS,
                                    sectionId: tI.s.SEARCH_RESULTS,
                                    count: l.unlocked.length,
                                    isNitroLocked: !1,
                                }),
                                0 !== l.locked.length &&
                                    g(l.locked, {
                                        type: tI.s.PREMIUM_UPSELL,
                                        categoryId: tI.R2.PREMIUM_UPSELL,
                                        sectionId: tI.s.PREMIUM_UPSELL,
                                        count: l.locked.length,
                                        isNitroLocked: !O,
                                    }));
                        else {
                            let e = E.includes(tI.R2.CUSTOM) ? tI.R2.CUSTOM : tA.Ay.getCategories()[0];
                            for (let n of E) {
                                if (n === e)
                                    for (let e of u) {
                                        let t = e5().compact(
                                            e.emojis.map((e) => {
                                                let { id: t } = e;
                                                return h.getById(t);
                                            }),
                                        );
                                        g(t, {
                                            type: tI.s.PACK,
                                            pack: e,
                                            sectionId: `pack:${e.id}`,
                                            count: t.length,
                                            isNitroLocked: !S,
                                        });
                                    }
                                if (n === tI.R2.CUSTOM) {
                                    function j(e) {
                                        let i = R.get(e);
                                        if (null == i) return;
                                        let l = i.filter(
                                            (n) =>
                                                !tx.includes(
                                                    eK.Ay.getEmojiUnavailableReason({
                                                        emoji: n,
                                                        channel: t ?? ek.Ay.getDefaultChannel(e),
                                                        intention: s,
                                                    }),
                                                ),
                                        );
                                        if (0 === l.length) return;
                                        let r = eS.A.getGuild(e),
                                            a =
                                                b ||
                                                (!O &&
                                                    eK.Ay.isEmojiCategoryNitroLocked({
                                                        categoryEmojis: l,
                                                        channel: t,
                                                        intention: s,
                                                    }));
                                        g(l, {
                                            categoryId: n,
                                            guild: r,
                                            type: tI.s.GUILD,
                                            sectionId: null != r ? r.id : (0, tp.A)(),
                                            count: l.length,
                                            isNitroLocked: a,
                                        });
                                    }
                                    if ((null != I && j(I.id), (0, eW.isExternalEmojiAllowedForIntention)(s)))
                                        for (let e of x) (null == I || I.id !== e) && j(e);
                                } else if (n === tI.R2.TOP_GUILD_EMOJI) {
                                    if (null != I) {
                                        let { allEmojis: e } = (0, eB.W)({ topEmojis: N, newlyAddedEmojis: C });
                                        e.length > 0 &&
                                            g(e, {
                                                categoryId: n,
                                                guild: eS.A.getGuild(I.id),
                                                type: tI.s.TOP_GUILD_EMOJI,
                                                sectionId: tI.s.TOP_GUILD_EMOJI,
                                                count: e.length,
                                                isNitroLocked: !1,
                                            });
                                    }
                                } else if (n === tI.R2.RECENT) {
                                    let e = (s === eW.EmojiIntention.REACTION ? _ : A).filter(
                                        (e) => !eK.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }),
                                    );
                                    g(e, {
                                        categoryId: n,
                                        type: tI.s.RECENT,
                                        sectionId: tI.s.RECENT,
                                        count: e.length,
                                        isNitroLocked: !1,
                                    });
                                } else if (n === tI.R2.FAVORITES) {
                                    let e = p.filter(
                                        (e) => !eK.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }),
                                    );
                                    0 !== e.length &&
                                        g(e, {
                                            categoryId: n,
                                            type: tI.s.FAVORITES,
                                            sectionId: tI.s.FAVORITES,
                                            count: e.length,
                                            isNitroLocked: !1,
                                        });
                                } else {
                                    let e = tA.Ay.getByCategory(n);
                                    null != e &&
                                        g(e, {
                                            categoryId: n,
                                            type: tI.s.UNICODE,
                                            sectionId: n,
                                            count: e.length,
                                            isNitroLocked: !1,
                                        });
                                }
                            }
                        }
                    }
                    return { columnCounts: d, emojiGrid: r, rowCountBySection: e, sectionDescriptors: n };
                }, [h, a, c, o, l, i, R, y, t, s, N, C, O, S, E, I, x, u, _, A, p, b]);
            })({
                gridWidth: e7,
                fallbackGuildId: ej,
                channel: u,
                pickerIntention: c,
                emojiSearchResults: e0,
                collapsedSections: e8,
                emojiPaddingHorizontal: id,
                emojiSpriteSize: b,
                pinnedPacks: ey,
                showOnlyUnicode: z,
            }),
            { newlyAddedEmojis: ti } = (0, eH.A)(ej, c);
        ((i = r.useRef({ intention: c, isBurstReaction: eT, analyticsObject: eX })),
            r.useEffect(() => {
                i.current.intention === eW.EmojiIntention.REACTION && ez(i.current);
            }, []));
        let ts = r.useCallback(() => {
                let e = ti.length > 0 ? ti[0].id : null;
                ((0, eI.uV)(ej, e), ez({ intention: c, isBurstReaction: eT, analyticsObject: eX }));
            }, [ti, ej, c, eT, eX]),
            tl = (function (e) {
                let {
                        pickerIntention: t,
                        selectedChannel: n,
                        fallbackGuildId: i,
                        onSelectEmoji: s,
                        setUpsellConfigs: l,
                        emojiSelectAnalytics: a,
                        trackEmojiFavorited: o,
                    } = e,
                    c = (0, m.bG)([j.Ay], () => j.Ay.getDisambiguatedEmojiContext(n?.getGuildId() ?? i), [i, n]);
                return r.useCallback(
                    (e, i) => {
                        if (0 === e.type) {
                            let { emoji: r } = e;
                            if (null == r) return;
                            let u = eK.Ay.getEmojiUnavailableReason({ emoji: r, channel: n, intention: t });
                            if (i.toggleFavorite)
                                return void (c.isFavoriteEmojiWithoutFetchingLatest(r) || null != u
                                    ? (0, g.Sw)(r)
                                    : (o?.(e), (0, g.V4)(r)));
                            if (u !== eW.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) {
                                if (u === eW.EmojiDisabledReasons.PREMIUM_LOCKED) {
                                    (a?.(e, u), l({ type: 0, emojiDescriptor: e }));
                                    return;
                                }
                                if (u === eW.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED && r.type === T.i.GUILD) {
                                    (a?.(e, u), l({ type: 1, guildId: r.guildId, emojiId: r.id }));
                                    return;
                                }
                                u !== eW.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE &&
                                    (a?.(e), s({ emoji: r, willClose: i.isFinalSelection, isBurst: i.isBurst }));
                            }
                        }
                    },
                    [n, t, s, l, c, a, o],
                );
            })({
                pickerIntention: c,
                selectedChannel: u,
                fallbackGuildId: ej,
                closePopout: S,
                onSelectEmoji: v,
                setUpsellConfigs: (e) => {
                    (null != e && q && Q?.(!1), eu(e));
                },
                emojiSelectAnalytics: (e, t) => {
                    "" !== em
                        ? (0, eF.Wf)({
                              emoji: e.emoji,
                              location: { ...e$, object: ev.ZSU.EMOJI },
                              searchQuery: em,
                              isLocked: null != t,
                              intention: c,
                              messageId: B,
                          })
                        : (0, eF._7)({
                              emoji: e.emoji,
                              location: { ...e$, object: eX ?? ev.ZSU.EMOJI, ...(null != eJ && { page: eJ }) },
                              pickerIntention: c,
                              category: e.category,
                              subCategory: e.subCategory,
                              position: e.columnIndex + 1,
                              newlyAddedHighlight:
                                  e.subCategory === tI.tm.NEWLY_ADDED_EMOJI && eE.isNewerThanLastSeen(ej, e.emoji.id),
                              isBurstReaction: eT,
                              messageId: B,
                              lockedReason: t,
                              visibleRowIndex: e.visibleRowIndex,
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, eF.C5)({ emoji: e.emoji, location: { ...e$, object: ev.ZSU.EMOJI } });
                },
            }),
            tr = r.useCallback(() => {
                (S(), P?.());
            }, [S, P]),
            {
                getItemProps: ta,
                getRowProps: to,
                gridContainerProps: tc,
                handleGridContainerKeyDown: tu,
                isUsingKeyboardNavigation: td,
            } = (function (e) {
                let {
                        analyticsLocation: t,
                        pickerIntention: n,
                        columnCounts: i,
                        onSelectEmoji: s,
                        onSelectPackEmoji: l,
                        emojiGrid: a,
                        emojiList: o,
                        channelGuildId: c,
                        isBurstReaction: u,
                    } = e,
                    f = (0, m.bG)([j.Ay], () => j.Ay.getDisambiguatedEmojiContext(c), [c]),
                    E = r.useCallback(
                        (e, i) => {
                            if (e.type === tC.EMOJI) {
                                if (e.emoji.type === T.i.PACK)
                                    return void l(e, {
                                        isFinalSelection: !i.shiftKey,
                                        toggleFavorite: i.altKey,
                                        isBurst: u,
                                    });
                                if (null != e.emoji && i.altKey)
                                    return void (f.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                        ? (0, g.Sw)(e.emoji)
                                        : ((0, eF.C5)({ emoji: e.emoji, location: { ...t, object: ev.ZSU.EMOJI } }),
                                          (0, g.V4)(e.emoji)));
                                let r = {
                                    page: null != c ? ev.liQ.GUILD_CHANNEL : ev.liQ.DM_CHANNEL,
                                    section: ev.JJy.EMOJI_PICKER_POPOUT,
                                    object: ev.ZSU.EMOJI,
                                };
                                (u &&
                                    (r = {
                                        page: null != c ? ev.liQ.GUILD_CHANNEL : ev.liQ.DM_CHANNEL,
                                        section: ev.JJy.EMOJI_PICKER_POPOUT,
                                        object: ev.ZSU.EMOJI,
                                    }),
                                    (0, eF._7)({
                                        emoji: e.emoji,
                                        location: r,
                                        pickerIntention: n,
                                        category: e.category,
                                        subCategory: e.subCategory,
                                        newlyAddedHighlight:
                                            e.subCategory === tI.tm.NEWLY_ADDED_EMOJI &&
                                            eE.isNewerThanLastSeen(c, e.emoji.id),
                                    }),
                                    s({ emoji: e.emoji, willClose: !i.shiftKey, isBurst: u }));
                            }
                        },
                        [s, l, c, n, f, t, u],
                    ),
                    {
                        gridDispatch: I,
                        getItemProps: h,
                        getRowProps: p,
                        gridContainerProps: A,
                        handleGridContainerKeyDown: _,
                        isUsingKeyboardNavigation: N,
                    } = (0, eA.Ff)({
                        columnCounts: i,
                        gridNavigatorId: tI.lq,
                        itemGrid: a,
                        itemList: o,
                        onGridNavigatorItemSelect: E,
                        onGridNavigatorPositionChange: iI,
                    });
                return (
                    r.useEffect(
                        () =>
                            eg.Om.subscribe(
                                (e) => e.inspectedExpressionPosition,
                                (e) => {
                                    if (null == e) return;
                                    let { columnIndex: t, rowIndex: n, source: i } = e;
                                    i !== ep.t.GRID_NAVIGATOR_EVENT &&
                                        I({ type: d.n.SET_FOCUSED_POSITION, x: t, y: n });
                                },
                            ),
                        [I],
                    ),
                    {
                        getItemProps: h,
                        getRowProps: p,
                        gridContainerProps: A,
                        handleGridContainerKeyDown: _,
                        isUsingKeyboardNavigation: N,
                    }
                );
            })({
                pickerIntention: c,
                analyticsLocation: e$,
                columnCounts: tn,
                onSelectEmoji: v,
                onSelectPackEmoji: tl,
                emojiGrid: tt,
                emojiList: e_,
                channelGuildId: ej,
                isBurstReaction: eP,
            });
        (((e, t) => {
            let [n, i] = r.useState(null);
            (r.useEffect(() => {
                null != n && (t.current?.scrollToSectionTop(n), i(null));
            }, [t, n]),
                r.useEffect(() => {
                    i(eg.Om.getState().activeCategoryIndex);
                }, [e]));
        })(L, e_),
            r.useLayoutEffect(() => {
                er && eN.current?.focus();
            }, [L, eQ, eN, er]),
            (s = r.useRef(q)),
            r.useEffect(() => {
                (er && s.current && !q && eN.current?.focus(), (s.current = q));
            }, [er, q, eN]),
            r.useEffect(() => {
                M || (0, eh.Ri)("");
            }, [M]),
            r.useEffect(
                () => (
                    eU.default.track(ev.HAw.OPEN_POPOUT, {
                        type: eZ ?? "Emoji Picker",
                        guild_id: ej,
                        location: eY,
                        ...(0, C.dI)(u),
                    }),
                    () => {
                        (ig.cancel(), ih.cancel());
                    }
                ),
                [eZ, ej, eY, u],
            ),
            (0, A.Ay)(() => ((0, eF.V$)({ intention: c, location: e$ }), (ed.current = em), eg.Om.resetStoreState)),
            r.useEffect(() => () => (0, eD.sF)(eD._2.FAVORITE_EMOJI_TOOLTIP), []),
            r.useLayoutEffect(() => {
                let { columnIndex: e, rowIndex: t } = eg.Om.getState().inspectedExpressionPosition;
                tt[t]?.[e] == null && 0 !== e && eg.Om.setInspectedExpressionPosition(0, 0);
            }, [tt]),
            r.useEffect(() => {
                if (("" === ed.current && "" !== em && (0, eF.EG)(e$, c), "" !== em && ed.current !== em)) {
                    let e = eg.Om.getAnalyticsId();
                    0 === e3
                        ? ig({ location: e$, searchQuery: em, intention: c, loadId: e })
                        : ih({
                              totalResults: e3,
                              numEmojiLocked: e0?.locked.length ?? 0,
                              location: e$,
                              searchQuery: em,
                              intention: c,
                              loadId: e,
                          });
                }
                ed.current = em;
            }, [em, e$, e3, e0, c]));
        let tm = V ?? (R ? "div" : I.l),
            tf = null != e7;
        function tE(e, t) {
            tl(e, { ...t, isBurst: eP });
        }
        ec?.type === ty.PREMIUM
            ? (a = (0, l.jsx)(iu.default, {
                  onUpsellClicked: tr,
                  emojiDescriptor: ec.emojiDescriptor,
                  pickerIntention: c,
                  analyticsLocation: e$,
                  onClose: () => eu(null),
                  channel: u,
              }))
            : ec?.type === ty.ROLE_SUBSCRIPTION &&
              (a = (0, l.jsx)(eM, { onClose: () => eu(null), guildId: ec.guildId, emojiId: ec.emojiId }));
        let tg = (0, _.A)((e, t, n) => {
                tE(
                    {
                        type: tC.EMOJI,
                        emoji: e,
                        isDisabled: !e.available,
                        size: b,
                        rowIndex: 0,
                        columnIndex: t,
                        visibleRowIndex: 0,
                        category: tI.s.PACK,
                        subCategory: tI.tm.NONE,
                    },
                    n,
                );
            }),
            th = (0, l.jsx)(nf, {
                channel: u,
                pickerIntention: c,
                emojiListRef: e_,
                onKeyDown: (e) => {
                    (tu?.(e), el?.(e));
                },
                searchBarRef: eN,
                onFocus: et,
                autoFocus: er,
                accessory: ea,
                headerClassName: w,
                diversitySurrogate: eQ,
                isBurstReaction: eT,
                onBurstReactionToggle: function () {
                    (eO(!eT), eN.current?.focus());
                },
                burstToggleRef: eb,
                renderHeader: H,
                showAddEmojiButton: Z,
                closePopout: S,
            }),
            tj = [];
        j.Ay.hasFavoriteEmojis(ej) || tj.push(f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let tT = (0, l.jsxs)(r.Fragment, {
                children: [
                    R ? th : null,
                    (0, l.jsxs)("div", {
                        className: nm.uK,
                        ref: ef,
                        children: [
                            (0, l.jsx)(ic, { channel: u, closePopout: S }),
                            (0, l.jsx)(y.Ay, {
                                contentTypes: tj,
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    if (t === f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                        return (0, l.jsx)(tH, { markAsDismissed: () => n(tK.i.UNKNOWN) });
                                },
                            }),
                            K
                                ? null
                                : (0, l.jsx)("div", {
                                      className: nm.Iy,
                                      id: tI.lq,
                                      ...tc,
                                      children: tf
                                          ? (0, l.jsx)(n8, {
                                                collapsedSections: e8,
                                                diversitySurrogate: eQ,
                                                emojiGrid: tt,
                                                emojiListRef: e_,
                                                emojiSize: b,
                                                getEmojiItemProps: ta,
                                                getEmojiRowProps: to,
                                                gridWidth: e7,
                                                isUsingKeyboardNavigation: td,
                                                onEmojiSelect: tE,
                                                onRemovePack: ex,
                                                setUpsellConfigs: eu,
                                                rowCount: tt.length,
                                                rowCountBySection: e9,
                                                sectionDescriptors: te,
                                                setCollapsedSections: e6,
                                                channelGuildId: ej,
                                                messageId: B,
                                                isBurstReaction: eP,
                                                listHeaderClassName: W,
                                            })
                                          : null,
                                  }),
                        ],
                    }),
                    (0, l.jsx)(nA, { emojiGrid: tt, className: nm.qV, guildId: ej, pickerIntention: c, channel: u }),
                    a,
                    c === eW.EmojiIntention.REACTION
                        ? (0, l.jsx)(e1, { targetElementRef: eb, shouldShow: eT && !eL, onDismiss: () => eO(!1) })
                        : null,
                ],
            }),
            tO = (0, l.jsx)(h.A, {
                ...e$,
                children: (0, l.jsxs)(tm, {
                    id: tI.Do,
                    "aria-labelledby": R && !q ? tI.k1 : void 0,
                    role: R && !q ? "tabpanel" : void 0,
                    className: o()(nm.iE, { [nm.r6]: R, [nm.cB]: eP }),
                    children: [
                        R || q ? null : th,
                        (0, l.jsx)("div", {
                            className: o()(nm.Fb, D, { [nm.eW]: q && !R }),
                            onScroll: iE,
                            children: q ? (0, l.jsx)(en, { onBack: () => Q?.(!1), onSelectEmoji: tg }) : tT,
                        }),
                        K || q
                            ? null
                            : (0, l.jsx)(tV, {
                                  className: o()(nm.jv, X),
                                  emojiListRef: e_,
                                  sectionDescriptors: te,
                                  intention: c,
                                  channel: u,
                                  fallbackGuildId: ej,
                                  showOnlyUnicode: z,
                                  pinnedPacks: ey,
                                  onViewEmojiPacks: eC ? () => Q?.(!0) : void 0,
                              }),
                    ],
                }),
            });
        return (0, l.jsx)(x.f5, { value: eq, children: tO });
    });
