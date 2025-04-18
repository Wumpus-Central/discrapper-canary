n.d(t, {
    Vb: () => l,
    Yk: () => o,
    zP: () => s
});
var r = n(290486),
    i = n(731965);
let a = (0, r.U)((e) => ({ inDndMode: !1 }));
function o(e) {
    (0, i.j)(() => a.setState({ inDndMode: e }));
}
function s() {
    return a((e) => e.inDndMode);
}
function l() {
    return a.getState().inDndMode;
}
