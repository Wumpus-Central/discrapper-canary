i.d(e, { A: () => L });
var n = i(627968);
i(64700);
var l = i(684013),
    a = i(334738),
    r = i(941971),
    s = i(465364),
    o = i(742984),
    u = i(976860),
    c = i(400492),
    d = i(845618),
    A = i(203982),
    f = i(723702),
    y = i(837921),
    p = i(41984),
    m = i(589051),
    I = i(592598),
    g = i(395011),
    E = i(222506),
    N = i(145567),
    _ = i(378702),
    T = i(119191),
    S = i(581730),
    C = i(672396),
    h = i(652215),
    v = i(499214),
    O = i(985018);
let x = (t) => {
    t && (0, c.Ak)(d.cH, d.pD);
};
function L(t, e, i, c) {
    let { hasChat: d } = (0, m.NI)("textChatNotification");
    if (I.A.isNotificationDisabled(C.KS.TextChat)) return x(!0), null;
    let { icon: L, title: D, body: b } = (0, o.TB)(t, e, i),
        { trackView: R, trackClick: k } = (0, S.Y9)(C.KS.TextChat, {
            notif_type: C.KS.TextChat,
            notif_user_id: e.author?.id,
            message_id: e.id,
            message_type: e.type,
            guild_id: t.guild_id,
            channel_id: t.id,
            channel_type: t.type,
        });
    return {
        icon: L,
        title: D,
        body:
            e.content.length > 0
                ? (0, s.Ay)(e, { noStyleAndInteraction: !0, formatInline: !0, hideSimpleEmbedContent: !1 }).content
                : b,
        unreadAccessory: (t) => (d ? (0, n.jsx)(r.A, { unread: !0, hovered: t }) : null),
        hint: (t, e) => (t || !e ? null : (0, T.sI)((0, S.Jn)(), d ? v.default.VMcw8s : O.t.ykjOAJ)),
        maxBodyLines: 2,
        renderFooter: (i, l, a) =>
            d
                ? null
                : i && !a
                  ? (0, n.jsx)(_.A, { id: l, replyToMessageId: e.id, channel: t, onSend: () => k("send") })
                  : null,
        onNotificationShow: () => {
            x(c), R();
        },
        onNotificationClick: (i, n) => {
            let r = g.A.getTargetPID();
            if (
                ((0, a.ack)(
                    t.id,
                    {
                        section: h.JJy.OVERLAY,
                        object: h.ZSU.ACK_TEXT_CHAT_NOTIFICATION,
                        objectType: h.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                    },
                    !0,
                    !0,
                    e.id,
                ),
                d)
            ) {
                (0, N.D$)({
                    target: { kind: N.bB.CHANNEL, channelId: t.id, guildId: t.guild_id ?? null, messageId: e.id },
                    source: p.B9.NOTIFICATION_CLICK,
                    widgetType: h.uss.TEXT_CHAT_V3,
                }),
                    E.A.isInputLocked(r) ? (k("unlock"), l.A.setInputLocked(!1, r)) : k("jump"),
                    requestAnimationFrame(() => {
                        A._.dispatchToLastSubscribed(h.jej.TEXTAREA_FOCUS, { channelId: t.id });
                    }),
                    l.A.updateNotificationStatus(n, h.yFH.DISMISSED);
                return;
            }
            E.A.isInputLocked(r)
                ? (k("unlock"), l.A.setInputLocked(!1, r))
                : (k("jump"), (0, u.pX)(h.BVt.CHANNEL(t.guild_id, t.id, e.id)), f.isPlatformEmbedded && y.Ay.focus());
        },
        onDismissClick: () => {
            k("dismiss");
        },
    };
}
