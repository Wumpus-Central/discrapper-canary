n.d(t, { Z: () => c });
var i = n(224706),
    r = n(13245),
    o = n(150097),
    l = n(620954),
    a = n(987650),
    s = n(388032);
function c(e, t, n, c, u) {
    if (null == t.activity || null == c.id) return null;
    let d = t.activity.type,
        p = u.session_id;
    if (null == p) return null;
    let { icon: f, title: h, body: g } = (0, o.Xi)(e, t, n),
        { trackView: _, trackClick: m } = (0, l.R)(a.n0.ActivityInvite, {
            notif_type: a.n0.ActivityInvite,
            notif_user_id: n.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
            activity_type: d,
            activity_name: u.name
        });
    return {
        icon: f,
        title: h,
        body: g,
        onNotificationShow: () => {
            _();
        },
        confirmText: s.NW.string(s.t.VJlc0d),
        onConfirmClick: (o, l) => {
            var a;
            i.Z.join({
                userId: n.id,
                sessionId: p,
                applicationId: null !== (a = c.altId) && void 0 !== a ? a : c.id,
                channelId: e.id,
                messageId: t.id
            }),
                r.Z.updateNotificationStatus(l),
                m('join');
        },
        onDismissClick: () => {
            m('dismiss');
        }
    };
}
