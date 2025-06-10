a.d(e, {
    L7: () => D,
    k3: () => O
});
var r = a(157079),
    _ = a(501684),
    n = a(868497),
    o = a(696486),
    i = a(73453),
    c = a(793373),
    E = a(152228),
    s = a(988097),
    l = a(789112),
    u = a(263449),
    I = a(305625),
    R = a(64685),
    d = a(873567),
    N = a(101284),
    A = a(886115),
    f = a(370541),
    T = a(285883),
    p = a(163162);
let L = new WeakMap(),
    h = new Map(),
    O = {
        traceFetch: !0,
        traceXHR: !0,
        enableHTTPTimings: !0
    };
function D(t, e) {
    let {
            traceFetch: a,
            traceXHR: _,
            shouldCreateSpanForRequest: N,
            enableHTTPTimings: D,
            tracePropagationTargets: P
        } = {
            traceFetch: O.traceFetch,
            traceXHR: O.traceXHR,
            ...e
        },
        C = 'function' == typeof N ? N : (t) => !0,
        m = (t) =>
            (function (t, e) {
                let a = p.m9.location && p.m9.location.href;
                if (a) {
                    let r, _;
                    try {
                        (r = new URL(t, a)), (_ = new URL(a).origin);
                    } catch (t) {
                        return !1;
                    }
                    let n = r.origin === _;
                    return e ? (0, A.U0)(r.toString(), e) || (n && (0, A.U0)(r.pathname, e)) : n;
                }
                {
                    let a = !!t.match(/^\/(?!\/)/);
                    return e ? (0, A.U0)(t, e) : a;
                }
            })(t, P),
        v = {};
    a &&
        (t.addEventProcessor(
            (t) => (
                'transaction' === t.type &&
                    t.spans &&
                    t.spans.forEach((t) => {
                        if ('http.client' === t.op) {
                            let e = h.get(t.span_id);
                            e && ((t.timestamp = e / 1000), h.delete(t.span_id));
                        }
                    }),
                t
            )
        ),
        (0, R.cf)((t) => {
            if (t.response) {
                let e = L.get(t.response);
                e && t.endTimestamp && h.set(e, t.endTimestamp);
            }
        }),
        (0, R.Uf)((t) => {
            let e = (0, n.m)(t, C, m, v);
            if ((t.response && t.fetchData.__span && L.set(t.response, t.fetchData.__span), e)) {
                let a = y(t.fetchData.url),
                    r = a ? (0, d.en)(a).host : void 0;
                e.setAttributes({
                    'http.url': a,
                    'server.address': r
                });
            }
            D && e && g(e);
        })),
        _ &&
            (0, r.UK)((t) => {
                let e = (function (t, e, a, _) {
                    let n = t.xhr,
                        R = n && n[r.xU];
                    if (!n || n.__sentry_own_request__ || !R) return;
                    let N = (0, i.z)() && e(R.url);
                    if (t.endTimestamp && N) {
                        let t = n.__sentry_xhr_span_id__;
                        if (!t) return;
                        let e = _[t];
                        e && void 0 !== R.status_code && ((0, c.Q0)(e, R.status_code), e.end(), delete _[t]);
                        return;
                    }
                    let A = y(R.url),
                        p = A ? (0, d.en)(A).host : void 0,
                        L = !!(0, o.HN)(),
                        h =
                            N && L
                                ? (0, E.qp)({
                                      name: `${R.method} ${R.url}`,
                                      attributes: {
                                          type: 'xhr',
                                          'http.method': R.method,
                                          'http.url': A,
                                          url: R.url,
                                          'server.address': p,
                                          [s.S3]: 'auto.http.browser',
                                          [s.$J]: 'http.client'
                                      }
                                  })
                                : new l.b();
                    (n.__sentry_xhr_span_id__ = h.spanContext().spanId), (_[n.__sentry_xhr_span_id__] = h);
                    let O = (0, u.s3)();
                    return (
                        n.setRequestHeader &&
                            a(R.url) &&
                            O &&
                            (function (t, e, a) {
                                let r = (0, u.nZ)(),
                                    {
                                        traceId: _,
                                        spanId: n,
                                        sampled: c,
                                        dsc: E
                                    } = {
                                        ...(0, u.aF)().getPropagationContext(),
                                        ...r.getPropagationContext()
                                    },
                                    s = a && (0, i.z)() ? (0, o.Hb)(a) : (0, f.$p)(_, n, c);
                                var l = t,
                                    R = s,
                                    d = (0, T.IQ)(E || (a ? (0, I.jC)(a) : (0, I._l)(_, e)));
                                try {
                                    l.setRequestHeader('sentry-trace', R), d && l.setRequestHeader(T.bU, d);
                                } catch (t) {}
                            })(n, O, (0, i.z)() && L ? h : void 0),
                        h
                    );
                })(t, C, m, v);
                D && e && g(e);
            });
}
function g(t) {
    let { url: e } = (0, o.XU)(t).data || {};
    if (!e || 'string' != typeof e) return;
    let a = (0, _._j)('resource', ({ entries: r }) => {
        r.forEach((r) => {
            'resource' === r.entryType &&
                'initiatorType' in r &&
                'string' == typeof r.nextHopProtocol &&
                ('fetch' === r.initiatorType || 'xmlhttprequest' === r.initiatorType) &&
                r.name.endsWith(e) &&
                ((function (t) {
                    let { name: e, version: a } = (function (t) {
                            let e = 'unknown',
                                a = 'unknown',
                                r = '';
                            for (let _ of t) {
                                if ('/' === _) {
                                    [e, a] = t.split('/');
                                    break;
                                }
                                if (!isNaN(Number(_))) {
                                    (e = 'h' === r ? 'http' : r), (a = t.split(r)[1]);
                                    break;
                                }
                                r += _;
                            }
                            return (
                                r === t && (e = r),
                                {
                                    name: e,
                                    version: a
                                }
                            );
                        })(t.nextHopProtocol),
                        r = [];
                    return (r.push(['network.protocol.version', a], ['network.protocol.name', e]), N.Z1) ? [...r, ['http.request.redirect_start', P(t.redirectStart)], ['http.request.fetch_start', P(t.fetchStart)], ['http.request.domain_lookup_start', P(t.domainLookupStart)], ['http.request.domain_lookup_end', P(t.domainLookupEnd)], ['http.request.connect_start', P(t.connectStart)], ['http.request.secure_connection_start', P(t.secureConnectionStart)], ['http.request.connection_end', P(t.connectEnd)], ['http.request.request_start', P(t.requestStart)], ['http.request.response_start', P(t.responseStart)], ['http.request.response_end', P(t.responseEnd)]] : r;
                })(r).forEach((e) => t.setAttribute(...e)),
                setTimeout(a));
        });
    });
}
function P(t = 0) {
    return ((N.Z1 || performance.timeOrigin) + t) / 1000;
}
function y(t) {
    try {
        return new URL(t, p.m9.location.origin).href;
    } catch (t) {
        return;
    }
}
