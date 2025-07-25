(n.d(t, {
    QH: () => l,
    Z7: () => s,
    yN: () => i
}),
    n(781311));
let r = (0, n(972959).H)(() => ({
    query: '',
    isActive: !1,
    selected: null
}));
function i(e) {
    r.setState({ query: e });
}
function l(e) {
    r.setState({ isActive: e });
}
function s() {
    return r.useField('query');
}
