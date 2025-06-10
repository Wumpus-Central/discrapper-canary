a.d(e, { m: () => N });
var r = a(873567),
    _ = a(370541),
    n = a(285883),
    o = a(573736),
    i = a(263449),
    c = a(988097),
    E = a(73453),
    s = a(696486),
    l = a(789112),
    u = a(793373),
    I = a(152228),
    R = a(305625);
function N(t, e, a, d, A = 'auto.http.browser') {
    if (!t.fetchData) return;
    let f = (0, E.z)() && e(t.fetchData.url);
    if (t.endTimestamp && f) {
        let e = t.fetchData.__span;
        if (!e) return;
        let a = d[e];
        a &&
            ((function (t, e) {
                if (e.response) {
                    (0, u.Q0)(t, e.response.status);
                    let a = e.response && e.response.headers && e.response.headers.get('content-length');
                    if (a) {
                        let e = parseInt(a);
                        e > 0 && t.setAttribute('http.response_content_length', e);
                    }
                } else
                    e.error &&
                        t.setStatus({
                            code: u.jt,
                            message: 'internal_error'
                        });
                t.end();
            })(a, t),
            delete d[e]);
        return;
    }
    let T = (0, i.nZ)(),
        p = (0, i.s3)(),
        { method: L, url: h } = t.fetchData,
        O = (function (t) {
            try {
                return new URL(t).href;
            } catch (t) {
                return;
            }
        })(h),
        D = O ? (0, r.en)(O).host : void 0,
        g = !!(0, s.HN)(),
        P =
            f && g
                ? (0, I.qp)({
                      name: `${L} ${h}`,
                      attributes: {
                          url: h,
                          type: 'fetch',
                          'http.method': L,
                          'http.url': O,
                          'server.address': D,
                          [c.S3]: A,
                          [c.$J]: 'http.client'
                      }
                  })
                : new l.b();
    if (((t.fetchData.__span = P.spanContext().spanId), (d[P.spanContext().spanId] = P), a(t.fetchData.url) && p)) {
        let e = t.args[0];
        t.args[1] = t.args[1] || {};
        let a = t.args[1];
        a.headers = (function (t, e, a, r, c) {
            let {
                    traceId: E,
                    spanId: l,
                    sampled: u,
                    dsc: I
                } = {
                    ...(0, i.aF)().getPropagationContext(),
                    ...a.getPropagationContext()
                },
                N = c ? (0, s.Hb)(c) : (0, _.$p)(E, l, u),
                d = (0, n.IQ)(I || (c ? (0, R.jC)(c) : (0, R._l)(E, e))),
                A = r.headers || ('undefined' != typeof Request && (0, o.V9)(t, Request) ? t.headers : void 0);
            if (!A)
                return {
                    'sentry-trace': N,
                    baggage: d
                };
            if ('undefined' != typeof Headers && (0, o.V9)(A, Headers)) {
                let t = new Headers(A);
                return t.append('sentry-trace', N), d && t.append(n.bU, d), t;
            }
            if (Array.isArray(A)) {
                let t = [...A, ['sentry-trace', N]];
                return d && t.push([n.bU, d]), t;
            }
            {
                let t = 'baggage' in A ? A.baggage : void 0,
                    e = [];
                return (
                    Array.isArray(t) ? e.push(...t) : t && e.push(t),
                    d && e.push(d),
                    {
                        ...A,
                        'sentry-trace': N,
                        baggage: e.length > 0 ? e.join(',') : void 0
                    }
                );
            }
        })(e, p, T, a, (0, E.z)() && g ? P : void 0);
    }
    return P;
}
