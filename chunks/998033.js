n.d(t, { Z: () => v });
var i = n(200651);
n(192379);
var r = n(13245),
    s = n(864060),
    o = n(371651),
    l = n(703656),
    a = n(460181),
    c = n(237997),
    d = n(358085),
    u = n(998502),
    h = n(145597),
    p = n(312839),
    f = n(981631),
    g = n(468788),
    m = n(987650),
    y = n(388032);
function v(e, t, n, v) {
    var _;
    let { icon: O, title: b, body: x } = (0, s.Xi)(e, t, n),
        { trackView: E, trackClick: S } = (0, p.R)(m.n0.TextChat, {
            notif_type: m.n0.TextChat,
            notif_user_id: null == (_ = t.author) ? void 0 : _.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type
        });
    return {
        icon: O,
        title: b,
        body: x,
        renderFooter: (e) =>
            e
                ? (0, i.jsx)('div', {
                      style: { textAlign: 'center' },
                      children: y.intl.string(y.t['+MJm39'])
                  })
                : null,
        maxBodyLines: 2,
        onNotificationShow: () => {
            v && (0, a.GN)(g.Ay, g.yk), E();
        },
        onNotificationClick: () => {
            if (o.default.isOverlayOOPEnabledForPid((0, h.getPID)())) {
                let n = (0, h.getPID)();
                c.default.isInstanceLocked() ? (S('unlock'), r.Z.setInputLocked(!1, n)) : (S('jump'), (0, l.uL)(f.Z5c.CHANNEL(e.guild_id, e.id, t.id)), d.isPlatformEmbedded && u.ZP.focus());
            } else (0, l.uL)(f.Z5c.CHANNEL(e.guild_id, e.id)), S('jump'), c.default.isInstanceLocked() && r.Z.setInstanceLocked(!1);
        },
        onDismissClick: () => {
            S('dismiss');
        }
    };
}
