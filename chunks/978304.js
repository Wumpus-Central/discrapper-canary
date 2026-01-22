n.d(t, { A: () => l });
var r = n(64700),
    i = n(311907),
    a = n(824552),
    s = n(875444),
    o = n(546183);
function l(e, t) {
    let n = (0, i.bG)([o.default], () => o.default.getFetchState()),
        l = (0, i.bG)([o.default], () =>
            e ? o.default.getNewestTokensForNonChildrenApplications() : o.default.getNewestTokens(),
        ),
        c = r.useMemo(() => (null == l ? [] : l.filter((e) => (0, s.A)(e.application)).map((e) => e.application)), [l]);
    return (
        r.useEffect(() => {
            t || a.A.fetch();
        }, [t]),
        {
            showLoadingIndicator: n !== o.FetchState.FETCHED && (null == l || 0 === l.length),
            slayerSdkApplications: c,
        }
    );
}
