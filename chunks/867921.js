a.d(e, { q: () => s });
var r = a(598470),
    _ = a(617726),
    n = a(14588),
    o = a(928541),
    i = a(622916),
    c = a(116698),
    E = a(255768);
function s(t, e, a = (0, r.x)(t.bufferSize || 64)) {
    let I = {};
    return {
        send: function (r) {
            let s = [];
            if (
                ((0, _.gv)(r, (e, a) => {
                    let r = (0, _.mL)(a);
                    if ((0, n.Q)(I, r)) {
                        let _ = l(e, a);
                        t.recordDroppedEvent('ratelimit_backoff', r, _);
                    } else s.push(e);
                }),
                0 === s.length)
            )
                return (0, o.WD)({});
            let u = (0, _.Jd)(r[0], s),
                R = (e) => {
                    (0, _.gv)(u, (a, r) => {
                        let n = l(a, r);
                        t.recordDroppedEvent(e, (0, _.mL)(r), n);
                    });
                };
            return a
                .add(() =>
                    e({ body: (0, _.V$)(u) }).then(
                        (t) => (void 0 !== t.statusCode && (t.statusCode < 200 || t.statusCode >= 300) && E.X && i.kg.warn(`Sentry responded with status code ${t.statusCode} to sent event.`), (I = (0, n.WG)(I, t)), t),
                        (t) => {
                            throw (R('network_error'), t);
                        }
                    )
                )
                .then(
                    (t) => t,
                    (t) => {
                        if (t instanceof c.b) return E.X && i.kg.error('Skipped sending event because buffer is full.'), R('queue_overflow'), (0, o.WD)({});
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
