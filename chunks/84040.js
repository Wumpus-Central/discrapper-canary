n.d(t, { Z: () => c });
var r = n(442837),
    i = n(665906),
    l = n(695346),
    a = n(496675),
    o = n(981631),
    s = n(231338);
let c = (e) => {
    let t = (0, i.$R)(e),
        n = (0, r.e7)([a.Z], () => (e.isPrivate() || a.Z.can(s.Pl.ADD_REACTIONS, e)) && t, [e, t]),
        c = e.type !== o.d4z.GUILD_ANNOUNCEMENT;
    return l.nc.getSetting() && n && c;
};
