n.d(t, { Z: () => u });
var i = n(224706),
    r = n(13245),
    s = n(864060),
    o = n(593481),
    l = n(312839),
    a = n(987650),
    c = n(388032);
function u(e, t, n, u, d) {
    if (null == t.activity) return null;
    let h = t.activity.type,
        p = d.session_id;
    if (null == p) return null;
    let { icon: f, title: g, body: m } = (0, s.Xi)(e, t, n),
        { trackView: y, trackClick: O } = (0, l.R)(a.n0.ActivityInvite, {
            notif_type: a.n0.ActivityInvite,
            notif_user_id: n.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
            activity_type: h,
            activity_name: d.name
        });
    return {
        icon: f,
        title: g,
        body: m,
        hint: (e) => (0, o.QR)(e, (0, l.P)(), c.t.aB5xLy),
        onNotificationShow: () => {
            y();
        },
        confirmText: c.NW.string(c.t.VJlc0d),
        onConfirmClick: (s, o) => {
            i.Z.join({
                userId: n.id,
                sessionId: p,
                applicationId: u.id,
                channelId: e.id,
                messageId: t.id,
                activity: d
            }),
                r.Z.updateNotificationStatus(o),
                O('join');
        },
        onDismissClick: () => {
            O('dismiss');
        }
    };
}
