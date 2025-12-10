r.d(t, {
    L7: () => D,
    k3: () => S,
});
var n = r(568538),
    a = r(687566),
    i = r(343962),
    o = r(82255),
    _ = r(451542),
    s = r(366000),
    c = r(700868),
    E = r(8062),
    l = r(25855),
    u = r(509440),
    d = r(464338),
    I = r(545146),
    p = r(840247),
    R = r(343573),
    T = r(1693),
    A = r(490990),
    f = r(288101),
    N = r(889929);
let O = new WeakMap(),
    h = new Map(),
    S = {
        traceFetch: !0,
        traceXHR: !0,
        enableHTTPTimings: !0,
    };
function D(e, t) {
    let {
            traceFetch: r,
            traceXHR: a,
            shouldCreateSpanForRequest: R,
            enableHTTPTimings: D,
            tracePropagationTargets: L,
        } = {
            traceFetch: S.traceFetch,
            traceXHR: S.traceXHR,
            ...t,
        },
        m = "function" == typeof R ? R : (e) => !0,
        y = (e) =>
            (function (e, t) {
                let r = N.m9.location && N.m9.location.href;
                if (r) {
                    let n, a;
                    try {
                        (n = new URL(e, r)), (a = new URL(r).origin);
                    } catch (e) {
                        return !1;
                    }
                    let i = n.origin === a;
                    return t ? (0, T.U0)(n.toString(), t) || (i && (0, T.U0)(n.pathname, t)) : i;
                }
                {
                    let r = !!e.match(/^\/(?!\/)/);
                    return t ? (0, T.U0)(e, t) : r;
                }
            })(e, L),
        P = {};
    r &&
        (e.addEventProcessor(
            (e) => (
                "transaction" === e.type &&
                    e.spans &&
                    e.spans.forEach((e) => {
                        if ("http.client" === e.op) {
                            let t = h.get(e.span_id);
                            t && ((e.timestamp = t / 1000), h.delete(e.span_id));
                        }
                    }),
                e
            ),
        ),
        (0, I.cf)((e) => {
            if (e.response) {
                let t = O.get(e.response);
                t && e.endTimestamp && h.set(t, e.endTimestamp);
            }
        }),
        (0, I.Uf)((e) => {
            let t = (0, i.m)(e, m, y, P);
            if ((e.response && e.fetchData.__span && O.set(e.response, e.fetchData.__span), t)) {
                let r = g(e.fetchData.url),
                    n = r ? (0, p.en)(r).host : void 0;
                t.setAttributes({
                    "http.url": r,
                    "server.address": n,
                });
            }
            D && t && C(t);
        })),
        a &&
            (0, n.UK)((e) => {
                let t = (function (e, t, r, a) {
                    let i = e.xhr,
                        I = i && i[n.xU];
                    if (!i || i.__sentry_own_request__ || !I) return;
                    let R = (0, _.z)() && t(I.url);
                    if (e.endTimestamp && R) {
                        let e = i.__sentry_xhr_span_id__;
                        if (!e) return;
                        let t = a[e];
                        t && void 0 !== I.status_code && ((0, s.Q0)(t, I.status_code), t.end(), delete a[e]);
                        return;
                    }
                    let T = g(I.url),
                        N = T ? (0, p.en)(T).host : void 0,
                        O = !!(0, o.HN)(),
                        h =
                            R && O
                                ? (0, c.qp)({
                                      name: `${I.method} ${I.url}`,
                                      attributes: {
                                          type: "xhr",
                                          "http.method": I.method,
                                          "http.url": T,
                                          url: I.url,
                                          "server.address": N,
                                          [E.S3]: "auto.http.browser",
                                          [E.$J]: "http.client",
                                      },
                                  })
                                : new l.b();
                    (i.__sentry_xhr_span_id__ = h.spanContext().spanId), (a[i.__sentry_xhr_span_id__] = h);
                    let S = (0, u.s3)();
                    return (
                        i.setRequestHeader &&
                            r(I.url) &&
                            S &&
                            (function (e, t, r) {
                                let n = (0, u.nZ)(),
                                    {
                                        traceId: a,
                                        spanId: i,
                                        sampled: s,
                                        dsc: c,
                                    } = {
                                        ...(0, u.aF)().getPropagationContext(),
                                        ...n.getPropagationContext(),
                                    },
                                    E = r && (0, _.z)() ? (0, o.Hb)(r) : (0, A.$p)(a, i, s);
                                var l = e,
                                    I = E,
                                    p = (0, f.IQ)(c || (r ? (0, d.jC)(r) : (0, d._l)(a, t)));
                                try {
                                    l.setRequestHeader("sentry-trace", I), p && l.setRequestHeader(f.bU, p);
                                } catch (e) {}
                            })(i, S, (0, _.z)() && O ? h : void 0),
                        h
                    );
                })(e, m, y, P);
                D && t && C(t);
            });
}
function C(e) {
    let { url: t } = (0, o.XU)(e).data || {};
    if (!t || "string" != typeof t) return;
    let r = (0, a._j)("resource", ({ entries: n }) => {
        n.forEach((n) => {
            "resource" === n.entryType &&
                "initiatorType" in n &&
                "string" == typeof n.nextHopProtocol &&
                ("fetch" === n.initiatorType || "xmlhttprequest" === n.initiatorType) &&
                n.name.endsWith(t) &&
                ((function (e) {
                    let { name: t, version: r } = (function (e) {
                            let t = "unknown",
                                r = "unknown",
                                n = "";
                            for (let a of e) {
                                if ("/" === a) {
                                    [t, r] = e.split("/");
                                    break;
                                }
                                if (!isNaN(Number(a))) {
                                    (t = "h" === n ? "http" : n), (r = e.split(n)[1]);
                                    break;
                                }
                                n += a;
                            }
                            return (
                                n === e && (t = n),
                                {
                                    name: t,
                                    version: r,
                                }
                            );
                        })(e.nextHopProtocol),
                        n = [];
                    return (n.push(["network.protocol.version", r], ["network.protocol.name", t]), R.Z1)
                        ? [
                              ...n,
                              ["http.request.redirect_start", L(e.redirectStart)],
                              ["http.request.fetch_start", L(e.fetchStart)],
                              ["http.request.domain_lookup_start", L(e.domainLookupStart)],
                              ["http.request.domain_lookup_end", L(e.domainLookupEnd)],
                              ["http.request.connect_start", L(e.connectStart)],
                              ["http.request.secure_connection_start", L(e.secureConnectionStart)],
                              ["http.request.connection_end", L(e.connectEnd)],
                              ["http.request.request_start", L(e.requestStart)],
                              ["http.request.response_start", L(e.responseStart)],
                              ["http.request.response_end", L(e.responseEnd)],
                          ]
                        : n;
                })(n).forEach((t) => e.setAttribute(...t)),
                setTimeout(r));
        });
    });
}
function L(e = 0) {
    return ((R.Z1 || performance.timeOrigin) + e) / 1000;
}
function g(e) {
    try {
        return new URL(e, N.m9.location.origin).href;
    } catch (e) {
        return;
    }
}
