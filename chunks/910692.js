"use strict";
n.d(t, { BC: () => ey, Eh: () => eg, Fl: () => ev, YN: () => em, fD: () => eA });
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
    p = n(397927),
    h = n(308528),
    m = n(367513),
    E = n(956793),
    g = n(401843),
    A = n(775602),
    I = n(969151),
    T = n(1768),
    S = n(262763),
    y = n(402216),
    v = n(826673),
    N = n(822123),
    C = n(643501),
    b = n(409626),
    R = n(692969),
    O = n(279250),
    D = n(607407),
    L = n(263063),
    w = n(721592),
    x = n(378570),
    M = n(565688),
    P = n(533562),
    k = n(93879),
    U = n(798048),
    G = n(912276),
    F = n(636585),
    V = n(95701),
    B = n(734057),
    H = n(71393),
    j = n(576705),
    Y = n(994500),
    W = n(543465),
    K = n(287809),
    z = n(977997),
    $ = n(607567),
    q = n(954571),
    Z = n(486020),
    X = n(562153),
    Q = n(939341),
    J = n(20805),
    ee = n(22869),
    et = n(623671),
    en = n(428249),
    er = n(327098),
    ei = n(576757),
    es = n(202195),
    ea = n(176563),
    eo = n(422973),
    el = n(315246),
    eu = n(899682),
    ec = n(424994),
    ed = n(652215),
    e_ = n(381941),
    ef = n(188275),
    ep = n(985018),
    eh = n(187866);
function em(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: eh.SW, children: t });
}
function eE(e) {
    let { children: t, backgroundImgSrc: n, className: i, style: s = {} } = e,
        { primaryColor: o, secondaryColor: l } = (0, ea.A)(n);
    return (
        null != n && (s.background = `linear-gradient(45deg, ${o}, ${l})`),
        (0, r.jsx)(p.NPJ, {
            theme: ed.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) => (0, r.jsx)("div", { className: a()(eh.ZK, e, i), style: s, children: t }),
        })
    );
}
function eg(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: eh.$m, children: t });
}
function eA(e) {
    let { channel: t, user: n, onReaction: s, entry: a, buttons: o = [], header: _, onVoiceChannelPreview: m } = e,
        [E, g] = i.useState(!1),
        [A, I] = i.useState(null),
        S = i.useRef(null),
        y = (0, u.bG)(
            [j.A],
            () => null != t && ed.kvI.CONTENT_ENTRY_EMBEDS.has(t.type) && j.A.can(ed.xBc.SEND_MESSAGES, t),
        ),
        [N, C] = i.useState(!1),
        [b, R] = i.useState(!1),
        { voiceBar: O, joinVoiceButton: D } = eC({ channel: t, entry: a, onVoiceChannelPreview: m }),
        { embeddedActivity: L } = (0, er.A)(a),
        w = eN(L),
        x = null != D && 0 === o.length ? [D] : o,
        M = x.length > 0,
        P = x.length >= 2,
        [k, U] = i.useState(!M),
        G = X.Ay.getName(t?.guild_id, t?.id, n),
        F =
            null != t && E
                ? ep.intl.formatToPlainString(ep.t["8lzR/R"], { channel: `#${t.name}` })
                : ep.intl.formatToPlainString(ep.t["4c+CAx"], { channel: `@${G}` }),
        V = E ? ep.intl.string(ep.t.Z2CUgn) : ep.intl.string(ep.t.XLGiTG),
        H = async (e) => {
            let r,
                { emoji: i } = e;
            if (null != i) {
                if (
                    (q.default.track(ed.HAw.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: ec.UG.GUILD_MEMBER_LIST,
                        channel_id: t?.id,
                        guild_id: t?.guild_id,
                    }),
                    (0, v.Dr)(c.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                    C(!0),
                    R(!1),
                    E)
                )
                    l()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), (r = t);
                else {
                    let e = await h.A.getOrEnsurePrivateChannel(n.id);
                    r = B.A.getChannel(e) ?? null;
                }
                return (
                    l()(null != r, "Send channel must be defined"),
                    W({
                        reply: `:${i.name}:`,
                        sendToChannel: r,
                        onComplete: (e, t) => {
                            R(!0),
                                setTimeout(() => {
                                    C(!1), s(e, t);
                                }, 600);
                        },
                        interactionType: ec.PA.REACTION_EMOJI_REACT_SENT,
                        requiresChannelReadiness: !1,
                    })
                );
            }
        },
        Y = async (e) => {
            let r;
            if (((0, v.Dr)(c.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), E))
                l()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), (r = t);
            else {
                let e = await h.A.openPrivateChannel({ recipientIds: n.id }),
                    t = B.A.getChannel(e);
                l()(null != t, "DM channel must be defined"), (r = t);
            }
            let i = r.type === ed.rbe.DM ? ec.PA.DM_REACTION_MESSAGE_SENT : ec.PA.CHANNEL_REACTION_MESSAGE_SENT;
            return W({ reply: e, sendToChannel: r, interactionType: i, onComplete: s, requiresChannelReadiness: !0 });
        },
        W = async (e) => {
            let { reply: t, sendToChannel: n, onComplete: r, interactionType: i, requiresChannelReadiness: s } = e;
            A?.focus(),
                await (0, en.d)({
                    channel: n,
                    content: t,
                    entry: a,
                    whenReady: s,
                    doNotNotifyOnError: !1,
                    location: e_.Hx.CONTENT_INVENTORY_MEMBERLIST,
                }),
                r?.(i, n);
        },
        K = null != _ ? _ : null != O ? O : null != w ? w : void 0,
        z = () => {
            g((e) => !e), k && A?.focus();
        },
        $ = (e) => {
            U(e), e && A?.focus();
        };
    return (0, r.jsx)("div", {
        ref: S,
        style: { pointerEvents: N ? "none" : "all" },
        children: (0, r.jsx)(p.Oky, {
            containerRef: S,
            children: (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(eu.A, { sent: b, shown: N, className: eh.Jt }),
                    null != K
                        ? K
                        : (0, r.jsx)(eo.A, {
                              children: (0, r.jsxs)("div", {
                                  className: eh.T7,
                                  children: [
                                      (0, r.jsx)(eI, { channel: t, onClickSuggestion: H }),
                                      (0, r.jsx)(T.g1, { onSelectEmoji: H }),
                                  ],
                              }),
                          }),
                    (0, r.jsxs)("div", {
                        className: k ? eh.P2 : eh.VE,
                        children: [
                            (0, r.jsx)(T.nd, {
                                placeholder: F,
                                onEnter: Y,
                                setEditorRef: (e) => I(e),
                                channel: E ? t : void 0,
                                showEmojiButton: null != K,
                                className: eh.N8,
                                autoFocus: !1,
                                renderAttachButton: y
                                    ? () =>
                                          (0, r.jsx)(f.m, {
                                              text: V,
                                              children: (0, r.jsx)(p.DUT, {
                                                  className: eh.wD,
                                                  onClick: z,
                                                  children: E
                                                      ? (0, r.jsx)(p.N$i, { size: "custom", width: 20, height: 20 })
                                                      : (0, r.jsx)(p.XxR, { size: "custom", width: 20, height: 20 }),
                                              }),
                                          })
                                    : void 0,
                            }),
                            M &&
                                (0, r.jsx)(p.DUT, {
                                    onClick: () => $(!1),
                                    className: eh.i3,
                                    children: (0, r.jsx)(p.PGe, {
                                        size: "custom",
                                        width: 20,
                                        height: 20,
                                        color: d.A.colors.ICON_STRONG,
                                    }),
                                }),
                        ],
                    }),
                    !1 === k &&
                        (0, r.jsxs)("div", {
                            className: eh.fh,
                            children: [
                                !P &&
                                    (0, r.jsx)(
                                        p.Button,
                                        {
                                            fullWidth: !0,
                                            variant: "secondary",
                                            onClick: () => $(!0),
                                            size: P ? "sm" : "md",
                                            text: ep.intl.string(ep.t.OAJQlP),
                                        },
                                        "toggleMessageMode",
                                    ),
                                x,
                            ],
                        }),
                ],
            }),
        }),
    });
}
let eI = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [s, a] = i.useState(!1);
    i.useEffect(() => {
        a(!0);
    }, []);
    let o = !!A.A.keyboardModeEnabled && !s,
        l = (0, N.Fj)(t?.guild_id)
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
                              children: (0, r.jsx)(G.D, {
                                  emoji: t,
                                  isDisabled: !s,
                                  onClick: () => n({ emoji: t }),
                                  className: eh.Zg,
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
    let { channel: t, userDescription: n, entry: i, disableGameProfileLinks: s, onUserPopoutClosed: o } = e,
        l = t?.guild_id,
        { displayParticipants: c, participant1: d, participant2: f, numOtherParticipants: h } = (0, ei.A)(i, 3),
        m = (0, u.bG)([K.default], () => K.default.getUser(i.author_id)),
        { streamPreviewUrl: E } = (0, es.A)(i),
        g = null != E,
        A = [d, f];
    return (0, r.jsxs)("div", {
        className: eh.MH,
        children: [
            (0, r.jsxs)("div", {
                className: eh.WP,
                children: [
                    (0, r.jsx)(_.A, {
                        maxUsers: 3,
                        users: c,
                        size: p._3J.SIZE_24,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: o,
                    }),
                    (0, r.jsx)(p.hKd, { size: 8, horizontal: !0 }),
                    (0, r.jsx)(p.Heading, {
                        variant: "heading-sm/normal",
                        className: a()(eh.Xn, eh.zA),
                        children: ep.intl.format(n, {
                            user0: X.Ay.getName(l, t?.id, A[0]),
                            user1: X.Ay.getName(l, t?.id, A[1]),
                            countOthers: h,
                            countOthersHook: (e, t) =>
                                (0, r.jsx)(
                                    p.Text,
                                    { variant: "text-sm/medium", className: a()(eh.Mj, eh.nk), children: e },
                                    t,
                                ),
                            name0Hook: (e, n) =>
                                (0, r.jsx)(
                                    ee.A,
                                    {
                                        textClassName: a()(eh.Mj, eh.nk),
                                        text: e,
                                        user: A[0],
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
                                        textClassName: a()(eh.Mj, eh.nk),
                                        text: e,
                                        user: A[1],
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
            g && (0, r.jsx)(y.Ay, { size: y.Ay.Sizes.SMALL }),
            null != m && (0, r.jsx)(el.A, { user: m, channel: t, guildId: l, entry: i, disableGameProfileLinks: s }),
        ],
    });
}
function eS(e) {
    let { children: t, onClick: n } = e;
    return null == n ? t : (0, r.jsx)(p.DUT, { className: eh.Zw, onClick: n, children: t });
}
function ey(e) {
    let {
            title: t,
            subtitle: n,
            badges: i,
            children: s,
            onClickThumbnail: o,
            onClickTitle: l,
            onClickSubtitle: u,
            headerIcons: c,
            disableGameProfileLinks: d = !1,
            showCoverImage: _ = !0,
            onUserPopoutClosed: f,
            trackRankingItemInteraction: h,
            ...m
        } = e,
        { entry: E } = m,
        g = (0, J.zD)(E),
        A = g ? E.extra?.application_id : void 0,
        I = (0, P.W)();
    null != I && (A = I);
    let T = (0, R.A)(
            {
                location: "ContentPopout",
                applicationId: d ? void 0 : A,
                source: b.Ob.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: E.author_id,
            },
            { onOpened: () => h?.(ec.PA.OPENED_GAME_PROFILE) },
        ),
        { largeImage: S, smallImage: y } = (0, Q.nO)({ entry: E, showCoverImage: _ }),
        v = (0, M.w)({ location: "content_inventory" }),
        N = g ? T : void 0;
    return (0, r.jsxs)("div", {
        className: eh.au,
        children: [
            (0, r.jsx)(eT, { disableGameProfileLinks: d, ...m, onUserPopoutClosed: f }),
            (0, r.jsxs)(eE, {
                backgroundImgSrc: S?.src,
                children: [
                    (0, r.jsxs)("div", {
                        className: eh.CG,
                        children: [
                            (0, r.jsx)("div", {
                                className: eh.Fb,
                                children: (0, r.jsx)(et.d, {
                                    image: S,
                                    smallImage: y,
                                    aspectRatio: _ ? "none" : void 0,
                                    onClick: o ?? N,
                                    size: et.w.SIZE_72,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: eh.iC,
                                children: [
                                    (0, r.jsx)(eS, {
                                        onClick: l ?? N,
                                        children: (0, r.jsx)(p.Heading, {
                                            variant: "heading-md/medium",
                                            className: a()(eh.$2, { [eh.bC]: null != c }),
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, r.jsx)(eS, {
                                              onClick: u ?? N,
                                              children: (0, r.jsx)(p.Text, {
                                                  variant: "text-sm/normal",
                                                  className: eh.LG,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, r.jsx)(p.hKd, { size: 8 }),
                                    i,
                                ],
                            }),
                            (0, r.jsx)("div", { className: eh.hO, children: c }),
                        ],
                    }),
                    s,
                ],
            }),
            v && null != A && ef.sQ.has(A)
                ? (0, r.jsx)(k.A, {
                      className: eh.zu,
                      applicationId: A,
                      userIds: [E.author_id],
                      cardSize: U.Y.SMALL_SQUARE,
                      location: "content_popout",
                      guildId: m.channel?.guild_id,
                      channelId: m.channel?.id,
                  })
                : null,
        ],
    });
}
function ev(e) {
    let {
            title: t,
            subtitle: n,
            badges: s,
            stream: a,
            onClickThumbnail: o,
            onClickTitle: l,
            onClickSubtitle: c,
            onUserPopoutClosed: d,
            trackRankingItemInteraction: _,
            ...f
        } = e,
        h = (0, u.bG)([B.A], () => B.A.getChannel(a?.channelId)),
        [m] = i.useMemo(() => (0, O.eo)(h, z.A, H.A, j.A, C.default), [h]),
        { entry: A } = f,
        I = (0, J.zD)(A),
        T = I ? A.extra?.application_id : void 0,
        S = (0, R.A)(
            {
                location: "ContentPopout",
                applicationId: T,
                source: b.Ob.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: A.author_id,
            },
            { onOpened: () => _?.(ec.PA.OPENED_GAME_PROFILE) },
        ),
        y = I ? S : void 0,
        { activity: v, activityApplication: N, fallbackApplication: L } = (0, er.A)(A),
        { largeImage: w, smallImage: x } = (0, Q.D8)(v, N ?? L),
        { largeImage: P } = (0, Q.nO)({ entry: A }),
        G = (0, M.w)({ location: "content_inventory" });
    return (0, r.jsxs)("div", {
        className: eh.au,
        children: [
            (0, r.jsx)(eT, { ...f, onUserPopoutClosed: d }),
            (0, r.jsxs)(eE, {
                backgroundImgSrc: P?.src,
                className: eh.uR,
                children: [
                    (0, r.jsx)(eS, {
                        onClick: m
                            ? () => {
                                  E.default.selectVoiceChannel(a.channelId), (0, g.Nl)(a);
                              }
                            : void 0,
                        children: (0, r.jsxs)("div", {
                            className: eh.nh,
                            children: [
                                (0, r.jsx)(D.A, { className: eh.j7, stream: a }),
                                m &&
                                    (0, r.jsx)("div", {
                                        className: eh.NE,
                                        children: (0, r.jsx)(p.Text, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: ep.intl.string(ep.t["7Xq/nV"]),
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: eh.$6,
                        children: [
                            null != w &&
                                (0, r.jsx)("div", {
                                    className: eh.Fb,
                                    children: (0, r.jsx)(et.d, {
                                        image: w,
                                        smallImage: x,
                                        onClick: o ?? y,
                                        size: et.w.SIZE_72,
                                    }),
                                }),
                            (0, r.jsxs)("div", {
                                className: eh.gv,
                                children: [
                                    (0, r.jsx)(eS, {
                                        onClick: l ?? y,
                                        children: (0, r.jsx)(p.Heading, {
                                            variant: "heading-md/semibold",
                                            className: eh.nk,
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, r.jsx)(eS, {
                                              onClick: c ?? y,
                                              children: (0, r.jsx)(p.Text, {
                                                  variant: "text-sm/normal",
                                                  className: eh.zA,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, r.jsx)(p.hKd, { size: 8 }),
                                    s,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            G && null != T && ef.sQ.has(T)
                ? (0, r.jsx)(k.A, {
                      className: eh.zu,
                      applicationId: T,
                      userIds: [A.author_id],
                      cardSize: U.Y.SMALL_SQUARE,
                      location: "content_popout",
                      guildId: f.channel?.guild_id,
                      channelId: f.channel?.id,
                  })
                : null,
        ],
    });
}
function eN(e) {
    let t = (0, u.bG)([H.A], () => H.A.getGuild((0, I.D)(e?.location))),
        n = (0, u.bG)([B.A], () => B.A.getChannel((0, I.H)(e?.location))),
        i = (0, u.yK)([K.default], () => e?.participants?.map((e) => K.default.getUser(e.userId)) ?? []);
    return null != e && null != t && null != n && V.k3.has(n.type)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: eh.kP,
                      children: [
                          (0, r.jsxs)(p.DUT, {
                              "aria-label": ep.intl.string(ep.t["W/A4Qp"]),
                              onClick: () => (0, x.iN)(n.id),
                              className: eh.I3,
                              children: [
                                  (0, r.jsx)(L.A, { guild: t, size: L.A.Sizes.SMOL, className: eh.O9, active: !0 }),
                                  (0, r.jsx)(p._BQ, { size: "xxs", color: d.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                                  (0, r.jsx)(p.N$i, { size: "xs", color: d.A.colors.TEXT_DEFAULT }),
                                  (0, r.jsx)(p.Text, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      className: eh.NR,
                                      children: n?.name,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(F.A, {
                              guildId: t.id,
                              users: i,
                              max: 3,
                              renderUser: (e, n) =>
                                  (0, r.jsx)(p.euF, {
                                      src: e.getAvatarURL(t.id, 16),
                                      size: p._3J.SIZE_16,
                                      "aria-label": "avatar",
                                      className: n,
                                  }),
                              renderMoreUsers: (e) =>
                                  (0, r.jsx)("div", {
                                      className: eh.V9,
                                      children: (0, r.jsx)(p.Text, {
                                          variant: "text-xxs/semibold",
                                          color: "text-default",
                                          children: e,
                                      }),
                                  }),
                          }),
                      ],
                  }),
                  (0, r.jsx)(p.hKd, { size: 16 }),
              ],
          })
        : null;
}
function eC(e) {
    let { channel: t, entry: n, onVoiceChannelPreview: s } = e,
        { streamPreviewUrl: a, channel: o } = (0, es.A)(n),
        { needSubscriptionToAccess: l } = (0, w.A)(t?.id),
        c = (0, u.bG)([H.A], () => (null != o ? H.A.getGuild(o.guild_id) : void 0)),
        _ = (0, u.yK)([$.Ay], () => (null != o ? $.Ay.getVoiceStatesForChannel(o) : []), [o]),
        h = (0, u.bG)([z.A], () => z.A.isInChannel(o?.id)),
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
    let g = null != a,
        A = () => {
            m.A.updateChatOpen(o.id, !0), (0, x.iN)(o.id), s?.(o);
        },
        I = () => {
            S.A.handleVoiceConnect({
                channel: o,
                connected: h,
                needSubscriptionToAccess: l,
                routeDirectlyToChannel: !0,
            });
        },
        T = (e) => {
            let { children: t, text: n, hasRestrictedOrMutedVCParticipant: i } = e,
                s = i
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              i && (0, r.jsx)(p.id, { size: "custom", width: 13, height: 13, className: eh.vb }),
                              ep.intl.string(ep.t.d6DpXI),
                          ],
                      })
                    : n;
            return (0, r.jsx)(
                f.m,
                {
                    "aria-label": i ? ep.intl.string(ep.t.d6DpXI) : (n ?? !1),
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
                    className: eh.kP,
                    children: [
                        (0, r.jsx)(T, {
                            text: ep.intl.string(ep.t.WIVYqJ),
                            hasRestrictedOrMutedVCParticipant: E,
                            children: (0, r.jsxs)(p.DUT, {
                                "aria-label": ep.intl.string(ep.t.WIVYqJ),
                                onClick: A,
                                className: eh.I3,
                                children: [
                                    (0, r.jsx)(L.A, { guild: c, size: L.A.Sizes.SMOL, className: eh.O9, active: !0 }),
                                    (0, r.jsx)(p._BQ, { size: "xxs", color: d.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                                    (0, r.jsx)(p.HKD, { size: "xs", color: d.A.colors.TEXT_DEFAULT }),
                                    (0, r.jsx)(p.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: eh.NR,
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
                                (0, r.jsx)(p.euF, {
                                    src: e.user.getAvatarURL(c.id, 16),
                                    size: p._3J.SIZE_16,
                                    "aria-label": "avatar",
                                    className: t,
                                }),
                            renderMoreUsers: (e) =>
                                (0, r.jsx)("div", {
                                    className: eh.V9,
                                    children: (0, r.jsx)(p.Text, {
                                        variant: "text-xxs/semibold",
                                        color: "text-default",
                                        children: e,
                                    }),
                                }),
                        }),
                    ],
                }),
                (0, r.jsx)(p.hKd, { size: 16 }),
            ],
        }),
        joinVoiceButton: h
            ? null
            : (0, r.jsx)(T, {
                  hasRestrictedOrMutedVCParticipant: E,
                  children: (0, r.jsx)(p.Button, {
                      onClick: I,
                      fullWidth: !0,
                      text: g ? ep.intl.string(ep.t.I6JG46) : ep.intl.string(ep.t.VJlc0S),
                      icon: g ? p.kN9 : p.HKD,
                      variant: "active",
                      size: "md",
                  }),
              }),
    };
}
