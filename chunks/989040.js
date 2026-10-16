(n.d(t, { A: () => iN }), n(321073));
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
    x = n(379848),
    O = n(236285),
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
    k = n(847374),
    U = n(320448),
    G = n(834040),
    F = n(499373),
    J = n(565645),
    V = n(938213),
    K = n(105292),
    B = n(126904);
let H = r.memo(function (e) {
    let { pack: t, isPinned: n, onAddPack: i, onRemovePack: s } = e,
        a = r.useId(),
        c = r.useId(),
        [u, d] = r.useState(!1),
        m = K.intl.string(u ? K.t.iTcuma : K.t.dcl9MQ),
        f = K.intl.string(n ? V.default["2zxYCx"] : V.default.Tvdb5N),
        E = r.useMemo(() => t.emojis.filter((e) => e.available), [t.emojis]);
    return (0, l.jsxs)("section", {
        "aria-labelledby": a,
        className: B.nM,
        children: [
            (0, l.jsxs)(S.B, {
                align: "center",
                direction: "horizontal",
                gap: 4,
                justify: "space-between",
                children: [
                    (0, l.jsxs)(S.B, {
                        align: "center",
                        className: B.DD,
                        direction: "horizontal",
                        gap: 4,
                        children: [
                            (0, l.jsx)(v.D, { className: B.UU, id: a, variant: "text-xs/bold", children: t.name }),
                            (0, l.jsx)(w.E, {
                                color: "text-subtle",
                                variant: "text-xs/medium",
                                children: K.intl.format(V.default.UA8cNe, { count: E.length }),
                            }),
                            (0, l.jsx)(j.m, {
                                text: m,
                                children: (0, l.jsx)(T.K, {
                                    "aria-controls": c,
                                    "aria-describedby": a,
                                    "aria-expanded": u,
                                    "aria-label": m,
                                    icon: u ? k.a : U._,
                                    onClick: () => d((e) => !e),
                                    size: "sm",
                                    variant: "icon-only",
                                }),
                            }),
                        ],
                    }),
                    (0, l.jsx)(j.m, {
                        text: f,
                        children: (0, l.jsx)(T.K, {
                            "aria-label": f,
                            icon: n ? G.MinusIcon : F.T,
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
                className: o()(B.gm, { [B.jE]: u }),
                role: "group",
                children: E.map((e) =>
                    (0, l.jsx)(J.A, { animated: e.animated, className: B.Zg, emojiId: e.id, emojiName: e.name }, e.id),
                ),
            }),
        ],
    });
});
var X = n(429800);
function W(e) {
    let { onBack: t } = e,
        n = K.intl.string(V.default.Nwj3fK),
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
        className: X.kL,
        children: [
            (0, l.jsx)("div", { "aria-hidden": !0, className: X.Tp }),
            (0, l.jsx)("div", {
                className: X.wx,
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
                                            children: K.intl.string(V.default["0+5+Oy"]),
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
                className: X.p_,
                children: s.map((e, t) =>
                    (0, l.jsxs)(
                        r.Fragment,
                        {
                            children: [
                                t > 0 ? (0, l.jsx)("hr", { className: X.yF }) : null,
                                (0, l.jsx)(H, {
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
var z = n(536637),
    Z = n.n(z),
    Y = n(73153),
    q = n(935208);
let $ = { lastSeenNewlyAddedEmojiIds: {} },
    Q = $,
    ee = {};
function et() {
    for (let e in ee) Q.lastSeenNewlyAddedEmojiIds[e] = ee[e];
}
class en extends m.Ay.PersistedStore {
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
        Q = e ?? $;
    }
    getState() {
        return Q;
    }
    getLastSeenEmojiByGuild(e) {
        return Q.lastSeenNewlyAddedEmojiIds[e];
    }
    isNewerThanLastSeen(e, t) {
        if (null == e || null == t) return !1;
        let n = this.getLastSeenEmojiByGuild(e);
        if (null == n || q.default.compare(t, n.id) > 0) return !0;
        {
            let e = Z()(n.lastSeen);
            return Z()().isBefore(e.add(2, "weeks")) && !n.acknowledged;
        }
    }
}
let ei = new en(Y.h, {
    LOGOUT: function () {
        ((Q = $), (ee = {}));
    },
    NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = ee[t] ?? Q.lastSeenNewlyAddedEmojiIds[t];
        null == i || 0 > q.default.compare(i.id, n)
            ? (ee[t] = { id: n, lastSeen: Date.now(), acknowledged: !0 })
            : (ee[t] = { ...i, acknowledged: !0 });
    },
    NEWLY_ADDED_EMOJI_SEEN_PENDING: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = ee[t] ?? Q.lastSeenNewlyAddedEmojiIds[t];
        (null == i || 0 > q.default.compare(i.id, n)) && (ee[t] = { id: n, lastSeen: Date.now(), acknowledged: !1 });
    },
    NEWLY_ADDED_EMOJI_SEEN_UPDATED: et,
    CLEAR_CACHES: function () {
        ((Q = $), et());
    },
    CONNECTION_CLOSED: et,
});
var es = n(451731),
    el = n(850992),
    er = n(151271),
    ea = n(60587),
    eo = n(887695),
    ec = n(562708),
    eu = n(462887),
    ed = n(939249),
    em = n(789645),
    ef = n(696986),
    eE = n(736653),
    eI = n(139286),
    eg = n(976860),
    eh = n(71393),
    ep = n(384684),
    eA = n(985242),
    e_ = n(652215),
    eN = n(746080),
    eC = n(196404);
function ex(e) {
    let t,
        { onClose: i, guildId: s, emojiId: r } = e,
        a = ((t = (0, eE.Ay)()), (0, eu.q)(t) ? n(454333) : n(674463)),
        { analyticsLocations: o } = (0, C.Ay)(_.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, eI.A)({
        type: ec.ImpressionTypes.MODAL,
        name: ec.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: { location_stack: o, emoji_guild_id: s, emoji_id: r ?? null },
    });
    let c = (0, m.bG)([eh.A], () => eh.A.getGuild(s)),
        u = (0, m.bG)([ep.A], () => null != s && ep.A.getUserSubscriptionRoles(s).size > 0),
        d = u ? K.intl.string(K.t.GoLM9z) : K.intl.formatToPlainString(K.t["h0u/Hi"], { serverName: c?.name }),
        f = u ? K.intl.string(K.t.PjZ7Db) : K.intl.string(K.t.p8FG1D);
    return (0, l.jsxs)("div", {
        className: eC.kL,
        children: [
            (0, l.jsx)("div", { className: eC.Tp }),
            (0, l.jsxs)("div", {
                className: eC.Qs,
                children: [
                    (0, l.jsx)(ed.D, {
                        className: eC.b,
                        "aria-label": K.intl.string(K.t.cpT0Cq),
                        onClick: i,
                        children: (0, l.jsx)(em.P, {
                            size: "xs",
                            color: "currentColor",
                            "aria-label": K.intl.string(K.t.cpT0Cq),
                            className: eC.yP,
                        }),
                    }),
                    (0, l.jsx)("img", { alt: "", src: a, className: eC.Tn }),
                    (0, l.jsx)(ef.h, { size: 22 }),
                    (0, l.jsx)(v.D, {
                        color: "text-strong",
                        variant: "heading-lg/extrabold",
                        className: eC.wx,
                        children: K.intl.string(K.t.cBjkcx),
                    }),
                    (0, l.jsx)(ef.h, { size: 4 }),
                    (0, l.jsx)(w.E, {
                        color: "text-default",
                        variant: "text-md/normal",
                        className: eC.h_,
                        children: d,
                    }),
                    (0, l.jsx)(ef.h, { size: 24 }),
                    (0, l.jsx)(eA.A, {
                        text: f,
                        onClick: function () {
                            (0, eg.pX)(e_.BVt.CHANNEL(s, eN.VV.ROLE_SUBSCRIPTIONS), { sourceLocationStack: o });
                        },
                    }),
                ],
            }),
        ],
    });
}
var eO = n(450510),
    eS = n(885386),
    ej = n(808728),
    eT = n(287809),
    ey = n(174459),
    eb = n(474090),
    eR = n(240248),
    ev = n(822123),
    eL = n(734057),
    eM = n(309010),
    eP = n(690521),
    eD = n(818645),
    ew = n(316884),
    ek = n(307731),
    eU = n(698279);
function eG(e) {
    let { intention: t, containerWidth: n, rowSize: i, isBurstReaction: s, analyticsObject: l } = e,
        r = eL.A.getChannel(eM.Ay.getChannelId()),
        a = r?.getGuildId(),
        o =
            t === ek.EmojiIntention.REACTION
                ? O.Ay.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice()
                : O.Ay.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        c = null != r ? O.Ay.getDisambiguatedEmojiContext(r.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        u =
            t === ek.EmojiIntention.REACTION
                ? O.Ay.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems
                : O.Ay.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        d = o.slice(0, u),
        m = null != a ? O.Ay.getGuildEmoji(a) : [],
        f = O.Ay.getDisambiguatedEmojiContext(r?.getGuildId()).getCustomEmoji(),
        { topEmojis: E, newlyAddedEmojis: I } = (0, ew.b)({ guildId: r?.getGuildId(), pickerIntention: t }),
        { visibleTopEmojis: g, visibleNewlyAddedEmojis: h } = (0, eD.W)({
            topEmojis: E,
            newlyAddedEmojis: I,
            rowSize: i,
        });
    N.Ay.trackWithMetadata(
        t === ek.EmojiIntention.REACTION ? e_.HAw.REACTION_PICKER_OPENED : e_.HAw.EXPRESSION_PICKER_OPENED,
        {
            width: n,
            tab: eU.kx.EMOJI,
            badged: !1,
            num_expressions_favorites: c.length,
            num_animated_expressions_favorites: c.filter((e) => e?.animated).length,
            num_custom_expressions_favorites: c.filter(eP.Ay.isCustomEmoji).length,
            num_standard_expressions_favorites: c.filter((e) => null == e.id).length,
            num_expressions_frecent: d.length,
            num_animated_expressions_frecent: d.filter((e) => e?.animated).length,
            num_custom_expressions_frecent: d.filter(eP.Ay.isCustomEmoji).length,
            num_standard_expressions_frecent: d.filter((e) => null == e.id).length,
            num_current_guild_expressions: m.length,
            num_custom_expressions_total: f.size,
            num_expressions_top_server: g.length,
            num_animated_expressions_top_server: g.filter((e) => e.animated).length,
            num_expressions_newly_added: h.length,
            num_animated_expressions_newly_added: h.filter((e) => e.animated).length,
            ...(t === ek.EmojiIntention.REACTION && { is_burst: s }),
            ...(null != l && { location_object: l }),
        },
    );
}
var eF = n(206248),
    eJ = n(724651),
    eV = n(732280),
    eK = n(783420),
    eB = n(158045),
    eH = n(202541);
let eX = { object: e_.ZSU.BUTTON_CTA, section: e_.JJy.SUPER_REACTION_PICKER };
function eW(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: i } = e,
        s = K.intl.string(K.t.eikz43),
        r = (0, eV.V)(),
        a = (0, eJ.O)(),
        o = r?.subscriptionTrial,
        c = null != o || null != a,
        u = o?.skuId ?? eH.pe.TIER_2,
        d = c
            ? null != a
                ? K.intl.formatToPlainString(K.t.bkQ4bH, { percent: a.discount.amount })
                : (0, eB.FY)({ intervalType: o?.interval, intervalCount: o?.intervalCount })
            : K.intl.string(K.t.sEAnVH);
    return (0, l.jsx)(eK.A, {
        subscriptionTier: u,
        premiumModalAnalyticsLocation: eX,
        onSubscribeModalClose: (e) => {
            e && i();
        },
        children: (e) => {
            let { onClick: r } = e;
            return (0, l.jsx)(eF.H, {
                targetElementRef: t,
                shouldShow: n,
                onRequestClose: i,
                position: "bottom",
                assetUrl: "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
                disableMediaViewer: !0,
                badge: c ? { type: "free_trial", variant: "expressive" } : void 0,
                title: K.intl.string(K.t.N4SCJ0),
                body: s,
                action: { text: d, variant: "expressive", icon: b.t, onClick: r },
            });
        },
    });
}
var ez = n(435558),
    eZ = n.n(ez),
    eY = n(837381),
    eq = n(460905),
    e$ = n(775602),
    eQ = n(713517),
    e0 = n(938612);
function e1(e) {
    let { onClick: t } = e,
        n = K.intl.string(V.default["3D0GLv"]);
    return (0, l.jsx)("div", {
        className: e0.n,
        children: (0, l.jsx)(j.m, {
            ariaHidden: !0,
            position: "right",
            text: n,
            children: (0, l.jsx)(ed.D, {
                "aria-label": n,
                className: e0.x,
                onClick: t,
                children: (0, l.jsx)(F.T, { size: "md", color: "currentColor" }),
            }),
        }),
    });
}
var e2 = n(88218),
    e3 = n(407698),
    e5 = n(941971),
    e4 = n(531685),
    e8 = n(406810),
    e6 = n(27232),
    e7 = n(369606),
    e9 = n(413249),
    te = n(141060),
    tt = n(687966),
    tn = n(115979),
    ti = n(524501),
    ts = n(926268),
    tl = n(138134),
    tr = n(7807),
    ta = n(732139);
let to = r.memo(function (e) {
    let { categoryId: t, ...n } = e,
        i = (function (e) {
            switch (e) {
                case ta.R2.RECENT:
                    return e8.ClockIcon;
                case ta.R2.FAVORITES:
                    return e6.StarIcon;
                case ta.R2.TOP_GUILD_EMOJI:
                    return e7.TrophyIcon;
                case ta.R2.PEOPLE:
                    return eq.n;
                case ta.R2.NATURE:
                    return e9.p;
                case ta.R2.FOOD:
                    return te.i;
                case ta.R2.ACTIVITY:
                    return tt.GameControllerIcon;
                case ta.R2.TRAVEL:
                    return tn.h;
                case ta.R2.OBJECTS:
                    return ti.D;
                case ta.R2.SYMBOLS:
                    return ts.HeartIcon;
                case ta.R2.FLAGS:
                    return tl.FlagIcon;
                case ta.R2.PREMIUM_UPSELL:
                    return b.t;
                case ta.R2.SOUNDMOJI:
                    return tr.J;
                default:
                    return;
            }
        })(t);
    return null == i ? null : (0, l.jsx)(i, { color: "currentColor", ...n });
});
var tc = n(724511),
    tu = n(132500),
    td = n(770335),
    tm = n(7584),
    tf = n(526292),
    tE = n(926972),
    tI = n(711014),
    tg =
        (((i = {})[(i.EMOJI = 0)] = "EMOJI"),
        (i[(i.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"),
        (i[(i.SOUNDMOJI = 2)] = "SOUNDMOJI"),
        i);
let th = [ek.EmojiDisabledReasons.DISALLOW_EXTERNAL, ek.EmojiDisabledReasons.DISALLOW_CUSTOM];
var tp = (((s = {})[(s.PREMIUM = 0)] = "PREMIUM"), (s[(s.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), s),
    tA = n(342379);
let t_ = "expression-guild-",
    { itemIdForIndex: tN } = (0, e2.J)(t_),
    tC = (0, eR.xI)(E.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    tx = (0, eR.xI)(E.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    tO = (0, eR.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    tS = (0, eR.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    tj = (0, eR.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    tT = (0, eR.xI)(tA.__invalid_unicodeCategoryShortcutHeight),
    ty = (0, eR.xI)(E.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    tb = (0, eR.xI)(E.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    tR = tO + tx + 2 * tj,
    tv = tC + tx,
    tL = tv + (ty + 2 * tb),
    tM = tO + tS + 2 * tj;
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
        m = r.useRef(null),
        { isHoveringOrFocusing: f } = (0, eQ.A)(m),
        E = (0, eY.rm)(tN(n)),
        I = a.type === ta.s.GUILD ? null : a.id,
        g = t === n,
        h = a.type === ta.s.GUILD ? a.guild : null,
        p = (0, l.jsxs)(ed.D, {
            innerRef: m,
            ...E,
            "aria-label": (0, ev.wt)(a, h),
            className: o()({
                [tA.ZG]: null != h,
                [tA.Bj]: null == h,
                [tA.s6]: null == h && g,
                [tA.xg]: a.type === ta.s.RECENT,
            }),
            onClick: () => {
                (null != h &&
                    ey.default.track(e_.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: i?.location,
                        tab: eU.kx.EMOJI,
                        guild_id: h.id,
                    }),
                    c(n));
            },
            children: [
                (0, l.jsx)("div", {
                    className: tA.a$,
                    children: (0, l.jsx)(e5.A, { hovered: f, selected: g, size: "small" }),
                }),
                null != h
                    ? (0, l.jsx)(tc.A, { guild: h, isSelected: g, shouldAnimate: !d && u, isLocked: a.isNitroLocked })
                    : null,
                null == h && null != I
                    ? (0, l.jsx)(to, { categoryId: I, className: tA.Yl, height: tO, width: tO, size: "custom" })
                    : null,
            ],
        }),
        A = s[n + 1],
        _ = null != A && a.type === ta.s.GUILD && A.type !== ta.s.GUILD;
    return null != h
        ? (0, l.jsxs)(r.Fragment, {
              children: [
                  (0, l.jsx)(e3.Q, { guild: h, children: p }),
                  _ ? (0, l.jsx)("hr", { className: tA.ny }, "separator") : null,
              ],
          })
        : p;
}
let tD = (e) => {
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
        E = el.Om.useStore((e) => e.activeCategoryIndex),
        I = (function (e) {
            let { emojiListRef: t } = e,
                n = (0, er.RQ)((e) => e.searchQuery),
                i = r.useCallback((e) => t.current?.scrollToSectionTop(e), [t]);
            return r.useCallback(
                (e) => {
                    "" !== n ? ((0, er.Ri)(""), el.Om.setActiveCategoryIndex(e)) : i(e);
                },
                [i, n],
            );
        })({ sectionDescriptors: i, emojiListRef: n }),
        g = (0, p.p)(),
        h = (0, ev.ss)(s, a, { guildId: a?.guild_id ?? c, shouldShowSoundmojiInEmojiPicker: u }),
        A = r.useMemo(() => (d ? (0, ev.CQ)() : h), [h, d]),
        _ = r.useRef(null),
        N = (0, m.bG)([e4.A], () => e4.A.isFocused()),
        C = (0, m.bG)([e$.Ay], () => e$.Ay.useReducedMotion, []),
        x = r.useMemo(
            () =>
                eZ().memoize(
                    (e, t) => {
                        let n = A[t];
                        if (null != n)
                            return (0, l.jsx)(
                                tP,
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
        O = r.useMemo(() => [8, 8, 0, 8], []),
        S = r.useCallback(
            (e, t) => {
                let n = A[t];
                if (n.type === ta.s.RECENT) return tR;
                if (n.type === ta.s.GUILD) {
                    let e = A[t + 1];
                    return null != e && e.type !== ta.s.GUILD ? tL : tv;
                }
                return tM;
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
                s.type === ta.s.GUILD
                    ? ((t += 1), (n += 1))
                    : s.type === ta.s.UNICODE
                      ? (i += 1)
                      : ((e += 1), (t += 1));
            });
            let s = tR + t * tv + tL;
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
                null == t || (e + t.height - ty >= y ? v(!1) : v(!0));
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
                let i = R ? tT : 0;
                if (n.type === ta.s.RECENT) return t ? 0 : tS;
                if (n.type === ta.s.GUILD) {
                    let n = A[e + 1];
                    return null != n && n.type !== ta.s.GUILD ? (t ? ty + -2 * tb + tx + i : tx) : t ? i : tx;
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
    return (0, l.jsx)(e2.A, {
        categoryListRef: _,
        expressionsListRef: n,
        className: t,
        store: el.Om,
        categories: A,
        listPadding: O,
        onScroll: L,
        renderCategoryListItem: x,
        renderSection: D,
        rowCount: A.length,
        categoryHeight: S,
        getScrollOffsetForIndex: P,
        rowCountBySection: b,
        navId: "emoji-picker-categories",
        itemIdPrefix: t_,
        emojiPacksHeader: null != f ? (0, l.jsx)(e1, { onClick: f }) : null,
        children: (e) =>
            j >= 7 &&
            (0, l.jsx)(
                ed.D,
                {
                    "aria-hidden": !R,
                    "aria-label": K.intl.string(K.t.dT0ctw),
                    className: o()(tA.KB, { [tA.h_]: !R }),
                    tabIndex: R ? 0 : -1,
                    onClick: () => M(e),
                    children: (0, l.jsx)(eq.n, { size: "custom", color: "currentColor", height: tO, width: tO }),
                },
                w,
            ),
    });
};
var tw = n(49999),
    tk = n(860197);
let tU = function (e) {
    let { markAsDismissed: t } = e;
    return (0, l.jsxs)(w.E, {
        variant: "text-xs/medium",
        color: "text-default",
        className: tk.iE,
        children: [
            (0, l.jsx)(ts.HeartIcon, { size: "md", color: "currentColor", className: tk.Kk }),
            (0, l.jsx)("div", {
                className: tk.Qs,
                children: (0, l.jsx)(w.E, { variant: "text-xs/normal", children: K.intl.string(K.t.xdRf69) }),
            }),
            (0, l.jsx)(ed.D, {
                onClick: () => t(tw.i.UNKNOWN),
                children: (0, l.jsx)(em.P, { size: "md", color: "currentColor", className: tk.VN }),
            }),
        ],
    });
};
var tG = n(308941),
    tF = n(717421),
    tJ = n(343032),
    tV = n(683063),
    tK = n(131607),
    tB = n(748798);
let tH = { tension: 750, mass: 2.5, friction: 70 };
function tX(e) {
    let { checked: t, onClick: n, buttonRef: i } = e,
        s = (0, m.bG)([e$.Ay], () => e$.Ay.useReducedMotion),
        a = eT.default.getCurrentUser(),
        c = null != a && !(0, eB.TW)(a),
        u = c ? [] : [f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP],
        [d, E] = (0, tK.kn)(u),
        [I, g] = r.useState(!1),
        [h, p] = (0, tF.z)(() => ({})),
        A = (0, tG.animated)(tJ.i);
    r.useEffect(() => {
        let e = d === f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (E(tw.i.DISMISS), setTimeout(() => g(e), 200));
    }, [d, E]);
    let _ = I ? K.intl.string(K.t["Osi/uy"]) : t && !c ? K.intl.string(K.t["5cRA/b"]) : K.intl.string(K.t.buV4av),
        N = I ? K.intl.string(K.t.ORK94p) : void 0;
    return (0, l.jsx)(tV.u, {
        position: "top",
        title: N,
        body: _,
        asset: (0, l.jsx)(b.t, { size: "md", color: "currentColor" }),
        assetSize: 20,
        forceOpen: I,
        children: (0, l.jsx)(ed.D, {
            innerRef: i,
            "aria-label": _,
            "aria-pressed": t,
            onClick: function () {
                (p({ from: { rotate: t ? "360deg" : "0deg" }, to: { rotate: t ? "0deg" : "360deg" }, config: tH }),
                    n?.(),
                    g(!1));
            },
            focusProps: { enabled: !1 },
            className: o()(tB.Pf, { [tB.wM]: t }),
            children: (0, l.jsx)(A, {
                style: s ? void 0 : h,
                size: "custom",
                width: 20,
                height: 20,
                color: t ? "white" : "currentColor",
                className: tB.Kk,
            }),
        }),
    });
}
var tW = n(821609),
    tz = n(644508),
    tZ = n(824832),
    tY = n(267102),
    tq = n(242812);
function t$(e) {
    let { channel: t, closePopout: n } = e,
        i = r.useRef(null),
        s = r.useRef(0),
        [a, o] = r.useState(!1),
        [c, u] = r.useState(!1),
        d = (0, tY.Us)() === e_.BRT.OVERLAY,
        m = c || a,
        f = r.useCallback(
            async (e, i, l) => {
                (u(!0),
                    n(),
                    await (0, tz.f)({
                        userImage: { data: e, file: i, image: l },
                        guildId: t?.guild_id ?? null,
                        analyticsLocation: {
                            section: e_.JJy.EXPRESSION_PICKER,
                            page: t?.guild_id != null ? e_.liQ.GUILD_CHANNEL : e_.liQ.DM_CHANNEL,
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
                text: d ? K.intl.string(K.t.RMbedC) : null,
                children: (0, l.jsx)(tW.$, {
                    text: K.intl.string(K.t.iMJO37),
                    variant: "secondary",
                    onClick: function () {
                        i.current?.activateUploadDialogue();
                    },
                    disabled: m || d,
                }),
            }),
            (0, l.jsx)("div", {
                className: tq.F,
                children: (0, l.jsx)(tZ.Ay, { ref: i, onChange: f, setLoading: o, disabled: m }, s.current),
            }),
        ],
    });
}
n(667532);
var tQ = n(833272),
    t0 = n(82495),
    t1 = n(260762),
    t2 = n(915089),
    t3 = n(650583),
    t5 = n(683829);
let t4 = (0, t2.Ld)(),
    t8 = tQ.A.convert.fromCodePoint("1f44f"),
    t6 = (0, eR.xI)(E.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
function t7(e) {
    switch (tQ.A.convert.toCodePoint(e)) {
        case "1f3fb":
            return K.intl.string(K.t["BVK5b/"]);
        case "1f3fc":
            return K.intl.string(K.t.xJWOK8);
        case "1f3fd":
            return K.intl.string(K.t["MB+T5g"]);
        case "1f3fe":
            return K.intl.string(K.t.MODud2);
        case "1f3ff":
            return K.intl.string(K.t["0uzqsc"]);
        default:
            return K.intl.string(K.t.bGN1ow);
    }
}
let t9 = (e) => {
    let { fade: t, surrogate: n, onClick: i, delay: s, index: r } = e,
        a = (0, eY.rm)(`item-${r}`),
        o = eP.Ay.getURL(t8 + n),
        c = (0, tF.z)({ opacity: 1, from: { opacity: +!t }, delay: s }, "animate-always");
    return (0, l.jsx)(ed.D, {
        ...a,
        role: "option",
        "aria-selected": 0 === r,
        onClick: () => i(n),
        className: t5.B6,
        children: (0, l.jsx)(tG.animated.div, {
            "aria-label": t7(n),
            className: t5.g4,
            style: { backgroundImage: `url("${o}")`, ...c },
        }),
    });
};
function ne(e) {
    let { id: t, selectedSurrogate: n, onClick: i } = e,
        s = (0, t1.A)("diversity"),
        a = (0, tF.z)({ height: (t6 + 14) * (tm.W$.length + 1), from: { height: t6 + 14 }, config: { duration: 125 } }),
        o = r.useRef(s);
    r.useEffect(() => {
        o.current.focusFirstVisibleItem();
    }, []);
    let c = ["", ...tm.W$];
    return (
        eZ().remove(c, (e) => e === n),
        c.unshift(n),
        (0, l.jsx)(eY.hD, {
            navigator: s,
            children: (0, l.jsx)(eY.PR, {
                children: (e) => {
                    let { ref: n, ...s } = e;
                    return (0, l.jsx)(tG.animated.div, {
                        ...s,
                        id: t,
                        ref: n,
                        className: t5.J6,
                        style: a,
                        role: "listbox",
                        children: c.map((e, t) =>
                            (0, l.jsx)(t9, { index: t, fade: 0 !== t, delay: 20 * t, surrogate: e, onClick: i }, t),
                        ),
                    });
                },
            }),
        })
    );
}
let nt = function (e) {
    let { searchBarRef: t, selectedSurrogate: n, className: i } = e,
        s = eP.Ay.getURL(t8 + n),
        [a, c] = r.useState(!1),
        u = (0, t0.A)(null, () => c(!1)),
        d = r.useRef(null);
    return (0, l.jsxs)("div", {
        ref: u,
        className: o()(t5.fx, i),
        children: [
            (0, l.jsx)(ed.D, {
                innerRef: d,
                className: t5.Dj,
                onClick: function () {
                    c(!0);
                },
                "aria-label": K.intl.formatToPlainString(K.t["2SfnMp"], { skinTone: t7(n) }),
                "aria-haspopup": !0,
                "aria-expanded": a,
                "aria-controls": t4,
                tabIndex: a ? -1 : 0,
                children: (0, l.jsx)("div", { className: t5.g4, style: { backgroundImage: `url("${s}")` } }),
            }),
            a
                ? (0, l.jsx)("div", {
                      onKeyDown: function (e) {
                          e.key === t3.dh.ESCAPE
                              ? (e.stopPropagation(), c(!1), null != d.current && d.current.focus())
                              : "Tab" === e.key && c(!1);
                      },
                      children: (0, l.jsx)(ne, {
                          id: t4,
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
var nn = n(462180),
    ni = n(602034),
    ns = n(683438);
let nl = r.memo(function (e) {
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
        d = (0, er.RQ)((e) => e.searchQuery),
        [m, f, E] = el.Om.useStore((e) => [e.inspectedExpressionPosition, e.searchPlaceholder, e.hasInteracted], nn.x),
        I = r.useCallback(
            (e) => {
                (el.Om.setActiveCategoryIndex("" === e ? 0 : -1),
                    el.Om.setInspectedExpressionPosition(0, 0),
                    el.Om.setSearchPlaceholder(null),
                    (0, er.Ri)(e),
                    t.current?.scrollTo(0));
            },
            [t],
        ),
        g = r.useCallback(() => {
            I("");
        }, [I]);
    return (
        r.useImperativeHandle(c, () => ({ focus: () => u.current?.focus() })),
        (0, l.jsx)(ns.I, {
            autoFocus: a,
            query: d,
            ref: u,
            placeholder: f ?? o,
            onClear: g,
            onKeyDown: function (e) {
                switch (e.key) {
                    case t3.dh.ARROW_LEFT:
                    case t3.dh.ARROW_RIGHT:
                    case t3.dh.ARROW_UP:
                    case t3.dh.ARROW_DOWN:
                        document.activeElement !== e.target && e.preventDefault();
                }
                i(e);
            },
            onFocus: s,
            onChange: I,
            inputProps: {
                role: "combobox",
                "aria-label": K.intl.string(K.t.tCauZX),
                "aria-haspopup": "grid",
                "aria-autocomplete": "list",
                "aria-controls": n,
                "aria-expanded": !0,
                ...(E ? { "aria-activedescendant": (0, ni.Aq)(n, m.columnIndex, m.rowIndex) } : void 0),
            },
        })
    );
});
var nr = n(381575);
let na = function (e) {
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
                (0, l.jsx)(nl, {
                    emojiListRef: r,
                    gridNavigatorId: ta.lq,
                    onKeyDown: a,
                    ref: d,
                    onFocus: c,
                    autoFocus: u,
                    defaultSearchPlaceholder: (0, ev.wT)(i, f),
                }),
                i === ek.EmojiIntention.REACTION ? (0, l.jsx)(tX, { checked: f, onClick: E, buttonRef: I }) : null,
                n ?? (0, l.jsx)(nt, { searchBarRef: d, className: nr.fx, selectedSurrogate: m }),
                i !== ek.EmojiIntention.NO_CUSTOM_EMOJI && h ? (0, l.jsx)(t$, { channel: t, closePopout: p }) : null,
            ],
        });
    return (0, l.jsx)("div", { className: o()(nr.wx, s), children: null != g ? g(A) : A });
};
var no = n(182922),
    nc = n(363195),
    nu = n(486020),
    nd = n(977566);
function nm(e) {
    return null != e && "animated" in e;
}
let nf = r.memo(function (e) {
    let t,
        i,
        { className: s, emojiGrid: a, guildId: o, pickerIntention: c, channel: u } = e,
        d = el.Om.useStore((e) => e.inspectedExpressionPosition),
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
    let E = (0, m.bG)([eh.A], () => (null !== t && t.type === td.i.GUILD ? eh.A.getGuild(t.guildId) : null), [t]),
        I = (0, m.bG)([e4.A], () => e4.A.isFocused()),
        g = (0, m.bG)([e$.Ay], () => e$.Ay.useReducedMotion, []),
        h = eS.Sf.useSetting(),
        p = (0, ev.O7)(o, nm(t) ? t : null),
        A = (0, m.bG)([O.Ay], () => O.Ay.expandedSectionsByGuildIds),
        { newlyAddedEmojis: _ } = (0, ew.A)(o, c),
        N = f?.type === tg.EMOJI ? f.subCategory : ta.tm.NONE;
    if (
        (r.useEffect(() => {
            let e = Date.now();
            return () => {
                Date.now() - e >= 250 &&
                    nm(t) &&
                    N !== ta.tm.NONE &&
                    (N === ta.tm.NEWLY_ADDED_EMOJI &&
                        null !== t &&
                        t.type === td.i.GUILD &&
                        (0, es.mz)(t.guildId, _[0].id),
                    null != d.source &&
                        (0, ev.yB)({
                            emoji: t,
                            subCategory: N,
                            position: f.columnIndex + 1,
                            newlyAddedHighlight: N === ta.tm.NEWLY_ADDED_EMOJI && ei.isNewerThanLastSeen(o, t.id),
                        }));
            };
        }),
        null == t)
    )
        return null;
    let C = (function (e, t) {
            let { allowAnimatedEmoji: i, sectionsExpandedFromThreeRows: s, theme: r } = t;
            if (nm(e)) {
                let t = null != e.id ? nu.Ay.getEmojiURL({ id: e.id, animated: i && e.animated, size: 28 }) : e.url;
                return "" === t
                    ? (0, l.jsx)(w.E, {
                          variant: "text-md/normal",
                          className: nd.J_,
                          children: "surrogates" in e ? e.surrogates : null,
                      })
                    : (0, l.jsx)("img", { alt: (0, eP.N)(e) ?? "", src: t, className: nd.Zg });
            }
            if ("EXPAND_OR_COLLAPSE_EMOJI" !== e.type) return null;
            {
                let t = n(619508),
                    i = n(404828),
                    a = n(600003),
                    o = n(318121);
                return s.has(e.guildId)
                    ? (0, l.jsx)("img", { className: nd.Kk, src: (0, eu.M)(r) ? a : o, alt: "" })
                    : (0, l.jsx)("img", { className: nd.Kk, src: (0, eu.M)(r) ? t : i, alt: "" });
            }
        })(t, { allowAnimatedEmoji: h, sectionsExpandedFromThreeRows: A, theme: nc.A.theme }),
        x =
            null != E
                ? (0, l.jsx)(tc.A, { className: nd.__invalid_guildIcon, guild: E, shouldAnimate: !g && I })
                : null;
    i =
        "EXPAND_OR_COLLAPSE_EMOJI" === t.type
            ? A.has(t.guildId)
                ? K.intl.string(K.t["/K2RDH"])
                : K.intl.string(K.t.NZI2Zk)
            : (0, eP.N)(t);
    let S = (function (e) {
        let { inspectedEmoji: t, guild: n } = e,
            i = nm(t);
        return null != n && i ? K.intl.format(K.t.KFW2aY, { guildName: n.name }) : null;
    })({ inspectedEmoji: t, channel: u, guildId: o, intention: c, guild: E });
    return (0, l.jsx)(no.A, {
        className: s,
        graphicPrimary: C,
        graphicSecondary: x,
        titlePrimary: i,
        titleSecondary: S,
        isFavorite: p,
        emojiSubCategory: N,
    });
});
n(30146);
var nE = n(607399),
    nI = n(765178),
    ng = n(537652),
    nh = n(962125),
    np = n(240864),
    nA = n(286509),
    n_ = n(89366),
    nN = n(10392),
    nC = n(82498),
    nx = n(202639),
    nO = n(414872),
    nS = n(285373),
    nj = n(559106),
    nT = n(304072),
    ny = n(189551),
    nb = n(289873),
    nR = n(796774),
    nv = n(209932),
    nL = n(817232),
    nM = n(576705);
n(980504);
var nP = n(818348),
    nD = n(821425);
let nw = r.memo(function (e) {
    let t,
        n,
        i,
        s,
        { channelId: a, onSelectSoundmoji: o } = e,
        c = (0, m.bG)([nv.A], () => !nv.A.isFetching() && !nv.A.hasFetchedAllSounds(), []),
        u = (0, m.bG)([eL.A], () => eL.A.getChannel(a)),
        d =
            ((t = (0, m.bG)([eT.default], () => eB.Ay.canUseSoundboardEverywhere(eT.default.getCurrentUser()))),
            (n = (0, m.bG)([nv.A], () => nv.A.getSoundsForGuild("0"))),
            (i = (0, m.yK)([eh.A], () => eh.A.getGuildIds())),
            (s = r.useMemo(() => nM.A.can(nP.xB.USE_EXTERNAL_SOUNDS, u), [u])),
            r.useMemo(() => {
                let e = [];
                if (t && s) {
                    let t = i.flatMap((e) => nv.A.getSoundsForGuild(e)?.filter((e) => e.available) ?? []);
                    e.push(...eZ().sampleSize(t, 4));
                } else if (u?.guild_id != null) {
                    let t = nv.A.getSoundsForGuild(u?.guild_id)?.filter((e) => e.available);
                    e.push(...eZ().sampleSize(t, 4));
                }
                return (e.length < 4 && e.push(...eZ().sampleSize(n ?? [], 4 - e.length)), e);
            }, [s, u?.guild_id, n, i, t]));
    return (r.useEffect(() => {
        (0, nR.E7)();
    }, [c]),
    0 === d.length)
        ? (0, l.jsx)(nb.y, {})
        : (0, l.jsx)("div", {
              className: nD.q,
              children: d.map((e, t) =>
                  (0, l.jsx)(
                      nL.Ay,
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
var nk = n(594061),
    nU = n(771104),
    nG = n(442433),
    nF = n(147421),
    nJ = n(723702),
    nV = n(140735),
    nK = n(194261),
    nB = n(703413);
let nH = (e) => {
    let { src: t, alt: n, size: i, "aria-label": s, className: a } = e,
        c = r.useRef(null),
        u = r.useRef(!1),
        d = u.current ? nB.S : nB.Y;
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
                          ((u.current = !0), c.current.classList.remove(nB.Y), c.current.classList.add(nB.S));
                  });
              },
    });
};
var nX = n(955388);
let nW = eZ().memoize(
        (e) =>
            `${e * ek.EmojiSprites.NonDiversityPerRow}px ${e * Math.ceil(tm.Ay.numNonDiversitySprites / ek.EmojiSprites.NonDiversityPerRow)}px`,
    ),
    nz = eZ().memoize(
        (e) =>
            `${e * ek.EmojiSprites.DiversityPerRow}px ${e * Math.ceil(tm.Ay.numDiversitySprites / ek.EmojiSprites.DiversityPerRow)}px`,
    ),
    nZ = r.memo(function (e) {
        let { emoji: t, size: i, surrogateCodePoint: s, allowAnimatedEmoji: a, "aria-label": c, isLocked: u } = e,
            d = (() => {
                if (!t.useSpriteSheet) {
                    let e =
                        null == t.id
                            ? t.url
                            : nu.Ay.getEmojiURL({ id: t.id, animated: a && t.animated, size: ek.EMOJI_URL_BASE_SIZE });
                    return null != e
                        ? (0, l.jsx)(nH, {
                              className: nX.N1,
                              "aria-label": c,
                              src: e,
                              size: i,
                              alt: (0, eP.N)(t) ?? "",
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
                              (l = nz(i)),
                              (r = ek.EmojiSprites.DiversityPerRow))
                            : ((s = n(145519)(`./spritesheet-emoji-${i}.png.js`).default),
                              (l = nW(i)),
                              (r = ek.EmojiSprites.NonDiversityPerRow));
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
                    children: (0, l.jsx)(nV.A, { children: c }),
                });
            })();
        return (0, l.jsxs)(r.Fragment, {
            children: [
                d,
                u
                    ? (0, l.jsx)("div", {
                          className: nX.iD,
                          children: (0, l.jsx)(nK.LockIcon, { size: "xs", color: "currentColor", className: nX.fi }),
                      })
                    : null,
            ],
        });
    });
var nY = n(537911);
function nq(e) {
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
        N = (0, m.bG)([eh.A], () => (n.type === td.i.GUILD ? eh.A.getGuild(n.guildId) : void 0), [n]);
    return (0, l.jsx)(nj.vN, {
        children: (0, l.jsx)("button", {
            ..._,
            className: o()(nY._X, { [nY.lG]: s, [nY.Lh]: r, [nY.Bx]: a, [h ?? ""]: a, [nY.TV]: u }),
            "data-type": ea.g.EMOJI,
            "data-id": n.id,
            "data-name": n.name,
            "data-surrogates": "surrogates" in n ? n.surrogates : null,
            "data-animated": n.animated ? "true" : null,
            ref: A,
            children: (0, l.jsx)(nZ, {
                "aria-label":
                    ((t = (0, eP.N)(n)),
                    (N?.name != null &&
                        (t = K.intl.formatToPlainString(K.t["nXv4/B"], { names: t, guildName: N.name })),
                    i)
                        ? K.intl.formatToPlainString(K.t["9FI9Z0"], { names: t })
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
function n$(e) {
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
            isBurstReaction: S,
            rowPosition: T,
            inNitroLockedSection: y,
        } = e,
        [b, R] = r.useState(""),
        v = (0, m.bG)([e$.Ay], () => e$.Ay.useReducedMotion),
        L = (0, m.bG)([O.Ay], () => O.Ay.getDisambiguatedEmojiContext(o), [o]),
        M = r.useRef(null),
        { emoji: P, size: D, isDisabled: w, columnIndex: k } = t;
    function U() {
        d.current || f.current || c(t);
    }
    let { ref: G, tabIndex: F, onFocus: J, ...V } = h(k, a) ?? {},
        B =
            b !== `${k}:${a}`
                ? (0, l.jsx)(nq, {
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
                              null != x &&
                              !e.shiftKey &&
                              null != P.name &&
                              S &&
                              !v &&
                              N
                          ) {
                              let e = null == P.id ? tm.Ay.convertNameToSurrogate(P.name) : P.name,
                                  t = M.current.getBoundingClientRect();
                              ((t.x = T.x + (k + 1) * D), R(`${k}:${a}`), (0, nF.h)(x, e, P.id, t));
                          }
                          !(function (e) {
                              if ((e.stopPropagation(), d.current || f.current)) return;
                              let n = e.altKey;
                              (n &&
                                  !O.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(P) &&
                                  C(i),
                                  (0, eO.sF)(eO._2.FAVORITE_EMOJI_TOOLTIP),
                                  u(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n }));
                          })(e);
                      },
                      onContextMenu: function (e) {
                          (0, nG.L3)(e, async () => {
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
        { ...V, key: i, ref: M },
        E
            ? (0, l.jsx)(j.m, {
                  text: K.intl.formatToPlainString(K.t.glqNsf, { key: (0, nJ.isMac)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: B,
              })
            : B,
    );
}
let nQ = (e) => {
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
            isBurstReaction: x,
            inNitroLockedSection: O,
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
        P = (0, eE.Ay)(),
        D = el.Om.getState(),
        [k, U] = r.useState(D.inspectedExpressionPosition),
        [G, F] = (0, nT.A)(null, 300),
        J = r.useRef(null);
    (r.useEffect(
        () =>
            el.Om.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => U(e),
            ),
        [],
    ),
        r.useEffect(() => {
            nk.bW.loadIfNecessary();
        }, []));
    let V = i === ta.as.LARGE,
        B = i === ta.as.MEDIUM;
    function H(e) {
        let t = `${e.rowIndex}c${e.columnIndex}`;
        switch (e.type) {
            case tg.EXPAND_OR_COLLAPSE_EMOJIS: {
                let { visibleRowIndex: n, columnIndex: i } = e,
                    a = k.rowIndex === n && k.columnIndex === i,
                    u = e.sectionCollapsedToThreeRows
                        ? a
                            ? (0, eu.M)(P)
                                ? v
                                : M
                            : (0, eu.M)(P)
                              ? j
                              : T
                        : a
                          ? (0, eu.M)(P)
                              ? R
                              : L
                          : (0, eu.M)(P)
                            ? y
                            : b,
                    m = K.intl.string(e.sectionCollapsedToThreeRows ? K.t.NZI2Zk : K.t["/K2RDH"]);
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
                        x = k.rowIndex === g && k.columnIndex === h;
                    function O() {
                        f.current || E.current || c(e);
                    }
                    return (0, r.createElement)(
                        "li",
                        { ...C, key: t },
                        (0, l.jsx)(nj.vN, {
                            children: (0, l.jsx)("button", {
                                "aria-label": u,
                                ref: p,
                                className: o()(nY._X, {
                                    [nY.lG]: V,
                                    [nY.Lh]: B,
                                    [nY.Bx]: x && !m,
                                    [_ ?? ""]: x,
                                    [nY.TV]: G === t,
                                }),
                                onFocus: N ?? O,
                                onMouseOver: O,
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
                                (0, ny.G)(e.guildId),
                                e.sectionCollapsedToThreeRows || S(),
                                ey.default.track(e_.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                    collapsed: e.sectionCollapsedToThreeRows,
                                    guild_id: e.guildId,
                                })));
                    },
                    icon: (0, l.jsx)("img", { className: nY.Kk, src: u, alt: "" }),
                    ariaLabel: m,
                    shouldShowRoundHighlight: !0,
                });
            }
            case tg.EMOJI: {
                let { columnIndex: n, visibleRowIndex: i } = e,
                    r = k.rowIndex === i && k.columnIndex === n;
                return (0, l.jsx)(
                    n$,
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
                        isLargeSize: V,
                        pulseItemKey: G,
                        setPulseItemKey: F,
                        showEmojiFavoriteTooltip: h,
                        messageId: C,
                        isBurstReaction: x,
                        rowPosition: J?.current?.getBoundingClientRect(),
                        inNitroLockedSection: O,
                    },
                    t,
                );
            }
            case tg.SOUNDMOJI:
                return;
        }
    }
    function X(e) {
        return (0, l.jsx)("ul", {
            ...m(I),
            className: o()(nY.ND, { [nY.HO]: V, [nY.X$]: B }),
            ref: J,
            children: e.map(H),
        });
    }
    if (A === ta.R2.SOUNDMOJI)
        return (0, l.jsx)("ul", {
            className: nY.ND,
            ref: J,
            children: (0, l.jsx)(nw, { channelId: N, onSelectSoundmoji: a }),
        });
    if (A !== ta.s.TOP_GUILD_EMOJI) return X(t);
    let W = t.filter(
            (e) =>
                e.subCategory === ta.tm.TOP_GUILD_EMOJI ||
                (e.subCategory === ta.tm.NEWLY_ADDED_EMOJI &&
                    e.emoji.type === td.i.GUILD &&
                    !ei.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
        ),
        z = t.filter(
            (e) =>
                e.subCategory === ta.tm.NEWLY_ADDED_EMOJI &&
                e.emoji.type === td.i.GUILD &&
                ei.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id),
        );
    return 0 === z.length
        ? X(t)
        : (0, l.jsxs)("div", {
              className: nY.Ng,
              children: [
                  (0, l.jsx)("div", { className: o()(nY.V6, { [nY.$3]: 0 === W.length }), children: X(W) }),
                  (0, l.jsxs)("div", {
                      className: nY.bc,
                      children: [
                          (0, l.jsx)("div", {
                              className: o()(nY.eE, { [nY.eM]: 1 === z.length, [nY.Wk]: W.length > 0 }),
                              children: X(z),
                          }),
                          (0, l.jsxs)("div", {
                              className: o()(nY.lD, { [nY.EI]: V, [nY.qU]: B, [nY.Wk]: W.length > 0 }),
                              children: [
                                  (0, l.jsx)(nU.A, { foreground: nY.rI }),
                                  (0, l.jsx)(w.E, {
                                      variant: "text-xs/semibold",
                                      color: "text-overlay-light",
                                      children: K.intl.string(K.t.y2b7CA),
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
};
var n0 = n(618723);
let n1 = (0, eR.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    n2 = (0, eR.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    n3 = (0, eR.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    n5 = (0, eR.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    n4 = (0, eR.xI)(E.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    n8 = (0, eR.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    n6 = (0, eR.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    n7 = r.memo(function (e) {
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
                rowCount: x,
                isUsingKeyboardNavigation: O,
                channelGuildId: S,
                channelId: j,
                messageId: T,
                isBurstReaction: y,
                listHeaderClassName: b,
            } = e,
            R = r.useRef(!1),
            v = el.Om.useStore((e) => e.activeCategoryIndex),
            L = (0, er.RQ)((e) => e.searchQuery),
            M = eS.Sf.useSetting(),
            P = (0, m.bG)([eT.default], () => eT.default.getCurrentUser()),
            D = (0, eb.ki)(P),
            { location: k } = (0, p.p)(),
            { analyticsLocations: U } = (0, C.Ay)(),
            [G, F] = r.useState(0),
            [J, V] = r.useState(!1),
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
                        isBurstReaction: x,
                        listHeaderClassName: O,
                        activeSectionIndex: S,
                        emojiListRef: j,
                    } = e,
                    T = (0, p.p)(),
                    y = r.useRef(e_.An1),
                    b = r.useMemo(() => ("" !== n ? tQ.A.convert.toCodePoint(n) : ""), [n]),
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
                                    ey.default.track(e_.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                        location: T.location,
                                        tab: eU.kx.EMOJI,
                                        collapsed: !s,
                                        guild_id: n.id,
                                    }),
                                e === ta.R2.SOUNDMOJI &&
                                    ey.default.track(e_.HAw.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, { collapsed: !s }),
                                f(i));
                        },
                        [T, t, f],
                    ),
                    M = r.useCallback((e) => {
                        let { columnIndex: t, visibleRowIndex: n } = e,
                            i = e.type === tg.SOUNDMOJI ? null : e.type === tg.EMOJI ? (0, eP.N)(e.emoji) : e.name;
                        (y.current !== e_.An1 && window.cancelAnimationFrame(y.current),
                            (y.current = window.requestAnimationFrame(() => {
                                (el.Om.setInspectedExpressionPosition(t, n, ea.t.MOUSE_EVENT),
                                    el.Om.setSearchPlaceholder(i),
                                    (y.current = e_.An1));
                            })));
                    }, []),
                    P = (0, m.bG)([eO.HP], () => eO.HP.hasHotspot(eO._2.FAVORITE_EMOJI_TOOLTIP), []),
                    D = r.useMemo(
                        () =>
                            eZ().memoize((e, t) => {
                                let n = i[e],
                                    r = d[t.sectionIndex];
                                return (0, l.jsx)(
                                    nQ,
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
                                        selectedItemClassName: n0.__invalid_selectedItem,
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
                        [i, d, s, b, M, a, c, E, I, g, h, A, P, _, N, C, x, j],
                    );
                r.useEffect(() => () => D.cache?.clear?.(), [D]);
                let w = r.useMemo(
                        () =>
                            eZ().memoize((e) => {
                                let n = d[e];
                                if (null == n) return;
                                let { guild: i, categoryId: s, type: r, sectionId: a } = n;
                                if (r === ta.s.SEARCH_RESULTS) return;
                                let c =
                                        r === ta.s.GUILD
                                            ? null != i
                                                ? (0, l.jsx)(tc.A, { guild: i, height: 16, width: 16 })
                                                : null
                                            : null != s
                                              ? (0, l.jsx)(to, { categoryId: s, height: 16, width: 16, size: "custom" })
                                              : null,
                                    u = i?.name;
                                null != s && (u = (0, ev.Nu)(s, i?.name));
                                let m = S === e,
                                    f = n.isNitroLocked,
                                    E = f && !m,
                                    I = f && m,
                                    g =
                                        r === ta.s.SOUNDMOJI
                                            ? (0, l.jsx)(ed.D, {
                                                  className: n0.f3,
                                                  onClick: () => {
                                                      ((0, er.U)(eU.kx.SOUNDBOARD),
                                                          ey.default.track(
                                                              e_.HAw.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK,
                                                          ));
                                                  },
                                                  children: K.intl.string(K.t.rUEjBe),
                                              })
                                            : void 0;
                                return (0, l.jsx)(
                                    nA.A,
                                    {
                                        className: o()(n0.wx, O, { [n0.RA]: E, [n0.sp]: I }),
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
                    k = (0, tf.k0)(),
                    U = r.useCallback(
                        (e, n) => {
                            let i = d[e],
                                s = v(e),
                                r = R(e);
                            return (0, l.jsx)(
                                "div",
                                {
                                    role: "rowgroup",
                                    className: o()(n0.Wy, {
                                        [n0.YD]: e === d.length - 1,
                                        [n0.jl]: t.has(i.sectionId),
                                        [n0.cW]: i.isNitroLocked,
                                        [n0.T5]: s || r,
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
                                  ? (0, l.jsx)("div", { className: n0.pQ })
                                  : null,
                        [v, R, k],
                    ),
                    F = r.useCallback((e) => (v(e) ? 41 : 33 * !!R(e)), [v, R]),
                    J = r.useCallback(
                        (e) => (e === d.length - 1 || t.has(d[e]?.sectionId) || v(e) || R(e) ? 0 : n8),
                        [t, d, v, R],
                    );
                return {
                    listPadding: r.useMemo(() => ["" !== u ? n5 : n1, n2, n3, 0], [u]),
                    renderRow: D,
                    renderSection: U,
                    renderSectionHeader: w,
                    renderSectionFooter: G,
                    sectionMarginBottom: J,
                    sectionHeaderHeight: r.useCallback((e) => (d[e].type === ta.s.SEARCH_RESULTS ? 0 : n4), [d]),
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
                isUsingKeyboardNavigation: O,
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
        let Q = (0, eo.Fk)({
            activeCategoryIndex: v,
            isScrolling: R,
            listRef: a,
            onActiveCategoryIndexChange: function (e) {
                "" === L && el.Om.setActiveCategoryIndex(e);
            },
            scrollOffset: 0,
            searchQuery: L,
            disableForSearch: !1,
        });
        (0, eo.FV)({ searchQuery: L, activeCategoryIndex: v, listRef: a });
        let ee = r.useCallback(
                (e) => {
                    (Q(e),
                        $(e),
                        n9({ emojiListRef: a, sectionDescriptors: E, scrollTop: e, searchQuery: L, setShowUpsell: V }));
                },
                [Q, $, a, E, L, V],
            ),
            et = E.length > 0;
        (r.useEffect(() => {
            J &&
                (ey.default.track(e_.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: eH.e.EMOJI_PICKER_FLOATING_UPSELL,
                    location: k,
                    location_stack: U,
                }),
                (0, nN.sq)(e_.U7l.PREMIUM_UPSELL_VIEWED, U, () => (0, nC.uq)(eH.e.EMOJI_PICKER_FLOATING_UPSELL)));
        }, [k, U, J]),
            r.useEffect(() => {
                "" !== L && V(!1);
            }, [L]));
        let en = r.useRef(null);
        return (
            r.useEffect(
                () => (
                    clearTimeout(en.current),
                    (en.current = setTimeout(() => {
                        (et
                            ? nI.O.announce(K.intl.string(K.t.uZ4F2O), "polite")
                            : nI.O.announce(K.intl.string(K.t.IxxiKF), "assertive"),
                            (en.current = null));
                    }, 200)),
                    () => {
                        clearTimeout(en.current);
                    }
                ),
                [et, L],
            ),
            (0, l.jsxs)("div", {
                className: n0.AD,
                children: [
                    et
                        ? (0, l.jsx)(nh.A, {
                              role: "none presentation",
                              className: n0.p_,
                              listPadding: B,
                              onScroll: ee,
                              renderRow: H,
                              renderSection: X,
                              renderSectionHeader: W,
                              renderSectionFooter: z,
                              rowCount: x,
                              rowCountBySection: I,
                              rowHeight: c + 2 * n6,
                              sectionHeaderHeight: Y,
                              sectionMarginBottom: Z,
                              sectionFooterHeight: q,
                              stickyHeaders: !0,
                              ref: a,
                          })
                        : (0, l.jsx)(ng.A, {
                              message: (0, l.jsx)(w.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: K.intl.string(K.t.IxxiKF),
                              }),
                              className: n0.BZ,
                          }),
                    D || nE.Fr
                        ? null
                        : (0, l.jsx)(nx.d, {
                              showUpsell: J,
                              text:
                                  ((t = (0, eB.Dd)(eH.PremiumTypes.TIER_2)),
                                  K.intl.format(K.t.gMVjeS, {
                                      nitroTierName: t,
                                      onClick: () => {
                                          f({ type: tp.PREMIUM, emojiDescriptor: void 0 });
                                      },
                                  })),
                              button: ((n = (0, n_.qD)()), (0, eB.LE)(n, eH.pe.TIER_2) ?? K.intl.string(K.t.BmJkbd)),
                              buttonAnalyticsObject: { section: e_.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                              leadingAction: (0, l.jsx)(nS.l, {
                                  size: "sm",
                                  className: n0.ij,
                                  location: _.A.PREMIUM_WISHLIST_EMOJI_UPSELL,
                              }),
                          }),
                ],
            })
        );
    }),
    n9 = eZ().throttle(
        function (e) {
            let { emojiListRef: t, sectionDescriptors: n, scrollTop: i, searchQuery: s, setShowUpsell: l } = e;
            l(
                (0, np.s)({ listRef: t, searchQuery: s, nitroLockedSectionStates: n, scrollTop: i })
                    .areOnlyNitroLockedSectionsVisible,
            );
        },
        300,
        { leading: !1, trailing: !0 },
    );
var ie = n(506774),
    it = n(28863),
    ii = n(277984),
    is = n(404374),
    il = n(780964),
    ir = n(766075),
    ia = n(166403),
    io = n(506150);
let ic = "premiumRetentionEmojiPickerNotice",
    iu = ie.w.get(ic),
    id = function (e) {
        let { closePopout: t, channel: n } = e,
            [i, s] = r.useState(!1),
            { subscription: a, hasFetchedSubscriptions: o } = (0, m.cf)([ia.A], () => ({
                subscription: ia.A.getPremiumSubscription(),
                hasFetchedSubscriptions: ia.A.hasFetchedSubscriptions(),
            }));
        if (
            (r.useEffect(() => {
                o || (0, ii.hP)();
            }, [o]),
            null == a || !(0, eB.PK)(a.status) || i)
        )
            return null;
        let c = a.status === e_.Dmq.PAST_DUE ? (0, eB.ji)(a).expiresDate : Z()(a.currentPeriodStart).add(eH.ph),
            u = `${a.id}:${c.toISOString()}`;
        if (iu === u) return null;
        let d =
            eB.Ay.getPremiumType(a.planId) === eH.PremiumTypes.TIER_0
                ? is.k0.PREMIUM_TIER_0
                : eB.Ay.getPremiumType(a.planId) === eH.PremiumTypes.TIER_1
                  ? is.k0.PREMIUM_TIER_1
                  : is.k0.PREMIUM_TIER_2;
        return (0, l.jsxs)(w.E, {
            variant: "text-xs/medium",
            color: "text-default",
            className: io.g$,
            children: [
                (0, l.jsx)(b.t, { size: "md", className: io.lu, color: d }),
                (0, l.jsxs)("div", {
                    className: io.Xn,
                    children: [
                        (0, l.jsx)(w.E, {
                            variant: "text-xs/normal",
                            children: K.intl.format(K.t.bTMjiO, {
                                planName: eB.Ay.getTierDisplayNameByPlanId(a.planId),
                                endsAt: c.toDate(),
                            }),
                        }),
                        (0, l.jsx)("div", {
                            children: (0, l.jsx)(it.Anchor, {
                                onClick: () => {
                                    ((0, ev.xf)(n), t(), (0, ir.openUserSettings)(il.X.NITRO_PANEL));
                                },
                                children: K.intl.string(K.t.W3aavh),
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(ed.D, {
                    onClick: () => {
                        (ie.w.set(ic, u), (iu = u), s(!0));
                    },
                    children: (0, l.jsx)(em.P, { size: "md", color: "currentColor", className: io.YF }),
                }),
            ],
        });
    };
var im = n(148361);
let iE = (0, eR.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    iI = (0, eR.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT);
function ig(e) {
    return e.stopPropagation();
}
function ih(e, t) {
    el.Om.setInspectedExpressionPosition(e, t, ea.t.GRID_NAVIGATOR_EVENT);
}
let ip = u()(ev.bo, 200),
    iA = u()(ev.Wi, 200),
    i_ = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    iN = r.memo(function (e) {
        let t,
            n,
            i,
            {
                pickerIntention: s,
                channel: a,
                guildId: c,
                closePopout: u,
                emojiSize: E = ta.as.MEDIUM,
                hasTabWrapper: S = !1,
                onSelectEmoji: j,
                onSelectSoundmoji: T,
                containerWidth: y,
                onNavigateAway: b,
                persistSearch: R,
                className: v,
                headerClassName: L,
                analyticsOverride: M = i_,
                searchProps: P = {},
                wrapper: D,
                shouldHidePickerActions: w = !1,
                messageId: k,
                renderHeader: U,
                listHeaderClassName: G,
                categoryListClassName: F,
                shouldShowSoundmojiInEmojiPicker: J = !1,
                showOnlyUnicode: V = !1,
                showAddEmojiButton: B,
                ref: H,
                isViewingEmojiPacks: X = !1,
                onViewEmojiPacksChange: z,
            } = e,
            { onFocus: Z, onKeyDown: Y, autoFocus: q = !0, accessory: $ } = P,
            Q = (0, m.bG)([ej.Ay], () => (null != c ? ej.Ay.getDefaultChannel(c) : null), [c]),
            [ee, et] = r.useState(null),
            en = r.useRef(""),
            ec = (0, er.RQ)((e) => e.searchQuery),
            eu = r.useRef(null),
            ed = r.useRef(null),
            em = r.useRef(null);
        null == a && null != Q && (a = Q);
        let ef = a?.getGuildId() ?? c ?? null,
            [eE, eI] = r.useState(!1),
            eg = r.useRef(null),
            ep = eT.default.getCurrentUser(),
            eA = (0, eb.ki)(ep),
            eN = eE && eA;
        r.useImperativeHandle(H, () => ({ onPickerOpen: e3 }));
        let { location: eC } = (0, p.p)(),
            { page: eR, section: eL, object: eM, openPopoutType: eU, popoutLocation: eF } = M,
            eJ = r.useMemo(() => ({ ...eC, section: eL ?? e_.JJy.EMOJI_PICKER_POPOUT }), [eC, eL]),
            { analyticsLocations: eV } = (0, C.Ay)(_.A.EMOJI_PICKER),
            { diversitySurrogate: eK } = (0, m.cf)([O.Ay], () => ({ diversitySurrogate: O.Ay.diversitySurrogate })),
            eB = (0, ev.sL)(ec, a, s, V),
            eH = null == eB ? 0 : eB.locked.length + eB.unlocked.length,
            eX = eS.iM.useSetting(),
            ez = r.useMemo(() => new Set(eX), [eX]),
            eY = r.useCallback((e) => {
                eS.iM.updateSetting(Array.from(e));
            }, []),
            eq = (0, eo.oV)({ gridWrapperRef: eu, containerWidth: y, listPaddingLeft: iI, listScrollbarWidth: 8 }),
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
                    E = r.useMemo(() => (d ? tm.Ay.getCategories() : f), [f, d]),
                    I = (0, m.bG)([eh.A], () => eh.A.getGuild(t?.getGuildId()), [t]),
                    g = t?.getGuildId() ?? n,
                    h = (0, m.bG)([O.Ay], () => O.Ay.getDisambiguatedEmojiContext(g), [g]),
                    p = (0, ev.XI)(g),
                    A = (0, ev.Fj)(g),
                    _ = (0, ev.QZ)(g),
                    { topEmojis: N, newlyAddedEmojis: C } = (0, ew.A)(g, s),
                    x = (0, m.yK)([tI.Ay], () => tI.Ay.getFlattenedGuildIds(), []),
                    S = (0, m.bG)([O.Ay], () => O.Ay.expandedSectionsByGuildIds),
                    j = (0, m.bG)([eT.default], () => eT.default.getCurrentUser()),
                    T = (0, eb.ki)(j),
                    y = (0, tf.k0)(),
                    b = h.getGroupedCustomEmoji(),
                    R = (0, tE.Ym)({ location: "useEmojiGrid" });
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
                                [E, I] = eZ().partition(l, (e) => {
                                    let n = eP.Ay.isEmojiDisabled({ emoji: e, channel: t, intention: s });
                                    return (o.set(e, n), !n);
                                }),
                                g = E.concat(I),
                                p = a.guild,
                                A = g.length > j && null != p && a.isNitroLocked,
                                _ = A && !S.has(p.id);
                            _ && g.splice(j - 1);
                            let x = Math.ceil((A ? g.length + 1 : g.length) / h),
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
                                                a.sectionId === ta.s.TOP_GUILD_EMOJI
                                                    ? (0, ev.DA)(N, C, e.id ?? e.uniqueName ?? e.name)
                                                    : ta.tm.NONE,
                                        }));
                                if ((O.push(i), !u)) {
                                    if (A && e === x - 1) {
                                        let t = O[e];
                                        t.push({
                                            type: 1,
                                            guildId: p.id,
                                            name: K.intl.string(K.t.NZI2Zk),
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
                                    type: ta.s.SEARCH_RESULTS,
                                    sectionId: ta.s.SEARCH_RESULTS,
                                    count: l.unlocked.length,
                                    isNitroLocked: !1,
                                }),
                                0 !== l.locked.length &&
                                    g(l.locked, {
                                        type: ta.s.PREMIUM_UPSELL,
                                        categoryId: ta.R2.PREMIUM_UPSELL,
                                        sectionId: ta.s.PREMIUM_UPSELL,
                                        count: l.locked.length,
                                        isNitroLocked: !T,
                                    }));
                        else {
                            if (R && u) {
                                let t = [{ type: 2, rowIndex: f, columnIndex: 0, visibleRowIndex: m }];
                                n.push({
                                    type: ta.s.SOUNDMOJI,
                                    categoryId: ta.R2.SOUNDMOJI,
                                    sectionId: "soundmoji",
                                    count: t.length,
                                    isNitroLocked: !1,
                                });
                                let s = i.has(ta.R2.SOUNDMOJI);
                                (!s && (d.push(t.length), r.push(t), m++), e.push(+!s), f++);
                            }
                            for (let e of E)
                                if (e === ta.R2.CUSTOM) {
                                    function O(n) {
                                        let i = b.get(n);
                                        if (null == i) return;
                                        let l = i.filter(
                                            (e) =>
                                                !th.includes(
                                                    eP.Ay.getEmojiUnavailableReason({
                                                        emoji: e,
                                                        channel: t ?? ej.Ay.getDefaultChannel(n),
                                                        intention: s,
                                                    }),
                                                ),
                                        );
                                        if (0 === l.length) return;
                                        let r = eh.A.getGuild(n),
                                            a =
                                                y ||
                                                (!T &&
                                                    eP.Ay.isEmojiCategoryNitroLocked({
                                                        categoryEmojis: l,
                                                        channel: t,
                                                        intention: s,
                                                    }));
                                        g(l, {
                                            categoryId: e,
                                            guild: r,
                                            type: ta.s.GUILD,
                                            sectionId: null != r ? r.id : (0, tu.A)(),
                                            count: l.length,
                                            isNitroLocked: a,
                                        });
                                    }
                                    if ((null != I && O(I.id), (0, ek.isExternalEmojiAllowedForIntention)(s)))
                                        for (let e of x) (null == I || I.id !== e) && O(e);
                                } else if (e === ta.R2.TOP_GUILD_EMOJI) {
                                    if (null != I) {
                                        let { allEmojis: t } = (0, eD.W)({ topEmojis: N, newlyAddedEmojis: C });
                                        t.length > 0 &&
                                            g(t, {
                                                categoryId: e,
                                                guild: eh.A.getGuild(I.id),
                                                type: ta.s.TOP_GUILD_EMOJI,
                                                sectionId: ta.s.TOP_GUILD_EMOJI,
                                                count: t.length,
                                                isNitroLocked: !1,
                                            });
                                    }
                                } else if (e === ta.R2.RECENT) {
                                    let n = (s === ek.EmojiIntention.REACTION ? _ : A).filter(
                                        (e) => !eP.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }),
                                    );
                                    g(n, {
                                        categoryId: e,
                                        type: ta.s.RECENT,
                                        sectionId: ta.s.RECENT,
                                        count: n.length,
                                        isNitroLocked: !1,
                                    });
                                } else if (e === ta.R2.FAVORITES) {
                                    let n = p.filter(
                                        (e) => !eP.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }),
                                    );
                                    0 !== n.length &&
                                        g(n, {
                                            categoryId: e,
                                            type: ta.s.FAVORITES,
                                            sectionId: ta.s.FAVORITES,
                                            count: n.length,
                                            isNitroLocked: !1,
                                        });
                                } else {
                                    let t = tm.Ay.getByCategory(e);
                                    null != t &&
                                        g(t, {
                                            categoryId: e,
                                            type: ta.s.UNICODE,
                                            sectionId: e,
                                            count: t.length,
                                            isNitroLocked: !1,
                                        });
                                }
                        }
                    }
                    return { columnCounts: d, emojiGrid: r, rowCountBySection: e, sectionDescriptors: n };
                }, [h, a, c, o, l, i, b, S, t, s, N, C, T, E, I, x, _, A, p, y, R, u]);
            })({
                gridWidth: eq,
                fallbackGuildId: ef,
                channel: a,
                pickerIntention: s,
                emojiSearchResults: eB,
                collapsedSections: ez,
                emojiPaddingHorizontal: iE,
                emojiSpriteSize: E,
                shouldShowSoundmojiInEmojiPicker: J,
                showOnlyUnicode: V,
            }),
            { newlyAddedEmojis: e2 } = (0, ew.A)(ef, s);
        ((t = r.useRef({ intention: s, isBurstReaction: eE, analyticsObject: eM })),
            r.useEffect(() => {
                t.current.intention === ek.EmojiIntention.REACTION && eG(t.current);
            }, []));
        let e3 = r.useCallback(() => {
                let e = e2.length > 0 ? e2[0].id : null;
                ((0, es.uV)(ef, e), eG({ intention: s, isBurstReaction: eE, analyticsObject: eM }));
            }, [e2, ef, s, eE, eM]),
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
                            let u = eP.Ay.getEmojiUnavailableReason({ emoji: r, channel: n, intention: t });
                            if (i.toggleFavorite)
                                return void (c.isFavoriteEmojiWithoutFetchingLatest(r) || null != u
                                    ? (0, g.Sw)(r)
                                    : (o?.(e), (0, g.V4)(r)));
                            if (u !== ek.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) {
                                if (u === ek.EmojiDisabledReasons.PREMIUM_LOCKED) {
                                    (a?.(e, u), l({ type: 0, emojiDescriptor: e }));
                                    return;
                                }
                                if (u === ek.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED && r.type === td.i.GUILD) {
                                    (a?.(e, u), l({ type: 1, guildId: r.guildId, emojiId: r.id }));
                                    return;
                                }
                                u !== ek.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE &&
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
                        ? (0, ev.Wf)({
                              emoji: e.emoji,
                              location: { ...eJ, object: e_.ZSU.EMOJI },
                              searchQuery: ec,
                              isLocked: null != t,
                              intention: s,
                              messageId: k,
                          })
                        : (0, ev._7)({
                              emoji: e.emoji,
                              location: { ...eJ, object: eM ?? e_.ZSU.EMOJI, ...(null != eR && { page: eR }) },
                              pickerIntention: s,
                              category: e.category,
                              subCategory: e.subCategory,
                              position: e.columnIndex + 1,
                              newlyAddedHighlight:
                                  e.subCategory === ta.tm.NEWLY_ADDED_EMOJI && ei.isNewerThanLastSeen(ef, e.emoji.id),
                              isBurstReaction: eE,
                              messageId: k,
                              lockedReason: t,
                              visibleRowIndex: e.visibleRowIndex,
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, ev.C5)({ emoji: e.emoji, location: { ...eJ, object: e_.ZSU.EMOJI } });
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
                    u = (0, m.bG)([O.Ay], () => O.Ay.getDisambiguatedEmojiContext(o), [o]),
                    f = r.useCallback(
                        (e, i) => {
                            if (e.type === tg.EMOJI) {
                                if (null != e.emoji && i.altKey)
                                    return void (u.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                        ? (0, g.Sw)(e.emoji)
                                        : ((0, ev.C5)({ emoji: e.emoji, location: { ...t, object: e_.ZSU.EMOJI } }),
                                          (0, g.V4)(e.emoji)));
                                let l = {
                                    page: null != o ? e_.liQ.GUILD_CHANNEL : e_.liQ.DM_CHANNEL,
                                    section: e_.JJy.EMOJI_PICKER_POPOUT,
                                    object: e_.ZSU.EMOJI,
                                };
                                (c &&
                                    (l = {
                                        page: null != o ? e_.liQ.GUILD_CHANNEL : e_.liQ.DM_CHANNEL,
                                        section: e_.JJy.EMOJI_PICKER_POPOUT,
                                        object: e_.ZSU.EMOJI,
                                    }),
                                    (0, ev._7)({
                                        emoji: e.emoji,
                                        location: l,
                                        pickerIntention: n,
                                        category: e.category,
                                        subCategory: e.subCategory,
                                        newlyAddedHighlight:
                                            e.subCategory === ta.tm.NEWLY_ADDED_EMOJI &&
                                            ei.isNewerThanLastSeen(o, e.emoji.id),
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
                    } = (0, eo.Ff)({
                        columnCounts: i,
                        gridNavigatorId: ta.lq,
                        itemGrid: l,
                        itemList: a,
                        onGridNavigatorItemSelect: f,
                        onGridNavigatorPositionChange: ih,
                    });
                return (
                    r.useEffect(
                        () =>
                            el.Om.subscribe(
                                (e) => e.inspectedExpressionPosition,
                                (e) => {
                                    if (null == e) return;
                                    let { columnIndex: t, rowIndex: n, source: i } = e;
                                    i !== ea.t.GRID_NAVIGATOR_EVENT &&
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
                    i(el.Om.getState().activeCategoryIndex);
                }, [e]));
        })(y, ed),
            r.useLayoutEffect(() => {
                q && em.current?.focus();
            }, [y, eK, em, q]),
            (n = r.useRef(X)),
            r.useEffect(() => {
                (q && n.current && !X && em.current?.focus(), (n.current = X));
            }, [q, X, em]),
            r.useEffect(() => {
                R || (0, er.Ri)("");
            }, [R]),
            r.useEffect(
                () => (
                    ey.default.track(e_.HAw.OPEN_POPOUT, {
                        type: eU ?? "Emoji Picker",
                        guild_id: ef,
                        location: eF,
                        ...(0, N.dI)(a),
                    }),
                    () => {
                        (ip.cancel(), iA.cancel());
                    }
                ),
                [eU, ef, eF, a],
            ),
            (0, A.Ay)(() => ((0, ev.V$)({ intention: s, location: eJ }), (en.current = ec), el.Om.resetStoreState)),
            r.useEffect(() => () => (0, eO.sF)(eO._2.FAVORITE_EMOJI_TOOLTIP), []),
            r.useLayoutEffect(() => {
                let { columnIndex: e, rowIndex: t } = el.Om.getState().inspectedExpressionPosition;
                e0[t]?.[e] == null && 0 !== e && el.Om.setInspectedExpressionPosition(0, 0);
            }, [e0]),
            r.useEffect(() => {
                if (("" === en.current && "" !== ec && (0, ev.EG)(eJ, s), "" !== ec && en.current !== ec)) {
                    let e = el.Om.getAnalyticsId();
                    0 === eH
                        ? ip({ location: eJ, searchQuery: ec, intention: s, loadId: e })
                        : iA({
                              totalResults: eH,
                              numEmojiLocked: eB?.locked.length ?? 0,
                              location: eJ,
                              searchQuery: ec,
                              intention: s,
                              loadId: e,
                          });
                }
                en.current = ec;
            }, [ec, eJ, eH, eB, s]));
        let tt = D ?? (S ? "div" : I.l),
            tn = null != eq;
        ee?.type === tp.PREMIUM
            ? (i = (0, l.jsx)(im.default, {
                  onUpsellClicked: e4,
                  emojiDescriptor: ee.emojiDescriptor,
                  pickerIntention: s,
                  analyticsLocation: eJ,
                  onClose: () => et(null),
                  channel: a,
              }))
            : ee?.type === tp.ROLE_SUBSCRIPTION &&
              (i = (0, l.jsx)(ex, { onClose: () => et(null), guildId: ee.guildId, emojiId: ee.emojiId }));
        let ti = (0, l.jsx)(na, {
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
                burstToggleRef: eg,
                renderHeader: U,
                showAddEmojiButton: B,
                closePopout: u,
            }),
            ts = [];
        O.Ay.hasFavoriteEmojis(ef) || ts.push(f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let tl = (0, l.jsxs)(r.Fragment, {
                children: [
                    S ? ti : null,
                    (0, l.jsxs)("div", {
                        className: nr.uK,
                        ref: eu,
                        children: [
                            (0, l.jsx)(id, { channel: a, closePopout: u }),
                            (0, l.jsx)(x.Ay, {
                                contentTypes: ts,
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    if (t === f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                        return (0, l.jsx)(tU, { markAsDismissed: () => n(tw.i.UNKNOWN) });
                                },
                            }),
                            w
                                ? null
                                : (0, l.jsx)("div", {
                                      className: nr.Iy,
                                      id: ta.lq,
                                      ...e7,
                                      children: tn
                                          ? (0, l.jsx)(n7, {
                                                collapsedSections: ez,
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
                    (0, l.jsx)(nf, { emojiGrid: e0, className: nr.qV, guildId: ef, pickerIntention: s, channel: a }),
                    i,
                    s === ek.EmojiIntention.REACTION
                        ? (0, l.jsx)(eW, { targetElementRef: eg, shouldShow: eE && !eA, onDismiss: () => eI(!1) })
                        : null,
                ],
            }),
            tr = (0, l.jsx)(h.A, {
                ...eJ,
                children: (0, l.jsxs)(tt, {
                    id: ta.Do,
                    "aria-labelledby": S && !X ? ta.k1 : void 0,
                    role: S && !X ? "tabpanel" : void 0,
                    className: o()(nr.iE, { [nr.r6]: S, [nr.cB]: eN }),
                    children: [
                        S || X ? null : ti,
                        (0, l.jsx)("div", {
                            className: o()(nr.Fb, v),
                            onScroll: ig,
                            children: X ? (0, l.jsx)(W, { onBack: () => z?.(!1) }) : tl,
                        }),
                        w || X
                            ? null
                            : (0, l.jsx)(tD, {
                                  className: o()(nr.jv, F),
                                  emojiListRef: ed,
                                  sectionDescriptors: eQ,
                                  intention: s,
                                  channel: a,
                                  fallbackGuildId: ef,
                                  shouldShowSoundmojiInEmojiPicker: J,
                                  showOnlyUnicode: V,
                                  onViewEmojiPacks: null != z ? () => z(!0) : void 0,
                              }),
                    ],
                }),
            });
        return (0, l.jsx)(C.f5, { value: eV, children: tr });
    });
