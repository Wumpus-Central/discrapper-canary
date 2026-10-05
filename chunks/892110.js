n.d(t, { l: () => r });
var i = n(536637),
    l = n.n(i),
    s = n(935208);
function r(e) {
    let t = s.default.extractTimestamp(e);
    return !l()().isBefore(l()(t).add(l().duration(15, "days")));
}
