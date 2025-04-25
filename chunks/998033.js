n.d(t, { Z: () => v });
var i = n(200651);
n(192379);
var r = n(13245),
    s = n(864060),
    o = n(371651),
    l = n(703656),
    a = n(460181),
    c = n(974180),
    d = n(237997),
    u = n(358085),
    h = n(998502),
    p = n(145597),
    f = n(312839),
    g = n(981631),
    m = n(987650),
    y = n(388032);
function v(e, t, n, v) {
    var _;
    let { icon: O, title: b, body: x } = (0, s.Xi)(e, t, n),
        { trackView: E, trackClick: S } = (0, f.R)(m.n0.TextChat, {
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
            v && (0, a.GN)(c.Ay, c.yk), E();
        },
        onNotificationClick: () => {
            if (o.default.isOverlayOOPEnabledForPid((0, p.getPID)())) {
                let n = (0, p.getPID)();
                d.default.isInstanceLocked() ? (S('unlock'), r.Z.setInputLocked(!1, n)) : (S('jump'), (0, l.uL)(g.Z5c.CHANNEL(e.guild_id, e.id, t.id)), u.isPlatformEmbedded && h.ZP.focus());
            } else (0, l.uL)(g.Z5c.CHANNEL(e.guild_id, e.id)), S('jump'), d.default.isInstanceLocked() && r.Z.setInstanceLocked(!1);
        },
        onDismissClick: () => {
            S('dismiss');
        }
    };
}
