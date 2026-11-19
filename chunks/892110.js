var i = t(536637),
    l = t.n(i),
    r = t(661191);
t.d(
    n,
    {},
    {
        l: function (e) {
            let n = r.default.extractTimestamp(e);
            return !l()().isBefore(l()(n).add(l().duration(15, "days")));
        },
    },
);
