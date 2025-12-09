n.d(t, { Z: () => y });
var i = n(54381);
n(473749);
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
    _ = n(388032);
function y(e, t, n, y) {
    var v;
    let { icon: b, title: O, body: E } = (0, s.Xi)(e, t, n),
        { trackView: x, trackClick: S } = (0, f.R)(m.n0.TextChat, {
            notif_type: m.n0.TextChat,
            notif_user_id: null == (v = t.author) ? void 0 : v.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
        });
    return {
        icon: b,
        title: O,
        body: E,
        renderFooter: (e) =>
            e
                ? (0, i.jsx)("div", {
                      style: { textAlign: "center" },
                      children: _.intl.string(_.t["+MJm3w"]),
                  })
                : null,
        maxBodyLines: 2,
        onNotificationShow: () => {
            y && (0, a.GN)(c.Ay, c.yk), x();
        },
        onNotificationClick: () => {
            if (o.default.isOverlayOOPEnabledForPid((0, p.getPID)())) {
                let n = (0, p.getPID)();
                d.default.isInstanceLocked()
                    ? (S("unlock"), r.Z.setInputLocked(!1, n))
                    : (S("jump"),
                      (0, l.uL)(g.Z5c.CHANNEL(e.guild_id, e.id, t.id)),
                      u.isPlatformEmbedded && h.ZP.focus());
            } else
                (0, l.uL)(g.Z5c.CHANNEL(e.guild_id, e.id)),
                    S("jump"),
                    d.default.isInstanceLocked() && r.Z.setInstanceLocked(!1);
        },
        onDismissClick: () => {
            S("dismiss");
        },
    };
}
