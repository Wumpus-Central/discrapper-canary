var i = t(536637),
    l = t.n(i),
    s = t(811091);
t.d(
    n,
    {},
    {
        l: function (e) {
            let n = s.default.extractTimestamp(e);
            return !l()().isBefore(l()(n).add(l().duration(15, "days")));
        },
    },
);
