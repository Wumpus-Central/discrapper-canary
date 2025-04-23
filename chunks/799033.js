a.d(e, {
    L7: () => D,
    k3: () => O
});
var r = a(157079),
    n = a(501684),
    _ = a(868497),
    o = a(696486),
    i = a(73453),
    c = a(793373),
    s = a(152228),
    E = a(988097),
    l = a(789112),
    u = a(263449),
    I = a(305625),
    R = a(64685),
    d = a(873567),
    A = a(101284),
    f = a(886115),
    p = a(370541),
    N = a(285883),
    T = a(163162);
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
            traceXHR: n,
            shouldCreateSpanForRequest: A,
            enableHTTPTimings: D,
            tracePropagationTargets: P
        } = {
            traceFetch: O.traceFetch,
            traceXHR: O.traceXHR,
            ...e
        },
        y = 'function' == typeof A ? A : (t) => !0,
        C = (t) =>
            (function (t, e) {
                let a = T.m9.location && T.m9.location.href;
                if (a) {
                    let r, n;
                    try {
                        (r = new URL(t, a)), (n = new URL(a).origin);
                    } catch (t) {
                        return !1;
                    }
                    let _ = r.origin === n;
                    return e ? (0, f.U0)(r.toString(), e) || (_ && (0, f.U0)(r.pathname, e)) : _;
                }
                {
                    let a = !!t.match(/^\/(?!\/)/);
                    return e ? (0, f.U0)(t, e) : a;
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
            let e = (0, _.m)(t, y, C, v);
            if ((t.response && t.fetchData.__span && L.set(t.response, t.fetchData.__span), e)) {
                let a = m(t.fetchData.url),
                    r = a ? (0, d.en)(a).host : void 0;
                e.setAttributes({
                    'http.url': a,
                    'server.address': r
                });
            }
            D && e && g(e);
        })),
        n &&
            (0, r.UK)((t) => {
                let e = (function (t, e, a, n) {
                    let _ = t.xhr,
                        R = _ && _[r.xU];
                    if (!_ || _.__sentry_own_request__ || !R) return;
                    let A = (0, i.z)() && e(R.url);
                    if (t.endTimestamp && A) {
                        let t = _.__sentry_xhr_span_id__;
                        if (!t) return;
                        let e = n[t];
                        e && void 0 !== R.status_code && ((0, c.Q0)(e, R.status_code), e.end(), delete n[t]);
                        return;
                    }
                    let f = m(R.url),
                        T = f ? (0, d.en)(f).host : void 0,
                        L = !!(0, o.HN)(),
                        h =
                            A && L
                                ? (0, s.qp)({
                                      name: `${R.method} ${R.url}`,
                                      attributes: {
                                          type: 'xhr',
                                          'http.method': R.method,
                                          'http.url': f,
                                          url: R.url,
                                          'server.address': T,
                                          [E.S3]: 'auto.http.browser',
                                          [E.$J]: 'http.client'
                                      }
                                  })
                                : new l.b();
                    (_.__sentry_xhr_span_id__ = h.spanContext().spanId), (n[_.__sentry_xhr_span_id__] = h);
                    let O = (0, u.s3)();
                    return (
                        _.setRequestHeader &&
                            a(R.url) &&
                            O &&
                            (function (t, e, a) {
                                let r = (0, u.nZ)(),
                                    {
                                        traceId: n,
                                        spanId: _,
                                        sampled: c,
                                        dsc: s
                                    } = {
                                        ...(0, u.aF)().getPropagationContext(),
                                        ...r.getPropagationContext()
                                    },
                                    E = a && (0, i.z)() ? (0, o.Hb)(a) : (0, p.$p)(n, _, c);
                                var l = t,
                                    R = E,
                                    d = (0, N.IQ)(s || (a ? (0, I.jC)(a) : (0, I._l)(n, e)));
                                try {
                                    l.setRequestHeader('sentry-trace', R), d && l.setRequestHeader(N.bU, d);
                                } catch (t) {}
                            })(_, O, (0, i.z)() && L ? h : void 0),
                        h
                    );
                })(t, y, C, v);
                D && e && g(e);
            });
}
function g(t) {
    let { url: e } = (0, o.XU)(t).data || {};
    if (!e || 'string' != typeof e) return;
    let a = (0, n._j)('resource', ({ entries: r }) => {
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
                            for (let n of t) {
                                if ('/' === n) {
                                    [e, a] = t.split('/');
                                    break;
                                }
                                if (!isNaN(Number(n))) {
                                    (e = 'h' === r ? 'http' : r), (a = t.split(r)[1]);
                                    break;
                                }
                                r += n;
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
                    return (r.push(['network.protocol.version', a], ['network.protocol.name', e]), A.Z1) ? [...r, ['http.request.redirect_start', P(t.redirectStart)], ['http.request.fetch_start', P(t.fetchStart)], ['http.request.domain_lookup_start', P(t.domainLookupStart)], ['http.request.domain_lookup_end', P(t.domainLookupEnd)], ['http.request.connect_start', P(t.connectStart)], ['http.request.secure_connection_start', P(t.secureConnectionStart)], ['http.request.connection_end', P(t.connectEnd)], ['http.request.request_start', P(t.requestStart)], ['http.request.response_start', P(t.responseStart)], ['http.request.response_end', P(t.responseEnd)]] : r;
                })(r).forEach((e) => t.setAttribute(...e)),
                setTimeout(a));
        });
    });
}
function P(t = 0) {
    return ((A.Z1 || performance.timeOrigin) + t) / 1000;
}
function m(t) {
    try {
        return new URL(t, T.m9.location.origin).href;
    } catch (t) {
        return;
    }
}
