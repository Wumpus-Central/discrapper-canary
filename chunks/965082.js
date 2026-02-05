n.d(t, { A: () => y });
var i = n(627968);
n(64700);
var l = n(684013),
    a = n(334738),
    s = n(465364),
    r = n(742984),
    o = n(976860),
    d = n(400492),
    u = n(845618),
    c = n(203982),
    h = n(723702),
    A = n(837921),
    m = n(41984),
    g = n(589051),
    p = n(592598),
    f = n(395011),
    _ = n(222506),
    E = n(145567),
    x = n(378702),
    S = n(119191),
    I = n(581730),
    T = n(672396),
    C = n(652215),
    v = n(985018);
function y(e, t, n, y) {
    if (p.A.isNotificationDisabled(T.KS.TextChat)) return (0, d.Ak)(u.cH, u.pD), null;
    let { icon: N, title: O, body: b } = (0, r.TB)(e, t, n),
        { trackView: j, trackClick: w } = (0, I.Y9)(T.KS.TextChat, {
            notif_type: T.KS.TextChat,
            notif_user_id: t.author?.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
        }),
        { hasChat: L } = (0, g.NI)("textChatNotification");
    return {
        icon: N,
        title: O,
        body:
            t.content.length > 0
                ? (0, s.Ay)(t, { noStyleAndInteraction: !0, formatInline: !0, hideSimpleEmbedContent: !1 }).content
                : b,
        hint: (e, t) => (e || !t ? null : (0, S.sI)((0, I.Jn)(), v.t.ykjOAJ, v.intl.string(v.t.jZkzVJ))),
        maxBodyLines: 2,
        renderFooter: (n, l, a) =>
            L
                ? null
                : n && !a
                  ? (0, i.jsx)(x.A, { id: l, replyToMessageId: t.id, channel: e, onSend: () => w("send") })
                  : null,
        onNotificationShow: () => {
            y && (0, d.Ak)(u.cH, u.pD), j();
        },
        onNotificationClick: (n, i) => {
            let s = f.A.getTargetPID();
            if (
                ((0, a.ack)(
                    e.id,
                    {
                        section: C.JJy.OVERLAY,
                        object: C.ZSU.ACK_TEXT_CHAT_NOTIFICATION,
                        objectType: C.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                    },
                    !0,
                    !0,
                    t.id,
                ),
                L)
            ) {
                (0, E.D$)({
                    target: { kind: E.bB.CHANNEL, channelId: e.id, guildId: e.guild_id ?? null, messageId: t.id },
                    source: m.B9.NOTIFICATION_CLICK,
                    widgetType: C.uss.NOTIFICATIONS,
                }),
                    _.A.isInputLocked(s) ? (w("unlock"), l.A.setInputLocked(!1, s)) : w("jump"),
                    requestAnimationFrame(() => {
                        c._.dispatchToLastSubscribed(C.jej.TEXTAREA_FOCUS, { channelId: e.id });
                    }),
                    l.A.updateNotificationStatus(i, C.yFH.DISMISSED);
                return;
            }
            _.A.isInputLocked(s)
                ? (w("unlock"), l.A.setInputLocked(!1, s))
                : (w("jump"), (0, o.pX)(C.BVt.CHANNEL(e.guild_id, e.id, t.id)), h.isPlatformEmbedded && A.Ay.focus());
        },
        onDismissClick: () => {
            w("dismiss");
        },
    };
}
