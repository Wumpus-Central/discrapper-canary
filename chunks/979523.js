n.d(e, { m: () => o, q: () => b });
var r = n(793943),
    l = n(976860),
    s = n(808728),
    i = n(71393),
    a = n(476931),
    c = n(673642),
    d = n(759532),
    u = n(875317);
function b(t) {
    return s.Ay.getDefaultChannel(t)?.id;
}
function o(t, e) {
    (0, l.uh)(t, b(t));
    let n = i.A.getGuild(t)?.guildTheme,
        s = n?.themeSettings ?? null,
        o = n?.enabled === !0 && (0, u.Om)(s);
    (0, c.tA)({
        guildId: t,
        draft: o ? s : (0, a.Qy)(),
        original: o ? s : null,
        draftEnabled: !0,
        originalEnabled: o,
        origin: d.v5.PERK_MODAL,
        owner: d.AY.PREVIEW_PANEL,
    }),
        (0, r.nf)(r.HP.GUILD_THEME_PREVIEW, { guildId: t, from: r.dJ.PERK_MODAL }),
        e?.();
}
