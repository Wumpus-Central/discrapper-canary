(n.d(t, { A: () => iR }), n(321073));
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
    R = n(403581),
    v = n(646514),
    L = n(534514),
    P = n(805251),
    M = n(834730),
    D = n(821609),
    w = n(866665),
    k = n(408278),
    U = n(789645),
    G = n(263775),
    F = n(49999),
    J = n(236432),
    V = n(792996),
    K = n(857913),
    B = n(298079);
function H(e) {
    let { onViewEmojiPacks: t } = e,
        [n, i] = (0, G.kn)([f.M.DEFAULT_EMOJIS_PACKS_DISCOVERY_DOT]),
        s = r.useId();
    return n !== f.M.DEFAULT_EMOJIS_PACKS_DISCOVERY_DOT
        ? null
        : (0, l.jsxs)(b.B, {
              as: "section",
              "aria-labelledby": s,
              className: K.vK,
              direction: "horizontal",
              align: "center",
              gap: 8,
              padding: { left: 12, right: 12 },
              fullWidth: !1,
              children: [
                  (0, l.jsxs)(b.B, {
                      className: K.C,
                      direction: "vertical",
                      align: "start",
                      gap: 12,
                      padding: { top: 12, bottom: 12 },
                      fullWidth: !1,
                      children: [
                          (0, l.jsxs)(b.B, {
                              direction: "vertical",
                              gap: 4,
                              fullWidth: !1,
                              children: [
                                  (0, l.jsxs)(b.B, {
                                      direction: "horizontal",
                                      align: "center",
                                      gap: 4,
                                      wrap: !0,
                                      fullWidth: !1,
                                      children: [
                                          (0, l.jsx)(R.NitroWheelIcon, { color: v.A.colors.ICON_DEFAULT, size: "xs" }),
                                          (0, l.jsx)(L.D, {
                                              id: s,
                                              variant: "body-sm/semibold",
                                              color: "text-default",
                                              children: V.intl.string(J.default["0+5+Oy"]),
                                          }),
                                          (0, l.jsx)(P.E, { type: "beta", variant: "primary" }),
                                      ],
                                  }),
                                  (0, l.jsx)(M.E, {
                                      variant: "body-sm/medium",
                                      color: "text-default",
                                      children: V.intl.string(J.default["6mcVBm"]),
                                  }),
                              ],
                          }),
                          (0, l.jsx)(D.$, {
                              size: "sm",
                              variant: "secondary",
                              text: V.intl.string(J.default.Nj8Y3C),
                              onClick: function () {
                                  (i(F.i.TAKE_ACTION), t());
                              },
                          }),
                      ],
                  }),
                  (0, l.jsx)("div", {
                      className: K.Sl,
                      children: (0, l.jsx)("img", { alt: "", className: K.Qw, src: B.A }),
                  }),
                  (0, l.jsx)("div", {
                      className: K.VN,
                      children: (0, l.jsx)(w.m, {
                          text: V.intl.string(V.t.WAI6xu),
                          children: (0, l.jsx)(k.K, {
                              "aria-label": V.intl.string(V.t.WAI6xu),
                              icon: U.XSmallIcon,
                              size: "sm",
                              variant: "icon-only",
                              onClick: () => i(F.i.USER_DISMISS),
                          }),
                      }),
                  }),
              ],
          });
}
var W = n(477155),
    X = n(95362),
    z = n(311364),
    Y = n(151271),
    Z = n(465794),
    $ = n(683973),
    q = n(287809),
    Q = n(474090),
    ee = n(186280),
    et = n(956396),
    en = n(118057),
    ei = n(847374),
    es = n(320448),
    el = n(834040),
    er = n(499373),
    ea = n(559106),
    eo = n(442433),
    ec = n(565645),
    eu = n(915089),
    ed = n(60587),
    em = n(126904);
let ef = r.memo(function (e) {
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
        h = V.intl.string(E ? V.t.iTcuma : V.t.dcl9MQ),
        g = V.intl.string(a ? J.default["2zxYCx"] : J.default.Tvdb5N),
        p = r.useMemo(() => t.emojis.filter((e) => e.available), [t.emojis]),
        A = r.useMemo(() => [p.length], [p.length]),
        _ = (0, eu.GV)(),
        {
            getContainerProps: N,
            getItemProps: C,
            getRowProps: y,
        } = (0, en.A)({
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
        className: em.nM,
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
                        className: em.DD,
                        direction: "horizontal",
                        gap: 4,
                        children: [
                            (0, l.jsx)(L.D, { className: em.UU, id: m, variant: "body-sm/semibold", children: t.name }),
                            (0, l.jsx)(M.E, {
                                color: "text-subtle",
                                variant: "body-sm/medium",
                                children: V.intl.format(J.default.UA8cNe, { count: p.length }),
                            }),
                            (0, l.jsx)(w.m, {
                                text: h,
                                children: (0, l.jsx)(k.K, {
                                    autoFocus: i,
                                    "aria-controls": f,
                                    "aria-describedby": m,
                                    "aria-expanded": E,
                                    "aria-label": h,
                                    icon: E ? ei.ChevronSmallDownIcon : es.ChevronSmallRightIcon,
                                    onClick: () => I((e) => !e),
                                    size: "sm",
                                    variant: "icon-only",
                                }),
                            }),
                        ],
                    }),
                    (0, l.jsx)(w.m, {
                        text: g,
                        children: (0, l.jsx)(k.K, {
                            "aria-label": g,
                            icon: a ? el.MinusIcon : er.PlusMediumIcon,
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
                className: o()(em.gm, { [em.jE]: E }),
                tabIndex: t.available && p.length > 0 ? x.tabIndex : -1,
                children: (0, l.jsx)("div", {
                    className: em.nI,
                    ...y(0),
                    children: p.map((e, i) => {
                        let { ref: s, ...r } = C(i, 0);
                        return (0, l.jsx)(
                            w.m,
                            {
                                text: `:${e.name}:`,
                                ariaHidden: !0,
                                asContainer: !0,
                                children: (0, l.jsx)(ea.vN, {
                                    children: (0, l.jsx)("button", {
                                        ...r,
                                        ref: s,
                                        "aria-label": `:${e.name}:`,
                                        className: em.Z8,
                                        "data-type": ed.g.EMOJI,
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
                                            (0, eo.L3)(e, async () => {
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
                                        children: (0, l.jsx)(ec.A, {
                                            animated: e.animated,
                                            alt: "",
                                            className: em.Zg,
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
var eE = n(682901),
    eI = n(429800);
function eh(e) {
    let { onBack: t, onSelectEmoji: n } = e,
        i = V.intl.string(J.default.Nwj3fK),
        s = r.useRef(null),
        a = (0, Y.RQ)((e) => e.showSelectedEmojiPackId),
        o = (0, m.bG)([et.A], () => et.A.getPacks()),
        c = null != a && o.some((e) => e.id === a),
        u = (0, m.bG)([q.default], () => q.default.getCurrentUser()),
        d = (0, Q.ki)(u, eE.PremiumTypes.TIER_2);
    (r.useLayoutEffect(() => {
        c &&
            (s.current?.scrollIntoView({ block: "start" }),
            s.current?.querySelector("button[aria-expanded]")?.focus({ preventScroll: !0 }));
    }, [c, a]),
        (0, ee.i3)(d),
        (0, ee.$W)("emoji_picker", d));
    let f = (0, $.k)().pinnedEmojiPacks?.packIds,
        E = r.useCallback((e) => {
            (0, S.Ls)(e.id);
        }, []),
        I = r.useCallback((e) => {
            (0, S.M5)(e.id);
        }, []);
    return (0, l.jsxs)("div", {
        className: eI.kL,
        children: [
            (0, l.jsx)("div", { "aria-hidden": !0, className: eI.Tp }),
            (0, l.jsx)("div", {
                className: eI.wx,
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
                                (0, l.jsx)(w.m, {
                                    position: "right",
                                    text: i,
                                    children: (0, l.jsx)(k.K, {
                                        autoFocus: !c,
                                        "aria-label": i,
                                        icon: W.ArrowSmallLeftIcon,
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
                                        (0, l.jsx)(R.NitroWheelIcon, { color: v.A.colors.TEXT_DEFAULT, size: "xs" }),
                                        (0, l.jsxs)(b.B, {
                                            align: "center",
                                            direction: "horizontal",
                                            gap: 8,
                                            fullWidth: !1,
                                            children: [
                                                (0, l.jsx)(L.D, {
                                                    variant: "heading-sm/semibold",
                                                    children: V.intl.string(J.default["0+5+Oy"]),
                                                }),
                                                (0, l.jsx)(P.E, { type: "beta", variant: "primary" }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        d
                            ? null
                            : (0, l.jsx)(z.Y, {
                                  newLocations: [ee.Vg.emoji_picker.location],
                                  children: (0, l.jsx)(Z.A, {
                                      buttonTextOverride: V.intl.string(V.t.hIVbiP),
                                      size: "sm",
                                      subscriptionTier: eE.pe.TIER_2,
                                  }),
                              }),
                    ],
                }),
            }),
            (0, l.jsx)(X.d_, {
                className: eI.p_,
                scrollbarGutter: !1,
                children: o.map((e, t) =>
                    (0, l.jsxs)(
                        r.Fragment,
                        {
                            children: [
                                t > 0 ? (0, l.jsx)("hr", { className: eI.yF }) : null,
                                (0, l.jsx)(
                                    ef,
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
var eg = n(617617);
let ep = [];
var eA = n(536637),
    e_ = n.n(eA),
    eN = n(73153),
    eC = n(811091);
let ey = { lastSeenNewlyAddedEmojiIds: {} },
    ex = ey,
    ej = {};
function eO() {
    for (let e in ej) ex.lastSeenNewlyAddedEmojiIds[e] = ej[e];
}
class eT extends m.Ay.PersistedStore {
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
        ex = e ?? ey;
    }
    getState() {
        return ex;
    }
    getLastSeenEmojiByGuild(e) {
        return ex.lastSeenNewlyAddedEmojiIds[e];
    }
    isNewerThanLastSeen(e, t) {
        if (null == e || null == t) return !1;
        let n = this.getLastSeenEmojiByGuild(e);
        if (null == n || eC.default.compare(t, n.id) > 0) return !0;
        {
            let e = e_()(n.lastSeen);
            return e_()().isBefore(e.add(2, "weeks")) && !n.acknowledged;
        }
    }
}
let eS = new eT(eN.h, {
    LOGOUT: function () {
        ((ex = ey), (ej = {}));
    },
    NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = ej[t] ?? ex.lastSeenNewlyAddedEmojiIds[t];
        null == i || 0 > eC.default.compare(i.id, n)
            ? (ej[t] = { id: n, lastSeen: Date.now(), acknowledged: !0 })
            : (ej[t] = { ...i, acknowledged: !0 });
    },
    NEWLY_ADDED_EMOJI_SEEN_PENDING: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = ej[t] ?? ex.lastSeenNewlyAddedEmojiIds[t];
        (null == i || 0 > eC.default.compare(i.id, n)) && (ej[t] = { id: n, lastSeen: Date.now(), acknowledged: !1 });
    },
    NEWLY_ADDED_EMOJI_SEEN_UPDATED: eO,
    CLEAR_CACHES: function () {
        ((ex = ey), eO());
    },
    CONNECTION_CLOSED: eO,
});
var eb = n(451731),
    eR = n(850992),
    ev = n(887695),
    eL = n(613412),
    eP = n(462887),
    eM = n(939249),
    eD = n(696986),
    ew = n(736653),
    ek = n(139286),
    eU = n(976860),
    eG = n(71393),
    eF = n(384684),
    eJ = n(985242),
    eV = n(652215),
    eK = n(746080),
    eB = n(196404);
function eH(e) {
    let t,
        { onClose: i, guildId: s, emojiId: r } = e,
        a = ((t = (0, ew.Ay)()), (0, eP.q)(t) ? n(454333) : n(674463)),
        { analyticsLocations: o } = (0, y.Ay)(N.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, ek.A)({
        type: eL.ImpressionTypes.MODAL,
        name: eL.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: { location_stack: o, emoji_guild_id: s, emoji_id: r ?? null },
    });
    let c = (0, m.bG)([eG.A], () => eG.A.getGuild(s)),
        u = (0, m.bG)([eF.A], () => null != s && eF.A.getUserSubscriptionRoles(s).size > 0),
        d = u ? V.intl.string(V.t.GoLM9z) : V.intl.formatToPlainString(V.t["h0u/Hi"], { serverName: c?.name }),
        f = u ? V.intl.string(V.t.PjZ7Db) : V.intl.string(V.t.p8FG1D);
    return (0, l.jsxs)("div", {
        className: eB.kL,
        children: [
            (0, l.jsx)("div", { className: eB.Tp }),
            (0, l.jsxs)("div", {
                className: eB.Qs,
                children: [
                    (0, l.jsx)(eM.D, {
                        className: eB.b,
                        "aria-label": V.intl.string(V.t.cpT0Cq),
                        onClick: i,
                        children: (0, l.jsx)(U.XSmallIcon, {
                            size: "xs",
                            color: "currentColor",
                            "aria-label": V.intl.string(V.t.cpT0Cq),
                            className: eB.yP,
                        }),
                    }),
                    (0, l.jsx)("img", { alt: "", src: a, className: eB.Tn }),
                    (0, l.jsx)(eD.h, { size: 22 }),
                    (0, l.jsx)(L.D, {
                        color: "text-strong",
                        variant: "heading-lg/semibold",
                        className: eB.wx,
                        children: V.intl.string(V.t.cBjkcx),
                    }),
                    (0, l.jsx)(eD.h, { size: 4 }),
                    (0, l.jsx)(M.E, {
                        color: "text-default",
                        variant: "body-md/normal",
                        className: eB.h_,
                        children: d,
                    }),
                    (0, l.jsx)(eD.h, { size: 24 }),
                    (0, l.jsx)(eJ.A, {
                        text: f,
                        onClick: function () {
                            (0, eU.pX)(eV.BVt.CHANNEL(s, eK.VV.ROLE_SUBSCRIPTIONS), { sourceLocationStack: o });
                        },
                    }),
                ],
            }),
        ],
    });
}
var eW = n(450510),
    eX = n(778705),
    ez = n(253932),
    eY = n(808728),
    eZ = n(129230),
    e$ = n(240248),
    eq = n(822123),
    eQ = n(734057),
    e0 = n(309010),
    e1 = n(690521),
    e2 = n(818645),
    e3 = n(316884),
    e4 = n(307731),
    e5 = n(698279);
function e8(e) {
    let { intention: t, containerWidth: n, rowSize: i, isBurstReaction: s, analyticsObject: l } = e,
        r = eQ.A.getChannel(e0.Ay.getChannelId()),
        a = r?.getGuildId(),
        o =
            t === e4.EmojiIntention.REACTION
                ? j.Ay.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice()
                : j.Ay.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        c = null != r ? j.Ay.getDisambiguatedEmojiContext(r.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        u =
            t === e4.EmojiIntention.REACTION
                ? j.Ay.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems
                : j.Ay.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        d = o.slice(0, u),
        m = null != a ? j.Ay.getGuildEmoji(a) : [],
        f = j.Ay.getDisambiguatedEmojiContext(r?.getGuildId()).getCustomEmoji(),
        { topEmojis: E, newlyAddedEmojis: I } = (0, e3.b)({ guildId: r?.getGuildId(), pickerIntention: t }),
        { visibleTopEmojis: h, visibleNewlyAddedEmojis: g } = (0, e2.W)({
            topEmojis: E,
            newlyAddedEmojis: I,
            rowSize: i,
        });
    C.Ay.trackWithMetadata(
        t === e4.EmojiIntention.REACTION ? eV.HAw.REACTION_PICKER_OPENED : eV.HAw.EXPRESSION_PICKER_OPENED,
        {
            width: n,
            tab: e5.kx.EMOJI,
            badged: !1,
            num_expressions_favorites: c.length,
            num_animated_expressions_favorites: c.filter((e) => e?.animated).length,
            num_custom_expressions_favorites: c.filter(e1.Ay.isCustomEmoji).length,
            num_standard_expressions_favorites: c.filter((e) => null == e.id).length,
            num_expressions_frecent: d.length,
            num_animated_expressions_frecent: d.filter((e) => e?.animated).length,
            num_custom_expressions_frecent: d.filter(e1.Ay.isCustomEmoji).length,
            num_standard_expressions_frecent: d.filter((e) => null == e.id).length,
            num_current_guild_expressions: m.length,
            num_custom_expressions_total: f.size,
            num_expressions_top_server: h.length,
            num_animated_expressions_top_server: h.filter((e) => e.animated).length,
            num_expressions_newly_added: g.length,
            num_animated_expressions_newly_added: g.filter((e) => e.animated).length,
            ...(t === e4.EmojiIntention.REACTION && { is_burst: s }),
            ...(null != l && { location_object: l }),
        },
    );
}
var e6 = n(206248),
    e9 = n(423814),
    e7 = n(77528),
    te = n(783420),
    tt = n(448645);
let tn = { object: eV.ZSU.BUTTON_CTA, section: eV.JJy.SUPER_REACTION_PICKER };
function ti(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: i } = e,
        s = V.intl.string(V.t.eikz43),
        r = (0, e7.V)(),
        a = (0, e9.O)(),
        o = r?.subscriptionTrial,
        c = null != o || null != a,
        u = o?.skuId ?? eE.pe.TIER_2,
        d = c
            ? null != a
                ? V.intl.formatToPlainString(V.t.bkQ4bH, { percent: a.discount.amount })
                : (0, tt.FY)({ intervalType: o?.interval, intervalCount: o?.intervalCount })
            : V.intl.string(V.t.sEAnVH);
    return (0, l.jsx)(te.A, {
        subscriptionTier: u,
        premiumModalAnalyticsLocation: tn,
        onSubscribeModalClose: (e) => {
            e && i();
        },
        children: (e) => {
            let { onClick: r } = e;
            return (0, l.jsx)(e6.H, {
                targetElementRef: t,
                shouldShow: n,
                onRequestClose: i,
                position: "bottom",
                assetUrl: "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
                disableMediaViewer: !0,
                badge: c ? { type: "free_trial", variant: "expressive" } : void 0,
                title: V.intl.string(V.t.N4SCJ0),
                body: s,
                action: { text: d, variant: "expressive", icon: R.NitroWheelIcon, onClick: r },
            });
        },
    });
}
var ts = n(200589),
    tl = n(435558),
    tr = n.n(tl),
    ta = n(837381),
    to = n(460905),
    tc = n(775602),
    tu = n(713517),
    td = n(329921),
    tm = n(938612),
    tf = n(342379);
function tE(e) {
    let { onClick: t, listItemId: n } = e,
        i = V.intl.string(J.default["3D0GLv"]),
        s = (0, ta.rm)(n),
        [r, a] = (0, G.kn)([f.M.DEFAULT_EMOJIS_PACKS_DISCOVERY_DOT]),
        c = r === f.M.DEFAULT_EMOJIS_PACKS_DISCOVERY_DOT;
    return (0, l.jsx)("div", {
        className: tm.nM,
        children: (0, l.jsxs)("div", {
            className: tm.Jn,
            children: [
                (0, l.jsx)(w.m, {
                    ariaHidden: !0,
                    position: "right",
                    text: i,
                    children: (0, l.jsx)(eM.D, {
                        ...s,
                        "aria-label": c ? `${i}, ${V.intl.string(V.t.y2b7CA)}` : i,
                        className: o()(tm.x6, { [tf.Bj]: !c }),
                        "data-show-discovery": c,
                        onClick: function () {
                            (c && a(F.i.TAKE_ACTION), t());
                        },
                        children: (0, l.jsx)(R.NitroWheelIcon, {
                            size: "md",
                            color: "currentColor",
                            className: c ? void 0 : tf.Yl,
                        }),
                    }),
                }),
                c && (0, l.jsx)(td.N, { className: tm.aW, size: "md", cutout: "base-lower" }),
            ],
        }),
    });
}
var tI = n(318845),
    th = n(407698),
    tg = n(941971),
    tp = n(531685),
    tA = n(406810),
    t_ = n(27232),
    tN = n(369606),
    tC = n(413249),
    ty = n(141060),
    tx = n(687966),
    tj = n(115979),
    tO = n(524501),
    tT = n(926268),
    tS = n(138134),
    tb = n(732139);
let tR = r.memo(function (e) {
    let { categoryId: t, ...n } = e,
        i = (function (e) {
            switch (e) {
                case tb.R2.RECENT:
                    return tA.ClockIcon;
                case tb.R2.FAVORITES:
                    return t_.StarIcon;
                case tb.R2.TOP_GUILD_EMOJI:
                    return tN.TrophyIcon;
                case tb.R2.PEOPLE:
                    return to.ReactionIcon;
                case tb.R2.NATURE:
                    return tC.NatureIcon;
                case tb.R2.FOOD:
                    return ty.FoodIcon;
                case tb.R2.ACTIVITY:
                    return tx.GameControllerIcon;
                case tb.R2.TRAVEL:
                    return tj.BicycleIcon;
                case tb.R2.OBJECTS:
                    return tO.ObjectIcon;
                case tb.R2.SYMBOLS:
                    return tT.HeartIcon;
                case tb.R2.FLAGS:
                    return tS.FlagIcon;
                case tb.R2.PREMIUM_UPSELL:
                    return R.NitroWheelIcon;
                default:
                    return;
            }
        })(t);
    return null == i ? null : (0, l.jsx)(i, { color: "currentColor", ...n });
});
var tv = n(724511),
    tL = n(115560),
    tP = n(7584),
    tM = n(526292),
    tD = n(711014),
    tw = (((i = {})[(i.EMOJI = 0)] = "EMOJI"), (i[(i.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"), i);
let tk = [e4.Am.DISALLOW_EXTERNAL, e4.Am.DISALLOW_CUSTOM];
var tU = (((s = {})[(s.PREMIUM = 0)] = "PREMIUM"), (s[(s.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), s);
let tG = "expression-guild-",
    { itemIdForIndex: tF } = (0, tI.J)(tG),
    tJ = `${tG}view-emoji-packs`,
    tV = (0, e$.xI)(E.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    tK = (0, e$.xI)(E.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    tB = (0, e$.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    tH = (0, e$.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    tW = (0, e$.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    tX = (0, e$.xI)(tf.__invalid_unicodeCategoryShortcutHeight),
    tz = (0, e$.xI)(E.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    tY = (0, e$.xI)(E.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    tZ = tB + tK + 2 * tW,
    t$ = tz + 2 * tY,
    tq = tV + tK,
    tQ = tq + t$,
    t0 = tB + tH + 2 * tW,
    t1 = tB + 2 * tW + 2 * tK + tz;
function t2(e) {
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
        { isHoveringOrFocusing: f } = (0, tu.A)(m),
        E = (0, ta.rm)(tF(n)),
        I = a.type === tb.s.GUILD || a.type === tb.s.PACK ? null : a.id,
        h = t === n,
        g = !d && u,
        p = a.type === tb.s.GUILD ? a.guild : null,
        A = a.type === tb.s.PACK ? a.pack : null,
        _ = (0, l.jsxs)(eM.D, {
            innerRef: m,
            ...E,
            "aria-label": a.type === tb.s.PACK ? a.pack.name : (0, eq.wt)(a, p),
            className: o()({
                [tf.ZG]: null != p,
                [tf.td]: null != A,
                [tf.Q0]: null != A && h,
                [tf.Bj]: null == p && null == A,
                [tf.s6]: null == p && null == A && h,
                [tf.xg]: a.type === tb.s.RECENT,
            }),
            onClick: () => {
                (null != p &&
                    eZ.default.track(eV.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: i?.location,
                        tab: e5.kx.EMOJI,
                        guild_id: p.id,
                    }),
                    c(n));
            },
            children: [
                (0, l.jsx)("div", {
                    className: tf.a$,
                    children: (0, l.jsx)(tg.A, { hovered: f, selected: h, size: "small" }),
                }),
                a.type === tb.s.GUILD
                    ? (0, l.jsx)(tv.A, { guild: a.guild, isSelected: h, shouldAnimate: g, isLocked: a.isNitroLocked })
                    : null,
                null != A
                    ? (0, l.jsx)(ec.A, {
                          alt: "",
                          animated: !d,
                          shouldAnimate: g,
                          className: tf.ty,
                          emojiId: A.representativeEmojiId,
                      })
                    : null,
                null == p && null != I
                    ? (0, l.jsx)(tR, { categoryId: I, className: tf.Yl, height: tB, width: tB, size: "custom" })
                    : null,
            ],
        }),
        N = s[n + 1],
        C = s[n - 1],
        y = null != A && null != C && C.type !== tb.s.PACK,
        x = null != A && N?.type !== tb.s.PACK,
        j = null != N && a.type === tb.s.GUILD && N.type !== tb.s.GUILD;
    return null != p
        ? (0, l.jsxs)(r.Fragment, {
              children: [
                  (0, l.jsx)(th.Q, { guild: p, children: _ }),
                  j ? (0, l.jsx)("hr", { className: tf.ny }, "separator") : null,
              ],
          })
        : null != A
          ? (0, l.jsxs)(r.Fragment, {
                children: [
                    y ? (0, l.jsx)("hr", { className: tf.ny }) : null,
                    (0, l.jsx)(w.m, { ariaHidden: !0, position: "right", text: A.name, children: _ }),
                    x ? (0, l.jsx)("hr", { className: tf.ny }) : null,
                ],
            })
          : _;
}
let t3 = (e) => {
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
        E = eR.Om.useStore((e) => e.activeCategoryIndex),
        I = (function (e) {
            let { emojiListRef: t } = e,
                n = (0, Y.RQ)((e) => e.searchQuery),
                i = r.useCallback((e) => t.current?.scrollToSectionTop(e), [t]);
            return r.useCallback(
                (e) => {
                    "" !== n ? ((0, Y.Ri)(""), eR.Om.setActiveCategoryIndex(e)) : i(e);
                },
                [i, n],
            );
        })({ sectionDescriptors: i, emojiListRef: n }),
        h = (0, p.p)(),
        g = (0, eq.ss)(s, a, { guildId: a?.guild_id ?? c }),
        A = r.useMemo(() => (0, ts.t)(u ? (0, eq.CQ)() : g, d), [g, d, u]),
        _ = r.useRef(null),
        N = (0, m.bG)([tp.A], () => tp.A.isFocused()),
        C = (0, m.bG)([tc.Ay], () => tc.Ay.useReducedMotion, []),
        y = r.useMemo(
            () =>
                tr().memoize(
                    (e, t) => {
                        let n = A[t];
                        if (null != n)
                            return (0, l.jsx)(
                                t2,
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
        j = null != f ? t1 : 0,
        O = r.useMemo(() => {
            if (null != f)
                return function () {
                    return (0, l.jsx)(tE, { listItemId: tJ, onClick: f }, "view-emoji-packs");
                };
        }, [f]),
        T = r.useCallback(
            (e, t) => {
                let n = A[t];
                if (n.type === tb.s.RECENT) return tZ;
                if (n.type === tb.s.PACK) {
                    let e = A[t - 1],
                        n = A[t + 1];
                    return tq + (Number(null != e && e.type !== tb.s.PACK) + Number(n?.type !== tb.s.PACK)) * t$;
                }
                if (n.type === tb.s.GUILD) {
                    let e = A[t + 1];
                    return null != e && e.type !== tb.s.GUILD ? tQ : tq;
                }
                return t0;
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
                s.type === tb.s.GUILD || s.type === tb.s.PACK
                    ? ((t += 1), (n += 1))
                    : s.type === tb.s.UNICODE
                      ? (i += 1)
                      : ((e += 1), (t += 1));
            });
            let s = [e, n, i],
                l = A.some((e) => e.type === tb.s.PACK) ? (A[0]?.type === tb.s.PACK ? 1 : 2) : 0,
                r = j + tZ + t * tq + tQ + l * t$;
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
                null == t || (e + t.height - tz >= R ? P(!1) : P(!0));
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
                let i = L ? tX : 0;
                if (n.type === tb.s.RECENT) return t ? 0 : tH;
                if (n.type === tb.s.PACK) return t ? i : tK;
                if (n.type === tb.s.GUILD) {
                    let n = A[e + 1];
                    return null != n && n.type !== tb.s.GUILD ? (t ? tz + -2 * tY + tK + i : tK) : t ? i : tK;
                }
                return t ? tK + i : 2 * tK;
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
    return (0, l.jsx)(tI.A, {
        categoryListRef: _,
        expressionsListRef: n,
        className: t,
        store: eR.Om,
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
        itemIdPrefix: tG,
        renderListHeader: O,
        listHeaderHeight: j,
        children: (e) =>
            S >= 7 &&
            (0, l.jsx)(
                eM.D,
                {
                    "aria-hidden": !L,
                    "aria-label": V.intl.string(V.t.dT0ctw),
                    className: o()(tf.KB, { [tf.h_]: !L }),
                    tabIndex: L ? 0 : -1,
                    onClick: () => D(e),
                    children: (0, l.jsx)(to.ReactionIcon, {
                        size: "custom",
                        color: "currentColor",
                        height: tB,
                        width: tB,
                    }),
                },
                U,
            ),
    });
};
var t4 = n(860197);
let t5 = function (e) {
    let { markAsDismissed: t } = e;
    return (0, l.jsxs)(M.E, {
        variant: "body-xs/medium",
        color: "text-default",
        className: t4.iE,
        children: [
            (0, l.jsx)(tT.HeartIcon, { size: "md", color: "currentColor", className: t4.Kk }),
            (0, l.jsx)("div", {
                className: t4.Qs,
                children: (0, l.jsx)(M.E, { variant: "body-xs/normal", children: V.intl.string(V.t.xdRf69) }),
            }),
            (0, l.jsx)(eM.D, {
                onClick: () => t(F.i.UNKNOWN),
                children: (0, l.jsx)(U.XSmallIcon, { size: "md", color: "currentColor", className: t4.VN }),
            }),
        ],
    });
};
var t8 = n(120692),
    t6 = n(717421),
    t9 = n(343032),
    t7 = n(683063),
    ne = n(748798);
let nt = { tension: 750, mass: 2.5, friction: 70 };
function nn(e) {
    let { checked: t, onClick: n, buttonRef: i } = e,
        s = (0, m.bG)([tc.Ay], () => tc.Ay.useReducedMotion),
        a = q.default.getCurrentUser(),
        c = null != a && !(0, tt.TW)(a),
        u = c ? [] : [f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP],
        [d, E] = (0, G.kn)(u),
        [I, h] = r.useState(!1),
        [g, p] = (0, t6.z)(() => ({})),
        A = (0, t8.animated)(t9.SuperReactionIcon);
    r.useEffect(() => {
        let e = d === f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (E(F.i.DISMISS), setTimeout(() => h(e), 200));
    }, [d, E]);
    let _ = I ? V.intl.string(V.t["Osi/uy"]) : t && !c ? V.intl.string(V.t["5cRA/b"]) : V.intl.string(V.t.buV4av),
        N = I ? V.intl.string(V.t.ORK94p) : void 0;
    return (0, l.jsx)(t7.u, {
        position: "top",
        title: N,
        body: _,
        asset: (0, l.jsx)(R.NitroWheelIcon, { size: "md", color: "currentColor" }),
        assetSize: 20,
        forceOpen: I,
        children: (0, l.jsx)(eM.D, {
            innerRef: i,
            "aria-label": _,
            "aria-pressed": t,
            onClick: function () {
                (p({ from: { rotate: t ? "360deg" : "0deg" }, to: { rotate: t ? "0deg" : "360deg" }, config: nt }),
                    n?.(),
                    h(!1));
            },
            focusProps: { enabled: !1 },
            className: o()(ne.Pf, { [ne.wM]: t }),
            children: (0, l.jsx)(A, {
                style: s ? void 0 : g,
                size: "custom",
                width: 20,
                height: 20,
                color: t ? "white" : "currentColor",
                className: ne.Kk,
            }),
        }),
    });
}
var ni = n(644508),
    ns = n(824832),
    nl = n(267102),
    nr = n(242812);
function na(e) {
    let { channel: t, closePopout: n } = e,
        i = r.useRef(null),
        s = r.useRef(0),
        [a, o] = r.useState(!1),
        [c, u] = r.useState(!1),
        d = (0, nl.Us)() === eV.BRT.OVERLAY,
        m = c || a,
        f = r.useCallback(
            async (e, i, l) => {
                (u(!0),
                    n(),
                    await (0, ni.f)({
                        userImage: { data: e, file: i, image: l },
                        guildId: t?.guild_id ?? null,
                        analyticsLocation: {
                            section: eV.JJy.EXPRESSION_PICKER,
                            page: t?.guild_id != null ? eV.liQ.GUILD_CHANNEL : eV.liQ.DM_CHANNEL,
                        },
                    }),
                    (s.current += 1),
                    u(!1));
            },
            [t, n],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(w.m, {
                asContainer: !0,
                text: d ? V.intl.string(V.t.RMbedC) : null,
                children: (0, l.jsx)(D.$, {
                    text: V.intl.string(V.t.iMJO37),
                    variant: "secondary",
                    onClick: function () {
                        (C.Ay.trackWithMetadata(eV.HAw.EXPRESSION_PICKER_ADD_EMOJI_CLICKED, {
                            guild_id: t?.guild_id ?? null,
                            channel_id: t?.id ?? null,
                            location_section: eV.JJy.EXPRESSION_PICKER,
                            location_page: t?.guild_id != null ? eV.liQ.GUILD_CHANNEL : eV.liQ.DM_CHANNEL,
                        }),
                            i.current?.activateUploadDialogue());
                    },
                    disabled: m || d,
                }),
            }),
            (0, l.jsx)("div", {
                className: nr.F,
                children: (0, l.jsx)(ns.Ay, { ref: i, onChange: f, setLoading: o, disabled: m }, s.current),
            }),
        ],
    });
}
n(667532);
var no = n(833272),
    nc = n(82495),
    nu = n(260762),
    nd = n(650583),
    nm = n(683829);
let nf = (0, eu.Ld)(),
    nE = no.A.convert.fromCodePoint("1f44f"),
    nI = (0, e$.xI)(E.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
function nh(e) {
    switch (no.A.convert.toCodePoint(e)) {
        case "1f3fb":
            return V.intl.string(V.t["BVK5b/"]);
        case "1f3fc":
            return V.intl.string(V.t.xJWOK8);
        case "1f3fd":
            return V.intl.string(V.t["MB+T5g"]);
        case "1f3fe":
            return V.intl.string(V.t.MODud2);
        case "1f3ff":
            return V.intl.string(V.t["0uzqsc"]);
        default:
            return V.intl.string(V.t.bGN1ow);
    }
}
let ng = (e) => {
    let { fade: t, surrogate: n, onClick: i, delay: s, index: r } = e,
        a = (0, ta.rm)(`item-${r}`),
        o = e1.Ay.getURL(nE + n),
        c = (0, t6.z)({ opacity: 1, from: { opacity: +!t }, delay: s }, "animate-always");
    return (0, l.jsx)(eM.D, {
        ...a,
        role: "option",
        "aria-selected": 0 === r,
        onClick: () => i(n),
        className: nm.B6,
        children: (0, l.jsx)(t8.animated.div, {
            "aria-label": nh(n),
            className: nm.g4,
            style: { backgroundImage: `url("${o}")`, ...c },
        }),
    });
};
function np(e) {
    let { id: t, selectedSurrogate: n, onClick: i } = e,
        s = (0, nu.A)("diversity"),
        a = (0, t6.z)({ height: (nI + 14) * (tP.W$.length + 1), from: { height: nI + 14 }, config: { duration: 125 } }),
        o = r.useRef(s);
    r.useEffect(() => {
        o.current.focusFirstVisibleItem();
    }, []);
    let c = ["", ...tP.W$];
    return (
        tr().remove(c, (e) => e === n),
        c.unshift(n),
        (0, l.jsx)(ta.hD, {
            navigator: s,
            children: (0, l.jsx)(ta.PR, {
                children: (e) => {
                    let { ref: n, ...s } = e;
                    return (0, l.jsx)(t8.animated.div, {
                        ...s,
                        id: t,
                        ref: n,
                        className: nm.J6,
                        style: a,
                        role: "listbox",
                        children: c.map((e, t) =>
                            (0, l.jsx)(ng, { index: t, fade: 0 !== t, delay: 20 * t, surrogate: e, onClick: i }, t),
                        ),
                    });
                },
            }),
        })
    );
}
let nA = function (e) {
    let { searchBarRef: t, selectedSurrogate: n, className: i } = e,
        s = e1.Ay.getURL(nE + n),
        [a, c] = r.useState(!1),
        u = (0, nc.A)(null, () => c(!1)),
        d = r.useRef(null);
    return (0, l.jsxs)("div", {
        ref: u,
        className: o()(nm.fx, i),
        children: [
            (0, l.jsx)(eM.D, {
                innerRef: d,
                className: nm.Dj,
                onClick: function () {
                    c(!0);
                },
                "aria-label": V.intl.formatToPlainString(V.t["2SfnMp"], { skinTone: nh(n) }),
                "aria-haspopup": !0,
                "aria-expanded": a,
                "aria-controls": nf,
                tabIndex: a ? -1 : 0,
                children: (0, l.jsx)("div", { className: nm.g4, style: { backgroundImage: `url("${s}")` } }),
            }),
            a
                ? (0, l.jsx)("div", {
                      onKeyDown: function (e) {
                          e.key === nd.dh.ESCAPE
                              ? (e.stopPropagation(), c(!1), null != d.current && d.current.focus())
                              : "Tab" === e.key && c(!1);
                      },
                      children: (0, l.jsx)(np, {
                          id: nf,
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
var n_ = n(462180),
    nN = n(602034),
    nC = n(683438);
let ny = r.memo(function (e) {
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
        d = (0, Y.RQ)((e) => e.searchQuery),
        [m, f, E] = eR.Om.useStore((e) => [e.inspectedExpressionPosition, e.searchPlaceholder, e.hasInteracted], n_.x),
        I = r.useCallback(
            (e) => {
                (eR.Om.setActiveCategoryIndex("" === e ? 0 : -1),
                    eR.Om.setInspectedExpressionPosition(0, 0),
                    eR.Om.setSearchPlaceholder(null),
                    (0, Y.Ri)(e),
                    t.current?.scrollTo(0));
            },
            [t],
        ),
        h = r.useCallback(() => {
            I("");
        }, [I]);
    return (
        r.useImperativeHandle(c, () => ({ focus: () => u.current?.focus() })),
        (0, l.jsx)(nC.I, {
            autoFocus: a,
            query: d,
            ref: u,
            placeholder: f ?? o,
            onClear: h,
            onKeyDown: function (e) {
                switch (e.key) {
                    case nd.dh.ARROW_LEFT:
                    case nd.dh.ARROW_RIGHT:
                    case nd.dh.ARROW_UP:
                    case nd.dh.ARROW_DOWN:
                        document.activeElement !== e.target && e.preventDefault();
                }
                i(e);
            },
            onFocus: s,
            onChange: I,
            inputProps: {
                role: "combobox",
                "aria-label": V.intl.string(V.t.tCauZX),
                "aria-haspopup": "grid",
                "aria-autocomplete": "list",
                "aria-controls": n,
                "aria-expanded": !0,
                ...(E ? { "aria-activedescendant": (0, nN.Aq)(n, m.columnIndex, m.rowIndex) } : void 0),
            },
        })
    );
});
var nx = n(381575);
let nj = function (e) {
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
                (0, l.jsx)(ny, {
                    emojiListRef: r,
                    gridNavigatorId: tb.lq,
                    onKeyDown: a,
                    ref: d,
                    onFocus: c,
                    autoFocus: u,
                    defaultSearchPlaceholder: (0, eq.wT)(i, f),
                }),
                i === e4.EmojiIntention.REACTION ? (0, l.jsx)(nn, { checked: f, onClick: E, buttonRef: I }) : null,
                n ?? (0, l.jsx)(nA, { searchBarRef: d, className: nx.fx, selectedSurrogate: m }),
                i !== e4.EmojiIntention.NO_CUSTOM_EMOJI && g ? (0, l.jsx)(na, { channel: t, closePopout: p }) : null,
            ],
        });
    return (0, l.jsx)("div", { className: o()(nx.wx, s), children: null != h ? h(A) : A });
};
var nO = n(371680),
    nT = n(413599),
    nS = n(486020),
    nb = n(977566);
function nR(e) {
    return null != e && "animated" in e;
}
let nv = r.memo(function (e) {
    let t,
        i,
        { className: s, emojiGrid: a, guildId: o, pickerIntention: c, channel: u } = e,
        d = eR.Om.useStore((e) => e.inspectedExpressionPosition),
        f = r.useMemo(() => {
            let { rowIndex: e, columnIndex: t } = d;
            return a[e]?.[t];
        }, [a, d]);
    switch (f?.type) {
        case tw.EMOJI:
            t = f?.emoji;
            break;
        case tw.EXPAND_OR_COLLAPSE_EMOJIS:
            t = { type: "EXPAND_OR_COLLAPSE_EMOJI", guildId: f?.guildId, allNamesString: f?.name };
            break;
        default:
            t = null;
    }
    let E = (0, m.bG)([eG.A], () => (null !== t && t.type === O.i.GUILD ? eG.A.getGuild(t.guildId) : null), [t]),
        I = (0, m.bG)([et.A], () => (null !== t && t.type === O.i.PACK ? et.A.getPack(t.packId) : null), [t]),
        h = (0, m.bG)([tp.A], () => tp.A.isFocused()),
        g = (0, m.bG)([tc.Ay], () => tc.Ay.useReducedMotion, []),
        p = ez.Sf.useSetting(),
        A = (0, eq.O7)(o, nR(t) ? t : null),
        _ = (0, m.bG)([j.Ay], () => j.Ay.expandedSectionsByGuildIds),
        { newlyAddedEmojis: N } = (0, e3.A)(o, c),
        C = f?.type === tw.EMOJI ? f.subCategory : tb.tm.NONE;
    if (
        (r.useEffect(() => {
            let e = Date.now();
            return () => {
                Date.now() - e >= 250 &&
                    nR(t) &&
                    C !== tb.tm.NONE &&
                    (C === tb.tm.NEWLY_ADDED_EMOJI &&
                        null !== t &&
                        t.type === O.i.GUILD &&
                        (0, eb.mz)(t.guildId, N[0].id),
                    null != d.source &&
                        (0, eq.yB)({
                            emoji: t,
                            subCategory: C,
                            position: f.columnIndex + 1,
                            newlyAddedHighlight: C === tb.tm.NEWLY_ADDED_EMOJI && eS.isNewerThanLastSeen(o, t.id),
                        }));
            };
        }),
        null == t)
    )
        return null;
    let y = (function (e, t) {
            let { allowAnimatedEmoji: i, sectionsExpandedFromThreeRows: s, theme: r } = t;
            if (nR(e)) {
                let t = null != e.id ? nS.Ay.getEmojiURL({ id: e.id, animated: i && e.animated, size: 28 }) : e.url;
                return "" === t
                    ? (0, l.jsx)(M.E, {
                          variant: "body-md/normal",
                          className: nb.J_,
                          children: "surrogates" in e ? e.surrogates : null,
                      })
                    : (0, l.jsx)("img", { alt: (0, e1.N)(e) ?? "", src: t, className: nb.Zg });
            }
            if ("EXPAND_OR_COLLAPSE_EMOJI" !== e.type) return null;
            {
                let t = n(619508),
                    i = n(404828),
                    a = n(600003),
                    o = n(318121);
                return s.has(e.guildId)
                    ? (0, l.jsx)("img", { className: nb.Kk, src: (0, eP.M)(r) ? a : o, alt: "" })
                    : (0, l.jsx)("img", { className: nb.Kk, src: (0, eP.M)(r) ? t : i, alt: "" });
            }
        })(t, { allowAnimatedEmoji: p, sectionsExpandedFromThreeRows: _, theme: nT.A.theme }),
        x =
            null != E
                ? (0, l.jsx)(tv.A, { className: nb.__invalid_guildIcon, guild: E, shouldAnimate: !g && h })
                : null;
    i =
        "EXPAND_OR_COLLAPSE_EMOJI" === t.type
            ? _.has(t.guildId)
                ? V.intl.string(V.t["/K2RDH"])
                : V.intl.string(V.t.NZI2Zk)
            : (0, e1.N)(t);
    let T = (function (e) {
        let { inspectedEmoji: t, guild: n, pack: i } = e,
            s = nR(t);
        return null != n && s
            ? V.intl.format(V.t.KFW2aY, { guildName: n.name })
            : null != i && s
              ? V.intl.format(J.default.VEfeux, {
                    packName: (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(R.NitroWheelIcon, {
                                size: "custom",
                                width: 10,
                                height: 10,
                                color: "currentColor",
                                className: nb.C5,
                                "aria-label": V.intl.string(J.default.leUgZw),
                            }),
                            " ",
                            i.name,
                        ],
                    }),
                })
              : null;
    })({ inspectedEmoji: t, channel: u, guildId: o, intention: c, guild: E, pack: I });
    return (0, l.jsx)(nO.A, {
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
var nL = n(607399),
    nP = n(123292),
    nM = n(765178),
    nD = n(537652),
    nw = n(962125),
    nk = n(240864),
    nU = n(286509),
    nG = n(89366),
    nF = n(739053),
    nJ = n(82498),
    nV = n(202639),
    nK = n(414872),
    nB = n(521440),
    nH = n(304072),
    nW = n(189551),
    nX = n(594061),
    nz = n(771104),
    nY = n(147421),
    nZ = n(723702),
    n$ = n(140735),
    nq = n(194261),
    nQ = n(703413);
let n0 = (e) => {
    let { src: t, alt: n, size: i, "aria-label": s, className: a } = e,
        c = r.useRef(null),
        u = r.useRef(!1),
        d = u.current ? nQ.S : nQ.Y;
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
                          ((u.current = !0), c.current.classList.remove(nQ.Y), c.current.classList.add(nQ.S));
                  });
              },
    });
};
var n1 = n(955388);
let n2 = tr().memoize(
        (e) =>
            `${e * e4.he.NonDiversityPerRow}px ${e * Math.ceil(tP.Ay.numNonDiversitySprites / e4.he.NonDiversityPerRow)}px`,
    ),
    n3 = tr().memoize(
        (e) => `${e * e4.he.DiversityPerRow}px ${e * Math.ceil(tP.Ay.numDiversitySprites / e4.he.DiversityPerRow)}px`,
    ),
    n4 = r.memo(function (e) {
        let { emoji: t, size: i, surrogateCodePoint: s, allowAnimatedEmoji: a, "aria-label": c, isLocked: u } = e,
            d = (() => {
                if (!t.useSpriteSheet) {
                    let e = null == t.id ? t.url : nS.Ay.getEmojiURL({ id: t.id, animated: a && t.animated, size: 48 });
                    return null != e
                        ? (0, l.jsx)(n0, {
                              className: n1.N1,
                              "aria-label": c,
                              src: e,
                              size: i,
                              alt: (0, e1.N)(t) ?? "",
                          })
                        : null;
                }
                return (0, l.jsx)("div", {
                    className: o()(n1.xA, { [n1.N1]: u }),
                    style: (function (e, t, i) {
                        let s, l, r;
                        if (!e.useSpriteSheet) return;
                        let a = null != e.index ? e.index : 0;
                        e.hasDiversity
                            ? ((s = n(12303)(`./spritesheet-${t}-${i}.png.js`).default),
                              (l = n3(i)),
                              (r = e4.he.DiversityPerRow))
                            : ((s = n(145519)(`./spritesheet-emoji-${i}.png.js`).default),
                              (l = n2(i)),
                              (r = e4.he.NonDiversityPerRow));
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
                    children: (0, l.jsx)(n$.A, { children: c }),
                });
            })();
        return (0, l.jsxs)(r.Fragment, {
            children: [
                d,
                u
                    ? (0, l.jsx)("div", {
                          className: n1.iD,
                          style: { width: i, height: i },
                          children: (0, l.jsx)(nq.LockIcon, { size: "xs", color: "currentColor", className: n1.fi }),
                      })
                    : null,
            ],
        });
    });
var n5 = n(537911);
function n8(e) {
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
        N = (0, m.bG)([eG.A], () => (n.type === O.i.GUILD ? eG.A.getGuild(n.guildId) : void 0), [n]);
    return (0, l.jsx)(ea.vN, {
        children: (0, l.jsx)("button", {
            ..._,
            className: o()(n5._X, { [n5.lG]: s, [n5.Lh]: r, [n5.Bx]: a, [g ?? ""]: a, [n5.TV]: u }),
            "data-type": ed.g.EMOJI,
            "data-id": n.id,
            "data-name": n.name,
            "data-surrogates": "surrogates" in n ? n.surrogates : null,
            "data-animated": n.animated ? "true" : null,
            ref: A,
            children: (0, l.jsx)(n4, {
                "aria-label":
                    ((t = (0, e1.N)(n)),
                    (N?.name != null &&
                        (t = V.intl.formatToPlainString(V.t["nXv4/B"], { names: t, guildName: N.name })),
                    i)
                        ? V.intl.formatToPlainString(V.t["9FI9Z0"], { names: t })
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
function n6(e) {
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
        [b, R] = r.useState(""),
        v = (0, m.bG)([tc.Ay], () => tc.Ay.useReducedMotion),
        L = (0, m.bG)([j.Ay], () => j.Ay.getDisambiguatedEmojiContext(o), [o]),
        P = r.useRef(null),
        { emoji: M, size: D, isDisabled: k, columnIndex: U } = t;
    function G() {
        d.current || f.current || c(t);
    }
    let { ref: F, tabIndex: J, onFocus: K, ...B } = g(U, a) ?? {},
        H =
            b !== `${U}:${a}`
                ? (0, l.jsx)(n8, {
                      ref: F,
                      emoji: M,
                      isFavorite: L.isFavoriteEmojiWithoutFetchingLatest(M),
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
                              null != P.current &&
                              null != T &&
                              null != y &&
                              !e.shiftKey &&
                              null != M.name &&
                              x &&
                              !v &&
                              N
                          ) {
                              let e = null == M.id ? tP.Ay.convertNameToSurrogate(M.name) : M.name,
                                  t = P.current.getBoundingClientRect();
                              ((t.x = T.x + (U + 1) * D), R(`${U}:${a}`), (0, nY.h)(y, e, M.id, t));
                          }
                          !(function (e) {
                              if ((e.stopPropagation(), d.current || f.current)) return;
                              let n = e.altKey;
                              (n &&
                                  !j.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(M) &&
                                  C(i),
                                  (0, eW.sF)(eW._2.FAVORITE_EMOJI_TOOLTIP),
                                  u(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n }));
                          })(e);
                      },
                      onContextMenu: function (e) {
                          (0, eo.L3)(e, async () => {
                              let { default: e } = await Promise.all([
                                  n.e(476662),
                                  n.e(912875),
                                  n.e(73500),
                                  n.e(496715),
                                  n.e(904774),
                                  n.e(446132),
                              ]).then(n.bind(n, 233503));
                              return (t) => (0, l.jsx)(e, { ...t, showFavoriteOnly: M.type === O.i.PACK });
                          });
                      },
                      tabIndex: J,
                      columnIndex: U,
                      rowIndex: a,
                      size: D,
                      surrogateCodePoint: I,
                      selectedItemClassName: h,
                      inNitroLockedSection: S,
                  })
                : null;
    return (0, r.createElement)(
        "li",
        { ...B, key: i, ref: P },
        E
            ? (0, l.jsx)(w.m, {
                  text: V.intl.formatToPlainString(V.t.glqNsf, { key: (0, nZ.cX)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: H,
              })
            : H,
    );
}
let n9 = (e) => {
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
        P = (0, ew.Ay)(),
        D = eR.Om.getState(),
        [w, k] = r.useState(D.inspectedExpressionPosition),
        [U, G] = (0, nH.A)(null, 300),
        F = r.useRef(null);
    (r.useEffect(
        () =>
            eR.Om.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => k(e),
            ),
        [],
    ),
        r.useEffect(() => {
            nX.bW.loadIfNecessary();
        }, []));
    let J = i === tb.as.LARGE,
        K = i === tb.as.MEDIUM;
    function B(e) {
        let t = `${e.rowIndex}c${e.columnIndex}`;
        switch (e.type) {
            case tw.EXPAND_OR_COLLAPSE_EMOJIS: {
                let { visibleRowIndex: n, columnIndex: i } = e,
                    c = w.rowIndex === n && w.columnIndex === i,
                    d = e.sectionCollapsedToThreeRows
                        ? c
                            ? (0, eP.M)(P)
                                ? R
                                : L
                            : (0, eP.M)(P)
                              ? x
                              : j
                        : c
                          ? (0, eP.M)(P)
                              ? b
                              : v
                          : (0, eP.M)(P)
                            ? T
                            : S,
                    I = V.intl.string(e.sectionCollapsedToThreeRows ? V.t.NZI2Zk : V.t["/K2RDH"]);
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
                        y = w.rowIndex === h && w.columnIndex === g;
                    function x() {
                        m.current || f.current || a(e);
                    }
                    return (0, r.createElement)(
                        "li",
                        { ...C, key: t },
                        (0, l.jsx)(ea.vN, {
                            children: (0, l.jsx)("button", {
                                "aria-label": d,
                                ref: p,
                                className: o()(n5._X, {
                                    [n5.lG]: J,
                                    [n5.Lh]: K,
                                    [n5.Bx]: y && !I,
                                    [A ?? ""]: y,
                                    [n5.TV]: U === t,
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
                        e.type !== tw.EXPAND_OR_COLLAPSE_EMOJIS ||
                            (t.stopPropagation(),
                            m.current ||
                                f.current ||
                                (s(e, { isFinalSelection: !0, toggleFavorite: !1 }),
                                (0, nW.G)(e.guildId),
                                e.sectionCollapsedToThreeRows || y(),
                                eZ.default.track(eV.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                    collapsed: e.sectionCollapsedToThreeRows,
                                    guild_id: e.guildId,
                                })));
                    },
                    icon: (0, l.jsx)("img", { className: n5.Kk, src: d, alt: "" }),
                    ariaLabel: I,
                    shouldShowRoundHighlight: !0,
                });
            }
            case tw.EMOJI: {
                let { columnIndex: n, visibleRowIndex: i } = e,
                    r = w.rowIndex === i && w.columnIndex === n;
                return (0, l.jsx)(
                    n6,
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
                        isMediumSize: K,
                        isLargeSize: J,
                        pulseItemKey: U,
                        setPulseItemKey: G,
                        showEmojiFavoriteTooltip: h,
                        messageId: _,
                        isBurstReaction: N,
                        rowPosition: F?.current?.getBoundingClientRect(),
                        inNitroLockedSection: C,
                    },
                    t,
                );
            }
        }
    }
    function H(e) {
        return (0, l.jsx)("ul", {
            ...d(E),
            className: o()(n5.ND, { [n5.HO]: J, [n5.X$]: K }),
            ref: F,
            children: e.map(B),
        });
    }
    if (p !== tb.s.TOP_GUILD_EMOJI) return H(t);
    let W = t.filter(
            (e) =>
                e.subCategory === tb.tm.TOP_GUILD_EMOJI ||
                (e.subCategory === tb.tm.NEWLY_ADDED_EMOJI &&
                    e.emoji.type === O.i.GUILD &&
                    !eS.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
        ),
        X = t.filter(
            (e) =>
                e.subCategory === tb.tm.NEWLY_ADDED_EMOJI &&
                e.emoji.type === O.i.GUILD &&
                eS.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id),
        );
    return 0 === X.length
        ? H(t)
        : (0, l.jsxs)("div", {
              className: n5.Ng,
              children: [
                  (0, l.jsx)("div", { className: o()(n5.V6, { [n5.$3]: 0 === W.length }), children: H(W) }),
                  (0, l.jsxs)("div", {
                      className: n5.bc,
                      children: [
                          (0, l.jsx)("div", {
                              className: o()(n5.eE, { [n5.eM]: 1 === X.length, [n5.Wk]: W.length > 0 }),
                              children: H(X),
                          }),
                          (0, l.jsxs)("div", {
                              className: o()(n5.lD, { [n5.EI]: J, [n5.qU]: K, [n5.Wk]: W.length > 0 }),
                              children: [
                                  (0, l.jsx)(nz.A, { foreground: n5.rI }),
                                  (0, l.jsx)(M.E, {
                                      variant: "body-xs/semibold",
                                      color: "text-overlay-light",
                                      children: V.intl.string(V.t.y2b7CA),
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
};
var n7 = n(618723);
let ie = (0, e$.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    it = (0, e$.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    ii = (0, e$.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    is = (0, e$.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    il = (0, e$.xI)(E.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    ir = (0, e$.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    ia = (0, e$.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    io = r.memo(function (e) {
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
            v = eR.Om.useStore((e) => e.activeCategoryIndex),
            L = (0, Y.RQ)((e) => e.searchQuery),
            P = ez.Sf.useSetting(),
            D = (0, m.bG)([q.default], () => q.default.getCurrentUser()),
            w = (0, Q.ki)(D),
            { location: k } = (0, p.p)(),
            { analyticsLocations: U } = (0, y.Ay)(),
            [G, F] = r.useState(0),
            [K, B] = r.useState(!1),
            {
                listPadding: H,
                renderRow: W,
                renderSection: X,
                renderSectionHeader: z,
                renderSectionFooter: Z,
                sectionMarginBottom: $,
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
                    S = r.useMemo(() => ("" !== n ? no.A.convert.toCodePoint(n) : ""), [n]),
                    b = r.useCallback(
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
                                    eZ.default.track(eV.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                        location: O.location,
                                        tab: e5.kx.EMOJI,
                                        collapsed: !s,
                                        guild_id: n.id,
                                    }),
                                f(i));
                        },
                        [O, t, f],
                    ),
                    P = r.useCallback((e) => {
                        let { columnIndex: t, visibleRowIndex: n } = e,
                            i = e.type === tw.EMOJI ? (0, e1.N)(e.emoji) : e.name;
                        (0 !== T.current && window.cancelAnimationFrame(T.current),
                            (T.current = window.requestAnimationFrame(() => {
                                (eR.Om.setInspectedExpressionPosition(t, n, ed.t.MOUSE_EVENT),
                                    eR.Om.setSearchPlaceholder(i),
                                    (T.current = 0));
                            })));
                    }, []),
                    M = (0, m.bG)([eW.HP], () => eW.HP.hasHotspot(eW._2.FAVORITE_EMOJI_TOOLTIP), []),
                    D = r.useMemo(
                        () =>
                            tr().memoize((e, t) => {
                                let n = i[e],
                                    r = d[t.sectionIndex];
                                return (0, l.jsx)(
                                    n9,
                                    {
                                        emojiDescriptors: n,
                                        emojiSize: s,
                                        surrogateCodePoint: S,
                                        onInspect: P,
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
                                        selectedItemClassName: n7.__invalid_selectedItem,
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
                        [i, d, s, S, P, a, E, I, h, g, A, M, _, N, C, j],
                    );
                r.useEffect(() => () => D.cache?.clear?.(), [D]);
                let w = r.useMemo(
                        () =>
                            tr().memoize((e) => {
                                let n = d[e];
                                if (null == n) return;
                                let { guild: i, pack: s, categoryId: r, type: a, sectionId: u } = n;
                                if (a === tb.s.SEARCH_RESULTS) return;
                                let m = (function (e) {
                                        let { type: t, guild: n, categoryId: i } = e;
                                        return t === tb.s.PACK
                                            ? (0, l.jsx)(R.NitroWheelIcon, {
                                                  size: "custom",
                                                  color: "currentColor",
                                                  height: 16,
                                                  width: 16,
                                              })
                                            : t === tb.s.GUILD
                                              ? null == n
                                                  ? null
                                                  : (0, l.jsx)(tv.A, { guild: n, height: 16, width: 16 })
                                              : null == i
                                                ? null
                                                : (0, l.jsx)(tR, {
                                                      categoryId: i,
                                                      height: 16,
                                                      width: 16,
                                                      size: "custom",
                                                  });
                                    })(n),
                                    f = s?.name ?? i?.name;
                                null != r && (f = (0, eq.Nu)(r, i?.name));
                                let E = x === e,
                                    I = n.isNitroLocked,
                                    h = I && !E,
                                    g = I && E,
                                    p =
                                        a === tb.s.PACK
                                            ? (0, l.jsx)("div", {
                                                  className: n7.uE,
                                                  children: (0, l.jsx)(nP.Q, {
                                                      text: V.intl.string(J.default["2zxYCx"]),
                                                      textVariant: "body-sm/medium",
                                                      variant: "secondary",
                                                      "aria-label": `${V.intl.string(J.default["2zxYCx"])} ${s.name}`,
                                                      onKeyDown: (e) => {
                                                          e.key !== nd.dh.ESCAPE && e.stopPropagation();
                                                      },
                                                      onClick: () => c(s.id),
                                                  }),
                                              })
                                            : void 0;
                                return (0, l.jsx)(
                                    nU.A,
                                    {
                                        className: o()(n7.wx, y, { [n7.RA]: h, [n7.sp]: g }),
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
                    k = (0, tM.k0)(),
                    U = r.useCallback(
                        (e, n) => {
                            let i = d[e],
                                s = v(e),
                                r = b(e),
                                a = i.type === tb.s.PACK && 0 === i.count;
                            return (0, l.jsx)(
                                "div",
                                {
                                    role: "rowgroup",
                                    className: o()(n7.Wy, {
                                        [n7.YD]: e === d.length - 1,
                                        [n7.jl]: t.has(i.sectionId) || a,
                                        [n7.cW]: i.isNitroLocked,
                                        [n7.T5]: s || r,
                                    }),
                                    children: n,
                                },
                                e,
                            );
                        },
                        [t, d, v, b],
                    ),
                    G = r.useCallback(
                        (e) =>
                            v(e)
                                ? k
                                    ? (0, l.jsx)(nK.a, {})
                                    : (0, l.jsx)(nK.A, {})
                                : b(e)
                                  ? (0, l.jsx)("div", { className: n7.pQ })
                                  : null,
                        [v, b, k],
                    ),
                    F = r.useCallback((e) => (v(e) ? 41 : 33 * !!b(e)), [v, b]),
                    K = r.useCallback(
                        (e) =>
                            e === d.length - 1 ||
                            t.has(d[e]?.sectionId) ||
                            (d[e]?.type === tb.s.PACK && d[e]?.count === 0) ||
                            v(e) ||
                            b(e)
                                ? 0
                                : ir,
                        [t, d, v, b],
                    );
                return {
                    listPadding: r.useMemo(() => ["" !== u ? is : ie, it, ii, 0], [u]),
                    renderRow: D,
                    renderSection: U,
                    renderSectionHeader: w,
                    renderSectionFooter: G,
                    sectionMarginBottom: K,
                    sectionHeaderHeight: r.useCallback((e) => (d[e].type === tb.s.SEARCH_RESULTS ? 0 : il), [d]),
                    sectionFooterHeight: F,
                };
            })({
                collapsedSections: h,
                diversitySurrogate: i,
                emojiGrid: s,
                emojiSize: c,
                onEmojiSelect: u,
                onRemovePack: d,
                searchQuery: L,
                sectionDescriptors: E,
                setCollapsedSections: g,
                getEmojiItemProps: A,
                getEmojiRowProps: _,
                isScrolling: b,
                isUsingKeyboardNavigation: x,
                allowAnimatedEmoji: P,
                channelGuildId: j,
                messageId: O,
                isBurstReaction: T,
                listHeaderClassName: S,
                activeSectionIndex: G,
                emojiListRef: a,
            }),
            en = r.useCallback(
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
            en(a.current?.getScrollerNode()?.scrollTop ?? 0);
        }, [a, en, E, I, L]);
        let ei = (0, ev.Fk)({
            activeCategoryIndex: v,
            isScrolling: b,
            listRef: a,
            onActiveCategoryIndexChange: function (e) {
                "" === L && eR.Om.setActiveCategoryIndex(e);
            },
            scrollOffset: 0,
            searchQuery: L,
            disableForSearch: !1,
        });
        (0, ev.FV)({ searchQuery: L, activeCategoryIndex: v, listRef: a });
        let es = r.useCallback(
                (e) => {
                    (ei(e),
                        en(e),
                        ic({ emojiListRef: a, sectionDescriptors: E, scrollTop: e, searchQuery: L, setShowUpsell: B }));
                },
                [ei, en, a, E, L, B],
            ),
            el = E.length > 0;
        (r.useEffect(() => {
            K &&
                (eZ.default.track(eV.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: eE.e.EMOJI_PICKER_FLOATING_UPSELL,
                    location: k,
                    location_stack: U,
                }),
                (0, nF.sq)(eV.U7l.PREMIUM_UPSELL_VIEWED, U, () => (0, nJ.uq)(eE.e.EMOJI_PICKER_FLOATING_UPSELL)));
        }, [k, U, K]),
            r.useEffect(() => {
                "" !== L && B(!1);
            }, [L]));
        let er = r.useRef(null);
        return (
            r.useEffect(
                () => (
                    clearTimeout(er.current),
                    (er.current = setTimeout(() => {
                        (el
                            ? nM.O.announce(V.intl.string(V.t.uZ4F2O), "polite")
                            : nM.O.announce(V.intl.string(V.t.IxxiKF), "assertive"),
                            (er.current = null));
                    }, 200)),
                    () => {
                        clearTimeout(er.current);
                    }
                ),
                [el, L],
            ),
            (0, l.jsxs)("div", {
                className: n7.AD,
                children: [
                    el
                        ? (0, l.jsx)(nw.A, {
                              role: "none presentation",
                              className: n7.p_,
                              listPadding: H,
                              onScroll: es,
                              renderRow: W,
                              renderSection: X,
                              renderSectionHeader: z,
                              renderSectionFooter: Z,
                              rowCount: C,
                              rowCountBySection: I,
                              rowHeight: c + 2 * ia,
                              sectionHeaderHeight: ee,
                              sectionMarginBottom: $,
                              sectionFooterHeight: et,
                              stickyHeaders: !0,
                              ref: a,
                          })
                        : (0, l.jsx)(nD.A, {
                              message: (0, l.jsx)(M.E, {
                                  variant: "body-md/normal",
                                  color: "text-muted",
                                  children: V.intl.string(V.t.IxxiKF),
                              }),
                              className: n7.BZ,
                          }),
                    w || nL.Fr
                        ? null
                        : (0, l.jsx)(nV.d, {
                              showUpsell: K,
                              text:
                                  ((t = (0, tt.Dd)(eE.PremiumTypes.TIER_2)),
                                  V.intl.format(V.t.gMVjeS, {
                                      nitroTierName: t,
                                      onClick: () => {
                                          f({ type: tU.PREMIUM, emojiDescriptor: void 0 });
                                      },
                                  })),
                              button: ((n = (0, nG.qD)()), (0, tt.LE)(n, eE.pe.TIER_2) ?? V.intl.string(V.t.BmJkbd)),
                              buttonAnalyticsObject: { section: eV.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                              leadingAction: (0, l.jsx)(nB.l, {
                                  size: "sm",
                                  className: n7.ij,
                                  location: N.A.PREMIUM_WISHLIST_EMOJI_UPSELL,
                              }),
                          }),
                ],
            })
        );
    }),
    ic = tr().throttle(
        function (e) {
            let { emojiListRef: t, sectionDescriptors: n, scrollTop: i, searchQuery: s, setShowUpsell: l } = e;
            l(
                (0, nk.s)({ listRef: t, searchQuery: s, nitroLockedSectionStates: n, scrollTop: i })
                    .areOnlyNitroLockedSectionsVisible,
            );
        },
        300,
        { leading: !1, trailing: !0 },
    );
var iu = n(506774),
    id = n(28863),
    im = n(669815),
    iE = n(404374),
    iI = n(780964),
    ih = n(766075),
    ig = n(166403),
    ip = n(506150);
let iA = "premiumRetentionEmojiPickerNotice",
    i_ = iu.w.get(iA),
    iN = function (e) {
        let { closePopout: t, channel: n } = e,
            [i, s] = r.useState(!1),
            { subscription: a, hasFetchedSubscriptions: o } = (0, m.cf)([ig.A], () => ({
                subscription: ig.A.getPremiumSubscription(),
                hasFetchedSubscriptions: ig.A.hasFetchedSubscriptions(),
            }));
        if (
            (r.useEffect(() => {
                o || (0, im.hP)();
            }, [o]),
            null == a || !(0, tt.PK)(a.status) || i)
        )
            return null;
        let c = a.status === eV.Dmq.PAST_DUE ? (0, tt.ji)(a).expiresDate : e_()(a.currentPeriodStart).add(30),
            u = `${a.id}:${c.toISOString()}`;
        if (i_ === u) return null;
        let d =
            tt.Ay.getPremiumType(a.planId) === eE.PremiumTypes.TIER_0
                ? iE.k0.PREMIUM_TIER_0
                : tt.Ay.getPremiumType(a.planId) === eE.PremiumTypes.TIER_1
                  ? iE.k0.PREMIUM_TIER_1
                  : iE.k0.PREMIUM_TIER_2;
        return (0, l.jsxs)(M.E, {
            variant: "body-xs/medium",
            color: "text-default",
            className: ip.g$,
            children: [
                (0, l.jsx)(R.NitroWheelIcon, { size: "md", className: ip.lu, color: d }),
                (0, l.jsxs)("div", {
                    className: ip.Xn,
                    children: [
                        (0, l.jsx)(M.E, {
                            variant: "body-xs/normal",
                            children: V.intl.format(V.t.bTMjiO, {
                                planName: tt.Ay.getTierDisplayNameByPlanId(a.planId),
                                endsAt: c.toDate(),
                            }),
                        }),
                        (0, l.jsx)("div", {
                            children: (0, l.jsx)(id.Anchor, {
                                onClick: () => {
                                    ((0, eq.xf)(n), t(), (0, ih.openUserSettings)(iI.X.NITRO_PANEL));
                                },
                                children: V.intl.string(V.t.W3aavh),
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(eM.D, {
                    onClick: () => {
                        (iu.w.set(iA, u), (i_ = u), s(!0));
                    },
                    children: (0, l.jsx)(U.XSmallIcon, { size: "md", color: "currentColor", className: ip.YF }),
                }),
            ],
        });
    };
var iC = n(148361);
let iy = (0, e$.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    ix = (0, e$.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT);
function ij(e) {
    return e.stopPropagation();
}
function iO(e, t) {
    eR.Om.setInspectedExpressionPosition(e, t, ed.t.GRID_NAVIGATOR_EVENT);
}
let iT = u()(eq.bo, 200),
    iS = u()(eq.Wi, 200),
    ib = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    iR = r.memo(function (e) {
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
                emojiSize: R = tb.as.MEDIUM,
                hasTabWrapper: v = !1,
                onSelectEmoji: L,
                containerWidth: P,
                onNavigateAway: M,
                persistSearch: D,
                className: w,
                headerClassName: k,
                analyticsOverride: U = ib,
                searchProps: G = {},
                wrapper: J,
                shouldHidePickerActions: K = !1,
                messageId: B,
                renderHeader: W,
                listHeaderClassName: X,
                categoryListClassName: z,
                showOnlyUnicode: Z = !1,
                showAddEmojiButton: $,
                ref: ee,
                isViewingEmojiPacks: en,
                onViewEmojiPacksChange: ei,
            } = e,
            { onFocus: es, onKeyDown: el, autoFocus: er = !0, accessory: ea } = G,
            eo = (0, m.bG)([eY.A], () => (null != E ? eY.A.getDefaultChannel(E) : null), [E]),
            [ec, eu] = r.useState(null),
            em = r.useRef(""),
            ef = (0, Y.RQ)((e) => e.searchQuery),
            eI = r.useRef(null),
            eA = r.useRef(null),
            e_ = r.useRef(null),
            eN = (0, T.H)("emoji_picker") && !Z && (0, ts.z)(c);
        r.useEffect(() => {
            eN && (0, S.Fp)();
        }, [eN]);
        let [eC, ey] = r.useState(!1),
            ex = eN && (en ?? eC),
            ej = ei ?? ey,
            eO = r.useCallback((e) => {
                (e_.current?.focus(), (0, S.M5)(e));
            }, []),
            eT =
                ((t = (0, m.bG)([et.A], () => (eN ? et.A.getPacks() : ep), [eN])),
                (n = (0, m.bG)(
                    [eg.A],
                    () => (eN ? eg.A.frecencyWithoutFetchingLatest.pinnedEmojiPacks?.packIds : void 0),
                    [eN],
                )),
                r.useMemo(
                    () =>
                        eN && null != n && 0 !== n.length
                            ? n.map((e) => t.find((t) => t.id === e)).filter((e) => null != e)
                            : ep,
                    [eN, t, n],
                ));
        null == u && null != eo && (u = eo);
        let eL = u?.getGuildId() ?? E ?? null,
            [eP, eM] = r.useState(!1),
            eD = r.useRef(null),
            ew = q.default.getCurrentUser(),
            ek = (0, Q.ki)(ew),
            eU = eP && ek;
        r.useImperativeHandle(ee, () => ({ onPickerOpen: tm }));
        let { location: eF } = (0, p.p)(),
            { page: eJ, section: eK, object: eB, openPopoutType: e$, popoutLocation: eQ } = U,
            e0 = r.useMemo(() => ({ ...eF, section: eK ?? eV.JJy.EMOJI_PICKER_POPOUT }), [eF, eK]),
            { analyticsLocations: e5 } = (0, y.Ay)(N.A.EMOJI_PICKER),
            { diversitySurrogate: e6 } = (0, m.cf)([j.Ay], () => ({ diversitySurrogate: j.Ay.diversitySurrogate })),
            e9 = (0, eq.sL)(ef, u, c, Z),
            e7 = null == e9 ? 0 : e9.locked.length + e9.unlocked.length,
            te = ez.iM.useSetting(),
            tt = r.useMemo(() => new Set(te), [te]),
            tn = r.useCallback((e) => {
                ez.iM.updateSetting(Array.from(e));
            }, []),
            tl = (0, ev.oV)({
                gridWrapperRef: eI,
                containerWidth: P,
                showingEmptyState: ex,
                listPaddingLeft: ix,
                listScrollbarWidth: 8,
            }),
            {
                rowCountBySection: ta,
                sectionDescriptors: to,
                emojiGrid: tc,
                columnCounts: tu,
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
                    E = r.useMemo(() => (d ? tP.Ay.getCategories() : f), [f, d]),
                    I = (0, m.bG)([eG.A], () => eG.A.getGuild(t?.getGuildId()), [t]),
                    h = t?.getGuildId() ?? n,
                    g = (0, m.bG)([j.Ay], () => j.Ay.getDisambiguatedEmojiContext(h), [h]),
                    p = (0, eq.XI)(h),
                    A = (0, eq.Fj)(h),
                    _ = (0, eq.QZ)(h),
                    { topEmojis: N, newlyAddedEmojis: C } = (0, e3.A)(h, s),
                    y = (0, m.yK)([tD.Ay], () => tD.Ay.getFlattenedGuildIds(), []),
                    x = (0, m.bG)([j.Ay], () => j.Ay.expandedSectionsByGuildIds),
                    O = (0, m.bG)([q.default], () => q.default.getCurrentUser()),
                    T = (0, Q.ki)(O),
                    S = (0, Q.ki)(O, eE.PremiumTypes.TIER_2),
                    b = (0, tM.k0)(),
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
                                [E, I] = tr().partition(l, (e) => {
                                    let n = e1.Ay.isEmojiDisabled({ emoji: e, channel: t, intention: s });
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
                                                a.sectionId === tb.s.TOP_GUILD_EMOJI
                                                    ? (0, eq.DA)(N, C, e.id ?? e.uniqueName ?? e.name)
                                                    : tb.tm.NONE,
                                        }));
                                if ((y.push(i), !u)) {
                                    if (p && e === _ - 1) {
                                        let t = y[e];
                                        t.push({
                                            type: 1,
                                            guildId: g.id,
                                            name: V.intl.string(V.t.NZI2Zk),
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
                                    type: tb.s.SEARCH_RESULTS,
                                    sectionId: tb.s.SEARCH_RESULTS,
                                    count: l.unlocked.length,
                                    isNitroLocked: !1,
                                }),
                                0 !== l.locked.length &&
                                    h(l.locked, {
                                        type: tb.s.PREMIUM_UPSELL,
                                        categoryId: tb.R2.PREMIUM_UPSELL,
                                        sectionId: tb.s.PREMIUM_UPSELL,
                                        count: l.locked.length,
                                        isNitroLocked: !T,
                                    }));
                        else {
                            let e = E.includes(tb.R2.CUSTOM) ? tb.R2.CUSTOM : tP.Ay.getCategories()[0];
                            for (let n of E) {
                                if (n === e)
                                    for (let e of u) {
                                        let t = tr().compact(
                                            e.emojis.map((e) => {
                                                let { id: t } = e;
                                                return g.getById(t);
                                            }),
                                        );
                                        h(t, {
                                            type: tb.s.PACK,
                                            pack: e,
                                            sectionId: `pack:${e.id}`,
                                            count: t.length,
                                            isNitroLocked: !S,
                                        });
                                    }
                                if (n === tb.R2.CUSTOM) {
                                    function j(e) {
                                        let i = R.get(e);
                                        if (null == i) return;
                                        let l = i.filter(
                                            (n) =>
                                                !tk.includes(
                                                    e1.Ay.getEmojiUnavailableReason({
                                                        emoji: n,
                                                        channel: t ?? eY.A.getDefaultChannel(e),
                                                        intention: s,
                                                    }),
                                                ),
                                        );
                                        if (0 === l.length) return;
                                        let r = eG.A.getGuild(e),
                                            a =
                                                b ||
                                                (!T &&
                                                    e1.Ay.isEmojiCategoryNitroLocked({
                                                        categoryEmojis: l,
                                                        channel: t,
                                                        intention: s,
                                                    }));
                                        h(l, {
                                            categoryId: n,
                                            guild: r,
                                            type: tb.s.GUILD,
                                            sectionId: null != r ? r.id : (0, tL.A)(),
                                            count: l.length,
                                            isNitroLocked: a,
                                        });
                                    }
                                    if ((null != I && j(I.id), (0, e4.Re)(s)))
                                        for (let e of y) (null == I || I.id !== e) && j(e);
                                } else if (n === tb.R2.TOP_GUILD_EMOJI) {
                                    if (null != I) {
                                        let { allEmojis: e } = (0, e2.W)({ topEmojis: N, newlyAddedEmojis: C });
                                        e.length > 0 &&
                                            h(e, {
                                                categoryId: n,
                                                guild: eG.A.getGuild(I.id),
                                                type: tb.s.TOP_GUILD_EMOJI,
                                                sectionId: tb.s.TOP_GUILD_EMOJI,
                                                count: e.length,
                                                isNitroLocked: !1,
                                            });
                                    }
                                } else if (n === tb.R2.RECENT) {
                                    let e = (s === e4.EmojiIntention.REACTION ? _ : A).filter(
                                        (e) => !e1.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }),
                                    );
                                    h(e, {
                                        categoryId: n,
                                        type: tb.s.RECENT,
                                        sectionId: tb.s.RECENT,
                                        count: e.length,
                                        isNitroLocked: !1,
                                    });
                                } else if (n === tb.R2.FAVORITES) {
                                    let e = p.filter(
                                        (e) => !e1.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }),
                                    );
                                    0 !== e.length &&
                                        h(e, {
                                            categoryId: n,
                                            type: tb.s.FAVORITES,
                                            sectionId: tb.s.FAVORITES,
                                            count: e.length,
                                            isNitroLocked: !1,
                                        });
                                } else {
                                    let e = tP.Ay.getByCategory(n);
                                    null != e &&
                                        h(e, {
                                            categoryId: n,
                                            type: tb.s.UNICODE,
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
                gridWidth: tl,
                fallbackGuildId: eL,
                channel: u,
                pickerIntention: c,
                emojiSearchResults: e9,
                collapsedSections: tt,
                emojiPaddingHorizontal: iy,
                emojiSpriteSize: R,
                pinnedPacks: eT,
                showOnlyUnicode: Z,
            }),
            { newlyAddedEmojis: td } = (0, e3.A)(eL, c);
        ((i = r.useRef({ intention: c, isBurstReaction: eP, analyticsObject: eB })),
            r.useEffect(() => {
                i.current.intention === e4.EmojiIntention.REACTION && e8(i.current);
            }, []));
        let tm = r.useCallback(() => {
                let e = td.length > 0 ? td[0].id : null;
                ((0, eb.uV)(eL, e), e8({ intention: c, isBurstReaction: eP, analyticsObject: eB }));
            }, [td, eL, c, eP, eB]),
            tf = r.useCallback(() => {
                (b(),
                    M?.(),
                    (0, eX.A)({
                        subscriptionTier: eE.pe.TIER_2,
                        analyticsLocations: [...e5, N.A.EMOJI_PACKS],
                        analyticsObject: { ...e0, object: eV.ZSU.EMOJI },
                    }));
            }, [e0, e5, b, M]),
            tE = (function (e) {
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
                            let u = e1.Ay.getEmojiUnavailableReason({ emoji: r, channel: n, intention: t });
                            if (i.toggleFavorite)
                                return void (c.isFavoriteEmojiWithoutFetchingLatest(r) || null != u
                                    ? (0, h.Sw)(r)
                                    : (o?.(e), (0, h.V4)(r)));
                            if (u !== e4.Am.GUILD_SUBSCRIPTION_UNAVAILABLE) {
                                if (u === e4.Am.PREMIUM_LOCKED) {
                                    (a?.(e, u), l({ type: 0, emojiDescriptor: e }));
                                    return;
                                }
                                if (u === e4.Am.ROLE_SUBSCRIPTION_LOCKED && r.type === O.i.GUILD) {
                                    (a?.(e, u), l({ type: 1, guildId: r.guildId, emojiId: r.id }));
                                    return;
                                }
                                u !== e4.Am.ROLE_SUBSCRIPTION_UNAVAILABLE &&
                                    (a?.(e), s({ emoji: r, willClose: i.isFinalSelection, isBurst: i.isBurst }));
                            }
                        }
                    },
                    [n, t, s, l, c, a, o],
                );
            })({
                pickerIntention: c,
                selectedChannel: u,
                fallbackGuildId: eL,
                closePopout: b,
                onSelectEmoji: L,
                setUpsellConfigs: (e) => {
                    e?.type === tU.PREMIUM && e.emojiDescriptor?.emoji?.type === O.i.PACK ? tf() : eu(e);
                },
                emojiSelectAnalytics: (e, t) => {
                    "" !== ef
                        ? (0, eq.Wf)({
                              emoji: e.emoji,
                              location: { ...e0, object: eV.ZSU.EMOJI },
                              searchQuery: ef,
                              isLocked: null != t,
                              intention: c,
                              messageId: B,
                          })
                        : (0, eq._7)({
                              emoji: e.emoji,
                              location: { ...e0, object: eB ?? eV.ZSU.EMOJI, ...(null != eJ && { page: eJ }) },
                              pickerIntention: c,
                              category: e.category,
                              subCategory: e.subCategory,
                              position: e.columnIndex + 1,
                              newlyAddedHighlight:
                                  e.subCategory === tb.tm.NEWLY_ADDED_EMOJI && eS.isNewerThanLastSeen(eL, e.emoji.id),
                              isBurstReaction: eP,
                              messageId: B,
                              lockedReason: t,
                              visibleRowIndex: e.visibleRowIndex,
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, eq.C5)({ emoji: e.emoji, location: { ...e0, object: eV.ZSU.EMOJI } });
                },
            }),
            tI = r.useCallback(() => {
                (b(), M?.());
            }, [b, M]),
            {
                getItemProps: th,
                getRowProps: tg,
                gridContainerProps: tp,
                handleGridContainerKeyDown: tA,
                isUsingKeyboardNavigation: t_,
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
                            if (e.type === tw.EMOJI) {
                                if (e.emoji.type === O.i.PACK)
                                    return void l(e, {
                                        isFinalSelection: !i.shiftKey,
                                        toggleFavorite: i.altKey,
                                        isBurst: u,
                                    });
                                if (null != e.emoji && i.altKey)
                                    return void (f.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                        ? (0, h.Sw)(e.emoji)
                                        : ((0, eq.C5)({ emoji: e.emoji, location: { ...t, object: eV.ZSU.EMOJI } }),
                                          (0, h.V4)(e.emoji)));
                                let r = {
                                    page: null != c ? eV.liQ.GUILD_CHANNEL : eV.liQ.DM_CHANNEL,
                                    section: eV.JJy.EMOJI_PICKER_POPOUT,
                                    object: eV.ZSU.EMOJI,
                                };
                                (u &&
                                    (r = {
                                        page: null != c ? eV.liQ.GUILD_CHANNEL : eV.liQ.DM_CHANNEL,
                                        section: eV.JJy.EMOJI_PICKER_POPOUT,
                                        object: eV.ZSU.EMOJI,
                                    }),
                                    (0, eq._7)({
                                        emoji: e.emoji,
                                        location: r,
                                        pickerIntention: n,
                                        category: e.category,
                                        subCategory: e.subCategory,
                                        newlyAddedHighlight:
                                            e.subCategory === tb.tm.NEWLY_ADDED_EMOJI &&
                                            eS.isNewerThanLastSeen(c, e.emoji.id),
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
                    } = (0, ev.Ff)({
                        columnCounts: i,
                        gridNavigatorId: tb.lq,
                        itemGrid: a,
                        itemList: o,
                        onGridNavigatorItemSelect: E,
                        onGridNavigatorPositionChange: iO,
                    });
                return (
                    r.useEffect(
                        () =>
                            eR.Om.subscribe(
                                (e) => e.inspectedExpressionPosition,
                                (e) => {
                                    if (null == e) return;
                                    let { columnIndex: t, rowIndex: n, source: i } = e;
                                    i !== ed.t.GRID_NAVIGATOR_EVENT &&
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
                analyticsLocation: e0,
                columnCounts: tu,
                onSelectEmoji: L,
                onSelectPackEmoji: tE,
                emojiGrid: tc,
                emojiList: eA,
                channelGuildId: eL,
                isBurstReaction: eU,
            });
        (((e, t) => {
            let [n, i] = r.useState(null);
            (r.useEffect(() => {
                null != n && (t.current?.scrollToSectionTop(n), i(null));
            }, [t, n]),
                r.useEffect(() => {
                    i(eR.Om.getState().activeCategoryIndex);
                }, [e]));
        })(P, eA),
            r.useLayoutEffect(() => {
                er && e_.current?.focus();
            }, [P, e6, e_, er]),
            (s = r.useRef(ex)),
            r.useEffect(() => {
                (er && s.current && !ex && e_.current?.focus(), (s.current = ex));
            }, [er, ex, e_]),
            r.useEffect(() => {
                D || (0, Y.Ri)("");
            }, [D]),
            r.useEffect(
                () => (
                    eZ.default.track(eV.HAw.OPEN_POPOUT, {
                        type: e$ ?? "Emoji Picker",
                        guild_id: eL,
                        location: eQ,
                        ...(0, C.dI)(u),
                    }),
                    () => {
                        (iT.cancel(), iS.cancel());
                    }
                ),
                [e$, eL, eQ, u],
            ),
            (0, A.Ay)(() => ((0, eq.V$)({ intention: c, location: e0 }), (em.current = ef), eR.Om.resetStoreState)),
            r.useEffect(() => () => (0, eW.sF)(eW._2.FAVORITE_EMOJI_TOOLTIP), []),
            r.useLayoutEffect(() => {
                let { columnIndex: e, rowIndex: t } = eR.Om.getState().inspectedExpressionPosition;
                tc[t]?.[e] == null && 0 !== e && eR.Om.setInspectedExpressionPosition(0, 0);
            }, [tc]),
            r.useEffect(() => {
                if (("" === em.current && "" !== ef && (0, eq.EG)(e0, c), "" !== ef && em.current !== ef)) {
                    let e = eR.Om.getAnalyticsId();
                    0 === e7
                        ? iT({ location: e0, searchQuery: ef, intention: c, loadId: e })
                        : iS({
                              totalResults: e7,
                              numEmojiLocked: e9?.locked.length ?? 0,
                              location: e0,
                              searchQuery: ef,
                              intention: c,
                              loadId: e,
                          });
                }
                em.current = ef;
            }, [ef, e0, e7, e9, c]));
        let tN = J ?? (v ? "div" : I.l),
            tC = null != tl;
        function ty(e, t) {
            tE(e, { ...t, isBurst: eU });
        }
        ec?.type === tU.PREMIUM
            ? (a = (0, l.jsx)(iC.default, {
                  onUpsellClicked: tI,
                  emojiDescriptor: ec.emojiDescriptor,
                  pickerIntention: c,
                  analyticsLocation: e0,
                  onClose: () => eu(null),
                  channel: u,
              }))
            : ec?.type === tU.ROLE_SUBSCRIPTION &&
              (a = (0, l.jsx)(eH, { onClose: () => eu(null), guildId: ec.guildId, emojiId: ec.emojiId }));
        let tx = (0, _.A)((e, t, n) => {
                ty(
                    {
                        type: tw.EMOJI,
                        emoji: e,
                        isDisabled: !e.available,
                        size: R,
                        rowIndex: 0,
                        columnIndex: t,
                        visibleRowIndex: 0,
                        category: tb.s.PACK,
                        subCategory: tb.tm.NONE,
                    },
                    n,
                );
            }),
            tj = (0, l.jsx)(nj, {
                channel: u,
                pickerIntention: c,
                emojiListRef: eA,
                onKeyDown: (e) => {
                    (tA?.(e), el?.(e));
                },
                searchBarRef: e_,
                onFocus: es,
                autoFocus: er,
                accessory: ea,
                headerClassName: k,
                diversitySurrogate: e6,
                isBurstReaction: eP,
                onBurstReactionToggle: function () {
                    (eM(!eP), e_.current?.focus());
                },
                burstToggleRef: eD,
                renderHeader: W,
                showAddEmojiButton: $,
                closePopout: b,
            }),
            tO = [];
        j.Ay.hasFavoriteEmojis(eL) || tO.push(f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let tT = (0, l.jsxs)(r.Fragment, {
                children: [
                    v ? tj : null,
                    (0, l.jsxs)("div", {
                        className: nx.uK,
                        ref: eI,
                        children: [
                            (0, l.jsxs)("div", {
                                children: [
                                    eN && !K ? (0, l.jsx)(H, { onViewEmojiPacks: () => ej(!0) }) : null,
                                    (0, l.jsx)(iN, { channel: u, closePopout: b }),
                                    (0, l.jsx)(x.Ay, {
                                        contentTypes: tO,
                                        children: (e) => {
                                            let { visibleContent: t, markAsDismissed: n } = e;
                                            if (t === f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                                return (0, l.jsx)(t5, { markAsDismissed: () => n(F.i.UNKNOWN) });
                                        },
                                    }),
                                ],
                            }),
                            K
                                ? null
                                : (0, l.jsx)("div", {
                                      className: nx.Iy,
                                      id: tb.lq,
                                      ...tp,
                                      children: tC
                                          ? (0, l.jsx)(io, {
                                                collapsedSections: tt,
                                                diversitySurrogate: e6,
                                                emojiGrid: tc,
                                                emojiListRef: eA,
                                                emojiSize: R,
                                                getEmojiItemProps: th,
                                                getEmojiRowProps: tg,
                                                gridWidth: tl,
                                                isUsingKeyboardNavigation: t_,
                                                onEmojiSelect: ty,
                                                onRemovePack: eO,
                                                setUpsellConfigs: eu,
                                                rowCount: tc.length,
                                                rowCountBySection: ta,
                                                sectionDescriptors: to,
                                                setCollapsedSections: tn,
                                                channelGuildId: eL,
                                                messageId: B,
                                                isBurstReaction: eU,
                                                listHeaderClassName: X,
                                            })
                                          : null,
                                  }),
                        ],
                    }),
                    (0, l.jsx)(nv, { emojiGrid: tc, className: nx.qV, guildId: eL, pickerIntention: c, channel: u }),
                    a,
                    c === e4.EmojiIntention.REACTION
                        ? (0, l.jsx)(ti, { targetElementRef: eD, shouldShow: eP && !ek, onDismiss: () => eM(!1) })
                        : null,
                ],
            }),
            tS = (0, l.jsx)(g.A, {
                ...e0,
                children: (0, l.jsxs)(tN, {
                    id: tb.Do,
                    "aria-labelledby": v && !ex ? tb.k1 : void 0,
                    role: v && !ex ? "tabpanel" : void 0,
                    className: o()(nx.iE, { [nx.r6]: v, [nx.cB]: eU }),
                    children: [
                        v || ex ? null : tj,
                        (0, l.jsx)("div", {
                            className: o()(nx.Fb, w, { [nx.eW]: ex && !v }),
                            onScroll: ij,
                            children: ex ? (0, l.jsx)(eh, { onBack: () => ej?.(!1), onSelectEmoji: tx }) : tT,
                        }),
                        K || ex
                            ? null
                            : (0, l.jsx)(t3, {
                                  className: o()(nx.jv, z),
                                  emojiListRef: eA,
                                  sectionDescriptors: to,
                                  intention: c,
                                  channel: u,
                                  fallbackGuildId: eL,
                                  showOnlyUnicode: Z,
                                  pinnedPacks: eT,
                                  onViewEmojiPacks: eN ? () => ej?.(!0) : void 0,
                              }),
                    ],
                }),
            });
        return (0, l.jsx)(y.f5, { value: e5, children: tS });
    });
