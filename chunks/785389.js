n(321073);
let l = new Set([
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
    t,
    {},
    {
        K9: function (e, t) {
            if (e.has(t)) return null;
            let n = new Set(e);
            return (n.add(t), n);
        },
        Q6: function (e, t) {
            if (!e.has(t)) return e;
            let n = new Set(e);
            return (n.delete(t), n);
        },
        Xl: function (e) {
            let t = [],
                n = new Set();
            for (let l of e) {
                let e =
                    "string" != typeof l.type || "" === l.type || "string" != typeof l.label || "" === l.label.trim()
                        ? null
                        : l.configured
                          ? "authorize"
                          : "finish-setup";
                null == e || n.has(l.type) || (n.add(l.type), t.push({ connection: l, offer: e }));
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
            return "string" == typeof e && l.has(e) ? e : null;
        },
        rq: function (e) {
            return "not_configured" === e ? "setup" : "generic";
        },
    },
);
