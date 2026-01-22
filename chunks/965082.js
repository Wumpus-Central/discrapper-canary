n.d(t, {
    A: () => b,
});
var i = n(627968);
n(64700);
var r = n(684013),
    l = n(334738),
    a = n(465364),
    o = n(742984),
    s = n(976860),
    c = n(400492),
    u = n(845618),
    d = n(723702),
    p = n(837921),
    h = n(592598),
    f = n(395011),
    m = n(222506),
    g = n(378702),
    y = n(119191),
    A = n(581730),
    O = n(672396),
    E = n(652215),
    v = n(985018);

function b(e, t, n, b) {
    var S;
    if (h.A.isNotificationDisabled(O.KS.TextChat)) return (0, c.Ak)(u.cH, u.pD), null;
    let { icon: x, title: j, body: I } = (0, o.TB)(e, t, n),
        { trackView: N, trackClick: w } = (0, A.Y9)(O.KS.TextChat, {
            notif_type: O.KS.TextChat,
            notif_user_id: null == (S = t.author) ? void 0 : S.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
        });
    return {
        icon: x,
        title: j,
        body:
            t.content.length > 0
                ? (0, a.Ay)(t, {
                      noStyleAndInteraction: !0,
                      formatInline: !0,
                      hideSimpleEmbedContent: !1,
                  }).content
                : I,
        hint: (e, t) => (e && !t ? null : (0, y.sI)((0, A.Jn)(), v.t.ykjOAJ, v.intl.string(v.t.jZkzVJ))),
        maxBodyLines: 2,
        renderFooter: (n, r, l) =>
            n && !l
                ? (0, i.jsx)(g.A, {
                      id: r,
                      replyToMessageId: t.id,
                      channel: e,
                      onSend: () => w("send"),
                  })
                : null,
        onNotificationShow: () => {
            b && (0, c.Ak)(u.cH, u.pD), N();
        },
        onNotificationClick: () => {
            let n = f.A.getTargetPID();
            (0, l.ack)(
                e.id,
                {
                    section: E.JJy.OVERLAY,
                    object: E.ZSU.ACK_TEXT_CHAT_NOTIFICATION,
                    objectType: E.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                },
                !0,
                !0,
                t.id,
            ),
                m.A.isInputLocked(n)
                    ? (w("unlock"), r.A.setInputLocked(!1, n))
                    : (w("jump"),
                      (0, s.pX)(E.BVt.CHANNEL(e.guild_id, e.id, t.id)),
                      d.isPlatformEmbedded && p.Ay.focus());
        },
        onDismissClick: () => {
            w("dismiss");
        },
    };
}
