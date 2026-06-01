n.d(e, { m: () => u, q: () => d });
var r = n(793943),
    s = n(976860),
    l = n(808728),
    i = n(476931),
    a = n(673642),
    c = n(759532);
function d(t) {
    return l.Ay.getDefaultChannel(t)?.id;
}
function u(t, e) {
    (0, s.uh)(t, d(t)),
        (0, a.tA)({
            guildId: t,
            draft: (0, i.Qy)(),
            original: null,
            draftEnabled: !0,
            originalEnabled: !1,
            origin: c.v5.PERK_MODAL,
            owner: c.AY.PREVIEW_PANEL,
        }),
        (0, r.nf)(r.HP.GUILD_THEME_PREVIEW, { guildId: t, from: r.dJ.PERK_MODAL }),
        e?.();
}
