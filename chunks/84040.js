n.d(t, { Z: () => s });
var r = n(442837),
    i = n(665906),
    l = n(695346),
    o = n(496675),
    a = n(981631),
    c = n(231338);
let s = (e) => {
    let t = (0, i.$R)(e),
        n = (0, r.e7)([o.Z], () => (e.isPrivate() || o.Z.can(c.Pl.ADD_REACTIONS, e)) && t, [e, t]),
        s = e.type !== a.d4z.GUILD_ANNOUNCEMENT;
    return l.nc.getSetting() && n && s;
};
