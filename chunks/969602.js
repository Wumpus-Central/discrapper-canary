(n.d(t, { A: () => iy }), n(321073));
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
    w = n(151271),
    k = n(465794),
    U = n(683973),
    G = n(287809),
    F = n(474090),
    J = n(186280),
    V = n(182159),
    K = n(118057),
    B = n(834730),
    H = n(847374),
    W = n(320448),
    X = n(834040),
    z = n(499373),
    Z = n(559106),
    Y = n(442433),
    $ = n(788026),
    q = n(915089),
    Q = n(60587),
    ee = n(765036),
    et = n(105292),
    en = n(126904);
let ei = r.memo(function (e) {
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
        g = et.intl.string(E ? et.t.iTcuma : et.t.dcl9MQ),
        h = et.intl.string(a ? ee.default["2zxYCx"] : ee.default.Tvdb5N),
        p = r.useMemo(() => t.emojis.filter((e) => e.available), [t.emojis]),
        A = r.useMemo(() => [p.length], [p.length]),
        _ = (0, q.GV)(),
        {
            getContainerProps: N,
            getItemProps: C,
            getRowProps: x,
        } = (0, K.A)({
            navId: _,
            columnCounts: A,
            onSelect: (e, n, i) => {
                let s = p[e];
                null != s && t.available && d(s, e, { isFinalSelection: !i.shiftKey, toggleFavorite: i.altKey });
            },
        }),
        y = N();
    return (0, l.jsxs)("section", {
        "aria-labelledby": m,
        className: en.nM,
        ref: s,
        children: [
            (0, l.jsxs)(S.B, {
                align: "center",
                direction: "horizontal",
                gap: 4,
                justify: "space-between",
                children: [
                    (0, l.jsxs)(S.B, {
                        align: "center",
                        className: en.DD,
                        direction: "horizontal",
                        gap: 4,
                        children: [
                            (0, l.jsx)(M.D, { className: en.UU, id: m, variant: "text-sm/semibold", children: t.name }),
                            (0, l.jsx)(B.E, {
                                color: "text-subtle",
                                variant: "text-sm/medium",
                                children: et.intl.format(ee.default.UA8cNe, { count: p.length }),
                            }),
                            (0, l.jsx)(b.m, {
                                text: g,
                                children: (0, l.jsx)(R.K, {
                                    autoFocus: i,
                                    "aria-controls": f,
                                    "aria-describedby": m,
                                    "aria-expanded": E,
                                    "aria-label": g,
                                    icon: E ? H.a : W._,
                                    onClick: () => I((e) => !e),
                                    size: "sm",
                                    variant: "icon-only",
                                }),
                            }),
                        ],
                    }),
                    (0, l.jsx)(b.m, {
                        text: h,
                        children: (0, l.jsx)(R.K, {
                            "aria-label": h,
                            icon: a ? X.MinusIcon : z.T,
                            onClick: () => (a ? u(t) : c(t)),
                            size: "sm",
                            variant: "secondary",
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                id: f,
                ...y,
                "aria-label": t.name,
                className: o()(en.gm, { [en.jE]: E }),
                tabIndex: t.available && p.length > 0 ? y.tabIndex : -1,
                children: (0, l.jsx)("div", {
                    className: en.nI,
                    ...x(0),
                    children: p.map((e, i) => {
                        let { ref: s, ...r } = C(i, 0);
                        return (0, l.jsx)(
                            b.m,
                            {
                                text: `:${e.name}:`,
                                ariaHidden: !0,
                                asContainer: !0,
                                children: (0, l.jsx)(Z.vN, {
                                    children: (0, l.jsx)("button", {
                                        ...r,
                                        ref: s,
                                        "aria-label": `:${e.name}:`,
                                        className: en.Z8,
                                        "data-type": Q.g.EMOJI,
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
                                            (0, Y.L3)(e, async () => {
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
                                        children: (0, l.jsx)($.A, {
                                            animated: e.animated,
                                            alt: "",
                                            className: en.Zg,
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
var es = n(202541),
    el = n(429800);
function er(e) {
    let { onBack: t, onSelectEmoji: n } = e,
        i = et.intl.string(ee.default.Nwj3fK),
        s = r.useRef(null),
        a = (0, w.RQ)((e) => e.showSelectedEmojiPackId),
        o = (0, m.bG)([V.A], () => V.A.getPacks()),
        c = null != a && o.some((e) => e.id === a),
        u = (0, m.bG)([G.default], () => G.default.getCurrentUser()),
        d = (0, F.ki)(u, es.PremiumTypes.TIER_2);
    (r.useLayoutEffect(() => {
        c &&
            (s.current?.scrollIntoView({ block: "start" }),
            s.current?.querySelector("button[aria-expanded]")?.focus({ preventScroll: !0 }));
    }, [c, a]),
        (0, J.i3)(d));
    let f = (0, U.k)().pinnedEmojiPacks?.packIds,
        E = r.useCallback((e) => {
            (0, O.Ls)(e.id);
        }, []),
        I = r.useCallback((e) => {
            (0, O.M5)(e.id);
        }, []);
    return (0, l.jsxs)("div", {
        className: el.kL,
        children: [
            (0, l.jsx)("div", { "aria-hidden": !0, className: el.Tp }),
            (0, l.jsx)("div", {
                className: el.wx,
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
                                        autoFocus: !c,
                                        "aria-label": i,
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
                                                    children: et.intl.string(ee.default["0+5+Oy"]),
                                                }),
                                                (0, l.jsx)(D.E, { type: "beta", variant: "primary" }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        d
                            ? null
                            : (0, l.jsx)(k.A, {
                                  buttonTextOverride: et.intl.string(et.t.hIVbiP),
                                  size: "sm",
                                  subscriptionTier: es.pe.TIER_2,
                              }),
                    ],
                }),
            }),
            (0, l.jsx)("div", {
                className: el.p_,
                children: o.map((e, t) =>
                    (0, l.jsxs)(
                        r.Fragment,
                        {
                            children: [
                                t > 0 ? (0, l.jsx)("hr", { className: el.yF }) : null,
                                (0, l.jsx)(
                                    ei,
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
var ea = n(617617);
let eo = [];
var ec = n(536637),
    eu = n.n(ec),
    ed = n(73153),
    em = n(935208);
let ef = { lastSeenNewlyAddedEmojiIds: {} },
    eE = ef,
    eI = {};
function eg() {
    for (let e in eI) eE.lastSeenNewlyAddedEmojiIds[e] = eI[e];
}
class eh extends m.Ay.PersistedStore {
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
        eE = e ?? ef;
    }
    getState() {
        return eE;
    }
    getLastSeenEmojiByGuild(e) {
        return eE.lastSeenNewlyAddedEmojiIds[e];
    }
    isNewerThanLastSeen(e, t) {
        if (null == e || null == t) return !1;
        let n = this.getLastSeenEmojiByGuild(e);
        if (null == n || em.default.compare(t, n.id) > 0) return !0;
        {
            let e = eu()(n.lastSeen);
            return eu()().isBefore(e.add(2, "weeks")) && !n.acknowledged;
        }
    }
}
let ep = new eh(ed.h, {
    LOGOUT: function () {
        ((eE = ef), (eI = {}));
    },
    NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = eI[t] ?? eE.lastSeenNewlyAddedEmojiIds[t];
        null == i || 0 > em.default.compare(i.id, n)
            ? (eI[t] = { id: n, lastSeen: Date.now(), acknowledged: !0 })
            : (eI[t] = { ...i, acknowledged: !0 });
    },
    NEWLY_ADDED_EMOJI_SEEN_PENDING: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = eI[t] ?? eE.lastSeenNewlyAddedEmojiIds[t];
        (null == i || 0 > em.default.compare(i.id, n)) && (eI[t] = { id: n, lastSeen: Date.now(), acknowledged: !1 });
    },
    NEWLY_ADDED_EMOJI_SEEN_UPDATED: eg,
    CLEAR_CACHES: function () {
        ((eE = ef), eg());
    },
    CONNECTION_CLOSED: eg,
});
var eA = n(451731),
    e_ = n(850992),
    eN = n(887695),
    eC = n(562708),
    ex = n(462887),
    ey = n(939249),
    ej = n(789645),
    eT = n(696986),
    eO = n(736653),
    eS = n(139286),
    eb = n(976860),
    eR = n(71393),
    ev = n(384684),
    eL = n(985242),
    eP = n(652215),
    eM = n(746080),
    eD = n(196404);
function ew(e) {
    let t,
        { onClose: i, guildId: s, emojiId: r } = e,
        a = ((t = (0, eO.Ay)()), (0, ex.q)(t) ? n(454333) : n(674463)),
        { analyticsLocations: o } = (0, x.Ay)(N.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, eS.A)({
        type: eC.ImpressionTypes.MODAL,
        name: eC.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: { location_stack: o, emoji_guild_id: s, emoji_id: r ?? null },
    });
    let c = (0, m.bG)([eR.A], () => eR.A.getGuild(s)),
        u = (0, m.bG)([ev.A], () => null != s && ev.A.getUserSubscriptionRoles(s).size > 0),
        d = u ? et.intl.string(et.t.GoLM9z) : et.intl.formatToPlainString(et.t["h0u/Hi"], { serverName: c?.name }),
        f = u ? et.intl.string(et.t.PjZ7Db) : et.intl.string(et.t.p8FG1D);
    return (0, l.jsxs)("div", {
        className: eD.kL,
        children: [
            (0, l.jsx)("div", { className: eD.Tp }),
            (0, l.jsxs)("div", {
                className: eD.Qs,
                children: [
                    (0, l.jsx)(ey.D, {
                        className: eD.b,
                        "aria-label": et.intl.string(et.t.cpT0Cq),
                        onClick: i,
                        children: (0, l.jsx)(ej.P, {
                            size: "xs",
                            color: "currentColor",
                            "aria-label": et.intl.string(et.t.cpT0Cq),
                            className: eD.yP,
                        }),
                    }),
                    (0, l.jsx)("img", { alt: "", src: a, className: eD.Tn }),
                    (0, l.jsx)(eT.h, { size: 22 }),
                    (0, l.jsx)(M.D, {
                        color: "text-strong",
                        variant: "heading-lg/extrabold",
                        className: eD.wx,
                        children: et.intl.string(et.t.cBjkcx),
                    }),
                    (0, l.jsx)(eT.h, { size: 4 }),
                    (0, l.jsx)(B.E, {
                        color: "text-default",
                        variant: "text-md/normal",
                        className: eD.h_,
                        children: d,
                    }),
                    (0, l.jsx)(eT.h, { size: 24 }),
                    (0, l.jsx)(eL.A, {
                        text: f,
                        onClick: function () {
                            (0, eb.pX)(eP.BVt.CHANNEL(s, eM.VV.ROLE_SUBSCRIPTIONS), { sourceLocationStack: o });
                        },
                    }),
                ],
            }),
        ],
    });
}
var ek = n(450510),
    eU = n(75678),
    eG = n(253932),
    eF = n(808728),
    eJ = n(174459),
    eV = n(240248),
    eK = n(822123),
    eB = n(734057),
    eH = n(309010),
    eW = n(690521),
    eX = n(818645),
    ez = n(316884),
    eZ = n(307731),
    eY = n(698279);
function e$(e) {
    let { intention: t, containerWidth: n, rowSize: i, isBurstReaction: s, analyticsObject: l } = e,
        r = eB.A.getChannel(eH.Ay.getChannelId()),
        a = r?.getGuildId(),
        o =
            t === eZ.EmojiIntention.REACTION
                ? j.Ay.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice()
                : j.Ay.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        c = null != r ? j.Ay.getDisambiguatedEmojiContext(r.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        u =
            t === eZ.EmojiIntention.REACTION
                ? j.Ay.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems
                : j.Ay.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        d = o.slice(0, u),
        m = null != a ? j.Ay.getGuildEmoji(a) : [],
        f = j.Ay.getDisambiguatedEmojiContext(r?.getGuildId()).getCustomEmoji(),
        { topEmojis: E, newlyAddedEmojis: I } = (0, ez.b)({ guildId: r?.getGuildId(), pickerIntention: t }),
        { visibleTopEmojis: g, visibleNewlyAddedEmojis: h } = (0, eX.W)({
            topEmojis: E,
            newlyAddedEmojis: I,
            rowSize: i,
        });
    C.Ay.trackWithMetadata(
        t === eZ.EmojiIntention.REACTION ? eP.HAw.REACTION_PICKER_OPENED : eP.HAw.EXPRESSION_PICKER_OPENED,
        {
            width: n,
            tab: eY.kx.EMOJI,
            badged: !1,
            num_expressions_favorites: c.length,
            num_animated_expressions_favorites: c.filter((e) => e?.animated).length,
            num_custom_expressions_favorites: c.filter(eW.Ay.isCustomEmoji).length,
            num_standard_expressions_favorites: c.filter((e) => null == e.id).length,
            num_expressions_frecent: d.length,
            num_animated_expressions_frecent: d.filter((e) => e?.animated).length,
            num_custom_expressions_frecent: d.filter(eW.Ay.isCustomEmoji).length,
            num_standard_expressions_frecent: d.filter((e) => null == e.id).length,
            num_current_guild_expressions: m.length,
            num_custom_expressions_total: f.size,
            num_expressions_top_server: g.length,
            num_animated_expressions_top_server: g.filter((e) => e.animated).length,
            num_expressions_newly_added: h.length,
            num_animated_expressions_newly_added: h.filter((e) => e.animated).length,
            ...(t === eZ.EmojiIntention.REACTION && { is_burst: s }),
            ...(null != l && { location_object: l }),
        },
    );
}
var eq = n(206248),
    eQ = n(724651),
    e0 = n(732280),
    e1 = n(783420),
    e2 = n(24482);
let e3 = { object: eP.ZSU.BUTTON_CTA, section: eP.JJy.SUPER_REACTION_PICKER };
function e4(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: i } = e,
        s = et.intl.string(et.t.eikz43),
        r = (0, e0.V)(),
        a = (0, eQ.O)(),
        o = r?.subscriptionTrial,
        c = null != o || null != a,
        u = o?.skuId ?? es.pe.TIER_2,
        d = c
            ? null != a
                ? et.intl.formatToPlainString(et.t.bkQ4bH, { percent: a.discount.amount })
                : (0, e2.FY)({ intervalType: o?.interval, intervalCount: o?.intervalCount })
            : et.intl.string(et.t.sEAnVH);
    return (0, l.jsx)(e1.A, {
        subscriptionTier: u,
        premiumModalAnalyticsLocation: e3,
        onSubscribeModalClose: (e) => {
            e && i();
        },
        children: (e) => {
            let { onClick: r } = e;
            return (0, l.jsx)(eq.H, {
                targetElementRef: t,
                shouldShow: n,
                onRequestClose: i,
                position: "bottom",
                assetUrl: "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
                disableMediaViewer: !0,
                badge: c ? { type: "free_trial", variant: "expressive" } : void 0,
                title: et.intl.string(et.t.N4SCJ0),
                body: s,
                action: { text: d, variant: "expressive", icon: L.t, onClick: r },
            });
        },
    });
}
var e5 = n(200589),
    e8 = n(435558),
    e6 = n.n(e8),
    e7 = n(837381),
    e9 = n(460905),
    te = n(775602),
    tt = n(713517),
    tn = n(498032),
    ti = n(131607),
    ts = n(49999),
    tl = n(938612);
function tr(e) {
    let { onClick: t, listItemId: n } = e,
        i = et.intl.string(ee.default["3D0GLv"]),
        s = (0, e7.rm)(n),
        [r, a] = (0, ti.kn)([f.M.DEFAULT_EMOJIS_PACKS_DISCOVERY_DOT]),
        o = r === f.M.DEFAULT_EMOJIS_PACKS_DISCOVERY_DOT;
    return (0, l.jsx)("div", {
        className: tl.nM,
        children: (0, l.jsxs)("div", {
            className: tl.Jn,
            children: [
                (0, l.jsx)(b.m, {
                    ariaHidden: !0,
                    position: "right",
                    text: i,
                    children: (0, l.jsx)(ey.D, {
                        ...s,
                        "aria-label": o ? `${i}, ${et.intl.string(et.t.y2b7CA)}` : i,
                        className: tl.x6,
                        onClick: function () {
                            (o && a(ts.i.TAKE_ACTION), t());
                        },
                        children: (0, l.jsx)(z.T, { size: "md", color: "currentColor" }),
                    }),
                }),
                o && (0, l.jsx)(tn.N, { className: tl.aW, size: "md", cutout: "base-lower" }),
            ],
        }),
    });
}
var ta = n(88218),
    to = n(407698),
    tc = n(941971),
    tu = n(531685),
    td = n(406810),
    tm = n(27232),
    tf = n(369606),
    tE = n(413249),
    tI = n(141060),
    tg = n(687966),
    th = n(115979),
    tp = n(524501),
    tA = n(926268),
    t_ = n(138134),
    tN = n(732139);
let tC = r.memo(function (e) {
    let { categoryId: t, ...n } = e,
        i = (function (e) {
            switch (e) {
                case tN.R2.RECENT:
                    return td.ClockIcon;
                case tN.R2.FAVORITES:
                    return tm.StarIcon;
                case tN.R2.TOP_GUILD_EMOJI:
                    return tf.TrophyIcon;
                case tN.R2.PEOPLE:
                    return e9.n;
                case tN.R2.NATURE:
                    return tE.p;
                case tN.R2.FOOD:
                    return tI.i;
                case tN.R2.ACTIVITY:
                    return tg.GameControllerIcon;
                case tN.R2.TRAVEL:
                    return th.h;
                case tN.R2.OBJECTS:
                    return tp.D;
                case tN.R2.SYMBOLS:
                    return tA.HeartIcon;
                case tN.R2.FLAGS:
                    return t_.FlagIcon;
                case tN.R2.PREMIUM_UPSELL:
                    return L.t;
                default:
                    return;
            }
        })(t);
    return null == i ? null : (0, l.jsx)(i, { color: "currentColor", ...n });
});
var tx = n(724511),
    ty = n(132500),
    tj = n(7584),
    tT = n(526292),
    tO = n(711014),
    tS = (((i = {})[(i.EMOJI = 0)] = "EMOJI"), (i[(i.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"), i);
let tb = [eZ.EmojiDisabledReasons.DISALLOW_EXTERNAL, eZ.EmojiDisabledReasons.DISALLOW_CUSTOM];
var tR = (((s = {})[(s.PREMIUM = 0)] = "PREMIUM"), (s[(s.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), s),
    tv = n(342379);
let tL = "expression-guild-",
    { itemIdForIndex: tP } = (0, ta.J)(tL),
    tM = `${tL}view-emoji-packs`,
    tD = (0, eV.xI)(E.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    tw = (0, eV.xI)(E.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    tk = (0, eV.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    tU = (0, eV.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    tG = (0, eV.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    tF = (0, eV.xI)(tv.__invalid_unicodeCategoryShortcutHeight),
    tJ = (0, eV.xI)(E.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    tV = (0, eV.xI)(E.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    tK = tk + tw + 2 * tG,
    tB = tJ + 2 * tV,
    tH = tD + tw,
    tW = tH + tB,
    tX = tk + tU + 2 * tG,
    tz = tk + 2 * tG + 2 * tw + tJ;
function tZ(e) {
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
        { isHoveringOrFocusing: f } = (0, tt.A)(m),
        E = (0, e7.rm)(tP(n)),
        I = a.type === tN.s.GUILD || a.type === tN.s.PACK ? null : a.id,
        g = t === n,
        h = !d && u,
        p = a.type === tN.s.GUILD ? a.guild : null,
        A = a.type === tN.s.PACK ? a.pack : null,
        _ = (0, l.jsxs)(ey.D, {
            innerRef: m,
            ...E,
            "aria-label": a.type === tN.s.PACK ? a.pack.name : (0, eK.wt)(a, p),
            className: o()({
                [tv.ZG]: null != p,
                [tv.td]: null != A,
                [tv.Q0]: null != A && g,
                [tv.Bj]: null == p && null == A,
                [tv.s6]: null == p && null == A && g,
                [tv.xg]: a.type === tN.s.RECENT,
            }),
            onClick: () => {
                (null != p &&
                    eJ.default.track(eP.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: i?.location,
                        tab: eY.kx.EMOJI,
                        guild_id: p.id,
                    }),
                    c(n));
            },
            children: [
                (0, l.jsx)("div", {
                    className: tv.a$,
                    children: (0, l.jsx)(tc.A, { hovered: f, selected: g, size: "small" }),
                }),
                a.type === tN.s.GUILD
                    ? (0, l.jsx)(tx.A, { guild: a.guild, isSelected: g, shouldAnimate: h, isLocked: a.isNitroLocked })
                    : null,
                null != A
                    ? (0, l.jsx)($.A, {
                          alt: "",
                          animated: !d,
                          shouldAnimate: h,
                          className: tv.ty,
                          emojiId: A.representativeEmojiId,
                      })
                    : null,
                null == p && null != I
                    ? (0, l.jsx)(tC, { categoryId: I, className: tv.Yl, height: tk, width: tk, size: "custom" })
                    : null,
            ],
        }),
        N = s[n + 1],
        C = s[n - 1],
        x = null != A && null != C && C.type !== tN.s.PACK,
        y = null != A && N?.type !== tN.s.PACK,
        j = null != N && a.type === tN.s.GUILD && N.type !== tN.s.GUILD;
    return null != p
        ? (0, l.jsxs)(r.Fragment, {
              children: [
                  (0, l.jsx)(to.Q, { guild: p, children: _ }),
                  j ? (0, l.jsx)("hr", { className: tv.ny }, "separator") : null,
              ],
          })
        : null != A
          ? (0, l.jsxs)(r.Fragment, {
                children: [
                    x ? (0, l.jsx)("hr", { className: tv.ny }) : null,
                    (0, l.jsx)(b.m, { ariaHidden: !0, position: "right", text: A.name, children: _ }),
                    y ? (0, l.jsx)("hr", { className: tv.ny }) : null,
                ],
            })
          : _;
}
let tY = (e) => {
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
        E = e_.Om.useStore((e) => e.activeCategoryIndex),
        I = (function (e) {
            let { emojiListRef: t } = e,
                n = (0, w.RQ)((e) => e.searchQuery),
                i = r.useCallback((e) => t.current?.scrollToSectionTop(e), [t]);
            return r.useCallback(
                (e) => {
                    "" !== n ? ((0, w.Ri)(""), e_.Om.setActiveCategoryIndex(e)) : i(e);
                },
                [i, n],
            );
        })({ sectionDescriptors: i, emojiListRef: n }),
        g = (0, p.p)(),
        h = (0, eK.ss)(s, a, { guildId: a?.guild_id ?? c }),
        A = r.useMemo(() => (0, e5.t)(u ? (0, eK.CQ)() : h, d), [h, d, u]),
        _ = r.useRef(null),
        N = (0, m.bG)([tu.A], () => tu.A.isFocused()),
        C = (0, m.bG)([te.Ay], () => te.Ay.useReducedMotion, []),
        x = r.useMemo(
            () =>
                e6().memoize(
                    (e, t) => {
                        let n = A[t];
                        if (null != n)
                            return (0, l.jsx)(
                                tZ,
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
        j = null != f ? tz : 0,
        T = r.useMemo(() => {
            if (null != f)
                return function () {
                    return (0, l.jsx)(tr, { listItemId: tM, onClick: f }, "view-emoji-packs");
                };
        }, [f]),
        O = r.useCallback(
            (e, t) => {
                let n = A[t];
                if (n.type === tN.s.RECENT) return tK;
                if (n.type === tN.s.PACK) {
                    let e = A[t - 1],
                        n = A[t + 1];
                    return tH + (Number(null != e && e.type !== tN.s.PACK) + Number(n?.type !== tN.s.PACK)) * tB;
                }
                if (n.type === tN.s.GUILD) {
                    let e = A[t + 1];
                    return null != e && e.type !== tN.s.GUILD ? tW : tH;
                }
                return tX;
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
                s.type === tN.s.GUILD || s.type === tN.s.PACK
                    ? ((t += 1), (n += 1))
                    : s.type === tN.s.UNICODE
                      ? (i += 1)
                      : ((e += 1), (t += 1));
            });
            let s = [e, n, i],
                l = A.some((e) => e.type === tN.s.PACK) ? (A[0]?.type === tN.s.PACK ? 1 : 2) : 0,
                r = j + tK + t * tH + tW + l * tB;
            return {
                nonUnicodeCategoryCount: t,
                firstUnicodeCategoryIndex: t,
                firstUnicodeCategoryOffsetTop: r,
                rowCountBySection: s,
            };
        }, [A, j]),
        [L, P] = r.useState(!0);
    r.useLayoutEffect(() => {
        P(S >= 7);
    }, [S]);
    let M = r.useCallback(
            (e) => {
                let t = _.current?.getListDimensions();
                null == t || (e + t.height - tJ >= R ? P(!1) : P(!0));
            },
            [R],
        ),
        D = r.useCallback(
            (e) => {
                (e(b), _.current?.scrollTo(R));
            },
            [R, b],
        ),
        k = r.useCallback(
            (e, t) => {
                let n = A[e];
                if (null == n) return 0;
                let i = L ? tF : 0;
                if (n.type === tN.s.RECENT) return t ? 0 : tU;
                if (n.type === tN.s.PACK) return t ? i : tw;
                if (n.type === tN.s.GUILD) {
                    let n = A[e + 1];
                    return null != n && n.type !== tN.s.GUILD ? (t ? tJ + -2 * tV + tw + i : tw) : t ? i : tw;
                }
                return t ? tw + i : 2 * tw;
            },
            [A, L],
        ),
        U = r.useMemo(
            () =>
                function (e, t) {
                    return (0, l.jsx)(r.Fragment, { children: t }, e);
                },
            [],
        ),
        G = L ? "shortcut" : "hiddenshortcut";
    return (0, l.jsx)(ta.A, {
        categoryListRef: _,
        expressionsListRef: n,
        className: t,
        store: e_.Om,
        categories: A,
        listPadding: y,
        onScroll: M,
        renderCategoryListItem: x,
        renderSection: U,
        rowCount: A.length,
        categoryHeight: O,
        getScrollOffsetForIndex: k,
        rowCountBySection: v,
        navId: "emoji-picker-categories",
        itemIdPrefix: tL,
        renderListHeader: T,
        listHeaderHeight: j,
        children: (e) =>
            S >= 7 &&
            (0, l.jsx)(
                ey.D,
                {
                    "aria-hidden": !L,
                    "aria-label": et.intl.string(et.t.dT0ctw),
                    className: o()(tv.KB, { [tv.h_]: !L }),
                    tabIndex: L ? 0 : -1,
                    onClick: () => D(e),
                    children: (0, l.jsx)(e9.n, { size: "custom", color: "currentColor", height: tk, width: tk }),
                },
                G,
            ),
    });
};
var t$ = n(860197);
let tq = function (e) {
    let { markAsDismissed: t } = e;
    return (0, l.jsxs)(B.E, {
        variant: "text-xs/medium",
        color: "text-default",
        className: t$.iE,
        children: [
            (0, l.jsx)(tA.HeartIcon, { size: "md", color: "currentColor", className: t$.Kk }),
            (0, l.jsx)("div", {
                className: t$.Qs,
                children: (0, l.jsx)(B.E, { variant: "text-xs/normal", children: et.intl.string(et.t.xdRf69) }),
            }),
            (0, l.jsx)(ey.D, {
                onClick: () => t(ts.i.UNKNOWN),
                children: (0, l.jsx)(ej.P, { size: "md", color: "currentColor", className: t$.VN }),
            }),
        ],
    });
};
var tQ = n(941143),
    t0 = n(717421),
    t1 = n(343032),
    t2 = n(683063),
    t3 = n(748798);
let t4 = { tension: 750, mass: 2.5, friction: 70 };
function t5(e) {
    let { checked: t, onClick: n, buttonRef: i } = e,
        s = (0, m.bG)([te.Ay], () => te.Ay.useReducedMotion),
        a = G.default.getCurrentUser(),
        c = null != a && !(0, e2.TW)(a),
        u = c ? [] : [f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP],
        [d, E] = (0, ti.kn)(u),
        [I, g] = r.useState(!1),
        [h, p] = (0, t0.z)(() => ({})),
        A = (0, tQ.animated)(t1.i);
    r.useEffect(() => {
        let e = d === f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (E(ts.i.DISMISS), setTimeout(() => g(e), 200));
    }, [d, E]);
    let _ = I ? et.intl.string(et.t["Osi/uy"]) : t && !c ? et.intl.string(et.t["5cRA/b"]) : et.intl.string(et.t.buV4av),
        N = I ? et.intl.string(et.t.ORK94p) : void 0;
    return (0, l.jsx)(t2.u, {
        position: "top",
        title: N,
        body: _,
        asset: (0, l.jsx)(L.t, { size: "md", color: "currentColor" }),
        assetSize: 20,
        forceOpen: I,
        children: (0, l.jsx)(ey.D, {
            innerRef: i,
            "aria-label": _,
            "aria-pressed": t,
            onClick: function () {
                (p({ from: { rotate: t ? "360deg" : "0deg" }, to: { rotate: t ? "0deg" : "360deg" }, config: t4 }),
                    n?.(),
                    g(!1));
            },
            focusProps: { enabled: !1 },
            className: o()(t3.Pf, { [t3.wM]: t }),
            children: (0, l.jsx)(A, {
                style: s ? void 0 : h,
                size: "custom",
                width: 20,
                height: 20,
                color: t ? "white" : "currentColor",
                className: t3.Kk,
            }),
        }),
    });
}
var t8 = n(821609),
    t6 = n(644508),
    t7 = n(824832),
    t9 = n(267102),
    ne = n(242812);
function nt(e) {
    let { channel: t, closePopout: n } = e,
        i = r.useRef(null),
        s = r.useRef(0),
        [a, o] = r.useState(!1),
        [c, u] = r.useState(!1),
        d = (0, t9.Us)() === eP.BRT.OVERLAY,
        m = c || a,
        f = r.useCallback(
            async (e, i, l) => {
                (u(!0),
                    n(),
                    await (0, t6.f)({
                        userImage: { data: e, file: i, image: l },
                        guildId: t?.guild_id ?? null,
                        analyticsLocation: {
                            section: eP.JJy.EXPRESSION_PICKER,
                            page: t?.guild_id != null ? eP.liQ.GUILD_CHANNEL : eP.liQ.DM_CHANNEL,
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
                text: d ? et.intl.string(et.t.RMbedC) : null,
                children: (0, l.jsx)(t8.$, {
                    text: et.intl.string(et.t.iMJO37),
                    variant: "secondary",
                    onClick: function () {
                        i.current?.activateUploadDialogue();
                    },
                    disabled: m || d,
                }),
            }),
            (0, l.jsx)("div", {
                className: ne.F,
                children: (0, l.jsx)(t7.Ay, { ref: i, onChange: f, setLoading: o, disabled: m }, s.current),
            }),
        ],
    });
}
n(667532);
var nn = n(833272),
    ni = n(82495),
    ns = n(260762),
    nl = n(650583),
    nr = n(683829);
let na = (0, q.Ld)(),
    no = nn.A.convert.fromCodePoint("1f44f"),
    nc = (0, eV.xI)(E.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
function nu(e) {
    switch (nn.A.convert.toCodePoint(e)) {
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
let nd = (e) => {
    let { fade: t, surrogate: n, onClick: i, delay: s, index: r } = e,
        a = (0, e7.rm)(`item-${r}`),
        o = eW.Ay.getURL(no + n),
        c = (0, t0.z)({ opacity: 1, from: { opacity: +!t }, delay: s }, "animate-always");
    return (0, l.jsx)(ey.D, {
        ...a,
        role: "option",
        "aria-selected": 0 === r,
        onClick: () => i(n),
        className: nr.B6,
        children: (0, l.jsx)(tQ.animated.div, {
            "aria-label": nu(n),
            className: nr.g4,
            style: { backgroundImage: `url("${o}")`, ...c },
        }),
    });
};
function nm(e) {
    let { id: t, selectedSurrogate: n, onClick: i } = e,
        s = (0, ns.A)("diversity"),
        a = (0, t0.z)({ height: (nc + 14) * (tj.W$.length + 1), from: { height: nc + 14 }, config: { duration: 125 } }),
        o = r.useRef(s);
    r.useEffect(() => {
        o.current.focusFirstVisibleItem();
    }, []);
    let c = ["", ...tj.W$];
    return (
        e6().remove(c, (e) => e === n),
        c.unshift(n),
        (0, l.jsx)(e7.hD, {
            navigator: s,
            children: (0, l.jsx)(e7.PR, {
                children: (e) => {
                    let { ref: n, ...s } = e;
                    return (0, l.jsx)(tQ.animated.div, {
                        ...s,
                        id: t,
                        ref: n,
                        className: nr.J6,
                        style: a,
                        role: "listbox",
                        children: c.map((e, t) =>
                            (0, l.jsx)(nd, { index: t, fade: 0 !== t, delay: 20 * t, surrogate: e, onClick: i }, t),
                        ),
                    });
                },
            }),
        })
    );
}
let nf = function (e) {
    let { searchBarRef: t, selectedSurrogate: n, className: i } = e,
        s = eW.Ay.getURL(no + n),
        [a, c] = r.useState(!1),
        u = (0, ni.A)(null, () => c(!1)),
        d = r.useRef(null);
    return (0, l.jsxs)("div", {
        ref: u,
        className: o()(nr.fx, i),
        children: [
            (0, l.jsx)(ey.D, {
                innerRef: d,
                className: nr.Dj,
                onClick: function () {
                    c(!0);
                },
                "aria-label": et.intl.formatToPlainString(et.t["2SfnMp"], { skinTone: nu(n) }),
                "aria-haspopup": !0,
                "aria-expanded": a,
                "aria-controls": na,
                tabIndex: a ? -1 : 0,
                children: (0, l.jsx)("div", { className: nr.g4, style: { backgroundImage: `url("${s}")` } }),
            }),
            a
                ? (0, l.jsx)("div", {
                      onKeyDown: function (e) {
                          e.key === nl.dh.ESCAPE
                              ? (e.stopPropagation(), c(!1), null != d.current && d.current.focus())
                              : "Tab" === e.key && c(!1);
                      },
                      children: (0, l.jsx)(nm, {
                          id: na,
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
var nE = n(462180),
    nI = n(602034),
    ng = n(683438);
let nh = r.memo(function (e) {
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
        d = (0, w.RQ)((e) => e.searchQuery),
        [m, f, E] = e_.Om.useStore((e) => [e.inspectedExpressionPosition, e.searchPlaceholder, e.hasInteracted], nE.x),
        I = r.useCallback(
            (e) => {
                (e_.Om.setActiveCategoryIndex("" === e ? 0 : -1),
                    e_.Om.setInspectedExpressionPosition(0, 0),
                    e_.Om.setSearchPlaceholder(null),
                    (0, w.Ri)(e),
                    t.current?.scrollTo(0));
            },
            [t],
        ),
        g = r.useCallback(() => {
            I("");
        }, [I]);
    return (
        r.useImperativeHandle(c, () => ({ focus: () => u.current?.focus() })),
        (0, l.jsx)(ng.I, {
            autoFocus: a,
            query: d,
            ref: u,
            placeholder: f ?? o,
            onClear: g,
            onKeyDown: function (e) {
                switch (e.key) {
                    case nl.dh.ARROW_LEFT:
                    case nl.dh.ARROW_RIGHT:
                    case nl.dh.ARROW_UP:
                    case nl.dh.ARROW_DOWN:
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
                ...(E ? { "aria-activedescendant": (0, nI.Aq)(n, m.columnIndex, m.rowIndex) } : void 0),
            },
        })
    );
});
var np = n(381575);
let nA = function (e) {
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
                (0, l.jsx)(nh, {
                    emojiListRef: r,
                    gridNavigatorId: tN.lq,
                    onKeyDown: a,
                    ref: d,
                    onFocus: c,
                    autoFocus: u,
                    defaultSearchPlaceholder: (0, eK.wT)(i, f),
                }),
                i === eZ.EmojiIntention.REACTION ? (0, l.jsx)(t5, { checked: f, onClick: E, buttonRef: I }) : null,
                n ?? (0, l.jsx)(nf, { searchBarRef: d, className: np.fx, selectedSurrogate: m }),
                i !== eZ.EmojiIntention.NO_CUSTOM_EMOJI && h ? (0, l.jsx)(nt, { channel: t, closePopout: p }) : null,
            ],
        });
    return (0, l.jsx)("div", { className: o()(np.wx, s), children: null != g ? g(A) : A });
};
var n_ = n(182922),
    nN = n(363195),
    nC = n(486020),
    nx = n(977566);
function ny(e) {
    return null != e && "animated" in e;
}
let nj = r.memo(function (e) {
    let t,
        i,
        { className: s, emojiGrid: a, guildId: o, pickerIntention: c, channel: u } = e,
        d = e_.Om.useStore((e) => e.inspectedExpressionPosition),
        f = r.useMemo(() => {
            let { rowIndex: e, columnIndex: t } = d;
            return a[e]?.[t];
        }, [a, d]);
    switch (f?.type) {
        case tS.EMOJI:
            t = f?.emoji;
            break;
        case tS.EXPAND_OR_COLLAPSE_EMOJIS:
            t = { type: "EXPAND_OR_COLLAPSE_EMOJI", guildId: f?.guildId, allNamesString: f?.name };
            break;
        default:
            t = null;
    }
    let E = (0, m.bG)([eR.A], () => (null !== t && t.type === T.i.GUILD ? eR.A.getGuild(t.guildId) : null), [t]),
        I = (0, m.bG)([V.A], () => (null !== t && t.type === T.i.PACK ? V.A.getPack(t.packId) : null), [t]),
        g = (0, m.bG)([tu.A], () => tu.A.isFocused()),
        h = (0, m.bG)([te.Ay], () => te.Ay.useReducedMotion, []),
        p = eG.Sf.useSetting(),
        A = (0, eK.O7)(o, ny(t) ? t : null),
        _ = (0, m.bG)([j.Ay], () => j.Ay.expandedSectionsByGuildIds),
        { newlyAddedEmojis: N } = (0, ez.A)(o, c),
        C = f?.type === tS.EMOJI ? f.subCategory : tN.tm.NONE;
    if (
        (r.useEffect(() => {
            let e = Date.now();
            return () => {
                Date.now() - e >= 250 &&
                    ny(t) &&
                    C !== tN.tm.NONE &&
                    (C === tN.tm.NEWLY_ADDED_EMOJI &&
                        null !== t &&
                        t.type === T.i.GUILD &&
                        (0, eA.mz)(t.guildId, N[0].id),
                    null != d.source &&
                        (0, eK.yB)({
                            emoji: t,
                            subCategory: C,
                            position: f.columnIndex + 1,
                            newlyAddedHighlight: C === tN.tm.NEWLY_ADDED_EMOJI && ep.isNewerThanLastSeen(o, t.id),
                        }));
            };
        }),
        null == t)
    )
        return null;
    let x = (function (e, t) {
            let { allowAnimatedEmoji: i, sectionsExpandedFromThreeRows: s, theme: r } = t;
            if (ny(e)) {
                let t = null != e.id ? nC.Ay.getEmojiURL({ id: e.id, animated: i && e.animated, size: 28 }) : e.url;
                return "" === t
                    ? (0, l.jsx)(B.E, {
                          variant: "text-md/normal",
                          className: nx.J_,
                          children: "surrogates" in e ? e.surrogates : null,
                      })
                    : (0, l.jsx)("img", { alt: (0, eW.N)(e) ?? "", src: t, className: nx.Zg });
            }
            if ("EXPAND_OR_COLLAPSE_EMOJI" !== e.type) return null;
            {
                let t = n(619508),
                    i = n(404828),
                    a = n(600003),
                    o = n(318121);
                return s.has(e.guildId)
                    ? (0, l.jsx)("img", { className: nx.Kk, src: (0, ex.M)(r) ? a : o, alt: "" })
                    : (0, l.jsx)("img", { className: nx.Kk, src: (0, ex.M)(r) ? t : i, alt: "" });
            }
        })(t, { allowAnimatedEmoji: p, sectionsExpandedFromThreeRows: _, theme: nN.A.theme }),
        y =
            null != E
                ? (0, l.jsx)(tx.A, { className: nx.__invalid_guildIcon, guild: E, shouldAnimate: !h && g })
                : null;
    i =
        "EXPAND_OR_COLLAPSE_EMOJI" === t.type
            ? _.has(t.guildId)
                ? et.intl.string(et.t["/K2RDH"])
                : et.intl.string(et.t.NZI2Zk)
            : (0, eW.N)(t);
    let O = (function (e) {
        let { inspectedEmoji: t, guild: n, pack: i } = e,
            s = ny(t);
        return null != n && s
            ? et.intl.format(et.t.KFW2aY, { guildName: n.name })
            : null != i && s
              ? et.intl.format(ee.default.VEfeux, {
                    packName: (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(L.t, {
                                size: "custom",
                                width: 10,
                                height: 10,
                                color: "currentColor",
                                className: nx.C5,
                                "aria-label": et.intl.string(ee.default.leUgZw),
                            }),
                            " ",
                            i.name,
                        ],
                    }),
                })
              : null;
    })({ inspectedEmoji: t, channel: u, guildId: o, intention: c, guild: E, pack: I });
    return (0, l.jsx)(n_.A, {
        className: s,
        graphicPrimary: x,
        graphicSecondary: y,
        titlePrimary: i,
        titleSecondary: O,
        isFavorite: A,
        emojiSubCategory: C,
    });
});
n(30146);
var nT = n(607399),
    nO = n(123292),
    nS = n(765178),
    nb = n(537652),
    nR = n(962125),
    nv = n(240864),
    nL = n(286509),
    nP = n(89366),
    nM = n(10392),
    nD = n(82498),
    nw = n(202639),
    nk = n(414872),
    nU = n(285373),
    nG = n(304072),
    nF = n(189551),
    nJ = n(594061),
    nV = n(771104),
    nK = n(147421),
    nB = n(723702),
    nH = n(140735),
    nW = n(194261),
    nX = n(703413);
let nz = (e) => {
    let { src: t, alt: n, size: i, "aria-label": s, className: a } = e,
        c = r.useRef(null),
        u = r.useRef(!1),
        d = u.current ? nX.S : nX.Y;
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
                          ((u.current = !0), c.current.classList.remove(nX.Y), c.current.classList.add(nX.S));
                  });
              },
    });
};
var nZ = n(955388);
let nY = e6().memoize(
        (e) =>
            `${e * eZ.EmojiSprites.NonDiversityPerRow}px ${e * Math.ceil(tj.Ay.numNonDiversitySprites / eZ.EmojiSprites.NonDiversityPerRow)}px`,
    ),
    n$ = e6().memoize(
        (e) =>
            `${e * eZ.EmojiSprites.DiversityPerRow}px ${e * Math.ceil(tj.Ay.numDiversitySprites / eZ.EmojiSprites.DiversityPerRow)}px`,
    ),
    nq = r.memo(function (e) {
        let { emoji: t, size: i, surrogateCodePoint: s, allowAnimatedEmoji: a, "aria-label": c, isLocked: u } = e,
            d = (() => {
                if (!t.useSpriteSheet) {
                    let e =
                        null == t.id
                            ? t.url
                            : nC.Ay.getEmojiURL({ id: t.id, animated: a && t.animated, size: eZ.EMOJI_URL_BASE_SIZE });
                    return null != e
                        ? (0, l.jsx)(nz, {
                              className: nZ.N1,
                              "aria-label": c,
                              src: e,
                              size: i,
                              alt: (0, eW.N)(t) ?? "",
                          })
                        : null;
                }
                return (0, l.jsx)("div", {
                    className: o()(nZ.xA, { [nZ.N1]: u }),
                    style: (function (e, t, i) {
                        let s, l, r;
                        if (!e.useSpriteSheet) return;
                        let a = null != e.index ? e.index : 0;
                        e.hasDiversity
                            ? ((s = n(12303)(`./spritesheet-${t}-${i}.png.js`).default),
                              (l = n$(i)),
                              (r = eZ.EmojiSprites.DiversityPerRow))
                            : ((s = n(145519)(`./spritesheet-emoji-${i}.png.js`).default),
                              (l = nY(i)),
                              (r = eZ.EmojiSprites.NonDiversityPerRow));
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
                    children: (0, l.jsx)(nH.A, { children: c }),
                });
            })();
        return (0, l.jsxs)(r.Fragment, {
            children: [
                d,
                u
                    ? (0, l.jsx)("div", {
                          className: nZ.iD,
                          style: { width: i, height: i },
                          children: (0, l.jsx)(nW.LockIcon, { size: "xs", color: "currentColor", className: nZ.fi }),
                      })
                    : null,
            ],
        });
    });
var nQ = n(537911);
function n0(e) {
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
        N = (0, m.bG)([eR.A], () => (n.type === T.i.GUILD ? eR.A.getGuild(n.guildId) : void 0), [n]);
    return (0, l.jsx)(Z.vN, {
        children: (0, l.jsx)("button", {
            ..._,
            className: o()(nQ._X, { [nQ.lG]: s, [nQ.Lh]: r, [nQ.Bx]: a, [h ?? ""]: a, [nQ.TV]: u }),
            "data-type": Q.g.EMOJI,
            "data-id": n.id,
            "data-name": n.name,
            "data-surrogates": "surrogates" in n ? n.surrogates : null,
            "data-animated": n.animated ? "true" : null,
            ref: A,
            children: (0, l.jsx)(nq, {
                "aria-label":
                    ((t = (0, eW.N)(n)),
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
                isLocked: c && !p,
            }),
        }),
    });
}
function n1(e) {
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
        L = (0, m.bG)([te.Ay], () => te.Ay.useReducedMotion),
        P = (0, m.bG)([j.Ay], () => j.Ay.getDisambiguatedEmojiContext(o), [o]),
        M = r.useRef(null),
        { emoji: D, size: w, isDisabled: k, columnIndex: U } = t;
    function G() {
        d.current || f.current || c(t);
    }
    let { ref: F, tabIndex: J, onFocus: V, ...K } = h(U, a) ?? {},
        B =
            R !== `${U}:${a}`
                ? (0, l.jsx)(n0, {
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
                              let e = null == D.id ? tj.Ay.convertNameToSurrogate(D.name) : D.name,
                                  t = M.current.getBoundingClientRect();
                              ((t.x = O.x + (U + 1) * w), v(`${U}:${a}`), (0, nK.h)(x, e, D.id, t));
                          }
                          !(function (e) {
                              if ((e.stopPropagation(), d.current || f.current)) return;
                              let n = e.altKey;
                              (n &&
                                  !j.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(D) &&
                                  C(i),
                                  (0, ek.sF)(ek._2.FAVORITE_EMOJI_TOOLTIP),
                                  u(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n }));
                          })(e);
                      },
                      onContextMenu: function (e) {
                          (0, Y.L3)(e, async () => {
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
                  text: et.intl.formatToPlainString(et.t.glqNsf, { key: (0, nB.isMac)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: B,
              })
            : B,
    );
}
let n2 = (e) => {
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
        P = (0, eO.Ay)(),
        M = e_.Om.getState(),
        [D, w] = r.useState(M.inspectedExpressionPosition),
        [k, U] = (0, nG.A)(null, 300),
        G = r.useRef(null);
    (r.useEffect(
        () =>
            e_.Om.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => w(e),
            ),
        [],
    ),
        r.useEffect(() => {
            nJ.bW.loadIfNecessary();
        }, []));
    let F = i === tN.as.LARGE,
        J = i === tN.as.MEDIUM;
    function V(e) {
        let t = `${e.rowIndex}c${e.columnIndex}`;
        switch (e.type) {
            case tS.EXPAND_OR_COLLAPSE_EMOJIS: {
                let { visibleRowIndex: n, columnIndex: i } = e,
                    c = D.rowIndex === n && D.columnIndex === i,
                    d = e.sectionCollapsedToThreeRows
                        ? c
                            ? (0, ex.M)(P)
                                ? R
                                : L
                            : (0, ex.M)(P)
                              ? y
                              : j
                        : c
                          ? (0, ex.M)(P)
                              ? b
                              : v
                          : (0, ex.M)(P)
                            ? O
                            : S,
                    I = et.intl.string(e.sectionCollapsedToThreeRows ? et.t.NZI2Zk : et.t["/K2RDH"]);
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
                        (0, l.jsx)(Z.vN, {
                            children: (0, l.jsx)("button", {
                                "aria-label": d,
                                ref: p,
                                className: o()(nQ._X, {
                                    [nQ.lG]: F,
                                    [nQ.Lh]: J,
                                    [nQ.Bx]: x && !I,
                                    [A ?? ""]: x,
                                    [nQ.TV]: k === t,
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
                        e.type !== tS.EXPAND_OR_COLLAPSE_EMOJIS ||
                            (t.stopPropagation(),
                            m.current ||
                                f.current ||
                                (s(e, { isFinalSelection: !0, toggleFavorite: !1 }),
                                (0, nF.G)(e.guildId),
                                e.sectionCollapsedToThreeRows || x(),
                                eJ.default.track(eP.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                    collapsed: e.sectionCollapsedToThreeRows,
                                    guild_id: e.guildId,
                                })));
                    },
                    icon: (0, l.jsx)("img", { className: nQ.Kk, src: d, alt: "" }),
                    ariaLabel: I,
                    shouldShowRoundHighlight: !0,
                });
            }
            case tS.EMOJI: {
                let { columnIndex: n, visibleRowIndex: i } = e,
                    r = D.rowIndex === i && D.columnIndex === n;
                return (0, l.jsx)(
                    n1,
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
    function K(e) {
        return (0, l.jsx)("ul", {
            ...d(E),
            className: o()(nQ.ND, { [nQ.HO]: F, [nQ.X$]: J }),
            ref: G,
            children: e.map(V),
        });
    }
    if (p !== tN.s.TOP_GUILD_EMOJI) return K(t);
    let H = t.filter(
            (e) =>
                e.subCategory === tN.tm.TOP_GUILD_EMOJI ||
                (e.subCategory === tN.tm.NEWLY_ADDED_EMOJI &&
                    e.emoji.type === T.i.GUILD &&
                    !ep.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
        ),
        W = t.filter(
            (e) =>
                e.subCategory === tN.tm.NEWLY_ADDED_EMOJI &&
                e.emoji.type === T.i.GUILD &&
                ep.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id),
        );
    return 0 === W.length
        ? K(t)
        : (0, l.jsxs)("div", {
              className: nQ.Ng,
              children: [
                  (0, l.jsx)("div", { className: o()(nQ.V6, { [nQ.$3]: 0 === H.length }), children: K(H) }),
                  (0, l.jsxs)("div", {
                      className: nQ.bc,
                      children: [
                          (0, l.jsx)("div", {
                              className: o()(nQ.eE, { [nQ.eM]: 1 === W.length, [nQ.Wk]: H.length > 0 }),
                              children: K(W),
                          }),
                          (0, l.jsxs)("div", {
                              className: o()(nQ.lD, { [nQ.EI]: F, [nQ.qU]: J, [nQ.Wk]: H.length > 0 }),
                              children: [
                                  (0, l.jsx)(nV.A, { foreground: nQ.rI }),
                                  (0, l.jsx)(B.E, {
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
var n3 = n(618723);
let n4 = (0, eV.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    n5 = (0, eV.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    n8 = (0, eV.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    n6 = (0, eV.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    n7 = (0, eV.xI)(E.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    n9 = (0, eV.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    ie = (0, eV.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    it = r.memo(function (e) {
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
            R = e_.Om.useStore((e) => e.activeCategoryIndex),
            v = (0, w.RQ)((e) => e.searchQuery),
            P = eG.Sf.useSetting(),
            M = (0, m.bG)([G.default], () => G.default.getCurrentUser()),
            D = (0, F.ki)(M),
            { location: k } = (0, p.p)(),
            { analyticsLocations: U } = (0, x.Ay)(),
            [J, V] = r.useState(0),
            [K, H] = r.useState(!1),
            {
                listPadding: W,
                renderRow: X,
                renderSection: z,
                renderSectionHeader: Z,
                renderSectionFooter: Y,
                sectionMarginBottom: $,
                sectionHeaderHeight: q,
                sectionFooterHeight: en,
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
                    O = r.useRef(eP.An1),
                    S = r.useMemo(() => ("" !== n ? nn.A.convert.toCodePoint(n) : ""), [n]),
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
                                    eJ.default.track(eP.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                        location: T.location,
                                        tab: eY.kx.EMOJI,
                                        collapsed: !s,
                                        guild_id: n.id,
                                    }),
                                f(i));
                        },
                        [T, t, f],
                    ),
                    P = r.useCallback((e) => {
                        let { columnIndex: t, visibleRowIndex: n } = e,
                            i = e.type === tS.EMOJI ? (0, eW.N)(e.emoji) : e.name;
                        (O.current !== eP.An1 && window.cancelAnimationFrame(O.current),
                            (O.current = window.requestAnimationFrame(() => {
                                (e_.Om.setInspectedExpressionPosition(t, n, Q.t.MOUSE_EVENT),
                                    e_.Om.setSearchPlaceholder(i),
                                    (O.current = eP.An1));
                            })));
                    }, []),
                    M = (0, m.bG)([ek.HP], () => ek.HP.hasHotspot(ek._2.FAVORITE_EMOJI_TOOLTIP), []),
                    D = r.useMemo(
                        () =>
                            e6().memoize((e, t) => {
                                let n = i[e],
                                    r = d[t.sectionIndex];
                                return (0, l.jsx)(
                                    n2,
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
                                        selectedItemClassName: n3.__invalid_selectedItem,
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
                            e6().memoize((e) => {
                                let n = d[e];
                                if (null == n) return;
                                let { guild: i, pack: s, categoryId: r, type: a, sectionId: u } = n;
                                if (a === tN.s.SEARCH_RESULTS) return;
                                let m = (function (e) {
                                        let { type: t, guild: n, categoryId: i } = e;
                                        return t === tN.s.PACK
                                            ? (0, l.jsx)(L.t, {
                                                  size: "custom",
                                                  color: "currentColor",
                                                  height: 16,
                                                  width: 16,
                                              })
                                            : t === tN.s.GUILD
                                              ? null == n
                                                  ? null
                                                  : (0, l.jsx)(tx.A, { guild: n, height: 16, width: 16 })
                                              : null == i
                                                ? null
                                                : (0, l.jsx)(tC, {
                                                      categoryId: i,
                                                      height: 16,
                                                      width: 16,
                                                      size: "custom",
                                                  });
                                    })(n),
                                    f = s?.name ?? i?.name;
                                null != r && (f = (0, eK.Nu)(r, i?.name));
                                let E = y === e,
                                    I = n.isNitroLocked,
                                    g = I && !E,
                                    h = I && E,
                                    p =
                                        a === tN.s.PACK
                                            ? (0, l.jsx)("div", {
                                                  className: n3.uE,
                                                  children: (0, l.jsx)(nO.Q, {
                                                      text: et.intl.string(ee.default["2zxYCx"]),
                                                      textVariant: "text-sm/medium",
                                                      variant: "secondary",
                                                      "aria-label": `${et.intl.string(ee.default["2zxYCx"])} ${s.name}`,
                                                      onKeyDown: (e) => {
                                                          e.key !== nl.dh.ESCAPE && e.stopPropagation();
                                                      },
                                                      onClick: () => c(s.id),
                                                  }),
                                              })
                                            : void 0;
                                return (0, l.jsx)(
                                    nL.A,
                                    {
                                        className: o()(n3.wx, x, { [n3.RA]: g, [n3.sp]: h }),
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
                    k = (0, tT.k0)(),
                    U = r.useCallback(
                        (e, n) => {
                            let i = d[e],
                                s = R(e),
                                r = b(e),
                                a = i.type === tN.s.PACK && 0 === i.count;
                            return (0, l.jsx)(
                                "div",
                                {
                                    role: "rowgroup",
                                    className: o()(n3.Wy, {
                                        [n3.YD]: e === d.length - 1,
                                        [n3.jl]: t.has(i.sectionId) || a,
                                        [n3.cW]: i.isNitroLocked,
                                        [n3.T5]: s || r,
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
                                    ? (0, l.jsx)(nk.ap, {})
                                    : (0, l.jsx)(nk.Ay, {})
                                : b(e)
                                  ? (0, l.jsx)("div", { className: n3.pQ })
                                  : null,
                        [R, b, k],
                    ),
                    F = r.useCallback((e) => (R(e) ? 41 : 33 * !!b(e)), [R, b]),
                    J = r.useCallback(
                        (e) =>
                            e === d.length - 1 ||
                            t.has(d[e]?.sectionId) ||
                            (d[e]?.type === tN.s.PACK && d[e]?.count === 0) ||
                            R(e) ||
                            b(e)
                                ? 0
                                : n9,
                        [t, d, R, b],
                    );
                return {
                    listPadding: r.useMemo(() => ["" !== u ? n6 : n4, n5, n8, 0], [u]),
                    renderRow: D,
                    renderSection: U,
                    renderSectionHeader: w,
                    renderSectionFooter: G,
                    sectionMarginBottom: J,
                    sectionHeaderHeight: r.useCallback((e) => (d[e].type === tN.s.SEARCH_RESULTS ? 0 : n7), [d]),
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
                activeSectionIndex: J,
                emojiListRef: a,
            }),
            ei = r.useCallback(
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
            ei(a.current?.getScrollerNode()?.scrollTop ?? 0);
        }, [a, ei, E, I, v]);
        let el = (0, eN.Fk)({
            activeCategoryIndex: R,
            isScrolling: b,
            listRef: a,
            onActiveCategoryIndexChange: function (e) {
                "" === v && e_.Om.setActiveCategoryIndex(e);
            },
            scrollOffset: 0,
            searchQuery: v,
            disableForSearch: !1,
        });
        (0, eN.FV)({ searchQuery: v, activeCategoryIndex: R, listRef: a });
        let er = r.useCallback(
                (e) => {
                    (el(e),
                        ei(e),
                        ii({ emojiListRef: a, sectionDescriptors: E, scrollTop: e, searchQuery: v, setShowUpsell: H }));
                },
                [el, ei, a, E, v, H],
            ),
            ea = E.length > 0;
        (r.useEffect(() => {
            K &&
                (eJ.default.track(eP.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: es.e.EMOJI_PICKER_FLOATING_UPSELL,
                    location: k,
                    location_stack: U,
                }),
                (0, nM.sq)(eP.U7l.PREMIUM_UPSELL_VIEWED, U, () => (0, nD.uq)(es.e.EMOJI_PICKER_FLOATING_UPSELL)));
        }, [k, U, K]),
            r.useEffect(() => {
                "" !== v && H(!1);
            }, [v]));
        let eo = r.useRef(null);
        return (
            r.useEffect(
                () => (
                    clearTimeout(eo.current),
                    (eo.current = setTimeout(() => {
                        (ea
                            ? nS.O.announce(et.intl.string(et.t.uZ4F2O), "polite")
                            : nS.O.announce(et.intl.string(et.t.IxxiKF), "assertive"),
                            (eo.current = null));
                    }, 200)),
                    () => {
                        clearTimeout(eo.current);
                    }
                ),
                [ea, v],
            ),
            (0, l.jsxs)("div", {
                className: n3.AD,
                children: [
                    ea
                        ? (0, l.jsx)(nR.A, {
                              role: "none presentation",
                              className: n3.p_,
                              listPadding: W,
                              onScroll: er,
                              renderRow: X,
                              renderSection: z,
                              renderSectionHeader: Z,
                              renderSectionFooter: Y,
                              rowCount: C,
                              rowCountBySection: I,
                              rowHeight: c + 2 * ie,
                              sectionHeaderHeight: q,
                              sectionMarginBottom: $,
                              sectionFooterHeight: en,
                              stickyHeaders: !0,
                              ref: a,
                          })
                        : (0, l.jsx)(nb.A, {
                              message: (0, l.jsx)(B.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: et.intl.string(et.t.IxxiKF),
                              }),
                              className: n3.BZ,
                          }),
                    D || nT.Fr
                        ? null
                        : (0, l.jsx)(nw.d, {
                              showUpsell: K,
                              text:
                                  ((t = (0, e2.Dd)(es.PremiumTypes.TIER_2)),
                                  et.intl.format(et.t.gMVjeS, {
                                      nitroTierName: t,
                                      onClick: () => {
                                          f({ type: tR.PREMIUM, emojiDescriptor: void 0 });
                                      },
                                  })),
                              button: ((n = (0, nP.qD)()), (0, e2.LE)(n, es.pe.TIER_2) ?? et.intl.string(et.t.BmJkbd)),
                              buttonAnalyticsObject: { section: eP.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                              leadingAction: (0, l.jsx)(nU.l, {
                                  size: "sm",
                                  className: n3.ij,
                                  location: N.A.PREMIUM_WISHLIST_EMOJI_UPSELL,
                              }),
                          }),
                ],
            })
        );
    }),
    ii = e6().throttle(
        function (e) {
            let { emojiListRef: t, sectionDescriptors: n, scrollTop: i, searchQuery: s, setShowUpsell: l } = e;
            l(
                (0, nv.s)({ listRef: t, searchQuery: s, nitroLockedSectionStates: n, scrollTop: i })
                    .areOnlyNitroLockedSectionsVisible,
            );
        },
        300,
        { leading: !1, trailing: !0 },
    );
var is = n(506774),
    il = n(28863),
    ir = n(277984),
    ia = n(404374),
    io = n(780964),
    ic = n(766075),
    iu = n(166403),
    id = n(506150);
let im = "premiumRetentionEmojiPickerNotice",
    iE = is.w.get(im),
    iI = function (e) {
        let { closePopout: t, channel: n } = e,
            [i, s] = r.useState(!1),
            { subscription: a, hasFetchedSubscriptions: o } = (0, m.cf)([iu.A], () => ({
                subscription: iu.A.getPremiumSubscription(),
                hasFetchedSubscriptions: iu.A.hasFetchedSubscriptions(),
            }));
        if (
            (r.useEffect(() => {
                o || (0, ir.hP)();
            }, [o]),
            null == a || !(0, e2.PK)(a.status) || i)
        )
            return null;
        let c = a.status === eP.Dmq.PAST_DUE ? (0, e2.ji)(a).expiresDate : eu()(a.currentPeriodStart).add(es.ph),
            u = `${a.id}:${c.toISOString()}`;
        if (iE === u) return null;
        let d =
            e2.Ay.getPremiumType(a.planId) === es.PremiumTypes.TIER_0
                ? ia.k0.PREMIUM_TIER_0
                : e2.Ay.getPremiumType(a.planId) === es.PremiumTypes.TIER_1
                  ? ia.k0.PREMIUM_TIER_1
                  : ia.k0.PREMIUM_TIER_2;
        return (0, l.jsxs)(B.E, {
            variant: "text-xs/medium",
            color: "text-default",
            className: id.g$,
            children: [
                (0, l.jsx)(L.t, { size: "md", className: id.lu, color: d }),
                (0, l.jsxs)("div", {
                    className: id.Xn,
                    children: [
                        (0, l.jsx)(B.E, {
                            variant: "text-xs/normal",
                            children: et.intl.format(et.t.bTMjiO, {
                                planName: e2.Ay.getTierDisplayNameByPlanId(a.planId),
                                endsAt: c.toDate(),
                            }),
                        }),
                        (0, l.jsx)("div", {
                            children: (0, l.jsx)(il.Anchor, {
                                onClick: () => {
                                    ((0, eK.xf)(n), t(), (0, ic.openUserSettings)(io.X.NITRO_PANEL));
                                },
                                children: et.intl.string(et.t.W3aavh),
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(ey.D, {
                    onClick: () => {
                        (is.w.set(im, u), (iE = u), s(!0));
                    },
                    children: (0, l.jsx)(ej.P, { size: "md", color: "currentColor", className: id.YF }),
                }),
            ],
        });
    };
var ig = n(148361);
let ih = (0, eV.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    ip = (0, eV.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT);
function iA(e) {
    return e.stopPropagation();
}
function i_(e, t) {
    e_.Om.setInspectedExpressionPosition(e, t, Q.t.GRID_NAVIGATOR_EVENT);
}
let iN = u()(eK.bo, 200),
    iC = u()(eK.Wi, 200),
    ix = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    iy = r.memo(function (e) {
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
                emojiSize: b = tN.as.MEDIUM,
                hasTabWrapper: R = !1,
                onSelectEmoji: v,
                containerWidth: L,
                onNavigateAway: P,
                persistSearch: M,
                className: D,
                headerClassName: k,
                analyticsOverride: U = ix,
                searchProps: J = {},
                wrapper: K,
                shouldHidePickerActions: B = !1,
                messageId: H,
                renderHeader: W,
                listHeaderClassName: X,
                categoryListClassName: z,
                showOnlyUnicode: Z = !1,
                showAddEmojiButton: Y,
                ref: $,
                isViewingEmojiPacks: q = !1,
                onViewEmojiPacksChange: ee,
            } = e,
            { onFocus: en, onKeyDown: ei, autoFocus: el = !0, accessory: ec } = J,
            eu = (0, m.bG)([eF.Ay], () => (null != E ? eF.Ay.getDefaultChannel(E) : null), [E]),
            [ed, em] = r.useState(null),
            ef = r.useRef(""),
            eE = (0, w.RQ)((e) => e.searchQuery),
            eI = r.useRef(null),
            eg = r.useRef(null),
            eh = r.useRef(null),
            eC = null != ee && !Z && (0, e5.z)(c),
            ex = r.useCallback((e) => {
                (eh.current?.focus(), (0, O.M5)(e));
            }, []),
            ey =
                ((t = (0, m.bG)([V.A], () => (eC ? V.A.getPacks() : eo), [eC])),
                (n = (0, m.bG)(
                    [ea.A],
                    () => (eC ? ea.A.frecencyWithoutFetchingLatest.pinnedEmojiPacks?.packIds : void 0),
                    [eC],
                )),
                r.useMemo(
                    () =>
                        eC && null != n && 0 !== n.length
                            ? n.map((e) => t.find((t) => t.id === e)).filter((e) => null != e)
                            : eo,
                    [eC, t, n],
                ));
        null == u && null != eu && (u = eu);
        let ej = u?.getGuildId() ?? E ?? null,
            [eT, eO] = r.useState(!1),
            eS = r.useRef(null),
            eb = G.default.getCurrentUser(),
            ev = (0, F.ki)(eb),
            eL = eT && ev;
        r.useImperativeHandle($, () => ({ onPickerOpen: tr }));
        let { location: eM } = (0, p.p)(),
            { page: eD, section: eV, object: eB, openPopoutType: eH, popoutLocation: eY } = U,
            eq = r.useMemo(() => ({ ...eM, section: eV ?? eP.JJy.EMOJI_PICKER_POPOUT }), [eM, eV]),
            { analyticsLocations: eQ } = (0, x.Ay)(N.A.EMOJI_PICKER),
            { diversitySurrogate: e0 } = (0, m.cf)([j.Ay], () => ({ diversitySurrogate: j.Ay.diversitySurrogate })),
            e1 = (0, eK.sL)(eE, u, c, Z),
            e2 = null == e1 ? 0 : e1.locked.length + e1.unlocked.length,
            e3 = eG.iM.useSetting(),
            e8 = r.useMemo(() => new Set(e3), [e3]),
            e7 = r.useCallback((e) => {
                eG.iM.updateSetting(Array.from(e));
            }, []),
            e9 = (0, eN.oV)({
                gridWrapperRef: eI,
                containerWidth: L,
                showingEmptyState: q,
                listPaddingLeft: ip,
                listScrollbarWidth: 8,
            }),
            {
                rowCountBySection: te,
                sectionDescriptors: tt,
                emojiGrid: tn,
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
                    E = r.useMemo(() => (d ? tj.Ay.getCategories() : f), [f, d]),
                    I = (0, m.bG)([eR.A], () => eR.A.getGuild(t?.getGuildId()), [t]),
                    g = t?.getGuildId() ?? n,
                    h = (0, m.bG)([j.Ay], () => j.Ay.getDisambiguatedEmojiContext(g), [g]),
                    p = (0, eK.XI)(g),
                    A = (0, eK.Fj)(g),
                    _ = (0, eK.QZ)(g),
                    { topEmojis: N, newlyAddedEmojis: C } = (0, ez.A)(g, s),
                    x = (0, m.yK)([tO.Ay], () => tO.Ay.getFlattenedGuildIds(), []),
                    y = (0, m.bG)([j.Ay], () => j.Ay.expandedSectionsByGuildIds),
                    T = (0, m.bG)([G.default], () => G.default.getCurrentUser()),
                    O = (0, F.ki)(T),
                    S = (0, F.ki)(T, es.PremiumTypes.TIER_2),
                    b = (0, tT.k0)(),
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
                                [E, I] = e6().partition(l, (e) => {
                                    let n = eW.Ay.isEmojiDisabled({ emoji: e, channel: t, intention: s });
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
                                                a.sectionId === tN.s.TOP_GUILD_EMOJI
                                                    ? (0, eK.DA)(N, C, e.id ?? e.uniqueName ?? e.name)
                                                    : tN.tm.NONE,
                                        }));
                                if ((x.push(i), !u)) {
                                    if (p && e === _ - 1) {
                                        let t = x[e];
                                        t.push({
                                            type: 1,
                                            guildId: h.id,
                                            name: et.intl.string(et.t.NZI2Zk),
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
                                    type: tN.s.SEARCH_RESULTS,
                                    sectionId: tN.s.SEARCH_RESULTS,
                                    count: l.unlocked.length,
                                    isNitroLocked: !1,
                                }),
                                0 !== l.locked.length &&
                                    g(l.locked, {
                                        type: tN.s.PREMIUM_UPSELL,
                                        categoryId: tN.R2.PREMIUM_UPSELL,
                                        sectionId: tN.s.PREMIUM_UPSELL,
                                        count: l.locked.length,
                                        isNitroLocked: !O,
                                    }));
                        else {
                            let e = E.includes(tN.R2.CUSTOM) ? tN.R2.CUSTOM : tj.Ay.getCategories()[0];
                            for (let n of E) {
                                if (n === e)
                                    for (let e of u) {
                                        let t = e6().compact(
                                            e.emojis.map((e) => {
                                                let { id: t } = e;
                                                return h.getById(t);
                                            }),
                                        );
                                        g(t, {
                                            type: tN.s.PACK,
                                            pack: e,
                                            sectionId: `pack:${e.id}`,
                                            count: t.length,
                                            isNitroLocked: !S,
                                        });
                                    }
                                if (n === tN.R2.CUSTOM) {
                                    function j(e) {
                                        let i = R.get(e);
                                        if (null == i) return;
                                        let l = i.filter(
                                            (n) =>
                                                !tb.includes(
                                                    eW.Ay.getEmojiUnavailableReason({
                                                        emoji: n,
                                                        channel: t ?? eF.Ay.getDefaultChannel(e),
                                                        intention: s,
                                                    }),
                                                ),
                                        );
                                        if (0 === l.length) return;
                                        let r = eR.A.getGuild(e),
                                            a =
                                                b ||
                                                (!O &&
                                                    eW.Ay.isEmojiCategoryNitroLocked({
                                                        categoryEmojis: l,
                                                        channel: t,
                                                        intention: s,
                                                    }));
                                        g(l, {
                                            categoryId: n,
                                            guild: r,
                                            type: tN.s.GUILD,
                                            sectionId: null != r ? r.id : (0, ty.A)(),
                                            count: l.length,
                                            isNitroLocked: a,
                                        });
                                    }
                                    if ((null != I && j(I.id), (0, eZ.isExternalEmojiAllowedForIntention)(s)))
                                        for (let e of x) (null == I || I.id !== e) && j(e);
                                } else if (n === tN.R2.TOP_GUILD_EMOJI) {
                                    if (null != I) {
                                        let { allEmojis: e } = (0, eX.W)({ topEmojis: N, newlyAddedEmojis: C });
                                        e.length > 0 &&
                                            g(e, {
                                                categoryId: n,
                                                guild: eR.A.getGuild(I.id),
                                                type: tN.s.TOP_GUILD_EMOJI,
                                                sectionId: tN.s.TOP_GUILD_EMOJI,
                                                count: e.length,
                                                isNitroLocked: !1,
                                            });
                                    }
                                } else if (n === tN.R2.RECENT) {
                                    let e = (s === eZ.EmojiIntention.REACTION ? _ : A).filter(
                                        (e) => !eW.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }),
                                    );
                                    g(e, {
                                        categoryId: n,
                                        type: tN.s.RECENT,
                                        sectionId: tN.s.RECENT,
                                        count: e.length,
                                        isNitroLocked: !1,
                                    });
                                } else if (n === tN.R2.FAVORITES) {
                                    let e = p.filter(
                                        (e) => !eW.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }),
                                    );
                                    0 !== e.length &&
                                        g(e, {
                                            categoryId: n,
                                            type: tN.s.FAVORITES,
                                            sectionId: tN.s.FAVORITES,
                                            count: e.length,
                                            isNitroLocked: !1,
                                        });
                                } else {
                                    let e = tj.Ay.getByCategory(n);
                                    null != e &&
                                        g(e, {
                                            categoryId: n,
                                            type: tN.s.UNICODE,
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
                gridWidth: e9,
                fallbackGuildId: ej,
                channel: u,
                pickerIntention: c,
                emojiSearchResults: e1,
                collapsedSections: e8,
                emojiPaddingHorizontal: ih,
                emojiSpriteSize: b,
                pinnedPacks: ey,
                showOnlyUnicode: Z,
            }),
            { newlyAddedEmojis: tl } = (0, ez.A)(ej, c);
        ((i = r.useRef({ intention: c, isBurstReaction: eT, analyticsObject: eB })),
            r.useEffect(() => {
                i.current.intention === eZ.EmojiIntention.REACTION && e$(i.current);
            }, []));
        let tr = r.useCallback(() => {
                let e = tl.length > 0 ? tl[0].id : null;
                ((0, eA.uV)(ej, e), e$({ intention: c, isBurstReaction: eT, analyticsObject: eB }));
            }, [tl, ej, c, eT, eB]),
            ta = r.useCallback(() => {
                (S(),
                    P?.(),
                    (0, eU.A)({
                        subscriptionTier: es.pe.TIER_2,
                        analyticsLocations: [...eQ, N.A.EMOJI_PACKS],
                        analyticsObject: { ...eq, object: eP.ZSU.EMOJI },
                    }));
            }, [eq, eQ, S, P]),
            to = (function (e) {
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
                            let u = eW.Ay.getEmojiUnavailableReason({ emoji: r, channel: n, intention: t });
                            if (i.toggleFavorite)
                                return void (c.isFavoriteEmojiWithoutFetchingLatest(r) || null != u
                                    ? (0, g.Sw)(r)
                                    : (o?.(e), (0, g.V4)(r)));
                            if (u !== eZ.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) {
                                if (u === eZ.EmojiDisabledReasons.PREMIUM_LOCKED) {
                                    (a?.(e, u), l({ type: 0, emojiDescriptor: e }));
                                    return;
                                }
                                if (u === eZ.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED && r.type === T.i.GUILD) {
                                    (a?.(e, u), l({ type: 1, guildId: r.guildId, emojiId: r.id }));
                                    return;
                                }
                                u !== eZ.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE &&
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
                    e?.type === tR.PREMIUM && e.emojiDescriptor?.emoji?.type === T.i.PACK ? ta() : em(e);
                },
                emojiSelectAnalytics: (e, t) => {
                    "" !== eE
                        ? (0, eK.Wf)({
                              emoji: e.emoji,
                              location: { ...eq, object: eP.ZSU.EMOJI },
                              searchQuery: eE,
                              isLocked: null != t,
                              intention: c,
                              messageId: H,
                          })
                        : (0, eK._7)({
                              emoji: e.emoji,
                              location: { ...eq, object: eB ?? eP.ZSU.EMOJI, ...(null != eD && { page: eD }) },
                              pickerIntention: c,
                              category: e.category,
                              subCategory: e.subCategory,
                              position: e.columnIndex + 1,
                              newlyAddedHighlight:
                                  e.subCategory === tN.tm.NEWLY_ADDED_EMOJI && ep.isNewerThanLastSeen(ej, e.emoji.id),
                              isBurstReaction: eT,
                              messageId: H,
                              lockedReason: t,
                              visibleRowIndex: e.visibleRowIndex,
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, eK.C5)({ emoji: e.emoji, location: { ...eq, object: eP.ZSU.EMOJI } });
                },
            }),
            tc = r.useCallback(() => {
                (S(), P?.());
            }, [S, P]),
            {
                getItemProps: tu,
                getRowProps: td,
                gridContainerProps: tm,
                handleGridContainerKeyDown: tf,
                isUsingKeyboardNavigation: tE,
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
                            if (e.type === tS.EMOJI) {
                                if (e.emoji.type === T.i.PACK)
                                    return void l(e, {
                                        isFinalSelection: !i.shiftKey,
                                        toggleFavorite: i.altKey,
                                        isBurst: u,
                                    });
                                if (null != e.emoji && i.altKey)
                                    return void (f.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                        ? (0, g.Sw)(e.emoji)
                                        : ((0, eK.C5)({ emoji: e.emoji, location: { ...t, object: eP.ZSU.EMOJI } }),
                                          (0, g.V4)(e.emoji)));
                                let r = {
                                    page: null != c ? eP.liQ.GUILD_CHANNEL : eP.liQ.DM_CHANNEL,
                                    section: eP.JJy.EMOJI_PICKER_POPOUT,
                                    object: eP.ZSU.EMOJI,
                                };
                                (u &&
                                    (r = {
                                        page: null != c ? eP.liQ.GUILD_CHANNEL : eP.liQ.DM_CHANNEL,
                                        section: eP.JJy.EMOJI_PICKER_POPOUT,
                                        object: eP.ZSU.EMOJI,
                                    }),
                                    (0, eK._7)({
                                        emoji: e.emoji,
                                        location: r,
                                        pickerIntention: n,
                                        category: e.category,
                                        subCategory: e.subCategory,
                                        newlyAddedHighlight:
                                            e.subCategory === tN.tm.NEWLY_ADDED_EMOJI &&
                                            ep.isNewerThanLastSeen(c, e.emoji.id),
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
                    } = (0, eN.Ff)({
                        columnCounts: i,
                        gridNavigatorId: tN.lq,
                        itemGrid: a,
                        itemList: o,
                        onGridNavigatorItemSelect: E,
                        onGridNavigatorPositionChange: i_,
                    });
                return (
                    r.useEffect(
                        () =>
                            e_.Om.subscribe(
                                (e) => e.inspectedExpressionPosition,
                                (e) => {
                                    if (null == e) return;
                                    let { columnIndex: t, rowIndex: n, source: i } = e;
                                    i !== Q.t.GRID_NAVIGATOR_EVENT && I({ type: d.n.SET_FOCUSED_POSITION, x: t, y: n });
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
                analyticsLocation: eq,
                columnCounts: ti,
                onSelectEmoji: v,
                onSelectPackEmoji: to,
                emojiGrid: tn,
                emojiList: eg,
                channelGuildId: ej,
                isBurstReaction: eL,
            });
        (((e, t) => {
            let [n, i] = r.useState(null);
            (r.useEffect(() => {
                null != n && (t.current?.scrollToSectionTop(n), i(null));
            }, [t, n]),
                r.useEffect(() => {
                    i(e_.Om.getState().activeCategoryIndex);
                }, [e]));
        })(L, eg),
            r.useLayoutEffect(() => {
                el && eh.current?.focus();
            }, [L, e0, eh, el]),
            (s = r.useRef(q)),
            r.useEffect(() => {
                (el && s.current && !q && eh.current?.focus(), (s.current = q));
            }, [el, q, eh]),
            r.useEffect(() => {
                M || (0, w.Ri)("");
            }, [M]),
            r.useEffect(
                () => (
                    eJ.default.track(eP.HAw.OPEN_POPOUT, {
                        type: eH ?? "Emoji Picker",
                        guild_id: ej,
                        location: eY,
                        ...(0, C.dI)(u),
                    }),
                    () => {
                        (iN.cancel(), iC.cancel());
                    }
                ),
                [eH, ej, eY, u],
            ),
            (0, A.Ay)(() => ((0, eK.V$)({ intention: c, location: eq }), (ef.current = eE), e_.Om.resetStoreState)),
            r.useEffect(() => () => (0, ek.sF)(ek._2.FAVORITE_EMOJI_TOOLTIP), []),
            r.useLayoutEffect(() => {
                let { columnIndex: e, rowIndex: t } = e_.Om.getState().inspectedExpressionPosition;
                tn[t]?.[e] == null && 0 !== e && e_.Om.setInspectedExpressionPosition(0, 0);
            }, [tn]),
            r.useEffect(() => {
                if (("" === ef.current && "" !== eE && (0, eK.EG)(eq, c), "" !== eE && ef.current !== eE)) {
                    let e = e_.Om.getAnalyticsId();
                    0 === e2
                        ? iN({ location: eq, searchQuery: eE, intention: c, loadId: e })
                        : iC({
                              totalResults: e2,
                              numEmojiLocked: e1?.locked.length ?? 0,
                              location: eq,
                              searchQuery: eE,
                              intention: c,
                              loadId: e,
                          });
                }
                ef.current = eE;
            }, [eE, eq, e2, e1, c]));
        let tI = K ?? (R ? "div" : I.l),
            tg = null != e9;
        function th(e, t) {
            to(e, { ...t, isBurst: eL });
        }
        ed?.type === tR.PREMIUM
            ? (a = (0, l.jsx)(ig.default, {
                  onUpsellClicked: tc,
                  emojiDescriptor: ed.emojiDescriptor,
                  pickerIntention: c,
                  analyticsLocation: eq,
                  onClose: () => em(null),
                  channel: u,
              }))
            : ed?.type === tR.ROLE_SUBSCRIPTION &&
              (a = (0, l.jsx)(ew, { onClose: () => em(null), guildId: ed.guildId, emojiId: ed.emojiId }));
        let tp = (0, _.A)((e, t, n) => {
                th(
                    {
                        type: tS.EMOJI,
                        emoji: e,
                        isDisabled: !e.available,
                        size: b,
                        rowIndex: 0,
                        columnIndex: t,
                        visibleRowIndex: 0,
                        category: tN.s.PACK,
                        subCategory: tN.tm.NONE,
                    },
                    n,
                );
            }),
            tA = (0, l.jsx)(nA, {
                channel: u,
                pickerIntention: c,
                emojiListRef: eg,
                onKeyDown: (e) => {
                    (tf?.(e), ei?.(e));
                },
                searchBarRef: eh,
                onFocus: en,
                autoFocus: el,
                accessory: ec,
                headerClassName: k,
                diversitySurrogate: e0,
                isBurstReaction: eT,
                onBurstReactionToggle: function () {
                    (eO(!eT), eh.current?.focus());
                },
                burstToggleRef: eS,
                renderHeader: W,
                showAddEmojiButton: Y,
                closePopout: S,
            }),
            t_ = [];
        j.Ay.hasFavoriteEmojis(ej) || t_.push(f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let tC = (0, l.jsxs)(r.Fragment, {
                children: [
                    R ? tA : null,
                    (0, l.jsxs)("div", {
                        className: np.uK,
                        ref: eI,
                        children: [
                            (0, l.jsx)(iI, { channel: u, closePopout: S }),
                            (0, l.jsx)(y.Ay, {
                                contentTypes: t_,
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    if (t === f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                        return (0, l.jsx)(tq, { markAsDismissed: () => n(ts.i.UNKNOWN) });
                                },
                            }),
                            B
                                ? null
                                : (0, l.jsx)("div", {
                                      className: np.Iy,
                                      id: tN.lq,
                                      ...tm,
                                      children: tg
                                          ? (0, l.jsx)(it, {
                                                collapsedSections: e8,
                                                diversitySurrogate: e0,
                                                emojiGrid: tn,
                                                emojiListRef: eg,
                                                emojiSize: b,
                                                getEmojiItemProps: tu,
                                                getEmojiRowProps: td,
                                                gridWidth: e9,
                                                isUsingKeyboardNavigation: tE,
                                                onEmojiSelect: th,
                                                onRemovePack: ex,
                                                setUpsellConfigs: em,
                                                rowCount: tn.length,
                                                rowCountBySection: te,
                                                sectionDescriptors: tt,
                                                setCollapsedSections: e7,
                                                channelGuildId: ej,
                                                messageId: H,
                                                isBurstReaction: eL,
                                                listHeaderClassName: X,
                                            })
                                          : null,
                                  }),
                        ],
                    }),
                    (0, l.jsx)(nj, { emojiGrid: tn, className: np.qV, guildId: ej, pickerIntention: c, channel: u }),
                    a,
                    c === eZ.EmojiIntention.REACTION
                        ? (0, l.jsx)(e4, { targetElementRef: eS, shouldShow: eT && !ev, onDismiss: () => eO(!1) })
                        : null,
                ],
            }),
            tx = (0, l.jsx)(h.A, {
                ...eq,
                children: (0, l.jsxs)(tI, {
                    id: tN.Do,
                    "aria-labelledby": R && !q ? tN.k1 : void 0,
                    role: R && !q ? "tabpanel" : void 0,
                    className: o()(np.iE, { [np.r6]: R, [np.cB]: eL }),
                    children: [
                        R || q ? null : tA,
                        (0, l.jsx)("div", {
                            className: o()(np.Fb, D, { [np.eW]: q && !R }),
                            onScroll: iA,
                            children: q ? (0, l.jsx)(er, { onBack: () => ee?.(!1), onSelectEmoji: tp }) : tC,
                        }),
                        B || q
                            ? null
                            : (0, l.jsx)(tY, {
                                  className: o()(np.jv, z),
                                  emojiListRef: eg,
                                  sectionDescriptors: tt,
                                  intention: c,
                                  channel: u,
                                  fallbackGuildId: ej,
                                  showOnlyUnicode: Z,
                                  pinnedPacks: ey,
                                  onViewEmojiPacks: eC ? () => ee?.(!0) : void 0,
                              }),
                    ],
                }),
            });
        return (0, l.jsx)(x.f5, { value: eQ, children: tx });
    });
