"use strict";
n.d(t, { BC: () => eC, Eh: () => eT, Fl: () => eR, YN: () => eA, fD: () => eS });
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
    S = n(47167),
    y = n(262763),
    v = n(402216),
    N = n(826673),
    C = n(822123),
    R = n(643501),
    O = n(409626),
    b = n(692969),
    D = n(279250),
    L = n(607407),
    w = n(263063),
    M = n(721592),
    x = n(378570),
    P = n(832163),
    k = n(565688),
    U = n(533562),
    G = n(93879),
    F = n(798048),
    V = n(912276),
    B = n(636585),
    H = n(178213),
    j = n(95701),
    Y = n(734057),
    W = n(71393),
    K = n(576705),
    $ = n(994500),
    z = n(543465),
    q = n(287809),
    Z = n(977997),
    X = n(607567),
    Q = n(954571),
    J = n(486020),
    ee = n(562153),
    et = n(939341),
    en = n(20805),
    er = n(22869),
    ei = n(623671),
    es = n(428249),
    ea = n(327098),
    eo = n(576757),
    el = n(202195),
    eu = n(176563),
    ec = n(422973),
    ed = n(315246),
    e_ = n(899682),
    ef = n(424994),
    ep = n(652215),
    eh = n(381941),
    em = n(699976),
    eE = n(985018),
    eg = n(191999);
function eA(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: eg.SW, children: t });
}
function eI(e) {
    let { children: t, backgroundImgSrc: n, className: i, style: s = {} } = e,
        { primaryColor: o, secondaryColor: l } = (0, eu.A)(n);
    return (
        null != n && (s.background = `linear-gradient(45deg, ${o}, ${l})`),
        (0, r.jsx)(p.NPJ, {
            theme: ep.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) => (0, r.jsx)("div", { className: a()(eg.ZK, e, i), style: s, children: t }),
        })
    );
}
function eT(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: eg.$m, children: t });
}
function eS(e) {
    let { channel: t, user: n, onReaction: s, entry: a, buttons: o = [], header: _, onVoiceChannelPreview: m } = e,
        [E, g] = i.useState(!1),
        [A, I] = i.useState(null),
        y = i.useRef(null),
        v = (0, u.bG)(
            [K.A],
            () => null != t && ep.kvI.CONTENT_ENTRY_EMBEDS.has(t.type) && K.A.can(ep.xBc.SEND_MESSAGES, t),
        ),
        [C, R] = i.useState(!1),
        [O, b] = i.useState(!1),
        { voiceBar: D, joinVoiceButton: L } = eb({ channel: t, entry: a, onVoiceChannelPreview: m }),
        { embeddedActivity: w } = (0, ea.A)(a),
        M = eO(w),
        x = null != L && 0 === o.length ? [L] : o,
        P = x.length > 0,
        k = x.length >= 2,
        [U, G] = i.useState(!P),
        F = ee.Ay.getName(t?.guild_id, t?.id, n),
        V = (0, S.Ay)(t, !0),
        B =
            null != t && E
                ? eE.intl.formatToPlainString(eE.t["8lzR/R"], { channel: V })
                : eE.intl.formatToPlainString(eE.t["4c+CAx"], { channel: `@${F}` }),
        H = E ? eE.intl.string(eE.t.Z2CUgn) : eE.intl.string(eE.t.XLGiTG),
        j = async (e) => {
            let r,
                { emoji: i } = e;
            if (null != i) {
                if (
                    (Q.default.track(ep.HAw.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: ef.UG.GUILD_MEMBER_LIST,
                        channel_id: t?.id,
                        guild_id: t?.guild_id,
                    }),
                    (0, N.Dr)(c.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                    R(!0),
                    b(!1),
                    E)
                )
                    l()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), (r = t);
                else {
                    let e = await h.A.getOrEnsurePrivateChannel(n.id);
                    r = Y.A.getChannel(e) ?? null;
                }
                return (
                    l()(null != r, "Send channel must be defined"),
                    $({
                        reply: `:${i.name}:`,
                        sendToChannel: r,
                        onComplete: (e, t) => {
                            b(!0),
                                setTimeout(() => {
                                    R(!1), s(e, t);
                                }, 600);
                        },
                        interactionType: ef.PA.REACTION_EMOJI_REACT_SENT,
                        requiresChannelReadiness: !1,
                    })
                );
            }
        },
        W = async (e) => {
            let r;
            if (((0, N.Dr)(c.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), E))
                l()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), (r = t);
            else {
                let e = await h.A.openPrivateChannel({ recipientIds: n.id }),
                    t = Y.A.getChannel(e);
                l()(null != t, "DM channel must be defined"), (r = t);
            }
            let i = r.type === ep.rbe.DM ? ef.PA.DM_REACTION_MESSAGE_SENT : ef.PA.CHANNEL_REACTION_MESSAGE_SENT;
            return $({ reply: e, sendToChannel: r, interactionType: i, onComplete: s, requiresChannelReadiness: !0 });
        },
        $ = async (e) => {
            let { reply: t, sendToChannel: n, onComplete: r, interactionType: i, requiresChannelReadiness: s } = e;
            A?.focus(),
                await (0, es.d)({
                    channel: n,
                    content: t,
                    entry: a,
                    whenReady: s,
                    doNotNotifyOnError: !1,
                    location: eh.Hx.CONTENT_INVENTORY_MEMBERLIST,
                }),
                r?.(i, n);
        },
        z = _ ?? D ?? M,
        q = () => {
            g((e) => !e), U && A?.focus();
        },
        Z = (e) => {
            G(e), e && A?.focus();
        };
    return (0, r.jsx)("div", {
        ref: y,
        style: { pointerEvents: C ? "none" : "all" },
        children: (0, r.jsx)(p.Oky, {
            containerRef: y,
            children: (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(e_.A, { sent: O, shown: C, className: eg.Jt }),
                    z ??
                        (0, r.jsx)(ec.A, {
                            children: (0, r.jsxs)("div", {
                                className: eg.T7,
                                children: [
                                    (0, r.jsx)(ey, { channel: t, onClickSuggestion: j }),
                                    (0, r.jsx)(T.g1, { onSelectEmoji: j }),
                                ],
                            }),
                        }),
                    (0, r.jsxs)("div", {
                        className: U ? eg.P2 : eg.VE,
                        children: [
                            (0, r.jsx)(T.nd, {
                                placeholder: B,
                                onEnter: W,
                                setEditorRef: (e) => I(e),
                                channel: E ? t : void 0,
                                showEmojiButton: null != z,
                                className: eg.N8,
                                autoFocus: !1,
                                renderAttachButton: v
                                    ? () =>
                                          (0, r.jsx)(f.m, {
                                              text: H,
                                              children: (0, r.jsx)(p.DUT, {
                                                  className: eg.wD,
                                                  onClick: q,
                                                  children: E
                                                      ? (0, r.jsx)(p.N$i, { size: "custom", width: 20, height: 20 })
                                                      : (0, r.jsx)(p.XxR, { size: "custom", width: 20, height: 20 }),
                                              }),
                                          })
                                    : void 0,
                            }),
                            P &&
                                (0, r.jsx)(p.DUT, {
                                    onClick: () => Z(!1),
                                    className: eg.i3,
                                    children: (0, r.jsx)(p.PGe, {
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
                            className: eg.fh,
                            children: [
                                !k &&
                                    (0, r.jsx)(
                                        p.Button,
                                        {
                                            fullWidth: !0,
                                            variant: "secondary",
                                            onClick: () => Z(!0),
                                            size: "md",
                                            text: eE.intl.string(eE.t.OAJQlP),
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
let ey = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [s, a] = i.useState(!1);
    i.useEffect(() => {
        a(!0);
    }, []);
    let o = !!A.A.keyboardModeEnabled && !s,
        l = (0, C.Fj)(t?.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? { emoji: e, url: e.url }
                    : { emoji: e, url: (0, J._O)({ id: e.id, animated: e.animated, size: 58 }) },
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
                              text: eE.intl.formatToPlainString(eE.t.kilW3l, { emojiName: t.name }),
                              position: "top",
                              "aria-label": eE.intl.formatToPlainString(eE.t.kilW3l, { emojiName: t.name }),
                              shouldShow: !o && void 0,
                              children: (0, r.jsx)(V.D, {
                                  emoji: t,
                                  isDisabled: !s,
                                  onClick: () => n({ emoji: t }),
                                  className: eg.Zg,
                              }),
                          }),
                      },
                      t.name,
                  )
                : null;
        }),
    });
};
function ev(e) {
    let { channel: t, userDescription: n, entry: i, disableGameProfileLinks: s, onUserPopoutClosed: o } = e,
        l = t?.guild_id,
        { displayParticipants: c, participant1: d, participant2: f, numOtherParticipants: h } = (0, eo.A)(i, 3),
        m = (0, u.bG)([q.default], () => q.default.getUser(i.author_id)),
        { streamPreviewUrl: E } = (0, el.A)(i),
        g = null != E,
        A = [d, f];
    return (0, r.jsxs)("div", {
        className: eg.MH,
        children: [
            (0, r.jsxs)("div", {
                className: eg.WP,
                children: [
                    (0, r.jsx)(_.A, {
                        maxUsers: 3,
                        users: c,
                        guildId: l,
                        size: p._3J.SIZE_24,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: o,
                    }),
                    (0, r.jsx)(p.hKd, { size: 8, horizontal: !0 }),
                    (0, r.jsx)(p.Heading, {
                        variant: "heading-sm/normal",
                        className: a()(eg.Xn, eg.zA),
                        children: eE.intl.format(n, {
                            user0: ee.Ay.getName(l, t?.id, A[0]),
                            user1: ee.Ay.getName(l, t?.id, A[1]),
                            countOthers: h,
                            countOthersHook: (e, t) =>
                                (0, r.jsx)(
                                    p.Text,
                                    { variant: "text-sm/medium", className: a()(eg.Mj, eg.nk), children: e },
                                    t,
                                ),
                            name0Hook: (e, n) =>
                                (0, r.jsx)(
                                    er.A,
                                    {
                                        textClassName: a()(eg.Mj, eg.nk),
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
                                    er.A,
                                    {
                                        textClassName: a()(eg.Mj, eg.nk),
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
            g && (0, r.jsx)(v.Ay, { size: v.Ay.Sizes.SMALL }),
            null != m && (0, r.jsx)(ed.A, { user: m, channel: t, guildId: l, entry: i, disableGameProfileLinks: s }),
        ],
    });
}
function eN(e) {
    let { children: t, onClick: n } = e;
    return null == n ? t : (0, r.jsx)(p.DUT, { className: eg.Zw, onClick: n, children: t });
}
function eC(e) {
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
        g = (0, H.GG)("content_inventory_memberlist_content_popout"),
        { entry: A } = E,
        I = (0, en.zD)(A),
        T = I ? A.extra?.application_id : void 0,
        S = (0, U.W)();
    null != S && (T = S);
    let y = (0, b.A)(
            {
                location: "ContentPopout",
                applicationId: _ ? void 0 : T,
                source: O.Ob.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: A.author_id,
            },
            { onOpened: () => m?.(ef.PA.OPENED_GAME_PROFILE) },
        ),
        { largeImage: v, smallImage: N } = (0, et.nO)({ entry: A, showCoverImage: f }),
        C = (0, k.w)({ location: "content_inventory" }),
        R = (0, u.bG)([P.A], () => P.A.getDetectableIdsToApplicationIds()),
        D = I ? y : void 0;
    return (0, r.jsxs)("div", {
        className: eg.au,
        children: [
            (0, r.jsx)(ev, { disableGameProfileLinks: _, ...E, onUserPopoutClosed: h }),
            (0, r.jsxs)(eI, {
                backgroundImgSrc: v?.src,
                children: [
                    (0, r.jsxs)("div", {
                        className: eg.CG,
                        children: [
                            (0, r.jsx)("div", {
                                className: eg.Fb,
                                children: (0, r.jsx)(ei.d, {
                                    image: v,
                                    smallImage: N,
                                    aspectRatio: f ? "none" : void 0,
                                    onClick: o ?? D,
                                    size: ei.w.SIZE_72,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: eg.iC,
                                children: [
                                    (0, r.jsx)(eN, {
                                        onClick: l ?? D,
                                        children: (0, r.jsx)(p.Heading, {
                                            variant: "heading-md/medium",
                                            className: a()(eg.$2, { [eg.bC]: null != d }),
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, r.jsx)(eN, {
                                              onClick: c ?? D,
                                              children: (0, r.jsx)(p.Text, {
                                                  variant: "text-sm/normal",
                                                  className: eg.LG,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, r.jsx)(p.hKd, { size: 8 }),
                                    i,
                                ],
                            }),
                            (0, r.jsx)("div", { className: eg.hO, children: d }),
                        ],
                    }),
                    s,
                ],
            }),
            C && null != T && null != R[T]
                ? (0, r.jsx)(G.A, {
                      className: eg.zu,
                      rewardOfferNoticeClassName: eg.PU,
                      applicationId: T,
                      userIds: [A.author_id],
                      cardSize: F.Y.SMALL_SQUARE,
                      location: "content_popout",
                      guildId: E.channel?.guild_id,
                      channelId: E.channel?.id,
                      numWishlistItems: g ? 3 : 2,
                      cardSpec: em.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
function eR(e) {
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
            ...h
        } = e,
        m = (0, H.GG)("content_inventory_memberlist_streaming_content_popout"),
        A = (0, u.bG)([Y.A], () => Y.A.getChannel(o?.channelId)),
        [I] = i.useMemo(() => (0, D.eo)(A, Z.A, W.A, K.A, R.default), [A]),
        { entry: T } = h,
        S = (0, en.zD)(T),
        y = S ? T.extra?.application_id : void 0,
        v = (0, U.W)();
    null != v && (y = v);
    let N = (0, b.A)(
            {
                location: "ContentPopout",
                applicationId: y,
                source: O.Ob.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: T.author_id,
            },
            { onOpened: () => f?.(ef.PA.OPENED_GAME_PROFILE) },
        ),
        C = S ? N : void 0,
        { activity: w, activityApplication: M, fallbackApplication: x } = (0, ea.A)(T),
        { largeImage: V, smallImage: B } = (0, et.D8)(w, M ?? x),
        { largeImage: j } = (0, et.nO)({ entry: T }),
        $ = (0, k.w)({ location: "content_inventory" }),
        z = (0, u.bG)([P.A], () => P.A.getDetectableIdsToApplicationIds());
    return (0, r.jsxs)("div", {
        className: eg.au,
        children: [
            (0, r.jsx)(ev, { ...h, onUserPopoutClosed: _ }),
            (0, r.jsxs)(eI, {
                backgroundImgSrc: j?.src,
                className: eg.uR,
                children: [
                    (0, r.jsx)(eN, {
                        onClick: I
                            ? () => {
                                  E.default.selectVoiceChannel(o.channelId), (0, g.Nl)(o);
                              }
                            : void 0,
                        children: (0, r.jsxs)("div", {
                            className: eg.nh,
                            children: [
                                (0, r.jsx)(L.A, { className: eg.j7, stream: o }),
                                I &&
                                    (0, r.jsx)("div", {
                                        className: eg.NE,
                                        children: (0, r.jsx)(p.Text, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: eE.intl.string(eE.t["7Xq/nV"]),
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: eg.$6,
                        children: [
                            null != V &&
                                (0, r.jsx)("div", {
                                    className: eg.Fb,
                                    children: (0, r.jsx)(ei.d, {
                                        image: V,
                                        smallImage: B,
                                        onClick: l ?? C,
                                        size: ei.w.SIZE_72,
                                    }),
                                }),
                            (0, r.jsxs)("div", {
                                className: eg.gv,
                                children: [
                                    (0, r.jsx)(eN, {
                                        onClick: c ?? C,
                                        children: (0, r.jsx)(p.Heading, {
                                            variant: "heading-md/semibold",
                                            className: eg.nk,
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, r.jsx)(eN, {
                                              onClick: d ?? C,
                                              children: (0, r.jsx)(p.Text, {
                                                  variant: "text-sm/normal",
                                                  className: eg.zA,
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
                    a,
                ],
            }),
            $ && null != y && null != z[y]
                ? (0, r.jsx)(G.A, {
                      className: eg.zu,
                      applicationId: y,
                      userIds: [T.author_id],
                      cardSize: F.Y.SMALL_SQUARE,
                      location: "content_popout",
                      guildId: h.channel?.guild_id,
                      channelId: h.channel?.id,
                      numWishlistItems: m ? 3 : 2,
                      cardSpec: em.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
function eO(e) {
    let t = (0, u.bG)([W.A], () => W.A.getGuild((0, I.D)(e?.location))),
        n = (0, u.bG)([Y.A], () => Y.A.getChannel((0, I.H)(e?.location))),
        i = (0, u.yK)([q.default], () => e?.participants?.map((e) => q.default.getUser(e.userId)) ?? []),
        s = (0, S.Ay)(n);
    return null != e && null != t && null != n && j.k3.has(n.type)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: eg.kP,
                      children: [
                          (0, r.jsxs)(p.DUT, {
                              "aria-label": eE.intl.string(eE.t["W/A4Qp"]),
                              onClick: () => (0, x.iN)(n.id),
                              className: eg.I3,
                              children: [
                                  (0, r.jsx)(w.Ay, { guild: t, size: w.Ay.Sizes.SMOL, className: eg.O9, active: !0 }),
                                  (0, r.jsx)(p._BQ, { size: "xxs", color: d.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                                  (0, r.jsx)(p.N$i, { size: "xs", color: d.A.colors.TEXT_DEFAULT }),
                                  (0, r.jsx)(p.Text, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      className: eg.NR,
                                      children: s,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(B.A, {
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
                                      className: eg.V9,
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
function eb(e) {
    let { channel: t, entry: n, onVoiceChannelPreview: s } = e,
        { streamPreviewUrl: a, channel: o } = (0, el.A)(n),
        l = (0, S.Ay)(o),
        { needSubscriptionToAccess: c } = (0, M.A)(t?.id),
        _ = (0, u.bG)([W.A], () => (null != o ? W.A.getGuild(o.guild_id) : void 0)),
        h = (0, u.yK)([X.Ay], () => (null != o ? X.Ay.getVoiceStatesForChannel(o) : []), [o]),
        E = (0, u.bG)([Z.A], () => Z.A.isInChannel(o?.id)),
        g = i.useMemo(() => {
            for (let e of h) {
                let t = Y.A.getDMFromUserId(e.user.id),
                    n = null != t && z.Ay.isChannelMuted(null, t),
                    r = $.A.isBlockedOrIgnored(e.user.id);
                if (n || r) return !0;
            }
            return !1;
        }, [h]);
    if (null == o || null == _) return { voiceBar: void 0, joinVoiceButton: void 0 };
    let A = null != a,
        I = () => {
            m.A.updateChatOpen(o.id, !0), (0, x.iN)(o.id), s?.(o);
        },
        T = () => {
            y.A.handleVoiceConnect({
                channel: o,
                connected: E,
                needSubscriptionToAccess: c,
                routeDirectlyToChannel: !0,
            });
        },
        v = (e) => {
            let { children: t, text: n, hasRestrictedOrMutedVCParticipant: i } = e,
                s = i
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(p.id, { size: "custom", width: 13, height: 13, className: eg.vb }),
                              eE.intl.string(eE.t.d6DpXI),
                          ],
                      })
                    : n;
            return (0, r.jsx)(
                f.m,
                {
                    "aria-label": i ? eE.intl.string(eE.t.d6DpXI) : (n ?? !1),
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
                    className: eg.kP,
                    children: [
                        (0, r.jsx)(v, {
                            text: eE.intl.string(eE.t.WIVYqJ),
                            hasRestrictedOrMutedVCParticipant: g,
                            children: (0, r.jsxs)(p.DUT, {
                                "aria-label": eE.intl.string(eE.t.WIVYqJ),
                                onClick: I,
                                className: eg.I3,
                                children: [
                                    (0, r.jsx)(w.Ay, { guild: _, size: w.Ay.Sizes.SMOL, className: eg.O9, active: !0 }),
                                    (0, r.jsx)(p._BQ, { size: "xxs", color: d.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                                    (0, r.jsx)(p.HKD, { size: "xs", color: d.A.colors.TEXT_DEFAULT }),
                                    (0, r.jsx)(p.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: eg.NR,
                                        children: l,
                                    }),
                                ],
                            }),
                        }),
                        (0, r.jsx)(B.A, {
                            guildId: _.id,
                            users: h,
                            max: 3,
                            renderUser: (e, t) =>
                                (0, r.jsx)(p.euF, {
                                    src: e.user.getAvatarURL(_.id, 16),
                                    size: p._3J.SIZE_16,
                                    "aria-label": "avatar",
                                    className: t,
                                }),
                            renderMoreUsers: (e) =>
                                (0, r.jsx)("div", {
                                    className: eg.V9,
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
        joinVoiceButton: E
            ? null
            : (0, r.jsx)(v, {
                  hasRestrictedOrMutedVCParticipant: g,
                  children: (0, r.jsx)(p.Button, {
                      onClick: T,
                      fullWidth: !0,
                      text: A ? eE.intl.string(eE.t.I6JG46) : eE.intl.string(eE.t.VJlc0S),
                      icon: A ? p.kN9 : p.HKD,
                      variant: "active",
                      size: "md",
                  }),
              }),
    };
}
