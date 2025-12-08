n.d(t, { Z: () => c });
var i = n(224706),
    r = n(13245),
    l = n(864060),
    o = n(624864),
    a = n(620954),
    s = n(987650),
    u = n(388032);
function c(e, t, n, c, d) {
    if (o.Z.isNotificationDisabled(s.n0.ActivityInvite) || null == t.activity || null == c.id) return null;
    let h = t.activity.type,
        p = d.session_id;
    if (null == p) return null;
    let { icon: f, title: m, body: g } = (0, l.Xi)(e, t, n),
        { trackView: O, trackClick: y } = (0, a.Rg)(s.n0.ActivityInvite, {
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
            O();
        },
        confirmText: u.intl.string(u.t.VJlc0S),
        onConfirmClick: (l, o) => {
            var a;
            i.Z.join({
                userId: n.id,
                sessionId: p,
                applicationId: null != (a = c.altId) ? a : c.id,
                channelId: e.id,
                messageId: t.id,
            }),
                r.Z.updateNotificationStatus(o),
                y("join");
        },
        onDismissClick: () => {
            y("dismiss");
        },
    };
}
