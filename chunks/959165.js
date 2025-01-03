n(47120);
var i = n(900849),
    r = n(762692),
    l = n(331114),
    a = n(356164),
    s = n(164991);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class c {}
t.Z = new (class e extends c {
    constructor(...e) {
        super(...e),
            o(this, 'loadMoreCategoryResults', async (e) => {
                let { query: t, categoryId: n, languageCode: l, offset: s } = e;
                if (
                    !a.Z.getIsFetching({
                        query: t,
                        categoryId: n,
                        languageCode: l
                    })
                )
                    a.Z.getIsInitialFetchComplete({
                        query: t,
                        categoryId: n,
                        languageCode: l
                    }) &&
                        (i.qn({
                            withCounts: !1,
                            offset: s
                        }),
                        await r.Z.fetchSearchResults(t, {
                            categoryId: n,
                            languageCode: l,
                            offset: s,
                            limit: 12,
                            withCounts: !1
                        }));
            }),
            o(this, 'loadCategoryResults', async (e) => {
                let { query: t, categoryId: n, languageCode: l } = e,
                    s = a.Z.getIsFetching({
                        query: t,
                        categoryId: n,
                        languageCode: l
                    }),
                    o = a.Z.getIsInitialFetchComplete({
                        query: t,
                        categoryId: n,
                        languageCode: l
                    });
                !s &&
                    !o &&
                    (i.qn({
                        withCounts: !1,
                        offset: 0
                    }),
                    await r.Z.fetchSearchResults(t, {
                        categoryId: n,
                        languageCode: l,
                        offset: 0,
                        limit: 12,
                        withCounts: !1
                    }));
            }),
            o(this, 'loadCategoryResultsAndCounts', async (e) => {
                let { query: t, loadId: n, categoryId: a, languageCode: o } = e;
                if ('' === t.trim()) return;
                let c = l.Z.getIsFetchingCounts(t),
                    d = l.Z.getIsFetchingCounts(t);
                !c &&
                    !d &&
                    (s.Z.setState({
                        fetchedQuery: t,
                        resultsQuery: ''
                    }),
                    i.tI(n, a),
                    i.qn({
                        withCounts: !0,
                        offset: 0
                    }),
                    await r.Z.fetchSearchResults(t, {
                        categoryId: a,
                        languageCode: o,
                        offset: 0,
                        limit: 12,
                        withCounts: !0
                    }),
                    s.Z.setState({ resultsQuery: t }));
            });
    }
})();
