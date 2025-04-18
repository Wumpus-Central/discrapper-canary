n.d(t, { a: () => i });
var r = n(818083),
    l = n(215023);
let a = (0, r.B)({
        kind: 'user',
        id: '2025-04_shop_shop_all_perf',
        label: 'Shop All Pagination Experiment',
        defaultConfig: { isPaginationEnabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Pagination enabled',
                config: { isPaginationEnabled: !0 }
            }
        ]
    }),
    i = (e) => {
        let { isPaginationEnabled: t } = a.useExperiment({ location: e });
        return {
            isPaginationEnabled: t,
            categoriesPerPage: l.kN
        };
    };
