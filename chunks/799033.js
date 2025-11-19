_.d(e, {
    L7: () => P,
    k3: () => C,
});
var a = _(157079),
    r = _(501684),
    n = _(868497),
    o = _(696486),
    E = _(73453),
    i = _(793373),
    c = _(152228),
    s = _(988097),
    l = _(789112),
    I = _(263449),
    R = _(305625),
    N = _(64685),
    A = _(873567),
    u = _(101284),
    T = _(886115),
    d = _(370541),
    f = _(285883),
    O = _(163162);
let L = new WeakMap(),
    p = new Map(),
    C = {
        traceFetch: !0,
        traceXHR: !0,
        enableHTTPTimings: !0,
    };
function P(t, e) {
    let {
            traceFetch: _,
            traceXHR: r,
            shouldCreateSpanForRequest: u,
            enableHTTPTimings: P,
            tracePropagationTargets: D,
        } = {
            traceFetch: C.traceFetch,
            traceXHR: C.traceXHR,
            ...e,
        },
        g = "function" == typeof u ? u : (t) => !0,
        y = (t) =>
            (function (t, e) {
                let _ = O.m9.location && O.m9.location.href;
                if (_) {
                    let a, r;
                    try {
                        (a = new URL(t, _)), (r = new URL(_).origin);
                    } catch (t) {
                        return !1;
                    }
                    let n = a.origin === r;
                    return e ? (0, T.U0)(a.toString(), e) || (n && (0, T.U0)(a.pathname, e)) : n;
                }
                {
                    let _ = !!t.match(/^\/(?!\/)/);
                    return e ? (0, T.U0)(t, e) : _;
                }
            })(t, D),
        m = {};
    _ &&
        (t.addEventProcessor(
            (t) => (
                "transaction" === t.type &&
                    t.spans &&
                    t.spans.forEach((t) => {
                        if ("http.client" === t.op) {
                            let e = p.get(t.span_id);
                            e && ((t.timestamp = e / 1000), p.delete(t.span_id));
                        }
                    }),
                t
            ),
        ),
        (0, N.cf)((t) => {
            if (t.response) {
                let e = L.get(t.response);
                e && t.endTimestamp && p.set(e, t.endTimestamp);
            }
        }),
        (0, N.Uf)((t) => {
            let e = (0, n.m)(t, g, y, m);
            if ((t.response && t.fetchData.__span && L.set(t.response, t.fetchData.__span), e)) {
                let _ = S(t.fetchData.url),
                    a = _ ? (0, A.en)(_).host : void 0;
                e.setAttributes({
                    "http.url": _,
                    "server.address": a,
                });
            }
            P && e && h(e);
        })),
        r &&
            (0, a.UK)((t) => {
                let e = (function (t, e, _, r) {
                    let n = t.xhr,
                        N = n && n[a.xU];
                    if (!n || n.__sentry_own_request__ || !N) return;
                    let u = (0, E.z)() && e(N.url);
                    if (t.endTimestamp && u) {
                        let t = n.__sentry_xhr_span_id__;
                        if (!t) return;
                        let e = r[t];
                        e && void 0 !== N.status_code && ((0, i.Q0)(e, N.status_code), e.end(), delete r[t]);
                        return;
                    }
                    let T = S(N.url),
                        O = T ? (0, A.en)(T).host : void 0,
                        L = !!(0, o.HN)(),
                        p =
                            u && L
                                ? (0, c.qp)({
                                      name: `${N.method} ${N.url}`,
                                      attributes: {
                                          type: "xhr",
                                          "http.method": N.method,
                                          "http.url": T,
                                          url: N.url,
                                          "server.address": O,
                                          [s.S3]: "auto.http.browser",
                                          [s.$J]: "http.client",
                                      },
                                  })
                                : new l.b();
                    (n.__sentry_xhr_span_id__ = p.spanContext().spanId), (r[n.__sentry_xhr_span_id__] = p);
                    let C = (0, I.s3)();
                    return (
                        n.setRequestHeader &&
                            _(N.url) &&
                            C &&
                            (function (t, e, _) {
                                let a = (0, I.nZ)(),
                                    {
                                        traceId: r,
                                        spanId: n,
                                        sampled: i,
                                        dsc: c,
                                    } = {
                                        ...(0, I.aF)().getPropagationContext(),
                                        ...a.getPropagationContext(),
                                    },
                                    s = _ && (0, E.z)() ? (0, o.Hb)(_) : (0, d.$p)(r, n, i);
                                var l = t,
                                    N = s,
                                    A = (0, f.IQ)(c || (_ ? (0, R.jC)(_) : (0, R._l)(r, e)));
                                try {
                                    l.setRequestHeader("sentry-trace", N), A && l.setRequestHeader(f.bU, A);
                                } catch (t) {}
                            })(n, C, (0, E.z)() && L ? p : void 0),
                        p
                    );
                })(t, g, y, m);
                P && e && h(e);
            });
}
function h(t) {
    let { url: e } = (0, o.XU)(t).data || {};
    if (!e || "string" != typeof e) return;
    let _ = (0, r._j)("resource", ({ entries: a }) => {
        a.forEach((a) => {
            "resource" === a.entryType &&
                "initiatorType" in a &&
                "string" == typeof a.nextHopProtocol &&
                ("fetch" === a.initiatorType || "xmlhttprequest" === a.initiatorType) &&
                a.name.endsWith(e) &&
                ((function (t) {
                    let { name: e, version: _ } = (function (t) {
                            let e = "unknown",
                                _ = "unknown",
                                a = "";
                            for (let r of t) {
                                if ("/" === r) {
                                    [e, _] = t.split("/");
                                    break;
                                }
                                if (!isNaN(Number(r))) {
                                    (e = "h" === a ? "http" : a), (_ = t.split(a)[1]);
                                    break;
                                }
                                a += r;
                            }
                            return (
                                a === t && (e = a),
                                {
                                    name: e,
                                    version: _,
                                }
                            );
                        })(t.nextHopProtocol),
                        a = [];
                    return (a.push(["network.protocol.version", _], ["network.protocol.name", e]), u.Z1)
                        ? [
                              ...a,
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
                        : a;
                })(a).forEach((e) => t.setAttribute(...e)),
                setTimeout(_));
        });
    });
}
function D(t = 0) {
    return ((u.Z1 || performance.timeOrigin) + t) / 1000;
}
function S(t) {
    try {
        return new URL(t, O.m9.location.origin).href;
    } catch (t) {
        return;
    }
}
