r.d(n, {
    Wq: function () {
        return f;
    },
    Xn: function () {
        return p;
    },
    ZN: function () {
        return d;
    },
    c: function () {
        return s;
    },
    kJ: function () {
        return c;
    }
});
var i = r(877124),
    a = r(65400),
    o = r(731965);
let s = -1,
    l = Object.freeze({
        inspectedExpressionPosition: {
            rowIndex: 0,
            columnIndex: 0
        },
        activeCategoryIndex: 0,
        searchPlaceholder: null,
        bottomPosition: null
    });
function u() {
    let e = (0, a.F)()((0, i.XR)((e) => l)),
        n = () => e.getState(),
        r = (n, r, i) => {
            (0, o.j)(() =>
                e.setState({
                    inspectedExpressionPosition: {
                        rowIndex: r,
                        columnIndex: n,
                        source: i
                    }
                })
            );
        },
        s = (n) => {
            (0, o.j)(() => e.setState({ activeCategoryIndex: n }));
        },
        u = (n) => {
            (0, o.j)(() => e.setState({ searchPlaceholder: n }));
        },
        c = (n) => {
            (0, o.j)(() => e.setState({ bottomPosition: n }));
        },
        d = () => {
            (0, o.j)(() => e.setState(l));
        },
        f = (n, r) => e.subscribe(n, r);
    return {
        useStore: e,
        getState: n,
        subscribe: f,
        setInspectedExpressionPosition: r,
        setActiveCategoryIndex: s,
        setSearchPlaceholder: u,
        resetStoreState: d,
        setBottomPosition: c
    };
}
let c = u(),
    d = u(),
    f = u(),
    p = u();
