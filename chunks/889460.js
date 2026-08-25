n.d(e, { A: () => b }), n(321073);
var i = n(477900),
    l = n(582128),
    d = n(17928),
    r = n(477782),
    a = n(308528),
    s = n(376728),
    o = n(148494),
    u = n(855687),
    c = n(734057),
    A = n(808728),
    g = n(71393),
    f = n(576705),
    x = n(994500),
    I = n(711014),
    h = n(287809),
    C = n(652215),
    v = n(375708);
function m(t, e) {
    a.A.ensurePrivateChannel(t).then((t) => {
        null != c.A.getChannel(t) && o.A.sendInvite(t, e, "context_menu", { source: C.PE1.GUILD_CONTEXT_MENU });
    });
}
function b(t) {
    let { user: e, guildId: n, onAction: a } = t,
        o = (0, d.bG)([h.default], () => h.default.getCurrentUser(), []),
        c = (0, d.yK)([I.Ay, g.A, f.A], () => {
            let t = I.Ay.getFlattenedGuildIds(),
                e = [];
            return (
                t.forEach((t) => {
                    let i = g.A.getGuild(t);
                    null != i && (0, u.K)(f.A, i) && i.id !== n && e.push(i);
                }),
                e
            );
        }, [n]),
        [b, p] = l.useState({});
    return o?.id === e.id || e.bot || 0 === c.length || x.A.isBlockedOrIgnored(e.id)
        ? null
        : (0, i.jsx)(r.Dr, {
              id: "invite-to-server",
              label: v.intl.string(v.t.Sd8Ixw),
              children: c.map((t) =>
                  b[t.id]
                      ? (0, i.jsx)(r.Dr, { id: t.id, disabled: !0, label: v.intl.string(v.t.PuLLzP) }, t.id)
                      : (0, i.jsx)(
                            r.Dr,
                            {
                                id: t.id,
                                label: t.name,
                                action: () => {
                                    a?.(),
                                        (function (t, e) {
                                            let n = A.Ay.getDefaultChannel(t.id, !0, C.xBc.CREATE_INSTANT_INVITE);
                                            if (null != n) {
                                                if (
                                                    (p({ ...b, [t.id]: !0 }),
                                                    !f.A.can(C.xBc.CREATE_INSTANT_INVITE, t) && null != t.vanityURLCode)
                                                )
                                                    return m(e, t.vanityURLCode);
                                                s.Ay.createInvite(
                                                    n.id,
                                                    { max_uses: 1, unique: !0 },
                                                    "User Invite Context Menu",
                                                ).then((t) => m(e, t.code));
                                            }
                                        })(t, e.id);
                                },
                            },
                            t.id,
                        ),
              ),
          });
}
