n.d(t, { i: () => s });
var r = n(442837),
    i = n(430824),
    l = n(944163),
    o = n(981631);
function s(e) {
    let { guildId: t } = e;
    return (0, r.e7)(
        [l.Z, i.Z],
        () => {
            var e;
            let n = l.Z.get(t),
                r = null == n ? void 0 : n.guild,
                s = i.Z.getGuild(t),
                a = null == s ? void 0 : s.verificationLevel,
                c = null == r ? void 0 : r.verification_level;
            return null != (e = null != a ? a : c) ? e : o.sFg.NONE;
        },
        [t]
    );
}
