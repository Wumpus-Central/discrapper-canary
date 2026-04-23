n.d(t, { L: () => a });
var i = n(661191),
    l = n(513272);
function a(e, t) {
    let n = l.A.summaries(e) ?? [],
        a = 0;
    for (let e of n) i.default.compare(e.endId, t) > 0 && (a += 1);
    return a;
}
