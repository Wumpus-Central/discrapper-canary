n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(200651);
n(192379);
var s = n(13245),
    r = n(371651),
    a = n(703656),
    o = n(974180),
    l = n(237997),
    d = n(150097),
    c = n(358085),
    u = n(557177),
    h = n(998502),
    p = n(145597),
    f = n(312839),
    g = n(981631),
    m = n(987650),
    v = n(388032);
function x(e, t, n, x) {
    var Z;
    let { icon: S, title: _, body: E } = (0, d.Xi)(e, t, n),
        { trackView: C, trackClick: I } = (0, f.R)(m.n0.TextChat, {
            notif_type: m.n0.TextChat,
            notif_user_id: null === (Z = t.author) || void 0 === Z ? void 0 : Z.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type
        });
    return {
        icon: S,
        title: _,
        body: E,
        renderFooter: (e) =>
            e
                ? (0, i.jsx)('div', {
                      style: { textAlign: 'center' },
                      children: v.intl.string(v.t['+MJm39'])
                  })
                : null,
        maxBodyLines: 2,
        onNotificationShow: () => {
            x && (0, u.GN)(o.Ay, o.yk), C();
        },
        onNotificationClick: () => {
            if (r.Z.isOverlayOOPEnabledForPid((0, p.QF)())) {
                let n = (0, p.QF)();
                l.Z.isInstanceLocked() ? (I('unlock'), s.Z.setInputLocked(!1, n)) : (I('jump'), (0, a.uL)(g.Z5c.CHANNEL(e.guild_id, e.id, t.id)), c.isPlatformEmbedded && h.ZP.focus());
            } else (0, a.uL)(g.Z5c.CHANNEL(e.guild_id, e.id)), I('jump'), l.Z.isInstanceLocked() && s.Z.setInstanceLocked(!1);
        },
        onDismissClick: () => {
            I('dismiss');
        }
    };
}
