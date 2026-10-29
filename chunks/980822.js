a.d(n, { A: () => i });
var u = a(582128),
    d = a(429913),
    e = a(454908);
function i(l) {
    let { applicationId: n, gameId: a } = l,
        i = (0, d.h)(null == a ? n : void 0),
        s = null == a && null != n && null == i,
        c = u.useMemo(() => (null != a ? a : null == i ? null : i.getCanonicalGameId()), [a, i]),
        { data: o, isLoading: t } = (0, e.I)(c);
    return { gameId: c, gameRecord: o ?? null, isLoading: s || t };
}
