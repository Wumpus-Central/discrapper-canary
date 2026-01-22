n.d(t, {
    L: () => i,
}),
    n(896048);
var r = n(661191),
    l = n(513272);

function i(e, t) {
    var n;
    let i = null != (n = l.A.summaries(e)) ? n : [],
        a = 0;
    for (let e of i) r.default.compare(e.endId, t) > 0 && (a += 1);
    return a;
}
