n.d(t, { Z: () => c });
var r = n(442837),
    i = n(665906),
    l = n(695346),
    o = n(496675),
    a = n(981631),
    s = n(231338);
let c = (e) => {
    let t = (0, i.$R)(e),
        n = (0, r.e7)([o.Z], () => (e.isPrivate() || o.Z.can(s.Pl.ADD_REACTIONS, e)) && t, [e, t]),
        c = e.type !== a.d4z.GUILD_ANNOUNCEMENT;
    return l.nc.getSetting() && n && c;
};
