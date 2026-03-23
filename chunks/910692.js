"use strict";
n.d(t, { BC: () => eN, Eh: () => eI, Fl: () => eC, YN: () => eg, fD: () => eT });
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
    R = n(409626),
    O = n(692969),
    b = n(279250),
    D = n(607407),
    L = n(263063),
    w = n(721592),
    M = n(378570),
    x = n(832163),
    P = n(565688),
    k = n(533562),
    U = n(93879),
    G = n(798048),
    F = n(912276),
    V = n(636585),
    B = n(178213),
    H = n(95701),
    j = n(734057),
    Y = n(71393),
    W = n(576705),
    K = n(994500),
    $ = n(543465),
    z = n(287809),
    q = n(977997),
    Z = n(607567),
    X = n(954571),
    Q = n(486020),
    J = n(562153),
    ee = n(939341),
    et = n(20805),
    en = n(22869),
    er = n(623671),
    ei = n(428249),
    es = n(327098),
    ea = n(576757),
    eo = n(202195),
    el = n(176563),
    eu = n(422973),
    ec = n(315246),
    ed = n(899682),
    e_ = n(424994),
    ef = n(652215),
    ep = n(381941),
    eh = n(699976),
    em = n(985018),
    eE = n(187866);
function eg(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: eE.SW, children: t });
}
function eA(e) {
    let { children: t, backgroundImgSrc: n, className: i, style: s = {} } = e,
        { primaryColor: o, secondaryColor: l } = (0, el.A)(n);
    return (
        null != n && (s.background = `linear-gradient(45deg, ${o}, ${l})`),
        (0, r.jsx)(p.NPJ, {
            theme: ef.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) => (0, r.jsx)("div", { className: a()(eE.ZK, e, i), style: s, children: t }),
        })
    );
}
function eI(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: eE.$m, children: t });
}
function eT(e) {
    let { channel: t, user: n, onReaction: s, entry: a, buttons: o = [], header: _, onVoiceChannelPreview: m } = e,
        [E, g] = i.useState(!1),
        [A, I] = i.useState(null),
        S = i.useRef(null),
        y = (0, u.bG)(
            [W.A],
            () => null != t && ef.kvI.CONTENT_ENTRY_EMBEDS.has(t.type) && W.A.can(ef.xBc.SEND_MESSAGES, t),
        ),
        [N, C] = i.useState(!1),
        [R, O] = i.useState(!1),
        { voiceBar: b, joinVoiceButton: D } = eO({ channel: t, entry: a, onVoiceChannelPreview: m }),
        { embeddedActivity: L } = (0, es.A)(a),
        w = eR(L),
        M = null != D && 0 === o.length ? [D] : o,
        x = M.length > 0,
        P = M.length >= 2,
        [k, U] = i.useState(!x),
        G = J.Ay.getName(t?.guild_id, t?.id, n),
        F =
            null != t && E
                ? em.intl.formatToPlainString(em.t["8lzR/R"], { channel: `#${t.name}` })
                : em.intl.formatToPlainString(em.t["4c+CAx"], { channel: `@${G}` }),
        V = E ? em.intl.string(em.t.Z2CUgn) : em.intl.string(em.t.XLGiTG),
        B = async (e) => {
            let r,
                { emoji: i } = e;
            if (null != i) {
                if (
                    (X.default.track(ef.HAw.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: e_.UG.GUILD_MEMBER_LIST,
                        channel_id: t?.id,
                        guild_id: t?.guild_id,
                    }),
                    (0, v.Dr)(c.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                    C(!0),
                    O(!1),
                    E)
                )
                    l()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), (r = t);
                else {
                    let e = await h.A.getOrEnsurePrivateChannel(n.id);
                    r = j.A.getChannel(e) ?? null;
                }
                return (
                    l()(null != r, "Send channel must be defined"),
                    Y({
                        reply: `:${i.name}:`,
                        sendToChannel: r,
                        onComplete: (e, t) => {
                            O(!0),
                                setTimeout(() => {
                                    C(!1), s(e, t);
                                }, 600);
                        },
                        interactionType: e_.PA.REACTION_EMOJI_REACT_SENT,
                        requiresChannelReadiness: !1,
                    })
                );
            }
        },
        H = async (e) => {
            let r;
            if (((0, v.Dr)(c.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), E))
                l()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), (r = t);
            else {
                let e = await h.A.openPrivateChannel({ recipientIds: n.id }),
                    t = j.A.getChannel(e);
                l()(null != t, "DM channel must be defined"), (r = t);
            }
            let i = r.type === ef.rbe.DM ? e_.PA.DM_REACTION_MESSAGE_SENT : e_.PA.CHANNEL_REACTION_MESSAGE_SENT;
            return Y({ reply: e, sendToChannel: r, interactionType: i, onComplete: s, requiresChannelReadiness: !0 });
        },
        Y = async (e) => {
            let { reply: t, sendToChannel: n, onComplete: r, interactionType: i, requiresChannelReadiness: s } = e;
            A?.focus(),
                await (0, ei.d)({
                    channel: n,
                    content: t,
                    entry: a,
                    whenReady: s,
                    doNotNotifyOnError: !1,
                    location: ep.Hx.CONTENT_INVENTORY_MEMBERLIST,
                }),
                r?.(i, n);
        },
        K = _ ?? b ?? w,
        $ = () => {
            g((e) => !e), k && A?.focus();
        },
        z = (e) => {
            U(e), e && A?.focus();
        };
    return (0, r.jsx)("div", {
        ref: S,
        style: { pointerEvents: N ? "none" : "all" },
        children: (0, r.jsx)(p.Oky, {
            containerRef: S,
            children: (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(ed.A, { sent: R, shown: N, className: eE.Jt }),
                    K ??
                        (0, r.jsx)(eu.A, {
                            children: (0, r.jsxs)("div", {
                                className: eE.T7,
                                children: [
                                    (0, r.jsx)(eS, { channel: t, onClickSuggestion: B }),
                                    (0, r.jsx)(T.g1, { onSelectEmoji: B }),
                                ],
                            }),
                        }),
                    (0, r.jsxs)("div", {
                        className: k ? eE.P2 : eE.VE,
                        children: [
                            (0, r.jsx)(T.nd, {
                                placeholder: F,
                                onEnter: H,
                                setEditorRef: (e) => I(e),
                                channel: E ? t : void 0,
                                showEmojiButton: null != K,
                                className: eE.N8,
                                autoFocus: !1,
                                renderAttachButton: y
                                    ? () =>
                                          (0, r.jsx)(f.m, {
                                              text: V,
                                              children: (0, r.jsx)(p.DUT, {
                                                  className: eE.wD,
                                                  onClick: $,
                                                  children: E
                                                      ? (0, r.jsx)(p.N$i, { size: "custom", width: 20, height: 20 })
                                                      : (0, r.jsx)(p.XxR, { size: "custom", width: 20, height: 20 }),
                                              }),
                                          })
                                    : void 0,
                            }),
                            x &&
                                (0, r.jsx)(p.DUT, {
                                    onClick: () => z(!1),
                                    className: eE.i3,
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
                            className: eE.fh,
                            children: [
                                !P &&
                                    (0, r.jsx)(
                                        p.Button,
                                        {
                                            fullWidth: !0,
                                            variant: "secondary",
                                            onClick: () => z(!0),
                                            size: "md",
                                            text: em.intl.string(em.t.OAJQlP),
                                        },
                                        "toggleMessageMode",
                                    ),
                                M,
                            ],
                        }),
                ],
            }),
        }),
    });
}
let eS = (e) => {
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
                    : { emoji: e, url: (0, Q._O)({ id: e.id, animated: e.animated, size: 58 }) },
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
                              text: em.intl.formatToPlainString(em.t.kilW3l, { emojiName: t.name }),
                              position: "top",
                              "aria-label": em.intl.formatToPlainString(em.t.kilW3l, { emojiName: t.name }),
                              shouldShow: !o && void 0,
                              children: (0, r.jsx)(F.D, {
                                  emoji: t,
                                  isDisabled: !s,
                                  onClick: () => n({ emoji: t }),
                                  className: eE.Zg,
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
    let { channel: t, userDescription: n, entry: i, disableGameProfileLinks: s, onUserPopoutClosed: o } = e,
        l = t?.guild_id,
        { displayParticipants: c, participant1: d, participant2: f, numOtherParticipants: h } = (0, ea.A)(i, 3),
        m = (0, u.bG)([z.default], () => z.default.getUser(i.author_id)),
        { streamPreviewUrl: E } = (0, eo.A)(i),
        g = null != E,
        A = [d, f];
    return (0, r.jsxs)("div", {
        className: eE.MH,
        children: [
            (0, r.jsxs)("div", {
                className: eE.WP,
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
                        className: a()(eE.Xn, eE.zA),
                        children: em.intl.format(n, {
                            user0: J.Ay.getName(l, t?.id, A[0]),
                            user1: J.Ay.getName(l, t?.id, A[1]),
                            countOthers: h,
                            countOthersHook: (e, t) =>
                                (0, r.jsx)(
                                    p.Text,
                                    { variant: "text-sm/medium", className: a()(eE.Mj, eE.nk), children: e },
                                    t,
                                ),
                            name0Hook: (e, n) =>
                                (0, r.jsx)(
                                    en.A,
                                    {
                                        textClassName: a()(eE.Mj, eE.nk),
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
                                    en.A,
                                    {
                                        textClassName: a()(eE.Mj, eE.nk),
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
            null != m && (0, r.jsx)(ec.A, { user: m, channel: t, guildId: l, entry: i, disableGameProfileLinks: s }),
        ],
    });
}
function ev(e) {
    let { children: t, onClick: n } = e;
    return null == n ? t : (0, r.jsx)(p.DUT, { className: eE.Zw, onClick: n, children: t });
}
function eN(e) {
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
            onUserPopoutClosed: h,
            trackRankingItemInteraction: m,
            ...E
        } = e,
        g = (0, B.GG)("content_inventory_memberlist_content_popout"),
        { entry: A } = E,
        I = (0, et.zD)(A),
        T = I ? A.extra?.application_id : void 0,
        S = (0, k.W)();
    null != S && (T = S);
    let y = (0, O.A)(
            {
                location: "ContentPopout",
                applicationId: _ ? void 0 : T,
                source: R.Ob.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: A.author_id,
            },
            { onOpened: () => m?.(e_.PA.OPENED_GAME_PROFILE) },
        ),
        { largeImage: v, smallImage: N } = (0, ee.nO)({ entry: A, showCoverImage: f }),
        C = (0, P.w)({ location: "content_inventory" }),
        b = (0, u.bG)([x.A], () => x.A.getStorefrontDetectableGameAndApplicationIds()),
        D = I ? y : void 0;
    return (0, r.jsxs)("div", {
        className: eE.au,
        children: [
            (0, r.jsx)(ey, { disableGameProfileLinks: _, ...E, onUserPopoutClosed: h }),
            (0, r.jsxs)(eA, {
                backgroundImgSrc: v?.src,
                children: [
                    (0, r.jsxs)("div", {
                        className: eE.CG,
                        children: [
                            (0, r.jsx)("div", {
                                className: eE.Fb,
                                children: (0, r.jsx)(er.d, {
                                    image: v,
                                    smallImage: N,
                                    aspectRatio: f ? "none" : void 0,
                                    onClick: o ?? D,
                                    size: er.w.SIZE_72,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: eE.iC,
                                children: [
                                    (0, r.jsx)(ev, {
                                        onClick: l ?? D,
                                        children: (0, r.jsx)(p.Heading, {
                                            variant: "heading-md/medium",
                                            className: a()(eE.$2, { [eE.bC]: null != d }),
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, r.jsx)(ev, {
                                              onClick: c ?? D,
                                              children: (0, r.jsx)(p.Text, {
                                                  variant: "text-sm/normal",
                                                  className: eE.LG,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, r.jsx)(p.hKd, { size: 8 }),
                                    i,
                                ],
                            }),
                            (0, r.jsx)("div", { className: eE.hO, children: d }),
                        ],
                    }),
                    s,
                ],
            }),
            C && null != T && b.has(T)
                ? (0, r.jsx)(U.A, {
                      className: eE.zu,
                      rewardOfferNoticeClassName: eE.PU,
                      applicationId: T,
                      userIds: [A.author_id],
                      cardSize: G.Y.SMALL_SQUARE,
                      location: "content_popout",
                      guildId: E.channel?.guild_id,
                      channelId: E.channel?.id,
                      numWishlistItems: g ? 3 : 2,
                      cardSpec: eh.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
function eC(e) {
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
        h = (0, B.GG)("content_inventory_memberlist_streaming_content_popout"),
        m = (0, u.bG)([j.A], () => j.A.getChannel(a?.channelId)),
        [A] = i.useMemo(() => (0, b.eo)(m, q.A, Y.A, W.A, C.default), [m]),
        { entry: I } = f,
        T = (0, et.zD)(I),
        S = T ? I.extra?.application_id : void 0,
        y = (0, k.W)();
    null != y && (S = y);
    let v = (0, O.A)(
            {
                location: "ContentPopout",
                applicationId: S,
                source: R.Ob.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: I.author_id,
            },
            { onOpened: () => _?.(e_.PA.OPENED_GAME_PROFILE) },
        ),
        N = T ? v : void 0,
        { activity: L, activityApplication: w, fallbackApplication: M } = (0, es.A)(I),
        { largeImage: F, smallImage: V } = (0, ee.D8)(L, w ?? M),
        { largeImage: H } = (0, ee.nO)({ entry: I }),
        K = (0, P.w)({ location: "content_inventory" }),
        $ = (0, u.bG)([x.A], () => x.A.getStorefrontDetectableGameAndApplicationIds());
    return (0, r.jsxs)("div", {
        className: eE.au,
        children: [
            (0, r.jsx)(ey, { ...f, onUserPopoutClosed: d }),
            (0, r.jsxs)(eA, {
                backgroundImgSrc: H?.src,
                className: eE.uR,
                children: [
                    (0, r.jsx)(ev, {
                        onClick: A
                            ? () => {
                                  E.default.selectVoiceChannel(a.channelId), (0, g.Nl)(a);
                              }
                            : void 0,
                        children: (0, r.jsxs)("div", {
                            className: eE.nh,
                            children: [
                                (0, r.jsx)(D.A, { className: eE.j7, stream: a }),
                                A &&
                                    (0, r.jsx)("div", {
                                        className: eE.NE,
                                        children: (0, r.jsx)(p.Text, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: em.intl.string(em.t["7Xq/nV"]),
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: eE.$6,
                        children: [
                            null != F &&
                                (0, r.jsx)("div", {
                                    className: eE.Fb,
                                    children: (0, r.jsx)(er.d, {
                                        image: F,
                                        smallImage: V,
                                        onClick: o ?? N,
                                        size: er.w.SIZE_72,
                                    }),
                                }),
                            (0, r.jsxs)("div", {
                                className: eE.gv,
                                children: [
                                    (0, r.jsx)(ev, {
                                        onClick: l ?? N,
                                        children: (0, r.jsx)(p.Heading, {
                                            variant: "heading-md/semibold",
                                            className: eE.nk,
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, r.jsx)(ev, {
                                              onClick: c ?? N,
                                              children: (0, r.jsx)(p.Text, {
                                                  variant: "text-sm/normal",
                                                  className: eE.zA,
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
            K && null != S && $.has(S)
                ? (0, r.jsx)(U.A, {
                      className: eE.zu,
                      applicationId: S,
                      userIds: [I.author_id],
                      cardSize: G.Y.SMALL_SQUARE,
                      location: "content_popout",
                      guildId: f.channel?.guild_id,
                      channelId: f.channel?.id,
                      numWishlistItems: h ? 3 : 2,
                      cardSpec: eh.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
function eR(e) {
    let t = (0, u.bG)([Y.A], () => Y.A.getGuild((0, I.D)(e?.location))),
        n = (0, u.bG)([j.A], () => j.A.getChannel((0, I.H)(e?.location))),
        i = (0, u.yK)([z.default], () => e?.participants?.map((e) => z.default.getUser(e.userId)) ?? []);
    return null != e && null != t && null != n && H.k3.has(n.type)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: eE.kP,
                      children: [
                          (0, r.jsxs)(p.DUT, {
                              "aria-label": em.intl.string(em.t["W/A4Qp"]),
                              onClick: () => (0, M.iN)(n.id),
                              className: eE.I3,
                              children: [
                                  (0, r.jsx)(L.Ay, { guild: t, size: L.Ay.Sizes.SMOL, className: eE.O9, active: !0 }),
                                  (0, r.jsx)(p._BQ, { size: "xxs", color: d.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                                  (0, r.jsx)(p.N$i, { size: "xs", color: d.A.colors.TEXT_DEFAULT }),
                                  (0, r.jsx)(p.Text, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      className: eE.NR,
                                      children: n?.name,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(V.A, {
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
                                      className: eE.V9,
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
function eO(e) {
    let { channel: t, entry: n, onVoiceChannelPreview: s } = e,
        { streamPreviewUrl: a, channel: o } = (0, eo.A)(n),
        { needSubscriptionToAccess: l } = (0, w.A)(t?.id),
        c = (0, u.bG)([Y.A], () => (null != o ? Y.A.getGuild(o.guild_id) : void 0)),
        _ = (0, u.yK)([Z.Ay], () => (null != o ? Z.Ay.getVoiceStatesForChannel(o) : []), [o]),
        h = (0, u.bG)([q.A], () => q.A.isInChannel(o?.id)),
        E = i.useMemo(() => {
            for (let e of _) {
                let t = j.A.getDMFromUserId(e.user.id),
                    n = null != t && $.Ay.isChannelMuted(null, t),
                    r = K.A.isBlockedOrIgnored(e.user.id);
                if (n || r) return !0;
            }
            return !1;
        }, [_]);
    if (null == o || null == c) return { voiceBar: void 0, joinVoiceButton: void 0 };
    let g = null != a,
        A = () => {
            m.A.updateChatOpen(o.id, !0), (0, M.iN)(o.id), s?.(o);
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
                              i && (0, r.jsx)(p.id, { size: "custom", width: 13, height: 13, className: eE.vb }),
                              em.intl.string(em.t.d6DpXI),
                          ],
                      })
                    : n;
            return (0, r.jsx)(
                f.m,
                {
                    "aria-label": i ? em.intl.string(em.t.d6DpXI) : (n ?? !1),
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
                    className: eE.kP,
                    children: [
                        (0, r.jsx)(T, {
                            text: em.intl.string(em.t.WIVYqJ),
                            hasRestrictedOrMutedVCParticipant: E,
                            children: (0, r.jsxs)(p.DUT, {
                                "aria-label": em.intl.string(em.t.WIVYqJ),
                                onClick: A,
                                className: eE.I3,
                                children: [
                                    (0, r.jsx)(L.Ay, { guild: c, size: L.Ay.Sizes.SMOL, className: eE.O9, active: !0 }),
                                    (0, r.jsx)(p._BQ, { size: "xxs", color: d.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                                    (0, r.jsx)(p.HKD, { size: "xs", color: d.A.colors.TEXT_DEFAULT }),
                                    (0, r.jsx)(p.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: eE.NR,
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
                                (0, r.jsx)(p.euF, {
                                    src: e.user.getAvatarURL(c.id, 16),
                                    size: p._3J.SIZE_16,
                                    "aria-label": "avatar",
                                    className: t,
                                }),
                            renderMoreUsers: (e) =>
                                (0, r.jsx)("div", {
                                    className: eE.V9,
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
                      text: g ? em.intl.string(em.t.I6JG46) : em.intl.string(em.t.VJlc0S),
                      icon: g ? p.kN9 : p.HKD,
                      variant: "active",
                      size: "md",
                  }),
              }),
    };
}
