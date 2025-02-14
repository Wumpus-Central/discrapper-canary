n.d(t, { Z: () => d });
var i = n(224706),
    l = n(13245),
    r = n(150097),
    o = n(620954),
    a = n(987650),
    s = n(388032);
function d(e, t, n, d, u) {
    if (null == t.activity || null == d.id) return null;
    let c = t.activity.type,
        h = u.session_id;
    if (null == h) return null;
    let { icon: _, title: p, body: f } = (0, r.Xi)(e, t, n),
        { trackView: g, trackClick: m } = (0, o.R)(a.n0.ActivityInvite, {
            notif_type: a.n0.ActivityInvite,
            notif_user_id: n.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
            activity_type: c,
            activity_name: u.name
        });
    return {
        icon: _,
        title: p,
        body: f,
        onNotificationShow: () => {
            g();
        },
        confirmText: s.intl.string(s.t.VJlc0d),
        onConfirmClick: (r, o) => {
            var a;
            i.Z.join({
                userId: n.id,
                sessionId: h,
                applicationId: null !== (a = d.altId) && void 0 !== a ? a : d.id,
                channelId: e.id,
                messageId: t.id
            }),
                l.Z.updateNotificationStatus(o),
                m('join');
        },
        onDismissClick: () => {
            m('dismiss');
        }
    };
}
