a.d(e, { m: () => d });
var r = a(873567),
    n = a(370541),
    _ = a(285883),
    o = a(573736),
    i = a(263449),
    c = a(988097),
    s = a(73453),
    E = a(696486),
    l = a(789112),
    u = a(793373),
    I = a(152228),
    R = a(305625);
function d(t, e, a, A, f = 'auto.http.browser') {
    if (!t.fetchData) return;
    let p = (0, s.z)() && e(t.fetchData.url);
    if (t.endTimestamp && p) {
        let e = t.fetchData.__span;
        if (!e) return;
        let a = A[e];
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
            delete A[e]);
        return;
    }
    let N = (0, i.nZ)(),
        T = (0, i.s3)(),
        { method: L, url: h } = t.fetchData,
        O = (function (t) {
            try {
                return new URL(t).href;
            } catch (t) {
                return;
            }
        })(h),
        D = O ? (0, r.en)(O).host : void 0,
        g = !!(0, E.HN)(),
        P =
            p && g
                ? (0, I.qp)({
                      name: `${L} ${h}`,
                      attributes: {
                          url: h,
                          type: 'fetch',
                          'http.method': L,
                          'http.url': O,
                          'server.address': D,
                          [c.S3]: f,
                          [c.$J]: 'http.client'
                      }
                  })
                : new l.b();
    if (((t.fetchData.__span = P.spanContext().spanId), (A[P.spanContext().spanId] = P), a(t.fetchData.url) && T)) {
        let e = t.args[0];
        t.args[1] = t.args[1] || {};
        let a = t.args[1];
        a.headers = (function (t, e, a, r, c) {
            let {
                    traceId: s,
                    spanId: l,
                    sampled: u,
                    dsc: I
                } = {
                    ...(0, i.aF)().getPropagationContext(),
                    ...a.getPropagationContext()
                },
                d = c ? (0, E.Hb)(c) : (0, n.$p)(s, l, u),
                A = (0, _.IQ)(I || (c ? (0, R.jC)(c) : (0, R._l)(s, e))),
                f = r.headers || ('undefined' != typeof Request && (0, o.V9)(t, Request) ? t.headers : void 0);
            if (!f)
                return {
                    'sentry-trace': d,
                    baggage: A
                };
            if ('undefined' != typeof Headers && (0, o.V9)(f, Headers)) {
                let t = new Headers(f);
                return t.append('sentry-trace', d), A && t.append(_.bU, A), t;
            }
            if (Array.isArray(f)) {
                let t = [...f, ['sentry-trace', d]];
                return A && t.push([_.bU, A]), t;
            }
            {
                let t = 'baggage' in f ? f.baggage : void 0,
                    e = [];
                return (
                    Array.isArray(t) ? e.push(...t) : t && e.push(t),
                    A && e.push(A),
                    {
                        ...f,
                        'sentry-trace': d,
                        baggage: e.length > 0 ? e.join(',') : void 0
                    }
                );
            }
        })(e, T, N, a, (0, s.z)() && g ? P : void 0);
    }
    return P;
}
