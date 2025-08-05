n.d(t, { Z: () => c });
var r = n(442837),
    i = n(665906),
    a = n(695346),
    o = n(496675),
    s = n(981631),
    l = n(231338);
let c = (e) => {
    let t = (0, i.$R)(e),
        n = (0, r.e7)([o.Z], () => (e.isPrivate() || o.Z.can(l.Pl.ADD_REACTIONS, e)) && t, [e, t]),
        c = e.type !== s.d4z.GUILD_ANNOUNCEMENT;
    return a.nc.getSetting() && n && c;
};
