r.d(t, { m: () => p });
var n = r(873567),
    a = r(370541),
    i = r(285883),
    o = r(573736),
    _ = r(263449),
    s = r(988097),
    c = r(73453),
    E = r(696486),
    l = r(789112),
    u = r(793373),
    d = r(152228),
    I = r(305625);
function p(e, t, r, R, T = "auto.http.browser") {
    if (!e.fetchData) return;
    let A = (0, c.z)() && t(e.fetchData.url);
    if (e.endTimestamp && A) {
        let t = e.fetchData.__span;
        if (!t) return;
        let r = R[t];
        r &&
            ((function (e, t) {
                if (t.response) {
                    (0, u.Q0)(e, t.response.status);
                    let r = t.response && t.response.headers && t.response.headers.get("content-length");
                    if (r) {
                        let t = parseInt(r);
                        t > 0 && e.setAttribute("http.response_content_length", t);
                    }
                } else
                    t.error &&
                        e.setStatus({
                            code: u.jt,
                            message: "internal_error",
                        });
                e.end();
            })(r, e),
            delete R[t]);
        return;
    }
    let N = (0, _.nZ)(),
        f = (0, _.s3)(),
        { method: O, url: h } = e.fetchData,
        D = (function (e) {
            try {
                return new URL(e).href;
            } catch (e) {
                return;
            }
        })(h),
        S = D ? (0, n.en)(D).host : void 0,
        L = !!(0, E.HN)(),
        C =
            A && L
                ? (0, d.qp)({
                      name: `${O} ${h}`,
                      attributes: {
                          url: h,
                          type: "fetch",
                          "http.method": O,
                          "http.url": D,
                          "server.address": S,
                          [s.S3]: T,
                          [s.$J]: "http.client",
                      },
                  })
                : new l.b();
    if (((e.fetchData.__span = C.spanContext().spanId), (R[C.spanContext().spanId] = C), r(e.fetchData.url) && f)) {
        let t = e.args[0];
        e.args[1] = e.args[1] || {};
        let r = e.args[1];
        r.headers = (function (e, t, r, n, s) {
            let {
                    traceId: c,
                    spanId: l,
                    sampled: u,
                    dsc: d,
                } = {
                    ...(0, _.aF)().getPropagationContext(),
                    ...r.getPropagationContext(),
                },
                p = s ? (0, E.Hb)(s) : (0, a.$p)(c, l, u),
                R = (0, i.IQ)(d || (s ? (0, I.jC)(s) : (0, I._l)(c, t))),
                T = n.headers || ("undefined" != typeof Request && (0, o.V9)(e, Request) ? e.headers : void 0);
            if (!T)
                return {
                    "sentry-trace": p,
                    baggage: R,
                };
            if ("undefined" != typeof Headers && (0, o.V9)(T, Headers)) {
                let e = new Headers(T);
                return e.append("sentry-trace", p), R && e.append(i.bU, R), e;
            }
            if (Array.isArray(T)) {
                let e = [...T, ["sentry-trace", p]];
                return R && e.push([i.bU, R]), e;
            }
            {
                let e = "baggage" in T ? T.baggage : void 0,
                    t = [];
                return (
                    Array.isArray(e) ? t.push(...e) : e && t.push(e),
                    R && t.push(R),
                    {
                        ...T,
                        "sentry-trace": p,
                        baggage: t.length > 0 ? t.join(",") : void 0,
                    }
                );
            }
        })(t, f, N, r, (0, c.z)() && L ? C : void 0);
    }
    return C;
}
