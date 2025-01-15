n.d(t, {
    QH: function () {
        return r;
    },
    Z7: function () {
        return o;
    },
    yN: function () {
        return i;
    }
});
let s = (0, n(972959).H)(() => ({
    query: '',
    isActive: !1,
    selected: null
}));
function i(e) {
    s.setState({ query: e });
}
function r(e) {
    s.setState({ isActive: e });
}
function o() {
    return s.useField('query');
}
