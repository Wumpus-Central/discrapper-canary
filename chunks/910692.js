"use strict";
n.d(t, { BC: () => eG, Eh: () => eO, Fl: () => eF, YN: () => eM, fD: () => eP });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(284009),
    o = n.n(a);
n(340287);
var c = n(311907),
    u = n(554146),
    d = n(827734),
    h = n(342952),
    m = n(990078),
    p = n(43990),
    f = n(315710),
    g = n(939249),
    _ = n(276293),
    x = n(935063),
    A = n(789645),
    C = n(821609),
    E = n(778712),
    I = n(696986),
    v = n(534514),
    y = n(834730),
    S = n(320448),
    b = n(97808),
    N = n(738188),
    T = n(983851),
    j = n(31300),
    R = n(308528),
    w = n(367513),
    L = n(956793),
    M = n(401843),
    k = n(775602),
    O = n(969151),
    P = n(1768),
    D = n(47167),
    U = n(262763),
    V = n(402216),
    G = n(268218),
    F = n(826673),
    B = n(822123),
    H = n(643501),
    W = n(409626),
    K = n(692969),
    z = n(279250),
    Z = n(607407),
    q = n(263063),
    Y = n(721592),
    J = n(378570),
    $ = n(832163),
    X = n(565688),
    Q = n(533562),
    ee = n(912276),
    et = n(636585),
    en = n(95701),
    ei = n(734057),
    el = n(71393),
    es = n(576705),
    er = n(994500),
    ea = n(543465),
    eo = n(287809),
    ec = n(977997),
    eu = n(607567),
    ed = n(954571),
    eh = n(486020),
    em = n(562153),
    ep = n(939341),
    ef = n(20805),
    eg = n(22869),
    e_ = n(623671),
    ex = n(428249),
    eA = n(327098),
    eC = n(576757),
    eE = n(202195),
    eI = n(176563),
    ev = n(422973),
    ey = n(315246),
    eS = n(899682),
    eb = n(424994),
    eN = n(652215),
    eT = n(381941),
    ej = n(699976),
    eR = n(985018),
    ew = n(994063);
let eL = (0, G.Fe)({
    createPromise: () =>
        Promise.all([
            n.e("61943"),
            n.e("28367"),
            n.e("27411"),
            n.e("49318"),
            n.e("12721"),
            n.e("58283"),
            n.e("17601"),
            n.e("8087"),
            n.e("55057"),
            n.e("60471"),
            n.e("42257"),
            n.e("48563"),
            n.e("27355"),
            n.e("67876"),
            n.e("72589"),
            n.e("6453"),
            n.e("20667"),
        ]).then(n.bind(n, 93879)),
    webpackId: 93879,
});
function eM(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: ew.SW, children: t });
}
function ek(e) {
    let { children: t, backgroundImgSrc: n, className: l, style: s = {} } = e,
        { primaryColor: a, secondaryColor: o } = (0, eI.A)(n);
    return (
        null != n && (s.background = `linear-gradient(45deg, ${a}, ${o})`),
        (0, i.jsx)(p.N, {
            theme: eN.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) => (0, i.jsx)("div", { className: r()(ew.ZK, e, l), style: s, children: t }),
        })
    );
}
function eO(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: ew.$m, children: t });
}
function eP(e) {
    var t;
    let n,
        s,
        r,
        a,
        { channel: h, user: p, onReaction: v, entry: L, buttons: M = [], header: k, onVoiceChannelPreview: V } = e,
        [G, B] = l.useState(!1),
        [H, W] = l.useState(null),
        K = l.useRef(null),
        z = (0, c.bG)(
            [es.A],
            () => null != h && eN.kvI.CONTENT_ENTRY_EMBEDS.has(h.type) && es.A.can(eN.xBc.SEND_MESSAGES, h),
        ),
        [Z, $] = l.useState(!1),
        [X, Q] = l.useState(!1),
        { voiceBar: ee, joinVoiceButton: eh } = (function (e) {
            let { channel: t, entry: n, onVoiceChannelPreview: s } = e,
                { streamPreviewUrl: r, channel: a } = (0, eE.A)(n),
                o = (0, D.Ay)(a),
                { needSubscriptionToAccess: u } = (0, Y.A)(t?.id),
                h = (0, c.bG)([el.A], () => (null != a ? el.A.getGuild(a.guild_id) : void 0)),
                p = (0, c.yK)([eu.Ay], () => (null != a ? eu.Ay.getVoiceStatesForChannel(a) : []), [a]),
                f = (0, c.bG)([ec.A], () => ec.A.isInChannel(a?.id)),
                _ = l.useMemo(() => {
                    for (let e of p) {
                        let t = ei.A.getDMFromUserId(e.user.id),
                            n = null != t && ea.Ay.isChannelMuted(null, t),
                            i = er.A.isBlockedOrIgnored(e.user.id);
                        if (n || i) return !0;
                    }
                    return !1;
                }, [p]);
            if (null == a || null == h) return { voiceBar: void 0, joinVoiceButton: void 0 };
            let x = null != r,
                A = (e) => {
                    let { children: t, text: n, hasRestrictedOrMutedVCParticipant: l } = e,
                        s = l
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(N.i, { size: "custom", width: 13, height: 13, className: ew.vb }),
                                      eR.intl.string(eR.t.d6DpXI),
                                  ],
                              })
                            : n;
                    return (0, i.jsx)(
                        m.m,
                        {
                            "aria-label": l ? eR.intl.string(eR.t.d6DpXI) : (n ?? !1),
                            __unsupportedReactNodeAsText: s,
                            shouldShow: !0,
                            children: t,
                        },
                        "voice-preview",
                    );
                };
            return {
                voiceBar: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: ew.kP,
                            children: [
                                (0, i.jsx)(A, {
                                    text: eR.intl.string(eR.t.WIVYqJ),
                                    hasRestrictedOrMutedVCParticipant: _,
                                    children: (0, i.jsxs)(g.D, {
                                        "aria-label": eR.intl.string(eR.t.WIVYqJ),
                                        onClick: () => {
                                            w.A.updateChatOpen(a.id, !0), (0, J.iN)(a.id), s?.(a);
                                        },
                                        className: ew.I3,
                                        children: [
                                            (0, i.jsx)(q.Ay, {
                                                guild: h,
                                                size: q.Ay.Sizes.SMOL,
                                                className: ew.O9,
                                                active: !0,
                                            }),
                                            (0, i.jsx)(S._, {
                                                size: "xxs",
                                                color: d.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            }),
                                            (0, i.jsx)(T.H, { size: "xs", color: d.A.colors.TEXT_DEFAULT }),
                                            (0, i.jsx)(y.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: ew.NR,
                                                children: o,
                                            }),
                                        ],
                                    }),
                                }),
                                (0, i.jsx)(et.A, {
                                    guildId: h.id,
                                    users: p,
                                    max: 3,
                                    renderUser: (e, t) =>
                                        (0, i.jsx)(b.eu, {
                                            src: e.user.getAvatarURL(h.id, 16),
                                            size: E._3.SIZE_16,
                                            "aria-label": "avatar",
                                            className: t,
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, i.jsx)("div", {
                                            className: ew.V9,
                                            children: (0, i.jsx)(y.E, {
                                                variant: "text-xxs/semibold",
                                                color: "text-default",
                                                children: e,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(I.h, { size: 16 }),
                    ],
                }),
                joinVoiceButton: f
                    ? null
                    : (0, i.jsx)(A, {
                          hasRestrictedOrMutedVCParticipant: _,
                          children: (0, i.jsx)(C.$, {
                              onClick: () => {
                                  U.A.handleVoiceConnect({
                                      channel: a,
                                      connected: f,
                                      needSubscriptionToAccess: u,
                                      routeDirectlyToChannel: !0,
                                  });
                              },
                              fullWidth: !0,
                              text: x ? eR.intl.string(eR.t.I6JG46) : eR.intl.string(eR.t.VJlc0S),
                              icon: x ? j.k : T.H,
                              variant: "active",
                              size: "md",
                          }),
                      }),
            };
        })({ channel: h, entry: L, onVoiceChannelPreview: V }),
        { embeddedActivity: ep } = (0, eA.A)(L),
        ef =
            ((t = ep),
            (n = (0, c.bG)([el.A], () => el.A.getGuild((0, O.D)(t?.location)))),
            (s = (0, c.bG)([ei.A], () => ei.A.getChannel((0, O.H)(t?.location)))),
            (r = (0, c.yK)([eo.default], () => t?.participants?.map((e) => eo.default.getUser(e.userId)) ?? [])),
            (a = (0, D.Ay)(s)),
            null != t && null != n && null != s && en.k3.has(s.type)
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsxs)("div", {
                              className: ew.kP,
                              children: [
                                  (0, i.jsxs)(g.D, {
                                      "aria-label": eR.intl.string(eR.t["W/A4Qp"]),
                                      onClick: () => (0, J.iN)(s.id),
                                      className: ew.I3,
                                      children: [
                                          (0, i.jsx)(q.Ay, {
                                              guild: n,
                                              size: q.Ay.Sizes.SMOL,
                                              className: ew.O9,
                                              active: !0,
                                          }),
                                          (0, i.jsx)(S._, { size: "xxs", color: d.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                                          (0, i.jsx)(_.N, { size: "xs", color: d.A.colors.TEXT_DEFAULT }),
                                          (0, i.jsx)(y.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              className: ew.NR,
                                              children: a,
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(et.A, {
                                      guildId: n.id,
                                      users: r,
                                      max: 3,
                                      renderUser: (e, t) =>
                                          (0, i.jsx)(b.eu, {
                                              src: e.getAvatarURL(n.id, 16),
                                              size: E._3.SIZE_16,
                                              "aria-label": "avatar",
                                              className: t,
                                          }),
                                      renderMoreUsers: (e) =>
                                          (0, i.jsx)("div", {
                                              className: ew.V9,
                                              children: (0, i.jsx)(y.E, {
                                                  variant: "text-xxs/semibold",
                                                  color: "text-default",
                                                  children: e,
                                              }),
                                          }),
                                  }),
                              ],
                          }),
                          (0, i.jsx)(I.h, { size: 16 }),
                      ],
                  })
                : null),
        eg = null != eh && 0 === M.length ? [eh] : M,
        e_ = eg.length > 0,
        eC = eg.length >= 2,
        [eI, ey] = l.useState(!e_),
        ej = em.Ay.getName(h?.guild_id, h?.id, p),
        eL = (0, D.Ay)(h, !0),
        eM =
            null != h && G
                ? eR.intl.formatToPlainString(eR.t["8lzR/R"], { channel: eL })
                : eR.intl.formatToPlainString(eR.t["4c+CAx"], { channel: `@${ej}` }),
        ek = G ? eR.intl.string(eR.t.Z2CUgn) : eR.intl.string(eR.t.XLGiTG),
        eO = async (e) => {
            let t,
                { emoji: n } = e;
            if (null != n) {
                if (
                    (ed.default.track(eN.HAw.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: eb.UG.GUILD_MEMBER_LIST,
                        channel_id: h?.id,
                        guild_id: h?.guild_id,
                    }),
                    (0, F.Dr)(u.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                    $(!0),
                    Q(!1),
                    G)
                )
                    o()(null != h, "shareToChannelMode should only be true if a valid channel is passed"), (t = h);
                else {
                    let e = await R.A.getOrEnsurePrivateChannel(p.id);
                    t = ei.A.getChannel(e) ?? null;
                }
                return (
                    o()(null != t, "Send channel must be defined"),
                    eU({
                        reply: `:${n.name}:`,
                        sendToChannel: t,
                        onComplete: (e, t) => {
                            Q(!0),
                                setTimeout(() => {
                                    $(!1), v(e, t);
                                }, 600);
                        },
                        interactionType: eb.PA.REACTION_EMOJI_REACT_SENT,
                        requiresChannelReadiness: !1,
                    })
                );
            }
        },
        eP = async (e) => {
            let t;
            if (((0, F.Dr)(u.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), G))
                o()(null != h, "shareToChannelMode should only be true if a valid channel is passed"), (t = h);
            else {
                let e = await R.A.openPrivateChannel({ recipientIds: p.id }),
                    n = ei.A.getChannel(e);
                o()(null != n, "DM channel must be defined"), (t = n);
            }
            let n = t.type === eN.rbe.DM ? eb.PA.DM_REACTION_MESSAGE_SENT : eb.PA.CHANNEL_REACTION_MESSAGE_SENT;
            return eU({ reply: e, sendToChannel: t, interactionType: n, onComplete: v, requiresChannelReadiness: !0 });
        },
        eU = async (e) => {
            let { reply: t, sendToChannel: n, onComplete: i, interactionType: l, requiresChannelReadiness: s } = e;
            H?.focus(),
                await (0, ex.d)({
                    channel: n,
                    content: t,
                    entry: L,
                    whenReady: s,
                    doNotNotifyOnError: !1,
                    location: eT.Hx.CONTENT_INVENTORY_MEMBERLIST,
                }),
                i?.(l, n);
        },
        eV = k ?? ee ?? ef,
        eG = () => {
            B((e) => !e), eI && H?.focus();
        },
        eF = (e) => {
            ey(e), e && H?.focus();
        };
    return (0, i.jsx)("div", {
        ref: K,
        style: { pointerEvents: Z ? "none" : "all" },
        children: (0, i.jsx)(f.O, {
            containerRef: K,
            children: (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(eS.A, { sent: X, shown: Z, className: ew.Jt }),
                    eV ??
                        (0, i.jsx)(ev.A, {
                            children: (0, i.jsxs)("div", {
                                className: ew.T7,
                                children: [
                                    (0, i.jsx)(eD, { channel: h, onClickSuggestion: eO }),
                                    (0, i.jsx)(P.g1, { onSelectEmoji: eO }),
                                ],
                            }),
                        }),
                    (0, i.jsxs)("div", {
                        className: eI ? ew.P2 : ew.VE,
                        children: [
                            (0, i.jsx)(P.nd, {
                                placeholder: eM,
                                onEnter: eP,
                                setEditorRef: (e) => W(e),
                                channel: G ? h : void 0,
                                showEmojiButton: null != eV,
                                className: ew.N8,
                                autoFocus: !1,
                                renderAttachButton: z
                                    ? () =>
                                          (0, i.jsx)(m.m, {
                                              text: ek,
                                              children: (0, i.jsx)(g.D, {
                                                  className: ew.wD,
                                                  onClick: eG,
                                                  children: G
                                                      ? (0, i.jsx)(_.N, { size: "custom", width: 20, height: 20 })
                                                      : (0, i.jsx)(x.X, { size: "custom", width: 20, height: 20 }),
                                              }),
                                          })
                                    : void 0,
                            }),
                            e_ &&
                                (0, i.jsx)(g.D, {
                                    onClick: () => eF(!1),
                                    className: ew.i3,
                                    children: (0, i.jsx)(A.P, {
                                        size: "custom",
                                        width: 20,
                                        height: 20,
                                        color: d.A.colors.ICON_STRONG,
                                    }),
                                }),
                        ],
                    }),
                    !1 === eI &&
                        (0, i.jsxs)("div", {
                            className: ew.fh,
                            children: [
                                !eC &&
                                    (0, i.jsx)(
                                        C.$,
                                        {
                                            fullWidth: !0,
                                            variant: "secondary",
                                            onClick: () => eF(!0),
                                            size: "md",
                                            text: eR.intl.string(eR.t.OAJQlP),
                                        },
                                        "toggleMessageMode",
                                    ),
                                eg,
                            ],
                        }),
                ],
            }),
        }),
    });
}
let eD = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [s, r] = l.useState(!1);
    l.useEffect(() => {
        r(!0);
    }, []);
    let a = !!k.A.keyboardModeEnabled && !s,
        o = (0, B.Fj)(t?.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? { emoji: e, url: e.url }
                    : { emoji: e, url: (0, eh._O)({ id: e.id, animated: e.animated, size: 58 }) },
            );
    return (0, i.jsx)(i.Fragment, {
        children: o.map((e) => {
            let { emoji: t, url: l } = e;
            return null != l
                ? (0, i.jsx)(
                      "div",
                      {
                          children: (0, i.jsx)(m.m, {
                              asContainer: !0,
                              text: eR.intl.formatToPlainString(eR.t.kilW3l, { emojiName: t.name }),
                              position: "top",
                              "aria-label": eR.intl.formatToPlainString(eR.t.kilW3l, { emojiName: t.name }),
                              shouldShow: !a && void 0,
                              children: (0, i.jsx)(ee.D, {
                                  emoji: t,
                                  isDisabled: !s,
                                  onClick: () => n({ emoji: t }),
                                  className: ew.Zg,
                              }),
                          }),
                      },
                      t.name,
                  )
                : null;
        }),
    });
};
function eU(e) {
    let { channel: t, userDescription: n, entry: l, disableGameProfileLinks: s, onUserPopoutClosed: a } = e,
        o = t?.guild_id,
        { displayParticipants: u, participant1: d, participant2: m, numOtherParticipants: p } = (0, eC.A)(l, 3),
        f = (0, c.bG)([eo.default], () => eo.default.getUser(l.author_id)),
        { streamPreviewUrl: g } = (0, eE.A)(l),
        _ = [d, m];
    return (0, i.jsxs)("div", {
        className: ew.MH,
        children: [
            (0, i.jsxs)("div", {
                className: ew.WP,
                children: [
                    (0, i.jsx)(h.A, {
                        maxUsers: 3,
                        users: u,
                        guildId: o,
                        size: E._3.SIZE_24,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: a,
                    }),
                    (0, i.jsx)(I.h, { size: 8, horizontal: !0 }),
                    (0, i.jsx)(v.D, {
                        variant: "heading-sm/normal",
                        className: r()(ew.Xn, ew.zA),
                        children: eR.intl.format(n, {
                            user0: em.Ay.getName(o, t?.id, _[0]),
                            user1: em.Ay.getName(o, t?.id, _[1]),
                            countOthers: p,
                            countOthersHook: (e, t) =>
                                (0, i.jsx)(
                                    y.E,
                                    { variant: "text-sm/medium", className: r()(ew.Mj, ew.nk), children: e },
                                    t,
                                ),
                            name0Hook: (e, n) =>
                                (0, i.jsx)(
                                    eg.A,
                                    {
                                        textClassName: r()(ew.Mj, ew.nk),
                                        text: e,
                                        user: _[0],
                                        channel: t,
                                        onPopoutClosed: a,
                                        enableDisplayNameStyles: !0,
                                    },
                                    n,
                                ),
                            name1Hook: (e, n) =>
                                (0, i.jsx)(
                                    eg.A,
                                    {
                                        textClassName: r()(ew.Mj, ew.nk),
                                        text: e,
                                        user: _[1],
                                        channel: t,
                                        onPopoutClosed: a,
                                        enableDisplayNameStyles: !0,
                                    },
                                    n,
                                ),
                        }),
                    }),
                ],
            }),
            null != g && (0, i.jsx)(V.Ay, { size: V.Ay.Sizes.SMALL }),
            null != f && (0, i.jsx)(ey.A, { user: f, channel: t, guildId: o, entry: l, disableGameProfileLinks: s }),
        ],
    });
}
function eV(e) {
    let { children: t, onClick: n } = e;
    return null == n ? t : (0, i.jsx)(g.D, { className: ew.Zw, onClick: n, children: t });
}
function eG(e) {
    let {
            title: t,
            subtitle: n,
            badges: l,
            children: s,
            onClickThumbnail: a,
            onClickTitle: o,
            onClickSubtitle: u,
            headerIcons: d,
            disableGameProfileLinks: h = !1,
            showCoverImage: m = !0,
            onUserPopoutClosed: p,
            trackRankingItemInteraction: f,
            ...g
        } = e,
        { entry: _ } = g,
        x = (0, ef.zD)(_),
        A = x ? _.extra?.application_id : void 0,
        C = (0, Q.W)();
    null != C && (A = C);
    let E = (0, K.A)(
            {
                location: "ContentPopout",
                applicationId: h ? void 0 : A,
                source: W.Ob.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: _.author_id,
            },
            { onOpened: () => f?.(eb.PA.OPENED_GAME_PROFILE) },
        ),
        { largeImage: S, smallImage: b } = (0, ep.nO)({ entry: _, showCoverImage: m }),
        N = (0, X.w)({ location: "content_inventory" }),
        T = (0, c.bG)([$.A], () => $.A.getDetectableIdsToApplicationIds()),
        j = x ? E : void 0;
    return (0, i.jsxs)("div", {
        className: ew.au,
        children: [
            (0, i.jsx)(eU, { disableGameProfileLinks: h, ...g, onUserPopoutClosed: p }),
            (0, i.jsxs)(ek, {
                backgroundImgSrc: S?.src,
                children: [
                    (0, i.jsxs)("div", {
                        className: ew.CG,
                        children: [
                            (0, i.jsx)("div", {
                                className: ew.Fb,
                                children: (0, i.jsx)(e_.d, {
                                    image: S,
                                    smallImage: b,
                                    aspectRatio: m ? "none" : void 0,
                                    onClick: a ?? j,
                                    size: e_.w.SIZE_72,
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: ew.iC,
                                children: [
                                    (0, i.jsx)(eV, {
                                        onClick: o ?? j,
                                        children: (0, i.jsx)(v.D, {
                                            variant: "heading-md/medium",
                                            className: r()(ew.$2, { [ew.bC]: null != d }),
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, i.jsx)(eV, {
                                              onClick: u ?? j,
                                              children: (0, i.jsx)(y.E, {
                                                  variant: "text-sm/normal",
                                                  className: ew.LG,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, i.jsx)(I.h, { size: 8 }),
                                    l,
                                ],
                            }),
                            (0, i.jsx)("div", { className: ew.hO, children: d }),
                        ],
                    }),
                    s,
                ],
            }),
            N && null != A && null != T[A]
                ? (0, i.jsx)(eL, {
                      className: ew.zu,
                      rewardOfferNoticeClassName: ew.PU,
                      applicationId: A,
                      userIds: [_.author_id],
                      location: "content_popout",
                      guildId: g.channel?.guild_id,
                      channelId: g.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: ej.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
function eF(e) {
    let {
            title: t,
            subtitle: n,
            badges: s,
            children: r,
            stream: a,
            onClickThumbnail: o,
            onClickTitle: u,
            onClickSubtitle: d,
            onUserPopoutClosed: h,
            trackRankingItemInteraction: m,
            ...p
        } = e,
        f = (0, c.bG)([ei.A], () => ei.A.getChannel(a?.channelId)),
        [g] = l.useMemo(() => (0, z.eo)(f, ec.A, el.A, es.A, H.default), [f]),
        { entry: _ } = p,
        x = (0, ef.zD)(_),
        A = x ? _.extra?.application_id : void 0,
        C = (0, Q.W)();
    null != C && (A = C);
    let E = (0, K.A)(
            {
                location: "ContentPopout",
                applicationId: A,
                source: W.Ob.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: _.author_id,
            },
            { onOpened: () => m?.(eb.PA.OPENED_GAME_PROFILE) },
        ),
        S = x ? E : void 0,
        { activity: b, activityApplication: N, fallbackApplication: T } = (0, eA.A)(_),
        { largeImage: j, smallImage: R } = (0, ep.D8)(b, N ?? T),
        { largeImage: w } = (0, ep.nO)({ entry: _ }),
        k = (0, X.w)({ location: "content_inventory" }),
        O = (0, c.bG)([$.A], () => $.A.getDetectableIdsToApplicationIds());
    return (0, i.jsxs)("div", {
        className: ew.au,
        children: [
            (0, i.jsx)(eU, { ...p, onUserPopoutClosed: h }),
            (0, i.jsxs)(ek, {
                backgroundImgSrc: w?.src,
                className: ew.uR,
                children: [
                    (0, i.jsx)(eV, {
                        onClick: g
                            ? () => {
                                  L.default.selectVoiceChannel(a.channelId), (0, M.Nl)(a);
                              }
                            : void 0,
                        children: (0, i.jsxs)("div", {
                            className: ew.nh,
                            children: [
                                (0, i.jsx)(Z.A, { className: ew.j7, stream: a }),
                                g &&
                                    (0, i.jsx)("div", {
                                        className: ew.NE,
                                        children: (0, i.jsx)(y.E, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: eR.intl.string(eR.t["7Xq/nV"]),
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: ew.$6,
                        children: [
                            null != j &&
                                (0, i.jsx)("div", {
                                    className: ew.Fb,
                                    children: (0, i.jsx)(e_.d, {
                                        image: j,
                                        smallImage: R,
                                        onClick: o ?? S,
                                        size: e_.w.SIZE_72,
                                    }),
                                }),
                            (0, i.jsxs)("div", {
                                className: ew.gv,
                                children: [
                                    (0, i.jsx)(eV, {
                                        onClick: u ?? S,
                                        children: (0, i.jsx)(v.D, {
                                            variant: "heading-md/semibold",
                                            className: ew.nk,
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, i.jsx)(eV, {
                                              onClick: d ?? S,
                                              children: (0, i.jsx)(y.E, {
                                                  variant: "text-sm/normal",
                                                  className: ew.zA,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, i.jsx)(I.h, { size: 8 }),
                                    s,
                                ],
                            }),
                        ],
                    }),
                    r,
                ],
            }),
            k && null != A && null != O[A]
                ? (0, i.jsx)(eL, {
                      className: ew.zu,
                      applicationId: A,
                      userIds: [_.author_id],
                      location: "content_popout",
                      guildId: p.channel?.guild_id,
                      channelId: p.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: ej.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
