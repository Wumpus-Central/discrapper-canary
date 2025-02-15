s.d(t, {
    QH: () => r,
    Z7: () => l,
    yN: () => i
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
function l() {
    return n.useField('query');
}
