n.d(t, { i: () => a });
var r = n(442837),
    l = n(430824),
    i = n(944163),
    s = n(981631);
function a(e) {
    let { guildId: t } = e;
    return (0, r.e7)([i.Z, l.Z], () => {
        var e;
        let n = i.Z.get(t),
            r = null == n ? void 0 : n.guild,
            a = l.Z.getGuild(t),
            o = null == a ? void 0 : a.verificationLevel,
            c = null == r ? void 0 : r.verification_level;
        return null != (e = null != o ? o : c) ? e : s.sFg.NONE;
    }, [t]);
}
