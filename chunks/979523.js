var r = n(793943),
    l = n(976860),
    s = n(808728),
    i = n(71393),
    a = n(476931),
    c = n(673642),
    d = n(909289),
    u = n(875317);
function o(t) {
    return s.A.getDefaultChannel(t)?.id;
}
n.d(
    e,
    {},
    {
        m: function (t, e) {
            (0, l.uh)(t, o(t));
            let n = i.A.getGuild(t)?.guildTheme,
                s = n?.themeSettings ?? null,
                b = n?.enabled === !0 && (0, u.Om)(s);
            ((0, c.tA)({
                guildId: t,
                draft: b ? s : (0, a.Qy)(),
                original: b ? s : null,
                draftEnabled: !0,
                originalEnabled: b,
                origin: d.v5.PERK_MODAL,
                owner: d.AY.PREVIEW_PANEL,
            }),
                (0, r.nf)(r.HP.GUILD_THEME_PREVIEW, { guildId: t, from: r.dJ.PERK_MODAL }),
                e?.());
        },
        q: o,
    },
);
