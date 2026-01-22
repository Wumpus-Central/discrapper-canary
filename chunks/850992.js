n.d(t, {
    LS: () => f,
    LW: () => d,
    Om: () => c,
    Uk: () => s,
    bM: () => u,
});
var r = n(499867),
    i = n(265690),
    a = n(121894);
let s = -1,
    o = Object.freeze({
        inspectedExpressionPosition: {
            rowIndex: 0,
            columnIndex: 0,
        },
        activeCategoryIndex: 0,
        searchPlaceholder: null,
        bottomPosition: null,
    });

function l() {
    let e = (0, i.h)()((0, r.eh)((e) => o)),
        t = () => e.getState(),
        n = (t, n, r) => {
            (0, a.r)(() =>
                e.setState({
                    inspectedExpressionPosition: {
                        rowIndex: n,
                        columnIndex: t,
                        source: r,
                    },
                }),
            );
        },
        s = (t) => {
            (0, a.r)(() =>
                e.setState({
                    activeCategoryIndex: t,
                }),
            );
        },
        l = (t) => {
            (0, a.r)(() =>
                e.setState({
                    searchPlaceholder: t,
                }),
            );
        },
        c = (t) => {
            (0, a.r)(() =>
                e.setState({
                    bottomPosition: t,
                }),
            );
        },
        u = () => {
            (0, a.r)(() => e.setState(o));
        },
        d = (t, n) => e.subscribe(t, n);
    return {
        useStore: e,
        getState: t,
        subscribe: d,
        setInspectedExpressionPosition: n,
        setActiveCategoryIndex: s,
        setSearchPlaceholder: l,
        resetStoreState: u,
        setBottomPosition: c,
    };
}
let c = l(),
    u = l(),
    d = l(),
    f = l();
