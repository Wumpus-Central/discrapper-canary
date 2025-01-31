n.d(t, { Z: () => u }), n(47120);
var i = n(388123),
    r = n(697426),
    a = n(375954),
    s = n(710111);
function o(e, t) {
    let n;
    for (let i of e) {
        let e = l(i.message, t);
        if (null != e) {
            n = e;
            break;
        }
    }
    return n;
}
function l(e, t) {
    var n;
    return null == e ? void 0 : null === (n = e.soundboardSounds) || void 0 === n ? void 0 : n.find((e) => String(e.sound_id) === String(t));
}
function u(e, t, n) {
    var u, c, d;
    let f = a.Z.getMessage(e, t);
    if (null == f) return;
    let _ = (null == f ? void 0 : null === (u = f.messageReference) || void 0 === u ? void 0 : u.type) === i.U.FORWARD ? o(null !== (c = null == f ? void 0 : f.messageSnapshots) && void 0 !== c ? c : [], n) : l(f, n);
    if (null != _) return (0, r.o3)(_, null !== (d = _.guild_id) && void 0 !== d ? d : s.X8);
}
