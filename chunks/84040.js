n.d(t, { Z: () => c });
var i = n(275726),
    r = n(442837),
    a = n(665906),
    s = n(695346),
    o = n(496675),
    l = n(981631),
    u = n(231338);
let c = (e, t) => {
    let n = (0, a.$R)(e),
        c = (0, r.e7)([o.Z], () => (e.isPrivate() || o.Z.can(u.Pl.ADD_REACTIONS, e)) && n, [e, n]),
        d = (null == t ? void 0 : t.type) !== i.u.GUILD_INVITE_REMINDER && e.type !== l.d4z.GUILD_ANNOUNCEMENT;
    return s.nc.getSetting() && c && d;
};
