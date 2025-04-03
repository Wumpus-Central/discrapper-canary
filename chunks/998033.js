n.d(t, { Z: () => O });
var i = n(200651);
n(192379);
var r = n(13245),
    s = n(864060),
    o = n(371651),
    l = n(703656),
    a = n(460181),
    c = n(974180),
    u = n(237997),
    d = n(358085),
    h = n(998502),
    p = n(145597),
    f = n(312839),
    g = n(981631),
    m = n(987650),
    y = n(388032);
function O(e, t, n, O) {
    var v;
    let { icon: x, title: b, body: S } = (0, s.Xi)(e, t, n),
        { trackView: E, trackClick: j } = (0, f.R)(m.n0.TextChat, {
            notif_type: m.n0.TextChat,
            notif_user_id: null == (v = t.author) ? void 0 : v.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type
        });
    return {
        icon: x,
        title: b,
        body: S,
        renderFooter: (e) =>
            e
                ? (0, i.jsx)('div', {
                      style: { textAlign: 'center' },
                      children: y.NW.string(y.t['+MJm39'])
                  })
                : null,
        maxBodyLines: 2,
        onNotificationShow: () => {
            O && (0, a.GN)(c.Ay, c.yk), E();
        },
        onNotificationClick: () => {
            if (o.default.isOverlayOOPEnabledForPid((0, p.getPID)())) {
                let n = (0, p.getPID)();
                u.default.isInstanceLocked() ? (j('unlock'), r.Z.setInputLocked(!1, n)) : (j('jump'), (0, l.uL)(g.Z5c.CHANNEL(e.guild_id, e.id, t.id)), d.isPlatformEmbedded && h.ZP.focus());
            } else (0, l.uL)(g.Z5c.CHANNEL(e.guild_id, e.id)), j('jump'), u.default.isInstanceLocked() && r.Z.setInstanceLocked(!1);
        },
        onDismissClick: () => {
            j('dismiss');
        }
    };
}
