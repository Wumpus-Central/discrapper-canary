"use strict";
n.d(t, { A: () => v }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(308528),
    l = n(846293),
    u = n(843472),
    c = n(855687),
    d = n(734057),
    _ = n(808728),
    f = n(71393),
    p = n(576705),
    h = n(994500),
    m = n(711014),
    g = n(287809),
    E = n(652215),
    A = n(985018);
let I = "max_uses",
    T = "User Invite Context Menu",
    y = "context_menu";
function S(e, t) {
    o.A.ensurePrivateChannel(e).then((e) => {
        null != d.A.getChannel(e) && u.A.sendInvite(e, t, y, { source: E.PE1.GUILD_CONTEXT_MENU });
    });
}
function v(e) {
    let { user: t, guildId: n, onAction: o } = e,
        u = (0, a.bG)([g.default], () => g.default.getCurrentUser(), []),
        d = (0, a.yK)([m.Ay, f.A, p.A], () => {
            let e = m.Ay.getFlattenedGuildIds(),
                t = [];
            return (
                e.forEach((e) => {
                    let r = f.A.getGuild(e);
                    null != r && (0, c.K)(p.A, r) && r.id !== n && t.push(r);
                }),
                t
            );
        }, [n]),
        [y, v] = i.useState({});
    function C(e, t) {
        let n = _.Ay.getDefaultChannel(e.id, !0, E.xBc.CREATE_INSTANT_INVITE);
        if (null != n) {
            if ((v({ ...y, [e.id]: !0 }), !p.A.can(E.xBc.CREATE_INSTANT_INVITE, e) && null != e.vanityURLCode))
                return void S(t, e.vanityURLCode);
            l.Ay.createInvite(n.id, { [I]: 1, unique: !0 }, T).then((e) => S(t, e.code));
        }
    }
    return u?.id === t.id || t.bot || 0 === d.length || h.A.isBlockedOrIgnored(t.id)
        ? null
        : (0, r.jsx)(s.Drp, {
              id: "invite-to-server",
              label: A.intl.string(A.t.Sd8Ixw),
              children: d.map((e) =>
                  y[e.id]
                      ? (0, r.jsx)(s.Drp, { id: e.id, disabled: !0, label: A.intl.string(A.t.PuLLzP) }, e.id)
                      : (0, r.jsx)(
                            s.Drp,
                            {
                                id: e.id,
                                label: e.name,
                                action: () => {
                                    o?.(), C(e, t.id);
                                },
                            },
                            e.id,
                        ),
              ),
          });
}
