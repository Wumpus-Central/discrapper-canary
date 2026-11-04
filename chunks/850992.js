var i = n(537812),
    r = n(882035),
    a = n(121894);
let s = Object.freeze({
    inspectedExpressionPosition: { rowIndex: 0, columnIndex: 0 },
    hasInteracted: !1,
    activeCategoryIndex: 0,
    searchPlaceholder: null,
    bottomPosition: null,
    analyticsId: null,
});
function l() {
    let e = (0, r.h)()((0, i.eh)((e) => s));
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
            (0, a.r)(() =>
                e.setState({
                    inspectedExpressionPosition: { rowIndex: n, columnIndex: t, source: i },
                    hasInteracted: !0,
                }),
            );
        },
        setActiveCategoryIndex: function (t) {
            (0, a.r)(() => e.setState({ activeCategoryIndex: t }));
        },
        setSearchPlaceholder: function (t) {
            (0, a.r)(() => e.setState({ searchPlaceholder: t }));
        },
        resetStoreState: function () {
            (0, a.r)(() => e.setState(s));
        },
        setBottomPosition: function (t) {
            (0, a.r)(() => e.setState({ bottomPosition: t }));
        },
        setAnalyticsId: function (t) {
            (0, a.r)(() => e.setState({ analyticsId: t }));
        },
        getAnalyticsId: function () {
            return t().analyticsId;
        },
    };
}
let o = l(),
    d = l(),
    c = l(),
    u = l();
n.d(t, {}, { LS: u, LW: c, Om: o, bM: d });
