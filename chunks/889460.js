n.d(t, { A: () => I }), n(321073);
var i = n(477900),
    l = n(582128),
    d = n(17928),
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
function m(e, t) {
    a.A.ensurePrivateChannel(e).then((e) => {
        null != c.A.getChannel(e) && o.A.sendInvite(e, t, "context_menu", { source: h.PE1.GUILD_CONTEXT_MENU });
    });
}
function I(e) {
    let { user: t, guildId: n, onAction: a } = e,
        o = (0, d.bG)([g.default], () => g.default.getCurrentUser(), []),
        c = (0, d.yK)([v.Ay, f.A, x.A], () => {
            let e = v.Ay.getFlattenedGuildIds(),
                t = [];
            return (
                e.forEach((e) => {
                    let i = f.A.getGuild(e);
                    null != i && (0, s.K)(x.A, i) && i.id !== n && t.push(i);
                }),
                t
            );
        }, [n]),
        [I, T] = l.useState({});
    return o?.id === t.id || t.bot || 0 === c.length || C.A.isBlockedOrIgnored(t.id)
        ? null
        : (0, i.jsx)(r.Dr, {
              id: "invite-to-server",
              label: b.intl.string(b.t.Sd8Ixw),
              children: c.map((e) =>
                  I[e.id]
                      ? (0, i.jsx)(r.Dr, { id: e.id, disabled: !0, label: b.intl.string(b.t.PuLLzP) }, e.id)
                      : (0, i.jsx)(
                            r.Dr,
                            {
                                id: e.id,
                                label: e.name,
                                action: () => {
                                    a?.(),
                                        (function (e, t) {
                                            let n = A.Ay.getDefaultChannel(e.id, !0, h.xBc.CREATE_INSTANT_INVITE);
                                            if (null != n) {
                                                if (
                                                    (T({ ...I, [e.id]: !0 }),
                                                    !x.A.can(h.xBc.CREATE_INSTANT_INVITE, e) && null != e.vanityURLCode)
                                                )
                                                    return m(t, e.vanityURLCode);
                                                u.Ay.createInvite(
                                                    n.id,
                                                    { max_uses: 1, unique: !0 },
                                                    "User Invite Context Menu",
                                                ).then((e) => m(t, e.code));
                                            }
                                        })(e, t.id);
                                },
                            },
                            e.id,
                        ),
              ),
          });
}
