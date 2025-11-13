n.d(t, { Z: () => u });
var i = n(224706),
    r = n(13245),
    l = n(864060),
    o = n(624864),
    a = n(620954),
    s = n(987650),
    c = n(388032);
function u(e, t, n, u, d) {
    if (o.Z.isNotificationDisabled(s.n0.ActivityInvite) || null == t.activity || null == u.id) return null;
    let h = t.activity.type,
        p = d.session_id;
    if (null == p) return null;
    let { icon: f, title: m, body: g } = (0, l.Xi)(e, t, n),
        { trackView: y, trackClick: O } = (0, a.Rg)(s.n0.ActivityInvite, {
            notif_type: s.n0.ActivityInvite,
            notif_user_id: n.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
            activity_type: h,
            activity_name: d.name,
        });
    return {
        icon: f,
        title: m,
        body: g,
        onNotificationShow: () => {
            y();
        },
        confirmText: c.intl.string(c.t.VJlc0S),
        onConfirmClick: (l, o) => {
            var a;
            i.Z.join({
                userId: n.id,
                sessionId: p,
                applicationId: null != (a = u.altId) ? a : u.id,
                channelId: e.id,
                messageId: t.id,
            }),
                r.Z.updateNotificationStatus(o),
                O("join");
        },
        onDismissClick: () => {
            O("dismiss");
        },
    };
}
