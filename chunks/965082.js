"use strict";
n.d(t, { A: () => L });
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
    h = n(1193),
    m = n(41984),
    E = n(589051),
    g = n(592598),
    A = n(395011),
    I = n(222506),
    T = n(145567),
    S = n(378702),
    y = n(119191),
    v = n(581730),
    N = n(672396),
    C = n(652215),
    R = n(822889),
    O = n(985018);
let b = 2,
    D = (e) => {
        e && (0, c.Ak)(d.cH, d.pD);
    };
function L(e, t, n, c) {
    let { hasChat: d } = (0, E.NI)("textChatNotification");
    if (g.A.isNotificationDisabled(N.KS.TextChat)) return D(!0), null;
    let L = !I.A.isInputLocked(A.A.getTargetPID());
    if (h.A.getSelectedChannelId() === e.id && L && d) return D(c), null;
    let { icon: w, title: M, body: x } = (0, l.TB)(e, t, n),
        { trackView: P, trackClick: k } = (0, v.Y9)(N.KS.TextChat, {
            notif_type: N.KS.TextChat,
            notif_user_id: t.author?.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
        });
    return {
        icon: w,
        title: M,
        body:
            t.content.length > 0
                ? (0, o.Ay)(t, { noStyleAndInteraction: !0, formatInline: !0, hideSimpleEmbedContent: !1 }).content
                : x,
        unreadAccessory: (e) => (d ? (0, r.jsx)(a.A, { unread: !0, hovered: e }) : null),
        hint: (e, t) =>
            e || !t ? null : (0, y.sI)((0, v.Jn)(), d ? R.default.VMcw8s : O.t.ykjOAJ, O.intl.string(O.t.jZkzVJ)),
        maxBodyLines: b,
        renderFooter: (n, i, s) =>
            d
                ? null
                : n && !s
                  ? (0, r.jsx)(S.A, { id: i, replyToMessageId: t.id, channel: e, onSend: () => k("send") })
                  : null,
        onNotificationShow: () => {
            D(c), P();
        },
        onNotificationClick: (n, r) => {
            let a = A.A.getTargetPID();
            if (
                ((0, s.ack)(
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
                d)
            ) {
                (0, T.D$)({
                    target: { kind: T.bB.CHANNEL, channelId: e.id, guildId: e.guild_id ?? null, messageId: t.id },
                    source: m.B9.NOTIFICATION_CLICK,
                    widgetType: C.uss.NOTIFICATIONS,
                }),
                    I.A.isInputLocked(a) ? (k("unlock"), i.A.setInputLocked(!1, a)) : k("jump"),
                    requestAnimationFrame(() => {
                        _._.dispatchToLastSubscribed(C.jej.TEXTAREA_FOCUS, { channelId: e.id });
                    }),
                    i.A.updateNotificationStatus(r, C.yFH.DISMISSED);
                return;
            }
            I.A.isInputLocked(a)
                ? (k("unlock"), i.A.setInputLocked(!1, a))
                : (k("jump"), (0, u.pX)(C.BVt.CHANNEL(e.guild_id, e.id, t.id)), f.isPlatformEmbedded && p.Ay.focus());
        },
        onDismissClick: () => {
            k("dismiss");
        },
    };
}
