n.d(t, {
    QH: function () {
        return s;
    },
    Z7: function () {
        return r;
    },
    yN: function () {
        return l;
    }
});
let i = (0, n(972959).H)(() => ({
    query: '',
    isActive: !1,
    selected: null
}));
function l(e) {
    i.setState({ query: e });
}
function s(e) {
    i.setState({ isActive: e });
}
function r() {
    return i.useField('query');
}
