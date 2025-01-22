var i = r(275726),
    a = r(442837),
    o = r(665906),
    s = r(695346),
    l = r(496675),
    u = r(231338);
let c = (e, n) => {
    let r = (0, o.$R)(e),
        c = (0, a.e7)([l.Z], () => (e.isPrivate() || l.Z.can(u.Pl.ADD_REACTIONS, e)) && r, [e, r]);
    return s.nc.getSetting() && c && (null == n ? void 0 : n.type) !== i.u.GUILD_INVITE_REMINDER;
};
n.Z = c;
