var i,
    r = n(956518),
    a = n(744230),
    s = n(559447),
    l = n(645131),
    o = n(296872),
    d =
        (((i = {}).SKIPPED = "skipped"),
        (i.CACHED = "cached"),
        (i.IN_FLIGHT = "in_flight"),
        (i.FETCHED = "fetched"),
        i);
function c(e) {
    let t = (0, r.Ay)(e);
    return null != t ? (0, r.S)(t) : null;
}
n.d(
    t,
    {},
    {
        Ay: async function (e) {
            if (!(0, o.ac)("loadEmbeddedAppCSPForLaunch")) return "skipped";
            let t = c(e);
            if (null == t) return "skipped";
            if (null != l.A.getPolicy(t)) return "cached";
            let n = (0, s.h2)(t);
            try {
                await (0, s.yr)(t);
            } catch {
                throw new a.A(a.A.Reasons.CSP_UNAVAILABLE);
            }
            return n ? "in_flight" : "fetched";
        },
        jv: d,
        pl: function (e) {
            let t = c(e);
            return null != t ? (0, s.Fb)(t) : null;
        },
    },
);
