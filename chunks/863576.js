(n.d(t, { A: () => iD }), n(321073));
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
    x = n(263775),
    j = n(379848),
    O = n(121681),
    T = n(770335),
    S = n(490035),
    b = n(934499),
    R = n(331322),
    v = n(866665),
    L = n(408278),
    P = n(477155),
    M = n(403581),
    D = n(646514),
    w = n(534514),
    k = n(805251),
    U = n(95362),
    G = n(311364),
    F = n(151271),
    J = n(465794),
    V = n(683973),
    K = n(287809),
    B = n(474090),
    H = n(186280),
    W = n(956396),
    X = n(118057),
    z = n(834730),
    Y = n(847374),
    Z = n(320448),
    $ = n(834040),
    q = n(499373),
    Q = n(559106),
    ee = n(442433),
    et = n(565645),
    en = n(915089),
    ei = n(60587),
    es = n(236432),
    el = n(792996),
    er = n(126904);
let ea = r.memo(function (e) {
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
        h = el.intl.string(E ? el.t.iTcuma : el.t.dcl9MQ),
        g = el.intl.string(a ? es.default["2zxYCx"] : es.default.Tvdb5N),
        p = r.useMemo(() => t.emojis.filter((e) => e.available), [t.emojis]),
        A = r.useMemo(() => [p.length], [p.length]),
        _ = (0, en.GV)(),
        {
            getContainerProps: N,
            getItemProps: C,
            getRowProps: y,
        } = (0, X.A)({
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
        className: er.nM,
        ref: s,
        children: [
            (0, l.jsxs)(R.B, {
                align: "center",
                direction: "horizontal",
                gap: 4,
                justify: "space-between",
                children: [
                    (0, l.jsxs)(R.B, {
                        align: "center",
                        className: er.DD,
                        direction: "horizontal",
                        gap: 4,
                        children: [
                            (0, l.jsx)(w.D, { className: er.UU, id: m, variant: "body-sm/semibold", children: t.name }),
                            (0, l.jsx)(z.E, {
                                color: "text-subtle",
                                variant: "body-sm/medium",
                                children: el.intl.format(es.default.UA8cNe, { count: p.length }),
                            }),
                            (0, l.jsx)(v.m, {
                                text: h,
                                children: (0, l.jsx)(L.K, {
                                    autoFocus: i,
                                    "aria-controls": f,
                                    "aria-describedby": m,
                                    "aria-expanded": E,
                                    "aria-label": h,
                                    icon: E ? Y.ChevronSmallDownIcon : Z.ChevronSmallRightIcon,
                                    onClick: () => I((e) => !e),
                                    size: "sm",
                                    variant: "icon-only",
                                }),
                            }),
                        ],
                    }),
                    (0, l.jsx)(v.m, {
                        text: g,
                        children: (0, l.jsx)(L.K, {
                            "aria-label": g,
                            icon: a ? $.MinusIcon : q.PlusMediumIcon,
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
                className: o()(er.gm, { [er.jE]: E }),
                tabIndex: t.available && p.length > 0 ? x.tabIndex : -1,
                children: (0, l.jsx)("div", {
                    className: er.nI,
                    ...y(0),
                    children: p.map((e, i) => {
                        let { ref: s, ...r } = C(i, 0);
                        return (0, l.jsx)(
                            v.m,
                            {
                                text: `:${e.name}:`,
                                ariaHidden: !0,
                                asContainer: !0,
                                children: (0, l.jsx)(Q.vN, {
                                    children: (0, l.jsx)("button", {
                                        ...r,
                                        ref: s,
                                        "aria-label": `:${e.name}:`,
                                        className: er.Z8,
                                        "data-type": ei.g.EMOJI,
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
                                            (0, ee.L3)(e, async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e(476662),
                                                    n.e(912875),
                                                    n.e(73500),
                                                    n.e(496715),
                                                    n.e(904774),
                                                    n.e(446132),
                                                ]).then(n.bind(n, 233503));
                                                return (n) => (0, l.jsx)(e, { ...n, target: t, showFavoriteOnly: !0 });
                                            });
                                        },
                                        type: "button",
                                        children: (0, l.jsx)(et.A, {
                                            animated: e.animated,
                                            alt: "",
                                            className: er.Zg,
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
var eo = n(682901),
    ec = n(429800);
function eu(e) {
    let { onBack: t, onSelectEmoji: n } = e,
        i = el.intl.string(es.default.Nwj3fK),
        s = r.useRef(null),
        a = (0, F.RQ)((e) => e.showSelectedEmojiPackId),
        o = (0, m.bG)([W.A], () => W.A.getPacks()),
        c = null != a && o.some((e) => e.id === a),
        u = (0, m.bG)([K.default], () => K.default.getCurrentUser()),
        d = (0, B.ki)(u, eo.PremiumTypes.TIER_2);
    (r.useLayoutEffect(() => {
        c &&
            (s.current?.scrollIntoView({ block: "start" }),
            s.current?.querySelector("button[aria-expanded]")?.focus({ preventScroll: !0 }));
    }, [c, a]),
        (0, H.i3)(d),
        (0, H.$W)("emoji_picker", d));
    let f = (0, V.k)().pinnedEmojiPacks?.packIds,
        E = r.useCallback((e) => {
            (0, b.Ls)(e.id);
        }, []),
        I = r.useCallback((e) => {
            (0, b.M5)(e.id);
        }, []);
    return (0, l.jsxs)("div", {
        className: ec.kL,
        children: [
            (0, l.jsx)("div", { "aria-hidden": !0, className: ec.Tp }),
            (0, l.jsx)("div", {
                className: ec.wx,
                children: (0, l.jsxs)(R.B, {
                    align: "center",
                    direction: "horizontal",
                    gap: 8,
                    justify: "space-between",
                    wrap: !0,
                    children: [
                        (0, l.jsxs)(R.B, {
                            align: "center",
                            direction: "horizontal",
                            gap: 10,
                            fullWidth: !1,
                            children: [
                                (0, l.jsx)(v.m, {
                                    position: "right",
                                    text: i,
                                    children: (0, l.jsx)(L.K, {
                                        autoFocus: !c,
                                        "aria-label": i,
                                        icon: P.ArrowSmallLeftIcon,
                                        onClick: t,
                                        size: "sm",
                                        variant: "icon-only",
                                    }),
                                }),
                                (0, l.jsxs)(R.B, {
                                    align: "center",
                                    direction: "horizontal",
                                    gap: 4,
                                    fullWidth: !1,
                                    children: [
                                        (0, l.jsx)(M.NitroWheelIcon, { color: D.A.colors.TEXT_DEFAULT, size: "xs" }),
                                        (0, l.jsxs)(R.B, {
                                            align: "center",
                                            direction: "horizontal",
                                            gap: 8,
                                            fullWidth: !1,
                                            children: [
                                                (0, l.jsx)(w.D, {
                                                    variant: "heading-sm/semibold",
                                                    children: el.intl.string(es.default["0+5+Oy"]),
                                                }),
                                                (0, l.jsx)(k.E, { type: "beta", variant: "primary" }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        d
                            ? null
                            : (0, l.jsx)(G.Y, {
                                  newLocations: [H.Vg.emoji_picker.location],
                                  children: (0, l.jsx)(J.A, {
                                      buttonTextOverride: el.intl.string(el.t.hIVbiP),
                                      size: "sm",
                                      subscriptionTier: eo.pe.TIER_2,
                                  }),
                              }),
                    ],
                }),
            }),
            (0, l.jsx)(U.d_, {
                className: ec.p_,
                scrollbarGutter: !1,
                children: o.map((e, t) =>
                    (0, l.jsxs)(
                        r.Fragment,
                        {
                            children: [
                                t > 0 ? (0, l.jsx)("hr", { className: ec.yF }) : null,
                                (0, l.jsx)(
                                    ea,
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
var ed = n(617617);
let em = [];
var ef = n(536637),
    eE = n.n(ef),
    eI = n(73153),
    eh = n(811091);
let eg = { lastSeenNewlyAddedEmojiIds: {} },
    ep = eg,
    eA = {};
function e_() {
    for (let e in eA) ep.lastSeenNewlyAddedEmojiIds[e] = eA[e];
}
class eN extends m.Ay.PersistedStore {
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
        ep = e ?? eg;
    }
    getState() {
        return ep;
    }
    getLastSeenEmojiByGuild(e) {
        return ep.lastSeenNewlyAddedEmojiIds[e];
    }
    isNewerThanLastSeen(e, t) {
        if (null == e || null == t) return !1;
        let n = this.getLastSeenEmojiByGuild(e);
        if (null == n || eh.default.compare(t, n.id) > 0) return !0;
        {
            let e = eE()(n.lastSeen);
            return eE()().isBefore(e.add(2, "weeks")) && !n.acknowledged;
        }
    }
}
let eC = new eN(eI.h, {
    LOGOUT: function () {
        ((ep = eg), (eA = {}));
    },
    NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = eA[t] ?? ep.lastSeenNewlyAddedEmojiIds[t];
        null == i || 0 > eh.default.compare(i.id, n)
            ? (eA[t] = { id: n, lastSeen: Date.now(), acknowledged: !0 })
            : (eA[t] = { ...i, acknowledged: !0 });
    },
    NEWLY_ADDED_EMOJI_SEEN_PENDING: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = eA[t] ?? ep.lastSeenNewlyAddedEmojiIds[t];
        (null == i || 0 > eh.default.compare(i.id, n)) && (eA[t] = { id: n, lastSeen: Date.now(), acknowledged: !1 });
    },
    NEWLY_ADDED_EMOJI_SEEN_UPDATED: e_,
    CLEAR_CACHES: function () {
        ((ep = eg), e_());
    },
    CONNECTION_CLOSED: e_,
});
var ey = n(451731),
    ex = n(850992),
    ej = n(887695),
    eO = n(613412),
    eT = n(462887),
    eS = n(939249),
    eb = n(789645),
    eR = n(696986),
    ev = n(736653),
    eL = n(139286),
    eP = n(976860),
    eM = n(71393),
    eD = n(384684),
    ew = n(985242),
    ek = n(652215),
    eU = n(746080),
    eG = n(196404);
function eF(e) {
    let t,
        { onClose: i, guildId: s, emojiId: r } = e,
        a = ((t = (0, ev.Ay)()), (0, eT.q)(t) ? n(454333) : n(674463)),
        { analyticsLocations: o } = (0, y.Ay)(N.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, eL.A)({
        type: eO.ImpressionTypes.MODAL,
        name: eO.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: { location_stack: o, emoji_guild_id: s, emoji_id: r ?? null },
    });
    let c = (0, m.bG)([eM.A], () => eM.A.getGuild(s)),
        u = (0, m.bG)([eD.A], () => null != s && eD.A.getUserSubscriptionRoles(s).size > 0),
        d = u ? el.intl.string(el.t.GoLM9z) : el.intl.formatToPlainString(el.t["h0u/Hi"], { serverName: c?.name }),
        f = u ? el.intl.string(el.t.PjZ7Db) : el.intl.string(el.t.p8FG1D);
    return (0, l.jsxs)("div", {
        className: eG.kL,
        children: [
            (0, l.jsx)("div", { className: eG.Tp }),
            (0, l.jsxs)("div", {
                className: eG.Qs,
                children: [
                    (0, l.jsx)(eS.D, {
                        className: eG.b,
                        "aria-label": el.intl.string(el.t.cpT0Cq),
                        onClick: i,
                        children: (0, l.jsx)(eb.XSmallIcon, {
                            size: "xs",
                            color: "currentColor",
                            "aria-label": el.intl.string(el.t.cpT0Cq),
                            className: eG.yP,
                        }),
                    }),
                    (0, l.jsx)("img", { alt: "", src: a, className: eG.Tn }),
                    (0, l.jsx)(eR.h, { size: 22 }),
                    (0, l.jsx)(w.D, {
                        color: "text-strong",
                        variant: "heading-lg/semibold",
                        className: eG.wx,
                        children: el.intl.string(el.t.cBjkcx),
                    }),
                    (0, l.jsx)(eR.h, { size: 4 }),
                    (0, l.jsx)(z.E, {
                        color: "text-default",
                        variant: "body-md/normal",
                        className: eG.h_,
                        children: d,
                    }),
                    (0, l.jsx)(eR.h, { size: 24 }),
                    (0, l.jsx)(ew.A, {
                        text: f,
                        onClick: function () {
                            (0, eP.pX)(ek.BVt.CHANNEL(s, eU.VV.ROLE_SUBSCRIPTIONS), { sourceLocationStack: o });
                        },
                    }),
                ],
            }),
        ],
    });
}
var eJ = n(450510),
    eV = n(778705),
    eK = n(253932),
    eB = n(808728),
    eH = n(129230),
    eW = n(240248),
    eX = n(822123),
    ez = n(734057),
    eY = n(309010),
    eZ = n(690521),
    e$ = n(818645),
    eq = n(316884),
    eQ = n(307731),
    e0 = n(698279);
function e1(e) {
    let { intention: t, containerWidth: n, rowSize: i, isBurstReaction: s, analyticsObject: l } = e,
        r = ez.A.getChannel(eY.Ay.getChannelId()),
        a = r?.getGuildId(),
        o =
            t === eQ.EmojiIntention.REACTION
                ? O.Ay.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice()
                : O.Ay.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        c = null != r ? O.Ay.getDisambiguatedEmojiContext(r.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        u =
            t === eQ.EmojiIntention.REACTION
                ? O.Ay.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems
                : O.Ay.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        d = o.slice(0, u),
        m = null != a ? O.Ay.getGuildEmoji(a) : [],
        f = O.Ay.getDisambiguatedEmojiContext(r?.getGuildId()).getCustomEmoji(),
        { topEmojis: E, newlyAddedEmojis: I } = (0, eq.b)({ guildId: r?.getGuildId(), pickerIntention: t }),
        { visibleTopEmojis: h, visibleNewlyAddedEmojis: g } = (0, e$.W)({
            topEmojis: E,
            newlyAddedEmojis: I,
            rowSize: i,
        });
    C.Ay.trackWithMetadata(
        t === eQ.EmojiIntention.REACTION ? ek.HAw.REACTION_PICKER_OPENED : ek.HAw.EXPRESSION_PICKER_OPENED,
        {
            width: n,
            tab: e0.kx.EMOJI,
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
            ...(t === eQ.EmojiIntention.REACTION && { is_burst: s }),
            ...(null != l && { location_object: l }),
        },
    );
}
var e2 = n(206248),
    e3 = n(423814),
    e4 = n(77528),
    e5 = n(783420),
    e8 = n(448645);
let e6 = { object: ek.ZSU.BUTTON_CTA, section: ek.JJy.SUPER_REACTION_PICKER };
function e9(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: i } = e,
        s = el.intl.string(el.t.eikz43),
        r = (0, e4.V)(),
        a = (0, e3.O)(),
        o = r?.subscriptionTrial,
        c = null != o || null != a,
        u = o?.skuId ?? eo.pe.TIER_2,
        d = c
            ? null != a
                ? el.intl.formatToPlainString(el.t.bkQ4bH, { percent: a.discount.amount })
                : (0, e8.FY)({ intervalType: o?.interval, intervalCount: o?.intervalCount })
            : el.intl.string(el.t.sEAnVH);
    return (0, l.jsx)(e5.A, {
        subscriptionTier: u,
        premiumModalAnalyticsLocation: e6,
        onSubscribeModalClose: (e) => {
            e && i();
        },
        children: (e) => {
            let { onClick: r } = e;
            return (0, l.jsx)(e2.H, {
                targetElementRef: t,
                shouldShow: n,
                onRequestClose: i,
                position: "bottom",
                assetUrl: "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
                disableMediaViewer: !0,
                badge: c ? { type: "free_trial", variant: "expressive" } : void 0,
                title: el.intl.string(el.t.N4SCJ0),
                body: s,
                action: { text: d, variant: "expressive", icon: M.NitroWheelIcon, onClick: r },
            });
        },
    });
}
var e7 = n(200589),
    te = n(435558),
    tt = n.n(te),
    tn = n(837381),
    ti = n(460905),
    ts = n(775602),
    tl = n(713517),
    tr = n(329921),
    ta = n(49999),
    to = n(938612),
    tc = n(342379);
function tu(e) {
    let { onClick: t, listItemId: n, showDiscoveryDot: i, onDismissDiscovery: s } = e,
        r = el.intl.string(es.default["3D0GLv"]),
        a = (0, tn.rm)(n);
    return (0, l.jsx)("div", {
        className: to.nM,
        children: (0, l.jsxs)("div", {
            className: to.Jn,
            children: [
                (0, l.jsx)(v.m, {
                    ariaHidden: !0,
                    position: "right",
                    text: r,
                    children: (0, l.jsx)(eS.D, {
                        ...a,
                        "aria-label": i ? `${r}, ${el.intl.string(el.t.y2b7CA)}` : r,
                        className: o()(to.x6, { [tc.Bj]: !i }),
                        "data-show-discovery": i,
                        onClick: function () {
                            (i && s(ta.i.TAKE_ACTION), t());
                        },
                        children: (0, l.jsx)(M.NitroWheelIcon, {
                            size: "md",
                            color: "currentColor",
                            className: i ? void 0 : tc.Yl,
                        }),
                    }),
                }),
                i && (0, l.jsx)(tr.N, { className: to.aW, size: "md", cutout: "base-lower" }),
            ],
        }),
    });
}
var td = n(318845),
    tm = n(407698),
    tf = n(941971),
    tE = n(531685),
    tI = n(406810),
    th = n(27232),
    tg = n(369606),
    tp = n(413249),
    tA = n(141060),
    t_ = n(687966),
    tN = n(115979),
    tC = n(524501),
    ty = n(926268),
    tx = n(138134),
    tj = n(732139);
let tO = r.memo(function (e) {
    let { categoryId: t, ...n } = e,
        i = (function (e) {
            switch (e) {
                case tj.R2.RECENT:
                    return tI.ClockIcon;
                case tj.R2.FAVORITES:
                    return th.StarIcon;
                case tj.R2.TOP_GUILD_EMOJI:
                    return tg.TrophyIcon;
                case tj.R2.PEOPLE:
                    return ti.ReactionIcon;
                case tj.R2.NATURE:
                    return tp.NatureIcon;
                case tj.R2.FOOD:
                    return tA.FoodIcon;
                case tj.R2.ACTIVITY:
                    return t_.GameControllerIcon;
                case tj.R2.TRAVEL:
                    return tN.BicycleIcon;
                case tj.R2.OBJECTS:
                    return tC.ObjectIcon;
                case tj.R2.SYMBOLS:
                    return ty.HeartIcon;
                case tj.R2.FLAGS:
                    return tx.FlagIcon;
                case tj.R2.PREMIUM_UPSELL:
                    return M.NitroWheelIcon;
                default:
                    return;
            }
        })(t);
    return null == i ? null : (0, l.jsx)(i, { color: "currentColor", ...n });
});
var tT = n(724511),
    tS = n(115560),
    tb = n(7584),
    tR = n(526292),
    tv = n(711014),
    tL = (((i = {})[(i.EMOJI = 0)] = "EMOJI"), (i[(i.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"), i);
let tP = [eQ.Am.DISALLOW_EXTERNAL, eQ.Am.DISALLOW_CUSTOM];
var tM = (((s = {})[(s.PREMIUM = 0)] = "PREMIUM"), (s[(s.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), s);
let tD = "expression-guild-",
    { itemIdForIndex: tw } = (0, td.J)(tD),
    tk = `${tD}view-emoji-packs`,
    tU = (0, eW.xI)(E.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    tG = (0, eW.xI)(E.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    tF = (0, eW.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    tJ = (0, eW.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    tV = (0, eW.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    tK = (0, eW.xI)(tc.__invalid_unicodeCategoryShortcutHeight),
    tB = (0, eW.xI)(E.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    tH = (0, eW.xI)(E.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    tW = tF + tG + 2 * tV,
    tX = tB + 2 * tH,
    tz = tU + tG,
    tY = tz + tX,
    tZ = tF + tJ + 2 * tV,
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
        { isHoveringOrFocusing: f } = (0, tl.A)(m),
        E = (0, tn.rm)(tw(n)),
        I = a.type === tj.s.GUILD || a.type === tj.s.PACK ? null : a.id,
        h = t === n,
        g = !d && u,
        p = a.type === tj.s.GUILD ? a.guild : null,
        A = a.type === tj.s.PACK ? a.pack : null,
        _ = (0, l.jsxs)(eS.D, {
            innerRef: m,
            ...E,
            "aria-label": a.type === tj.s.PACK ? a.pack.name : (0, eX.wt)(a, p),
            className: o()({
                [tc.ZG]: null != p,
                [tc.td]: null != A,
                [tc.Q0]: null != A && h,
                [tc.Bj]: null == p && null == A,
                [tc.s6]: null == p && null == A && h,
                [tc.xg]: a.type === tj.s.RECENT,
            }),
            onClick: () => {
                (null != p &&
                    eH.default.track(ek.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: i?.location,
                        tab: e0.kx.EMOJI,
                        guild_id: p.id,
                    }),
                    c(n));
            },
            children: [
                (0, l.jsx)("div", {
                    className: tc.a$,
                    children: (0, l.jsx)(tf.A, { hovered: f, selected: h, size: "small" }),
                }),
                a.type === tj.s.GUILD
                    ? (0, l.jsx)(tT.A, { guild: a.guild, isSelected: h, shouldAnimate: g, isLocked: a.isNitroLocked })
                    : null,
                null != A
                    ? (0, l.jsx)(et.A, {
                          alt: "",
                          animated: !d,
                          shouldAnimate: g,
                          className: tc.ty,
                          emojiId: A.representativeEmojiId,
                      })
                    : null,
                null == p && null != I
                    ? (0, l.jsx)(tO, { categoryId: I, className: tc.Yl, height: tF, width: tF, size: "custom" })
                    : null,
            ],
        }),
        N = s[n + 1],
        C = s[n - 1],
        y = null != A && null != C && C.type !== tj.s.PACK,
        x = null != A && N?.type !== tj.s.PACK,
        j = null != N && a.type === tj.s.GUILD && N.type !== tj.s.GUILD;
    return null != p
        ? (0, l.jsxs)(r.Fragment, {
              children: [
                  (0, l.jsx)(tm.Q, { guild: p, children: _ }),
                  j ? (0, l.jsx)("hr", { className: tc.ny }, "separator") : null,
              ],
          })
        : null != A
          ? (0, l.jsxs)(r.Fragment, {
                children: [
                    y ? (0, l.jsx)("hr", { className: tc.ny }) : null,
                    (0, l.jsx)(v.m, { ariaHidden: !0, position: "right", text: A.name, children: _ }),
                    x ? (0, l.jsx)("hr", { className: tc.ny }) : null,
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
            showEmojiPacksDiscovery: E,
            onDismissEmojiPacksDiscovery: I,
        } = e,
        h = ex.Om.useStore((e) => e.activeCategoryIndex),
        g = (function (e) {
            let { emojiListRef: t } = e,
                n = (0, F.RQ)((e) => e.searchQuery),
                i = r.useCallback((e) => t.current?.scrollToSectionTop(e), [t]);
            return r.useCallback(
                (e) => {
                    "" !== n ? ((0, F.Ri)(""), ex.Om.setActiveCategoryIndex(e)) : i(e);
                },
                [i, n],
            );
        })({ sectionDescriptors: i, emojiListRef: n }),
        A = (0, p.p)(),
        _ = (0, eX.ss)(s, a, { guildId: a?.guild_id ?? c }),
        N = r.useMemo(() => (0, e7.t)(u ? (0, eX.CQ)() : _, d), [_, d, u]),
        C = r.useRef(null),
        y = (0, m.bG)([tE.A], () => tE.A.isFocused()),
        x = (0, m.bG)([ts.Ay], () => ts.Ay.useReducedMotion, []),
        j = r.useMemo(
            () =>
                tt().memoize(
                    (e, t) => {
                        let n = N[t];
                        if (null != n)
                            return (0, l.jsx)(
                                tq,
                                {
                                    activeIndex: h,
                                    analyticsContext: A,
                                    categories: N,
                                    category: n,
                                    categoryIndex: t,
                                    handleCategorySelect: g,
                                    isWindowFocused: y,
                                    useReducedMotion: x,
                                },
                                t,
                            );
                    },
                    (e, t) => t,
                ),
            [h, A, N, g, y, x],
        ),
        O = r.useMemo(() => [8, 8, 0, 8], []),
        T = null != f ? t$ : 0,
        S = r.useMemo(() => {
            if (null != f)
                return function () {
                    return (0, l.jsx)(
                        tu,
                        { listItemId: tk, onClick: f, showDiscoveryDot: E, onDismissDiscovery: I },
                        "view-emoji-packs",
                    );
                };
        }, [f, E, I]),
        b = r.useCallback(
            (e, t) => {
                let n = N[t];
                if (n.type === tj.s.RECENT) return tW;
                if (n.type === tj.s.PACK) {
                    let e = N[t - 1],
                        n = N[t + 1];
                    return tz + (Number(null != e && e.type !== tj.s.PACK) + Number(n?.type !== tj.s.PACK)) * tX;
                }
                if (n.type === tj.s.GUILD) {
                    let e = N[t + 1];
                    return null != e && e.type !== tj.s.GUILD ? tY : tz;
                }
                return tZ;
            },
            [N],
        ),
        {
            nonUnicodeCategoryCount: R,
            firstUnicodeCategoryIndex: v,
            firstUnicodeCategoryOffsetTop: L,
            rowCountBySection: P,
        } = r.useMemo(() => {
            let e = 0,
                t = 0,
                n = 0,
                i = 0;
            N.forEach((s) => {
                s.type === tj.s.GUILD || s.type === tj.s.PACK
                    ? ((t += 1), (n += 1))
                    : s.type === tj.s.UNICODE
                      ? (i += 1)
                      : ((e += 1), (t += 1));
            });
            let s = [e, n, i],
                l = N.some((e) => e.type === tj.s.PACK) ? (N[0]?.type === tj.s.PACK ? 1 : 2) : 0,
                r = T + tW + t * tz + tY + l * tX;
            return {
                nonUnicodeCategoryCount: t,
                firstUnicodeCategoryIndex: t,
                firstUnicodeCategoryOffsetTop: r,
                rowCountBySection: s,
            };
        }, [N, T]),
        [M, D] = r.useState(!0);
    r.useLayoutEffect(() => {
        D(R >= 7);
    }, [R]);
    let w = r.useCallback(
            (e) => {
                let t = C.current?.getListDimensions();
                null == t || (e + t.height - tB >= L ? D(!1) : D(!0));
            },
            [L],
        ),
        k = r.useCallback(
            (e) => {
                (e(v), C.current?.scrollTo(L));
            },
            [L, v],
        ),
        U = r.useCallback(
            (e, t) => {
                let n = N[e];
                if (null == n) return 0;
                let i = M ? tK : 0;
                if (n.type === tj.s.RECENT) return t ? 0 : tJ;
                if (n.type === tj.s.PACK) return t ? i : tG;
                if (n.type === tj.s.GUILD) {
                    let n = N[e + 1];
                    return null != n && n.type !== tj.s.GUILD ? (t ? tB + -2 * tH + tG + i : tG) : t ? i : tG;
                }
                return t ? tG + i : 2 * tG;
            },
            [N, M],
        ),
        G = r.useMemo(
            () =>
                function (e, t) {
                    return (0, l.jsx)(r.Fragment, { children: t }, e);
                },
            [],
        ),
        J = M ? "shortcut" : "hiddenshortcut";
    return (0, l.jsx)(td.A, {
        categoryListRef: C,
        expressionsListRef: n,
        className: t,
        store: ex.Om,
        categories: N,
        listPadding: O,
        onScroll: w,
        renderCategoryListItem: j,
        renderSection: G,
        rowCount: N.length,
        categoryHeight: b,
        getScrollOffsetForIndex: U,
        rowCountBySection: P,
        navId: "emoji-picker-categories",
        itemIdPrefix: tD,
        renderListHeader: S,
        listHeaderHeight: T,
        children: (e) =>
            R >= 7 &&
            (0, l.jsx)(
                eS.D,
                {
                    "aria-hidden": !M,
                    "aria-label": el.intl.string(el.t.dT0ctw),
                    className: o()(tc.KB, { [tc.h_]: !M }),
                    tabIndex: M ? 0 : -1,
                    onClick: () => k(e),
                    children: (0, l.jsx)(ti.ReactionIcon, {
                        size: "custom",
                        color: "currentColor",
                        height: tF,
                        width: tF,
                    }),
                },
                J,
            ),
    });
};
var t0 = n(860197);
let t1 = function (e) {
    let { markAsDismissed: t } = e;
    return (0, l.jsxs)(z.E, {
        variant: "body-xs/medium",
        color: "text-default",
        className: t0.iE,
        children: [
            (0, l.jsx)(ty.HeartIcon, { size: "md", color: "currentColor", className: t0.Kk }),
            (0, l.jsx)("div", {
                className: t0.Qs,
                children: (0, l.jsx)(z.E, { variant: "body-xs/normal", children: el.intl.string(el.t.xdRf69) }),
            }),
            (0, l.jsx)(eS.D, {
                onClick: () => t(ta.i.UNKNOWN),
                children: (0, l.jsx)(eb.XSmallIcon, { size: "md", color: "currentColor", className: t0.VN }),
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
        s = (0, m.bG)([ts.Ay], () => ts.Ay.useReducedMotion),
        a = K.default.getCurrentUser(),
        c = null != a && !(0, e8.TW)(a),
        u = c ? [] : [f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP],
        [d, E] = (0, x.kn)(u),
        [I, h] = r.useState(!1),
        [g, p] = (0, t3.z)(() => ({})),
        A = (0, t2.animated)(t4.SuperReactionIcon);
    r.useEffect(() => {
        let e = d === f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (E(ta.i.DISMISS), setTimeout(() => h(e), 200));
    }, [d, E]);
    let _ = I ? el.intl.string(el.t["Osi/uy"]) : t && !c ? el.intl.string(el.t["5cRA/b"]) : el.intl.string(el.t.buV4av),
        N = I ? el.intl.string(el.t.ORK94p) : void 0;
    return (0, l.jsx)(t5.u, {
        position: "top",
        title: N,
        body: _,
        asset: (0, l.jsx)(M.NitroWheelIcon, { size: "md", color: "currentColor" }),
        assetSize: 20,
        forceOpen: I,
        children: (0, l.jsx)(eS.D, {
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
        d = (0, nn.Us)() === ek.BRT.OVERLAY,
        m = c || a,
        f = r.useCallback(
            async (e, i, l) => {
                (u(!0),
                    n(),
                    await (0, ne.f)({
                        userImage: { data: e, file: i, image: l },
                        guildId: t?.guild_id ?? null,
                        analyticsLocation: {
                            section: ek.JJy.EXPRESSION_PICKER,
                            page: t?.guild_id != null ? ek.liQ.GUILD_CHANNEL : ek.liQ.DM_CHANNEL,
                        },
                    }),
                    (s.current += 1),
                    u(!1));
            },
            [t, n],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(v.m, {
                asContainer: !0,
                text: d ? el.intl.string(el.t.RMbedC) : null,
                children: (0, l.jsx)(t7.$, {
                    text: el.intl.string(el.t.iMJO37),
                    variant: "secondary",
                    onClick: function () {
                        (C.Ay.trackWithMetadata(ek.HAw.EXPRESSION_PICKER_ADD_EMOJI_CLICKED, {
                            guild_id: t?.guild_id ?? null,
                            channel_id: t?.id ?? null,
                            location_section: ek.JJy.EXPRESSION_PICKER,
                            location_page: t?.guild_id != null ? ek.liQ.GUILD_CHANNEL : ek.liQ.DM_CHANNEL,
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
let nu = (0, en.Ld)(),
    nd = nl.A.convert.fromCodePoint("1f44f"),
    nm = (0, eW.xI)(E.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
function nf(e) {
    switch (nl.A.convert.toCodePoint(e)) {
        case "1f3fb":
            return el.intl.string(el.t["BVK5b/"]);
        case "1f3fc":
            return el.intl.string(el.t.xJWOK8);
        case "1f3fd":
            return el.intl.string(el.t["MB+T5g"]);
        case "1f3fe":
            return el.intl.string(el.t.MODud2);
        case "1f3ff":
            return el.intl.string(el.t["0uzqsc"]);
        default:
            return el.intl.string(el.t.bGN1ow);
    }
}
let nE = (e) => {
    let { fade: t, surrogate: n, onClick: i, delay: s, index: r } = e,
        a = (0, tn.rm)(`item-${r}`),
        o = eZ.Ay.getURL(nd + n),
        c = (0, t3.z)({ opacity: 1, from: { opacity: +!t }, delay: s }, "animate-always");
    return (0, l.jsx)(eS.D, {
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
        a = (0, t3.z)({ height: (nm + 14) * (tb.W$.length + 1), from: { height: nm + 14 }, config: { duration: 125 } }),
        o = r.useRef(s);
    r.useEffect(() => {
        o.current.focusFirstVisibleItem();
    }, []);
    let c = ["", ...tb.W$];
    return (
        tt().remove(c, (e) => e === n),
        c.unshift(n),
        (0, l.jsx)(tn.hD, {
            navigator: s,
            children: (0, l.jsx)(tn.PR, {
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
            (0, l.jsx)(eS.D, {
                innerRef: d,
                className: nc.Dj,
                onClick: function () {
                    c(!0);
                },
                "aria-label": el.intl.formatToPlainString(el.t["2SfnMp"], { skinTone: nf(n) }),
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
        d = (0, F.RQ)((e) => e.searchQuery),
        [m, f, E] = ex.Om.useStore((e) => [e.inspectedExpressionPosition, e.searchPlaceholder, e.hasInteracted], ng.x),
        I = r.useCallback(
            (e) => {
                (ex.Om.setActiveCategoryIndex("" === e ? 0 : -1),
                    ex.Om.setInspectedExpressionPosition(0, 0),
                    ex.Om.setSearchPlaceholder(null),
                    (0, F.Ri)(e),
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
                "aria-label": el.intl.string(el.t.tCauZX),
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
                    gridNavigatorId: tj.lq,
                    onKeyDown: a,
                    ref: d,
                    onFocus: c,
                    autoFocus: u,
                    defaultSearchPlaceholder: (0, eX.wT)(i, f),
                }),
                i === eQ.EmojiIntention.REACTION ? (0, l.jsx)(t9, { checked: f, onClick: E, buttonRef: I }) : null,
                n ?? (0, l.jsx)(nh, { searchBarRef: d, className: nN.fx, selectedSurrogate: m }),
                i !== eQ.EmojiIntention.NO_CUSTOM_EMOJI && g ? (0, l.jsx)(ns, { channel: t, closePopout: p }) : null,
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
        d = ex.Om.useStore((e) => e.inspectedExpressionPosition),
        f = r.useMemo(() => {
            let { rowIndex: e, columnIndex: t } = d;
            return a[e]?.[t];
        }, [a, d]);
    switch (f?.type) {
        case tL.EMOJI:
            t = f?.emoji;
            break;
        case tL.EXPAND_OR_COLLAPSE_EMOJIS:
            t = { type: "EXPAND_OR_COLLAPSE_EMOJI", guildId: f?.guildId, allNamesString: f?.name };
            break;
        default:
            t = null;
    }
    let E = (0, m.bG)([eM.A], () => (null !== t && t.type === T.i.GUILD ? eM.A.getGuild(t.guildId) : null), [t]),
        I = (0, m.bG)([W.A], () => (null !== t && t.type === T.i.PACK ? W.A.getPack(t.packId) : null), [t]),
        h = (0, m.bG)([tE.A], () => tE.A.isFocused()),
        g = (0, m.bG)([ts.Ay], () => ts.Ay.useReducedMotion, []),
        p = eK.Sf.useSetting(),
        A = (0, eX.O7)(o, nT(t) ? t : null),
        _ = (0, m.bG)([O.Ay], () => O.Ay.expandedSectionsByGuildIds),
        { newlyAddedEmojis: N } = (0, eq.A)(o, c),
        C = f?.type === tL.EMOJI ? f.subCategory : tj.tm.NONE;
    if (
        (r.useEffect(() => {
            let e = Date.now();
            return () => {
                Date.now() - e >= 250 &&
                    nT(t) &&
                    C !== tj.tm.NONE &&
                    (C === tj.tm.NEWLY_ADDED_EMOJI &&
                        null !== t &&
                        t.type === T.i.GUILD &&
                        (0, ey.mz)(t.guildId, N[0].id),
                    null != d.source &&
                        (0, eX.yB)({
                            emoji: t,
                            subCategory: C,
                            position: f.columnIndex + 1,
                            newlyAddedHighlight: C === tj.tm.NEWLY_ADDED_EMOJI && eC.isNewerThanLastSeen(o, t.id),
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
                    ? (0, l.jsx)(z.E, {
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
                    ? (0, l.jsx)("img", { className: nO.Kk, src: (0, eT.M)(r) ? a : o, alt: "" })
                    : (0, l.jsx)("img", { className: nO.Kk, src: (0, eT.M)(r) ? t : i, alt: "" });
            }
        })(t, { allowAnimatedEmoji: p, sectionsExpandedFromThreeRows: _, theme: nx.A.theme }),
        x =
            null != E
                ? (0, l.jsx)(tT.A, { className: nO.__invalid_guildIcon, guild: E, shouldAnimate: !g && h })
                : null;
    i =
        "EXPAND_OR_COLLAPSE_EMOJI" === t.type
            ? _.has(t.guildId)
                ? el.intl.string(el.t["/K2RDH"])
                : el.intl.string(el.t.NZI2Zk)
            : (0, eZ.N)(t);
    let j = (function (e) {
        let { inspectedEmoji: t, guild: n, pack: i } = e,
            s = nT(t);
        return null != n && s
            ? el.intl.format(el.t.KFW2aY, { guildName: n.name })
            : null != i && s
              ? el.intl.format(es.default.VEfeux, {
                    packName: (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(M.NitroWheelIcon, {
                                size: "custom",
                                width: 10,
                                height: 10,
                                color: "currentColor",
                                className: nO.C5,
                                "aria-label": el.intl.string(es.default.leUgZw),
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
        titleSecondary: j,
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
    nM = n(857913),
    nD = n(298079);
let nw = (0, eW.xI)(D.A.space.PX_128) - 1;
function nk(e) {
    let { onViewEmojiPacks: t, onDismiss: n } = e,
        i = r.useId();
    return (0, l.jsxs)(R.B, {
        as: "section",
        "aria-labelledby": i,
        className: nM.vK,
        direction: "horizontal",
        align: "center",
        gap: 8,
        padding: { left: 16, right: 12 },
        fullWidth: !1,
        children: [
            (0, l.jsxs)(R.B, {
                className: nM.C,
                direction: "vertical",
                align: "start",
                gap: 12,
                padding: { top: 16, bottom: 16 },
                fullWidth: !1,
                children: [
                    (0, l.jsxs)(R.B, {
                        direction: "vertical",
                        gap: 4,
                        fullWidth: !1,
                        children: [
                            (0, l.jsxs)(R.B, {
                                className: nM.$,
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                fullWidth: !1,
                                children: [
                                    (0, l.jsx)(M.NitroWheelIcon, { color: D.A.colors.ICON_DEFAULT, size: "xs" }),
                                    (0, l.jsx)(w.D, {
                                        id: i,
                                        variant: "body-sm/semibold",
                                        color: "text-default",
                                        children: el.intl.string(es.default["0+5+Oy"]),
                                    }),
                                    (0, l.jsx)(k.E, { type: "beta", variant: "primary" }),
                                ],
                            }),
                            (0, l.jsx)(z.E, {
                                variant: "body-sm/medium",
                                color: "text-default",
                                lineClamp: 2,
                                children: el.intl.string(es.default["6mcVBm"]),
                            }),
                        ],
                    }),
                    (0, l.jsx)(t7.$, {
                        size: "sm",
                        variant: "secondary",
                        text: el.intl.string(es.default.Nj8Y3C),
                        onClick: function () {
                            (n(ta.i.TAKE_ACTION), t());
                        },
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: nM.Sl,
                children: (0, l.jsx)("img", { alt: "", className: nM.Qw, src: nD.A }),
            }),
            (0, l.jsx)("div", {
                className: nM.VN,
                children: (0, l.jsx)(v.m, {
                    text: el.intl.string(el.t.WAI6xu),
                    children: (0, l.jsx)(L.K, {
                        "aria-label": el.intl.string(el.t.WAI6xu),
                        icon: eb.XSmallIcon,
                        size: "sm",
                        variant: "icon-only",
                        onClick: () => n(ta.i.USER_DISMISS),
                    }),
                }),
            }),
        ],
    });
}
var nU = n(240864),
    nG = n(286509),
    nF = n(89366),
    nJ = n(739053),
    nV = n(82498),
    nK = n(202639),
    nB = n(414872),
    nH = n(521440),
    nW = n(304072),
    nX = n(189551),
    nz = n(594061),
    nY = n(771104),
    nZ = n(147421),
    n$ = n(723702),
    nq = n(140735),
    nQ = n(194261),
    n0 = n(703413);
let n1 = (e) => {
    let { src: t, alt: n, size: i, "aria-label": s, className: a } = e,
        c = r.useRef(null),
        u = r.useRef(!1),
        d = u.current ? n0.S : n0.Y;
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
                          ((u.current = !0), c.current.classList.remove(n0.Y), c.current.classList.add(n0.S));
                  });
              },
    });
};
var n2 = n(955388);
let n3 = tt().memoize(
        (e) =>
            `${e * eQ.he.NonDiversityPerRow}px ${e * Math.ceil(tb.Ay.numNonDiversitySprites / eQ.he.NonDiversityPerRow)}px`,
    ),
    n4 = tt().memoize(
        (e) => `${e * eQ.he.DiversityPerRow}px ${e * Math.ceil(tb.Ay.numDiversitySprites / eQ.he.DiversityPerRow)}px`,
    ),
    n5 = r.memo(function (e) {
        let { emoji: t, size: i, surrogateCodePoint: s, allowAnimatedEmoji: a, "aria-label": c, isLocked: u } = e,
            d = (() => {
                if (!t.useSpriteSheet) {
                    let e = null == t.id ? t.url : nj.Ay.getEmojiURL({ id: t.id, animated: a && t.animated, size: 48 });
                    return null != e
                        ? (0, l.jsx)(n1, {
                              className: n2.N1,
                              "aria-label": c,
                              src: e,
                              size: i,
                              alt: (0, eZ.N)(t) ?? "",
                          })
                        : null;
                }
                return (0, l.jsx)("div", {
                    className: o()(n2.xA, { [n2.N1]: u }),
                    style: (function (e, t, i) {
                        let s, l, r;
                        if (!e.useSpriteSheet) return;
                        let a = null != e.index ? e.index : 0;
                        e.hasDiversity
                            ? ((s = n(12303)(`./spritesheet-${t}-${i}.png.js`).default),
                              (l = n4(i)),
                              (r = eQ.he.DiversityPerRow))
                            : ((s = n(145519)(`./spritesheet-emoji-${i}.png.js`).default),
                              (l = n3(i)),
                              (r = eQ.he.NonDiversityPerRow));
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
                    children: (0, l.jsx)(nq.A, { children: c }),
                });
            })();
        return (0, l.jsxs)(r.Fragment, {
            children: [
                d,
                u
                    ? (0, l.jsx)("div", {
                          className: n2.iD,
                          style: { width: i, height: i },
                          children: (0, l.jsx)(nQ.LockIcon, { size: "xs", color: "currentColor", className: n2.fi }),
                      })
                    : null,
            ],
        });
    });
var n8 = n(537911);
function n6(e) {
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
        N = (0, m.bG)([eM.A], () => (n.type === T.i.GUILD ? eM.A.getGuild(n.guildId) : void 0), [n]);
    return (0, l.jsx)(Q.vN, {
        children: (0, l.jsx)("button", {
            ..._,
            className: o()(n8._X, { [n8.lG]: s, [n8.Lh]: r, [n8.Bx]: a, [g ?? ""]: a, [n8.TV]: u }),
            "data-type": ei.g.EMOJI,
            "data-id": n.id,
            "data-name": n.name,
            "data-surrogates": "surrogates" in n ? n.surrogates : null,
            "data-animated": n.animated ? "true" : null,
            ref: A,
            children: (0, l.jsx)(n5, {
                "aria-label":
                    ((t = (0, eZ.N)(n)),
                    (N?.name != null &&
                        (t = el.intl.formatToPlainString(el.t["nXv4/B"], { names: t, guildName: N.name })),
                    i)
                        ? el.intl.formatToPlainString(el.t["9FI9Z0"], { names: t })
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
function n9(e) {
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
            rowPosition: j,
            inNitroLockedSection: S,
        } = e,
        [b, R] = r.useState(""),
        L = (0, m.bG)([ts.Ay], () => ts.Ay.useReducedMotion),
        P = (0, m.bG)([O.Ay], () => O.Ay.getDisambiguatedEmojiContext(o), [o]),
        M = r.useRef(null),
        { emoji: D, size: w, isDisabled: k, columnIndex: U } = t;
    function G() {
        d.current || f.current || c(t);
    }
    let { ref: F, tabIndex: J, onFocus: V, ...K } = g(U, a) ?? {},
        B =
            b !== `${U}:${a}`
                ? (0, l.jsx)(n6, {
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
                              null != j &&
                              null != y &&
                              !e.shiftKey &&
                              null != D.name &&
                              x &&
                              !L &&
                              N
                          ) {
                              let e = null == D.id ? tb.Ay.convertNameToSurrogate(D.name) : D.name,
                                  t = M.current.getBoundingClientRect();
                              ((t.x = j.x + (U + 1) * w), R(`${U}:${a}`), (0, nZ.h)(y, e, D.id, t));
                          }
                          !(function (e) {
                              if ((e.stopPropagation(), d.current || f.current)) return;
                              let n = e.altKey;
                              (n &&
                                  !O.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(D) &&
                                  C(i),
                                  (0, eJ.sF)(eJ._2.FAVORITE_EMOJI_TOOLTIP),
                                  u(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n }));
                          })(e);
                      },
                      onContextMenu: function (e) {
                          (0, ee.L3)(e, async () => {
                              let { default: e } = await Promise.all([
                                  n.e(476662),
                                  n.e(912875),
                                  n.e(73500),
                                  n.e(496715),
                                  n.e(904774),
                                  n.e(446132),
                              ]).then(n.bind(n, 233503));
                              return (t) => (0, l.jsx)(e, { ...t, showFavoriteOnly: D.type === T.i.PACK });
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
            ? (0, l.jsx)(v.m, {
                  text: el.intl.formatToPlainString(el.t.glqNsf, { key: (0, n$.cX)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: B,
              })
            : B,
    );
}
let n7 = (e) => {
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
        O = n(600003),
        S = n(318121),
        b = n(443336),
        R = n(258901),
        v = n(135974),
        L = n(8013),
        P = (0, ev.Ay)(),
        M = ex.Om.getState(),
        [D, w] = r.useState(M.inspectedExpressionPosition),
        [k, U] = (0, nW.A)(null, 300),
        G = r.useRef(null);
    (r.useEffect(
        () =>
            ex.Om.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => w(e),
            ),
        [],
    ),
        r.useEffect(() => {
            nz.bW.loadIfNecessary();
        }, []));
    let F = i === tj.as.LARGE,
        J = i === tj.as.MEDIUM;
    function V(e) {
        let t = `${e.rowIndex}c${e.columnIndex}`;
        switch (e.type) {
            case tL.EXPAND_OR_COLLAPSE_EMOJIS: {
                let { visibleRowIndex: n, columnIndex: i } = e,
                    c = D.rowIndex === n && D.columnIndex === i,
                    d = e.sectionCollapsedToThreeRows
                        ? c
                            ? (0, eT.M)(P)
                                ? R
                                : L
                            : (0, eT.M)(P)
                              ? x
                              : j
                        : c
                          ? (0, eT.M)(P)
                              ? b
                              : v
                          : (0, eT.M)(P)
                            ? O
                            : S,
                    I = el.intl.string(e.sectionCollapsedToThreeRows ? el.t.NZI2Zk : el.t["/K2RDH"]);
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
                        (0, l.jsx)(Q.vN, {
                            children: (0, l.jsx)("button", {
                                "aria-label": d,
                                ref: p,
                                className: o()(n8._X, {
                                    [n8.lG]: F,
                                    [n8.Lh]: J,
                                    [n8.Bx]: y && !I,
                                    [A ?? ""]: y,
                                    [n8.TV]: k === t,
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
                        e.type !== tL.EXPAND_OR_COLLAPSE_EMOJIS ||
                            (t.stopPropagation(),
                            m.current ||
                                f.current ||
                                (s(e, { isFinalSelection: !0, toggleFavorite: !1 }),
                                (0, nX.G)(e.guildId),
                                e.sectionCollapsedToThreeRows || y(),
                                eH.default.track(ek.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                    collapsed: e.sectionCollapsedToThreeRows,
                                    guild_id: e.guildId,
                                })));
                    },
                    icon: (0, l.jsx)("img", { className: n8.Kk, src: d, alt: "" }),
                    ariaLabel: I,
                    shouldShowRoundHighlight: !0,
                });
            }
            case tL.EMOJI: {
                let { columnIndex: n, visibleRowIndex: i } = e,
                    r = D.rowIndex === i && D.columnIndex === n;
                return (0, l.jsx)(
                    n9,
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
            className: o()(n8.ND, { [n8.HO]: F, [n8.X$]: J }),
            ref: G,
            children: e.map(V),
        });
    }
    if (p !== tj.s.TOP_GUILD_EMOJI) return K(t);
    let B = t.filter(
            (e) =>
                e.subCategory === tj.tm.TOP_GUILD_EMOJI ||
                (e.subCategory === tj.tm.NEWLY_ADDED_EMOJI &&
                    e.emoji.type === T.i.GUILD &&
                    !eC.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
        ),
        H = t.filter(
            (e) =>
                e.subCategory === tj.tm.NEWLY_ADDED_EMOJI &&
                e.emoji.type === T.i.GUILD &&
                eC.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id),
        );
    return 0 === H.length
        ? K(t)
        : (0, l.jsxs)("div", {
              className: n8.Ng,
              children: [
                  (0, l.jsx)("div", { className: o()(n8.V6, { [n8.$3]: 0 === B.length }), children: K(B) }),
                  (0, l.jsxs)("div", {
                      className: n8.bc,
                      children: [
                          (0, l.jsx)("div", {
                              className: o()(n8.eE, { [n8.eM]: 1 === H.length, [n8.Wk]: B.length > 0 }),
                              children: K(H),
                          }),
                          (0, l.jsxs)("div", {
                              className: o()(n8.lD, { [n8.EI]: F, [n8.qU]: J, [n8.Wk]: B.length > 0 }),
                              children: [
                                  (0, l.jsx)(nY.A, { foreground: n8.rI }),
                                  (0, l.jsx)(z.E, {
                                      variant: "body-xs/semibold",
                                      color: "text-overlay-light",
                                      children: el.intl.string(el.t.y2b7CA),
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
};
var ie = n(618723);
let it = (0, eW.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    ii = (0, eW.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    is = (0, eW.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    il = (0, eW.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    ir = (0, eW.xI)(E.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    ia = (0, eW.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    io = (0, eW.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    ic = nw + (0, eW.xI)(D.A.space.PX_10),
    iu = ic + il,
    id = r.memo(function (e) {
        let t,
            n,
            {
                diversitySurrogate: i,
                emojiGrid: s,
                emojiListRef: a,
                emojiSize: c,
                onEmojiSelect: u,
                onRemovePack: d,
                onViewEmojiPacks: f,
                showEmojiPacksDiscovery: E,
                onDismissEmojiPacksDiscovery: I,
                setUpsellConfigs: h,
                sectionDescriptors: g,
                rowCountBySection: A,
                collapsedSections: _,
                setCollapsedSections: C,
                getEmojiItemProps: x,
                getEmojiRowProps: j,
                rowCount: O,
                isUsingKeyboardNavigation: T,
                channelGuildId: b,
                messageId: v,
                isBurstReaction: L,
                listHeaderClassName: P,
            } = e,
            D = +!!(0, S.H)("emoji_picker_list"),
            w = (0, F.RQ)((e) => e.searchQuery),
            k = "" !== w,
            U = E && null != f,
            G = 0;
        U && (G = k ? iu : ic);
        let J = r.useCallback(
                (e) => {
                    (a.current?.scrollTo(0), I(e));
                },
                [a, I],
            ),
            V = r.useCallback(
                () =>
                    U && null != f
                        ? (0, l.jsx)(
                              "div",
                              {
                                  className: o()(ie.cn, { [ie.tY]: k }),
                                  onKeyDown: (e) => {
                                      e.key !== no.dh.ESCAPE && e.stopPropagation();
                                  },
                                  children: (0, l.jsx)(nk, { onViewEmojiPacks: f, onDismiss: J }),
                              },
                              "discovery-banner",
                          )
                        : null,
                [U, k, f, J],
            ),
            H = r.useRef(!1),
            W = ex.Om.useStore((e) => e.activeCategoryIndex),
            X = eK.Sf.useSetting(),
            Y = (0, m.bG)([K.default], () => K.default.getCurrentUser()),
            Z = (0, B.ki)(Y),
            { location: $ } = (0, p.p)(),
            { analyticsLocations: q } = (0, y.Ay)(),
            [Q, ee] = r.useState(0),
            [et, en] = r.useState(!1),
            {
                listPadding: er,
                renderRow: ea,
                renderSection: ec,
                renderSectionHeader: eu,
                renderSectionFooter: ed,
                sectionMarginBottom: em,
                sectionHeaderHeight: ef,
                sectionFooterHeight: eE,
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
                        hasListHeader: O,
                    } = e,
                    T = (0, p.p)(),
                    S = r.useRef(0),
                    b = r.useMemo(() => ("" !== n ? nl.A.convert.toCodePoint(n) : ""), [n]),
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
                                    eH.default.track(ek.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                        location: T.location,
                                        tab: e0.kx.EMOJI,
                                        collapsed: !s,
                                        guild_id: n.id,
                                    }),
                                f(i));
                        },
                        [T, t, f],
                    ),
                    P = r.useCallback((e) => {
                        let { columnIndex: t, visibleRowIndex: n } = e,
                            i = e.type === tL.EMOJI ? (0, eZ.N)(e.emoji) : e.name;
                        (0 !== S.current && window.cancelAnimationFrame(S.current),
                            (S.current = window.requestAnimationFrame(() => {
                                (ex.Om.setInspectedExpressionPosition(t, n, ei.t.MOUSE_EVENT),
                                    ex.Om.setSearchPlaceholder(i),
                                    (S.current = 0));
                            })));
                    }, []),
                    D = (0, m.bG)([eJ.HP], () => eJ.HP.hasHotspot(eJ._2.FAVORITE_EMOJI_TOOLTIP), []),
                    w = r.useMemo(
                        () =>
                            tt().memoize((e, t) => {
                                let n = i[e],
                                    r = d[t.sectionIndex];
                                return (0, l.jsx)(
                                    n7,
                                    {
                                        emojiDescriptors: n,
                                        emojiSize: s,
                                        surrogateCodePoint: b,
                                        onInspect: P,
                                        onSelect: a,
                                        getEmojiItemProps: E,
                                        getEmojiRowProps: I,
                                        isScrolling: h,
                                        isUsingKeyboardNavigation: g,
                                        rowIndex: e,
                                        allowAnimatedEmoji: A,
                                        showEmojiFavoriteTooltip: D,
                                        channelGuildId: _,
                                        category: r.sectionId,
                                        selectedItemClassName: ie.__invalid_selectedItem,
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
                        [i, d, s, b, P, a, E, I, h, g, A, D, _, N, C, j],
                    );
                r.useEffect(() => () => w.cache?.clear?.(), [w]);
                let k = r.useMemo(
                        () =>
                            tt().memoize((e) => {
                                let n = d[e];
                                if (null == n) return;
                                let { guild: i, pack: s, categoryId: r, type: a, sectionId: u } = n;
                                if (a === tj.s.SEARCH_RESULTS) return;
                                let m = (function (e) {
                                        let { type: t, guild: n, categoryId: i } = e;
                                        return t === tj.s.PACK
                                            ? (0, l.jsx)(M.NitroWheelIcon, {
                                                  size: "custom",
                                                  color: "currentColor",
                                                  height: 16,
                                                  width: 16,
                                              })
                                            : t === tj.s.GUILD
                                              ? null == n
                                                  ? null
                                                  : (0, l.jsx)(tT.A, { guild: n, height: 16, width: 16 })
                                              : null == i
                                                ? null
                                                : (0, l.jsx)(tO, {
                                                      categoryId: i,
                                                      height: 16,
                                                      width: 16,
                                                      size: "custom",
                                                  });
                                    })(n),
                                    f = s?.name ?? i?.name;
                                null != r && (f = (0, eX.Nu)(r, i?.name));
                                let E = x === e,
                                    I = n.isNitroLocked,
                                    h = I && !E,
                                    g = I && E,
                                    p =
                                        a === tj.s.PACK
                                            ? (0, l.jsx)("div", {
                                                  className: ie.uE,
                                                  children: (0, l.jsx)(nR.Q, {
                                                      text: el.intl.string(es.default["2zxYCx"]),
                                                      textVariant: "body-sm/medium",
                                                      variant: "secondary",
                                                      "aria-label": `${el.intl.string(es.default["2zxYCx"])} ${s.name}`,
                                                      onKeyDown: (e) => {
                                                          e.key !== no.dh.ESCAPE && e.stopPropagation();
                                                      },
                                                      onClick: () => c(s.id),
                                                  }),
                                              })
                                            : void 0;
                                return (0, l.jsx)(
                                    nG.A,
                                    {
                                        className: o()(ie.wx, y, { [ie.RA]: h, [ie.sp]: g }),
                                        icon: m,
                                        isCollapsed: t.has(u),
                                        onClick: () => L(u, i),
                                        trailing: p,
                                        children: f,
                                    },
                                    u,
                                );
                            }),
                        [d, t, L, y, x, c],
                    ),
                    U = (0, tR.k0)(),
                    G = r.useCallback(
                        (e, n) => {
                            let i = d[e],
                                s = v(e),
                                r = R(e),
                                a = i.type === tj.s.PACK && 0 === i.count;
                            return (0, l.jsx)(
                                "div",
                                {
                                    role: "rowgroup",
                                    className: o()(ie.Wy, {
                                        [ie.YD]: e === d.length - 1,
                                        [ie.jl]: t.has(i.sectionId) || a,
                                        [ie.cW]: i.isNitroLocked,
                                        [ie.T5]: s || r,
                                    }),
                                    children: n,
                                },
                                e,
                            );
                        },
                        [t, d, v, R],
                    ),
                    F = r.useCallback(
                        (e) =>
                            v(e)
                                ? U
                                    ? (0, l.jsx)(nB.a, {})
                                    : (0, l.jsx)(nB.A, {})
                                : R(e)
                                  ? (0, l.jsx)("div", { className: ie.pQ })
                                  : null,
                        [v, R, U],
                    ),
                    J = r.useCallback((e) => (v(e) ? 41 : 33 * !!R(e)), [v, R]),
                    V = r.useCallback(
                        (e) =>
                            e === d.length - 1 ||
                            t.has(d[e]?.sectionId) ||
                            (d[e]?.type === tj.s.PACK && d[e]?.count === 0) ||
                            v(e) ||
                            R(e)
                                ? 0
                                : ia,
                        [t, d, v, R],
                    );
                return {
                    listPadding: r.useMemo(() => ["" === u || O ? it : il, ii, is, 0], [u, O]),
                    renderRow: w,
                    renderSection: G,
                    renderSectionHeader: k,
                    renderSectionFooter: F,
                    sectionMarginBottom: V,
                    sectionHeaderHeight: r.useCallback((e) => (d[e].type === tj.s.SEARCH_RESULTS ? 0 : ir), [d]),
                    sectionFooterHeight: J,
                };
            })({
                collapsedSections: _,
                diversitySurrogate: i,
                emojiGrid: s,
                emojiSize: c,
                onEmojiSelect: u,
                onRemovePack: d,
                searchQuery: w,
                sectionDescriptors: g,
                setCollapsedSections: C,
                getEmojiItemProps: x,
                getEmojiRowProps: j,
                isScrolling: H,
                isUsingKeyboardNavigation: T,
                allowAnimatedEmoji: X,
                channelGuildId: b,
                messageId: v,
                isBurstReaction: L,
                listHeaderClassName: P,
                activeSectionIndex: Q,
                emojiListRef: a,
                hasListHeader: U,
            }),
            eI = r.useCallback(
                (e) => {
                    let t = a.current?.getSectionDescriptors();
                    null == t ||
                        ee(
                            Math.max(
                                t.findLastIndex((t) => t.offset.top <= e + D),
                                0,
                            ),
                        );
                },
                [a, D],
            );
        r.useLayoutEffect(() => {
            eI(a.current?.getScrollerNode()?.scrollTop ?? 0);
        }, [a, eI, g, A, w, G]);
        let eh = (0, ej.Fk)({
            activeCategoryIndex: W,
            isScrolling: H,
            listRef: a,
            onActiveCategoryIndexChange: function (e) {
                "" === w && ex.Om.setActiveCategoryIndex(e);
            },
            scrollOffset: D,
            searchQuery: w,
            disableForSearch: !1,
        });
        (0, ej.FV)({ searchQuery: w, activeCategoryIndex: W, listRef: a });
        let eg = r.useCallback(
                (e) => {
                    (eh(e),
                        eI(e),
                        im({
                            emojiListRef: a,
                            sectionDescriptors: g,
                            scrollTop: e,
                            searchQuery: w,
                            setShowUpsell: en,
                        }));
                },
                [eh, eI, a, g, w, en],
            ),
            ep = g.length > 0;
        (r.useEffect(() => {
            et &&
                (eH.default.track(ek.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: eo.e.EMOJI_PICKER_FLOATING_UPSELL,
                    location: $,
                    location_stack: q,
                }),
                (0, nJ.sq)(ek.U7l.PREMIUM_UPSELL_VIEWED, q, () => (0, nV.uq)(eo.e.EMOJI_PICKER_FLOATING_UPSELL)));
        }, [$, q, et]),
            r.useEffect(() => {
                "" !== w && en(!1);
            }, [w]));
        let eA = r.useRef(null);
        r.useEffect(
            () => (
                clearTimeout(eA.current),
                (eA.current = setTimeout(() => {
                    (ep
                        ? nv.O.announce(el.intl.string(el.t.uZ4F2O), "polite")
                        : nv.O.announce(el.intl.string(el.t.IxxiKF), "assertive"),
                        (eA.current = null));
                }, 200)),
                () => {
                    clearTimeout(eA.current);
                }
            ),
            [ep, w],
        );
        let e_ = (0, l.jsx)(z.E, {
            variant: "body-md/normal",
            color: "text-muted",
            children: el.intl.string(el.t.IxxiKF),
        });
        return (0, l.jsxs)("div", {
            className: ie.AD,
            children: [
                ep
                    ? (0, l.jsx)(nP.A, {
                          role: "none presentation",
                          className: ie.p_,
                          listPadding: er,
                          renderListHeader: U ? V : void 0,
                          listHeaderHeight: U ? G : void 0,
                          onScroll: eg,
                          renderRow: ea,
                          renderSection: ec,
                          renderSectionHeader: eu,
                          renderSectionFooter: ed,
                          rowCount: O,
                          rowCountBySection: A,
                          rowHeight: c + 2 * io,
                          sectionHeaderHeight: ef,
                          sectionMarginBottom: em,
                          sectionFooterHeight: eE,
                          stickyHeaders: !0,
                          ref: a,
                      })
                    : U
                      ? (0, l.jsxs)(R.B, {
                            className: ie.wL,
                            direction: "vertical",
                            gap: 0,
                            children: [V(), (0, l.jsx)(nL.A, { message: e_, className: ie.XE })],
                        })
                      : (0, l.jsx)(nL.A, { message: e_, className: ie.BZ }),
                Z || nb.Fr
                    ? null
                    : (0, l.jsx)(nK.d, {
                          showUpsell: et,
                          text:
                              ((t = (0, e8.Dd)(eo.PremiumTypes.TIER_2)),
                              el.intl.format(el.t.gMVjeS, {
                                  nitroTierName: t,
                                  onClick: () => {
                                      h({ type: tM.PREMIUM, emojiDescriptor: void 0 });
                                  },
                              })),
                          button: ((n = (0, nF.qD)()), (0, e8.LE)(n, eo.pe.TIER_2) ?? el.intl.string(el.t.BmJkbd)),
                          buttonAnalyticsObject: { section: ek.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                          leadingAction: (0, l.jsx)(nH.l, {
                              size: "sm",
                              className: ie.ij,
                              location: N.A.PREMIUM_WISHLIST_EMOJI_UPSELL,
                          }),
                      }),
            ],
        });
    }),
    im = tt().throttle(
        function (e) {
            let { emojiListRef: t, sectionDescriptors: n, scrollTop: i, searchQuery: s, setShowUpsell: l } = e;
            l(
                (0, nU.s)({ listRef: t, searchQuery: s, nitroLockedSectionStates: n, scrollTop: i })
                    .areOnlyNitroLockedSectionsVisible,
            );
        },
        300,
        { leading: !1, trailing: !0 },
    );
var iE = n(506774),
    iI = n(28863),
    ih = n(669815),
    ig = n(404374),
    ip = n(780964),
    iA = n(766075),
    i_ = n(166403),
    iN = n(506150);
let iC = "premiumRetentionEmojiPickerNotice",
    iy = iE.w.get(iC),
    ix = function (e) {
        let { closePopout: t, channel: n } = e,
            [i, s] = r.useState(!1),
            { subscription: a, hasFetchedSubscriptions: o } = (0, m.cf)([i_.A], () => ({
                subscription: i_.A.getPremiumSubscription(),
                hasFetchedSubscriptions: i_.A.hasFetchedSubscriptions(),
            }));
        if (
            (r.useEffect(() => {
                o || (0, ih.hP)();
            }, [o]),
            null == a || !(0, e8.PK)(a.status) || i)
        )
            return null;
        let c = a.status === ek.Dmq.PAST_DUE ? (0, e8.ji)(a).expiresDate : eE()(a.currentPeriodStart).add(30),
            u = `${a.id}:${c.toISOString()}`;
        if (iy === u) return null;
        let d =
            e8.Ay.getPremiumType(a.planId) === eo.PremiumTypes.TIER_0
                ? ig.k0.PREMIUM_TIER_0
                : e8.Ay.getPremiumType(a.planId) === eo.PremiumTypes.TIER_1
                  ? ig.k0.PREMIUM_TIER_1
                  : ig.k0.PREMIUM_TIER_2;
        return (0, l.jsxs)(z.E, {
            variant: "body-xs/medium",
            color: "text-default",
            className: iN.g$,
            children: [
                (0, l.jsx)(M.NitroWheelIcon, { size: "md", className: iN.lu, color: d }),
                (0, l.jsxs)("div", {
                    className: iN.Xn,
                    children: [
                        (0, l.jsx)(z.E, {
                            variant: "body-xs/normal",
                            children: el.intl.format(el.t.bTMjiO, {
                                planName: e8.Ay.getTierDisplayNameByPlanId(a.planId),
                                endsAt: c.toDate(),
                            }),
                        }),
                        (0, l.jsx)("div", {
                            children: (0, l.jsx)(iI.Anchor, {
                                onClick: () => {
                                    ((0, eX.xf)(n), t(), (0, iA.openUserSettings)(ip.X.NITRO_PANEL));
                                },
                                children: el.intl.string(el.t.W3aavh),
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(eS.D, {
                    onClick: () => {
                        (iE.w.set(iC, u), (iy = u), s(!0));
                    },
                    children: (0, l.jsx)(eb.XSmallIcon, { size: "md", color: "currentColor", className: iN.YF }),
                }),
            ],
        });
    };
var ij = n(148361);
let iO = (0, eW.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    iT = (0, eW.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT);
function iS(e) {
    return e.stopPropagation();
}
function ib(e, t) {
    ex.Om.setInspectedExpressionPosition(e, t, ei.t.GRID_NAVIGATOR_EVENT);
}
let iR = u()(eX.bo, 200),
    iv = u()(eX.Wi, 200),
    iL = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    iP = [f.M.DEFAULT_EMOJIS_PACKS_DISCOVERY_DOT],
    iM = [],
    iD = r.memo(function (e) {
        let t,
            n,
            i,
            s,
            a,
            {
                pickerIntention: c,
                channel: u,
                guildId: E,
                closePopout: R,
                emojiSize: v = tj.as.MEDIUM,
                hasTabWrapper: L = !1,
                onSelectEmoji: P,
                containerWidth: M,
                onNavigateAway: D,
                persistSearch: w,
                className: k,
                headerClassName: U,
                analyticsOverride: G = iL,
                searchProps: J = {},
                wrapper: V,
                shouldHidePickerActions: H = !1,
                messageId: X,
                renderHeader: z,
                listHeaderClassName: Y,
                categoryListClassName: Z,
                showOnlyUnicode: $ = !1,
                showAddEmojiButton: q,
                ref: Q,
                isViewingEmojiPacks: ee,
                onViewEmojiPacksChange: et,
            } = e,
            { onFocus: en, onKeyDown: es, autoFocus: er = !0, accessory: ea } = J,
            ec = (0, m.bG)([eB.A], () => (null != E ? eB.A.getDefaultChannel(E) : null), [E]),
            [ef, eE] = r.useState(null),
            eI = r.useRef(""),
            eh = (0, F.RQ)((e) => e.searchQuery),
            eg = r.useRef(null),
            ep = r.useRef(null),
            eA = r.useRef(null),
            e_ = (0, S.H)("emoji_picker") && !$ && (0, e7.z)(c);
        r.useEffect(() => {
            e_ && (0, b.Fp)();
        }, [e_]);
        let [eN, eO] = r.useState(!1),
            eT = e_ && (ee ?? eN),
            eS = et ?? eO,
            eb = r.useCallback(() => eS(!0), [eS]),
            [eR, ev] = (0, x.kn)(!e_ || H || eT ? iM : iP),
            eL = eR === f.M.DEFAULT_EMOJIS_PACKS_DISCOVERY_DOT,
            eP = r.useCallback(
                (e) => {
                    (e === ta.i.USER_DISMISS && eA.current?.focus(), ev(e));
                },
                [ev],
            ),
            eD = r.useCallback((e) => {
                (eA.current?.focus(), (0, b.M5)(e));
            }, []),
            ew =
                ((t = (0, m.bG)([W.A], () => (e_ ? W.A.getPacks() : em), [e_])),
                (n = (0, m.bG)(
                    [ed.A],
                    () => (e_ ? ed.A.frecencyWithoutFetchingLatest.pinnedEmojiPacks?.packIds : void 0),
                    [e_],
                )),
                r.useMemo(
                    () =>
                        e_ && null != n && 0 !== n.length
                            ? n.map((e) => t.find((t) => t.id === e)).filter((e) => null != e)
                            : em,
                    [e_, t, n],
                ));
        null == u && null != ec && (u = ec);
        let eU = u?.getGuildId() ?? E ?? null,
            [eG, eW] = r.useState(!1),
            ez = r.useRef(null),
            eY = K.default.getCurrentUser(),
            e0 = (0, B.ki)(eY),
            e2 = eG && e0;
        r.useImperativeHandle(Q, () => ({ onPickerOpen: tg }));
        let { location: e3 } = (0, p.p)(),
            { page: e4, section: e5, object: e8, openPopoutType: e6, popoutLocation: te } = G,
            tn = r.useMemo(() => ({ ...e3, section: e5 ?? ek.JJy.EMOJI_PICKER_POPOUT }), [e3, e5]),
            { analyticsLocations: ti } = (0, y.Ay)(N.A.EMOJI_PICKER),
            { diversitySurrogate: ts } = (0, m.cf)([O.Ay], () => ({ diversitySurrogate: O.Ay.diversitySurrogate })),
            tl = (0, eX.sL)(eh, u, c, $),
            tr = null == tl ? 0 : tl.locked.length + tl.unlocked.length,
            to = eK.iM.useSetting(),
            tc = r.useMemo(() => new Set(to), [to]),
            tu = r.useCallback((e) => {
                eK.iM.updateSetting(Array.from(e));
            }, []),
            td = (0, ej.oV)({
                gridWrapperRef: eg,
                containerWidth: M,
                showingEmptyState: eT,
                listPaddingLeft: iT,
                listScrollbarWidth: 8,
            }),
            {
                rowCountBySection: tm,
                sectionDescriptors: tf,
                emojiGrid: tE,
                columnCounts: tI,
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
                    f = (0, m.bG)([O.Ay], () => O.Ay.categories),
                    E = r.useMemo(() => (d ? tb.Ay.getCategories() : f), [f, d]),
                    I = (0, m.bG)([eM.A], () => eM.A.getGuild(t?.getGuildId()), [t]),
                    h = t?.getGuildId() ?? n,
                    g = (0, m.bG)([O.Ay], () => O.Ay.getDisambiguatedEmojiContext(h), [h]),
                    p = (0, eX.XI)(h),
                    A = (0, eX.Fj)(h),
                    _ = (0, eX.QZ)(h),
                    { topEmojis: N, newlyAddedEmojis: C } = (0, eq.A)(h, s),
                    y = (0, m.yK)([tv.Ay], () => tv.Ay.getFlattenedGuildIds(), []),
                    x = (0, m.bG)([O.Ay], () => O.Ay.expandedSectionsByGuildIds),
                    j = (0, m.bG)([K.default], () => K.default.getCurrentUser()),
                    T = (0, B.ki)(j),
                    S = (0, B.ki)(j, eo.PremiumTypes.TIER_2),
                    b = (0, tR.k0)(),
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
                                [E, I] = tt().partition(l, (e) => {
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
                                                a.sectionId === tj.s.TOP_GUILD_EMOJI
                                                    ? (0, eX.DA)(N, C, e.id ?? e.uniqueName ?? e.name)
                                                    : tj.tm.NONE,
                                        }));
                                if ((y.push(i), !u)) {
                                    if (p && e === _ - 1) {
                                        let t = y[e];
                                        t.push({
                                            type: 1,
                                            guildId: g.id,
                                            name: el.intl.string(el.t.NZI2Zk),
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
                                    type: tj.s.SEARCH_RESULTS,
                                    sectionId: tj.s.SEARCH_RESULTS,
                                    count: l.unlocked.length,
                                    isNitroLocked: !1,
                                }),
                                0 !== l.locked.length &&
                                    h(l.locked, {
                                        type: tj.s.PREMIUM_UPSELL,
                                        categoryId: tj.R2.PREMIUM_UPSELL,
                                        sectionId: tj.s.PREMIUM_UPSELL,
                                        count: l.locked.length,
                                        isNitroLocked: !T,
                                    }));
                        else {
                            let e = E.includes(tj.R2.CUSTOM) ? tj.R2.CUSTOM : tb.Ay.getCategories()[0];
                            for (let n of E) {
                                if (n === e)
                                    for (let e of u) {
                                        let t = tt().compact(
                                            e.emojis.map((e) => {
                                                let { id: t } = e;
                                                return g.getById(t);
                                            }),
                                        );
                                        h(t, {
                                            type: tj.s.PACK,
                                            pack: e,
                                            sectionId: `pack:${e.id}`,
                                            count: t.length,
                                            isNitroLocked: !S,
                                        });
                                    }
                                if (n === tj.R2.CUSTOM) {
                                    function j(e) {
                                        let i = R.get(e);
                                        if (null == i) return;
                                        let l = i.filter(
                                            (n) =>
                                                !tP.includes(
                                                    eZ.Ay.getEmojiUnavailableReason({
                                                        emoji: n,
                                                        channel: t ?? eB.A.getDefaultChannel(e),
                                                        intention: s,
                                                    }),
                                                ),
                                        );
                                        if (0 === l.length) return;
                                        let r = eM.A.getGuild(e),
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
                                            type: tj.s.GUILD,
                                            sectionId: null != r ? r.id : (0, tS.A)(),
                                            count: l.length,
                                            isNitroLocked: a,
                                        });
                                    }
                                    if ((null != I && j(I.id), (0, eQ.Re)(s)))
                                        for (let e of y) (null == I || I.id !== e) && j(e);
                                } else if (n === tj.R2.TOP_GUILD_EMOJI) {
                                    if (null != I) {
                                        let { allEmojis: e } = (0, e$.W)({ topEmojis: N, newlyAddedEmojis: C });
                                        e.length > 0 &&
                                            h(e, {
                                                categoryId: n,
                                                guild: eM.A.getGuild(I.id),
                                                type: tj.s.TOP_GUILD_EMOJI,
                                                sectionId: tj.s.TOP_GUILD_EMOJI,
                                                count: e.length,
                                                isNitroLocked: !1,
                                            });
                                    }
                                } else if (n === tj.R2.RECENT) {
                                    let e = (s === eQ.EmojiIntention.REACTION ? _ : A).filter(
                                        (e) => !eZ.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }),
                                    );
                                    h(e, {
                                        categoryId: n,
                                        type: tj.s.RECENT,
                                        sectionId: tj.s.RECENT,
                                        count: e.length,
                                        isNitroLocked: !1,
                                    });
                                } else if (n === tj.R2.FAVORITES) {
                                    let e = p.filter(
                                        (e) => !eZ.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }),
                                    );
                                    0 !== e.length &&
                                        h(e, {
                                            categoryId: n,
                                            type: tj.s.FAVORITES,
                                            sectionId: tj.s.FAVORITES,
                                            count: e.length,
                                            isNitroLocked: !1,
                                        });
                                } else {
                                    let e = tb.Ay.getByCategory(n);
                                    null != e &&
                                        h(e, {
                                            categoryId: n,
                                            type: tj.s.UNICODE,
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
                gridWidth: td,
                fallbackGuildId: eU,
                channel: u,
                pickerIntention: c,
                emojiSearchResults: tl,
                collapsedSections: tc,
                emojiPaddingHorizontal: iO,
                emojiSpriteSize: v,
                pinnedPacks: ew,
                showOnlyUnicode: $,
            }),
            { newlyAddedEmojis: th } = (0, eq.A)(eU, c);
        ((i = r.useRef({ intention: c, isBurstReaction: eG, analyticsObject: e8 })),
            r.useEffect(() => {
                i.current.intention === eQ.EmojiIntention.REACTION && e1(i.current);
            }, []));
        let tg = r.useCallback(() => {
                let e = th.length > 0 ? th[0].id : null;
                ((0, ey.uV)(eU, e), e1({ intention: c, isBurstReaction: eG, analyticsObject: e8 }));
            }, [th, eU, c, eG, e8]),
            tp = r.useCallback(() => {
                (R(),
                    D?.(),
                    (0, eV.A)({
                        subscriptionTier: eo.pe.TIER_2,
                        analyticsLocations: [...ti, N.A.EMOJI_PACKS],
                        analyticsObject: { ...tn, object: ek.ZSU.EMOJI },
                    }));
            }, [tn, ti, R, D]),
            tA = (function (e) {
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
                            let u = eZ.Ay.getEmojiUnavailableReason({ emoji: r, channel: n, intention: t });
                            if (i.toggleFavorite)
                                return void (c.isFavoriteEmojiWithoutFetchingLatest(r) || null != u
                                    ? (0, h.Sw)(r)
                                    : (o?.(e), (0, h.V4)(r)));
                            if (u !== eQ.Am.GUILD_SUBSCRIPTION_UNAVAILABLE) {
                                if (u === eQ.Am.PREMIUM_LOCKED) {
                                    (a?.(e, u), l({ type: 0, emojiDescriptor: e }));
                                    return;
                                }
                                if (u === eQ.Am.ROLE_SUBSCRIPTION_LOCKED && r.type === T.i.GUILD) {
                                    (a?.(e, u), l({ type: 1, guildId: r.guildId, emojiId: r.id }));
                                    return;
                                }
                                u !== eQ.Am.ROLE_SUBSCRIPTION_UNAVAILABLE &&
                                    (a?.(e), s({ emoji: r, willClose: i.isFinalSelection, isBurst: i.isBurst }));
                            }
                        }
                    },
                    [n, t, s, l, c, a, o],
                );
            })({
                pickerIntention: c,
                selectedChannel: u,
                fallbackGuildId: eU,
                closePopout: R,
                onSelectEmoji: P,
                setUpsellConfigs: (e) => {
                    e?.type === tM.PREMIUM && e.emojiDescriptor?.emoji?.type === T.i.PACK ? tp() : eE(e);
                },
                emojiSelectAnalytics: (e, t) => {
                    "" !== eh
                        ? (0, eX.Wf)({
                              emoji: e.emoji,
                              location: { ...tn, object: ek.ZSU.EMOJI },
                              searchQuery: eh,
                              isLocked: null != t,
                              intention: c,
                              messageId: X,
                          })
                        : (0, eX._7)({
                              emoji: e.emoji,
                              location: { ...tn, object: e8 ?? ek.ZSU.EMOJI, ...(null != e4 && { page: e4 }) },
                              pickerIntention: c,
                              category: e.category,
                              subCategory: e.subCategory,
                              position: e.columnIndex + 1,
                              newlyAddedHighlight:
                                  e.subCategory === tj.tm.NEWLY_ADDED_EMOJI && eC.isNewerThanLastSeen(eU, e.emoji.id),
                              isBurstReaction: eG,
                              messageId: X,
                              lockedReason: t,
                              visibleRowIndex: e.visibleRowIndex,
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, eX.C5)({ emoji: e.emoji, location: { ...tn, object: ek.ZSU.EMOJI } });
                },
            }),
            t_ = r.useCallback(() => {
                (R(), D?.());
            }, [R, D]),
            {
                getItemProps: tN,
                getRowProps: tC,
                gridContainerProps: ty,
                handleGridContainerKeyDown: tx,
                isUsingKeyboardNavigation: tO,
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
                    f = (0, m.bG)([O.Ay], () => O.Ay.getDisambiguatedEmojiContext(c), [c]),
                    E = r.useCallback(
                        (e, i) => {
                            if (e.type === tL.EMOJI) {
                                if (e.emoji.type === T.i.PACK)
                                    return void l(e, {
                                        isFinalSelection: !i.shiftKey,
                                        toggleFavorite: i.altKey,
                                        isBurst: u,
                                    });
                                if (null != e.emoji && i.altKey)
                                    return void (f.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                        ? (0, h.Sw)(e.emoji)
                                        : ((0, eX.C5)({ emoji: e.emoji, location: { ...t, object: ek.ZSU.EMOJI } }),
                                          (0, h.V4)(e.emoji)));
                                let r = {
                                    page: null != c ? ek.liQ.GUILD_CHANNEL : ek.liQ.DM_CHANNEL,
                                    section: ek.JJy.EMOJI_PICKER_POPOUT,
                                    object: ek.ZSU.EMOJI,
                                };
                                (u &&
                                    (r = {
                                        page: null != c ? ek.liQ.GUILD_CHANNEL : ek.liQ.DM_CHANNEL,
                                        section: ek.JJy.EMOJI_PICKER_POPOUT,
                                        object: ek.ZSU.EMOJI,
                                    }),
                                    (0, eX._7)({
                                        emoji: e.emoji,
                                        location: r,
                                        pickerIntention: n,
                                        category: e.category,
                                        subCategory: e.subCategory,
                                        newlyAddedHighlight:
                                            e.subCategory === tj.tm.NEWLY_ADDED_EMOJI &&
                                            eC.isNewerThanLastSeen(c, e.emoji.id),
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
                    } = (0, ej.Ff)({
                        columnCounts: i,
                        gridNavigatorId: tj.lq,
                        itemGrid: a,
                        itemList: o,
                        onGridNavigatorItemSelect: E,
                        onGridNavigatorPositionChange: ib,
                    });
                return (
                    r.useEffect(
                        () =>
                            ex.Om.subscribe(
                                (e) => e.inspectedExpressionPosition,
                                (e) => {
                                    if (null == e) return;
                                    let { columnIndex: t, rowIndex: n, source: i } = e;
                                    i !== ei.t.GRID_NAVIGATOR_EVENT &&
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
                analyticsLocation: tn,
                columnCounts: tI,
                onSelectEmoji: P,
                onSelectPackEmoji: tA,
                emojiGrid: tE,
                emojiList: ep,
                channelGuildId: eU,
                isBurstReaction: e2,
            });
        (((e, t) => {
            let [n, i] = r.useState(null);
            (r.useEffect(() => {
                null != n && (t.current?.scrollToSectionTop(n), i(null));
            }, [t, n]),
                r.useEffect(() => {
                    i(ex.Om.getState().activeCategoryIndex);
                }, [e]));
        })(M, ep),
            r.useLayoutEffect(() => {
                er && eA.current?.focus();
            }, [M, ts, eA, er]),
            (s = r.useRef(eT)),
            r.useEffect(() => {
                (er && s.current && !eT && eA.current?.focus(), (s.current = eT));
            }, [er, eT, eA]),
            r.useEffect(() => {
                w || (0, F.Ri)("");
            }, [w]),
            r.useEffect(
                () => (
                    eH.default.track(ek.HAw.OPEN_POPOUT, {
                        type: e6 ?? "Emoji Picker",
                        guild_id: eU,
                        location: te,
                        ...(0, C.dI)(u),
                    }),
                    () => {
                        (iR.cancel(), iv.cancel());
                    }
                ),
                [e6, eU, te, u],
            ),
            (0, A.Ay)(() => ((0, eX.V$)({ intention: c, location: tn }), (eI.current = eh), ex.Om.resetStoreState)),
            r.useEffect(() => () => (0, eJ.sF)(eJ._2.FAVORITE_EMOJI_TOOLTIP), []),
            r.useLayoutEffect(() => {
                let { columnIndex: e, rowIndex: t } = ex.Om.getState().inspectedExpressionPosition;
                tE[t]?.[e] == null && 0 !== e && ex.Om.setInspectedExpressionPosition(0, 0);
            }, [tE]),
            r.useEffect(() => {
                if (("" === eI.current && "" !== eh && (0, eX.EG)(tn, c), "" !== eh && eI.current !== eh)) {
                    let e = ex.Om.getAnalyticsId();
                    0 === tr
                        ? iR({ location: tn, searchQuery: eh, intention: c, loadId: e })
                        : iv({
                              totalResults: tr,
                              numEmojiLocked: tl?.locked.length ?? 0,
                              location: tn,
                              searchQuery: eh,
                              intention: c,
                              loadId: e,
                          });
                }
                eI.current = eh;
            }, [eh, tn, tr, tl, c]));
        let tT = V ?? (L ? "div" : I.l),
            tD = null != td;
        function tw(e, t) {
            tA(e, { ...t, isBurst: e2 });
        }
        ef?.type === tM.PREMIUM
            ? (a = (0, l.jsx)(ij.default, {
                  onUpsellClicked: t_,
                  emojiDescriptor: ef.emojiDescriptor,
                  pickerIntention: c,
                  analyticsLocation: tn,
                  onClose: () => eE(null),
                  channel: u,
              }))
            : ef?.type === tM.ROLE_SUBSCRIPTION &&
              (a = (0, l.jsx)(eF, { onClose: () => eE(null), guildId: ef.guildId, emojiId: ef.emojiId }));
        let tk = (0, _.A)((e, t, n) => {
                tw(
                    {
                        type: tL.EMOJI,
                        emoji: e,
                        isDisabled: !e.available,
                        size: v,
                        rowIndex: 0,
                        columnIndex: t,
                        visibleRowIndex: 0,
                        category: tj.s.PACK,
                        subCategory: tj.tm.NONE,
                    },
                    n,
                );
            }),
            tU = (0, l.jsx)(nC, {
                channel: u,
                pickerIntention: c,
                emojiListRef: ep,
                onKeyDown: (e) => {
                    (tx?.(e), es?.(e));
                },
                searchBarRef: eA,
                onFocus: en,
                autoFocus: er,
                accessory: ea,
                headerClassName: U,
                diversitySurrogate: ts,
                isBurstReaction: eG,
                onBurstReactionToggle: function () {
                    (eW(!eG), eA.current?.focus());
                },
                burstToggleRef: ez,
                renderHeader: z,
                showAddEmojiButton: q,
                closePopout: R,
            }),
            tG = [];
        O.Ay.hasFavoriteEmojis(eU) || tG.push(f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let tF = (0, l.jsxs)(r.Fragment, {
                children: [
                    L ? tU : null,
                    (0, l.jsxs)("div", {
                        className: nN.uK,
                        ref: eg,
                        children: [
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsx)(ix, { channel: u, closePopout: R }),
                                    (0, l.jsx)(j.Ay, {
                                        contentTypes: tG,
                                        children: (e) => {
                                            let { visibleContent: t, markAsDismissed: n } = e;
                                            if (t === f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                                return (0, l.jsx)(t1, { markAsDismissed: () => n(ta.i.UNKNOWN) });
                                        },
                                    }),
                                ],
                            }),
                            H
                                ? null
                                : (0, l.jsx)("div", {
                                      className: nN.Iy,
                                      id: tj.lq,
                                      ...ty,
                                      children: tD
                                          ? (0, l.jsx)(id, {
                                                collapsedSections: tc,
                                                diversitySurrogate: ts,
                                                emojiGrid: tE,
                                                emojiListRef: ep,
                                                emojiSize: v,
                                                getEmojiItemProps: tN,
                                                getEmojiRowProps: tC,
                                                gridWidth: td,
                                                isUsingKeyboardNavigation: tO,
                                                onEmojiSelect: tw,
                                                onRemovePack: eD,
                                                onViewEmojiPacks: e_ ? eb : void 0,
                                                showEmojiPacksDiscovery: eL,
                                                onDismissEmojiPacksDiscovery: eP,
                                                setUpsellConfigs: eE,
                                                rowCount: tE.length,
                                                rowCountBySection: tm,
                                                sectionDescriptors: tf,
                                                setCollapsedSections: tu,
                                                channelGuildId: eU,
                                                messageId: X,
                                                isBurstReaction: e2,
                                                listHeaderClassName: Y,
                                            })
                                          : null,
                                  }),
                        ],
                    }),
                    (0, l.jsx)(nS, { emojiGrid: tE, className: nN.qV, guildId: eU, pickerIntention: c, channel: u }),
                    a,
                    c === eQ.EmojiIntention.REACTION
                        ? (0, l.jsx)(e9, { targetElementRef: ez, shouldShow: eG && !e0, onDismiss: () => eW(!1) })
                        : null,
                ],
            }),
            tJ = (0, l.jsx)(g.A, {
                ...tn,
                children: (0, l.jsxs)(tT, {
                    id: tj.Do,
                    "aria-labelledby": L && !eT ? tj.k1 : void 0,
                    role: L && !eT ? "tabpanel" : void 0,
                    className: o()(nN.iE, { [nN.r6]: L, [nN.cB]: e2 }),
                    children: [
                        L || eT ? null : tU,
                        (0, l.jsx)("div", {
                            className: o()(nN.Fb, k, { [nN.eW]: eT && !L }),
                            onScroll: iS,
                            children: eT ? (0, l.jsx)(eu, { onBack: () => eS?.(!1), onSelectEmoji: tk }) : tF,
                        }),
                        H || eT
                            ? null
                            : (0, l.jsx)(tQ, {
                                  className: o()(nN.jv, Z),
                                  emojiListRef: ep,
                                  sectionDescriptors: tf,
                                  intention: c,
                                  channel: u,
                                  fallbackGuildId: eU,
                                  showOnlyUnicode: $,
                                  pinnedPacks: ew,
                                  onViewEmojiPacks: e_ ? eb : void 0,
                                  showEmojiPacksDiscovery: eL,
                                  onDismissEmojiPacksDiscovery: ev,
                              }),
                    ],
                }),
            });
        return (0, l.jsx)(y.f5, { value: ti, children: tJ });
    });
