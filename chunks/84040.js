n.d(t, { Z: () => u });
var r = n(275726),
    i = n(442837),
    l = n(665906),
    a = n(695346),
    o = n(496675),
    s = n(981631),
    c = n(231338);
let u = (e, t) => {
    let n = (0, l.$R)(e),
        u = (0, i.e7)([o.Z], () => (e.isPrivate() || o.Z.can(c.Pl.ADD_REACTIONS, e)) && n, [e, n]),
        d = (null == t ? void 0 : t.type) !== r.u.GUILD_INVITE_REMINDER && e.type !== s.d4z.GUILD_ANNOUNCEMENT;
    return a.nc.getSetting() && u && d;
};
