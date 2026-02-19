"use strict";
n.d(t, { A: () => R });
var r = n(627968);
n(64700);
var i = n(684013),
    s = n(334738),
    a = n(465364),
    o = n(742984),
    l = n(976860),
    u = n(400492),
    c = n(845618),
    d = n(203982),
    _ = n(723702),
    f = n(837921),
    p = n(41984),
    h = n(589051),
    m = n(592598),
    E = n(395011),
    g = n(222506),
    A = n(145567),
    I = n(378702),
    T = n(119191),
    S = n(581730),
    y = n(672396),
    v = n(652215),
    N = n(895867),
    C = n(985018);
let b = 2;
function R(e, t, n, R) {
    if (m.A.isNotificationDisabled(y.KS.TextChat)) return (0, u.Ak)(c.cH, c.pD), null;
    let { icon: O, title: D, body: L } = (0, o.TB)(e, t, n),
        { trackView: w, trackClick: x } = (0, S.Y9)(y.KS.TextChat, {
            notif_type: y.KS.TextChat,
            notif_user_id: t.author?.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
        }),
        { hasChat: M } = (0, h.NI)("textChatNotification");
    return {
        icon: O,
        title: D,
        body:
            t.content.length > 0
                ? (0, a.Ay)(t, { noStyleAndInteraction: !0, formatInline: !0, hideSimpleEmbedContent: !1 }).content
                : L,
        hint: (e, t) =>
            e || !t ? null : (0, T.sI)((0, S.Jn)(), M ? N.default.VMcw8s : C.t.ykjOAJ, C.intl.string(C.t.jZkzVJ)),
        maxBodyLines: b,
        renderFooter: (n, i, s) =>
            M
                ? null
                : n && !s
                  ? (0, r.jsx)(I.A, { id: i, replyToMessageId: t.id, channel: e, onSend: () => x("send") })
                  : null,
        onNotificationShow: () => {
            R && (0, u.Ak)(c.cH, c.pD), w();
        },
        onNotificationClick: (n, r) => {
            let a = E.A.getTargetPID();
            if (
                ((0, s.ack)(
                    e.id,
                    {
                        section: v.JJy.OVERLAY,
                        object: v.ZSU.ACK_TEXT_CHAT_NOTIFICATION,
                        objectType: v.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                    },
                    !0,
                    !0,
                    t.id,
                ),
                M)
            ) {
                (0, A.D$)({
                    target: { kind: A.bB.CHANNEL, channelId: e.id, guildId: e.guild_id ?? null, messageId: t.id },
                    source: p.B9.NOTIFICATION_CLICK,
                    widgetType: v.uss.NOTIFICATIONS,
                }),
                    g.A.isInputLocked(a) ? (x("unlock"), i.A.setInputLocked(!1, a)) : x("jump"),
                    requestAnimationFrame(() => {
                        d._.dispatchToLastSubscribed(v.jej.TEXTAREA_FOCUS, { channelId: e.id });
                    }),
                    i.A.updateNotificationStatus(r, v.yFH.DISMISSED);
                return;
            }
            g.A.isInputLocked(a)
                ? (x("unlock"), i.A.setInputLocked(!1, a))
                : (x("jump"), (0, l.pX)(v.BVt.CHANNEL(e.guild_id, e.id, t.id)), _.isPlatformEmbedded && f.Ay.focus());
        },
        onDismissClick: () => {
            x("dismiss");
        },
    };
}
