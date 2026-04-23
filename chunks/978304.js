n.d(t, { A: () => o });
var i = n(64700),
    s = n(311907),
    l = n(824552),
    a = n(875444),
    r = n(546183);
function o(e, t) {
    let n = (0, s.bG)([r.default], () => r.default.getFetchState()),
        o = (0, s.bG)([r.default], () =>
            e ? r.default.getNewestTokensForNonChildrenApplications() : r.default.getNewestTokens(),
        ),
        d = i.useMemo(() => (null == o ? [] : o.filter((e) => (0, a.A)(e.application)).map((e) => e.application)), [o]);
    return (
        i.useEffect(() => {
            t || l.A.fetch();
        }, [t]),
        { showLoadingIndicator: n !== r.FetchState.FETCHED && (null == o || 0 === o.length), slayerSdkApplications: d }
    );
}
