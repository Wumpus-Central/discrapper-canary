n.d(t, {
    QH: () => l,
    Z7: () => r,
    yN: () => s
});
let i = (0, n(972959).H)(() => ({
    query: '',
    isActive: !1,
    selected: null
}));
function s(e) {
    i.setState({ query: e });
}
function l(e) {
    i.setState({ isActive: e });
}
function r() {
    return i.useField('query');
}
