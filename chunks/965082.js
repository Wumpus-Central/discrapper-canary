"use strict";
n.d(t, { A: () => D });
var r = n(627968);
n(64700);
var i = n(684013),
    s = n(334738),
    a = n(941971),
    o = n(465364),
    l = n(742984),
    u = n(976860),
    c = n(400492),
    d = n(845618),
    _ = n(203982),
    f = n(723702),
    p = n(837921),
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
    C = n(895867),
    R = n(985018);
let O = 2,
    b = (e) => {
        e && (0, c.Ak)(d.cH, d.pD);
    };
function D(e, t, n, c) {
    let { hasChat: d } = (0, m.NI)("textChatNotification");
    if (E.A.isNotificationDisabled(v.KS.TextChat)) return b(!0), null;
    let { icon: D, title: L, body: w } = (0, l.TB)(e, t, n),
        { trackView: M, trackClick: x } = (0, y.Y9)(v.KS.TextChat, {
            notif_type: v.KS.TextChat,
            notif_user_id: t.author?.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
        });
    return {
        icon: D,
        title: L,
        body:
            t.content.length > 0
                ? (0, o.Ay)(t, { noStyleAndInteraction: !0, formatInline: !0, hideSimpleEmbedContent: !1 }).content
                : w,
        unreadAccessory: (e) => (d ? (0, r.jsx)(a.A, { unread: !0, hovered: e }) : null),
        hint: (e, t) => (e || !t ? null : (0, S.sI)((0, y.Jn)(), d ? C.default.VMcw8s : R.t.ykjOAJ)),
        maxBodyLines: O,
        renderFooter: (n, i, s) =>
            d
                ? null
                : n && !s
                  ? (0, r.jsx)(T.A, { id: i, replyToMessageId: t.id, channel: e, onSend: () => x("send") })
                  : null,
        onNotificationShow: () => {
            b(c), M();
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
                d)
            ) {
                (0, I.D$)({
                    target: { kind: I.bB.CHANNEL, channelId: e.id, guildId: e.guild_id ?? null, messageId: t.id },
                    source: h.B9.NOTIFICATION_CLICK,
                    widgetType: N.uss.TEXT_CHAT_V3,
                }),
                    A.A.isInputLocked(a) ? (x("unlock"), i.A.setInputLocked(!1, a)) : x("jump"),
                    requestAnimationFrame(() => {
                        _._.dispatchToLastSubscribed(N.jej.TEXTAREA_FOCUS, { channelId: e.id });
                    }),
                    i.A.updateNotificationStatus(r, N.yFH.DISMISSED);
                return;
            }
            A.A.isInputLocked(a)
                ? (x("unlock"), i.A.setInputLocked(!1, a))
                : (x("jump"), (0, u.pX)(N.BVt.CHANNEL(e.guild_id, e.id, t.id)), f.isPlatformEmbedded && p.Ay.focus());
        },
        onDismissClick: () => {
            x("dismiss");
        },
    };
}
