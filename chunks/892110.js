n.d(t, { l: () => a });
var r = n(989349),
    l = n.n(r),
    i = n(661191);
let a = (e) => {
    let t = i.default.extractTimestamp(e);
    return !l()().isBefore(l()(t).add(l().duration(15, "days")));
};
