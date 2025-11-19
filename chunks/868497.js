_.d(e, { m: () => A });
var a = _(873567),
    r = _(370541),
    n = _(285883),
    o = _(573736),
    E = _(263449),
    i = _(988097),
    c = _(73453),
    s = _(696486),
    l = _(789112),
    I = _(793373),
    R = _(152228),
    N = _(305625);
function A(t, e, _, u, T = "auto.http.browser") {
    if (!t.fetchData) return;
    let d = (0, c.z)() && e(t.fetchData.url);
    if (t.endTimestamp && d) {
        let e = t.fetchData.__span;
        if (!e) return;
        let _ = u[e];
        _ &&
            ((function (t, e) {
                if (e.response) {
                    (0, I.Q0)(t, e.response.status);
                    let _ = e.response && e.response.headers && e.response.headers.get("content-length");
                    if (_) {
                        let e = parseInt(_);
                        e > 0 && t.setAttribute("http.response_content_length", e);
                    }
                } else
                    e.error &&
                        t.setStatus({
                            code: I.jt,
                            message: "internal_error",
                        });
                t.end();
            })(_, t),
            delete u[e]);
        return;
    }
    let f = (0, E.nZ)(),
        O = (0, E.s3)(),
        { method: L, url: p } = t.fetchData,
        C = (function (t) {
            try {
                return new URL(t).href;
            } catch (t) {
                return;
            }
        })(p),
        P = C ? (0, a.en)(C).host : void 0,
        h = !!(0, s.HN)(),
        D =
            d && h
                ? (0, R.qp)({
                      name: `${L} ${p}`,
                      attributes: {
                          url: p,
                          type: "fetch",
                          "http.method": L,
                          "http.url": C,
                          "server.address": P,
                          [i.S3]: T,
                          [i.$J]: "http.client",
                      },
                  })
                : new l.b();
    if (((t.fetchData.__span = D.spanContext().spanId), (u[D.spanContext().spanId] = D), _(t.fetchData.url) && O)) {
        let e = t.args[0];
        t.args[1] = t.args[1] || {};
        let _ = t.args[1];
        _.headers = (function (t, e, _, a, i) {
            let {
                    traceId: c,
                    spanId: l,
                    sampled: I,
                    dsc: R,
                } = {
                    ...(0, E.aF)().getPropagationContext(),
                    ..._.getPropagationContext(),
                },
                A = i ? (0, s.Hb)(i) : (0, r.$p)(c, l, I),
                u = (0, n.IQ)(R || (i ? (0, N.jC)(i) : (0, N._l)(c, e))),
                T = a.headers || ("undefined" != typeof Request && (0, o.V9)(t, Request) ? t.headers : void 0);
            if (!T)
                return {
                    "sentry-trace": A,
                    baggage: u,
                };
            if ("undefined" != typeof Headers && (0, o.V9)(T, Headers)) {
                let t = new Headers(T);
                return t.append("sentry-trace", A), u && t.append(n.bU, u), t;
            }
            if (Array.isArray(T)) {
                let t = [...T, ["sentry-trace", A]];
                return u && t.push([n.bU, u]), t;
            }
            {
                let t = "baggage" in T ? T.baggage : void 0,
                    e = [];
                return (
                    Array.isArray(t) ? e.push(...t) : t && e.push(t),
                    u && e.push(u),
                    {
                        ...T,
                        "sentry-trace": A,
                        baggage: e.length > 0 ? e.join(",") : void 0,
                    }
                );
            }
        })(e, O, f, _, (0, c.z)() && h ? D : void 0);
    }
    return D;
}
