n.d(t, { l: () => a });
var i = n(989349),
    l = n.n(i),
    s = n(661191);
let a = (e) => {
    let t = s.default.extractTimestamp(e);
    return !l()().isBefore(l()(t).add(l().duration(15, "days")));
};
