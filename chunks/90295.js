(n.d(t, { A: () => iE }), n(321073));
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
    T = n(379848),
    y = n(236285),
    j = n(331322),
    O = n(866665),
    S = n(408278),
    b = n(477155),
    R = n(403581),
    v = n(661531),
    L = n(297264),
    M = n(62010),
    P = n(465794),
    D = n(683973),
    w = n(287809),
    k = n(474090),
    U = n(934499),
    G = n(182159),
    F = n(118057),
    J = n(834730),
    V = n(847374),
    K = n(320448),
    B = n(834040),
    H = n(499373),
    W = n(559106),
    X = n(565645),
    z = n(915089),
    Z = n(732447),
    Y = n(105292),
    $ = n(126904);
let q = r.memo(function (e) {
    let { pack: t, isPinned: n, onAddPack: i, onRemovePack: s, onSelectEmoji: a } = e,
        c = r.useId(),
        u = r.useId(),
        [d, m] = r.useState(!1),
        f = Y.intl.string(d ? Y.t.iTcuma : Y.t.dcl9MQ),
        E = Y.intl.string(n ? Z.default["2zxYCx"] : Z.default.Tvdb5N),
        I = r.useMemo(() => t.emojis.filter((e) => e.available), [t.emojis]),
        g = r.useMemo(() => [I.length], [I.length]),
        h = (0, z.GV)(),
        {
            getContainerProps: p,
            getItemProps: A,
            getRowProps: _,
        } = (0, F.A)({
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
        className: $.nM,
        children: [
            (0, l.jsxs)(j.B, {
                align: "center",
                direction: "horizontal",
                gap: 4,
                justify: "space-between",
                children: [
                    (0, l.jsxs)(j.B, {
                        align: "center",
                        className: $.DD,
                        direction: "horizontal",
                        gap: 4,
                        children: [
                            (0, l.jsx)(L.D, { className: $.UU, id: c, variant: "text-xs/bold", children: t.name }),
                            (0, l.jsx)(J.E, {
                                color: "text-subtle",
                                variant: "text-xs/medium",
                                children: Y.intl.format(Z.default.UA8cNe, { count: I.length }),
                            }),
                            (0, l.jsx)(O.m, {
                                text: f,
                                children: (0, l.jsx)(S.K, {
                                    "aria-controls": u,
                                    "aria-describedby": c,
                                    "aria-expanded": d,
                                    "aria-label": f,
                                    icon: d ? V.a : K._,
                                    onClick: () => m((e) => !e),
                                    size: "sm",
                                    variant: "icon-only",
                                }),
                            }),
                        ],
                    }),
                    (0, l.jsx)(O.m, {
                        text: E,
                        children: (0, l.jsx)(S.K, {
                            "aria-label": E,
                            icon: n ? B.MinusIcon : H.T,
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
                className: o()($.gm, { [$.jE]: d }),
                tabIndex: t.available && I.length > 0 ? N.tabIndex : -1,
                children: (0, l.jsx)("div", {
                    className: $.nI,
                    ..._(0),
                    children: I.map((e, n) => {
                        let { ref: i, ...s } = A(n, 0);
                        return (0, l.jsx)(
                            O.m,
                            {
                                text: `:${e.name}:`,
                                ariaHidden: !0,
                                asContainer: !0,
                                children: (0, l.jsx)(W.vN, {
                                    children: (0, l.jsx)("button", {
                                        ...s,
                                        ref: i,
                                        "aria-label": `:${e.name}:`,
                                        className: $.Z8,
                                        disabled: !t.available,
                                        onClick: (t) => {
                                            (t.stopPropagation(),
                                                a(e, n, { isFinalSelection: !t.shiftKey, toggleFavorite: t.altKey }));
                                        },
                                        type: "button",
                                        children: (0, l.jsx)(X.A, {
                                            animated: e.animated,
                                            alt: "",
                                            className: $.Zg,
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
var Q = n(202541),
    ee = n(429800);
function et(e) {
    let { onBack: t, onSelectEmoji: n } = e,
        i = Y.intl.string(Z.default.Nwj3fK),
        s = r.useRef(null),
        a = (0, m.bG)([G.A], () => G.A.getPacks()),
        o = (0, m.bG)([w.default], () => w.default.getCurrentUser()),
        c = (0, k.ki)(o, Q.PremiumTypes.TIER_2);
    r.useLayoutEffect(() => {
        s.current?.focus();
    }, []);
    let u = (0, D.k)().pinnedEmojiPacks?.packIds,
        d = r.useCallback((e) => {
            (0, U.Ls)(e.id);
        }, []),
        f = r.useCallback((e) => {
            (0, U.M5)(e.id);
        }, []);
    return (0, l.jsxs)("div", {
        className: ee.kL,
        children: [
            (0, l.jsx)("div", { "aria-hidden": !0, className: ee.Tp }),
            (0, l.jsx)("div", {
                className: ee.wx,
                children: (0, l.jsxs)(j.B, {
                    align: "center",
                    direction: "horizontal",
                    gap: 8,
                    justify: "space-between",
                    wrap: !0,
                    children: [
                        (0, l.jsxs)(j.B, {
                            align: "center",
                            direction: "horizontal",
                            gap: 10,
                            fullWidth: !1,
                            children: [
                                (0, l.jsx)(O.m, {
                                    position: "right",
                                    text: i,
                                    children: (0, l.jsx)(S.K, {
                                        "aria-label": i,
                                        buttonRef: s,
                                        icon: b.r,
                                        onClick: t,
                                        size: "sm",
                                        variant: "icon-only",
                                    }),
                                }),
                                (0, l.jsxs)(j.B, {
                                    align: "center",
                                    direction: "horizontal",
                                    gap: 4,
                                    fullWidth: !1,
                                    children: [
                                        (0, l.jsx)(R.t, { color: v.A.colors.TEXT_DEFAULT, size: "xs" }),
                                        (0, l.jsxs)(j.B, {
                                            align: "center",
                                            direction: "horizontal",
                                            gap: 8,
                                            fullWidth: !1,
                                            children: [
                                                (0, l.jsx)(L.D, {
                                                    variant: "heading-md/semibold",
                                                    children: Y.intl.string(Z.default["0+5+Oy"]),
                                                }),
                                                (0, l.jsx)(M.E, { type: "beta", variant: "primary" }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        c
                            ? null
                            : (0, l.jsx)(P.A, {
                                  buttonTextOverride: Y.intl.string(Y.t.hIVbiP),
                                  size: "sm",
                                  subscriptionTier: Q.pe.TIER_2,
                              }),
                    ],
                }),
            }),
            (0, l.jsx)("div", {
                className: ee.p_,
                children: a.map((e, t) =>
                    (0, l.jsxs)(
                        r.Fragment,
                        {
                            children: [
                                t > 0 ? (0, l.jsx)("hr", { className: ee.yF }) : null,
                                (0, l.jsx)(q, {
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
var en = n(536637),
    ei = n.n(en),
    es = n(73153),
    el = n(935208);
let er = { lastSeenNewlyAddedEmojiIds: {} },
    ea = er,
    eo = {};
function ec() {
    for (let e in eo) ea.lastSeenNewlyAddedEmojiIds[e] = eo[e];
}
class eu extends m.Ay.PersistedStore {
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
        ea = e ?? er;
    }
    getState() {
        return ea;
    }
    getLastSeenEmojiByGuild(e) {
        return ea.lastSeenNewlyAddedEmojiIds[e];
    }
    isNewerThanLastSeen(e, t) {
        if (null == e || null == t) return !1;
        let n = this.getLastSeenEmojiByGuild(e);
        if (null == n || el.default.compare(t, n.id) > 0) return !0;
        {
            let e = ei()(n.lastSeen);
            return ei()().isBefore(e.add(2, "weeks")) && !n.acknowledged;
        }
    }
}
let ed = new eu(es.h, {
    LOGOUT: function () {
        ((ea = er), (eo = {}));
    },
    NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = eo[t] ?? ea.lastSeenNewlyAddedEmojiIds[t];
        null == i || 0 > el.default.compare(i.id, n)
            ? (eo[t] = { id: n, lastSeen: Date.now(), acknowledged: !0 })
            : (eo[t] = { ...i, acknowledged: !0 });
    },
    NEWLY_ADDED_EMOJI_SEEN_PENDING: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = eo[t] ?? ea.lastSeenNewlyAddedEmojiIds[t];
        (null == i || 0 > el.default.compare(i.id, n)) && (eo[t] = { id: n, lastSeen: Date.now(), acknowledged: !1 });
    },
    NEWLY_ADDED_EMOJI_SEEN_UPDATED: ec,
    CLEAR_CACHES: function () {
        ((ea = er), ec());
    },
    CONNECTION_CLOSED: ec,
});
var em = n(451731),
    ef = n(850992),
    eE = n(151271),
    eI = n(60587),
    eg = n(887695),
    eh = n(562708),
    ep = n(462887),
    eA = n(939249),
    e_ = n(789645),
    eN = n(696986),
    eC = n(736653),
    ex = n(139286),
    eT = n(976860),
    ey = n(71393),
    ej = n(384684),
    eO = n(985242),
    eS = n(652215),
    eb = n(746080),
    eR = n(196404);
function ev(e) {
    let t,
        { onClose: i, guildId: s, emojiId: r } = e,
        a = ((t = (0, eC.Ay)()), (0, ep.q)(t) ? n(454333) : n(674463)),
        { analyticsLocations: o } = (0, x.Ay)(N.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, ex.A)({
        type: eh.ImpressionTypes.MODAL,
        name: eh.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: { location_stack: o, emoji_guild_id: s, emoji_id: r ?? null },
    });
    let c = (0, m.bG)([ey.A], () => ey.A.getGuild(s)),
        u = (0, m.bG)([ej.A], () => null != s && ej.A.getUserSubscriptionRoles(s).size > 0),
        d = u ? Y.intl.string(Y.t.GoLM9z) : Y.intl.formatToPlainString(Y.t["h0u/Hi"], { serverName: c?.name }),
        f = u ? Y.intl.string(Y.t.PjZ7Db) : Y.intl.string(Y.t.p8FG1D);
    return (0, l.jsxs)("div", {
        className: eR.kL,
        children: [
            (0, l.jsx)("div", { className: eR.Tp }),
            (0, l.jsxs)("div", {
                className: eR.Qs,
                children: [
                    (0, l.jsx)(eA.D, {
                        className: eR.b,
                        "aria-label": Y.intl.string(Y.t.cpT0Cq),
                        onClick: i,
                        children: (0, l.jsx)(e_.P, {
                            size: "xs",
                            color: "currentColor",
                            "aria-label": Y.intl.string(Y.t.cpT0Cq),
                            className: eR.yP,
                        }),
                    }),
                    (0, l.jsx)("img", { alt: "", src: a, className: eR.Tn }),
                    (0, l.jsx)(eN.h, { size: 22 }),
                    (0, l.jsx)(L.D, {
                        color: "text-strong",
                        variant: "heading-lg/extrabold",
                        className: eR.wx,
                        children: Y.intl.string(Y.t.cBjkcx),
                    }),
                    (0, l.jsx)(eN.h, { size: 4 }),
                    (0, l.jsx)(J.E, {
                        color: "text-default",
                        variant: "text-md/normal",
                        className: eR.h_,
                        children: d,
                    }),
                    (0, l.jsx)(eN.h, { size: 24 }),
                    (0, l.jsx)(eO.A, {
                        text: f,
                        onClick: function () {
                            (0, eT.pX)(eS.BVt.CHANNEL(s, eb.VV.ROLE_SUBSCRIPTIONS), { sourceLocationStack: o });
                        },
                    }),
                ],
            }),
        ],
    });
}
var eL = n(450510),
    eM = n(885386),
    eP = n(808728),
    eD = n(174459),
    ew = n(240248),
    ek = n(822123),
    eU = n(734057),
    eG = n(309010),
    eF = n(690521),
    eJ = n(818645),
    eV = n(316884),
    eK = n(307731),
    eB = n(698279);
function eH(e) {
    let { intention: t, containerWidth: n, rowSize: i, isBurstReaction: s, analyticsObject: l } = e,
        r = eU.A.getChannel(eG.Ay.getChannelId()),
        a = r?.getGuildId(),
        o =
            t === eK.EmojiIntention.REACTION
                ? y.Ay.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice()
                : y.Ay.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        c = null != r ? y.Ay.getDisambiguatedEmojiContext(r.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        u =
            t === eK.EmojiIntention.REACTION
                ? y.Ay.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems
                : y.Ay.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        d = o.slice(0, u),
        m = null != a ? y.Ay.getGuildEmoji(a) : [],
        f = y.Ay.getDisambiguatedEmojiContext(r?.getGuildId()).getCustomEmoji(),
        { topEmojis: E, newlyAddedEmojis: I } = (0, eV.b)({ guildId: r?.getGuildId(), pickerIntention: t }),
        { visibleTopEmojis: g, visibleNewlyAddedEmojis: h } = (0, eJ.W)({
            topEmojis: E,
            newlyAddedEmojis: I,
            rowSize: i,
        });
    C.Ay.trackWithMetadata(
        t === eK.EmojiIntention.REACTION ? eS.HAw.REACTION_PICKER_OPENED : eS.HAw.EXPRESSION_PICKER_OPENED,
        {
            width: n,
            tab: eB.kx.EMOJI,
            badged: !1,
            num_expressions_favorites: c.length,
            num_animated_expressions_favorites: c.filter((e) => e?.animated).length,
            num_custom_expressions_favorites: c.filter(eF.Ay.isCustomEmoji).length,
            num_standard_expressions_favorites: c.filter((e) => null == e.id).length,
            num_expressions_frecent: d.length,
            num_animated_expressions_frecent: d.filter((e) => e?.animated).length,
            num_custom_expressions_frecent: d.filter(eF.Ay.isCustomEmoji).length,
            num_standard_expressions_frecent: d.filter((e) => null == e.id).length,
            num_current_guild_expressions: m.length,
            num_custom_expressions_total: f.size,
            num_expressions_top_server: g.length,
            num_animated_expressions_top_server: g.filter((e) => e.animated).length,
            num_expressions_newly_added: h.length,
            num_animated_expressions_newly_added: h.filter((e) => e.animated).length,
            ...(t === eK.EmojiIntention.REACTION && { is_burst: s }),
            ...(null != l && { location_object: l }),
        },
    );
}
var eW = n(206248),
    eX = n(724651),
    ez = n(732280),
    eZ = n(783420),
    eY = n(927578);
let e$ = { object: eS.ZSU.BUTTON_CTA, section: eS.JJy.SUPER_REACTION_PICKER };
function eq(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: i } = e,
        s = Y.intl.string(Y.t.eikz43),
        r = (0, ez.V)(),
        a = (0, eX.O)(),
        o = r?.subscriptionTrial,
        c = null != o || null != a,
        u = o?.skuId ?? Q.pe.TIER_2,
        d = c
            ? null != a
                ? Y.intl.formatToPlainString(Y.t.bkQ4bH, { percent: a.discount.amount })
                : (0, eY.FY)({ intervalType: o?.interval, intervalCount: o?.intervalCount })
            : Y.intl.string(Y.t.sEAnVH);
    return (0, l.jsx)(eZ.A, {
        subscriptionTier: u,
        premiumModalAnalyticsLocation: e$,
        onSubscribeModalClose: (e) => {
            e && i();
        },
        children: (e) => {
            let { onClick: r } = e;
            return (0, l.jsx)(eW.H, {
                targetElementRef: t,
                shouldShow: n,
                onRequestClose: i,
                position: "bottom",
                assetUrl: "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
                disableMediaViewer: !0,
                badge: c ? { type: "free_trial", variant: "expressive" } : void 0,
                title: Y.intl.string(Y.t.N4SCJ0),
                body: s,
                action: { text: d, variant: "expressive", icon: R.t, onClick: r },
            });
        },
    });
}
var eQ = n(435558),
    e0 = n.n(eQ),
    e1 = n(837381),
    e2 = n(460905),
    e3 = n(775602),
    e5 = n(713517),
    e4 = n(938612);
function e8(e) {
    let { onClick: t } = e,
        n = Y.intl.string(Z.default["3D0GLv"]);
    return (0, l.jsx)("div", {
        className: e4.n,
        children: (0, l.jsx)(O.m, {
            ariaHidden: !0,
            position: "right",
            text: n,
            children: (0, l.jsx)(eA.D, {
                "aria-label": n,
                className: e4.x,
                onClick: t,
                children: (0, l.jsx)(H.T, { size: "md", color: "currentColor" }),
            }),
        }),
    });
}
var e6 = n(88218),
    e7 = n(407698),
    e9 = n(941971),
    te = n(531685),
    tt = n(406810),
    tn = n(27232),
    ti = n(369606),
    ts = n(413249),
    tl = n(141060),
    tr = n(687966),
    ta = n(115979),
    to = n(524501),
    tc = n(926268),
    tu = n(138134),
    td = n(732139);
let tm = r.memo(function (e) {
    let { categoryId: t, ...n } = e,
        i = (function (e) {
            switch (e) {
                case td.R2.RECENT:
                    return tt.ClockIcon;
                case td.R2.FAVORITES:
                    return tn.StarIcon;
                case td.R2.TOP_GUILD_EMOJI:
                    return ti.TrophyIcon;
                case td.R2.PEOPLE:
                    return e2.n;
                case td.R2.NATURE:
                    return ts.p;
                case td.R2.FOOD:
                    return tl.i;
                case td.R2.ACTIVITY:
                    return tr.GameControllerIcon;
                case td.R2.TRAVEL:
                    return ta.h;
                case td.R2.OBJECTS:
                    return to.D;
                case td.R2.SYMBOLS:
                    return tc.HeartIcon;
                case td.R2.FLAGS:
                    return tu.FlagIcon;
                case td.R2.PREMIUM_UPSELL:
                    return R.t;
                default:
                    return;
            }
        })(t);
    return null == i ? null : (0, l.jsx)(i, { color: "currentColor", ...n });
});
var tf = n(724511),
    tE = n(132500),
    tI = n(770335),
    tg = n(7584),
    th = n(526292),
    tp = n(711014),
    tA = (((i = {})[(i.EMOJI = 0)] = "EMOJI"), (i[(i.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"), i);
let t_ = [eK.EmojiDisabledReasons.DISALLOW_EXTERNAL, eK.EmojiDisabledReasons.DISALLOW_CUSTOM];
var tN = (((s = {})[(s.PREMIUM = 0)] = "PREMIUM"), (s[(s.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), s),
    tC = n(342379);
let tx = "expression-guild-",
    { itemIdForIndex: tT } = (0, e6.J)(tx),
    ty = (0, ew.xI)(E.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    tj = (0, ew.xI)(E.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    tO = (0, ew.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    tS = (0, ew.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    tb = (0, ew.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    tR = (0, ew.xI)(tC.__invalid_unicodeCategoryShortcutHeight),
    tv = (0, ew.xI)(E.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    tL = (0, ew.xI)(E.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    tM = tO + tj + 2 * tb,
    tP = ty + tj,
    tD = tP + (tv + 2 * tL),
    tw = tO + tS + 2 * tb;
function tk(e) {
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
        { isHoveringOrFocusing: f } = (0, e5.A)(m),
        E = (0, e1.rm)(tT(n)),
        I = a.type === td.s.GUILD ? null : a.id,
        g = t === n,
        h = a.type === td.s.GUILD ? a.guild : null,
        p = (0, l.jsxs)(eA.D, {
            innerRef: m,
            ...E,
            "aria-label": (0, ek.wt)(a, h),
            className: o()({
                [tC.ZG]: null != h,
                [tC.Bj]: null == h,
                [tC.s6]: null == h && g,
                [tC.xg]: a.type === td.s.RECENT,
            }),
            onClick: () => {
                (null != h &&
                    eD.default.track(eS.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: i?.location,
                        tab: eB.kx.EMOJI,
                        guild_id: h.id,
                    }),
                    c(n));
            },
            children: [
                (0, l.jsx)("div", {
                    className: tC.a$,
                    children: (0, l.jsx)(e9.A, { hovered: f, selected: g, size: "small" }),
                }),
                null != h
                    ? (0, l.jsx)(tf.A, { guild: h, isSelected: g, shouldAnimate: !d && u, isLocked: a.isNitroLocked })
                    : null,
                null == h && null != I
                    ? (0, l.jsx)(tm, { categoryId: I, className: tC.Yl, height: tO, width: tO, size: "custom" })
                    : null,
            ],
        }),
        A = s[n + 1],
        _ = null != A && a.type === td.s.GUILD && A.type !== td.s.GUILD;
    return null != h
        ? (0, l.jsxs)(r.Fragment, {
              children: [
                  (0, l.jsx)(e7.Q, { guild: h, children: p }),
                  _ ? (0, l.jsx)("hr", { className: tC.ny }, "separator") : null,
              ],
          })
        : p;
}
let tU = (e) => {
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
        f = ef.Om.useStore((e) => e.activeCategoryIndex),
        E = (function (e) {
            let { emojiListRef: t } = e,
                n = (0, eE.RQ)((e) => e.searchQuery),
                i = r.useCallback((e) => t.current?.scrollToSectionTop(e), [t]);
            return r.useCallback(
                (e) => {
                    "" !== n ? ((0, eE.Ri)(""), ef.Om.setActiveCategoryIndex(e)) : i(e);
                },
                [i, n],
            );
        })({ sectionDescriptors: i, emojiListRef: n }),
        I = (0, p.p)(),
        g = (0, ek.ss)(s, a, { guildId: a?.guild_id ?? c }),
        h = r.useMemo(() => (u ? (0, ek.CQ)() : g), [g, u]),
        A = r.useRef(null),
        _ = (0, m.bG)([te.A], () => te.A.isFocused()),
        N = (0, m.bG)([e3.Ay], () => e3.Ay.useReducedMotion, []),
        C = r.useMemo(
            () =>
                e0().memoize(
                    (e, t) => {
                        let n = h[t];
                        if (null != n)
                            return (0, l.jsx)(
                                tk,
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
        x = r.useMemo(() => [8, 8, 0, 8], []),
        T = r.useCallback(
            (e, t) => {
                let n = h[t];
                if (n.type === td.s.RECENT) return tM;
                if (n.type === td.s.GUILD) {
                    let e = h[t + 1];
                    return null != e && e.type !== td.s.GUILD ? tD : tP;
                }
                return tw;
            },
            [h],
        ),
        {
            nonUnicodeCategoryCount: y,
            firstUnicodeCategoryIndex: j,
            firstUnicodeCategoryOffsetTop: O,
            rowCountBySection: S,
        } = r.useMemo(() => {
            let e = 0,
                t = 0,
                n = 0,
                i = 0;
            h.forEach((s) => {
                s.type === td.s.GUILD
                    ? ((t += 1), (n += 1))
                    : s.type === td.s.UNICODE
                      ? (i += 1)
                      : ((e += 1), (t += 1));
            });
            let s = tM + t * tP + tD;
            return {
                nonUnicodeCategoryCount: t,
                firstUnicodeCategoryIndex: t,
                firstUnicodeCategoryOffsetTop: s,
                rowCountBySection: [e, n, i],
            };
        }, [h]),
        [b, R] = r.useState(!0);
    r.useLayoutEffect(() => {
        R(y >= 7);
    }, [y]);
    let v = r.useCallback(
            (e) => {
                let t = A.current?.getListDimensions();
                null == t || (e + t.height - tv >= O ? R(!1) : R(!0));
            },
            [O],
        ),
        L = r.useCallback(
            (e) => {
                (e(j), A.current?.scrollTo(O));
            },
            [O, j],
        ),
        M = r.useCallback(
            (e, t) => {
                let n = h[e];
                if (null == n) return 0;
                let i = b ? tR : 0;
                if (n.type === td.s.RECENT) return t ? 0 : tS;
                if (n.type === td.s.GUILD) {
                    let n = h[e + 1];
                    return null != n && n.type !== td.s.GUILD ? (t ? tv + -2 * tL + tj + i : tj) : t ? i : tj;
                }
                return t ? tj + i : 2 * tj;
            },
            [h, b],
        ),
        P = r.useMemo(
            () =>
                function (e, t) {
                    return (0, l.jsx)(r.Fragment, { children: t }, e);
                },
            [],
        ),
        D = b ? "shortcut" : "hiddenshortcut";
    return (0, l.jsx)(e6.A, {
        categoryListRef: A,
        expressionsListRef: n,
        className: t,
        store: ef.Om,
        categories: h,
        listPadding: x,
        onScroll: v,
        renderCategoryListItem: C,
        renderSection: P,
        rowCount: h.length,
        categoryHeight: T,
        getScrollOffsetForIndex: M,
        rowCountBySection: S,
        navId: "emoji-picker-categories",
        itemIdPrefix: tx,
        emojiPacksHeader: null != d ? (0, l.jsx)(e8, { onClick: d }) : null,
        children: (e) =>
            y >= 7 &&
            (0, l.jsx)(
                eA.D,
                {
                    "aria-hidden": !b,
                    "aria-label": Y.intl.string(Y.t.dT0ctw),
                    className: o()(tC.KB, { [tC.h_]: !b }),
                    tabIndex: b ? 0 : -1,
                    onClick: () => L(e),
                    children: (0, l.jsx)(e2.n, { size: "custom", color: "currentColor", height: tO, width: tO }),
                },
                D,
            ),
    });
};
var tG = n(49999),
    tF = n(860197);
let tJ = function (e) {
    let { markAsDismissed: t } = e;
    return (0, l.jsxs)(J.E, {
        variant: "text-xs/medium",
        color: "text-default",
        className: tF.iE,
        children: [
            (0, l.jsx)(tc.HeartIcon, { size: "md", color: "currentColor", className: tF.Kk }),
            (0, l.jsx)("div", {
                className: tF.Qs,
                children: (0, l.jsx)(J.E, { variant: "text-xs/normal", children: Y.intl.string(Y.t.xdRf69) }),
            }),
            (0, l.jsx)(eA.D, {
                onClick: () => t(tG.i.UNKNOWN),
                children: (0, l.jsx)(e_.P, { size: "md", color: "currentColor", className: tF.VN }),
            }),
        ],
    });
};
var tV = n(941143),
    tK = n(717421),
    tB = n(343032),
    tH = n(683063),
    tW = n(131607),
    tX = n(748798);
let tz = { tension: 750, mass: 2.5, friction: 70 };
function tZ(e) {
    let { checked: t, onClick: n, buttonRef: i } = e,
        s = (0, m.bG)([e3.Ay], () => e3.Ay.useReducedMotion),
        a = w.default.getCurrentUser(),
        c = null != a && !(0, eY.TW)(a),
        u = c ? [] : [f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP],
        [d, E] = (0, tW.kn)(u),
        [I, g] = r.useState(!1),
        [h, p] = (0, tK.z)(() => ({})),
        A = (0, tV.animated)(tB.i);
    r.useEffect(() => {
        let e = d === f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (E(tG.i.DISMISS), setTimeout(() => g(e), 200));
    }, [d, E]);
    let _ = I ? Y.intl.string(Y.t["Osi/uy"]) : t && !c ? Y.intl.string(Y.t["5cRA/b"]) : Y.intl.string(Y.t.buV4av),
        N = I ? Y.intl.string(Y.t.ORK94p) : void 0;
    return (0, l.jsx)(tH.u, {
        position: "top",
        title: N,
        body: _,
        asset: (0, l.jsx)(R.t, { size: "md", color: "currentColor" }),
        assetSize: 20,
        forceOpen: I,
        children: (0, l.jsx)(eA.D, {
            innerRef: i,
            "aria-label": _,
            "aria-pressed": t,
            onClick: function () {
                (p({ from: { rotate: t ? "360deg" : "0deg" }, to: { rotate: t ? "0deg" : "360deg" }, config: tz }),
                    n?.(),
                    g(!1));
            },
            focusProps: { enabled: !1 },
            className: o()(tX.Pf, { [tX.wM]: t }),
            children: (0, l.jsx)(A, {
                style: s ? void 0 : h,
                size: "custom",
                width: 20,
                height: 20,
                color: t ? "white" : "currentColor",
                className: tX.Kk,
            }),
        }),
    });
}
var tY = n(821609),
    t$ = n(644508),
    tq = n(824832),
    tQ = n(267102),
    t0 = n(242812);
function t1(e) {
    let { channel: t, closePopout: n } = e,
        i = r.useRef(null),
        s = r.useRef(0),
        [a, o] = r.useState(!1),
        [c, u] = r.useState(!1),
        d = (0, tQ.Us)() === eS.BRT.OVERLAY,
        m = c || a,
        f = r.useCallback(
            async (e, i, l) => {
                (u(!0),
                    n(),
                    await (0, t$.f)({
                        userImage: { data: e, file: i, image: l },
                        guildId: t?.guild_id ?? null,
                        analyticsLocation: {
                            section: eS.JJy.EXPRESSION_PICKER,
                            page: t?.guild_id != null ? eS.liQ.GUILD_CHANNEL : eS.liQ.DM_CHANNEL,
                        },
                    }),
                    (s.current += 1),
                    u(!1));
            },
            [t, n],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(O.m, {
                asContainer: !0,
                text: d ? Y.intl.string(Y.t.RMbedC) : null,
                children: (0, l.jsx)(tY.$, {
                    text: Y.intl.string(Y.t.iMJO37),
                    variant: "secondary",
                    onClick: function () {
                        i.current?.activateUploadDialogue();
                    },
                    disabled: m || d,
                }),
            }),
            (0, l.jsx)("div", {
                className: t0.F,
                children: (0, l.jsx)(tq.Ay, { ref: i, onChange: f, setLoading: o, disabled: m }, s.current),
            }),
        ],
    });
}
n(667532);
var t2 = n(833272),
    t3 = n(82495),
    t5 = n(260762),
    t4 = n(650583),
    t8 = n(683829);
let t6 = (0, z.Ld)(),
    t7 = t2.A.convert.fromCodePoint("1f44f"),
    t9 = (0, ew.xI)(E.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
function ne(e) {
    switch (t2.A.convert.toCodePoint(e)) {
        case "1f3fb":
            return Y.intl.string(Y.t["BVK5b/"]);
        case "1f3fc":
            return Y.intl.string(Y.t.xJWOK8);
        case "1f3fd":
            return Y.intl.string(Y.t["MB+T5g"]);
        case "1f3fe":
            return Y.intl.string(Y.t.MODud2);
        case "1f3ff":
            return Y.intl.string(Y.t["0uzqsc"]);
        default:
            return Y.intl.string(Y.t.bGN1ow);
    }
}
let nt = (e) => {
    let { fade: t, surrogate: n, onClick: i, delay: s, index: r } = e,
        a = (0, e1.rm)(`item-${r}`),
        o = eF.Ay.getURL(t7 + n),
        c = (0, tK.z)({ opacity: 1, from: { opacity: +!t }, delay: s }, "animate-always");
    return (0, l.jsx)(eA.D, {
        ...a,
        role: "option",
        "aria-selected": 0 === r,
        onClick: () => i(n),
        className: t8.B6,
        children: (0, l.jsx)(tV.animated.div, {
            "aria-label": ne(n),
            className: t8.g4,
            style: { backgroundImage: `url("${o}")`, ...c },
        }),
    });
};
function nn(e) {
    let { id: t, selectedSurrogate: n, onClick: i } = e,
        s = (0, t5.A)("diversity"),
        a = (0, tK.z)({ height: (t9 + 14) * (tg.W$.length + 1), from: { height: t9 + 14 }, config: { duration: 125 } }),
        o = r.useRef(s);
    r.useEffect(() => {
        o.current.focusFirstVisibleItem();
    }, []);
    let c = ["", ...tg.W$];
    return (
        e0().remove(c, (e) => e === n),
        c.unshift(n),
        (0, l.jsx)(e1.hD, {
            navigator: s,
            children: (0, l.jsx)(e1.PR, {
                children: (e) => {
                    let { ref: n, ...s } = e;
                    return (0, l.jsx)(tV.animated.div, {
                        ...s,
                        id: t,
                        ref: n,
                        className: t8.J6,
                        style: a,
                        role: "listbox",
                        children: c.map((e, t) =>
                            (0, l.jsx)(nt, { index: t, fade: 0 !== t, delay: 20 * t, surrogate: e, onClick: i }, t),
                        ),
                    });
                },
            }),
        })
    );
}
let ni = function (e) {
    let { searchBarRef: t, selectedSurrogate: n, className: i } = e,
        s = eF.Ay.getURL(t7 + n),
        [a, c] = r.useState(!1),
        u = (0, t3.A)(null, () => c(!1)),
        d = r.useRef(null);
    return (0, l.jsxs)("div", {
        ref: u,
        className: o()(t8.fx, i),
        children: [
            (0, l.jsx)(eA.D, {
                innerRef: d,
                className: t8.Dj,
                onClick: function () {
                    c(!0);
                },
                "aria-label": Y.intl.formatToPlainString(Y.t["2SfnMp"], { skinTone: ne(n) }),
                "aria-haspopup": !0,
                "aria-expanded": a,
                "aria-controls": t6,
                tabIndex: a ? -1 : 0,
                children: (0, l.jsx)("div", { className: t8.g4, style: { backgroundImage: `url("${s}")` } }),
            }),
            a
                ? (0, l.jsx)("div", {
                      onKeyDown: function (e) {
                          e.key === t4.dh.ESCAPE
                              ? (e.stopPropagation(), c(!1), null != d.current && d.current.focus())
                              : "Tab" === e.key && c(!1);
                      },
                      children: (0, l.jsx)(nn, {
                          id: t6,
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
var ns = n(462180),
    nl = n(602034),
    nr = n(683438);
let na = r.memo(function (e) {
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
        d = (0, eE.RQ)((e) => e.searchQuery),
        [m, f, E] = ef.Om.useStore((e) => [e.inspectedExpressionPosition, e.searchPlaceholder, e.hasInteracted], ns.x),
        I = r.useCallback(
            (e) => {
                (ef.Om.setActiveCategoryIndex("" === e ? 0 : -1),
                    ef.Om.setInspectedExpressionPosition(0, 0),
                    ef.Om.setSearchPlaceholder(null),
                    (0, eE.Ri)(e),
                    t.current?.scrollTo(0));
            },
            [t],
        ),
        g = r.useCallback(() => {
            I("");
        }, [I]);
    return (
        r.useImperativeHandle(c, () => ({ focus: () => u.current?.focus() })),
        (0, l.jsx)(nr.I, {
            autoFocus: a,
            query: d,
            ref: u,
            placeholder: f ?? o,
            onClear: g,
            onKeyDown: function (e) {
                switch (e.key) {
                    case t4.dh.ARROW_LEFT:
                    case t4.dh.ARROW_RIGHT:
                    case t4.dh.ARROW_UP:
                    case t4.dh.ARROW_DOWN:
                        document.activeElement !== e.target && e.preventDefault();
                }
                i(e);
            },
            onFocus: s,
            onChange: I,
            inputProps: {
                role: "combobox",
                "aria-label": Y.intl.string(Y.t.tCauZX),
                "aria-haspopup": "grid",
                "aria-autocomplete": "list",
                "aria-controls": n,
                "aria-expanded": !0,
                ...(E ? { "aria-activedescendant": (0, nl.Aq)(n, m.columnIndex, m.rowIndex) } : void 0),
            },
        })
    );
});
var no = n(381575);
let nc = function (e) {
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
                (0, l.jsx)(na, {
                    emojiListRef: r,
                    gridNavigatorId: td.lq,
                    onKeyDown: a,
                    ref: d,
                    onFocus: c,
                    autoFocus: u,
                    defaultSearchPlaceholder: (0, ek.wT)(i, f),
                }),
                i === eK.EmojiIntention.REACTION ? (0, l.jsx)(tZ, { checked: f, onClick: E, buttonRef: I }) : null,
                n ?? (0, l.jsx)(ni, { searchBarRef: d, className: no.fx, selectedSurrogate: m }),
                i !== eK.EmojiIntention.NO_CUSTOM_EMOJI && h ? (0, l.jsx)(t1, { channel: t, closePopout: p }) : null,
            ],
        });
    return (0, l.jsx)("div", { className: o()(no.wx, s), children: null != g ? g(A) : A });
};
var nu = n(182922),
    nd = n(363195),
    nm = n(486020),
    nf = n(977566);
function nE(e) {
    return null != e && "animated" in e;
}
let nI = r.memo(function (e) {
    let t,
        i,
        { className: s, emojiGrid: a, guildId: o, pickerIntention: c, channel: u } = e,
        d = ef.Om.useStore((e) => e.inspectedExpressionPosition),
        f = r.useMemo(() => {
            let { rowIndex: e, columnIndex: t } = d;
            return a[e]?.[t];
        }, [a, d]);
    switch (f?.type) {
        case tA.EMOJI:
            t = f?.emoji;
            break;
        case tA.EXPAND_OR_COLLAPSE_EMOJIS:
            t = { type: "EXPAND_OR_COLLAPSE_EMOJI", guildId: f?.guildId, allNamesString: f?.name };
            break;
        default:
            t = null;
    }
    let E = (0, m.bG)([ey.A], () => (null !== t && t.type === tI.i.GUILD ? ey.A.getGuild(t.guildId) : null), [t]),
        I = (0, m.bG)([te.A], () => te.A.isFocused()),
        g = (0, m.bG)([e3.Ay], () => e3.Ay.useReducedMotion, []),
        h = eM.Sf.useSetting(),
        p = (0, ek.O7)(o, nE(t) ? t : null),
        A = (0, m.bG)([y.Ay], () => y.Ay.expandedSectionsByGuildIds),
        { newlyAddedEmojis: _ } = (0, eV.A)(o, c),
        N = f?.type === tA.EMOJI ? f.subCategory : td.tm.NONE;
    if (
        (r.useEffect(() => {
            let e = Date.now();
            return () => {
                Date.now() - e >= 250 &&
                    nE(t) &&
                    N !== td.tm.NONE &&
                    (N === td.tm.NEWLY_ADDED_EMOJI &&
                        null !== t &&
                        t.type === tI.i.GUILD &&
                        (0, em.mz)(t.guildId, _[0].id),
                    null != d.source &&
                        (0, ek.yB)({
                            emoji: t,
                            subCategory: N,
                            position: f.columnIndex + 1,
                            newlyAddedHighlight: N === td.tm.NEWLY_ADDED_EMOJI && ed.isNewerThanLastSeen(o, t.id),
                        }));
            };
        }),
        null == t)
    )
        return null;
    let C = (function (e, t) {
            let { allowAnimatedEmoji: i, sectionsExpandedFromThreeRows: s, theme: r } = t;
            if (nE(e)) {
                let t = null != e.id ? nm.Ay.getEmojiURL({ id: e.id, animated: i && e.animated, size: 28 }) : e.url;
                return "" === t
                    ? (0, l.jsx)(J.E, {
                          variant: "text-md/normal",
                          className: nf.J_,
                          children: "surrogates" in e ? e.surrogates : null,
                      })
                    : (0, l.jsx)("img", { alt: (0, eF.N)(e) ?? "", src: t, className: nf.Zg });
            }
            if ("EXPAND_OR_COLLAPSE_EMOJI" !== e.type) return null;
            {
                let t = n(619508),
                    i = n(404828),
                    a = n(600003),
                    o = n(318121);
                return s.has(e.guildId)
                    ? (0, l.jsx)("img", { className: nf.Kk, src: (0, ep.M)(r) ? a : o, alt: "" })
                    : (0, l.jsx)("img", { className: nf.Kk, src: (0, ep.M)(r) ? t : i, alt: "" });
            }
        })(t, { allowAnimatedEmoji: h, sectionsExpandedFromThreeRows: A, theme: nd.A.theme }),
        x =
            null != E
                ? (0, l.jsx)(tf.A, { className: nf.__invalid_guildIcon, guild: E, shouldAnimate: !g && I })
                : null;
    i =
        "EXPAND_OR_COLLAPSE_EMOJI" === t.type
            ? A.has(t.guildId)
                ? Y.intl.string(Y.t["/K2RDH"])
                : Y.intl.string(Y.t.NZI2Zk)
            : (0, eF.N)(t);
    let T = (function (e) {
        let { inspectedEmoji: t, guild: n } = e,
            i = nE(t);
        return null != n && i ? Y.intl.format(Y.t.KFW2aY, { guildName: n.name }) : null;
    })({ inspectedEmoji: t, channel: u, guildId: o, intention: c, guild: E });
    return (0, l.jsx)(nu.A, {
        className: s,
        graphicPrimary: C,
        graphicSecondary: x,
        titlePrimary: i,
        titleSecondary: T,
        isFavorite: p,
        emojiSubCategory: N,
    });
});
n(30146);
var ng = n(607399),
    nh = n(765178),
    np = n(537652),
    nA = n(962125),
    n_ = n(240864),
    nN = n(286509),
    nC = n(89366),
    nx = n(10392),
    nT = n(82498),
    ny = n(202639),
    nj = n(414872),
    nO = n(285373),
    nS = n(304072),
    nb = n(189551),
    nR = n(594061),
    nv = n(771104),
    nL = n(442433),
    nM = n(147421),
    nP = n(723702),
    nD = n(140735),
    nw = n(194261),
    nk = n(703413);
let nU = (e) => {
    let { src: t, alt: n, size: i, "aria-label": s, className: a } = e,
        c = r.useRef(null),
        u = r.useRef(!1),
        d = u.current ? nk.S : nk.Y;
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
                          ((u.current = !0), c.current.classList.remove(nk.Y), c.current.classList.add(nk.S));
                  });
              },
    });
};
var nG = n(955388);
let nF = e0().memoize(
        (e) =>
            `${e * eK.EmojiSprites.NonDiversityPerRow}px ${e * Math.ceil(tg.Ay.numNonDiversitySprites / eK.EmojiSprites.NonDiversityPerRow)}px`,
    ),
    nJ = e0().memoize(
        (e) =>
            `${e * eK.EmojiSprites.DiversityPerRow}px ${e * Math.ceil(tg.Ay.numDiversitySprites / eK.EmojiSprites.DiversityPerRow)}px`,
    ),
    nV = r.memo(function (e) {
        let { emoji: t, size: i, surrogateCodePoint: s, allowAnimatedEmoji: a, "aria-label": c, isLocked: u } = e,
            d = (() => {
                if (!t.useSpriteSheet) {
                    let e =
                        null == t.id
                            ? t.url
                            : nm.Ay.getEmojiURL({ id: t.id, animated: a && t.animated, size: eK.EMOJI_URL_BASE_SIZE });
                    return null != e
                        ? (0, l.jsx)(nU, {
                              className: nG.N1,
                              "aria-label": c,
                              src: e,
                              size: i,
                              alt: (0, eF.N)(t) ?? "",
                          })
                        : null;
                }
                return (0, l.jsx)("div", {
                    className: o()(nG.xA, { [nG.N1]: u }),
                    style: (function (e, t, i) {
                        let s, l, r;
                        if (!e.useSpriteSheet) return;
                        let a = null != e.index ? e.index : 0;
                        e.hasDiversity
                            ? ((s = n(12303)(`./spritesheet-${t}-${i}.png.js`).default),
                              (l = nJ(i)),
                              (r = eK.EmojiSprites.DiversityPerRow))
                            : ((s = n(145519)(`./spritesheet-emoji-${i}.png.js`).default),
                              (l = nF(i)),
                              (r = eK.EmojiSprites.NonDiversityPerRow));
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
                    children: (0, l.jsx)(nD.A, { children: c }),
                });
            })();
        return (0, l.jsxs)(r.Fragment, {
            children: [
                d,
                u
                    ? (0, l.jsx)("div", {
                          className: nG.iD,
                          style: { width: i, height: i },
                          children: (0, l.jsx)(nw.LockIcon, { size: "xs", color: "currentColor", className: nG.fi }),
                      })
                    : null,
            ],
        });
    });
var nK = n(537911);
function nB(e) {
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
        N = (0, m.bG)([ey.A], () => (n.type === tI.i.GUILD ? ey.A.getGuild(n.guildId) : void 0), [n]);
    return (0, l.jsx)(W.vN, {
        children: (0, l.jsx)("button", {
            ..._,
            className: o()(nK._X, { [nK.lG]: s, [nK.Lh]: r, [nK.Bx]: a, [h ?? ""]: a, [nK.TV]: u }),
            "data-type": eI.g.EMOJI,
            "data-id": n.id,
            "data-name": n.name,
            "data-surrogates": "surrogates" in n ? n.surrogates : null,
            "data-animated": n.animated ? "true" : null,
            ref: A,
            children: (0, l.jsx)(nV, {
                "aria-label":
                    ((t = (0, eF.N)(n)),
                    (N?.name != null &&
                        (t = Y.intl.formatToPlainString(Y.t["nXv4/B"], { names: t, guildName: N.name })),
                    i)
                        ? Y.intl.formatToPlainString(Y.t["9FI9Z0"], { names: t })
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
function nH(e) {
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
            isBurstReaction: T,
            rowPosition: j,
            inNitroLockedSection: S,
        } = e,
        [b, R] = r.useState(""),
        v = (0, m.bG)([e3.Ay], () => e3.Ay.useReducedMotion),
        L = (0, m.bG)([y.Ay], () => y.Ay.getDisambiguatedEmojiContext(o), [o]),
        M = r.useRef(null),
        { emoji: P, size: D, isDisabled: w, columnIndex: k } = t;
    function U() {
        d.current || f.current || c(t);
    }
    let { ref: G, tabIndex: F, onFocus: J, ...V } = h(k, a) ?? {},
        K =
            b !== `${k}:${a}`
                ? (0, l.jsx)(nB, {
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
                              null != x &&
                              !e.shiftKey &&
                              null != P.name &&
                              T &&
                              !v &&
                              N
                          ) {
                              let e = null == P.id ? tg.Ay.convertNameToSurrogate(P.name) : P.name,
                                  t = M.current.getBoundingClientRect();
                              ((t.x = j.x + (k + 1) * D), R(`${k}:${a}`), (0, nM.h)(x, e, P.id, t));
                          }
                          !(function (e) {
                              if ((e.stopPropagation(), d.current || f.current)) return;
                              let n = e.altKey;
                              (n &&
                                  !y.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(P) &&
                                  C(i),
                                  (0, eL.sF)(eL._2.FAVORITE_EMOJI_TOOLTIP),
                                  u(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n }));
                          })(e);
                      },
                      onContextMenu: function (e) {
                          (0, nL.L3)(e, async () => {
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
                      inNitroLockedSection: S,
                  })
                : null;
    return (0, r.createElement)(
        "li",
        { ...V, key: i, ref: M },
        E
            ? (0, l.jsx)(O.m, {
                  text: Y.intl.formatToPlainString(Y.t.glqNsf, { key: (0, nP.isMac)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: K,
              })
            : K,
    );
}
let nW = (e) => {
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
        y = n(404828),
        j = n(600003),
        O = n(318121),
        S = n(443336),
        b = n(258901),
        R = n(135974),
        v = n(8013),
        L = (0, eC.Ay)(),
        M = ef.Om.getState(),
        [P, D] = r.useState(M.inspectedExpressionPosition),
        [w, k] = (0, nS.A)(null, 300),
        U = r.useRef(null);
    (r.useEffect(
        () =>
            ef.Om.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => D(e),
            ),
        [],
    ),
        r.useEffect(() => {
            nR.bW.loadIfNecessary();
        }, []));
    let G = i === td.as.LARGE,
        F = i === td.as.MEDIUM;
    function V(e) {
        let t = `${e.rowIndex}c${e.columnIndex}`;
        switch (e.type) {
            case tA.EXPAND_OR_COLLAPSE_EMOJIS: {
                let { visibleRowIndex: n, columnIndex: i } = e,
                    c = P.rowIndex === n && P.columnIndex === i,
                    d = e.sectionCollapsedToThreeRows
                        ? c
                            ? (0, ep.M)(L)
                                ? b
                                : v
                            : (0, ep.M)(L)
                              ? T
                              : y
                        : c
                          ? (0, ep.M)(L)
                              ? S
                              : R
                          : (0, ep.M)(L)
                            ? j
                            : O,
                    I = Y.intl.string(e.sectionCollapsedToThreeRows ? Y.t.NZI2Zk : Y.t["/K2RDH"]);
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
                        x = P.rowIndex === g && P.columnIndex === h;
                    function T() {
                        m.current || f.current || a(e);
                    }
                    return (0, r.createElement)(
                        "li",
                        { ...C, key: t },
                        (0, l.jsx)(W.vN, {
                            children: (0, l.jsx)("button", {
                                "aria-label": d,
                                ref: p,
                                className: o()(nK._X, {
                                    [nK.lG]: G,
                                    [nK.Lh]: F,
                                    [nK.Bx]: x && !I,
                                    [A ?? ""]: x,
                                    [nK.TV]: w === t,
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
                        e.type !== tA.EXPAND_OR_COLLAPSE_EMOJIS ||
                            (t.stopPropagation(),
                            m.current ||
                                f.current ||
                                (s(e, { isFinalSelection: !0, toggleFavorite: !1 }),
                                (0, nb.G)(e.guildId),
                                e.sectionCollapsedToThreeRows || x(),
                                eD.default.track(eS.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                    collapsed: e.sectionCollapsedToThreeRows,
                                    guild_id: e.guildId,
                                })));
                    },
                    icon: (0, l.jsx)("img", { className: nK.Kk, src: d, alt: "" }),
                    ariaLabel: I,
                    shouldShowRoundHighlight: !0,
                });
            }
            case tA.EMOJI: {
                let { columnIndex: n, visibleRowIndex: i } = e,
                    r = P.rowIndex === i && P.columnIndex === n;
                return (0, l.jsx)(
                    nH,
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
                        isMediumSize: F,
                        isLargeSize: G,
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
        return (0, l.jsx)("ul", {
            ...d(E),
            className: o()(nK.ND, { [nK.HO]: G, [nK.X$]: F }),
            ref: U,
            children: e.map(V),
        });
    }
    if (p !== td.s.TOP_GUILD_EMOJI) return K(t);
    let B = t.filter(
            (e) =>
                e.subCategory === td.tm.TOP_GUILD_EMOJI ||
                (e.subCategory === td.tm.NEWLY_ADDED_EMOJI &&
                    e.emoji.type === tI.i.GUILD &&
                    !ed.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
        ),
        H = t.filter(
            (e) =>
                e.subCategory === td.tm.NEWLY_ADDED_EMOJI &&
                e.emoji.type === tI.i.GUILD &&
                ed.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id),
        );
    return 0 === H.length
        ? K(t)
        : (0, l.jsxs)("div", {
              className: nK.Ng,
              children: [
                  (0, l.jsx)("div", { className: o()(nK.V6, { [nK.$3]: 0 === B.length }), children: K(B) }),
                  (0, l.jsxs)("div", {
                      className: nK.bc,
                      children: [
                          (0, l.jsx)("div", {
                              className: o()(nK.eE, { [nK.eM]: 1 === H.length, [nK.Wk]: B.length > 0 }),
                              children: K(H),
                          }),
                          (0, l.jsxs)("div", {
                              className: o()(nK.lD, { [nK.EI]: G, [nK.qU]: F, [nK.Wk]: B.length > 0 }),
                              children: [
                                  (0, l.jsx)(nv.A, { foreground: nK.rI }),
                                  (0, l.jsx)(J.E, {
                                      variant: "text-xs/semibold",
                                      color: "text-overlay-light",
                                      children: Y.intl.string(Y.t.y2b7CA),
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
};
var nX = n(618723);
let nz = (0, ew.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    nZ = (0, ew.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    nY = (0, ew.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    n$ = (0, ew.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    nq = (0, ew.xI)(E.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    nQ = (0, ew.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    n0 = (0, ew.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    n1 = r.memo(function (e) {
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
                rowCount: _,
                isUsingKeyboardNavigation: C,
                channelGuildId: T,
                messageId: y,
                isBurstReaction: j,
                listHeaderClassName: O,
            } = e,
            S = r.useRef(!1),
            b = ef.Om.useStore((e) => e.activeCategoryIndex),
            R = (0, eE.RQ)((e) => e.searchQuery),
            v = eM.Sf.useSetting(),
            L = (0, m.bG)([w.default], () => w.default.getCurrentUser()),
            M = (0, k.ki)(L),
            { location: P } = (0, p.p)(),
            { analyticsLocations: D } = (0, x.Ay)(),
            [U, G] = r.useState(0),
            [F, V] = r.useState(!1),
            {
                listPadding: K,
                renderRow: B,
                renderSection: H,
                renderSectionHeader: W,
                renderSectionFooter: X,
                sectionMarginBottom: z,
                sectionHeaderHeight: Z,
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
                    y = (0, p.p)(),
                    j = r.useRef(eS.An1),
                    O = r.useMemo(() => ("" !== n ? t2.A.convert.toCodePoint(n) : ""), [n]),
                    S = r.useCallback(
                        (e) => {
                            let t = u[e],
                                n = u[e + 1];
                            return e >= u.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked;
                        },
                        [u],
                    ),
                    b = r.useCallback(
                        (e) => {
                            if (e >= u.length - 1) return !1;
                            let t = u[e],
                                n = u[e + 1];
                            return !t.isNitroLocked && n.isNitroLocked;
                        },
                        [u],
                    ),
                    R = r.useCallback(
                        function (e) {
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                i = new Set(t),
                                s = t.has(e);
                            (s ? i.delete(e) : i.add(e),
                                null != n &&
                                    eD.default.track(eS.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                        location: y.location,
                                        tab: eB.kx.EMOJI,
                                        collapsed: !s,
                                        guild_id: n.id,
                                    }),
                                d(i));
                        },
                        [y, t, d],
                    ),
                    v = r.useCallback((e) => {
                        let { columnIndex: t, visibleRowIndex: n } = e,
                            i = e.type === tA.EMOJI ? (0, eF.N)(e.emoji) : e.name;
                        (j.current !== eS.An1 && window.cancelAnimationFrame(j.current),
                            (j.current = window.requestAnimationFrame(() => {
                                (ef.Om.setInspectedExpressionPosition(t, n, eI.t.MOUSE_EVENT),
                                    ef.Om.setSearchPlaceholder(i),
                                    (j.current = eS.An1));
                            })));
                    }, []),
                    L = (0, m.bG)([eL.HP], () => eL.HP.hasHotspot(eL._2.FAVORITE_EMOJI_TOOLTIP), []),
                    M = r.useMemo(
                        () =>
                            e0().memoize((e, t) => {
                                let n = i[e],
                                    r = u[t.sectionIndex];
                                return (0, l.jsx)(
                                    nW,
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
                                        category: r.sectionId,
                                        selectedItemClassName: nX.__invalid_selectedItem,
                                        messageId: _,
                                        isBurstReaction: N,
                                        inNitroLockedSection: r.isNitroLocked,
                                        handleScrollUpOnSectionCollapse: function () {
                                            T.current?.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                                        },
                                    },
                                    e,
                                );
                            }),
                        [i, u, s, O, v, a, f, E, I, g, h, L, A, _, N, T],
                    );
                r.useEffect(() => () => M.cache?.clear?.(), [M]);
                let P = r.useMemo(
                        () =>
                            e0().memoize((e) => {
                                let n = u[e];
                                if (null == n) return;
                                let { guild: i, categoryId: s, type: r, sectionId: a } = n;
                                if (r === td.s.SEARCH_RESULTS) return;
                                let c =
                                        r === td.s.GUILD
                                            ? null != i
                                                ? (0, l.jsx)(tf.A, { guild: i, height: 16, width: 16 })
                                                : null
                                            : null != s
                                              ? (0, l.jsx)(tm, { categoryId: s, height: 16, width: 16, size: "custom" })
                                              : null,
                                    d = i?.name;
                                null != s && (d = (0, ek.Nu)(s, i?.name));
                                let m = x === e,
                                    f = n.isNitroLocked,
                                    E = f && !m,
                                    I = f && m;
                                return (0, l.jsx)(
                                    nN.A,
                                    {
                                        className: o()(nX.wx, C, { [nX.RA]: E, [nX.sp]: I }),
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
                    D = (0, th.k0)(),
                    w = r.useCallback(
                        (e, n) => {
                            let i = u[e],
                                s = b(e),
                                r = S(e);
                            return (0, l.jsx)(
                                "div",
                                {
                                    role: "rowgroup",
                                    className: o()(nX.Wy, {
                                        [nX.YD]: e === u.length - 1,
                                        [nX.jl]: t.has(i.sectionId),
                                        [nX.cW]: i.isNitroLocked,
                                        [nX.T5]: s || r,
                                    }),
                                    children: n,
                                },
                                e,
                            );
                        },
                        [t, u, b, S],
                    ),
                    k = r.useCallback(
                        (e) =>
                            b(e)
                                ? D
                                    ? (0, l.jsx)(nj.ap, {})
                                    : (0, l.jsx)(nj.Ay, {})
                                : S(e)
                                  ? (0, l.jsx)("div", { className: nX.pQ })
                                  : null,
                        [b, S, D],
                    ),
                    U = r.useCallback((e) => (b(e) ? 41 : 33 * !!S(e)), [b, S]),
                    G = r.useCallback(
                        (e) => (e === u.length - 1 || t.has(u[e]?.sectionId) || b(e) || S(e) ? 0 : nQ),
                        [t, u, b, S],
                    );
                return {
                    listPadding: r.useMemo(() => ["" !== c ? n$ : nz, nZ, nY, 0], [c]),
                    renderRow: M,
                    renderSection: w,
                    renderSectionHeader: P,
                    renderSectionFooter: k,
                    sectionMarginBottom: G,
                    sectionHeaderHeight: r.useCallback((e) => (u[e].type === td.s.SEARCH_RESULTS ? 0 : nq), [u]),
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
                isUsingKeyboardNavigation: C,
                allowAnimatedEmoji: v,
                channelGuildId: T,
                messageId: y,
                isBurstReaction: j,
                listHeaderClassName: O,
                activeSectionIndex: U,
                emojiListRef: a,
            }),
            q = r.useCallback(
                (e) => {
                    let t = a.current?.getSectionDescriptors();
                    null == t ||
                        G(
                            Math.max(
                                t.findLastIndex((t) => t.offset.top <= e),
                                0,
                            ),
                        );
                },
                [a],
            );
        r.useLayoutEffect(() => {
            q(a.current?.getScrollerNode()?.scrollTop ?? 0);
        }, [a, q, f, E, R]);
        let ee = (0, eg.Fk)({
            activeCategoryIndex: b,
            isScrolling: S,
            listRef: a,
            onActiveCategoryIndexChange: function (e) {
                "" === R && ef.Om.setActiveCategoryIndex(e);
            },
            scrollOffset: 0,
            searchQuery: R,
            disableForSearch: !1,
        });
        (0, eg.FV)({ searchQuery: R, activeCategoryIndex: b, listRef: a });
        let et = r.useCallback(
                (e) => {
                    (ee(e),
                        q(e),
                        n2({ emojiListRef: a, sectionDescriptors: f, scrollTop: e, searchQuery: R, setShowUpsell: V }));
                },
                [ee, q, a, f, R, V],
            ),
            en = f.length > 0;
        (r.useEffect(() => {
            F &&
                (eD.default.track(eS.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: Q.e.EMOJI_PICKER_FLOATING_UPSELL,
                    location: P,
                    location_stack: D,
                }),
                (0, nx.sq)(eS.U7l.PREMIUM_UPSELL_VIEWED, D, () => (0, nT.uq)(Q.e.EMOJI_PICKER_FLOATING_UPSELL)));
        }, [P, D, F]),
            r.useEffect(() => {
                "" !== R && V(!1);
            }, [R]));
        let ei = r.useRef(null);
        return (
            r.useEffect(
                () => (
                    clearTimeout(ei.current),
                    (ei.current = setTimeout(() => {
                        (en
                            ? nh.O.announce(Y.intl.string(Y.t.uZ4F2O), "polite")
                            : nh.O.announce(Y.intl.string(Y.t.IxxiKF), "assertive"),
                            (ei.current = null));
                    }, 200)),
                    () => {
                        clearTimeout(ei.current);
                    }
                ),
                [en, R],
            ),
            (0, l.jsxs)("div", {
                className: nX.AD,
                children: [
                    en
                        ? (0, l.jsx)(nA.A, {
                              role: "none presentation",
                              className: nX.p_,
                              listPadding: K,
                              onScroll: et,
                              renderRow: B,
                              renderSection: H,
                              renderSectionHeader: W,
                              renderSectionFooter: X,
                              rowCount: _,
                              rowCountBySection: E,
                              rowHeight: c + 2 * n0,
                              sectionHeaderHeight: Z,
                              sectionMarginBottom: z,
                              sectionFooterHeight: $,
                              stickyHeaders: !0,
                              ref: a,
                          })
                        : (0, l.jsx)(np.A, {
                              message: (0, l.jsx)(J.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: Y.intl.string(Y.t.IxxiKF),
                              }),
                              className: nX.BZ,
                          }),
                    M || ng.Fr
                        ? null
                        : (0, l.jsx)(ny.d, {
                              showUpsell: F,
                              text:
                                  ((t = (0, eY.Dd)(Q.PremiumTypes.TIER_2)),
                                  Y.intl.format(Y.t.gMVjeS, {
                                      nitroTierName: t,
                                      onClick: () => {
                                          d({ type: tN.PREMIUM, emojiDescriptor: void 0 });
                                      },
                                  })),
                              button: ((n = (0, nC.qD)()), (0, eY.LE)(n, Q.pe.TIER_2) ?? Y.intl.string(Y.t.BmJkbd)),
                              buttonAnalyticsObject: { section: eS.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                              leadingAction: (0, l.jsx)(nO.l, {
                                  size: "sm",
                                  className: nX.ij,
                                  location: N.A.PREMIUM_WISHLIST_EMOJI_UPSELL,
                              }),
                          }),
                ],
            })
        );
    }),
    n2 = e0().throttle(
        function (e) {
            let { emojiListRef: t, sectionDescriptors: n, scrollTop: i, searchQuery: s, setShowUpsell: l } = e;
            l(
                (0, n_.s)({ listRef: t, searchQuery: s, nitroLockedSectionStates: n, scrollTop: i })
                    .areOnlyNitroLockedSectionsVisible,
            );
        },
        300,
        { leading: !1, trailing: !0 },
    );
var n3 = n(506774),
    n5 = n(28863),
    n4 = n(277984),
    n8 = n(404374),
    n6 = n(780964),
    n7 = n(766075),
    n9 = n(166403),
    ie = n(506150);
let it = "premiumRetentionEmojiPickerNotice",
    ii = n3.w.get(it),
    is = function (e) {
        let { closePopout: t, channel: n } = e,
            [i, s] = r.useState(!1),
            { subscription: a, hasFetchedSubscriptions: o } = (0, m.cf)([n9.A], () => ({
                subscription: n9.A.getPremiumSubscription(),
                hasFetchedSubscriptions: n9.A.hasFetchedSubscriptions(),
            }));
        if (
            (r.useEffect(() => {
                o || (0, n4.hP)();
            }, [o]),
            null == a || !(0, eY.PK)(a.status) || i)
        )
            return null;
        let c = a.status === eS.Dmq.PAST_DUE ? (0, eY.ji)(a).expiresDate : ei()(a.currentPeriodStart).add(Q.ph),
            u = `${a.id}:${c.toISOString()}`;
        if (ii === u) return null;
        let d =
            eY.Ay.getPremiumType(a.planId) === Q.PremiumTypes.TIER_0
                ? n8.k0.PREMIUM_TIER_0
                : eY.Ay.getPremiumType(a.planId) === Q.PremiumTypes.TIER_1
                  ? n8.k0.PREMIUM_TIER_1
                  : n8.k0.PREMIUM_TIER_2;
        return (0, l.jsxs)(J.E, {
            variant: "text-xs/medium",
            color: "text-default",
            className: ie.g$,
            children: [
                (0, l.jsx)(R.t, { size: "md", className: ie.lu, color: d }),
                (0, l.jsxs)("div", {
                    className: ie.Xn,
                    children: [
                        (0, l.jsx)(J.E, {
                            variant: "text-xs/normal",
                            children: Y.intl.format(Y.t.bTMjiO, {
                                planName: eY.Ay.getTierDisplayNameByPlanId(a.planId),
                                endsAt: c.toDate(),
                            }),
                        }),
                        (0, l.jsx)("div", {
                            children: (0, l.jsx)(n5.Anchor, {
                                onClick: () => {
                                    ((0, ek.xf)(n), t(), (0, n7.openUserSettings)(n6.X.NITRO_PANEL));
                                },
                                children: Y.intl.string(Y.t.W3aavh),
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(eA.D, {
                    onClick: () => {
                        (n3.w.set(it, u), (ii = u), s(!0));
                    },
                    children: (0, l.jsx)(e_.P, { size: "md", color: "currentColor", className: ie.YF }),
                }),
            ],
        });
    };
var il = n(148361);
let ir = (0, ew.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    ia = (0, ew.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT);
function io(e) {
    return e.stopPropagation();
}
function ic(e, t) {
    ef.Om.setInspectedExpressionPosition(e, t, eI.t.GRID_NAVIGATOR_EVENT);
}
let iu = u()(ek.bo, 200),
    id = u()(ek.Wi, 200),
    im = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    iE = r.memo(function (e) {
        let t,
            n,
            i,
            {
                pickerIntention: s,
                channel: a,
                guildId: c,
                closePopout: u,
                emojiSize: E = td.as.MEDIUM,
                hasTabWrapper: j = !1,
                onSelectEmoji: O,
                containerWidth: S,
                onNavigateAway: b,
                persistSearch: R,
                className: v,
                headerClassName: L,
                analyticsOverride: M = im,
                searchProps: P = {},
                wrapper: D,
                shouldHidePickerActions: U = !1,
                messageId: G,
                renderHeader: F,
                listHeaderClassName: J,
                categoryListClassName: V,
                showOnlyUnicode: K = !1,
                showAddEmojiButton: B,
                ref: H,
                isViewingEmojiPacks: W = !1,
                onViewEmojiPacksChange: X,
            } = e,
            { onFocus: z, onKeyDown: Z, autoFocus: $ = !0, accessory: q } = P,
            Q = (0, m.bG)([eP.Ay], () => (null != c ? eP.Ay.getDefaultChannel(c) : null), [c]),
            [ee, en] = r.useState(null),
            ei = r.useRef(""),
            es = (0, eE.RQ)((e) => e.searchQuery),
            el = r.useRef(null),
            er = r.useRef(null),
            ea = r.useRef(null);
        null == a && null != Q && (a = Q);
        let eo = a?.getGuildId() ?? c ?? null,
            [ec, eu] = r.useState(!1),
            eh = r.useRef(null),
            ep = w.default.getCurrentUser(),
            eA = (0, k.ki)(ep),
            e_ = ec && eA;
        r.useImperativeHandle(H, () => ({ onPickerOpen: e2 }));
        let { location: eN } = (0, p.p)(),
            { page: eC, section: ex, object: eT, openPopoutType: ej, popoutLocation: eO } = M,
            eb = r.useMemo(() => ({ ...eN, section: ex ?? eS.JJy.EMOJI_PICKER_POPOUT }), [eN, ex]),
            { analyticsLocations: eR } = (0, x.Ay)(N.A.EMOJI_PICKER),
            { diversitySurrogate: ew } = (0, m.cf)([y.Ay], () => ({ diversitySurrogate: y.Ay.diversitySurrogate })),
            eU = (0, ek.sL)(es, a, s, K),
            eG = null == eU ? 0 : eU.locked.length + eU.unlocked.length,
            eB = eM.iM.useSetting(),
            eW = r.useMemo(() => new Set(eB), [eB]),
            eX = r.useCallback((e) => {
                eM.iM.updateSetting(Array.from(e));
            }, []),
            ez = (0, eg.oV)({
                gridWrapperRef: el,
                containerWidth: S,
                showingEmptyState: W,
                listPaddingLeft: ia,
                listScrollbarWidth: 8,
            }),
            {
                rowCountBySection: eZ,
                sectionDescriptors: eY,
                emojiGrid: e$,
                columnCounts: eQ,
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
                        showOnlyUnicode: u,
                    } = e,
                    d = (0, m.bG)([y.Ay], () => y.Ay.categories),
                    f = r.useMemo(() => (u ? tg.Ay.getCategories() : d), [d, u]),
                    E = (0, m.bG)([ey.A], () => ey.A.getGuild(t?.getGuildId()), [t]),
                    I = t?.getGuildId() ?? n,
                    g = (0, m.bG)([y.Ay], () => y.Ay.getDisambiguatedEmojiContext(I), [I]),
                    h = (0, ek.XI)(I),
                    p = (0, ek.Fj)(I),
                    A = (0, ek.QZ)(I),
                    { topEmojis: _, newlyAddedEmojis: N } = (0, eV.A)(I, s),
                    C = (0, m.yK)([tp.Ay], () => tp.Ay.getFlattenedGuildIds(), []),
                    x = (0, m.bG)([y.Ay], () => y.Ay.expandedSectionsByGuildIds),
                    T = (0, m.bG)([w.default], () => w.default.getCurrentUser()),
                    j = (0, k.ki)(T),
                    O = (0, th.k0)(),
                    S = g.getGroupedCustomEmoji();
                return r.useMemo(() => {
                    let e = [],
                        n = [],
                        r = [],
                        u = [],
                        d = 0,
                        m = 0;
                    if (null != g && null != a) {
                        let g = Math.floor(a / (c + 2 * o)),
                            y = 3 * g;
                        function I(l, a) {
                            let o = new Map(),
                                f = i.has(a.sectionId),
                                [E, I] = e0().partition(l, (e) => {
                                    let n = eF.Ay.isEmojiDisabled({ emoji: e, channel: t, intention: s });
                                    return (o.set(e, n), !n);
                                }),
                                h = E.concat(I),
                                p = a.guild,
                                A = h.length > y && null != p && a.isNitroLocked,
                                C = A && !x.has(p.id);
                            C && h.splice(y - 1);
                            let T = Math.ceil((A ? h.length + 1 : h.length) / g),
                                j = [];
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
                                                a.sectionId === td.s.TOP_GUILD_EMOJI
                                                    ? (0, ek.DA)(_, N, e.id ?? e.uniqueName ?? e.name)
                                                    : td.tm.NONE,
                                        }));
                                if ((j.push(i), !f)) {
                                    if (A && e === T - 1) {
                                        let t = j[e];
                                        t.push({
                                            type: 1,
                                            guildId: p.id,
                                            name: Y.intl.string(Y.t.NZI2Zk),
                                            size: c,
                                            rowIndex: e,
                                            columnIndex: t.length,
                                            visibleRowIndex: d,
                                            sectionCollapsedToThreeRows: C,
                                        });
                                    }
                                    (u.push(i.length), r.push(i), d++);
                                }
                                m++;
                            }
                            let O = { ...a, count: l.length };
                            (n.push(O), e.push(f ? 0 : T));
                        }
                        if (null != l)
                            (0 !== l.unlocked.length &&
                                I(l.unlocked, {
                                    type: td.s.SEARCH_RESULTS,
                                    sectionId: td.s.SEARCH_RESULTS,
                                    count: l.unlocked.length,
                                    isNitroLocked: !1,
                                }),
                                0 !== l.locked.length &&
                                    I(l.locked, {
                                        type: td.s.PREMIUM_UPSELL,
                                        categoryId: td.R2.PREMIUM_UPSELL,
                                        sectionId: td.s.PREMIUM_UPSELL,
                                        count: l.locked.length,
                                        isNitroLocked: !j,
                                    }));
                        else
                            for (let e of f)
                                if (e === td.R2.CUSTOM) {
                                    function T(n) {
                                        let i = S.get(n);
                                        if (null == i) return;
                                        let l = i.filter(
                                            (e) =>
                                                !t_.includes(
                                                    eF.Ay.getEmojiUnavailableReason({
                                                        emoji: e,
                                                        channel: t ?? eP.Ay.getDefaultChannel(n),
                                                        intention: s,
                                                    }),
                                                ),
                                        );
                                        if (0 === l.length) return;
                                        let r = ey.A.getGuild(n),
                                            a =
                                                O ||
                                                (!j &&
                                                    eF.Ay.isEmojiCategoryNitroLocked({
                                                        categoryEmojis: l,
                                                        channel: t,
                                                        intention: s,
                                                    }));
                                        I(l, {
                                            categoryId: e,
                                            guild: r,
                                            type: td.s.GUILD,
                                            sectionId: null != r ? r.id : (0, tE.A)(),
                                            count: l.length,
                                            isNitroLocked: a,
                                        });
                                    }
                                    if ((null != E && T(E.id), (0, eK.isExternalEmojiAllowedForIntention)(s)))
                                        for (let e of C) (null == E || E.id !== e) && T(e);
                                } else if (e === td.R2.TOP_GUILD_EMOJI) {
                                    if (null != E) {
                                        let { allEmojis: t } = (0, eJ.W)({ topEmojis: _, newlyAddedEmojis: N });
                                        t.length > 0 &&
                                            I(t, {
                                                categoryId: e,
                                                guild: ey.A.getGuild(E.id),
                                                type: td.s.TOP_GUILD_EMOJI,
                                                sectionId: td.s.TOP_GUILD_EMOJI,
                                                count: t.length,
                                                isNitroLocked: !1,
                                            });
                                    }
                                } else if (e === td.R2.RECENT) {
                                    let n = (s === eK.EmojiIntention.REACTION ? A : p).filter(
                                        (e) => !eF.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }),
                                    );
                                    I(n, {
                                        categoryId: e,
                                        type: td.s.RECENT,
                                        sectionId: td.s.RECENT,
                                        count: n.length,
                                        isNitroLocked: !1,
                                    });
                                } else if (e === td.R2.FAVORITES) {
                                    let n = h.filter(
                                        (e) => !eF.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }),
                                    );
                                    0 !== n.length &&
                                        I(n, {
                                            categoryId: e,
                                            type: td.s.FAVORITES,
                                            sectionId: td.s.FAVORITES,
                                            count: n.length,
                                            isNitroLocked: !1,
                                        });
                                } else {
                                    let t = tg.Ay.getByCategory(e);
                                    null != t &&
                                        I(t, {
                                            categoryId: e,
                                            type: td.s.UNICODE,
                                            sectionId: e,
                                            count: t.length,
                                            isNitroLocked: !1,
                                        });
                                }
                    }
                    return { columnCounts: u, emojiGrid: r, rowCountBySection: e, sectionDescriptors: n };
                }, [g, a, c, o, l, i, S, x, t, s, _, N, j, f, E, C, A, p, h, O]);
            })({
                gridWidth: ez,
                fallbackGuildId: eo,
                channel: a,
                pickerIntention: s,
                emojiSearchResults: eU,
                collapsedSections: eW,
                emojiPaddingHorizontal: ir,
                emojiSpriteSize: E,
                showOnlyUnicode: K,
            }),
            { newlyAddedEmojis: e1 } = (0, eV.A)(eo, s);
        ((t = r.useRef({ intention: s, isBurstReaction: ec, analyticsObject: eT })),
            r.useEffect(() => {
                t.current.intention === eK.EmojiIntention.REACTION && eH(t.current);
            }, []));
        let e2 = r.useCallback(() => {
                let e = e1.length > 0 ? e1[0].id : null;
                ((0, em.uV)(eo, e), eH({ intention: s, isBurstReaction: ec, analyticsObject: eT }));
            }, [e1, eo, s, ec, eT]),
            e3 = (function (e) {
                let {
                        pickerIntention: t,
                        selectedChannel: n,
                        fallbackGuildId: i,
                        onSelectEmoji: s,
                        setUpsellConfigs: l,
                        emojiSelectAnalytics: a,
                        trackEmojiFavorited: o,
                    } = e,
                    c = (0, m.bG)([y.Ay], () => y.Ay.getDisambiguatedEmojiContext(n?.getGuildId() ?? i), [i, n]);
                return r.useCallback(
                    (e, i) => {
                        if (0 === e.type) {
                            let { emoji: r } = e;
                            if (null == r) return;
                            let u = eF.Ay.getEmojiUnavailableReason({ emoji: r, channel: n, intention: t });
                            if (i.toggleFavorite)
                                return void (c.isFavoriteEmojiWithoutFetchingLatest(r) || null != u
                                    ? (0, g.Sw)(r)
                                    : (o?.(e), (0, g.V4)(r)));
                            if (u !== eK.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) {
                                if (u === eK.EmojiDisabledReasons.PREMIUM_LOCKED) {
                                    (a?.(e, u), l({ type: 0, emojiDescriptor: e }));
                                    return;
                                }
                                if (u === eK.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED && r.type === tI.i.GUILD) {
                                    (a?.(e, u), l({ type: 1, guildId: r.guildId, emojiId: r.id }));
                                    return;
                                }
                                u !== eK.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE &&
                                    (a?.(e), s({ emoji: r, willClose: i.isFinalSelection, isBurst: i.isBurst }));
                            }
                        }
                    },
                    [n, t, s, l, c, a, o],
                );
            })({
                pickerIntention: s,
                selectedChannel: a,
                fallbackGuildId: eo,
                closePopout: u,
                onSelectEmoji: O,
                setUpsellConfigs: (e) => {
                    (null != e && W && X?.(!1), en(e));
                },
                emojiSelectAnalytics: (e, t) => {
                    "" !== es
                        ? (0, ek.Wf)({
                              emoji: e.emoji,
                              location: { ...eb, object: eS.ZSU.EMOJI },
                              searchQuery: es,
                              isLocked: null != t,
                              intention: s,
                              messageId: G,
                          })
                        : (0, ek._7)({
                              emoji: e.emoji,
                              location: { ...eb, object: eT ?? eS.ZSU.EMOJI, ...(null != eC && { page: eC }) },
                              pickerIntention: s,
                              category: e.category,
                              subCategory: e.subCategory,
                              position: e.columnIndex + 1,
                              newlyAddedHighlight:
                                  e.subCategory === td.tm.NEWLY_ADDED_EMOJI && ed.isNewerThanLastSeen(eo, e.emoji.id),
                              isBurstReaction: ec,
                              messageId: G,
                              lockedReason: t,
                              visibleRowIndex: e.visibleRowIndex,
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, ek.C5)({ emoji: e.emoji, location: { ...eb, object: eS.ZSU.EMOJI } });
                },
            }),
            e5 = r.useCallback(() => {
                (u(), b?.());
            }, [u, b]),
            {
                getItemProps: e4,
                getRowProps: e8,
                gridContainerProps: e6,
                handleGridContainerKeyDown: e7,
                isUsingKeyboardNavigation: e9,
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
                    u = (0, m.bG)([y.Ay], () => y.Ay.getDisambiguatedEmojiContext(o), [o]),
                    f = r.useCallback(
                        (e, i) => {
                            if (e.type === tA.EMOJI) {
                                if (null != e.emoji && i.altKey)
                                    return void (u.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                        ? (0, g.Sw)(e.emoji)
                                        : ((0, ek.C5)({ emoji: e.emoji, location: { ...t, object: eS.ZSU.EMOJI } }),
                                          (0, g.V4)(e.emoji)));
                                let l = {
                                    page: null != o ? eS.liQ.GUILD_CHANNEL : eS.liQ.DM_CHANNEL,
                                    section: eS.JJy.EMOJI_PICKER_POPOUT,
                                    object: eS.ZSU.EMOJI,
                                };
                                (c &&
                                    (l = {
                                        page: null != o ? eS.liQ.GUILD_CHANNEL : eS.liQ.DM_CHANNEL,
                                        section: eS.JJy.EMOJI_PICKER_POPOUT,
                                        object: eS.ZSU.EMOJI,
                                    }),
                                    (0, ek._7)({
                                        emoji: e.emoji,
                                        location: l,
                                        pickerIntention: n,
                                        category: e.category,
                                        subCategory: e.subCategory,
                                        newlyAddedHighlight:
                                            e.subCategory === td.tm.NEWLY_ADDED_EMOJI &&
                                            ed.isNewerThanLastSeen(o, e.emoji.id),
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
                    } = (0, eg.Ff)({
                        columnCounts: i,
                        gridNavigatorId: td.lq,
                        itemGrid: l,
                        itemList: a,
                        onGridNavigatorItemSelect: f,
                        onGridNavigatorPositionChange: ic,
                    });
                return (
                    r.useEffect(
                        () =>
                            ef.Om.subscribe(
                                (e) => e.inspectedExpressionPosition,
                                (e) => {
                                    if (null == e) return;
                                    let { columnIndex: t, rowIndex: n, source: i } = e;
                                    i !== eI.t.GRID_NAVIGATOR_EVENT &&
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
                analyticsLocation: eb,
                columnCounts: eQ,
                onSelectEmoji: O,
                emojiGrid: e$,
                emojiList: er,
                channelGuildId: eo,
                isBurstReaction: e_,
            });
        (((e, t) => {
            let [n, i] = r.useState(null);
            (r.useEffect(() => {
                null != n && (t.current?.scrollToSectionTop(n), i(null));
            }, [t, n]),
                r.useEffect(() => {
                    i(ef.Om.getState().activeCategoryIndex);
                }, [e]));
        })(S, er),
            r.useLayoutEffect(() => {
                $ && ea.current?.focus();
            }, [S, ew, ea, $]),
            (n = r.useRef(W)),
            r.useEffect(() => {
                ($ && n.current && !W && ea.current?.focus(), (n.current = W));
            }, [$, W, ea]),
            r.useEffect(() => {
                R || (0, eE.Ri)("");
            }, [R]),
            r.useEffect(
                () => (
                    eD.default.track(eS.HAw.OPEN_POPOUT, {
                        type: ej ?? "Emoji Picker",
                        guild_id: eo,
                        location: eO,
                        ...(0, C.dI)(a),
                    }),
                    () => {
                        (iu.cancel(), id.cancel());
                    }
                ),
                [ej, eo, eO, a],
            ),
            (0, A.Ay)(() => ((0, ek.V$)({ intention: s, location: eb }), (ei.current = es), ef.Om.resetStoreState)),
            r.useEffect(() => () => (0, eL.sF)(eL._2.FAVORITE_EMOJI_TOOLTIP), []),
            r.useLayoutEffect(() => {
                let { columnIndex: e, rowIndex: t } = ef.Om.getState().inspectedExpressionPosition;
                e$[t]?.[e] == null && 0 !== e && ef.Om.setInspectedExpressionPosition(0, 0);
            }, [e$]),
            r.useEffect(() => {
                if (("" === ei.current && "" !== es && (0, ek.EG)(eb, s), "" !== es && ei.current !== es)) {
                    let e = ef.Om.getAnalyticsId();
                    0 === eG
                        ? iu({ location: eb, searchQuery: es, intention: s, loadId: e })
                        : id({
                              totalResults: eG,
                              numEmojiLocked: eU?.locked.length ?? 0,
                              location: eb,
                              searchQuery: es,
                              intention: s,
                              loadId: e,
                          });
                }
                ei.current = es;
            }, [es, eb, eG, eU, s]));
        let te = D ?? (j ? "div" : I.l),
            tt = null != ez;
        function tn(e, t) {
            e3(e, { ...t, isBurst: e_ });
        }
        ee?.type === tN.PREMIUM
            ? (i = (0, l.jsx)(il.default, {
                  onUpsellClicked: e5,
                  emojiDescriptor: ee.emojiDescriptor,
                  pickerIntention: s,
                  analyticsLocation: eb,
                  onClose: () => en(null),
                  channel: a,
              }))
            : ee?.type === tN.ROLE_SUBSCRIPTION &&
              (i = (0, l.jsx)(ev, { onClose: () => en(null), guildId: ee.guildId, emojiId: ee.emojiId }));
        let ti = (0, _.A)((e, t, n) => {
                tn(
                    {
                        type: tA.EMOJI,
                        emoji: e,
                        isDisabled: !e.available,
                        size: E,
                        rowIndex: 0,
                        columnIndex: t,
                        visibleRowIndex: 0,
                        category: td.s.PACK,
                        subCategory: td.tm.NONE,
                    },
                    n,
                );
            }),
            ts = (0, l.jsx)(nc, {
                channel: a,
                pickerIntention: s,
                emojiListRef: er,
                onKeyDown: (e) => {
                    (e7?.(e), Z?.(e));
                },
                searchBarRef: ea,
                onFocus: z,
                autoFocus: $,
                accessory: q,
                headerClassName: L,
                diversitySurrogate: ew,
                isBurstReaction: ec,
                onBurstReactionToggle: function () {
                    (eu(!ec), ea.current?.focus());
                },
                burstToggleRef: eh,
                renderHeader: F,
                showAddEmojiButton: B,
                closePopout: u,
            }),
            tl = [];
        y.Ay.hasFavoriteEmojis(eo) || tl.push(f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let tr = (0, l.jsxs)(r.Fragment, {
                children: [
                    j ? ts : null,
                    (0, l.jsxs)("div", {
                        className: no.uK,
                        ref: el,
                        children: [
                            (0, l.jsx)(is, { channel: a, closePopout: u }),
                            (0, l.jsx)(T.Ay, {
                                contentTypes: tl,
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    if (t === f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                        return (0, l.jsx)(tJ, { markAsDismissed: () => n(tG.i.UNKNOWN) });
                                },
                            }),
                            U
                                ? null
                                : (0, l.jsx)("div", {
                                      className: no.Iy,
                                      id: td.lq,
                                      ...e6,
                                      children: tt
                                          ? (0, l.jsx)(n1, {
                                                collapsedSections: eW,
                                                diversitySurrogate: ew,
                                                emojiGrid: e$,
                                                emojiListRef: er,
                                                emojiSize: E,
                                                getEmojiItemProps: e4,
                                                getEmojiRowProps: e8,
                                                gridWidth: ez,
                                                isUsingKeyboardNavigation: e9,
                                                onEmojiSelect: tn,
                                                setUpsellConfigs: en,
                                                rowCount: e$.length,
                                                rowCountBySection: eZ,
                                                sectionDescriptors: eY,
                                                setCollapsedSections: eX,
                                                channelGuildId: eo,
                                                messageId: G,
                                                isBurstReaction: e_,
                                                listHeaderClassName: J,
                                            })
                                          : null,
                                  }),
                        ],
                    }),
                    (0, l.jsx)(nI, { emojiGrid: e$, className: no.qV, guildId: eo, pickerIntention: s, channel: a }),
                    i,
                    s === eK.EmojiIntention.REACTION
                        ? (0, l.jsx)(eq, { targetElementRef: eh, shouldShow: ec && !eA, onDismiss: () => eu(!1) })
                        : null,
                ],
            }),
            ta = (0, l.jsx)(h.A, {
                ...eb,
                children: (0, l.jsxs)(te, {
                    id: td.Do,
                    "aria-labelledby": j && !W ? td.k1 : void 0,
                    role: j && !W ? "tabpanel" : void 0,
                    className: o()(no.iE, { [no.r6]: j, [no.cB]: e_ }),
                    children: [
                        j || W ? null : ts,
                        (0, l.jsx)("div", {
                            className: o()(no.Fb, v),
                            onScroll: io,
                            children: W ? (0, l.jsx)(et, { onBack: () => X?.(!1), onSelectEmoji: ti }) : tr,
                        }),
                        U || W
                            ? null
                            : (0, l.jsx)(tU, {
                                  className: o()(no.jv, V),
                                  emojiListRef: er,
                                  sectionDescriptors: eY,
                                  intention: s,
                                  channel: a,
                                  fallbackGuildId: eo,
                                  showOnlyUnicode: K,
                                  onViewEmojiPacks: null != X ? () => X(!0) : void 0,
                              }),
                    ],
                }),
            });
        return (0, l.jsx)(x.f5, { value: eR, children: ta });
    });
