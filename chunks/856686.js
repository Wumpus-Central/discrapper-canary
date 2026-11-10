var l = r(196765);
let s = {
        skus: [],
        currentPage: 0,
        totalCount: 0,
        hasMorePages: !1,
        searchError: null,
        searchErrorReason: null,
        isFetchingResults: !1,
        resultsSearchQuery: null,
        resultsRequestId: null,
    },
    i = (0, l.v)((e, t) => ({
        ...s,
        latestRequestId: 0,
        startRequest: () => {
            let r = t().latestRequestId + 1;
            return (e({ latestRequestId: r, isFetchingResults: !0 }), r);
        },
        onSetResponse: (t, r, l) => {
            let s = Math.floor(t.pageOffset / t.pageLimit) + 1;
            e({ ...t, currentPage: s, resultsSearchQuery: r, resultsRequestId: l, searchErrorReason: null });
        },
        setSearchError: (t, r, l, i) => {
            e({ ...s, searchError: t, searchErrorReason: l, resultsSearchQuery: r, resultsRequestId: i });
        },
        setIsFetchingResults: (t) => {
            e({ isFetchingResults: t });
        },
        clearError: () => {
            e({ searchError: null });
        },
        clear: () => {
            e({ ...s });
        },
    }));
r.d(t, {}, { S: i });
