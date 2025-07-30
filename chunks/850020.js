n.d(t, { K: () => s });
var r = n(73800),
    i = n(442837),
    l = n(271383),
    a = n(346811),
    o = n(4242);
function s(e) {
    let { user: t, guildId: n, location: s = '' } = e,
        { enabled: c } = a.Z.useConfig({ location: s }),
        u = (0, i.e7)([l.ZP], () => (null != n && null != t ? l.ZP.getMember(n, t.id) : null));
    return (0, r.useMemo)(() => {
        var e;
        if (null == t) return;
        let r = (0, o.Pb)(null == u || null == (e = u.collectibles) ? void 0 : e.nameplate);
        return null != n && c && null != r ? r : t.nameplate;
    }, [u, n, c, t]);
}
