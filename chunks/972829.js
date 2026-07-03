t.d(e, { A: () => l });
var s = t(512750),
    d = t(17928),
    r = t(71393),
    a = t(645619),
    i = t(652215);
function l(u) {
    return (0, d.bG)(
        [r.A, a.A],
        () =>
            null != u &&
            (r.A.getGuild(u)?.features.has(i.GuildFeatures.GUILD_THEME) === !0 ||
                a.A.getStateForGuild(u)?.unlockedPowerups?.[s.d0] != null),
        [u],
    );
}
