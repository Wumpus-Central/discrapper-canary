n.d(e, { A: () => m }), n(321073);
var i = n(477900),
    d = n(582128),
    l = n(17928),
    r = n(477782),
    a = n(308528),
    u = n(376728),
    o = n(148494),
    s = n(855687),
    c = n(734057),
    A = n(808728),
    f = n(71393),
    x = n(576705),
    C = n(994500),
    v = n(711014),
    g = n(287809),
    h = n(652215),
    b = n(375708);
function I(t, e) {
    a.A.ensurePrivateChannel(t).then((t) => {
        null != c.A.getChannel(t) && o.A.sendInvite(t, e, "context_menu", { source: h.PE1.GUILD_CONTEXT_MENU });
    });
}
function m(t) {
    let { user: e, guildId: n, onAction: a } = t,
        o = (0, l.bG)([g.default], () => g.default.getCurrentUser(), []),
        c = (0, l.yK)([v.Ay, f.A, x.A], () => {
            let t = v.Ay.getFlattenedGuildIds(),
                e = [];
            return (
                t.forEach((t) => {
                    let i = f.A.getGuild(t);
                    null != i && (0, s.K)(x.A, i) && i.id !== n && e.push(i);
                }),
                e
            );
        }, [n]),
        [m, T] = d.useState({});
    return o?.id === e.id || e.bot || 0 === c.length || C.A.isBlockedOrIgnored(e.id)
        ? null
        : (0, i.jsx)(r.Dr, {
              id: "invite-to-server",
              label: b.intl.string(b.t.Sd8Ixw),
              children: c.map((t) =>
                  m[t.id]
                      ? (0, i.jsx)(r.Dr, { id: t.id, disabled: !0, label: b.intl.string(b.t.PuLLzP) }, t.id)
                      : (0, i.jsx)(
                            r.Dr,
                            {
                                id: t.id,
                                label: t.name,
                                action: () => {
                                    a?.(),
                                        (function (t, e) {
                                            let n = A.Ay.getDefaultChannel(t.id, !0, h.xBc.CREATE_INSTANT_INVITE);
                                            if (null != n) {
                                                if (
                                                    (T({ ...m, [t.id]: !0 }),
                                                    !x.A.can(h.xBc.CREATE_INSTANT_INVITE, t) && null != t.vanityURLCode)
                                                )
                                                    return I(e, t.vanityURLCode);
                                                u.Ay.createInvite(
                                                    n.id,
                                                    { max_uses: 1, unique: !0 },
                                                    "User Invite Context Menu",
                                                ).then((t) => I(e, t.code));
                                            }
                                        })(t, e.id);
                                },
                            },
                            t.id,
                        ),
              ),
          });
}
