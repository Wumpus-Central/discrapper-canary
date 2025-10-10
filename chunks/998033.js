n.d(t, { Z: () => _ });
var i = n(951288);
n(647438);
var r = n(13245),
    s = n(864060),
    o = n(371651),
    l = n(703656),
    a = n(460181),
    c = n(974180),
    d = n(237997),
    u = n(358085),
    p = n(998502),
    h = n(145597),
    f = n(312839),
    g = n(981631),
    m = n(987650),
    y = n(388032);
function _(e, t, n, _) {
    var O;
    let { icon: b, title: v, body: E } = (0, s.Xi)(e, t, n),
        { trackView: x, trackClick: S } = (0, f.R)(m.n0.TextChat, {
            notif_type: m.n0.TextChat,
            notif_user_id: null == (O = t.author) ? void 0 : O.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
        });
    return {
        icon: b,
        title: v,
        body: E,
        renderFooter: (e) =>
            e
                ? (0, i.jsx)("div", {
                      style: { textAlign: "center" },
                      children: y.intl.string(y.t["+MJm39"]),
                  })
                : null,
        maxBodyLines: 2,
        onNotificationShow: () => {
            _ && (0, a.GN)(c.Ay, c.yk), x();
        },
        onNotificationClick: () => {
            if (o.default.isOverlayOOPEnabledForPid((0, h.getPID)())) {
                let n = (0, h.getPID)();
                d.default.isInstanceLocked()
                    ? (S("unlock"), r.Z.setInputLocked(!1, n))
                    : (S("jump"),
                      (0, l.uL)(g.Z5c.CHANNEL(e.guild_id, e.id, t.id)),
                      u.isPlatformEmbedded && p.ZP.focus());
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
