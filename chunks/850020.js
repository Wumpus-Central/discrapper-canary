n.d(t, { K: () => s });
var r = n(473749),
    i = n(442837),
    l = n(271383),
    a = n(4242);
function s(e) {
    let { user: t, guildId: n } = e,
        s = (0, i.e7)([l.ZP], () => (null != n && null != t ? l.ZP.getMember(n, t.id) : null));
    return (0, r.useMemo)(() => {
        var e;
        if (null == t) return;
        let r = (0, a.Pb)(null == s || null == (e = s.collectibles) ? void 0 : e.nameplate);
        return null != n && null != r ? r : t.nameplate;
    }, [s, n, t]);
}
