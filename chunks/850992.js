"use strict";
n.d(t, { LS: () => _, LW: () => d, Om: () => u, Uk: () => s, bM: () => c });
var r = n(499867),
    i = n(265690),
    a = n(121894);
let s = -1,
    o = Object.freeze({
        inspectedExpressionPosition: { rowIndex: 0, columnIndex: 0 },
        activeCategoryIndex: 0,
        searchPlaceholder: null,
        bottomPosition: null,
    });
function l() {
    let e = (0, i.h)()((0, r.eh)((e) => o)),
        t = () => e.getState(),
        n = (t, n, r) => {
            (0, a.r)(() => e.setState({ inspectedExpressionPosition: { rowIndex: n, columnIndex: t, source: r } }));
        },
        s = (t) => {
            (0, a.r)(() => e.setState({ activeCategoryIndex: t }));
        },
        l = (t) => {
            (0, a.r)(() => e.setState({ searchPlaceholder: t }));
        },
        u = (t) => {
            (0, a.r)(() => e.setState({ bottomPosition: t }));
        },
        c = () => {
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
        resetStoreState: c,
        setBottomPosition: u,
    };
}
let u = l(),
    c = l(),
    d = l(),
    _ = l();
