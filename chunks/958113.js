n.d(t, {
    L7: () => L,
    k3: () => S,
});
var r = n(568538),
    i = n(687566),
    a = n(343962),
    o = n(82255),
    _ = n(451542),
    s = n(366000),
    c = n(700868),
    E = n(8062),
    l = n(25855),
    u = n(509440),
    d = n(464338),
    p = n(545146),
    f = n(840247),
    I = n(343573),
    T = n(1693),
    R = n(490990),
    A = n(288101),
    N = n(889929);
let h = new WeakMap(),
    O = new Map(),
    S = {
        traceFetch: !0,
        traceXHR: !0,
        enableHTTPTimings: !0,
    };
function L(e, t) {
    let {
            traceFetch: n,
            traceXHR: i,
            shouldCreateSpanForRequest: I,
            enableHTTPTimings: L,
            tracePropagationTargets: m,
        } = {
            traceFetch: S.traceFetch,
            traceXHR: S.traceXHR,
            ...t,
        },
        C = "function" == typeof I ? I : (e) => !0,
        y = (e) =>
            (function (e, t) {
                let n = N.m9.location && N.m9.location.href;
                if (n) {
                    let r, i;
                    try {
                        (r = new URL(e, n)), (i = new URL(n).origin);
                    } catch (e) {
                        return !1;
                    }
                    let a = r.origin === i;
                    return t ? (0, T.U0)(r.toString(), t) || (a && (0, T.U0)(r.pathname, t)) : a;
                }
                {
                    let n = !!e.match(/^\/(?!\/)/);
                    return t ? (0, T.U0)(e, t) : n;
                }
            })(e, m),
        P = {};
    n &&
        (e.addEventProcessor(
            (e) => (
                "transaction" === e.type &&
                    e.spans &&
                    e.spans.forEach((e) => {
                        if ("http.client" === e.op) {
                            let t = O.get(e.span_id);
                            t && ((e.timestamp = t / 1000), O.delete(e.span_id));
                        }
                    }),
                e
            ),
        ),
        (0, p.cf)((e) => {
            if (e.response) {
                let t = h.get(e.response);
                t && e.endTimestamp && O.set(t, e.endTimestamp);
            }
        }),
        (0, p.Uf)((e) => {
            let t = (0, a.m)(e, C, y, P);
            if ((e.response && e.fetchData.__span && h.set(e.response, e.fetchData.__span), t)) {
                let n = D(e.fetchData.url),
                    r = n ? (0, f.en)(n).host : void 0;
                t.setAttributes({
                    "http.url": n,
                    "server.address": r,
                });
            }
            L && t && g(t);
        })),
        i &&
            (0, r.UK)((e) => {
                let t = (function (e, t, n, i) {
                    let a = e.xhr,
                        p = a && a[r.xU];
                    if (!a || a.__sentry_own_request__ || !p) return;
                    let I = (0, _.z)() && t(p.url);
                    if (e.endTimestamp && I) {
                        let e = a.__sentry_xhr_span_id__;
                        if (!e) return;
                        let t = i[e];
                        t && void 0 !== p.status_code && ((0, s.Q0)(t, p.status_code), t.end(), delete i[e]);
                        return;
                    }
                    let T = D(p.url),
                        N = T ? (0, f.en)(T).host : void 0,
                        h = !!(0, o.HN)(),
                        O =
                            I && h
                                ? (0, c.qp)({
                                      name: `${p.method} ${p.url}`,
                                      attributes: {
                                          type: "xhr",
                                          "http.method": p.method,
                                          "http.url": T,
                                          url: p.url,
                                          "server.address": N,
                                          [E.S3]: "auto.http.browser",
                                          [E.$J]: "http.client",
                                      },
                                  })
                                : new l.b();
                    (a.__sentry_xhr_span_id__ = O.spanContext().spanId), (i[a.__sentry_xhr_span_id__] = O);
                    let S = (0, u.s3)();
                    return (
                        a.setRequestHeader &&
                            n(p.url) &&
                            S &&
                            (function (e, t, n) {
                                let r = (0, u.nZ)(),
                                    {
                                        traceId: i,
                                        spanId: a,
                                        sampled: s,
                                        dsc: c,
                                    } = {
                                        ...(0, u.aF)().getPropagationContext(),
                                        ...r.getPropagationContext(),
                                    },
                                    E = n && (0, _.z)() ? (0, o.Hb)(n) : (0, R.$p)(i, a, s);
                                var l = e,
                                    p = E,
                                    f = (0, A.IQ)(c || (n ? (0, d.jC)(n) : (0, d._l)(i, t)));
                                try {
                                    l.setRequestHeader("sentry-trace", p), f && l.setRequestHeader(A.bU, f);
                                } catch (e) {}
                            })(a, S, (0, _.z)() && h ? O : void 0),
                        O
                    );
                })(e, C, y, P);
                L && t && g(t);
            });
}
function g(e) {
    let { url: t } = (0, o.XU)(e).data || {};
    if (!t || "string" != typeof t) return;
    let n = (0, i._j)("resource", ({ entries: r }) => {
        r.forEach((r) => {
            "resource" === r.entryType &&
                "initiatorType" in r &&
                "string" == typeof r.nextHopProtocol &&
                ("fetch" === r.initiatorType || "xmlhttprequest" === r.initiatorType) &&
                r.name.endsWith(t) &&
                ((function (e) {
                    let { name: t, version: n } = (function (e) {
                            let t = "unknown",
                                n = "unknown",
                                r = "";
                            for (let i of e) {
                                if ("/" === i) {
                                    [t, n] = e.split("/");
                                    break;
                                }
                                if (!isNaN(Number(i))) {
                                    (t = "h" === r ? "http" : r), (n = e.split(r)[1]);
                                    break;
                                }
                                r += i;
                            }
                            return (
                                r === e && (t = r),
                                {
                                    name: t,
                                    version: n,
                                }
                            );
                        })(e.nextHopProtocol),
                        r = [];
                    return (r.push(["network.protocol.version", n], ["network.protocol.name", t]), I.Z1)
                        ? [
                              ...r,
                              ["http.request.redirect_start", m(e.redirectStart)],
                              ["http.request.fetch_start", m(e.fetchStart)],
                              ["http.request.domain_lookup_start", m(e.domainLookupStart)],
                              ["http.request.domain_lookup_end", m(e.domainLookupEnd)],
                              ["http.request.connect_start", m(e.connectStart)],
                              ["http.request.secure_connection_start", m(e.secureConnectionStart)],
                              ["http.request.connection_end", m(e.connectEnd)],
                              ["http.request.request_start", m(e.requestStart)],
                              ["http.request.response_start", m(e.responseStart)],
                              ["http.request.response_end", m(e.responseEnd)],
                          ]
                        : r;
                })(r).forEach((t) => e.setAttribute(...t)),
                setTimeout(n));
        });
    });
}
function m(e = 0) {
    return ((I.Z1 || performance.timeOrigin) + e) / 1000;
}
function D(e) {
    try {
        return new URL(e, N.m9.location.origin).href;
    } catch (e) {
        return;
    }
}
