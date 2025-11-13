a.d(e, {
    L7: () => P,
    k3: () => h,
});
var r = a(157079),
    _ = a(501684),
    n = a(868497),
    o = a(696486),
    i = a(73453),
    E = a(793373),
    c = a(152228),
    s = a(988097),
    l = a(789112),
    I = a(263449),
    R = a(305625),
    u = a(64685),
    A = a(873567),
    N = a(101284),
    T = a(886115),
    d = a(370541),
    f = a(285883),
    L = a(163162);
let p = new WeakMap(),
    O = new Map(),
    h = {
        traceFetch: !0,
        traceXHR: !0,
        enableHTTPTimings: !0,
    };
function P(t, e) {
    let {
            traceFetch: a,
            traceXHR: _,
            shouldCreateSpanForRequest: N,
            enableHTTPTimings: P,
            tracePropagationTargets: D,
        } = {
            traceFetch: h.traceFetch,
            traceXHR: h.traceXHR,
            ...e,
        },
        S = "function" == typeof N ? N : (t) => !0,
        m = (t) =>
            (function (t, e) {
                let a = L.m9.location && L.m9.location.href;
                if (a) {
                    let r, _;
                    try {
                        (r = new URL(t, a)), (_ = new URL(a).origin);
                    } catch (t) {
                        return !1;
                    }
                    let n = r.origin === _;
                    return e ? (0, T.U0)(r.toString(), e) || (n && (0, T.U0)(r.pathname, e)) : n;
                }
                {
                    let a = !!t.match(/^\/(?!\/)/);
                    return e ? (0, T.U0)(t, e) : a;
                }
            })(t, D),
        v = {};
    a &&
        (t.addEventProcessor(
            (t) => (
                "transaction" === t.type &&
                    t.spans &&
                    t.spans.forEach((t) => {
                        if ("http.client" === t.op) {
                            let e = O.get(t.span_id);
                            e && ((t.timestamp = e / 1000), O.delete(t.span_id));
                        }
                    }),
                t
            ),
        ),
        (0, u.cf)((t) => {
            if (t.response) {
                let e = p.get(t.response);
                e && t.endTimestamp && O.set(e, t.endTimestamp);
            }
        }),
        (0, u.Uf)((t) => {
            let e = (0, n.m)(t, S, m, v);
            if ((t.response && t.fetchData.__span && p.set(t.response, t.fetchData.__span), e)) {
                let a = g(t.fetchData.url),
                    r = a ? (0, A.en)(a).host : void 0;
                e.setAttributes({
                    "http.url": a,
                    "server.address": r,
                });
            }
            P && e && C(e);
        })),
        _ &&
            (0, r.UK)((t) => {
                let e = (function (t, e, a, _) {
                    let n = t.xhr,
                        u = n && n[r.xU];
                    if (!n || n.__sentry_own_request__ || !u) return;
                    let N = (0, i.z)() && e(u.url);
                    if (t.endTimestamp && N) {
                        let t = n.__sentry_xhr_span_id__;
                        if (!t) return;
                        let e = _[t];
                        e && void 0 !== u.status_code && ((0, E.Q0)(e, u.status_code), e.end(), delete _[t]);
                        return;
                    }
                    let T = g(u.url),
                        L = T ? (0, A.en)(T).host : void 0,
                        p = !!(0, o.HN)(),
                        O =
                            N && p
                                ? (0, c.qp)({
                                      name: `${u.method} ${u.url}`,
                                      attributes: {
                                          type: "xhr",
                                          "http.method": u.method,
                                          "http.url": T,
                                          url: u.url,
                                          "server.address": L,
                                          [s.S3]: "auto.http.browser",
                                          [s.$J]: "http.client",
                                      },
                                  })
                                : new l.b();
                    (n.__sentry_xhr_span_id__ = O.spanContext().spanId), (_[n.__sentry_xhr_span_id__] = O);
                    let h = (0, I.s3)();
                    return (
                        n.setRequestHeader &&
                            a(u.url) &&
                            h &&
                            (function (t, e, a) {
                                let r = (0, I.nZ)(),
                                    {
                                        traceId: _,
                                        spanId: n,
                                        sampled: E,
                                        dsc: c,
                                    } = {
                                        ...(0, I.aF)().getPropagationContext(),
                                        ...r.getPropagationContext(),
                                    },
                                    s = a && (0, i.z)() ? (0, o.Hb)(a) : (0, d.$p)(_, n, E);
                                var l = t,
                                    u = s,
                                    A = (0, f.IQ)(c || (a ? (0, R.jC)(a) : (0, R._l)(_, e)));
                                try {
                                    l.setRequestHeader("sentry-trace", u), A && l.setRequestHeader(f.bU, A);
                                } catch (t) {}
                            })(n, h, (0, i.z)() && p ? O : void 0),
                        O
                    );
                })(t, S, m, v);
                P && e && C(e);
            });
}
function C(t) {
    let { url: e } = (0, o.XU)(t).data || {};
    if (!e || "string" != typeof e) return;
    let a = (0, _._j)("resource", ({ entries: r }) => {
        r.forEach((r) => {
            "resource" === r.entryType &&
                "initiatorType" in r &&
                "string" == typeof r.nextHopProtocol &&
                ("fetch" === r.initiatorType || "xmlhttprequest" === r.initiatorType) &&
                r.name.endsWith(e) &&
                ((function (t) {
                    let { name: e, version: a } = (function (t) {
                            let e = "unknown",
                                a = "unknown",
                                r = "";
                            for (let _ of t) {
                                if ("/" === _) {
                                    [e, a] = t.split("/");
                                    break;
                                }
                                if (!isNaN(Number(_))) {
                                    (e = "h" === r ? "http" : r), (a = t.split(r)[1]);
                                    break;
                                }
                                r += _;
                            }
                            return (
                                r === t && (e = r),
                                {
                                    name: e,
                                    version: a,
                                }
                            );
                        })(t.nextHopProtocol),
                        r = [];
                    return (r.push(["network.protocol.version", a], ["network.protocol.name", e]), N.Z1)
                        ? [
                              ...r,
                              ["http.request.redirect_start", D(t.redirectStart)],
                              ["http.request.fetch_start", D(t.fetchStart)],
                              ["http.request.domain_lookup_start", D(t.domainLookupStart)],
                              ["http.request.domain_lookup_end", D(t.domainLookupEnd)],
                              ["http.request.connect_start", D(t.connectStart)],
                              ["http.request.secure_connection_start", D(t.secureConnectionStart)],
                              ["http.request.connection_end", D(t.connectEnd)],
                              ["http.request.request_start", D(t.requestStart)],
                              ["http.request.response_start", D(t.responseStart)],
                              ["http.request.response_end", D(t.responseEnd)],
                          ]
                        : r;
                })(r).forEach((e) => t.setAttribute(...e)),
                setTimeout(a));
        });
    });
}
function D(t = 0) {
    return ((N.Z1 || performance.timeOrigin) + t) / 1000;
}
function g(t) {
    try {
        return new URL(t, L.m9.location.origin).href;
    } catch (t) {
        return;
    }
}
