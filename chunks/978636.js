n.d(t, {
    JL: () => a,
    i9: () => r
}),
    n(47120);
let i = (0, n(15729).U)(() => ({ hasFiredFromMessage: new Set() }));
function r(e) {
    let { hasFiredFromMessage: t } = i.getState();
    t.add(e), i.setState({ hasFiredFromMessage: t });
}
function a(e) {
    let { hasFiredFromMessage: t } = i.getState();
    return t.has(e);
}
