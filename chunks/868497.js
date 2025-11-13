a.d(e, { m: () => A });
var r = a(873567),
    _ = a(370541),
    n = a(285883),
    o = a(573736),
    i = a(263449),
    E = a(988097),
    c = a(73453),
    s = a(696486),
    l = a(789112),
    I = a(793373),
    R = a(152228),
    u = a(305625);
function A(t, e, a, N, T = "auto.http.browser") {
    if (!t.fetchData) return;
    let d = (0, c.z)() && e(t.fetchData.url);
    if (t.endTimestamp && d) {
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
        { method: p, url: O } = t.fetchData,
        h = (function (t) {
            try {
                return new URL(t).href;
            } catch (t) {
                return;
            }
        })(O),
        P = h ? (0, r.en)(h).host : void 0,
        C = !!(0, s.HN)(),
        D =
            d && C
                ? (0, R.qp)({
                      name: `${p} ${O}`,
                      attributes: {
                          url: O,
                          type: "fetch",
                          "http.method": p,
                          "http.url": h,
                          "server.address": P,
                          [E.S3]: T,
                          [E.$J]: "http.client",
                      },
                  })
                : new l.b();
    if (((t.fetchData.__span = D.spanContext().spanId), (N[D.spanContext().spanId] = D), a(t.fetchData.url) && L)) {
        let e = t.args[0];
        t.args[1] = t.args[1] || {};
        let a = t.args[1];
        a.headers = (function (t, e, a, r, E) {
            let {
                    traceId: c,
                    spanId: l,
                    sampled: I,
                    dsc: R,
                } = {
                    ...(0, i.aF)().getPropagationContext(),
                    ...a.getPropagationContext(),
                },
                A = E ? (0, s.Hb)(E) : (0, _.$p)(c, l, I),
                N = (0, n.IQ)(R || (E ? (0, u.jC)(E) : (0, u._l)(c, e))),
                T = r.headers || ("undefined" != typeof Request && (0, o.V9)(t, Request) ? t.headers : void 0);
            if (!T)
                return {
                    "sentry-trace": A,
                    baggage: N,
                };
            if ("undefined" != typeof Headers && (0, o.V9)(T, Headers)) {
                let t = new Headers(T);
                return t.append("sentry-trace", A), N && t.append(n.bU, N), t;
            }
            if (Array.isArray(T)) {
                let t = [...T, ["sentry-trace", A]];
                return N && t.push([n.bU, N]), t;
            }
            {
                let t = "baggage" in T ? T.baggage : void 0,
                    e = [];
                return (
                    Array.isArray(t) ? e.push(...t) : t && e.push(t),
                    N && e.push(N),
                    {
                        ...T,
                        "sentry-trace": A,
                        baggage: e.length > 0 ? e.join(",") : void 0,
                    }
                );
            }
        })(e, L, f, a, (0, c.z)() && C ? D : void 0);
    }
    return D;
}
