n.d(t, { A: () => K });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n(873263),
    d = n(311907),
    c = n(3026),
    u = n(397927),
    h = n(442433),
    A = n(104171),
    _ = n(47167),
    m = n(713654),
    g = n(427930),
    p = n(427209),
    f = n(763754),
    x = n(291812),
    E = n(449859),
    I = n(812299),
    C = n(943220),
    N = n(538355),
    T = n(995273),
    S = n(854627),
    b = n(95701),
    y = n(260509),
    v = n(734057),
    j = n(256587),
    R = n(71393),
    O = n(851109),
    L = n(706341),
    M = n(932883),
    D = n(654795),
    U = n(559873),
    G = n(346061),
    P = n(652215),
    k = n(228160),
    w = n(985018),
    B = n(68450);
function V(e) {
    let { message: t, channel: n, focusProps: s, isSelected: r, isUnread: o, groupedMessages: h } = e,
        A = n.type === P.rbe.UNKNOWN ? u.N$i : (0, m.gU)(n, null),
        g = (0, _.Ay)(n, !1),
        p = (0, d.bG)([R.A], () => R.A.getGuild(n.getGuildId())),
        { nick: x, colorString: E } = (0, f.Ay)(t),
        { avatarSrc: N, eventHandlers: T } = (0, S.A)({
            userId: t.author.id,
            size: u._3J.SIZE_32,
            guildId: p?.id,
            animateOnHover: !0,
        }),
        b = n.type !== P.rbe.GUILD_ANNOUNCEMENT || null == p,
        v = (0, I.y)({ channel: n, message: t, user: t.author, compact: !0, isRepliedMessage: !0 }),
        O = (0, i.jsx)("div", {
            className: B.Ys,
            inert: !0,
            children: (0, i.jsx)(C.A, { channel: n, message: t, hideGuildTag: !0, hideSystemTag: !0, className: B.Xh }),
        });
    return (
        (0, l.useEffect)(() => {
            null != p && j.A.requestMember(p.id, t.author.id);
        }, [p, t.author.id]),
        (0, i.jsx)(u.vN3, {
            ...s,
            children: (0, i.jsxs)("div", {
                onMouseLeave: T.onMouseLeave,
                onMouseEnter: T.onMouseEnter,
                className: B.zC,
                children: [
                    o && !r && (0, i.jsx)("div", { className: B.Zm }),
                    (0, i.jsx)(u.BJc, {
                        align: "start",
                        style: { width: "fit-content", marginTop: "4px" },
                        children: b
                            ? (0, i.jsx)(G.e, {
                                  "aria-label": "User Avatar",
                                  src: N,
                                  size: u._3J.SIZE_32,
                                  cornerIconUrl: null != p ? (0, y.Iv)(p, 24) : void 0,
                                  cornerIconOffsetX: 4,
                                  cornerIconOffsetY: 3,
                              })
                            : (0, i.jsx)(G.h, {
                                  "aria-label": "Guild Icon",
                                  src: (0, y.Iv)(p, 32),
                                  size: u._3J.SIZE_32,
                                  cornerIconUrl: t.author.getAvatarURL(p.id, 24),
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
                                    b
                                        ? (0, i.jsxs)("div", {
                                              className: B.ZR,
                                              children: [
                                                  (0, i.jsx)("div", {
                                                      className: B.Xh,
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
                                                  className: B.Xh,
                                                  children: p.name,
                                              }),
                                          }),
                                    (0, i.jsxs)(u.BJc, {
                                        direction: "horizontal",
                                        gap: 4,
                                        align: "center",
                                        style: { width: "fit-content" },
                                        children: [
                                            (0, i.jsx)(U.A, { message: t, channel: n, isUnread: o }),
                                            t.mentioned && o
                                                ? (0, i.jsx)(u.hVq, { className: B.WK, count: 1 })
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
                                className: a()(B.HA, { [B.gy]: o, [B.wH]: r }),
                                children: [
                                    null !== A && (0, i.jsx)(A, { size: "xxs", className: B.p4 }),
                                    (0, i.jsxs)(u.Text, {
                                        variant: "text-sm/medium",
                                        lineClamp: 1,
                                        className: a()(B.HA, { [B.gy]: o, [B.wH]: r }),
                                        children: [g, !b && ` \xb7 ${x}`],
                                    }),
                                ],
                            }),
                            (0, i.jsx)(W, { message: t, isUnread: o, isSelected: r, channel: n }),
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
                className: B.gD,
                children: w.intl.formatToPlainString(k.default.NzUuLD, { count: t.length }),
            }),
        ],
    });
}
function F(e) {
    let { message: t } = e,
        n = (0, T.jb)(t.timestamp.getTime());
    return (0, i.jsx)(E.A, {
        timestamp: t.timestamp,
        className: B.vE,
        isEdited: t.isEdited(),
        isInline: !0,
        children: n,
    });
}
function W(e) {
    let { message: t, channel: n, isUnread: s, isSelected: r } = e,
        { previewContent: o, Icon: d } = (function (e) {
            let { message: t, isUnread: n, isSelected: s } = e,
                { content: r } = (0, N.A)(t, {
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
                    c = (0, g.A)(t),
                    h = t.stickerItems.length > 0,
                    A = t.isPoll(),
                    _ = t.type === P.lAJ.POLL_RESULT,
                    m = t.hasFlag(P.pr7.IS_VOICE_MESSAGE),
                    f = t.type === P.lAJ.USER_JOIN,
                    E = null;
                1 === d
                    ? (E = u.xfq)
                    : d > 1
                      ? (E = u.sYc)
                      : c
                        ? (E = p.A)
                        : A || _
                          ? (E = u.YRe)
                          : h
                            ? (E = u.tEP)
                            : m && (E = u.HKD);
                let I = !0,
                    C = null;
                return (
                    l
                        ? c
                            ? (C = w.intl.string(w.t["9ddYKt"]))
                            : A
                              ? ((I = !1), (C = t.poll?.question.text))
                              : (C = _
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
                                              : f
                                                ? w.intl.string(w.t.Yvvfw9)
                                                : w.intl.string(w.t.sDqZHL))
                        : ((I = !1),
                          (C = (0, i.jsx)(x.Ay, {
                              content: r,
                              message: t,
                              compact: !1,
                              className: a()(B.iU, { [B.gy]: n, [B.wH]: s }),
                          }))),
                    l &&
                        (C = (0, i.jsx)("div", {
                            className: a()(B.iU, { [B.gy]: n, [B.wH]: s, [B.QP]: I }),
                            children: C,
                        })),
                    { previewContent: C, Icon: E }
                );
            }, [t, r, n, s]);
        })({ message: t, channel: n, isUnread: s, isSelected: r });
    return (0, i.jsxs)(u.BJc, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        inert: !0,
        children: [
            null != d && (0, i.jsx)(d, { size: "xxs", className: B.p4 }),
            (0, i.jsx)(u.Text, { variant: "text-sm/normal", lineClamp: 1, className: B.iU, children: o }),
        ],
    });
}
let K = (0, l.memo)(
    function (e) {
        let { message: t, groupedMessages: s, isUnread: r } = e,
            c = t.message,
            A = (0, M.op)(),
            { params: m } = (0, o.W5)(),
            g = (0, d.bG)([v.A], () => {
                if (null == c) return null;
                let e = v.A.getChannel(t.channelId);
                return null != e
                    ? e
                    : new b.jb({
                          id: t.channelId,
                          guild_id: t.guildId,
                          type: P.rbe.UNKNOWN,
                          name: w.intl.string(w.t.J90oLW),
                      });
            }),
            p = (0, D.s)((e) => e.isMenuOpenForMessage(c?.id ?? null)),
            { notificationCenterVariant: f } = (0, O.X8)({ location: "NotificationsInboxMessageUnit" }),
            x = (0, _.Ay)(g),
            E = l.useMemo(() => `${c?.author.username}: ${x}`, [c?.author.username, x]),
            I = s?.map((e) => e.message).filter((e) => null != e) ?? [];
        return null == c || null == g
            ? null
            : (0, i.jsx)(u.sqX, {
                  "aria-label": E,
                  className: a()(B.FJ, { [B.wH]: c.id === m.messageId, [B.Yj]: p }),
                  onClick: () => {
                      L.A.inboxItemClick({
                          message: c,
                          channel: g,
                          isUnread: r,
                          isSidebar: f === O.U5.SIDEBAR,
                          viewId: A,
                      });
                  },
                  onContextMenu: (e) => {
                      e.preventDefault(),
                          (0, M.Ml)({ interactionType: M.X8.CONTEXT_MENU, message: c, viewId: A }),
                          (0, h.L3)(
                              e,
                              async () => {
                                  let { default: e } = await n.e("48118").then(n.bind(n, 594005));
                                  return (t) => (0, i.jsx)(e, { ...t, channel: g });
                              },
                              { disableClickTrap: !0 },
                          );
                  },
                  children: (0, i.jsx)(V, {
                      message: c,
                      channel: g,
                      isSelected: c.id === m.messageId,
                      groupedMessages: I,
                      isUnread: r,
                  }),
              });
    },
    (e, t) =>
        e.isUnread === t.isUnread &&
        e.message.id === t.message.id &&
        e.groupedMessages?.length === t.groupedMessages?.length,
);
