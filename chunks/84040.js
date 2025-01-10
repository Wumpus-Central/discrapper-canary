var i = t(275726),
    l = t(442837),
    r = t(665906),
    a = t(695346),
    o = t(496675),
    s = t(231338);
n.Z = (e, n) => {
    let t = (0, r.$R)(n),
        u = (0, l.e7)([o.Z], () => (n.isPrivate() || o.Z.can(s.Pl.ADD_REACTIONS, n)) && t, [n, t]);
    return a.nc.getSetting() && u && e.type !== i.u.GUILD_INVITE_REMINDER;
};
