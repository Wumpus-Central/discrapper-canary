r.d(t, { S: () => i });
var l = r(196765);
let s = { skus: [], currentPage: 0, totalCount: 0, hasMorePages: !1, searchError: null, isFetchingResults: !1 },
    i = (0, l.v)((e) => ({
        ...s,
        onSetResponse: (t) => {
            let r = Math.floor(t.pageOffset / t.pageLimit) + 1;
            e({ ...t, currentPage: r });
        },
        setSearchError: (t) => {
            e({ ...s, searchError: t });
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
