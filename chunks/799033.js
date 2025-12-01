r.d(t, {
    L7: () => S,
    k3: () => D,
});
var n = r(157079),
    a = r(501684),
    i = r(868497),
    o = r(696486),
    _ = r(73453),
    s = r(793373),
    c = r(152228),
    E = r(988097),
    l = r(789112),
    u = r(263449),
    d = r(305625),
    I = r(64685),
    p = r(873567),
    R = r(101284),
    T = r(886115),
    A = r(370541),
    N = r(285883),
    f = r(163162);
let O = new WeakMap(),
    h = new Map(),
    D = {
        traceFetch: !0,
        traceXHR: !0,
        enableHTTPTimings: !0,
    };
function S(e, t) {
    let {
            traceFetch: r,
            traceXHR: a,
            shouldCreateSpanForRequest: R,
            enableHTTPTimings: S,
            tracePropagationTargets: C,
        } = {
            traceFetch: D.traceFetch,
            traceXHR: D.traceXHR,
            ...t,
        },
        m = "function" == typeof R ? R : (e) => !0,
        y = (e) =>
            (function (e, t) {
                let r = f.m9.location && f.m9.location.href;
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
            })(e, C),
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
            S && t && L(t);
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
                        f = T ? (0, p.en)(T).host : void 0,
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
                                          "server.address": f,
                                          [E.S3]: "auto.http.browser",
                                          [E.$J]: "http.client",
                                      },
                                  })
                                : new l.b();
                    (i.__sentry_xhr_span_id__ = h.spanContext().spanId), (a[i.__sentry_xhr_span_id__] = h);
                    let D = (0, u.s3)();
                    return (
                        i.setRequestHeader &&
                            r(I.url) &&
                            D &&
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
                                    p = (0, N.IQ)(c || (r ? (0, d.jC)(r) : (0, d._l)(a, t)));
                                try {
                                    l.setRequestHeader("sentry-trace", I), p && l.setRequestHeader(N.bU, p);
                                } catch (e) {}
                            })(i, D, (0, _.z)() && O ? h : void 0),
                        h
                    );
                })(e, m, y, P);
                S && t && L(t);
            });
}
function L(e) {
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
                              ["http.request.redirect_start", C(e.redirectStart)],
                              ["http.request.fetch_start", C(e.fetchStart)],
                              ["http.request.domain_lookup_start", C(e.domainLookupStart)],
                              ["http.request.domain_lookup_end", C(e.domainLookupEnd)],
                              ["http.request.connect_start", C(e.connectStart)],
                              ["http.request.secure_connection_start", C(e.secureConnectionStart)],
                              ["http.request.connection_end", C(e.connectEnd)],
                              ["http.request.request_start", C(e.requestStart)],
                              ["http.request.response_start", C(e.responseStart)],
                              ["http.request.response_end", C(e.responseEnd)],
                          ]
                        : n;
                })(n).forEach((t) => e.setAttribute(...t)),
                setTimeout(r));
        });
    });
}
function C(e = 0) {
    return ((R.Z1 || performance.timeOrigin) + e) / 1000;
}
function g(e) {
    try {
        return new URL(e, f.m9.location.origin).href;
    } catch (e) {
        return;
    }
}
