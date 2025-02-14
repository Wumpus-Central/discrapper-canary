n.d(t, { Z: () => Z });
var i = n(200651);
n(192379);
var s = n(13245),
    l = n(371651),
    a = n(703656),
    r = n(460181),
    o = n(974180),
    d = n(237997),
    c = n(150097),
    u = n(358085),
    h = n(998502),
    p = n(145597),
    g = n(312839),
    m = n(981631),
    f = n(987650),
    v = n(388032);
function Z(e, t, n, Z) {
    var x;
    let { icon: S, title: E, body: C } = (0, c.Xi)(e, t, n),
        { trackView: y, trackClick: N } = (0, g.R)(f.n0.TextChat, {
            notif_type: f.n0.TextChat,
            notif_user_id: null === (x = t.author) || void 0 === x ? void 0 : x.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type
        });
    return {
        icon: S,
        title: E,
        body: C,
        renderFooter: (e) =>
            e
                ? (0, i.jsx)('div', {
                      style: { textAlign: 'center' },
                      children: v.intl.string(v.t['+MJm39'])
                  })
                : null,
        maxBodyLines: 2,
        onNotificationShow: () => {
            Z && (0, r.GN)(o.Ay, o.yk), y();
        },
        onNotificationClick: () => {
            if (l.default.isOverlayOOPEnabledForPid((0, p.QF)())) {
                let n = (0, p.QF)();
                d.Z.isInstanceLocked() ? (N('unlock'), s.Z.setInputLocked(!1, n)) : (N('jump'), (0, a.uL)(m.Z5c.CHANNEL(e.guild_id, e.id, t.id)), u.isPlatformEmbedded && h.ZP.focus());
            } else (0, a.uL)(m.Z5c.CHANNEL(e.guild_id, e.id)), N('jump'), d.Z.isInstanceLocked() && s.Z.setInstanceLocked(!1);
        },
        onDismissClick: () => {
            N('dismiss');
        }
    };
}
