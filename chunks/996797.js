n.d(t, { A: () => h });
var i = n(308368),
    r = n(684013),
    s = n(334738),
    l = n(471024),
    o = n(256415),
    a = n(684748),
    c = n(652215),
    d = n(672396),
    u = n(985018);
function h(e, t, n, h) {
    let p = t.username,
        f = u.intl.format(u.t.VDODnv, {
            username: "",
            game: n.name,
        }),
        b = t.getAvatarURL(e.guild_id, 80),
        { trackView: g, trackClick: y } = (0, a.Y)(d.KS.ActivityInvite, {
            notif_type: d.KS.ActivityInvite,
            notif_user_id: t.id,
            activity_type: c.xL.JOIN_REQUEST,
            activity_name: n.name,
        });
    return {
        icon: b,
        title: p,
        body: f,
        hint: (e) => (0, l.sI)(e, (0, a.J)(), u.t.Odi54y),
        confirmText: u.intl.string(u.t["fgP/wX"]),
        cancelText: u.intl.string(u.t["tpXzJ+"]),
        onNotificationShow: () => {
            g();
        },
        onConfirmClick: (t, n) => {
            i.A.sendActivityInvite({
                channelId: e.id,
                type: c.xL.JOIN,
                activity: h,
                location: o.default.isInstanceLocked() ? c.ThZ.LOCKED_OVERLAY : c.ThZ.UNLOCKED_OVERLAY,
            }),
                y("join"),
                r.A.updateNotificationStatus(n);
        },
        onCancelClick: (t, n) => {
            (0, s.ack)(
                e.id,
                {
                    section: c.JJy.OVERLAY,
                    object: c.ZSU.ACK_DECLINE_REQUEST_TO_JOIN,
                    objectType: c.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                },
                !0,
                !0,
            ),
                r.A.updateNotificationStatus(n),
                y("decline");
        },
        onDismissClick: () => {
            y("dismiss");
        },
    };
}
