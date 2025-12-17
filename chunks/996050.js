n.d(t, { Z: () => u });
var i = n(224706),
    r = n(13245),
    a = n(864060),
    l = n(624864),
    o = n(620954),
    s = n(987650),
    c = n(388032);
function u(e, t, n, u, d) {
    if (l.Z.isNotificationDisabled(s.n0.ActivityInvite) || null == t.activity || null == u.id) return null;
    let f = t.activity.type,
        h = d.session_id;
    if (null == h) return null;
    let { icon: p, title: m, body: g } = (0, a.Xi)(e, t, n),
        { trackView: b, trackClick: y } = (0, o.Rg)(s.n0.ActivityInvite, {
            notif_type: s.n0.ActivityInvite,
            notif_user_id: n.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
            activity_type: f,
            activity_name: d.name,
        });
    return {
        icon: p,
        title: m,
        body: g,
        onNotificationShow: () => {
            b();
        },
        confirmText: c.intl.string(c.t.VJlc0S),
        onConfirmClick: (a, l) => {
            var o;
            i.Z.join({
                userId: n.id,
                sessionId: h,
                applicationId: null != (o = u.altId) ? o : u.id,
                channelId: e.id,
                messageId: t.id,
            }),
                r.Z.updateNotificationStatus(l),
                y("join");
        },
        onDismissClick: () => {
            y("dismiss");
        },
    };
}
