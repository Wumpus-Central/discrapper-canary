"use strict";
n.d(t, { A: () => O });
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
    p = n(1193),
    h = n(41984),
    m = n(589051),
    E = n(592598),
    g = n(395011),
    A = n(222506),
    I = n(145567),
    T = n(378702),
    S = n(119191),
    y = n(581730),
    v = n(672396),
    N = n(652215),
    C = n(822889),
    b = n(985018);
let R = 2;
function O(e, t, n, O) {
    let { hasChat: D } = (0, m.NI)("textChatNotification");
    if (E.A.isNotificationDisabled(v.KS.TextChat)) return (0, u.Ak)(c.cH, c.pD), null;
    let L = !A.A.isInputLocked(g.A.getTargetPID());
    if (p.A.getSelectedChannelId() === e.id && L) return null;
    let { icon: w, title: x, body: M } = (0, o.TB)(e, t, n),
        { trackView: P, trackClick: k } = (0, y.Y9)(v.KS.TextChat, {
            notif_type: v.KS.TextChat,
            notif_user_id: t.author?.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
        });
    return {
        icon: w,
        title: x,
        body:
            t.content.length > 0
                ? (0, a.Ay)(t, { noStyleAndInteraction: !0, formatInline: !0, hideSimpleEmbedContent: !1 }).content
                : M,
        hint: (e, t) =>
            e || !t ? null : (0, S.sI)((0, y.Jn)(), D ? C.default.VMcw8s : b.t.ykjOAJ, b.intl.string(b.t.jZkzVJ)),
        maxBodyLines: R,
        renderFooter: (n, i, s) =>
            D
                ? null
                : n && !s
                  ? (0, r.jsx)(T.A, { id: i, replyToMessageId: t.id, channel: e, onSend: () => k("send") })
                  : null,
        onNotificationShow: () => {
            O && (0, u.Ak)(c.cH, c.pD), P();
        },
        onNotificationClick: (n, r) => {
            let a = g.A.getTargetPID();
            if (
                ((0, s.ack)(
                    e.id,
                    {
                        section: N.JJy.OVERLAY,
                        object: N.ZSU.ACK_TEXT_CHAT_NOTIFICATION,
                        objectType: N.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                    },
                    !0,
                    !0,
                    t.id,
                ),
                D)
            ) {
                (0, I.D$)({
                    target: { kind: I.bB.CHANNEL, channelId: e.id, guildId: e.guild_id ?? null, messageId: t.id },
                    source: h.B9.NOTIFICATION_CLICK,
                    widgetType: N.uss.NOTIFICATIONS,
                }),
                    A.A.isInputLocked(a) ? (k("unlock"), i.A.setInputLocked(!1, a)) : k("jump"),
                    requestAnimationFrame(() => {
                        d._.dispatchToLastSubscribed(N.jej.TEXTAREA_FOCUS, { channelId: e.id });
                    }),
                    i.A.updateNotificationStatus(r, N.yFH.DISMISSED);
                return;
            }
            A.A.isInputLocked(a)
                ? (k("unlock"), i.A.setInputLocked(!1, a))
                : (k("jump"), (0, l.pX)(N.BVt.CHANNEL(e.guild_id, e.id, t.id)), _.isPlatformEmbedded && f.Ay.focus());
        },
        onDismissClick: () => {
            k("dismiss");
        },
    };
}
