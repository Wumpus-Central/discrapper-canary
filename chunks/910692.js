"use strict";
n.d(t, { BC: () => ey, Eh: () => eg, Fl: () => eS, YN: () => eh, fD: () => eE });
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
    p = n(397927),
    h = n(308528),
    m = n(367513),
    g = n(956793),
    E = n(401843),
    A = n(775602),
    I = n(969151),
    T = n(1768),
    y = n(262763),
    S = n(402216),
    v = n(826673),
    C = n(822123),
    b = n(643501),
    N = n(409626),
    R = n(692969),
    O = n(279250),
    D = n(607407),
    L = n(263063),
    w = n(721592),
    x = n(378570),
    P = n(565688),
    M = n(93879),
    k = n(242640),
    U = n(912276),
    G = n(636585),
    V = n(95701),
    F = n(734057),
    B = n(71393),
    j = n(576705),
    H = n(994500),
    Y = n(543465),
    W = n(287809),
    K = n(977997),
    z = n(607567),
    $ = n(954571),
    q = n(486020),
    Z = n(562153),
    Q = n(939341),
    X = n(20805),
    J = n(22869),
    ee = n(623671),
    et = n(428249),
    en = n(327098),
    er = n(576757),
    ei = n(202195),
    ea = n(176563),
    es = n(422973),
    eo = n(315246),
    el = n(899682),
    eu = n(424994),
    ec = n(652215),
    ed = n(381941),
    e_ = n(188275),
    ef = n(985018),
    ep = n(187866);
function eh(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: ep.SW, children: t });
}
function em(e) {
    let { children: t, backgroundImgSrc: n, className: i, style: a = {} } = e,
        { primaryColor: o, secondaryColor: l } = (0, ea.A)(n);
    return (
        null != n && (a.background = `linear-gradient(45deg, ${o}, ${l})`),
        (0, r.jsx)(p.NPJ, {
            theme: ec.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) => (0, r.jsx)("div", { className: s()(ep.ZK, e, i), style: a, children: t }),
        })
    );
}
function eg(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: ep.$m, children: t });
}
function eE(e) {
    let { channel: t, user: n, onReaction: a, entry: s, buttons: o = [], header: _, onVoiceChannelPreview: m } = e,
        [g, E] = i.useState(!1),
        [A, I] = i.useState(null),
        y = i.useRef(null),
        S = (0, u.bG)(
            [j.A],
            () => null != t && ec.kvI.CONTENT_ENTRY_EMBEDS.has(t.type) && j.A.can(ec.xBc.SEND_MESSAGES, t),
        ),
        [C, b] = i.useState(!1),
        [N, R] = i.useState(!1),
        { voiceBar: O, joinVoiceButton: D } = eC({ channel: t, entry: s, onVoiceChannelPreview: m }),
        { embeddedActivity: L } = (0, en.A)(s),
        w = ev(L),
        x = null != D && 0 === o.length ? [D] : o,
        P = x.length > 0,
        M = x.length >= 2,
        [k, U] = i.useState(!P),
        G = Z.Ay.getName(t?.guild_id, t?.id, n),
        V =
            null != t && g
                ? ef.intl.formatToPlainString(ef.t["8lzR/R"], { channel: `#${t.name}` })
                : ef.intl.formatToPlainString(ef.t["4c+CAx"], { channel: `@${G}` }),
        B = g ? ef.intl.string(ef.t.Z2CUgn) : ef.intl.string(ef.t.XLGiTG),
        H = async (e) => {
            let r,
                { emoji: i } = e;
            if (null != i) {
                if (
                    ($.default.track(ec.HAw.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: eu.UG.GUILD_MEMBER_LIST,
                        channel_id: t?.id,
                        guild_id: t?.guild_id,
                    }),
                    (0, v.Dr)(c.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                    b(!0),
                    R(!1),
                    g)
                )
                    l()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), (r = t);
                else {
                    let e = await h.A.getOrEnsurePrivateChannel(n.id);
                    r = F.A.getChannel(e) ?? null;
                }
                return (
                    l()(null != r, "Send channel must be defined"),
                    W({
                        reply: `:${i.name}:`,
                        sendToChannel: r,
                        onComplete: (e, t) => {
                            R(!0),
                                setTimeout(() => {
                                    b(!1), a(e, t);
                                }, 600);
                        },
                        interactionType: eu.PA.REACTION_EMOJI_REACT_SENT,
                        requiresChannelReadiness: !1,
                    })
                );
            }
        },
        Y = async (e) => {
            let r;
            if (((0, v.Dr)(c.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), g))
                l()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), (r = t);
            else {
                let e = await h.A.openPrivateChannel({ recipientIds: n.id }),
                    t = F.A.getChannel(e);
                l()(null != t, "DM channel must be defined"), (r = t);
            }
            let i = r.type === ec.rbe.DM ? eu.PA.DM_REACTION_MESSAGE_SENT : eu.PA.CHANNEL_REACTION_MESSAGE_SENT;
            return W({ reply: e, sendToChannel: r, interactionType: i, onComplete: a, requiresChannelReadiness: !0 });
        },
        W = async (e) => {
            let { reply: t, sendToChannel: n, onComplete: r, interactionType: i, requiresChannelReadiness: a } = e;
            A?.focus(),
                await (0, et.d)({
                    channel: n,
                    content: t,
                    entry: s,
                    whenReady: a,
                    doNotNotifyOnError: !1,
                    location: ed.Hx.CONTENT_INVENTORY_MEMBERLIST,
                }),
                r?.(i, n);
        },
        K = null != _ ? _ : null != O ? O : null != w ? w : void 0,
        z = () => {
            E((e) => !e), k && A?.focus();
        },
        q = (e) => {
            U(e), e && A?.focus();
        };
    return (0, r.jsx)("div", {
        ref: y,
        style: { pointerEvents: C ? "none" : "all" },
        children: (0, r.jsx)(p.Oky, {
            containerRef: y,
            children: (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(el.A, { sent: N, shown: C, className: ep.Jt }),
                    null != K
                        ? K
                        : (0, r.jsx)(es.A, {
                              children: (0, r.jsxs)("div", {
                                  className: ep.T7,
                                  children: [
                                      (0, r.jsx)(eA, { channel: t, onClickSuggestion: H }),
                                      (0, r.jsx)(T.g1, { onSelectEmoji: H }),
                                  ],
                              }),
                          }),
                    (0, r.jsxs)("div", {
                        className: k ? ep.P2 : ep.VE,
                        children: [
                            (0, r.jsx)(T.nd, {
                                placeholder: V,
                                onEnter: Y,
                                setEditorRef: (e) => I(e),
                                channel: g ? t : void 0,
                                showEmojiButton: null != K,
                                className: ep.N8,
                                autoFocus: !1,
                                renderAttachButton: S
                                    ? () =>
                                          (0, r.jsx)(f.m, {
                                              text: B,
                                              children: (0, r.jsx)(p.DUT, {
                                                  className: ep.wD,
                                                  onClick: z,
                                                  children: g
                                                      ? (0, r.jsx)(p.N$i, { size: "custom", width: 20, height: 20 })
                                                      : (0, r.jsx)(p.XxR, { size: "custom", width: 20, height: 20 }),
                                              }),
                                          })
                                    : void 0,
                            }),
                            P &&
                                (0, r.jsx)(p.DUT, {
                                    onClick: () => q(!1),
                                    className: ep.i3,
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
                            className: ep.fh,
                            children: [
                                !M &&
                                    (0, r.jsx)(
                                        p.Button,
                                        {
                                            fullWidth: !0,
                                            variant: "secondary",
                                            onClick: () => q(!0),
                                            size: M ? "sm" : "md",
                                            text: ef.intl.string(ef.t.OAJQlP),
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
let eA = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [a, s] = i.useState(!1);
    i.useEffect(() => {
        s(!0);
    }, []);
    let o = !!A.A.keyboardModeEnabled && !a,
        l = (0, C.Fj)(t?.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? { emoji: e, url: e.url }
                    : { emoji: e, url: (0, q._O)({ id: e.id, animated: e.animated, size: 58 }) },
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
                              text: ef.intl.formatToPlainString(ef.t.kilW3l, { emojiName: t.name }),
                              position: "top",
                              "aria-label": ef.intl.formatToPlainString(ef.t.kilW3l, { emojiName: t.name }),
                              shouldShow: !o && void 0,
                              children: (0, r.jsx)(U.D, {
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
function eI(e) {
    let { channel: t, userDescription: n, entry: i, disableGameProfileLinks: a, onUserPopoutClosed: o } = e,
        l = t?.guild_id,
        { displayParticipants: c, participant1: d, participant2: f, numOtherParticipants: h } = (0, er.A)(i, 3),
        m = (0, u.bG)([W.default], () => W.default.getUser(i.author_id)),
        { streamPreviewUrl: g } = (0, ei.A)(i),
        E = null != g,
        A = [d, f];
    return (0, r.jsxs)("div", {
        className: ep.MH,
        children: [
            (0, r.jsxs)("div", {
                className: ep.WP,
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
                        className: s()(ep.Xn, ep.zA),
                        children: ef.intl.format(n, {
                            user0: Z.Ay.getName(l, t?.id, A[0]),
                            user1: Z.Ay.getName(l, t?.id, A[1]),
                            countOthers: h,
                            countOthersHook: (e, t) =>
                                (0, r.jsx)(
                                    p.Text,
                                    { variant: "text-sm/medium", className: s()(ep.Mj, ep.nk), children: e },
                                    t,
                                ),
                            name0Hook: (e, n) =>
                                (0, r.jsx)(
                                    J.A,
                                    {
                                        textClassName: s()(ep.Mj, ep.nk),
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
                                    J.A,
                                    {
                                        textClassName: s()(ep.Mj, ep.nk),
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
            E && (0, r.jsx)(S.Ay, { size: S.Ay.Sizes.SMALL }),
            null != m && (0, r.jsx)(eo.A, { user: m, channel: t, guildId: l, entry: i, disableGameProfileLinks: a }),
        ],
    });
}
function eT(e) {
    let { children: t, onClick: n } = e;
    return null == n ? t : (0, r.jsx)(p.DUT, { className: ep.Zw, onClick: n, children: t });
}
function ey(e) {
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
            trackRankingItemInteraction: h,
            ...m
        } = e,
        { entry: g } = m,
        E = (0, X.zD)(g),
        A = E ? g.extra?.application_id : void 0,
        I = (0, R.A)(
            {
                location: "ContentPopout",
                applicationId: d ? void 0 : A,
                source: N.Ob.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: g.author_id,
            },
            { onOpened: () => h?.(eu.PA.OPENED_GAME_PROFILE) },
        ),
        { largeImage: T, smallImage: y } = (0, Q.nO)({ entry: g, showCoverImage: _ }),
        S = (0, P.w)({ location: "content_inventory" }),
        v = E ? I : void 0;
    return (0, r.jsxs)("div", {
        className: ep.au,
        children: [
            (0, r.jsx)(eI, { disableGameProfileLinks: d, ...m, onUserPopoutClosed: f }),
            (0, r.jsxs)(em, {
                backgroundImgSrc: T?.src,
                children: [
                    (0, r.jsxs)("div", {
                        className: ep.CG,
                        children: [
                            (0, r.jsx)("div", {
                                className: ep.Fb,
                                children: (0, r.jsx)(ee.d, {
                                    image: T,
                                    smallImage: y,
                                    aspectRatio: _ ? "none" : void 0,
                                    onClick: o ?? v,
                                    size: ee.w.SIZE_72,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: ep.iC,
                                children: [
                                    (0, r.jsx)(eT, {
                                        onClick: l ?? v,
                                        children: (0, r.jsx)(p.Heading, {
                                            variant: "heading-md/medium",
                                            className: s()(ep.$2, { [ep.bC]: null != c }),
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, r.jsx)(eT, {
                                              onClick: u ?? v,
                                              children: (0, r.jsx)(p.Text, {
                                                  variant: "text-sm/normal",
                                                  className: ep.LG,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, r.jsx)(p.hKd, { size: 8 }),
                                    i,
                                ],
                            }),
                            (0, r.jsx)("div", { className: ep.hO, children: c }),
                        ],
                    }),
                    a,
                ],
            }),
            S && null != A && e_.sQ.has(A)
                ? (0, r.jsx)(M.A, {
                      className: ep.zu,
                      applicationId: A,
                      userIds: [g.author_id],
                      cardSize: k.Y.SMALL_SQUARE,
                      location: "content_popout",
                      guildId: m.channel?.guild_id,
                      channelId: m.channel?.id,
                  })
                : null,
        ],
    });
}
function eS(e) {
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
        h = (0, u.bG)([F.A], () => F.A.getChannel(s?.channelId)),
        [m] = i.useMemo(() => (0, O.eo)(h, K.A, B.A, j.A, b.default), [h]),
        { entry: A } = f,
        I = (0, X.zD)(A),
        T = I ? A.extra?.application_id : void 0,
        y = (0, R.A)(
            {
                location: "ContentPopout",
                applicationId: T,
                source: N.Ob.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: A.author_id,
            },
            { onOpened: () => _?.(eu.PA.OPENED_GAME_PROFILE) },
        ),
        S = I ? y : void 0,
        { activity: v, activityApplication: C, fallbackApplication: L } = (0, en.A)(A),
        { largeImage: w, smallImage: x } = (0, Q.D8)(v, C ?? L),
        { largeImage: U } = (0, Q.nO)({ entry: A }),
        G = (0, P.w)({ location: "content_inventory" });
    return (0, r.jsxs)("div", {
        className: ep.au,
        children: [
            (0, r.jsx)(eI, { ...f, onUserPopoutClosed: d }),
            (0, r.jsxs)(em, {
                backgroundImgSrc: U?.src,
                className: ep.uR,
                children: [
                    (0, r.jsx)(eT, {
                        onClick: m
                            ? () => {
                                  g.default.selectVoiceChannel(s.channelId), (0, E.Nl)(s);
                              }
                            : void 0,
                        children: (0, r.jsxs)("div", {
                            className: ep.nh,
                            children: [
                                (0, r.jsx)(D.A, { className: ep.j7, stream: s }),
                                m &&
                                    (0, r.jsx)("div", {
                                        className: ep.NE,
                                        children: (0, r.jsx)(p.Text, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: ef.intl.string(ef.t["7Xq/nV"]),
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: ep.$6,
                        children: [
                            null != w &&
                                (0, r.jsx)("div", {
                                    className: ep.Fb,
                                    children: (0, r.jsx)(ee.d, {
                                        image: w,
                                        smallImage: x,
                                        onClick: o ?? S,
                                        size: ee.w.SIZE_72,
                                    }),
                                }),
                            (0, r.jsxs)("div", {
                                className: ep.gv,
                                children: [
                                    (0, r.jsx)(eT, {
                                        onClick: l ?? S,
                                        children: (0, r.jsx)(p.Heading, {
                                            variant: "heading-md/semibold",
                                            className: ep.nk,
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, r.jsx)(eT, {
                                              onClick: c ?? S,
                                              children: (0, r.jsx)(p.Text, {
                                                  variant: "text-sm/normal",
                                                  className: ep.zA,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, r.jsx)(p.hKd, { size: 8 }),
                                    a,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            G && null != T && e_.sQ.has(T)
                ? (0, r.jsx)(M.A, {
                      className: ep.zu,
                      applicationId: T,
                      userIds: [A.author_id],
                      cardSize: k.Y.SMALL_SQUARE,
                      location: "content_popout",
                      guildId: f.channel?.guild_id,
                      channelId: f.channel?.id,
                  })
                : null,
        ],
    });
}
function ev(e) {
    let t = (0, u.bG)([B.A], () => B.A.getGuild((0, I.D)(e?.location))),
        n = (0, u.bG)([F.A], () => F.A.getChannel((0, I.H)(e?.location))),
        i = (0, u.yK)([W.default], () => e?.participants?.map((e) => W.default.getUser(e.userId)) ?? []);
    return null != e && null != t && null != n && V.k3.has(n.type)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: ep.kP,
                      children: [
                          (0, r.jsxs)(p.DUT, {
                              "aria-label": ef.intl.string(ef.t["W/A4Qp"]),
                              onClick: () => (0, x.iN)(n.id),
                              className: ep.I3,
                              children: [
                                  (0, r.jsx)(L.A, { guild: t, size: L.A.Sizes.SMOL, className: ep.O9, active: !0 }),
                                  (0, r.jsx)(p._BQ, { size: "xxs", color: d.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                                  (0, r.jsx)(p.N$i, { size: "xs", color: d.A.colors.TEXT_DEFAULT }),
                                  (0, r.jsx)(p.Text, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      className: ep.NR,
                                      children: n?.name,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(G.A, {
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
                                      className: ep.V9,
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
    let { channel: t, entry: n, onVoiceChannelPreview: a } = e,
        { streamPreviewUrl: s, channel: o } = (0, ei.A)(n),
        { needSubscriptionToAccess: l } = (0, w.A)(t?.id),
        c = (0, u.bG)([B.A], () => (null != o ? B.A.getGuild(o.guild_id) : void 0)),
        _ = (0, u.yK)([z.Ay], () => (null != o ? z.Ay.getVoiceStatesForChannel(o) : []), [o]),
        h = (0, u.bG)([K.A], () => K.A.isInChannel(o?.id)),
        g = i.useMemo(() => {
            for (let e of _) {
                let t = F.A.getDMFromUserId(e.user.id),
                    n = null != t && Y.Ay.isChannelMuted(null, t),
                    r = H.A.isBlockedOrIgnored(e.user.id);
                if (n || r) return !0;
            }
            return !1;
        }, [_]);
    if (null == o || null == c) return { voiceBar: void 0, joinVoiceButton: void 0 };
    let E = null != s,
        A = () => {
            m.A.updateChatOpen(o.id, !0), (0, x.iN)(o.id), a?.(o);
        },
        I = () => {
            y.A.handleVoiceConnect({
                channel: o,
                connected: h,
                needSubscriptionToAccess: l,
                routeDirectlyToChannel: !0,
            });
        },
        T = (e) => {
            let { children: t, text: n, hasRestrictedOrMutedVCParticipant: i } = e,
                a = i
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              i && (0, r.jsx)(p.id, { size: "custom", width: 13, height: 13, className: ep.vb }),
                              ef.intl.string(ef.t.d6DpXI),
                          ],
                      })
                    : n;
            return (0, r.jsx)(
                f.m,
                {
                    "aria-label": i ? ef.intl.string(ef.t.d6DpXI) : (n ?? !1),
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
                        (0, r.jsx)(T, {
                            text: ef.intl.string(ef.t.WIVYqJ),
                            hasRestrictedOrMutedVCParticipant: g,
                            children: (0, r.jsxs)(p.DUT, {
                                "aria-label": ef.intl.string(ef.t.WIVYqJ),
                                onClick: A,
                                className: ep.I3,
                                children: [
                                    (0, r.jsx)(L.A, { guild: c, size: L.A.Sizes.SMOL, className: ep.O9, active: !0 }),
                                    (0, r.jsx)(p._BQ, { size: "xxs", color: d.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                                    (0, r.jsx)(p.HKD, { size: "xs", color: d.A.colors.TEXT_DEFAULT }),
                                    (0, r.jsx)(p.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: ep.NR,
                                        children: o.name,
                                    }),
                                ],
                            }),
                        }),
                        (0, r.jsx)(G.A, {
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
                                    className: ep.V9,
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
                  hasRestrictedOrMutedVCParticipant: g,
                  children: (0, r.jsx)(p.Button, {
                      onClick: I,
                      fullWidth: !0,
                      text: E ? ef.intl.string(ef.t.I6JG46) : ef.intl.string(ef.t.VJlc0S),
                      icon: E ? p.kN9 : p.HKD,
                      variant: "active",
                      size: "md",
                  }),
              }),
    };
}
