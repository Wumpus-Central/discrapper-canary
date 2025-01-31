n.d(t, { Z: () => c });
var i = n(224706),
    s = n(13245),
    l = n(593481),
    r = n(150097),
    o = n(312839),
    a = n(987650),
    d = n(388032);
function c(e, t, n, c, u) {
    if (null == t.activity) return null;
    let h = t.activity.type,
        p = u.session_id;
    if (null == p) return null;
    let { icon: g, title: f, body: m } = (0, r.Xi)(e, t, n),
        { trackView: x, trackClick: v } = (0, o.R)(a.n0.ActivityInvite, {
            notif_type: a.n0.ActivityInvite,
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
        title: f,
        body: m,
        hint: (e) => (0, l.QR)(e, (0, o.P)(), d.t.aB5xLy),
        onNotificationShow: () => {
            x();
        },
        confirmText: d.intl.string(d.t.VJlc0d),
        onConfirmClick: (l, r) => {
            i.Z.join({
                userId: n.id,
                sessionId: p,
                applicationId: c.id,
                channelId: e.id,
                messageId: t.id
            }),
                s.Z.updateNotificationStatus(r),
                v('join');
        },
        onDismissClick: () => {
            v('dismiss');
        }
    };
}
