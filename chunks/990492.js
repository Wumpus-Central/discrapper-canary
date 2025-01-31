n.d(t, {
    ZP: () => u,
    aB: () => o
}),
    n(653041),
    n(47120);
var i = n(392711),
    r = n.n(i);
let a = new (n(710845).Z)('DragAndDropUtils');
function s(e) {
    let { oldOrdering: t, newOrdering: n, idGetter: i, existingPositionGetter: r, ascending: s = !0 } = e,
        o = n.length;
    if (t.length !== o) return a.warn('Arrays are not of the same length!', t, n), [];
    let l = t.map(i).sort().join(':'),
        u = n.map(i).sort().join(':');
    if (l !== u) return a.warn('Object IDs in the old ordering and the new ordering are not the same.', l, u), [];
    let c = {};
    for (let e = 0; e < o; e++) c[i(t[e])] = r(t[e]);
    let d = [];
    for (let e = 0; e < o; e++) {
        let t = i(n[e]),
            a = c[t],
            l = s ? e : o - 1 - e;
        (a !== l || r(n[e]) !== l) &&
            d.push({
                id: t,
                position: l
            });
    }
    return s || d.reverse(), d;
}
function o(e, t, n) {
    let i = e[t],
        r = [...e];
    return r.splice(t, 1), r.splice(n, 0, i), r;
}
function l(e) {
    let { objectArray: t, fromPosition: n, toPosition: i, idGetter: a, existingPositionGetter: l, ascending: u = !0 } = e;
    Array.isArray(t) || (t = r().values(t));
    let c = o(t, n, i);
    return s({
        oldOrdering: t,
        newOrdering: c,
        idGetter: a,
        existingPositionGetter: l,
        ascending: u
    });
}
let u = {
    moveItemFromTo: o,
    calculatePositionDeltas: s,
    getPositionUpdates: l
};
