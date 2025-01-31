n.d(t, { Z: () => v });
var i = n(200651);
n(192379);
var s = n(13245),
    l = n(371651),
    r = n(703656),
    o = n(460181),
    a = n(974180),
    d = n(237997),
    c = n(150097),
    u = n(358085),
    h = n(998502),
    p = n(145597),
    g = n(312839),
    f = n(981631),
    m = n(987650),
    x = n(388032);
function v(e, t, n, v) {
    var Z;
    let { icon: S, title: E, body: C } = (0, c.Xi)(e, t, n),
        { trackView: I, trackClick: N } = (0, g.R)(m.n0.TextChat, {
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
        title: E,
        body: C,
        renderFooter: (e) =>
            e
                ? (0, i.jsx)('div', {
                      style: { textAlign: 'center' },
                      children: x.intl.string(x.t['+MJm39'])
                  })
                : null,
        maxBodyLines: 2,
        onNotificationShow: () => {
            v && (0, o.GN)(a.Ay, a.yk), I();
        },
        onNotificationClick: () => {
            if (l.Z.isOverlayOOPEnabledForPid((0, p.QF)())) {
                let n = (0, p.QF)();
                d.Z.isInstanceLocked() ? (N('unlock'), s.Z.setInputLocked(!1, n)) : (N('jump'), (0, r.uL)(f.Z5c.CHANNEL(e.guild_id, e.id, t.id)), u.isPlatformEmbedded && h.ZP.focus());
            } else (0, r.uL)(f.Z5c.CHANNEL(e.guild_id, e.id)), N('jump'), d.Z.isInstanceLocked() && s.Z.setInstanceLocked(!1);
        },
        onDismissClick: () => {
            N('dismiss');
        }
    };
}
