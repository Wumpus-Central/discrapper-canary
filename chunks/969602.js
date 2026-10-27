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
    z = n(442433),
    Z = n(565645),
    Y = n(915089),
    $ = n(60587),
    q = n(732447),
    Q = n(105292),
    ee = n(126904);
let et = r.memo(function (e) {
    let { pack: t, isPinned: i, onAddPack: s, onRemovePack: a, onSelectEmoji: c } = e,
        u = r.useId(),
        d = r.useId(),
        [m, f] = r.useState(!1),
        E = Q.intl.string(m ? Q.t.iTcuma : Q.t.dcl9MQ),
        I = Q.intl.string(i ? q.default["2zxYCx"] : q.default.Tvdb5N),
        g = r.useMemo(() => t.emojis.filter((e) => e.available), [t.emojis]),
        h = r.useMemo(() => [g.length], [g.length]),
        p = (0, Y.GV)(),
        {
            getContainerProps: A,
            getItemProps: _,
            getRowProps: N,
        } = (0, J.A)({
            navId: p,
            columnCounts: h,
            onSelect: (e, n, i) => {
                let s = g[e];
                null != s && t.available && c(s, e, { isFinalSelection: !i.shiftKey, toggleFavorite: i.altKey });
            },
        }),
        C = A();
    return (0, l.jsxs)("section", {
        "aria-labelledby": u,
        className: ee.nM,
        children: [
            (0, l.jsxs)(S.B, {
                align: "center",
                direction: "horizontal",
                gap: 4,
                justify: "space-between",
                children: [
                    (0, l.jsxs)(S.B, {
                        align: "center",
                        className: ee.DD,
                        direction: "horizontal",
                        gap: 4,
                        children: [
                            (0, l.jsx)(M.D, { className: ee.UU, id: u, variant: "text-xs/bold", children: t.name }),
                            (0, l.jsx)(V.E, {
                                color: "text-subtle",
                                variant: "text-xs/medium",
                                children: Q.intl.format(q.default.UA8cNe, { count: g.length }),
                            }),
                            (0, l.jsx)(b.m, {
                                text: E,
                                children: (0, l.jsx)(R.K, {
                                    "aria-controls": d,
                                    "aria-describedby": u,
                                    "aria-expanded": m,
                                    "aria-label": E,
                                    icon: m ? K.a : B._,
                                    onClick: () => f((e) => !e),
                                    size: "sm",
                                    variant: "icon-only",
                                }),
                            }),
                        ],
                    }),
                    (0, l.jsx)(b.m, {
                        text: I,
                        children: (0, l.jsx)(R.K, {
                            "aria-label": I,
                            icon: i ? H.MinusIcon : W.T,
                            onClick: () => (i ? a(t) : s(t)),
                            size: "sm",
                            variant: "secondary",
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                id: d,
                ...C,
                "aria-label": t.name,
                className: o()(ee.gm, { [ee.jE]: m }),
                tabIndex: t.available && g.length > 0 ? C.tabIndex : -1,
                children: (0, l.jsx)("div", {
                    className: ee.nI,
                    ...N(0),
                    children: g.map((e, i) => {
                        let { ref: s, ...r } = _(i, 0);
                        return (0, l.jsx)(
                            b.m,
                            {
                                text: `:${e.name}:`,
                                ariaHidden: !0,
                                asContainer: !0,
                                children: (0, l.jsx)(X.vN, {
                                    children: (0, l.jsx)("button", {
                                        ...r,
                                        ref: s,
                                        "aria-label": `:${e.name}:`,
                                        className: ee.Z8,
                                        "data-type": $.g.EMOJI,
                                        "data-id": e.id,
                                        "data-name": e.name,
                                        "data-animated": e.animated ? "true" : null,
                                        disabled: !t.available,
                                        onClick: (t) => {
                                            (t.stopPropagation(),
                                                c(e, i, { isFinalSelection: !t.shiftKey, toggleFavorite: t.altKey }));
                                        },
                                        onContextMenu: (e) => {
                                            let t = e.currentTarget;
                                            (0, z.L3)(e, async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("638221"),
                                                    n.e("73500"),
                                                    n.e("496715"),
                                                    n.e("904774"),
                                                    n.e("446132"),
                                                ]).then(n.bind(n, 233503));
                                                return (n) => (0, l.jsx)(e, { ...n, target: t, showFavoriteOnly: !0 });
                                            });
                                        },
                                        type: "button",
                                        children: (0, l.jsx)(Z.A, {
                                            animated: e.animated,
                                            alt: "",
                                            className: ee.Zg,
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
var en = n(202541),
    ei = n(429800);
function es(e) {
    let { onBack: t, onSelectEmoji: n } = e,
        i = Q.intl.string(q.default.Nwj3fK),
        s = r.useRef(null),
        a = (0, m.bG)([F.A], () => F.A.getPacks()),
        o = (0, m.bG)([U.default], () => U.default.getCurrentUser()),
        c = (0, G.ki)(o, en.PremiumTypes.TIER_2);
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
        className: ei.kL,
        children: [
            (0, l.jsx)("div", { "aria-hidden": !0, className: ei.Tp }),
            (0, l.jsx)("div", {
                className: ei.wx,
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
                                                    children: Q.intl.string(q.default["0+5+Oy"]),
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
                                  buttonTextOverride: Q.intl.string(Q.t.hIVbiP),
                                  size: "sm",
                                  subscriptionTier: en.pe.TIER_2,
                              }),
                    ],
                }),
            }),
            (0, l.jsx)("div", {
                className: ei.p_,
                children: a.map((e, t) =>
                    (0, l.jsxs)(
                        r.Fragment,
                        {
                            children: [
                                t > 0 ? (0, l.jsx)("hr", { className: ei.yF }) : null,
                                (0, l.jsx)(et, {
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
var el = n(617617);
let er = [];
var ea = n(536637),
    eo = n.n(ea),
    ec = n(73153),
    eu = n(935208);
let ed = { lastSeenNewlyAddedEmojiIds: {} },
    em = ed,
    ef = {};
function eE() {
    for (let e in ef) em.lastSeenNewlyAddedEmojiIds[e] = ef[e];
}
class eI extends m.Ay.PersistedStore {
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
        em = e ?? ed;
    }
    getState() {
        return em;
    }
    getLastSeenEmojiByGuild(e) {
        return em.lastSeenNewlyAddedEmojiIds[e];
    }
    isNewerThanLastSeen(e, t) {
        if (null == e || null == t) return !1;
        let n = this.getLastSeenEmojiByGuild(e);
        if (null == n || eu.default.compare(t, n.id) > 0) return !0;
        {
            let e = eo()(n.lastSeen);
            return eo()().isBefore(e.add(2, "weeks")) && !n.acknowledged;
        }
    }
}
let eg = new eI(ec.h, {
    LOGOUT: function () {
        ((em = ed), (ef = {}));
    },
    NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = ef[t] ?? em.lastSeenNewlyAddedEmojiIds[t];
        null == i || 0 > eu.default.compare(i.id, n)
            ? (ef[t] = { id: n, lastSeen: Date.now(), acknowledged: !0 })
            : (ef[t] = { ...i, acknowledged: !0 });
    },
    NEWLY_ADDED_EMOJI_SEEN_PENDING: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = ef[t] ?? em.lastSeenNewlyAddedEmojiIds[t];
        (null == i || 0 > eu.default.compare(i.id, n)) && (ef[t] = { id: n, lastSeen: Date.now(), acknowledged: !1 });
    },
    NEWLY_ADDED_EMOJI_SEEN_UPDATED: eE,
    CLEAR_CACHES: function () {
        ((em = ed), eE());
    },
    CONNECTION_CLOSED: eE,
});
var eh = n(451731),
    ep = n(850992),
    eA = n(151271),
    e_ = n(887695),
    eN = n(562708),
    eC = n(462887),
    ex = n(939249),
    ey = n(789645),
    ej = n(696986),
    eT = n(736653),
    eO = n(139286),
    eS = n(976860),
    eb = n(71393),
    eR = n(384684),
    ev = n(985242),
    eL = n(652215),
    eP = n(746080),
    eM = n(196404);
function eD(e) {
    let t,
        { onClose: i, guildId: s, emojiId: r } = e,
        a = ((t = (0, eT.Ay)()), (0, eC.q)(t) ? n(454333) : n(674463)),
        { analyticsLocations: o } = (0, x.Ay)(N.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, eO.A)({
        type: eN.ImpressionTypes.MODAL,
        name: eN.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: { location_stack: o, emoji_guild_id: s, emoji_id: r ?? null },
    });
    let c = (0, m.bG)([eb.A], () => eb.A.getGuild(s)),
        u = (0, m.bG)([eR.A], () => null != s && eR.A.getUserSubscriptionRoles(s).size > 0),
        d = u ? Q.intl.string(Q.t.GoLM9z) : Q.intl.formatToPlainString(Q.t["h0u/Hi"], { serverName: c?.name }),
        f = u ? Q.intl.string(Q.t.PjZ7Db) : Q.intl.string(Q.t.p8FG1D);
    return (0, l.jsxs)("div", {
        className: eM.kL,
        children: [
            (0, l.jsx)("div", { className: eM.Tp }),
            (0, l.jsxs)("div", {
                className: eM.Qs,
                children: [
                    (0, l.jsx)(ex.D, {
                        className: eM.b,
                        "aria-label": Q.intl.string(Q.t.cpT0Cq),
                        onClick: i,
                        children: (0, l.jsx)(ey.P, {
                            size: "xs",
                            color: "currentColor",
                            "aria-label": Q.intl.string(Q.t.cpT0Cq),
                            className: eM.yP,
                        }),
                    }),
                    (0, l.jsx)("img", { alt: "", src: a, className: eM.Tn }),
                    (0, l.jsx)(ej.h, { size: 22 }),
                    (0, l.jsx)(M.D, {
                        color: "text-strong",
                        variant: "heading-lg/extrabold",
                        className: eM.wx,
                        children: Q.intl.string(Q.t.cBjkcx),
                    }),
                    (0, l.jsx)(ej.h, { size: 4 }),
                    (0, l.jsx)(V.E, {
                        color: "text-default",
                        variant: "text-md/normal",
                        className: eM.h_,
                        children: d,
                    }),
                    (0, l.jsx)(ej.h, { size: 24 }),
                    (0, l.jsx)(ev.A, {
                        text: f,
                        onClick: function () {
                            (0, eS.pX)(eL.BVt.CHANNEL(s, eP.VV.ROLE_SUBSCRIPTIONS), { sourceLocationStack: o });
                        },
                    }),
                ],
            }),
        ],
    });
}
var ew = n(450510),
    ek = n(253932),
    eU = n(808728),
    eG = n(174459),
    eF = n(240248),
    eJ = n(822123),
    eV = n(734057),
    eK = n(309010),
    eB = n(690521),
    eH = n(818645),
    eW = n(316884),
    eX = n(307731),
    ez = n(698279);
function eZ(e) {
    let { intention: t, containerWidth: n, rowSize: i, isBurstReaction: s, analyticsObject: l } = e,
        r = eV.A.getChannel(eK.Ay.getChannelId()),
        a = r?.getGuildId(),
        o =
            t === eX.EmojiIntention.REACTION
                ? j.Ay.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice()
                : j.Ay.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        c = null != r ? j.Ay.getDisambiguatedEmojiContext(r.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        u =
            t === eX.EmojiIntention.REACTION
                ? j.Ay.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems
                : j.Ay.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        d = o.slice(0, u),
        m = null != a ? j.Ay.getGuildEmoji(a) : [],
        f = j.Ay.getDisambiguatedEmojiContext(r?.getGuildId()).getCustomEmoji(),
        { topEmojis: E, newlyAddedEmojis: I } = (0, eW.b)({ guildId: r?.getGuildId(), pickerIntention: t }),
        { visibleTopEmojis: g, visibleNewlyAddedEmojis: h } = (0, eH.W)({
            topEmojis: E,
            newlyAddedEmojis: I,
            rowSize: i,
        });
    C.Ay.trackWithMetadata(
        t === eX.EmojiIntention.REACTION ? eL.HAw.REACTION_PICKER_OPENED : eL.HAw.EXPRESSION_PICKER_OPENED,
        {
            width: n,
            tab: ez.kx.EMOJI,
            badged: !1,
            num_expressions_favorites: c.length,
            num_animated_expressions_favorites: c.filter((e) => e?.animated).length,
            num_custom_expressions_favorites: c.filter(eB.Ay.isCustomEmoji).length,
            num_standard_expressions_favorites: c.filter((e) => null == e.id).length,
            num_expressions_frecent: d.length,
            num_animated_expressions_frecent: d.filter((e) => e?.animated).length,
            num_custom_expressions_frecent: d.filter(eB.Ay.isCustomEmoji).length,
            num_standard_expressions_frecent: d.filter((e) => null == e.id).length,
            num_current_guild_expressions: m.length,
            num_custom_expressions_total: f.size,
            num_expressions_top_server: g.length,
            num_animated_expressions_top_server: g.filter((e) => e.animated).length,
            num_expressions_newly_added: h.length,
            num_animated_expressions_newly_added: h.filter((e) => e.animated).length,
            ...(t === eX.EmojiIntention.REACTION && { is_burst: s }),
            ...(null != l && { location_object: l }),
        },
    );
}
var eY = n(206248),
    e$ = n(724651),
    eq = n(732280),
    eQ = n(783420),
    e0 = n(24482);
let e1 = { object: eL.ZSU.BUTTON_CTA, section: eL.JJy.SUPER_REACTION_PICKER };
function e2(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: i } = e,
        s = Q.intl.string(Q.t.eikz43),
        r = (0, eq.V)(),
        a = (0, e$.O)(),
        o = r?.subscriptionTrial,
        c = null != o || null != a,
        u = o?.skuId ?? en.pe.TIER_2,
        d = c
            ? null != a
                ? Q.intl.formatToPlainString(Q.t.bkQ4bH, { percent: a.discount.amount })
                : (0, e0.FY)({ intervalType: o?.interval, intervalCount: o?.intervalCount })
            : Q.intl.string(Q.t.sEAnVH);
    return (0, l.jsx)(eQ.A, {
        subscriptionTier: u,
        premiumModalAnalyticsLocation: e1,
        onSubscribeModalClose: (e) => {
            e && i();
        },
        children: (e) => {
            let { onClick: r } = e;
            return (0, l.jsx)(eY.H, {
                targetElementRef: t,
                shouldShow: n,
                onRequestClose: i,
                position: "bottom",
                assetUrl: "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
                disableMediaViewer: !0,
                badge: c ? { type: "free_trial", variant: "expressive" } : void 0,
                title: Q.intl.string(Q.t.N4SCJ0),
                body: s,
                action: { text: d, variant: "expressive", icon: L.t, onClick: r },
            });
        },
    });
}
var e3 = n(200589),
    e5 = n(435558),
    e4 = n.n(e5),
    e8 = n(837381),
    e6 = n(460905),
    e7 = n(775602),
    e9 = n(713517),
    te = n(498032),
    tt = n(131607),
    tn = n(49999),
    ti = n(938612);
function ts(e) {
    let { onClick: t } = e,
        n = Q.intl.string(q.default["3D0GLv"]),
        [i, s] = (0, tt.kn)([f.M.DEFAULT_EMOJIS_PACKS_DISCOVERY_DOT]),
        r = i === f.M.DEFAULT_EMOJIS_PACKS_DISCOVERY_DOT;
    return (0, l.jsx)("div", {
        className: ti.nM,
        children: (0, l.jsxs)("div", {
            className: ti.Jn,
            children: [
                (0, l.jsx)(b.m, {
                    ariaHidden: !0,
                    position: "right",
                    text: n,
                    children: (0, l.jsx)(ex.D, {
                        "aria-label": r ? `${n}, ${Q.intl.string(Q.t.y2b7CA)}` : n,
                        className: ti.x6,
                        onClick: function () {
                            (r && s(tn.i.TAKE_ACTION), t());
                        },
                        children: (0, l.jsx)(W.T, { size: "md", color: "currentColor" }),
                    }),
                }),
                r && (0, l.jsx)(te.N, { className: ti.aW, size: "md", cutout: "base-lower" }),
            ],
        }),
    });
}
var tl = n(88218),
    tr = n(407698),
    ta = n(941971),
    to = n(531685),
    tc = n(406810),
    tu = n(27232),
    td = n(369606),
    tm = n(413249),
    tf = n(141060),
    tE = n(687966),
    tI = n(115979),
    tg = n(524501),
    th = n(926268),
    tp = n(138134),
    tA = n(732139);
let t_ = r.memo(function (e) {
    let { categoryId: t, ...n } = e,
        i = (function (e) {
            switch (e) {
                case tA.R2.RECENT:
                    return tc.ClockIcon;
                case tA.R2.FAVORITES:
                    return tu.StarIcon;
                case tA.R2.TOP_GUILD_EMOJI:
                    return td.TrophyIcon;
                case tA.R2.PEOPLE:
                    return e6.n;
                case tA.R2.NATURE:
                    return tm.p;
                case tA.R2.FOOD:
                    return tf.i;
                case tA.R2.ACTIVITY:
                    return tE.GameControllerIcon;
                case tA.R2.TRAVEL:
                    return tI.h;
                case tA.R2.OBJECTS:
                    return tg.D;
                case tA.R2.SYMBOLS:
                    return th.HeartIcon;
                case tA.R2.FLAGS:
                    return tp.FlagIcon;
                case tA.R2.PREMIUM_UPSELL:
                    return L.t;
                default:
                    return;
            }
        })(t);
    return null == i ? null : (0, l.jsx)(i, { color: "currentColor", ...n });
});
var tN = n(724511),
    tC = n(132500),
    tx = n(7584),
    ty = n(526292),
    tj = n(711014),
    tT = (((i = {})[(i.EMOJI = 0)] = "EMOJI"), (i[(i.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"), i);
let tO = [eX.EmojiDisabledReasons.DISALLOW_EXTERNAL, eX.EmojiDisabledReasons.DISALLOW_CUSTOM];
var tS = (((s = {})[(s.PREMIUM = 0)] = "PREMIUM"), (s[(s.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), s),
    tb = n(342379);
let tR = "expression-guild-",
    { itemIdForIndex: tv } = (0, tl.J)(tR),
    tL = (0, eF.xI)(E.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    tP = (0, eF.xI)(E.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    tM = (0, eF.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    tD = (0, eF.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    tw = (0, eF.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    tk = (0, eF.xI)(tb.__invalid_unicodeCategoryShortcutHeight),
    tU = (0, eF.xI)(E.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    tG = (0, eF.xI)(E.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    tF = tM + tP + 2 * tw,
    tJ = tU + 2 * tG,
    tV = tL + tP,
    tK = tV + tJ,
    tB = tM + tD + 2 * tw;
function tH(e) {
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
        { isHoveringOrFocusing: f } = (0, e9.A)(m),
        E = (0, e8.rm)(tv(n)),
        I = a.type === tA.s.GUILD || a.type === tA.s.PACK ? null : a.id,
        g = t === n,
        h = !d && u,
        p = a.type === tA.s.GUILD ? a.guild : null,
        A = a.type === tA.s.PACK ? a.pack : null,
        _ = (0, l.jsxs)(ex.D, {
            innerRef: m,
            ...E,
            "aria-label": a.type === tA.s.PACK ? a.pack.name : (0, eJ.wt)(a, p),
            className: o()({
                [tb.ZG]: null != p,
                [tb.td]: null != A,
                [tb.Bj]: null == p && null == A,
                [tb.s6]: null == p && null == A && g,
                [tb.xg]: a.type === tA.s.RECENT,
            }),
            onClick: () => {
                (null != p &&
                    eG.default.track(eL.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: i?.location,
                        tab: ez.kx.EMOJI,
                        guild_id: p.id,
                    }),
                    c(n));
            },
            children: [
                (0, l.jsx)("div", {
                    className: tb.a$,
                    children: (0, l.jsx)(ta.A, { hovered: f, selected: g, size: "small" }),
                }),
                a.type === tA.s.GUILD
                    ? (0, l.jsx)(tN.A, { guild: a.guild, isSelected: g, shouldAnimate: h, isLocked: a.isNitroLocked })
                    : null,
                null != A
                    ? (0, l.jsx)(Z.A, {
                          alt: "",
                          animated: !d,
                          shouldAnimate: h,
                          className: tb.ty,
                          emojiId: A.representativeEmojiId,
                      })
                    : null,
                null == p && null != I
                    ? (0, l.jsx)(t_, { categoryId: I, className: tb.Yl, height: tM, width: tM, size: "custom" })
                    : null,
            ],
        }),
        N = s[n + 1],
        C = s[n - 1],
        x = null != A && null != C && C.type !== tA.s.PACK,
        y = null != A && N?.type !== tA.s.PACK,
        j = null != N && a.type === tA.s.GUILD && N.type !== tA.s.GUILD;
    return null != p
        ? (0, l.jsxs)(r.Fragment, {
              children: [
                  (0, l.jsx)(tr.Q, { guild: p, children: _ }),
                  j ? (0, l.jsx)("hr", { className: tb.ny }, "separator") : null,
              ],
          })
        : null != A
          ? (0, l.jsxs)(r.Fragment, {
                children: [
                    x ? (0, l.jsx)("hr", { className: tb.ny }) : null,
                    (0, l.jsx)(b.m, { ariaHidden: !0, position: "right", text: A.name, children: _ }),
                    y ? (0, l.jsx)("hr", { className: tb.ny }) : null,
                ],
            })
          : _;
}
let tW = (e) => {
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
        E = ep.Om.useStore((e) => e.activeCategoryIndex),
        I = (function (e) {
            let { emojiListRef: t } = e,
                n = (0, eA.RQ)((e) => e.searchQuery),
                i = r.useCallback((e) => t.current?.scrollToSectionTop(e), [t]);
            return r.useCallback(
                (e) => {
                    "" !== n ? ((0, eA.Ri)(""), ep.Om.setActiveCategoryIndex(e)) : i(e);
                },
                [i, n],
            );
        })({ sectionDescriptors: i, emojiListRef: n }),
        g = (0, p.p)(),
        h = (0, eJ.ss)(s, a, { guildId: a?.guild_id ?? c }),
        A = r.useMemo(() => (0, e3.t)(u ? (0, eJ.CQ)() : h, d), [h, d, u]),
        _ = r.useRef(null),
        N = (0, m.bG)([to.A], () => to.A.isFocused()),
        C = (0, m.bG)([e7.Ay], () => e7.Ay.useReducedMotion, []),
        x = r.useMemo(
            () =>
                e4().memoize(
                    (e, t) => {
                        let n = A[t];
                        if (null != n)
                            return (0, l.jsx)(
                                tH,
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
                if (n.type === tA.s.RECENT) return tF;
                if (n.type === tA.s.PACK) {
                    let e = A[t - 1],
                        n = A[t + 1];
                    return tV + (Number(null != e && e.type !== tA.s.PACK) + Number(n?.type !== tA.s.PACK)) * tJ;
                }
                if (n.type === tA.s.GUILD) {
                    let e = A[t + 1];
                    return null != e && e.type !== tA.s.GUILD ? tK : tV;
                }
                return tB;
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
                s.type === tA.s.GUILD || s.type === tA.s.PACK
                    ? ((t += 1), (n += 1))
                    : s.type === tA.s.UNICODE
                      ? (i += 1)
                      : ((e += 1), (t += 1));
            });
            let s = [e, n, i],
                l = A.some((e) => e.type === tA.s.PACK) ? (A[0]?.type === tA.s.PACK ? 1 : 2) : 0,
                r = tF + t * tV + tK + l * tJ;
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
                null == t || (e + t.height - tU >= S ? v(!1) : v(!0));
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
                let i = R ? tk : 0;
                if (n.type === tA.s.RECENT) return t ? 0 : tD;
                if (n.type === tA.s.PACK) return t ? i : tP;
                if (n.type === tA.s.GUILD) {
                    let n = A[e + 1];
                    return null != n && n.type !== tA.s.GUILD ? (t ? tU + -2 * tG + tP + i : tP) : t ? i : tP;
                }
                return t ? tP + i : 2 * tP;
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
    return (0, l.jsx)(tl.A, {
        categoryListRef: _,
        expressionsListRef: n,
        className: t,
        store: ep.Om,
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
        itemIdPrefix: tR,
        emojiPacksHeader: null != f ? (0, l.jsx)(ts, { onClick: f }) : null,
        children: (e) =>
            T >= 7 &&
            (0, l.jsx)(
                ex.D,
                {
                    "aria-hidden": !R,
                    "aria-label": Q.intl.string(Q.t.dT0ctw),
                    className: o()(tb.KB, { [tb.h_]: !R }),
                    tabIndex: R ? 0 : -1,
                    onClick: () => P(e),
                    children: (0, l.jsx)(e6.n, { size: "custom", color: "currentColor", height: tM, width: tM }),
                },
                w,
            ),
    });
};
var tX = n(860197);
let tz = function (e) {
    let { markAsDismissed: t } = e;
    return (0, l.jsxs)(V.E, {
        variant: "text-xs/medium",
        color: "text-default",
        className: tX.iE,
        children: [
            (0, l.jsx)(th.HeartIcon, { size: "md", color: "currentColor", className: tX.Kk }),
            (0, l.jsx)("div", {
                className: tX.Qs,
                children: (0, l.jsx)(V.E, { variant: "text-xs/normal", children: Q.intl.string(Q.t.xdRf69) }),
            }),
            (0, l.jsx)(ex.D, {
                onClick: () => t(tn.i.UNKNOWN),
                children: (0, l.jsx)(ey.P, { size: "md", color: "currentColor", className: tX.VN }),
            }),
        ],
    });
};
var tZ = n(399513),
    tY = n(717421),
    t$ = n(343032),
    tq = n(683063),
    tQ = n(748798);
let t0 = { tension: 750, mass: 2.5, friction: 70 };
function t1(e) {
    let { checked: t, onClick: n, buttonRef: i } = e,
        s = (0, m.bG)([e7.Ay], () => e7.Ay.useReducedMotion),
        a = U.default.getCurrentUser(),
        c = null != a && !(0, e0.TW)(a),
        u = c ? [] : [f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP],
        [d, E] = (0, tt.kn)(u),
        [I, g] = r.useState(!1),
        [h, p] = (0, tY.z)(() => ({})),
        A = (0, tZ.animated)(t$.i);
    r.useEffect(() => {
        let e = d === f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (E(tn.i.DISMISS), setTimeout(() => g(e), 200));
    }, [d, E]);
    let _ = I ? Q.intl.string(Q.t["Osi/uy"]) : t && !c ? Q.intl.string(Q.t["5cRA/b"]) : Q.intl.string(Q.t.buV4av),
        N = I ? Q.intl.string(Q.t.ORK94p) : void 0;
    return (0, l.jsx)(tq.u, {
        position: "top",
        title: N,
        body: _,
        asset: (0, l.jsx)(L.t, { size: "md", color: "currentColor" }),
        assetSize: 20,
        forceOpen: I,
        children: (0, l.jsx)(ex.D, {
            innerRef: i,
            "aria-label": _,
            "aria-pressed": t,
            onClick: function () {
                (p({ from: { rotate: t ? "360deg" : "0deg" }, to: { rotate: t ? "0deg" : "360deg" }, config: t0 }),
                    n?.(),
                    g(!1));
            },
            focusProps: { enabled: !1 },
            className: o()(tQ.Pf, { [tQ.wM]: t }),
            children: (0, l.jsx)(A, {
                style: s ? void 0 : h,
                size: "custom",
                width: 20,
                height: 20,
                color: t ? "white" : "currentColor",
                className: tQ.Kk,
            }),
        }),
    });
}
var t2 = n(821609),
    t3 = n(644508),
    t5 = n(824832),
    t4 = n(267102),
    t8 = n(242812);
function t6(e) {
    let { channel: t, closePopout: n } = e,
        i = r.useRef(null),
        s = r.useRef(0),
        [a, o] = r.useState(!1),
        [c, u] = r.useState(!1),
        d = (0, t4.Us)() === eL.BRT.OVERLAY,
        m = c || a,
        f = r.useCallback(
            async (e, i, l) => {
                (u(!0),
                    n(),
                    await (0, t3.f)({
                        userImage: { data: e, file: i, image: l },
                        guildId: t?.guild_id ?? null,
                        analyticsLocation: {
                            section: eL.JJy.EXPRESSION_PICKER,
                            page: t?.guild_id != null ? eL.liQ.GUILD_CHANNEL : eL.liQ.DM_CHANNEL,
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
                text: d ? Q.intl.string(Q.t.RMbedC) : null,
                children: (0, l.jsx)(t2.$, {
                    text: Q.intl.string(Q.t.iMJO37),
                    variant: "secondary",
                    onClick: function () {
                        i.current?.activateUploadDialogue();
                    },
                    disabled: m || d,
                }),
            }),
            (0, l.jsx)("div", {
                className: t8.F,
                children: (0, l.jsx)(t5.Ay, { ref: i, onChange: f, setLoading: o, disabled: m }, s.current),
            }),
        ],
    });
}
n(667532);
var t7 = n(833272),
    t9 = n(82495),
    ne = n(260762),
    nt = n(650583),
    nn = n(683829);
let ni = (0, Y.Ld)(),
    ns = t7.A.convert.fromCodePoint("1f44f"),
    nl = (0, eF.xI)(E.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
function nr(e) {
    switch (t7.A.convert.toCodePoint(e)) {
        case "1f3fb":
            return Q.intl.string(Q.t["BVK5b/"]);
        case "1f3fc":
            return Q.intl.string(Q.t.xJWOK8);
        case "1f3fd":
            return Q.intl.string(Q.t["MB+T5g"]);
        case "1f3fe":
            return Q.intl.string(Q.t.MODud2);
        case "1f3ff":
            return Q.intl.string(Q.t["0uzqsc"]);
        default:
            return Q.intl.string(Q.t.bGN1ow);
    }
}
let na = (e) => {
    let { fade: t, surrogate: n, onClick: i, delay: s, index: r } = e,
        a = (0, e8.rm)(`item-${r}`),
        o = eB.Ay.getURL(ns + n),
        c = (0, tY.z)({ opacity: 1, from: { opacity: +!t }, delay: s }, "animate-always");
    return (0, l.jsx)(ex.D, {
        ...a,
        role: "option",
        "aria-selected": 0 === r,
        onClick: () => i(n),
        className: nn.B6,
        children: (0, l.jsx)(tZ.animated.div, {
            "aria-label": nr(n),
            className: nn.g4,
            style: { backgroundImage: `url("${o}")`, ...c },
        }),
    });
};
function no(e) {
    let { id: t, selectedSurrogate: n, onClick: i } = e,
        s = (0, ne.A)("diversity"),
        a = (0, tY.z)({ height: (nl + 14) * (tx.W$.length + 1), from: { height: nl + 14 }, config: { duration: 125 } }),
        o = r.useRef(s);
    r.useEffect(() => {
        o.current.focusFirstVisibleItem();
    }, []);
    let c = ["", ...tx.W$];
    return (
        e4().remove(c, (e) => e === n),
        c.unshift(n),
        (0, l.jsx)(e8.hD, {
            navigator: s,
            children: (0, l.jsx)(e8.PR, {
                children: (e) => {
                    let { ref: n, ...s } = e;
                    return (0, l.jsx)(tZ.animated.div, {
                        ...s,
                        id: t,
                        ref: n,
                        className: nn.J6,
                        style: a,
                        role: "listbox",
                        children: c.map((e, t) =>
                            (0, l.jsx)(na, { index: t, fade: 0 !== t, delay: 20 * t, surrogate: e, onClick: i }, t),
                        ),
                    });
                },
            }),
        })
    );
}
let nc = function (e) {
    let { searchBarRef: t, selectedSurrogate: n, className: i } = e,
        s = eB.Ay.getURL(ns + n),
        [a, c] = r.useState(!1),
        u = (0, t9.A)(null, () => c(!1)),
        d = r.useRef(null);
    return (0, l.jsxs)("div", {
        ref: u,
        className: o()(nn.fx, i),
        children: [
            (0, l.jsx)(ex.D, {
                innerRef: d,
                className: nn.Dj,
                onClick: function () {
                    c(!0);
                },
                "aria-label": Q.intl.formatToPlainString(Q.t["2SfnMp"], { skinTone: nr(n) }),
                "aria-haspopup": !0,
                "aria-expanded": a,
                "aria-controls": ni,
                tabIndex: a ? -1 : 0,
                children: (0, l.jsx)("div", { className: nn.g4, style: { backgroundImage: `url("${s}")` } }),
            }),
            a
                ? (0, l.jsx)("div", {
                      onKeyDown: function (e) {
                          e.key === nt.dh.ESCAPE
                              ? (e.stopPropagation(), c(!1), null != d.current && d.current.focus())
                              : "Tab" === e.key && c(!1);
                      },
                      children: (0, l.jsx)(no, {
                          id: ni,
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
var nu = n(462180),
    nd = n(602034),
    nm = n(683438);
let nf = r.memo(function (e) {
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
        d = (0, eA.RQ)((e) => e.searchQuery),
        [m, f, E] = ep.Om.useStore((e) => [e.inspectedExpressionPosition, e.searchPlaceholder, e.hasInteracted], nu.x),
        I = r.useCallback(
            (e) => {
                (ep.Om.setActiveCategoryIndex("" === e ? 0 : -1),
                    ep.Om.setInspectedExpressionPosition(0, 0),
                    ep.Om.setSearchPlaceholder(null),
                    (0, eA.Ri)(e),
                    t.current?.scrollTo(0));
            },
            [t],
        ),
        g = r.useCallback(() => {
            I("");
        }, [I]);
    return (
        r.useImperativeHandle(c, () => ({ focus: () => u.current?.focus() })),
        (0, l.jsx)(nm.I, {
            autoFocus: a,
            query: d,
            ref: u,
            placeholder: f ?? o,
            onClear: g,
            onKeyDown: function (e) {
                switch (e.key) {
                    case nt.dh.ARROW_LEFT:
                    case nt.dh.ARROW_RIGHT:
                    case nt.dh.ARROW_UP:
                    case nt.dh.ARROW_DOWN:
                        document.activeElement !== e.target && e.preventDefault();
                }
                i(e);
            },
            onFocus: s,
            onChange: I,
            inputProps: {
                role: "combobox",
                "aria-label": Q.intl.string(Q.t.tCauZX),
                "aria-haspopup": "grid",
                "aria-autocomplete": "list",
                "aria-controls": n,
                "aria-expanded": !0,
                ...(E ? { "aria-activedescendant": (0, nd.Aq)(n, m.columnIndex, m.rowIndex) } : void 0),
            },
        })
    );
});
var nE = n(381575);
let nI = function (e) {
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
                (0, l.jsx)(nf, {
                    emojiListRef: r,
                    gridNavigatorId: tA.lq,
                    onKeyDown: a,
                    ref: d,
                    onFocus: c,
                    autoFocus: u,
                    defaultSearchPlaceholder: (0, eJ.wT)(i, f),
                }),
                i === eX.EmojiIntention.REACTION ? (0, l.jsx)(t1, { checked: f, onClick: E, buttonRef: I }) : null,
                n ?? (0, l.jsx)(nc, { searchBarRef: d, className: nE.fx, selectedSurrogate: m }),
                i !== eX.EmojiIntention.NO_CUSTOM_EMOJI && h ? (0, l.jsx)(t6, { channel: t, closePopout: p }) : null,
            ],
        });
    return (0, l.jsx)("div", { className: o()(nE.wx, s), children: null != g ? g(A) : A });
};
var ng = n(182922),
    nh = n(363195),
    np = n(486020),
    nA = n(977566);
function n_(e) {
    return null != e && "animated" in e;
}
let nN = r.memo(function (e) {
    let t,
        i,
        { className: s, emojiGrid: a, guildId: o, pickerIntention: c, channel: u } = e,
        d = ep.Om.useStore((e) => e.inspectedExpressionPosition),
        f = r.useMemo(() => {
            let { rowIndex: e, columnIndex: t } = d;
            return a[e]?.[t];
        }, [a, d]);
    switch (f?.type) {
        case tT.EMOJI:
            t = f?.emoji;
            break;
        case tT.EXPAND_OR_COLLAPSE_EMOJIS:
            t = { type: "EXPAND_OR_COLLAPSE_EMOJI", guildId: f?.guildId, allNamesString: f?.name };
            break;
        default:
            t = null;
    }
    let E = (0, m.bG)([eb.A], () => (null !== t && t.type === T.i.GUILD ? eb.A.getGuild(t.guildId) : null), [t]),
        I = (0, m.bG)([to.A], () => to.A.isFocused()),
        g = (0, m.bG)([e7.Ay], () => e7.Ay.useReducedMotion, []),
        h = ek.Sf.useSetting(),
        p = (0, eJ.O7)(o, n_(t) ? t : null),
        A = (0, m.bG)([j.Ay], () => j.Ay.expandedSectionsByGuildIds),
        { newlyAddedEmojis: _ } = (0, eW.A)(o, c),
        N = f?.type === tT.EMOJI ? f.subCategory : tA.tm.NONE;
    if (
        (r.useEffect(() => {
            let e = Date.now();
            return () => {
                Date.now() - e >= 250 &&
                    n_(t) &&
                    N !== tA.tm.NONE &&
                    (N === tA.tm.NEWLY_ADDED_EMOJI &&
                        null !== t &&
                        t.type === T.i.GUILD &&
                        (0, eh.mz)(t.guildId, _[0].id),
                    null != d.source &&
                        (0, eJ.yB)({
                            emoji: t,
                            subCategory: N,
                            position: f.columnIndex + 1,
                            newlyAddedHighlight: N === tA.tm.NEWLY_ADDED_EMOJI && eg.isNewerThanLastSeen(o, t.id),
                        }));
            };
        }),
        null == t)
    )
        return null;
    let C = (function (e, t) {
            let { allowAnimatedEmoji: i, sectionsExpandedFromThreeRows: s, theme: r } = t;
            if (n_(e)) {
                let t = null != e.id ? np.Ay.getEmojiURL({ id: e.id, animated: i && e.animated, size: 28 }) : e.url;
                return "" === t
                    ? (0, l.jsx)(V.E, {
                          variant: "text-md/normal",
                          className: nA.J_,
                          children: "surrogates" in e ? e.surrogates : null,
                      })
                    : (0, l.jsx)("img", { alt: (0, eB.N)(e) ?? "", src: t, className: nA.Zg });
            }
            if ("EXPAND_OR_COLLAPSE_EMOJI" !== e.type) return null;
            {
                let t = n(619508),
                    i = n(404828),
                    a = n(600003),
                    o = n(318121);
                return s.has(e.guildId)
                    ? (0, l.jsx)("img", { className: nA.Kk, src: (0, eC.M)(r) ? a : o, alt: "" })
                    : (0, l.jsx)("img", { className: nA.Kk, src: (0, eC.M)(r) ? t : i, alt: "" });
            }
        })(t, { allowAnimatedEmoji: h, sectionsExpandedFromThreeRows: A, theme: nh.A.theme }),
        x =
            null != E
                ? (0, l.jsx)(tN.A, { className: nA.__invalid_guildIcon, guild: E, shouldAnimate: !g && I })
                : null;
    i =
        "EXPAND_OR_COLLAPSE_EMOJI" === t.type
            ? A.has(t.guildId)
                ? Q.intl.string(Q.t["/K2RDH"])
                : Q.intl.string(Q.t.NZI2Zk)
            : (0, eB.N)(t);
    let y = (function (e) {
        let { inspectedEmoji: t, guild: n } = e,
            i = n_(t);
        return null != n && i ? Q.intl.format(Q.t.KFW2aY, { guildName: n.name }) : null;
    })({ inspectedEmoji: t, channel: u, guildId: o, intention: c, guild: E });
    return (0, l.jsx)(ng.A, {
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
var nC = n(607399),
    nx = n(123292),
    ny = n(765178),
    nj = n(537652),
    nT = n(962125),
    nO = n(240864),
    nS = n(286509),
    nb = n(89366),
    nR = n(10392),
    nv = n(82498),
    nL = n(202639),
    nP = n(414872),
    nM = n(285373),
    nD = n(304072),
    nw = n(189551),
    nk = n(594061),
    nU = n(771104),
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
let nW = e4().memoize(
        (e) =>
            `${e * eX.EmojiSprites.NonDiversityPerRow}px ${e * Math.ceil(tx.Ay.numNonDiversitySprites / eX.EmojiSprites.NonDiversityPerRow)}px`,
    ),
    nX = e4().memoize(
        (e) =>
            `${e * eX.EmojiSprites.DiversityPerRow}px ${e * Math.ceil(tx.Ay.numDiversitySprites / eX.EmojiSprites.DiversityPerRow)}px`,
    ),
    nz = r.memo(function (e) {
        let { emoji: t, size: i, surrogateCodePoint: s, allowAnimatedEmoji: a, "aria-label": c, isLocked: u } = e,
            d = (() => {
                if (!t.useSpriteSheet) {
                    let e =
                        null == t.id
                            ? t.url
                            : np.Ay.getEmojiURL({ id: t.id, animated: a && t.animated, size: eX.EMOJI_URL_BASE_SIZE });
                    return null != e
                        ? (0, l.jsx)(nB, {
                              className: nH.N1,
                              "aria-label": c,
                              src: e,
                              size: i,
                              alt: (0, eB.N)(t) ?? "",
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
                              (l = nX(i)),
                              (r = eX.EmojiSprites.DiversityPerRow))
                            : ((s = n(145519)(`./spritesheet-emoji-${i}.png.js`).default),
                              (l = nW(i)),
                              (r = eX.EmojiSprites.NonDiversityPerRow));
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
                          style: { width: i, height: i },
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
        N = (0, m.bG)([eb.A], () => (n.type === T.i.GUILD ? eb.A.getGuild(n.guildId) : void 0), [n]);
    return (0, l.jsx)(X.vN, {
        children: (0, l.jsx)("button", {
            ..._,
            className: o()(nZ._X, { [nZ.lG]: s, [nZ.Lh]: r, [nZ.Bx]: a, [h ?? ""]: a, [nZ.TV]: u }),
            "data-type": $.g.EMOJI,
            "data-id": n.id,
            "data-name": n.name,
            "data-surrogates": "surrogates" in n ? n.surrogates : null,
            "data-animated": n.animated ? "true" : null,
            ref: A,
            children: (0, l.jsx)(nz, {
                "aria-label":
                    ((t = (0, eB.N)(n)),
                    (N?.name != null &&
                        (t = Q.intl.formatToPlainString(Q.t["nXv4/B"], { names: t, guildName: N.name })),
                    i)
                        ? Q.intl.formatToPlainString(Q.t["9FI9Z0"], { names: t })
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
            isBurstReaction: y,
            rowPosition: O,
            inNitroLockedSection: S,
        } = e,
        [R, v] = r.useState(""),
        L = (0, m.bG)([e7.Ay], () => e7.Ay.useReducedMotion),
        P = (0, m.bG)([j.Ay], () => j.Ay.getDisambiguatedEmojiContext(o), [o]),
        M = r.useRef(null),
        { emoji: D, size: w, isDisabled: k, columnIndex: U } = t;
    function G() {
        d.current || f.current || c(t);
    }
    let { ref: F, tabIndex: J, onFocus: V, ...K } = h(U, a) ?? {},
        B =
            R !== `${U}:${a}`
                ? (0, l.jsx)(nY, {
                      ref: F,
                      emoji: D,
                      isFavorite: P.isFavoriteEmojiWithoutFetchingLatest(D),
                      isLargeSize: A,
                      isMediumSize: p,
                      isInspected: s,
                      isDisabled: k,
                      showPulse: _ === i,
                      allowAnimatedEmoji: N,
                      onFocus: V ?? G,
                      onMouseMove: G,
                      onClick: (e) => {
                          if (
                              null != M.current &&
                              null != O &&
                              null != x &&
                              !e.shiftKey &&
                              null != D.name &&
                              y &&
                              !L &&
                              N
                          ) {
                              let e = null == D.id ? tx.Ay.convertNameToSurrogate(D.name) : D.name,
                                  t = M.current.getBoundingClientRect();
                              ((t.x = O.x + (U + 1) * w), v(`${U}:${a}`), (0, nG.h)(x, e, D.id, t));
                          }
                          !(function (e) {
                              if ((e.stopPropagation(), d.current || f.current)) return;
                              let n = e.altKey;
                              (n &&
                                  !j.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(D) &&
                                  C(i),
                                  (0, ew.sF)(ew._2.FAVORITE_EMOJI_TOOLTIP),
                                  u(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n }));
                          })(e);
                      },
                      onContextMenu: function (e) {
                          (0, z.L3)(e, async () => {
                              let { default: e } = await Promise.all([
                                  n.e("638221"),
                                  n.e("73500"),
                                  n.e("496715"),
                                  n.e("904774"),
                                  n.e("446132"),
                              ]).then(n.bind(n, 233503));
                              return (t) => (0, l.jsx)(e, { ...t, showFavoriteOnly: D.type === T.i.PACK });
                          });
                      },
                      tabIndex: J,
                      columnIndex: U,
                      rowIndex: a,
                      size: w,
                      surrogateCodePoint: I,
                      selectedItemClassName: g,
                      inNitroLockedSection: S,
                  })
                : null;
    return (0, r.createElement)(
        "li",
        { ...K, key: i, ref: M },
        E
            ? (0, l.jsx)(b.m, {
                  text: Q.intl.formatToPlainString(Q.t.glqNsf, { key: (0, nF.isMac)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: B,
              })
            : B,
    );
}
let nq = (e) => {
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
        P = (0, eT.Ay)(),
        M = ep.Om.getState(),
        [D, w] = r.useState(M.inspectedExpressionPosition),
        [k, U] = (0, nD.A)(null, 300),
        G = r.useRef(null);
    (r.useEffect(
        () =>
            ep.Om.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => w(e),
            ),
        [],
    ),
        r.useEffect(() => {
            nk.bW.loadIfNecessary();
        }, []));
    let F = i === tA.as.LARGE,
        J = i === tA.as.MEDIUM;
    function K(e) {
        let t = `${e.rowIndex}c${e.columnIndex}`;
        switch (e.type) {
            case tT.EXPAND_OR_COLLAPSE_EMOJIS: {
                let { visibleRowIndex: n, columnIndex: i } = e,
                    c = D.rowIndex === n && D.columnIndex === i,
                    d = e.sectionCollapsedToThreeRows
                        ? c
                            ? (0, eC.M)(P)
                                ? R
                                : L
                            : (0, eC.M)(P)
                              ? y
                              : j
                        : c
                          ? (0, eC.M)(P)
                              ? b
                              : v
                          : (0, eC.M)(P)
                            ? O
                            : S,
                    I = Q.intl.string(e.sectionCollapsedToThreeRows ? Q.t.NZI2Zk : Q.t["/K2RDH"]);
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
                                className: o()(nZ._X, {
                                    [nZ.lG]: F,
                                    [nZ.Lh]: J,
                                    [nZ.Bx]: x && !I,
                                    [A ?? ""]: x,
                                    [nZ.TV]: k === t,
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
                        e.type !== tT.EXPAND_OR_COLLAPSE_EMOJIS ||
                            (t.stopPropagation(),
                            m.current ||
                                f.current ||
                                (s(e, { isFinalSelection: !0, toggleFavorite: !1 }),
                                (0, nw.G)(e.guildId),
                                e.sectionCollapsedToThreeRows || x(),
                                eG.default.track(eL.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                    collapsed: e.sectionCollapsedToThreeRows,
                                    guild_id: e.guildId,
                                })));
                    },
                    icon: (0, l.jsx)("img", { className: nZ.Kk, src: d, alt: "" }),
                    ariaLabel: I,
                    shouldShowRoundHighlight: !0,
                });
            }
            case tT.EMOJI: {
                let { columnIndex: n, visibleRowIndex: i } = e,
                    r = D.rowIndex === i && D.columnIndex === n;
                return (0, l.jsx)(
                    n$,
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
            className: o()(nZ.ND, { [nZ.HO]: F, [nZ.X$]: J }),
            ref: G,
            children: e.map(K),
        });
    }
    if (p !== tA.s.TOP_GUILD_EMOJI) return B(t);
    let H = t.filter(
            (e) =>
                e.subCategory === tA.tm.TOP_GUILD_EMOJI ||
                (e.subCategory === tA.tm.NEWLY_ADDED_EMOJI &&
                    e.emoji.type === T.i.GUILD &&
                    !eg.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
        ),
        W = t.filter(
            (e) =>
                e.subCategory === tA.tm.NEWLY_ADDED_EMOJI &&
                e.emoji.type === T.i.GUILD &&
                eg.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id),
        );
    return 0 === W.length
        ? B(t)
        : (0, l.jsxs)("div", {
              className: nZ.Ng,
              children: [
                  (0, l.jsx)("div", { className: o()(nZ.V6, { [nZ.$3]: 0 === H.length }), children: B(H) }),
                  (0, l.jsxs)("div", {
                      className: nZ.bc,
                      children: [
                          (0, l.jsx)("div", {
                              className: o()(nZ.eE, { [nZ.eM]: 1 === W.length, [nZ.Wk]: H.length > 0 }),
                              children: B(W),
                          }),
                          (0, l.jsxs)("div", {
                              className: o()(nZ.lD, { [nZ.EI]: F, [nZ.qU]: J, [nZ.Wk]: H.length > 0 }),
                              children: [
                                  (0, l.jsx)(nU.A, { foreground: nZ.rI }),
                                  (0, l.jsx)(V.E, {
                                      variant: "text-xs/semibold",
                                      color: "text-overlay-light",
                                      children: Q.intl.string(Q.t.y2b7CA),
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
};
var nQ = n(618723);
let n0 = (0, eF.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    n1 = (0, eF.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    n2 = (0, eF.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    n3 = (0, eF.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    n5 = (0, eF.xI)(E.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    n4 = (0, eF.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    n8 = (0, eF.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    n6 = r.memo(function (e) {
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
            R = ep.Om.useStore((e) => e.activeCategoryIndex),
            v = (0, eA.RQ)((e) => e.searchQuery),
            P = ek.Sf.useSetting(),
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
                sectionMarginBottom: Y,
                sectionHeaderHeight: ee,
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
                    O = r.useRef(eL.An1),
                    S = r.useMemo(() => ("" !== n ? t7.A.convert.toCodePoint(n) : ""), [n]),
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
                                    eG.default.track(eL.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                        location: T.location,
                                        tab: ez.kx.EMOJI,
                                        collapsed: !s,
                                        guild_id: n.id,
                                    }),
                                f(i));
                        },
                        [T, t, f],
                    ),
                    P = r.useCallback((e) => {
                        let { columnIndex: t, visibleRowIndex: n } = e,
                            i = e.type === tT.EMOJI ? (0, eB.N)(e.emoji) : e.name;
                        (O.current !== eL.An1 && window.cancelAnimationFrame(O.current),
                            (O.current = window.requestAnimationFrame(() => {
                                (ep.Om.setInspectedExpressionPosition(t, n, $.t.MOUSE_EVENT),
                                    ep.Om.setSearchPlaceholder(i),
                                    (O.current = eL.An1));
                            })));
                    }, []),
                    M = (0, m.bG)([ew.HP], () => ew.HP.hasHotspot(ew._2.FAVORITE_EMOJI_TOOLTIP), []),
                    D = r.useMemo(
                        () =>
                            e4().memoize((e, t) => {
                                let n = i[e],
                                    r = d[t.sectionIndex];
                                return (0, l.jsx)(
                                    nq,
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
                                        selectedItemClassName: nQ.__invalid_selectedItem,
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
                            e4().memoize((e) => {
                                let n = d[e];
                                if (null == n) return;
                                let { guild: i, pack: s, categoryId: r, type: a, sectionId: u } = n;
                                if (a === tA.s.SEARCH_RESULTS) return;
                                let m = (function (e) {
                                        let { type: t, guild: n, categoryId: i } = e;
                                        return t === tA.s.PACK
                                            ? (0, l.jsx)(L.t, {
                                                  size: "custom",
                                                  color: "currentColor",
                                                  height: 16,
                                                  width: 16,
                                              })
                                            : t === tA.s.GUILD
                                              ? null == n
                                                  ? null
                                                  : (0, l.jsx)(tN.A, { guild: n, height: 16, width: 16 })
                                              : null == i
                                                ? null
                                                : (0, l.jsx)(t_, {
                                                      categoryId: i,
                                                      height: 16,
                                                      width: 16,
                                                      size: "custom",
                                                  });
                                    })(n),
                                    f = s?.name ?? i?.name;
                                null != r && (f = (0, eJ.Nu)(r, i?.name));
                                let E = y === e,
                                    I = n.isNitroLocked,
                                    g = I && !E,
                                    h = I && E,
                                    p =
                                        a === tA.s.PACK
                                            ? (0, l.jsx)("div", {
                                                  className: nQ.uE,
                                                  children: (0, l.jsx)(nx.Q, {
                                                      text: Q.intl.string(q.default["2zxYCx"]),
                                                      textVariant: "text-sm/medium",
                                                      variant: "secondary",
                                                      "aria-label": `${Q.intl.string(q.default["2zxYCx"])} ${s.name}`,
                                                      onKeyDown: (e) => {
                                                          e.key !== nt.dh.ESCAPE && e.stopPropagation();
                                                      },
                                                      onClick: () => c(s.id),
                                                  }),
                                              })
                                            : void 0;
                                return (0, l.jsx)(
                                    nS.A,
                                    {
                                        className: o()(nQ.wx, x, { [nQ.RA]: g, [nQ.sp]: h }),
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
                    k = (0, ty.k0)(),
                    U = r.useCallback(
                        (e, n) => {
                            let i = d[e],
                                s = R(e),
                                r = b(e),
                                a = i.type === tA.s.PACK && 0 === i.count;
                            return (0, l.jsx)(
                                "div",
                                {
                                    role: "rowgroup",
                                    className: o()(nQ.Wy, {
                                        [nQ.YD]: e === d.length - 1,
                                        [nQ.jl]: t.has(i.sectionId) || a,
                                        [nQ.cW]: i.isNitroLocked,
                                        [nQ.T5]: s || r,
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
                                    ? (0, l.jsx)(nP.ap, {})
                                    : (0, l.jsx)(nP.Ay, {})
                                : b(e)
                                  ? (0, l.jsx)("div", { className: nQ.pQ })
                                  : null,
                        [R, b, k],
                    ),
                    F = r.useCallback((e) => (R(e) ? 41 : 33 * !!b(e)), [R, b]),
                    J = r.useCallback(
                        (e) =>
                            e === d.length - 1 ||
                            t.has(d[e]?.sectionId) ||
                            (d[e]?.type === tA.s.PACK && d[e]?.count === 0) ||
                            R(e) ||
                            b(e)
                                ? 0
                                : n4,
                        [t, d, R, b],
                    );
                return {
                    listPadding: r.useMemo(() => ["" !== u ? n3 : n0, n1, n2, 0], [u]),
                    renderRow: D,
                    renderSection: U,
                    renderSectionHeader: w,
                    renderSectionFooter: G,
                    sectionMarginBottom: J,
                    sectionHeaderHeight: r.useCallback((e) => (d[e].type === tA.s.SEARCH_RESULTS ? 0 : n5), [d]),
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
            ei = r.useCallback(
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
            ei(a.current?.getScrollerNode()?.scrollTop ?? 0);
        }, [a, ei, E, I, v]);
        let es = (0, e_.Fk)({
            activeCategoryIndex: R,
            isScrolling: b,
            listRef: a,
            onActiveCategoryIndexChange: function (e) {
                "" === v && ep.Om.setActiveCategoryIndex(e);
            },
            scrollOffset: 0,
            searchQuery: v,
            disableForSearch: !1,
        });
        (0, e_.FV)({ searchQuery: v, activeCategoryIndex: R, listRef: a });
        let el = r.useCallback(
                (e) => {
                    (es(e),
                        ei(e),
                        n7({ emojiListRef: a, sectionDescriptors: E, scrollTop: e, searchQuery: v, setShowUpsell: B }));
                },
                [es, ei, a, E, v, B],
            ),
            er = E.length > 0;
        (r.useEffect(() => {
            K &&
                (eG.default.track(eL.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: en.e.EMOJI_PICKER_FLOATING_UPSELL,
                    location: w,
                    location_stack: k,
                }),
                (0, nR.sq)(eL.U7l.PREMIUM_UPSELL_VIEWED, k, () => (0, nv.uq)(en.e.EMOJI_PICKER_FLOATING_UPSELL)));
        }, [w, k, K]),
            r.useEffect(() => {
                "" !== v && B(!1);
            }, [v]));
        let ea = r.useRef(null);
        return (
            r.useEffect(
                () => (
                    clearTimeout(ea.current),
                    (ea.current = setTimeout(() => {
                        (er
                            ? ny.O.announce(Q.intl.string(Q.t.uZ4F2O), "polite")
                            : ny.O.announce(Q.intl.string(Q.t.IxxiKF), "assertive"),
                            (ea.current = null));
                    }, 200)),
                    () => {
                        clearTimeout(ea.current);
                    }
                ),
                [er, v],
            ),
            (0, l.jsxs)("div", {
                className: nQ.AD,
                children: [
                    er
                        ? (0, l.jsx)(nT.A, {
                              role: "none presentation",
                              className: nQ.p_,
                              listPadding: H,
                              onScroll: el,
                              renderRow: W,
                              renderSection: X,
                              renderSectionHeader: z,
                              renderSectionFooter: Z,
                              rowCount: C,
                              rowCountBySection: I,
                              rowHeight: c + 2 * n8,
                              sectionHeaderHeight: ee,
                              sectionMarginBottom: Y,
                              sectionFooterHeight: et,
                              stickyHeaders: !0,
                              ref: a,
                          })
                        : (0, l.jsx)(nj.A, {
                              message: (0, l.jsx)(V.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: Q.intl.string(Q.t.IxxiKF),
                              }),
                              className: nQ.BZ,
                          }),
                    D || nC.Fr
                        ? null
                        : (0, l.jsx)(nL.d, {
                              showUpsell: K,
                              text:
                                  ((t = (0, e0.Dd)(en.PremiumTypes.TIER_2)),
                                  Q.intl.format(Q.t.gMVjeS, {
                                      nitroTierName: t,
                                      onClick: () => {
                                          f({ type: tS.PREMIUM, emojiDescriptor: void 0 });
                                      },
                                  })),
                              button: ((n = (0, nb.qD)()), (0, e0.LE)(n, en.pe.TIER_2) ?? Q.intl.string(Q.t.BmJkbd)),
                              buttonAnalyticsObject: { section: eL.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                              leadingAction: (0, l.jsx)(nM.l, {
                                  size: "sm",
                                  className: nQ.ij,
                                  location: N.A.PREMIUM_WISHLIST_EMOJI_UPSELL,
                              }),
                          }),
                ],
            })
        );
    }),
    n7 = e4().throttle(
        function (e) {
            let { emojiListRef: t, sectionDescriptors: n, scrollTop: i, searchQuery: s, setShowUpsell: l } = e;
            l(
                (0, nO.s)({ listRef: t, searchQuery: s, nitroLockedSectionStates: n, scrollTop: i })
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
            null == a || !(0, e0.PK)(a.status) || i)
        )
            return null;
        let c = a.status === eL.Dmq.PAST_DUE ? (0, e0.ji)(a).expiresDate : eo()(a.currentPeriodStart).add(en.ph),
            u = `${a.id}:${c.toISOString()}`;
        if (ic === u) return null;
        let d =
            e0.Ay.getPremiumType(a.planId) === en.PremiumTypes.TIER_0
                ? ii.k0.PREMIUM_TIER_0
                : e0.Ay.getPremiumType(a.planId) === en.PremiumTypes.TIER_1
                  ? ii.k0.PREMIUM_TIER_1
                  : ii.k0.PREMIUM_TIER_2;
        return (0, l.jsxs)(V.E, {
            variant: "text-xs/medium",
            color: "text-default",
            className: ia.g$,
            children: [
                (0, l.jsx)(L.t, { size: "md", className: ia.lu, color: d }),
                (0, l.jsxs)("div", {
                    className: ia.Xn,
                    children: [
                        (0, l.jsx)(V.E, {
                            variant: "text-xs/normal",
                            children: Q.intl.format(Q.t.bTMjiO, {
                                planName: e0.Ay.getTierDisplayNameByPlanId(a.planId),
                                endsAt: c.toDate(),
                            }),
                        }),
                        (0, l.jsx)("div", {
                            children: (0, l.jsx)(ie.Anchor, {
                                onClick: () => {
                                    ((0, eJ.xf)(n), t(), (0, il.openUserSettings)(is.X.NITRO_PANEL));
                                },
                                children: Q.intl.string(Q.t.W3aavh),
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(ex.D, {
                    onClick: () => {
                        (n9.w.set(io, u), (ic = u), s(!0));
                    },
                    children: (0, l.jsx)(ey.P, { size: "md", color: "currentColor", className: ia.YF }),
                }),
            ],
        });
    };
var id = n(148361);
let im = (0, eF.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    iE = (0, eF.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT);
function iI(e) {
    return e.stopPropagation();
}
function ig(e, t) {
    ep.Om.setInspectedExpressionPosition(e, t, $.t.GRID_NAVIGATOR_EVENT);
}
let ih = u()(eJ.bo, 200),
    ip = u()(eJ.Wi, 200),
    iA = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    i_ = r.memo(function (e) {
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
                emojiSize: b = tA.as.MEDIUM,
                hasTabWrapper: R = !1,
                onSelectEmoji: v,
                containerWidth: L,
                onNavigateAway: P,
                persistSearch: M,
                className: D,
                headerClassName: w,
                analyticsOverride: k = iA,
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
                onViewEmojiPacksChange: ee,
            } = e,
            { onFocus: et, onKeyDown: ei, autoFocus: ea = !0, accessory: eo } = J,
            ec = (0, m.bG)([eU.Ay], () => (null != E ? eU.Ay.getDefaultChannel(E) : null), [E]),
            [eu, ed] = r.useState(null),
            em = r.useRef(""),
            ef = (0, eA.RQ)((e) => e.searchQuery),
            eE = r.useRef(null),
            eI = r.useRef(null),
            eN = r.useRef(null),
            eC = null != ee && !z && (0, e3.z)(c),
            ex = r.useCallback((e) => {
                (eN.current?.focus(), (0, O.M5)(e));
            }, []),
            ey =
                ((t = (0, m.bG)([F.A], () => (eC ? F.A.getPacks() : er), [eC])),
                (n = (0, m.bG)(
                    [el.A],
                    () => (eC ? el.A.frecencyWithoutFetchingLatest.pinnedEmojiPacks?.packIds : void 0),
                    [eC],
                )),
                r.useMemo(
                    () =>
                        eC && null != n && 0 !== n.length
                            ? n.map((e) => t.find((t) => t.id === e)).filter((e) => null != e)
                            : er,
                    [eC, t, n],
                ));
        null == u && null != ec && (u = ec);
        let ej = u?.getGuildId() ?? E ?? null,
            [eT, eO] = r.useState(!1),
            eS = r.useRef(null),
            eR = U.default.getCurrentUser(),
            ev = (0, G.ki)(eR),
            eP = eT && ev;
        r.useImperativeHandle(Y, () => ({ onPickerOpen: tl }));
        let { location: eM } = (0, p.p)(),
            { page: eF, section: eV, object: eK, openPopoutType: ez, popoutLocation: eY } = k,
            e$ = r.useMemo(() => ({ ...eM, section: eV ?? eL.JJy.EMOJI_PICKER_POPOUT }), [eM, eV]),
            { analyticsLocations: eq } = (0, x.Ay)(N.A.EMOJI_PICKER),
            { diversitySurrogate: eQ } = (0, m.cf)([j.Ay], () => ({ diversitySurrogate: j.Ay.diversitySurrogate })),
            e0 = (0, eJ.sL)(ef, u, c, z),
            e1 = null == e0 ? 0 : e0.locked.length + e0.unlocked.length,
            e5 = ek.iM.useSetting(),
            e8 = r.useMemo(() => new Set(e5), [e5]),
            e6 = r.useCallback((e) => {
                ek.iM.updateSetting(Array.from(e));
            }, []),
            e7 = (0, e_.oV)({
                gridWrapperRef: eE,
                containerWidth: L,
                showingEmptyState: q,
                listPaddingLeft: iE,
                listScrollbarWidth: 8,
            }),
            {
                rowCountBySection: e9,
                sectionDescriptors: te,
                emojiGrid: tt,
                columnCounts: ti,
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
                    E = r.useMemo(() => (d ? tx.Ay.getCategories() : f), [f, d]),
                    I = (0, m.bG)([eb.A], () => eb.A.getGuild(t?.getGuildId()), [t]),
                    g = t?.getGuildId() ?? n,
                    h = (0, m.bG)([j.Ay], () => j.Ay.getDisambiguatedEmojiContext(g), [g]),
                    p = (0, eJ.XI)(g),
                    A = (0, eJ.Fj)(g),
                    _ = (0, eJ.QZ)(g),
                    { topEmojis: N, newlyAddedEmojis: C } = (0, eW.A)(g, s),
                    x = (0, m.yK)([tj.Ay], () => tj.Ay.getFlattenedGuildIds(), []),
                    y = (0, m.bG)([j.Ay], () => j.Ay.expandedSectionsByGuildIds),
                    T = (0, m.bG)([U.default], () => U.default.getCurrentUser()),
                    O = (0, G.ki)(T),
                    S = (0, G.ki)(T, en.PremiumTypes.TIER_2),
                    b = (0, ty.k0)(),
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
                                [E, I] = e4().partition(l, (e) => {
                                    let n = eB.Ay.isEmojiDisabled({ emoji: e, channel: t, intention: s });
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
                                                a.sectionId === tA.s.TOP_GUILD_EMOJI
                                                    ? (0, eJ.DA)(N, C, e.id ?? e.uniqueName ?? e.name)
                                                    : tA.tm.NONE,
                                        }));
                                if ((x.push(i), !u)) {
                                    if (p && e === _ - 1) {
                                        let t = x[e];
                                        t.push({
                                            type: 1,
                                            guildId: h.id,
                                            name: Q.intl.string(Q.t.NZI2Zk),
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
                                    type: tA.s.SEARCH_RESULTS,
                                    sectionId: tA.s.SEARCH_RESULTS,
                                    count: l.unlocked.length,
                                    isNitroLocked: !1,
                                }),
                                0 !== l.locked.length &&
                                    g(l.locked, {
                                        type: tA.s.PREMIUM_UPSELL,
                                        categoryId: tA.R2.PREMIUM_UPSELL,
                                        sectionId: tA.s.PREMIUM_UPSELL,
                                        count: l.locked.length,
                                        isNitroLocked: !O,
                                    }));
                        else {
                            let e = E.includes(tA.R2.CUSTOM) ? tA.R2.CUSTOM : tx.Ay.getCategories()[0];
                            for (let n of E) {
                                if (n === e)
                                    for (let e of u) {
                                        let t = e4().compact(
                                            e.emojis.map((e) => {
                                                let { id: t } = e;
                                                return h.getById(t);
                                            }),
                                        );
                                        g(t, {
                                            type: tA.s.PACK,
                                            pack: e,
                                            sectionId: `pack:${e.id}`,
                                            count: t.length,
                                            isNitroLocked: !S,
                                        });
                                    }
                                if (n === tA.R2.CUSTOM) {
                                    function j(e) {
                                        let i = R.get(e);
                                        if (null == i) return;
                                        let l = i.filter(
                                            (n) =>
                                                !tO.includes(
                                                    eB.Ay.getEmojiUnavailableReason({
                                                        emoji: n,
                                                        channel: t ?? eU.Ay.getDefaultChannel(e),
                                                        intention: s,
                                                    }),
                                                ),
                                        );
                                        if (0 === l.length) return;
                                        let r = eb.A.getGuild(e),
                                            a =
                                                b ||
                                                (!O &&
                                                    eB.Ay.isEmojiCategoryNitroLocked({
                                                        categoryEmojis: l,
                                                        channel: t,
                                                        intention: s,
                                                    }));
                                        g(l, {
                                            categoryId: n,
                                            guild: r,
                                            type: tA.s.GUILD,
                                            sectionId: null != r ? r.id : (0, tC.A)(),
                                            count: l.length,
                                            isNitroLocked: a,
                                        });
                                    }
                                    if ((null != I && j(I.id), (0, eX.isExternalEmojiAllowedForIntention)(s)))
                                        for (let e of x) (null == I || I.id !== e) && j(e);
                                } else if (n === tA.R2.TOP_GUILD_EMOJI) {
                                    if (null != I) {
                                        let { allEmojis: e } = (0, eH.W)({ topEmojis: N, newlyAddedEmojis: C });
                                        e.length > 0 &&
                                            g(e, {
                                                categoryId: n,
                                                guild: eb.A.getGuild(I.id),
                                                type: tA.s.TOP_GUILD_EMOJI,
                                                sectionId: tA.s.TOP_GUILD_EMOJI,
                                                count: e.length,
                                                isNitroLocked: !1,
                                            });
                                    }
                                } else if (n === tA.R2.RECENT) {
                                    let e = (s === eX.EmojiIntention.REACTION ? _ : A).filter(
                                        (e) => !eB.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }),
                                    );
                                    g(e, {
                                        categoryId: n,
                                        type: tA.s.RECENT,
                                        sectionId: tA.s.RECENT,
                                        count: e.length,
                                        isNitroLocked: !1,
                                    });
                                } else if (n === tA.R2.FAVORITES) {
                                    let e = p.filter(
                                        (e) => !eB.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }),
                                    );
                                    0 !== e.length &&
                                        g(e, {
                                            categoryId: n,
                                            type: tA.s.FAVORITES,
                                            sectionId: tA.s.FAVORITES,
                                            count: e.length,
                                            isNitroLocked: !1,
                                        });
                                } else {
                                    let e = tx.Ay.getByCategory(n);
                                    null != e &&
                                        g(e, {
                                            categoryId: n,
                                            type: tA.s.UNICODE,
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
                emojiPaddingHorizontal: im,
                emojiSpriteSize: b,
                pinnedPacks: ey,
                showOnlyUnicode: z,
            }),
            { newlyAddedEmojis: ts } = (0, eW.A)(ej, c);
        ((i = r.useRef({ intention: c, isBurstReaction: eT, analyticsObject: eK })),
            r.useEffect(() => {
                i.current.intention === eX.EmojiIntention.REACTION && eZ(i.current);
            }, []));
        let tl = r.useCallback(() => {
                let e = ts.length > 0 ? ts[0].id : null;
                ((0, eh.uV)(ej, e), eZ({ intention: c, isBurstReaction: eT, analyticsObject: eK }));
            }, [ts, ej, c, eT, eK]),
            tr = (function (e) {
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
                            let u = eB.Ay.getEmojiUnavailableReason({ emoji: r, channel: n, intention: t });
                            if (i.toggleFavorite)
                                return void (c.isFavoriteEmojiWithoutFetchingLatest(r) || null != u
                                    ? (0, g.Sw)(r)
                                    : (o?.(e), (0, g.V4)(r)));
                            if (u !== eX.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) {
                                if (u === eX.EmojiDisabledReasons.PREMIUM_LOCKED) {
                                    (a?.(e, u), l({ type: 0, emojiDescriptor: e }));
                                    return;
                                }
                                if (u === eX.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED && r.type === T.i.GUILD) {
                                    (a?.(e, u), l({ type: 1, guildId: r.guildId, emojiId: r.id }));
                                    return;
                                }
                                u !== eX.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE &&
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
                    (null != e && q && ee?.(!1), ed(e));
                },
                emojiSelectAnalytics: (e, t) => {
                    "" !== ef
                        ? (0, eJ.Wf)({
                              emoji: e.emoji,
                              location: { ...e$, object: eL.ZSU.EMOJI },
                              searchQuery: ef,
                              isLocked: null != t,
                              intention: c,
                              messageId: B,
                          })
                        : (0, eJ._7)({
                              emoji: e.emoji,
                              location: { ...e$, object: eK ?? eL.ZSU.EMOJI, ...(null != eF && { page: eF }) },
                              pickerIntention: c,
                              category: e.category,
                              subCategory: e.subCategory,
                              position: e.columnIndex + 1,
                              newlyAddedHighlight:
                                  e.subCategory === tA.tm.NEWLY_ADDED_EMOJI && eg.isNewerThanLastSeen(ej, e.emoji.id),
                              isBurstReaction: eT,
                              messageId: B,
                              lockedReason: t,
                              visibleRowIndex: e.visibleRowIndex,
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, eJ.C5)({ emoji: e.emoji, location: { ...e$, object: eL.ZSU.EMOJI } });
                },
            }),
            ta = r.useCallback(() => {
                (S(), P?.());
            }, [S, P]),
            {
                getItemProps: to,
                getRowProps: tc,
                gridContainerProps: tu,
                handleGridContainerKeyDown: td,
                isUsingKeyboardNavigation: tm,
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
                            if (e.type === tT.EMOJI) {
                                if (e.emoji.type === T.i.PACK)
                                    return void l(e, {
                                        isFinalSelection: !i.shiftKey,
                                        toggleFavorite: i.altKey,
                                        isBurst: u,
                                    });
                                if (null != e.emoji && i.altKey)
                                    return void (f.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                        ? (0, g.Sw)(e.emoji)
                                        : ((0, eJ.C5)({ emoji: e.emoji, location: { ...t, object: eL.ZSU.EMOJI } }),
                                          (0, g.V4)(e.emoji)));
                                let r = {
                                    page: null != c ? eL.liQ.GUILD_CHANNEL : eL.liQ.DM_CHANNEL,
                                    section: eL.JJy.EMOJI_PICKER_POPOUT,
                                    object: eL.ZSU.EMOJI,
                                };
                                (u &&
                                    (r = {
                                        page: null != c ? eL.liQ.GUILD_CHANNEL : eL.liQ.DM_CHANNEL,
                                        section: eL.JJy.EMOJI_PICKER_POPOUT,
                                        object: eL.ZSU.EMOJI,
                                    }),
                                    (0, eJ._7)({
                                        emoji: e.emoji,
                                        location: r,
                                        pickerIntention: n,
                                        category: e.category,
                                        subCategory: e.subCategory,
                                        newlyAddedHighlight:
                                            e.subCategory === tA.tm.NEWLY_ADDED_EMOJI &&
                                            eg.isNewerThanLastSeen(c, e.emoji.id),
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
                    } = (0, e_.Ff)({
                        columnCounts: i,
                        gridNavigatorId: tA.lq,
                        itemGrid: a,
                        itemList: o,
                        onGridNavigatorItemSelect: E,
                        onGridNavigatorPositionChange: ig,
                    });
                return (
                    r.useEffect(
                        () =>
                            ep.Om.subscribe(
                                (e) => e.inspectedExpressionPosition,
                                (e) => {
                                    if (null == e) return;
                                    let { columnIndex: t, rowIndex: n, source: i } = e;
                                    i !== $.t.GRID_NAVIGATOR_EVENT && I({ type: d.n.SET_FOCUSED_POSITION, x: t, y: n });
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
                columnCounts: ti,
                onSelectEmoji: v,
                onSelectPackEmoji: tr,
                emojiGrid: tt,
                emojiList: eI,
                channelGuildId: ej,
                isBurstReaction: eP,
            });
        (((e, t) => {
            let [n, i] = r.useState(null);
            (r.useEffect(() => {
                null != n && (t.current?.scrollToSectionTop(n), i(null));
            }, [t, n]),
                r.useEffect(() => {
                    i(ep.Om.getState().activeCategoryIndex);
                }, [e]));
        })(L, eI),
            r.useLayoutEffect(() => {
                ea && eN.current?.focus();
            }, [L, eQ, eN, ea]),
            (s = r.useRef(q)),
            r.useEffect(() => {
                (ea && s.current && !q && eN.current?.focus(), (s.current = q));
            }, [ea, q, eN]),
            r.useEffect(() => {
                M || (0, eA.Ri)("");
            }, [M]),
            r.useEffect(
                () => (
                    eG.default.track(eL.HAw.OPEN_POPOUT, {
                        type: ez ?? "Emoji Picker",
                        guild_id: ej,
                        location: eY,
                        ...(0, C.dI)(u),
                    }),
                    () => {
                        (ih.cancel(), ip.cancel());
                    }
                ),
                [ez, ej, eY, u],
            ),
            (0, A.Ay)(() => ((0, eJ.V$)({ intention: c, location: e$ }), (em.current = ef), ep.Om.resetStoreState)),
            r.useEffect(() => () => (0, ew.sF)(ew._2.FAVORITE_EMOJI_TOOLTIP), []),
            r.useLayoutEffect(() => {
                let { columnIndex: e, rowIndex: t } = ep.Om.getState().inspectedExpressionPosition;
                tt[t]?.[e] == null && 0 !== e && ep.Om.setInspectedExpressionPosition(0, 0);
            }, [tt]),
            r.useEffect(() => {
                if (("" === em.current && "" !== ef && (0, eJ.EG)(e$, c), "" !== ef && em.current !== ef)) {
                    let e = ep.Om.getAnalyticsId();
                    0 === e1
                        ? ih({ location: e$, searchQuery: ef, intention: c, loadId: e })
                        : ip({
                              totalResults: e1,
                              numEmojiLocked: e0?.locked.length ?? 0,
                              location: e$,
                              searchQuery: ef,
                              intention: c,
                              loadId: e,
                          });
                }
                em.current = ef;
            }, [ef, e$, e1, e0, c]));
        let tf = V ?? (R ? "div" : I.l),
            tE = null != e7;
        function tI(e, t) {
            tr(e, { ...t, isBurst: eP });
        }
        eu?.type === tS.PREMIUM
            ? (a = (0, l.jsx)(id.default, {
                  onUpsellClicked: ta,
                  emojiDescriptor: eu.emojiDescriptor,
                  pickerIntention: c,
                  analyticsLocation: e$,
                  onClose: () => ed(null),
                  channel: u,
              }))
            : eu?.type === tS.ROLE_SUBSCRIPTION &&
              (a = (0, l.jsx)(eD, { onClose: () => ed(null), guildId: eu.guildId, emojiId: eu.emojiId }));
        let tg = (0, _.A)((e, t, n) => {
                tI(
                    {
                        type: tT.EMOJI,
                        emoji: e,
                        isDisabled: !e.available,
                        size: b,
                        rowIndex: 0,
                        columnIndex: t,
                        visibleRowIndex: 0,
                        category: tA.s.PACK,
                        subCategory: tA.tm.NONE,
                    },
                    n,
                );
            }),
            th = (0, l.jsx)(nI, {
                channel: u,
                pickerIntention: c,
                emojiListRef: eI,
                onKeyDown: (e) => {
                    (td?.(e), ei?.(e));
                },
                searchBarRef: eN,
                onFocus: et,
                autoFocus: ea,
                accessory: eo,
                headerClassName: w,
                diversitySurrogate: eQ,
                isBurstReaction: eT,
                onBurstReactionToggle: function () {
                    (eO(!eT), eN.current?.focus());
                },
                burstToggleRef: eS,
                renderHeader: H,
                showAddEmojiButton: Z,
                closePopout: S,
            }),
            tp = [];
        j.Ay.hasFavoriteEmojis(ej) || tp.push(f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let t_ = (0, l.jsxs)(r.Fragment, {
                children: [
                    R ? th : null,
                    (0, l.jsxs)("div", {
                        className: nE.uK,
                        ref: eE,
                        children: [
                            (0, l.jsx)(iu, { channel: u, closePopout: S }),
                            (0, l.jsx)(y.Ay, {
                                contentTypes: tp,
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    if (t === f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                        return (0, l.jsx)(tz, { markAsDismissed: () => n(tn.i.UNKNOWN) });
                                },
                            }),
                            K
                                ? null
                                : (0, l.jsx)("div", {
                                      className: nE.Iy,
                                      id: tA.lq,
                                      ...tu,
                                      children: tE
                                          ? (0, l.jsx)(n6, {
                                                collapsedSections: e8,
                                                diversitySurrogate: eQ,
                                                emojiGrid: tt,
                                                emojiListRef: eI,
                                                emojiSize: b,
                                                getEmojiItemProps: to,
                                                getEmojiRowProps: tc,
                                                gridWidth: e7,
                                                isUsingKeyboardNavigation: tm,
                                                onEmojiSelect: tI,
                                                onRemovePack: ex,
                                                setUpsellConfigs: ed,
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
                    (0, l.jsx)(nN, { emojiGrid: tt, className: nE.qV, guildId: ej, pickerIntention: c, channel: u }),
                    a,
                    c === eX.EmojiIntention.REACTION
                        ? (0, l.jsx)(e2, { targetElementRef: eS, shouldShow: eT && !ev, onDismiss: () => eO(!1) })
                        : null,
                ],
            }),
            tN = (0, l.jsx)(h.A, {
                ...e$,
                children: (0, l.jsxs)(tf, {
                    id: tA.Do,
                    "aria-labelledby": R && !q ? tA.k1 : void 0,
                    role: R && !q ? "tabpanel" : void 0,
                    className: o()(nE.iE, { [nE.r6]: R, [nE.cB]: eP }),
                    children: [
                        R || q ? null : th,
                        (0, l.jsx)("div", {
                            className: o()(nE.Fb, D, { [nE.eW]: q && !R }),
                            onScroll: iI,
                            children: q ? (0, l.jsx)(es, { onBack: () => ee?.(!1), onSelectEmoji: tg }) : t_,
                        }),
                        K || q
                            ? null
                            : (0, l.jsx)(tW, {
                                  className: o()(nE.jv, X),
                                  emojiListRef: eI,
                                  sectionDescriptors: te,
                                  intention: c,
                                  channel: u,
                                  fallbackGuildId: ej,
                                  showOnlyUnicode: z,
                                  pinnedPacks: ey,
                                  onViewEmojiPacks: eC ? () => ee?.(!0) : void 0,
                              }),
                    ],
                }),
            });
        return (0, l.jsx)(x.f5, { value: eq, children: tN });
    });
