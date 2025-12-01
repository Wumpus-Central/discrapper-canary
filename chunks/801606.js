n.d(t, { Z: () => c }), n(388685);
var r = n(388123),
    i = n(697426),
    a = n(375954),
    o = n(710111);
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
    var u, d, f, p;
    let _ = l(c, n);
    if (null != _) return (0, i.o3)(_, null != (d = _.guild_id) ? d : o.X8);
    let m = a.Z.getMessage(e, t);
    if (
        null != m &&
        null !=
            (_ =
                (null == m || null == (u = m.messageReference) ? void 0 : u.type) === r.U.FORWARD
                    ? s(null != (f = null == m ? void 0 : m.messageSnapshots) ? f : [], n)
                    : l(null == m ? void 0 : m.soundboardSounds, n))
    )
        return (0, i.o3)(_, null != (p = _.guild_id) ? p : o.X8);
}
