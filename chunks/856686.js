s.d(t, { S: () => a });
var r = s(353640);
let l = { skus: [], currentPage: 0, totalCount: 0, hasMorePages: !1, searchError: null, isFetchingResults: !1 },
    a = (0, r.v)((e) => ({
        ...l,
        onSetResponse: (t) => {
            let s = Math.floor(t.pageOffset / t.pageLimit) + 1;
            e({ ...t, currentPage: s });
        },
        setSearchError: (t) => {
            e({ ...l, searchError: t });
        },
        setIsFetchingResults: (t) => {
            e({ isFetchingResults: t });
        },
        clearError: () => {
            e({ searchError: null });
        },
        clear: () => {
            e({ ...l });
        },
    }));
