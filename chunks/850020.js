n.d(t, { K: () => s });
var r = n(647438),
    i = n(442837),
    o = n(271383),
    l = n(346811),
    a = n(4242);
function s(e) {
    let { user: t, guildId: n, location: s = "" } = e,
        { enabled: c } = l.Z.useConfig({ location: s }),
        u = (0, i.e7)([o.ZP], () => (null != n && null != t ? o.ZP.getMember(n, t.id) : null));
    return (0, r.useMemo)(() => {
        var e;
        if (null == t) return;
        let r = (0, a.Pb)(null == u || null == (e = u.collectibles) ? void 0 : e.nameplate);
        return null != n && c && null != r ? r : t.nameplate;
    }, [u, n, c, t]);
}
