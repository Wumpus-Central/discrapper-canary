n.d(t, { Z: () => O });
var i = n(200651);
n(192379);
var r = n(13245),
    s = n(371651),
    o = n(703656),
    l = n(460181),
    a = n(974180),
    c = n(237997),
    d = n(150097),
    u = n(358085),
    h = n(998502),
    p = n(145597),
    g = n(312839),
    f = n(981631),
    m = n(987650),
    y = n(388032);
function O(e, t, n, O) {
    var v;
    let { icon: S, title: b, body: x } = (0, d.Xi)(e, t, n),
        { trackView: Z, trackClick: j } = (0, g.R)(m.n0.TextChat, {
            notif_type: m.n0.TextChat,
            notif_user_id: null === (v = t.author) || void 0 === v ? void 0 : v.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type
        });
    return {
        icon: S,
        title: b,
        body: x,
        renderFooter: (e) =>
            e
                ? (0, i.jsx)('div', {
                      style: { textAlign: 'center' },
                      children: y.NW.string(y.t['+MJm39'])
                  })
                : null,
        maxBodyLines: 2,
        onNotificationShow: () => {
            O && (0, l.GN)(a.Ay, a.yk), Z();
        },
        onNotificationClick: () => {
            if (s.default.isOverlayOOPEnabledForPid((0, p.QF)())) {
                let n = (0, p.QF)();
                c.Z.isInstanceLocked() ? (j('unlock'), r.Z.setInputLocked(!1, n)) : (j('jump'), (0, o.uL)(f.Z5c.CHANNEL(e.guild_id, e.id, t.id)), u.isPlatformEmbedded && h.ZP.focus());
            } else (0, o.uL)(f.Z5c.CHANNEL(e.guild_id, e.id)), j('jump'), c.Z.isInstanceLocked() && r.Z.setInstanceLocked(!1);
        },
        onDismissClick: () => {
            j('dismiss');
        }
    };
}
