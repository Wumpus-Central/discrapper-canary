n.d(t, { Z: () => d });
var i = n(224706),
    o = n(13245),
    r = n(150097),
    l = n(620954),
    a = n(987650),
    s = n(388032);
function d(e, t, n, d, c) {
    if (null == t.activity || null == d.id) return null;
    let u = t.activity.type,
        h = c.session_id;
    if (null == h) return null;
    let { icon: _, title: p, body: f } = (0, r.Xi)(e, t, n),
        { trackView: g, trackClick: m } = (0, l.R)(a.n0.ActivityInvite, {
            notif_type: a.n0.ActivityInvite,
            notif_user_id: n.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
            activity_type: u,
            activity_name: c.name
        });
    return {
        icon: _,
        title: p,
        body: f,
        onNotificationShow: () => {
            g();
        },
        confirmText: s.intl.string(s.t.VJlc0d),
        onConfirmClick: (r, l) => {
            var a;
            i.Z.join({
                userId: n.id,
                sessionId: h,
                applicationId: null !== (a = d.altId) && void 0 !== a ? a : d.id,
                channelId: e.id,
                messageId: t.id
            }),
                o.Z.updateNotificationStatus(l),
                m('join');
        },
        onDismissClick: () => {
            m('dismiss');
        }
    };
}
