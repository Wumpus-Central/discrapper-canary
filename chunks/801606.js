r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(47120);
var a = r(388123),
    o = r(697426),
    s = r(375954),
    l = r(710111);
function u(e, n) {
    let r;
    for (let i of e) {
        let e = c(i.message, n);
        if (null != e) {
            r = e;
            break;
        }
    }
    return r;
}
function c(e, n) {
    var r;
    return null == e ? void 0 : null === (r = e.soundboardSounds) || void 0 === r ? void 0 : r.find((e) => String(e.sound_id) === String(n));
}
function d(e, n, r) {
    var i, d, f;
    let p = s.Z.getMessage(e, n);
    if (null == p) return;
    let h = (null == p ? void 0 : null === (i = p.messageReference) || void 0 === i ? void 0 : i.type) === a.U.FORWARD ? u(null !== (d = null == p ? void 0 : p.messageSnapshots) && void 0 !== d ? d : [], r) : c(p, r);
    if (null != h) return (0, o.o3)(h, null !== (f = h.guild_id) && void 0 !== f ? f : l.X8);
}
