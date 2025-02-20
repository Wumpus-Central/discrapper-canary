n.d(t, { Z: () => c }), n(47120);
var r = n(388123),
    i = n(697426),
    o = n(375954),
    a = n(710111);
function s(e, t) {
    let n;
    for (let i of e) {
        var r;
        let e = l(null === (r = i.message) || void 0 === r ? void 0 : r.soundboardSounds, t);
        if (null != e) {
            n = e;
            break;
        }
    }
    return n;
}
function l(e, t) {
    return null == e ? void 0 : e.find((e) => String(e.sound_id) === String(t));
}
function c(e, t, n, c) {
    var u, d, f, p;
    let _ = l(c, n);
    if (null != _) return (0, i.o3)(_, null !== (d = _.guild_id) && void 0 !== d ? d : a.X8);
    let h = o.Z.getMessage(e, t);
    if (null != h && null != (_ = (null == h ? void 0 : null === (u = h.messageReference) || void 0 === u ? void 0 : u.type) === r.U.FORWARD ? s(null !== (f = null == h ? void 0 : h.messageSnapshots) && void 0 !== f ? f : [], n) : l(null == h ? void 0 : h.soundboardSounds, n))) return (0, i.o3)(_, null !== (p = _.guild_id) && void 0 !== p ? p : a.X8);
}
