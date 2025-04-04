n.d(t, { Z: () => c }), n(47120);
var r = n(388123),
    i = n(697426),
    o = n(375954),
    a = n(710111);
function s(e, t) {
    let n;
    for (let i of e) {
        var r;
        let e = l(null == (r = i.message) ? void 0 : r.soundboardSounds, t);
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
    var u, d, f, _;
    let p = l(c, n);
    if (null != p) return (0, i.o3)(p, null != (d = p.guild_id) ? d : a.X8);
    let h = o.Z.getMessage(e, t);
    if (null != h && null != (p = (null == h || null == (u = h.messageReference) ? void 0 : u.type) === r.U.FORWARD ? s(null != (f = null == h ? void 0 : h.messageSnapshots) ? f : [], n) : l(null == h ? void 0 : h.soundboardSounds, n))) return (0, i.o3)(p, null != (_ = p.guild_id) ? _ : a.X8);
}
