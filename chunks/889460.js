n.d(t, { A: () => v }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(17928),
    r = n(477782),
    o = n(308528),
    d = n(376728),
    u = n(720149),
    s = n(855687),
    c = n(734057),
    _ = n(808728),
    A = n(71393),
    h = n(576705),
    E = n(994500),
    f = n(711014),
    g = n(287809),
    p = n(652215),
    b = n(985018);
function S(e, t) {
    o.A.ensurePrivateChannel(e).then((e) => {
        null != c.A.getChannel(e) && u.A.sendInvite(e, t, "context_menu", { source: p.PE1.GUILD_CONTEXT_MENU });
    });
}
function v(e) {
    let { user: t, guildId: n, onAction: o } = e,
        u = (0, a.bG)([g.default], () => g.default.getCurrentUser(), []),
        c = (0, a.yK)([f.Ay, A.A, h.A], () => {
            let e = f.Ay.getFlattenedGuildIds(),
                t = [];
            return (
                e.forEach((e) => {
                    let i = A.A.getGuild(e);
                    null != i && (0, s.K)(h.A, i) && i.id !== n && t.push(i);
                }),
                t
            );
        }, [n]),
        [v, I] = l.useState({});
    return u?.id === t.id || t.bot || 0 === c.length || E.A.isBlockedOrIgnored(t.id)
        ? null
        : (0, i.jsx)(r.Dr, {
              id: "invite-to-server",
              label: b.intl.string(b.t.Sd8Ixw),
              children: c.map((e) =>
                  v[e.id]
                      ? (0, i.jsx)(r.Dr, { id: e.id, disabled: !0, label: b.intl.string(b.t.PuLLzP) }, e.id)
                      : (0, i.jsx)(
                            r.Dr,
                            {
                                id: e.id,
                                label: e.name,
                                action: () => {
                                    o?.(),
                                        (function (e, t) {
                                            let n = _.Ay.getDefaultChannel(e.id, !0, p.xBc.CREATE_INSTANT_INVITE);
                                            if (null != n) {
                                                if (
                                                    (I({ ...v, [e.id]: !0 }),
                                                    !h.A.can(p.xBc.CREATE_INSTANT_INVITE, e) && null != e.vanityURLCode)
                                                )
                                                    return S(t, e.vanityURLCode);
                                                d.Ay.createInvite(
                                                    n.id,
                                                    { max_uses: 1, unique: !0 },
                                                    "User Invite Context Menu",
                                                ).then((e) => S(t, e.code));
                                            }
                                        })(e, t.id);
                                },
                            },
                            e.id,
                        ),
              ),
          });
}
