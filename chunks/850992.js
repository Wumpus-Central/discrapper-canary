"use strict";
n.d(t, { LS: () => _, LW: () => d, Om: () => u, Uk: () => a, bM: () => c });
var i = n(499867),
    r = n(265690),
    s = n(121894);
let a = -1,
    o = Object.freeze({
        inspectedExpressionPosition: { rowIndex: 0, columnIndex: 0 },
        hasInteracted: !1,
        activeCategoryIndex: 0,
        searchPlaceholder: null,
        bottomPosition: null,
        analyticsId: null,
    });
function l() {
    let e = (0, r.h)()((0, i.eh)((e) => o));
    function t() {
        return e.getState();
    }
    return {
        useStore: e,
        getState: t,
        subscribe: function (t, n) {
            return e.subscribe(t, n);
        },
        setInspectedExpressionPosition: function (t, n, i) {
            (0, s.r)(() =>
                e.setState({
                    inspectedExpressionPosition: { rowIndex: n, columnIndex: t, source: i },
                    hasInteracted: !0,
                }),
            );
        },
        setActiveCategoryIndex: function (t) {
            (0, s.r)(() => e.setState({ activeCategoryIndex: t }));
        },
        setSearchPlaceholder: function (t) {
            (0, s.r)(() => e.setState({ searchPlaceholder: t }));
        },
        resetStoreState: function () {
            (0, s.r)(() => e.setState(o));
        },
        setBottomPosition: function (t) {
            (0, s.r)(() => e.setState({ bottomPosition: t }));
        },
        setAnalyticsId: function (t) {
            (0, s.r)(() => e.setState({ analyticsId: t }));
        },
        getAnalyticsId: function () {
            return t().analyticsId;
        },
    };
}
let u = l(),
    c = l(),
    d = l(),
    _ = l();
