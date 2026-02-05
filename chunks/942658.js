n.d(t, { B: () => a });
var r = n(311907),
    s = n(71393),
    l = n(60175),
    i = n(652215);
function a(e) {
    let { guildId: t } = e;
    return (0, r.bG)([l.A, s.A], () => {
        let e = l.A.get(t),
            n = e?.guild,
            r = s.A.getGuild(t),
            a = r?.verificationLevel,
            o = n?.verification_level;
        return a ?? o ?? i.PvD.NONE;
    }, [t]);
}
