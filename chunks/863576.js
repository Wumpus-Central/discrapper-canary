(n.r(t), n.d(t, { EmojiPickerContainerContext: () => iR, default: () => ik }), n(321073));
var i,
    s,
    l,
    r = n(477900),
    a = n(582128),
    o = n(503698),
    c = n.n(o),
    u = n(649852),
    d = n.n(u),
    m = n(788413),
    f = n(855986),
    E = n(554146),
    I = n(319060),
    h = n(305866),
    g = n(554375),
    p = n(820284),
    A = n(212245),
    _ = n(964486),
    N = n(765548),
    C = n(793574),
    y = n(149468),
    x = n(688810),
    j = n(263775),
    O = n(379848),
    S = n(121681),
    T = n(770335),
    b = n(490035),
    R = n(934499),
    v = n(331322),
    P = n(866665),
    L = n(408278),
    M = n(477155),
    D = n(403581),
    w = n(646514),
    k = n(534514),
    U = n(805251),
    G = n(95362),
    F = n(311364),
    J = n(151271),
    K = n(465794),
    V = n(683973),
    B = n(287809),
    H = n(474090),
    W = n(186280),
    X = n(956396),
    z = n(118057),
    Y = n(834730),
    Z = n(847374),
    $ = n(320448),
    q = n(834040),
    Q = n(499373),
    ee = n(559106),
    et = n(442433),
    en = n(565645),
    ei = n(915089),
    es = n(60587),
    el = n(236432),
    er = n(792996),
    ea = n(126904);
let eo = a.memo(function (e) {
    let {
            pack: t,
            isViewSetTarget: i,
            sectionRef: s,
            isPinned: l,
            onAddPack: o,
            onRemovePack: u,
            onSelectEmoji: d,
        } = e,
        m = a.useId(),
        f = a.useId(),
        [E, I] = a.useState(i),
        h = er.intl.string(E ? er.t.iTcuma : er.t.dcl9MQ),
        g = er.intl.string(l ? el.default["2zxYCx"] : el.default.Tvdb5N),
        p = a.useMemo(() => t.emojis.filter((e) => e.available), [t.emojis]),
        A = a.useMemo(() => [p.length], [p.length]),
        _ = (0, ei.GV)(),
        {
            getContainerProps: N,
            getItemProps: C,
            getRowProps: y,
        } = (0, z.A)({
            navId: _,
            columnCounts: A,
            onSelect: (e, n, i) => {
                let s = p[e];
                null != s && t.available && d(s, e, { isFinalSelection: !i.shiftKey, toggleFavorite: i.altKey });
            },
        }),
        x = N();
    return (0, r.jsxs)("section", {
        "aria-labelledby": m,
        className: ea.nM,
        ref: s,
        children: [
            (0, r.jsxs)(v.B, {
                align: "center",
                direction: "horizontal",
                gap: 4,
                justify: "space-between",
                children: [
                    (0, r.jsxs)(v.B, {
                        align: "center",
                        className: ea.DD,
                        direction: "horizontal",
                        gap: 4,
                        children: [
                            (0, r.jsx)(k.D, { className: ea.UU, id: m, variant: "body-sm/semibold", children: t.name }),
                            (0, r.jsx)(Y.E, {
                                color: "text-subtle",
                                variant: "body-sm/medium",
                                children: er.intl.format(el.default.UA8cNe, { count: p.length }),
                            }),
                            (0, r.jsx)(P.m, {
                                text: h,
                                children: (0, r.jsx)(L.K, {
                                    autoFocus: i,
                                    "aria-controls": f,
                                    "aria-describedby": m,
                                    "aria-expanded": E,
                                    "aria-label": h,
                                    icon: E ? Z.ChevronSmallDownIcon : $.ChevronSmallRightIcon,
                                    onClick: () => I((e) => !e),
                                    size: "sm",
                                    variant: "icon-only",
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(P.m, {
                        text: g,
                        children: (0, r.jsx)(L.K, {
                            "aria-label": g,
                            icon: l ? q.MinusIcon : Q.PlusMediumIcon,
                            onClick: () => (l ? u(t) : o(t)),
                            size: "sm",
                            variant: "secondary",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                id: f,
                ...x,
                "aria-label": t.name,
                className: c()(ea.gm, { [ea.jE]: E }),
                tabIndex: t.available && p.length > 0 ? x.tabIndex : -1,
                children: (0, r.jsx)("div", {
                    className: ea.nI,
                    ...y(0),
                    children: p.map((e, i) => {
                        let { ref: s, ...l } = C(i, 0);
                        return (0, r.jsx)(
                            P.m,
                            {
                                text: `:${e.name}:`,
                                ariaHidden: !0,
                                asContainer: !0,
                                children: (0, r.jsx)(ee.vN, {
                                    children: (0, r.jsx)("button", {
                                        ...l,
                                        ref: s,
                                        "aria-label": `:${e.name}:`,
                                        className: ea.Z8,
                                        "data-type": es.g.EMOJI,
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
                                            (0, et.L3)(e, async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e(476662),
                                                    n.e(912875),
                                                    n.e(73500),
                                                    n.e(496715),
                                                    n.e(904774),
                                                    n.e(446132),
                                                ]).then(n.bind(n, 233503));
                                                return (n) => (0, r.jsx)(e, { ...n, target: t, showFavoriteOnly: !0 });
                                            });
                                        },
                                        type: "button",
                                        children: (0, r.jsx)(en.A, {
                                            animated: e.animated,
                                            alt: "",
                                            className: ea.Zg,
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
var ec = n(682901),
    eu = n(429800);
function ed(e) {
    let { onBack: t, onSelectEmoji: n } = e,
        i = er.intl.string(el.default.Nwj3fK),
        s = a.useRef(null),
        l = (0, J.RQ)((e) => e.showSelectedEmojiPackId),
        o = (0, f.bG)([X.A], () => X.A.getPacks()),
        c = null != l && o.some((e) => e.id === l),
        u = (0, f.bG)([B.default], () => B.default.getCurrentUser()),
        d = (0, H.ki)(u, ec.PremiumTypes.TIER_2);
    (a.useLayoutEffect(() => {
        c &&
            (s.current?.scrollIntoView({ block: "start" }),
            s.current?.querySelector("button[aria-expanded]")?.focus({ preventScroll: !0 }));
    }, [c, l]),
        (0, W.i3)(d),
        (0, W.$W)("emoji_picker", d));
    let m = (0, V.k)().pinnedEmojiPacks?.packIds,
        E = a.useCallback((e) => {
            (0, R.Ls)(e.id);
        }, []),
        I = a.useCallback((e) => {
            (0, R.M5)(e.id);
        }, []);
    return (0, r.jsxs)("div", {
        className: eu.kL,
        children: [
            (0, r.jsx)("div", { "aria-hidden": !0, className: eu.Tp }),
            (0, r.jsx)("div", {
                className: eu.wx,
                children: (0, r.jsxs)(v.B, {
                    align: "center",
                    direction: "horizontal",
                    gap: 8,
                    justify: "space-between",
                    wrap: !0,
                    children: [
                        (0, r.jsxs)(v.B, {
                            align: "center",
                            direction: "horizontal",
                            gap: 10,
                            fullWidth: !1,
                            children: [
                                (0, r.jsx)(P.m, {
                                    position: "right",
                                    text: i,
                                    children: (0, r.jsx)(L.K, {
                                        autoFocus: !c,
                                        "aria-label": i,
                                        icon: M.ArrowSmallLeftIcon,
                                        onClick: t,
                                        size: "sm",
                                        variant: "icon-only",
                                    }),
                                }),
                                (0, r.jsxs)(v.B, {
                                    align: "center",
                                    direction: "horizontal",
                                    gap: 4,
                                    fullWidth: !1,
                                    children: [
                                        (0, r.jsx)(D.NitroWheelIcon, { color: w.A.colors.TEXT_DEFAULT, size: "xs" }),
                                        (0, r.jsxs)(v.B, {
                                            align: "center",
                                            direction: "horizontal",
                                            gap: 8,
                                            fullWidth: !1,
                                            children: [
                                                (0, r.jsx)(k.D, {
                                                    variant: "heading-sm/semibold",
                                                    children: er.intl.string(el.default["0+5+Oy"]),
                                                }),
                                                (0, r.jsx)(U.E, { type: "beta", variant: "primary" }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        d
                            ? null
                            : (0, r.jsx)(F.Y, {
                                  newLocations: [W.Vg.emoji_picker.location],
                                  children: (0, r.jsx)(K.A, {
                                      buttonTextOverride: er.intl.string(er.t.hIVbiP),
                                      size: "sm",
                                      subscriptionTier: ec.pe.TIER_2,
                                  }),
                              }),
                    ],
                }),
            }),
            (0, r.jsx)(G.d_, {
                className: eu.p_,
                scrollbarGutter: !1,
                children: o.map((e, t) =>
                    (0, r.jsxs)(
                        a.Fragment,
                        {
                            children: [
                                t > 0 ? (0, r.jsx)("hr", { className: eu.yF }) : null,
                                (0, r.jsx)(
                                    eo,
                                    {
                                        sectionRef: e.id === l ? s : void 0,
                                        isViewSetTarget: e.id === l,
                                        isPinned: m?.includes(e.id) === !0,
                                        pack: e,
                                        onAddPack: E,
                                        onRemovePack: I,
                                        onSelectEmoji: n,
                                    },
                                    `${e.id}:${e.id === l}`,
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
var em = n(617617);
let ef = [];
var eE = n(536637),
    eI = n.n(eE),
    eh = n(73153),
    eg = n(661191);
let ep = { lastSeenNewlyAddedEmojiIds: {} },
    eA = ep,
    e_ = {};
function eN() {
    for (let e in e_) eA.lastSeenNewlyAddedEmojiIds[e] = e_[e];
}
class eC extends f.Ay.PersistedStore {
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
        eA = e ?? ep;
    }
    getState() {
        return eA;
    }
    getLastSeenEmojiByGuild(e) {
        return eA.lastSeenNewlyAddedEmojiIds[e];
    }
    isNewerThanLastSeen(e, t) {
        if (null == e || null == t) return !1;
        let n = this.getLastSeenEmojiByGuild(e);
        if (null == n || eg.default.compare(t, n.id) > 0) return !0;
        {
            let e = eI()(n.lastSeen);
            return eI()().isBefore(e.add(2, "weeks")) && !n.acknowledged;
        }
    }
}
let ey = new eC(eh.h, {
    LOGOUT: function () {
        ((eA = ep), (e_ = {}));
    },
    NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = e_[t] ?? eA.lastSeenNewlyAddedEmojiIds[t];
        null == i || 0 > eg.default.compare(i.id, n)
            ? (e_[t] = { id: n, lastSeen: Date.now(), acknowledged: !0 })
            : (e_[t] = { ...i, acknowledged: !0 });
    },
    NEWLY_ADDED_EMOJI_SEEN_PENDING: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = e_[t] ?? eA.lastSeenNewlyAddedEmojiIds[t];
        (null == i || 0 > eg.default.compare(i.id, n)) && (e_[t] = { id: n, lastSeen: Date.now(), acknowledged: !1 });
    },
    NEWLY_ADDED_EMOJI_SEEN_UPDATED: eN,
    CLEAR_CACHES: function () {
        ((eA = ep), eN());
    },
    CONNECTION_CLOSED: eN,
});
var ex = n(451731),
    ej = n(850992),
    eO = n(887695),
    eS = n(613412),
    eT = n(462887),
    eb = n(939249),
    eR = n(789645),
    ev = n(696986),
    eP = n(736653),
    eL = n(139286),
    eM = n(976860),
    eD = n(71393),
    ew = n(384684),
    ek = n(985242),
    eU = n(652215),
    eG = n(746080),
    eF = n(196404);
function eJ(e) {
    let t,
        { onClose: i, guildId: s, emojiId: l } = e,
        a = ((t = (0, eP.Ay)()), (0, eT.q)(t) ? n(454333) : n(674463)),
        { analyticsLocations: o } = (0, x.Ay)(C.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, eL.A)({
        type: eS.ImpressionTypes.MODAL,
        name: eS.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: { location_stack: o, emoji_guild_id: s, emoji_id: l ?? null },
    });
    let c = (0, f.bG)([eD.A], () => eD.A.getGuild(s)),
        u = (0, f.bG)([ew.A], () => null != s && ew.A.getUserSubscriptionRoles(s).size > 0),
        d = u ? er.intl.string(er.t.GoLM9z) : er.intl.formatToPlainString(er.t["h0u/Hi"], { serverName: c?.name }),
        m = u ? er.intl.string(er.t.PjZ7Db) : er.intl.string(er.t.p8FG1D);
    return (0, r.jsxs)("div", {
        className: eF.kL,
        children: [
            (0, r.jsx)("div", { className: eF.Tp }),
            (0, r.jsxs)("div", {
                className: eF.Qs,
                children: [
                    (0, r.jsx)(eb.D, {
                        className: eF.b,
                        "aria-label": er.intl.string(er.t.cpT0Cq),
                        onClick: i,
                        children: (0, r.jsx)(eR.XSmallIcon, {
                            size: "xs",
                            color: "currentColor",
                            "aria-label": er.intl.string(er.t.cpT0Cq),
                            className: eF.yP,
                        }),
                    }),
                    (0, r.jsx)("img", { alt: "", src: a, className: eF.Tn }),
                    (0, r.jsx)(ev.h, { size: 22 }),
                    (0, r.jsx)(k.D, {
                        color: "text-strong",
                        variant: "heading-lg/semibold",
                        className: eF.wx,
                        children: er.intl.string(er.t.cBjkcx),
                    }),
                    (0, r.jsx)(ev.h, { size: 4 }),
                    (0, r.jsx)(Y.E, {
                        color: "text-default",
                        variant: "body-md/normal",
                        className: eF.h_,
                        children: d,
                    }),
                    (0, r.jsx)(ev.h, { size: 24 }),
                    (0, r.jsx)(ek.A, {
                        text: m,
                        onClick: function () {
                            (0, eM.pX)(eU.BVt.CHANNEL(s, eG.VV.ROLE_SUBSCRIPTIONS), { sourceLocationStack: o });
                        },
                    }),
                ],
            }),
        ],
    });
}
var eK = n(450510),
    eV = n(778705),
    eB = n(253932),
    eH = n(808728),
    eW = n(129230),
    eX = n(240248),
    ez = n(822123),
    eY = n(734057),
    eZ = n(309010),
    e$ = n(690521),
    eq = n(818645),
    eQ = n(316884),
    e0 = n(307731),
    e1 = n(698279);
function e2(e) {
    let { intention: t, containerWidth: n, rowSize: i, isBurstReaction: s, analyticsObject: l } = e,
        r = eY.A.getChannel(eZ.Ay.getChannelId()),
        a = r?.getGuildId(),
        o =
            t === e0.EmojiIntention.REACTION
                ? S.Ay.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice()
                : S.Ay.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        c = null != r ? S.Ay.getDisambiguatedEmojiContext(r.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        u =
            t === e0.EmojiIntention.REACTION
                ? S.Ay.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems
                : S.Ay.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        d = o.slice(0, u),
        m = null != a ? S.Ay.getGuildEmoji(a) : [],
        f = S.Ay.getDisambiguatedEmojiContext(r?.getGuildId()).getCustomEmoji(),
        { topEmojis: E, newlyAddedEmojis: I } = (0, eQ.b)({ guildId: r?.getGuildId(), pickerIntention: t }),
        { visibleTopEmojis: h, visibleNewlyAddedEmojis: g } = (0, eq.W)({
            topEmojis: E,
            newlyAddedEmojis: I,
            rowSize: i,
        });
    y.Ay.trackWithMetadata(
        t === e0.EmojiIntention.REACTION ? eU.HAw.REACTION_PICKER_OPENED : eU.HAw.EXPRESSION_PICKER_OPENED,
        {
            width: n,
            tab: e1.kx.EMOJI,
            badged: !1,
            num_expressions_favorites: c.length,
            num_animated_expressions_favorites: c.filter((e) => e?.animated).length,
            num_custom_expressions_favorites: c.filter(e$.Ay.isCustomEmoji).length,
            num_standard_expressions_favorites: c.filter((e) => null == e.id).length,
            num_expressions_frecent: d.length,
            num_animated_expressions_frecent: d.filter((e) => e?.animated).length,
            num_custom_expressions_frecent: d.filter(e$.Ay.isCustomEmoji).length,
            num_standard_expressions_frecent: d.filter((e) => null == e.id).length,
            num_current_guild_expressions: m.length,
            num_custom_expressions_total: f.size,
            num_expressions_top_server: h.length,
            num_animated_expressions_top_server: h.filter((e) => e.animated).length,
            num_expressions_newly_added: g.length,
            num_animated_expressions_newly_added: g.filter((e) => e.animated).length,
            ...(t === e0.EmojiIntention.REACTION && { is_burst: s }),
            ...(null != l && { location_object: l }),
        },
    );
}
var e3 = n(206248),
    e5 = n(423814),
    e4 = n(77528),
    e8 = n(783420),
    e6 = n(448645);
let e9 = { object: eU.ZSU.BUTTON_CTA, section: eU.JJy.SUPER_REACTION_PICKER };
function e7(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: i } = e,
        s = er.intl.string(er.t.eikz43),
        l = (0, e4.V)(),
        a = (0, e5.O)(),
        o = l?.subscriptionTrial,
        c = null != o || null != a,
        u = o?.skuId ?? ec.pe.TIER_2,
        d = c
            ? null != a
                ? er.intl.formatToPlainString(er.t.bkQ4bH, { percent: a.discount.amount })
                : (0, e6.FY)({ intervalType: o?.interval, intervalCount: o?.intervalCount })
            : er.intl.string(er.t.sEAnVH);
    return (0, r.jsx)(e8.A, {
        subscriptionTier: u,
        premiumModalAnalyticsLocation: e9,
        onSubscribeModalClose: (e) => {
            e && i();
        },
        children: (e) => {
            let { onClick: l } = e;
            return (0, r.jsx)(e3.H, {
                targetElementRef: t,
                shouldShow: n,
                onRequestClose: i,
                position: "bottom",
                assetUrl: "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
                disableMediaViewer: !0,
                badge: c ? { type: "free_trial", variant: "expressive" } : void 0,
                title: er.intl.string(er.t.N4SCJ0),
                body: s,
                action: { text: d, variant: "expressive", icon: D.NitroWheelIcon, onClick: l },
            });
        },
    });
}
var te = n(200589),
    tt = n(435558),
    tn = n.n(tt),
    ti = n(837381),
    ts = n(460905),
    tl = n(775602),
    tr = n(713517),
    ta = n(329921),
    to = n(49999),
    tc = n(938612),
    tu = n(342379);
function td(e) {
    let { onClick: t, listItemId: n, showDiscoveryDot: i, onDismissDiscovery: s } = e,
        l = er.intl.string(el.default["3D0GLv"]),
        a = (0, ti.rm)(n);
    return (0, r.jsx)("div", {
        className: tc.nM,
        children: (0, r.jsxs)("div", {
            className: tc.Jn,
            children: [
                (0, r.jsx)(P.m, {
                    ariaHidden: !0,
                    position: "right",
                    text: l,
                    children: (0, r.jsx)(eb.D, {
                        ...a,
                        "aria-label": i ? `${l}, ${er.intl.string(er.t.y2b7CA)}` : l,
                        className: c()(tc.x6, { [tu.Bj]: !i }),
                        "data-show-discovery": i,
                        onClick: function () {
                            (i && s(to.i.TAKE_ACTION), t());
                        },
                        children: (0, r.jsx)(D.NitroWheelIcon, {
                            size: "md",
                            color: "currentColor",
                            className: i ? void 0 : tu.Yl,
                        }),
                    }),
                }),
                i && (0, r.jsx)(ta.N, { className: tc.aW, size: "md", cutout: "base-lower" }),
            ],
        }),
    });
}
var tm = n(318845),
    tf = n(407698),
    tE = n(941971),
    tI = n(531685),
    th = n(406810),
    tg = n(27232),
    tp = n(369606),
    tA = n(413249),
    t_ = n(141060),
    tN = n(687966),
    tC = n(115979),
    ty = n(524501),
    tx = n(926268),
    tj = n(138134),
    tO = n(732139);
let tS = a.memo(function (e) {
    let { categoryId: t, ...n } = e,
        i = (function (e) {
            switch (e) {
                case tO.R2.RECENT:
                    return th.ClockIcon;
                case tO.R2.FAVORITES:
                    return tg.StarIcon;
                case tO.R2.TOP_GUILD_EMOJI:
                    return tp.TrophyIcon;
                case tO.R2.PEOPLE:
                    return ts.ReactionIcon;
                case tO.R2.NATURE:
                    return tA.NatureIcon;
                case tO.R2.FOOD:
                    return t_.FoodIcon;
                case tO.R2.ACTIVITY:
                    return tN.GameControllerIcon;
                case tO.R2.TRAVEL:
                    return tC.BicycleIcon;
                case tO.R2.OBJECTS:
                    return ty.ObjectIcon;
                case tO.R2.SYMBOLS:
                    return tx.HeartIcon;
                case tO.R2.FLAGS:
                    return tj.FlagIcon;
                case tO.R2.PREMIUM_UPSELL:
                    return D.NitroWheelIcon;
                default:
                    return;
            }
        })(t);
    return null == i ? null : (0, r.jsx)(i, { color: "currentColor", ...n });
});
var tT = n(724511),
    tb = n(115560),
    tR = n(7584),
    tv = n(526292),
    tP = n(711014),
    tL = (((i = {})[(i.EMOJI = 0)] = "EMOJI"), (i[(i.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"), i);
let tM = [e0.Am.DISALLOW_EXTERNAL, e0.Am.DISALLOW_CUSTOM];
var tD = (((s = {})[(s.PREMIUM = 0)] = "PREMIUM"), (s[(s.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), s);
let tw = "expression-guild-",
    { itemIdForIndex: tk } = (0, tm.J)(tw),
    tU = `${tw}view-emoji-packs`,
    tG = (0, eX.xI)(I.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    tF = (0, eX.xI)(I.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    tJ = (0, eX.xI)(I.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    tK = (0, eX.xI)(I.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    tV = (0, eX.xI)(I.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    tB = (0, eX.xI)(tu.__invalid_unicodeCategoryShortcutHeight),
    tH = (0, eX.xI)(I.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    tW = (0, eX.xI)(I.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    tX = tJ + tF + 2 * tV,
    tz = tH + 2 * tW,
    tY = tG + tF,
    tZ = tY + tz,
    t$ = tJ + tK + 2 * tV,
    tq = tJ + 2 * tV + 2 * tF + tH;
function tQ(e) {
    let {
            activeIndex: t,
            categoryIndex: n,
            analyticsContext: i,
            categories: s,
            category: l,
            handleCategorySelect: o,
            isWindowFocused: u,
            useReducedMotion: d,
        } = e,
        m = a.useRef(null),
        { isHoveringOrFocusing: f } = (0, tr.A)(m),
        E = (0, ti.rm)(tk(n)),
        I = l.type === tO.s.GUILD || l.type === tO.s.PACK ? null : l.id,
        h = t === n,
        g = !d && u,
        p = l.type === tO.s.GUILD ? l.guild : null,
        A = l.type === tO.s.PACK ? l.pack : null,
        _ = (0, r.jsxs)(eb.D, {
            innerRef: m,
            ...E,
            "aria-label": l.type === tO.s.PACK ? l.pack.name : (0, ez.wt)(l, p),
            className: c()({
                [tu.ZG]: null != p,
                [tu.td]: null != A,
                [tu.Q0]: null != A && h,
                [tu.Bj]: null == p && null == A,
                [tu.s6]: null == p && null == A && h,
                [tu.xg]: l.type === tO.s.RECENT,
            }),
            onClick: () => {
                (null != p &&
                    eW.default.track(eU.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: i?.location,
                        tab: e1.kx.EMOJI,
                        guild_id: p.id,
                    }),
                    o(n));
            },
            children: [
                (0, r.jsx)("div", {
                    className: tu.a$,
                    children: (0, r.jsx)(tE.A, { hovered: f, selected: h, size: "small" }),
                }),
                l.type === tO.s.GUILD
                    ? (0, r.jsx)(tT.A, { guild: l.guild, isSelected: h, shouldAnimate: g, isLocked: l.isNitroLocked })
                    : null,
                null != A
                    ? (0, r.jsx)(en.A, {
                          alt: "",
                          animated: !d,
                          shouldAnimate: g,
                          className: tu.ty,
                          emojiId: A.representativeEmojiId,
                      })
                    : null,
                null == p && null != I
                    ? (0, r.jsx)(tS, { categoryId: I, className: tu.Yl, height: tJ, width: tJ, size: "custom" })
                    : null,
            ],
        }),
        N = s[n + 1],
        C = s[n - 1],
        y = null != A && null != C && C.type !== tO.s.PACK,
        x = null != A && N?.type !== tO.s.PACK,
        j = null != N && l.type === tO.s.GUILD && N.type !== tO.s.GUILD;
    return null != p
        ? (0, r.jsxs)(a.Fragment, {
              children: [
                  (0, r.jsx)(tf.Q, { guild: p, children: _ }),
                  j ? (0, r.jsx)("hr", { className: tu.ny }, "separator") : null,
              ],
          })
        : null != A
          ? (0, r.jsxs)(a.Fragment, {
                children: [
                    y ? (0, r.jsx)("hr", { className: tu.ny }) : null,
                    (0, r.jsx)(P.m, { ariaHidden: !0, position: "right", text: A.name, children: _ }),
                    x ? (0, r.jsx)("hr", { className: tu.ny }) : null,
                ],
            })
          : _;
}
let t0 = (e) => {
    let {
            className: t,
            emojiListRef: n,
            sectionDescriptors: i,
            intention: s,
            channel: l,
            fallbackGuildId: o,
            showOnlyUnicode: u = !1,
            pinnedPacks: d,
            onViewEmojiPacks: m,
            showEmojiPacksDiscovery: E,
            onDismissEmojiPacksDiscovery: I,
        } = e,
        h = ej.Om.useStore((e) => e.activeCategoryIndex),
        g = (function (e) {
            let { emojiListRef: t } = e,
                n = (0, J.RQ)((e) => e.searchQuery),
                i = a.useCallback((e) => t.current?.scrollToSectionTop(e), [t]);
            return a.useCallback(
                (e) => {
                    "" !== n ? ((0, J.Ri)(""), ej.Om.setActiveCategoryIndex(e)) : i(e);
                },
                [i, n],
            );
        })({ sectionDescriptors: i, emojiListRef: n }),
        p = (0, A.p)(),
        _ = (0, ez.ss)(s, l, { guildId: l?.guild_id ?? o }),
        N = a.useMemo(() => (0, te.t)(u ? (0, ez.CQ)() : _, d), [_, d, u]),
        C = a.useRef(null),
        y = (0, f.bG)([tI.A], () => tI.A.isFocused()),
        x = (0, f.bG)([tl.Ay], () => tl.Ay.useReducedMotion, []),
        j = a.useMemo(
            () =>
                tn().memoize(
                    (e, t) => {
                        let n = N[t];
                        if (null != n)
                            return (0, r.jsx)(
                                tQ,
                                {
                                    activeIndex: h,
                                    analyticsContext: p,
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
            [h, p, N, g, y, x],
        ),
        O = a.useMemo(() => [8, 8, 0, 8], []),
        S = null != m ? tq : 0,
        T = a.useMemo(() => {
            if (null != m)
                return function () {
                    return (0, r.jsx)(
                        td,
                        { listItemId: tU, onClick: m, showDiscoveryDot: E, onDismissDiscovery: I },
                        "view-emoji-packs",
                    );
                };
        }, [m, E, I]),
        b = a.useCallback(
            (e, t) => {
                let n = N[t];
                if (n.type === tO.s.RECENT) return tX;
                if (n.type === tO.s.PACK) {
                    let e = N[t - 1],
                        n = N[t + 1];
                    return tY + (Number(null != e && e.type !== tO.s.PACK) + Number(n?.type !== tO.s.PACK)) * tz;
                }
                if (n.type === tO.s.GUILD) {
                    let e = N[t + 1];
                    return null != e && e.type !== tO.s.GUILD ? tZ : tY;
                }
                return t$;
            },
            [N],
        ),
        {
            nonUnicodeCategoryCount: R,
            firstUnicodeCategoryIndex: v,
            firstUnicodeCategoryOffsetTop: P,
            rowCountBySection: L,
        } = a.useMemo(() => {
            let e = 0,
                t = 0,
                n = 0,
                i = 0;
            N.forEach((s) => {
                s.type === tO.s.GUILD || s.type === tO.s.PACK
                    ? ((t += 1), (n += 1))
                    : s.type === tO.s.UNICODE
                      ? (i += 1)
                      : ((e += 1), (t += 1));
            });
            let s = [e, n, i],
                l = N.some((e) => e.type === tO.s.PACK) ? (N[0]?.type === tO.s.PACK ? 1 : 2) : 0,
                r = S + tX + t * tY + tZ + l * tz;
            return {
                nonUnicodeCategoryCount: t,
                firstUnicodeCategoryIndex: t,
                firstUnicodeCategoryOffsetTop: r,
                rowCountBySection: s,
            };
        }, [N, S]),
        [M, D] = a.useState(!0);
    a.useLayoutEffect(() => {
        D(R >= 7);
    }, [R]);
    let w = a.useCallback(
            (e) => {
                let t = C.current?.getListDimensions();
                null == t || (e + t.height - tH >= P ? D(!1) : D(!0));
            },
            [P],
        ),
        k = a.useCallback(
            (e) => {
                (e(v), C.current?.scrollTo(P));
            },
            [P, v],
        ),
        U = a.useCallback(
            (e, t) => {
                let n = N[e];
                if (null == n) return 0;
                let i = M ? tB : 0;
                if (n.type === tO.s.RECENT) return t ? 0 : tK;
                if (n.type === tO.s.PACK) return t ? i : tF;
                if (n.type === tO.s.GUILD) {
                    let n = N[e + 1];
                    return null != n && n.type !== tO.s.GUILD ? (t ? tH + -2 * tW + tF + i : tF) : t ? i : tF;
                }
                return t ? tF + i : 2 * tF;
            },
            [N, M],
        ),
        G = a.useMemo(
            () =>
                function (e, t) {
                    return (0, r.jsx)(a.Fragment, { children: t }, e);
                },
            [],
        ),
        F = M ? "shortcut" : "hiddenshortcut";
    return (0, r.jsx)(tm.A, {
        categoryListRef: C,
        expressionsListRef: n,
        className: t,
        store: ej.Om,
        categories: N,
        listPadding: O,
        onScroll: w,
        renderCategoryListItem: j,
        renderSection: G,
        rowCount: N.length,
        categoryHeight: b,
        getScrollOffsetForIndex: U,
        rowCountBySection: L,
        navId: "emoji-picker-categories",
        itemIdPrefix: tw,
        renderListHeader: T,
        listHeaderHeight: S,
        children: (e) =>
            R >= 7 &&
            (0, r.jsx)(
                eb.D,
                {
                    "aria-hidden": !M,
                    "aria-label": er.intl.string(er.t.dT0ctw),
                    className: c()(tu.KB, { [tu.h_]: !M }),
                    tabIndex: M ? 0 : -1,
                    onClick: () => k(e),
                    children: (0, r.jsx)(ts.ReactionIcon, {
                        size: "custom",
                        color: "currentColor",
                        height: tJ,
                        width: tJ,
                    }),
                },
                F,
            ),
    });
};
var t1 = n(860197);
let t2 = function (e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsxs)(Y.E, {
        variant: "body-xs/medium",
        color: "text-default",
        className: t1.iE,
        children: [
            (0, r.jsx)(tx.HeartIcon, { size: "md", color: "currentColor", className: t1.Kk }),
            (0, r.jsx)("div", {
                className: t1.Qs,
                children: (0, r.jsx)(Y.E, { variant: "body-xs/normal", children: er.intl.string(er.t.xdRf69) }),
            }),
            (0, r.jsx)(eb.D, {
                onClick: () => t(to.i.UNKNOWN),
                children: (0, r.jsx)(eR.XSmallIcon, { size: "md", color: "currentColor", className: t1.VN }),
            }),
        ],
    });
};
var t3 = n(156150),
    t5 = n(717421),
    t4 = n(343032),
    t8 = n(683063),
    t6 = n(748798);
let t9 = { tension: 750, mass: 2.5, friction: 70 };
function t7(e) {
    let { checked: t, onClick: n, buttonRef: i } = e,
        s = (0, f.bG)([tl.Ay], () => tl.Ay.useReducedMotion),
        l = B.default.getCurrentUser(),
        o = null != l && !(0, e6.TW)(l),
        u = o ? [] : [E.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP],
        [d, m] = (0, j.kn)(u),
        [I, h] = a.useState(!1),
        [g, p] = (0, t5.z)(() => ({})),
        A = (0, t3.animated)(t4.SuperReactionIcon);
    a.useEffect(() => {
        let e = d === E.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (m(to.i.DISMISS), setTimeout(() => h(e), 200));
    }, [d, m]);
    let _ = I ? er.intl.string(er.t["Osi/uy"]) : t && !o ? er.intl.string(er.t["5cRA/b"]) : er.intl.string(er.t.buV4av),
        N = I ? er.intl.string(er.t.ORK94p) : void 0;
    return (0, r.jsx)(t8.u, {
        position: "top",
        title: N,
        body: _,
        asset: (0, r.jsx)(D.NitroWheelIcon, { size: "md", color: "currentColor" }),
        assetSize: 20,
        forceOpen: I,
        children: (0, r.jsx)(eb.D, {
            innerRef: i,
            "aria-label": _,
            "aria-pressed": t,
            onClick: function () {
                (p({ from: { rotate: t ? "360deg" : "0deg" }, to: { rotate: t ? "0deg" : "360deg" }, config: t9 }),
                    n?.(),
                    h(!1));
            },
            focusProps: { enabled: !1 },
            className: c()(t6.Pf, { [t6.wM]: t }),
            children: (0, r.jsx)(A, {
                style: s ? void 0 : g,
                size: "custom",
                width: 20,
                height: 20,
                color: t ? "white" : "currentColor",
                className: t6.Kk,
            }),
        }),
    });
}
var ne = n(821609),
    nt = n(644508),
    nn = n(824832),
    ni = n(267102),
    ns = n(242812);
function nl(e) {
    let { channel: t, closePopout: n } = e,
        i = a.useRef(null),
        s = a.useRef(0),
        [l, o] = a.useState(!1),
        [c, u] = a.useState(!1),
        d = (0, ni.Us)() === eU.BRT.OVERLAY,
        m = c || l,
        f = a.useCallback(
            async (e, i, l) => {
                (u(!0),
                    n(),
                    await (0, nt.f)({
                        userImage: { data: e, file: i, image: l },
                        guildId: t?.guild_id ?? null,
                        analyticsLocation: {
                            section: eU.JJy.EXPRESSION_PICKER,
                            page: t?.guild_id != null ? eU.liQ.GUILD_CHANNEL : eU.liQ.DM_CHANNEL,
                        },
                    }),
                    (s.current += 1),
                    u(!1));
            },
            [t, n],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(P.m, {
                asContainer: !0,
                text: d ? er.intl.string(er.t.RMbedC) : null,
                children: (0, r.jsx)(ne.$, {
                    text: er.intl.string(er.t.iMJO37),
                    variant: "secondary",
                    onClick: function () {
                        (y.Ay.trackWithMetadata(eU.HAw.EXPRESSION_PICKER_ADD_EMOJI_CLICKED, {
                            guild_id: t?.guild_id ?? null,
                            channel_id: t?.id ?? null,
                            location_section: eU.JJy.EXPRESSION_PICKER,
                            location_page: t?.guild_id != null ? eU.liQ.GUILD_CHANNEL : eU.liQ.DM_CHANNEL,
                        }),
                            i.current?.activateUploadDialogue());
                    },
                    disabled: m || d,
                }),
            }),
            (0, r.jsx)("div", {
                className: ns.F,
                children: (0, r.jsx)(nn.Ay, { ref: i, onChange: f, setLoading: o, disabled: m }, s.current),
            }),
        ],
    });
}
n(667532);
var nr = n(833272),
    na = n(82495),
    no = n(260762),
    nc = n(650583),
    nu = n(683829);
let nd = (0, ei.Ld)(),
    nm = nr.A.convert.fromCodePoint("1f44f"),
    nf = (0, eX.xI)(I.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
function nE(e) {
    switch (nr.A.convert.toCodePoint(e)) {
        case "1f3fb":
            return er.intl.string(er.t["BVK5b/"]);
        case "1f3fc":
            return er.intl.string(er.t.xJWOK8);
        case "1f3fd":
            return er.intl.string(er.t["MB+T5g"]);
        case "1f3fe":
            return er.intl.string(er.t.MODud2);
        case "1f3ff":
            return er.intl.string(er.t["0uzqsc"]);
        default:
            return er.intl.string(er.t.bGN1ow);
    }
}
let nI = (e) => {
    let { fade: t, surrogate: n, onClick: i, delay: s, index: l } = e,
        a = (0, ti.rm)(`item-${l}`),
        o = e$.Ay.getURL(nm + n),
        c = (0, t5.z)({ opacity: 1, from: { opacity: +!t }, delay: s }, "animate-always");
    return (0, r.jsx)(eb.D, {
        ...a,
        role: "option",
        "aria-selected": 0 === l,
        onClick: () => i(n),
        className: nu.B6,
        children: (0, r.jsx)(t3.animated.div, {
            "aria-label": nE(n),
            className: nu.g4,
            style: { backgroundImage: `url("${o}")`, ...c },
        }),
    });
};
function nh(e) {
    let { id: t, selectedSurrogate: n, onClick: i } = e,
        s = (0, no.A)("diversity"),
        l = (0, t5.z)({ height: (nf + 14) * (tR.W$.length + 1), from: { height: nf + 14 }, config: { duration: 125 } }),
        o = a.useRef(s);
    a.useEffect(() => {
        o.current.focusFirstVisibleItem();
    }, []);
    let c = ["", ...tR.W$];
    return (
        tn().remove(c, (e) => e === n),
        c.unshift(n),
        (0, r.jsx)(ti.hD, {
            navigator: s,
            children: (0, r.jsx)(ti.PR, {
                children: (e) => {
                    let { ref: n, ...s } = e;
                    return (0, r.jsx)(t3.animated.div, {
                        ...s,
                        id: t,
                        ref: n,
                        className: nu.J6,
                        style: l,
                        role: "listbox",
                        children: c.map((e, t) =>
                            (0, r.jsx)(nI, { index: t, fade: 0 !== t, delay: 20 * t, surrogate: e, onClick: i }, t),
                        ),
                    });
                },
            }),
        })
    );
}
let ng = function (e) {
    let { searchBarRef: t, selectedSurrogate: n, className: i } = e,
        s = e$.Ay.getURL(nm + n),
        [l, o] = a.useState(!1),
        u = (0, na.A)(null, () => o(!1)),
        d = a.useRef(null);
    return (0, r.jsxs)("div", {
        ref: u,
        className: c()(nu.fx, i),
        children: [
            (0, r.jsx)(eb.D, {
                innerRef: d,
                className: nu.Dj,
                onClick: function () {
                    o(!0);
                },
                "aria-label": er.intl.formatToPlainString(er.t["2SfnMp"], { skinTone: nE(n) }),
                "aria-haspopup": !0,
                "aria-expanded": l,
                "aria-controls": nd,
                tabIndex: l ? -1 : 0,
                children: (0, r.jsx)("div", { className: nu.g4, style: { backgroundImage: `url("${s}")` } }),
            }),
            l
                ? (0, r.jsx)("div", {
                      onKeyDown: function (e) {
                          e.key === nc.dh.ESCAPE
                              ? (e.stopPropagation(), o(!1), null != d.current && d.current.focus())
                              : "Tab" === e.key && o(!1);
                      },
                      children: (0, r.jsx)(nh, {
                          id: nd,
                          selectedSurrogate: n,
                          onClick: function (e) {
                              ((0, g.dK)(e), o(!1), t.current?.focus());
                          },
                      }),
                  })
                : null,
        ],
    });
};
var np = n(462180),
    nA = n(602034),
    n_ = n(683438);
let nN = a.memo(function (e) {
    let {
            emojiListRef: t,
            gridNavigatorId: n,
            onKeyDown: i,
            onFocus: s,
            autoFocus: l,
            defaultSearchPlaceholder: o,
            ref: c,
        } = e,
        u = a.useRef(null),
        d = (0, J.RQ)((e) => e.searchQuery),
        [m, f, E] = ej.Om.useStore((e) => [e.inspectedExpressionPosition, e.searchPlaceholder, e.hasInteracted], np.x),
        I = a.useCallback(
            (e) => {
                (ej.Om.setActiveCategoryIndex("" === e ? 0 : -1),
                    ej.Om.setInspectedExpressionPosition(0, 0),
                    ej.Om.setSearchPlaceholder(null),
                    (0, J.Ri)(e),
                    t.current?.scrollTo(0));
            },
            [t],
        ),
        h = a.useCallback(() => {
            I("");
        }, [I]);
    return (
        a.useImperativeHandle(c, () => ({ focus: () => u.current?.focus() })),
        (0, r.jsx)(n_.I, {
            autoFocus: l,
            query: d,
            ref: u,
            placeholder: f ?? o,
            onClear: h,
            onKeyDown: function (e) {
                switch (e.key) {
                    case nc.dh.ARROW_LEFT:
                    case nc.dh.ARROW_RIGHT:
                    case nc.dh.ARROW_UP:
                    case nc.dh.ARROW_DOWN:
                        document.activeElement !== e.target && e.preventDefault();
                }
                i(e);
            },
            onFocus: s,
            onChange: I,
            inputProps: {
                role: "combobox",
                "aria-label": er.intl.string(er.t.tCauZX),
                "aria-haspopup": "grid",
                "aria-autocomplete": "list",
                "aria-controls": n,
                "aria-expanded": !0,
                ...(E ? { "aria-activedescendant": (0, nA.Aq)(n, m.columnIndex, m.rowIndex) } : void 0),
            },
        })
    );
});
var nC = n(381575);
let ny = function (e) {
    let {
            channel: t,
            accessory: n,
            pickerIntention: i,
            headerClassName: s,
            emojiListRef: l,
            onKeyDown: a,
            onFocus: o,
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
        A = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(nN, {
                    emojiListRef: l,
                    gridNavigatorId: tO.lq,
                    onKeyDown: a,
                    ref: d,
                    onFocus: o,
                    autoFocus: u,
                    defaultSearchPlaceholder: (0, ez.wT)(i, f),
                }),
                i === e0.EmojiIntention.REACTION ? (0, r.jsx)(t7, { checked: f, onClick: E, buttonRef: I }) : null,
                n ?? (0, r.jsx)(ng, { searchBarRef: d, className: nC.fx, selectedSurrogate: m }),
                i !== e0.EmojiIntention.NO_CUSTOM_EMOJI && g ? (0, r.jsx)(nl, { channel: t, closePopout: p }) : null,
            ],
        });
    return (0, r.jsx)("div", { className: c()(nC.wx, s), children: null != h ? h(A) : A });
};
var nx = n(371680),
    nj = n(413599),
    nO = n(486020),
    nS = n(977566);
function nT(e) {
    return null != e && "animated" in e;
}
let nb = a.memo(function (e) {
    let t,
        i,
        { className: s, emojiGrid: l, guildId: o, pickerIntention: c, channel: u } = e,
        d = ej.Om.useStore((e) => e.inspectedExpressionPosition),
        m = a.useMemo(() => {
            let { rowIndex: e, columnIndex: t } = d;
            return l[e]?.[t];
        }, [l, d]);
    switch (m?.type) {
        case tL.EMOJI:
            t = m?.emoji;
            break;
        case tL.EXPAND_OR_COLLAPSE_EMOJIS:
            t = { type: "EXPAND_OR_COLLAPSE_EMOJI", guildId: m?.guildId, allNamesString: m?.name };
            break;
        default:
            t = null;
    }
    let E = (0, f.bG)([eD.A], () => (null !== t && t.type === T.i.GUILD ? eD.A.getGuild(t.guildId) : null), [t]),
        I = (0, f.bG)([X.A], () => (null !== t && t.type === T.i.PACK ? X.A.getPack(t.packId) : null), [t]),
        h = (0, f.bG)([tI.A], () => tI.A.isFocused()),
        g = (0, f.bG)([tl.Ay], () => tl.Ay.useReducedMotion, []),
        p = eB.Sf.useSetting(),
        A = (0, ez.O7)(o, nT(t) ? t : null),
        _ = (0, f.bG)([S.Ay], () => S.Ay.expandedSectionsByGuildIds),
        { newlyAddedEmojis: N } = (0, eQ.A)(o, c),
        C = m?.type === tL.EMOJI ? m.subCategory : tO.tm.NONE;
    if (
        (a.useEffect(() => {
            let e = Date.now();
            return () => {
                Date.now() - e >= 250 &&
                    nT(t) &&
                    C !== tO.tm.NONE &&
                    (C === tO.tm.NEWLY_ADDED_EMOJI &&
                        null !== t &&
                        t.type === T.i.GUILD &&
                        (0, ex.mz)(t.guildId, N[0].id),
                    null != d.source &&
                        (0, ez.yB)({
                            emoji: t,
                            subCategory: C,
                            position: m.columnIndex + 1,
                            newlyAddedHighlight: C === tO.tm.NEWLY_ADDED_EMOJI && ey.isNewerThanLastSeen(o, t.id),
                        }));
            };
        }),
        null == t)
    )
        return null;
    let y = (function (e, t) {
            let { allowAnimatedEmoji: i, sectionsExpandedFromThreeRows: s, theme: l } = t;
            if (nT(e)) {
                let t = null != e.id ? nO.Ay.getEmojiURL({ id: e.id, animated: i && e.animated, size: 28 }) : e.url;
                return "" === t
                    ? (0, r.jsx)(Y.E, {
                          variant: "body-md/normal",
                          className: nS.J_,
                          children: "surrogates" in e ? e.surrogates : null,
                      })
                    : (0, r.jsx)("img", { alt: (0, e$.N)(e) ?? "", src: t, className: nS.Zg });
            }
            if ("EXPAND_OR_COLLAPSE_EMOJI" !== e.type) return null;
            {
                let t = n(619508),
                    i = n(404828),
                    a = n(600003),
                    o = n(318121);
                return s.has(e.guildId)
                    ? (0, r.jsx)("img", { className: nS.Kk, src: (0, eT.M)(l) ? a : o, alt: "" })
                    : (0, r.jsx)("img", { className: nS.Kk, src: (0, eT.M)(l) ? t : i, alt: "" });
            }
        })(t, { allowAnimatedEmoji: p, sectionsExpandedFromThreeRows: _, theme: nj.A.theme }),
        x =
            null != E
                ? (0, r.jsx)(tT.A, { className: nS.__invalid_guildIcon, guild: E, shouldAnimate: !g && h })
                : null;
    i =
        "EXPAND_OR_COLLAPSE_EMOJI" === t.type
            ? _.has(t.guildId)
                ? er.intl.string(er.t["/K2RDH"])
                : er.intl.string(er.t.NZI2Zk)
            : (0, e$.N)(t);
    let j = (function (e) {
        let { inspectedEmoji: t, guild: n, pack: i } = e,
            s = nT(t);
        return null != n && s
            ? er.intl.format(er.t.KFW2aY, { guildName: n.name })
            : null != i && s
              ? er.intl.format(el.default.VEfeux, {
                    packName: (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(D.NitroWheelIcon, {
                                size: "custom",
                                width: 10,
                                height: 10,
                                color: "currentColor",
                                className: nS.C5,
                                "aria-label": er.intl.string(el.default.leUgZw),
                            }),
                            " ",
                            i.name,
                        ],
                    }),
                })
              : null;
    })({ inspectedEmoji: t, channel: u, guildId: o, intention: c, guild: E, pack: I });
    return (0, r.jsx)(nx.A, {
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
var nR = n(607399),
    nv = n(123292),
    nP = n(765178),
    nL = n(537652),
    nM = n(962125),
    nD = n(857913),
    nw = n(298079);
let nk = (0, eX.xI)(w.A.space.PX_128) - 1;
function nU(e) {
    let { onViewEmojiPacks: t, onDismiss: n } = e,
        i = a.useId();
    return (0, r.jsxs)(v.B, {
        as: "section",
        "aria-labelledby": i,
        className: nD.vK,
        direction: "horizontal",
        align: "center",
        gap: 8,
        padding: { left: 16, right: 12 },
        fullWidth: !1,
        children: [
            (0, r.jsxs)(v.B, {
                className: nD.C,
                direction: "vertical",
                align: "start",
                gap: 12,
                padding: { top: 16, bottom: 16 },
                fullWidth: !1,
                children: [
                    (0, r.jsxs)(v.B, {
                        direction: "vertical",
                        gap: 4,
                        fullWidth: !1,
                        children: [
                            (0, r.jsxs)(v.B, {
                                className: nD.$,
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                fullWidth: !1,
                                children: [
                                    (0, r.jsx)(D.NitroWheelIcon, { color: w.A.colors.ICON_DEFAULT, size: "xs" }),
                                    (0, r.jsx)(k.D, {
                                        id: i,
                                        variant: "body-sm/semibold",
                                        color: "text-default",
                                        children: er.intl.string(el.default["0+5+Oy"]),
                                    }),
                                    (0, r.jsx)(U.E, { type: "beta", variant: "primary" }),
                                ],
                            }),
                            (0, r.jsx)(Y.E, {
                                variant: "body-sm/medium",
                                color: "text-default",
                                lineClamp: 2,
                                children: er.intl.string(el.default["6mcVBm"]),
                            }),
                        ],
                    }),
                    (0, r.jsx)(ne.$, {
                        size: "sm",
                        variant: "secondary",
                        text: er.intl.string(el.default.Nj8Y3C),
                        onClick: function () {
                            (n(to.i.TAKE_ACTION), t());
                        },
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: nD.Sl,
                children: (0, r.jsx)("img", { alt: "", className: nD.Qw, src: nw.A }),
            }),
            (0, r.jsx)("div", {
                className: nD.VN,
                children: (0, r.jsx)(P.m, {
                    text: er.intl.string(er.t.WAI6xu),
                    children: (0, r.jsx)(L.K, {
                        "aria-label": er.intl.string(er.t.WAI6xu),
                        icon: eR.XSmallIcon,
                        size: "sm",
                        variant: "icon-only",
                        onClick: () => n(to.i.USER_DISMISS),
                    }),
                }),
            }),
        ],
    });
}
var nG = n(240864),
    nF = n(286509),
    nJ = n(89366),
    nK = n(739053),
    nV = n(82498),
    nB = n(202639),
    nH = n(414872),
    nW = n(521440),
    nX = n(304072),
    nz = n(189551),
    nY = n(594061),
    nZ = n(771104),
    n$ = n(147421),
    nq = n(723702),
    nQ = n(140735),
    n0 = n(194261),
    n1 = n(703413);
let n2 = (e) => {
    let { src: t, alt: n, size: i, "aria-label": s, className: l } = e,
        o = a.useRef(null),
        u = a.useRef(!1),
        d = u.current ? n1.S : n1.Y;
    return (0, r.jsx)("img", {
        className: c()(d, l),
        alt: n,
        src: t,
        ref: o,
        "aria-label": s,
        style: { backgroundSize: i, height: i, width: i },
        onLoad: u.current
            ? void 0
            : (e) => {
                  (e.currentTarget?.ownerDocument?.defaultView ?? window).requestAnimationFrame(() => {
                      null != o.current &&
                          ((u.current = !0), o.current.classList.remove(n1.Y), o.current.classList.add(n1.S));
                  });
              },
    });
};
var n3 = n(955388);
let n5 = tn().memoize(
        (e) =>
            `${e * e0.he.NonDiversityPerRow}px ${e * Math.ceil(tR.Ay.numNonDiversitySprites / e0.he.NonDiversityPerRow)}px`,
    ),
    n4 = tn().memoize(
        (e) => `${e * e0.he.DiversityPerRow}px ${e * Math.ceil(tR.Ay.numDiversitySprites / e0.he.DiversityPerRow)}px`,
    ),
    n8 = a.memo(function (e) {
        let { emoji: t, size: i, surrogateCodePoint: s, allowAnimatedEmoji: l, "aria-label": o, isLocked: u } = e,
            d = (() => {
                if (!t.useSpriteSheet) {
                    let e = null == t.id ? t.url : nO.Ay.getEmojiURL({ id: t.id, animated: l && t.animated, size: 48 });
                    return null != e
                        ? (0, r.jsx)(n2, {
                              className: n3.N1,
                              "aria-label": o,
                              src: e,
                              size: i,
                              alt: (0, e$.N)(t) ?? "",
                          })
                        : null;
                }
                return (0, r.jsx)("div", {
                    className: c()(n3.xA, { [n3.N1]: u }),
                    style: (function (e, t, i) {
                        let s, l, r;
                        if (!e.useSpriteSheet) return;
                        let a = null != e.index ? e.index : 0;
                        e.hasDiversity
                            ? ((s = n(12303)(`./spritesheet-${t}-${i}.png.js`).default),
                              (l = n4(i)),
                              (r = e0.he.DiversityPerRow))
                            : ((s = n(145519)(`./spritesheet-emoji-${i}.png.js`).default),
                              (l = n5(i)),
                              (r = e0.he.NonDiversityPerRow));
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
                    children: (0, r.jsx)(nQ.A, { children: o }),
                });
            })();
        return (0, r.jsxs)(a.Fragment, {
            children: [
                d,
                u
                    ? (0, r.jsx)("div", {
                          className: n3.iD,
                          style: { width: i, height: i },
                          children: (0, r.jsx)(n0.LockIcon, { size: "xs", color: "currentColor", className: n3.fi }),
                      })
                    : null,
            ],
        });
    });
var n6 = n(537911);
function n9(e) {
    let t,
        {
            emoji: n,
            isFavorite: i,
            isLargeSize: s,
            isMediumSize: l,
            isInspected: a,
            isDisabled: o,
            showPulse: u,
            columnIndex: d,
            rowIndex: m,
            size: E,
            surrogateCodePoint: I,
            allowAnimatedEmoji: h,
            selectedItemClassName: g,
            inNitroLockedSection: p,
            ref: A,
            ..._
        } = e,
        N = (0, f.bG)([eD.A], () => (n.type === T.i.GUILD ? eD.A.getGuild(n.guildId) : void 0), [n]);
    return (0, r.jsx)(ee.vN, {
        children: (0, r.jsx)("button", {
            ..._,
            className: c()(n6._X, { [n6.lG]: s, [n6.Lh]: l, [n6.Bx]: a, [g ?? ""]: a, [n6.TV]: u }),
            "data-type": es.g.EMOJI,
            "data-id": n.id,
            "data-name": n.name,
            "data-surrogates": "surrogates" in n ? n.surrogates : null,
            "data-animated": n.animated ? "true" : null,
            ref: A,
            children: (0, r.jsx)(n8, {
                "aria-label":
                    ((t = (0, e$.N)(n)),
                    (N?.name != null &&
                        (t = er.intl.formatToPlainString(er.t["nXv4/B"], { names: t, guildName: N.name })),
                    i)
                        ? er.intl.formatToPlainString(er.t["9FI9Z0"], { names: t })
                        : t),
                columnIndex: d,
                rowIndex: m,
                emoji: n,
                size: E,
                surrogateCodePoint: I,
                allowAnimatedEmoji: h,
                isLocked: o && !p,
            }),
        }),
    });
}
function n7(e) {
    let {
            descriptor: t,
            emojiItemKey: i,
            isInspected: s,
            rowIndex: l,
            channelGuildId: o,
            onInspect: c,
            onSelect: u,
            isScrolling: d,
            isUsingKeyboardNavigation: m,
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
            inNitroLockedSection: O,
        } = e,
        [b, R] = a.useState(""),
        v = (0, f.bG)([tl.Ay], () => tl.Ay.useReducedMotion),
        L = (0, f.bG)([S.Ay], () => S.Ay.getDisambiguatedEmojiContext(o), [o]),
        M = a.useRef(null),
        { emoji: D, size: w, isDisabled: k, columnIndex: U } = t;
    function G() {
        d.current || m.current || c(t);
    }
    let { ref: F, tabIndex: J, onFocus: K, ...V } = g(U, l) ?? {},
        B =
            b !== `${U}:${l}`
                ? (0, r.jsx)(n9, {
                      ref: F,
                      emoji: D,
                      isFavorite: L.isFavoriteEmojiWithoutFetchingLatest(D),
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
                              !v &&
                              N
                          ) {
                              let e = null == D.id ? tR.Ay.convertNameToSurrogate(D.name) : D.name,
                                  t = M.current.getBoundingClientRect();
                              ((t.x = j.x + (U + 1) * w), R(`${U}:${l}`), (0, n$.h)(y, e, D.id, t));
                          }
                          !(function (e) {
                              if ((e.stopPropagation(), d.current || m.current)) return;
                              let n = e.altKey;
                              (n &&
                                  !S.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(D) &&
                                  C(i),
                                  (0, eK.sF)(eK._2.FAVORITE_EMOJI_TOOLTIP),
                                  u(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n }));
                          })(e);
                      },
                      onContextMenu: function (e) {
                          (0, et.L3)(e, async () => {
                              let { default: e } = await Promise.all([
                                  n.e(476662),
                                  n.e(912875),
                                  n.e(73500),
                                  n.e(496715),
                                  n.e(904774),
                                  n.e(446132),
                              ]).then(n.bind(n, 233503));
                              return (t) => (0, r.jsx)(e, { ...t, showFavoriteOnly: D.type === T.i.PACK });
                          });
                      },
                      tabIndex: J,
                      columnIndex: U,
                      rowIndex: l,
                      size: w,
                      surrogateCodePoint: I,
                      selectedItemClassName: h,
                      inNitroLockedSection: O,
                  })
                : null;
    return (0, a.createElement)(
        "li",
        { ...V, key: i, ref: M },
        E
            ? (0, r.jsx)(P.m, {
                  text: er.intl.formatToPlainString(er.t.glqNsf, { key: (0, nq.cX)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: B,
              })
            : B,
    );
}
let ie = (e) => {
    let {
            emojiDescriptors: t,
            emojiSize: i,
            onSelect: s,
            onInspect: l,
            surrogateCodePoint: o,
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
        P = n(8013),
        L = (0, eP.Ay)(),
        M = ej.Om.getState(),
        [D, w] = a.useState(M.inspectedExpressionPosition),
        [k, U] = (0, nX.A)(null, 300),
        G = a.useRef(null);
    (a.useEffect(
        () =>
            ej.Om.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => w(e),
            ),
        [],
    ),
        a.useEffect(() => {
            nY.bW.loadIfNecessary();
        }, []));
    let F = i === tO.as.LARGE,
        J = i === tO.as.MEDIUM;
    function K(e) {
        let t = `${e.rowIndex}c${e.columnIndex}`;
        switch (e.type) {
            case tL.EXPAND_OR_COLLAPSE_EMOJIS: {
                let { visibleRowIndex: n, columnIndex: i } = e,
                    o = D.rowIndex === n && D.columnIndex === i,
                    d = e.sectionCollapsedToThreeRows
                        ? o
                            ? (0, eT.M)(L)
                                ? R
                                : P
                            : (0, eT.M)(L)
                              ? x
                              : j
                        : o
                          ? (0, eT.M)(L)
                              ? b
                              : v
                          : (0, eT.M)(L)
                            ? O
                            : S,
                    I = er.intl.string(e.sectionCollapsedToThreeRows ? er.t.NZI2Zk : er.t["/K2RDH"]);
                return (function () {
                    let {
                            onMouseEnter: n,
                            onMouseLeave: i,
                            handleSelect: s,
                            icon: o,
                            ariaLabel: d,
                            shouldShowRoundHighlight: I,
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { visibleRowIndex: h, columnIndex: g } = e,
                        { ref: p, tabIndex: _, onFocus: N, ...C } = u(g, E) ?? {},
                        y = D.rowIndex === h && D.columnIndex === g;
                    function x() {
                        m.current || f.current || l(e);
                    }
                    return (0, a.createElement)(
                        "li",
                        { ...C, key: t },
                        (0, r.jsx)(ee.vN, {
                            children: (0, r.jsx)("button", {
                                "aria-label": d,
                                ref: p,
                                className: c()(n6._X, {
                                    [n6.lG]: F,
                                    [n6.Lh]: J,
                                    [n6.Bx]: y && !I,
                                    [A ?? ""]: y,
                                    [n6.TV]: k === t,
                                }),
                                onFocus: N ?? x,
                                onMouseOver: x,
                                onMouseEnter: n,
                                onMouseLeave: i,
                                onClick: s,
                                tabIndex: _,
                                children: o,
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
                                (0, nz.G)(e.guildId),
                                e.sectionCollapsedToThreeRows || y(),
                                eW.default.track(eU.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                    collapsed: e.sectionCollapsedToThreeRows,
                                    guild_id: e.guildId,
                                })));
                    },
                    icon: (0, r.jsx)("img", { className: n6.Kk, src: d, alt: "" }),
                    ariaLabel: I,
                    shouldShowRoundHighlight: !0,
                });
            }
            case tL.EMOJI: {
                let { columnIndex: n, visibleRowIndex: i } = e,
                    a = D.rowIndex === i && D.columnIndex === n;
                return (0, r.jsx)(
                    n7,
                    {
                        rowIndex: E,
                        descriptor: e,
                        emojiItemKey: t,
                        isInspected: a,
                        isScrolling: m,
                        isUsingKeyboardNavigation: f,
                        surrogateCodePoint: o,
                        allowAnimatedEmoji: I,
                        selectedItemClassName: A,
                        onSelect: s,
                        onInspect: l,
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
    function V(e) {
        return (0, r.jsx)("ul", {
            ...d(E),
            className: c()(n6.ND, { [n6.HO]: F, [n6.X$]: J }),
            ref: G,
            children: e.map(K),
        });
    }
    if (p !== tO.s.TOP_GUILD_EMOJI) return V(t);
    let B = t.filter(
            (e) =>
                e.subCategory === tO.tm.TOP_GUILD_EMOJI ||
                (e.subCategory === tO.tm.NEWLY_ADDED_EMOJI &&
                    e.emoji.type === T.i.GUILD &&
                    !ey.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
        ),
        H = t.filter(
            (e) =>
                e.subCategory === tO.tm.NEWLY_ADDED_EMOJI &&
                e.emoji.type === T.i.GUILD &&
                ey.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id),
        );
    return 0 === H.length
        ? V(t)
        : (0, r.jsxs)("div", {
              className: n6.Ng,
              children: [
                  (0, r.jsx)("div", { className: c()(n6.V6, { [n6.$3]: 0 === B.length }), children: V(B) }),
                  (0, r.jsxs)("div", {
                      className: n6.bc,
                      children: [
                          (0, r.jsx)("div", {
                              className: c()(n6.eE, { [n6.eM]: 1 === H.length, [n6.Wk]: B.length > 0 }),
                              children: V(H),
                          }),
                          (0, r.jsxs)("div", {
                              className: c()(n6.lD, { [n6.EI]: F, [n6.qU]: J, [n6.Wk]: B.length > 0 }),
                              children: [
                                  (0, r.jsx)(nZ.A, { foreground: n6.rI }),
                                  (0, r.jsx)(Y.E, {
                                      variant: "body-xs/semibold",
                                      color: "text-overlay-light",
                                      children: er.intl.string(er.t.y2b7CA),
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
};
var it = n(618723);
let ii = (0, eX.xI)(I.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    is = (0, eX.xI)(I.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    il = (0, eX.xI)(I.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    ir = (0, eX.xI)(I.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    ia = (0, eX.xI)(I.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    io = (0, eX.xI)(I.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    ic = (0, eX.xI)(I.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    iu = nk + (0, eX.xI)(w.A.space.PX_10),
    id = iu + ir,
    im = a.memo(function (e) {
        let t,
            n,
            {
                diversitySurrogate: i,
                emojiGrid: s,
                emojiListRef: l,
                emojiSize: o,
                onEmojiSelect: u,
                onRemovePack: d,
                onViewEmojiPacks: m,
                showEmojiPacksDiscovery: E,
                onDismissEmojiPacksDiscovery: I,
                setUpsellConfigs: h,
                sectionDescriptors: g,
                rowCountBySection: p,
                collapsedSections: _,
                setCollapsedSections: N,
                getEmojiItemProps: y,
                getEmojiRowProps: j,
                rowCount: O,
                isUsingKeyboardNavigation: S,
                channelGuildId: T,
                messageId: R,
                isBurstReaction: P,
                listHeaderClassName: L,
            } = e,
            M = +!!(0, b.H)("emoji_picker_list"),
            w = (0, J.RQ)((e) => e.searchQuery),
            k = "" !== w,
            U = E && null != m,
            G = 0;
        U && (G = k ? id : iu);
        let F = a.useCallback(
                (e) => {
                    (l.current?.scrollTo(0), I(e));
                },
                [l, I],
            ),
            K = a.useCallback(
                () =>
                    U && null != m
                        ? (0, r.jsx)(
                              "div",
                              {
                                  className: c()(it.cn, { [it.tY]: k }),
                                  onKeyDown: (e) => {
                                      e.key !== nc.dh.ESCAPE && e.stopPropagation();
                                  },
                                  children: (0, r.jsx)(nU, { onViewEmojiPacks: m, onDismiss: F }),
                              },
                              "discovery-banner",
                          )
                        : null,
                [U, k, m, F],
            ),
            V = a.useRef(!1),
            W = ej.Om.useStore((e) => e.activeCategoryIndex),
            X = eB.Sf.useSetting(),
            z = (0, f.bG)([B.default], () => B.default.getCurrentUser()),
            Z = (0, H.ki)(z),
            { location: $ } = (0, A.p)(),
            { analyticsLocations: q } = (0, x.Ay)(),
            [Q, ee] = a.useState(0),
            [et, en] = a.useState(!1),
            {
                listPadding: ei,
                renderRow: ea,
                renderSection: eo,
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
                        onEmojiSelect: l,
                        onRemovePack: o,
                        searchQuery: u,
                        sectionDescriptors: d,
                        setCollapsedSections: m,
                        getEmojiItemProps: E,
                        getEmojiRowProps: I,
                        isScrolling: h,
                        isUsingKeyboardNavigation: g,
                        allowAnimatedEmoji: p,
                        channelGuildId: _,
                        messageId: N,
                        isBurstReaction: C,
                        listHeaderClassName: y,
                        activeSectionIndex: x,
                        emojiListRef: j,
                        hasListHeader: O,
                    } = e,
                    S = (0, A.p)(),
                    T = a.useRef(0),
                    b = a.useMemo(() => ("" !== n ? nr.A.convert.toCodePoint(n) : ""), [n]),
                    R = a.useCallback(
                        (e) => {
                            let t = d[e],
                                n = d[e + 1];
                            return e >= d.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked;
                        },
                        [d],
                    ),
                    v = a.useCallback(
                        (e) => {
                            if (e >= d.length - 1) return !1;
                            let t = d[e],
                                n = d[e + 1];
                            return !t.isNitroLocked && n.isNitroLocked;
                        },
                        [d],
                    ),
                    P = a.useCallback(
                        function (e) {
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                i = new Set(t),
                                s = t.has(e);
                            (s ? i.delete(e) : i.add(e),
                                null != n &&
                                    eW.default.track(eU.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                        location: S.location,
                                        tab: e1.kx.EMOJI,
                                        collapsed: !s,
                                        guild_id: n.id,
                                    }),
                                m(i));
                        },
                        [S, t, m],
                    ),
                    L = a.useCallback((e) => {
                        let { columnIndex: t, visibleRowIndex: n } = e,
                            i = e.type === tL.EMOJI ? (0, e$.N)(e.emoji) : e.name;
                        (0 !== T.current && window.cancelAnimationFrame(T.current),
                            (T.current = window.requestAnimationFrame(() => {
                                (ej.Om.setInspectedExpressionPosition(t, n, es.t.MOUSE_EVENT),
                                    ej.Om.setSearchPlaceholder(i),
                                    (T.current = 0));
                            })));
                    }, []),
                    M = (0, f.bG)([eK.HP], () => eK.HP.hasHotspot(eK._2.FAVORITE_EMOJI_TOOLTIP), []),
                    w = a.useMemo(
                        () =>
                            tn().memoize((e, t) => {
                                let n = i[e],
                                    a = d[t.sectionIndex];
                                return (0, r.jsx)(
                                    ie,
                                    {
                                        emojiDescriptors: n,
                                        emojiSize: s,
                                        surrogateCodePoint: b,
                                        onInspect: L,
                                        onSelect: l,
                                        getEmojiItemProps: E,
                                        getEmojiRowProps: I,
                                        isScrolling: h,
                                        isUsingKeyboardNavigation: g,
                                        rowIndex: e,
                                        allowAnimatedEmoji: p,
                                        showEmojiFavoriteTooltip: M,
                                        channelGuildId: _,
                                        category: a.sectionId,
                                        selectedItemClassName: it.__invalid_selectedItem,
                                        messageId: N,
                                        isBurstReaction: C,
                                        inNitroLockedSection: a.isNitroLocked,
                                        handleScrollUpOnSectionCollapse: function () {
                                            j.current?.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                                        },
                                    },
                                    e,
                                );
                            }),
                        [i, d, s, b, L, l, E, I, h, g, p, M, _, N, C, j],
                    );
                a.useEffect(() => () => w.cache?.clear?.(), [w]);
                let k = a.useMemo(
                        () =>
                            tn().memoize((e) => {
                                let n = d[e];
                                if (null == n) return;
                                let { guild: i, pack: s, categoryId: l, type: a, sectionId: u } = n;
                                if (a === tO.s.SEARCH_RESULTS) return;
                                let m = (function (e) {
                                        let { type: t, guild: n, categoryId: i } = e;
                                        return t === tO.s.PACK
                                            ? (0, r.jsx)(D.NitroWheelIcon, {
                                                  size: "custom",
                                                  color: "currentColor",
                                                  height: 16,
                                                  width: 16,
                                              })
                                            : t === tO.s.GUILD
                                              ? null == n
                                                  ? null
                                                  : (0, r.jsx)(tT.A, { guild: n, height: 16, width: 16 })
                                              : null == i
                                                ? null
                                                : (0, r.jsx)(tS, {
                                                      categoryId: i,
                                                      height: 16,
                                                      width: 16,
                                                      size: "custom",
                                                  });
                                    })(n),
                                    f = s?.name ?? i?.name;
                                null != l && (f = (0, ez.Nu)(l, i?.name));
                                let E = x === e,
                                    I = n.isNitroLocked,
                                    h = I && !E,
                                    g = I && E,
                                    p =
                                        a === tO.s.PACK
                                            ? (0, r.jsx)("div", {
                                                  className: it.uE,
                                                  children: (0, r.jsx)(nv.Q, {
                                                      text: er.intl.string(el.default["2zxYCx"]),
                                                      textVariant: "body-sm/medium",
                                                      variant: "secondary",
                                                      "aria-label": `${er.intl.string(el.default["2zxYCx"])} ${s.name}`,
                                                      onKeyDown: (e) => {
                                                          e.key !== nc.dh.ESCAPE && e.stopPropagation();
                                                      },
                                                      onClick: () => o(s.id),
                                                  }),
                                              })
                                            : void 0;
                                return (0, r.jsx)(
                                    nF.A,
                                    {
                                        className: c()(it.wx, y, { [it.RA]: h, [it.sp]: g }),
                                        icon: m,
                                        isCollapsed: t.has(u),
                                        onClick: () => P(u, i),
                                        trailing: p,
                                        children: f,
                                    },
                                    u,
                                );
                            }),
                        [d, t, P, y, x, o],
                    ),
                    U = (0, tv.k0)(),
                    G = a.useCallback(
                        (e, n) => {
                            let i = d[e],
                                s = v(e),
                                l = R(e),
                                a = i.type === tO.s.PACK && 0 === i.count;
                            return (0, r.jsx)(
                                "div",
                                {
                                    role: "rowgroup",
                                    className: c()(it.Wy, {
                                        [it.YD]: e === d.length - 1,
                                        [it.jl]: t.has(i.sectionId) || a,
                                        [it.cW]: i.isNitroLocked,
                                        [it.T5]: s || l,
                                    }),
                                    children: n,
                                },
                                e,
                            );
                        },
                        [t, d, v, R],
                    ),
                    F = a.useCallback(
                        (e) =>
                            v(e)
                                ? U
                                    ? (0, r.jsx)(nH.a, {})
                                    : (0, r.jsx)(nH.A, {})
                                : R(e)
                                  ? (0, r.jsx)("div", { className: it.pQ })
                                  : null,
                        [v, R, U],
                    ),
                    J = a.useCallback((e) => (v(e) ? 41 : 33 * !!R(e)), [v, R]),
                    K = a.useCallback(
                        (e) =>
                            e === d.length - 1 ||
                            t.has(d[e]?.sectionId) ||
                            (d[e]?.type === tO.s.PACK && d[e]?.count === 0) ||
                            v(e) ||
                            R(e)
                                ? 0
                                : io,
                        [t, d, v, R],
                    );
                return {
                    listPadding: a.useMemo(() => ["" === u || O ? ii : ir, is, il, 0], [u, O]),
                    renderRow: w,
                    renderSection: G,
                    renderSectionHeader: k,
                    renderSectionFooter: F,
                    sectionMarginBottom: K,
                    sectionHeaderHeight: a.useCallback((e) => (d[e].type === tO.s.SEARCH_RESULTS ? 0 : ia), [d]),
                    sectionFooterHeight: J,
                };
            })({
                collapsedSections: _,
                diversitySurrogate: i,
                emojiGrid: s,
                emojiSize: o,
                onEmojiSelect: u,
                onRemovePack: d,
                searchQuery: w,
                sectionDescriptors: g,
                setCollapsedSections: N,
                getEmojiItemProps: y,
                getEmojiRowProps: j,
                isScrolling: V,
                isUsingKeyboardNavigation: S,
                allowAnimatedEmoji: X,
                channelGuildId: T,
                messageId: R,
                isBurstReaction: P,
                listHeaderClassName: L,
                activeSectionIndex: Q,
                emojiListRef: l,
                hasListHeader: U,
            }),
            eI = a.useCallback(
                (e) => {
                    let t = l.current?.getSectionDescriptors();
                    null == t ||
                        ee(
                            Math.max(
                                t.findLastIndex((t) => t.offset.top <= e + M),
                                0,
                            ),
                        );
                },
                [l, M],
            );
        a.useLayoutEffect(() => {
            eI(l.current?.getScrollerNode()?.scrollTop ?? 0);
        }, [l, eI, g, p, w, G]);
        let eh = (0, eO.Fk)({
            activeCategoryIndex: W,
            isScrolling: V,
            listRef: l,
            onActiveCategoryIndexChange: function (e) {
                "" === w && ej.Om.setActiveCategoryIndex(e);
            },
            scrollOffset: M,
            searchQuery: w,
            disableForSearch: !1,
        });
        (0, eO.FV)({ searchQuery: w, activeCategoryIndex: W, listRef: l });
        let eg = a.useCallback(
                (e) => {
                    (eh(e),
                        eI(e),
                        iE({
                            emojiListRef: l,
                            sectionDescriptors: g,
                            scrollTop: e,
                            searchQuery: w,
                            setShowUpsell: en,
                        }));
                },
                [eh, eI, l, g, w, en],
            ),
            ep = g.length > 0;
        (a.useEffect(() => {
            et &&
                (eW.default.track(eU.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: ec.e.EMOJI_PICKER_FLOATING_UPSELL,
                    location: $,
                    location_stack: q,
                }),
                (0, nK.sq)(eU.U7l.PREMIUM_UPSELL_VIEWED, q, () => (0, nV.uq)(ec.e.EMOJI_PICKER_FLOATING_UPSELL)));
        }, [$, q, et]),
            a.useEffect(() => {
                "" !== w && en(!1);
            }, [w]));
        let eA = a.useRef(null);
        a.useEffect(
            () => (
                clearTimeout(eA.current),
                (eA.current = setTimeout(() => {
                    (ep
                        ? nP.O.announce(er.intl.string(er.t.uZ4F2O), "polite")
                        : nP.O.announce(er.intl.string(er.t.IxxiKF), "assertive"),
                        (eA.current = null));
                }, 200)),
                () => {
                    clearTimeout(eA.current);
                }
            ),
            [ep, w],
        );
        let e_ = (0, r.jsx)(Y.E, {
            variant: "body-md/normal",
            color: "text-muted",
            children: er.intl.string(er.t.IxxiKF),
        });
        return (0, r.jsxs)("div", {
            className: it.AD,
            children: [
                ep
                    ? (0, r.jsx)(nM.A, {
                          role: "none presentation",
                          className: it.p_,
                          listPadding: ei,
                          renderListHeader: U ? K : void 0,
                          listHeaderHeight: U ? G : void 0,
                          onScroll: eg,
                          renderRow: ea,
                          renderSection: eo,
                          renderSectionHeader: eu,
                          renderSectionFooter: ed,
                          rowCount: O,
                          rowCountBySection: p,
                          rowHeight: o + 2 * ic,
                          sectionHeaderHeight: ef,
                          sectionMarginBottom: em,
                          sectionFooterHeight: eE,
                          stickyHeaders: !0,
                          ref: l,
                      })
                    : U
                      ? (0, r.jsxs)(v.B, {
                            className: it.wL,
                            direction: "vertical",
                            gap: 0,
                            children: [K(), (0, r.jsx)(nL.A, { message: e_, className: it.XE })],
                        })
                      : (0, r.jsx)(nL.A, { message: e_, className: it.BZ }),
                Z || nR.Fr
                    ? null
                    : (0, r.jsx)(nB.d, {
                          showUpsell: et,
                          text:
                              ((t = (0, e6.Dd)(ec.PremiumTypes.TIER_2)),
                              er.intl.format(er.t.gMVjeS, {
                                  nitroTierName: t,
                                  onClick: () => {
                                      h({ type: tD.PREMIUM, emojiDescriptor: void 0 });
                                  },
                              })),
                          button: ((n = (0, nJ.qD)()), (0, e6.LE)(n, ec.pe.TIER_2) ?? er.intl.string(er.t.BmJkbd)),
                          buttonAnalyticsObject: { section: eU.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                          leadingAction: (0, r.jsx)(nW.l, {
                              size: "sm",
                              className: it.ij,
                              location: C.A.PREMIUM_WISHLIST_EMOJI_UPSELL,
                          }),
                      }),
            ],
        });
    }),
    iE = tn().throttle(
        function (e) {
            let { emojiListRef: t, sectionDescriptors: n, scrollTop: i, searchQuery: s, setShowUpsell: l } = e;
            l(
                (0, nG.s)({ listRef: t, searchQuery: s, nitroLockedSectionStates: n, scrollTop: i })
                    .areOnlyNitroLockedSectionsVisible,
            );
        },
        300,
        { leading: !1, trailing: !0 },
    );
var iI = n(506774),
    ih = n(28863),
    ig = n(669815),
    ip = n(404374),
    iA = n(780964),
    i_ = n(766075),
    iN = n(166403),
    iC = n(506150);
let iy = "premiumRetentionEmojiPickerNotice",
    ix = iI.w.get(iy),
    ij = function (e) {
        let { closePopout: t, channel: n } = e,
            [i, s] = a.useState(!1),
            { subscription: l, hasFetchedSubscriptions: o } = (0, f.cf)([iN.A], () => ({
                subscription: iN.A.getPremiumSubscription(),
                hasFetchedSubscriptions: iN.A.hasFetchedSubscriptions(),
            }));
        if (
            (a.useEffect(() => {
                o || (0, ig.hP)();
            }, [o]),
            null == l || !(0, e6.PK)(l.status) || i)
        )
            return null;
        let c = l.status === eU.Dmq.PAST_DUE ? (0, e6.ji)(l).expiresDate : eI()(l.currentPeriodStart).add(30),
            u = `${l.id}:${c.toISOString()}`;
        if (ix === u) return null;
        let d =
            e6.Ay.getPremiumType(l.planId) === ec.PremiumTypes.TIER_0
                ? ip.k0.PREMIUM_TIER_0
                : e6.Ay.getPremiumType(l.planId) === ec.PremiumTypes.TIER_1
                  ? ip.k0.PREMIUM_TIER_1
                  : ip.k0.PREMIUM_TIER_2;
        return (0, r.jsxs)(Y.E, {
            variant: "body-xs/medium",
            color: "text-default",
            className: iC.g$,
            children: [
                (0, r.jsx)(D.NitroWheelIcon, { size: "md", className: iC.lu, color: d }),
                (0, r.jsxs)("div", {
                    className: iC.Xn,
                    children: [
                        (0, r.jsx)(Y.E, {
                            variant: "body-xs/normal",
                            children: er.intl.format(er.t.bTMjiO, {
                                planName: e6.Ay.getTierDisplayNameByPlanId(l.planId),
                                endsAt: c.toDate(),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            children: (0, r.jsx)(ih.Anchor, {
                                onClick: () => {
                                    ((0, ez.xf)(n), t(), (0, i_.openUserSettings)(iA.X.NITRO_PANEL));
                                },
                                children: er.intl.string(er.t.W3aavh),
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(eb.D, {
                    onClick: () => {
                        (iI.w.set(iy, u), (ix = u), s(!0));
                    },
                    children: (0, r.jsx)(eR.XSmallIcon, { size: "md", color: "currentColor", className: iC.YF }),
                }),
            ],
        });
    };
var iO = n(148361);
let iS = (0, eX.xI)(I.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    iT = (0, eX.xI)(I.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT);
function ib(e) {
    return e.stopPropagation();
}
var iR =
    (((l = {})[(l.NONE = 0)] = "NONE"),
    (l[(l.TABS_EXPRESSION_PICKER = 1)] = "TABS_EXPRESSION_PICKER"),
    (l[(l.NO_TABS_EXPRESSION_PICKER = 2)] = "NO_TABS_EXPRESSION_PICKER"),
    l);
function iv(e, t) {
    ej.Om.setInspectedExpressionPosition(e, t, es.t.GRID_NAVIGATOR_EVENT);
}
let iP = d()(ez.bo, 200),
    iL = d()(ez.Wi, 200),
    iM = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    iD = [E.M.DEFAULT_EMOJIS_PACKS_DISCOVERY_DOT],
    iw = [],
    ik = a.memo(function (e) {
        let t,
            n,
            i,
            s,
            l,
            {
                pickerIntention: o,
                channel: u,
                guildId: d,
                closePopout: I,
                emojiSize: v = tO.as.MEDIUM,
                hasTabWrapper: P = !1,
                onSelectEmoji: L,
                containerWidth: M,
                onNavigateAway: D,
                persistSearch: w,
                className: k,
                headerClassName: U,
                analyticsOverride: G = iM,
                searchProps: F = {},
                wrapper: K,
                shouldHidePickerActions: V = !1,
                messageId: W,
                renderHeader: z,
                listHeaderClassName: Y,
                categoryListClassName: Z,
                showOnlyUnicode: $ = !1,
                showAddEmojiButton: q,
                ref: Q,
                isViewingEmojiPacks: ee,
                onViewEmojiPacksChange: et,
            } = e,
            { onFocus: en, onKeyDown: ei, autoFocus: el = !0, accessory: ea } = F,
            eo = (0, f.bG)([eH.A], () => (null != d ? eH.A.getDefaultChannel(d) : null), [d]),
            [eu, eE] = a.useState(null),
            eI = a.useRef(""),
            eh = (0, J.RQ)((e) => e.searchQuery),
            eg = a.useRef(null),
            ep = a.useRef(null),
            eA = a.useRef(null),
            e_ = (0, b.H)("emoji_picker") && !$ && (0, te.z)(o);
        a.useEffect(() => {
            e_ && (0, R.Fp)();
        }, [e_]);
        let [eN, eC] = a.useState(!1),
            eS = e_ && (ee ?? eN),
            eT = et ?? eC,
            eb = a.useCallback(() => eT(!0), [eT]),
            [eR, ev] = (0, j.kn)(!e_ || V || eS ? iw : iD),
            eP = eR === E.M.DEFAULT_EMOJIS_PACKS_DISCOVERY_DOT,
            eL = a.useCallback(
                (e) => {
                    (e === to.i.USER_DISMISS && eA.current?.focus(), ev(e));
                },
                [ev],
            ),
            eM = a.useCallback((e) => {
                (eA.current?.focus(), (0, R.M5)(e));
            }, []),
            ew =
                ((t = (0, f.bG)([X.A], () => (e_ ? X.A.getPacks() : ef), [e_])),
                (n = (0, f.bG)(
                    [em.A],
                    () => (e_ ? em.A.frecencyWithoutFetchingLatest.pinnedEmojiPacks?.packIds : void 0),
                    [e_],
                )),
                a.useMemo(
                    () =>
                        e_ && null != n && 0 !== n.length
                            ? n.map((e) => t.find((t) => t.id === e)).filter((e) => null != e)
                            : ef,
                    [e_, t, n],
                ));
        null == u && null != eo && (u = eo);
        let ek = u?.getGuildId() ?? d ?? null,
            [eG, eF] = a.useState(!1),
            eX = a.useRef(null),
            eY = B.default.getCurrentUser(),
            eZ = (0, H.ki)(eY),
            e1 = eG && eZ;
        a.useImperativeHandle(Q, () => ({ onPickerOpen: tg }));
        let { location: e3 } = (0, A.p)(),
            { page: e5, section: e4, object: e8, openPopoutType: e6, popoutLocation: e9 } = G,
            tt = a.useMemo(() => ({ ...e3, section: e4 ?? eU.JJy.EMOJI_PICKER_POPOUT }), [e3, e4]),
            { analyticsLocations: ti } = (0, x.Ay)(C.A.EMOJI_PICKER),
            { diversitySurrogate: ts } = (0, f.cf)([S.Ay], () => ({ diversitySurrogate: S.Ay.diversitySurrogate })),
            tl = (0, ez.sL)(eh, u, o, $),
            tr = null == tl ? 0 : tl.locked.length + tl.unlocked.length,
            ta = eB.iM.useSetting(),
            tc = a.useMemo(() => new Set(ta), [ta]),
            tu = a.useCallback((e) => {
                eB.iM.updateSetting(Array.from(e));
            }, []),
            td = (0, eO.oV)({
                gridWrapperRef: eg,
                containerWidth: M,
                showingEmptyState: eS,
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
                        gridWidth: r,
                        emojiPaddingHorizontal: o,
                        emojiSpriteSize: c,
                        pinnedPacks: u,
                        showOnlyUnicode: d,
                    } = e,
                    m = (0, f.bG)([S.Ay], () => S.Ay.categories),
                    E = a.useMemo(() => (d ? tR.Ay.getCategories() : m), [m, d]),
                    I = (0, f.bG)([eD.A], () => eD.A.getGuild(t?.getGuildId()), [t]),
                    h = t?.getGuildId() ?? n,
                    g = (0, f.bG)([S.Ay], () => S.Ay.getDisambiguatedEmojiContext(h), [h]),
                    p = (0, ez.XI)(h),
                    A = (0, ez.Fj)(h),
                    _ = (0, ez.QZ)(h),
                    { topEmojis: N, newlyAddedEmojis: C } = (0, eQ.A)(h, s),
                    y = (0, f.yK)([tP.Ay], () => tP.Ay.getFlattenedGuildIds(), []),
                    x = (0, f.bG)([S.Ay], () => S.Ay.expandedSectionsByGuildIds),
                    j = (0, f.bG)([B.default], () => B.default.getCurrentUser()),
                    O = (0, H.ki)(j),
                    T = (0, H.ki)(j, ec.PremiumTypes.TIER_2),
                    b = (0, tv.k0)(),
                    R = g.getGroupedCustomEmoji();
                return a.useMemo(() => {
                    let e = [],
                        n = [],
                        a = [],
                        d = [],
                        m = 0,
                        f = 0;
                    if (null != g && null != r) {
                        let S = Math.floor(r / (c + 2 * o)),
                            v = 3 * S;
                        function h(l, r) {
                            let o = new Map(),
                                u = i.has(r.sectionId),
                                [E, I] = tn().partition(l, (e) => {
                                    let n = e$.Ay.isEmojiDisabled({ emoji: e, channel: t, intention: s });
                                    return (o.set(e, n), !n);
                                }),
                                h = E.concat(I),
                                g = r.guild,
                                p = h.length > v && null != g && r.isNitroLocked,
                                A = p && !x.has(g.id);
                            A && h.splice(v - 1);
                            let _ = Math.ceil((p ? h.length + 1 : h.length) / S),
                                y = [];
                            for (let e = 0; e < _; e++) {
                                let t = e * S,
                                    n = t + S,
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
                                            category: r.type,
                                            subCategory:
                                                r.sectionId === tO.s.TOP_GUILD_EMOJI
                                                    ? (0, ez.DA)(N, C, e.id ?? e.uniqueName ?? e.name)
                                                    : tO.tm.NONE,
                                        }));
                                if ((y.push(i), !u)) {
                                    if (p && e === _ - 1) {
                                        let t = y[e];
                                        t.push({
                                            type: 1,
                                            guildId: g.id,
                                            name: er.intl.string(er.t.NZI2Zk),
                                            size: c,
                                            rowIndex: e,
                                            columnIndex: t.length,
                                            visibleRowIndex: m,
                                            sectionCollapsedToThreeRows: A,
                                        });
                                    }
                                    (d.push(i.length), a.push(i), m++);
                                }
                                f++;
                            }
                            let j = { ...r, count: l.length };
                            (n.push(j), e.push(u ? 0 : _));
                        }
                        if (null != l)
                            (0 !== l.unlocked.length &&
                                h(l.unlocked, {
                                    type: tO.s.SEARCH_RESULTS,
                                    sectionId: tO.s.SEARCH_RESULTS,
                                    count: l.unlocked.length,
                                    isNitroLocked: !1,
                                }),
                                0 !== l.locked.length &&
                                    h(l.locked, {
                                        type: tO.s.PREMIUM_UPSELL,
                                        categoryId: tO.R2.PREMIUM_UPSELL,
                                        sectionId: tO.s.PREMIUM_UPSELL,
                                        count: l.locked.length,
                                        isNitroLocked: !O,
                                    }));
                        else {
                            let e = E.includes(tO.R2.CUSTOM) ? tO.R2.CUSTOM : tR.Ay.getCategories()[0];
                            for (let n of E) {
                                if (n === e)
                                    for (let e of u) {
                                        let t = tn().compact(
                                            e.emojis.map((e) => {
                                                let { id: t } = e;
                                                return g.getById(t);
                                            }),
                                        );
                                        h(t, {
                                            type: tO.s.PACK,
                                            pack: e,
                                            sectionId: `pack:${e.id}`,
                                            count: t.length,
                                            isNitroLocked: !T,
                                        });
                                    }
                                if (n === tO.R2.CUSTOM) {
                                    function j(e) {
                                        let i = R.get(e);
                                        if (null == i) return;
                                        let l = i.filter(
                                            (n) =>
                                                !tM.includes(
                                                    e$.Ay.getEmojiUnavailableReason({
                                                        emoji: n,
                                                        channel: t ?? eH.A.getDefaultChannel(e),
                                                        intention: s,
                                                    }),
                                                ),
                                        );
                                        if (0 === l.length) return;
                                        let r = eD.A.getGuild(e),
                                            a =
                                                b ||
                                                (!O &&
                                                    e$.Ay.isEmojiCategoryNitroLocked({
                                                        categoryEmojis: l,
                                                        channel: t,
                                                        intention: s,
                                                    }));
                                        h(l, {
                                            categoryId: n,
                                            guild: r,
                                            type: tO.s.GUILD,
                                            sectionId: null != r ? r.id : (0, tb.A)(),
                                            count: l.length,
                                            isNitroLocked: a,
                                        });
                                    }
                                    if ((null != I && j(I.id), (0, e0.Re)(s)))
                                        for (let e of y) (null == I || I.id !== e) && j(e);
                                } else if (n === tO.R2.TOP_GUILD_EMOJI) {
                                    if (null != I) {
                                        let { allEmojis: e } = (0, eq.W)({ topEmojis: N, newlyAddedEmojis: C });
                                        e.length > 0 &&
                                            h(e, {
                                                categoryId: n,
                                                guild: eD.A.getGuild(I.id),
                                                type: tO.s.TOP_GUILD_EMOJI,
                                                sectionId: tO.s.TOP_GUILD_EMOJI,
                                                count: e.length,
                                                isNitroLocked: !1,
                                            });
                                    }
                                } else if (n === tO.R2.RECENT) {
                                    let e = (s === e0.EmojiIntention.REACTION ? _ : A).filter(
                                        (e) => !e$.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }),
                                    );
                                    h(e, {
                                        categoryId: n,
                                        type: tO.s.RECENT,
                                        sectionId: tO.s.RECENT,
                                        count: e.length,
                                        isNitroLocked: !1,
                                    });
                                } else if (n === tO.R2.FAVORITES) {
                                    let e = p.filter(
                                        (e) => !e$.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }),
                                    );
                                    0 !== e.length &&
                                        h(e, {
                                            categoryId: n,
                                            type: tO.s.FAVORITES,
                                            sectionId: tO.s.FAVORITES,
                                            count: e.length,
                                            isNitroLocked: !1,
                                        });
                                } else {
                                    let e = tR.Ay.getByCategory(n);
                                    null != e &&
                                        h(e, {
                                            categoryId: n,
                                            type: tO.s.UNICODE,
                                            sectionId: n,
                                            count: e.length,
                                            isNitroLocked: !1,
                                        });
                                }
                            }
                        }
                    }
                    return { columnCounts: d, emojiGrid: a, rowCountBySection: e, sectionDescriptors: n };
                }, [g, r, c, o, l, i, R, x, t, s, N, C, O, T, E, I, y, u, _, A, p, b]);
            })({
                gridWidth: td,
                fallbackGuildId: ek,
                channel: u,
                pickerIntention: o,
                emojiSearchResults: tl,
                collapsedSections: tc,
                emojiPaddingHorizontal: iS,
                emojiSpriteSize: v,
                pinnedPacks: ew,
                showOnlyUnicode: $,
            }),
            { newlyAddedEmojis: th } = (0, eQ.A)(ek, o);
        ((i = a.useRef({ intention: o, isBurstReaction: eG, analyticsObject: e8 })),
            a.useEffect(() => {
                i.current.intention === e0.EmojiIntention.REACTION && e2(i.current);
            }, []));
        let tg = a.useCallback(() => {
                let e = th.length > 0 ? th[0].id : null;
                ((0, ex.uV)(ek, e), e2({ intention: o, isBurstReaction: eG, analyticsObject: e8 }));
            }, [th, ek, o, eG, e8]),
            tp = a.useCallback(() => {
                (I(),
                    D?.(),
                    (0, eV.A)({
                        subscriptionTier: ec.pe.TIER_2,
                        analyticsLocations: [...ti, C.A.EMOJI_PACKS],
                        analyticsObject: { ...tt, object: eU.ZSU.EMOJI },
                    }));
            }, [tt, ti, I, D]),
            tA = (function (e) {
                let {
                        pickerIntention: t,
                        selectedChannel: n,
                        fallbackGuildId: i,
                        onSelectEmoji: s,
                        setUpsellConfigs: l,
                        emojiSelectAnalytics: r,
                        trackEmojiFavorited: o,
                    } = e,
                    c = (0, f.bG)([S.Ay], () => S.Ay.getDisambiguatedEmojiContext(n?.getGuildId() ?? i), [i, n]);
                return a.useCallback(
                    (e, i) => {
                        if (0 === e.type) {
                            let { emoji: a } = e;
                            if (null == a) return;
                            let u = e$.Ay.getEmojiUnavailableReason({ emoji: a, channel: n, intention: t });
                            if (i.toggleFavorite)
                                return void (c.isFavoriteEmojiWithoutFetchingLatest(a) || null != u
                                    ? (0, g.Sw)(a)
                                    : (o?.(e), (0, g.V4)(a)));
                            if (u !== e0.Am.GUILD_SUBSCRIPTION_UNAVAILABLE) {
                                if (u === e0.Am.PREMIUM_LOCKED) {
                                    (r?.(e, u), l({ type: 0, emojiDescriptor: e }));
                                    return;
                                }
                                if (u === e0.Am.ROLE_SUBSCRIPTION_LOCKED && a.type === T.i.GUILD) {
                                    (r?.(e, u), l({ type: 1, guildId: a.guildId, emojiId: a.id }));
                                    return;
                                }
                                u !== e0.Am.ROLE_SUBSCRIPTION_UNAVAILABLE &&
                                    (r?.(e), s({ emoji: a, willClose: i.isFinalSelection, isBurst: i.isBurst }));
                            }
                        }
                    },
                    [n, t, s, l, c, r, o],
                );
            })({
                pickerIntention: o,
                selectedChannel: u,
                fallbackGuildId: ek,
                closePopout: I,
                onSelectEmoji: L,
                setUpsellConfigs: (e) => {
                    e?.type === tD.PREMIUM && e.emojiDescriptor?.emoji?.type === T.i.PACK ? tp() : eE(e);
                },
                emojiSelectAnalytics: (e, t) => {
                    "" !== eh
                        ? (0, ez.Wf)({
                              emoji: e.emoji,
                              location: { ...tt, object: eU.ZSU.EMOJI },
                              searchQuery: eh,
                              isLocked: null != t,
                              intention: o,
                              messageId: W,
                          })
                        : (0, ez._7)({
                              emoji: e.emoji,
                              location: { ...tt, object: e8 ?? eU.ZSU.EMOJI, ...(null != e5 && { page: e5 }) },
                              pickerIntention: o,
                              category: e.category,
                              subCategory: e.subCategory,
                              position: e.columnIndex + 1,
                              newlyAddedHighlight:
                                  e.subCategory === tO.tm.NEWLY_ADDED_EMOJI && ey.isNewerThanLastSeen(ek, e.emoji.id),
                              isBurstReaction: eG,
                              messageId: W,
                              lockedReason: t,
                              visibleRowIndex: e.visibleRowIndex,
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, ez.C5)({ emoji: e.emoji, location: { ...tt, object: eU.ZSU.EMOJI } });
                },
            }),
            t_ = a.useCallback(() => {
                (I(), D?.());
            }, [I, D]),
            {
                getItemProps: tN,
                getRowProps: tC,
                gridContainerProps: ty,
                handleGridContainerKeyDown: tx,
                isUsingKeyboardNavigation: tj,
            } = (function (e) {
                let {
                        analyticsLocation: t,
                        pickerIntention: n,
                        columnCounts: i,
                        onSelectEmoji: s,
                        onSelectPackEmoji: l,
                        emojiGrid: r,
                        emojiList: o,
                        channelGuildId: c,
                        isBurstReaction: u,
                    } = e,
                    d = (0, f.bG)([S.Ay], () => S.Ay.getDisambiguatedEmojiContext(c), [c]),
                    E = a.useCallback(
                        (e, i) => {
                            if (e.type === tL.EMOJI) {
                                if (e.emoji.type === T.i.PACK)
                                    return void l(e, {
                                        isFinalSelection: !i.shiftKey,
                                        toggleFavorite: i.altKey,
                                        isBurst: u,
                                    });
                                if (null != e.emoji && i.altKey)
                                    return void (d.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                        ? (0, g.Sw)(e.emoji)
                                        : ((0, ez.C5)({ emoji: e.emoji, location: { ...t, object: eU.ZSU.EMOJI } }),
                                          (0, g.V4)(e.emoji)));
                                let r = {
                                    page: null != c ? eU.liQ.GUILD_CHANNEL : eU.liQ.DM_CHANNEL,
                                    section: eU.JJy.EMOJI_PICKER_POPOUT,
                                    object: eU.ZSU.EMOJI,
                                };
                                (u &&
                                    (r = {
                                        page: null != c ? eU.liQ.GUILD_CHANNEL : eU.liQ.DM_CHANNEL,
                                        section: eU.JJy.EMOJI_PICKER_POPOUT,
                                        object: eU.ZSU.EMOJI,
                                    }),
                                    (0, ez._7)({
                                        emoji: e.emoji,
                                        location: r,
                                        pickerIntention: n,
                                        category: e.category,
                                        subCategory: e.subCategory,
                                        newlyAddedHighlight:
                                            e.subCategory === tO.tm.NEWLY_ADDED_EMOJI &&
                                            ey.isNewerThanLastSeen(c, e.emoji.id),
                                    }),
                                    s({ emoji: e.emoji, willClose: !i.shiftKey, isBurst: u }));
                            }
                        },
                        [s, l, c, n, d, t, u],
                    ),
                    {
                        gridDispatch: I,
                        getItemProps: h,
                        getRowProps: p,
                        gridContainerProps: A,
                        handleGridContainerKeyDown: _,
                        isUsingKeyboardNavigation: N,
                    } = (0, eO.Ff)({
                        columnCounts: i,
                        gridNavigatorId: tO.lq,
                        itemGrid: r,
                        itemList: o,
                        onGridNavigatorItemSelect: E,
                        onGridNavigatorPositionChange: iv,
                    });
                return (
                    a.useEffect(
                        () =>
                            ej.Om.subscribe(
                                (e) => e.inspectedExpressionPosition,
                                (e) => {
                                    if (null == e) return;
                                    let { columnIndex: t, rowIndex: n, source: i } = e;
                                    i !== es.t.GRID_NAVIGATOR_EVENT &&
                                        I({ type: m.n.SET_FOCUSED_POSITION, x: t, y: n });
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
                pickerIntention: o,
                analyticsLocation: tt,
                columnCounts: tI,
                onSelectEmoji: L,
                onSelectPackEmoji: tA,
                emojiGrid: tE,
                emojiList: ep,
                channelGuildId: ek,
                isBurstReaction: e1,
            });
        (((e, t) => {
            let [n, i] = a.useState(null);
            (a.useEffect(() => {
                null != n && (t.current?.scrollToSectionTop(n), i(null));
            }, [t, n]),
                a.useEffect(() => {
                    i(ej.Om.getState().activeCategoryIndex);
                }, [e]));
        })(M, ep),
            a.useLayoutEffect(() => {
                el && eA.current?.focus();
            }, [M, ts, eA, el]),
            (s = a.useRef(eS)),
            a.useEffect(() => {
                (el && s.current && !eS && eA.current?.focus(), (s.current = eS));
            }, [el, eS, eA]),
            a.useEffect(() => {
                w || (0, J.Ri)("");
            }, [w]),
            a.useEffect(
                () => (
                    eW.default.track(eU.HAw.OPEN_POPOUT, {
                        type: e6 ?? "Emoji Picker",
                        guild_id: ek,
                        location: e9,
                        ...(0, y.dI)(u),
                    }),
                    () => {
                        (iP.cancel(), iL.cancel());
                    }
                ),
                [e6, ek, e9, u],
            ),
            (0, _.Ay)(() => ((0, ez.V$)({ intention: o, location: tt }), (eI.current = eh), ej.Om.resetStoreState)),
            a.useEffect(() => () => (0, eK.sF)(eK._2.FAVORITE_EMOJI_TOOLTIP), []),
            a.useLayoutEffect(() => {
                let { columnIndex: e, rowIndex: t } = ej.Om.getState().inspectedExpressionPosition;
                tE[t]?.[e] == null && 0 !== e && ej.Om.setInspectedExpressionPosition(0, 0);
            }, [tE]),
            a.useEffect(() => {
                if (("" === eI.current && "" !== eh && (0, ez.EG)(tt, o), "" !== eh && eI.current !== eh)) {
                    let e = ej.Om.getAnalyticsId();
                    0 === tr
                        ? iP({ location: tt, searchQuery: eh, intention: o, loadId: e })
                        : iL({
                              totalResults: tr,
                              numEmojiLocked: tl?.locked.length ?? 0,
                              location: tt,
                              searchQuery: eh,
                              intention: o,
                              loadId: e,
                          });
                }
                eI.current = eh;
            }, [eh, tt, tr, tl, o]));
        let tS = K ?? (P ? "div" : h.l),
            tT = null != td;
        function tw(e, t) {
            tA(e, { ...t, isBurst: e1 });
        }
        eu?.type === tD.PREMIUM
            ? (l = (0, r.jsx)(iO.default, {
                  onUpsellClicked: t_,
                  emojiDescriptor: eu.emojiDescriptor,
                  pickerIntention: o,
                  analyticsLocation: tt,
                  onClose: () => eE(null),
                  channel: u,
              }))
            : eu?.type === tD.ROLE_SUBSCRIPTION &&
              (l = (0, r.jsx)(eJ, { onClose: () => eE(null), guildId: eu.guildId, emojiId: eu.emojiId }));
        let tk = (0, N.A)((e, t, n) => {
                tw(
                    {
                        type: tL.EMOJI,
                        emoji: e,
                        isDisabled: !e.available,
                        size: v,
                        rowIndex: 0,
                        columnIndex: t,
                        visibleRowIndex: 0,
                        category: tO.s.PACK,
                        subCategory: tO.tm.NONE,
                    },
                    n,
                );
            }),
            tU = (0, r.jsx)(ny, {
                channel: u,
                pickerIntention: o,
                emojiListRef: ep,
                onKeyDown: (e) => {
                    (tx?.(e), ei?.(e));
                },
                searchBarRef: eA,
                onFocus: en,
                autoFocus: el,
                accessory: ea,
                headerClassName: U,
                diversitySurrogate: ts,
                isBurstReaction: eG,
                onBurstReactionToggle: function () {
                    (eF(!eG), eA.current?.focus());
                },
                burstToggleRef: eX,
                renderHeader: z,
                showAddEmojiButton: q,
                closePopout: I,
            }),
            tG = [];
        S.Ay.hasFavoriteEmojis(ek) || tG.push(E.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let tF = (0, r.jsxs)(a.Fragment, {
                children: [
                    P ? tU : null,
                    (0, r.jsxs)("div", {
                        className: nC.uK,
                        ref: eg,
                        children: [
                            (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsx)(ij, { channel: u, closePopout: I }),
                                    (0, r.jsx)(O.Ay, {
                                        contentTypes: tG,
                                        children: (e) => {
                                            let { visibleContent: t, markAsDismissed: n } = e;
                                            if (t === E.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                                return (0, r.jsx)(t2, { markAsDismissed: () => n(to.i.UNKNOWN) });
                                        },
                                    }),
                                ],
                            }),
                            V
                                ? null
                                : (0, r.jsx)("div", {
                                      className: nC.Iy,
                                      id: tO.lq,
                                      ...ty,
                                      children: tT
                                          ? (0, r.jsx)(im, {
                                                collapsedSections: tc,
                                                diversitySurrogate: ts,
                                                emojiGrid: tE,
                                                emojiListRef: ep,
                                                emojiSize: v,
                                                getEmojiItemProps: tN,
                                                getEmojiRowProps: tC,
                                                gridWidth: td,
                                                isUsingKeyboardNavigation: tj,
                                                onEmojiSelect: tw,
                                                onRemovePack: eM,
                                                onViewEmojiPacks: e_ ? eb : void 0,
                                                showEmojiPacksDiscovery: eP,
                                                onDismissEmojiPacksDiscovery: eL,
                                                setUpsellConfigs: eE,
                                                rowCount: tE.length,
                                                rowCountBySection: tm,
                                                sectionDescriptors: tf,
                                                setCollapsedSections: tu,
                                                channelGuildId: ek,
                                                messageId: W,
                                                isBurstReaction: e1,
                                                listHeaderClassName: Y,
                                            })
                                          : null,
                                  }),
                        ],
                    }),
                    (0, r.jsx)(nb, { emojiGrid: tE, className: nC.qV, guildId: ek, pickerIntention: o, channel: u }),
                    l,
                    o === e0.EmojiIntention.REACTION
                        ? (0, r.jsx)(e7, { targetElementRef: eX, shouldShow: eG && !eZ, onDismiss: () => eF(!1) })
                        : null,
                ],
            }),
            tJ = (0, r.jsx)(p.A, {
                ...tt,
                children: (0, r.jsxs)(tS, {
                    id: tO.Do,
                    "aria-labelledby": P && !eS ? tO.k1 : void 0,
                    role: P && !eS ? "tabpanel" : void 0,
                    className: c()(nC.iE, { [nC.r6]: P, [nC.cB]: e1 }),
                    children: [
                        P || eS ? null : tU,
                        (0, r.jsx)("div", {
                            className: c()(nC.Fb, k, { [nC.eW]: eS && !P }),
                            onScroll: ib,
                            children: eS ? (0, r.jsx)(ed, { onBack: () => eT?.(!1), onSelectEmoji: tk }) : tF,
                        }),
                        V || eS
                            ? null
                            : (0, r.jsx)(t0, {
                                  className: c()(nC.jv, Z),
                                  emojiListRef: ep,
                                  sectionDescriptors: tf,
                                  intention: o,
                                  channel: u,
                                  fallbackGuildId: ek,
                                  showOnlyUnicode: $,
                                  pinnedPacks: ew,
                                  onViewEmojiPacks: e_ ? eb : void 0,
                                  showEmojiPacksDiscovery: eP,
                                  onDismissEmojiPacksDiscovery: ev,
                              }),
                    ],
                }),
            });
        return (0, r.jsx)(x.f5, { value: ti, children: tJ });
    });
