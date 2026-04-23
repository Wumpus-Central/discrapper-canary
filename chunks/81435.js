n.d(t, { A: () => ei });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n(873263),
    d = n(311907),
    c = n(3026),
    u = n(890856),
    h = n(276293),
    A = n(778712),
    _ = n(187322),
    m = n(331322),
    g = n(534514),
    p = n(777666),
    f = n(834730),
    E = n(191023),
    x = n(477262),
    I = n(642846),
    C = n(797285),
    b = n(983851),
    N = n(442433),
    S = n(104171),
    v = n(47167),
    T = n(713654),
    y = n(427930),
    j = n(427209),
    R = n(763754),
    L = n(291812),
    O = n(449859),
    G = n(812299),
    M = n(943220),
    D = n(538355),
    U = n(995273),
    P = n(854627),
    w = n(95701),
    k = n(260509),
    V = n(734057),
    B = n(256587),
    H = n(71393),
    F = n(851109),
    W = n(706341),
    Y = n(932883),
    K = n(654795),
    z = n(559873),
    q = n(346061),
    X = n(652215),
    Q = n(756195),
    Z = n(985018),
    J = n(285618);
function $(e) {
    let { message: t, channel: n, focusProps: s, isSelected: r, isUnread: o, groupedMessages: u } = e,
        E = n.type === X.rbe.UNKNOWN ? h.N : (0, T.gU)(n, null),
        x = (0, v.Ay)(n, !1),
        I = (0, d.bG)([H.A], () => H.A.getGuild(n.getGuildId())),
        { nick: C, colorString: b } = (0, R.Ay)(t),
        { avatarSrc: N, eventHandlers: S } = (0, P.A)({
            userId: t.author.id,
            size: A._3.SIZE_32,
            guildId: I?.id,
            animateOnHover: !0,
        }),
        y = n.type !== X.rbe.GUILD_ANNOUNCEMENT || null == I,
        j = (0, G.y)({ channel: n, message: t, user: t.author, compact: !0, isRepliedMessage: !0 }),
        L = (0, i.jsx)("div", {
            className: J.Ys,
            inert: !0,
            children: (0, i.jsx)(M.A, { channel: n, message: t, hideGuildTag: !0, hideSystemTag: !0, className: J.Xh }),
        });
    return (
        (0, l.useEffect)(() => {
            null != I && B.A.requestMember(I.id, t.author.id);
        }, [I, t.author.id]),
        (0, i.jsx)(_.vN, {
            ...s,
            children: (0, i.jsxs)("div", {
                onMouseLeave: S.onMouseLeave,
                onMouseEnter: S.onMouseEnter,
                className: J.zC,
                children: [
                    o && !r && (0, i.jsx)("div", { className: J.Zm }),
                    (0, i.jsx)(m.B, {
                        align: "start",
                        style: { width: "fit-content", marginTop: "4px" },
                        children: y
                            ? (0, i.jsx)(q.e, {
                                  "aria-label": "User Avatar",
                                  src: N,
                                  size: A._3.SIZE_32,
                                  cornerIconUrl: null != I ? (0, k.Iv)(I, 24) : void 0,
                                  cornerIconOffsetX: 4,
                                  cornerIconOffsetY: 3,
                              })
                            : (0, i.jsx)(q.h, {
                                  "aria-label": "Guild Icon",
                                  src: (0, k.Iv)(I, 32),
                                  size: A._3.SIZE_32,
                                  cornerIconUrl: t.author.getAvatarURL(I.id, 24),
                                  cornerIconOffsetX: 4,
                                  cornerIconOffsetY: 3,
                              }),
                    }),
                    (0, i.jsxs)(m.B, {
                        gap: 0,
                        style: { minWidth: 0 },
                        children: [
                            (0, i.jsxs)(m.B, {
                                direction: "horizontal",
                                gap: 4,
                                style: { whiteSpace: "nowrap", minWidth: 0, justifyContent: "space-between" },
                                children: [
                                    y
                                        ? (0, i.jsxs)("div", {
                                              className: J.ZR,
                                              children: [
                                                  (0, i.jsx)("div", {
                                                      className: J.Xh,
                                                      style: { color: b ?? void 0 },
                                                      children: (0, i.jsx)(c.A, { children: L }),
                                                  }),
                                                  j,
                                              ],
                                          })
                                        : (0, i.jsx)(c.A, {
                                              children: (0, i.jsx)(g.D, {
                                                  variant: "text-md/semibold",
                                                  style: { color: b ?? void 0 },
                                                  className: J.Xh,
                                                  children: I.name,
                                              }),
                                          }),
                                    (0, i.jsxs)(m.B, {
                                        direction: "horizontal",
                                        gap: 4,
                                        align: "center",
                                        style: { width: "fit-content" },
                                        children: [
                                            (0, i.jsx)(z.A, { message: t, channel: n, isUnread: o }),
                                            t.mentioned && o
                                                ? (0, i.jsx)(p.hV, { className: J.WK, count: 1 })
                                                : (0, i.jsx)(et, { message: t }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsxs)(m.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                inert: !0,
                                className: a()(J.HA, { [J.gy]: o, [J.wH]: r }),
                                children: [
                                    null !== E && (0, i.jsx)(E, { size: "xxs", className: J.p4 }),
                                    (0, i.jsxs)(f.E, {
                                        variant: "text-sm/medium",
                                        lineClamp: 1,
                                        className: a()(J.HA, { [J.gy]: o, [J.wH]: r }),
                                        children: [x, !y && ` \xb7 ${C}`],
                                    }),
                                ],
                            }),
                            (0, i.jsx)(en, { message: t, isUnread: o, isSelected: r, channel: n }),
                            u.length > 0 &&
                                (0, i.jsx)(m.B, {
                                    gap: 4,
                                    style: { minWidth: 0, marginTop: 4, marginBottom: 4 },
                                    children: (0, i.jsx)(ee, { overflowMessages: u }),
                                }),
                        ],
                    }),
                ],
            }),
        })
    );
}
function ee(e) {
    let { overflowMessages: t } = e,
        n = (0, r.uniqBy)(
            t.map((e) => e.author),
            (e) => e.id,
        ).slice(0, 3);
    return (0, i.jsxs)(m.B, {
        direction: "horizontal",
        gap: 4,
        inert: !0,
        children: [
            (0, i.jsx)(S.Ay, { users: n, useFallbackUserForPopout: !0, size: S.DN.SIZE_16 }),
            (0, i.jsx)(f.E, {
                variant: "text-sm/medium",
                className: J.gD,
                children: Z.intl.formatToPlainString(Q.default.NzUuLD, { count: t.length }),
            }),
        ],
    });
}
function et(e) {
    let { message: t } = e,
        n = (0, U.jb)(t.timestamp.getTime());
    return (0, i.jsx)(O.A, {
        timestamp: t.timestamp,
        className: J.vE,
        isEdited: t.isEdited(),
        isInline: !0,
        children: n,
    });
}
function en(e) {
    let { message: t, channel: n, isUnread: s, isSelected: r } = e,
        { previewContent: o, Icon: d } = (function (e) {
            let { message: t, isUnread: n, isSelected: s } = e,
                { content: r } = (0, D.A)(t, {
                    hideSimpleEmbedContent: !0,
                    allowList: !1,
                    allowHeading: !0,
                    allowLinks: !0,
                    previewLinkTarget: !1,
                    formatInline: !0,
                    noStyleAndInteraction: !0,
                });
            return (0, l.useMemo)(() => {
                let e,
                    l = "" === t.content,
                    o = t.embeds.some((e) => e.type === X.Auw.GIFV),
                    d = ((e = t.embeds.some((e) => e.type === X.Auw.GIFV)), t.attachments.length + +!!e),
                    c = (0, y.A)(t),
                    u = t.stickerItems.length > 0,
                    h = t.isPoll(),
                    A = t.type === X.lAJ.POLL_RESULT,
                    _ = t.hasFlag(X.pr7.IS_VOICE_MESSAGE),
                    m = t.type === X.lAJ.USER_JOIN,
                    g = null;
                1 === d
                    ? (g = E.x)
                    : d > 1
                      ? (g = x.s)
                      : c
                        ? (g = j.A)
                        : h || A
                          ? (g = I.Y)
                          : u
                            ? (g = C.t)
                            : _ && (g = b.H);
                let p = !0,
                    f = null;
                return (
                    l
                        ? c
                            ? (f = Z.intl.string(Z.t["9ddYKt"]))
                            : h
                              ? ((p = !1), (f = t.poll?.question.text))
                              : (f = A
                                    ? Z.intl.string(Z.t.sad2PH)
                                    : o
                                      ? Z.intl.string(Z.t.p0oZmy)
                                      : d > 1
                                        ? Z.intl.formatToPlainString(Z.t.rtfTKp, { count: d })
                                        : 1 === d
                                          ? Z.intl.string(Z.t.tCcq5p)
                                          : u
                                            ? Z.intl.format(Z.t.zY4v1B, { stickerName: t.stickerItems[0].name })
                                            : _
                                              ? Z.intl.string(Z.t.slFYgi)
                                              : m
                                                ? Z.intl.string(Z.t.Yvvfw9)
                                                : Z.intl.string(Z.t.sDqZHL))
                        : ((p = !1),
                          (f = (0, i.jsx)(L.Ay, {
                              content: r,
                              message: t,
                              compact: !1,
                              className: a()(J.iU, { [J.gy]: n, [J.wH]: s }),
                          }))),
                    l &&
                        (f = (0, i.jsx)("div", {
                            className: a()(J.iU, { [J.gy]: n, [J.wH]: s, [J.QP]: p }),
                            children: f,
                        })),
                    { previewContent: f, Icon: g }
                );
            }, [t, r, n, s]);
        })({ message: t, channel: n, isUnread: s, isSelected: r });
    return (0, i.jsxs)(m.B, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        inert: !0,
        children: [
            null != d && (0, i.jsx)(d, { size: "xxs", className: J.p4 }),
            (0, i.jsx)(f.E, { variant: "text-sm/normal", lineClamp: 1, className: J.iU, children: o }),
        ],
    });
}
let ei = (0, l.memo)(
    function (e) {
        let { message: t, groupedMessages: s, isUnread: r } = e,
            c = t.message,
            h = (0, Y.op)(),
            { params: A } = (0, o.W5)(),
            _ = (0, d.bG)([V.A], () => {
                if (null == c) return null;
                let e = V.A.getChannel(t.channelId);
                return null != e
                    ? e
                    : new w.jb({
                          id: t.channelId,
                          guild_id: t.guildId,
                          type: X.rbe.UNKNOWN,
                          name: Z.intl.string(Z.t.J90oLW),
                      });
            }),
            m = (0, K.s)((e) => e.isMenuOpenForMessage(c?.id ?? null)),
            { notificationCenterVariant: g } = (0, F.X8)({ location: "NotificationsInboxMessageUnit" }),
            p = (0, v.Ay)(_),
            f = l.useMemo(() => `${c?.author.username}: ${p}`, [c?.author.username, p]),
            E = s?.map((e) => e.message).filter((e) => null != e) ?? [];
        return null == c || null == _
            ? null
            : (0, i.jsx)(u.s, {
                  "aria-label": f,
                  className: a()(J.FJ, { [J.wH]: c.id === A.messageId, [J.Yj]: m }),
                  onClick: () => {
                      W.A.inboxItemClick({
                          message: c,
                          channel: _,
                          isUnread: r,
                          isSidebar: g === F.U5.SIDEBAR,
                          viewId: h,
                      });
                  },
                  onContextMenu: (e) => {
                      e.preventDefault(),
                          (0, Y.Ml)({ interactionType: Y.X8.CONTEXT_MENU, message: c, viewId: h }),
                          (0, N.L3)(
                              e,
                              async () => {
                                  let { default: e } = await n.e("48118").then(n.bind(n, 594005));
                                  return (t) => (0, i.jsx)(e, { ...t, channel: _ });
                              },
                              { disableClickTrap: !0 },
                          );
                  },
                  children: (0, i.jsx)($, {
                      message: c,
                      channel: _,
                      isSelected: c.id === A.messageId,
                      groupedMessages: E,
                      isUnread: r,
                  }),
              });
    },
    (e, t) =>
        e.isUnread === t.isUnread &&
        e.message.id === t.message.id &&
        e.groupedMessages?.length === t.groupedMessages?.length,
);
