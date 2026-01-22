n.d(t, {
    A: () => A,
});
var i = n(627968);
n(64700);
var r = n(684013),
    s = n(742984),
    l = n(833551),
    o = n(976860),
    a = n(400492),
    c = n(845618),
    d = n(256415),
    u = n(723702),
    h = n(837921),
    p = n(9302),
    f = n(684748),
    b = n(652215),
    g = n(672396),
    y = n(985018);

function A(e, t, n, A) {
    var m;
    let { icon: O, title: v, body: E } = (0, s.TB)(e, t, n),
        { trackView: x, trackClick: S } = (0, f.Y)(g.KS.TextChat, {
            notif_type: g.KS.TextChat,
            notif_user_id: null == (m = t.author) ? void 0 : m.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
        });
    return {
        icon: O,
        title: v,
        body: E,
        renderFooter: (e) =>
            e
                ? (0, i.jsx)("div", {
                      style: {
                          textAlign: "center",
                      },
                      children: y.intl.string(y.t["+MJm3w"]),
                  })
                : null,
        maxBodyLines: 2,
        onNotificationShow: () => {
            A && (0, a.Ak)(c.cH, c.pD), x();
        },
        onNotificationClick: () => {
            if (l.default.isOverlayOOPEnabledForPid((0, p.getPID)())) {
                let n = (0, p.getPID)();
                d.default.isInstanceLocked()
                    ? (S("unlock"), r.A.setInputLocked(!1, n))
                    : (S("jump"),
                      (0, o.pX)(b.BVt.CHANNEL(e.guild_id, e.id, t.id)),
                      u.isPlatformEmbedded && h.Ay.focus());
            } else
                (0, o.pX)(b.BVt.CHANNEL(e.guild_id, e.id)),
                    S("jump"),
                    d.default.isInstanceLocked() && r.A.setInstanceLocked(!1);
        },
        onDismissClick: () => {
            S("dismiss");
        },
    };
}
