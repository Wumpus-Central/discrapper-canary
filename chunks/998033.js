n.d(t, { Z: () => y });
var i = n(54381);
n(473749);
var r = n(13245),
    a = n(864060),
    s = n(371651),
    o = n(703656),
    l = n(460181),
    c = n(974180),
    d = n(237997),
    u = n(358085),
    f = n(998502),
    h = n(145597),
    p = n(312839),
    g = n(981631),
    b = n(987650),
    m = n(388032);
function y(e, t, n, y) {
    var v;
    let { icon: O, title: E, body: x } = (0, a.Xi)(e, t, n),
        { trackView: S, trackClick: _ } = (0, p.R)(b.n0.TextChat, {
            notif_type: b.n0.TextChat,
            notif_user_id: null == (v = t.author) ? void 0 : v.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
        });
    return {
        icon: O,
        title: E,
        body: x,
        renderFooter: (e) =>
            e
                ? (0, i.jsx)("div", {
                      style: { textAlign: "center" },
                      children: m.intl.string(m.t["+MJm3w"]),
                  })
                : null,
        maxBodyLines: 2,
        onNotificationShow: () => {
            y && (0, l.GN)(c.Ay, c.yk), S();
        },
        onNotificationClick: () => {
            if (s.default.isOverlayOOPEnabledForPid((0, h.getPID)())) {
                let n = (0, h.getPID)();
                d.default.isInstanceLocked()
                    ? (_("unlock"), r.Z.setInputLocked(!1, n))
                    : (_("jump"),
                      (0, o.uL)(g.Z5c.CHANNEL(e.guild_id, e.id, t.id)),
                      u.isPlatformEmbedded && f.ZP.focus());
            } else
                (0, o.uL)(g.Z5c.CHANNEL(e.guild_id, e.id)),
                    _("jump"),
                    d.default.isInstanceLocked() && r.Z.setInstanceLocked(!1);
        },
        onDismissClick: () => {
            _("dismiss");
        },
    };
}
