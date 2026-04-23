r.d(t, { B: () => s });
var n = r(311907),
    i = r(71393),
    l = r(60175),
    a = r(652215);
function s(e) {
    let { guildId: t } = e;
    return (0, n.bG)([l.A, i.A], () => {
        let e = l.A.get(t),
            r = e?.guild,
            n = i.A.getGuild(t),
            s = n?.verificationLevel,
            o = r?.verification_level;
        return s ?? o ?? a.PvD.NONE;
    }, [t]);
}
