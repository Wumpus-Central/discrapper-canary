n.d(t, { Z: () => u }), n(47120);
var i = n(388123),
    r = n(697426),
    a = n(375954),
    s = n(710111);
function o(e, t) {
    let n;
    for (let r of e) {
        var i;
        let e = l(null === (i = r.message) || void 0 === i ? void 0 : i.soundboardSounds, t);
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
function u(e, t, n, u) {
    var c, d, f, _;
    let p = l(u, n);
    if (null != p) return (0, r.o3)(p, null !== (d = p.guild_id) && void 0 !== d ? d : s.X8);
    let h = a.Z.getMessage(e, t);
    if (null != h && null != (p = (null == h ? void 0 : null === (c = h.messageReference) || void 0 === c ? void 0 : c.type) === i.U.FORWARD ? o(null !== (f = null == h ? void 0 : h.messageSnapshots) && void 0 !== f ? f : [], n) : l(null == h ? void 0 : h.soundboardSounds, n))) return (0, r.o3)(p, null !== (_ = p.guild_id) && void 0 !== _ ? _ : s.X8);
}
