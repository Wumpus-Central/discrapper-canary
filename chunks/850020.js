n.d(t, { K: () => l });
var r = n(647438),
    i = n(442837),
    a = n(271383),
    o = n(346811),
    s = n(4242);
function l(e) {
    let { user: t, guildId: n, location: l = "" } = e,
        { enabled: c } = o.Z.useConfig({ location: l }),
        u = (0, i.e7)([a.ZP], () => (null != n && null != t ? a.ZP.getMember(n, t.id) : null));
    return (0, r.useMemo)(() => {
        var e;
        if (null == t) return;
        let r = (0, s.Pb)(null == u || null == (e = u.collectibles) ? void 0 : e.nameplate);
        return null != n && c && null != r ? r : t.nameplate;
    }, [u, n, c, t]);
}
