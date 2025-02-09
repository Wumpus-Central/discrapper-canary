n.d(t, { Z: () => c });
var i = n(224706),
    s = n(13245),
    l = n(593481),
    a = n(150097),
    r = n(312839),
    o = n(987650),
    d = n(388032);
function c(e, t, n, c, u) {
    if (null == t.activity) return null;
    let h = t.activity.type,
        p = u.session_id;
    if (null == p) return null;
    let { icon: g, title: m, body: f } = (0, a.Xi)(e, t, n),
        { trackView: _, trackClick: v } = (0, r.R)(o.n0.ActivityInvite, {
            notif_type: o.n0.ActivityInvite,
            notif_user_id: n.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
            activity_type: h,
            activity_name: u.name
        });
    return {
        icon: g,
        title: m,
        body: f,
        hint: (e) => (0, l.QR)(e, (0, r.P)(), d.t.aB5xLy),
        onNotificationShow: () => {
            _();
        },
        confirmText: d.intl.string(d.t.VJlc0d),
        onConfirmClick: (l, a) => {
            i.Z.join({
                userId: n.id,
                sessionId: p,
                applicationId: c.id,
                channelId: e.id,
                messageId: t.id
            }),
                s.Z.updateNotificationStatus(a),
                v('join');
        },
        onDismissClick: () => {
            v('dismiss');
        }
    };
}
