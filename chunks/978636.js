n.d(t, {
    JL: () => o,
    i9: () => i
}),
    n(47120);
let r = (0, n(230383).U)(() => ({ hasFiredFromMessage: new Set() }));
function i(e) {
    let { hasFiredFromMessage: t } = r.getState();
    t.add(e), r.setState({ hasFiredFromMessage: t });
}
function o(e) {
    let { hasFiredFromMessage: t } = r.getState();
    return t.has(e);
}
