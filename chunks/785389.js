r(321073);
let n = new Set([
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
r.d(
    t,
    {},
    {
        K9: function (e, t) {
            if (e.has(t)) return null;
            let r = new Set(e);
            return (r.add(t), r);
        },
        Q6: function (e, t) {
            if (!e.has(t)) return e;
            let r = new Set(e);
            return (r.delete(t), r);
        },
        Xl: function (e) {
            let t = [],
                r = new Set();
            for (let n of e) {
                let e =
                    "string" != typeof n.type || "" === n.type || "string" != typeof n.label || "" === n.label.trim()
                        ? null
                        : n.configured
                          ? "authorize"
                          : "finish-setup";
                null == e || r.has(n.type) || (r.add(n.type), t.push({ connection: n, offer: e }));
            }
            return t;
        },
        ls: function (e, t) {
            switch (t) {
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
            return 404 === e ? "not_declared" : e >= 500 ? "unavailable" : "unknown";
        },
        rG: function (e) {
            return "string" == typeof e && n.has(e) ? e : null;
        },
        rq: function (e) {
            return "not_configured" === e ? "setup" : "generic";
        },
    },
);
