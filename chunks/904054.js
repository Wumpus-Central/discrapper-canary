var i = n(253932),
    r = n(754712),
    a = n(824744);
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (i.dG.getSetting()?.volume ?? 100);
            return Math.min(e * ((0, a.M)(t) / 100) * Math.min(r.Ay.getOutputVolume() / 100, 1), 1);
        },
    },
);
