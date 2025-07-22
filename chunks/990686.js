n.d(t, { i: () => o });
var r = n(442837),
    i = n(430824),
    l = n(944163),
    s = n(981631);
function o(e) {
    let { guildId: t } = e;
    return (0, r.e7)(
        [l.Z, i.Z],
        () => {
            var e;
            let n = l.Z.get(t),
                r = null == n ? void 0 : n.guild,
                o = i.Z.getGuild(t),
                a = null == o ? void 0 : o.verificationLevel,
                c = null == r ? void 0 : r.verification_level;
            return null != (e = null != a ? a : c) ? e : s.sFg.NONE;
        },
        [t]
    );
}
