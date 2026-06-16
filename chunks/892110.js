t.d(n, { l: () => a });
var i = t(989349),
    l = t.n(i),
    s = t(935208);
let a = (e) => {
    let n = s.default.extractTimestamp(e);
    return !l()().isBefore(l()(n).add(l().duration(15, "days")));
};
