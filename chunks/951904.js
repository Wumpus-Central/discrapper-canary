n.d(t, { a: () => a });
var r = n(818083),
    l = n(215023);
let i = (0, r.B)({
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
    a = (e) => {
        let { isPaginationEnabled: t } = i.useExperiment({ location: e });
        return {
            isPaginationEnabled: t,
            categoriesPerPage: l.kN
        };
    };
