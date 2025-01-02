n.d(t, {
    i: function () {
        return a;
    }
});
var l = n(442837),
    i = n(430824),
    s = n(944163),
    r = n(981631);
function a(e) {
    let { guildId: t } = e;
    return (0, l.e7)(
        [s.Z, i.Z],
        () => {
            var e;
            let n = s.Z.get(t),
                l = null == n ? void 0 : n.guild,
                a = i.Z.getGuild(t),
                o = null == a ? void 0 : a.verificationLevel,
                d = null == l ? void 0 : l.verification_level;
            return null !== (e = null != o ? o : d) && void 0 !== e ? e : r.sFg.NONE;
        },
        [t]
    );
}
