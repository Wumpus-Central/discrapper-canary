"use strict";
n.d(t, { LS: () => h, LW: () => d, Om: () => c, Uk: () => r, bM: () => u });
var i = n(499867),
    l = n(265690),
    s = n(121894);
let r = -1,
    a = Object.freeze({
        inspectedExpressionPosition: { rowIndex: 0, columnIndex: 0 },
        hasInteracted: !1,
        activeCategoryIndex: 0,
        searchPlaceholder: null,
        bottomPosition: null,
    });
function o() {
    let e = (0, l.h)()((0, i.eh)((e) => a));
    return {
        useStore: e,
        getState: () => e.getState(),
        subscribe: (t, n) => e.subscribe(t, n),
        setInspectedExpressionPosition: (t, n, i) => {
            (0, s.r)(() =>
                e.setState({
                    inspectedExpressionPosition: { rowIndex: n, columnIndex: t, source: i },
                    hasInteracted: !0,
                }),
            );
        },
        setActiveCategoryIndex: (t) => {
            (0, s.r)(() => e.setState({ activeCategoryIndex: t }));
        },
        setSearchPlaceholder: (t) => {
            (0, s.r)(() => e.setState({ searchPlaceholder: t }));
        },
        resetStoreState: () => {
            (0, s.r)(() => e.setState(a));
        },
        setBottomPosition: (t) => {
            (0, s.r)(() => e.setState({ bottomPosition: t }));
        },
    };
}
let c = o(),
    u = o(),
    d = o(),
    h = o();
