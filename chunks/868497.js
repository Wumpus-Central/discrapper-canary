a.d(e, { m: () => d });
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
function d(t, e, a, N, A = "auto.http.browser") {
    if (!t.fetchData) return;
    let T = (0, E.z)() && e(t.fetchData.url);
    if (t.endTimestamp && T) {
        let e = t.fetchData.__span;
        if (!e) return;
        let a = N[e];
        a &&
            ((function (t, e) {
                if (e.response) {
                    (0, I.Q0)(t, e.response.status);
                    let a = e.response && e.response.headers && e.response.headers.get("content-length");
                    if (a) {
                        let e = parseInt(a);
                        e > 0 && t.setAttribute("http.response_content_length", e);
                    }
                } else
                    e.error &&
                        t.setStatus({
                            code: I.jt,
                            message: "internal_error",
                        });
                t.end();
            })(a, t),
            delete N[e]);
        return;
    }
    let f = (0, i.nZ)(),
        L = (0, i.s3)(),
        { method: p, url: h } = t.fetchData,
        O = (function (t) {
            try {
                return new URL(t).href;
            } catch (t) {
                return;
            }
        })(h),
        P = O ? (0, r.en)(O).host : void 0,
        D = !!(0, s.HN)(),
        g =
            T && D
                ? (0, u.qp)({
                      name: `${p} ${h}`,
                      attributes: {
                          url: h,
                          type: "fetch",
                          "http.method": p,
                          "http.url": O,
                          "server.address": P,
                          [c.S3]: A,
                          [c.$J]: "http.client",
                      },
                  })
                : new l.b();
    if (((t.fetchData.__span = g.spanContext().spanId), (N[g.spanContext().spanId] = g), a(t.fetchData.url) && L)) {
        let e = t.args[0];
        t.args[1] = t.args[1] || {};
        let a = t.args[1];
        a.headers = (function (t, e, a, r, c) {
            let {
                    traceId: E,
                    spanId: l,
                    sampled: I,
                    dsc: u,
                } = {
                    ...(0, i.aF)().getPropagationContext(),
                    ...a.getPropagationContext(),
                },
                d = c ? (0, s.Hb)(c) : (0, _.$p)(E, l, I),
                N = (0, n.IQ)(u || (c ? (0, R.jC)(c) : (0, R._l)(E, e))),
                A = r.headers || ("undefined" != typeof Request && (0, o.V9)(t, Request) ? t.headers : void 0);
            if (!A)
                return {
                    "sentry-trace": d,
                    baggage: N,
                };
            if ("undefined" != typeof Headers && (0, o.V9)(A, Headers)) {
                let t = new Headers(A);
                return t.append("sentry-trace", d), N && t.append(n.bU, N), t;
            }
            if (Array.isArray(A)) {
                let t = [...A, ["sentry-trace", d]];
                return N && t.push([n.bU, N]), t;
            }
            {
                let t = "baggage" in A ? A.baggage : void 0,
                    e = [];
                return (
                    Array.isArray(t) ? e.push(...t) : t && e.push(t),
                    N && e.push(N),
                    {
                        ...A,
                        "sentry-trace": d,
                        baggage: e.length > 0 ? e.join(",") : void 0,
                    }
                );
            }
        })(e, L, f, a, (0, E.z)() && D ? g : void 0);
    }
    return g;
}
