i.d(e, { Z: () => d });
var n = i(224706),
    l = i(13245),
    s = i(150097),
    o = i(620954),
    r = i(987650),
    a = i(388032);
function d(t, e, i, d, u) {
    if (null == e.activity || null == d.id) return null;
    let c = e.activity.type,
        h = u.session_id;
    if (null == h) return null;
    let { icon: E, title: p, body: S } = (0, s.Xi)(t, e, i),
        { trackView: f, trackClick: g } = (0, o.R)(r.n0.ActivityInvite, {
            notif_type: r.n0.ActivityInvite,
            notif_user_id: i.id,
            message_id: e.id,
            message_type: e.type,
            guild_id: t.guild_id,
            channel_id: t.id,
            channel_type: t.type,
            activity_type: c,
            activity_name: u.name
        });
    return {
        icon: E,
        title: p,
        body: S,
        onNotificationShow: () => {
            f();
        },
        confirmText: a.intl.string(a.t.VJlc0d),
        onConfirmClick: (s, o) => {
            var r;
            n.Z.join({
                userId: i.id,
                sessionId: h,
                applicationId: null !== (r = d.altId) && void 0 !== r ? r : d.id,
                channelId: t.id,
                messageId: e.id
            }),
                l.Z.updateNotificationStatus(o),
                g('join');
        },
        onDismissClick: () => {
            g('dismiss');
        }
    };
}
