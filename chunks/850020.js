n.d(t, { K: () => c });
var r = n(73800),
    a = n(442837),
    o = n(271383),
    l = n(346811),
    i = n(4242);
function c(e) {
    let { user: t, guildId: n, location: c = '' } = e,
        { enabled: u } = l.Z.useConfig({ location: c }),
        d = (0, a.e7)([o.ZP], () => (null != n && null != t ? o.ZP.getMember(n, t.id) : null));
    return (0, r.useMemo)(() => {
        var e;
        if (null == t) return;
        let r = (0, i.Pb)(null == d || null == (e = d.collectibles) ? void 0 : e.nameplate);
        return null != n && u && null != r ? r : t.nameplate;
    }, [d, n, u, t]);
}
