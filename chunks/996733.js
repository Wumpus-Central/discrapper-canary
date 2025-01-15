s.d(t, {
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
let n = (0, s(972959).H)(() => ({
    query: '',
    isActive: !1,
    selected: null
}));
function i(e) {
    n.setState({ query: e });
}
function r(e) {
    n.setState({ isActive: e });
}
function o() {
    return n.useField('query');
}
