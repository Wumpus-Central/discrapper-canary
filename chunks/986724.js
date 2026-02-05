n.d(t, { z: () => s });
var l = n(260509),
    i = n(34457),
    r = n(98318),
    u = n(855918),
    a = n(652215);
function s(e, t, n) {
    let s = new Set();
    for (let e of Object.keys(n.permissionOverwrites)) {
        let l = t[e],
            i = n.permissionOverwrites[e];
        (0, r.U)(l) && (0, u.Uj)(n, i) && s.add(l);
    }
    let d = t[(0, l.af)(e)],
        o = !(0, i._m)(d, a.xBc.VIEW_CHANNEL),
        E = (0, u.AN)(n, n.permissionOverwrites[e.id]);
    if (o && !E) for (let e of Object.values(t)) (0, r.U)(e) && (0, u.iR)(e) && s.add(e);
    return [...s];
}
