a.d(e, { q: () => E });
var r = a(598470),
    n = a(617726),
    _ = a(14588),
    o = a(928541),
    i = a(622916),
    c = a(116698),
    s = a(255768);
function E(t, e, a = (0, r.x)(t.bufferSize || 64)) {
    let u = {};
    return {
        send: function (r) {
            let E = [];
            if (
                ((0, n.gv)(r, (e, a) => {
                    let r = (0, n.mL)(a);
                    if ((0, _.Q)(u, r)) {
                        let n = l(e, a);
                        t.recordDroppedEvent('ratelimit_backoff', r, n);
                    } else E.push(e);
                }),
                0 === E.length)
            )
                return (0, o.WD)({});
            let I = (0, n.Jd)(r[0], E),
                R = (e) => {
                    (0, n.gv)(I, (a, r) => {
                        let _ = l(a, r);
                        t.recordDroppedEvent(e, (0, n.mL)(r), _);
                    });
                };
            return a
                .add(() =>
                    e({ body: (0, n.V$)(I) }).then(
                        (t) => (void 0 !== t.statusCode && (t.statusCode < 200 || t.statusCode >= 300) && s.X && i.kg.warn(`Sentry responded with status code ${t.statusCode} to sent event.`), (u = (0, _.WG)(u, t)), t),
                        (t) => {
                            throw (R('network_error'), t);
                        }
                    )
                )
                .then(
                    (t) => t,
                    (t) => {
                        if (t instanceof c.b) return s.X && i.kg.error('Skipped sending event because buffer is full.'), R('queue_overflow'), (0, o.WD)({});
                        throw t;
                    }
                );
        },
        flush: (t) => a.drain(t)
    };
}
function l(t, e) {
    if ('event' === e || 'transaction' === e) return Array.isArray(t) ? t[1] : void 0;
}
