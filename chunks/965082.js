n.d(t, {
    A: () => I,
});
var i = n(627968);
n(64700);
var r = n(684013),
    l = n(334738),
    a = n(465364),
    s = n(742984),
    o = n(976860),
    u = n(400492),
    c = n(845618),
    d = n(203982),
    h = n(723702),
    p = n(837921),
    f = n(41984),
    g = n(589051),
    m = n(592598),
    y = n(395011),
    A = n(222506),
    v = n(145567),
    b = n(378702),
    E = n(119191),
    O = n(581730),
    x = n(672396),
    _ = n(652215),
    S = n(985018);

function I(e, t, n, I) {
    var j;
    if (m.A.isNotificationDisabled(x.KS.TextChat)) return (0, u.Ak)(c.cH, c.pD), null;
    let { icon: T, title: C, body: N } = (0, s.TB)(e, t, n),
        { trackView: w, trackClick: P } = (0, O.Y9)(x.KS.TextChat, {
            notif_type: x.KS.TextChat,
            notif_user_id: null == (j = t.author) ? void 0 : j.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
        }),
        { hasChat: D } = (0, g.NI)("textChatNotification");
    return {
        icon: T,
        title: C,
        body:
            t.content.length > 0
                ? (0, a.Ay)(t, {
                      noStyleAndInteraction: !0,
                      formatInline: !0,
                      hideSimpleEmbedContent: !1,
                  }).content
                : N,
        hint: (e, t) => (e || !t ? null : (0, E.sI)((0, O.Jn)(), S.t.ykjOAJ, S.intl.string(S.t.jZkzVJ))),
        maxBodyLines: 2,
        renderFooter: (n, r, l) =>
            D
                ? null
                : n && !l
                  ? (0, i.jsx)(b.A, {
                        id: r,
                        replyToMessageId: t.id,
                        channel: e,
                        onSend: () => P("send"),
                    })
                  : null,
        onNotificationShow: () => {
            I && (0, u.Ak)(c.cH, c.pD), w();
        },
        onNotificationClick: (n, i) => {
            let a = y.A.getTargetPID();
            if (
                ((0, l.ack)(
                    e.id,
                    {
                        section: _.JJy.OVERLAY,
                        object: _.ZSU.ACK_TEXT_CHAT_NOTIFICATION,
                        objectType: _.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                    },
                    !0,
                    !0,
                    t.id,
                ),
                D)
            ) {
                var s;
                (0, v.D$)({
                    target: {
                        kind: v.bB.CHANNEL,
                        channelId: e.id,
                        guildId: null != (s = e.guild_id) ? s : null,
                        messageId: t.id,
                    },
                    source: f.B9.NOTIFICATION_CLICK,
                    widgetType: _.uss.NOTIFICATIONS,
                }),
                    A.A.isInputLocked(a) ? (P("unlock"), r.A.setInputLocked(!1, a)) : P("jump"),
                    requestAnimationFrame(() => {
                        d._.dispatchToLastSubscribed(_.jej.TEXTAREA_FOCUS, {
                            channelId: e.id,
                        });
                    }),
                    r.A.updateNotificationStatus(i, _.yFH.DISMISSED);
                return;
            }
            A.A.isInputLocked(a)
                ? (P("unlock"), r.A.setInputLocked(!1, a))
                : (P("jump"), (0, o.pX)(_.BVt.CHANNEL(e.guild_id, e.id, t.id)), h.isPlatformEmbedded && p.Ay.focus());
        },
        onDismissClick: () => {
            P("dismiss");
        },
    };
}
