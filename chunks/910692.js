"use strict";
n.d(t, { BC: () => ev, Eh: () => eA, Fl: () => eC, YN: () => eg, fD: () => eI });
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
    k = n(533562),
    U = n(93879),
    G = n(798048),
    F = n(912276),
    V = n(636585),
    B = n(95701),
    j = n(734057),
    H = n(71393),
    Y = n(576705),
    W = n(994500),
    K = n(543465),
    $ = n(287809),
    z = n(977997),
    q = n(607567),
    X = n(954571),
    Z = n(486020),
    Q = n(562153),
    J = n(939341),
    ee = n(20805),
    et = n(22869),
    en = n(623671),
    er = n(428249),
    ei = n(327098),
    ea = n(576757),
    es = n(202195),
    eo = n(176563),
    el = n(422973),
    eu = n(315246),
    ec = n(899682),
    ed = n(424994),
    e_ = n(652215),
    ef = n(381941),
    eh = n(188275),
    ep = n(985018),
    em = n(187866);
function eg(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: em.SW, children: t });
}
function eE(e) {
    let { children: t, backgroundImgSrc: n, className: i, style: a = {} } = e,
        { primaryColor: o, secondaryColor: l } = (0, eo.A)(n);
    return (
        null != n && (a.background = `linear-gradient(45deg, ${o}, ${l})`),
        (0, r.jsx)(h.NPJ, {
            theme: e_.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) => (0, r.jsx)("div", { className: s()(em.ZK, e, i), style: a, children: t }),
        })
    );
}
function eA(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: em.$m, children: t });
}
function eI(e) {
    let { channel: t, user: n, onReaction: a, entry: s, buttons: o = [], header: _, onVoiceChannelPreview: g } = e,
        [E, A] = i.useState(!1),
        [I, T] = i.useState(null),
        S = i.useRef(null),
        v = (0, u.bG)(
            [Y.A],
            () => null != t && e_.kvI.CONTENT_ENTRY_EMBEDS.has(t.type) && Y.A.can(e_.xBc.SEND_MESSAGES, t),
        ),
        [b, N] = i.useState(!1),
        [R, O] = i.useState(!1),
        { voiceBar: D, joinVoiceButton: L } = eN({ channel: t, entry: s, onVoiceChannelPreview: g }),
        { embeddedActivity: w } = (0, ei.A)(s),
        x = eb(w),
        P = null != L && 0 === o.length ? [L] : o,
        M = P.length > 0,
        k = P.length >= 2,
        [U, G] = i.useState(!M),
        F = Q.Ay.getName(t?.guild_id, t?.id, n),
        V =
            null != t && E
                ? ep.intl.formatToPlainString(ep.t["8lzR/R"], { channel: `#${t.name}` })
                : ep.intl.formatToPlainString(ep.t["4c+CAx"], { channel: `@${F}` }),
        B = E ? ep.intl.string(ep.t.Z2CUgn) : ep.intl.string(ep.t.XLGiTG),
        H = async (e) => {
            let r,
                { emoji: i } = e;
            if (null != i) {
                if (
                    (X.default.track(e_.HAw.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: ed.UG.GUILD_MEMBER_LIST,
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
                    r = j.A.getChannel(e) ?? null;
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
                        interactionType: ed.PA.REACTION_EMOJI_REACT_SENT,
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
                    t = j.A.getChannel(e);
                l()(null != t, "DM channel must be defined"), (r = t);
            }
            let i = r.type === e_.rbe.DM ? ed.PA.DM_REACTION_MESSAGE_SENT : ed.PA.CHANNEL_REACTION_MESSAGE_SENT;
            return K({ reply: e, sendToChannel: r, interactionType: i, onComplete: a, requiresChannelReadiness: !0 });
        },
        K = async (e) => {
            let { reply: t, sendToChannel: n, onComplete: r, interactionType: i, requiresChannelReadiness: a } = e;
            I?.focus(),
                await (0, er.d)({
                    channel: n,
                    content: t,
                    entry: s,
                    whenReady: a,
                    doNotNotifyOnError: !1,
                    location: ef.Hx.CONTENT_INVENTORY_MEMBERLIST,
                }),
                r?.(i, n);
        },
        $ = null != _ ? _ : null != D ? D : null != x ? x : void 0,
        z = () => {
            A((e) => !e), U && I?.focus();
        },
        q = (e) => {
            G(e), e && I?.focus();
        };
    return (0, r.jsx)("div", {
        ref: S,
        style: { pointerEvents: b ? "none" : "all" },
        children: (0, r.jsx)(h.Oky, {
            containerRef: S,
            children: (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(ec.A, { sent: R, shown: b, className: em.Jt }),
                    null != $
                        ? $
                        : (0, r.jsx)(el.A, {
                              children: (0, r.jsxs)("div", {
                                  className: em.T7,
                                  children: [
                                      (0, r.jsx)(eT, { channel: t, onClickSuggestion: H }),
                                      (0, r.jsx)(y.g1, { onSelectEmoji: H }),
                                  ],
                              }),
                          }),
                    (0, r.jsxs)("div", {
                        className: U ? em.P2 : em.VE,
                        children: [
                            (0, r.jsx)(y.nd, {
                                placeholder: V,
                                onEnter: W,
                                setEditorRef: (e) => T(e),
                                channel: E ? t : void 0,
                                showEmojiButton: null != $,
                                className: em.N8,
                                autoFocus: !1,
                                renderAttachButton: v
                                    ? () =>
                                          (0, r.jsx)(f.m, {
                                              text: B,
                                              children: (0, r.jsx)(h.DUT, {
                                                  className: em.wD,
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
                                    onClick: () => q(!1),
                                    className: em.i3,
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
                            className: em.fh,
                            children: [
                                !k &&
                                    (0, r.jsx)(
                                        h.Button,
                                        {
                                            fullWidth: !0,
                                            variant: "secondary",
                                            onClick: () => q(!0),
                                            size: k ? "sm" : "md",
                                            text: ep.intl.string(ep.t.OAJQlP),
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
let eT = (e) => {
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
                    : { emoji: e, url: (0, Z._O)({ id: e.id, animated: e.animated, size: 58 }) },
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
                              text: ep.intl.formatToPlainString(ep.t.kilW3l, { emojiName: t.name }),
                              position: "top",
                              "aria-label": ep.intl.formatToPlainString(ep.t.kilW3l, { emojiName: t.name }),
                              shouldShow: !o && void 0,
                              children: (0, r.jsx)(F.D, {
                                  emoji: t,
                                  isDisabled: !a,
                                  onClick: () => n({ emoji: t }),
                                  className: em.Zg,
                              }),
                          }),
                      },
                      t.name,
                  )
                : null;
        }),
    });
};
function ey(e) {
    let { channel: t, userDescription: n, entry: i, disableGameProfileLinks: a, onUserPopoutClosed: o } = e,
        l = t?.guild_id,
        { displayParticipants: c, participant1: d, participant2: f, numOtherParticipants: p } = (0, ea.A)(i, 3),
        g = (0, u.bG)([$.default], () => $.default.getUser(i.author_id)),
        { streamPreviewUrl: E } = (0, es.A)(i),
        A = null != E,
        I = [d, f];
    return (0, r.jsxs)("div", {
        className: em.MH,
        children: [
            (0, r.jsxs)("div", {
                className: em.WP,
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
                        className: s()(em.Xn, em.zA),
                        children: ep.intl.format(n, {
                            user0: Q.Ay.getName(l, t?.id, I[0]),
                            user1: Q.Ay.getName(l, t?.id, I[1]),
                            countOthers: p,
                            countOthersHook: (e, t) =>
                                (0, r.jsx)(
                                    h.Text,
                                    { variant: "text-sm/medium", className: s()(em.Mj, em.nk), children: e },
                                    t,
                                ),
                            name0Hook: (e, n) =>
                                (0, r.jsx)(
                                    et.A,
                                    {
                                        textClassName: s()(em.Mj, em.nk),
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
                                    et.A,
                                    {
                                        textClassName: s()(em.Mj, em.nk),
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
            null != g && (0, r.jsx)(eu.A, { user: g, channel: t, guildId: l, entry: i, disableGameProfileLinks: a }),
        ],
    });
}
function eS(e) {
    let { children: t, onClick: n } = e;
    return null == n ? t : (0, r.jsx)(h.DUT, { className: em.Zw, onClick: n, children: t });
}
function ev(e) {
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
        A = (0, ee.zD)(E),
        I = A ? E.extra?.application_id : void 0,
        T = (0, k.W)();
    null != T && (I = T);
    let y = (0, O.A)(
            {
                location: "ContentPopout",
                applicationId: d ? void 0 : I,
                source: R.Ob.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: E.author_id,
            },
            { onOpened: () => p?.(ed.PA.OPENED_GAME_PROFILE) },
        ),
        { largeImage: S, smallImage: v } = (0, J.nO)({ entry: E, showCoverImage: _ }),
        C = (0, M.w)({ location: "content_inventory" }),
        b = A ? y : void 0;
    return (0, r.jsxs)("div", {
        className: em.au,
        children: [
            (0, r.jsx)(ey, { disableGameProfileLinks: d, ...g, onUserPopoutClosed: f }),
            (0, r.jsxs)(eE, {
                backgroundImgSrc: S?.src,
                children: [
                    (0, r.jsxs)("div", {
                        className: em.CG,
                        children: [
                            (0, r.jsx)("div", {
                                className: em.Fb,
                                children: (0, r.jsx)(en.d, {
                                    image: S,
                                    smallImage: v,
                                    aspectRatio: _ ? "none" : void 0,
                                    onClick: o ?? b,
                                    size: en.w.SIZE_72,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: em.iC,
                                children: [
                                    (0, r.jsx)(eS, {
                                        onClick: l ?? b,
                                        children: (0, r.jsx)(h.Heading, {
                                            variant: "heading-md/medium",
                                            className: s()(em.$2, { [em.bC]: null != c }),
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, r.jsx)(eS, {
                                              onClick: u ?? b,
                                              children: (0, r.jsx)(h.Text, {
                                                  variant: "text-sm/normal",
                                                  className: em.LG,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, r.jsx)(h.hKd, { size: 8 }),
                                    i,
                                ],
                            }),
                            (0, r.jsx)("div", { className: em.hO, children: c }),
                        ],
                    }),
                    a,
                ],
            }),
            C && null != I && eh.sQ.has(I)
                ? (0, r.jsx)(U.A, {
                      className: em.zu,
                      applicationId: I,
                      userIds: [E.author_id],
                      cardSize: G.Y.SMALL_SQUARE,
                      location: "content_popout",
                      guildId: g.channel?.guild_id,
                      channelId: g.channel?.id,
                  })
                : null,
        ],
    });
}
function eC(e) {
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
        p = (0, u.bG)([j.A], () => j.A.getChannel(s?.channelId)),
        [g] = i.useMemo(() => (0, D.eo)(p, z.A, H.A, Y.A, N.default), [p]),
        { entry: I } = f,
        T = (0, ee.zD)(I),
        y = T ? I.extra?.application_id : void 0,
        S = (0, O.A)(
            {
                location: "ContentPopout",
                applicationId: y,
                source: R.Ob.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: I.author_id,
            },
            { onOpened: () => _?.(ed.PA.OPENED_GAME_PROFILE) },
        ),
        v = T ? S : void 0,
        { activity: C, activityApplication: b, fallbackApplication: w } = (0, ei.A)(I),
        { largeImage: x, smallImage: P } = (0, J.D8)(C, b ?? w),
        { largeImage: k } = (0, J.nO)({ entry: I }),
        F = (0, M.w)({ location: "content_inventory" });
    return (0, r.jsxs)("div", {
        className: em.au,
        children: [
            (0, r.jsx)(ey, { ...f, onUserPopoutClosed: d }),
            (0, r.jsxs)(eE, {
                backgroundImgSrc: k?.src,
                className: em.uR,
                children: [
                    (0, r.jsx)(eS, {
                        onClick: g
                            ? () => {
                                  E.default.selectVoiceChannel(s.channelId), (0, A.Nl)(s);
                              }
                            : void 0,
                        children: (0, r.jsxs)("div", {
                            className: em.nh,
                            children: [
                                (0, r.jsx)(L.A, { className: em.j7, stream: s }),
                                g &&
                                    (0, r.jsx)("div", {
                                        className: em.NE,
                                        children: (0, r.jsx)(h.Text, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: ep.intl.string(ep.t["7Xq/nV"]),
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: em.$6,
                        children: [
                            null != x &&
                                (0, r.jsx)("div", {
                                    className: em.Fb,
                                    children: (0, r.jsx)(en.d, {
                                        image: x,
                                        smallImage: P,
                                        onClick: o ?? v,
                                        size: en.w.SIZE_72,
                                    }),
                                }),
                            (0, r.jsxs)("div", {
                                className: em.gv,
                                children: [
                                    (0, r.jsx)(eS, {
                                        onClick: l ?? v,
                                        children: (0, r.jsx)(h.Heading, {
                                            variant: "heading-md/semibold",
                                            className: em.nk,
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, r.jsx)(eS, {
                                              onClick: c ?? v,
                                              children: (0, r.jsx)(h.Text, {
                                                  variant: "text-sm/normal",
                                                  className: em.zA,
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
            F && null != y && eh.sQ.has(y)
                ? (0, r.jsx)(U.A, {
                      className: em.zu,
                      applicationId: y,
                      userIds: [I.author_id],
                      cardSize: G.Y.SMALL_SQUARE,
                      location: "content_popout",
                      guildId: f.channel?.guild_id,
                      channelId: f.channel?.id,
                  })
                : null,
        ],
    });
}
function eb(e) {
    let t = (0, u.bG)([H.A], () => H.A.getGuild((0, T.D)(e?.location))),
        n = (0, u.bG)([j.A], () => j.A.getChannel((0, T.H)(e?.location))),
        i = (0, u.yK)([$.default], () => e?.participants?.map((e) => $.default.getUser(e.userId)) ?? []);
    return null != e && null != t && null != n && B.k3.has(n.type)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: em.kP,
                      children: [
                          (0, r.jsxs)(h.DUT, {
                              "aria-label": ep.intl.string(ep.t["W/A4Qp"]),
                              onClick: () => (0, P.iN)(n.id),
                              className: em.I3,
                              children: [
                                  (0, r.jsx)(w.A, { guild: t, size: w.A.Sizes.SMOL, className: em.O9, active: !0 }),
                                  (0, r.jsx)(h._BQ, { size: "xxs", color: d.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                                  (0, r.jsx)(h.N$i, { size: "xs", color: d.A.colors.TEXT_DEFAULT }),
                                  (0, r.jsx)(h.Text, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      className: em.NR,
                                      children: n?.name,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(V.A, {
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
                                      className: em.V9,
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
function eN(e) {
    let { channel: t, entry: n, onVoiceChannelPreview: a } = e,
        { streamPreviewUrl: s, channel: o } = (0, es.A)(n),
        { needSubscriptionToAccess: l } = (0, x.A)(t?.id),
        c = (0, u.bG)([H.A], () => (null != o ? H.A.getGuild(o.guild_id) : void 0)),
        _ = (0, u.yK)([q.Ay], () => (null != o ? q.Ay.getVoiceStatesForChannel(o) : []), [o]),
        p = (0, u.bG)([z.A], () => z.A.isInChannel(o?.id)),
        E = i.useMemo(() => {
            for (let e of _) {
                let t = j.A.getDMFromUserId(e.user.id),
                    n = null != t && K.Ay.isChannelMuted(null, t),
                    r = W.A.isBlockedOrIgnored(e.user.id);
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
                              i && (0, r.jsx)(h.id, { size: "custom", width: 13, height: 13, className: em.vb }),
                              ep.intl.string(ep.t.d6DpXI),
                          ],
                      })
                    : n;
            return (0, r.jsx)(
                f.m,
                {
                    "aria-label": i ? ep.intl.string(ep.t.d6DpXI) : (n ?? !1),
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
                    className: em.kP,
                    children: [
                        (0, r.jsx)(y, {
                            text: ep.intl.string(ep.t.WIVYqJ),
                            hasRestrictedOrMutedVCParticipant: E,
                            children: (0, r.jsxs)(h.DUT, {
                                "aria-label": ep.intl.string(ep.t.WIVYqJ),
                                onClick: I,
                                className: em.I3,
                                children: [
                                    (0, r.jsx)(w.A, { guild: c, size: w.A.Sizes.SMOL, className: em.O9, active: !0 }),
                                    (0, r.jsx)(h._BQ, { size: "xxs", color: d.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                                    (0, r.jsx)(h.HKD, { size: "xs", color: d.A.colors.TEXT_DEFAULT }),
                                    (0, r.jsx)(h.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: em.NR,
                                        children: o.name,
                                    }),
                                ],
                            }),
                        }),
                        (0, r.jsx)(V.A, {
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
                                    className: em.V9,
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
                      text: A ? ep.intl.string(ep.t.I6JG46) : ep.intl.string(ep.t.VJlc0S),
                      icon: A ? h.kN9 : h.HKD,
                      variant: "active",
                      size: "md",
                  }),
              }),
    };
}
