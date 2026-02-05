n.d(t, { A: () => o });
var i = n(311907),
    l = n(961350),
    a = n(3137),
    s = n(559908);
function r(e, t) {
    return e === t || (e?.channelId === t?.channelId && e?.value === t?.value && e?.multiplier === t?.multiplier);
}
function o(e) {
    let t = (0, i.bG)([a.A], () => !!a.A.isEnabled() && a.A.combosEnabled);
    return (0, i.bG)([s.Ay, l.default], () => (t ? s.Ay.getUserCombo(l.default.getId(), e) : void 0), [e, t], r);
}
