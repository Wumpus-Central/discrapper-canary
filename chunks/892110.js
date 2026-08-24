t.d(n, { l: () => a });
var i = t(536637),
    l = t.n(i),
    s = t(935208);
function a(e) {
    let n = s.default.extractTimestamp(e);
    return !l()().isBefore(l()(n).add(l().duration(15, "days")));
}
