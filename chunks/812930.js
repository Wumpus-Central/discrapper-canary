n.d(t, { A: () => s }), n(938796);
var r = n(665260),
    i = n(427930),
    a = n(652215);
function s(e) {
    var t;
    return !(
        e.type !== a.lAJ.DEFAULT ||
        null != e.poll ||
        (0, r.Lt)(null != (t = e.flags) ? t : 0, a.pr7.EPHEMERAL) ||
        ("messageReference" in e ? (0, i.A)(e) : (0, i.m)(e))
    );
}
