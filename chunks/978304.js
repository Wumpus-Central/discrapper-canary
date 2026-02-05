n.d(t, { A: () => o });
var i = n(64700),
    s = n(311907),
    r = n(824552),
    a = n(875444),
    l = n(546183);
function o(e, t) {
    let n = (0, s.bG)([l.default], () => l.default.getFetchState()),
        o = (0, s.bG)([l.default], () =>
            e ? l.default.getNewestTokensForNonChildrenApplications() : l.default.getNewestTokens(),
        ),
        c = i.useMemo(() => (null == o ? [] : o.filter((e) => (0, a.A)(e.application)).map((e) => e.application)), [o]);
    return (
        i.useEffect(() => {
            t || r.A.fetch();
        }, [t]),
        { showLoadingIndicator: n !== l.FetchState.FETCHED && (null == o || 0 === o.length), slayerSdkApplications: c }
    );
}
