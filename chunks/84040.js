n.d(t, { Z: () => u });
var r = n(275726),
    i = n(442837),
    o = n(665906),
    a = n(695346),
    s = n(496675),
    l = n(981631),
    c = n(231338);
let u = (e, t) => {
    let n = (0, o.$R)(e),
        u = (0, i.e7)([s.Z], () => (e.isPrivate() || s.Z.can(c.Pl.ADD_REACTIONS, e)) && n, [e, n]),
        d = (null == t ? void 0 : t.type) !== r.u.GUILD_INVITE_REMINDER && e.type !== l.d4z.GUILD_ANNOUNCEMENT;
    return a.nc.getSetting() && u && d;
};
