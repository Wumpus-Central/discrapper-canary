n.d(t, { Z: () => d });
var i = n(224706),
    r = n(13245),
    a = n(864060),
    s = n(593481),
    o = n(312839),
    l = n(987650),
    c = n(388032);
function d(e, t, n, d, u) {
    if (null == t.activity) return null;
    let f = t.activity.type,
        h = u.session_id;
    if (null == h) return null;
    let { icon: p, title: g, body: b } = (0, a.Xi)(e, t, n),
        { trackView: m, trackClick: y } = (0, o.R)(l.n0.ActivityInvite, {
            notif_type: l.n0.ActivityInvite,
            notif_user_id: n.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
            activity_type: f,
            activity_name: u.name,
        });
    return {
        icon: p,
        title: g,
        body: b,
        hint: (e) => (0, s.QR)(e, (0, o.P)(), c.t.aB5xLy),
        onNotificationShow: () => {
            m();
        },
        confirmText: c.intl.string(c.t.VJlc0S),
        onConfirmClick: (a, s) => {
            i.Z.join({
                userId: n.id,
                sessionId: h,
                applicationId: d.id,
                channelId: e.id,
                messageId: t.id,
            }),
                r.Z.updateNotificationStatus(s),
                y("join");
        },
        onDismissClick: () => {
            y("dismiss");
        },
    };
}
