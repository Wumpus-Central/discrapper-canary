n(321073);
var i = n(477900),
    l = n(582128),
    d = n(855986),
    r = n(477782),
    a = n(308528),
    s = n(574332),
    u = n(138399),
    o = n(855687),
    c = n(734057),
    A = n(808728),
    g = n(71393),
    f = n(576705),
    I = n(994500),
    h = n(711014),
    v = n(287809),
    x = n(652215),
    C = n(792996);
function b(t, e) {
    a.A.ensurePrivateChannel(t).then((t) => {
        null != c.A.getChannel(t) && u.A.sendInvite(t, e, "context_menu", { source: x.PE1.GUILD_CONTEXT_MENU });
    });
}
n.d(
    e,
    {},
    {
        A: function (t) {
            let { user: e, guildId: n, onAction: a } = t,
                u = (0, d.bG)([v.default], () => v.default.getCurrentUser(), []),
                c = (0, d.yK)(
                    [h.Ay, g.A, f.A],
                    () => {
                        let t = h.Ay.getFlattenedGuildIds(),
                            e = [];
                        return (
                            t.forEach((t) => {
                                let i = g.A.getGuild(t);
                                null != i && (0, o.K)(f.A, i) && i.id !== n && e.push(i);
                            }),
                            e
                        );
                    },
                    [n],
                ),
                [m, T] = l.useState({});
            return u?.id === e.id || e.bot || 0 === c.length || I.A.isBlockedOrIgnored(e.id)
                ? null
                : (0, i.jsx)(r.Dr, {
                      id: "invite-to-server",
                      label: C.intl.string(C.t.Sd8Ixw),
                      children: c.map((t) =>
                          m[t.id]
                              ? (0, i.jsx)(r.Dr, { id: t.id, disabled: !0, label: C.intl.string(C.t.PuLLzP) }, t.id)
                              : (0, i.jsx)(
                                    r.Dr,
                                    {
                                        id: t.id,
                                        label: t.name,
                                        action: () => {
                                            (a?.(),
                                                (function (t, e) {
                                                    let n = A.A.getDefaultChannel(
                                                        t.id,
                                                        !0,
                                                        x.xBc.CREATE_INSTANT_INVITE,
                                                    );
                                                    if (null != n) {
                                                        if (
                                                            (T({ ...m, [t.id]: !0 }),
                                                            !f.A.can(x.xBc.CREATE_INSTANT_INVITE, t) &&
                                                                null != t.vanityURLCode)
                                                        )
                                                            return b(e, t.vanityURLCode);
                                                        s.Ay.createInvite(
                                                            n.id,
                                                            { max_uses: 1, unique: !0 },
                                                            "User Invite Context Menu",
                                                        ).then((t) => b(e, t.code));
                                                    }
                                                })(t, e.id));
                                        },
                                    },
                                    t.id,
                                ),
                      ),
                  });
        },
    },
);
