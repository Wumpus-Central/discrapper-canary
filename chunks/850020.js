n.d(t, { K: () => o });
var i = n(73800),
    r = n(442837),
    l = n(271383),
    a = n(346811),
    s = n(4242);
function o(e) {
    let { user: t, guildId: n, location: o = '' } = e,
        { enabled: c } = a.Z.useConfig({ location: o }),
        d = (0, r.e7)([l.ZP], () => (null != n && null != t ? l.ZP.getMember(n, t.id) : null));
    return (0, i.useMemo)(() => {
        var e;
        if (null == t) return;
        let i = (0, s.Pb)(null == d || null == (e = d.collectibles) ? void 0 : e.nameplate);
        return null != n && c && null != i ? i : t.nameplate;
    }, [d, n, c, t]);
}
