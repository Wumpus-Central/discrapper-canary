i.d(e, {
    Z: function () {
        return u;
    }
});
var n = i(224706),
    l = i(13245),
    o = i(150097),
    r = i(620954),
    s = i(987650),
    a = i(388032);
function u(t, e, i, u, d) {
    if (null == e.activity || null == u.id) return null;
    let c = e.activity.type,
        h = d.session_id;
    if (null == h) return null;
    let { icon: E, title: p, body: f } = (0, o.Xi)(t, e, i),
        { trackView: S, trackClick: _ } = (0, r.R)(s.n0.ActivityInvite, {
            notif_type: s.n0.ActivityInvite,
            notif_user_id: i.id,
            message_id: e.id,
            message_type: e.type,
            guild_id: t.guild_id,
            channel_id: t.id,
            channel_type: t.type,
            activity_type: c,
            activity_name: d.name
        });
    return {
        icon: E,
        title: p,
        body: f,
        onNotificationShow: () => {
            S();
        },
        confirmText: a.intl.string(a.t.VJlc0d),
        onConfirmClick: (o, r) => {
            var s;
            n.Z.join({
                userId: i.id,
                sessionId: h,
                applicationId: null !== (s = u.altId) && void 0 !== s ? s : u.id,
                channelId: t.id,
                messageId: e.id
            }),
                l.Z.updateNotificationStatus(r),
                _('join');
        },
        onDismissClick: () => {
            _('dismiss');
        }
    };
}
