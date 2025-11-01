n.d(t, { K: () => a });
var r = n(647438),
    i = n(442837),
    o = n(271383),
    l = n(4242);
function a(e) {
    let { user: t, guildId: n } = e,
        a = (0, i.e7)([o.ZP], () => (null != n && null != t ? o.ZP.getMember(n, t.id) : null));
    return (0, r.useMemo)(() => {
        var e;
        if (null == t) return;
        let r = (0, l.Pb)(null == a || null == (e = a.collectibles) ? void 0 : e.nameplate);
        return null != n && null != r ? r : t.nameplate;
    }, [a, n, t]);
}
