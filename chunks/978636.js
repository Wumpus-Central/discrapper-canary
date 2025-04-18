n.d(t, {
    JL: () => a,
    i9: () => i
}),
    n(388685);
let r = (0, n(290486).U)(() => ({ hasFiredFromMessage: new Set() }));
function i(e) {
    let { hasFiredFromMessage: t } = r.getState();
    t.add(e), r.setState({ hasFiredFromMessage: t });
}
function a(e) {
    let { hasFiredFromMessage: t } = r.getState();
    return t.has(e);
}
