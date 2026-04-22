n.d(t, { A: () => S }), n(321073);
var i = n(627968),
    l = n(64700),
    r = n(311907),
    a = n(477782),
    o = n(308528),
    d = n(846293),
    u = n(843472),
    s = n(855687),
    c = n(734057),
    _ = n(808728),
    A = n(71393),
    f = n(576705),
    E = n(994500),
    h = n(711014),
    g = n(287809),
    b = n(652215),
    p = n(985018);
function v(e, t) {
    o.A.ensurePrivateChannel(e).then((e) => {
        null != c.A.getChannel(e) && u.A.sendInvite(e, t, "context_menu", { source: b.PE1.GUILD_CONTEXT_MENU });
    });
}
function S(e) {
    let { user: t, guildId: n, onAction: o } = e,
        u = (0, r.bG)([g.default], () => g.default.getCurrentUser(), []),
        c = (0, r.yK)([h.Ay, A.A, f.A], () => {
            let e = h.Ay.getFlattenedGuildIds(),
                t = [];
            return (
                e.forEach((e) => {
                    let i = A.A.getGuild(e);
                    null != i && (0, s.K)(f.A, i) && i.id !== n && t.push(i);
                }),
                t
            );
        }, [n]),
        [S, I] = l.useState({});
    return u?.id === t.id || t.bot || 0 === c.length || E.A.isBlockedOrIgnored(t.id)
        ? null
        : (0, i.jsx)(a.Dr, {
              id: "invite-to-server",
              label: p.intl.string(p.t.Sd8Ixw),
              children: c.map((e) =>
                  S[e.id]
                      ? (0, i.jsx)(a.Dr, { id: e.id, disabled: !0, label: p.intl.string(p.t.PuLLzP) }, e.id)
                      : (0, i.jsx)(
                            a.Dr,
                            {
                                id: e.id,
                                label: e.name,
                                action: () => {
                                    o?.(),
                                        (function (e, t) {
                                            let n = _.Ay.getDefaultChannel(e.id, !0, b.xBc.CREATE_INSTANT_INVITE);
                                            if (null != n) {
                                                if (
                                                    (I({ ...S, [e.id]: !0 }),
                                                    !f.A.can(b.xBc.CREATE_INSTANT_INVITE, e) && null != e.vanityURLCode)
                                                )
                                                    return v(t, e.vanityURLCode);
                                                d.Ay.createInvite(
                                                    n.id,
                                                    { max_uses: 1, unique: !0 },
                                                    "User Invite Context Menu",
                                                ).then((e) => v(t, e.code));
                                            }
                                        })(e, t.id);
                                },
                            },
                            e.id,
                        ),
              ),
          });
}
