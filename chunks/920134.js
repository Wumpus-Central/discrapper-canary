(n.d(t, { A: () => iO }), n(321073));
var i,
    s,
    l = n(477900),
    r = n(582128),
    a = n(503698),
    o = n.n(a),
    c = n(649852),
    u = n.n(c),
    d = n(788413),
    m = n(855986),
    f = n(554146),
    E = n(319060),
    I = n(305866),
    g = n(554375),
    h = n(820284),
    p = n(212245),
    A = n(964486),
    _ = n(765548),
    N = n(793574),
    C = n(149468),
    y = n(688810),
    x = n(379848),
    T = n(121681),
    O = n(770335),
    j = n(490035),
    S = n(934499),
    b = n(331322),
    R = n(866665),
    v = n(408278),
    L = n(477155),
    P = n(403581),
    M = n(646514),
    D = n(534514),
    w = n(805251),
    k = n(95362),
    U = n(151271),
    G = n(465794),
    F = n(683973),
    J = n(287809),
    K = n(474090),
    V = n(186280),
    B = n(956396),
    H = n(118057),
    W = n(834730),
    X = n(847374),
    z = n(320448),
    Z = n(834040),
    Y = n(499373),
    $ = n(559106),
    q = n(442433),
    Q = n(565645),
    ee = n(915089),
    et = n(60587),
    en = n(236432),
    ei = n(792996),
    es = n(126904);
let el = r.memo(function (e) {
    let {
            pack: t,
            isViewSetTarget: i,
            sectionRef: s,
            isPinned: a,
            onAddPack: c,
            onRemovePack: u,
            onSelectEmoji: d,
        } = e,
        m = r.useId(),
        f = r.useId(),
        [E, I] = r.useState(i),
        g = ei.intl.string(E ? ei.t.iTcuma : ei.t.dcl9MQ),
        h = ei.intl.string(a ? en.default["2zxYCx"] : en.default.Tvdb5N),
        p = r.useMemo(() => t.emojis.filter((e) => e.available), [t.emojis]),
        A = r.useMemo(() => [p.length], [p.length]),
        _ = (0, ee.GV)(),
        {
            getContainerProps: N,
            getItemProps: C,
            getRowProps: y,
        } = (0, H.A)({
            navId: _,
            columnCounts: A,
            onSelect: (e, n, i) => {
                let s = p[e];
                null != s && t.available && d(s, e, { isFinalSelection: !i.shiftKey, toggleFavorite: i.altKey });
            },
        }),
        x = N();
    return (0, l.jsxs)("section", {
        "aria-labelledby": m,
        className: es.nM,
        ref: s,
        children: [
            (0, l.jsxs)(b.B, {
                align: "center",
                direction: "horizontal",
                gap: 4,
                justify: "space-between",
                children: [
                    (0, l.jsxs)(b.B, {
                        align: "center",
                        className: es.DD,
                        direction: "horizontal",
                        gap: 4,
                        children: [
                            (0, l.jsx)(D.D, { className: es.UU, id: m, variant: "body-sm/semibold", children: t.name }),
                            (0, l.jsx)(W.E, {
                                color: "text-subtle",
                                variant: "body-sm/medium",
                                children: ei.intl.format(en.default.UA8cNe, { count: p.length }),
                            }),
                            (0, l.jsx)(R.m, {
                                text: g,
                                children: (0, l.jsx)(v.K, {
                                    autoFocus: i,
                                    "aria-controls": f,
                                    "aria-describedby": m,
                                    "aria-expanded": E,
                                    "aria-label": g,
                                    icon: E ? X.a : z._,
                                    onClick: () => I((e) => !e),
                                    size: "sm",
                                    variant: "icon-only",
                                }),
                            }),
                        ],
                    }),
                    (0, l.jsx)(R.m, {
                        text: h,
                        children: (0, l.jsx)(v.K, {
                            "aria-label": h,
                            icon: a ? Z.MinusIcon : Y.T,
                            onClick: () => (a ? u(t) : c(t)),
                            size: "sm",
                            variant: "secondary",
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                id: f,
                ...x,
                "aria-label": t.name,
                className: o()(es.gm, { [es.jE]: E }),
                tabIndex: t.available && p.length > 0 ? x.tabIndex : -1,
                children: (0, l.jsx)("div", {
                    className: es.nI,
                    ...y(0),
                    children: p.map((e, i) => {
                        let { ref: s, ...r } = C(i, 0);
                        return (0, l.jsx)(
                            R.m,
                            {
                                text: `:${e.name}:`,
                                ariaHidden: !0,
                                asContainer: !0,
                                children: (0, l.jsx)($.vN, {
                                    children: (0, l.jsx)("button", {
                                        ...r,
                                        ref: s,
                                        "aria-label": `:${e.name}:`,
                                        className: es.Z8,
                                        "data-type": et.g.EMOJI,
                                        "data-id": e.id,
                                        "data-name": e.name,
                                        "data-animated": e.animated ? "true" : null,
                                        disabled: !t.available,
                                        onClick: (t) => {
                                            (t.stopPropagation(),
                                                d(e, i, { isFinalSelection: !t.shiftKey, toggleFavorite: t.altKey }));
                                        },
                                        onContextMenu: (e) => {
                                            let t = e.currentTarget;
                                            (0, q.L3)(e, async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e(476662),
                                                    n.e(912875),
                                                    n.e(638221),
                                                    n.e(73500),
                                                    n.e(496715),
                                                    n.e(904774),
                                                    n.e(446132),
                                                ]).then(n.bind(n, 233503));
                                                return (n) => (0, l.jsx)(e, { ...n, target: t, showFavoriteOnly: !0 });
                                            });
                                        },
                                        type: "button",
                                        children: (0, l.jsx)(Q.A, {
                                            animated: e.animated,
                                            alt: "",
                                            className: es.Zg,
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
var er = n(682901),
    ea = n(429800);
function eo(e) {
    let { onBack: t, onSelectEmoji: n } = e,
        i = ei.intl.string(en.default.Nwj3fK),
        s = r.useRef(null),
        a = (0, U.RQ)((e) => e.showSelectedEmojiPackId),
        o = (0, m.bG)([B.A], () => B.A.getPacks()),
        c = null != a && o.some((e) => e.id === a),
        u = (0, m.bG)([J.default], () => J.default.getCurrentUser()),
        d = (0, K.ki)(u, er.PremiumTypes.TIER_2);
    (r.useLayoutEffect(() => {
        c &&
            (s.current?.scrollIntoView({ block: "start" }),
            s.current?.querySelector("button[aria-expanded]")?.focus({ preventScroll: !0 }));
    }, [c, a]),
        (0, V.i3)(d));
    let f = (0, F.k)().pinnedEmojiPacks?.packIds,
        E = r.useCallback((e) => {
            (0, S.Ls)(e.id);
        }, []),
        I = r.useCallback((e) => {
            (0, S.M5)(e.id);
        }, []);
    return (0, l.jsxs)("div", {
        className: ea.kL,
        children: [
            (0, l.jsx)("div", { "aria-hidden": !0, className: ea.Tp }),
            (0, l.jsx)("div", {
                className: ea.wx,
                children: (0, l.jsxs)(b.B, {
                    align: "center",
                    direction: "horizontal",
                    gap: 8,
                    justify: "space-between",
                    wrap: !0,
                    children: [
                        (0, l.jsxs)(b.B, {
                            align: "center",
                            direction: "horizontal",
                            gap: 10,
                            fullWidth: !1,
                            children: [
                                (0, l.jsx)(R.m, {
                                    position: "right",
                                    text: i,
                                    children: (0, l.jsx)(v.K, {
                                        autoFocus: !c,
                                        "aria-label": i,
                                        icon: L.r,
                                        onClick: t,
                                        size: "sm",
                                        variant: "icon-only",
                                    }),
                                }),
                                (0, l.jsxs)(b.B, {
                                    align: "center",
                                    direction: "horizontal",
                                    gap: 4,
                                    fullWidth: !1,
                                    children: [
                                        (0, l.jsx)(P.t, { color: M.A.colors.TEXT_DEFAULT, size: "xs" }),
                                        (0, l.jsxs)(b.B, {
                                            align: "center",
                                            direction: "horizontal",
                                            gap: 8,
                                            fullWidth: !1,
                                            children: [
                                                (0, l.jsx)(D.D, {
                                                    variant: "heading-sm/semibold",
                                                    children: ei.intl.string(en.default["0+5+Oy"]),
                                                }),
                                                (0, l.jsx)(w.E, { type: "beta", variant: "primary" }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        d
                            ? null
                            : (0, l.jsx)(G.A, {
                                  buttonTextOverride: ei.intl.string(ei.t.hIVbiP),
                                  size: "sm",
                                  subscriptionTier: er.pe.TIER_2,
                              }),
                    ],
                }),
            }),
            (0, l.jsx)(k.d_, {
                className: ea.p_,
                scrollbarGutter: !1,
                children: o.map((e, t) =>
                    (0, l.jsxs)(
                        r.Fragment,
                        {
                            children: [
                                t > 0 ? (0, l.jsx)("hr", { className: ea.yF }) : null,
                                (0, l.jsx)(
                                    el,
                                    {
                                        sectionRef: e.id === a ? s : void 0,
                                        isViewSetTarget: e.id === a,
                                        isPinned: f?.includes(e.id) === !0,
                                        pack: e,
                                        onAddPack: E,
                                        onRemovePack: I,
                                        onSelectEmoji: n,
                                    },
                                    `${e.id}:${e.id === a}`,
                                ),
                            ],
                        },
                        e.id,
                    ),
                ),
            }),
        ],
    });
}
var ec = n(617617);
let eu = [];
var ed = n(536637),
    em = n.n(ed),
    ef = n(73153),
    eE = n(811091);
let eI = { lastSeenNewlyAddedEmojiIds: {} },
    eg = eI,
    eh = {};
function ep() {
    for (let e in eh) eg.lastSeenNewlyAddedEmojiIds[e] = eh[e];
}
class eA extends m.Ay.PersistedStore {
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
        eg = e ?? eI;
    }
    getState() {
        return eg;
    }
    getLastSeenEmojiByGuild(e) {
        return eg.lastSeenNewlyAddedEmojiIds[e];
    }
    isNewerThanLastSeen(e, t) {
        if (null == e || null == t) return !1;
        let n = this.getLastSeenEmojiByGuild(e);
        if (null == n || eE.default.compare(t, n.id) > 0) return !0;
        {
            let e = em()(n.lastSeen);
            return em()().isBefore(e.add(2, "weeks")) && !n.acknowledged;
        }
    }
}
let e_ = new eA(ef.h, {
    LOGOUT: function () {
        ((eg = eI), (eh = {}));
    },
    NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = eh[t] ?? eg.lastSeenNewlyAddedEmojiIds[t];
        null == i || 0 > eE.default.compare(i.id, n)
            ? (eh[t] = { id: n, lastSeen: Date.now(), acknowledged: !0 })
            : (eh[t] = { ...i, acknowledged: !0 });
    },
    NEWLY_ADDED_EMOJI_SEEN_PENDING: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = eh[t] ?? eg.lastSeenNewlyAddedEmojiIds[t];
        (null == i || 0 > eE.default.compare(i.id, n)) && (eh[t] = { id: n, lastSeen: Date.now(), acknowledged: !1 });
    },
    NEWLY_ADDED_EMOJI_SEEN_UPDATED: ep,
    CLEAR_CACHES: function () {
        ((eg = eI), ep());
    },
    CONNECTION_CLOSED: ep,
});
var eN = n(451731),
    eC = n(850992),
    ey = n(887695),
    ex = n(613412),
    eT = n(462887),
    eO = n(939249),
    ej = n(789645),
    eS = n(696986),
    eb = n(736653),
    eR = n(139286),
    ev = n(976860),
    eL = n(71393),
    eP = n(384684),
    eM = n(985242),
    eD = n(652215),
    ew = n(746080),
    ek = n(196404);
function eU(e) {
    let t,
        { onClose: i, guildId: s, emojiId: r } = e,
        a = ((t = (0, eb.Ay)()), (0, eT.q)(t) ? n(454333) : n(674463)),
        { analyticsLocations: o } = (0, y.Ay)(N.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, eR.A)({
        type: ex.ImpressionTypes.MODAL,
        name: ex.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: { location_stack: o, emoji_guild_id: s, emoji_id: r ?? null },
    });
    let c = (0, m.bG)([eL.A], () => eL.A.getGuild(s)),
        u = (0, m.bG)([eP.A], () => null != s && eP.A.getUserSubscriptionRoles(s).size > 0),
        d = u ? ei.intl.string(ei.t.GoLM9z) : ei.intl.formatToPlainString(ei.t["h0u/Hi"], { serverName: c?.name }),
        f = u ? ei.intl.string(ei.t.PjZ7Db) : ei.intl.string(ei.t.p8FG1D);
    return (0, l.jsxs)("div", {
        className: ek.kL,
        children: [
            (0, l.jsx)("div", { className: ek.Tp }),
            (0, l.jsxs)("div", {
                className: ek.Qs,
                children: [
                    (0, l.jsx)(eO.D, {
                        className: ek.b,
                        "aria-label": ei.intl.string(ei.t.cpT0Cq),
                        onClick: i,
                        children: (0, l.jsx)(ej.P, {
                            size: "xs",
                            color: "currentColor",
                            "aria-label": ei.intl.string(ei.t.cpT0Cq),
                            className: ek.yP,
                        }),
                    }),
                    (0, l.jsx)("img", { alt: "", src: a, className: ek.Tn }),
                    (0, l.jsx)(eS.h, { size: 22 }),
                    (0, l.jsx)(D.D, {
                        color: "text-strong",
                        variant: "heading-lg/semibold",
                        className: ek.wx,
                        children: ei.intl.string(ei.t.cBjkcx),
                    }),
                    (0, l.jsx)(eS.h, { size: 4 }),
                    (0, l.jsx)(W.E, {
                        color: "text-default",
                        variant: "body-md/normal",
                        className: ek.h_,
                        children: d,
                    }),
                    (0, l.jsx)(eS.h, { size: 24 }),
                    (0, l.jsx)(eM.A, {
                        text: f,
                        onClick: function () {
                            (0, ev.pX)(eD.BVt.CHANNEL(s, ew.VV.ROLE_SUBSCRIPTIONS), { sourceLocationStack: o });
                        },
                    }),
                ],
            }),
        ],
    });
}
var eG = n(450510),
    eF = n(778705),
    eJ = n(253932),
    eK = n(808728),
    eV = n(129230),
    eB = n(240248),
    eH = n(822123),
    eW = n(734057),
    eX = n(309010),
    ez = n(690521),
    eZ = n(818645),
    eY = n(316884),
    e$ = n(307731),
    eq = n(698279);
function eQ(e) {
    let { intention: t, containerWidth: n, rowSize: i, isBurstReaction: s, analyticsObject: l } = e,
        r = eW.A.getChannel(eX.Ay.getChannelId()),
        a = r?.getGuildId(),
        o =
            t === e$.EmojiIntention.REACTION
                ? T.Ay.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice()
                : T.Ay.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        c = null != r ? T.Ay.getDisambiguatedEmojiContext(r.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        u =
            t === e$.EmojiIntention.REACTION
                ? T.Ay.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems
                : T.Ay.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        d = o.slice(0, u),
        m = null != a ? T.Ay.getGuildEmoji(a) : [],
        f = T.Ay.getDisambiguatedEmojiContext(r?.getGuildId()).getCustomEmoji(),
        { topEmojis: E, newlyAddedEmojis: I } = (0, eY.b)({ guildId: r?.getGuildId(), pickerIntention: t }),
        { visibleTopEmojis: g, visibleNewlyAddedEmojis: h } = (0, eZ.W)({
            topEmojis: E,
            newlyAddedEmojis: I,
            rowSize: i,
        });
    C.Ay.trackWithMetadata(
        t === e$.EmojiIntention.REACTION ? eD.HAw.REACTION_PICKER_OPENED : eD.HAw.EXPRESSION_PICKER_OPENED,
        {
            width: n,
            tab: eq.kx.EMOJI,
            badged: !1,
            num_expressions_favorites: c.length,
            num_animated_expressions_favorites: c.filter((e) => e?.animated).length,
            num_custom_expressions_favorites: c.filter(ez.Ay.isCustomEmoji).length,
            num_standard_expressions_favorites: c.filter((e) => null == e.id).length,
            num_expressions_frecent: d.length,
            num_animated_expressions_frecent: d.filter((e) => e?.animated).length,
            num_custom_expressions_frecent: d.filter(ez.Ay.isCustomEmoji).length,
            num_standard_expressions_frecent: d.filter((e) => null == e.id).length,
            num_current_guild_expressions: m.length,
            num_custom_expressions_total: f.size,
            num_expressions_top_server: g.length,
            num_animated_expressions_top_server: g.filter((e) => e.animated).length,
            num_expressions_newly_added: h.length,
            num_animated_expressions_newly_added: h.filter((e) => e.animated).length,
            ...(t === e$.EmojiIntention.REACTION && { is_burst: s }),
            ...(null != l && { location_object: l }),
        },
    );
}
var e0 = n(206248),
    e1 = n(423814),
    e2 = n(77528),
    e3 = n(783420),
    e5 = n(722178);
let e4 = { object: eD.ZSU.BUTTON_CTA, section: eD.JJy.SUPER_REACTION_PICKER };
function e8(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: i } = e,
        s = ei.intl.string(ei.t.eikz43),
        r = (0, e2.V)(),
        a = (0, e1.O)(),
        o = r?.subscriptionTrial,
        c = null != o || null != a,
        u = o?.skuId ?? er.pe.TIER_2,
        d = c
            ? null != a
                ? ei.intl.formatToPlainString(ei.t.bkQ4bH, { percent: a.discount.amount })
                : (0, e5.FY)({ intervalType: o?.interval, intervalCount: o?.intervalCount })
            : ei.intl.string(ei.t.sEAnVH);
    return (0, l.jsx)(e3.A, {
        subscriptionTier: u,
        premiumModalAnalyticsLocation: e4,
        onSubscribeModalClose: (e) => {
            e && i();
        },
        children: (e) => {
            let { onClick: r } = e;
            return (0, l.jsx)(e0.H, {
                targetElementRef: t,
                shouldShow: n,
                onRequestClose: i,
                position: "bottom",
                assetUrl: "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
                disableMediaViewer: !0,
                badge: c ? { type: "free_trial", variant: "expressive" } : void 0,
                title: ei.intl.string(ei.t.N4SCJ0),
                body: s,
                action: { text: d, variant: "expressive", icon: P.t, onClick: r },
            });
        },
    });
}
var e6 = n(200589),
    e7 = n(435558),
    e9 = n.n(e7),
    te = n(837381),
    tt = n(460905),
    tn = n(775602),
    ti = n(713517),
    ts = n(329921),
    tl = n(263775),
    tr = n(49999),
    ta = n(938612);
function to(e) {
    let { onClick: t, listItemId: n } = e,
        i = ei.intl.string(en.default["3D0GLv"]),
        s = (0, te.rm)(n),
        [r, a] = (0, tl.kn)([f.M.DEFAULT_EMOJIS_PACKS_DISCOVERY_DOT]),
        o = r === f.M.DEFAULT_EMOJIS_PACKS_DISCOVERY_DOT;
    return (0, l.jsx)("div", {
        className: ta.nM,
        children: (0, l.jsxs)("div", {
            className: ta.Jn,
            children: [
                (0, l.jsx)(R.m, {
                    ariaHidden: !0,
                    position: "right",
                    text: i,
                    children: (0, l.jsx)(eO.D, {
                        ...s,
                        "aria-label": o ? `${i}, ${ei.intl.string(ei.t.y2b7CA)}` : i,
                        className: ta.x6,
                        onClick: function () {
                            (o && a(tr.i.TAKE_ACTION), t());
                        },
                        children: (0, l.jsx)(Y.T, { size: "md", color: "currentColor" }),
                    }),
                }),
                o && (0, l.jsx)(ts.N, { className: ta.aW, size: "md", cutout: "base-lower" }),
            ],
        }),
    });
}
var tc = n(318845),
    tu = n(407698),
    td = n(941971),
    tm = n(531685),
    tf = n(406810),
    tE = n(27232),
    tI = n(369606),
    tg = n(413249),
    th = n(141060),
    tp = n(687966),
    tA = n(115979),
    t_ = n(524501),
    tN = n(926268),
    tC = n(138134),
    ty = n(732139);
let tx = r.memo(function (e) {
    let { categoryId: t, ...n } = e,
        i = (function (e) {
            switch (e) {
                case ty.R2.RECENT:
                    return tf.ClockIcon;
                case ty.R2.FAVORITES:
                    return tE.StarIcon;
                case ty.R2.TOP_GUILD_EMOJI:
                    return tI.TrophyIcon;
                case ty.R2.PEOPLE:
                    return tt.n;
                case ty.R2.NATURE:
                    return tg.p;
                case ty.R2.FOOD:
                    return th.i;
                case ty.R2.ACTIVITY:
                    return tp.GameControllerIcon;
                case ty.R2.TRAVEL:
                    return tA.h;
                case ty.R2.OBJECTS:
                    return t_.D;
                case ty.R2.SYMBOLS:
                    return tN.HeartIcon;
                case ty.R2.FLAGS:
                    return tC.FlagIcon;
                case ty.R2.PREMIUM_UPSELL:
                    return P.t;
                default:
                    return;
            }
        })(t);
    return null == i ? null : (0, l.jsx)(i, { color: "currentColor", ...n });
});
var tT = n(724511),
    tO = n(115560),
    tj = n(7584),
    tS = n(526292),
    tb = n(711014),
    tR = (((i = {})[(i.EMOJI = 0)] = "EMOJI"), (i[(i.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"), i);
let tv = [e$.Am.DISALLOW_EXTERNAL, e$.Am.DISALLOW_CUSTOM];
var tL = (((s = {})[(s.PREMIUM = 0)] = "PREMIUM"), (s[(s.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), s),
    tP = n(342379);
let tM = "expression-guild-",
    { itemIdForIndex: tD } = (0, tc.J)(tM),
    tw = `${tM}view-emoji-packs`,
    tk = (0, eB.xI)(E.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    tU = (0, eB.xI)(E.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    tG = (0, eB.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    tF = (0, eB.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    tJ = (0, eB.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    tK = (0, eB.xI)(tP.__invalid_unicodeCategoryShortcutHeight),
    tV = (0, eB.xI)(E.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    tB = (0, eB.xI)(E.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    tH = tG + tU + 2 * tJ,
    tW = tV + 2 * tB,
    tX = tk + tU,
    tz = tX + tW,
    tZ = tG + tF + 2 * tJ,
    tY = tG + 2 * tJ + 2 * tU + tV;
function t$(e) {
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
        { isHoveringOrFocusing: f } = (0, ti.A)(m),
        E = (0, te.rm)(tD(n)),
        I = a.type === ty.s.GUILD || a.type === ty.s.PACK ? null : a.id,
        g = t === n,
        h = !d && u,
        p = a.type === ty.s.GUILD ? a.guild : null,
        A = a.type === ty.s.PACK ? a.pack : null,
        _ = (0, l.jsxs)(eO.D, {
            innerRef: m,
            ...E,
            "aria-label": a.type === ty.s.PACK ? a.pack.name : (0, eH.wt)(a, p),
            className: o()({
                [tP.ZG]: null != p,
                [tP.td]: null != A,
                [tP.Q0]: null != A && g,
                [tP.Bj]: null == p && null == A,
                [tP.s6]: null == p && null == A && g,
                [tP.xg]: a.type === ty.s.RECENT,
            }),
            onClick: () => {
                (null != p &&
                    eV.default.track(eD.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: i?.location,
                        tab: eq.kx.EMOJI,
                        guild_id: p.id,
                    }),
                    c(n));
            },
            children: [
                (0, l.jsx)("div", {
                    className: tP.a$,
                    children: (0, l.jsx)(td.A, { hovered: f, selected: g, size: "small" }),
                }),
                a.type === ty.s.GUILD
                    ? (0, l.jsx)(tT.A, { guild: a.guild, isSelected: g, shouldAnimate: h, isLocked: a.isNitroLocked })
                    : null,
                null != A
                    ? (0, l.jsx)(Q.A, {
                          alt: "",
                          animated: !d,
                          shouldAnimate: h,
                          className: tP.ty,
                          emojiId: A.representativeEmojiId,
                      })
                    : null,
                null == p && null != I
                    ? (0, l.jsx)(tx, { categoryId: I, className: tP.Yl, height: tG, width: tG, size: "custom" })
                    : null,
            ],
        }),
        N = s[n + 1],
        C = s[n - 1],
        y = null != A && null != C && C.type !== ty.s.PACK,
        x = null != A && N?.type !== ty.s.PACK,
        T = null != N && a.type === ty.s.GUILD && N.type !== ty.s.GUILD;
    return null != p
        ? (0, l.jsxs)(r.Fragment, {
              children: [
                  (0, l.jsx)(tu.Q, { guild: p, children: _ }),
                  T ? (0, l.jsx)("hr", { className: tP.ny }, "separator") : null,
              ],
          })
        : null != A
          ? (0, l.jsxs)(r.Fragment, {
                children: [
                    y ? (0, l.jsx)("hr", { className: tP.ny }) : null,
                    (0, l.jsx)(R.m, { ariaHidden: !0, position: "right", text: A.name, children: _ }),
                    x ? (0, l.jsx)("hr", { className: tP.ny }) : null,
                ],
            })
          : _;
}
let tq = (e) => {
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
        E = eC.Om.useStore((e) => e.activeCategoryIndex),
        I = (function (e) {
            let { emojiListRef: t } = e,
                n = (0, U.RQ)((e) => e.searchQuery),
                i = r.useCallback((e) => t.current?.scrollToSectionTop(e), [t]);
            return r.useCallback(
                (e) => {
                    "" !== n ? ((0, U.Ri)(""), eC.Om.setActiveCategoryIndex(e)) : i(e);
                },
                [i, n],
            );
        })({ sectionDescriptors: i, emojiListRef: n }),
        g = (0, p.p)(),
        h = (0, eH.ss)(s, a, { guildId: a?.guild_id ?? c }),
        A = r.useMemo(() => (0, e6.t)(u ? (0, eH.CQ)() : h, d), [h, d, u]),
        _ = r.useRef(null),
        N = (0, m.bG)([tm.A], () => tm.A.isFocused()),
        C = (0, m.bG)([tn.Ay], () => tn.Ay.useReducedMotion, []),
        y = r.useMemo(
            () =>
                e9().memoize(
                    (e, t) => {
                        let n = A[t];
                        if (null != n)
                            return (0, l.jsx)(
                                t$,
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
        T = null != f ? tY : 0,
        O = r.useMemo(() => {
            if (null != f)
                return function () {
                    return (0, l.jsx)(to, { listItemId: tw, onClick: f }, "view-emoji-packs");
                };
        }, [f]),
        j = r.useCallback(
            (e, t) => {
                let n = A[t];
                if (n.type === ty.s.RECENT) return tH;
                if (n.type === ty.s.PACK) {
                    let e = A[t - 1],
                        n = A[t + 1];
                    return tX + (Number(null != e && e.type !== ty.s.PACK) + Number(n?.type !== ty.s.PACK)) * tW;
                }
                if (n.type === ty.s.GUILD) {
                    let e = A[t + 1];
                    return null != e && e.type !== ty.s.GUILD ? tz : tX;
                }
                return tZ;
            },
            [A],
        ),
        {
            nonUnicodeCategoryCount: S,
            firstUnicodeCategoryIndex: b,
            firstUnicodeCategoryOffsetTop: R,
            rowCountBySection: v,
        } = r.useMemo(() => {
            let e = 0,
                t = 0,
                n = 0,
                i = 0;
            A.forEach((s) => {
                s.type === ty.s.GUILD || s.type === ty.s.PACK
                    ? ((t += 1), (n += 1))
                    : s.type === ty.s.UNICODE
                      ? (i += 1)
                      : ((e += 1), (t += 1));
            });
            let s = [e, n, i],
                l = A.some((e) => e.type === ty.s.PACK) ? (A[0]?.type === ty.s.PACK ? 1 : 2) : 0,
                r = T + tH + t * tX + tz + l * tW;
            return {
                nonUnicodeCategoryCount: t,
                firstUnicodeCategoryIndex: t,
                firstUnicodeCategoryOffsetTop: r,
                rowCountBySection: s,
            };
        }, [A, T]),
        [L, P] = r.useState(!0);
    r.useLayoutEffect(() => {
        P(S >= 7);
    }, [S]);
    let M = r.useCallback(
            (e) => {
                let t = _.current?.getListDimensions();
                null == t || (e + t.height - tV >= R ? P(!1) : P(!0));
            },
            [R],
        ),
        D = r.useCallback(
            (e) => {
                (e(b), _.current?.scrollTo(R));
            },
            [R, b],
        ),
        w = r.useCallback(
            (e, t) => {
                let n = A[e];
                if (null == n) return 0;
                let i = L ? tK : 0;
                if (n.type === ty.s.RECENT) return t ? 0 : tF;
                if (n.type === ty.s.PACK) return t ? i : tU;
                if (n.type === ty.s.GUILD) {
                    let n = A[e + 1];
                    return null != n && n.type !== ty.s.GUILD ? (t ? tV + -2 * tB + tU + i : tU) : t ? i : tU;
                }
                return t ? tU + i : 2 * tU;
            },
            [A, L],
        ),
        k = r.useMemo(
            () =>
                function (e, t) {
                    return (0, l.jsx)(r.Fragment, { children: t }, e);
                },
            [],
        ),
        G = L ? "shortcut" : "hiddenshortcut";
    return (0, l.jsx)(tc.A, {
        categoryListRef: _,
        expressionsListRef: n,
        className: t,
        store: eC.Om,
        categories: A,
        listPadding: x,
        onScroll: M,
        renderCategoryListItem: y,
        renderSection: k,
        rowCount: A.length,
        categoryHeight: j,
        getScrollOffsetForIndex: w,
        rowCountBySection: v,
        navId: "emoji-picker-categories",
        itemIdPrefix: tM,
        renderListHeader: O,
        listHeaderHeight: T,
        children: (e) =>
            S >= 7 &&
            (0, l.jsx)(
                eO.D,
                {
                    "aria-hidden": !L,
                    "aria-label": ei.intl.string(ei.t.dT0ctw),
                    className: o()(tP.KB, { [tP.h_]: !L }),
                    tabIndex: L ? 0 : -1,
                    onClick: () => D(e),
                    children: (0, l.jsx)(tt.n, { size: "custom", color: "currentColor", height: tG, width: tG }),
                },
                G,
            ),
    });
};
var tQ = n(860197);
let t0 = function (e) {
    let { markAsDismissed: t } = e;
    return (0, l.jsxs)(W.E, {
        variant: "body-xs/medium",
        color: "text-default",
        className: tQ.iE,
        children: [
            (0, l.jsx)(tN.HeartIcon, { size: "md", color: "currentColor", className: tQ.Kk }),
            (0, l.jsx)("div", {
                className: tQ.Qs,
                children: (0, l.jsx)(W.E, { variant: "body-xs/normal", children: ei.intl.string(ei.t.xdRf69) }),
            }),
            (0, l.jsx)(eO.D, {
                onClick: () => t(tr.i.UNKNOWN),
                children: (0, l.jsx)(ej.P, { size: "md", color: "currentColor", className: tQ.VN }),
            }),
        ],
    });
};
var t1 = n(120692),
    t2 = n(717421),
    t3 = n(343032),
    t5 = n(683063),
    t4 = n(748798);
let t8 = { tension: 750, mass: 2.5, friction: 70 };
function t6(e) {
    let { checked: t, onClick: n, buttonRef: i } = e,
        s = (0, m.bG)([tn.Ay], () => tn.Ay.useReducedMotion),
        a = J.default.getCurrentUser(),
        c = null != a && !(0, e5.TW)(a),
        u = c ? [] : [f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP],
        [d, E] = (0, tl.kn)(u),
        [I, g] = r.useState(!1),
        [h, p] = (0, t2.z)(() => ({})),
        A = (0, t1.animated)(t3.i);
    r.useEffect(() => {
        let e = d === f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (E(tr.i.DISMISS), setTimeout(() => g(e), 200));
    }, [d, E]);
    let _ = I ? ei.intl.string(ei.t["Osi/uy"]) : t && !c ? ei.intl.string(ei.t["5cRA/b"]) : ei.intl.string(ei.t.buV4av),
        N = I ? ei.intl.string(ei.t.ORK94p) : void 0;
    return (0, l.jsx)(t5.u, {
        position: "top",
        title: N,
        body: _,
        asset: (0, l.jsx)(P.t, { size: "md", color: "currentColor" }),
        assetSize: 20,
        forceOpen: I,
        children: (0, l.jsx)(eO.D, {
            innerRef: i,
            "aria-label": _,
            "aria-pressed": t,
            onClick: function () {
                (p({ from: { rotate: t ? "360deg" : "0deg" }, to: { rotate: t ? "0deg" : "360deg" }, config: t8 }),
                    n?.(),
                    g(!1));
            },
            focusProps: { enabled: !1 },
            className: o()(t4.Pf, { [t4.wM]: t }),
            children: (0, l.jsx)(A, {
                style: s ? void 0 : h,
                size: "custom",
                width: 20,
                height: 20,
                color: t ? "white" : "currentColor",
                className: t4.Kk,
            }),
        }),
    });
}
var t7 = n(821609),
    t9 = n(644508),
    ne = n(824832),
    nt = n(267102),
    nn = n(242812);
function ni(e) {
    let { channel: t, closePopout: n } = e,
        i = r.useRef(null),
        s = r.useRef(0),
        [a, o] = r.useState(!1),
        [c, u] = r.useState(!1),
        d = (0, nt.Us)() === eD.BRT.OVERLAY,
        m = c || a,
        f = r.useCallback(
            async (e, i, l) => {
                (u(!0),
                    n(),
                    await (0, t9.f)({
                        userImage: { data: e, file: i, image: l },
                        guildId: t?.guild_id ?? null,
                        analyticsLocation: {
                            section: eD.JJy.EXPRESSION_PICKER,
                            page: t?.guild_id != null ? eD.liQ.GUILD_CHANNEL : eD.liQ.DM_CHANNEL,
                        },
                    }),
                    (s.current += 1),
                    u(!1));
            },
            [t, n],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(R.m, {
                asContainer: !0,
                text: d ? ei.intl.string(ei.t.RMbedC) : null,
                children: (0, l.jsx)(t7.$, {
                    text: ei.intl.string(ei.t.iMJO37),
                    variant: "secondary",
                    onClick: function () {
                        (C.Ay.trackWithMetadata(eD.HAw.EXPRESSION_PICKER_ADD_EMOJI_CLICKED, {
                            guild_id: t?.guild_id ?? null,
                            channel_id: t?.id ?? null,
                            location_section: eD.JJy.EXPRESSION_PICKER,
                            location_page: t?.guild_id != null ? eD.liQ.GUILD_CHANNEL : eD.liQ.DM_CHANNEL,
                        }),
                            i.current?.activateUploadDialogue());
                    },
                    disabled: m || d,
                }),
            }),
            (0, l.jsx)("div", {
                className: nn.F,
                children: (0, l.jsx)(ne.Ay, { ref: i, onChange: f, setLoading: o, disabled: m }, s.current),
            }),
        ],
    });
}
n(667532);
var ns = n(833272),
    nl = n(82495),
    nr = n(260762),
    na = n(650583),
    no = n(683829);
let nc = (0, ee.Ld)(),
    nu = ns.A.convert.fromCodePoint("1f44f"),
    nd = (0, eB.xI)(E.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
function nm(e) {
    switch (ns.A.convert.toCodePoint(e)) {
        case "1f3fb":
            return ei.intl.string(ei.t["BVK5b/"]);
        case "1f3fc":
            return ei.intl.string(ei.t.xJWOK8);
        case "1f3fd":
            return ei.intl.string(ei.t["MB+T5g"]);
        case "1f3fe":
            return ei.intl.string(ei.t.MODud2);
        case "1f3ff":
            return ei.intl.string(ei.t["0uzqsc"]);
        default:
            return ei.intl.string(ei.t.bGN1ow);
    }
}
let nf = (e) => {
    let { fade: t, surrogate: n, onClick: i, delay: s, index: r } = e,
        a = (0, te.rm)(`item-${r}`),
        o = ez.Ay.getURL(nu + n),
        c = (0, t2.z)({ opacity: 1, from: { opacity: +!t }, delay: s }, "animate-always");
    return (0, l.jsx)(eO.D, {
        ...a,
        role: "option",
        "aria-selected": 0 === r,
        onClick: () => i(n),
        className: no.B6,
        children: (0, l.jsx)(t1.animated.div, {
            "aria-label": nm(n),
            className: no.g4,
            style: { backgroundImage: `url("${o}")`, ...c },
        }),
    });
};
function nE(e) {
    let { id: t, selectedSurrogate: n, onClick: i } = e,
        s = (0, nr.A)("diversity"),
        a = (0, t2.z)({ height: (nd + 14) * (tj.W$.length + 1), from: { height: nd + 14 }, config: { duration: 125 } }),
        o = r.useRef(s);
    r.useEffect(() => {
        o.current.focusFirstVisibleItem();
    }, []);
    let c = ["", ...tj.W$];
    return (
        e9().remove(c, (e) => e === n),
        c.unshift(n),
        (0, l.jsx)(te.hD, {
            navigator: s,
            children: (0, l.jsx)(te.PR, {
                children: (e) => {
                    let { ref: n, ...s } = e;
                    return (0, l.jsx)(t1.animated.div, {
                        ...s,
                        id: t,
                        ref: n,
                        className: no.J6,
                        style: a,
                        role: "listbox",
                        children: c.map((e, t) =>
                            (0, l.jsx)(nf, { index: t, fade: 0 !== t, delay: 20 * t, surrogate: e, onClick: i }, t),
                        ),
                    });
                },
            }),
        })
    );
}
let nI = function (e) {
    let { searchBarRef: t, selectedSurrogate: n, className: i } = e,
        s = ez.Ay.getURL(nu + n),
        [a, c] = r.useState(!1),
        u = (0, nl.A)(null, () => c(!1)),
        d = r.useRef(null);
    return (0, l.jsxs)("div", {
        ref: u,
        className: o()(no.fx, i),
        children: [
            (0, l.jsx)(eO.D, {
                innerRef: d,
                className: no.Dj,
                onClick: function () {
                    c(!0);
                },
                "aria-label": ei.intl.formatToPlainString(ei.t["2SfnMp"], { skinTone: nm(n) }),
                "aria-haspopup": !0,
                "aria-expanded": a,
                "aria-controls": nc,
                tabIndex: a ? -1 : 0,
                children: (0, l.jsx)("div", { className: no.g4, style: { backgroundImage: `url("${s}")` } }),
            }),
            a
                ? (0, l.jsx)("div", {
                      onKeyDown: function (e) {
                          e.key === na.dh.ESCAPE
                              ? (e.stopPropagation(), c(!1), null != d.current && d.current.focus())
                              : "Tab" === e.key && c(!1);
                      },
                      children: (0, l.jsx)(nE, {
                          id: nc,
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
var ng = n(462180),
    nh = n(602034),
    np = n(683438);
let nA = r.memo(function (e) {
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
        [m, f, E] = eC.Om.useStore((e) => [e.inspectedExpressionPosition, e.searchPlaceholder, e.hasInteracted], ng.x),
        I = r.useCallback(
            (e) => {
                (eC.Om.setActiveCategoryIndex("" === e ? 0 : -1),
                    eC.Om.setInspectedExpressionPosition(0, 0),
                    eC.Om.setSearchPlaceholder(null),
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
        (0, l.jsx)(np.I, {
            autoFocus: a,
            query: d,
            ref: u,
            placeholder: f ?? o,
            onClear: g,
            onKeyDown: function (e) {
                switch (e.key) {
                    case na.dh.ARROW_LEFT:
                    case na.dh.ARROW_RIGHT:
                    case na.dh.ARROW_UP:
                    case na.dh.ARROW_DOWN:
                        document.activeElement !== e.target && e.preventDefault();
                }
                i(e);
            },
            onFocus: s,
            onChange: I,
            inputProps: {
                role: "combobox",
                "aria-label": ei.intl.string(ei.t.tCauZX),
                "aria-haspopup": "grid",
                "aria-autocomplete": "list",
                "aria-controls": n,
                "aria-expanded": !0,
                ...(E ? { "aria-activedescendant": (0, nh.Aq)(n, m.columnIndex, m.rowIndex) } : void 0),
            },
        })
    );
});
var n_ = n(381575);
let nN = function (e) {
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
                (0, l.jsx)(nA, {
                    emojiListRef: r,
                    gridNavigatorId: ty.lq,
                    onKeyDown: a,
                    ref: d,
                    onFocus: c,
                    autoFocus: u,
                    defaultSearchPlaceholder: (0, eH.wT)(i, f),
                }),
                i === e$.EmojiIntention.REACTION ? (0, l.jsx)(t6, { checked: f, onClick: E, buttonRef: I }) : null,
                n ?? (0, l.jsx)(nI, { searchBarRef: d, className: n_.fx, selectedSurrogate: m }),
                i !== e$.EmojiIntention.NO_CUSTOM_EMOJI && h ? (0, l.jsx)(ni, { channel: t, closePopout: p }) : null,
            ],
        });
    return (0, l.jsx)("div", { className: o()(n_.wx, s), children: null != g ? g(A) : A });
};
var nC = n(371680),
    ny = n(413599),
    nx = n(486020),
    nT = n(977566);
function nO(e) {
    return null != e && "animated" in e;
}
let nj = r.memo(function (e) {
    let t,
        i,
        { className: s, emojiGrid: a, guildId: o, pickerIntention: c, channel: u } = e,
        d = eC.Om.useStore((e) => e.inspectedExpressionPosition),
        f = r.useMemo(() => {
            let { rowIndex: e, columnIndex: t } = d;
            return a[e]?.[t];
        }, [a, d]);
    switch (f?.type) {
        case tR.EMOJI:
            t = f?.emoji;
            break;
        case tR.EXPAND_OR_COLLAPSE_EMOJIS:
            t = { type: "EXPAND_OR_COLLAPSE_EMOJI", guildId: f?.guildId, allNamesString: f?.name };
            break;
        default:
            t = null;
    }
    let E = (0, m.bG)([eL.A], () => (null !== t && t.type === O.i.GUILD ? eL.A.getGuild(t.guildId) : null), [t]),
        I = (0, m.bG)([B.A], () => (null !== t && t.type === O.i.PACK ? B.A.getPack(t.packId) : null), [t]),
        g = (0, m.bG)([tm.A], () => tm.A.isFocused()),
        h = (0, m.bG)([tn.Ay], () => tn.Ay.useReducedMotion, []),
        p = eJ.Sf.useSetting(),
        A = (0, eH.O7)(o, nO(t) ? t : null),
        _ = (0, m.bG)([T.Ay], () => T.Ay.expandedSectionsByGuildIds),
        { newlyAddedEmojis: N } = (0, eY.A)(o, c),
        C = f?.type === tR.EMOJI ? f.subCategory : ty.tm.NONE;
    if (
        (r.useEffect(() => {
            let e = Date.now();
            return () => {
                Date.now() - e >= 250 &&
                    nO(t) &&
                    C !== ty.tm.NONE &&
                    (C === ty.tm.NEWLY_ADDED_EMOJI &&
                        null !== t &&
                        t.type === O.i.GUILD &&
                        (0, eN.mz)(t.guildId, N[0].id),
                    null != d.source &&
                        (0, eH.yB)({
                            emoji: t,
                            subCategory: C,
                            position: f.columnIndex + 1,
                            newlyAddedHighlight: C === ty.tm.NEWLY_ADDED_EMOJI && e_.isNewerThanLastSeen(o, t.id),
                        }));
            };
        }),
        null == t)
    )
        return null;
    let y = (function (e, t) {
            let { allowAnimatedEmoji: i, sectionsExpandedFromThreeRows: s, theme: r } = t;
            if (nO(e)) {
                let t = null != e.id ? nx.Ay.getEmojiURL({ id: e.id, animated: i && e.animated, size: 28 }) : e.url;
                return "" === t
                    ? (0, l.jsx)(W.E, {
                          variant: "body-md/normal",
                          className: nT.J_,
                          children: "surrogates" in e ? e.surrogates : null,
                      })
                    : (0, l.jsx)("img", { alt: (0, ez.N)(e) ?? "", src: t, className: nT.Zg });
            }
            if ("EXPAND_OR_COLLAPSE_EMOJI" !== e.type) return null;
            {
                let t = n(619508),
                    i = n(404828),
                    a = n(600003),
                    o = n(318121);
                return s.has(e.guildId)
                    ? (0, l.jsx)("img", { className: nT.Kk, src: (0, eT.M)(r) ? a : o, alt: "" })
                    : (0, l.jsx)("img", { className: nT.Kk, src: (0, eT.M)(r) ? t : i, alt: "" });
            }
        })(t, { allowAnimatedEmoji: p, sectionsExpandedFromThreeRows: _, theme: ny.A.theme }),
        x =
            null != E
                ? (0, l.jsx)(tT.A, { className: nT.__invalid_guildIcon, guild: E, shouldAnimate: !h && g })
                : null;
    i =
        "EXPAND_OR_COLLAPSE_EMOJI" === t.type
            ? _.has(t.guildId)
                ? ei.intl.string(ei.t["/K2RDH"])
                : ei.intl.string(ei.t.NZI2Zk)
            : (0, ez.N)(t);
    let j = (function (e) {
        let { inspectedEmoji: t, guild: n, pack: i } = e,
            s = nO(t);
        return null != n && s
            ? ei.intl.format(ei.t.KFW2aY, { guildName: n.name })
            : null != i && s
              ? ei.intl.format(en.default.VEfeux, {
                    packName: (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(P.t, {
                                size: "custom",
                                width: 10,
                                height: 10,
                                color: "currentColor",
                                className: nT.C5,
                                "aria-label": ei.intl.string(en.default.leUgZw),
                            }),
                            " ",
                            i.name,
                        ],
                    }),
                })
              : null;
    })({ inspectedEmoji: t, channel: u, guildId: o, intention: c, guild: E, pack: I });
    return (0, l.jsx)(nC.A, {
        className: s,
        graphicPrimary: y,
        graphicSecondary: x,
        titlePrimary: i,
        titleSecondary: j,
        isFavorite: A,
        emojiSubCategory: C,
    });
});
n(30146);
var nS = n(607399),
    nb = n(123292),
    nR = n(765178),
    nv = n(537652),
    nL = n(962125),
    nP = n(240864),
    nM = n(286509),
    nD = n(89366),
    nw = n(739053),
    nk = n(82498),
    nU = n(202639),
    nG = n(414872),
    nF = n(521440),
    nJ = n(304072),
    nK = n(189551),
    nV = n(594061),
    nB = n(771104),
    nH = n(147421),
    nW = n(723702),
    nX = n(140735),
    nz = n(194261),
    nZ = n(703413);
let nY = (e) => {
    let { src: t, alt: n, size: i, "aria-label": s, className: a } = e,
        c = r.useRef(null),
        u = r.useRef(!1),
        d = u.current ? nZ.S : nZ.Y;
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
                          ((u.current = !0), c.current.classList.remove(nZ.Y), c.current.classList.add(nZ.S));
                  });
              },
    });
};
var n$ = n(955388);
let nq = e9().memoize(
        (e) =>
            `${e * e$.he.NonDiversityPerRow}px ${e * Math.ceil(tj.Ay.numNonDiversitySprites / e$.he.NonDiversityPerRow)}px`,
    ),
    nQ = e9().memoize(
        (e) => `${e * e$.he.DiversityPerRow}px ${e * Math.ceil(tj.Ay.numDiversitySprites / e$.he.DiversityPerRow)}px`,
    ),
    n0 = r.memo(function (e) {
        let { emoji: t, size: i, surrogateCodePoint: s, allowAnimatedEmoji: a, "aria-label": c, isLocked: u } = e,
            d = (() => {
                if (!t.useSpriteSheet) {
                    let e = null == t.id ? t.url : nx.Ay.getEmojiURL({ id: t.id, animated: a && t.animated, size: 48 });
                    return null != e
                        ? (0, l.jsx)(nY, {
                              className: n$.N1,
                              "aria-label": c,
                              src: e,
                              size: i,
                              alt: (0, ez.N)(t) ?? "",
                          })
                        : null;
                }
                return (0, l.jsx)("div", {
                    className: o()(n$.xA, { [n$.N1]: u }),
                    style: (function (e, t, i) {
                        let s, l, r;
                        if (!e.useSpriteSheet) return;
                        let a = null != e.index ? e.index : 0;
                        e.hasDiversity
                            ? ((s = n(12303)(`./spritesheet-${t}-${i}.png.js`).default),
                              (l = nQ(i)),
                              (r = e$.he.DiversityPerRow))
                            : ((s = n(145519)(`./spritesheet-emoji-${i}.png.js`).default),
                              (l = nq(i)),
                              (r = e$.he.NonDiversityPerRow));
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
                    children: (0, l.jsx)(nX.A, { children: c }),
                });
            })();
        return (0, l.jsxs)(r.Fragment, {
            children: [
                d,
                u
                    ? (0, l.jsx)("div", {
                          className: n$.iD,
                          style: { width: i, height: i },
                          children: (0, l.jsx)(nz.LockIcon, { size: "xs", color: "currentColor", className: n$.fi }),
                      })
                    : null,
            ],
        });
    });
var n1 = n(537911);
function n2(e) {
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
        N = (0, m.bG)([eL.A], () => (n.type === O.i.GUILD ? eL.A.getGuild(n.guildId) : void 0), [n]);
    return (0, l.jsx)($.vN, {
        children: (0, l.jsx)("button", {
            ..._,
            className: o()(n1._X, { [n1.lG]: s, [n1.Lh]: r, [n1.Bx]: a, [h ?? ""]: a, [n1.TV]: u }),
            "data-type": et.g.EMOJI,
            "data-id": n.id,
            "data-name": n.name,
            "data-surrogates": "surrogates" in n ? n.surrogates : null,
            "data-animated": n.animated ? "true" : null,
            ref: A,
            children: (0, l.jsx)(n0, {
                "aria-label":
                    ((t = (0, ez.N)(n)),
                    (N?.name != null &&
                        (t = ei.intl.formatToPlainString(ei.t["nXv4/B"], { names: t, guildName: N.name })),
                    i)
                        ? ei.intl.formatToPlainString(ei.t["9FI9Z0"], { names: t })
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
function n3(e) {
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
            messageId: y,
            isBurstReaction: x,
            rowPosition: j,
            inNitroLockedSection: S,
        } = e,
        [b, v] = r.useState(""),
        L = (0, m.bG)([tn.Ay], () => tn.Ay.useReducedMotion),
        P = (0, m.bG)([T.Ay], () => T.Ay.getDisambiguatedEmojiContext(o), [o]),
        M = r.useRef(null),
        { emoji: D, size: w, isDisabled: k, columnIndex: U } = t;
    function G() {
        d.current || f.current || c(t);
    }
    let { ref: F, tabIndex: J, onFocus: K, ...V } = h(U, a) ?? {},
        B =
            b !== `${U}:${a}`
                ? (0, l.jsx)(n2, {
                      ref: F,
                      emoji: D,
                      isFavorite: P.isFavoriteEmojiWithoutFetchingLatest(D),
                      isLargeSize: A,
                      isMediumSize: p,
                      isInspected: s,
                      isDisabled: k,
                      showPulse: _ === i,
                      allowAnimatedEmoji: N,
                      onFocus: K ?? G,
                      onMouseMove: G,
                      onClick: (e) => {
                          if (
                              null != M.current &&
                              null != j &&
                              null != y &&
                              !e.shiftKey &&
                              null != D.name &&
                              x &&
                              !L &&
                              N
                          ) {
                              let e = null == D.id ? tj.Ay.convertNameToSurrogate(D.name) : D.name,
                                  t = M.current.getBoundingClientRect();
                              ((t.x = j.x + (U + 1) * w), v(`${U}:${a}`), (0, nH.h)(y, e, D.id, t));
                          }
                          !(function (e) {
                              if ((e.stopPropagation(), d.current || f.current)) return;
                              let n = e.altKey;
                              (n &&
                                  !T.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(D) &&
                                  C(i),
                                  (0, eG.sF)(eG._2.FAVORITE_EMOJI_TOOLTIP),
                                  u(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n }));
                          })(e);
                      },
                      onContextMenu: function (e) {
                          (0, q.L3)(e, async () => {
                              let { default: e } = await Promise.all([
                                  n.e(476662),
                                  n.e(912875),
                                  n.e(638221),
                                  n.e(73500),
                                  n.e(496715),
                                  n.e(904774),
                                  n.e(446132),
                              ]).then(n.bind(n, 233503));
                              return (t) => (0, l.jsx)(e, { ...t, showFavoriteOnly: D.type === O.i.PACK });
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
        { ...V, key: i, ref: M },
        E
            ? (0, l.jsx)(R.m, {
                  text: ei.intl.formatToPlainString(ei.t.glqNsf, { key: (0, nW.cX)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: B,
              })
            : B,
    );
}
let n5 = (e) => {
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
            handleScrollUpOnSectionCollapse: y,
        } = e,
        x = n(619508),
        T = n(404828),
        j = n(600003),
        S = n(318121),
        b = n(443336),
        R = n(258901),
        v = n(135974),
        L = n(8013),
        P = (0, eb.Ay)(),
        M = eC.Om.getState(),
        [D, w] = r.useState(M.inspectedExpressionPosition),
        [k, U] = (0, nJ.A)(null, 300),
        G = r.useRef(null);
    (r.useEffect(
        () =>
            eC.Om.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => w(e),
            ),
        [],
    ),
        r.useEffect(() => {
            nV.bW.loadIfNecessary();
        }, []));
    let F = i === ty.as.LARGE,
        J = i === ty.as.MEDIUM;
    function K(e) {
        let t = `${e.rowIndex}c${e.columnIndex}`;
        switch (e.type) {
            case tR.EXPAND_OR_COLLAPSE_EMOJIS: {
                let { visibleRowIndex: n, columnIndex: i } = e,
                    c = D.rowIndex === n && D.columnIndex === i,
                    d = e.sectionCollapsedToThreeRows
                        ? c
                            ? (0, eT.M)(P)
                                ? R
                                : L
                            : (0, eT.M)(P)
                              ? x
                              : T
                        : c
                          ? (0, eT.M)(P)
                              ? b
                              : v
                          : (0, eT.M)(P)
                            ? j
                            : S,
                    I = ei.intl.string(e.sectionCollapsedToThreeRows ? ei.t.NZI2Zk : ei.t["/K2RDH"]);
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
                        y = D.rowIndex === g && D.columnIndex === h;
                    function x() {
                        m.current || f.current || a(e);
                    }
                    return (0, r.createElement)(
                        "li",
                        { ...C, key: t },
                        (0, l.jsx)($.vN, {
                            children: (0, l.jsx)("button", {
                                "aria-label": d,
                                ref: p,
                                className: o()(n1._X, {
                                    [n1.lG]: F,
                                    [n1.Lh]: J,
                                    [n1.Bx]: y && !I,
                                    [A ?? ""]: y,
                                    [n1.TV]: k === t,
                                }),
                                onFocus: N ?? x,
                                onMouseOver: x,
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
                        e.type !== tR.EXPAND_OR_COLLAPSE_EMOJIS ||
                            (t.stopPropagation(),
                            m.current ||
                                f.current ||
                                (s(e, { isFinalSelection: !0, toggleFavorite: !1 }),
                                (0, nK.G)(e.guildId),
                                e.sectionCollapsedToThreeRows || y(),
                                eV.default.track(eD.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                    collapsed: e.sectionCollapsedToThreeRows,
                                    guild_id: e.guildId,
                                })));
                    },
                    icon: (0, l.jsx)("img", { className: n1.Kk, src: d, alt: "" }),
                    ariaLabel: I,
                    shouldShowRoundHighlight: !0,
                });
            }
            case tR.EMOJI: {
                let { columnIndex: n, visibleRowIndex: i } = e,
                    r = D.rowIndex === i && D.columnIndex === n;
                return (0, l.jsx)(
                    n3,
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
    function V(e) {
        return (0, l.jsx)("ul", {
            ...d(E),
            className: o()(n1.ND, { [n1.HO]: F, [n1.X$]: J }),
            ref: G,
            children: e.map(K),
        });
    }
    if (p !== ty.s.TOP_GUILD_EMOJI) return V(t);
    let B = t.filter(
            (e) =>
                e.subCategory === ty.tm.TOP_GUILD_EMOJI ||
                (e.subCategory === ty.tm.NEWLY_ADDED_EMOJI &&
                    e.emoji.type === O.i.GUILD &&
                    !e_.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
        ),
        H = t.filter(
            (e) =>
                e.subCategory === ty.tm.NEWLY_ADDED_EMOJI &&
                e.emoji.type === O.i.GUILD &&
                e_.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id),
        );
    return 0 === H.length
        ? V(t)
        : (0, l.jsxs)("div", {
              className: n1.Ng,
              children: [
                  (0, l.jsx)("div", { className: o()(n1.V6, { [n1.$3]: 0 === B.length }), children: V(B) }),
                  (0, l.jsxs)("div", {
                      className: n1.bc,
                      children: [
                          (0, l.jsx)("div", {
                              className: o()(n1.eE, { [n1.eM]: 1 === H.length, [n1.Wk]: B.length > 0 }),
                              children: V(H),
                          }),
                          (0, l.jsxs)("div", {
                              className: o()(n1.lD, { [n1.EI]: F, [n1.qU]: J, [n1.Wk]: B.length > 0 }),
                              children: [
                                  (0, l.jsx)(nB.A, { foreground: n1.rI }),
                                  (0, l.jsx)(W.E, {
                                      variant: "body-xs/semibold",
                                      color: "text-overlay-light",
                                      children: ei.intl.string(ei.t.y2b7CA),
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
};
var n4 = n(618723);
let n8 = (0, eB.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    n6 = (0, eB.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    n7 = (0, eB.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    n9 = (0, eB.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    ie = (0, eB.xI)(E.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    it = (0, eB.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    ii = (0, eB.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    is = r.memo(function (e) {
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
                isUsingKeyboardNavigation: x,
                channelGuildId: T,
                messageId: O,
                isBurstReaction: j,
                listHeaderClassName: S,
            } = e,
            b = r.useRef(!1),
            R = eC.Om.useStore((e) => e.activeCategoryIndex),
            v = (0, U.RQ)((e) => e.searchQuery),
            L = eJ.Sf.useSetting(),
            M = (0, m.bG)([J.default], () => J.default.getCurrentUser()),
            D = (0, K.ki)(M),
            { location: w } = (0, p.p)(),
            { analyticsLocations: k } = (0, y.Ay)(),
            [G, F] = r.useState(0),
            [V, B] = r.useState(!1),
            {
                listPadding: H,
                renderRow: X,
                renderSection: z,
                renderSectionHeader: Z,
                renderSectionFooter: Y,
                sectionMarginBottom: $,
                sectionHeaderHeight: q,
                sectionFooterHeight: Q,
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
                        listHeaderClassName: y,
                        activeSectionIndex: x,
                        emojiListRef: T,
                    } = e,
                    O = (0, p.p)(),
                    j = r.useRef(0),
                    S = r.useMemo(() => ("" !== n ? ns.A.convert.toCodePoint(n) : ""), [n]),
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
                                    eV.default.track(eD.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                        location: O.location,
                                        tab: eq.kx.EMOJI,
                                        collapsed: !s,
                                        guild_id: n.id,
                                    }),
                                f(i));
                        },
                        [O, t, f],
                    ),
                    L = r.useCallback((e) => {
                        let { columnIndex: t, visibleRowIndex: n } = e,
                            i = e.type === tR.EMOJI ? (0, ez.N)(e.emoji) : e.name;
                        (0 !== j.current && window.cancelAnimationFrame(j.current),
                            (j.current = window.requestAnimationFrame(() => {
                                (eC.Om.setInspectedExpressionPosition(t, n, et.t.MOUSE_EVENT),
                                    eC.Om.setSearchPlaceholder(i),
                                    (j.current = 0));
                            })));
                    }, []),
                    M = (0, m.bG)([eG.HP], () => eG.HP.hasHotspot(eG._2.FAVORITE_EMOJI_TOOLTIP), []),
                    D = r.useMemo(
                        () =>
                            e9().memoize((e, t) => {
                                let n = i[e],
                                    r = d[t.sectionIndex];
                                return (0, l.jsx)(
                                    n5,
                                    {
                                        emojiDescriptors: n,
                                        emojiSize: s,
                                        surrogateCodePoint: S,
                                        onInspect: L,
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
                                        selectedItemClassName: n4.__invalid_selectedItem,
                                        messageId: N,
                                        isBurstReaction: C,
                                        inNitroLockedSection: r.isNitroLocked,
                                        handleScrollUpOnSectionCollapse: function () {
                                            T.current?.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                                        },
                                    },
                                    e,
                                );
                            }),
                        [i, d, s, S, L, a, E, I, g, h, A, M, _, N, C, T],
                    );
                r.useEffect(() => () => D.cache?.clear?.(), [D]);
                let w = r.useMemo(
                        () =>
                            e9().memoize((e) => {
                                let n = d[e];
                                if (null == n) return;
                                let { guild: i, pack: s, categoryId: r, type: a, sectionId: u } = n;
                                if (a === ty.s.SEARCH_RESULTS) return;
                                let m = (function (e) {
                                        let { type: t, guild: n, categoryId: i } = e;
                                        return t === ty.s.PACK
                                            ? (0, l.jsx)(P.t, {
                                                  size: "custom",
                                                  color: "currentColor",
                                                  height: 16,
                                                  width: 16,
                                              })
                                            : t === ty.s.GUILD
                                              ? null == n
                                                  ? null
                                                  : (0, l.jsx)(tT.A, { guild: n, height: 16, width: 16 })
                                              : null == i
                                                ? null
                                                : (0, l.jsx)(tx, {
                                                      categoryId: i,
                                                      height: 16,
                                                      width: 16,
                                                      size: "custom",
                                                  });
                                    })(n),
                                    f = s?.name ?? i?.name;
                                null != r && (f = (0, eH.Nu)(r, i?.name));
                                let E = x === e,
                                    I = n.isNitroLocked,
                                    g = I && !E,
                                    h = I && E,
                                    p =
                                        a === ty.s.PACK
                                            ? (0, l.jsx)("div", {
                                                  className: n4.uE,
                                                  children: (0, l.jsx)(nb.Q, {
                                                      text: ei.intl.string(en.default["2zxYCx"]),
                                                      textVariant: "body-sm/medium",
                                                      variant: "secondary",
                                                      "aria-label": `${ei.intl.string(en.default["2zxYCx"])} ${s.name}`,
                                                      onKeyDown: (e) => {
                                                          e.key !== na.dh.ESCAPE && e.stopPropagation();
                                                      },
                                                      onClick: () => c(s.id),
                                                  }),
                                              })
                                            : void 0;
                                return (0, l.jsx)(
                                    nM.A,
                                    {
                                        className: o()(n4.wx, y, { [n4.RA]: g, [n4.sp]: h }),
                                        icon: m,
                                        isCollapsed: t.has(u),
                                        onClick: () => v(u, i),
                                        trailing: p,
                                        children: f,
                                    },
                                    u,
                                );
                            }),
                        [d, t, v, y, x, c],
                    ),
                    k = (0, tS.k0)(),
                    U = r.useCallback(
                        (e, n) => {
                            let i = d[e],
                                s = R(e),
                                r = b(e),
                                a = i.type === ty.s.PACK && 0 === i.count;
                            return (0, l.jsx)(
                                "div",
                                {
                                    role: "rowgroup",
                                    className: o()(n4.Wy, {
                                        [n4.YD]: e === d.length - 1,
                                        [n4.jl]: t.has(i.sectionId) || a,
                                        [n4.cW]: i.isNitroLocked,
                                        [n4.T5]: s || r,
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
                                    ? (0, l.jsx)(nG.a, {})
                                    : (0, l.jsx)(nG.A, {})
                                : b(e)
                                  ? (0, l.jsx)("div", { className: n4.pQ })
                                  : null,
                        [R, b, k],
                    ),
                    F = r.useCallback((e) => (R(e) ? 41 : 33 * !!b(e)), [R, b]),
                    J = r.useCallback(
                        (e) =>
                            e === d.length - 1 ||
                            t.has(d[e]?.sectionId) ||
                            (d[e]?.type === ty.s.PACK && d[e]?.count === 0) ||
                            R(e) ||
                            b(e)
                                ? 0
                                : it,
                        [t, d, R, b],
                    );
                return {
                    listPadding: r.useMemo(() => ["" !== u ? n9 : n8, n6, n7, 0], [u]),
                    renderRow: D,
                    renderSection: U,
                    renderSectionHeader: w,
                    renderSectionFooter: G,
                    sectionMarginBottom: J,
                    sectionHeaderHeight: r.useCallback((e) => (d[e].type === ty.s.SEARCH_RESULTS ? 0 : ie), [d]),
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
                isUsingKeyboardNavigation: x,
                allowAnimatedEmoji: L,
                channelGuildId: T,
                messageId: O,
                isBurstReaction: j,
                listHeaderClassName: S,
                activeSectionIndex: G,
                emojiListRef: a,
            }),
            ee = r.useCallback(
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
            ee(a.current?.getScrollerNode()?.scrollTop ?? 0);
        }, [a, ee, E, I, v]);
        let es = (0, ey.Fk)({
            activeCategoryIndex: R,
            isScrolling: b,
            listRef: a,
            onActiveCategoryIndexChange: function (e) {
                "" === v && eC.Om.setActiveCategoryIndex(e);
            },
            scrollOffset: 0,
            searchQuery: v,
            disableForSearch: !1,
        });
        (0, ey.FV)({ searchQuery: v, activeCategoryIndex: R, listRef: a });
        let el = r.useCallback(
                (e) => {
                    (es(e),
                        ee(e),
                        il({ emojiListRef: a, sectionDescriptors: E, scrollTop: e, searchQuery: v, setShowUpsell: B }));
                },
                [es, ee, a, E, v, B],
            ),
            ea = E.length > 0;
        (r.useEffect(() => {
            V &&
                (eV.default.track(eD.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: er.e.EMOJI_PICKER_FLOATING_UPSELL,
                    location: w,
                    location_stack: k,
                }),
                (0, nw.sq)(eD.U7l.PREMIUM_UPSELL_VIEWED, k, () => (0, nk.uq)(er.e.EMOJI_PICKER_FLOATING_UPSELL)));
        }, [w, k, V]),
            r.useEffect(() => {
                "" !== v && B(!1);
            }, [v]));
        let eo = r.useRef(null);
        return (
            r.useEffect(
                () => (
                    clearTimeout(eo.current),
                    (eo.current = setTimeout(() => {
                        (ea
                            ? nR.O.announce(ei.intl.string(ei.t.uZ4F2O), "polite")
                            : nR.O.announce(ei.intl.string(ei.t.IxxiKF), "assertive"),
                            (eo.current = null));
                    }, 200)),
                    () => {
                        clearTimeout(eo.current);
                    }
                ),
                [ea, v],
            ),
            (0, l.jsxs)("div", {
                className: n4.AD,
                children: [
                    ea
                        ? (0, l.jsx)(nL.A, {
                              role: "none presentation",
                              className: n4.p_,
                              listPadding: H,
                              onScroll: el,
                              renderRow: X,
                              renderSection: z,
                              renderSectionHeader: Z,
                              renderSectionFooter: Y,
                              rowCount: C,
                              rowCountBySection: I,
                              rowHeight: c + 2 * ii,
                              sectionHeaderHeight: q,
                              sectionMarginBottom: $,
                              sectionFooterHeight: Q,
                              stickyHeaders: !0,
                              ref: a,
                          })
                        : (0, l.jsx)(nv.A, {
                              message: (0, l.jsx)(W.E, {
                                  variant: "body-md/normal",
                                  color: "text-muted",
                                  children: ei.intl.string(ei.t.IxxiKF),
                              }),
                              className: n4.BZ,
                          }),
                    D || nS.Fr
                        ? null
                        : (0, l.jsx)(nU.d, {
                              showUpsell: V,
                              text:
                                  ((t = (0, e5.Dd)(er.PremiumTypes.TIER_2)),
                                  ei.intl.format(ei.t.gMVjeS, {
                                      nitroTierName: t,
                                      onClick: () => {
                                          f({ type: tL.PREMIUM, emojiDescriptor: void 0 });
                                      },
                                  })),
                              button: ((n = (0, nD.qD)()), (0, e5.LE)(n, er.pe.TIER_2) ?? ei.intl.string(ei.t.BmJkbd)),
                              buttonAnalyticsObject: { section: eD.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                              leadingAction: (0, l.jsx)(nF.l, {
                                  size: "sm",
                                  className: n4.ij,
                                  location: N.A.PREMIUM_WISHLIST_EMOJI_UPSELL,
                              }),
                          }),
                ],
            })
        );
    }),
    il = e9().throttle(
        function (e) {
            let { emojiListRef: t, sectionDescriptors: n, scrollTop: i, searchQuery: s, setShowUpsell: l } = e;
            l(
                (0, nP.s)({ listRef: t, searchQuery: s, nitroLockedSectionStates: n, scrollTop: i })
                    .areOnlyNitroLockedSectionsVisible,
            );
        },
        300,
        { leading: !1, trailing: !0 },
    );
var ir = n(506774),
    ia = n(28863),
    io = n(781300),
    ic = n(404374),
    iu = n(780964),
    id = n(766075),
    im = n(166403),
    iE = n(506150);
let iI = "premiumRetentionEmojiPickerNotice",
    ig = ir.w.get(iI),
    ih = function (e) {
        let { closePopout: t, channel: n } = e,
            [i, s] = r.useState(!1),
            { subscription: a, hasFetchedSubscriptions: o } = (0, m.cf)([im.A], () => ({
                subscription: im.A.getPremiumSubscription(),
                hasFetchedSubscriptions: im.A.hasFetchedSubscriptions(),
            }));
        if (
            (r.useEffect(() => {
                o || (0, io.hP)();
            }, [o]),
            null == a || !(0, e5.PK)(a.status) || i)
        )
            return null;
        let c = a.status === eD.Dmq.PAST_DUE ? (0, e5.ji)(a).expiresDate : em()(a.currentPeriodStart).add(30),
            u = `${a.id}:${c.toISOString()}`;
        if (ig === u) return null;
        let d =
            e5.Ay.getPremiumType(a.planId) === er.PremiumTypes.TIER_0
                ? ic.k0.PREMIUM_TIER_0
                : e5.Ay.getPremiumType(a.planId) === er.PremiumTypes.TIER_1
                  ? ic.k0.PREMIUM_TIER_1
                  : ic.k0.PREMIUM_TIER_2;
        return (0, l.jsxs)(W.E, {
            variant: "body-xs/medium",
            color: "text-default",
            className: iE.g$,
            children: [
                (0, l.jsx)(P.t, { size: "md", className: iE.lu, color: d }),
                (0, l.jsxs)("div", {
                    className: iE.Xn,
                    children: [
                        (0, l.jsx)(W.E, {
                            variant: "body-xs/normal",
                            children: ei.intl.format(ei.t.bTMjiO, {
                                planName: e5.Ay.getTierDisplayNameByPlanId(a.planId),
                                endsAt: c.toDate(),
                            }),
                        }),
                        (0, l.jsx)("div", {
                            children: (0, l.jsx)(ia.Anchor, {
                                onClick: () => {
                                    ((0, eH.xf)(n), t(), (0, id.openUserSettings)(iu.X.NITRO_PANEL));
                                },
                                children: ei.intl.string(ei.t.W3aavh),
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(eO.D, {
                    onClick: () => {
                        (ir.w.set(iI, u), (ig = u), s(!0));
                    },
                    children: (0, l.jsx)(ej.P, { size: "md", color: "currentColor", className: iE.YF }),
                }),
            ],
        });
    };
var ip = n(148361);
let iA = (0, eB.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    i_ = (0, eB.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT);
function iN(e) {
    return e.stopPropagation();
}
function iC(e, t) {
    eC.Om.setInspectedExpressionPosition(e, t, et.t.GRID_NAVIGATOR_EVENT);
}
let iy = u()(eH.bo, 200),
    ix = u()(eH.Wi, 200),
    iT = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    iO = r.memo(function (e) {
        let t,
            n,
            i,
            s,
            a,
            {
                pickerIntention: c,
                channel: u,
                guildId: E,
                closePopout: b,
                emojiSize: R = ty.as.MEDIUM,
                hasTabWrapper: v = !1,
                onSelectEmoji: L,
                containerWidth: P,
                onNavigateAway: M,
                persistSearch: D,
                className: w,
                headerClassName: k,
                analyticsOverride: G = iT,
                searchProps: F = {},
                wrapper: V,
                shouldHidePickerActions: H = !1,
                messageId: W,
                renderHeader: X,
                listHeaderClassName: z,
                categoryListClassName: Z,
                showOnlyUnicode: Y = !1,
                showAddEmojiButton: $,
                ref: q,
                isViewingEmojiPacks: Q,
                onViewEmojiPacksChange: ee,
            } = e,
            { onFocus: en, onKeyDown: es, autoFocus: el = !0, accessory: ea } = F,
            ed = (0, m.bG)([eK.A], () => (null != E ? eK.A.getDefaultChannel(E) : null), [E]),
            [em, ef] = r.useState(null),
            eE = r.useRef(""),
            eI = (0, U.RQ)((e) => e.searchQuery),
            eg = r.useRef(null),
            eh = r.useRef(null),
            ep = r.useRef(null),
            eA = (0, j.H)("emoji_picker") && !Y && (0, e6.z)(c);
        r.useEffect(() => {
            eA && (0, S.Fp)();
        }, [eA]);
        let [ex, eT] = r.useState(!1),
            eO = eA && (Q ?? ex),
            ej = ee ?? eT,
            eS = r.useCallback((e) => {
                (ep.current?.focus(), (0, S.M5)(e));
            }, []),
            eb =
                ((t = (0, m.bG)([B.A], () => (eA ? B.A.getPacks() : eu), [eA])),
                (n = (0, m.bG)(
                    [ec.A],
                    () => (eA ? ec.A.frecencyWithoutFetchingLatest.pinnedEmojiPacks?.packIds : void 0),
                    [eA],
                )),
                r.useMemo(
                    () =>
                        eA && null != n && 0 !== n.length
                            ? n.map((e) => t.find((t) => t.id === e)).filter((e) => null != e)
                            : eu,
                    [eA, t, n],
                ));
        null == u && null != ed && (u = ed);
        let eR = u?.getGuildId() ?? E ?? null,
            [ev, eP] = r.useState(!1),
            eM = r.useRef(null),
            ew = J.default.getCurrentUser(),
            ek = (0, K.ki)(ew),
            eB = ev && ek;
        r.useImperativeHandle(q, () => ({ onPickerOpen: td }));
        let { location: eW } = (0, p.p)(),
            { page: eX, section: eq, object: e0, openPopoutType: e1, popoutLocation: e2 } = G,
            e3 = r.useMemo(() => ({ ...eW, section: eq ?? eD.JJy.EMOJI_PICKER_POPOUT }), [eW, eq]),
            { analyticsLocations: e5 } = (0, y.Ay)(N.A.EMOJI_PICKER),
            { diversitySurrogate: e4 } = (0, m.cf)([T.Ay], () => ({ diversitySurrogate: T.Ay.diversitySurrogate })),
            e7 = (0, eH.sL)(eI, u, c, Y),
            te = null == e7 ? 0 : e7.locked.length + e7.unlocked.length,
            tt = eJ.iM.useSetting(),
            tn = r.useMemo(() => new Set(tt), [tt]),
            ti = r.useCallback((e) => {
                eJ.iM.updateSetting(Array.from(e));
            }, []),
            ts = (0, ey.oV)({
                gridWrapperRef: eg,
                containerWidth: P,
                showingEmptyState: eO,
                listPaddingLeft: i_,
                listScrollbarWidth: 8,
            }),
            {
                rowCountBySection: tl,
                sectionDescriptors: ta,
                emojiGrid: to,
                columnCounts: tc,
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
                    f = (0, m.bG)([T.Ay], () => T.Ay.categories),
                    E = r.useMemo(() => (d ? tj.Ay.getCategories() : f), [f, d]),
                    I = (0, m.bG)([eL.A], () => eL.A.getGuild(t?.getGuildId()), [t]),
                    g = t?.getGuildId() ?? n,
                    h = (0, m.bG)([T.Ay], () => T.Ay.getDisambiguatedEmojiContext(g), [g]),
                    p = (0, eH.XI)(g),
                    A = (0, eH.Fj)(g),
                    _ = (0, eH.QZ)(g),
                    { topEmojis: N, newlyAddedEmojis: C } = (0, eY.A)(g, s),
                    y = (0, m.yK)([tb.Ay], () => tb.Ay.getFlattenedGuildIds(), []),
                    x = (0, m.bG)([T.Ay], () => T.Ay.expandedSectionsByGuildIds),
                    O = (0, m.bG)([J.default], () => J.default.getCurrentUser()),
                    j = (0, K.ki)(O),
                    S = (0, K.ki)(O, er.PremiumTypes.TIER_2),
                    b = (0, tS.k0)(),
                    R = h.getGroupedCustomEmoji();
                return r.useMemo(() => {
                    let e = [],
                        n = [],
                        r = [],
                        d = [],
                        m = 0,
                        f = 0;
                    if (null != h && null != a) {
                        let O = Math.floor(a / (c + 2 * o)),
                            v = 3 * O;
                        function g(l, a) {
                            let o = new Map(),
                                u = i.has(a.sectionId),
                                [E, I] = e9().partition(l, (e) => {
                                    let n = ez.Ay.isEmojiDisabled({ emoji: e, channel: t, intention: s });
                                    return (o.set(e, n), !n);
                                }),
                                g = E.concat(I),
                                h = a.guild,
                                p = g.length > v && null != h && a.isNitroLocked,
                                A = p && !x.has(h.id);
                            A && g.splice(v - 1);
                            let _ = Math.ceil((p ? g.length + 1 : g.length) / O),
                                y = [];
                            for (let e = 0; e < _; e++) {
                                let t = e * O,
                                    n = t + O,
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
                                                a.sectionId === ty.s.TOP_GUILD_EMOJI
                                                    ? (0, eH.DA)(N, C, e.id ?? e.uniqueName ?? e.name)
                                                    : ty.tm.NONE,
                                        }));
                                if ((y.push(i), !u)) {
                                    if (p && e === _ - 1) {
                                        let t = y[e];
                                        t.push({
                                            type: 1,
                                            guildId: h.id,
                                            name: ei.intl.string(ei.t.NZI2Zk),
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
                            let T = { ...a, count: l.length };
                            (n.push(T), e.push(u ? 0 : _));
                        }
                        if (null != l)
                            (0 !== l.unlocked.length &&
                                g(l.unlocked, {
                                    type: ty.s.SEARCH_RESULTS,
                                    sectionId: ty.s.SEARCH_RESULTS,
                                    count: l.unlocked.length,
                                    isNitroLocked: !1,
                                }),
                                0 !== l.locked.length &&
                                    g(l.locked, {
                                        type: ty.s.PREMIUM_UPSELL,
                                        categoryId: ty.R2.PREMIUM_UPSELL,
                                        sectionId: ty.s.PREMIUM_UPSELL,
                                        count: l.locked.length,
                                        isNitroLocked: !j,
                                    }));
                        else {
                            let e = E.includes(ty.R2.CUSTOM) ? ty.R2.CUSTOM : tj.Ay.getCategories()[0];
                            for (let n of E) {
                                if (n === e)
                                    for (let e of u) {
                                        let t = e9().compact(
                                            e.emojis.map((e) => {
                                                let { id: t } = e;
                                                return h.getById(t);
                                            }),
                                        );
                                        g(t, {
                                            type: ty.s.PACK,
                                            pack: e,
                                            sectionId: `pack:${e.id}`,
                                            count: t.length,
                                            isNitroLocked: !S,
                                        });
                                    }
                                if (n === ty.R2.CUSTOM) {
                                    function T(e) {
                                        let i = R.get(e);
                                        if (null == i) return;
                                        let l = i.filter(
                                            (n) =>
                                                !tv.includes(
                                                    ez.Ay.getEmojiUnavailableReason({
                                                        emoji: n,
                                                        channel: t ?? eK.A.getDefaultChannel(e),
                                                        intention: s,
                                                    }),
                                                ),
                                        );
                                        if (0 === l.length) return;
                                        let r = eL.A.getGuild(e),
                                            a =
                                                b ||
                                                (!j &&
                                                    ez.Ay.isEmojiCategoryNitroLocked({
                                                        categoryEmojis: l,
                                                        channel: t,
                                                        intention: s,
                                                    }));
                                        g(l, {
                                            categoryId: n,
                                            guild: r,
                                            type: ty.s.GUILD,
                                            sectionId: null != r ? r.id : (0, tO.A)(),
                                            count: l.length,
                                            isNitroLocked: a,
                                        });
                                    }
                                    if ((null != I && T(I.id), (0, e$.Re)(s)))
                                        for (let e of y) (null == I || I.id !== e) && T(e);
                                } else if (n === ty.R2.TOP_GUILD_EMOJI) {
                                    if (null != I) {
                                        let { allEmojis: e } = (0, eZ.W)({ topEmojis: N, newlyAddedEmojis: C });
                                        e.length > 0 &&
                                            g(e, {
                                                categoryId: n,
                                                guild: eL.A.getGuild(I.id),
                                                type: ty.s.TOP_GUILD_EMOJI,
                                                sectionId: ty.s.TOP_GUILD_EMOJI,
                                                count: e.length,
                                                isNitroLocked: !1,
                                            });
                                    }
                                } else if (n === ty.R2.RECENT) {
                                    let e = (s === e$.EmojiIntention.REACTION ? _ : A).filter(
                                        (e) => !ez.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }),
                                    );
                                    g(e, {
                                        categoryId: n,
                                        type: ty.s.RECENT,
                                        sectionId: ty.s.RECENT,
                                        count: e.length,
                                        isNitroLocked: !1,
                                    });
                                } else if (n === ty.R2.FAVORITES) {
                                    let e = p.filter(
                                        (e) => !ez.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }),
                                    );
                                    0 !== e.length &&
                                        g(e, {
                                            categoryId: n,
                                            type: ty.s.FAVORITES,
                                            sectionId: ty.s.FAVORITES,
                                            count: e.length,
                                            isNitroLocked: !1,
                                        });
                                } else {
                                    let e = tj.Ay.getByCategory(n);
                                    null != e &&
                                        g(e, {
                                            categoryId: n,
                                            type: ty.s.UNICODE,
                                            sectionId: n,
                                            count: e.length,
                                            isNitroLocked: !1,
                                        });
                                }
                            }
                        }
                    }
                    return { columnCounts: d, emojiGrid: r, rowCountBySection: e, sectionDescriptors: n };
                }, [h, a, c, o, l, i, R, x, t, s, N, C, j, S, E, I, y, u, _, A, p, b]);
            })({
                gridWidth: ts,
                fallbackGuildId: eR,
                channel: u,
                pickerIntention: c,
                emojiSearchResults: e7,
                collapsedSections: tn,
                emojiPaddingHorizontal: iA,
                emojiSpriteSize: R,
                pinnedPacks: eb,
                showOnlyUnicode: Y,
            }),
            { newlyAddedEmojis: tu } = (0, eY.A)(eR, c);
        ((i = r.useRef({ intention: c, isBurstReaction: ev, analyticsObject: e0 })),
            r.useEffect(() => {
                i.current.intention === e$.EmojiIntention.REACTION && eQ(i.current);
            }, []));
        let td = r.useCallback(() => {
                let e = tu.length > 0 ? tu[0].id : null;
                ((0, eN.uV)(eR, e), eQ({ intention: c, isBurstReaction: ev, analyticsObject: e0 }));
            }, [tu, eR, c, ev, e0]),
            tm = r.useCallback(() => {
                (b(),
                    M?.(),
                    (0, eF.A)({
                        subscriptionTier: er.pe.TIER_2,
                        analyticsLocations: [...e5, N.A.EMOJI_PACKS],
                        analyticsObject: { ...e3, object: eD.ZSU.EMOJI },
                    }));
            }, [e3, e5, b, M]),
            tf = (function (e) {
                let {
                        pickerIntention: t,
                        selectedChannel: n,
                        fallbackGuildId: i,
                        onSelectEmoji: s,
                        setUpsellConfigs: l,
                        emojiSelectAnalytics: a,
                        trackEmojiFavorited: o,
                    } = e,
                    c = (0, m.bG)([T.Ay], () => T.Ay.getDisambiguatedEmojiContext(n?.getGuildId() ?? i), [i, n]);
                return r.useCallback(
                    (e, i) => {
                        if (0 === e.type) {
                            let { emoji: r } = e;
                            if (null == r) return;
                            let u = ez.Ay.getEmojiUnavailableReason({ emoji: r, channel: n, intention: t });
                            if (i.toggleFavorite)
                                return void (c.isFavoriteEmojiWithoutFetchingLatest(r) || null != u
                                    ? (0, g.Sw)(r)
                                    : (o?.(e), (0, g.V4)(r)));
                            if (u !== e$.Am.GUILD_SUBSCRIPTION_UNAVAILABLE) {
                                if (u === e$.Am.PREMIUM_LOCKED) {
                                    (a?.(e, u), l({ type: 0, emojiDescriptor: e }));
                                    return;
                                }
                                if (u === e$.Am.ROLE_SUBSCRIPTION_LOCKED && r.type === O.i.GUILD) {
                                    (a?.(e, u), l({ type: 1, guildId: r.guildId, emojiId: r.id }));
                                    return;
                                }
                                u !== e$.Am.ROLE_SUBSCRIPTION_UNAVAILABLE &&
                                    (a?.(e), s({ emoji: r, willClose: i.isFinalSelection, isBurst: i.isBurst }));
                            }
                        }
                    },
                    [n, t, s, l, c, a, o],
                );
            })({
                pickerIntention: c,
                selectedChannel: u,
                fallbackGuildId: eR,
                closePopout: b,
                onSelectEmoji: L,
                setUpsellConfigs: (e) => {
                    e?.type === tL.PREMIUM && e.emojiDescriptor?.emoji?.type === O.i.PACK ? tm() : ef(e);
                },
                emojiSelectAnalytics: (e, t) => {
                    "" !== eI
                        ? (0, eH.Wf)({
                              emoji: e.emoji,
                              location: { ...e3, object: eD.ZSU.EMOJI },
                              searchQuery: eI,
                              isLocked: null != t,
                              intention: c,
                              messageId: W,
                          })
                        : (0, eH._7)({
                              emoji: e.emoji,
                              location: { ...e3, object: e0 ?? eD.ZSU.EMOJI, ...(null != eX && { page: eX }) },
                              pickerIntention: c,
                              category: e.category,
                              subCategory: e.subCategory,
                              position: e.columnIndex + 1,
                              newlyAddedHighlight:
                                  e.subCategory === ty.tm.NEWLY_ADDED_EMOJI && e_.isNewerThanLastSeen(eR, e.emoji.id),
                              isBurstReaction: ev,
                              messageId: W,
                              lockedReason: t,
                              visibleRowIndex: e.visibleRowIndex,
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, eH.C5)({ emoji: e.emoji, location: { ...e3, object: eD.ZSU.EMOJI } });
                },
            }),
            tE = r.useCallback(() => {
                (b(), M?.());
            }, [b, M]),
            {
                getItemProps: tI,
                getRowProps: tg,
                gridContainerProps: th,
                handleGridContainerKeyDown: tp,
                isUsingKeyboardNavigation: tA,
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
                    f = (0, m.bG)([T.Ay], () => T.Ay.getDisambiguatedEmojiContext(c), [c]),
                    E = r.useCallback(
                        (e, i) => {
                            if (e.type === tR.EMOJI) {
                                if (e.emoji.type === O.i.PACK)
                                    return void l(e, {
                                        isFinalSelection: !i.shiftKey,
                                        toggleFavorite: i.altKey,
                                        isBurst: u,
                                    });
                                if (null != e.emoji && i.altKey)
                                    return void (f.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                        ? (0, g.Sw)(e.emoji)
                                        : ((0, eH.C5)({ emoji: e.emoji, location: { ...t, object: eD.ZSU.EMOJI } }),
                                          (0, g.V4)(e.emoji)));
                                let r = {
                                    page: null != c ? eD.liQ.GUILD_CHANNEL : eD.liQ.DM_CHANNEL,
                                    section: eD.JJy.EMOJI_PICKER_POPOUT,
                                    object: eD.ZSU.EMOJI,
                                };
                                (u &&
                                    (r = {
                                        page: null != c ? eD.liQ.GUILD_CHANNEL : eD.liQ.DM_CHANNEL,
                                        section: eD.JJy.EMOJI_PICKER_POPOUT,
                                        object: eD.ZSU.EMOJI,
                                    }),
                                    (0, eH._7)({
                                        emoji: e.emoji,
                                        location: r,
                                        pickerIntention: n,
                                        category: e.category,
                                        subCategory: e.subCategory,
                                        newlyAddedHighlight:
                                            e.subCategory === ty.tm.NEWLY_ADDED_EMOJI &&
                                            e_.isNewerThanLastSeen(c, e.emoji.id),
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
                    } = (0, ey.Ff)({
                        columnCounts: i,
                        gridNavigatorId: ty.lq,
                        itemGrid: a,
                        itemList: o,
                        onGridNavigatorItemSelect: E,
                        onGridNavigatorPositionChange: iC,
                    });
                return (
                    r.useEffect(
                        () =>
                            eC.Om.subscribe(
                                (e) => e.inspectedExpressionPosition,
                                (e) => {
                                    if (null == e) return;
                                    let { columnIndex: t, rowIndex: n, source: i } = e;
                                    i !== et.t.GRID_NAVIGATOR_EVENT &&
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
                analyticsLocation: e3,
                columnCounts: tc,
                onSelectEmoji: L,
                onSelectPackEmoji: tf,
                emojiGrid: to,
                emojiList: eh,
                channelGuildId: eR,
                isBurstReaction: eB,
            });
        (((e, t) => {
            let [n, i] = r.useState(null);
            (r.useEffect(() => {
                null != n && (t.current?.scrollToSectionTop(n), i(null));
            }, [t, n]),
                r.useEffect(() => {
                    i(eC.Om.getState().activeCategoryIndex);
                }, [e]));
        })(P, eh),
            r.useLayoutEffect(() => {
                el && ep.current?.focus();
            }, [P, e4, ep, el]),
            (s = r.useRef(eO)),
            r.useEffect(() => {
                (el && s.current && !eO && ep.current?.focus(), (s.current = eO));
            }, [el, eO, ep]),
            r.useEffect(() => {
                D || (0, U.Ri)("");
            }, [D]),
            r.useEffect(
                () => (
                    eV.default.track(eD.HAw.OPEN_POPOUT, {
                        type: e1 ?? "Emoji Picker",
                        guild_id: eR,
                        location: e2,
                        ...(0, C.dI)(u),
                    }),
                    () => {
                        (iy.cancel(), ix.cancel());
                    }
                ),
                [e1, eR, e2, u],
            ),
            (0, A.Ay)(() => ((0, eH.V$)({ intention: c, location: e3 }), (eE.current = eI), eC.Om.resetStoreState)),
            r.useEffect(() => () => (0, eG.sF)(eG._2.FAVORITE_EMOJI_TOOLTIP), []),
            r.useLayoutEffect(() => {
                let { columnIndex: e, rowIndex: t } = eC.Om.getState().inspectedExpressionPosition;
                to[t]?.[e] == null && 0 !== e && eC.Om.setInspectedExpressionPosition(0, 0);
            }, [to]),
            r.useEffect(() => {
                if (("" === eE.current && "" !== eI && (0, eH.EG)(e3, c), "" !== eI && eE.current !== eI)) {
                    let e = eC.Om.getAnalyticsId();
                    0 === te
                        ? iy({ location: e3, searchQuery: eI, intention: c, loadId: e })
                        : ix({
                              totalResults: te,
                              numEmojiLocked: e7?.locked.length ?? 0,
                              location: e3,
                              searchQuery: eI,
                              intention: c,
                              loadId: e,
                          });
                }
                eE.current = eI;
            }, [eI, e3, te, e7, c]));
        let t_ = V ?? (v ? "div" : I.l),
            tN = null != ts;
        function tC(e, t) {
            tf(e, { ...t, isBurst: eB });
        }
        em?.type === tL.PREMIUM
            ? (a = (0, l.jsx)(ip.default, {
                  onUpsellClicked: tE,
                  emojiDescriptor: em.emojiDescriptor,
                  pickerIntention: c,
                  analyticsLocation: e3,
                  onClose: () => ef(null),
                  channel: u,
              }))
            : em?.type === tL.ROLE_SUBSCRIPTION &&
              (a = (0, l.jsx)(eU, { onClose: () => ef(null), guildId: em.guildId, emojiId: em.emojiId }));
        let tx = (0, _.A)((e, t, n) => {
                tC(
                    {
                        type: tR.EMOJI,
                        emoji: e,
                        isDisabled: !e.available,
                        size: R,
                        rowIndex: 0,
                        columnIndex: t,
                        visibleRowIndex: 0,
                        category: ty.s.PACK,
                        subCategory: ty.tm.NONE,
                    },
                    n,
                );
            }),
            tT = (0, l.jsx)(nN, {
                channel: u,
                pickerIntention: c,
                emojiListRef: eh,
                onKeyDown: (e) => {
                    (tp?.(e), es?.(e));
                },
                searchBarRef: ep,
                onFocus: en,
                autoFocus: el,
                accessory: ea,
                headerClassName: k,
                diversitySurrogate: e4,
                isBurstReaction: ev,
                onBurstReactionToggle: function () {
                    (eP(!ev), ep.current?.focus());
                },
                burstToggleRef: eM,
                renderHeader: X,
                showAddEmojiButton: $,
                closePopout: b,
            }),
            tP = [];
        T.Ay.hasFavoriteEmojis(eR) || tP.push(f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let tM = (0, l.jsxs)(r.Fragment, {
                children: [
                    v ? tT : null,
                    (0, l.jsxs)("div", {
                        className: n_.uK,
                        ref: eg,
                        children: [
                            (0, l.jsx)(ih, { channel: u, closePopout: b }),
                            (0, l.jsx)(x.Ay, {
                                contentTypes: tP,
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    if (t === f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                        return (0, l.jsx)(t0, { markAsDismissed: () => n(tr.i.UNKNOWN) });
                                },
                            }),
                            H
                                ? null
                                : (0, l.jsx)("div", {
                                      className: n_.Iy,
                                      id: ty.lq,
                                      ...th,
                                      children: tN
                                          ? (0, l.jsx)(is, {
                                                collapsedSections: tn,
                                                diversitySurrogate: e4,
                                                emojiGrid: to,
                                                emojiListRef: eh,
                                                emojiSize: R,
                                                getEmojiItemProps: tI,
                                                getEmojiRowProps: tg,
                                                gridWidth: ts,
                                                isUsingKeyboardNavigation: tA,
                                                onEmojiSelect: tC,
                                                onRemovePack: eS,
                                                setUpsellConfigs: ef,
                                                rowCount: to.length,
                                                rowCountBySection: tl,
                                                sectionDescriptors: ta,
                                                setCollapsedSections: ti,
                                                channelGuildId: eR,
                                                messageId: W,
                                                isBurstReaction: eB,
                                                listHeaderClassName: z,
                                            })
                                          : null,
                                  }),
                        ],
                    }),
                    (0, l.jsx)(nj, { emojiGrid: to, className: n_.qV, guildId: eR, pickerIntention: c, channel: u }),
                    a,
                    c === e$.EmojiIntention.REACTION
                        ? (0, l.jsx)(e8, { targetElementRef: eM, shouldShow: ev && !ek, onDismiss: () => eP(!1) })
                        : null,
                ],
            }),
            tD = (0, l.jsx)(h.A, {
                ...e3,
                children: (0, l.jsxs)(t_, {
                    id: ty.Do,
                    "aria-labelledby": v && !eO ? ty.k1 : void 0,
                    role: v && !eO ? "tabpanel" : void 0,
                    className: o()(n_.iE, { [n_.r6]: v, [n_.cB]: eB }),
                    children: [
                        v || eO ? null : tT,
                        (0, l.jsx)("div", {
                            className: o()(n_.Fb, w, { [n_.eW]: eO && !v }),
                            onScroll: iN,
                            children: eO ? (0, l.jsx)(eo, { onBack: () => ej?.(!1), onSelectEmoji: tx }) : tM,
                        }),
                        H || eO
                            ? null
                            : (0, l.jsx)(tq, {
                                  className: o()(n_.jv, Z),
                                  emojiListRef: eh,
                                  sectionDescriptors: ta,
                                  intention: c,
                                  channel: u,
                                  fallbackGuildId: eR,
                                  showOnlyUnicode: Y,
                                  pinnedPacks: eb,
                                  onViewEmojiPacks: eA ? () => ej?.(!0) : void 0,
                              }),
                    ],
                }),
            });
        return (0, l.jsx)(y.f5, { value: e5, children: tD });
    });
