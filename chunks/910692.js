"use strict";
n.d(t, { BC: () => eS, Eh: () => eE, Fl: () => ev, YN: () => em, fD: () => eA });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o);
n(340287);
var u = n(311907),
    c = n(554146),
    d = n(827734),
    _ = n(342952),
    f = n(990078),
    h = n(397927),
    p = n(308528),
    g = n(367513),
    E = n(956793),
    A = n(401843),
    I = n(775602),
    T = n(969151),
    y = n(1768),
    S = n(262763),
    v = n(402216),
    C = n(826673),
    b = n(822123),
    N = n(643501),
    R = n(409626),
    O = n(692969),
    D = n(279250),
    L = n(607407),
    w = n(263063),
    x = n(721592),
    P = n(378570),
    M = n(565688),
    k = n(93879),
    U = n(798048),
    G = n(912276),
    F = n(636585),
    V = n(95701),
    B = n(734057),
    j = n(71393),
    H = n(576705),
    Y = n(994500),
    W = n(543465),
    K = n(287809),
    $ = n(977997),
    z = n(607567),
    q = n(954571),
    X = n(486020),
    Z = n(562153),
    Q = n(939341),
    J = n(20805),
    ee = n(22869),
    et = n(623671),
    en = n(428249),
    er = n(327098),
    ei = n(576757),
    ea = n(202195),
    es = n(176563),
    eo = n(422973),
    el = n(315246),
    eu = n(899682),
    ec = n(424994),
    ed = n(652215),
    e_ = n(381941),
    ef = n(188275),
    eh = n(985018),
    ep = n(46e4);
function em(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: ep.SW, children: t });
}
function eg(e) {
    let { children: t, backgroundImgSrc: n, className: i, style: a = {} } = e,
        { primaryColor: o, secondaryColor: l } = (0, es.A)(n);
    return (
        null != n && (a.background = `linear-gradient(45deg, ${o}, ${l})`),
        (0, r.jsx)(h.NPJ, {
            theme: ed.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) => (0, r.jsx)("div", { className: s()(ep.ZK, e, i), style: a, children: t }),
        })
    );
}
function eE(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: ep.$m, children: t });
}
function eA(e) {
    let { channel: t, user: n, onReaction: a, entry: s, buttons: o = [], header: _, onVoiceChannelPreview: g } = e,
        [E, A] = i.useState(!1),
        [I, T] = i.useState(null),
        S = i.useRef(null),
        v = (0, u.bG)(
            [H.A],
            () => null != t && ed.kvI.CONTENT_ENTRY_EMBEDS.has(t.type) && H.A.can(ed.xBc.SEND_MESSAGES, t),
        ),
        [b, N] = i.useState(!1),
        [R, O] = i.useState(!1),
        { voiceBar: D, joinVoiceButton: L } = eb({ channel: t, entry: s, onVoiceChannelPreview: g }),
        { embeddedActivity: w } = (0, er.A)(s),
        x = eC(w),
        P = null != L && 0 === o.length ? [L] : o,
        M = P.length > 0,
        k = P.length >= 2,
        [U, G] = i.useState(!M),
        F = Z.Ay.getName(t?.guild_id, t?.id, n),
        V =
            null != t && E
                ? eh.intl.formatToPlainString(eh.t["8lzR/R"], { channel: `#${t.name}` })
                : eh.intl.formatToPlainString(eh.t["4c+CAx"], { channel: `@${F}` }),
        j = E ? eh.intl.string(eh.t.Z2CUgn) : eh.intl.string(eh.t.XLGiTG),
        Y = async (e) => {
            let r,
                { emoji: i } = e;
            if (null != i) {
                if (
                    (q.default.track(ed.HAw.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: ec.UG.GUILD_MEMBER_LIST,
                        channel_id: t?.id,
                        guild_id: t?.guild_id,
                    }),
                    (0, C.Dr)(c.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                    N(!0),
                    O(!1),
                    E)
                )
                    l()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), (r = t);
                else {
                    let e = await p.A.getOrEnsurePrivateChannel(n.id);
                    r = B.A.getChannel(e) ?? null;
                }
                return (
                    l()(null != r, "Send channel must be defined"),
                    K({
                        reply: `:${i.name}:`,
                        sendToChannel: r,
                        onComplete: (e, t) => {
                            O(!0),
                                setTimeout(() => {
                                    N(!1), a(e, t);
                                }, 600);
                        },
                        interactionType: ec.PA.REACTION_EMOJI_REACT_SENT,
                        requiresChannelReadiness: !1,
                    })
                );
            }
        },
        W = async (e) => {
            let r;
            if (((0, C.Dr)(c.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), E))
                l()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), (r = t);
            else {
                let e = await p.A.openPrivateChannel({ recipientIds: n.id }),
                    t = B.A.getChannel(e);
                l()(null != t, "DM channel must be defined"), (r = t);
            }
            let i = r.type === ed.rbe.DM ? ec.PA.DM_REACTION_MESSAGE_SENT : ec.PA.CHANNEL_REACTION_MESSAGE_SENT;
            return K({ reply: e, sendToChannel: r, interactionType: i, onComplete: a, requiresChannelReadiness: !0 });
        },
        K = async (e) => {
            let { reply: t, sendToChannel: n, onComplete: r, interactionType: i, requiresChannelReadiness: a } = e;
            I?.focus(),
                await (0, en.d)({
                    channel: n,
                    content: t,
                    entry: s,
                    whenReady: a,
                    doNotNotifyOnError: !1,
                    location: e_.Hx.CONTENT_INVENTORY_MEMBERLIST,
                }),
                r?.(i, n);
        },
        $ = null != _ ? _ : null != D ? D : null != x ? x : void 0,
        z = () => {
            A((e) => !e), U && I?.focus();
        },
        X = (e) => {
            G(e), e && I?.focus();
        };
    return (0, r.jsx)("div", {
        ref: S,
        style: { pointerEvents: b ? "none" : "all" },
        children: (0, r.jsx)(h.Oky, {
            containerRef: S,
            children: (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(eu.A, { sent: R, shown: b, className: ep.Jt }),
                    null != $
                        ? $
                        : (0, r.jsx)(eo.A, {
                              children: (0, r.jsxs)("div", {
                                  className: ep.T7,
                                  children: [
                                      (0, r.jsx)(eI, { channel: t, onClickSuggestion: Y }),
                                      (0, r.jsx)(y.g1, { onSelectEmoji: Y }),
                                  ],
                              }),
                          }),
                    (0, r.jsxs)("div", {
                        className: U ? ep.P2 : ep.VE,
                        children: [
                            (0, r.jsx)(y.nd, {
                                placeholder: V,
                                onEnter: W,
                                setEditorRef: (e) => T(e),
                                channel: E ? t : void 0,
                                showEmojiButton: null != $,
                                className: ep.N8,
                                autoFocus: !1,
                                renderAttachButton: v
                                    ? () =>
                                          (0, r.jsx)(f.m, {
                                              text: j,
                                              children: (0, r.jsx)(h.DUT, {
                                                  className: ep.wD,
                                                  onClick: z,
                                                  children: E
                                                      ? (0, r.jsx)(h.N$i, { size: "custom", width: 20, height: 20 })
                                                      : (0, r.jsx)(h.XxR, { size: "custom", width: 20, height: 20 }),
                                              }),
                                          })
                                    : void 0,
                            }),
                            M &&
                                (0, r.jsx)(h.DUT, {
                                    onClick: () => X(!1),
                                    className: ep.i3,
                                    children: (0, r.jsx)(h.PGe, {
                                        size: "custom",
                                        width: 20,
                                        height: 20,
                                        color: d.A.colors.ICON_STRONG,
                                    }),
                                }),
                        ],
                    }),
                    !1 === U &&
                        (0, r.jsxs)("div", {
                            className: ep.fh,
                            children: [
                                !k &&
                                    (0, r.jsx)(
                                        h.Button,
                                        {
                                            fullWidth: !0,
                                            variant: "secondary",
                                            onClick: () => X(!0),
                                            size: k ? "sm" : "md",
                                            text: eh.intl.string(eh.t.OAJQlP),
                                        },
                                        "toggleMessageMode",
                                    ),
                                P,
                            ],
                        }),
                ],
            }),
        }),
    });
}
let eI = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [a, s] = i.useState(!1);
    i.useEffect(() => {
        s(!0);
    }, []);
    let o = !!I.A.keyboardModeEnabled && !a,
        l = (0, b.Fj)(t?.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? { emoji: e, url: e.url }
                    : { emoji: e, url: (0, X._O)({ id: e.id, animated: e.animated, size: 58 }) },
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
                              text: eh.intl.formatToPlainString(eh.t.kilW3l, { emojiName: t.name }),
                              position: "top",
                              "aria-label": eh.intl.formatToPlainString(eh.t.kilW3l, { emojiName: t.name }),
                              shouldShow: !o && void 0,
                              children: (0, r.jsx)(G.D, {
                                  emoji: t,
                                  isDisabled: !a,
                                  onClick: () => n({ emoji: t }),
                                  className: ep.Zg,
                              }),
                          }),
                      },
                      t.name,
                  )
                : null;
        }),
    });
};
function eT(e) {
    let { channel: t, userDescription: n, entry: i, disableGameProfileLinks: a, onUserPopoutClosed: o } = e,
        l = t?.guild_id,
        { displayParticipants: c, participant1: d, participant2: f, numOtherParticipants: p } = (0, ei.A)(i, 3),
        g = (0, u.bG)([K.default], () => K.default.getUser(i.author_id)),
        { streamPreviewUrl: E } = (0, ea.A)(i),
        A = null != E,
        I = [d, f];
    return (0, r.jsxs)("div", {
        className: ep.MH,
        children: [
            (0, r.jsxs)("div", {
                className: ep.WP,
                children: [
                    (0, r.jsx)(_.A, {
                        maxUsers: 3,
                        users: c,
                        size: h._3J.SIZE_24,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: o,
                    }),
                    (0, r.jsx)(h.hKd, { size: 8, horizontal: !0 }),
                    (0, r.jsx)(h.Heading, {
                        variant: "heading-sm/normal",
                        className: s()(ep.Xn, ep.zA),
                        children: eh.intl.format(n, {
                            user0: Z.Ay.getName(l, t?.id, I[0]),
                            user1: Z.Ay.getName(l, t?.id, I[1]),
                            countOthers: p,
                            countOthersHook: (e, t) =>
                                (0, r.jsx)(
                                    h.Text,
                                    { variant: "text-sm/medium", className: s()(ep.Mj, ep.nk), children: e },
                                    t,
                                ),
                            name0Hook: (e, n) =>
                                (0, r.jsx)(
                                    ee.A,
                                    {
                                        textClassName: s()(ep.Mj, ep.nk),
                                        text: e,
                                        user: I[0],
                                        channel: t,
                                        onPopoutClosed: o,
                                        enableDisplayNameStyles: !0,
                                    },
                                    n,
                                ),
                            name1Hook: (e, n) =>
                                (0, r.jsx)(
                                    ee.A,
                                    {
                                        textClassName: s()(ep.Mj, ep.nk),
                                        text: e,
                                        user: I[1],
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
            A && (0, r.jsx)(v.Ay, { size: v.Ay.Sizes.SMALL }),
            null != g && (0, r.jsx)(el.A, { user: g, channel: t, guildId: l, entry: i, disableGameProfileLinks: a }),
        ],
    });
}
function ey(e) {
    let { children: t, onClick: n } = e;
    return null == n ? t : (0, r.jsx)(h.DUT, { className: ep.Zw, onClick: n, children: t });
}
function eS(e) {
    let {
            title: t,
            subtitle: n,
            badges: i,
            children: a,
            onClickThumbnail: o,
            onClickTitle: l,
            onClickSubtitle: u,
            headerIcons: c,
            disableGameProfileLinks: d = !1,
            showCoverImage: _ = !0,
            onUserPopoutClosed: f,
            trackRankingItemInteraction: p,
            ...g
        } = e,
        { entry: E } = g,
        A = (0, J.zD)(E),
        I = A ? E.extra?.application_id : void 0,
        T = (0, O.A)(
            {
                location: "ContentPopout",
                applicationId: d ? void 0 : I,
                source: R.Ob.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: E.author_id,
            },
            { onOpened: () => p?.(ec.PA.OPENED_GAME_PROFILE) },
        ),
        { largeImage: y, smallImage: S } = (0, Q.nO)({ entry: E, showCoverImage: _ }),
        v = (0, M.w)({ location: "content_inventory" }),
        C = A ? T : void 0;
    return (0, r.jsxs)("div", {
        className: ep.au,
        children: [
            (0, r.jsx)(eT, { disableGameProfileLinks: d, ...g, onUserPopoutClosed: f }),
            (0, r.jsxs)(eg, {
                backgroundImgSrc: y?.src,
                children: [
                    (0, r.jsxs)("div", {
                        className: ep.CG,
                        children: [
                            (0, r.jsx)("div", {
                                className: ep.Fb,
                                children: (0, r.jsx)(et.d, {
                                    image: y,
                                    smallImage: S,
                                    aspectRatio: _ ? "none" : void 0,
                                    onClick: o ?? C,
                                    size: et.w.SIZE_72,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: ep.iC,
                                children: [
                                    (0, r.jsx)(ey, {
                                        onClick: l ?? C,
                                        children: (0, r.jsx)(h.Heading, {
                                            variant: "heading-md/medium",
                                            className: s()(ep.$2, { [ep.bC]: null != c }),
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, r.jsx)(ey, {
                                              onClick: u ?? C,
                                              children: (0, r.jsx)(h.Text, {
                                                  variant: "text-sm/normal",
                                                  className: ep.LG,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, r.jsx)(h.hKd, { size: 8 }),
                                    i,
                                ],
                            }),
                            (0, r.jsx)("div", { className: ep.hO, children: c }),
                        ],
                    }),
                    a,
                ],
            }),
            v && null != I && ef.sQ.has(I)
                ? (0, r.jsx)(k.A, {
                      className: ep.zu,
                      applicationId: I,
                      userIds: [E.author_id],
                      cardSize: U.Y.SMALL_SQUARE,
                      location: "content_popout",
                      guildId: g.channel?.guild_id,
                      channelId: g.channel?.id,
                  })
                : null,
        ],
    });
}
function ev(e) {
    let {
            title: t,
            subtitle: n,
            badges: a,
            stream: s,
            onClickThumbnail: o,
            onClickTitle: l,
            onClickSubtitle: c,
            onUserPopoutClosed: d,
            trackRankingItemInteraction: _,
            ...f
        } = e,
        p = (0, u.bG)([B.A], () => B.A.getChannel(s?.channelId)),
        [g] = i.useMemo(() => (0, D.eo)(p, $.A, j.A, H.A, N.default), [p]),
        { entry: I } = f,
        T = (0, J.zD)(I),
        y = T ? I.extra?.application_id : void 0,
        S = (0, O.A)(
            {
                location: "ContentPopout",
                applicationId: y,
                source: R.Ob.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: I.author_id,
            },
            { onOpened: () => _?.(ec.PA.OPENED_GAME_PROFILE) },
        ),
        v = T ? S : void 0,
        { activity: C, activityApplication: b, fallbackApplication: w } = (0, er.A)(I),
        { largeImage: x, smallImage: P } = (0, Q.D8)(C, b ?? w),
        { largeImage: G } = (0, Q.nO)({ entry: I }),
        F = (0, M.w)({ location: "content_inventory" });
    return (0, r.jsxs)("div", {
        className: ep.au,
        children: [
            (0, r.jsx)(eT, { ...f, onUserPopoutClosed: d }),
            (0, r.jsxs)(eg, {
                backgroundImgSrc: G?.src,
                className: ep.uR,
                children: [
                    (0, r.jsx)(ey, {
                        onClick: g
                            ? () => {
                                  E.default.selectVoiceChannel(s.channelId), (0, A.Nl)(s);
                              }
                            : void 0,
                        children: (0, r.jsxs)("div", {
                            className: ep.nh,
                            children: [
                                (0, r.jsx)(L.A, { className: ep.j7, stream: s }),
                                g &&
                                    (0, r.jsx)("div", {
                                        className: ep.NE,
                                        children: (0, r.jsx)(h.Text, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: eh.intl.string(eh.t["7Xq/nV"]),
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: ep.$6,
                        children: [
                            null != x &&
                                (0, r.jsx)("div", {
                                    className: ep.Fb,
                                    children: (0, r.jsx)(et.d, {
                                        image: x,
                                        smallImage: P,
                                        onClick: o ?? v,
                                        size: et.w.SIZE_72,
                                    }),
                                }),
                            (0, r.jsxs)("div", {
                                className: ep.gv,
                                children: [
                                    (0, r.jsx)(ey, {
                                        onClick: l ?? v,
                                        children: (0, r.jsx)(h.Heading, {
                                            variant: "heading-md/semibold",
                                            className: ep.nk,
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, r.jsx)(ey, {
                                              onClick: c ?? v,
                                              children: (0, r.jsx)(h.Text, {
                                                  variant: "text-sm/normal",
                                                  className: ep.zA,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, r.jsx)(h.hKd, { size: 8 }),
                                    a,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            F && null != y && ef.sQ.has(y)
                ? (0, r.jsx)(k.A, {
                      className: ep.zu,
                      applicationId: y,
                      userIds: [I.author_id],
                      cardSize: U.Y.SMALL_SQUARE,
                      location: "content_popout",
                      guildId: f.channel?.guild_id,
                      channelId: f.channel?.id,
                  })
                : null,
        ],
    });
}
function eC(e) {
    let t = (0, u.bG)([j.A], () => j.A.getGuild((0, T.D)(e?.location))),
        n = (0, u.bG)([B.A], () => B.A.getChannel((0, T.H)(e?.location))),
        i = (0, u.yK)([K.default], () => e?.participants?.map((e) => K.default.getUser(e.userId)) ?? []);
    return null != e && null != t && null != n && V.k3.has(n.type)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: ep.kP,
                      children: [
                          (0, r.jsxs)(h.DUT, {
                              "aria-label": eh.intl.string(eh.t["W/A4Qp"]),
                              onClick: () => (0, P.iN)(n.id),
                              className: ep.I3,
                              children: [
                                  (0, r.jsx)(w.A, { guild: t, size: w.A.Sizes.SMOL, className: ep.O9, active: !0 }),
                                  (0, r.jsx)(h._BQ, { size: "xxs", color: d.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                                  (0, r.jsx)(h.N$i, { size: "xs", color: d.A.colors.TEXT_DEFAULT }),
                                  (0, r.jsx)(h.Text, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      className: ep.NR,
                                      children: n?.name,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(F.A, {
                              guildId: t.id,
                              users: i,
                              max: 3,
                              renderUser: (e, n) =>
                                  (0, r.jsx)(h.euF, {
                                      src: e.getAvatarURL(t.id, 16),
                                      size: h._3J.SIZE_16,
                                      "aria-label": "avatar",
                                      className: n,
                                  }),
                              renderMoreUsers: (e) =>
                                  (0, r.jsx)("div", {
                                      className: ep.V9,
                                      children: (0, r.jsx)(h.Text, {
                                          variant: "text-xxs/semibold",
                                          color: "text-default",
                                          children: e,
                                      }),
                                  }),
                          }),
                      ],
                  }),
                  (0, r.jsx)(h.hKd, { size: 16 }),
              ],
          })
        : null;
}
function eb(e) {
    let { channel: t, entry: n, onVoiceChannelPreview: a } = e,
        { streamPreviewUrl: s, channel: o } = (0, ea.A)(n),
        { needSubscriptionToAccess: l } = (0, x.A)(t?.id),
        c = (0, u.bG)([j.A], () => (null != o ? j.A.getGuild(o.guild_id) : void 0)),
        _ = (0, u.yK)([z.Ay], () => (null != o ? z.Ay.getVoiceStatesForChannel(o) : []), [o]),
        p = (0, u.bG)([$.A], () => $.A.isInChannel(o?.id)),
        E = i.useMemo(() => {
            for (let e of _) {
                let t = B.A.getDMFromUserId(e.user.id),
                    n = null != t && W.Ay.isChannelMuted(null, t),
                    r = Y.A.isBlockedOrIgnored(e.user.id);
                if (n || r) return !0;
            }
            return !1;
        }, [_]);
    if (null == o || null == c) return { voiceBar: void 0, joinVoiceButton: void 0 };
    let A = null != s,
        I = () => {
            g.A.updateChatOpen(o.id, !0), (0, P.iN)(o.id), a?.(o);
        },
        T = () => {
            S.A.handleVoiceConnect({
                channel: o,
                connected: p,
                needSubscriptionToAccess: l,
                routeDirectlyToChannel: !0,
            });
        },
        y = (e) => {
            let { children: t, text: n, hasRestrictedOrMutedVCParticipant: i } = e,
                a = i
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              i && (0, r.jsx)(h.id, { size: "custom", width: 13, height: 13, className: ep.vb }),
                              eh.intl.string(eh.t.d6DpXI),
                          ],
                      })
                    : n;
            return (0, r.jsx)(
                f.m,
                {
                    "aria-label": i ? eh.intl.string(eh.t.d6DpXI) : (n ?? !1),
                    __unsupportedReactNodeAsText: a,
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
                    className: ep.kP,
                    children: [
                        (0, r.jsx)(y, {
                            text: eh.intl.string(eh.t.WIVYqJ),
                            hasRestrictedOrMutedVCParticipant: E,
                            children: (0, r.jsxs)(h.DUT, {
                                "aria-label": eh.intl.string(eh.t.WIVYqJ),
                                onClick: I,
                                className: ep.I3,
                                children: [
                                    (0, r.jsx)(w.A, { guild: c, size: w.A.Sizes.SMOL, className: ep.O9, active: !0 }),
                                    (0, r.jsx)(h._BQ, { size: "xxs", color: d.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                                    (0, r.jsx)(h.HKD, { size: "xs", color: d.A.colors.TEXT_DEFAULT }),
                                    (0, r.jsx)(h.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: ep.NR,
                                        children: o.name,
                                    }),
                                ],
                            }),
                        }),
                        (0, r.jsx)(F.A, {
                            guildId: c.id,
                            users: _,
                            max: 3,
                            renderUser: (e, t) =>
                                (0, r.jsx)(h.euF, {
                                    src: e.user.getAvatarURL(c.id, 16),
                                    size: h._3J.SIZE_16,
                                    "aria-label": "avatar",
                                    className: t,
                                }),
                            renderMoreUsers: (e) =>
                                (0, r.jsx)("div", {
                                    className: ep.V9,
                                    children: (0, r.jsx)(h.Text, {
                                        variant: "text-xxs/semibold",
                                        color: "text-default",
                                        children: e,
                                    }),
                                }),
                        }),
                    ],
                }),
                (0, r.jsx)(h.hKd, { size: 16 }),
            ],
        }),
        joinVoiceButton: p
            ? null
            : (0, r.jsx)(y, {
                  hasRestrictedOrMutedVCParticipant: E,
                  children: (0, r.jsx)(h.Button, {
                      onClick: T,
                      fullWidth: !0,
                      text: A ? eh.intl.string(eh.t.I6JG46) : eh.intl.string(eh.t.VJlc0S),
                      icon: A ? h.kN9 : h.HKD,
                      variant: "active",
                      size: "md",
                  }),
              }),
    };
}
