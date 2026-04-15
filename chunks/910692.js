"use strict";
n.d(t, { BC: () => ev, Eh: () => eA, Fl: () => eN, YN: () => eE, fD: () => eI });
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
    P = n(378570),
    x = n(832163),
    k = n(565688),
    U = n(533562),
    G = n(93879),
    F = n(912276),
    V = n(636585),
    B = n(95701),
    H = n(734057),
    j = n(71393),
    Y = n(576705),
    W = n(994500),
    K = n(543465),
    $ = n(287809),
    z = n(977997),
    q = n(607567),
    Z = n(954571),
    X = n(486020),
    Q = n(562153),
    J = n(939341),
    ee = n(20805),
    et = n(22869),
    en = n(623671),
    er = n(428249),
    ei = n(327098),
    es = n(576757),
    ea = n(202195),
    eo = n(176563),
    el = n(422973),
    eu = n(315246),
    ec = n(899682),
    ed = n(424994),
    e_ = n(652215),
    ef = n(381941),
    ep = n(699976),
    eh = n(985018),
    em = n(191999);
function eE(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: em.SW, children: t });
}
function eg(e) {
    let { children: t, backgroundImgSrc: n, className: i, style: s = {} } = e,
        { primaryColor: o, secondaryColor: l } = (0, eo.A)(n);
    return (
        null != n && (s.background = `linear-gradient(45deg, ${o}, ${l})`),
        (0, r.jsx)(p.NPJ, {
            theme: e_.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) => (0, r.jsx)("div", { className: a()(em.ZK, e, i), style: s, children: t }),
        })
    );
}
function eA(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: em.$m, children: t });
}
function eI(e) {
    let { channel: t, user: n, onReaction: s, entry: a, buttons: o = [], header: _, onVoiceChannelPreview: m } = e,
        [E, g] = i.useState(!1),
        [A, I] = i.useState(null),
        y = i.useRef(null),
        v = (0, u.bG)(
            [Y.A],
            () => null != t && e_.kvI.CONTENT_ENTRY_EMBEDS.has(t.type) && Y.A.can(e_.xBc.SEND_MESSAGES, t),
        ),
        [C, R] = i.useState(!1),
        [O, b] = i.useState(!1),
        { voiceBar: D, joinVoiceButton: L } = eR({ channel: t, entry: a, onVoiceChannelPreview: m }),
        { embeddedActivity: w } = (0, ei.A)(a),
        M = eC(w),
        P = null != L && 0 === o.length ? [L] : o,
        x = P.length > 0,
        k = P.length >= 2,
        [U, G] = i.useState(!x),
        F = Q.Ay.getName(t?.guild_id, t?.id, n),
        V = (0, S.Ay)(t, !0),
        B =
            null != t && E
                ? eh.intl.formatToPlainString(eh.t["8lzR/R"], { channel: V })
                : eh.intl.formatToPlainString(eh.t["4c+CAx"], { channel: `@${F}` }),
        j = E ? eh.intl.string(eh.t.Z2CUgn) : eh.intl.string(eh.t.XLGiTG),
        W = async (e) => {
            let r,
                { emoji: i } = e;
            if (null != i) {
                if (
                    (Z.default.track(e_.HAw.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: ed.UG.GUILD_MEMBER_LIST,
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
                    r = H.A.getChannel(e) ?? null;
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
                        interactionType: ed.PA.REACTION_EMOJI_REACT_SENT,
                        requiresChannelReadiness: !1,
                    })
                );
            }
        },
        K = async (e) => {
            let r;
            if (((0, N.Dr)(c.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), E))
                l()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), (r = t);
            else {
                let e = await h.A.openPrivateChannel({ recipientIds: n.id }),
                    t = H.A.getChannel(e);
                l()(null != t, "DM channel must be defined"), (r = t);
            }
            let i = r.type === e_.rbe.DM ? ed.PA.DM_REACTION_MESSAGE_SENT : ed.PA.CHANNEL_REACTION_MESSAGE_SENT;
            return $({ reply: e, sendToChannel: r, interactionType: i, onComplete: s, requiresChannelReadiness: !0 });
        },
        $ = async (e) => {
            let { reply: t, sendToChannel: n, onComplete: r, interactionType: i, requiresChannelReadiness: s } = e;
            A?.focus(),
                await (0, er.d)({
                    channel: n,
                    content: t,
                    entry: a,
                    whenReady: s,
                    doNotNotifyOnError: !1,
                    location: ef.Hx.CONTENT_INVENTORY_MEMBERLIST,
                }),
                r?.(i, n);
        },
        z = _ ?? D ?? M,
        q = () => {
            g((e) => !e), U && A?.focus();
        },
        X = (e) => {
            G(e), e && A?.focus();
        };
    return (0, r.jsx)("div", {
        ref: y,
        style: { pointerEvents: C ? "none" : "all" },
        children: (0, r.jsx)(p.Oky, {
            containerRef: y,
            children: (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(ec.A, { sent: O, shown: C, className: em.Jt }),
                    z ??
                        (0, r.jsx)(el.A, {
                            children: (0, r.jsxs)("div", {
                                className: em.T7,
                                children: [
                                    (0, r.jsx)(eT, { channel: t, onClickSuggestion: W }),
                                    (0, r.jsx)(T.g1, { onSelectEmoji: W }),
                                ],
                            }),
                        }),
                    (0, r.jsxs)("div", {
                        className: U ? em.P2 : em.VE,
                        children: [
                            (0, r.jsx)(T.nd, {
                                placeholder: B,
                                onEnter: K,
                                setEditorRef: (e) => I(e),
                                channel: E ? t : void 0,
                                showEmojiButton: null != z,
                                className: em.N8,
                                autoFocus: !1,
                                renderAttachButton: v
                                    ? () =>
                                          (0, r.jsx)(f.m, {
                                              text: j,
                                              children: (0, r.jsx)(p.DUT, {
                                                  className: em.wD,
                                                  onClick: q,
                                                  children: E
                                                      ? (0, r.jsx)(p.N$i, { size: "custom", width: 20, height: 20 })
                                                      : (0, r.jsx)(p.XxR, { size: "custom", width: 20, height: 20 }),
                                              }),
                                          })
                                    : void 0,
                            }),
                            x &&
                                (0, r.jsx)(p.DUT, {
                                    onClick: () => X(!1),
                                    className: em.i3,
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
                            className: em.fh,
                            children: [
                                !k &&
                                    (0, r.jsx)(
                                        p.Button,
                                        {
                                            fullWidth: !0,
                                            variant: "secondary",
                                            onClick: () => X(!0),
                                            size: "md",
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
let eT = (e) => {
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
                              children: (0, r.jsx)(F.D, {
                                  emoji: t,
                                  isDisabled: !s,
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
function eS(e) {
    let { channel: t, userDescription: n, entry: i, disableGameProfileLinks: s, onUserPopoutClosed: o } = e,
        l = t?.guild_id,
        { displayParticipants: c, participant1: d, participant2: f, numOtherParticipants: h } = (0, es.A)(i, 3),
        m = (0, u.bG)([$.default], () => $.default.getUser(i.author_id)),
        { streamPreviewUrl: E } = (0, ea.A)(i),
        g = null != E,
        A = [d, f];
    return (0, r.jsxs)("div", {
        className: em.MH,
        children: [
            (0, r.jsxs)("div", {
                className: em.WP,
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
                        className: a()(em.Xn, em.zA),
                        children: eh.intl.format(n, {
                            user0: Q.Ay.getName(l, t?.id, A[0]),
                            user1: Q.Ay.getName(l, t?.id, A[1]),
                            countOthers: h,
                            countOthersHook: (e, t) =>
                                (0, r.jsx)(
                                    p.Text,
                                    { variant: "text-sm/medium", className: a()(em.Mj, em.nk), children: e },
                                    t,
                                ),
                            name0Hook: (e, n) =>
                                (0, r.jsx)(
                                    et.A,
                                    {
                                        textClassName: a()(em.Mj, em.nk),
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
                                    et.A,
                                    {
                                        textClassName: a()(em.Mj, em.nk),
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
            null != m && (0, r.jsx)(eu.A, { user: m, channel: t, guildId: l, entry: i, disableGameProfileLinks: s }),
        ],
    });
}
function ey(e) {
    let { children: t, onClick: n } = e;
    return null == n ? t : (0, r.jsx)(p.DUT, { className: em.Zw, onClick: n, children: t });
}
function ev(e) {
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
        { entry: g } = E,
        A = (0, ee.zD)(g),
        I = A ? g.extra?.application_id : void 0,
        T = (0, U.W)();
    null != T && (I = T);
    let S = (0, b.A)(
            {
                location: "ContentPopout",
                applicationId: _ ? void 0 : I,
                source: O.Ob.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: g.author_id,
            },
            { onOpened: () => m?.(ed.PA.OPENED_GAME_PROFILE) },
        ),
        { largeImage: y, smallImage: v } = (0, J.nO)({ entry: g, showCoverImage: f }),
        N = (0, k.w)({ location: "content_inventory" }),
        C = (0, u.bG)([x.A], () => x.A.getDetectableIdsToApplicationIds()),
        R = A ? S : void 0;
    return (0, r.jsxs)("div", {
        className: em.au,
        children: [
            (0, r.jsx)(eS, { disableGameProfileLinks: _, ...E, onUserPopoutClosed: h }),
            (0, r.jsxs)(eg, {
                backgroundImgSrc: y?.src,
                children: [
                    (0, r.jsxs)("div", {
                        className: em.CG,
                        children: [
                            (0, r.jsx)("div", {
                                className: em.Fb,
                                children: (0, r.jsx)(en.d, {
                                    image: y,
                                    smallImage: v,
                                    aspectRatio: f ? "none" : void 0,
                                    onClick: o ?? R,
                                    size: en.w.SIZE_72,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: em.iC,
                                children: [
                                    (0, r.jsx)(ey, {
                                        onClick: l ?? R,
                                        children: (0, r.jsx)(p.Heading, {
                                            variant: "heading-md/medium",
                                            className: a()(em.$2, { [em.bC]: null != d }),
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, r.jsx)(ey, {
                                              onClick: c ?? R,
                                              children: (0, r.jsx)(p.Text, {
                                                  variant: "text-sm/normal",
                                                  className: em.LG,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, r.jsx)(p.hKd, { size: 8 }),
                                    i,
                                ],
                            }),
                            (0, r.jsx)("div", { className: em.hO, children: d }),
                        ],
                    }),
                    s,
                ],
            }),
            N && null != I && null != C[I]
                ? (0, r.jsx)(G.A, {
                      className: em.zu,
                      rewardOfferNoticeClassName: em.PU,
                      applicationId: I,
                      userIds: [g.author_id],
                      location: "content_popout",
                      guildId: E.channel?.guild_id,
                      channelId: E.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: ep.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
function eN(e) {
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
        m = (0, u.bG)([H.A], () => H.A.getChannel(o?.channelId)),
        [A] = i.useMemo(() => (0, D.eo)(m, z.A, j.A, Y.A, R.default), [m]),
        { entry: I } = h,
        T = (0, ee.zD)(I),
        S = T ? I.extra?.application_id : void 0,
        y = (0, U.W)();
    null != y && (S = y);
    let v = (0, b.A)(
            {
                location: "ContentPopout",
                applicationId: S,
                source: O.Ob.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: I.author_id,
            },
            { onOpened: () => f?.(ed.PA.OPENED_GAME_PROFILE) },
        ),
        N = T ? v : void 0,
        { activity: C, activityApplication: w, fallbackApplication: M } = (0, ei.A)(I),
        { largeImage: P, smallImage: F } = (0, J.D8)(C, w ?? M),
        { largeImage: V } = (0, J.nO)({ entry: I }),
        B = (0, k.w)({ location: "content_inventory" }),
        W = (0, u.bG)([x.A], () => x.A.getDetectableIdsToApplicationIds());
    return (0, r.jsxs)("div", {
        className: em.au,
        children: [
            (0, r.jsx)(eS, { ...h, onUserPopoutClosed: _ }),
            (0, r.jsxs)(eg, {
                backgroundImgSrc: V?.src,
                className: em.uR,
                children: [
                    (0, r.jsx)(ey, {
                        onClick: A
                            ? () => {
                                  E.default.selectVoiceChannel(o.channelId), (0, g.Nl)(o);
                              }
                            : void 0,
                        children: (0, r.jsxs)("div", {
                            className: em.nh,
                            children: [
                                (0, r.jsx)(L.A, { className: em.j7, stream: o }),
                                A &&
                                    (0, r.jsx)("div", {
                                        className: em.NE,
                                        children: (0, r.jsx)(p.Text, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: eh.intl.string(eh.t["7Xq/nV"]),
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: em.$6,
                        children: [
                            null != P &&
                                (0, r.jsx)("div", {
                                    className: em.Fb,
                                    children: (0, r.jsx)(en.d, {
                                        image: P,
                                        smallImage: F,
                                        onClick: l ?? N,
                                        size: en.w.SIZE_72,
                                    }),
                                }),
                            (0, r.jsxs)("div", {
                                className: em.gv,
                                children: [
                                    (0, r.jsx)(ey, {
                                        onClick: c ?? N,
                                        children: (0, r.jsx)(p.Heading, {
                                            variant: "heading-md/semibold",
                                            className: em.nk,
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, r.jsx)(ey, {
                                              onClick: d ?? N,
                                              children: (0, r.jsx)(p.Text, {
                                                  variant: "text-sm/normal",
                                                  className: em.zA,
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
            B && null != S && null != W[S]
                ? (0, r.jsx)(G.A, {
                      className: em.zu,
                      applicationId: S,
                      userIds: [I.author_id],
                      location: "content_popout",
                      guildId: h.channel?.guild_id,
                      channelId: h.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: ep.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
function eC(e) {
    let t = (0, u.bG)([j.A], () => j.A.getGuild((0, I.D)(e?.location))),
        n = (0, u.bG)([H.A], () => H.A.getChannel((0, I.H)(e?.location))),
        i = (0, u.yK)([$.default], () => e?.participants?.map((e) => $.default.getUser(e.userId)) ?? []),
        s = (0, S.Ay)(n);
    return null != e && null != t && null != n && B.k3.has(n.type)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: em.kP,
                      children: [
                          (0, r.jsxs)(p.DUT, {
                              "aria-label": eh.intl.string(eh.t["W/A4Qp"]),
                              onClick: () => (0, P.iN)(n.id),
                              className: em.I3,
                              children: [
                                  (0, r.jsx)(w.Ay, { guild: t, size: w.Ay.Sizes.SMOL, className: em.O9, active: !0 }),
                                  (0, r.jsx)(p._BQ, { size: "xxs", color: d.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                                  (0, r.jsx)(p.N$i, { size: "xs", color: d.A.colors.TEXT_DEFAULT }),
                                  (0, r.jsx)(p.Text, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      className: em.NR,
                                      children: s,
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
                                      className: em.V9,
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
function eR(e) {
    let { channel: t, entry: n, onVoiceChannelPreview: s } = e,
        { streamPreviewUrl: a, channel: o } = (0, ea.A)(n),
        l = (0, S.Ay)(o),
        { needSubscriptionToAccess: c } = (0, M.A)(t?.id),
        _ = (0, u.bG)([j.A], () => (null != o ? j.A.getGuild(o.guild_id) : void 0)),
        h = (0, u.yK)([q.Ay], () => (null != o ? q.Ay.getVoiceStatesForChannel(o) : []), [o]),
        E = (0, u.bG)([z.A], () => z.A.isInChannel(o?.id)),
        g = i.useMemo(() => {
            for (let e of h) {
                let t = H.A.getDMFromUserId(e.user.id),
                    n = null != t && K.Ay.isChannelMuted(null, t),
                    r = W.A.isBlockedOrIgnored(e.user.id);
                if (n || r) return !0;
            }
            return !1;
        }, [h]);
    if (null == o || null == _) return { voiceBar: void 0, joinVoiceButton: void 0 };
    let A = null != a,
        I = () => {
            m.A.updateChatOpen(o.id, !0), (0, P.iN)(o.id), s?.(o);
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
                              (0, r.jsx)(p.id, { size: "custom", width: 13, height: 13, className: em.vb }),
                              eh.intl.string(eh.t.d6DpXI),
                          ],
                      })
                    : n;
            return (0, r.jsx)(
                f.m,
                {
                    "aria-label": i ? eh.intl.string(eh.t.d6DpXI) : (n ?? !1),
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
                    className: em.kP,
                    children: [
                        (0, r.jsx)(v, {
                            text: eh.intl.string(eh.t.WIVYqJ),
                            hasRestrictedOrMutedVCParticipant: g,
                            children: (0, r.jsxs)(p.DUT, {
                                "aria-label": eh.intl.string(eh.t.WIVYqJ),
                                onClick: I,
                                className: em.I3,
                                children: [
                                    (0, r.jsx)(w.Ay, { guild: _, size: w.Ay.Sizes.SMOL, className: em.O9, active: !0 }),
                                    (0, r.jsx)(p._BQ, { size: "xxs", color: d.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                                    (0, r.jsx)(p.HKD, { size: "xs", color: d.A.colors.TEXT_DEFAULT }),
                                    (0, r.jsx)(p.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: em.NR,
                                        children: l,
                                    }),
                                ],
                            }),
                        }),
                        (0, r.jsx)(V.A, {
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
                                    className: em.V9,
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
                      text: A ? eh.intl.string(eh.t.I6JG46) : eh.intl.string(eh.t.VJlc0S),
                      icon: A ? p.kN9 : p.HKD,
                      variant: "active",
                      size: "md",
                  }),
              }),
    };
}
