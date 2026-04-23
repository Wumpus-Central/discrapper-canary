"use strict";
n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var s = n(684013),
    l = n(742984),
    a = n(833551),
    r = n(976860),
    o = n(400492),
    d = n(845618),
    c = n(256415),
    u = n(723702),
    h = n(837921),
    p = n(9302),
    A = n(684748),
    f = n(652215),
    _ = n(672396),
    g = n(985018);
function m(e, t, n, m) {
    let { icon: E, title: x, body: y } = (0, l.TB)(e, t, n),
        { trackView: v, trackClick: S } = (0, A.Y)(_.KS.TextChat, {
            notif_type: _.KS.TextChat,
            notif_user_id: t.author?.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
        });
    return {
        icon: E,
        title: x,
        body: y,
        renderFooter: (e) =>
            e ? (0, i.jsx)("div", { style: { textAlign: "center" }, children: g.intl.string(g.t["+MJm3w"]) }) : null,
        maxBodyLines: 2,
        onNotificationShow: () => {
            m && (0, o.Ak)(d.cH, d.pD), v();
        },
        onNotificationClick: () => {
            if (a.default.isOverlayOOPEnabledForPid((0, p.getPID)())) {
                let n = (0, p.getPID)();
                c.default.isInstanceLocked()
                    ? (S("unlock"), s.A.setInputLocked(!1, n))
                    : (S("jump"),
                      (0, r.pX)(f.BVt.CHANNEL(e.guild_id, e.id, t.id)),
                      u.isPlatformEmbedded && h.Ay.focus());
            } else
                (0, r.pX)(f.BVt.CHANNEL(e.guild_id, e.id)),
                    S("jump"),
                    c.default.isInstanceLocked() && s.A.setInstanceLocked(!1);
        },
        onDismissClick: () => {
            S("dismiss");
        },
    };
}
