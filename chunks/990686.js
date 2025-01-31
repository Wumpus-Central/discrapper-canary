n.d(t, { i: () => o });
var i = n(442837),
    l = n(430824),
    r = n(944163),
    s = n(981631);
function o(e) {
    let { guildId: t } = e;
    return (0, i.e7)(
        [r.Z, l.Z],
        () => {
            var e;
            let n = r.Z.get(t),
                i = null == n ? void 0 : n.guild,
                o = l.Z.getGuild(t),
                a = null == o ? void 0 : o.verificationLevel,
                u = null == i ? void 0 : i.verification_level;
            return null !== (e = null != a ? a : u) && void 0 !== e ? e : s.sFg.NONE;
        },
        [t]
    );
}
