"use strict";
n.d(t, { A: () => W });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(735438),
    o = n(873263),
    c = n(311907),
    d = n(3026),
    u = n(397927),
    h = n(442433),
    A = n(104171),
    m = n(47167),
    p = n(713654),
    g = n(427930),
    _ = n(427209),
    f = n(763754),
    x = n(291812),
    C = n(449859),
    E = n(812299),
    I = n(943220),
    N = n(538355),
    b = n(995273),
    S = n(854627),
    T = n(95701),
    v = n(260509),
    y = n(734057),
    j = n(256587),
    R = n(71393),
    O = n(851109),
    L = n(706341),
    M = n(932883),
    D = n(654795),
    G = n(559873),
    U = n(346061),
    P = n(652215),
    w = n(21786),
    k = n(985018),
    V = n(823221);
function B(e) {
    let { message: t, channel: n, focusProps: l, isSelected: r, isUnread: o, groupedMessages: h } = e,
        A = n.type === P.rbe.UNKNOWN ? u.N$i : (0, p.gU)(n, null),
        g = (0, m.Ay)(n, !1),
        _ = (0, c.bG)([R.A], () => R.A.getGuild(n.getGuildId())),
        { nick: x, colorString: C } = (0, f.Ay)(t),
        { avatarSrc: N, eventHandlers: b } = (0, S.A)({
            userId: t.author.id,
            size: u._3J.SIZE_32,
            guildId: _?.id,
            animateOnHover: !0,
        }),
        T = n.type !== P.rbe.GUILD_ANNOUNCEMENT || null == _,
        y = (0, E.y)({ channel: n, message: t, user: t.author, compact: !0, isRepliedMessage: !0 }),
        O = (0, i.jsx)("div", {
            className: V.Ys,
            inert: !0,
            children: (0, i.jsx)(I.A, { channel: n, message: t, hideGuildTag: !0, hideSystemTag: !0, className: V.Xh }),
        });
    return (
        (0, s.useEffect)(() => {
            null != _ && j.A.requestMember(_.id, t.author.id);
        }, [_, t.author.id]),
        (0, i.jsx)(u.vN3, {
            ...l,
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
                                  src: N,
                                  size: u._3J.SIZE_32,
                                  cornerIconUrl: null != _ ? (0, v.Iv)(_, 24) : void 0,
                                  cornerIconOffsetX: 4,
                                  cornerIconOffsetY: 3,
                              })
                            : (0, i.jsx)(U.h, {
                                  "aria-label": "Guild Icon",
                                  src: (0, v.Iv)(_, 32),
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
                                                      style: { color: C ?? void 0 },
                                                      children: (0, i.jsx)(d.A, { children: O }),
                                                  }),
                                                  y,
                                              ],
                                          })
                                        : (0, i.jsx)(d.A, {
                                              children: (0, i.jsx)(u.Heading, {
                                                  variant: "text-md/semibold",
                                                  style: { color: C ?? void 0 },
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
                                        children: [g, !T && ` \xb7 ${x}`],
                                    }),
                                ],
                            }),
                            (0, i.jsx)(K, { message: t, isUnread: o, isSelected: r, channel: n }),
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
                children: k.intl.formatToPlainString(w.default.NzUuLD, { count: t.length }),
            }),
        ],
    });
}
function F(e) {
    let { message: t } = e,
        n = (0, b.jb)(t.timestamp.getTime());
    return (0, i.jsx)(C.A, {
        timestamp: t.timestamp,
        className: V.vE,
        isEdited: t.isEdited(),
        isInline: !0,
        children: n,
    });
}
function K(e) {
    let { message: t, channel: n, isUnread: l, isSelected: r } = e,
        { previewContent: o, Icon: c } = (function (e) {
            let { message: t, isUnread: n, isSelected: l } = e,
                { content: r } = (0, N.A)(t, {
                    hideSimpleEmbedContent: !0,
                    allowList: !1,
                    allowHeading: !0,
                    allowLinks: !0,
                    previewLinkTarget: !1,
                    formatInline: !0,
                    noStyleAndInteraction: !0,
                });
            return (0, s.useMemo)(() => {
                let e,
                    s = "" === t.content,
                    o = t.embeds.some((e) => e.type === P.Auw.GIFV),
                    c = ((e = t.embeds.some((e) => e.type === P.Auw.GIFV)), t.attachments.length + +!!e),
                    d = (0, g.A)(t),
                    h = t.stickerItems.length > 0,
                    A = t.isPoll(),
                    m = t.type === P.lAJ.POLL_RESULT,
                    p = t.hasFlag(P.pr7.IS_VOICE_MESSAGE),
                    f = t.type === P.lAJ.USER_JOIN,
                    C = null;
                1 === c
                    ? (C = u.xfq)
                    : c > 1
                      ? (C = u.sYc)
                      : d
                        ? (C = _.A)
                        : A || m
                          ? (C = u.YRe)
                          : h
                            ? (C = u.tEP)
                            : p && (C = u.HKD);
                let E = !0,
                    I = null;
                return (
                    s
                        ? d
                            ? (I = k.intl.string(k.t["9ddYKt"]))
                            : A
                              ? ((E = !1), (I = t.poll?.question.text))
                              : (I = m
                                    ? k.intl.string(k.t.sad2PH)
                                    : o
                                      ? k.intl.string(k.t.p0oZmy)
                                      : c > 1
                                        ? k.intl.formatToPlainString(k.t.rtfTKp, { count: c })
                                        : 1 === c
                                          ? k.intl.string(k.t.tCcq5p)
                                          : h
                                            ? k.intl.format(k.t.zY4v1B, { stickerName: t.stickerItems[0].name })
                                            : p
                                              ? k.intl.string(k.t.slFYgi)
                                              : f
                                                ? k.intl.string(k.t.Yvvfw9)
                                                : k.intl.string(k.t.sDqZHL))
                        : ((E = !1),
                          (I = (0, i.jsx)(x.Ay, {
                              content: r,
                              message: t,
                              compact: !1,
                              className: a()(V.iU, { [V.gy]: n, [V.wH]: l }),
                          }))),
                    s &&
                        (I = (0, i.jsx)("div", {
                            className: a()(V.iU, { [V.gy]: n, [V.wH]: l, [V.QP]: E }),
                            children: I,
                        })),
                    { previewContent: I, Icon: C }
                );
            }, [t, r, n, l]);
        })({ message: t, channel: n, isUnread: l, isSelected: r });
    return (0, i.jsxs)(u.BJc, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        inert: !0,
        children: [
            null != c && (0, i.jsx)(c, { size: "xxs", className: V.p4 }),
            (0, i.jsx)(u.Text, { variant: "text-sm/normal", lineClamp: 1, className: V.iU, children: o }),
        ],
    });
}
let W = (0, s.memo)(
    function (e) {
        let { message: t, groupedMessages: l, isUnread: r } = e,
            d = t.message,
            A = (0, M.op)(),
            { params: m } = (0, o.W5)(),
            p = (0, c.bG)([y.A], () => {
                if (null == d) return null;
                let e = y.A.getChannel(t.channelId);
                return null != e
                    ? e
                    : new T.jb({
                          id: t.channelId,
                          guild_id: t.guildId,
                          type: P.rbe.UNKNOWN,
                          name: k.intl.string(k.t.J90oLW),
                      });
            }),
            g = (0, D.s)((e) => e.isMenuOpenForMessage(d?.id ?? null)),
            { notificationCenterVariant: _ } = (0, O.X8)({ location: "NotificationsInboxMessageUnit" }),
            f = s.useMemo(() => `${d?.author.username}: ${p?.name}`, [d?.author.username, p?.name]),
            x = l?.map((e) => e.message).filter((e) => null != e) ?? [];
        return null == d || null == p
            ? null
            : (0, i.jsx)(u.sqX, {
                  "aria-label": f,
                  className: a()(V.FJ, { [V.wH]: d.id === m.messageId, [V.Yj]: g }),
                  onClick: () => {
                      L.A.inboxItemClick({
                          message: d,
                          channel: p,
                          isUnread: r,
                          isSidebar: _ === O.U5.SIDEBAR,
                          viewId: A,
                      });
                  },
                  onContextMenu: (e) => {
                      e.preventDefault(),
                          (0, M.Ml)({ interactionType: M.X8.CONTEXT_MENU, message: d, viewId: A }),
                          (0, h.L3)(
                              e,
                              async () => {
                                  let { default: e } = await n.e("48118").then(n.bind(n, 594005));
                                  return (t) => (0, i.jsx)(e, { ...t, channel: p });
                              },
                              { disableClickTrap: !0 },
                          );
                  },
                  children: (0, i.jsx)(B, {
                      message: d,
                      channel: p,
                      isSelected: d.id === m.messageId,
                      groupedMessages: x,
                      isUnread: r,
                  }),
              });
    },
    (e, t) =>
        e.isUnread === t.isUnread &&
        e.message.id === t.message.id &&
        e.groupedMessages?.length === t.groupedMessages?.length,
);
