n.d(t, { A: () => r }), n(938796);
var i = n(665260),
    l = n(427930),
    a = n(652215);
function r(e) {
    return !(
        e.type !== a.lAJ.DEFAULT ||
        null != e.poll ||
        (0, i.Lt)(e.flags ?? 0, a.pr7.EPHEMERAL) ||
        ("messageReference" in e ? (0, l.A)(e) : (0, l.m)(e))
    );
}
