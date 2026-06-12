t.d(n, { l: () => a });
var l = t(989349),
    i = t.n(l),
    s = t(935208);
let a = (e) => {
    let n = s.default.extractTimestamp(e);
    return !i()().isBefore(i()(n).add(i().duration(15, "days")));
};
