t.d(n, {
    i: function () {
        return o;
    }
});
var i = t(442837),
    r = t(430824),
    l = t(944163),
    s = t(981631);
function o(e) {
    let { guildId: n } = e;
    return (0, i.e7)(
        [l.Z, r.Z],
        () => {
            var e;
            let t = l.Z.get(n),
                i = null == t ? void 0 : t.guild,
                o = r.Z.getGuild(n),
                u = null == o ? void 0 : o.verificationLevel,
                c = null == i ? void 0 : i.verification_level;
            return null !== (e = null != u ? u : c) && void 0 !== e ? e : s.sFg.NONE;
        },
        [n]
    );
}
