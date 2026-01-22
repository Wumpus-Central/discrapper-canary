n.d(t, { A: () => Y });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(735438),
    o = n(960488),
    c = n(311907),
    u = n(3026),
    d = n(397927),
    f = n(442433),
    p = n(104171),
    h = n(47167),
    b = n(713654),
    g = n(427930),
    m = n(427209),
    A = n(763754),
    y = n(291812),
    O = n(449859),
    j = n(812299),
    v = n(943220),
    x = n(538355),
    E = n(995273),
    _ = n(854627),
    C = n(95701),
    S = n(260509),
    I = n(734057),
    N = n(256587),
    T = n(71393),
    P = n(851109),
    w = n(706341),
    R = n(932883),
    D = n(654795),
    M = n(559873),
    L = n(346061),
    G = n(652215),
    k = n(228160),
    U = n(985018),
    V = n(471135);
function F(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function H(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function B(e) {
    let { message: t, channel: n, focusProps: i, isSelected: s, isUnread: o, groupedMessages: f } = e,
        p = n.type === G.rbe.UNKNOWN ? d.N$i : (0, b.gU)(n, null),
        g = (0, h.Ay)(n, !1),
        m = (0, c.bG)([T.A], () => T.A.getGuild(n.getGuildId())),
        { nick: y, colorString: O } = (0, A.Ay)(t),
        { avatarSrc: x, eventHandlers: E } = (0, _.A)({
            userId: t.author.id,
            size: d._3J.SIZE_32,
            guildId: null == m ? void 0 : m.id,
            animateOnHover: !0,
        }),
        C = n.type !== G.rbe.GUILD_ANNOUNCEMENT || null == m,
        I = (0, j.y)({
            channel: n,
            message: t,
            user: t.author,
            compact: !0,
            isRepliedMessage: !0,
        }),
        P = (0, r.jsx)("div", {
            className: V.Ys,
            inert: !0,
            children: (0, r.jsx)(v.A, {
                channel: n,
                message: t,
                hideGuildTag: !0,
                hideSystemTag: !0,
                className: V.Xh,
            }),
        });
    return (
        (0, l.useEffect)(() => {
            null != m && N.A.requestMember(m.id, t.author.id);
        }, [m, t.author.id]),
        (0, r.jsx)(
            d.vN3,
            H(F({}, i), {
                children: (0, r.jsxs)("div", {
                    onMouseLeave: E.onMouseLeave,
                    onMouseEnter: E.onMouseEnter,
                    className: V.zC,
                    children: [
                        o && !s && (0, r.jsx)("div", { className: V.Zm }),
                        (0, r.jsx)(d.BJc, {
                            align: "start",
                            style: {
                                width: "fit-content",
                                marginTop: "4px",
                            },
                            children: C
                                ? (0, r.jsx)(L.e, {
                                      "aria-label": "User Avatar",
                                      src: x,
                                      size: d._3J.SIZE_32,
                                      cornerIconUrl: null != m ? (0, S.Iv)(m, 24) : void 0,
                                      cornerIconOffsetX: 4,
                                      cornerIconOffsetY: 3,
                                  })
                                : (0, r.jsx)(L.h, {
                                      "aria-label": "Guild Icon",
                                      src: (0, S.Iv)(m, 32),
                                      size: d._3J.SIZE_32,
                                      cornerIconUrl: t.author.getAvatarURL(m.id, 24),
                                      cornerIconOffsetX: 4,
                                      cornerIconOffsetY: 3,
                                  }),
                        }),
                        (0, r.jsxs)(d.BJc, {
                            gap: 0,
                            style: { minWidth: 0 },
                            children: [
                                (0, r.jsxs)(d.BJc, {
                                    direction: "horizontal",
                                    gap: 4,
                                    style: {
                                        whiteSpace: "nowrap",
                                        minWidth: 0,
                                        justifyContent: "space-between",
                                    },
                                    children: [
                                        C
                                            ? (0, r.jsxs)("div", {
                                                  className: V.ZR,
                                                  children: [
                                                      (0, r.jsx)("div", {
                                                          className: V.Xh,
                                                          style: { color: null != O ? O : void 0 },
                                                          children: (0, r.jsx)(u.A, { children: P }),
                                                      }),
                                                      I,
                                                  ],
                                              })
                                            : (0, r.jsx)(u.A, {
                                                  children: (0, r.jsx)(d.Heading, {
                                                      variant: "text-md/semibold",
                                                      style: { color: null != O ? O : void 0 },
                                                      className: V.Xh,
                                                      children: m.name,
                                                  }),
                                              }),
                                        (0, r.jsxs)(d.BJc, {
                                            direction: "horizontal",
                                            gap: 4,
                                            align: "center",
                                            style: { width: "fit-content" },
                                            children: [
                                                (0, r.jsx)(M.A, {
                                                    message: t,
                                                    channel: n,
                                                    isUnread: o,
                                                }),
                                                t.mentioned && o
                                                    ? (0, r.jsx)(d.hVq, {
                                                          className: V.WK,
                                                          count: 1,
                                                      })
                                                    : (0, r.jsx)(W, { message: t }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)(d.BJc, {
                                    direction: "horizontal",
                                    align: "center",
                                    gap: 4,
                                    inert: !0,
                                    className: a()(V.HA, {
                                        [V.gy]: o,
                                        [V.wH]: s,
                                    }),
                                    children: [
                                        null !== p &&
                                            (0, r.jsx)(p, {
                                                size: "xxs",
                                                className: V.p4,
                                            }),
                                        (0, r.jsxs)(d.Text, {
                                            variant: "text-sm/medium",
                                            lineClamp: 1,
                                            className: a()(V.HA, {
                                                [V.gy]: o,
                                                [V.wH]: s,
                                            }),
                                            children: [g, !C && " \xB7 ".concat(y)],
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(z, {
                                    message: t,
                                    isUnread: o,
                                    isSelected: s,
                                    channel: n,
                                }),
                                f.length > 0 &&
                                    (0, r.jsx)(d.BJc, {
                                        gap: 4,
                                        style: {
                                            minWidth: 0,
                                            marginTop: 4,
                                            marginBottom: 4,
                                        },
                                        children: (0, r.jsx)(K, { overflowMessages: f }),
                                    }),
                            ],
                        }),
                    ],
                }),
            }),
        )
    );
}
function K(e) {
    let { overflowMessages: t } = e,
        n = (0, s.uniqBy)(
            t.map((e) => e.author),
            (e) => e.id,
        ).slice(0, 3);
    return (0, r.jsxs)(d.BJc, {
        direction: "horizontal",
        gap: 4,
        inert: !0,
        children: [
            (0, r.jsx)(p.Ay, {
                users: n,
                useFallbackUserForPopout: !0,
                size: p.DN.SIZE_16,
            }),
            (0, r.jsx)(d.Text, {
                variant: "text-sm/medium",
                className: V.gD,
                children: U.intl.formatToPlainString(k.default.NzUuLD, { count: t.length }),
            }),
        ],
    });
}
function W(e) {
    let { message: t } = e,
        n = (0, E.jb)(t.timestamp.getTime());
    return (0, r.jsx)(O.A, {
        timestamp: t.timestamp,
        className: V.vE,
        isEdited: t.isEdited(),
        isInline: !0,
        children: n,
    });
}
function z(e) {
    let { message: t, channel: n, isUnread: i, isSelected: s } = e,
        { previewContent: o, Icon: c } = (function (e) {
            let { message: t, isUnread: n, isSelected: i } = e,
                { content: s } = (0, x.A)(t, {
                    hideSimpleEmbedContent: !0,
                    allowList: !1,
                    allowHeading: !0,
                    allowLinks: !0,
                    previewLinkTarget: !1,
                    formatInline: !0,
                    noStyleAndInteraction: !0,
                });
            return (0, l.useMemo)(() => {
                var e;
                let l,
                    o = "" === t.content,
                    c = t.embeds.some((e) => e.type === G.Auw.GIFV),
                    u = ((l = t.embeds.some((e) => e.type === G.Auw.GIFV)), t.attachments.length + +!!l),
                    f = (0, g.A)(t),
                    p = t.stickerItems.length > 0,
                    h = t.isPoll(),
                    b = t.type === G.lAJ.POLL_RESULT,
                    A = t.hasFlag(G.pr7.IS_VOICE_MESSAGE),
                    O = t.type === G.lAJ.USER_JOIN,
                    j = null;
                1 === u
                    ? (j = d.xfq)
                    : u > 1
                      ? (j = d.sYc)
                      : f
                        ? (j = m.A)
                        : h || b
                          ? (j = d.YRe)
                          : p
                            ? (j = d.tEP)
                            : A && (j = d.HKD);
                let v = !0,
                    x = null;
                return (
                    o
                        ? f
                            ? (x = U.intl.string(U.t["9ddYKt"]))
                            : h
                              ? ((v = !1), (x = null == (e = t.poll) ? void 0 : e.question.text))
                              : (x = b
                                    ? U.intl.string(U.t.sad2PH)
                                    : c
                                      ? U.intl.string(U.t.p0oZmy)
                                      : u > 1
                                        ? U.intl.formatToPlainString(U.t.rtfTKp, { count: u })
                                        : 1 === u
                                          ? U.intl.string(U.t.tCcq5p)
                                          : p
                                            ? U.intl.format(U.t.zY4v1B, { stickerName: t.stickerItems[0].name })
                                            : A
                                              ? U.intl.string(U.t.slFYgi)
                                              : O
                                                ? U.intl.string(U.t.Yvvfw9)
                                                : U.intl.string(U.t.sDqZHL))
                        : ((v = !1),
                          (x = (0, r.jsx)(y.Ay, {
                              content: s,
                              message: t,
                              compact: !1,
                              className: a()(V.iU, {
                                  [V.gy]: n,
                                  [V.wH]: i,
                              }),
                          }))),
                    o &&
                        (x = (0, r.jsx)("div", {
                            className: a()(V.iU, {
                                [V.gy]: n,
                                [V.wH]: i,
                                [V.QP]: v,
                            }),
                            children: x,
                        })),
                    {
                        previewContent: x,
                        Icon: j,
                    }
                );
            }, [t, s, n, i]);
        })({
            message: t,
            channel: n,
            isUnread: i,
            isSelected: s,
        });
    return (0, r.jsxs)(d.BJc, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        inert: !0,
        children: [
            null != c &&
                (0, r.jsx)(c, {
                    size: "xxs",
                    className: V.p4,
                }),
            (0, r.jsx)(d.Text, {
                variant: "text-sm/normal",
                lineClamp: 1,
                className: V.iU,
                children: o,
            }),
        ],
    });
}
let Y = (0, l.memo)(
    function (e) {
        var t;
        let { message: i, groupedMessages: s, isUnread: u } = e,
            p = i.message,
            h = (0, R.op)(),
            { params: b } = (0, o.W5)(),
            g = (0, c.bG)([I.A], () => {
                if (null == p) return null;
                let e = I.A.getChannel(i.channelId);
                return null != e
                    ? e
                    : new C.jb({
                          id: i.channelId,
                          guild_id: i.guildId,
                          type: G.rbe.UNKNOWN,
                          name: U.intl.string(U.t.J90oLW),
                      });
            }),
            m = (0, D.s)((e) => {
                var t;
                return e.isMenuOpenForMessage(null != (t = null == p ? void 0 : p.id) ? t : null);
            }),
            { notificationCenterVariant: A } = (0, P.X8)({ location: "NotificationsInboxMessageUnit" }),
            y = l.useMemo(
                () => "".concat(null == p ? void 0 : p.author.username, ": ").concat(null == g ? void 0 : g.name),
                [null == p ? void 0 : p.author.username, null == g ? void 0 : g.name],
            ),
            O = null != (t = null == s ? void 0 : s.map((e) => e.message).filter((e) => null != e)) ? t : [];
        return null == p || null == g
            ? null
            : (0, r.jsx)(d.sqX, {
                  "aria-label": y,
                  className: a()(V.FJ, {
                      [V.wH]: p.id === b.messageId,
                      [V.Yj]: m,
                  }),
                  onClick: () => {
                      w.A.inboxItemClick({
                          message: p,
                          channel: g,
                          isUnread: u,
                          isSidebar: A === P.U5.SIDEBAR,
                          viewId: h,
                      });
                  },
                  onContextMenu: (e) => {
                      e.preventDefault(),
                          (0, R.Ml)({
                              interactionType: R.X8.CONTEXT_MENU,
                              message: p,
                              viewId: h,
                          }),
                          (0, f.L3)(
                              e,
                              async () => {
                                  let { default: e } = await n.e("48118").then(n.bind(n, 594005));
                                  return (t) => (0, r.jsx)(e, H(F({}, t), { channel: g }));
                              },
                              { disableClickTrap: !0 },
                          );
                  },
                  children: (0, r.jsx)(B, {
                      message: p,
                      channel: g,
                      isSelected: p.id === b.messageId,
                      groupedMessages: O,
                      isUnread: u,
                  }),
              });
    },
    (e, t) => {
        var n, r;
        return (
            e.isUnread === t.isUnread &&
            e.message.id === t.message.id &&
            (null == (n = e.groupedMessages) ? void 0 : n.length) ===
                (null == (r = t.groupedMessages) ? void 0 : r.length)
        );
    },
);
