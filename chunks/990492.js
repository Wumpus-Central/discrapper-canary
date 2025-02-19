n.d(t, {
    ZP: () => c,
    aB: () => s
}),
    n(230036),
    n(653041),
    n(978209),
    n(47120);
var r = n(392711),
    i = n.n(r);
let o = new (n(710845).Z)('DragAndDropUtils');
function a(e) {
    let { oldOrdering: t, newOrdering: n, idGetter: r, existingPositionGetter: i, ascending: a = !0 } = e,
        s = n.length;
    if (t.length !== s) return o.warn('Arrays are not of the same length!', t, n), [];
    let l = t.map(r).sort().join(':'),
        c = n.map(r).sort().join(':');
    if (l !== c) return o.warn('Object IDs in the old ordering and the new ordering are not the same.', l, c), [];
    let u = {};
    for (let e = 0; e < s; e++) u[r(t[e])] = i(t[e]);
    let d = [];
    for (let e = 0; e < s; e++) {
        let t = r(n[e]),
            o = u[t],
            l = a ? e : s - 1 - e;
        (o !== l || i(n[e]) !== l) &&
            d.push({
                id: t,
                position: l
            });
    }
    return a || d.reverse(), d;
}
function s(e, t, n) {
    let r = e[t],
        i = [...e];
    return i.splice(t, 1), i.splice(n, 0, r), i;
}
function l(e) {
    let { objectArray: t, fromPosition: n, toPosition: r, idGetter: o, existingPositionGetter: l, ascending: c = !0 } = e;
    Array.isArray(t) || (t = i().values(t));
    let u = s(t, n, r);
    return a({
        oldOrdering: t,
        newOrdering: u,
        idGetter: o,
        existingPositionGetter: l,
        ascending: c
    });
}
let c = {
    moveItemFromTo: s,
    calculatePositionDeltas: a,
    getPositionUpdates: l
};
