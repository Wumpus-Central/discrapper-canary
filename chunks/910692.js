"use strict";
n.d(t, { BC: () => eV, Eh: () => ex, Fl: () => eB, YN: () => eM, fD: () => ek });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o);
n(340287);
var u = n(311907),
    c = n(554146),
    d = n(827734),
    _ = n(342952),
    f = n(990078),
    p = n(43990),
    h = n(315710),
    E = n(939249),
    m = n(276293),
    g = n(935063),
    A = n(789645),
    I = n(821609),
    T = n(778712),
    S = n(696986),
    y = n(534514),
    N = n(834730),
    v = n(320448),
    C = n(97808),
    O = n(738188),
    R = n(983851),
    b = n(31300),
    D = n(308528),
    L = n(367513),
    w = n(956793),
    M = n(401843),
    P = n(775602),
    x = n(969151),
    k = n(1768),
    U = n(47167),
    G = n(262763),
    F = n(402216),
    V = n(268218),
    B = n(826673),
    H = n(822123),
    j = n(643501),
    Y = n(409626),
    W = n(692969),
    K = n(279250),
    $ = n(607407),
    z = n(263063),
    q = n(721592),
    X = n(378570),
    Q = n(832163),
    Z = n(565688),
    J = n(533562),
    ee = n(912276),
    et = n(636585),
    en = n(95701),
    er = n(734057),
    ei = n(71393),
    es = n(576705),
    ea = n(994500),
    eo = n(543465),
    el = n(287809),
    eu = n(977997),
    ec = n(607567),
    ed = n(954571),
    e_ = n(486020),
    ef = n(562153),
    ep = n(939341),
    eh = n(20805),
    eE = n(22869),
    em = n(623671),
    eg = n(428249),
    eA = n(327098),
    eI = n(576757),
    eT = n(202195),
    eS = n(176563),
    ey = n(422973),
    eN = n(315246),
    ev = n(899682),
    eC = n(424994),
    eO = n(652215),
    eR = n(381941),
    eb = n(699976),
    eD = n(985018),
    eL = n(994063);
let ew = (0, V.Fe)({
    createPromise: () => Promise.all([n.e("13066"), n.e("20667")]).then(n.bind(n, 93879)),
    webpackId: 93879,
});
function eM(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: eL.SW, children: t });
}
function eP(e) {
    let { children: t, backgroundImgSrc: n, className: i, style: s = {} } = e,
        { primaryColor: o, secondaryColor: l } = (0, eS.A)(n);
    return (
        null != n && (s.background = `linear-gradient(45deg, ${o}, ${l})`),
        (0, r.jsx)(p.N, {
            theme: eO.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) => (0, r.jsx)("div", { className: a()(eL.ZK, e, i), style: s, children: t }),
        })
    );
}
function ex(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: eL.$m, children: t });
}
function ek(e) {
    var t;
    let n,
        s,
        a,
        o,
        { channel: _, user: p, onReaction: y, entry: w, buttons: M = [], header: P, onVoiceChannelPreview: F } = e,
        [V, H] = i.useState(!1),
        [j, Y] = i.useState(null),
        W = i.useRef(null),
        K = (0, u.bG)(
            [es.A],
            () => null != _ && eO.kvI.CONTENT_ENTRY_EMBEDS.has(_.type) && es.A.can(eO.xBc.SEND_MESSAGES, _),
        ),
        [$, Q] = i.useState(!1),
        [Z, J] = i.useState(!1),
        { voiceBar: ee, joinVoiceButton: e_ } = (function (e) {
            let { channel: t, entry: n, onVoiceChannelPreview: s } = e,
                { streamPreviewUrl: a, channel: o } = (0, eT.A)(n),
                l = (0, U.Ay)(o),
                { needSubscriptionToAccess: c } = (0, q.A)(t?.id),
                _ = (0, u.bG)([ei.A], () => (null != o ? ei.A.getGuild(o.guild_id) : void 0)),
                p = (0, u.yK)([ec.Ay], () => (null != o ? ec.Ay.getVoiceStatesForChannel(o) : []), [o]),
                h = (0, u.bG)([eu.A], () => eu.A.isInChannel(o?.id)),
                m = i.useMemo(() => {
                    for (let e of p) {
                        let t = er.A.getDMFromUserId(e.user.id),
                            n = null != t && eo.Ay.isChannelMuted(null, t),
                            r = ea.A.isBlockedOrIgnored(e.user.id);
                        if (n || r) return !0;
                    }
                    return !1;
                }, [p]);
            if (null == o || null == _) return { voiceBar: void 0, joinVoiceButton: void 0 };
            let g = null != a,
                A = (e) => {
                    let { children: t, text: n, hasRestrictedOrMutedVCParticipant: i } = e,
                        s = i
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(O.i, { size: "custom", width: 13, height: 13, className: eL.vb }),
                                      eD.intl.string(eD.t.d6DpXI),
                                  ],
                              })
                            : n;
                    return (0, r.jsx)(
                        f.m,
                        {
                            "aria-label": i ? eD.intl.string(eD.t.d6DpXI) : (n ?? !1),
                            __unsupportedReactNodeAsText: s,
                            shouldShow: !0,
                            children: t,
                        },
                        "voice-preview",
                    );
                };
            return {
                voiceBar: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: eL.kP,
                            children: [
                                (0, r.jsx)(A, {
                                    text: eD.intl.string(eD.t.WIVYqJ),
                                    hasRestrictedOrMutedVCParticipant: m,
                                    children: (0, r.jsxs)(E.D, {
                                        "aria-label": eD.intl.string(eD.t.WIVYqJ),
                                        onClick: () => {
                                            L.A.updateChatOpen(o.id, !0), (0, X.iN)(o.id), s?.(o);
                                        },
                                        className: eL.I3,
                                        children: [
                                            (0, r.jsx)(z.Ay, {
                                                guild: _,
                                                size: z.Ay.Sizes.SMOL,
                                                className: eL.O9,
                                                active: !0,
                                            }),
                                            (0, r.jsx)(v._, {
                                                size: "xxs",
                                                color: d.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            }),
                                            (0, r.jsx)(R.H, { size: "xs", color: d.A.colors.TEXT_DEFAULT }),
                                            (0, r.jsx)(N.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: eL.NR,
                                                children: l,
                                            }),
                                        ],
                                    }),
                                }),
                                (0, r.jsx)(et.A, {
                                    guildId: _.id,
                                    users: p,
                                    max: 3,
                                    renderUser: (e, t) =>
                                        (0, r.jsx)(C.eu, {
                                            src: e.user.getAvatarURL(_.id, 16),
                                            size: T._3.SIZE_16,
                                            "aria-label": "avatar",
                                            className: t,
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, r.jsx)("div", {
                                            className: eL.V9,
                                            children: (0, r.jsx)(N.E, {
                                                variant: "text-xxs/semibold",
                                                color: "text-default",
                                                children: e,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(S.h, { size: 16 }),
                    ],
                }),
                joinVoiceButton: h
                    ? null
                    : (0, r.jsx)(A, {
                          hasRestrictedOrMutedVCParticipant: m,
                          children: (0, r.jsx)(I.$, {
                              onClick: () => {
                                  G.A.handleVoiceConnect({
                                      channel: o,
                                      connected: h,
                                      needSubscriptionToAccess: c,
                                      routeDirectlyToChannel: !0,
                                  });
                              },
                              fullWidth: !0,
                              text: g ? eD.intl.string(eD.t.I6JG46) : eD.intl.string(eD.t.VJlc0S),
                              icon: g ? b.k : R.H,
                              variant: "active",
                              size: "md",
                          }),
                      }),
            };
        })({ channel: _, entry: w, onVoiceChannelPreview: F }),
        { embeddedActivity: ep } = (0, eA.A)(w),
        eh =
            ((t = ep),
            (n = (0, u.bG)([ei.A], () => ei.A.getGuild((0, x.D)(t?.location)))),
            (s = (0, u.bG)([er.A], () => er.A.getChannel((0, x.H)(t?.location)))),
            (a = (0, u.yK)([el.default], () => t?.participants?.map((e) => el.default.getUser(e.userId)) ?? [])),
            (o = (0, U.Ay)(s)),
            null != t && null != n && null != s && en.k3.has(s.type)
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)("div", {
                              className: eL.kP,
                              children: [
                                  (0, r.jsxs)(E.D, {
                                      "aria-label": eD.intl.string(eD.t["W/A4Qp"]),
                                      onClick: () => (0, X.iN)(s.id),
                                      className: eL.I3,
                                      children: [
                                          (0, r.jsx)(z.Ay, {
                                              guild: n,
                                              size: z.Ay.Sizes.SMOL,
                                              className: eL.O9,
                                              active: !0,
                                          }),
                                          (0, r.jsx)(v._, { size: "xxs", color: d.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                                          (0, r.jsx)(m.N, { size: "xs", color: d.A.colors.TEXT_DEFAULT }),
                                          (0, r.jsx)(N.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              className: eL.NR,
                                              children: o,
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(et.A, {
                                      guildId: n.id,
                                      users: a,
                                      max: 3,
                                      renderUser: (e, t) =>
                                          (0, r.jsx)(C.eu, {
                                              src: e.getAvatarURL(n.id, 16),
                                              size: T._3.SIZE_16,
                                              "aria-label": "avatar",
                                              className: t,
                                          }),
                                      renderMoreUsers: (e) =>
                                          (0, r.jsx)("div", {
                                              className: eL.V9,
                                              children: (0, r.jsx)(N.E, {
                                                  variant: "text-xxs/semibold",
                                                  color: "text-default",
                                                  children: e,
                                              }),
                                          }),
                                  }),
                              ],
                          }),
                          (0, r.jsx)(S.h, { size: 16 }),
                      ],
                  })
                : null),
        eE = null != e_ && 0 === M.length ? [e_] : M,
        em = eE.length > 0,
        eI = eE.length >= 2,
        [eS, eN] = i.useState(!em),
        eb = ef.Ay.getName(_?.guild_id, _?.id, p),
        ew = (0, U.Ay)(_, !0),
        eM =
            null != _ && V
                ? eD.intl.formatToPlainString(eD.t["8lzR/R"], { channel: ew })
                : eD.intl.formatToPlainString(eD.t["4c+CAx"], { channel: `@${eb}` }),
        eP = V ? eD.intl.string(eD.t.Z2CUgn) : eD.intl.string(eD.t.XLGiTG),
        ex = async (e) => {
            let t,
                { emoji: n } = e;
            if (null != n) {
                if (
                    (ed.default.track(eO.HAw.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: eC.UG.GUILD_MEMBER_LIST,
                        channel_id: _?.id,
                        guild_id: _?.guild_id,
                    }),
                    (0, B.Dr)(c.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                    Q(!0),
                    J(!1),
                    V)
                )
                    l()(null != _, "shareToChannelMode should only be true if a valid channel is passed"), (t = _);
                else {
                    let e = await D.A.getOrEnsurePrivateChannel(p.id);
                    t = er.A.getChannel(e) ?? null;
                }
                return (
                    l()(null != t, "Send channel must be defined"),
                    eG({
                        reply: `:${n.name}:`,
                        sendToChannel: t,
                        onComplete: (e, t) => {
                            J(!0),
                                setTimeout(() => {
                                    Q(!1), y(e, t);
                                }, 600);
                        },
                        interactionType: eC.PA.REACTION_EMOJI_REACT_SENT,
                        requiresChannelReadiness: !1,
                    })
                );
            }
        },
        ek = async (e) => {
            let t;
            if (((0, B.Dr)(c.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), V))
                l()(null != _, "shareToChannelMode should only be true if a valid channel is passed"), (t = _);
            else {
                let e = await D.A.openPrivateChannel({ recipientIds: p.id }),
                    n = er.A.getChannel(e);
                l()(null != n, "DM channel must be defined"), (t = n);
            }
            let n = t.type === eO.rbe.DM ? eC.PA.DM_REACTION_MESSAGE_SENT : eC.PA.CHANNEL_REACTION_MESSAGE_SENT;
            return eG({ reply: e, sendToChannel: t, interactionType: n, onComplete: y, requiresChannelReadiness: !0 });
        },
        eG = async (e) => {
            let { reply: t, sendToChannel: n, onComplete: r, interactionType: i, requiresChannelReadiness: s } = e;
            j?.focus(),
                await (0, eg.d)({
                    channel: n,
                    content: t,
                    entry: w,
                    whenReady: s,
                    doNotNotifyOnError: !1,
                    location: eR.Hx.CONTENT_INVENTORY_MEMBERLIST,
                }),
                r?.(i, n);
        },
        eF = P ?? ee ?? eh,
        eV = () => {
            H((e) => !e), eS && j?.focus();
        },
        eB = (e) => {
            eN(e), e && j?.focus();
        };
    return (0, r.jsx)("div", {
        ref: W,
        style: { pointerEvents: $ ? "none" : "all" },
        children: (0, r.jsx)(h.O, {
            containerRef: W,
            children: (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(ev.A, { sent: Z, shown: $, className: eL.Jt }),
                    eF ??
                        (0, r.jsx)(ey.A, {
                            children: (0, r.jsxs)("div", {
                                className: eL.T7,
                                children: [
                                    (0, r.jsx)(eU, { channel: _, onClickSuggestion: ex }),
                                    (0, r.jsx)(k.g1, { onSelectEmoji: ex }),
                                ],
                            }),
                        }),
                    (0, r.jsxs)("div", {
                        className: eS ? eL.P2 : eL.VE,
                        children: [
                            (0, r.jsx)(k.nd, {
                                placeholder: eM,
                                onEnter: ek,
                                setEditorRef: (e) => Y(e),
                                channel: V ? _ : void 0,
                                showEmojiButton: null != eF,
                                className: eL.N8,
                                autoFocus: !1,
                                renderAttachButton: K
                                    ? () =>
                                          (0, r.jsx)(f.m, {
                                              text: eP,
                                              children: (0, r.jsx)(E.D, {
                                                  className: eL.wD,
                                                  onClick: eV,
                                                  children: V
                                                      ? (0, r.jsx)(m.N, { size: "custom", width: 20, height: 20 })
                                                      : (0, r.jsx)(g.X, { size: "custom", width: 20, height: 20 }),
                                              }),
                                          })
                                    : void 0,
                            }),
                            em &&
                                (0, r.jsx)(E.D, {
                                    onClick: () => eB(!1),
                                    className: eL.i3,
                                    children: (0, r.jsx)(A.P, {
                                        size: "custom",
                                        width: 20,
                                        height: 20,
                                        color: d.A.colors.ICON_STRONG,
                                    }),
                                }),
                        ],
                    }),
                    !1 === eS &&
                        (0, r.jsxs)("div", {
                            className: eL.fh,
                            children: [
                                !eI &&
                                    (0, r.jsx)(
                                        I.$,
                                        {
                                            fullWidth: !0,
                                            variant: "secondary",
                                            onClick: () => eB(!0),
                                            size: "md",
                                            text: eD.intl.string(eD.t.OAJQlP),
                                        },
                                        "toggleMessageMode",
                                    ),
                                eE,
                            ],
                        }),
                ],
            }),
        }),
    });
}
let eU = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [s, a] = i.useState(!1);
    i.useEffect(() => {
        a(!0);
    }, []);
    let o = !!P.A.keyboardModeEnabled && !s,
        l = (0, H.Fj)(t?.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? { emoji: e, url: e.url }
                    : { emoji: e, url: (0, e_._O)({ id: e.id, animated: e.animated, size: 58 }) },
            );
    return (0, r.jsx)(r.Fragment, {
        children: l.map((e) => {
            let { emoji: t, url: i } = e;
            return null != i
                ? (0, r.jsx)(
                      "div",
                      {
                          children: (0, r.jsx)(f.m, {
                              asContainer: !0,
                              text: eD.intl.formatToPlainString(eD.t.kilW3l, { emojiName: t.name }),
                              position: "top",
                              "aria-label": eD.intl.formatToPlainString(eD.t.kilW3l, { emojiName: t.name }),
                              shouldShow: !o && void 0,
                              children: (0, r.jsx)(ee.D, {
                                  emoji: t,
                                  isDisabled: !s,
                                  onClick: () => n({ emoji: t }),
                                  className: eL.Zg,
                              }),
                          }),
                      },
                      t.name,
                  )
                : null;
        }),
    });
};
function eG(e) {
    let { channel: t, userDescription: n, entry: i, disableGameProfileLinks: s, onUserPopoutClosed: o } = e,
        l = t?.guild_id,
        { displayParticipants: c, participant1: d, participant2: f, numOtherParticipants: p } = (0, eI.A)(i, 3),
        h = (0, u.bG)([el.default], () => el.default.getUser(i.author_id)),
        { streamPreviewUrl: E } = (0, eT.A)(i),
        m = [d, f];
    return (0, r.jsxs)("div", {
        className: eL.MH,
        children: [
            (0, r.jsxs)("div", {
                className: eL.WP,
                children: [
                    (0, r.jsx)(_.A, {
                        maxUsers: 3,
                        users: c,
                        guildId: l,
                        size: T._3.SIZE_24,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: o,
                    }),
                    (0, r.jsx)(S.h, { size: 8, horizontal: !0 }),
                    (0, r.jsx)(y.D, {
                        variant: "heading-sm/normal",
                        className: a()(eL.Xn, eL.zA),
                        children: eD.intl.format(n, {
                            user0: ef.Ay.getName(l, t?.id, m[0]),
                            user1: ef.Ay.getName(l, t?.id, m[1]),
                            countOthers: p,
                            countOthersHook: (e, t) =>
                                (0, r.jsx)(
                                    N.E,
                                    { variant: "text-sm/medium", className: a()(eL.Mj, eL.nk), children: e },
                                    t,
                                ),
                            name0Hook: (e, n) =>
                                (0, r.jsx)(
                                    eE.A,
                                    {
                                        textClassName: a()(eL.Mj, eL.nk),
                                        text: e,
                                        user: m[0],
                                        channel: t,
                                        onPopoutClosed: o,
                                        enableDisplayNameStyles: !0,
                                    },
                                    n,
                                ),
                            name1Hook: (e, n) =>
                                (0, r.jsx)(
                                    eE.A,
                                    {
                                        textClassName: a()(eL.Mj, eL.nk),
                                        text: e,
                                        user: m[1],
                                        channel: t,
                                        onPopoutClosed: o,
                                        enableDisplayNameStyles: !0,
                                    },
                                    n,
                                ),
                        }),
                    }),
                ],
            }),
            null != E && (0, r.jsx)(F.Ay, { size: F.Ay.Sizes.SMALL }),
            null != h && (0, r.jsx)(eN.A, { user: h, channel: t, guildId: l, entry: i, disableGameProfileLinks: s }),
        ],
    });
}
function eF(e) {
    let { children: t, onClick: n } = e;
    return null == n ? t : (0, r.jsx)(E.D, { className: eL.Zw, onClick: n, children: t });
}
function eV(e) {
    let {
            title: t,
            subtitle: n,
            badges: i,
            children: s,
            onClickThumbnail: o,
            onClickTitle: l,
            onClickSubtitle: c,
            headerIcons: d,
            disableGameProfileLinks: _ = !1,
            showCoverImage: f = !0,
            onUserPopoutClosed: p,
            trackRankingItemInteraction: h,
            ...E
        } = e,
        { entry: m } = E,
        g = (0, eh.zD)(m),
        A = g ? m.extra?.application_id : void 0,
        I = (0, J.W)();
    null != I && (A = I);
    let T = (0, W.A)(
            {
                location: "ContentPopout",
                applicationId: _ ? void 0 : A,
                source: Y.Ob.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: m.author_id,
            },
            { onOpened: () => h?.(eC.PA.OPENED_GAME_PROFILE) },
        ),
        { largeImage: v, smallImage: C } = (0, ep.nO)({ entry: m, showCoverImage: f }),
        O = (0, Z.w)({ location: "content_inventory" }),
        R = (0, u.bG)([Q.A], () => Q.A.getDetectableIdsToApplicationIds()),
        b = g ? T : void 0;
    return (0, r.jsxs)("div", {
        className: eL.au,
        children: [
            (0, r.jsx)(eG, { disableGameProfileLinks: _, ...E, onUserPopoutClosed: p }),
            (0, r.jsxs)(eP, {
                backgroundImgSrc: v?.src,
                children: [
                    (0, r.jsxs)("div", {
                        className: eL.CG,
                        children: [
                            (0, r.jsx)("div", {
                                className: eL.Fb,
                                children: (0, r.jsx)(em.d, {
                                    image: v,
                                    smallImage: C,
                                    aspectRatio: f ? "none" : void 0,
                                    onClick: o ?? b,
                                    size: em.w.SIZE_72,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: eL.iC,
                                children: [
                                    (0, r.jsx)(eF, {
                                        onClick: l ?? b,
                                        children: (0, r.jsx)(y.D, {
                                            variant: "heading-md/medium",
                                            className: a()(eL.$2, { [eL.bC]: null != d }),
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, r.jsx)(eF, {
                                              onClick: c ?? b,
                                              children: (0, r.jsx)(N.E, {
                                                  variant: "text-sm/normal",
                                                  className: eL.LG,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, r.jsx)(S.h, { size: 8 }),
                                    i,
                                ],
                            }),
                            (0, r.jsx)("div", { className: eL.hO, children: d }),
                        ],
                    }),
                    s,
                ],
            }),
            O && null != A && null != R[A]
                ? (0, r.jsx)(ew, {
                      className: eL.zu,
                      rewardOfferNoticeClassName: eL.PU,
                      applicationId: A,
                      userIds: [m.author_id],
                      location: "content_popout",
                      guildId: E.channel?.guild_id,
                      channelId: E.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: eb.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
function eB(e) {
    let {
            title: t,
            subtitle: n,
            badges: s,
            children: a,
            stream: o,
            onClickThumbnail: l,
            onClickTitle: c,
            onClickSubtitle: d,
            onUserPopoutClosed: _,
            trackRankingItemInteraction: f,
            ...p
        } = e,
        h = (0, u.bG)([er.A], () => er.A.getChannel(o?.channelId)),
        [E] = i.useMemo(() => (0, K.eo)(h, eu.A, ei.A, es.A, j.default), [h]),
        { entry: m } = p,
        g = (0, eh.zD)(m),
        A = g ? m.extra?.application_id : void 0,
        I = (0, J.W)();
    null != I && (A = I);
    let T = (0, W.A)(
            {
                location: "ContentPopout",
                applicationId: A,
                source: Y.Ob.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: m.author_id,
            },
            { onOpened: () => f?.(eC.PA.OPENED_GAME_PROFILE) },
        ),
        v = g ? T : void 0,
        { activity: C, activityApplication: O, fallbackApplication: R } = (0, eA.A)(m),
        { largeImage: b, smallImage: D } = (0, ep.D8)(C, O ?? R),
        { largeImage: L } = (0, ep.nO)({ entry: m }),
        P = (0, Z.w)({ location: "content_inventory" }),
        x = (0, u.bG)([Q.A], () => Q.A.getDetectableIdsToApplicationIds());
    return (0, r.jsxs)("div", {
        className: eL.au,
        children: [
            (0, r.jsx)(eG, { ...p, onUserPopoutClosed: _ }),
            (0, r.jsxs)(eP, {
                backgroundImgSrc: L?.src,
                className: eL.uR,
                children: [
                    (0, r.jsx)(eF, {
                        onClick: E
                            ? () => {
                                  w.default.selectVoiceChannel(o.channelId), (0, M.Nl)(o);
                              }
                            : void 0,
                        children: (0, r.jsxs)("div", {
                            className: eL.nh,
                            children: [
                                (0, r.jsx)($.A, { className: eL.j7, stream: o }),
                                E &&
                                    (0, r.jsx)("div", {
                                        className: eL.NE,
                                        children: (0, r.jsx)(N.E, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: eD.intl.string(eD.t["7Xq/nV"]),
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: eL.$6,
                        children: [
                            null != b &&
                                (0, r.jsx)("div", {
                                    className: eL.Fb,
                                    children: (0, r.jsx)(em.d, {
                                        image: b,
                                        smallImage: D,
                                        onClick: l ?? v,
                                        size: em.w.SIZE_72,
                                    }),
                                }),
                            (0, r.jsxs)("div", {
                                className: eL.gv,
                                children: [
                                    (0, r.jsx)(eF, {
                                        onClick: c ?? v,
                                        children: (0, r.jsx)(y.D, {
                                            variant: "heading-md/semibold",
                                            className: eL.nk,
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, r.jsx)(eF, {
                                              onClick: d ?? v,
                                              children: (0, r.jsx)(N.E, {
                                                  variant: "text-sm/normal",
                                                  className: eL.zA,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, r.jsx)(S.h, { size: 8 }),
                                    s,
                                ],
                            }),
                        ],
                    }),
                    a,
                ],
            }),
            P && null != A && null != x[A]
                ? (0, r.jsx)(ew, {
                      className: eL.zu,
                      applicationId: A,
                      userIds: [m.author_id],
                      location: "content_popout",
                      guildId: p.channel?.guild_id,
                      channelId: p.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: eb.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
