t.d(e, { A: () => o });
var l = t(582128),
    a = t(429913),
    u = t(454908);
function o(n) {
    let { applicationId: e, gameId: t } = n,
        o = (0, a.h)(null == t ? e : void 0),
        i = null == t && null != e && null == o,
        r = l.useMemo(() => (null != t ? t : null == o ? null : o.getCanonicalGameId()), [t, o]),
        { data: d, isLoading: s } = (0, u.I)(r);
    return { gameId: r, gameRecord: d ?? null, isLoading: i || s };
}
