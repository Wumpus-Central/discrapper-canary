var D,
    a = r(212739),
    t = r(403362),
    R = r(286348),
    n =
        (((D = {}).DEFAULT = "default"),
        (D.DEPRECATED = "deprecated"),
        (D.DEPRECATED_XBOX = "deprecated_xbox"),
        (D.REMOVED = "removed"),
        (D.REMOVED_XBOX = "removed_xbox"),
        D);
r.d(
    _,
    {},
    {
        A: function (e) {
            let { location: _ } = e,
                r = (0, R.EX)({ location: _ }),
                D = (0, a.O)(!1);
            switch (r) {
                case R.F9.DEFAULT:
                    return "default";
                case R.F9.DEPRECATED:
                    return D ? "deprecated_xbox" : "deprecated";
                case R.F9.REMOVED:
                    return D ? "removed_xbox" : "removed";
                default:
                    return (0, t.xb)(r);
            }
        },
        m: n,
    },
);
