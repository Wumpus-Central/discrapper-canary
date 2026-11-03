(n.d(t, { A: () => ij }), n(321073));
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
    O = n(490035),
    S = n(934499),
    b = n(331322),
    R = n(866665),
    v = n(408278),
    L = n(477155),
    P = n(403581),
    M = n(661531),
    D = n(534514),
    w = n(62010),
    k = n(151271),
    U = n(465794),
    G = n(683973),
    F = n(287809),
    J = n(474090),
    V = n(186280),
    K = n(182159),
    B = n(118057),
    H = n(834730),
    W = n(847374),
    X = n(320448),
    z = n(834040),
    Z = n(499373),
    Y = n(559106),
    $ = n(442433),
    q = n(788026),
    Q = n(915089),
    ee = n(60587),
    et = n(765036),
    en = n(105292),
    ei = n(126904);
let es = r.memo(function (e) {
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
        g = en.intl.string(E ? en.t.iTcuma : en.t.dcl9MQ),
        h = en.intl.string(a ? et.default["2zxYCx"] : et.default.Tvdb5N),
        p = r.useMemo(() => t.emojis.filter((e) => e.available), [t.emojis]),
        A = r.useMemo(() => [p.length], [p.length]),
        _ = (0, Q.GV)(),
        {
            getContainerProps: N,
            getItemProps: C,
            getRowProps: x,
        } = (0, B.A)({
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
        className: ei.nM,
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
                        className: ei.DD,
                        direction: "horizontal",
                        gap: 4,
                        children: [
                            (0, l.jsx)(D.D, { className: ei.UU, id: m, variant: "text-sm/semibold", children: t.name }),
                            (0, l.jsx)(H.E, {
                                color: "text-subtle",
                                variant: "text-sm/medium",
                                children: en.intl.format(et.default.UA8cNe, { count: p.length }),
                            }),
                            (0, l.jsx)(R.m, {
                                text: g,
                                children: (0, l.jsx)(v.K, {
                                    autoFocus: i,
                                    "aria-controls": f,
                                    "aria-describedby": m,
                                    "aria-expanded": E,
                                    "aria-label": g,
                                    icon: E ? W.a : X._,
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
                            icon: a ? z.MinusIcon : Z.T,
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
                className: o()(ei.gm, { [ei.jE]: E }),
                tabIndex: t.available && p.length > 0 ? y.tabIndex : -1,
                children: (0, l.jsx)("div", {
                    className: ei.nI,
                    ...x(0),
                    children: p.map((e, i) => {
                        let { ref: s, ...r } = C(i, 0);
                        return (0, l.jsx)(
                            R.m,
                            {
                                text: `:${e.name}:`,
                                ariaHidden: !0,
                                asContainer: !0,
                                children: (0, l.jsx)(Y.vN, {
                                    children: (0, l.jsx)("button", {
                                        ...r,
                                        ref: s,
                                        "aria-label": `:${e.name}:`,
                                        className: ei.Z8,
                                        "data-type": ee.g.EMOJI,
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
                                            (0, $.L3)(e, async () => {
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
                                        children: (0, l.jsx)(q.A, {
                                            animated: e.animated,
                                            alt: "",
                                            className: ei.Zg,
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
var el = n(202541),
    er = n(429800);
function ea(e) {
    let { onBack: t, onSelectEmoji: n } = e,
        i = en.intl.string(et.default.Nwj3fK),
        s = r.useRef(null),
        a = (0, k.RQ)((e) => e.showSelectedEmojiPackId),
        o = (0, m.bG)([K.A], () => K.A.getPacks()),
        c = null != a && o.some((e) => e.id === a),
        u = (0, m.bG)([F.default], () => F.default.getCurrentUser()),
        d = (0, J.ki)(u, el.PremiumTypes.TIER_2);
    (r.useLayoutEffect(() => {
        c &&
            (s.current?.scrollIntoView({ block: "start" }),
            s.current?.querySelector("button[aria-expanded]")?.focus({ preventScroll: !0 }));
    }, [c, a]),
        (0, V.i3)(d));
    let f = (0, G.k)().pinnedEmojiPacks?.packIds,
        E = r.useCallback((e) => {
            (0, S.Ls)(e.id);
        }, []),
        I = r.useCallback((e) => {
            (0, S.M5)(e.id);
        }, []);
    return (0, l.jsxs)("div", {
        className: er.kL,
        children: [
            (0, l.jsx)("div", { "aria-hidden": !0, className: er.Tp }),
            (0, l.jsx)("div", {
                className: er.wx,
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
                                                    variant: "heading-md/semibold",
                                                    children: en.intl.string(et.default["0+5+Oy"]),
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
                            : (0, l.jsx)(U.A, {
                                  buttonTextOverride: en.intl.string(en.t.hIVbiP),
                                  size: "sm",
                                  subscriptionTier: el.pe.TIER_2,
                              }),
                    ],
                }),
            }),
            (0, l.jsx)("div", {
                className: er.p_,
                children: o.map((e, t) =>
                    (0, l.jsxs)(
                        r.Fragment,
                        {
                            children: [
                                t > 0 ? (0, l.jsx)("hr", { className: er.yF }) : null,
                                (0, l.jsx)(
                                    es,
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
var eo = n(617617);
let ec = [];
var eu = n(536637),
    ed = n.n(eu),
    em = n(73153),
    ef = n(935208);
let eE = { lastSeenNewlyAddedEmojiIds: {} },
    eI = eE,
    eg = {};
function eh() {
    for (let e in eg) eI.lastSeenNewlyAddedEmojiIds[e] = eg[e];
}
class ep extends m.Ay.PersistedStore {
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
        eI = e ?? eE;
    }
    getState() {
        return eI;
    }
    getLastSeenEmojiByGuild(e) {
        return eI.lastSeenNewlyAddedEmojiIds[e];
    }
    isNewerThanLastSeen(e, t) {
        if (null == e || null == t) return !1;
        let n = this.getLastSeenEmojiByGuild(e);
        if (null == n || ef.default.compare(t, n.id) > 0) return !0;
        {
            let e = ed()(n.lastSeen);
            return ed()().isBefore(e.add(2, "weeks")) && !n.acknowledged;
        }
    }
}
let eA = new ep(em.h, {
    LOGOUT: function () {
        ((eI = eE), (eg = {}));
    },
    NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = eg[t] ?? eI.lastSeenNewlyAddedEmojiIds[t];
        null == i || 0 > ef.default.compare(i.id, n)
            ? (eg[t] = { id: n, lastSeen: Date.now(), acknowledged: !0 })
            : (eg[t] = { ...i, acknowledged: !0 });
    },
    NEWLY_ADDED_EMOJI_SEEN_PENDING: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = eg[t] ?? eI.lastSeenNewlyAddedEmojiIds[t];
        (null == i || 0 > ef.default.compare(i.id, n)) && (eg[t] = { id: n, lastSeen: Date.now(), acknowledged: !1 });
    },
    NEWLY_ADDED_EMOJI_SEEN_UPDATED: eh,
    CLEAR_CACHES: function () {
        ((eI = eE), eh());
    },
    CONNECTION_CLOSED: eh,
});
var e_ = n(451731),
    eN = n(850992),
    eC = n(887695),
    ex = n(131937),
    ey = n(462887),
    ej = n(939249),
    eT = n(789645),
    eO = n(696986),
    eS = n(736653),
    eb = n(139286),
    eR = n(976860),
    ev = n(71393),
    eL = n(384684),
    eP = n(985242),
    eM = n(652215),
    eD = n(746080),
    ew = n(196404);
function ek(e) {
    let t,
        { onClose: i, guildId: s, emojiId: r } = e,
        a = ((t = (0, eS.Ay)()), (0, ey.q)(t) ? n(454333) : n(674463)),
        { analyticsLocations: o } = (0, x.Ay)(N.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, eb.A)({
        type: ex.ImpressionTypes.MODAL,
        name: ex.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: { location_stack: o, emoji_guild_id: s, emoji_id: r ?? null },
    });
    let c = (0, m.bG)([ev.A], () => ev.A.getGuild(s)),
        u = (0, m.bG)([eL.A], () => null != s && eL.A.getUserSubscriptionRoles(s).size > 0),
        d = u ? en.intl.string(en.t.GoLM9z) : en.intl.formatToPlainString(en.t["h0u/Hi"], { serverName: c?.name }),
        f = u ? en.intl.string(en.t.PjZ7Db) : en.intl.string(en.t.p8FG1D);
    return (0, l.jsxs)("div", {
        className: ew.kL,
        children: [
            (0, l.jsx)("div", { className: ew.Tp }),
            (0, l.jsxs)("div", {
                className: ew.Qs,
                children: [
                    (0, l.jsx)(ej.D, {
                        className: ew.b,
                        "aria-label": en.intl.string(en.t.cpT0Cq),
                        onClick: i,
                        children: (0, l.jsx)(eT.P, {
                            size: "xs",
                            color: "currentColor",
                            "aria-label": en.intl.string(en.t.cpT0Cq),
                            className: ew.yP,
                        }),
                    }),
                    (0, l.jsx)("img", { alt: "", src: a, className: ew.Tn }),
                    (0, l.jsx)(eO.h, { size: 22 }),
                    (0, l.jsx)(D.D, {
                        color: "text-strong",
                        variant: "heading-lg/semibold",
                        className: ew.wx,
                        children: en.intl.string(en.t.cBjkcx),
                    }),
                    (0, l.jsx)(eO.h, { size: 4 }),
                    (0, l.jsx)(H.E, {
                        color: "text-default",
                        variant: "text-md/normal",
                        className: ew.h_,
                        children: d,
                    }),
                    (0, l.jsx)(eO.h, { size: 24 }),
                    (0, l.jsx)(eP.A, {
                        text: f,
                        onClick: function () {
                            (0, eR.pX)(eM.BVt.CHANNEL(s, eD.VV.ROLE_SUBSCRIPTIONS), { sourceLocationStack: o });
                        },
                    }),
                ],
            }),
        ],
    });
}
var eU = n(450510),
    eG = n(75678),
    eF = n(253932),
    eJ = n(808728),
    eV = n(174459),
    eK = n(240248),
    eB = n(822123),
    eH = n(734057),
    eW = n(309010),
    eX = n(690521),
    ez = n(818645),
    eZ = n(316884),
    eY = n(307731),
    e$ = n(698279);
function eq(e) {
    let { intention: t, containerWidth: n, rowSize: i, isBurstReaction: s, analyticsObject: l } = e,
        r = eH.A.getChannel(eW.Ay.getChannelId()),
        a = r?.getGuildId(),
        o =
            t === eY.EmojiIntention.REACTION
                ? j.Ay.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice()
                : j.Ay.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        c = null != r ? j.Ay.getDisambiguatedEmojiContext(r.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        u =
            t === eY.EmojiIntention.REACTION
                ? j.Ay.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems
                : j.Ay.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        d = o.slice(0, u),
        m = null != a ? j.Ay.getGuildEmoji(a) : [],
        f = j.Ay.getDisambiguatedEmojiContext(r?.getGuildId()).getCustomEmoji(),
        { topEmojis: E, newlyAddedEmojis: I } = (0, eZ.b)({ guildId: r?.getGuildId(), pickerIntention: t }),
        { visibleTopEmojis: g, visibleNewlyAddedEmojis: h } = (0, ez.W)({
            topEmojis: E,
            newlyAddedEmojis: I,
            rowSize: i,
        });
    C.Ay.trackWithMetadata(
        t === eY.EmojiIntention.REACTION ? eM.HAw.REACTION_PICKER_OPENED : eM.HAw.EXPRESSION_PICKER_OPENED,
        {
            width: n,
            tab: e$.kx.EMOJI,
            badged: !1,
            num_expressions_favorites: c.length,
            num_animated_expressions_favorites: c.filter((e) => e?.animated).length,
            num_custom_expressions_favorites: c.filter(eX.Ay.isCustomEmoji).length,
            num_standard_expressions_favorites: c.filter((e) => null == e.id).length,
            num_expressions_frecent: d.length,
            num_animated_expressions_frecent: d.filter((e) => e?.animated).length,
            num_custom_expressions_frecent: d.filter(eX.Ay.isCustomEmoji).length,
            num_standard_expressions_frecent: d.filter((e) => null == e.id).length,
            num_current_guild_expressions: m.length,
            num_custom_expressions_total: f.size,
            num_expressions_top_server: g.length,
            num_animated_expressions_top_server: g.filter((e) => e.animated).length,
            num_expressions_newly_added: h.length,
            num_animated_expressions_newly_added: h.filter((e) => e.animated).length,
            ...(t === eY.EmojiIntention.REACTION && { is_burst: s }),
            ...(null != l && { location_object: l }),
        },
    );
}
var eQ = n(206248),
    e0 = n(724651),
    e1 = n(732280),
    e2 = n(783420),
    e3 = n(24482);
let e4 = { object: eM.ZSU.BUTTON_CTA, section: eM.JJy.SUPER_REACTION_PICKER };
function e5(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: i } = e,
        s = en.intl.string(en.t.eikz43),
        r = (0, e1.V)(),
        a = (0, e0.O)(),
        o = r?.subscriptionTrial,
        c = null != o || null != a,
        u = o?.skuId ?? el.pe.TIER_2,
        d = c
            ? null != a
                ? en.intl.formatToPlainString(en.t.bkQ4bH, { percent: a.discount.amount })
                : (0, e3.FY)({ intervalType: o?.interval, intervalCount: o?.intervalCount })
            : en.intl.string(en.t.sEAnVH);
    return (0, l.jsx)(e2.A, {
        subscriptionTier: u,
        premiumModalAnalyticsLocation: e4,
        onSubscribeModalClose: (e) => {
            e && i();
        },
        children: (e) => {
            let { onClick: r } = e;
            return (0, l.jsx)(eQ.H, {
                targetElementRef: t,
                shouldShow: n,
                onRequestClose: i,
                position: "bottom",
                assetUrl: "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
                disableMediaViewer: !0,
                badge: c ? { type: "free_trial", variant: "expressive" } : void 0,
                title: en.intl.string(en.t.N4SCJ0),
                body: s,
                action: { text: d, variant: "expressive", icon: P.t, onClick: r },
            });
        },
    });
}
var e8 = n(200589),
    e6 = n(435558),
    e7 = n.n(e6),
    e9 = n(837381),
    te = n(460905),
    tt = n(775602),
    tn = n(713517),
    ti = n(498032),
    ts = n(131607),
    tl = n(49999),
    tr = n(938612);
function ta(e) {
    let { onClick: t, listItemId: n } = e,
        i = en.intl.string(et.default["3D0GLv"]),
        s = (0, e9.rm)(n),
        [r, a] = (0, ts.kn)([f.M.DEFAULT_EMOJIS_PACKS_DISCOVERY_DOT]),
        o = r === f.M.DEFAULT_EMOJIS_PACKS_DISCOVERY_DOT;
    return (0, l.jsx)("div", {
        className: tr.nM,
        children: (0, l.jsxs)("div", {
            className: tr.Jn,
            children: [
                (0, l.jsx)(R.m, {
                    ariaHidden: !0,
                    position: "right",
                    text: i,
                    children: (0, l.jsx)(ej.D, {
                        ...s,
                        "aria-label": o ? `${i}, ${en.intl.string(en.t.y2b7CA)}` : i,
                        className: tr.x6,
                        onClick: function () {
                            (o && a(tl.i.TAKE_ACTION), t());
                        },
                        children: (0, l.jsx)(Z.T, { size: "md", color: "currentColor" }),
                    }),
                }),
                o && (0, l.jsx)(ti.N, { className: tr.aW, size: "md", cutout: "base-lower" }),
            ],
        }),
    });
}
var to = n(88218),
    tc = n(407698),
    tu = n(941971),
    td = n(531685),
    tm = n(406810),
    tf = n(27232),
    tE = n(369606),
    tI = n(413249),
    tg = n(141060),
    th = n(687966),
    tp = n(115979),
    tA = n(524501),
    t_ = n(926268),
    tN = n(138134),
    tC = n(732139);
let tx = r.memo(function (e) {
    let { categoryId: t, ...n } = e,
        i = (function (e) {
            switch (e) {
                case tC.R2.RECENT:
                    return tm.ClockIcon;
                case tC.R2.FAVORITES:
                    return tf.StarIcon;
                case tC.R2.TOP_GUILD_EMOJI:
                    return tE.TrophyIcon;
                case tC.R2.PEOPLE:
                    return te.n;
                case tC.R2.NATURE:
                    return tI.p;
                case tC.R2.FOOD:
                    return tg.i;
                case tC.R2.ACTIVITY:
                    return th.GameControllerIcon;
                case tC.R2.TRAVEL:
                    return tp.h;
                case tC.R2.OBJECTS:
                    return tA.D;
                case tC.R2.SYMBOLS:
                    return t_.HeartIcon;
                case tC.R2.FLAGS:
                    return tN.FlagIcon;
                case tC.R2.PREMIUM_UPSELL:
                    return P.t;
                default:
                    return;
            }
        })(t);
    return null == i ? null : (0, l.jsx)(i, { color: "currentColor", ...n });
});
var ty = n(724511),
    tj = n(132500),
    tT = n(7584),
    tO = n(526292),
    tS = n(711014),
    tb = (((i = {})[(i.EMOJI = 0)] = "EMOJI"), (i[(i.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"), i);
let tR = [eY.EmojiDisabledReasons.DISALLOW_EXTERNAL, eY.EmojiDisabledReasons.DISALLOW_CUSTOM];
var tv = (((s = {})[(s.PREMIUM = 0)] = "PREMIUM"), (s[(s.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), s),
    tL = n(342379);
let tP = "expression-guild-",
    { itemIdForIndex: tM } = (0, to.J)(tP),
    tD = `${tP}view-emoji-packs`,
    tw = (0, eK.xI)(E.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    tk = (0, eK.xI)(E.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    tU = (0, eK.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    tG = (0, eK.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    tF = (0, eK.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    tJ = (0, eK.xI)(tL.__invalid_unicodeCategoryShortcutHeight),
    tV = (0, eK.xI)(E.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    tK = (0, eK.xI)(E.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    tB = tU + tk + 2 * tF,
    tH = tV + 2 * tK,
    tW = tw + tk,
    tX = tW + tH,
    tz = tU + tG + 2 * tF,
    tZ = tU + 2 * tF + 2 * tk + tV;
function tY(e) {
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
        { isHoveringOrFocusing: f } = (0, tn.A)(m),
        E = (0, e9.rm)(tM(n)),
        I = a.type === tC.s.GUILD || a.type === tC.s.PACK ? null : a.id,
        g = t === n,
        h = !d && u,
        p = a.type === tC.s.GUILD ? a.guild : null,
        A = a.type === tC.s.PACK ? a.pack : null,
        _ = (0, l.jsxs)(ej.D, {
            innerRef: m,
            ...E,
            "aria-label": a.type === tC.s.PACK ? a.pack.name : (0, eB.wt)(a, p),
            className: o()({
                [tL.ZG]: null != p,
                [tL.td]: null != A,
                [tL.Q0]: null != A && g,
                [tL.Bj]: null == p && null == A,
                [tL.s6]: null == p && null == A && g,
                [tL.xg]: a.type === tC.s.RECENT,
            }),
            onClick: () => {
                (null != p &&
                    eV.default.track(eM.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: i?.location,
                        tab: e$.kx.EMOJI,
                        guild_id: p.id,
                    }),
                    c(n));
            },
            children: [
                (0, l.jsx)("div", {
                    className: tL.a$,
                    children: (0, l.jsx)(tu.A, { hovered: f, selected: g, size: "small" }),
                }),
                a.type === tC.s.GUILD
                    ? (0, l.jsx)(ty.A, { guild: a.guild, isSelected: g, shouldAnimate: h, isLocked: a.isNitroLocked })
                    : null,
                null != A
                    ? (0, l.jsx)(q.A, {
                          alt: "",
                          animated: !d,
                          shouldAnimate: h,
                          className: tL.ty,
                          emojiId: A.representativeEmojiId,
                      })
                    : null,
                null == p && null != I
                    ? (0, l.jsx)(tx, { categoryId: I, className: tL.Yl, height: tU, width: tU, size: "custom" })
                    : null,
            ],
        }),
        N = s[n + 1],
        C = s[n - 1],
        x = null != A && null != C && C.type !== tC.s.PACK,
        y = null != A && N?.type !== tC.s.PACK,
        j = null != N && a.type === tC.s.GUILD && N.type !== tC.s.GUILD;
    return null != p
        ? (0, l.jsxs)(r.Fragment, {
              children: [
                  (0, l.jsx)(tc.Q, { guild: p, children: _ }),
                  j ? (0, l.jsx)("hr", { className: tL.ny }, "separator") : null,
              ],
          })
        : null != A
          ? (0, l.jsxs)(r.Fragment, {
                children: [
                    x ? (0, l.jsx)("hr", { className: tL.ny }) : null,
                    (0, l.jsx)(R.m, { ariaHidden: !0, position: "right", text: A.name, children: _ }),
                    y ? (0, l.jsx)("hr", { className: tL.ny }) : null,
                ],
            })
          : _;
}
let t$ = (e) => {
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
        E = eN.Om.useStore((e) => e.activeCategoryIndex),
        I = (function (e) {
            let { emojiListRef: t } = e,
                n = (0, k.RQ)((e) => e.searchQuery),
                i = r.useCallback((e) => t.current?.scrollToSectionTop(e), [t]);
            return r.useCallback(
                (e) => {
                    "" !== n ? ((0, k.Ri)(""), eN.Om.setActiveCategoryIndex(e)) : i(e);
                },
                [i, n],
            );
        })({ sectionDescriptors: i, emojiListRef: n }),
        g = (0, p.p)(),
        h = (0, eB.ss)(s, a, { guildId: a?.guild_id ?? c }),
        A = r.useMemo(() => (0, e8.t)(u ? (0, eB.CQ)() : h, d), [h, d, u]),
        _ = r.useRef(null),
        N = (0, m.bG)([td.A], () => td.A.isFocused()),
        C = (0, m.bG)([tt.Ay], () => tt.Ay.useReducedMotion, []),
        x = r.useMemo(
            () =>
                e7().memoize(
                    (e, t) => {
                        let n = A[t];
                        if (null != n)
                            return (0, l.jsx)(
                                tY,
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
        j = null != f ? tZ : 0,
        T = r.useMemo(() => {
            if (null != f)
                return function () {
                    return (0, l.jsx)(ta, { listItemId: tD, onClick: f }, "view-emoji-packs");
                };
        }, [f]),
        O = r.useCallback(
            (e, t) => {
                let n = A[t];
                if (n.type === tC.s.RECENT) return tB;
                if (n.type === tC.s.PACK) {
                    let e = A[t - 1],
                        n = A[t + 1];
                    return tW + (Number(null != e && e.type !== tC.s.PACK) + Number(n?.type !== tC.s.PACK)) * tH;
                }
                if (n.type === tC.s.GUILD) {
                    let e = A[t + 1];
                    return null != e && e.type !== tC.s.GUILD ? tX : tW;
                }
                return tz;
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
                s.type === tC.s.GUILD || s.type === tC.s.PACK
                    ? ((t += 1), (n += 1))
                    : s.type === tC.s.UNICODE
                      ? (i += 1)
                      : ((e += 1), (t += 1));
            });
            let s = [e, n, i],
                l = A.some((e) => e.type === tC.s.PACK) ? (A[0]?.type === tC.s.PACK ? 1 : 2) : 0,
                r = j + tB + t * tW + tX + l * tH;
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
                let i = L ? tJ : 0;
                if (n.type === tC.s.RECENT) return t ? 0 : tG;
                if (n.type === tC.s.PACK) return t ? i : tk;
                if (n.type === tC.s.GUILD) {
                    let n = A[e + 1];
                    return null != n && n.type !== tC.s.GUILD ? (t ? tV + -2 * tK + tk + i : tk) : t ? i : tk;
                }
                return t ? tk + i : 2 * tk;
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
    return (0, l.jsx)(to.A, {
        categoryListRef: _,
        expressionsListRef: n,
        className: t,
        store: eN.Om,
        categories: A,
        listPadding: y,
        onScroll: M,
        renderCategoryListItem: x,
        renderSection: U,
        rowCount: A.length,
        categoryHeight: O,
        getScrollOffsetForIndex: w,
        rowCountBySection: v,
        navId: "emoji-picker-categories",
        itemIdPrefix: tP,
        renderListHeader: T,
        listHeaderHeight: j,
        children: (e) =>
            S >= 7 &&
            (0, l.jsx)(
                ej.D,
                {
                    "aria-hidden": !L,
                    "aria-label": en.intl.string(en.t.dT0ctw),
                    className: o()(tL.KB, { [tL.h_]: !L }),
                    tabIndex: L ? 0 : -1,
                    onClick: () => D(e),
                    children: (0, l.jsx)(te.n, { size: "custom", color: "currentColor", height: tU, width: tU }),
                },
                G,
            ),
    });
};
var tq = n(860197);
let tQ = function (e) {
    let { markAsDismissed: t } = e;
    return (0, l.jsxs)(H.E, {
        variant: "text-xs/medium",
        color: "text-default",
        className: tq.iE,
        children: [
            (0, l.jsx)(t_.HeartIcon, { size: "md", color: "currentColor", className: tq.Kk }),
            (0, l.jsx)("div", {
                className: tq.Qs,
                children: (0, l.jsx)(H.E, { variant: "text-xs/normal", children: en.intl.string(en.t.xdRf69) }),
            }),
            (0, l.jsx)(ej.D, {
                onClick: () => t(tl.i.UNKNOWN),
                children: (0, l.jsx)(eT.P, { size: "md", color: "currentColor", className: tq.VN }),
            }),
        ],
    });
};
var t0 = n(29477),
    t1 = n(717421),
    t2 = n(343032),
    t3 = n(683063),
    t4 = n(748798);
let t5 = { tension: 750, mass: 2.5, friction: 70 };
function t8(e) {
    let { checked: t, onClick: n, buttonRef: i } = e,
        s = (0, m.bG)([tt.Ay], () => tt.Ay.useReducedMotion),
        a = F.default.getCurrentUser(),
        c = null != a && !(0, e3.TW)(a),
        u = c ? [] : [f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP],
        [d, E] = (0, ts.kn)(u),
        [I, g] = r.useState(!1),
        [h, p] = (0, t1.z)(() => ({})),
        A = (0, t0.animated)(t2.i);
    r.useEffect(() => {
        let e = d === f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (E(tl.i.DISMISS), setTimeout(() => g(e), 200));
    }, [d, E]);
    let _ = I ? en.intl.string(en.t["Osi/uy"]) : t && !c ? en.intl.string(en.t["5cRA/b"]) : en.intl.string(en.t.buV4av),
        N = I ? en.intl.string(en.t.ORK94p) : void 0;
    return (0, l.jsx)(t3.u, {
        position: "top",
        title: N,
        body: _,
        asset: (0, l.jsx)(P.t, { size: "md", color: "currentColor" }),
        assetSize: 20,
        forceOpen: I,
        children: (0, l.jsx)(ej.D, {
            innerRef: i,
            "aria-label": _,
            "aria-pressed": t,
            onClick: function () {
                (p({ from: { rotate: t ? "360deg" : "0deg" }, to: { rotate: t ? "0deg" : "360deg" }, config: t5 }),
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
var t6 = n(821609),
    t7 = n(644508),
    t9 = n(824832),
    ne = n(267102),
    nt = n(242812);
function nn(e) {
    let { channel: t, closePopout: n } = e,
        i = r.useRef(null),
        s = r.useRef(0),
        [a, o] = r.useState(!1),
        [c, u] = r.useState(!1),
        d = (0, ne.Us)() === eM.BRT.OVERLAY,
        m = c || a,
        f = r.useCallback(
            async (e, i, l) => {
                (u(!0),
                    n(),
                    await (0, t7.f)({
                        userImage: { data: e, file: i, image: l },
                        guildId: t?.guild_id ?? null,
                        analyticsLocation: {
                            section: eM.JJy.EXPRESSION_PICKER,
                            page: t?.guild_id != null ? eM.liQ.GUILD_CHANNEL : eM.liQ.DM_CHANNEL,
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
                text: d ? en.intl.string(en.t.RMbedC) : null,
                children: (0, l.jsx)(t6.$, {
                    text: en.intl.string(en.t.iMJO37),
                    variant: "secondary",
                    onClick: function () {
                        i.current?.activateUploadDialogue();
                    },
                    disabled: m || d,
                }),
            }),
            (0, l.jsx)("div", {
                className: nt.F,
                children: (0, l.jsx)(t9.Ay, { ref: i, onChange: f, setLoading: o, disabled: m }, s.current),
            }),
        ],
    });
}
n(667532);
var ni = n(833272),
    ns = n(82495),
    nl = n(260762),
    nr = n(650583),
    na = n(683829);
let no = (0, Q.Ld)(),
    nc = ni.A.convert.fromCodePoint("1f44f"),
    nu = (0, eK.xI)(E.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
function nd(e) {
    switch (ni.A.convert.toCodePoint(e)) {
        case "1f3fb":
            return en.intl.string(en.t["BVK5b/"]);
        case "1f3fc":
            return en.intl.string(en.t.xJWOK8);
        case "1f3fd":
            return en.intl.string(en.t["MB+T5g"]);
        case "1f3fe":
            return en.intl.string(en.t.MODud2);
        case "1f3ff":
            return en.intl.string(en.t["0uzqsc"]);
        default:
            return en.intl.string(en.t.bGN1ow);
    }
}
let nm = (e) => {
    let { fade: t, surrogate: n, onClick: i, delay: s, index: r } = e,
        a = (0, e9.rm)(`item-${r}`),
        o = eX.Ay.getURL(nc + n),
        c = (0, t1.z)({ opacity: 1, from: { opacity: +!t }, delay: s }, "animate-always");
    return (0, l.jsx)(ej.D, {
        ...a,
        role: "option",
        "aria-selected": 0 === r,
        onClick: () => i(n),
        className: na.B6,
        children: (0, l.jsx)(t0.animated.div, {
            "aria-label": nd(n),
            className: na.g4,
            style: { backgroundImage: `url("${o}")`, ...c },
        }),
    });
};
function nf(e) {
    let { id: t, selectedSurrogate: n, onClick: i } = e,
        s = (0, nl.A)("diversity"),
        a = (0, t1.z)({ height: (nu + 14) * (tT.W$.length + 1), from: { height: nu + 14 }, config: { duration: 125 } }),
        o = r.useRef(s);
    r.useEffect(() => {
        o.current.focusFirstVisibleItem();
    }, []);
    let c = ["", ...tT.W$];
    return (
        e7().remove(c, (e) => e === n),
        c.unshift(n),
        (0, l.jsx)(e9.hD, {
            navigator: s,
            children: (0, l.jsx)(e9.PR, {
                children: (e) => {
                    let { ref: n, ...s } = e;
                    return (0, l.jsx)(t0.animated.div, {
                        ...s,
                        id: t,
                        ref: n,
                        className: na.J6,
                        style: a,
                        role: "listbox",
                        children: c.map((e, t) =>
                            (0, l.jsx)(nm, { index: t, fade: 0 !== t, delay: 20 * t, surrogate: e, onClick: i }, t),
                        ),
                    });
                },
            }),
        })
    );
}
let nE = function (e) {
    let { searchBarRef: t, selectedSurrogate: n, className: i } = e,
        s = eX.Ay.getURL(nc + n),
        [a, c] = r.useState(!1),
        u = (0, ns.A)(null, () => c(!1)),
        d = r.useRef(null);
    return (0, l.jsxs)("div", {
        ref: u,
        className: o()(na.fx, i),
        children: [
            (0, l.jsx)(ej.D, {
                innerRef: d,
                className: na.Dj,
                onClick: function () {
                    c(!0);
                },
                "aria-label": en.intl.formatToPlainString(en.t["2SfnMp"], { skinTone: nd(n) }),
                "aria-haspopup": !0,
                "aria-expanded": a,
                "aria-controls": no,
                tabIndex: a ? -1 : 0,
                children: (0, l.jsx)("div", { className: na.g4, style: { backgroundImage: `url("${s}")` } }),
            }),
            a
                ? (0, l.jsx)("div", {
                      onKeyDown: function (e) {
                          e.key === nr.dh.ESCAPE
                              ? (e.stopPropagation(), c(!1), null != d.current && d.current.focus())
                              : "Tab" === e.key && c(!1);
                      },
                      children: (0, l.jsx)(nf, {
                          id: no,
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
var nI = n(462180),
    ng = n(602034),
    nh = n(683438);
let np = r.memo(function (e) {
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
        d = (0, k.RQ)((e) => e.searchQuery),
        [m, f, E] = eN.Om.useStore((e) => [e.inspectedExpressionPosition, e.searchPlaceholder, e.hasInteracted], nI.x),
        I = r.useCallback(
            (e) => {
                (eN.Om.setActiveCategoryIndex("" === e ? 0 : -1),
                    eN.Om.setInspectedExpressionPosition(0, 0),
                    eN.Om.setSearchPlaceholder(null),
                    (0, k.Ri)(e),
                    t.current?.scrollTo(0));
            },
            [t],
        ),
        g = r.useCallback(() => {
            I("");
        }, [I]);
    return (
        r.useImperativeHandle(c, () => ({ focus: () => u.current?.focus() })),
        (0, l.jsx)(nh.I, {
            autoFocus: a,
            query: d,
            ref: u,
            placeholder: f ?? o,
            onClear: g,
            onKeyDown: function (e) {
                switch (e.key) {
                    case nr.dh.ARROW_LEFT:
                    case nr.dh.ARROW_RIGHT:
                    case nr.dh.ARROW_UP:
                    case nr.dh.ARROW_DOWN:
                        document.activeElement !== e.target && e.preventDefault();
                }
                i(e);
            },
            onFocus: s,
            onChange: I,
            inputProps: {
                role: "combobox",
                "aria-label": en.intl.string(en.t.tCauZX),
                "aria-haspopup": "grid",
                "aria-autocomplete": "list",
                "aria-controls": n,
                "aria-expanded": !0,
                ...(E ? { "aria-activedescendant": (0, ng.Aq)(n, m.columnIndex, m.rowIndex) } : void 0),
            },
        })
    );
});
var nA = n(381575);
let n_ = function (e) {
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
                (0, l.jsx)(np, {
                    emojiListRef: r,
                    gridNavigatorId: tC.lq,
                    onKeyDown: a,
                    ref: d,
                    onFocus: c,
                    autoFocus: u,
                    defaultSearchPlaceholder: (0, eB.wT)(i, f),
                }),
                i === eY.EmojiIntention.REACTION ? (0, l.jsx)(t8, { checked: f, onClick: E, buttonRef: I }) : null,
                n ?? (0, l.jsx)(nE, { searchBarRef: d, className: nA.fx, selectedSurrogate: m }),
                i !== eY.EmojiIntention.NO_CUSTOM_EMOJI && h ? (0, l.jsx)(nn, { channel: t, closePopout: p }) : null,
            ],
        });
    return (0, l.jsx)("div", { className: o()(nA.wx, s), children: null != g ? g(A) : A });
};
var nN = n(182922),
    nC = n(363195),
    nx = n(486020),
    ny = n(977566);
function nj(e) {
    return null != e && "animated" in e;
}
let nT = r.memo(function (e) {
    let t,
        i,
        { className: s, emojiGrid: a, guildId: o, pickerIntention: c, channel: u } = e,
        d = eN.Om.useStore((e) => e.inspectedExpressionPosition),
        f = r.useMemo(() => {
            let { rowIndex: e, columnIndex: t } = d;
            return a[e]?.[t];
        }, [a, d]);
    switch (f?.type) {
        case tb.EMOJI:
            t = f?.emoji;
            break;
        case tb.EXPAND_OR_COLLAPSE_EMOJIS:
            t = { type: "EXPAND_OR_COLLAPSE_EMOJI", guildId: f?.guildId, allNamesString: f?.name };
            break;
        default:
            t = null;
    }
    let E = (0, m.bG)([ev.A], () => (null !== t && t.type === T.i.GUILD ? ev.A.getGuild(t.guildId) : null), [t]),
        I = (0, m.bG)([K.A], () => (null !== t && t.type === T.i.PACK ? K.A.getPack(t.packId) : null), [t]),
        g = (0, m.bG)([td.A], () => td.A.isFocused()),
        h = (0, m.bG)([tt.Ay], () => tt.Ay.useReducedMotion, []),
        p = eF.Sf.useSetting(),
        A = (0, eB.O7)(o, nj(t) ? t : null),
        _ = (0, m.bG)([j.Ay], () => j.Ay.expandedSectionsByGuildIds),
        { newlyAddedEmojis: N } = (0, eZ.A)(o, c),
        C = f?.type === tb.EMOJI ? f.subCategory : tC.tm.NONE;
    if (
        (r.useEffect(() => {
            let e = Date.now();
            return () => {
                Date.now() - e >= 250 &&
                    nj(t) &&
                    C !== tC.tm.NONE &&
                    (C === tC.tm.NEWLY_ADDED_EMOJI &&
                        null !== t &&
                        t.type === T.i.GUILD &&
                        (0, e_.mz)(t.guildId, N[0].id),
                    null != d.source &&
                        (0, eB.yB)({
                            emoji: t,
                            subCategory: C,
                            position: f.columnIndex + 1,
                            newlyAddedHighlight: C === tC.tm.NEWLY_ADDED_EMOJI && eA.isNewerThanLastSeen(o, t.id),
                        }));
            };
        }),
        null == t)
    )
        return null;
    let x = (function (e, t) {
            let { allowAnimatedEmoji: i, sectionsExpandedFromThreeRows: s, theme: r } = t;
            if (nj(e)) {
                let t = null != e.id ? nx.Ay.getEmojiURL({ id: e.id, animated: i && e.animated, size: 28 }) : e.url;
                return "" === t
                    ? (0, l.jsx)(H.E, {
                          variant: "text-md/normal",
                          className: ny.J_,
                          children: "surrogates" in e ? e.surrogates : null,
                      })
                    : (0, l.jsx)("img", { alt: (0, eX.N)(e) ?? "", src: t, className: ny.Zg });
            }
            if ("EXPAND_OR_COLLAPSE_EMOJI" !== e.type) return null;
            {
                let t = n(619508),
                    i = n(404828),
                    a = n(600003),
                    o = n(318121);
                return s.has(e.guildId)
                    ? (0, l.jsx)("img", { className: ny.Kk, src: (0, ey.M)(r) ? a : o, alt: "" })
                    : (0, l.jsx)("img", { className: ny.Kk, src: (0, ey.M)(r) ? t : i, alt: "" });
            }
        })(t, { allowAnimatedEmoji: p, sectionsExpandedFromThreeRows: _, theme: nC.A.theme }),
        y =
            null != E
                ? (0, l.jsx)(ty.A, { className: ny.__invalid_guildIcon, guild: E, shouldAnimate: !h && g })
                : null;
    i =
        "EXPAND_OR_COLLAPSE_EMOJI" === t.type
            ? _.has(t.guildId)
                ? en.intl.string(en.t["/K2RDH"])
                : en.intl.string(en.t.NZI2Zk)
            : (0, eX.N)(t);
    let O = (function (e) {
        let { inspectedEmoji: t, guild: n, pack: i } = e,
            s = nj(t);
        return null != n && s
            ? en.intl.format(en.t.KFW2aY, { guildName: n.name })
            : null != i && s
              ? en.intl.format(et.default.VEfeux, {
                    packName: (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(P.t, {
                                size: "custom",
                                width: 10,
                                height: 10,
                                color: "currentColor",
                                className: ny.C5,
                                "aria-label": en.intl.string(et.default.leUgZw),
                            }),
                            " ",
                            i.name,
                        ],
                    }),
                })
              : null;
    })({ inspectedEmoji: t, channel: u, guildId: o, intention: c, guild: E, pack: I });
    return (0, l.jsx)(nN.A, {
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
var nO = n(607399),
    nS = n(123292),
    nb = n(765178),
    nR = n(537652),
    nv = n(962125),
    nL = n(240864),
    nP = n(286509),
    nM = n(89366),
    nD = n(10392),
    nw = n(82498),
    nk = n(202639),
    nU = n(414872),
    nG = n(285373),
    nF = n(304072),
    nJ = n(189551),
    nV = n(594061),
    nK = n(771104),
    nB = n(147421),
    nH = n(723702),
    nW = n(140735),
    nX = n(194261),
    nz = n(703413);
let nZ = (e) => {
    let { src: t, alt: n, size: i, "aria-label": s, className: a } = e,
        c = r.useRef(null),
        u = r.useRef(!1),
        d = u.current ? nz.S : nz.Y;
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
                          ((u.current = !0), c.current.classList.remove(nz.Y), c.current.classList.add(nz.S));
                  });
              },
    });
};
var nY = n(955388);
let n$ = e7().memoize(
        (e) =>
            `${e * eY.EmojiSprites.NonDiversityPerRow}px ${e * Math.ceil(tT.Ay.numNonDiversitySprites / eY.EmojiSprites.NonDiversityPerRow)}px`,
    ),
    nq = e7().memoize(
        (e) =>
            `${e * eY.EmojiSprites.DiversityPerRow}px ${e * Math.ceil(tT.Ay.numDiversitySprites / eY.EmojiSprites.DiversityPerRow)}px`,
    ),
    nQ = r.memo(function (e) {
        let { emoji: t, size: i, surrogateCodePoint: s, allowAnimatedEmoji: a, "aria-label": c, isLocked: u } = e,
            d = (() => {
                if (!t.useSpriteSheet) {
                    let e =
                        null == t.id
                            ? t.url
                            : nx.Ay.getEmojiURL({ id: t.id, animated: a && t.animated, size: eY.EMOJI_URL_BASE_SIZE });
                    return null != e
                        ? (0, l.jsx)(nZ, {
                              className: nY.N1,
                              "aria-label": c,
                              src: e,
                              size: i,
                              alt: (0, eX.N)(t) ?? "",
                          })
                        : null;
                }
                return (0, l.jsx)("div", {
                    className: o()(nY.xA, { [nY.N1]: u }),
                    style: (function (e, t, i) {
                        let s, l, r;
                        if (!e.useSpriteSheet) return;
                        let a = null != e.index ? e.index : 0;
                        e.hasDiversity
                            ? ((s = n(12303)(`./spritesheet-${t}-${i}.png.js`).default),
                              (l = nq(i)),
                              (r = eY.EmojiSprites.DiversityPerRow))
                            : ((s = n(145519)(`./spritesheet-emoji-${i}.png.js`).default),
                              (l = n$(i)),
                              (r = eY.EmojiSprites.NonDiversityPerRow));
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
                    children: (0, l.jsx)(nW.A, { children: c }),
                });
            })();
        return (0, l.jsxs)(r.Fragment, {
            children: [
                d,
                u
                    ? (0, l.jsx)("div", {
                          className: nY.iD,
                          style: { width: i, height: i },
                          children: (0, l.jsx)(nX.LockIcon, { size: "xs", color: "currentColor", className: nY.fi }),
                      })
                    : null,
            ],
        });
    });
var n0 = n(537911);
function n1(e) {
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
        N = (0, m.bG)([ev.A], () => (n.type === T.i.GUILD ? ev.A.getGuild(n.guildId) : void 0), [n]);
    return (0, l.jsx)(Y.vN, {
        children: (0, l.jsx)("button", {
            ..._,
            className: o()(n0._X, { [n0.lG]: s, [n0.Lh]: r, [n0.Bx]: a, [h ?? ""]: a, [n0.TV]: u }),
            "data-type": ee.g.EMOJI,
            "data-id": n.id,
            "data-name": n.name,
            "data-surrogates": "surrogates" in n ? n.surrogates : null,
            "data-animated": n.animated ? "true" : null,
            ref: A,
            children: (0, l.jsx)(nQ, {
                "aria-label":
                    ((t = (0, eX.N)(n)),
                    (N?.name != null &&
                        (t = en.intl.formatToPlainString(en.t["nXv4/B"], { names: t, guildName: N.name })),
                    i)
                        ? en.intl.formatToPlainString(en.t["9FI9Z0"], { names: t })
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
function n2(e) {
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
        [b, v] = r.useState(""),
        L = (0, m.bG)([tt.Ay], () => tt.Ay.useReducedMotion),
        P = (0, m.bG)([j.Ay], () => j.Ay.getDisambiguatedEmojiContext(o), [o]),
        M = r.useRef(null),
        { emoji: D, size: w, isDisabled: k, columnIndex: U } = t;
    function G() {
        d.current || f.current || c(t);
    }
    let { ref: F, tabIndex: J, onFocus: V, ...K } = h(U, a) ?? {},
        B =
            b !== `${U}:${a}`
                ? (0, l.jsx)(n1, {
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
                              let e = null == D.id ? tT.Ay.convertNameToSurrogate(D.name) : D.name,
                                  t = M.current.getBoundingClientRect();
                              ((t.x = O.x + (U + 1) * w), v(`${U}:${a}`), (0, nB.h)(x, e, D.id, t));
                          }
                          !(function (e) {
                              if ((e.stopPropagation(), d.current || f.current)) return;
                              let n = e.altKey;
                              (n &&
                                  !j.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(D) &&
                                  C(i),
                                  (0, eU.sF)(eU._2.FAVORITE_EMOJI_TOOLTIP),
                                  u(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n }));
                          })(e);
                      },
                      onContextMenu: function (e) {
                          (0, $.L3)(e, async () => {
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
            ? (0, l.jsx)(R.m, {
                  text: en.intl.formatToPlainString(en.t.glqNsf, { key: (0, nH.isMac)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: B,
              })
            : B,
    );
}
let n3 = (e) => {
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
        P = (0, eS.Ay)(),
        M = eN.Om.getState(),
        [D, w] = r.useState(M.inspectedExpressionPosition),
        [k, U] = (0, nF.A)(null, 300),
        G = r.useRef(null);
    (r.useEffect(
        () =>
            eN.Om.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => w(e),
            ),
        [],
    ),
        r.useEffect(() => {
            nV.bW.loadIfNecessary();
        }, []));
    let F = i === tC.as.LARGE,
        J = i === tC.as.MEDIUM;
    function V(e) {
        let t = `${e.rowIndex}c${e.columnIndex}`;
        switch (e.type) {
            case tb.EXPAND_OR_COLLAPSE_EMOJIS: {
                let { visibleRowIndex: n, columnIndex: i } = e,
                    c = D.rowIndex === n && D.columnIndex === i,
                    d = e.sectionCollapsedToThreeRows
                        ? c
                            ? (0, ey.M)(P)
                                ? R
                                : L
                            : (0, ey.M)(P)
                              ? y
                              : j
                        : c
                          ? (0, ey.M)(P)
                              ? b
                              : v
                          : (0, ey.M)(P)
                            ? O
                            : S,
                    I = en.intl.string(e.sectionCollapsedToThreeRows ? en.t.NZI2Zk : en.t["/K2RDH"]);
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
                        (0, l.jsx)(Y.vN, {
                            children: (0, l.jsx)("button", {
                                "aria-label": d,
                                ref: p,
                                className: o()(n0._X, {
                                    [n0.lG]: F,
                                    [n0.Lh]: J,
                                    [n0.Bx]: x && !I,
                                    [A ?? ""]: x,
                                    [n0.TV]: k === t,
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
                        e.type !== tb.EXPAND_OR_COLLAPSE_EMOJIS ||
                            (t.stopPropagation(),
                            m.current ||
                                f.current ||
                                (s(e, { isFinalSelection: !0, toggleFavorite: !1 }),
                                (0, nJ.G)(e.guildId),
                                e.sectionCollapsedToThreeRows || x(),
                                eV.default.track(eM.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                    collapsed: e.sectionCollapsedToThreeRows,
                                    guild_id: e.guildId,
                                })));
                    },
                    icon: (0, l.jsx)("img", { className: n0.Kk, src: d, alt: "" }),
                    ariaLabel: I,
                    shouldShowRoundHighlight: !0,
                });
            }
            case tb.EMOJI: {
                let { columnIndex: n, visibleRowIndex: i } = e,
                    r = D.rowIndex === i && D.columnIndex === n;
                return (0, l.jsx)(
                    n2,
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
            className: o()(n0.ND, { [n0.HO]: F, [n0.X$]: J }),
            ref: G,
            children: e.map(V),
        });
    }
    if (p !== tC.s.TOP_GUILD_EMOJI) return K(t);
    let B = t.filter(
            (e) =>
                e.subCategory === tC.tm.TOP_GUILD_EMOJI ||
                (e.subCategory === tC.tm.NEWLY_ADDED_EMOJI &&
                    e.emoji.type === T.i.GUILD &&
                    !eA.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
        ),
        W = t.filter(
            (e) =>
                e.subCategory === tC.tm.NEWLY_ADDED_EMOJI &&
                e.emoji.type === T.i.GUILD &&
                eA.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id),
        );
    return 0 === W.length
        ? K(t)
        : (0, l.jsxs)("div", {
              className: n0.Ng,
              children: [
                  (0, l.jsx)("div", { className: o()(n0.V6, { [n0.$3]: 0 === B.length }), children: K(B) }),
                  (0, l.jsxs)("div", {
                      className: n0.bc,
                      children: [
                          (0, l.jsx)("div", {
                              className: o()(n0.eE, { [n0.eM]: 1 === W.length, [n0.Wk]: B.length > 0 }),
                              children: K(W),
                          }),
                          (0, l.jsxs)("div", {
                              className: o()(n0.lD, { [n0.EI]: F, [n0.qU]: J, [n0.Wk]: B.length > 0 }),
                              children: [
                                  (0, l.jsx)(nK.A, { foreground: n0.rI }),
                                  (0, l.jsx)(H.E, {
                                      variant: "text-xs/semibold",
                                      color: "text-overlay-light",
                                      children: en.intl.string(en.t.y2b7CA),
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
};
var n4 = n(618723);
let n5 = (0, eK.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    n8 = (0, eK.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    n6 = (0, eK.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    n7 = (0, eK.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    n9 = (0, eK.xI)(E.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    ie = (0, eK.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    it = (0, eK.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    ii = r.memo(function (e) {
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
            R = eN.Om.useStore((e) => e.activeCategoryIndex),
            v = (0, k.RQ)((e) => e.searchQuery),
            L = eF.Sf.useSetting(),
            M = (0, m.bG)([F.default], () => F.default.getCurrentUser()),
            D = (0, J.ki)(M),
            { location: w } = (0, p.p)(),
            { analyticsLocations: U } = (0, x.Ay)(),
            [G, V] = r.useState(0),
            [K, B] = r.useState(!1),
            {
                listPadding: W,
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
                        listHeaderClassName: x,
                        activeSectionIndex: y,
                        emojiListRef: j,
                    } = e,
                    T = (0, p.p)(),
                    O = r.useRef(eM.An1),
                    S = r.useMemo(() => ("" !== n ? ni.A.convert.toCodePoint(n) : ""), [n]),
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
                                    eV.default.track(eM.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                        location: T.location,
                                        tab: e$.kx.EMOJI,
                                        collapsed: !s,
                                        guild_id: n.id,
                                    }),
                                f(i));
                        },
                        [T, t, f],
                    ),
                    L = r.useCallback((e) => {
                        let { columnIndex: t, visibleRowIndex: n } = e,
                            i = e.type === tb.EMOJI ? (0, eX.N)(e.emoji) : e.name;
                        (O.current !== eM.An1 && window.cancelAnimationFrame(O.current),
                            (O.current = window.requestAnimationFrame(() => {
                                (eN.Om.setInspectedExpressionPosition(t, n, ee.t.MOUSE_EVENT),
                                    eN.Om.setSearchPlaceholder(i),
                                    (O.current = eM.An1));
                            })));
                    }, []),
                    M = (0, m.bG)([eU.HP], () => eU.HP.hasHotspot(eU._2.FAVORITE_EMOJI_TOOLTIP), []),
                    D = r.useMemo(
                        () =>
                            e7().memoize((e, t) => {
                                let n = i[e],
                                    r = d[t.sectionIndex];
                                return (0, l.jsx)(
                                    n3,
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
                                            j.current?.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                                        },
                                    },
                                    e,
                                );
                            }),
                        [i, d, s, S, L, a, E, I, g, h, A, M, _, N, C, j],
                    );
                r.useEffect(() => () => D.cache?.clear?.(), [D]);
                let w = r.useMemo(
                        () =>
                            e7().memoize((e) => {
                                let n = d[e];
                                if (null == n) return;
                                let { guild: i, pack: s, categoryId: r, type: a, sectionId: u } = n;
                                if (a === tC.s.SEARCH_RESULTS) return;
                                let m = (function (e) {
                                        let { type: t, guild: n, categoryId: i } = e;
                                        return t === tC.s.PACK
                                            ? (0, l.jsx)(P.t, {
                                                  size: "custom",
                                                  color: "currentColor",
                                                  height: 16,
                                                  width: 16,
                                              })
                                            : t === tC.s.GUILD
                                              ? null == n
                                                  ? null
                                                  : (0, l.jsx)(ty.A, { guild: n, height: 16, width: 16 })
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
                                null != r && (f = (0, eB.Nu)(r, i?.name));
                                let E = y === e,
                                    I = n.isNitroLocked,
                                    g = I && !E,
                                    h = I && E,
                                    p =
                                        a === tC.s.PACK
                                            ? (0, l.jsx)("div", {
                                                  className: n4.uE,
                                                  children: (0, l.jsx)(nS.Q, {
                                                      text: en.intl.string(et.default["2zxYCx"]),
                                                      textVariant: "text-sm/medium",
                                                      variant: "secondary",
                                                      "aria-label": `${en.intl.string(et.default["2zxYCx"])} ${s.name}`,
                                                      onKeyDown: (e) => {
                                                          e.key !== nr.dh.ESCAPE && e.stopPropagation();
                                                      },
                                                      onClick: () => c(s.id),
                                                  }),
                                              })
                                            : void 0;
                                return (0, l.jsx)(
                                    nP.A,
                                    {
                                        className: o()(n4.wx, x, { [n4.RA]: g, [n4.sp]: h }),
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
                    k = (0, tO.k0)(),
                    U = r.useCallback(
                        (e, n) => {
                            let i = d[e],
                                s = R(e),
                                r = b(e),
                                a = i.type === tC.s.PACK && 0 === i.count;
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
                                    ? (0, l.jsx)(nU.ap, {})
                                    : (0, l.jsx)(nU.Ay, {})
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
                            (d[e]?.type === tC.s.PACK && d[e]?.count === 0) ||
                            R(e) ||
                            b(e)
                                ? 0
                                : ie,
                        [t, d, R, b],
                    );
                return {
                    listPadding: r.useMemo(() => ["" !== u ? n7 : n5, n8, n6, 0], [u]),
                    renderRow: D,
                    renderSection: U,
                    renderSectionHeader: w,
                    renderSectionFooter: G,
                    sectionMarginBottom: J,
                    sectionHeaderHeight: r.useCallback((e) => (d[e].type === tC.s.SEARCH_RESULTS ? 0 : n9), [d]),
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
                allowAnimatedEmoji: L,
                channelGuildId: j,
                messageId: T,
                isBurstReaction: O,
                listHeaderClassName: S,
                activeSectionIndex: G,
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
        let es = (0, eC.Fk)({
            activeCategoryIndex: R,
            isScrolling: b,
            listRef: a,
            onActiveCategoryIndexChange: function (e) {
                "" === v && eN.Om.setActiveCategoryIndex(e);
            },
            scrollOffset: 0,
            searchQuery: v,
            disableForSearch: !1,
        });
        (0, eC.FV)({ searchQuery: v, activeCategoryIndex: R, listRef: a });
        let er = r.useCallback(
                (e) => {
                    (es(e),
                        ei(e),
                        is({ emojiListRef: a, sectionDescriptors: E, scrollTop: e, searchQuery: v, setShowUpsell: B }));
                },
                [es, ei, a, E, v, B],
            ),
            ea = E.length > 0;
        (r.useEffect(() => {
            K &&
                (eV.default.track(eM.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: el.e.EMOJI_PICKER_FLOATING_UPSELL,
                    location: w,
                    location_stack: U,
                }),
                (0, nD.sq)(eM.U7l.PREMIUM_UPSELL_VIEWED, U, () => (0, nw.uq)(el.e.EMOJI_PICKER_FLOATING_UPSELL)));
        }, [w, U, K]),
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
                            ? nb.O.announce(en.intl.string(en.t.uZ4F2O), "polite")
                            : nb.O.announce(en.intl.string(en.t.IxxiKF), "assertive"),
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
                        ? (0, l.jsx)(nv.A, {
                              role: "none presentation",
                              className: n4.p_,
                              listPadding: W,
                              onScroll: er,
                              renderRow: X,
                              renderSection: z,
                              renderSectionHeader: Z,
                              renderSectionFooter: Y,
                              rowCount: C,
                              rowCountBySection: I,
                              rowHeight: c + 2 * it,
                              sectionHeaderHeight: q,
                              sectionMarginBottom: $,
                              sectionFooterHeight: Q,
                              stickyHeaders: !0,
                              ref: a,
                          })
                        : (0, l.jsx)(nR.A, {
                              message: (0, l.jsx)(H.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: en.intl.string(en.t.IxxiKF),
                              }),
                              className: n4.BZ,
                          }),
                    D || nO.Fr
                        ? null
                        : (0, l.jsx)(nk.d, {
                              showUpsell: K,
                              text:
                                  ((t = (0, e3.Dd)(el.PremiumTypes.TIER_2)),
                                  en.intl.format(en.t.gMVjeS, {
                                      nitroTierName: t,
                                      onClick: () => {
                                          f({ type: tv.PREMIUM, emojiDescriptor: void 0 });
                                      },
                                  })),
                              button: ((n = (0, nM.qD)()), (0, e3.LE)(n, el.pe.TIER_2) ?? en.intl.string(en.t.BmJkbd)),
                              buttonAnalyticsObject: { section: eM.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                              leadingAction: (0, l.jsx)(nG.l, {
                                  size: "sm",
                                  className: n4.ij,
                                  location: N.A.PREMIUM_WISHLIST_EMOJI_UPSELL,
                              }),
                          }),
                ],
            })
        );
    }),
    is = e7().throttle(
        function (e) {
            let { emojiListRef: t, sectionDescriptors: n, scrollTop: i, searchQuery: s, setShowUpsell: l } = e;
            l(
                (0, nL.s)({ listRef: t, searchQuery: s, nitroLockedSectionStates: n, scrollTop: i })
                    .areOnlyNitroLockedSectionsVisible,
            );
        },
        300,
        { leading: !1, trailing: !0 },
    );
var il = n(506774),
    ir = n(28863),
    ia = n(277984),
    io = n(404374),
    ic = n(780964),
    iu = n(766075),
    id = n(166403),
    im = n(506150);
let iE = "premiumRetentionEmojiPickerNotice",
    iI = il.w.get(iE),
    ig = function (e) {
        let { closePopout: t, channel: n } = e,
            [i, s] = r.useState(!1),
            { subscription: a, hasFetchedSubscriptions: o } = (0, m.cf)([id.A], () => ({
                subscription: id.A.getPremiumSubscription(),
                hasFetchedSubscriptions: id.A.hasFetchedSubscriptions(),
            }));
        if (
            (r.useEffect(() => {
                o || (0, ia.hP)();
            }, [o]),
            null == a || !(0, e3.PK)(a.status) || i)
        )
            return null;
        let c = a.status === eM.Dmq.PAST_DUE ? (0, e3.ji)(a).expiresDate : ed()(a.currentPeriodStart).add(el.ph),
            u = `${a.id}:${c.toISOString()}`;
        if (iI === u) return null;
        let d =
            e3.Ay.getPremiumType(a.planId) === el.PremiumTypes.TIER_0
                ? io.k0.PREMIUM_TIER_0
                : e3.Ay.getPremiumType(a.planId) === el.PremiumTypes.TIER_1
                  ? io.k0.PREMIUM_TIER_1
                  : io.k0.PREMIUM_TIER_2;
        return (0, l.jsxs)(H.E, {
            variant: "text-xs/medium",
            color: "text-default",
            className: im.g$,
            children: [
                (0, l.jsx)(P.t, { size: "md", className: im.lu, color: d }),
                (0, l.jsxs)("div", {
                    className: im.Xn,
                    children: [
                        (0, l.jsx)(H.E, {
                            variant: "text-xs/normal",
                            children: en.intl.format(en.t.bTMjiO, {
                                planName: e3.Ay.getTierDisplayNameByPlanId(a.planId),
                                endsAt: c.toDate(),
                            }),
                        }),
                        (0, l.jsx)("div", {
                            children: (0, l.jsx)(ir.Anchor, {
                                onClick: () => {
                                    ((0, eB.xf)(n), t(), (0, iu.openUserSettings)(ic.X.NITRO_PANEL));
                                },
                                children: en.intl.string(en.t.W3aavh),
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(ej.D, {
                    onClick: () => {
                        (il.w.set(iE, u), (iI = u), s(!0));
                    },
                    children: (0, l.jsx)(eT.P, { size: "md", color: "currentColor", className: im.YF }),
                }),
            ],
        });
    };
var ih = n(148361);
let ip = (0, eK.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    iA = (0, eK.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT);
function i_(e) {
    return e.stopPropagation();
}
function iN(e, t) {
    eN.Om.setInspectedExpressionPosition(e, t, ee.t.GRID_NAVIGATOR_EVENT);
}
let iC = u()(eB.bo, 200),
    ix = u()(eB.Wi, 200),
    iy = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    ij = r.memo(function (e) {
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
                emojiSize: R = tC.as.MEDIUM,
                hasTabWrapper: v = !1,
                onSelectEmoji: L,
                containerWidth: P,
                onNavigateAway: M,
                persistSearch: D,
                className: w,
                headerClassName: U,
                analyticsOverride: G = iy,
                searchProps: V = {},
                wrapper: B,
                shouldHidePickerActions: H = !1,
                messageId: W,
                renderHeader: X,
                listHeaderClassName: z,
                categoryListClassName: Z,
                showOnlyUnicode: Y = !1,
                showAddEmojiButton: $,
                ref: q,
                isViewingEmojiPacks: Q,
                onViewEmojiPacksChange: et,
            } = e,
            { onFocus: ei, onKeyDown: es, autoFocus: er = !0, accessory: eu } = V,
            ed = (0, m.bG)([eJ.Ay], () => (null != E ? eJ.Ay.getDefaultChannel(E) : null), [E]),
            [em, ef] = r.useState(null),
            eE = r.useRef(""),
            eI = (0, k.RQ)((e) => e.searchQuery),
            eg = r.useRef(null),
            eh = r.useRef(null),
            ep = r.useRef(null),
            ex = (0, O.H)("emoji_picker") && !Y && (0, e8.z)(c);
        r.useEffect(() => {
            ex && (0, S.Fp)();
        }, [ex]);
        let [ey, ej] = r.useState(!1),
            eT = ex && (Q ?? ey),
            eO = et ?? ej,
            eS = r.useCallback((e) => {
                (ep.current?.focus(), (0, S.M5)(e));
            }, []),
            eb =
                ((t = (0, m.bG)([K.A], () => (ex ? K.A.getPacks() : ec), [ex])),
                (n = (0, m.bG)(
                    [eo.A],
                    () => (ex ? eo.A.frecencyWithoutFetchingLatest.pinnedEmojiPacks?.packIds : void 0),
                    [ex],
                )),
                r.useMemo(
                    () =>
                        ex && null != n && 0 !== n.length
                            ? n.map((e) => t.find((t) => t.id === e)).filter((e) => null != e)
                            : ec,
                    [ex, t, n],
                ));
        null == u && null != ed && (u = ed);
        let eR = u?.getGuildId() ?? E ?? null,
            [eL, eP] = r.useState(!1),
            eD = r.useRef(null),
            ew = F.default.getCurrentUser(),
            eK = (0, J.ki)(ew),
            eH = eL && eK;
        r.useImperativeHandle(q, () => ({ onPickerOpen: td }));
        let { location: eW } = (0, p.p)(),
            { page: e$, section: eQ, object: e0, openPopoutType: e1, popoutLocation: e2 } = G,
            e3 = r.useMemo(() => ({ ...eW, section: eQ ?? eM.JJy.EMOJI_PICKER_POPOUT }), [eW, eQ]),
            { analyticsLocations: e4 } = (0, x.Ay)(N.A.EMOJI_PICKER),
            { diversitySurrogate: e6 } = (0, m.cf)([j.Ay], () => ({ diversitySurrogate: j.Ay.diversitySurrogate })),
            e9 = (0, eB.sL)(eI, u, c, Y),
            te = null == e9 ? 0 : e9.locked.length + e9.unlocked.length,
            tt = eF.iM.useSetting(),
            tn = r.useMemo(() => new Set(tt), [tt]),
            ti = r.useCallback((e) => {
                eF.iM.updateSetting(Array.from(e));
            }, []),
            ts = (0, eC.oV)({
                gridWrapperRef: eg,
                containerWidth: P,
                showingEmptyState: eT,
                listPaddingLeft: iA,
                listScrollbarWidth: 8,
            }),
            {
                rowCountBySection: tr,
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
                    f = (0, m.bG)([j.Ay], () => j.Ay.categories),
                    E = r.useMemo(() => (d ? tT.Ay.getCategories() : f), [f, d]),
                    I = (0, m.bG)([ev.A], () => ev.A.getGuild(t?.getGuildId()), [t]),
                    g = t?.getGuildId() ?? n,
                    h = (0, m.bG)([j.Ay], () => j.Ay.getDisambiguatedEmojiContext(g), [g]),
                    p = (0, eB.XI)(g),
                    A = (0, eB.Fj)(g),
                    _ = (0, eB.QZ)(g),
                    { topEmojis: N, newlyAddedEmojis: C } = (0, eZ.A)(g, s),
                    x = (0, m.yK)([tS.Ay], () => tS.Ay.getFlattenedGuildIds(), []),
                    y = (0, m.bG)([j.Ay], () => j.Ay.expandedSectionsByGuildIds),
                    T = (0, m.bG)([F.default], () => F.default.getCurrentUser()),
                    O = (0, J.ki)(T),
                    S = (0, J.ki)(T, el.PremiumTypes.TIER_2),
                    b = (0, tO.k0)(),
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
                                [E, I] = e7().partition(l, (e) => {
                                    let n = eX.Ay.isEmojiDisabled({ emoji: e, channel: t, intention: s });
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
                                                a.sectionId === tC.s.TOP_GUILD_EMOJI
                                                    ? (0, eB.DA)(N, C, e.id ?? e.uniqueName ?? e.name)
                                                    : tC.tm.NONE,
                                        }));
                                if ((x.push(i), !u)) {
                                    if (p && e === _ - 1) {
                                        let t = x[e];
                                        t.push({
                                            type: 1,
                                            guildId: h.id,
                                            name: en.intl.string(en.t.NZI2Zk),
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
                                    type: tC.s.SEARCH_RESULTS,
                                    sectionId: tC.s.SEARCH_RESULTS,
                                    count: l.unlocked.length,
                                    isNitroLocked: !1,
                                }),
                                0 !== l.locked.length &&
                                    g(l.locked, {
                                        type: tC.s.PREMIUM_UPSELL,
                                        categoryId: tC.R2.PREMIUM_UPSELL,
                                        sectionId: tC.s.PREMIUM_UPSELL,
                                        count: l.locked.length,
                                        isNitroLocked: !O,
                                    }));
                        else {
                            let e = E.includes(tC.R2.CUSTOM) ? tC.R2.CUSTOM : tT.Ay.getCategories()[0];
                            for (let n of E) {
                                if (n === e)
                                    for (let e of u) {
                                        let t = e7().compact(
                                            e.emojis.map((e) => {
                                                let { id: t } = e;
                                                return h.getById(t);
                                            }),
                                        );
                                        g(t, {
                                            type: tC.s.PACK,
                                            pack: e,
                                            sectionId: `pack:${e.id}`,
                                            count: t.length,
                                            isNitroLocked: !S,
                                        });
                                    }
                                if (n === tC.R2.CUSTOM) {
                                    function j(e) {
                                        let i = R.get(e);
                                        if (null == i) return;
                                        let l = i.filter(
                                            (n) =>
                                                !tR.includes(
                                                    eX.Ay.getEmojiUnavailableReason({
                                                        emoji: n,
                                                        channel: t ?? eJ.Ay.getDefaultChannel(e),
                                                        intention: s,
                                                    }),
                                                ),
                                        );
                                        if (0 === l.length) return;
                                        let r = ev.A.getGuild(e),
                                            a =
                                                b ||
                                                (!O &&
                                                    eX.Ay.isEmojiCategoryNitroLocked({
                                                        categoryEmojis: l,
                                                        channel: t,
                                                        intention: s,
                                                    }));
                                        g(l, {
                                            categoryId: n,
                                            guild: r,
                                            type: tC.s.GUILD,
                                            sectionId: null != r ? r.id : (0, tj.A)(),
                                            count: l.length,
                                            isNitroLocked: a,
                                        });
                                    }
                                    if ((null != I && j(I.id), (0, eY.isExternalEmojiAllowedForIntention)(s)))
                                        for (let e of x) (null == I || I.id !== e) && j(e);
                                } else if (n === tC.R2.TOP_GUILD_EMOJI) {
                                    if (null != I) {
                                        let { allEmojis: e } = (0, ez.W)({ topEmojis: N, newlyAddedEmojis: C });
                                        e.length > 0 &&
                                            g(e, {
                                                categoryId: n,
                                                guild: ev.A.getGuild(I.id),
                                                type: tC.s.TOP_GUILD_EMOJI,
                                                sectionId: tC.s.TOP_GUILD_EMOJI,
                                                count: e.length,
                                                isNitroLocked: !1,
                                            });
                                    }
                                } else if (n === tC.R2.RECENT) {
                                    let e = (s === eY.EmojiIntention.REACTION ? _ : A).filter(
                                        (e) => !eX.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }),
                                    );
                                    g(e, {
                                        categoryId: n,
                                        type: tC.s.RECENT,
                                        sectionId: tC.s.RECENT,
                                        count: e.length,
                                        isNitroLocked: !1,
                                    });
                                } else if (n === tC.R2.FAVORITES) {
                                    let e = p.filter(
                                        (e) => !eX.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }),
                                    );
                                    0 !== e.length &&
                                        g(e, {
                                            categoryId: n,
                                            type: tC.s.FAVORITES,
                                            sectionId: tC.s.FAVORITES,
                                            count: e.length,
                                            isNitroLocked: !1,
                                        });
                                } else {
                                    let e = tT.Ay.getByCategory(n);
                                    null != e &&
                                        g(e, {
                                            categoryId: n,
                                            type: tC.s.UNICODE,
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
                gridWidth: ts,
                fallbackGuildId: eR,
                channel: u,
                pickerIntention: c,
                emojiSearchResults: e9,
                collapsedSections: tn,
                emojiPaddingHorizontal: ip,
                emojiSpriteSize: R,
                pinnedPacks: eb,
                showOnlyUnicode: Y,
            }),
            { newlyAddedEmojis: tu } = (0, eZ.A)(eR, c);
        ((i = r.useRef({ intention: c, isBurstReaction: eL, analyticsObject: e0 })),
            r.useEffect(() => {
                i.current.intention === eY.EmojiIntention.REACTION && eq(i.current);
            }, []));
        let td = r.useCallback(() => {
                let e = tu.length > 0 ? tu[0].id : null;
                ((0, e_.uV)(eR, e), eq({ intention: c, isBurstReaction: eL, analyticsObject: e0 }));
            }, [tu, eR, c, eL, e0]),
            tm = r.useCallback(() => {
                (b(),
                    M?.(),
                    (0, eG.A)({
                        subscriptionTier: el.pe.TIER_2,
                        analyticsLocations: [...e4, N.A.EMOJI_PACKS],
                        analyticsObject: { ...e3, object: eM.ZSU.EMOJI },
                    }));
            }, [e3, e4, b, M]),
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
                    c = (0, m.bG)([j.Ay], () => j.Ay.getDisambiguatedEmojiContext(n?.getGuildId() ?? i), [i, n]);
                return r.useCallback(
                    (e, i) => {
                        if (0 === e.type) {
                            let { emoji: r } = e;
                            if (null == r) return;
                            let u = eX.Ay.getEmojiUnavailableReason({ emoji: r, channel: n, intention: t });
                            if (i.toggleFavorite)
                                return void (c.isFavoriteEmojiWithoutFetchingLatest(r) || null != u
                                    ? (0, g.Sw)(r)
                                    : (o?.(e), (0, g.V4)(r)));
                            if (u !== eY.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) {
                                if (u === eY.EmojiDisabledReasons.PREMIUM_LOCKED) {
                                    (a?.(e, u), l({ type: 0, emojiDescriptor: e }));
                                    return;
                                }
                                if (u === eY.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED && r.type === T.i.GUILD) {
                                    (a?.(e, u), l({ type: 1, guildId: r.guildId, emojiId: r.id }));
                                    return;
                                }
                                u !== eY.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE &&
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
                    e?.type === tv.PREMIUM && e.emojiDescriptor?.emoji?.type === T.i.PACK ? tm() : ef(e);
                },
                emojiSelectAnalytics: (e, t) => {
                    "" !== eI
                        ? (0, eB.Wf)({
                              emoji: e.emoji,
                              location: { ...e3, object: eM.ZSU.EMOJI },
                              searchQuery: eI,
                              isLocked: null != t,
                              intention: c,
                              messageId: W,
                          })
                        : (0, eB._7)({
                              emoji: e.emoji,
                              location: { ...e3, object: e0 ?? eM.ZSU.EMOJI, ...(null != e$ && { page: e$ }) },
                              pickerIntention: c,
                              category: e.category,
                              subCategory: e.subCategory,
                              position: e.columnIndex + 1,
                              newlyAddedHighlight:
                                  e.subCategory === tC.tm.NEWLY_ADDED_EMOJI && eA.isNewerThanLastSeen(eR, e.emoji.id),
                              isBurstReaction: eL,
                              messageId: W,
                              lockedReason: t,
                              visibleRowIndex: e.visibleRowIndex,
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, eB.C5)({ emoji: e.emoji, location: { ...e3, object: eM.ZSU.EMOJI } });
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
                    f = (0, m.bG)([j.Ay], () => j.Ay.getDisambiguatedEmojiContext(c), [c]),
                    E = r.useCallback(
                        (e, i) => {
                            if (e.type === tb.EMOJI) {
                                if (e.emoji.type === T.i.PACK)
                                    return void l(e, {
                                        isFinalSelection: !i.shiftKey,
                                        toggleFavorite: i.altKey,
                                        isBurst: u,
                                    });
                                if (null != e.emoji && i.altKey)
                                    return void (f.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                        ? (0, g.Sw)(e.emoji)
                                        : ((0, eB.C5)({ emoji: e.emoji, location: { ...t, object: eM.ZSU.EMOJI } }),
                                          (0, g.V4)(e.emoji)));
                                let r = {
                                    page: null != c ? eM.liQ.GUILD_CHANNEL : eM.liQ.DM_CHANNEL,
                                    section: eM.JJy.EMOJI_PICKER_POPOUT,
                                    object: eM.ZSU.EMOJI,
                                };
                                (u &&
                                    (r = {
                                        page: null != c ? eM.liQ.GUILD_CHANNEL : eM.liQ.DM_CHANNEL,
                                        section: eM.JJy.EMOJI_PICKER_POPOUT,
                                        object: eM.ZSU.EMOJI,
                                    }),
                                    (0, eB._7)({
                                        emoji: e.emoji,
                                        location: r,
                                        pickerIntention: n,
                                        category: e.category,
                                        subCategory: e.subCategory,
                                        newlyAddedHighlight:
                                            e.subCategory === tC.tm.NEWLY_ADDED_EMOJI &&
                                            eA.isNewerThanLastSeen(c, e.emoji.id),
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
                    } = (0, eC.Ff)({
                        columnCounts: i,
                        gridNavigatorId: tC.lq,
                        itemGrid: a,
                        itemList: o,
                        onGridNavigatorItemSelect: E,
                        onGridNavigatorPositionChange: iN,
                    });
                return (
                    r.useEffect(
                        () =>
                            eN.Om.subscribe(
                                (e) => e.inspectedExpressionPosition,
                                (e) => {
                                    if (null == e) return;
                                    let { columnIndex: t, rowIndex: n, source: i } = e;
                                    i !== ee.t.GRID_NAVIGATOR_EVENT &&
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
                isBurstReaction: eH,
            });
        (((e, t) => {
            let [n, i] = r.useState(null);
            (r.useEffect(() => {
                null != n && (t.current?.scrollToSectionTop(n), i(null));
            }, [t, n]),
                r.useEffect(() => {
                    i(eN.Om.getState().activeCategoryIndex);
                }, [e]));
        })(P, eh),
            r.useLayoutEffect(() => {
                er && ep.current?.focus();
            }, [P, e6, ep, er]),
            (s = r.useRef(eT)),
            r.useEffect(() => {
                (er && s.current && !eT && ep.current?.focus(), (s.current = eT));
            }, [er, eT, ep]),
            r.useEffect(() => {
                D || (0, k.Ri)("");
            }, [D]),
            r.useEffect(
                () => (
                    eV.default.track(eM.HAw.OPEN_POPOUT, {
                        type: e1 ?? "Emoji Picker",
                        guild_id: eR,
                        location: e2,
                        ...(0, C.dI)(u),
                    }),
                    () => {
                        (iC.cancel(), ix.cancel());
                    }
                ),
                [e1, eR, e2, u],
            ),
            (0, A.Ay)(() => ((0, eB.V$)({ intention: c, location: e3 }), (eE.current = eI), eN.Om.resetStoreState)),
            r.useEffect(() => () => (0, eU.sF)(eU._2.FAVORITE_EMOJI_TOOLTIP), []),
            r.useLayoutEffect(() => {
                let { columnIndex: e, rowIndex: t } = eN.Om.getState().inspectedExpressionPosition;
                to[t]?.[e] == null && 0 !== e && eN.Om.setInspectedExpressionPosition(0, 0);
            }, [to]),
            r.useEffect(() => {
                if (("" === eE.current && "" !== eI && (0, eB.EG)(e3, c), "" !== eI && eE.current !== eI)) {
                    let e = eN.Om.getAnalyticsId();
                    0 === te
                        ? iC({ location: e3, searchQuery: eI, intention: c, loadId: e })
                        : ix({
                              totalResults: te,
                              numEmojiLocked: e9?.locked.length ?? 0,
                              location: e3,
                              searchQuery: eI,
                              intention: c,
                              loadId: e,
                          });
                }
                eE.current = eI;
            }, [eI, e3, te, e9, c]));
        let t_ = B ?? (v ? "div" : I.l),
            tN = null != ts;
        function tx(e, t) {
            tf(e, { ...t, isBurst: eH });
        }
        em?.type === tv.PREMIUM
            ? (a = (0, l.jsx)(ih.default, {
                  onUpsellClicked: tE,
                  emojiDescriptor: em.emojiDescriptor,
                  pickerIntention: c,
                  analyticsLocation: e3,
                  onClose: () => ef(null),
                  channel: u,
              }))
            : em?.type === tv.ROLE_SUBSCRIPTION &&
              (a = (0, l.jsx)(ek, { onClose: () => ef(null), guildId: em.guildId, emojiId: em.emojiId }));
        let ty = (0, _.A)((e, t, n) => {
                tx(
                    {
                        type: tb.EMOJI,
                        emoji: e,
                        isDisabled: !e.available,
                        size: R,
                        rowIndex: 0,
                        columnIndex: t,
                        visibleRowIndex: 0,
                        category: tC.s.PACK,
                        subCategory: tC.tm.NONE,
                    },
                    n,
                );
            }),
            tL = (0, l.jsx)(n_, {
                channel: u,
                pickerIntention: c,
                emojiListRef: eh,
                onKeyDown: (e) => {
                    (tp?.(e), es?.(e));
                },
                searchBarRef: ep,
                onFocus: ei,
                autoFocus: er,
                accessory: eu,
                headerClassName: U,
                diversitySurrogate: e6,
                isBurstReaction: eL,
                onBurstReactionToggle: function () {
                    (eP(!eL), ep.current?.focus());
                },
                burstToggleRef: eD,
                renderHeader: X,
                showAddEmojiButton: $,
                closePopout: b,
            }),
            tP = [];
        j.Ay.hasFavoriteEmojis(eR) || tP.push(f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let tM = (0, l.jsxs)(r.Fragment, {
                children: [
                    v ? tL : null,
                    (0, l.jsxs)("div", {
                        className: nA.uK,
                        ref: eg,
                        children: [
                            (0, l.jsx)(ig, { channel: u, closePopout: b }),
                            (0, l.jsx)(y.Ay, {
                                contentTypes: tP,
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    if (t === f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                        return (0, l.jsx)(tQ, { markAsDismissed: () => n(tl.i.UNKNOWN) });
                                },
                            }),
                            H
                                ? null
                                : (0, l.jsx)("div", {
                                      className: nA.Iy,
                                      id: tC.lq,
                                      ...th,
                                      children: tN
                                          ? (0, l.jsx)(ii, {
                                                collapsedSections: tn,
                                                diversitySurrogate: e6,
                                                emojiGrid: to,
                                                emojiListRef: eh,
                                                emojiSize: R,
                                                getEmojiItemProps: tI,
                                                getEmojiRowProps: tg,
                                                gridWidth: ts,
                                                isUsingKeyboardNavigation: tA,
                                                onEmojiSelect: tx,
                                                onRemovePack: eS,
                                                setUpsellConfigs: ef,
                                                rowCount: to.length,
                                                rowCountBySection: tr,
                                                sectionDescriptors: ta,
                                                setCollapsedSections: ti,
                                                channelGuildId: eR,
                                                messageId: W,
                                                isBurstReaction: eH,
                                                listHeaderClassName: z,
                                            })
                                          : null,
                                  }),
                        ],
                    }),
                    (0, l.jsx)(nT, { emojiGrid: to, className: nA.qV, guildId: eR, pickerIntention: c, channel: u }),
                    a,
                    c === eY.EmojiIntention.REACTION
                        ? (0, l.jsx)(e5, { targetElementRef: eD, shouldShow: eL && !eK, onDismiss: () => eP(!1) })
                        : null,
                ],
            }),
            tD = (0, l.jsx)(h.A, {
                ...e3,
                children: (0, l.jsxs)(t_, {
                    id: tC.Do,
                    "aria-labelledby": v && !eT ? tC.k1 : void 0,
                    role: v && !eT ? "tabpanel" : void 0,
                    className: o()(nA.iE, { [nA.r6]: v, [nA.cB]: eH }),
                    children: [
                        v || eT ? null : tL,
                        (0, l.jsx)("div", {
                            className: o()(nA.Fb, w, { [nA.eW]: eT && !v }),
                            onScroll: i_,
                            children: eT ? (0, l.jsx)(ea, { onBack: () => eO?.(!1), onSelectEmoji: ty }) : tM,
                        }),
                        H || eT
                            ? null
                            : (0, l.jsx)(t$, {
                                  className: o()(nA.jv, Z),
                                  emojiListRef: eh,
                                  sectionDescriptors: ta,
                                  intention: c,
                                  channel: u,
                                  fallbackGuildId: eR,
                                  showOnlyUnicode: Y,
                                  pinnedPacks: eb,
                                  onViewEmojiPacks: ex ? () => eO?.(!0) : void 0,
                              }),
                    ],
                }),
            });
        return (0, l.jsx)(x.f5, { value: e4, children: tD });
    });
