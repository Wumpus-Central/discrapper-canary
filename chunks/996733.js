s.d(t, {
    QH: () => r,
    Z7: () => a,
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
function a() {
    return n.useField('query');
}
