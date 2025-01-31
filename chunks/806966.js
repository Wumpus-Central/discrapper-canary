n.d(t, {
    Wq: () => d,
    Xn: () => f,
    ZN: () => c,
    c: () => s,
    kJ: () => u
});
var i = n(877124),
    r = n(65400),
    a = n(731965);
let s = -1,
    o = Object.freeze({
        inspectedExpressionPosition: {
            rowIndex: 0,
            columnIndex: 0
        },
        activeCategoryIndex: 0,
        searchPlaceholder: null,
        bottomPosition: null
    });
function l() {
    let e = (0, r.F)()((0, i.XR)((e) => o)),
        t = () => e.getState(),
        n = (t, n, i) => {
            (0, a.j)(() =>
                e.setState({
                    inspectedExpressionPosition: {
                        rowIndex: n,
                        columnIndex: t,
                        source: i
                    }
                })
            );
        },
        s = (t) => {
            (0, a.j)(() => e.setState({ activeCategoryIndex: t }));
        },
        l = (t) => {
            (0, a.j)(() => e.setState({ searchPlaceholder: t }));
        },
        u = (t) => {
            (0, a.j)(() => e.setState({ bottomPosition: t }));
        },
        c = () => {
            (0, a.j)(() => e.setState(o));
        },
        d = (t, n) => e.subscribe(t, n);
    return {
        useStore: e,
        getState: t,
        subscribe: d,
        setInspectedExpressionPosition: n,
        setActiveCategoryIndex: s,
        setSearchPlaceholder: l,
        resetStoreState: c,
        setBottomPosition: u
    };
}
let u = l(),
    c = l(),
    d = l(),
    f = l();
