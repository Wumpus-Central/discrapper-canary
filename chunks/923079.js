var D,
    t = r(212739),
    a = r(403362),
    n = r(286348),
    R =
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
                r = (0, n.EX)({ location: _ }),
                D = (0, t.O)(!1);
            switch (r) {
                case n.F9.DEFAULT:
                    return "default";
                case n.F9.DEPRECATED:
                    return D ? "deprecated_xbox" : "deprecated";
                case n.F9.REMOVED:
                    return D ? "removed_xbox" : "removed";
                default:
                    return (0, a.xb)(r);
            }
        },
        m: R,
    },
);
