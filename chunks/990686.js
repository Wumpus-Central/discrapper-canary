n.d(t, { i: () => u });
var i = n(442837),
    l = n(430824),
    r = n(944163),
    s = n(981631);
function u(e) {
    let { guildId: t } = e;
    return (0, i.e7)(
        [r.Z, l.Z],
        () => {
            var e;
            let n = r.Z.get(t),
                i = null == n ? void 0 : n.guild,
                u = l.Z.getGuild(t),
                o = null == u ? void 0 : u.verificationLevel,
                a = null == i ? void 0 : i.verification_level;
            return null !== (e = null != o ? o : a) && void 0 !== e ? e : s.sFg.NONE;
        },
        [t]
    );
}
