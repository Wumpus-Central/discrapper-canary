n(321073);
let r = new Set([
    "bad_request",
    "bad_connection_type",
    "unknown_project",
    "not_declared",
    "not_configured",
    "not_deployed",
    "child_error",
    "child_malformed",
    "child_unavailable",
]);
n.d(
    e,
    {},
    {
        K9: function (t, e) {
            if (t.has(e)) return null;
            let n = new Set(t);
            return (n.add(e), n);
        },
        Q6: function (t, e) {
            if (!t.has(e)) return t;
            let n = new Set(t);
            return (n.delete(e), n);
        },
        Xl: function (t) {
            let e = [],
                n = new Set();
            for (let r of t) {
                let t =
                    "string" != typeof r.type || "" === r.type || "string" != typeof r.label || "" === r.label.trim()
                        ? null
                        : r.configured
                          ? "authorize"
                          : "finish-setup";
                null == t || n.has(r.type) || (n.add(r.type), e.push({ connection: r, offer: t }));
            }
            return e;
        },
        ls: function (t, e) {
            switch (e) {
                case "not_configured":
                    return "not_configured";
                case "not_deployed":
                    return "not_deployed";
                case "not_declared":
                case "unknown_project":
                    return "not_declared";
                case "child_error":
                case "child_malformed":
                case "child_unavailable":
                    return "unavailable";
                case "bad_request":
                case "bad_connection_type":
                    return "unknown";
            }
            return 404 === t ? "not_declared" : t >= 500 ? "unavailable" : "unknown";
        },
        rG: function (t) {
            return "string" == typeof t && r.has(t) ? t : null;
        },
        rq: function (t) {
            return "not_configured" === t ? "setup" : "generic";
        },
    },
);
