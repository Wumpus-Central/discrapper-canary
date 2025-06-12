a.d(e, { m: () => A });
var r = a(873567),
    _ = a(370541),
    n = a(285883),
    o = a(573736),
    i = a(263449),
    c = a(988097),
    E = a(73453),
    s = a(696486),
    l = a(789112),
    I = a(793373),
    u = a(152228),
    R = a(305625);
function A(t, e, a, T, N = 'auto.http.browser') {
    if (!t.fetchData) return;
    let d = (0, E.z)() && e(t.fetchData.url);
    if (t.endTimestamp && d) {
        let e = t.fetchData.__span;
        if (!e) return;
        let a = T[e];
        a &&
            ((function (t, e) {
                if (e.response) {
                    (0, I.Q0)(t, e.response.status);
                    let a = e.response && e.response.headers && e.response.headers.get('content-length');
                    if (a) {
                        let e = parseInt(a);
                        e > 0 && t.setAttribute('http.response_content_length', e);
                    }
                } else
                    e.error &&
                        t.setStatus({
                            code: I.jt,
                            message: 'internal_error'
                        });
                t.end();
            })(a, t),
            delete T[e]);
        return;
    }
    let L = (0, i.nZ)(),
        p = (0, i.s3)(),
        { method: f, url: O } = t.fetchData,
        h = (function (t) {
            try {
                return new URL(t).href;
            } catch (t) {
                return;
            }
        })(O),
        D = h ? (0, r.en)(h).host : void 0,
        P = !!(0, s.HN)(),
        g =
            d && P
                ? (0, u.qp)({
                      name: `${f} ${O}`,
                      attributes: {
                          url: O,
                          type: 'fetch',
                          'http.method': f,
                          'http.url': h,
                          'server.address': D,
                          [c.S3]: N,
                          [c.$J]: 'http.client'
                      }
                  })
                : new l.b();
    if (((t.fetchData.__span = g.spanContext().spanId), (T[g.spanContext().spanId] = g), a(t.fetchData.url) && p)) {
        let e = t.args[0];
        t.args[1] = t.args[1] || {};
        let a = t.args[1];
        a.headers = (function (t, e, a, r, c) {
            let {
                    traceId: E,
                    spanId: l,
                    sampled: I,
                    dsc: u
                } = {
                    ...(0, i.aF)().getPropagationContext(),
                    ...a.getPropagationContext()
                },
                A = c ? (0, s.Hb)(c) : (0, _.$p)(E, l, I),
                T = (0, n.IQ)(u || (c ? (0, R.jC)(c) : (0, R._l)(E, e))),
                N = r.headers || ('undefined' != typeof Request && (0, o.V9)(t, Request) ? t.headers : void 0);
            if (!N)
                return {
                    'sentry-trace': A,
                    baggage: T
                };
            if ('undefined' != typeof Headers && (0, o.V9)(N, Headers)) {
                let t = new Headers(N);
                return t.append('sentry-trace', A), T && t.append(n.bU, T), t;
            }
            if (Array.isArray(N)) {
                let t = [...N, ['sentry-trace', A]];
                return T && t.push([n.bU, T]), t;
            }
            {
                let t = 'baggage' in N ? N.baggage : void 0,
                    e = [];
                return (
                    Array.isArray(t) ? e.push(...t) : t && e.push(t),
                    T && e.push(T),
                    {
                        ...N,
                        'sentry-trace': A,
                        baggage: e.length > 0 ? e.join(',') : void 0
                    }
                );
            }
        })(e, p, L, a, (0, E.z)() && P ? g : void 0);
    }
    return g;
}
