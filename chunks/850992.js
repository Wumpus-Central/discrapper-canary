"use strict";
n.d(t, { LS: () => h, LW: () => d, Om: () => c, Uk: () => a, bM: () => u });
var l = n(499867),
    i = n(265690),
    s = n(121894);
let a = -1,
    r = Object.freeze({
        inspectedExpressionPosition: { rowIndex: 0, columnIndex: 0 },
        hasInteracted: !1,
        activeCategoryIndex: 0,
        searchPlaceholder: null,
        bottomPosition: null,
    });
function o() {
    let e = (0, i.h)()((0, l.eh)((e) => r));
    return {
        useStore: e,
        getState: () => e.getState(),
        subscribe: (t, n) => e.subscribe(t, n),
        setInspectedExpressionPosition: (t, n, l) => {
            (0, s.r)(() =>
                e.setState({
                    inspectedExpressionPosition: { rowIndex: n, columnIndex: t, source: l },
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
            (0, s.r)(() => e.setState(r));
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
