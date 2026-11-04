var r = n(608768),
    i = n(415369),
    o = n(690094),
    a = n(978862);
function s(e, t) {
    for (let n of e[1]) {
        let e = n[0].type;
        if (t(n, e)) return !0;
    }
    return !1;
}
function l(e) {
    return a.O.__SENTRY__ && a.O.__SENTRY__.encodePolyfill
        ? a.O.__SENTRY__.encodePolyfill(e)
        : new TextEncoder().encode(e);
}
let c = {
    session: "session",
    sessions: "session",
    attachment: "attachment",
    transaction: "transaction",
    event: "error",
    client_report: "internal",
    user_report: "default",
    profile: "profile",
    profile_chunk: "profile",
    replay_event: "replay",
    replay_recording: "replay",
    check_in: "monitor",
    feedback: "feedback",
    span: "span",
    statsd: "metric_bucket",
    raw_security: "security",
};
n.d(
    t,
    {},
    {
        Cj: function (e) {
            if (!e || !e.sdk) return;
            let { name: t, version: n } = e.sdk;
            return { name: t, version: n };
        },
        W3: function (e, t) {
            let [n, r] = e;
            return [n, [...r, t]];
        },
        bN: function (e) {
            let [t, n] = e,
                r = JSON.stringify(t);
            function o(e) {
                "string" == typeof r
                    ? (r = "string" == typeof e ? r + e : [l(r), e])
                    : r.push("string" == typeof e ? l(e) : e);
            }
            for (let e of n) {
                let [t, n] = e;
                if (
                    (o(`
${JSON.stringify(t)}
`),
                    "string" == typeof n || n instanceof Uint8Array)
                )
                    o(n);
                else {
                    let e;
                    try {
                        e = JSON.stringify(n);
                    } catch (t) {
                        e = JSON.stringify((0, i.S8)(n));
                    }
                    o(e);
                }
            }
            return "string" == typeof r
                ? r
                : (function (e) {
                      let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0)),
                          n = 0;
                      for (let r of e) (t.set(r, n), (n += r.length));
                      return t;
                  })(r);
        },
        bm: function (e) {
            let t = "string" == typeof e.data ? l(e.data) : e.data;
            return [
                (0, o.Ce)({
                    type: "attachment",
                    length: t.length,
                    filename: e.filename,
                    content_type: e.contentType,
                    attachment_type: e.attachmentType,
                }),
                t,
            ];
        },
        h4: function (e, t = []) {
            return [e, t];
        },
        hP: function (e, t) {
            return s(e, (e, n) => t.includes(n));
        },
        mE: function (e) {
            let t = "string" == typeof e ? l(e) : e;
            function n(e) {
                let n = t.subarray(0, e);
                return ((t = t.subarray(e + 1)), n);
            }
            function r() {
                var e;
                let r = t.indexOf(10);
                return (
                    r < 0 && (r = t.length),
                    JSON.parse(
                        ((e = n(r)),
                        a.O.__SENTRY__ && a.O.__SENTRY__.decodePolyfill
                            ? a.O.__SENTRY__.decodePolyfill(e)
                            : new TextDecoder().decode(e)),
                    )
                );
            }
            let i = r(),
                o = [];
            for (; t.length;) {
                let e = r(),
                    t = "number" == typeof e.length ? e.length : void 0;
                o.push([e, t ? n(t) : r()]);
            }
            return [i, o];
        },
        n2: function (e, t, n, i) {
            let a = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
            return {
                event_id: e.event_id,
                sent_at: new Date().toISOString(),
                ...(t && { sdk: t }),
                ...(!!n && i && { dsn: (0, r.SB)(i) }),
                ...(a && { trace: (0, o.Ce)({ ...a }) }),
            };
        },
        y5: function (e) {
            return [{ type: "span" }, e];
        },
        yH: s,
        zk: function (e) {
            return c[e];
        },
    },
);
