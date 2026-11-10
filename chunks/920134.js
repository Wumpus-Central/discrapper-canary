(n.d(t, { A: () => iT }), n(321073));
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
    h = n(554375),
    g = n(820284),
    p = n(212245),
    A = n(964486),
    _ = n(765548),
    N = n(793574),
    C = n(149468),
    y = n(688810),
    x = n(379848),
    j = n(121681),
    O = n(770335),
    T = n(490035),
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
    U = n(311364),
    G = n(151271),
    F = n(465794),
    J = n(683973),
    V = n(287809),
    K = n(474090),
    B = n(186280),
    H = n(956396),
    W = n(118057),
    X = n(834730),
    z = n(847374),
    Z = n(320448),
    Y = n(834040),
    $ = n(499373),
    q = n(559106),
    Q = n(442433),
    ee = n(565645),
    et = n(915089),
    en = n(60587),
    ei = n(236432),
    es = n(792996),
    el = n(126904);
let er = r.memo(function (e) {
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
        h = es.intl.string(E ? es.t.iTcuma : es.t.dcl9MQ),
        g = es.intl.string(a ? ei.default["2zxYCx"] : ei.default.Tvdb5N),
        p = r.useMemo(() => t.emojis.filter((e) => e.available), [t.emojis]),
        A = r.useMemo(() => [p.length], [p.length]),
        _ = (0, et.GV)(),
        {
            getContainerProps: N,
            getItemProps: C,
            getRowProps: y,
        } = (0, W.A)({
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
        className: el.nM,
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
                        className: el.DD,
                        direction: "horizontal",
                        gap: 4,
                        children: [
                            (0, l.jsx)(D.D, { className: el.UU, id: m, variant: "body-sm/semibold", children: t.name }),
                            (0, l.jsx)(X.E, {
                                color: "text-subtle",
                                variant: "body-sm/medium",
                                children: es.intl.format(ei.default.UA8cNe, { count: p.length }),
                            }),
                            (0, l.jsx)(R.m, {
                                text: h,
                                children: (0, l.jsx)(v.K, {
                                    autoFocus: i,
                                    "aria-controls": f,
                                    "aria-describedby": m,
                                    "aria-expanded": E,
                                    "aria-label": h,
                                    icon: E ? z.ChevronSmallDownIcon : Z.ChevronSmallRightIcon,
                                    onClick: () => I((e) => !e),
                                    size: "sm",
                                    variant: "icon-only",
                                }),
                            }),
                        ],
                    }),
                    (0, l.jsx)(R.m, {
                        text: g,
                        children: (0, l.jsx)(v.K, {
                            "aria-label": g,
                            icon: a ? Y.MinusIcon : $.PlusMediumIcon,
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
                className: o()(el.gm, { [el.jE]: E }),
                tabIndex: t.available && p.length > 0 ? x.tabIndex : -1,
                children: (0, l.jsx)("div", {
                    className: el.nI,
                    ...y(0),
                    children: p.map((e, i) => {
                        let { ref: s, ...r } = C(i, 0);
                        return (0, l.jsx)(
                            R.m,
                            {
                                text: `:${e.name}:`,
                                ariaHidden: !0,
                                asContainer: !0,
                                children: (0, l.jsx)(q.vN, {
                                    children: (0, l.jsx)("button", {
                                        ...r,
                                        ref: s,
                                        "aria-label": `:${e.name}:`,
                                        className: el.Z8,
                                        "data-type": en.g.EMOJI,
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
                                            (0, Q.L3)(e, async () => {
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
                                        children: (0, l.jsx)(ee.A, {
                                            animated: e.animated,
                                            alt: "",
                                            className: el.Zg,
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
var ea = n(682901),
    eo = n(429800);
function ec(e) {
    let { onBack: t, onSelectEmoji: n } = e,
        i = es.intl.string(ei.default.Nwj3fK),
        s = r.useRef(null),
        a = (0, G.RQ)((e) => e.showSelectedEmojiPackId),
        o = (0, m.bG)([H.A], () => H.A.getPacks()),
        c = null != a && o.some((e) => e.id === a),
        u = (0, m.bG)([V.default], () => V.default.getCurrentUser()),
        d = (0, K.ki)(u, ea.PremiumTypes.TIER_2);
    (r.useLayoutEffect(() => {
        c &&
            (s.current?.scrollIntoView({ block: "start" }),
            s.current?.querySelector("button[aria-expanded]")?.focus({ preventScroll: !0 }));
    }, [c, a]),
        (0, B.i3)(d),
        (0, B.$W)("emoji_picker", d));
    let f = (0, J.k)().pinnedEmojiPacks?.packIds,
        E = r.useCallback((e) => {
            (0, S.Ls)(e.id);
        }, []),
        I = r.useCallback((e) => {
            (0, S.M5)(e.id);
        }, []);
    return (0, l.jsxs)("div", {
        className: eo.kL,
        children: [
            (0, l.jsx)("div", { "aria-hidden": !0, className: eo.Tp }),
            (0, l.jsx)("div", {
                className: eo.wx,
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
                                        icon: L.ArrowSmallLeftIcon,
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
                                        (0, l.jsx)(P.NitroWheelIcon, { color: M.A.colors.TEXT_DEFAULT, size: "xs" }),
                                        (0, l.jsxs)(b.B, {
                                            align: "center",
                                            direction: "horizontal",
                                            gap: 8,
                                            fullWidth: !1,
                                            children: [
                                                (0, l.jsx)(D.D, {
                                                    variant: "heading-sm/semibold",
                                                    children: es.intl.string(ei.default["0+5+Oy"]),
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
                            : (0, l.jsx)(U.Y, {
                                  newLocations: [B.Vg.emoji_picker.location],
                                  children: (0, l.jsx)(F.A, {
                                      buttonTextOverride: es.intl.string(es.t.hIVbiP),
                                      size: "sm",
                                      subscriptionTier: ea.pe.TIER_2,
                                  }),
                              }),
                    ],
                }),
            }),
            (0, l.jsx)(k.d_, {
                className: eo.p_,
                scrollbarGutter: !1,
                children: o.map((e, t) =>
                    (0, l.jsxs)(
                        r.Fragment,
                        {
                            children: [
                                t > 0 ? (0, l.jsx)("hr", { className: eo.yF }) : null,
                                (0, l.jsx)(
                                    er,
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
var eu = n(617617);
let ed = [];
var em = n(536637),
    ef = n.n(em),
    eE = n(73153),
    eI = n(811091);
let eh = { lastSeenNewlyAddedEmojiIds: {} },
    eg = eh,
    ep = {};
function eA() {
    for (let e in ep) eg.lastSeenNewlyAddedEmojiIds[e] = ep[e];
}
class e_ extends m.Ay.PersistedStore {
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
        eg = e ?? eh;
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
        if (null == n || eI.default.compare(t, n.id) > 0) return !0;
        {
            let e = ef()(n.lastSeen);
            return ef()().isBefore(e.add(2, "weeks")) && !n.acknowledged;
        }
    }
}
let eN = new e_(eE.h, {
    LOGOUT: function () {
        ((eg = eh), (ep = {}));
    },
    NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = ep[t] ?? eg.lastSeenNewlyAddedEmojiIds[t];
        null == i || 0 > eI.default.compare(i.id, n)
            ? (ep[t] = { id: n, lastSeen: Date.now(), acknowledged: !0 })
            : (ep[t] = { ...i, acknowledged: !0 });
    },
    NEWLY_ADDED_EMOJI_SEEN_PENDING: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = ep[t] ?? eg.lastSeenNewlyAddedEmojiIds[t];
        (null == i || 0 > eI.default.compare(i.id, n)) && (ep[t] = { id: n, lastSeen: Date.now(), acknowledged: !1 });
    },
    NEWLY_ADDED_EMOJI_SEEN_UPDATED: eA,
    CLEAR_CACHES: function () {
        ((eg = eh), eA());
    },
    CONNECTION_CLOSED: eA,
});
var eC = n(451731),
    ey = n(850992),
    ex = n(887695),
    ej = n(613412),
    eO = n(462887),
    eT = n(939249),
    eS = n(789645),
    eb = n(696986),
    eR = n(736653),
    ev = n(139286),
    eL = n(976860),
    eP = n(71393),
    eM = n(384684),
    eD = n(985242),
    ew = n(652215),
    ek = n(746080),
    eU = n(196404);
function eG(e) {
    let t,
        { onClose: i, guildId: s, emojiId: r } = e,
        a = ((t = (0, eR.Ay)()), (0, eO.q)(t) ? n(454333) : n(674463)),
        { analyticsLocations: o } = (0, y.Ay)(N.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, ev.A)({
        type: ej.ImpressionTypes.MODAL,
        name: ej.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: { location_stack: o, emoji_guild_id: s, emoji_id: r ?? null },
    });
    let c = (0, m.bG)([eP.A], () => eP.A.getGuild(s)),
        u = (0, m.bG)([eM.A], () => null != s && eM.A.getUserSubscriptionRoles(s).size > 0),
        d = u ? es.intl.string(es.t.GoLM9z) : es.intl.formatToPlainString(es.t["h0u/Hi"], { serverName: c?.name }),
        f = u ? es.intl.string(es.t.PjZ7Db) : es.intl.string(es.t.p8FG1D);
    return (0, l.jsxs)("div", {
        className: eU.kL,
        children: [
            (0, l.jsx)("div", { className: eU.Tp }),
            (0, l.jsxs)("div", {
                className: eU.Qs,
                children: [
                    (0, l.jsx)(eT.D, {
                        className: eU.b,
                        "aria-label": es.intl.string(es.t.cpT0Cq),
                        onClick: i,
                        children: (0, l.jsx)(eS.XSmallIcon, {
                            size: "xs",
                            color: "currentColor",
                            "aria-label": es.intl.string(es.t.cpT0Cq),
                            className: eU.yP,
                        }),
                    }),
                    (0, l.jsx)("img", { alt: "", src: a, className: eU.Tn }),
                    (0, l.jsx)(eb.h, { size: 22 }),
                    (0, l.jsx)(D.D, {
                        color: "text-strong",
                        variant: "heading-lg/semibold",
                        className: eU.wx,
                        children: es.intl.string(es.t.cBjkcx),
                    }),
                    (0, l.jsx)(eb.h, { size: 4 }),
                    (0, l.jsx)(X.E, {
                        color: "text-default",
                        variant: "body-md/normal",
                        className: eU.h_,
                        children: d,
                    }),
                    (0, l.jsx)(eb.h, { size: 24 }),
                    (0, l.jsx)(eD.A, {
                        text: f,
                        onClick: function () {
                            (0, eL.pX)(ew.BVt.CHANNEL(s, ek.VV.ROLE_SUBSCRIPTIONS), { sourceLocationStack: o });
                        },
                    }),
                ],
            }),
        ],
    });
}
var eF = n(450510),
    eJ = n(778705),
    eV = n(253932),
    eK = n(808728),
    eB = n(129230),
    eH = n(240248),
    eW = n(822123),
    eX = n(734057),
    ez = n(309010),
    eZ = n(690521),
    eY = n(818645),
    e$ = n(316884),
    eq = n(307731),
    eQ = n(698279);
function e0(e) {
    let { intention: t, containerWidth: n, rowSize: i, isBurstReaction: s, analyticsObject: l } = e,
        r = eX.A.getChannel(ez.Ay.getChannelId()),
        a = r?.getGuildId(),
        o =
            t === eq.EmojiIntention.REACTION
                ? j.Ay.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice()
                : j.Ay.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        c = null != r ? j.Ay.getDisambiguatedEmojiContext(r.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        u =
            t === eq.EmojiIntention.REACTION
                ? j.Ay.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems
                : j.Ay.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        d = o.slice(0, u),
        m = null != a ? j.Ay.getGuildEmoji(a) : [],
        f = j.Ay.getDisambiguatedEmojiContext(r?.getGuildId()).getCustomEmoji(),
        { topEmojis: E, newlyAddedEmojis: I } = (0, e$.b)({ guildId: r?.getGuildId(), pickerIntention: t }),
        { visibleTopEmojis: h, visibleNewlyAddedEmojis: g } = (0, eY.W)({
            topEmojis: E,
            newlyAddedEmojis: I,
            rowSize: i,
        });
    C.Ay.trackWithMetadata(
        t === eq.EmojiIntention.REACTION ? ew.HAw.REACTION_PICKER_OPENED : ew.HAw.EXPRESSION_PICKER_OPENED,
        {
            width: n,
            tab: eQ.kx.EMOJI,
            badged: !1,
            num_expressions_favorites: c.length,
            num_animated_expressions_favorites: c.filter((e) => e?.animated).length,
            num_custom_expressions_favorites: c.filter(eZ.Ay.isCustomEmoji).length,
            num_standard_expressions_favorites: c.filter((e) => null == e.id).length,
            num_expressions_frecent: d.length,
            num_animated_expressions_frecent: d.filter((e) => e?.animated).length,
            num_custom_expressions_frecent: d.filter(eZ.Ay.isCustomEmoji).length,
            num_standard_expressions_frecent: d.filter((e) => null == e.id).length,
            num_current_guild_expressions: m.length,
            num_custom_expressions_total: f.size,
            num_expressions_top_server: h.length,
            num_animated_expressions_top_server: h.filter((e) => e.animated).length,
            num_expressions_newly_added: g.length,
            num_animated_expressions_newly_added: g.filter((e) => e.animated).length,
            ...(t === eq.EmojiIntention.REACTION && { is_burst: s }),
            ...(null != l && { location_object: l }),
        },
    );
}
var e1 = n(206248),
    e2 = n(423814),
    e3 = n(77528),
    e4 = n(783420),
    e5 = n(448645);
let e8 = { object: ew.ZSU.BUTTON_CTA, section: ew.JJy.SUPER_REACTION_PICKER };
function e6(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: i } = e,
        s = es.intl.string(es.t.eikz43),
        r = (0, e3.V)(),
        a = (0, e2.O)(),
        o = r?.subscriptionTrial,
        c = null != o || null != a,
        u = o?.skuId ?? ea.pe.TIER_2,
        d = c
            ? null != a
                ? es.intl.formatToPlainString(es.t.bkQ4bH, { percent: a.discount.amount })
                : (0, e5.FY)({ intervalType: o?.interval, intervalCount: o?.intervalCount })
            : es.intl.string(es.t.sEAnVH);
    return (0, l.jsx)(e4.A, {
        subscriptionTier: u,
        premiumModalAnalyticsLocation: e8,
        onSubscribeModalClose: (e) => {
            e && i();
        },
        children: (e) => {
            let { onClick: r } = e;
            return (0, l.jsx)(e1.H, {
                targetElementRef: t,
                shouldShow: n,
                onRequestClose: i,
                position: "bottom",
                assetUrl: "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
                disableMediaViewer: !0,
                badge: c ? { type: "free_trial", variant: "expressive" } : void 0,
                title: es.intl.string(es.t.N4SCJ0),
                body: s,
                action: { text: d, variant: "expressive", icon: P.NitroWheelIcon, onClick: r },
            });
        },
    });
}
var e9 = n(200589),
    e7 = n(435558),
    te = n.n(e7),
    tt = n(837381),
    tn = n(460905),
    ti = n(775602),
    ts = n(713517),
    tl = n(329921),
    tr = n(263775),
    ta = n(49999),
    to = n(938612);
function tc(e) {
    let { onClick: t, listItemId: n } = e,
        i = es.intl.string(ei.default["3D0GLv"]),
        s = (0, tt.rm)(n),
        [r, a] = (0, tr.kn)([f.M.DEFAULT_EMOJIS_PACKS_DISCOVERY_DOT]),
        o = r === f.M.DEFAULT_EMOJIS_PACKS_DISCOVERY_DOT;
    return (0, l.jsx)("div", {
        className: to.nM,
        children: (0, l.jsxs)("div", {
            className: to.Jn,
            children: [
                (0, l.jsx)(R.m, {
                    ariaHidden: !0,
                    position: "right",
                    text: i,
                    children: (0, l.jsx)(eT.D, {
                        ...s,
                        "aria-label": o ? `${i}, ${es.intl.string(es.t.y2b7CA)}` : i,
                        className: to.x6,
                        onClick: function () {
                            (o && a(ta.i.TAKE_ACTION), t());
                        },
                        children: (0, l.jsx)(P.NitroWheelIcon, { size: "md", color: "currentColor" }),
                    }),
                }),
                o && (0, l.jsx)(tl.N, { className: to.aW, size: "md", cutout: "base-lower" }),
            ],
        }),
    });
}
var tu = n(318845),
    td = n(407698),
    tm = n(941971),
    tf = n(531685),
    tE = n(406810),
    tI = n(27232),
    th = n(369606),
    tg = n(413249),
    tp = n(141060),
    tA = n(687966),
    t_ = n(115979),
    tN = n(524501),
    tC = n(926268),
    ty = n(138134),
    tx = n(732139);
let tj = r.memo(function (e) {
    let { categoryId: t, ...n } = e,
        i = (function (e) {
            switch (e) {
                case tx.R2.RECENT:
                    return tE.ClockIcon;
                case tx.R2.FAVORITES:
                    return tI.StarIcon;
                case tx.R2.TOP_GUILD_EMOJI:
                    return th.TrophyIcon;
                case tx.R2.PEOPLE:
                    return tn.ReactionIcon;
                case tx.R2.NATURE:
                    return tg.NatureIcon;
                case tx.R2.FOOD:
                    return tp.FoodIcon;
                case tx.R2.ACTIVITY:
                    return tA.GameControllerIcon;
                case tx.R2.TRAVEL:
                    return t_.BicycleIcon;
                case tx.R2.OBJECTS:
                    return tN.ObjectIcon;
                case tx.R2.SYMBOLS:
                    return tC.HeartIcon;
                case tx.R2.FLAGS:
                    return ty.FlagIcon;
                case tx.R2.PREMIUM_UPSELL:
                    return P.NitroWheelIcon;
                default:
                    return;
            }
        })(t);
    return null == i ? null : (0, l.jsx)(i, { color: "currentColor", ...n });
});
var tO = n(724511),
    tT = n(115560),
    tS = n(7584),
    tb = n(526292),
    tR = n(711014),
    tv = (((i = {})[(i.EMOJI = 0)] = "EMOJI"), (i[(i.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"), i);
let tL = [eq.Am.DISALLOW_EXTERNAL, eq.Am.DISALLOW_CUSTOM];
var tP = (((s = {})[(s.PREMIUM = 0)] = "PREMIUM"), (s[(s.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), s),
    tM = n(342379);
let tD = "expression-guild-",
    { itemIdForIndex: tw } = (0, tu.J)(tD),
    tk = `${tD}view-emoji-packs`,
    tU = (0, eH.xI)(E.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    tG = (0, eH.xI)(E.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    tF = (0, eH.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    tJ = (0, eH.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    tV = (0, eH.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    tK = (0, eH.xI)(tM.__invalid_unicodeCategoryShortcutHeight),
    tB = (0, eH.xI)(E.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    tH = (0, eH.xI)(E.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    tW = tF + tG + 2 * tV,
    tX = tB + 2 * tH,
    tz = tU + tG,
    tZ = tz + tX,
    tY = tF + tJ + 2 * tV,
    t$ = tF + 2 * tV + 2 * tG + tB;
function tq(e) {
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
        { isHoveringOrFocusing: f } = (0, ts.A)(m),
        E = (0, tt.rm)(tw(n)),
        I = a.type === tx.s.GUILD || a.type === tx.s.PACK ? null : a.id,
        h = t === n,
        g = !d && u,
        p = a.type === tx.s.GUILD ? a.guild : null,
        A = a.type === tx.s.PACK ? a.pack : null,
        _ = (0, l.jsxs)(eT.D, {
            innerRef: m,
            ...E,
            "aria-label": a.type === tx.s.PACK ? a.pack.name : (0, eW.wt)(a, p),
            className: o()({
                [tM.ZG]: null != p,
                [tM.td]: null != A,
                [tM.Q0]: null != A && h,
                [tM.Bj]: null == p && null == A,
                [tM.s6]: null == p && null == A && h,
                [tM.xg]: a.type === tx.s.RECENT,
            }),
            onClick: () => {
                (null != p &&
                    eB.default.track(ew.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: i?.location,
                        tab: eQ.kx.EMOJI,
                        guild_id: p.id,
                    }),
                    c(n));
            },
            children: [
                (0, l.jsx)("div", {
                    className: tM.a$,
                    children: (0, l.jsx)(tm.A, { hovered: f, selected: h, size: "small" }),
                }),
                a.type === tx.s.GUILD
                    ? (0, l.jsx)(tO.A, { guild: a.guild, isSelected: h, shouldAnimate: g, isLocked: a.isNitroLocked })
                    : null,
                null != A
                    ? (0, l.jsx)(ee.A, {
                          alt: "",
                          animated: !d,
                          shouldAnimate: g,
                          className: tM.ty,
                          emojiId: A.representativeEmojiId,
                      })
                    : null,
                null == p && null != I
                    ? (0, l.jsx)(tj, { categoryId: I, className: tM.Yl, height: tF, width: tF, size: "custom" })
                    : null,
            ],
        }),
        N = s[n + 1],
        C = s[n - 1],
        y = null != A && null != C && C.type !== tx.s.PACK,
        x = null != A && N?.type !== tx.s.PACK,
        j = null != N && a.type === tx.s.GUILD && N.type !== tx.s.GUILD;
    return null != p
        ? (0, l.jsxs)(r.Fragment, {
              children: [
                  (0, l.jsx)(td.Q, { guild: p, children: _ }),
                  j ? (0, l.jsx)("hr", { className: tM.ny }, "separator") : null,
              ],
          })
        : null != A
          ? (0, l.jsxs)(r.Fragment, {
                children: [
                    y ? (0, l.jsx)("hr", { className: tM.ny }) : null,
                    (0, l.jsx)(R.m, { ariaHidden: !0, position: "right", text: A.name, children: _ }),
                    x ? (0, l.jsx)("hr", { className: tM.ny }) : null,
                ],
            })
          : _;
}
let tQ = (e) => {
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
        E = ey.Om.useStore((e) => e.activeCategoryIndex),
        I = (function (e) {
            let { emojiListRef: t } = e,
                n = (0, G.RQ)((e) => e.searchQuery),
                i = r.useCallback((e) => t.current?.scrollToSectionTop(e), [t]);
            return r.useCallback(
                (e) => {
                    "" !== n ? ((0, G.Ri)(""), ey.Om.setActiveCategoryIndex(e)) : i(e);
                },
                [i, n],
            );
        })({ sectionDescriptors: i, emojiListRef: n }),
        h = (0, p.p)(),
        g = (0, eW.ss)(s, a, { guildId: a?.guild_id ?? c }),
        A = r.useMemo(() => (0, e9.t)(u ? (0, eW.CQ)() : g, d), [g, d, u]),
        _ = r.useRef(null),
        N = (0, m.bG)([tf.A], () => tf.A.isFocused()),
        C = (0, m.bG)([ti.Ay], () => ti.Ay.useReducedMotion, []),
        y = r.useMemo(
            () =>
                te().memoize(
                    (e, t) => {
                        let n = A[t];
                        if (null != n)
                            return (0, l.jsx)(
                                tq,
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
        j = null != f ? t$ : 0,
        O = r.useMemo(() => {
            if (null != f)
                return function () {
                    return (0, l.jsx)(tc, { listItemId: tk, onClick: f }, "view-emoji-packs");
                };
        }, [f]),
        T = r.useCallback(
            (e, t) => {
                let n = A[t];
                if (n.type === tx.s.RECENT) return tW;
                if (n.type === tx.s.PACK) {
                    let e = A[t - 1],
                        n = A[t + 1];
                    return tz + (Number(null != e && e.type !== tx.s.PACK) + Number(n?.type !== tx.s.PACK)) * tX;
                }
                if (n.type === tx.s.GUILD) {
                    let e = A[t + 1];
                    return null != e && e.type !== tx.s.GUILD ? tZ : tz;
                }
                return tY;
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
                s.type === tx.s.GUILD || s.type === tx.s.PACK
                    ? ((t += 1), (n += 1))
                    : s.type === tx.s.UNICODE
                      ? (i += 1)
                      : ((e += 1), (t += 1));
            });
            let s = [e, n, i],
                l = A.some((e) => e.type === tx.s.PACK) ? (A[0]?.type === tx.s.PACK ? 1 : 2) : 0,
                r = j + tW + t * tz + tZ + l * tX;
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
                null == t || (e + t.height - tB >= R ? P(!1) : P(!0));
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
                if (n.type === tx.s.RECENT) return t ? 0 : tJ;
                if (n.type === tx.s.PACK) return t ? i : tG;
                if (n.type === tx.s.GUILD) {
                    let n = A[e + 1];
                    return null != n && n.type !== tx.s.GUILD ? (t ? tB + -2 * tH + tG + i : tG) : t ? i : tG;
                }
                return t ? tG + i : 2 * tG;
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
        U = L ? "shortcut" : "hiddenshortcut";
    return (0, l.jsx)(tu.A, {
        categoryListRef: _,
        expressionsListRef: n,
        className: t,
        store: ey.Om,
        categories: A,
        listPadding: x,
        onScroll: M,
        renderCategoryListItem: y,
        renderSection: k,
        rowCount: A.length,
        categoryHeight: T,
        getScrollOffsetForIndex: w,
        rowCountBySection: v,
        navId: "emoji-picker-categories",
        itemIdPrefix: tD,
        renderListHeader: O,
        listHeaderHeight: j,
        children: (e) =>
            S >= 7 &&
            (0, l.jsx)(
                eT.D,
                {
                    "aria-hidden": !L,
                    "aria-label": es.intl.string(es.t.dT0ctw),
                    className: o()(tM.KB, { [tM.h_]: !L }),
                    tabIndex: L ? 0 : -1,
                    onClick: () => D(e),
                    children: (0, l.jsx)(tn.ReactionIcon, {
                        size: "custom",
                        color: "currentColor",
                        height: tF,
                        width: tF,
                    }),
                },
                U,
            ),
    });
};
var t0 = n(860197);
let t1 = function (e) {
    let { markAsDismissed: t } = e;
    return (0, l.jsxs)(X.E, {
        variant: "body-xs/medium",
        color: "text-default",
        className: t0.iE,
        children: [
            (0, l.jsx)(tC.HeartIcon, { size: "md", color: "currentColor", className: t0.Kk }),
            (0, l.jsx)("div", {
                className: t0.Qs,
                children: (0, l.jsx)(X.E, { variant: "body-xs/normal", children: es.intl.string(es.t.xdRf69) }),
            }),
            (0, l.jsx)(eT.D, {
                onClick: () => t(ta.i.UNKNOWN),
                children: (0, l.jsx)(eS.XSmallIcon, { size: "md", color: "currentColor", className: t0.VN }),
            }),
        ],
    });
};
var t2 = n(120692),
    t3 = n(717421),
    t4 = n(343032),
    t5 = n(683063),
    t8 = n(748798);
let t6 = { tension: 750, mass: 2.5, friction: 70 };
function t9(e) {
    let { checked: t, onClick: n, buttonRef: i } = e,
        s = (0, m.bG)([ti.Ay], () => ti.Ay.useReducedMotion),
        a = V.default.getCurrentUser(),
        c = null != a && !(0, e5.TW)(a),
        u = c ? [] : [f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP],
        [d, E] = (0, tr.kn)(u),
        [I, h] = r.useState(!1),
        [g, p] = (0, t3.z)(() => ({})),
        A = (0, t2.animated)(t4.SuperReactionIcon);
    r.useEffect(() => {
        let e = d === f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (E(ta.i.DISMISS), setTimeout(() => h(e), 200));
    }, [d, E]);
    let _ = I ? es.intl.string(es.t["Osi/uy"]) : t && !c ? es.intl.string(es.t["5cRA/b"]) : es.intl.string(es.t.buV4av),
        N = I ? es.intl.string(es.t.ORK94p) : void 0;
    return (0, l.jsx)(t5.u, {
        position: "top",
        title: N,
        body: _,
        asset: (0, l.jsx)(P.NitroWheelIcon, { size: "md", color: "currentColor" }),
        assetSize: 20,
        forceOpen: I,
        children: (0, l.jsx)(eT.D, {
            innerRef: i,
            "aria-label": _,
            "aria-pressed": t,
            onClick: function () {
                (p({ from: { rotate: t ? "360deg" : "0deg" }, to: { rotate: t ? "0deg" : "360deg" }, config: t6 }),
                    n?.(),
                    h(!1));
            },
            focusProps: { enabled: !1 },
            className: o()(t8.Pf, { [t8.wM]: t }),
            children: (0, l.jsx)(A, {
                style: s ? void 0 : g,
                size: "custom",
                width: 20,
                height: 20,
                color: t ? "white" : "currentColor",
                className: t8.Kk,
            }),
        }),
    });
}
var t7 = n(821609),
    ne = n(644508),
    nt = n(824832),
    nn = n(267102),
    ni = n(242812);
function ns(e) {
    let { channel: t, closePopout: n } = e,
        i = r.useRef(null),
        s = r.useRef(0),
        [a, o] = r.useState(!1),
        [c, u] = r.useState(!1),
        d = (0, nn.Us)() === ew.BRT.OVERLAY,
        m = c || a,
        f = r.useCallback(
            async (e, i, l) => {
                (u(!0),
                    n(),
                    await (0, ne.f)({
                        userImage: { data: e, file: i, image: l },
                        guildId: t?.guild_id ?? null,
                        analyticsLocation: {
                            section: ew.JJy.EXPRESSION_PICKER,
                            page: t?.guild_id != null ? ew.liQ.GUILD_CHANNEL : ew.liQ.DM_CHANNEL,
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
                text: d ? es.intl.string(es.t.RMbedC) : null,
                children: (0, l.jsx)(t7.$, {
                    text: es.intl.string(es.t.iMJO37),
                    variant: "secondary",
                    onClick: function () {
                        (C.Ay.trackWithMetadata(ew.HAw.EXPRESSION_PICKER_ADD_EMOJI_CLICKED, {
                            guild_id: t?.guild_id ?? null,
                            channel_id: t?.id ?? null,
                            location_section: ew.JJy.EXPRESSION_PICKER,
                            location_page: t?.guild_id != null ? ew.liQ.GUILD_CHANNEL : ew.liQ.DM_CHANNEL,
                        }),
                            i.current?.activateUploadDialogue());
                    },
                    disabled: m || d,
                }),
            }),
            (0, l.jsx)("div", {
                className: ni.F,
                children: (0, l.jsx)(nt.Ay, { ref: i, onChange: f, setLoading: o, disabled: m }, s.current),
            }),
        ],
    });
}
n(667532);
var nl = n(833272),
    nr = n(82495),
    na = n(260762),
    no = n(650583),
    nc = n(683829);
let nu = (0, et.Ld)(),
    nd = nl.A.convert.fromCodePoint("1f44f"),
    nm = (0, eH.xI)(E.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
function nf(e) {
    switch (nl.A.convert.toCodePoint(e)) {
        case "1f3fb":
            return es.intl.string(es.t["BVK5b/"]);
        case "1f3fc":
            return es.intl.string(es.t.xJWOK8);
        case "1f3fd":
            return es.intl.string(es.t["MB+T5g"]);
        case "1f3fe":
            return es.intl.string(es.t.MODud2);
        case "1f3ff":
            return es.intl.string(es.t["0uzqsc"]);
        default:
            return es.intl.string(es.t.bGN1ow);
    }
}
let nE = (e) => {
    let { fade: t, surrogate: n, onClick: i, delay: s, index: r } = e,
        a = (0, tt.rm)(`item-${r}`),
        o = eZ.Ay.getURL(nd + n),
        c = (0, t3.z)({ opacity: 1, from: { opacity: +!t }, delay: s }, "animate-always");
    return (0, l.jsx)(eT.D, {
        ...a,
        role: "option",
        "aria-selected": 0 === r,
        onClick: () => i(n),
        className: nc.B6,
        children: (0, l.jsx)(t2.animated.div, {
            "aria-label": nf(n),
            className: nc.g4,
            style: { backgroundImage: `url("${o}")`, ...c },
        }),
    });
};
function nI(e) {
    let { id: t, selectedSurrogate: n, onClick: i } = e,
        s = (0, na.A)("diversity"),
        a = (0, t3.z)({ height: (nm + 14) * (tS.W$.length + 1), from: { height: nm + 14 }, config: { duration: 125 } }),
        o = r.useRef(s);
    r.useEffect(() => {
        o.current.focusFirstVisibleItem();
    }, []);
    let c = ["", ...tS.W$];
    return (
        te().remove(c, (e) => e === n),
        c.unshift(n),
        (0, l.jsx)(tt.hD, {
            navigator: s,
            children: (0, l.jsx)(tt.PR, {
                children: (e) => {
                    let { ref: n, ...s } = e;
                    return (0, l.jsx)(t2.animated.div, {
                        ...s,
                        id: t,
                        ref: n,
                        className: nc.J6,
                        style: a,
                        role: "listbox",
                        children: c.map((e, t) =>
                            (0, l.jsx)(nE, { index: t, fade: 0 !== t, delay: 20 * t, surrogate: e, onClick: i }, t),
                        ),
                    });
                },
            }),
        })
    );
}
let nh = function (e) {
    let { searchBarRef: t, selectedSurrogate: n, className: i } = e,
        s = eZ.Ay.getURL(nd + n),
        [a, c] = r.useState(!1),
        u = (0, nr.A)(null, () => c(!1)),
        d = r.useRef(null);
    return (0, l.jsxs)("div", {
        ref: u,
        className: o()(nc.fx, i),
        children: [
            (0, l.jsx)(eT.D, {
                innerRef: d,
                className: nc.Dj,
                onClick: function () {
                    c(!0);
                },
                "aria-label": es.intl.formatToPlainString(es.t["2SfnMp"], { skinTone: nf(n) }),
                "aria-haspopup": !0,
                "aria-expanded": a,
                "aria-controls": nu,
                tabIndex: a ? -1 : 0,
                children: (0, l.jsx)("div", { className: nc.g4, style: { backgroundImage: `url("${s}")` } }),
            }),
            a
                ? (0, l.jsx)("div", {
                      onKeyDown: function (e) {
                          e.key === no.dh.ESCAPE
                              ? (e.stopPropagation(), c(!1), null != d.current && d.current.focus())
                              : "Tab" === e.key && c(!1);
                      },
                      children: (0, l.jsx)(nI, {
                          id: nu,
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
var ng = n(462180),
    np = n(602034),
    nA = n(683438);
let n_ = r.memo(function (e) {
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
        d = (0, G.RQ)((e) => e.searchQuery),
        [m, f, E] = ey.Om.useStore((e) => [e.inspectedExpressionPosition, e.searchPlaceholder, e.hasInteracted], ng.x),
        I = r.useCallback(
            (e) => {
                (ey.Om.setActiveCategoryIndex("" === e ? 0 : -1),
                    ey.Om.setInspectedExpressionPosition(0, 0),
                    ey.Om.setSearchPlaceholder(null),
                    (0, G.Ri)(e),
                    t.current?.scrollTo(0));
            },
            [t],
        ),
        h = r.useCallback(() => {
            I("");
        }, [I]);
    return (
        r.useImperativeHandle(c, () => ({ focus: () => u.current?.focus() })),
        (0, l.jsx)(nA.I, {
            autoFocus: a,
            query: d,
            ref: u,
            placeholder: f ?? o,
            onClear: h,
            onKeyDown: function (e) {
                switch (e.key) {
                    case no.dh.ARROW_LEFT:
                    case no.dh.ARROW_RIGHT:
                    case no.dh.ARROW_UP:
                    case no.dh.ARROW_DOWN:
                        document.activeElement !== e.target && e.preventDefault();
                }
                i(e);
            },
            onFocus: s,
            onChange: I,
            inputProps: {
                role: "combobox",
                "aria-label": es.intl.string(es.t.tCauZX),
                "aria-haspopup": "grid",
                "aria-autocomplete": "list",
                "aria-controls": n,
                "aria-expanded": !0,
                ...(E ? { "aria-activedescendant": (0, np.Aq)(n, m.columnIndex, m.rowIndex) } : void 0),
            },
        })
    );
});
var nN = n(381575);
let nC = function (e) {
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
                (0, l.jsx)(n_, {
                    emojiListRef: r,
                    gridNavigatorId: tx.lq,
                    onKeyDown: a,
                    ref: d,
                    onFocus: c,
                    autoFocus: u,
                    defaultSearchPlaceholder: (0, eW.wT)(i, f),
                }),
                i === eq.EmojiIntention.REACTION ? (0, l.jsx)(t9, { checked: f, onClick: E, buttonRef: I }) : null,
                n ?? (0, l.jsx)(nh, { searchBarRef: d, className: nN.fx, selectedSurrogate: m }),
                i !== eq.EmojiIntention.NO_CUSTOM_EMOJI && g ? (0, l.jsx)(ns, { channel: t, closePopout: p }) : null,
            ],
        });
    return (0, l.jsx)("div", { className: o()(nN.wx, s), children: null != h ? h(A) : A });
};
var ny = n(371680),
    nx = n(413599),
    nj = n(486020),
    nO = n(977566);
function nT(e) {
    return null != e && "animated" in e;
}
let nS = r.memo(function (e) {
    let t,
        i,
        { className: s, emojiGrid: a, guildId: o, pickerIntention: c, channel: u } = e,
        d = ey.Om.useStore((e) => e.inspectedExpressionPosition),
        f = r.useMemo(() => {
            let { rowIndex: e, columnIndex: t } = d;
            return a[e]?.[t];
        }, [a, d]);
    switch (f?.type) {
        case tv.EMOJI:
            t = f?.emoji;
            break;
        case tv.EXPAND_OR_COLLAPSE_EMOJIS:
            t = { type: "EXPAND_OR_COLLAPSE_EMOJI", guildId: f?.guildId, allNamesString: f?.name };
            break;
        default:
            t = null;
    }
    let E = (0, m.bG)([eP.A], () => (null !== t && t.type === O.i.GUILD ? eP.A.getGuild(t.guildId) : null), [t]),
        I = (0, m.bG)([H.A], () => (null !== t && t.type === O.i.PACK ? H.A.getPack(t.packId) : null), [t]),
        h = (0, m.bG)([tf.A], () => tf.A.isFocused()),
        g = (0, m.bG)([ti.Ay], () => ti.Ay.useReducedMotion, []),
        p = eV.Sf.useSetting(),
        A = (0, eW.O7)(o, nT(t) ? t : null),
        _ = (0, m.bG)([j.Ay], () => j.Ay.expandedSectionsByGuildIds),
        { newlyAddedEmojis: N } = (0, e$.A)(o, c),
        C = f?.type === tv.EMOJI ? f.subCategory : tx.tm.NONE;
    if (
        (r.useEffect(() => {
            let e = Date.now();
            return () => {
                Date.now() - e >= 250 &&
                    nT(t) &&
                    C !== tx.tm.NONE &&
                    (C === tx.tm.NEWLY_ADDED_EMOJI &&
                        null !== t &&
                        t.type === O.i.GUILD &&
                        (0, eC.mz)(t.guildId, N[0].id),
                    null != d.source &&
                        (0, eW.yB)({
                            emoji: t,
                            subCategory: C,
                            position: f.columnIndex + 1,
                            newlyAddedHighlight: C === tx.tm.NEWLY_ADDED_EMOJI && eN.isNewerThanLastSeen(o, t.id),
                        }));
            };
        }),
        null == t)
    )
        return null;
    let y = (function (e, t) {
            let { allowAnimatedEmoji: i, sectionsExpandedFromThreeRows: s, theme: r } = t;
            if (nT(e)) {
                let t = null != e.id ? nj.Ay.getEmojiURL({ id: e.id, animated: i && e.animated, size: 28 }) : e.url;
                return "" === t
                    ? (0, l.jsx)(X.E, {
                          variant: "body-md/normal",
                          className: nO.J_,
                          children: "surrogates" in e ? e.surrogates : null,
                      })
                    : (0, l.jsx)("img", { alt: (0, eZ.N)(e) ?? "", src: t, className: nO.Zg });
            }
            if ("EXPAND_OR_COLLAPSE_EMOJI" !== e.type) return null;
            {
                let t = n(619508),
                    i = n(404828),
                    a = n(600003),
                    o = n(318121);
                return s.has(e.guildId)
                    ? (0, l.jsx)("img", { className: nO.Kk, src: (0, eO.M)(r) ? a : o, alt: "" })
                    : (0, l.jsx)("img", { className: nO.Kk, src: (0, eO.M)(r) ? t : i, alt: "" });
            }
        })(t, { allowAnimatedEmoji: p, sectionsExpandedFromThreeRows: _, theme: nx.A.theme }),
        x =
            null != E
                ? (0, l.jsx)(tO.A, { className: nO.__invalid_guildIcon, guild: E, shouldAnimate: !g && h })
                : null;
    i =
        "EXPAND_OR_COLLAPSE_EMOJI" === t.type
            ? _.has(t.guildId)
                ? es.intl.string(es.t["/K2RDH"])
                : es.intl.string(es.t.NZI2Zk)
            : (0, eZ.N)(t);
    let T = (function (e) {
        let { inspectedEmoji: t, guild: n, pack: i } = e,
            s = nT(t);
        return null != n && s
            ? es.intl.format(es.t.KFW2aY, { guildName: n.name })
            : null != i && s
              ? es.intl.format(ei.default.VEfeux, {
                    packName: (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(P.NitroWheelIcon, {
                                size: "custom",
                                width: 10,
                                height: 10,
                                color: "currentColor",
                                className: nO.C5,
                                "aria-label": es.intl.string(ei.default.leUgZw),
                            }),
                            " ",
                            i.name,
                        ],
                    }),
                })
              : null;
    })({ inspectedEmoji: t, channel: u, guildId: o, intention: c, guild: E, pack: I });
    return (0, l.jsx)(ny.A, {
        className: s,
        graphicPrimary: y,
        graphicSecondary: x,
        titlePrimary: i,
        titleSecondary: T,
        isFavorite: A,
        emojiSubCategory: C,
    });
});
n(30146);
var nb = n(607399),
    nR = n(123292),
    nv = n(765178),
    nL = n(537652),
    nP = n(962125),
    nM = n(240864),
    nD = n(286509),
    nw = n(89366),
    nk = n(739053),
    nU = n(82498),
    nG = n(202639),
    nF = n(414872),
    nJ = n(521440),
    nV = n(304072),
    nK = n(189551),
    nB = n(594061),
    nH = n(771104),
    nW = n(147421),
    nX = n(723702),
    nz = n(140735),
    nZ = n(194261),
    nY = n(703413);
let n$ = (e) => {
    let { src: t, alt: n, size: i, "aria-label": s, className: a } = e,
        c = r.useRef(null),
        u = r.useRef(!1),
        d = u.current ? nY.S : nY.Y;
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
                          ((u.current = !0), c.current.classList.remove(nY.Y), c.current.classList.add(nY.S));
                  });
              },
    });
};
var nq = n(955388);
let nQ = te().memoize(
        (e) =>
            `${e * eq.he.NonDiversityPerRow}px ${e * Math.ceil(tS.Ay.numNonDiversitySprites / eq.he.NonDiversityPerRow)}px`,
    ),
    n0 = te().memoize(
        (e) => `${e * eq.he.DiversityPerRow}px ${e * Math.ceil(tS.Ay.numDiversitySprites / eq.he.DiversityPerRow)}px`,
    ),
    n1 = r.memo(function (e) {
        let { emoji: t, size: i, surrogateCodePoint: s, allowAnimatedEmoji: a, "aria-label": c, isLocked: u } = e,
            d = (() => {
                if (!t.useSpriteSheet) {
                    let e = null == t.id ? t.url : nj.Ay.getEmojiURL({ id: t.id, animated: a && t.animated, size: 48 });
                    return null != e
                        ? (0, l.jsx)(n$, {
                              className: nq.N1,
                              "aria-label": c,
                              src: e,
                              size: i,
                              alt: (0, eZ.N)(t) ?? "",
                          })
                        : null;
                }
                return (0, l.jsx)("div", {
                    className: o()(nq.xA, { [nq.N1]: u }),
                    style: (function (e, t, i) {
                        let s, l, r;
                        if (!e.useSpriteSheet) return;
                        let a = null != e.index ? e.index : 0;
                        e.hasDiversity
                            ? ((s = n(12303)(`./spritesheet-${t}-${i}.png.js`).default),
                              (l = n0(i)),
                              (r = eq.he.DiversityPerRow))
                            : ((s = n(145519)(`./spritesheet-emoji-${i}.png.js`).default),
                              (l = nQ(i)),
                              (r = eq.he.NonDiversityPerRow));
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
                    children: (0, l.jsx)(nz.A, { children: c }),
                });
            })();
        return (0, l.jsxs)(r.Fragment, {
            children: [
                d,
                u
                    ? (0, l.jsx)("div", {
                          className: nq.iD,
                          style: { width: i, height: i },
                          children: (0, l.jsx)(nZ.LockIcon, { size: "xs", color: "currentColor", className: nq.fi }),
                      })
                    : null,
            ],
        });
    });
var n2 = n(537911);
function n3(e) {
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
        N = (0, m.bG)([eP.A], () => (n.type === O.i.GUILD ? eP.A.getGuild(n.guildId) : void 0), [n]);
    return (0, l.jsx)(q.vN, {
        children: (0, l.jsx)("button", {
            ..._,
            className: o()(n2._X, { [n2.lG]: s, [n2.Lh]: r, [n2.Bx]: a, [g ?? ""]: a, [n2.TV]: u }),
            "data-type": en.g.EMOJI,
            "data-id": n.id,
            "data-name": n.name,
            "data-surrogates": "surrogates" in n ? n.surrogates : null,
            "data-animated": n.animated ? "true" : null,
            ref: A,
            children: (0, l.jsx)(n1, {
                "aria-label":
                    ((t = (0, eZ.N)(n)),
                    (N?.name != null &&
                        (t = es.intl.formatToPlainString(es.t["nXv4/B"], { names: t, guildName: N.name })),
                    i)
                        ? es.intl.formatToPlainString(es.t["9FI9Z0"], { names: t })
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
function n4(e) {
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
            messageId: y,
            isBurstReaction: x,
            rowPosition: T,
            inNitroLockedSection: S,
        } = e,
        [b, v] = r.useState(""),
        L = (0, m.bG)([ti.Ay], () => ti.Ay.useReducedMotion),
        P = (0, m.bG)([j.Ay], () => j.Ay.getDisambiguatedEmojiContext(o), [o]),
        M = r.useRef(null),
        { emoji: D, size: w, isDisabled: k, columnIndex: U } = t;
    function G() {
        d.current || f.current || c(t);
    }
    let { ref: F, tabIndex: J, onFocus: V, ...K } = g(U, a) ?? {},
        B =
            b !== `${U}:${a}`
                ? (0, l.jsx)(n3, {
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
                              null != T &&
                              null != y &&
                              !e.shiftKey &&
                              null != D.name &&
                              x &&
                              !L &&
                              N
                          ) {
                              let e = null == D.id ? tS.Ay.convertNameToSurrogate(D.name) : D.name,
                                  t = M.current.getBoundingClientRect();
                              ((t.x = T.x + (U + 1) * w), v(`${U}:${a}`), (0, nW.h)(y, e, D.id, t));
                          }
                          !(function (e) {
                              if ((e.stopPropagation(), d.current || f.current)) return;
                              let n = e.altKey;
                              (n &&
                                  !j.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(D) &&
                                  C(i),
                                  (0, eF.sF)(eF._2.FAVORITE_EMOJI_TOOLTIP),
                                  u(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n }));
                          })(e);
                      },
                      onContextMenu: function (e) {
                          (0, Q.L3)(e, async () => {
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
                      selectedItemClassName: h,
                      inNitroLockedSection: S,
                  })
                : null;
    return (0, r.createElement)(
        "li",
        { ...K, key: i, ref: M },
        E
            ? (0, l.jsx)(R.m, {
                  text: es.intl.formatToPlainString(es.t.glqNsf, { key: (0, nX.cX)() ? "Opt" : "Alt" }),
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
            showEmojiFavoriteTooltip: h,
            channelGuildId: g,
            category: p,
            selectedItemClassName: A,
            messageId: _,
            isBurstReaction: N,
            inNitroLockedSection: C,
            handleScrollUpOnSectionCollapse: y,
        } = e,
        x = n(619508),
        j = n(404828),
        T = n(600003),
        S = n(318121),
        b = n(443336),
        R = n(258901),
        v = n(135974),
        L = n(8013),
        P = (0, eR.Ay)(),
        M = ey.Om.getState(),
        [D, w] = r.useState(M.inspectedExpressionPosition),
        [k, U] = (0, nV.A)(null, 300),
        G = r.useRef(null);
    (r.useEffect(
        () =>
            ey.Om.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => w(e),
            ),
        [],
    ),
        r.useEffect(() => {
            nB.bW.loadIfNecessary();
        }, []));
    let F = i === tx.as.LARGE,
        J = i === tx.as.MEDIUM;
    function V(e) {
        let t = `${e.rowIndex}c${e.columnIndex}`;
        switch (e.type) {
            case tv.EXPAND_OR_COLLAPSE_EMOJIS: {
                let { visibleRowIndex: n, columnIndex: i } = e,
                    c = D.rowIndex === n && D.columnIndex === i,
                    d = e.sectionCollapsedToThreeRows
                        ? c
                            ? (0, eO.M)(P)
                                ? R
                                : L
                            : (0, eO.M)(P)
                              ? x
                              : j
                        : c
                          ? (0, eO.M)(P)
                              ? b
                              : v
                          : (0, eO.M)(P)
                            ? T
                            : S,
                    I = es.intl.string(e.sectionCollapsedToThreeRows ? es.t.NZI2Zk : es.t["/K2RDH"]);
                return (function () {
                    let {
                            onMouseEnter: n,
                            onMouseLeave: i,
                            handleSelect: s,
                            icon: c,
                            ariaLabel: d,
                            shouldShowRoundHighlight: I,
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { visibleRowIndex: h, columnIndex: g } = e,
                        { ref: p, tabIndex: _, onFocus: N, ...C } = u(g, E) ?? {},
                        y = D.rowIndex === h && D.columnIndex === g;
                    function x() {
                        m.current || f.current || a(e);
                    }
                    return (0, r.createElement)(
                        "li",
                        { ...C, key: t },
                        (0, l.jsx)(q.vN, {
                            children: (0, l.jsx)("button", {
                                "aria-label": d,
                                ref: p,
                                className: o()(n2._X, {
                                    [n2.lG]: F,
                                    [n2.Lh]: J,
                                    [n2.Bx]: y && !I,
                                    [A ?? ""]: y,
                                    [n2.TV]: k === t,
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
                        e.type !== tv.EXPAND_OR_COLLAPSE_EMOJIS ||
                            (t.stopPropagation(),
                            m.current ||
                                f.current ||
                                (s(e, { isFinalSelection: !0, toggleFavorite: !1 }),
                                (0, nK.G)(e.guildId),
                                e.sectionCollapsedToThreeRows || y(),
                                eB.default.track(ew.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                    collapsed: e.sectionCollapsedToThreeRows,
                                    guild_id: e.guildId,
                                })));
                    },
                    icon: (0, l.jsx)("img", { className: n2.Kk, src: d, alt: "" }),
                    ariaLabel: I,
                    shouldShowRoundHighlight: !0,
                });
            }
            case tv.EMOJI: {
                let { columnIndex: n, visibleRowIndex: i } = e,
                    r = D.rowIndex === i && D.columnIndex === n;
                return (0, l.jsx)(
                    n4,
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
                        channelGuildId: g,
                        getEmojiItemProps: u,
                        isMediumSize: J,
                        isLargeSize: F,
                        pulseItemKey: k,
                        setPulseItemKey: U,
                        showEmojiFavoriteTooltip: h,
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
            className: o()(n2.ND, { [n2.HO]: F, [n2.X$]: J }),
            ref: G,
            children: e.map(V),
        });
    }
    if (p !== tx.s.TOP_GUILD_EMOJI) return K(t);
    let B = t.filter(
            (e) =>
                e.subCategory === tx.tm.TOP_GUILD_EMOJI ||
                (e.subCategory === tx.tm.NEWLY_ADDED_EMOJI &&
                    e.emoji.type === O.i.GUILD &&
                    !eN.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
        ),
        H = t.filter(
            (e) =>
                e.subCategory === tx.tm.NEWLY_ADDED_EMOJI &&
                e.emoji.type === O.i.GUILD &&
                eN.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id),
        );
    return 0 === H.length
        ? K(t)
        : (0, l.jsxs)("div", {
              className: n2.Ng,
              children: [
                  (0, l.jsx)("div", { className: o()(n2.V6, { [n2.$3]: 0 === B.length }), children: K(B) }),
                  (0, l.jsxs)("div", {
                      className: n2.bc,
                      children: [
                          (0, l.jsx)("div", {
                              className: o()(n2.eE, { [n2.eM]: 1 === H.length, [n2.Wk]: B.length > 0 }),
                              children: K(H),
                          }),
                          (0, l.jsxs)("div", {
                              className: o()(n2.lD, { [n2.EI]: F, [n2.qU]: J, [n2.Wk]: B.length > 0 }),
                              children: [
                                  (0, l.jsx)(nH.A, { foreground: n2.rI }),
                                  (0, l.jsx)(X.E, {
                                      variant: "body-xs/semibold",
                                      color: "text-overlay-light",
                                      children: es.intl.string(es.t.y2b7CA),
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
};
var n8 = n(618723);
let n6 = (0, eH.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    n9 = (0, eH.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    n7 = (0, eH.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    ie = (0, eH.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    it = (0, eH.xI)(E.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    ii = (0, eH.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    is = (0, eH.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    il = r.memo(function (e) {
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
                collapsedSections: h,
                setCollapsedSections: g,
                getEmojiItemProps: A,
                getEmojiRowProps: _,
                rowCount: C,
                isUsingKeyboardNavigation: x,
                channelGuildId: j,
                messageId: O,
                isBurstReaction: T,
                listHeaderClassName: S,
            } = e,
            b = r.useRef(!1),
            R = ey.Om.useStore((e) => e.activeCategoryIndex),
            v = (0, G.RQ)((e) => e.searchQuery),
            L = eV.Sf.useSetting(),
            M = (0, m.bG)([V.default], () => V.default.getCurrentUser()),
            D = (0, K.ki)(M),
            { location: w } = (0, p.p)(),
            { analyticsLocations: k } = (0, y.Ay)(),
            [U, F] = r.useState(0),
            [J, B] = r.useState(!1),
            {
                listPadding: H,
                renderRow: W,
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
                        isScrolling: h,
                        isUsingKeyboardNavigation: g,
                        allowAnimatedEmoji: A,
                        channelGuildId: _,
                        messageId: N,
                        isBurstReaction: C,
                        listHeaderClassName: y,
                        activeSectionIndex: x,
                        emojiListRef: j,
                    } = e,
                    O = (0, p.p)(),
                    T = r.useRef(0),
                    S = r.useMemo(() => ("" !== n ? nl.A.convert.toCodePoint(n) : ""), [n]),
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
                                    eB.default.track(ew.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                        location: O.location,
                                        tab: eQ.kx.EMOJI,
                                        collapsed: !s,
                                        guild_id: n.id,
                                    }),
                                f(i));
                        },
                        [O, t, f],
                    ),
                    L = r.useCallback((e) => {
                        let { columnIndex: t, visibleRowIndex: n } = e,
                            i = e.type === tv.EMOJI ? (0, eZ.N)(e.emoji) : e.name;
                        (0 !== T.current && window.cancelAnimationFrame(T.current),
                            (T.current = window.requestAnimationFrame(() => {
                                (ey.Om.setInspectedExpressionPosition(t, n, en.t.MOUSE_EVENT),
                                    ey.Om.setSearchPlaceholder(i),
                                    (T.current = 0));
                            })));
                    }, []),
                    M = (0, m.bG)([eF.HP], () => eF.HP.hasHotspot(eF._2.FAVORITE_EMOJI_TOOLTIP), []),
                    D = r.useMemo(
                        () =>
                            te().memoize((e, t) => {
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
                                        isScrolling: h,
                                        isUsingKeyboardNavigation: g,
                                        rowIndex: e,
                                        allowAnimatedEmoji: A,
                                        showEmojiFavoriteTooltip: M,
                                        channelGuildId: _,
                                        category: r.sectionId,
                                        selectedItemClassName: n8.__invalid_selectedItem,
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
                        [i, d, s, S, L, a, E, I, h, g, A, M, _, N, C, j],
                    );
                r.useEffect(() => () => D.cache?.clear?.(), [D]);
                let w = r.useMemo(
                        () =>
                            te().memoize((e) => {
                                let n = d[e];
                                if (null == n) return;
                                let { guild: i, pack: s, categoryId: r, type: a, sectionId: u } = n;
                                if (a === tx.s.SEARCH_RESULTS) return;
                                let m = (function (e) {
                                        let { type: t, guild: n, categoryId: i } = e;
                                        return t === tx.s.PACK
                                            ? (0, l.jsx)(P.NitroWheelIcon, {
                                                  size: "custom",
                                                  color: "currentColor",
                                                  height: 16,
                                                  width: 16,
                                              })
                                            : t === tx.s.GUILD
                                              ? null == n
                                                  ? null
                                                  : (0, l.jsx)(tO.A, { guild: n, height: 16, width: 16 })
                                              : null == i
                                                ? null
                                                : (0, l.jsx)(tj, {
                                                      categoryId: i,
                                                      height: 16,
                                                      width: 16,
                                                      size: "custom",
                                                  });
                                    })(n),
                                    f = s?.name ?? i?.name;
                                null != r && (f = (0, eW.Nu)(r, i?.name));
                                let E = x === e,
                                    I = n.isNitroLocked,
                                    h = I && !E,
                                    g = I && E,
                                    p =
                                        a === tx.s.PACK
                                            ? (0, l.jsx)("div", {
                                                  className: n8.uE,
                                                  children: (0, l.jsx)(nR.Q, {
                                                      text: es.intl.string(ei.default["2zxYCx"]),
                                                      textVariant: "body-sm/medium",
                                                      variant: "secondary",
                                                      "aria-label": `${es.intl.string(ei.default["2zxYCx"])} ${s.name}`,
                                                      onKeyDown: (e) => {
                                                          e.key !== no.dh.ESCAPE && e.stopPropagation();
                                                      },
                                                      onClick: () => c(s.id),
                                                  }),
                                              })
                                            : void 0;
                                return (0, l.jsx)(
                                    nD.A,
                                    {
                                        className: o()(n8.wx, y, { [n8.RA]: h, [n8.sp]: g }),
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
                    k = (0, tb.k0)(),
                    U = r.useCallback(
                        (e, n) => {
                            let i = d[e],
                                s = R(e),
                                r = b(e),
                                a = i.type === tx.s.PACK && 0 === i.count;
                            return (0, l.jsx)(
                                "div",
                                {
                                    role: "rowgroup",
                                    className: o()(n8.Wy, {
                                        [n8.YD]: e === d.length - 1,
                                        [n8.jl]: t.has(i.sectionId) || a,
                                        [n8.cW]: i.isNitroLocked,
                                        [n8.T5]: s || r,
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
                                    ? (0, l.jsx)(nF.a, {})
                                    : (0, l.jsx)(nF.A, {})
                                : b(e)
                                  ? (0, l.jsx)("div", { className: n8.pQ })
                                  : null,
                        [R, b, k],
                    ),
                    F = r.useCallback((e) => (R(e) ? 41 : 33 * !!b(e)), [R, b]),
                    J = r.useCallback(
                        (e) =>
                            e === d.length - 1 ||
                            t.has(d[e]?.sectionId) ||
                            (d[e]?.type === tx.s.PACK && d[e]?.count === 0) ||
                            R(e) ||
                            b(e)
                                ? 0
                                : ii,
                        [t, d, R, b],
                    );
                return {
                    listPadding: r.useMemo(() => ["" !== u ? ie : n6, n9, n7, 0], [u]),
                    renderRow: D,
                    renderSection: U,
                    renderSectionHeader: w,
                    renderSectionFooter: G,
                    sectionMarginBottom: J,
                    sectionHeaderHeight: r.useCallback((e) => (d[e].type === tx.s.SEARCH_RESULTS ? 0 : it), [d]),
                    sectionFooterHeight: F,
                };
            })({
                collapsedSections: h,
                diversitySurrogate: i,
                emojiGrid: s,
                emojiSize: c,
                onEmojiSelect: u,
                onRemovePack: d,
                searchQuery: v,
                sectionDescriptors: E,
                setCollapsedSections: g,
                getEmojiItemProps: A,
                getEmojiRowProps: _,
                isScrolling: b,
                isUsingKeyboardNavigation: x,
                allowAnimatedEmoji: L,
                channelGuildId: j,
                messageId: O,
                isBurstReaction: T,
                listHeaderClassName: S,
                activeSectionIndex: U,
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
        let et = (0, ex.Fk)({
            activeCategoryIndex: R,
            isScrolling: b,
            listRef: a,
            onActiveCategoryIndexChange: function (e) {
                "" === v && ey.Om.setActiveCategoryIndex(e);
            },
            scrollOffset: 0,
            searchQuery: v,
            disableForSearch: !1,
        });
        (0, ex.FV)({ searchQuery: v, activeCategoryIndex: R, listRef: a });
        let el = r.useCallback(
                (e) => {
                    (et(e),
                        ee(e),
                        ir({ emojiListRef: a, sectionDescriptors: E, scrollTop: e, searchQuery: v, setShowUpsell: B }));
                },
                [et, ee, a, E, v, B],
            ),
            er = E.length > 0;
        (r.useEffect(() => {
            J &&
                (eB.default.track(ew.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: ea.e.EMOJI_PICKER_FLOATING_UPSELL,
                    location: w,
                    location_stack: k,
                }),
                (0, nk.sq)(ew.U7l.PREMIUM_UPSELL_VIEWED, k, () => (0, nU.uq)(ea.e.EMOJI_PICKER_FLOATING_UPSELL)));
        }, [w, k, J]),
            r.useEffect(() => {
                "" !== v && B(!1);
            }, [v]));
        let eo = r.useRef(null);
        return (
            r.useEffect(
                () => (
                    clearTimeout(eo.current),
                    (eo.current = setTimeout(() => {
                        (er
                            ? nv.O.announce(es.intl.string(es.t.uZ4F2O), "polite")
                            : nv.O.announce(es.intl.string(es.t.IxxiKF), "assertive"),
                            (eo.current = null));
                    }, 200)),
                    () => {
                        clearTimeout(eo.current);
                    }
                ),
                [er, v],
            ),
            (0, l.jsxs)("div", {
                className: n8.AD,
                children: [
                    er
                        ? (0, l.jsx)(nP.A, {
                              role: "none presentation",
                              className: n8.p_,
                              listPadding: H,
                              onScroll: el,
                              renderRow: W,
                              renderSection: z,
                              renderSectionHeader: Z,
                              renderSectionFooter: Y,
                              rowCount: C,
                              rowCountBySection: I,
                              rowHeight: c + 2 * is,
                              sectionHeaderHeight: q,
                              sectionMarginBottom: $,
                              sectionFooterHeight: Q,
                              stickyHeaders: !0,
                              ref: a,
                          })
                        : (0, l.jsx)(nL.A, {
                              message: (0, l.jsx)(X.E, {
                                  variant: "body-md/normal",
                                  color: "text-muted",
                                  children: es.intl.string(es.t.IxxiKF),
                              }),
                              className: n8.BZ,
                          }),
                    D || nb.Fr
                        ? null
                        : (0, l.jsx)(nG.d, {
                              showUpsell: J,
                              text:
                                  ((t = (0, e5.Dd)(ea.PremiumTypes.TIER_2)),
                                  es.intl.format(es.t.gMVjeS, {
                                      nitroTierName: t,
                                      onClick: () => {
                                          f({ type: tP.PREMIUM, emojiDescriptor: void 0 });
                                      },
                                  })),
                              button: ((n = (0, nw.qD)()), (0, e5.LE)(n, ea.pe.TIER_2) ?? es.intl.string(es.t.BmJkbd)),
                              buttonAnalyticsObject: { section: ew.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                              leadingAction: (0, l.jsx)(nJ.l, {
                                  size: "sm",
                                  className: n8.ij,
                                  location: N.A.PREMIUM_WISHLIST_EMOJI_UPSELL,
                              }),
                          }),
                ],
            })
        );
    }),
    ir = te().throttle(
        function (e) {
            let { emojiListRef: t, sectionDescriptors: n, scrollTop: i, searchQuery: s, setShowUpsell: l } = e;
            l(
                (0, nM.s)({ listRef: t, searchQuery: s, nitroLockedSectionStates: n, scrollTop: i })
                    .areOnlyNitroLockedSectionsVisible,
            );
        },
        300,
        { leading: !1, trailing: !0 },
    );
var ia = n(506774),
    io = n(28863),
    ic = n(781300),
    iu = n(404374),
    id = n(780964),
    im = n(766075),
    iE = n(166403),
    iI = n(506150);
let ih = "premiumRetentionEmojiPickerNotice",
    ig = ia.w.get(ih),
    ip = function (e) {
        let { closePopout: t, channel: n } = e,
            [i, s] = r.useState(!1),
            { subscription: a, hasFetchedSubscriptions: o } = (0, m.cf)([iE.A], () => ({
                subscription: iE.A.getPremiumSubscription(),
                hasFetchedSubscriptions: iE.A.hasFetchedSubscriptions(),
            }));
        if (
            (r.useEffect(() => {
                o || (0, ic.hP)();
            }, [o]),
            null == a || !(0, e5.PK)(a.status) || i)
        )
            return null;
        let c = a.status === ew.Dmq.PAST_DUE ? (0, e5.ji)(a).expiresDate : ef()(a.currentPeriodStart).add(30),
            u = `${a.id}:${c.toISOString()}`;
        if (ig === u) return null;
        let d =
            e5.Ay.getPremiumType(a.planId) === ea.PremiumTypes.TIER_0
                ? iu.k0.PREMIUM_TIER_0
                : e5.Ay.getPremiumType(a.planId) === ea.PremiumTypes.TIER_1
                  ? iu.k0.PREMIUM_TIER_1
                  : iu.k0.PREMIUM_TIER_2;
        return (0, l.jsxs)(X.E, {
            variant: "body-xs/medium",
            color: "text-default",
            className: iI.g$,
            children: [
                (0, l.jsx)(P.NitroWheelIcon, { size: "md", className: iI.lu, color: d }),
                (0, l.jsxs)("div", {
                    className: iI.Xn,
                    children: [
                        (0, l.jsx)(X.E, {
                            variant: "body-xs/normal",
                            children: es.intl.format(es.t.bTMjiO, {
                                planName: e5.Ay.getTierDisplayNameByPlanId(a.planId),
                                endsAt: c.toDate(),
                            }),
                        }),
                        (0, l.jsx)("div", {
                            children: (0, l.jsx)(io.Anchor, {
                                onClick: () => {
                                    ((0, eW.xf)(n), t(), (0, im.openUserSettings)(id.X.NITRO_PANEL));
                                },
                                children: es.intl.string(es.t.W3aavh),
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(eT.D, {
                    onClick: () => {
                        (ia.w.set(ih, u), (ig = u), s(!0));
                    },
                    children: (0, l.jsx)(eS.XSmallIcon, { size: "md", color: "currentColor", className: iI.YF }),
                }),
            ],
        });
    };
var iA = n(148361);
let i_ = (0, eH.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    iN = (0, eH.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT);
function iC(e) {
    return e.stopPropagation();
}
function iy(e, t) {
    ey.Om.setInspectedExpressionPosition(e, t, en.t.GRID_NAVIGATOR_EVENT);
}
let ix = u()(eW.bo, 200),
    ij = u()(eW.Wi, 200),
    iO = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    iT = r.memo(function (e) {
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
                emojiSize: R = tx.as.MEDIUM,
                hasTabWrapper: v = !1,
                onSelectEmoji: L,
                containerWidth: P,
                onNavigateAway: M,
                persistSearch: D,
                className: w,
                headerClassName: k,
                analyticsOverride: U = iO,
                searchProps: F = {},
                wrapper: J,
                shouldHidePickerActions: B = !1,
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
            { onFocus: et, onKeyDown: ei, autoFocus: el = !0, accessory: er } = F,
            eo = (0, m.bG)([eK.A], () => (null != E ? eK.A.getDefaultChannel(E) : null), [E]),
            [em, ef] = r.useState(null),
            eE = r.useRef(""),
            eI = (0, G.RQ)((e) => e.searchQuery),
            eh = r.useRef(null),
            eg = r.useRef(null),
            ep = r.useRef(null),
            eA = (0, T.H)("emoji_picker") && !Y && (0, e9.z)(c);
        r.useEffect(() => {
            eA && (0, S.Fp)();
        }, [eA]);
        let [e_, ej] = r.useState(!1),
            eO = eA && (Q ?? e_),
            eT = ee ?? ej,
            eS = r.useCallback((e) => {
                (ep.current?.focus(), (0, S.M5)(e));
            }, []),
            eb =
                ((t = (0, m.bG)([H.A], () => (eA ? H.A.getPacks() : ed), [eA])),
                (n = (0, m.bG)(
                    [eu.A],
                    () => (eA ? eu.A.frecencyWithoutFetchingLatest.pinnedEmojiPacks?.packIds : void 0),
                    [eA],
                )),
                r.useMemo(
                    () =>
                        eA && null != n && 0 !== n.length
                            ? n.map((e) => t.find((t) => t.id === e)).filter((e) => null != e)
                            : ed,
                    [eA, t, n],
                ));
        null == u && null != eo && (u = eo);
        let eR = u?.getGuildId() ?? E ?? null,
            [ev, eL] = r.useState(!1),
            eM = r.useRef(null),
            eD = V.default.getCurrentUser(),
            ek = (0, K.ki)(eD),
            eU = ev && ek;
        r.useImperativeHandle(q, () => ({ onPickerOpen: td }));
        let { location: eH } = (0, p.p)(),
            { page: eX, section: ez, object: eQ, openPopoutType: e1, popoutLocation: e2 } = U,
            e3 = r.useMemo(() => ({ ...eH, section: ez ?? ew.JJy.EMOJI_PICKER_POPOUT }), [eH, ez]),
            { analyticsLocations: e4 } = (0, y.Ay)(N.A.EMOJI_PICKER),
            { diversitySurrogate: e5 } = (0, m.cf)([j.Ay], () => ({ diversitySurrogate: j.Ay.diversitySurrogate })),
            e8 = (0, eW.sL)(eI, u, c, Y),
            e7 = null == e8 ? 0 : e8.locked.length + e8.unlocked.length,
            tt = eV.iM.useSetting(),
            tn = r.useMemo(() => new Set(tt), [tt]),
            ti = r.useCallback((e) => {
                eV.iM.updateSetting(Array.from(e));
            }, []),
            ts = (0, ex.oV)({
                gridWrapperRef: eh,
                containerWidth: P,
                showingEmptyState: eO,
                listPaddingLeft: iN,
                listScrollbarWidth: 8,
            }),
            {
                rowCountBySection: tl,
                sectionDescriptors: tr,
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
                    E = r.useMemo(() => (d ? tS.Ay.getCategories() : f), [f, d]),
                    I = (0, m.bG)([eP.A], () => eP.A.getGuild(t?.getGuildId()), [t]),
                    h = t?.getGuildId() ?? n,
                    g = (0, m.bG)([j.Ay], () => j.Ay.getDisambiguatedEmojiContext(h), [h]),
                    p = (0, eW.XI)(h),
                    A = (0, eW.Fj)(h),
                    _ = (0, eW.QZ)(h),
                    { topEmojis: N, newlyAddedEmojis: C } = (0, e$.A)(h, s),
                    y = (0, m.yK)([tR.Ay], () => tR.Ay.getFlattenedGuildIds(), []),
                    x = (0, m.bG)([j.Ay], () => j.Ay.expandedSectionsByGuildIds),
                    O = (0, m.bG)([V.default], () => V.default.getCurrentUser()),
                    T = (0, K.ki)(O),
                    S = (0, K.ki)(O, ea.PremiumTypes.TIER_2),
                    b = (0, tb.k0)(),
                    R = g.getGroupedCustomEmoji();
                return r.useMemo(() => {
                    let e = [],
                        n = [],
                        r = [],
                        d = [],
                        m = 0,
                        f = 0;
                    if (null != g && null != a) {
                        let O = Math.floor(a / (c + 2 * o)),
                            v = 3 * O;
                        function h(l, a) {
                            let o = new Map(),
                                u = i.has(a.sectionId),
                                [E, I] = te().partition(l, (e) => {
                                    let n = eZ.Ay.isEmojiDisabled({ emoji: e, channel: t, intention: s });
                                    return (o.set(e, n), !n);
                                }),
                                h = E.concat(I),
                                g = a.guild,
                                p = h.length > v && null != g && a.isNitroLocked,
                                A = p && !x.has(g.id);
                            A && h.splice(v - 1);
                            let _ = Math.ceil((p ? h.length + 1 : h.length) / O),
                                y = [];
                            for (let e = 0; e < _; e++) {
                                let t = e * O,
                                    n = t + O,
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
                                                a.sectionId === tx.s.TOP_GUILD_EMOJI
                                                    ? (0, eW.DA)(N, C, e.id ?? e.uniqueName ?? e.name)
                                                    : tx.tm.NONE,
                                        }));
                                if ((y.push(i), !u)) {
                                    if (p && e === _ - 1) {
                                        let t = y[e];
                                        t.push({
                                            type: 1,
                                            guildId: g.id,
                                            name: es.intl.string(es.t.NZI2Zk),
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
                                h(l.unlocked, {
                                    type: tx.s.SEARCH_RESULTS,
                                    sectionId: tx.s.SEARCH_RESULTS,
                                    count: l.unlocked.length,
                                    isNitroLocked: !1,
                                }),
                                0 !== l.locked.length &&
                                    h(l.locked, {
                                        type: tx.s.PREMIUM_UPSELL,
                                        categoryId: tx.R2.PREMIUM_UPSELL,
                                        sectionId: tx.s.PREMIUM_UPSELL,
                                        count: l.locked.length,
                                        isNitroLocked: !T,
                                    }));
                        else {
                            let e = E.includes(tx.R2.CUSTOM) ? tx.R2.CUSTOM : tS.Ay.getCategories()[0];
                            for (let n of E) {
                                if (n === e)
                                    for (let e of u) {
                                        let t = te().compact(
                                            e.emojis.map((e) => {
                                                let { id: t } = e;
                                                return g.getById(t);
                                            }),
                                        );
                                        h(t, {
                                            type: tx.s.PACK,
                                            pack: e,
                                            sectionId: `pack:${e.id}`,
                                            count: t.length,
                                            isNitroLocked: !S,
                                        });
                                    }
                                if (n === tx.R2.CUSTOM) {
                                    function j(e) {
                                        let i = R.get(e);
                                        if (null == i) return;
                                        let l = i.filter(
                                            (n) =>
                                                !tL.includes(
                                                    eZ.Ay.getEmojiUnavailableReason({
                                                        emoji: n,
                                                        channel: t ?? eK.A.getDefaultChannel(e),
                                                        intention: s,
                                                    }),
                                                ),
                                        );
                                        if (0 === l.length) return;
                                        let r = eP.A.getGuild(e),
                                            a =
                                                b ||
                                                (!T &&
                                                    eZ.Ay.isEmojiCategoryNitroLocked({
                                                        categoryEmojis: l,
                                                        channel: t,
                                                        intention: s,
                                                    }));
                                        h(l, {
                                            categoryId: n,
                                            guild: r,
                                            type: tx.s.GUILD,
                                            sectionId: null != r ? r.id : (0, tT.A)(),
                                            count: l.length,
                                            isNitroLocked: a,
                                        });
                                    }
                                    if ((null != I && j(I.id), (0, eq.Re)(s)))
                                        for (let e of y) (null == I || I.id !== e) && j(e);
                                } else if (n === tx.R2.TOP_GUILD_EMOJI) {
                                    if (null != I) {
                                        let { allEmojis: e } = (0, eY.W)({ topEmojis: N, newlyAddedEmojis: C });
                                        e.length > 0 &&
                                            h(e, {
                                                categoryId: n,
                                                guild: eP.A.getGuild(I.id),
                                                type: tx.s.TOP_GUILD_EMOJI,
                                                sectionId: tx.s.TOP_GUILD_EMOJI,
                                                count: e.length,
                                                isNitroLocked: !1,
                                            });
                                    }
                                } else if (n === tx.R2.RECENT) {
                                    let e = (s === eq.EmojiIntention.REACTION ? _ : A).filter(
                                        (e) => !eZ.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }),
                                    );
                                    h(e, {
                                        categoryId: n,
                                        type: tx.s.RECENT,
                                        sectionId: tx.s.RECENT,
                                        count: e.length,
                                        isNitroLocked: !1,
                                    });
                                } else if (n === tx.R2.FAVORITES) {
                                    let e = p.filter(
                                        (e) => !eZ.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }),
                                    );
                                    0 !== e.length &&
                                        h(e, {
                                            categoryId: n,
                                            type: tx.s.FAVORITES,
                                            sectionId: tx.s.FAVORITES,
                                            count: e.length,
                                            isNitroLocked: !1,
                                        });
                                } else {
                                    let e = tS.Ay.getByCategory(n);
                                    null != e &&
                                        h(e, {
                                            categoryId: n,
                                            type: tx.s.UNICODE,
                                            sectionId: n,
                                            count: e.length,
                                            isNitroLocked: !1,
                                        });
                                }
                            }
                        }
                    }
                    return { columnCounts: d, emojiGrid: r, rowCountBySection: e, sectionDescriptors: n };
                }, [g, a, c, o, l, i, R, x, t, s, N, C, T, S, E, I, y, u, _, A, p, b]);
            })({
                gridWidth: ts,
                fallbackGuildId: eR,
                channel: u,
                pickerIntention: c,
                emojiSearchResults: e8,
                collapsedSections: tn,
                emojiPaddingHorizontal: i_,
                emojiSpriteSize: R,
                pinnedPacks: eb,
                showOnlyUnicode: Y,
            }),
            { newlyAddedEmojis: tu } = (0, e$.A)(eR, c);
        ((i = r.useRef({ intention: c, isBurstReaction: ev, analyticsObject: eQ })),
            r.useEffect(() => {
                i.current.intention === eq.EmojiIntention.REACTION && e0(i.current);
            }, []));
        let td = r.useCallback(() => {
                let e = tu.length > 0 ? tu[0].id : null;
                ((0, eC.uV)(eR, e), e0({ intention: c, isBurstReaction: ev, analyticsObject: eQ }));
            }, [tu, eR, c, ev, eQ]),
            tm = r.useCallback(() => {
                (b(),
                    M?.(),
                    (0, eJ.A)({
                        subscriptionTier: ea.pe.TIER_2,
                        analyticsLocations: [...e4, N.A.EMOJI_PACKS],
                        analyticsObject: { ...e3, object: ew.ZSU.EMOJI },
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
                            let u = eZ.Ay.getEmojiUnavailableReason({ emoji: r, channel: n, intention: t });
                            if (i.toggleFavorite)
                                return void (c.isFavoriteEmojiWithoutFetchingLatest(r) || null != u
                                    ? (0, h.Sw)(r)
                                    : (o?.(e), (0, h.V4)(r)));
                            if (u !== eq.Am.GUILD_SUBSCRIPTION_UNAVAILABLE) {
                                if (u === eq.Am.PREMIUM_LOCKED) {
                                    (a?.(e, u), l({ type: 0, emojiDescriptor: e }));
                                    return;
                                }
                                if (u === eq.Am.ROLE_SUBSCRIPTION_LOCKED && r.type === O.i.GUILD) {
                                    (a?.(e, u), l({ type: 1, guildId: r.guildId, emojiId: r.id }));
                                    return;
                                }
                                u !== eq.Am.ROLE_SUBSCRIPTION_UNAVAILABLE &&
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
                    e?.type === tP.PREMIUM && e.emojiDescriptor?.emoji?.type === O.i.PACK ? tm() : ef(e);
                },
                emojiSelectAnalytics: (e, t) => {
                    "" !== eI
                        ? (0, eW.Wf)({
                              emoji: e.emoji,
                              location: { ...e3, object: ew.ZSU.EMOJI },
                              searchQuery: eI,
                              isLocked: null != t,
                              intention: c,
                              messageId: W,
                          })
                        : (0, eW._7)({
                              emoji: e.emoji,
                              location: { ...e3, object: eQ ?? ew.ZSU.EMOJI, ...(null != eX && { page: eX }) },
                              pickerIntention: c,
                              category: e.category,
                              subCategory: e.subCategory,
                              position: e.columnIndex + 1,
                              newlyAddedHighlight:
                                  e.subCategory === tx.tm.NEWLY_ADDED_EMOJI && eN.isNewerThanLastSeen(eR, e.emoji.id),
                              isBurstReaction: ev,
                              messageId: W,
                              lockedReason: t,
                              visibleRowIndex: e.visibleRowIndex,
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, eW.C5)({ emoji: e.emoji, location: { ...e3, object: ew.ZSU.EMOJI } });
                },
            }),
            tE = r.useCallback(() => {
                (b(), M?.());
            }, [b, M]),
            {
                getItemProps: tI,
                getRowProps: th,
                gridContainerProps: tg,
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
                            if (e.type === tv.EMOJI) {
                                if (e.emoji.type === O.i.PACK)
                                    return void l(e, {
                                        isFinalSelection: !i.shiftKey,
                                        toggleFavorite: i.altKey,
                                        isBurst: u,
                                    });
                                if (null != e.emoji && i.altKey)
                                    return void (f.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                        ? (0, h.Sw)(e.emoji)
                                        : ((0, eW.C5)({ emoji: e.emoji, location: { ...t, object: ew.ZSU.EMOJI } }),
                                          (0, h.V4)(e.emoji)));
                                let r = {
                                    page: null != c ? ew.liQ.GUILD_CHANNEL : ew.liQ.DM_CHANNEL,
                                    section: ew.JJy.EMOJI_PICKER_POPOUT,
                                    object: ew.ZSU.EMOJI,
                                };
                                (u &&
                                    (r = {
                                        page: null != c ? ew.liQ.GUILD_CHANNEL : ew.liQ.DM_CHANNEL,
                                        section: ew.JJy.EMOJI_PICKER_POPOUT,
                                        object: ew.ZSU.EMOJI,
                                    }),
                                    (0, eW._7)({
                                        emoji: e.emoji,
                                        location: r,
                                        pickerIntention: n,
                                        category: e.category,
                                        subCategory: e.subCategory,
                                        newlyAddedHighlight:
                                            e.subCategory === tx.tm.NEWLY_ADDED_EMOJI &&
                                            eN.isNewerThanLastSeen(c, e.emoji.id),
                                    }),
                                    s({ emoji: e.emoji, willClose: !i.shiftKey, isBurst: u }));
                            }
                        },
                        [s, l, c, n, f, t, u],
                    ),
                    {
                        gridDispatch: I,
                        getItemProps: g,
                        getRowProps: p,
                        gridContainerProps: A,
                        handleGridContainerKeyDown: _,
                        isUsingKeyboardNavigation: N,
                    } = (0, ex.Ff)({
                        columnCounts: i,
                        gridNavigatorId: tx.lq,
                        itemGrid: a,
                        itemList: o,
                        onGridNavigatorItemSelect: E,
                        onGridNavigatorPositionChange: iy,
                    });
                return (
                    r.useEffect(
                        () =>
                            ey.Om.subscribe(
                                (e) => e.inspectedExpressionPosition,
                                (e) => {
                                    if (null == e) return;
                                    let { columnIndex: t, rowIndex: n, source: i } = e;
                                    i !== en.t.GRID_NAVIGATOR_EVENT &&
                                        I({ type: d.n.SET_FOCUSED_POSITION, x: t, y: n });
                                },
                            ),
                        [I],
                    ),
                    {
                        getItemProps: g,
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
                emojiList: eg,
                channelGuildId: eR,
                isBurstReaction: eU,
            });
        (((e, t) => {
            let [n, i] = r.useState(null);
            (r.useEffect(() => {
                null != n && (t.current?.scrollToSectionTop(n), i(null));
            }, [t, n]),
                r.useEffect(() => {
                    i(ey.Om.getState().activeCategoryIndex);
                }, [e]));
        })(P, eg),
            r.useLayoutEffect(() => {
                el && ep.current?.focus();
            }, [P, e5, ep, el]),
            (s = r.useRef(eO)),
            r.useEffect(() => {
                (el && s.current && !eO && ep.current?.focus(), (s.current = eO));
            }, [el, eO, ep]),
            r.useEffect(() => {
                D || (0, G.Ri)("");
            }, [D]),
            r.useEffect(
                () => (
                    eB.default.track(ew.HAw.OPEN_POPOUT, {
                        type: e1 ?? "Emoji Picker",
                        guild_id: eR,
                        location: e2,
                        ...(0, C.dI)(u),
                    }),
                    () => {
                        (ix.cancel(), ij.cancel());
                    }
                ),
                [e1, eR, e2, u],
            ),
            (0, A.Ay)(() => ((0, eW.V$)({ intention: c, location: e3 }), (eE.current = eI), ey.Om.resetStoreState)),
            r.useEffect(() => () => (0, eF.sF)(eF._2.FAVORITE_EMOJI_TOOLTIP), []),
            r.useLayoutEffect(() => {
                let { columnIndex: e, rowIndex: t } = ey.Om.getState().inspectedExpressionPosition;
                to[t]?.[e] == null && 0 !== e && ey.Om.setInspectedExpressionPosition(0, 0);
            }, [to]),
            r.useEffect(() => {
                if (("" === eE.current && "" !== eI && (0, eW.EG)(e3, c), "" !== eI && eE.current !== eI)) {
                    let e = ey.Om.getAnalyticsId();
                    0 === e7
                        ? ix({ location: e3, searchQuery: eI, intention: c, loadId: e })
                        : ij({
                              totalResults: e7,
                              numEmojiLocked: e8?.locked.length ?? 0,
                              location: e3,
                              searchQuery: eI,
                              intention: c,
                              loadId: e,
                          });
                }
                eE.current = eI;
            }, [eI, e3, e7, e8, c]));
        let t_ = J ?? (v ? "div" : I.l),
            tN = null != ts;
        function tC(e, t) {
            tf(e, { ...t, isBurst: eU });
        }
        em?.type === tP.PREMIUM
            ? (a = (0, l.jsx)(iA.default, {
                  onUpsellClicked: tE,
                  emojiDescriptor: em.emojiDescriptor,
                  pickerIntention: c,
                  analyticsLocation: e3,
                  onClose: () => ef(null),
                  channel: u,
              }))
            : em?.type === tP.ROLE_SUBSCRIPTION &&
              (a = (0, l.jsx)(eG, { onClose: () => ef(null), guildId: em.guildId, emojiId: em.emojiId }));
        let ty = (0, _.A)((e, t, n) => {
                tC(
                    {
                        type: tv.EMOJI,
                        emoji: e,
                        isDisabled: !e.available,
                        size: R,
                        rowIndex: 0,
                        columnIndex: t,
                        visibleRowIndex: 0,
                        category: tx.s.PACK,
                        subCategory: tx.tm.NONE,
                    },
                    n,
                );
            }),
            tj = (0, l.jsx)(nC, {
                channel: u,
                pickerIntention: c,
                emojiListRef: eg,
                onKeyDown: (e) => {
                    (tp?.(e), ei?.(e));
                },
                searchBarRef: ep,
                onFocus: et,
                autoFocus: el,
                accessory: er,
                headerClassName: k,
                diversitySurrogate: e5,
                isBurstReaction: ev,
                onBurstReactionToggle: function () {
                    (eL(!ev), ep.current?.focus());
                },
                burstToggleRef: eM,
                renderHeader: X,
                showAddEmojiButton: $,
                closePopout: b,
            }),
            tO = [];
        j.Ay.hasFavoriteEmojis(eR) || tO.push(f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let tM = (0, l.jsxs)(r.Fragment, {
                children: [
                    v ? tj : null,
                    (0, l.jsxs)("div", {
                        className: nN.uK,
                        ref: eh,
                        children: [
                            (0, l.jsx)(ip, { channel: u, closePopout: b }),
                            (0, l.jsx)(x.Ay, {
                                contentTypes: tO,
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    if (t === f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                        return (0, l.jsx)(t1, { markAsDismissed: () => n(ta.i.UNKNOWN) });
                                },
                            }),
                            B
                                ? null
                                : (0, l.jsx)("div", {
                                      className: nN.Iy,
                                      id: tx.lq,
                                      ...tg,
                                      children: tN
                                          ? (0, l.jsx)(il, {
                                                collapsedSections: tn,
                                                diversitySurrogate: e5,
                                                emojiGrid: to,
                                                emojiListRef: eg,
                                                emojiSize: R,
                                                getEmojiItemProps: tI,
                                                getEmojiRowProps: th,
                                                gridWidth: ts,
                                                isUsingKeyboardNavigation: tA,
                                                onEmojiSelect: tC,
                                                onRemovePack: eS,
                                                setUpsellConfigs: ef,
                                                rowCount: to.length,
                                                rowCountBySection: tl,
                                                sectionDescriptors: tr,
                                                setCollapsedSections: ti,
                                                channelGuildId: eR,
                                                messageId: W,
                                                isBurstReaction: eU,
                                                listHeaderClassName: z,
                                            })
                                          : null,
                                  }),
                        ],
                    }),
                    (0, l.jsx)(nS, { emojiGrid: to, className: nN.qV, guildId: eR, pickerIntention: c, channel: u }),
                    a,
                    c === eq.EmojiIntention.REACTION
                        ? (0, l.jsx)(e6, { targetElementRef: eM, shouldShow: ev && !ek, onDismiss: () => eL(!1) })
                        : null,
                ],
            }),
            tD = (0, l.jsx)(g.A, {
                ...e3,
                children: (0, l.jsxs)(t_, {
                    id: tx.Do,
                    "aria-labelledby": v && !eO ? tx.k1 : void 0,
                    role: v && !eO ? "tabpanel" : void 0,
                    className: o()(nN.iE, { [nN.r6]: v, [nN.cB]: eU }),
                    children: [
                        v || eO ? null : tj,
                        (0, l.jsx)("div", {
                            className: o()(nN.Fb, w, { [nN.eW]: eO && !v }),
                            onScroll: iC,
                            children: eO ? (0, l.jsx)(ec, { onBack: () => eT?.(!1), onSelectEmoji: ty }) : tM,
                        }),
                        B || eO
                            ? null
                            : (0, l.jsx)(tQ, {
                                  className: o()(nN.jv, Z),
                                  emojiListRef: eg,
                                  sectionDescriptors: tr,
                                  intention: c,
                                  channel: u,
                                  fallbackGuildId: eR,
                                  showOnlyUnicode: Y,
                                  pinnedPacks: eb,
                                  onViewEmojiPacks: eA ? () => eT?.(!0) : void 0,
                              }),
                    ],
                }),
            });
        return (0, l.jsx)(y.f5, { value: e4, children: tD });
    });
