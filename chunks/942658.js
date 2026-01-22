l.d(t, {
    B: () => a,
});
var n = l(311907),
    r = l(71393),
    s = l(60175),
    i = l(652215);

function a(e) {
    let { guildId: t } = e;
    return (0, n.bG)([s.A, r.A], () => {
        var e;
        let l = s.A.get(t),
            n = null == l ? void 0 : l.guild,
            a = r.A.getGuild(t),
            o = null == a ? void 0 : a.verificationLevel,
            c = null == n ? void 0 : n.verification_level;
        return null != (e = null != o ? o : c) ? e : i.PvD.NONE;
    }, [t]);
}
