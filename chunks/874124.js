n.d(t, { A: () => s }), n(896048);
var r = n(258585),
    i = n(787931),
    a = n(753070);
function s(e, t, n, s, o, l) {
    if (e === a.jQ.PRESET_AUTO) return (0, r.eO)({ location: "canStreamWithSettings" }).allowAutoQuality;
    for (let r of a.ZV)
        if ((null == r.preset || e === r.preset) && t === r.resolution && n === r.fps && (0, i.A)(r, s, o, l))
            return !0;
    return !1;
}
