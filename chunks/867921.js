_.d(e, { q: () => s });
var a = _(598470),
    r = _(617726),
    n = _(14588),
    o = _(928541),
    E = _(622916),
    i = _(116698),
    c = _(255768);
function s(t, e, _ = (0, a.x)(t.bufferSize || 64)) {
    let I = {};
    return {
        send: function (a) {
            let s = [];
            if (
                ((0, r.gv)(a, (e, _) => {
                    let a = (0, r.mL)(_);
                    if ((0, n.Q)(I, a)) {
                        let r = l(e, _);
                        t.recordDroppedEvent("ratelimit_backoff", a, r);
                    } else s.push(e);
                }),
                0 === s.length)
            )
                return (0, o.WD)({});
            let R = (0, r.Jd)(a[0], s),
                N = (e) => {
                    (0, r.gv)(R, (_, a) => {
                        let n = l(_, a);
                        t.recordDroppedEvent(e, (0, r.mL)(a), n);
                    });
                };
            return _.add(() =>
                e({ body: (0, r.V$)(R) }).then(
                    (t) => (
                        void 0 !== t.statusCode &&
                            (t.statusCode < 200 || t.statusCode >= 300) &&
                            c.X &&
                            E.kg.warn(`Sentry responded with status code ${t.statusCode} to sent event.`),
                        (I = (0, n.WG)(I, t)),
                        t
                    ),
                    (t) => {
                        throw (N("network_error"), t);
                    },
                ),
            ).then(
                (t) => t,
                (t) => {
                    if (t instanceof i.b)
                        return (
                            c.X && E.kg.error("Skipped sending event because buffer is full."),
                            N("queue_overflow"),
                            (0, o.WD)({})
                        );
                    throw t;
                },
            );
        },
        flush: (t) => _.drain(t),
    };
}
function l(t, e) {
    if ("event" === e || "transaction" === e) return Array.isArray(t) ? t[1] : void 0;
}
