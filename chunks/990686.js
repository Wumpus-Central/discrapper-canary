n.d(t, { i: () => s });
var r = n(442837),
    l = n(430824),
    i = n(944163),
    a = n(981631);
function s(e) {
    let { guildId: t } = e;
    return (0, r.e7)([i.Z, l.Z], () => {
        var e;
        let n = i.Z.get(t),
            r = null == n ? void 0 : n.guild,
            s = l.Z.getGuild(t),
            o = null == s ? void 0 : s.verificationLevel,
            c = null == r ? void 0 : r.verification_level;
        return null != (e = null != o ? o : c) ? e : a.sFg.NONE;
    }, [t]);
}
