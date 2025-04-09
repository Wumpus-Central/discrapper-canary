r.d(t, { i: () => l });
var n = r(442837),
    i = r(430824),
    o = r(944163),
    s = r(981631);
function l(e) {
    let { guildId: t } = e;
    return (0, n.e7)(
        [o.Z, i.Z],
        () => {
            var e;
            let r = o.Z.get(t),
                n = null == r ? void 0 : r.guild,
                l = i.Z.getGuild(t),
                c = null == l ? void 0 : l.verificationLevel,
                a = null == n ? void 0 : n.verification_level;
            return null != (e = null != c ? c : a) ? e : s.sFg.NONE;
        },
        [t]
    );
}
