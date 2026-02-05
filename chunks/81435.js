n.d(t, { A: () => W });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n(960488),
    d = n(311907),
    c = n(3026),
    u = n(397927),
    h = n(442433),
    A = n(104171),
    g = n(47167),
    m = n(713654),
    p = n(427930),
    _ = n(427209),
    x = n(763754),
    f = n(291812),
    E = n(449859),
    C = n(812299),
    I = n(943220),
    S = n(538355),
    b = n(995273),
    N = n(854627),
    T = n(95701),
    j = n(260509),
    v = n(734057),
    y = n(256587),
    R = n(71393),
    O = n(851109),
    L = n(706341),
    D = n(932883),
    M = n(654795),
    G = n(559873),
    U = n(346061),
    P = n(652215),
    k = n(228160),
    w = n(985018),
    V = n(471135);
function B(e) {
    let { message: t, channel: n, focusProps: s, isSelected: r, isUnread: o, groupedMessages: h } = e,
        A = n.type === P.rbe.UNKNOWN ? u.N$i : (0, m.gU)(n, null),
        p = (0, g.Ay)(n, !1),
        _ = (0, d.bG)([R.A], () => R.A.getGuild(n.getGuildId())),
        { nick: f, colorString: E } = (0, x.Ay)(t),
        { avatarSrc: S, eventHandlers: b } = (0, N.A)({
            userId: t.author.id,
            size: u._3J.SIZE_32,
            guildId: _?.id,
            animateOnHover: !0,
        }),
        T = n.type !== P.rbe.GUILD_ANNOUNCEMENT || null == _,
        v = (0, C.y)({ channel: n, message: t, user: t.author, compact: !0, isRepliedMessage: !0 }),
        O = (0, i.jsx)("div", {
            className: V.Ys,
            inert: !0,
            children: (0, i.jsx)(I.A, { channel: n, message: t, hideGuildTag: !0, hideSystemTag: !0, className: V.Xh }),
        });
    return (
        (0, l.useEffect)(() => {
            null != _ && y.A.requestMember(_.id, t.author.id);
        }, [_, t.author.id]),
        (0, i.jsx)(u.vN3, {
            ...s,
            children: (0, i.jsxs)("div", {
                onMouseLeave: b.onMouseLeave,
                onMouseEnter: b.onMouseEnter,
                className: V.zC,
                children: [
                    o && !r && (0, i.jsx)("div", { className: V.Zm }),
                    (0, i.jsx)(u.BJc, {
                        align: "start",
                        style: { width: "fit-content", marginTop: "4px" },
                        children: T
                            ? (0, i.jsx)(U.e, {
                                  "aria-label": "User Avatar",
                                  src: S,
                                  size: u._3J.SIZE_32,
                                  cornerIconUrl: null != _ ? (0, j.Iv)(_, 24) : void 0,
                                  cornerIconOffsetX: 4,
                                  cornerIconOffsetY: 3,
                              })
                            : (0, i.jsx)(U.h, {
                                  "aria-label": "Guild Icon",
                                  src: (0, j.Iv)(_, 32),
                                  size: u._3J.SIZE_32,
                                  cornerIconUrl: t.author.getAvatarURL(_.id, 24),
                                  cornerIconOffsetX: 4,
                                  cornerIconOffsetY: 3,
                              }),
                    }),
                    (0, i.jsxs)(u.BJc, {
                        gap: 0,
                        style: { minWidth: 0 },
                        children: [
                            (0, i.jsxs)(u.BJc, {
                                direction: "horizontal",
                                gap: 4,
                                style: { whiteSpace: "nowrap", minWidth: 0, justifyContent: "space-between" },
                                children: [
                                    T
                                        ? (0, i.jsxs)("div", {
                                              className: V.ZR,
                                              children: [
                                                  (0, i.jsx)("div", {
                                                      className: V.Xh,
                                                      style: { color: E ?? void 0 },
                                                      children: (0, i.jsx)(c.A, { children: O }),
                                                  }),
                                                  v,
                                              ],
                                          })
                                        : (0, i.jsx)(c.A, {
                                              children: (0, i.jsx)(u.Heading, {
                                                  variant: "text-md/semibold",
                                                  style: { color: E ?? void 0 },
                                                  className: V.Xh,
                                                  children: _.name,
                                              }),
                                          }),
                                    (0, i.jsxs)(u.BJc, {
                                        direction: "horizontal",
                                        gap: 4,
                                        align: "center",
                                        style: { width: "fit-content" },
                                        children: [
                                            (0, i.jsx)(G.A, { message: t, channel: n, isUnread: o }),
                                            t.mentioned && o
                                                ? (0, i.jsx)(u.hVq, { className: V.WK, count: 1 })
                                                : (0, i.jsx)(F, { message: t }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsxs)(u.BJc, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                inert: !0,
                                className: a()(V.HA, { [V.gy]: o, [V.wH]: r }),
                                children: [
                                    null !== A && (0, i.jsx)(A, { size: "xxs", className: V.p4 }),
                                    (0, i.jsxs)(u.Text, {
                                        variant: "text-sm/medium",
                                        lineClamp: 1,
                                        className: a()(V.HA, { [V.gy]: o, [V.wH]: r }),
                                        children: [p, !T && ` \xb7 ${f}`],
                                    }),
                                ],
                            }),
                            (0, i.jsx)(Y, { message: t, isUnread: o, isSelected: r, channel: n }),
                            h.length > 0 &&
                                (0, i.jsx)(u.BJc, {
                                    gap: 4,
                                    style: { minWidth: 0, marginTop: 4, marginBottom: 4 },
                                    children: (0, i.jsx)(H, { overflowMessages: h }),
                                }),
                        ],
                    }),
                ],
            }),
        })
    );
}
function H(e) {
    let { overflowMessages: t } = e,
        n = (0, r.uniqBy)(
            t.map((e) => e.author),
            (e) => e.id,
        ).slice(0, 3);
    return (0, i.jsxs)(u.BJc, {
        direction: "horizontal",
        gap: 4,
        inert: !0,
        children: [
            (0, i.jsx)(A.Ay, { users: n, useFallbackUserForPopout: !0, size: A.DN.SIZE_16 }),
            (0, i.jsx)(u.Text, {
                variant: "text-sm/medium",
                className: V.gD,
                children: w.intl.formatToPlainString(k.default.NzUuLD, { count: t.length }),
            }),
        ],
    });
}
function F(e) {
    let { message: t } = e,
        n = (0, b.jb)(t.timestamp.getTime());
    return (0, i.jsx)(E.A, {
        timestamp: t.timestamp,
        className: V.vE,
        isEdited: t.isEdited(),
        isInline: !0,
        children: n,
    });
}
function Y(e) {
    let { message: t, channel: n, isUnread: s, isSelected: r } = e,
        { previewContent: o, Icon: d } = (function (e) {
            let { message: t, isUnread: n, isSelected: s } = e,
                { content: r } = (0, S.A)(t, {
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
                    o = t.embeds.some((e) => e.type === P.Auw.GIFV),
                    d = ((e = t.embeds.some((e) => e.type === P.Auw.GIFV)), t.attachments.length + +!!e),
                    c = (0, p.A)(t),
                    h = t.stickerItems.length > 0,
                    A = t.isPoll(),
                    g = t.type === P.lAJ.POLL_RESULT,
                    m = t.hasFlag(P.pr7.IS_VOICE_MESSAGE),
                    x = t.type === P.lAJ.USER_JOIN,
                    E = null;
                1 === d
                    ? (E = u.xfq)
                    : d > 1
                      ? (E = u.sYc)
                      : c
                        ? (E = _.A)
                        : A || g
                          ? (E = u.YRe)
                          : h
                            ? (E = u.tEP)
                            : m && (E = u.HKD);
                let C = !0,
                    I = null;
                return (
                    l
                        ? c
                            ? (I = w.intl.string(w.t["9ddYKt"]))
                            : A
                              ? ((C = !1), (I = t.poll?.question.text))
                              : (I = g
                                    ? w.intl.string(w.t.sad2PH)
                                    : o
                                      ? w.intl.string(w.t.p0oZmy)
                                      : d > 1
                                        ? w.intl.formatToPlainString(w.t.rtfTKp, { count: d })
                                        : 1 === d
                                          ? w.intl.string(w.t.tCcq5p)
                                          : h
                                            ? w.intl.format(w.t.zY4v1B, { stickerName: t.stickerItems[0].name })
                                            : m
                                              ? w.intl.string(w.t.slFYgi)
                                              : x
                                                ? w.intl.string(w.t.Yvvfw9)
                                                : w.intl.string(w.t.sDqZHL))
                        : ((C = !1),
                          (I = (0, i.jsx)(f.Ay, {
                              content: r,
                              message: t,
                              compact: !1,
                              className: a()(V.iU, { [V.gy]: n, [V.wH]: s }),
                          }))),
                    l &&
                        (I = (0, i.jsx)("div", {
                            className: a()(V.iU, { [V.gy]: n, [V.wH]: s, [V.QP]: C }),
                            children: I,
                        })),
                    { previewContent: I, Icon: E }
                );
            }, [t, r, n, s]);
        })({ message: t, channel: n, isUnread: s, isSelected: r });
    return (0, i.jsxs)(u.BJc, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        inert: !0,
        children: [
            null != d && (0, i.jsx)(d, { size: "xxs", className: V.p4 }),
            (0, i.jsx)(u.Text, { variant: "text-sm/normal", lineClamp: 1, className: V.iU, children: o }),
        ],
    });
}
let W = (0, l.memo)(
    function (e) {
        let { message: t, groupedMessages: s, isUnread: r } = e,
            c = t.message,
            A = (0, D.op)(),
            { params: g } = (0, o.W5)(),
            m = (0, d.bG)([v.A], () => {
                if (null == c) return null;
                let e = v.A.getChannel(t.channelId);
                return null != e
                    ? e
                    : new T.jb({
                          id: t.channelId,
                          guild_id: t.guildId,
                          type: P.rbe.UNKNOWN,
                          name: w.intl.string(w.t.J90oLW),
                      });
            }),
            p = (0, M.s)((e) => e.isMenuOpenForMessage(c?.id ?? null)),
            { notificationCenterVariant: _ } = (0, O.X8)({ location: "NotificationsInboxMessageUnit" }),
            x = l.useMemo(() => `${c?.author.username}: ${m?.name}`, [c?.author.username, m?.name]),
            f = s?.map((e) => e.message).filter((e) => null != e) ?? [];
        return null == c || null == m
            ? null
            : (0, i.jsx)(u.sqX, {
                  "aria-label": x,
                  className: a()(V.FJ, { [V.wH]: c.id === g.messageId, [V.Yj]: p }),
                  onClick: () => {
                      L.A.inboxItemClick({
                          message: c,
                          channel: m,
                          isUnread: r,
                          isSidebar: _ === O.U5.SIDEBAR,
                          viewId: A,
                      });
                  },
                  onContextMenu: (e) => {
                      e.preventDefault(),
                          (0, D.Ml)({ interactionType: D.X8.CONTEXT_MENU, message: c, viewId: A }),
                          (0, h.L3)(
                              e,
                              async () => {
                                  let { default: e } = await n.e("48118").then(n.bind(n, 594005));
                                  return (t) => (0, i.jsx)(e, { ...t, channel: m });
                              },
                              { disableClickTrap: !0 },
                          );
                  },
                  children: (0, i.jsx)(B, {
                      message: c,
                      channel: m,
                      isSelected: c.id === g.messageId,
                      groupedMessages: f,
                      isUnread: r,
                  }),
              });
    },
    (e, t) =>
        e.isUnread === t.isUnread &&
        e.message.id === t.message.id &&
        e.groupedMessages?.length === t.groupedMessages?.length,
);
