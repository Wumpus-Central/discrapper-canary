n.d(t, {
    Vb: () => l,
    Yk: () => s,
    zP: () => o
});
var i = n(15729),
    r = n(731965);
let a = (0, i.U)((e) => ({ inDndMode: !1 }));
function s(e) {
    (0, r.j)(() => a.setState({ inDndMode: e }));
}
function o() {
    return a((e) => e.inDndMode);
}
function l() {
    return a.getState().inDndMode;
}
